export type RiskLevel = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL"

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

export interface RiskDriver {
  key: string
  label: string
  value: number
  displayValue: string
  rationale: string
}

export interface SegmentExplanation {
  headline: string
  drivers: RiskDriver[]
}

export interface HistoricalReplayPreset {
  label: string
  startTime: string
  cmeSpeedKms: number
  directionLon: number
  directionLat: number
}

export interface HistoricalEvent {
  id: string
  name: string
  date: string
  flareClass: "C" | "M" | "X"
  peakKp: number
  cmeSpeedKms: number
  bzNtl: number
  bzIsEstimated?: boolean
  severity: "Moderate" | "Strong" | "Severe" | "Extreme"
  dataSource?: string
  sourceLocation?: string
  activeRegionNum?: number | null
  link?: string
  regions: string[]
  affectedSystems?: string[]
  description: string
  impacts: string[]
  replay: HistoricalReplayPreset
}

export interface HistoricalMatch {
  eventId: string
  name: string
  date: string
  flareClass: "C" | "M" | "X"
  severity: HistoricalEvent["severity"]
  peakKp: number
  cmeSpeedKms: number
  similarity: number
  matchReason: string
}

export interface CableSegmentRisk {
  cableId: string
  cableName: string
  segmentIndex: number
  segmentLengthKm: number
  riskScore: number
  riskLevel: RiskLevel
  meanLat: number
  meanLon: number
  directionalExposure?: number
  modelConfidence?: number
  riskProbabilities?: { Low: number; Medium: number; High: number }
  explanation?: SegmentExplanation
  coordinates: [number, number][]
}

export interface CableAggregateRisk {
  cableId: string
  cableName: string
  maxRisk: number
  meanRisk: number
  hotspotCount: number
  topDrivers: RiskDriver[]
  worstSegment: {
    lat: number
    lon: number
    riskScore: number
    segmentIndex: number
  }
}

export interface ImpactSummary {
  totalSegments: number
  impactedSegments: number
  highRiskSegments: number
  watchedCableAlerts: number
  highRiskCables: number
  highRiskSystems?: number
}

export interface SectorImpact {
  id:
    | "submarine-cables"
    | "power-grids"
    | "satellites"
    | "gnss"
    | "hf-radio"
    | "aviation"
    | "pipelines"
    | "auroral-activity"
  label: string
  riskScore: number
  riskLevel: RiskLevel
  status: string
  whyAffected: string
  likelyEffects: string[]
  mitigationHint: string
}

export interface ScenarioContext {
  source: "realtime" | "simulation"
  fetchedAt: string
  flareSeverity: number
  cmeSpeedKms: number
  solarWindSpeedKms: number
  densityPcm3?: number
  bzNtl: number
  kp: number
  directionLat?: number
  directionLon?: number
  startTime?: string
  predictedArrivalTime?: string
}

export interface ImpactResponse {
  updatedAt: string
  globalKp: number
  gScale: string
  segmentRisks: CableSegmentRisk[]
  cableAggregates: CableAggregateRisk[]
  sectorImpacts: SectorImpact[]
  matchedEvents: HistoricalMatch[]
  scenario: ScenarioContext
  summary: ImpactSummary
  modelUsed: string
  fallbackUsed?: boolean
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

export interface ModelCredibility {
  dataCoverage: {
    realCableCount: number
    realCmeCount: number
    realBzCount: number
    realWindSpeedCount: number
    realKpCount: number
    stormKpCount: number
  }
  warnings: string[]
  strengths: string[]
  recommendations: string[]
}

export interface WatchlistItem {
  cableId: string
  threshold: number
}
