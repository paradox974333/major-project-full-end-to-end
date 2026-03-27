"use client"

import type { ImpactResponse } from "@/lib/types"

function downloadBlob(filename: string, blob: Blob) {
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement("a")
  anchor.href = url
  anchor.download = filename
  anchor.click()
  URL.revokeObjectURL(url)
}

export function exportImpactAsJson(filename: string, payload: ImpactResponse) {
  downloadBlob(filename, new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" }))
}

export function exportImpactAsCsv(filename: string, payload: ImpactResponse) {
  const cableHeader = ["cable_id", "cable_name", "max_risk", "mean_risk", "hotspot_count", "worst_segment_index"]
  const cableRows = payload.cableAggregates.map((cable) => [
    cable.cableId,
    `"${cable.cableName.replaceAll('"', '""')}"`,
    cable.maxRisk.toFixed(4),
    cable.meanRisk.toFixed(4),
    cable.hotspotCount.toString(),
    cable.worstSegment.segmentIndex.toString(),
  ])

  const sectorHeader = ["sector_id", "sector_label", "risk_score", "risk_level", "status"]
  const sectorRows = payload.sectorImpacts.map((sector) => [
    sector.id,
    `"${sector.label.replaceAll('"', '""')}"`,
    sector.riskScore.toFixed(4),
    sector.riskLevel,
    `"${sector.status.replaceAll('"', '""')}"`,
  ])

  const csv = [
    "cable_risk_summary",
    cableHeader.join(","),
    ...cableRows.map((row) => row.join(",")),
    "",
    "sector_impact_summary",
    sectorHeader.join(","),
    ...sectorRows.map((row) => row.join(",")),
  ].join("\n")
  downloadBlob(filename, new Blob([csv], { type: "text/csv;charset=utf-8" }))
}
