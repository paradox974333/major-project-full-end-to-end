"use client"

import { useEffect, useRef, useState, useMemo } from "react"
import Globe from "react-globe.gl"
import type { CableSegment, CableSegmentRisk } from "@/lib/types"

interface GlobeVizProps {
  cables: CableSegment[]
  risks: CableSegmentRisk[]
  onCableClick?: (cableId: string) => void
}

export default function GlobeViz({ cables, risks, onCableClick }: GlobeVizProps) {
  const globeEl = useRef<any>()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true
      globeEl.current.controls().autoRotateSpeed = 0.5
    }
  }, [])

  // Merge risk data into cable objects for visualization
  const vizData = useMemo(() => {
    return cables.map((cable) => {
      const risk = risks.find((r) => r.cableId === cable.id)
      return {
        ...cable,
        riskScore: risk?.riskScore || 0,
        riskLevel: risk?.riskLevel || "LOW",
      }
    })
  }, [cables, risks])

  const getCableColor = (d: any) => {
    const score = d.riskScore
    if (score >= 0.7) return "#ef4444" // Red
    if (score >= 0.4) return "#f97316" // Orange
    if (score >= 0.2) return "#eab308" // Yellow
    return "#06b6d4" // Cyan (Low/Base)
  }

  const getCableAltitude = (d: any) => {
    return d.riskScore > 0.2 ? 0.02 + d.riskScore * 0.05 : 0.01
  }

  if (!mounted)
    return <div className="w-full h-full bg-[#050713] flex items-center justify-center">Loading Globe...</div>

  return (
    <Globe
      ref={globeEl}
      globeImageUrl="https://us1.discourse-cdn.com/flex024/uploads/plot/original/3X/c/d/cde0e6c8ef16b160bb50390eced5e16953039965.jpeg"
      backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
      pathsData={vizData}
      pathPoints="coordinates"
      pathPointLat={(p) => p[1]}
      pathPointLng={(p) => p[0]}
      pathColor={getCableColor}
      pathDashLength={0.1}
      pathDashGap={0.005}
      pathDashAnimateTime={12000}
      pathAltitude={getCableAltitude}
      pathStroke={2}
      pathLabel={(d) => `
        <div style="background: rgba(0,0,0,0.8); padding: 8px; border-radius: 4px; color: white; font-family: sans-serif;">
          <b>${(d as any).name}</b><br/>
          Risk: ${(d as any).riskLevel} (${((d as any).riskScore * 100).toFixed(0)}%)
        </div>
      `}
      onPathClick={(d) => onCableClick?.((d as any).id)}
      atmosphereColor="#3b82f6"
      atmosphereAltitude={0.15}
    />
  )
}
