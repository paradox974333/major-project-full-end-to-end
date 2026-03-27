import { NextResponse } from "next/server"
import { fetchModelMetrics } from "@/lib/server/ml-client"

export async function GET() {
  try {
    return NextResponse.json(await fetchModelMetrics())
  } catch {
    return NextResponse.json({ error: "ML backend unavailable" }, { status: 503 })
  }
}
