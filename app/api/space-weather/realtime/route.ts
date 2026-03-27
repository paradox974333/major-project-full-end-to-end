import { NextResponse } from "next/server"
import { fetchSpaceWeather } from "@/lib/server/space-weather"

export async function GET() {
  return NextResponse.json(await fetchSpaceWeather())
}
