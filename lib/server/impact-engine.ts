import { findHistoricalMatches } from "@/lib/data/historical-events"
import { CACHED_CABLES } from "@/lib/data/cables"
import {
  buildCableAggregates,
  buildCableSegments,
  buildImpactSummary,
  clamp,
  createRiskDrivers,
  directionalExposure,
  explanationHeadline,
  type DerivedSegment,
} from "@/lib/impact-utils"
import { buildSectorImpacts } from "@/lib/infrastructure-impacts"
import { calculateRealTimeRisk, calculateSimulationRisk, getRiskLevel } from "@/lib/risk-model"
import type {
  CableSegment,
  CableSegmentRisk,
  ImpactResponse,
  ScenarioContext,
  SimulationResponse,
  SpaceWeather,
} from "@/lib/types"
import { getHistoricalEvents } from "@/lib/server/history-events"
import { predictCableRiskBatch } from "@/lib/server/ml-client"

interface EngineScenario {
  source: "realtime" | "simulation"
  fetchedAt: string
  gScale: string
  kp: number
  bzNtl: number
  densityPcm3: number
  solarWindSpeedKms: number
  cmeSpeedKms: number
  flareSeverity: number
  directionLat?: number
  directionLon?: number
  startTime?: string
  predictedArrivalTime?: string
}

function toPseudoCable(segment: DerivedSegment): CableSegment {
  return {
    id: segment.id,
    name: `${segment.cableName} Segment ${segment.segmentIndex + 1}`,
    coordinates: segment.coordinates,
    lengthKm: segment.lengthKm,
    meanLat: segment.meanLat,
    meanLon: segment.meanLon,
    landingPoints: segment.landingPoints,
  }
}

function normalizeProbabilities(probabilities: Record<string, number> | undefined) {
  return {
    Low: probabilities?.Low ?? 0,
    Medium: probabilities?.Medium ?? 0,
    High: probabilities?.High ?? 0,
  }
}

function adjustScoreForDirection(baseScore: number, exposure?: number) {
  if (typeof exposure !== "number") return clamp(baseScore)
  return clamp(baseScore * (0.45 + exposure * 0.85))
}

function createSegmentRisk(
  segment: DerivedSegment,
  scenario: EngineScenario,
  riskScore: number,
  riskProbabilities?: Record<string, number>,
  confidence?: number,
  exposure?: number,
): CableSegmentRisk {
  const drivers = createRiskDrivers({
    kp: scenario.kp,
    bzNtl: scenario.bzNtl,
    cmeSpeedKms: scenario.cmeSpeedKms,
    solarWindSpeedKms: scenario.solarWindSpeedKms,
    meanLat: segment.meanLat,
    lengthKm: segment.lengthKm,
    directionalExposure: exposure,
  })

  return {
    cableId: segment.cableId,
    cableName: segment.cableName,
    segmentIndex: segment.segmentIndex,
    segmentLengthKm: segment.lengthKm,
    riskScore,
    riskLevel: getRiskLevel(riskScore),
    meanLat: segment.meanLat,
    meanLon: segment.meanLon,
    directionalExposure: exposure,
    modelConfidence: confidence,
    riskProbabilities: riskProbabilities ? normalizeProbabilities(riskProbabilities) : undefined,
    explanation: {
      headline: explanationHeadline(drivers, riskScore),
      drivers,
    },
    coordinates: segment.coordinates,
  }
}

async function predictSegmentsWithMl(segments: DerivedSegment[], scenario: EngineScenario) {
  const payload = {
    cables: segments.map((segment) => ({
      Sf: scenario.flareSeverity,
      VCME: scenario.cmeSpeedKms,
      Bz: scenario.bzNtl,
      Vsw: scenario.solarWindSpeedKms,
      Kp: scenario.kp,
      Lat: segment.meanLat,
      Lcable: segment.lengthKm,
    })),
  }

  const mlResponse = await predictCableRiskBatch(payload)
  return mlResponse.results as Array<{
    risk_category: string
    risk_score: number
    risk_probabilities?: Record<string, number>
    confidence?: number
  }>
}

