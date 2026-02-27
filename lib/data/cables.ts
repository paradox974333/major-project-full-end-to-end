import type { CableSegment } from "@/lib/types"
import cablesData from "./cables.json"

/** Convert slug IDs like "2africa" → "2Africa", "acs-alaska-oregon-network-akorn" → "ACS Alaska Oregon Network Akorn" */
function formatCableName(id: string): string {
    return id
        .split("-")
        .map((word) => {
            if (/^\d+$/.test(word)) return word
            if (word.length <= 3) return word.toUpperCase()
            return word.charAt(0).toUpperCase() + word.slice(1)
        })
        .join(" ")
}

/** Estimate cable length from coordinate pairs using Haversine formula */
function estimateLengthKm(coordinates: [number, number][]): number {
    if (coordinates.length < 2) return 500 // default

    let totalKm = 0
    for (let i = 0; i < coordinates.length - 1; i++) {
        const [lon1, lat1] = coordinates[i]
        const [lon2, lat2] = coordinates[i + 1]
        const R = 6371 // Earth radius in km
        const dLat = ((lat2 - lat1) * Math.PI) / 180
        const dLon = ((lon2 - lon1) * Math.PI) / 180
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos((lat1 * Math.PI) / 180) *
            Math.cos((lat2 * Math.PI) / 180) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2)
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
        totalKm += R * c
    }

    return Math.max(totalKm, 100) // minimum 100km
}

const processedCables = (cablesData as CableSegment[]).map((cable) => ({
    ...cable,
    name:
        cable.name && cable.name !== "Unknown Cable"
            ? cable.name
            : formatCableName(cable.id),
    lengthKm: cable.lengthKm > 0 ? cable.lengthKm : estimateLengthKm(cable.coordinates),
}))

export const CACHED_CABLES = processedCables
