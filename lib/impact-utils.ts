import type {
  CableAggregateRisk,
  CableSegment,
  CableSegmentRisk,
  ImpactSummary,
  RiskDriver,
} from "@/lib/types"

export interface DerivedSegment {
  id: string
  cableId: string
  cableName: string
  segmentIndex: number
  coordinates: [number, number][]
  meanLat: number
  meanLon: number
  lengthKm: number
  landingPoints: CableSegment["landingPoints"]
}

const AURORAL_LATITUDE = 60

export function clamp(value: number, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max)
}

export function haversineKm([lon1, lat1]: [number, number], [lon2, lat2]: [number, number]) {
  const toRad = (deg: number) => (deg * Math.PI) / 180
  const earthRadiusKm = 6371
  const dLat = toRad(lat2 - lat1)
  const dLon = toRad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return earthRadiusKm * c
}

export function angularDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const toRad = (deg: number) => (deg * Math.PI) / 180
  const dLat = toRad(lat2 - lat1)
  const dLon = toRad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return (c * 180) / Math.PI
}

export function estimateLengthKm(coordinates: [number, number][]) {
  let total = 0
  for (let index = 0; index < coordinates.length - 1; index += 1) {
    total += haversineKm(coordinates[index], coordinates[index + 1])
  }
  return Math.max(total, 50)
}

function meanCoordinate(coordinates: [number, number][]) {
  const totals = coordinates.reduce(
    (acc, [lon, lat]) => {
      acc.lon += lon
      acc.lat += lat
      return acc
    },
    { lon: 0, lat: 0 },
  )

  return {
    meanLon: totals.lon / coordinates.length,
    meanLat: totals.lat / coordinates.length,
  }
}

function targetSegmentCount(coordinateCount: number, maxSegments: number) {
  if (coordinateCount <= 2) return 1
  return Math.min(maxSegments, Math.max(1, Math.ceil((coordinateCount - 1) / 20)))
}

export function buildCableSegments(cable: CableSegment, maxSegments = 6): DerivedSegment[] {
  const coordinates = cable.coordinates
  if (coordinates.length <= 2) {
    return [
      {
        id: `${cable.id}:0`,
        cableId: cable.id,
        cableName: cable.name,
        segmentIndex: 0,
        coordinates,
        meanLat: cable.meanLat,
        meanLon: cable.meanLon,
        lengthKm: cable.lengthKm || estimateLengthKm(coordinates),
        landingPoints: cable.landingPoints,
      },
    ]
  }

  const segmentCount = targetSegmentCount(coordinates.length, maxSegments)
  const edgeCount = coordinates.length - 1
  const edgeWindow = Math.ceil(edgeCount / segmentCount)
  const segments: DerivedSegment[] = []

  for (let startEdge = 0, segmentIndex = 0; startEdge < edgeCount; startEdge += edgeWindow, segmentIndex += 1) {
    const endEdge = Math.min(edgeCount, startEdge + edgeWindow)
    const segmentCoords = coordinates.slice(startEdge, endEdge + 1)
    const { meanLat, meanLon } = meanCoordinate(segmentCoords)

    segments.push({
      id: `${cable.id}:${segmentIndex}`,
      cableId: cable.id,
      cableName: cable.name,
      segmentIndex,
      coordinates: segmentCoords,
      meanLat,
      meanLon,
      lengthKm: estimateLengthKm(segmentCoords),
      landingPoints: cable.landingPoints,
    })
  }

  return segments
}

export function directionalExposure(segmentLat: number, segmentLon: number, impactLat: number, impactLon: number) {
  const angle = angularDistance(segmentLat, segmentLon, impactLat, impactLon)
  return clamp(Math.exp(-(angle * angle) / (2 * 38 * 38)))
}

export function auroralExposure(latitude: number) {
  return clamp(1 - Math.abs(Math.abs(latitude) - AURORAL_LATITUDE) / 55)
}

