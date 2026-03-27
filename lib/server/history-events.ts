import type { HistoricalEvent } from "@/lib/types"
import { inferAffectedSystems } from "@/lib/infrastructure-impacts"

const DONKI_BASE = "https://kauai.ccmc.gsfc.nasa.gov/DONKI/WS/get"
const HISTORY_CACHE_TTL_MS = 1000 * 60 * 60 * 6

type DonkiFlare = {
  flrID: string
  beginTime?: string
  peakTime?: string
  endTime?: string
  classType?: string
  sourceLocation?: string
  activeRegionNum?: number | null
  note?: string
  link?: string
  linkedEvents?: Array<{ activityID?: string }>
}

type DonkiCmeAnalysis = {
  isMostAccurate?: boolean
  latitude?: number | null
  longitude?: number | null
  speed?: number | null
  enlilList?: Array<{
    estimatedShockArrivalTime?: string | null
    kp_18?: number | null
    kp_90?: number | null
    kp_135?: number | null
    kp_180?: number | null
    isEarthGB?: boolean | null
    isEarthMinorImpact?: boolean | null
  }>
}

type DonkiCme = {
  activityID: string
  startTime?: string
  sourceLocation?: string
  activeRegionNum?: number | null
  note?: string
  link?: string
  cmeAnalyses?: DonkiCmeAnalysis[]
  linkedEvents?: Array<{ activityID?: string }>
}

type DonkiGst = {
  gstID: string
  startTime?: string
  link?: string
  linkedEvents?: Array<{ activityID?: string }>
  allKpIndex?: Array<{
    observedTime?: string
    kpIndex?: number
    source?: string
  }>
}

let cachedEvents: HistoricalEvent[] | null = null
let cacheExpiresAt = 0
let inFlightRequest: Promise<HistoricalEvent[]> | null = null

function formatDate(date: Date) {
  return date.toISOString().slice(0, 10)
}

function clamp(value: number, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max)
}

function parseFlareClass(classType?: string): HistoricalEvent["flareClass"] {
  const first = classType?.trim().charAt(0).toUpperCase()
  if (first === "X") return "X"
  if (first === "M") return "M"
  return "C"
}

function severityFromKp(kp: number): HistoricalEvent["severity"] {
  if (kp >= 8) return "Extreme"
  if (kp >= 7) return "Severe"
  if (kp >= 5) return "Strong"
  return "Moderate"
}

function parseSourceLocation(sourceLocation?: string) {
  if (!sourceLocation) return null

  const match = sourceLocation.match(/([NS])(\d{1,2})([EW])(\d{1,3})/i)
  if (!match) return null

  const lat = Number.parseInt(match[2], 10) * (match[1].toUpperCase() === "N" ? 1 : -1)
  const lon = Number.parseInt(match[4], 10) * (match[3].toUpperCase() === "E" ? 1 : -1)

  return { lat, lon }
}

function pickPrimaryAnalysis(cme?: DonkiCme | null) {
  if (!cme?.cmeAnalyses?.length) return null
  return (
    cme.cmeAnalyses.find((analysis) => analysis.isMostAccurate) ??
    cme.cmeAnalyses
      .slice()
      .sort((left, right) => (right.speed ?? 0) - (left.speed ?? 0))[0]
  )
}

function cmeEarthImpactSummary(analysis: DonkiCmeAnalysis | null) {
  const enlilList = analysis?.enlilList ?? []
  const earthModel = enlilList.find(
    (entry) =>
      typeof entry.estimatedShockArrivalTime === "string" ||
      entry.isEarthGB === true ||
      entry.isEarthMinorImpact === true ||
      [entry.kp_18, entry.kp_90, entry.kp_135, entry.kp_180].some((value) => typeof value === "number"),
  )

  if (!earthModel) return null

  const modeledKp = [earthModel.kp_18, earthModel.kp_90, earthModel.kp_135, earthModel.kp_180]
    .filter((value): value is number => typeof value === "number")
    .sort((left, right) => right - left)[0]

  return {
    earthImpact: Boolean(earthModel.estimatedShockArrivalTime || earthModel.isEarthGB || earthModel.isEarthMinorImpact),
    shockArrival: earthModel.estimatedShockArrivalTime ?? null,
    modeledKp: modeledKp ?? null,
  }
}