function fallbackSegmentRisks(segments: DerivedSegment[], scenario: EngineScenario, weather?: SpaceWeather) {
  const pseudoCables = segments.map(toPseudoCable)

  if (scenario.source === "simulation") {
    return calculateSimulationRisk(pseudoCables, {
      cmeSpeedKms: scenario.cmeSpeedKms,
      directionLat: scenario.directionLat ?? 0,
      directionLon: scenario.directionLon ?? 0,
      syntheticKp: scenario.kp,
    })
  }

  return calculateRealTimeRisk(
    pseudoCables,
    weather ?? {
      fetchedAt: scenario.fetchedAt,
      solarWind: {
        speedKms: scenario.solarWindSpeedKms,
        densityPcm3: scenario.densityPcm3,
        bzNtl: scenario.bzNtl,
      },
      kp: {
        current: scenario.kp,
        lastUpdate: scenario.fetchedAt,
        scale: scenario.gScale as SpaceWeather["kp"]["scale"],
      },
    },
  )
}

async function buildImpactResponse(scenario: EngineScenario, weather?: SpaceWeather): Promise<ImpactResponse> {
  const segments = CACHED_CABLES.flatMap((cable) => buildCableSegments(cable))

  let segmentRisks: CableSegmentRisk[] = []
  let modelUsed = "xgboost-segmented"
  let fallbackUsed = false

  try {
    const results = await predictSegmentsWithMl(segments, scenario)

    segmentRisks = segments.map((segment, index) => {
      const result = results[index]
      const exposure =
        scenario.source === "simulation" && typeof scenario.directionLat === "number" && typeof scenario.directionLon === "number"
          ? directionalExposure(segment.meanLat, segment.meanLon, scenario.directionLat, scenario.directionLon)
          : undefined
      const adjustedScore = adjustScoreForDirection(result?.risk_score ?? 0, exposure)

      return createSegmentRisk(
        segment,
        scenario,
        adjustedScore,
        result?.risk_probabilities,
        result?.confidence,
        exposure,
      )
    })

    if (scenario.source === "simulation") {
      modelUsed = "xgboost-segmented-directional"
    }
  } catch (error) {
    console.error("ML backend unavailable, using fallback risk model:", error)
    fallbackUsed = true
    modelUsed = scenario.source === "simulation" ? "typescript-directional-fallback" : "typescript-realtime-fallback"

    const fallback = fallbackSegmentRisks(segments, scenario, weather)
    segmentRisks = segments.map((segment, index) => {
      const fallbackSegment = fallback[index]
      const exposure =
        scenario.source === "simulation" && typeof scenario.directionLat === "number" && typeof scenario.directionLon === "number"
          ? directionalExposure(segment.meanLat, segment.meanLon, scenario.directionLat, scenario.directionLon)
          : undefined

      return createSegmentRisk(segment, scenario, fallbackSegment.riskScore, undefined, undefined, exposure)
    })
  }

  const cableAggregates = buildCableAggregates(segmentRisks)
  const summary = buildImpactSummary(segmentRisks, cableAggregates)
  const sectorImpacts = buildSectorImpacts({
    kp: scenario.kp,
    flareSeverity: scenario.flareSeverity,
    cmeSpeedKms: scenario.cmeSpeedKms,
    solarWindSpeedKms: scenario.solarWindSpeedKms,
    densityPcm3: scenario.densityPcm3,
    bzNtl: scenario.bzNtl,
    cableAggregates,
  })
  summary.highRiskSystems = sectorImpacts.filter((impact) => impact.riskScore >= 0.4).length
  let matchedEvents = [] as ImpactResponse["matchedEvents"]

  try {
    const historicalEvents = await getHistoricalEvents(12)
    matchedEvents = findHistoricalMatches(
      historicalEvents,
      {
        flareSeverity: scenario.flareSeverity,
        kp: scenario.kp,
        cmeSpeedKms: scenario.cmeSpeedKms,
        bzNtl: scenario.bzNtl,
      },
      3,
    )
  } catch (error) {
    console.error("Historical event matching unavailable:", error)
  }

  const scenarioContext: ScenarioContext = {
    source: scenario.source,
    fetchedAt: scenario.fetchedAt,
    flareSeverity: scenario.flareSeverity,
    cmeSpeedKms: scenario.cmeSpeedKms,
    solarWindSpeedKms: scenario.solarWindSpeedKms,
    densityPcm3: scenario.densityPcm3,
    bzNtl: scenario.bzNtl,
    kp: scenario.kp,
    directionLat: scenario.directionLat,
    directionLon: scenario.directionLon,
    startTime: scenario.startTime,
    predictedArrivalTime: scenario.predictedArrivalTime,
  }

  return {
    updatedAt: new Date().toISOString(),
    globalKp: scenario.kp,
    gScale: scenario.gScale,
    segmentRisks,
    cableAggregates,
    sectorImpacts,
    matchedEvents,
    scenario: scenarioContext,
    summary,
    modelUsed,
    fallbackUsed,
  }
}

