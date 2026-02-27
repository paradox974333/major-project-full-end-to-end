import { NextResponse } from "next/server"
import { CACHED_CABLES } from "@/lib/data/cables"

export async function GET() {
  return NextResponse.json(CACHED_CABLES)
}
