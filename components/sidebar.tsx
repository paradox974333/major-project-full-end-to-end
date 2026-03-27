"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Activity, Bell, Globe2 } from "lucide-react"
import { RealTimePanel } from "./real-time-panel"
import { SimulationPanel } from "./simulation-panel"
import { FlareClassifierPanel } from "./flare-classifier-panel"
import { HistoryPanel } from "./history-panel"
import { CableIntelPanel } from "./cable-intel-panel"
import { useToast } from "@/hooks/use-toast"
import { useWatchlist } from "@/hooks/use-watchlist"
import type { CableSegment, HistoricalReplayPreset, ImpactResponse } from "@/lib/types"

type Mode = "realtime" | "simulation" | "classify" | "history"

interface SidebarProps {
  cables: CableSegment[]
  impactData: ImpactResponse | null
  selectedCableId: string | null
  onCableSelect: (cableId: string) => void
  onImpactUpdate: (data: ImpactResponse) => void
}

const TABS: { id: Mode; label: string; activeColor: string }[] = [
  { id: "realtime", label: "Real-Time", activeColor: "text-cyan-400 border-cyan-400 bg-cyan-950/10" },
  { id: "simulation", label: "Simulate", activeColor: "text-violet-400 border-violet-400 bg-violet-950/10" },
  { id: "classify", label: "ML Classify", activeColor: "text-amber-400 border-amber-400 bg-amber-950/10" },
  { id: "history", label: "History", activeColor: "text-emerald-400 border-emerald-400 bg-emerald-950/10" },
]

export function Sidebar({ cables, impactData, selectedCableId, onCableSelect, onImpactUpdate }: SidebarProps) {
  const [mode, setMode] = useState<Mode>("realtime")
  const [simulationPreset, setSimulationPreset] = useState<HistoricalReplayPreset | null>(null)
  const { toast } = useToast()
  const { watchlist, addOrUpdate, remove } = useWatchlist()
  const alertStateRef = useRef<Record<string, boolean>>({})

  const selectedCableName = useMemo(
    () => cables.find((cable) => cable.id === selectedCableId)?.name ?? "No cable selected",
    [cables, selectedCableId],
  )

  useEffect(() => {
    if (!impactData) return

    watchlist.forEach((entry) => {
      const aggregate = impactData.cableAggregates.find((cable) => cable.cableId === entry.cableId)
      const cableName = cables.find((cable) => cable.id === entry.cableId)?.name ?? entry.cableId
      const triggered = (aggregate?.maxRisk ?? 0) >= entry.threshold
      const key = `${impactData.updatedAt}:${entry.cableId}`

      if (triggered && !alertStateRef.current[key]) {
        toast({
          title: "Watchlist threshold reached",
          description: `${cableName} crossed ${Math.round(entry.threshold * 100)}% risk.`,
        })
        alertStateRef.current[key] = true
      }
    })
  }, [cables, impactData, toast, watchlist])

  const handleReplayEvent = (preset: HistoricalReplayPreset) => {
    setSimulationPreset(preset)
    setMode("simulation")
  }

  return (
    <div className="w-full h-full flex flex-col bg-[#050810] border-l border-slate-800 shadow-2xl">
      <div className="p-6 border-b border-slate-800">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h1 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Globe2 className="text-cyan-500" />
              Solar Impact
            </h1>
            <p className="text-xs text-slate-400 mt-1">Cable and infrastructure storm intelligence</p>
          </div>
          <div className="rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1.5 text-[11px] text-slate-300">
            <Bell className="inline w-3 h-3 mr-1 text-cyan-400" />
            {watchlist.length} watched
          </div>
        </div>
        <div className="mt-3 text-[11px] text-slate-500">Selected: {selectedCableName}</div>
      </div>

      <div className="flex border-b border-slate-800">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setMode(tab.id)}
            className={`flex-1 py-3 text-xs font-medium transition-colors ${
              mode === tab.id ? `${tab.activeColor} border-b-2` : "text-slate-500 hover:text-slate-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto">
        {mode === "realtime" && (
          <RealTimePanel onImpactUpdate={onImpactUpdate} onCableSelect={onCableSelect} />
        )}
        {mode === "simulation" && (
          <SimulationPanel
            onSimulationComplete={onImpactUpdate}
            onCableSelect={onCableSelect}
            preset={simulationPreset}
          />
        )}
        {mode === "classify" && <FlareClassifierPanel />}
        {mode === "history" && <HistoryPanel impactData={impactData} onReplayEvent={handleReplayEvent} />}

        <CableIntelPanel
          cables={cables}
          impactData={impactData}
          selectedCableId={selectedCableId}
          onCableSelect={onCableSelect}
          watchlist={watchlist}
          onSaveWatchlist={addOrUpdate}
          onRemoveWatchlist={remove}
        />
      </div>

      <div className="p-4 border-t border-slate-800 text-[10px] text-slate-600 leading-tight">
        <p className="mb-2">
          <Activity className="inline w-3 h-3 mr-1" />
          Educational Tool Only
        </p>
        <p className="mb-1">History replay, watchlists, export, and cross-sector impact outlooks are now built into the workflow.</p>
        <p>Data sources: NOAA SWPC, NASA DONKI. ML models: Gradient Boosting + XGBoost hybrid. Not for operational use.</p>
      </div>
    </div>
  )
}
