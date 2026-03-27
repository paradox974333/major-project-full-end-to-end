import type { CableSegment, CableSegmentRisk, RiskLevel, SpaceWeather } from "./types"

// Helper to map risk score to level
export function getRiskLevel(score: number): RiskLevel {
  if (score >= 0.7) return "CRITICAL"
  if (score >= 0.4) return "HIGH"
  if (score >= 0.2) return "MEDIUM"
  return "LOW"
}

// Helper to calculate distance between two points (Haversine approximation or simple spherical)
function angularDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const toRad = (d: number) => (d * Math.PI) / 180
  const dLat = toRad(lat2 - lat1)
  const dLon = toRad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return (c * 180) / Math.PI // degrees
}

export function calculateRealTimeRisk(cables: CableSegment[], weather: SpaceWeather): CableSegmentRisk[] {
  const { kp } = weather
  const { speedKms, densityPcm3, bzNtl } = weather.solarWind

  // 1. Coupling Proxy (Simplified)
  // Southward Bz (negative) increases coupling. High speed + high density increases pressure.
  const bzFactor = bzNtl < 0 ? Math.abs(bzNtl) : 0
  const coupling = bzFactor * speedKms * Math.sqrt(densityPcm3)

  // Normalize coupling roughly (e.g., typical storm might be 5 * 400 * sqrt(5) ~ 4500)
  const couplingNorm = Math.min(coupling / 10000, 1.5)

  // 2. Storm Factor based on Kp
  const stormFactor = Math.min(kp.current / 9.0, 1.0)

  const risks: CableSegmentRisk[] = []

  cables.forEach((cable) => {
    // In a real app, we'd split cables into smaller segments.
    // Here we treat the whole cable as one segment for simplicity,
    // or use its mean lat/lon.

    const L = cable.lengthKm
    const phi = cable.meanLat

    // Latitude Weight: Peak near 60 degrees (auroral oval), decays towards equator
    // Gaussian: exp(-((|phi| - 60)^2) / (2 * 20^2))
    const latWeight = Math.exp(-Math.pow(Math.abs(phi) - 60, 2) / (2 * Math.pow(20, 2)))

    // Length Weight: Longer cables accumulate more voltage
    // Saturate at 2000km
    const lengthWeight = Math.min(L / 2000, 1.5)

    // Combine
    let rawRisk = stormFactor * latWeight * lengthWeight * (1 + couplingNorm * 0.2)

    // Normalize to 0-1
    rawRisk = Math.min(rawRisk, 1.0)

    risks.push({
      cableId: cable.id,
      cableName: cable.name,
      segmentIndex: 0,
      segmentLengthKm: cable.lengthKm,
      riskScore: rawRisk,
      riskLevel: getRiskLevel(rawRisk),
      meanLat: cable.meanLat,
      meanLon: cable.meanLon,
      coordinates: cable.coordinates,
    })
  })

  return risks
}

export function calculateSimulationRisk(
  cables: CableSegment[],
  params: {
    cmeSpeedKms: number
    directionLat: number
    directionLon: number
    syntheticKp: number
  },
): CableSegmentRisk[] {
  const { syntheticKp, directionLat, directionLon } = params
  const stormFactor = syntheticKp / 9.0

  const risks: CableSegmentRisk[] = []

  cables.forEach((cable) => {
    const L = cable.lengthKm
    const phi = cable.meanLat

    // Latitude Weight
    const latWeight = Math.exp(-Math.pow(Math.abs(phi) - 60, 2) / (2 * Math.pow(20, 2)))

    // Length Weight
    const lengthWeight = Math.min(L / 2000, 1.5)

    // Footprint Weight (Directional Impact)
    // Calculate angular distance from CME impact point to cable center
    const angle = angularDistance(phi, cable.meanLon, directionLat, directionLon)
    // Sigma ~ 40 degrees
    const footprintWeight = Math.exp(-Math.pow(angle, 2) / (2 * Math.pow(40, 2)))

    // Combine
    let rawRisk = stormFactor * latWeight * lengthWeight * footprintWeight * 1.5 // Boost for visibility
    rawRisk = Math.min(rawRisk, 1.0)

    risks.push({
      cableId: cable.id,
      cableName: cable.name,
      segmentIndex: 0,
      segmentLengthKm: cable.lengthKm,
      riskScore: rawRisk,
      riskLevel: getRiskLevel(rawRisk),
      meanLat: cable.meanLat,
      meanLon: cable.meanLon,
      directionalExposure: footprintWeight,
      coordinates: cable.coordinates,
    })
  })

  return risks
}
