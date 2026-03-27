"use client"

import { useMemo, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import GlobeViz from "@/components/globe-wrapper"
import { Sidebar } from "@/components/sidebar"
import { AnalyticsPanel } from "@/components/analytics-panel"
import type { CableSegment, ImpactResponse } from "@/lib/types"
import { BarChart3, Globe2 } from "lucide-react"

export default function Page() {
  const [impactData, setImpactData] = useState<ImpactResponse | null>(null)
  const [view, setView] = useState<"globe" | "analytics">("globe")
  const [selectedCableId, setSelectedCableId] = useState<string | null>(null)

  const { data: cables } = useQuery<CableSegment[]>({
    queryKey: ["cables"],
    queryFn: async () => {
      const res = await fetch("/api/cables")
      if (!res.ok) throw new Error("Failed to fetch cables")
      return res.json()
    },
    staleTime: Number.POSITIVE_INFINITY,
  })

  const cableList = cables ?? []
  const segmentRisks = impactData?.segmentRisks ?? []

  const selectedCableName = useMemo(
    () => cableList.find((cable) => cable.id === selectedCableId)?.name ?? null,
    [cableList, selectedCableId],
  )

  const handleImpactUpdate = (data: ImpactResponse) => {
    setImpactData(data)

    if (!selectedCableId && data.cableAggregates[0]) {
      setSelectedCableId(data.cableAggregates[0].cableId)
    }
  }

  return (
    <main className="flex h-screen w-screen overflow-hidden bg-[#050713]">
      <div className="flex-1 min-w-0 relative flex flex-col">
        <div className="absolute top-4 left-4 z-30 flex gap-1 bg-black/40 backdrop-blur-md rounded-lg p-1 border border-white/10">
          <button
            onClick={() => setView("globe")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              view === "globe" ? "bg-cyan-500/20 text-cyan-300 shadow-inner" : "text-neutral-400 hover:text-white"
            }`}
          >
            <Globe2 className="w-3.5 h-3.5" /> Globe
          </button>
          <button
            onClick={() => setView("analytics")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              view === "analytics" ? "bg-violet-500/20 text-violet-300 shadow-inner" : "text-neutral-400 hover:text-white"
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" /> Analytics
          </button>
        </div>

        {selectedCableName && view === "globe" ? (
          <div className="absolute top-4 left-44 z-20 rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-xs text-slate-200 backdrop-blur-md">
            Inspecting <span className="font-semibold text-white">{selectedCableName}</span>
          </div>
        ) : null}

        {view === "globe" ? (
          <div className="flex-1 relative">
            <GlobeViz
              cables={cableList}
              risks={segmentRisks}
              selectedCableId={selectedCableId}
              onCableClick={setSelectedCableId}
            />
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto pt-14 px-4 pb-8">
            <AnalyticsPanel />
          </div>
        )}
      </div>

      <div className="w-[28rem] h-full z-50">
        <Sidebar
          cables={cableList}
          impactData={impactData}
          selectedCableId={selectedCableId}
          onCableSelect={setSelectedCableId}
          onImpactUpdate={handleImpactUpdate}
        />
      </div>
    </main>
  )
}
