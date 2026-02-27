export interface CableSegment {
  id: string
  name: string
  coordinates: [number, number][] // [lon, lat]
  lengthKm: number
  meanLat: number
  meanLon: number
  landingPoints: { name: string; lat: number; lon: number }[]
}

export interface SpaceWeather {
  fetchedAt: string
  solarWind: {
    speedKms: number
    densityPcm3: number
    bzNtl: number
  }
  kp: {
    current: number
    lastUpdate: string
    scale: "G0" | "G1" | "G2" | "G3" | "G4" | "G5"
  }
}

export interface CableSegmentRisk {
  cableId: string
  cableName: string
  segmentIndex: number
  riskScore: number // 0-1
  riskLevel: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL"
  meanLat: number
  meanLon: number
  coordinates: [number, number][]
}

export interface ImpactResponse {
  updatedAt: string
  globalKp: number
  gScale: string
  segmentRisks: CableSegmentRisk[]
  cableAggregates: {
    cableId: string
    cableName: string
    maxRisk: number
    meanRisk: number
    worstSegment: { lat: number; lon: number; riskScore: number }
  }[]
}

export interface SimulationParams {
  startTime: string
  cmeSpeedKms: number
  directionLon: number
  directionLat: number
}

export interface SimulationResponse extends ImpactResponse {
  startTime: string
  cmeSpeedKms: number
  directionLat: number
  directionLon: number
  predictedArrivalTime: string
  syntheticKpPeak: number
}

// ── ML Model Types ──────────────────────────────────────────

export interface FlareInput {
  Fpeak: number
  Fsoft: number
  Fhard: number
  Dflare: number
  Hratio: number
}

export interface FlareClassification {
  predicted_class: "C" | "M" | "X"
  severity_score: number
  confidence: number
  probabilities: { C: number; M: number; X: number }
}

export interface ModelComparisonRow {
  model: string
  accuracy: number
  precision: number
  recall: number
  f1: number
}

export interface SingleModelMetrics {
  model: string
  accuracy: number
  precision: number
  recall: number
  f1_score: number
  cv_accuracy_mean: number
  cv_accuracy_std: number
  confusion_matrix: number[][]
  class_names: string[]
  feature_importance: Record<string, number>
  comparison: ModelComparisonRow[]
}

export interface ModelMetrics {
  flare_classifier: SingleModelMetrics
  cable_risk_model: SingleModelMetrics
}
