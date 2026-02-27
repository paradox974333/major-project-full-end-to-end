import { NextResponse } from "next/server"
import type { CableSegment } from "@/lib/types"
import { CACHED_CABLES } from "@/lib/data/cables"

const ML_BACKEND = "http://localhost:8000"

async function getSpaceWeather() {
  const res = await fetch("http://localhost:3000/api/space-weather/realtime", { cache: "no-store" })
  if (!res.ok) throw new Error("Failed to fetch weather")
  return res.json()
}

async function predictWithML(cables: CableSegment[], weather: any) {
  const Sf = weather.kp.current >= 7 ? 3 : weather.kp.current >= 4 ? 2 : 1

  const batchInput = {
    cables: cables.map(c => ({
      Sf,
      VCME: weather.solarWind.speedKms * 1.2,
      Bz: weather.solarWind.bzNtl,
      Vsw: weather.solarWind.speedKms,
      Kp: weather.kp.current,
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

export async function POST() {
  try {
    const cables: CableSegment[] = CACHED_CABLES
    const weather = await getSpaceWeather()

    // Use ML model — no fallback
    let mlResults
    try {
      mlResults = await predictWithML(cables, weather)
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
      globalKp: weather.kp.current,
      gScale: weather.kp.scale,
      segmentRisks,
      cableAggregates,
      modelUsed: "xgboost",
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Calculation failed" }, { status: 500 })
  }
}
