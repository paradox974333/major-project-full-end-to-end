import { NextResponse } from "next/server"
import { buildRealtimeImpactResponse } from "@/lib/server/impact-engine"
import { fetchSpaceWeather } from "@/lib/server/space-weather"

export async function POST() {
  try {
    const weather = await fetchSpaceWeather()
    return NextResponse.json(await buildRealtimeImpactResponse(weather))
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Calculation failed" }, { status: 500 })
  }
}
