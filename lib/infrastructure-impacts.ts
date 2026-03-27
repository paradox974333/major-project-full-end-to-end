import type { CableAggregateRisk, RiskLevel, SectorImpact } from "@/lib/types"

function clamp(value: number, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max)
}

function toRiskLevel(score: number): RiskLevel {
  if (score >= 0.7) return "CRITICAL"
  if (score >= 0.4) return "HIGH"
  if (score >= 0.2) return "MEDIUM"
  return "LOW"
}

function statusFromLevel(level: RiskLevel, label: string) {
  if (level === "CRITICAL") return `Critical ${label} disruption risk`
  if (level === "HIGH") return `High ${label} disturbance risk`
  if (level === "MEDIUM") return `Elevated ${label} watch`
  return `Low ${label} concern`
}

function scoreSummary(score: number) {
  if (score >= 0.7) return "strong storm coupling and severe operating stress"
  if (score >= 0.4) return "elevated geomagnetic and radiation stress"
  if (score >= 0.2) return "noticeable but manageable disturbance potential"
  return "limited system-wide stress under current conditions"
}

interface SectorConfig {
  id: SectorImpact["id"]
  label: string
  score: number
  whyAffected: string
  likelyEffects: string[]
  mitigationHint: string
}

export function buildSectorImpacts(input: {
  kp: number
  flareSeverity: number
  cmeSpeedKms: number
  solarWindSpeedKms: number
  densityPcm3?: number
  bzNtl: number
  cableAggregates: CableAggregateRisk[]
}): SectorImpact[] {
  const kp = clamp(input.kp / 9)
  const flare = clamp(input.flareSeverity / 3)
  const speed = clamp((input.cmeSpeedKms - 300) / 2400)
  const solarWind = clamp((input.solarWindSpeedKms - 250) / 650)
  const density = clamp(((input.densityPcm3 ?? 5) - 2) / 18)
  const southwardBz = clamp(Math.max(0, -input.bzNtl) / 25)
  const cableMax = input.cableAggregates[0]?.maxRisk ?? 0

  const sectorConfigs: SectorConfig[] = [
    {
      id: "submarine-cables",
      label: "Submarine Cables",
      score: clamp(cableMax * 0.75 + kp * 0.15 + southwardBz * 0.1),
      whyAffected: `Long undersea power systems are vulnerable to geomagnetically induced currents, with ${scoreSummary(cableMax)} in the current cable model.`,
      likelyEffects: [
        "Repeater power-system stress on long routes",
        "Higher watch requirements for high-latitude links",
        "Landing-station and backbone contingency planning",
      ],
      mitigationHint: "Prioritize high-latitude and long-haul routes for monitoring and failover planning.",
    },
    {
      id: "power-grids",
      label: "Power Grids",
      score: clamp(kp * 0.45 + southwardBz * 0.25 + speed * 0.15 + solarWind * 0.15),
      whyAffected: `Power transmission networks act like long conductors, and this scenario suggests ${scoreSummary(kp)} for geomagnetically induced current exposure.`,
      likelyEffects: [
        "Transformer heating and reactive power stress",
        "Voltage instability on long transmission corridors",
        "Load-shedding or blackout risk in severe cases",
      ],
      mitigationHint: "Grid operators should increase transformer monitoring and prepare load-balancing actions.",
    },
    {
      id: "satellites",
      label: "Satellites",
      score: clamp(flare * 0.35 + speed * 0.25 + kp * 0.2 + southwardBz * 0.1 + density * 0.1),
      whyAffected: `Spacecraft electronics and drag environment both worsen under energetic flare and CME conditions, creating ${scoreSummary(flare)} for in-orbit systems.`,
      likelyEffects: [
        "Charging and single-event upset risk",
        "Temporary communications interruptions",
        "Orbit-drag increase for low-Earth satellites",
      ],
      mitigationHint: "Increase satellite operator alerting and consider safe-mode or maneuver timing adjustments.",
    },
    {
      id: "gnss",
      label: "GPS / GNSS",
      score: clamp(kp * 0.35 + flare * 0.25 + speed * 0.2 + southwardBz * 0.1 + density * 0.1),
      whyAffected: `Ionospheric disturbance can degrade timing and positioning accuracy, and this setup implies ${scoreSummary(kp)} for navigation systems.`,
      likelyEffects: [
        "Position drift or timing jitter",
        "Intermittent receiver degradation",
        "Reduced reliability for precision navigation",
      ],
      mitigationHint: "Switch critical operations to multi-sensor navigation and watch timing integrity alerts.",
    },
    {
      id: "hf-radio",
      label: "HF Radio",
      score: clamp(flare * 0.5 + kp * 0.2 + speed * 0.15 + southwardBz * 0.15),
      whyAffected: `HF communication depends strongly on ionospheric behavior, and flare-driven X-ray increases push this scenario toward ${scoreSummary(flare)} for radio blackout conditions.`,
      likelyEffects: [
        "HF radio blackout or severe fading",
        "Emergency and maritime comm disruptions",
        "Reduced long-range skywave reliability",
      ],
      mitigationHint: "Prepare backup communication paths for aviation, maritime, and emergency traffic.",
    },
    {
      id: "aviation",
      label: "Aviation / Polar Routes",
      score: clamp(flare * 0.3 + kp * 0.3 + speed * 0.2 + southwardBz * 0.1 + density * 0.1),
      whyAffected: `High-latitude flight operations are exposed to both communication loss and radiation concerns, giving ${scoreSummary(kp)} for aviation operations in this scenario.`,
      likelyEffects: [
        "Polar route communication degradation",
        "Flight rerouting or altitude adjustments",
        "Elevated crew and passenger radiation management attention",
      ],
      mitigationHint: "Review polar-route contingency procedures and communication alternatives before storm arrival.",
    },
    {
      id: "pipelines",
      label: "Pipelines",
      score: clamp(kp * 0.4 + southwardBz * 0.3 + speed * 0.2 + flare * 0.1),
      whyAffected: `Long grounded metal infrastructure can accumulate induced currents, and current storm conditions imply ${scoreSummary(southwardBz)} for pipeline systems.`,
      likelyEffects: [
        "Cathodic protection imbalance",
        "Accelerated corrosion exposure",
        "False alarms or sensor drift",
      ],
      mitigationHint: "Increase monitoring of cathodic protection systems and anomaly alarms during the event window.",
    },
    {
      id: "auroral-activity",
      label: "Auroral Activity / Atmosphere",
      score: clamp(kp * 0.55 + southwardBz * 0.2 + speed * 0.15 + density * 0.1),
      whyAffected: `Auroras and upper-atmospheric heating are visible signs of energy entering the Earth system, with ${scoreSummary(kp)} under the current storm profile.`,
      likelyEffects: [
        "Lower-latitude aurora visibility",
        "Thermospheric heating and drag increase",
        "Broader indication of coupled magnetosphere activity",
      ],
      mitigationHint: "Use auroral and atmospheric activity as a signal for wider operational readiness across affected systems.",
    },
  ]

  return sectorConfigs
    .map((config) => ({
      id: config.id,
      label: config.label,
      riskScore: config.score,
      riskLevel: toRiskLevel(config.score),
      status: statusFromLevel(toRiskLevel(config.score), config.label.toLowerCase()),
      whyAffected: config.whyAffected,
      likelyEffects: config.likelyEffects,
      mitigationHint: config.mitigationHint,
    }))
    .sort((left, right) => right.riskScore - left.riskScore)
}

export function inferAffectedSystems(input: {
  peakKp: number
  flareClass: "C" | "M" | "X"
  cmeSpeedKms: number
}): string[] {
  const systems = ["Submarine cables"]

  if (input.peakKp >= 5) {
    systems.push("Power grids", "GPS / GNSS", "Pipelines")
  }

  if (input.peakKp >= 6 || input.flareClass !== "C") {
    systems.push("Aviation / polar routes", "HF radio")
  }

  if (input.flareClass === "X" || input.cmeSpeedKms >= 1200) {
    systems.push("Satellites", "Auroral activity / atmosphere")
  }

  return [...new Set(systems)]
}