function uniqueStrings(values: Array<string | undefined | null>) {
  return [...new Set(values.filter((value): value is string => Boolean(value)).map((value) => value.trim()).filter(Boolean))]
}

function eventName(flare: DonkiFlare | null, gst: DonkiGst, peakKp: number) {
  if (flare?.classType) {
    return `${flare.classType} storm sequence reaching Kp ${peakKp.toFixed(1)}`
  }

  return `Geomagnetic storm reaching Kp ${peakKp.toFixed(1)}`
}

function eventDescription(input: {
  flare: DonkiFlare | null
  cme: DonkiCme | null
  gst: DonkiGst
  peakKp: number
  cmeSpeedKms: number
  earthImpact: boolean
}) {
  const parts: string[] = []

  if (input.flare?.classType) {
    parts.push(`${input.flare.classType} flare`)
  } else {
    parts.push("Geomagnetic storm")
  }

  if (input.flare?.sourceLocation) {
    parts.push(`from ${input.flare.sourceLocation}`)
  }

  parts.push(`peaking at Kp ${input.peakKp.toFixed(1)}`)

  if (input.cmeSpeedKms > 0) {
    parts.push(`with a related CME near ${input.cmeSpeedKms.toFixed(0)} km/s`)
  }

  if (input.earthImpact) {
    parts.push("and Earth-impact indications in DONKI modeling")
  }

  const note = input.cme?.note || input.flare?.note
  if (note) {
    return `${parts.join(" ")}. ${note.trim().replace(/\s+/g, " ").slice(0, 240)}`
  }

  return `${parts.join(" ")}.`
}

function eventImpacts(input: {
  peakKp: number
  cmeSpeedKms: number
  flare: DonkiFlare | null
  earthImpact: boolean
  shockArrival: string | null
  modeledKp: number | null
}) {
  const impacts = [
    `NOAA Kp observations reached ${input.peakKp.toFixed(1)}.`,
    input.cmeSpeedKms > 0 ? `Associated CME analysis reported about ${input.cmeSpeedKms.toFixed(0)} km/s.` : null,
    input.flare?.classType ? `Linked flare class in DONKI: ${input.flare.classType}.` : null,
    input.earthImpact ? "DONKI ENLIL modeling indicated Earth-impact or near-Earth interaction." : null,
    input.shockArrival ? `Modeled shock arrival: ${input.shockArrival}.` : null,
    typeof input.modeledKp === "number" ? `ENLIL modeled Kp reached ${input.modeledKp.toFixed(0)} in at least one geometry.` : null,
  ]

  return uniqueStrings(impacts).slice(0, 4)
}

function regionsForEvent(sourceLocation?: string, flareClass?: string) {
  const regions = ["Earth-facing storm record"]

  if (sourceLocation) {
    regions.push(`Solar source ${sourceLocation}`)
  }

  if (flareClass === "X") {
    regions.push("High-severity solar activity")
  }

  return uniqueStrings(regions)
}

function replayFromEvent(input: {
  flare: DonkiFlare | null
  cme: DonkiCme | null
  analysis: DonkiCmeAnalysis | null
  cmeSpeedKms: number
}) {
  const parsedSource = parseSourceLocation(input.flare?.sourceLocation ?? input.cme?.sourceLocation)
  const directionLat = clamp(
    parsedSource?.lat ?? input.analysis?.latitude ?? 0,
    -90,
    90,
  )
  const directionLon = clamp(
    parsedSource?.lon ?? input.analysis?.longitude ?? 0,
    -180,
    180,
  )
  const startTime = input.cme?.startTime ?? input.flare?.beginTime ?? new Date().toISOString()

  return {
    label: `Replay ${formatDate(new Date(startTime))}`,
    startTime,
    cmeSpeedKms: Math.max(input.cmeSpeedKms, 400),
    directionLon,
    directionLat,
  }
}

