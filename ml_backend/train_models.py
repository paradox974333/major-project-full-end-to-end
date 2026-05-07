"""
Training pipeline for the solar-flare and cable-risk ML models.

The project uses ML as an educational layer over explicit proxy equations. This
script keeps preprocessing inside the train/test split and cross-validation
folds, saves reproducible artifacts, and records honest comparison metrics.
"""

import json
import os

import joblib
import numpy as np
import pandas as pd
from sklearn.ensemble import GradientBoostingClassifier, RandomForestClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import (
    accuracy_score,
    confusion_matrix,
    f1_score,
    mean_absolute_error,
    mean_squared_error,
    precision_score,
    r2_score,
    recall_score,
)
from sklearn.model_selection import KFold, StratifiedKFold, cross_val_score, train_test_split
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import LabelEncoder, MinMaxScaler
from sklearn.tree import DecisionTreeClassifier
from xgboost import XGBClassifier, XGBRegressor

from generate_data import generate_cable_risk_data, generate_solar_flare_data
from risk_math import (
    LOW_MEDIUM_THRESHOLD,
    MEDIUM_HIGH_THRESHOLD,
    cable_risk_score,
    risk_category_from_score,
)

RANDOM_STATE = 42

FLARE_FEATURES = ["Fpeak", "Fsoft", "Fhard", "Dflare", "Hratio"]
CABLE_FEATURES = ["Sf", "VCME", "Bz", "Vsw", "Kp", "Lat", "Lcable"]


def classification_metrics(y_true, y_pred):
    return {
        "accuracy": round(accuracy_score(y_true, y_pred), 4),
        "precision": round(precision_score(y_true, y_pred, average="weighted", zero_division=0), 4),
        "recall": round(recall_score(y_true, y_pred, average="weighted", zero_division=0), 4),
        "f1_score": round(f1_score(y_true, y_pred, average="weighted", zero_division=0), 4),
    }


def comparison_row(model_name, y_true, y_pred):
    metrics = classification_metrics(y_true, y_pred)
    return {
        "model": model_name,
        "accuracy": metrics["accuracy"],
        "precision": metrics["precision"],
        "recall": metrics["recall"],
        "f1": metrics["f1_score"],
    }


def evaluate_classifier_comparison(models, x_train, x_test, y_train, y_test):
    rows = []
    for name, estimator in models:
        pipeline = make_pipeline(MinMaxScaler(), estimator)
        pipeline.fit(x_train, y_train)
        rows.append(comparison_row(name, y_test, pipeline.predict(x_test)))
    return rows


def load_flare_data():
    path = "data/solar_flare_data.csv"
    if os.path.exists(path):
        df = pd.read_csv(path)
    else:
        df = generate_solar_flare_data(3000)
        os.makedirs("data", exist_ok=True)
        df.to_csv(path, index=False)

    df = df[df["flare_class"].isin(["C", "M", "X"])].copy()
    df = df.dropna(subset=FLARE_FEATURES + ["flare_class"])
    return df


def load_cable_data():
    path = "data/cable_risk_data.csv"
    if os.path.exists(path):
        df = pd.read_csv(path)
    else:
        df = generate_cable_risk_data(5000)
        os.makedirs("data", exist_ok=True)

    df = df.dropna(subset=CABLE_FEATURES).copy()
    df["risk_score"] = [
        cable_risk_score(row.Sf, row.VCME, row.Bz, row.Vsw, row.Kp, row.Lat, row.Lcable)
        for row in df.itertuples(index=False)
    ]
    df["risk_category"] = [risk_category_from_score(score) for score in df["risk_score"]]
    df.to_csv(path, index=False)
    return df


