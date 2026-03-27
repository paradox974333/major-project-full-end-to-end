import { NextResponse } from "next/server"
import { predictCableRiskBatch } from "@/lib/server/ml-client"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    return NextResponse.json(await predictCableRiskBatch(body))
  } catch {
    return NextResponse.json({ error: "ML backend unavailable" }, { status: 503 })
  }
}
