import { NextResponse } from "next/server"
import metrics from "@/ml_backend/models/metrics.json"
import realDataSummary from "@/ml_backend/data/real_data_summary.json"
import type { ModelCredibility, ModelMetrics } from "@/lib/types"

function buildWarnings(modelMetrics: ModelMetrics) {
  const warnings: string[] = []

  if (modelMetrics.flare_classifier.accuracy >= 0.999) {
    warnings.push("Flare classifier accuracy is near-perfect, so monitor for label leakage or overly easy separability.")
  }

  if ((modelMetrics.flare_classifier.feature_importance.Fpeak ?? 0) > 0.95) {
    warnings.push("Fpeak dominates the flare model, which means the classifier may rely heavily on one feature.")
  }

  warnings.push("Cable risk labels are formula-derived rather than observed outage outcomes, so field validation is still important.")
  warnings.push("The training pipeline can synthesize or augment data when real event coverage is thin, so confidence should be communicated with context.")

  return warnings
}

export async function GET() {
  const modelMetrics = metrics as ModelMetrics
  const summary = realDataSummary as {
    real_cable_count: number
    real_cme_count: number
    real_bz_count: number
    real_wind_speed_count: number
    real_kp_count: number
    storm_kp_count: number
  }

  const payload: ModelCredibility = {
    dataCoverage: {
      realCableCount: summary.real_cable_count,
      realCmeCount: summary.real_cme_count,
      realBzCount: summary.real_bz_count,
      realWindSpeedCount: summary.real_wind_speed_count,
      realKpCount: summary.real_kp_count,
      stormKpCount: summary.storm_kp_count,
    },
    warnings: buildWarnings(modelMetrics),
    strengths: [
      "Hybrid architecture combines flare severity, storm telemetry, and cable geography.",
      "Model analytics already expose feature importance, confusion matrix, and cross-validation scores.",
      "Historical scenario matching adds context instead of only showing a raw score.",
    ],
    recommendations: [
      "Validate on unseen storm periods and hold out entire event windows.",
      "Add uncertainty intervals or calibrated confidence for operational-facing decisions.",
      "Collect more observed infrastructure-impact labels where available.",
    ],
  }

  return NextResponse.json(payload)
}
