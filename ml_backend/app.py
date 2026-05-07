"""
FastAPI server for solar-flare and submarine-cable risk predictions.
"""

import json
import os
from typing import List, Optional

import joblib
import numpy as np
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

from risk_math import cable_score_from_probabilities, risk_category_from_score

MODELS_DIR = os.path.join(os.path.dirname(__file__), "models")

FLARE_FEATURES = ["Fpeak", "Fsoft", "Fhard", "Dflare", "Hratio"]
CABLE_FEATURES = ["Sf", "VCME", "Bz", "Vsw", "Kp", "Lat", "Lcable"]

app = FastAPI(
    title="Solar Flare Impact Prediction API",
    description="ML models for solar flare classification and submarine cable risk scoring",
    version="1.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

flare_model = None
flare_scaler = None
flare_le = None
cable_model = None
cable_regressor = None
cable_scaler = None
cable_le = None
metrics_data = None


def load_joblib(filename):
    return joblib.load(os.path.join(MODELS_DIR, filename))


def load_models():
    global flare_model, flare_scaler, flare_le
    global cable_model, cable_regressor, cable_scaler, cable_le, metrics_data

    try:
        flare_model = load_joblib("flare_classifier.joblib")
        flare_scaler = load_joblib("flare_scaler.joblib")
        flare_le = load_joblib("flare_label_encoder.joblib")
        print("  [OK] Flare classifier loaded")
    except Exception as exc:
        print(f"  [WARN] Flare classifier not loaded: {exc}")

    try:
        cable_model = load_joblib("cable_risk_model.joblib")
        cable_regressor = load_joblib("cable_risk_regressor.joblib")
        cable_scaler = load_joblib("cable_risk_scaler.joblib")
        cable_le = load_joblib("cable_risk_label_encoder.joblib")
        print("  [OK] Cable risk classifier/regressor loaded")
    except Exception as exc:
        print(f"  [WARN] Cable risk model not loaded: {exc}")

    try:
        with open(os.path.join(MODELS_DIR, "metrics.json"), "r", encoding="utf-8") as file:
            metrics_data = json.load(file)
        print("  [OK] Metrics loaded")
    except Exception as exc:
        print(f"  [WARN] Metrics not loaded: {exc}")


class FlareInput(BaseModel):
    Fpeak: float = Field(..., ge=-8.0, le=-2.0)
    Fsoft: float = Field(..., ge=-8.0, le=-2.0)
    Fhard: float = Field(..., ge=-8.0, le=-2.0)
    Dflare: float = Field(..., ge=1.0, le=24 * 60 * 60)
    Hratio: float = Field(..., ge=0.01, le=25.0)


class FlareResult(BaseModel):
    predicted_class: str
    severity_score: int
    confidence: float
    probabilities: dict


class CableRiskInput(BaseModel):
    Sf: float = Field(..., ge=1.0, le=3.0)
    VCME: float = Field(..., ge=250.0, le=3500.0)
    Bz: float = Field(..., ge=-60.0, le=60.0)
    Vsw: float = Field(..., ge=250.0, le=1200.0)
    Kp: float = Field(..., ge=0.0, le=9.0)
    Lat: float = Field(..., ge=-90.0, le=90.0)
    Lcable: float = Field(..., ge=1.0, le=20000.0)


class CableRiskResult(BaseModel):
    risk_category: str
    risk_score: float
    risk_probabilities: dict
    confidence: float


class BatchCableInput(BaseModel):
    cables: List[CableRiskInput]
    flare_class: Optional[str] = None


class BatchCableResult(BaseModel):
    results: List[dict]


def require_flare_model():
    if flare_model is None or flare_scaler is None or flare_le is None:
        raise HTTPException(status_code=503, detail="Flare model not loaded")


def require_cable_model():
    if cable_model is None or cable_regressor is None or cable_scaler is None or cable_le is None:
        raise HTTPException(status_code=503, detail="Cable risk model not loaded")


def flare_feature_array(input_data: FlareInput):
    return np.array([[getattr(input_data, feature) for feature in FLARE_FEATURES]])


def cable_feature_array(input_data: CableRiskInput):
    return np.array([[getattr(input_data, feature) for feature in CABLE_FEATURES]])


def predict_cable_outputs(input_data: CableRiskInput):
    features_scaled = cable_scaler.transform(cable_feature_array(input_data))
    probabilities = cable_model.predict_proba(features_scaled)[0]
    prob_dict = {str(cls): round(float(prob), 4) for cls, prob in zip(cable_le.classes_, probabilities)}

    risk_score = round(float(np.clip(cable_regressor.predict(features_scaled)[0], 0, 1)), 4)
    if not np.isfinite(risk_score):
        risk_score = round(cable_score_from_probabilities(prob_dict), 4)

    risk_category = risk_category_from_score(risk_score)
    confidence = round(float(prob_dict.get(risk_category, max(probabilities))), 4)

    return {
        "risk_category": risk_category,
        "risk_score": risk_score,
        "risk_probabilities": prob_dict,
        "confidence": confidence,
    }


@app.get("/health")
def health():
    return {
        "status": "ok",
        "models": {
            "flare_classifier": flare_model is not None,
            "cable_risk_classifier": cable_model is not None,
            "cable_risk_regressor": cable_regressor is not None,
        },
    }


@app.post("/predict/flare", response_model=FlareResult)
def predict_flare(input_data: FlareInput):
    require_flare_model()

    features_scaled = flare_scaler.transform(flare_feature_array(input_data))
    pred = flare_model.predict(features_scaled)[0]
    probabilities = flare_model.predict_proba(features_scaled)[0]

    predicted_class = str(flare_le.inverse_transform([pred])[0])
    prob_dict = {str(cls): round(float(prob), 4) for cls, prob in zip(flare_le.classes_, probabilities)}
    severity_map = {"C": 1, "M": 2, "X": 3}

    return FlareResult(
        predicted_class=predicted_class,
        severity_score=severity_map[predicted_class],
        confidence=round(float(max(probabilities)), 4),
        probabilities=prob_dict,
    )


@app.post("/predict/cable-risk", response_model=CableRiskResult)
def predict_cable_risk(input_data: CableRiskInput):
    require_cable_model()
    return CableRiskResult(**predict_cable_outputs(input_data))


@app.post("/predict/cable-risk/batch", response_model=BatchCableResult)
def predict_cable_risk_batch(input_data: BatchCableInput):
    require_cable_model()

    results = []
    for cable in input_data.cables:
        result = predict_cable_outputs(cable)
        result["lat"] = cable.Lat
        results.append(result)

    return BatchCableResult(results=results)


@app.get("/model/metrics")
def get_metrics():
    if metrics_data is None:
        raise HTTPException(status_code=404, detail="Metrics not available")
    return metrics_data


@app.on_event("startup")
def startup():
    print("\nLoading ML models...")
    load_models()
    print("Server ready.\n")


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
