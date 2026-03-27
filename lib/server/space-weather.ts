import type { SpaceWeather } from "@/lib/types"
import { NOAA_KP_INDEX_URL, NOAA_SOLAR_WIND_MAG_URL, NOAA_SOLAR_WIND_SPEED_URL } from "@/lib/constants"

function fallbackSpaceWeather(): SpaceWeather {
  return {
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
}

export async function fetchSpaceWeather(): Promise<SpaceWeather> {
  try {
    const [magRes, speedRes, kpRes] = await Promise.all([
      fetch(NOAA_SOLAR_WIND_MAG_URL, { cache: "no-store", signal: AbortSignal.timeout(10000) }),
      fetch(NOAA_SOLAR_WIND_SPEED_URL, { cache: "no-store", signal: AbortSignal.timeout(10000) }),
      fetch(NOAA_KP_INDEX_URL, { cache: "no-store", signal: AbortSignal.timeout(10000) }),
    ])

    if (!magRes.ok || !speedRes.ok || !kpRes.ok) {
      throw new Error("Failed to fetch one or more NOAA data sources")
    }

    const magData = await magRes.json()
    const speedData = await speedRes.json()
    const kpData = await kpRes.json()

    const bz = Number.parseFloat(magData.Bz) || 0
    const speed = Number.parseFloat(speedData.WindSpeed) || 400
    const density = Number.parseFloat(speedData.Density) || 5

    let currentKp = 0
    let lastUpdate = new Date().toISOString()

    if (Array.isArray(kpData) && kpData.length > 1) {
      const lastRow = kpData[kpData.length - 1]
      currentKp = Number.parseFloat(lastRow[1]) || 0
      lastUpdate = lastRow[0] || new Date().toISOString()
    }

    let scale: SpaceWeather["kp"]["scale"] = "G0"
    if (currentKp >= 5) scale = "G1"
    if (currentKp >= 6) scale = "G2"
    if (currentKp >= 7) scale = "G3"
    if (currentKp >= 8) scale = "G4"
    if (currentKp >= 9) scale = "G5"

    return {
      fetchedAt: new Date().toISOString(),
      solarWind: {
        speedKms: speed,
        densityPcm3: density,
        bzNtl: bz,
      },
      kp: {
        current: currentKp,
        lastUpdate,
        scale,
      },
    }
  } catch (error) {
    console.error("Error fetching space weather:", error)
    return fallbackSpaceWeather()
  }
}