function estimatedBzFromKp(peakKp: number) {
  return -Math.max(3, peakKp * 2.3)
}

async function fetchDonki<T>(path: string, startDate: string, endDate: string): Promise<T[]> {
  const url = `${DONKI_BASE}/${path}?startDate=${startDate}&endDate=${endDate}`
  const response = await fetch(url, {
    cache: "no-store",
    signal: AbortSignal.timeout(30000),
  })

  if (!response.ok) {
    throw new Error(`DONKI ${path} request failed with ${response.status}`)
  }

  return response.json()
}

function selectStormCandidates(storms: DonkiGst[]) {
  const enriched = storms
    .map((storm) => ({
      storm,
      peakKp: Math.max(...(storm.allKpIndex ?? []).map((entry) => entry.kpIndex ?? 0)),
      time: new Date(storm.startTime ?? 0).getTime(),
    }))
    .filter((entry) => Number.isFinite(entry.peakKp) && entry.peakKp >= 5)

  const strongest = enriched
    .slice()
    .sort((left, right) => right.peakKp - left.peakKp || right.time - left.time)
    .slice(0, 8)

  const mostRecent = enriched
    .slice()
    .sort((left, right) => right.time - left.time)
    .slice(0, 8)

  const combined = [...strongest, ...mostRecent]
  const seen = new Set<string>()

  return combined
    .filter((entry) => {
      if (seen.has(entry.storm.gstID)) return false
      seen.add(entry.storm.gstID)
      return true
    })
    .slice(0, 14)
    .map((entry) => entry.storm)
}

function buildEventFromStorm(gst: DonkiGst, flareMap: Map<string, DonkiFlare>, cmeMap: Map<string, DonkiCme>): HistoricalEvent | null {
  const peakKp = Math.max(...(gst.allKpIndex ?? []).map((entry) => entry.kpIndex ?? 0))
  if (!Number.isFinite(peakKp) || peakKp < 5) {
    return null
  }

  const gstStartTime = new Date(gst.startTime ?? new Date().toISOString()).getTime()
  const linkedCmes = uniqueStrings((gst.linkedEvents ?? []).map((event) => event.activityID).filter((id) => id?.includes("-CME-")))
    .map((id) => cmeMap.get(id))
    .filter((value): value is DonkiCme => Boolean(value))

  const cme = linkedCmes
    .slice()
    .sort((left, right) => (pickPrimaryAnalysis(right)?.speed ?? 0) - (pickPrimaryAnalysis(left)?.speed ?? 0))[0] ??
    [...cmeMap.values()]
      .filter((candidate) => {
        const candidateTime = new Date(candidate.startTime ?? 0).getTime()
        return Number.isFinite(candidateTime) && candidateTime <= gstStartTime && gstStartTime - candidateTime <= 1000 * 60 * 60 * 72
      })
      .sort((left, right) => (pickPrimaryAnalysis(right)?.speed ?? 0) - (pickPrimaryAnalysis(left)?.speed ?? 0))[0] ??
    null

  const linkedFlareIds = uniqueStrings(
    (cme?.linkedEvents ?? []).map((event) => event.activityID).filter((id) => id?.includes("-FLR-")),
  )

  const flare =
    linkedFlareIds.map((id) => flareMap.get(id)).find((value): value is DonkiFlare => Boolean(value)) ??
    [...flareMap.values()]
      .filter((candidate) => {
        const candidateTime = new Date(candidate.peakTime ?? candidate.beginTime ?? 0).getTime()
        const sameRegion =
          (candidate.activeRegionNum && cme?.activeRegionNum && candidate.activeRegionNum === cme.activeRegionNum) ||
          (candidate.sourceLocation && cme?.sourceLocation && candidate.sourceLocation === cme.sourceLocation)
        return Boolean(sameRegion) && Number.isFinite(candidateTime) && candidateTime <= gstStartTime
      })
      .sort((left, right) => {
        const rightTime = new Date(right.peakTime ?? right.beginTime ?? 0).getTime()
        const leftTime = new Date(left.peakTime ?? left.beginTime ?? 0).getTime()
        return rightTime - leftTime
      })[0] ??
    null

  const analysis = pickPrimaryAnalysis(cme)
  const earthSummary = cmeEarthImpactSummary(analysis)
  const cmeSpeedKms = Math.max(analysis?.speed ?? 500, 400)
  const flareClass = parseFlareClass(flare?.classType)

  return {
    id: gst.gstID,
    name: eventName(flare, gst, peakKp),
    date: formatDate(new Date(gst.startTime ?? flare?.beginTime ?? cme?.startTime ?? new Date().toISOString())),
    flareClass,
    peakKp,
    cmeSpeedKms,
    bzNtl: estimatedBzFromKp(peakKp),
    bzIsEstimated: true,
    severity: severityFromKp(peakKp),
    dataSource: "NASA DONKI",
    sourceLocation: flare?.sourceLocation ?? cme?.sourceLocation ?? undefined,
    activeRegionNum: flare?.activeRegionNum ?? cme?.activeRegionNum ?? null,
    link: gst.link ?? flare?.link ?? cme?.link ?? undefined,
    regions: regionsForEvent(flare?.sourceLocation ?? cme?.sourceLocation, flareClass),
    affectedSystems: inferAffectedSystems({
      peakKp,
      flareClass,
      cmeSpeedKms,
    }),
    description: eventDescription({
      flare,
      cme,
      gst,
      peakKp,
      cmeSpeedKms,
      earthImpact: earthSummary?.earthImpact ?? false,
    }),
    impacts: eventImpacts({
      peakKp,
      cmeSpeedKms,
      flare,
      earthImpact: earthSummary?.earthImpact ?? false,
      shockArrival: earthSummary?.shockArrival ?? null,
      modeledKp: earthSummary?.modeledKp ?? null,
    }),
    replay: replayFromEvent({
      flare,
      cme,
      analysis,
      cmeSpeedKms,
    }),
  }
}