export function createRiskDrivers(input: {
  kp: number
  bzNtl: number
  cmeSpeedKms: number
  solarWindSpeedKms: number
  meanLat: number
  lengthKm: number
  directionalExposure?: number
}): RiskDriver[] {
  const southwardBz = Math.max(0, -input.bzNtl)
  const driverList: RiskDriver[] = [
    {
      key: "kp",
      label: "Storm Index",
      value: clamp(input.kp / 9),
      displayValue: `Kp ${input.kp.toFixed(1)}`,
      rationale: "Higher Kp indicates a stronger geomagnetic storm.",
    },
    {
      key: "bz",
      label: "Southward Bz",
      value: clamp(southwardBz / 25),
      displayValue: `${input.bzNtl.toFixed(1)} nT`,
      rationale: "More negative Bz couples more efficiently into the magnetosphere.",
    },
    {
      key: "latitude",
      label: "Auroral Latitude",
      value: auroralExposure(input.meanLat),
      displayValue: `${Math.abs(input.meanLat).toFixed(1)} deg`,
      rationale: "High-latitude routes sit closer to auroral electrojet activity.",
    },
    {
      key: "length",
      label: "Segment Length",
      value: clamp(input.lengthKm / 2500),
      displayValue: `${input.lengthKm.toFixed(0)} km`,
      rationale: "Longer conductive paths accumulate more induced stress.",
    },
    {
      key: "speed",
      label: "CME Speed",
      value: clamp((input.cmeSpeedKms - 300) / 2400),
      displayValue: `${input.cmeSpeedKms.toFixed(0)} km/s`,
      rationale: "Faster eruptions usually produce stronger shock and compression effects.",
    },
    {
      key: "solar-wind",
      label: "Solar Wind",
      value: clamp((input.solarWindSpeedKms - 250) / 650),
      displayValue: `${input.solarWindSpeedKms.toFixed(0)} km/s`,
      rationale: "Elevated solar wind speed increases the induced field proxy.",
    },
  ]

  if (typeof input.directionalExposure === "number") {
    driverList.push({
      key: "direction",
      label: "Impact Alignment",
      value: clamp(input.directionalExposure),
      displayValue: `${Math.round(input.directionalExposure * 100)}% aligned`,
      rationale: "Segments nearer the simulated impact footprint are weighted more heavily.",
    })
  }

  return driverList.sort((a, b) => b.value - a.value).slice(0, 4)
}

export function explanationHeadline(drivers: RiskDriver[], riskScore: number) {
  const [primary, secondary] = drivers
  const riskTone =
    riskScore >= 0.7 ? "critical" : riskScore >= 0.4 ? "elevated" : riskScore >= 0.2 ? "watch" : "low"

  if (primary && secondary) {
    return `${primary.label} and ${secondary.label} are the main reasons this segment is at ${riskTone} risk.`
  }

  if (primary) {
    return `${primary.label} is the main reason this segment is at ${riskTone} risk.`
  }

  return `Current storm conditions place this segment at ${riskTone} risk.`
}

export function buildCableAggregates(segmentRisks: CableSegmentRisk[]): CableAggregateRisk[] {
  const byCable = new Map<string, CableSegmentRisk[]>()

  segmentRisks.forEach((segment) => {
    const list = byCable.get(segment.cableId) ?? []
    list.push(segment)
    byCable.set(segment.cableId, list)
  })

  return [...byCable.entries()]
    .map(([cableId, segments]) => {
      const sorted = [...segments].sort((a, b) => b.riskScore - a.riskScore)
      const worst = sorted[0]
      const meanRisk = segments.reduce((sum, segment) => sum + segment.riskScore, 0) / segments.length

      return {
        cableId,
        cableName: worst.cableName,
        maxRisk: worst.riskScore,
        meanRisk,
        hotspotCount: segments.filter((segment) => segment.riskScore >= 0.4).length,
        topDrivers: worst.explanation?.drivers ?? [],
        worstSegment: {
          lat: worst.meanLat,
          lon: worst.meanLon,
          riskScore: worst.riskScore,
          segmentIndex: worst.segmentIndex,
        },
      }
    })
    .sort((a, b) => b.maxRisk - a.maxRisk)
}

export function buildImpactSummary(segmentRisks: CableSegmentRisk[], cableAggregates: CableAggregateRisk[]): ImpactSummary {
  const highRiskSegments = segmentRisks.filter((segment) => segment.riskScore >= 0.4).length

  return {
    totalSegments: segmentRisks.length,
    impactedSegments: segmentRisks.filter((segment) => segment.riskScore >= 0.2).length,
    highRiskSegments,
    watchedCableAlerts: 0,
    highRiskCables: cableAggregates.filter((cable) => cable.maxRisk >= 0.4).length,
  }
}
