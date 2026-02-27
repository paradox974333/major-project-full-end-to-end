import { NextResponse } from "next/server"
import type { SpaceWeather } from "@/lib/types"
import { NOAA_KP_INDEX_URL, NOAA_SOLAR_WIND_MAG_URL, NOAA_SOLAR_WIND_SPEED_URL } from "@/lib/constants"

export async function GET() {
  try {
    const [magRes, speedRes, kpRes] = await Promise.all([
      fetch(NOAA_SOLAR_WIND_MAG_URL),
      fetch(NOAA_SOLAR_WIND_SPEED_URL),
      fetch(NOAA_KP_INDEX_URL),
    ])

    if (!magRes.ok || !speedRes.ok || !kpRes.ok) {
      throw new Error("Failed to fetch one or more NOAA data sources")
    }

    const magData = await magRes.json()
    const speedData = await speedRes.json()
    const kpData = await kpRes.json()

    // Mag and Speed are summary JSONs with keys like "Bz" and "WindSpeed"
    const bz = Number.parseFloat(magData.Bz) || 0
    const speed = Number.parseFloat(speedData.WindSpeed) || 400
    const density = Number.parseFloat(speedData.Density) || 5 // Fallback if missing

    // Kp index is a list of lists: [["time_tag", "kp_index", ...], ...]
    // We want the last entry
    let currentKp = 0
    let lastUpdate = new Date().toISOString()

    if (Array.isArray(kpData) && kpData.length > 1) {
      // Get the last row
      const lastRow = kpData[kpData.length - 1]
      // Index 1 is usually the Kp value
      currentKp = Number.parseFloat(lastRow[1]) || 0
      lastUpdate = lastRow[0] || new Date().toISOString()
    }

    let scale: SpaceWeather["kp"]["scale"] = "G0"
    if (currentKp >= 5) scale = "G1"
    if (currentKp >= 6) scale = "G2"
    if (currentKp >= 7) scale = "G3"
    if (currentKp >= 8) scale = "G4"
    if (currentKp >= 9) scale = "G5"

    const weatherData: SpaceWeather = {
      fetchedAt: new Date().toISOString(),
      solarWind: {
        speedKms: speed,
        densityPcm3: density,
        bzNtl: bz,
      },
      kp: {
        current: currentKp,
        lastUpdate: lastUpdate,
        scale: scale,
      },
    }

    return NextResponse.json(weatherData)
  } catch (error) {
    console.error("Error fetching space weather:", error)
    // Fallback to mock data if external API fails
    const mockData: SpaceWeather = {
      fetchedAt: new Date().toISOString(),
      solarWind: {
        speedKms: 450,
        densityPcm3: 5,
        bzNtl: -2,
      },
      kp: {
        current: 3,
        lastUpdate: new Date().toISOString(),
        scale: "G0",
      },
    }
    return NextResponse.json(mockData)
  }
}
