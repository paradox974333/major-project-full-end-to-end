import { NextResponse } from "next/server"
import type { SimulationParams } from "@/lib/types"
import { buildSimulationImpactResponse } from "@/lib/server/impact-engine"

export async function POST(req: Request) {
  try {
    const body: SimulationParams = await req.json()
    return NextResponse.json(await buildSimulationImpactResponse(body))
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Simulation failed" }, { status: 500 })
  }
}
