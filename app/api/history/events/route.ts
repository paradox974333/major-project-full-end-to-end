import { NextResponse } from "next/server"
import { getHistoricalEvents } from "@/lib/server/history-events"

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const limit = Number.parseInt(searchParams.get("limit") ?? "12", 10)
    return NextResponse.json(await getHistoricalEvents(Number.isFinite(limit) ? limit : 12))
  } catch (error) {
    console.error("Failed to load historical events:", error)
    return NextResponse.json({ error: "Historical events unavailable" }, { status: 503 })
  }
}