async function loadHistoricalEvents(): Promise<HistoricalEvent[]> {
  const endDate = formatDate(new Date())
  const startDate = formatDate(new Date(new Date().setFullYear(new Date().getFullYear() - 12)))
  const storms = await fetchDonki<DonkiGst>("GST", startDate, endDate)
  const candidates = selectStormCandidates(storms)

  const eventResults = await Promise.allSettled(
    candidates.map(async (storm) => {
      const stormTime = new Date(storm.startTime ?? new Date().toISOString())
      const windowStart = formatDate(new Date(stormTime.getTime() - 1000 * 60 * 60 * 24 * 4))
      const windowEnd = formatDate(new Date(stormTime.getTime() + 1000 * 60 * 60 * 24 * 2))

      const [flares, cmes] = await Promise.all([
        fetchDonki<DonkiFlare>("FLR", windowStart, windowEnd),
        fetchDonki<DonkiCme>("CME", windowStart, windowEnd),
      ])

      return buildEventFromStorm(
        storm,
        new Map(flares.map((flare) => [flare.flrID, flare])),
        new Map(cmes.map((cme) => [cme.activityID, cme])),
      )
    }),
  )

  return eventResults
    .filter((result): result is PromiseFulfilledResult<HistoricalEvent | null> => result.status === "fulfilled")
    .map((result) => result.value)
    .filter((event): event is HistoricalEvent => Boolean(event))
    .sort((left, right) => {
      const kpDiff = right.peakKp - left.peakKp
      if (kpDiff !== 0) return kpDiff
      return new Date(right.date).getTime() - new Date(left.date).getTime()
    })
}

export async function getHistoricalEvents(limit = 12): Promise<HistoricalEvent[]> {
  const now = Date.now()
  if (cachedEvents && cacheExpiresAt > now) {
    return cachedEvents.slice(0, limit)
  }

  if (!inFlightRequest) {
    inFlightRequest = loadHistoricalEvents()
      .then((events) => {
        cachedEvents = events
        cacheExpiresAt = Date.now() + HISTORY_CACHE_TTL_MS
        return events
      })
      .finally(() => {
        inFlightRequest = null
      })
  }

  const events = await inFlightRequest
  return events.slice(0, limit)
}
