"use client"

import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import GlobeViz from "@/components/globe-wrapper"
import { Sidebar } from "@/components/sidebar"
import { AnalyticsPanel } from "@/components/analytics-panel"
import type { CableSegment, CableSegmentRisk, ImpactResponse } from "@/lib/types"
import { Globe2, BarChart3 } from "lucide-react"

export default function Page() {
  const [risks, setRisks] = useState<CableSegmentRisk[]>([])
  const [view, setView] = useState<"globe" | "analytics">("globe")

  // Initial Cable Fetch
  const { data: cables } = useQuery<CableSegment[]>({
    queryKey: ["cables"],
    queryFn: async () => {
      const res = await fetch("/api/cables")
      if (!res.ok) throw new Error("Failed to fetch cables")
      return res.json()
    },
    staleTime: Number.POSITIVE_INFINITY,
  })

  const handleImpactUpdate = (data: ImpactResponse) => {
    setRisks(data.segmentRisks)
  }

  return (
    <main className="flex h-screen w-screen overflow-hidden bg-[#050713]">
      {/* Left: Globe / Analytics Area */}
      <div className="flex-1 min-w-0 relative flex flex-col">
        {/* View Toggle */}
        <div className="absolute top-4 left-4 z-30 flex gap-1 bg-black/40 backdrop-blur-md rounded-lg p-1 border border-white/10">
          <button
            onClick={() => setView("globe")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${view === "globe"
                ? "bg-cyan-500/20 text-cyan-300 shadow-inner"
                : "text-neutral-400 hover:text-white"
              }`}
          >
            <Globe2 className="w-3.5 h-3.5" /> Globe
          </button>
          <button
            onClick={() => setView("analytics")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${view === "analytics"
                ? "bg-violet-500/20 text-violet-300 shadow-inner"
                : "text-neutral-400 hover:text-white"
              }`}
          >
            <BarChart3 className="w-3.5 h-3.5" /> Analytics
          </button>
        </div>

        {/* Content */}
        {view === "globe" ? (
          <div className="flex-1 relative">
            <GlobeViz cables={cables || []} risks={risks} />
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto pt-14 px-4 pb-8">
            <AnalyticsPanel />
          </div>
        )}
      </div>

      {/* Sidebar Control Panel */}
      <div className="w-96 h-full z-50">
        <Sidebar onImpactUpdate={handleImpactUpdate} />
      </div>
    </main>
  )
}
