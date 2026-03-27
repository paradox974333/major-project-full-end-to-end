"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Globe from "react-globe.gl"
import { buildCableSegments } from "@/lib/impact-utils"
import type { CableSegment, CableSegmentRisk } from "@/lib/types"

interface GlobeVizProps {
  cables: CableSegment[]
  risks: CableSegmentRisk[]
  selectedCableId?: string | null
  onCableClick?: (cableId: string) => void
}

export default function GlobeViz({ cables, risks, selectedCableId, onCableClick }: GlobeVizProps) {
  const globeEl = useRef<any>(undefined)
  const [mounted, setMounted] = useState(false)
  const GlobeComponent = Globe as any

  useEffect(() => {
    setMounted(true)
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true
      globeEl.current.controls().autoRotateSpeed = 0.45
    }
  }, [])

  const vizData = useMemo(() => {
    const segmentRisks = new Map(risks.map((risk) => [`${risk.cableId}:${risk.segmentIndex}`, risk]))

    return cables.flatMap((cable) =>
      buildCableSegments(cable).map((segment) => {
        const risk = segmentRisks.get(`${segment.cableId}:${segment.segmentIndex}`)
        return {
          ...segment,
          riskScore: risk?.riskScore ?? 0,
          riskLevel: risk?.riskLevel ?? "LOW",
          explanation: risk?.explanation?.headline,
        }
      }),
    )
  }, [cables, risks])

  useEffect(() => {
    if (!globeEl.current || !selectedCableId) return

    const selectedSegment = vizData.find((segment) => segment.cableId === selectedCableId)
    if (!selectedSegment) return

    globeEl.current.pointOfView(
      {
        lat: selectedSegment.meanLat,
        lng: selectedSegment.meanLon,
        altitude: 1.6,
      },
      1200,
    )
  }, [selectedCableId, vizData])

  const getCableColor = (d: any) => {
    const score = d.riskScore
    if (score >= 0.7) return "#ef4444"
    if (score >= 0.4) return "#f97316"
    if (score >= 0.2) return "#eab308"
    return "#06b6d4"
  }

  const getCableAltitude = (d: any) => {
    const isSelected = d.cableId === selectedCableId
    const base = d.riskScore > 0.2 ? 0.02 + d.riskScore * 0.05 : 0.01
    return isSelected ? base + 0.015 : base
  }

  if (!mounted) {
    return <div className="w-full h-full bg-[#050713] flex items-center justify-center">Loading Globe...</div>
  }

  return (
    <GlobeComponent
      ref={globeEl}
      globeImageUrl="https://us1.discourse-cdn.com/flex024/uploads/plot/original/3X/c/d/cde0e6c8ef16b160bb50390eced5e16953039965.jpeg"
      backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
      pathsData={vizData}
      pathPoints="coordinates"
      pathPointLat={(point: [number, number]) => point[1]}
      pathPointLng={(point: [number, number]) => point[0]}
      pathColor={getCableColor}
      pathDashLength={0.08}
      pathDashGap={0.01}
      pathDashAnimateTime={(d: any) => (d.cableId === selectedCableId ? 5000 : 12000)}
      pathAltitude={getCableAltitude}
      pathStroke={(d: any) => (d.cableId === selectedCableId ? 3.5 : 1.8)}
      pathLabel={(d: any) => {
        const item = d as any
        return `
          <div style="background: rgba(2, 6, 23, 0.92); padding: 10px; border-radius: 8px; color: white; font-family: sans-serif; max-width: 260px;">
            <div style="font-weight: 700; margin-bottom: 4px;">${item.cableName} - Segment ${item.segmentIndex + 1}</div>
            <div>Risk: ${item.riskLevel} (${(item.riskScore * 100).toFixed(0)}%)</div>
            <div style="margin-top: 6px; font-size: 12px; color: #cbd5e1;">${item.explanation ?? "Run a prediction to inspect this route segment."}</div>
          </div>
        `
      }}
      onPathClick={(d: any) => onCableClick?.(d.cableId)}
      atmosphereColor="#3b82f6"
      atmosphereAltitude={0.15}
    />
  )
}