export async function buildRealtimeImpactResponse(weather: SpaceWeather) {
  const flareSeverity = weather.kp.current >= 7 ? 3 : weather.kp.current >= 4 ? 2 : 1

  return buildImpactResponse(
    {
      source: "realtime",
      fetchedAt: weather.fetchedAt,
      gScale: weather.kp.scale,
      kp: weather.kp.current,
      bzNtl: weather.solarWind.bzNtl,
      densityPcm3: weather.solarWind.densityPcm3,
      solarWindSpeedKms: weather.solarWind.speedKms,
      cmeSpeedKms: Math.max(weather.solarWind.speedKms * 1.2, 400),
      flareSeverity,
    },
    weather,
  )
}

export async function buildSimulationImpactResponse(params: {
  startTime: string
  cmeSpeedKms: number
  directionLon: number
  directionLat: number
}): Promise<SimulationResponse> {
  const distanceSunEarthKm = 1.496e8
  const transitSeconds = distanceSunEarthKm / params.cmeSpeedKms
  const arrivalTime = new Date(new Date(params.startTime).getTime() + transitSeconds * 1000)

  const baseKp = 1.5 + 7.5 * ((params.cmeSpeedKms - 400) / 2600)
  const syntheticKp = clamp(baseKp, 1, 9)

  let gScale = "G0"
  if (syntheticKp >= 5) gScale = "G1"
  if (syntheticKp >= 6) gScale = "G2"
  if (syntheticKp >= 7) gScale = "G3"
  if (syntheticKp >= 8) gScale = "G4"
  if (syntheticKp >= 9) gScale = "G5"

  const flareSeverity = syntheticKp >= 7 ? 3 : syntheticKp >= 4 ? 2 : 1
  const scenario = {
    source: "simulation" as const,
    fetchedAt: new Date().toISOString(),
    gScale,
    kp: syntheticKp,
    bzNtl: -(syntheticKp * 2.5),
    densityPcm3: 8 + syntheticKp,
    solarWindSpeedKms: 350 + params.cmeSpeedKms * 0.15,
    cmeSpeedKms: params.cmeSpeedKms,
    flareSeverity,
    directionLat: params.directionLat,
    directionLon: params.directionLon,
    startTime: params.startTime,
    predictedArrivalTime: arrivalTime.toISOString(),
  }

  const impact = await buildImpactResponse(scenario)

  return {
    ...impact,
    startTime: params.startTime,
    cmeSpeedKms: params.cmeSpeedKms,
    directionLat: params.directionLat,
    directionLon: params.directionLon,
    predictedArrivalTime: arrivalTime.toISOString(),
    syntheticKpPeak: syntheticKp,
  }
}
