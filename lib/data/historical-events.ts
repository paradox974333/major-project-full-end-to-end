import type { HistoricalEvent, HistoricalMatch } from "@/lib/types"

const FLARE_SEVERITY: Record<HistoricalEvent["flareClass"], number> = {
  C: 1,
  M: 2,
  X: 3,
}

function clamp(value: number, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max)
}

export function historicalFlareSeverity(flareClass: HistoricalEvent["flareClass"]) {
  return FLARE_SEVERITY[flareClass]
}

function buildMatchReason(
  event: HistoricalEvent,
  scenario: {
    flareSeverity: number
    kp: number
    cmeSpeedKms: number
    bzNtl: number
  },
) {
  const reasons: string[] = []
  const kpDiff = Math.abs(event.peakKp - scenario.kp)
  const speedDiff = Math.abs(event.cmeSpeedKms - scenario.cmeSpeedKms)
  const flareDiff = Math.abs(historicalFlareSeverity(event.flareClass) - scenario.flareSeverity)
  const bzDiff = Math.abs(Math.abs(Math.min(event.bzNtl, 0)) - Math.abs(Math.min(scenario.bzNtl, 0)))

  if (kpDiff <= 1.2) reasons.push(`similar storm strength (Kp ${event.peakKp.toFixed(1)})`)
  if (speedDiff <= 350) reasons.push(`close CME speed (${event.cmeSpeedKms.toFixed(0)} km/s)`)
  if (!event.bzIsEstimated && bzDiff <= 6) reasons.push(`comparable southward Bz (${event.bzNtl.toFixed(1)} nT)`)
  if (flareDiff === 0) reasons.push(`same flare tier (${event.flareClass}-class)`)

  return reasons.length > 0 ? reasons.join(", ") : "closest live-api match across storm intensity and CME characteristics"
}

export function findHistoricalMatches(
  events: HistoricalEvent[],
  scenario: {
    flareSeverity: number
    kp: number
    cmeSpeedKms: number
    bzNtl: number
  },
  limit = 3,
): HistoricalMatch[] {
  return events
    .map((event) => {
      const flareDistance = Math.abs(historicalFlareSeverity(event.flareClass) - scenario.flareSeverity) / 2
      const kpDistance = Math.abs(event.peakKp - scenario.kp) / 9
      const speedDistance = Math.abs(event.cmeSpeedKms - scenario.cmeSpeedKms) / 2500
      const bzDistance = event.bzIsEstimated
        ? Math.abs(event.peakKp - scenario.kp) / 9
        : Math.abs(Math.abs(Math.min(event.bzNtl, 0)) - Math.abs(Math.min(scenario.bzNtl, 0))) / 35

      const distance = flareDistance * 0.22 + kpDistance * 0.38 + speedDistance * 0.28 + bzDistance * 0.12
      const similarity = clamp(1 - distance)

      return {
        eventId: event.id,
        name: event.name,
        date: event.date,
        flareClass: event.flareClass,
        severity: event.severity,
        peakKp: event.peakKp,
        cmeSpeedKms: event.cmeSpeedKms,
        similarity,
        matchReason: buildMatchReason(event, scenario),
      }
    })
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, limit)
}
