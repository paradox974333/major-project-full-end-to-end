import { NextResponse } from "next/server"
import { predictFlare } from "@/lib/server/ml-client"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    return NextResponse.json(await predictFlare(body))
  } catch {
    return NextResponse.json({ error: "ML backend unavailable" }, { status: 503 })
  }
}