def train_flare_classifier():
    print("=" * 60)
    print("STAGE 1: Solar Flare Classification")
    print("=" * 60)

    df = load_flare_data()
    x = df[FLARE_FEATURES].values
    y = df["flare_class"].values

    label_encoder = LabelEncoder()
    y_encoded = label_encoder.fit_transform(y)

    x_train, x_test, y_train, y_test = train_test_split(
        x,
        y_encoded,
        test_size=0.2,
        random_state=RANDOM_STATE,
        stratify=y_encoded,
    )

    scaler = MinMaxScaler()
    x_train_scaled = scaler.fit_transform(x_train)
    x_test_scaled = scaler.transform(x_test)

    model = GradientBoostingClassifier(
        n_estimators=200,
        learning_rate=0.1,
        max_depth=5,
        min_samples_split=10,
        min_samples_leaf=5,
        subsample=0.8,
        random_state=RANDOM_STATE,
    )
    model.fit(x_train_scaled, y_train)

    y_pred = model.predict(x_test_scaled)
    metrics = classification_metrics(y_test, y_pred)
    cm = confusion_matrix(y_test, y_pred)

    cv_model = GradientBoostingClassifier(
        n_estimators=200,
        learning_rate=0.1,
        max_depth=5,
        min_samples_split=10,
        min_samples_leaf=5,
        subsample=0.8,
        random_state=RANDOM_STATE,
    )
    cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=RANDOM_STATE)
    cv_scores = cross_val_score(make_pipeline(MinMaxScaler(), cv_model), x, y_encoded, cv=cv, scoring="accuracy")

    comparisons = evaluate_classifier_comparison(
        [
            ("Decision Tree", DecisionTreeClassifier(max_depth=8, random_state=RANDOM_STATE)),
            ("Random Forest", RandomForestClassifier(n_estimators=200, random_state=RANDOM_STATE)),
            (
                "Gradient Boosting (Proposed)",
                GradientBoostingClassifier(
                    n_estimators=200,
                    learning_rate=0.1,
                    max_depth=5,
                    min_samples_split=10,
                    min_samples_leaf=5,
                    subsample=0.8,
                    random_state=RANDOM_STATE,
                ),
            ),
        ],
        x_train,
        x_test,
        y_train,
        y_test,
    )

    importances = dict(zip(FLARE_FEATURES, model.feature_importances_.tolist()))

    os.makedirs("models", exist_ok=True)
    joblib.dump(model, "models/flare_classifier.joblib")
    joblib.dump(scaler, "models/flare_scaler.joblib")
    joblib.dump(label_encoder, "models/flare_label_encoder.joblib")

    print(f"\n  Accuracy:  {metrics['accuracy']:.4f}")
    print(f"  Precision: {metrics['precision']:.4f}")
    print(f"  Recall:    {metrics['recall']:.4f}")
    print(f"  F1-Score:  {metrics['f1_score']:.4f}")
    print("\n  Confusion Matrix:")
    print(f"  {cm}")
    print(f"\n  5-Fold CV Accuracy: {cv_scores.mean():.4f} +/- {cv_scores.std():.4f}")
    print(f"\n  Feature Importance: {importances}")
    print("\n  [OK] Flare classifier saved")

    return {
        "model": "Gradient Boosting",
        **metrics,
        "cv_accuracy_mean": round(float(cv_scores.mean()), 4),
        "cv_accuracy_std": round(float(cv_scores.std()), 4),
        "confusion_matrix": cm.tolist(),
        "class_names": label_encoder.classes_.tolist(),
        "feature_importance": importances,
        "comparison": comparisons,
    }


