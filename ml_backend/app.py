"""
FastAPI Server for Solar Flare & Cable Risk ML Predictions
============================================================
Serves the trained Gradient Boosting and XGBoost models via REST API.
"""

import os
import json
import numpy as np
import joblib
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI(
    title="Solar Flare Impact Prediction API",
    description="Hybrid ML models for solar flare classification and submarine cable risk prediction",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── Load Models ──────────────────────────────────────────────
MODELS_DIR = os.path.join(os.path.dirname(__file__), "models")

flare_model = None
flare_scaler = None
flare_le = None
cable_model = None
cable_scaler = None
cable_le = None
metrics_data = None


def load_models():
    global flare_model, flare_scaler, flare_le
    global cable_model, cable_scaler, cable_le, metrics_data

    try:
        flare_model = joblib.load(os.path.join(MODELS_DIR, "flare_classifier.joblib"))
        flare_scaler = joblib.load(os.path.join(MODELS_DIR, "flare_scaler.joblib"))
        flare_le = joblib.load(os.path.join(MODELS_DIR, "flare_label_encoder.joblib"))
        print("  ✓ Flare classifier loaded")
    except Exception as e:
        print(f"  ✗ Flare classifier not found: {e}")

    try:
        cable_model = joblib.load(os.path.join(MODELS_DIR, "cable_risk_model.joblib"))
        cable_scaler = joblib.load(os.path.join(MODELS_DIR, "cable_risk_scaler.joblib"))
        cable_le = joblib.load(os.path.join(MODELS_DIR, "cable_risk_label_encoder.joblib"))
        print("  ✓ Cable risk model loaded")
    except Exception as e:
        print(f"  ✗ Cable risk model not found: {e}")

    try:
        with open(os.path.join(MODELS_DIR, "metrics.json"), "r") as f:
            metrics_data = json.load(f)
        print("  ✓ Metrics loaded")
    except Exception as e:
        print(f"  ✗ Metrics not found: {e}")


# ── Request/Response Models ──────────────────────────────────

class FlareInput(BaseModel):
    Fpeak: float   # Log10 of peak X-ray flux
    Fsoft: float   # Log10 of soft X-ray flux
    Fhard: float   # Log10 of hard X-ray flux
    Dflare: float  # Flare duration (seconds)
    Hratio: float  # Hardness ratio


class FlareResult(BaseModel):
    predicted_class: str        # C, M, or X
    severity_score: int         # 1, 2, or 3
    confidence: float           # Probability of predicted class
    probabilities: dict         # {C: p, M: p, X: p}


class CableRiskInput(BaseModel):
    Sf: float        # Flare severity (1=C, 2=M, 3=X)
    VCME: float      # CME speed km/s
    Bz: float        # Southward Bz component (nT)
    Vsw: float       # Solar wind speed km/s
    Kp: float        # Kp index
    Lat: float       # Cable latitude
    Lcable: float    # Cable length km


class CableRiskResult(BaseModel):
    risk_category: str      # Low, Medium, High
    risk_probabilities: dict
    confidence: float


class BatchCableInput(BaseModel):
    cables: List[CableRiskInput]
    flare_class: Optional[str] = None


class BatchCableResult(BaseModel):
    results: List[dict]


# ── Endpoints ────────────────────────────────────────────────

@app.get("/health")
def health():
    return {
        "status": "ok",
        "models": {
            "flare_classifier": flare_model is not None,
            "cable_risk_model": cable_model is not None,
        }
    }


@app.post("/predict/flare", response_model=FlareResult)
def predict_flare(input_data: FlareInput):
    if flare_model is None:
        raise HTTPException(status_code=503, detail="Flare model not loaded")

    features = np.array([[
        input_data.Fpeak, input_data.Fsoft, input_data.Fhard,
        input_data.Dflare, input_data.Hratio
    ]])

    features_scaled = flare_scaler.transform(features)
    pred = flare_model.predict(features_scaled)[0]
    proba = flare_model.predict_proba(features_scaled)[0]

    predicted_class = flare_le.inverse_transform([pred])[0]
    severity_map = {"C": 1, "M": 2, "X": 3}

    prob_dict = {cls: round(float(p), 4) for cls, p in zip(flare_le.classes_, proba)}

    return FlareResult(
        predicted_class=predicted_class,
        severity_score=severity_map.get(predicted_class, 1),
        confidence=round(float(max(proba)), 4),
        probabilities=prob_dict,
    )


@app.post("/predict/cable-risk", response_model=CableRiskResult)
def predict_cable_risk(input_data: CableRiskInput):
    if cable_model is None:
        raise HTTPException(status_code=503, detail="Cable risk model not loaded")

    features = np.array([[
        input_data.Sf, input_data.VCME, input_data.Bz,
        input_data.Vsw, input_data.Kp, input_data.Lat, input_data.Lcable
    ]])

    features_scaled = cable_scaler.transform(features)
    pred = cable_model.predict(features_scaled)[0]
    proba = cable_model.predict_proba(features_scaled)[0]

    predicted_category = cable_le.inverse_transform([pred])[0]
    prob_dict = {cls: round(float(p), 4) for cls, p in zip(cable_le.classes_, proba)}

    return CableRiskResult(
        risk_category=predicted_category,
        risk_probabilities=prob_dict,
        confidence=round(float(max(proba)), 4),
    )


@app.post("/predict/cable-risk/batch", response_model=BatchCableResult)
def predict_cable_risk_batch(input_data: BatchCableInput):
    if cable_model is None:
        raise HTTPException(status_code=503, detail="Cable risk model not loaded")

    results = []
    for cable in input_data.cables:
        features = np.array([[
            cable.Sf, cable.VCME, cable.Bz,
            cable.Vsw, cable.Kp, cable.Lat, cable.Lcable
        ]])
        features_scaled = cable_scaler.transform(features)
        pred = cable_model.predict(features_scaled)[0]
        proba = cable_model.predict_proba(features_scaled)[0]

        predicted_category = cable_le.inverse_transform([pred])[0]
        prob_dict = {cls: round(float(p), 4) for cls, p in zip(cable_le.classes_, proba)}

        # Compute continuous risk score from probabilities
        # Map: Low=0.17, Medium=0.5, High=0.83
        risk_score = prob_dict.get("Low", 0) * 0.17 + prob_dict.get("Medium", 0) * 0.5 + prob_dict.get("High", 0) * 0.83

        results.append({
            "risk_category": predicted_category,
            "risk_score": round(risk_score, 4),
            "risk_probabilities": prob_dict,
            "confidence": round(float(max(proba)), 4),
            "lat": cable.Lat,
        })

    return BatchCableResult(results=results)


@app.get("/model/metrics")
def get_metrics():
    if metrics_data is None:
        raise HTTPException(status_code=404, detail="Metrics not available")
    return metrics_data


# ── Startup ──────────────────────────────────────────────────

@app.on_event("startup")
def startup():
    print("\n🚀 Loading ML models...")
    load_models()
    print("🟢 Server ready!\n")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
