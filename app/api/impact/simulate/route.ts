import { NextResponse } from "next/server"
import type { CableSegment, SimulationParams } from "@/lib/types"
import { CACHED_CABLES } from "@/lib/data/cables"

const ML_BACKEND = "http://localhost:8000"

async function predictWithML(cables: CableSegment[], cmeSpeedKms: number, syntheticKp: number) {
  const Sf = syntheticKp >= 7 ? 3 : syntheticKp >= 4 ? 2 : 1

  const batchInput = {
    cables: cables.map(c => ({
      Sf,
      VCME: cmeSpeedKms,
      Bz: -(syntheticKp * 2.5),
      Vsw: 350 + cmeSpeedKms * 0.15,
      Kp: syntheticKp,
      Lat: c.meanLat,
      Lcable: c.lengthKm || 1000,
    })),
  }

  const res = await fetch(`${ML_BACKEND}/predict/cable-risk/batch`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(batchInput),
    signal: AbortSignal.timeout(10000),
  })

  if (!res.ok) {
    throw new Error(`ML backend returned ${res.status}`)
  }

  const data = await res.json()
  return data.results
}

export async function POST(req: Request) {
  try {
    const body: SimulationParams = await req.json()
    const { startTime, cmeSpeedKms, directionLat, directionLon } = body

    const cables: CableSegment[] = CACHED_CABLES

    // Physics / Transit Calculation
    const distanceSunEarth = 1.496e8 // km
    const transitSeconds = distanceSunEarth / cmeSpeedKms
    const arrivalTime = new Date(new Date(startTime).getTime() + transitSeconds * 1000)

    // Synthetic Kp Model
    const baseKp = 1.5 + 7.5 * ((cmeSpeedKms - 400) / 2600)
    const syntheticKp = Math.min(Math.max(baseKp, 1), 9)

    let gScale = "G0"
    if (syntheticKp >= 5) gScale = "G1"
    if (syntheticKp >= 6) gScale = "G2"
    if (syntheticKp >= 7) gScale = "G3"
    if (syntheticKp >= 8) gScale = "G4"
    if (syntheticKp >= 9) gScale = "G5"

    // Use ML model — no fallback
    let mlResults
    try {
      mlResults = await predictWithML(cables, cmeSpeedKms, syntheticKp)
    } catch (err) {
      return NextResponse.json(
        {
          error: "ML Backend Offline",
          message: "The XGBoost ML model server is not running. Please start it with: cd ml_backend && python app.py",
        },
        { status: 503 }
      )
    }

    if (!mlResults || mlResults.length !== cables.length) {
      return NextResponse.json(
        { error: "ML model returned incomplete results" },
        { status: 500 }
      )
    }

    const riskMap: Record<string, string> = { Low: "LOW", Medium: "MEDIUM", High: "HIGH" }

    const segmentRisks = cables.map((c, i) => {
      const ml = mlResults[i]
      return {
        cableId: c.id,
        cableName: c.name,
        meanLat: c.meanLat,
        meanLon: c.meanLon,
        riskScore: ml.risk_score,
        riskLevel: riskMap[ml.risk_category] || "MEDIUM",
        coordinates: c.coordinates,
      }
    })

    // Aggregate
    const cableAggregates = segmentRisks
      .map((r) => ({
        cableId: r.cableId,
        cableName: r.cableName,
        maxRisk: r.riskScore,
        meanRisk: r.riskScore,
        worstSegment: { lat: r.meanLat, lon: r.meanLon, riskScore: r.riskScore },
      }))
      .sort((a, b) => b.maxRisk - a.maxRisk)

    return NextResponse.json({
      updatedAt: new Date().toISOString(),
      globalKp: syntheticKp,
      gScale,
      segmentRisks,
      cableAggregates,
      startTime,
      cmeSpeedKms,
      directionLat,
      directionLon,
      predictedArrivalTime: arrivalTime.toISOString(),
      syntheticKpPeak: syntheticKp,
      modelUsed: "xgboost",
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Simulation failed" }, { status: 500 })
  }
}