def train_cable_risk_model():
    print("\n" + "=" * 60)
    print("STAGE 2: Cable Risk Classification + Regression")
    print("=" * 60)

    df = load_cable_data()
    x = df[CABLE_FEATURES].values

    label_encoder = LabelEncoder()
    y_class = label_encoder.fit_transform(df["risk_category"].values)
    y_score = df["risk_score"].values

    x_train, x_test, y_class_train, y_class_test, y_score_train, y_score_test = train_test_split(
        x,
        y_class,
        y_score,
        test_size=0.2,
        random_state=RANDOM_STATE,
        stratify=y_class,
    )

    scaler = MinMaxScaler()
    x_train_scaled = scaler.fit_transform(x_train)
    x_test_scaled = scaler.transform(x_test)

    classifier = XGBClassifier(
        n_estimators=300,
        learning_rate=0.08,
        max_depth=5,
        min_child_weight=3,
        subsample=0.85,
        colsample_bytree=0.85,
        reg_alpha=0.1,
        reg_lambda=1.0,
        gamma=0.1,
        objective="multi:softprob",
        num_class=3,
        random_state=RANDOM_STATE,
        eval_metric="mlogloss",
    )
    classifier.fit(x_train_scaled, y_class_train)

    regressor = XGBRegressor(
        n_estimators=350,
        learning_rate=0.06,
        max_depth=5,
        min_child_weight=3,
        subsample=0.85,
        colsample_bytree=0.85,
        reg_alpha=0.05,
        reg_lambda=1.0,
        objective="reg:squarederror",
        random_state=RANDOM_STATE,
        eval_metric="rmse",
    )
    regressor.fit(x_train_scaled, y_score_train)

    y_class_pred = classifier.predict(x_test_scaled)
    score_pred = np.clip(regressor.predict(x_test_scaled), 0, 1)

    metrics = classification_metrics(y_class_test, y_class_pred)
    cm = confusion_matrix(y_class_test, y_class_pred)
    mae = mean_absolute_error(y_score_test, score_pred)
    rmse = float(np.sqrt(mean_squared_error(y_score_test, score_pred)))
    r2 = r2_score(y_score_test, score_pred)

    cv_classifier = XGBClassifier(
        n_estimators=250,
        learning_rate=0.08,
        max_depth=5,
        min_child_weight=3,
        subsample=0.85,
        colsample_bytree=0.85,
        reg_alpha=0.1,
        reg_lambda=1.0,
        gamma=0.1,
        objective="multi:softprob",
        num_class=3,
        random_state=RANDOM_STATE,
        eval_metric="mlogloss",
    )
    cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=RANDOM_STATE)
    cv_scores = cross_val_score(make_pipeline(MinMaxScaler(), cv_classifier), x, y_class, cv=cv, scoring="accuracy")

    reg_cv_model = XGBRegressor(
        n_estimators=250,
        learning_rate=0.06,
        max_depth=5,
        min_child_weight=3,
        subsample=0.85,
        colsample_bytree=0.85,
        reg_alpha=0.05,
        reg_lambda=1.0,
        objective="reg:squarederror",
        random_state=RANDOM_STATE,
        eval_metric="rmse",
    )
    reg_cv = KFold(n_splits=5, shuffle=True, random_state=RANDOM_STATE)
    reg_r2_scores = cross_val_score(make_pipeline(MinMaxScaler(), reg_cv_model), x, y_score, cv=reg_cv, scoring="r2")

    comparisons = evaluate_classifier_comparison(
        [
            (
                "Logistic Regression",
                LogisticRegression(max_iter=1000, random_state=RANDOM_STATE),
            ),
            ("Random Forest", RandomForestClassifier(n_estimators=250, random_state=RANDOM_STATE)),
            (
                "XGBoost (Proposed)",
                XGBClassifier(
                    n_estimators=300,
                    learning_rate=0.08,
                    max_depth=5,
                    min_child_weight=3,
                    subsample=0.85,
                    colsample_bytree=0.85,
                    reg_alpha=0.1,
                    reg_lambda=1.0,
                    gamma=0.1,
                    objective="multi:softprob",
                    num_class=3,
                    random_state=RANDOM_STATE,
                    eval_metric="mlogloss",
                ),
            ),
        ],
        x_train,
        x_test,
        y_class_train,
        y_class_test,
    )

    classifier_importances = dict(zip(CABLE_FEATURES, classifier.feature_importances_.tolist()))
    regressor_importances = dict(zip(CABLE_FEATURES, regressor.feature_importances_.tolist()))

    joblib.dump(classifier, "models/cable_risk_model.joblib")
    joblib.dump(regressor, "models/cable_risk_regressor.joblib")
    joblib.dump(scaler, "models/cable_risk_scaler.joblib")
    joblib.dump(label_encoder, "models/cable_risk_label_encoder.joblib")

    print(f"\n  Accuracy:  {metrics['accuracy']:.4f}")
    print(f"  Precision: {metrics['precision']:.4f}")
    print(f"  Recall:    {metrics['recall']:.4f}")
    print(f"  F1-Score:  {metrics['f1_score']:.4f}")
    print(f"  MAE:       {mae:.4f}")
    print(f"  RMSE:      {rmse:.4f}")
    print(f"  R2:        {r2:.4f}")
    print("\n  Confusion Matrix:")
    print(f"  {cm}")
    print(f"\n  5-Fold CV Accuracy: {cv_scores.mean():.4f} +/- {cv_scores.std():.4f}")
    print(f"  5-Fold CV R2:       {reg_r2_scores.mean():.4f} +/- {reg_r2_scores.std():.4f}")
    print(f"\n  Feature Importance: {classifier_importances}")
    print("\n  [OK] Cable risk classifier and regressor saved")

    return {
        "model": "XGBoost (Hybrid classifier + regressor)",
        **metrics,
        "cv_accuracy_mean": round(float(cv_scores.mean()), 4),
        "cv_accuracy_std": round(float(cv_scores.std()), 4),
        "confusion_matrix": cm.tolist(),
        "class_names": label_encoder.classes_.tolist(),
        "feature_importance": classifier_importances,
        "regression": {
            "mae": round(float(mae), 4),
            "rmse": round(float(rmse), 4),
            "r2": round(float(r2), 4),
            "cv_r2_mean": round(float(reg_r2_scores.mean()), 4),
            "cv_r2_std": round(float(reg_r2_scores.std()), 4),
        },
        "regression_feature_importance": regressor_importances,
        "risk_thresholds": {
            "low_medium": LOW_MEDIUM_THRESHOLD,
            "medium_high": MEDIUM_HIGH_THRESHOLD,
        },
        "comparison": comparisons,
    }


if __name__ == "__main__":
    os.makedirs("data", exist_ok=True)
    os.makedirs("models", exist_ok=True)

    flare_metrics = train_flare_classifier()
    cable_metrics = train_cable_risk_model()

    all_metrics = {
        "flare_classifier": flare_metrics,
        "cable_risk_model": cable_metrics,
    }
    with open("models/metrics.json", "w") as f:
        json.dump(all_metrics, f, indent=2)

    print("\n" + "=" * 60)
    print("ALL MODELS TRAINED SUCCESSFULLY")
    print("=" * 60)
    print(f"  Flare Classifier Accuracy: {flare_metrics['accuracy']}")
    print(f"  Cable Risk Accuracy:       {cable_metrics['accuracy']}")
    print(f"  Cable Risk RMSE:           {cable_metrics['regression']['rmse']}")
    print("  Metrics saved to: models/metrics.json")
