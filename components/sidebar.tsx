"use client"

import { useState } from "react"
import { RealTimePanel } from "./real-time-panel"
import { SimulationPanel } from "./simulation-panel"
import { FlareClassifierPanel } from "./flare-classifier-panel"
import type { ImpactResponse } from "@/lib/types"
import { Activity, Globe2, Sun } from "lucide-react"

type Mode = "realtime" | "simulation" | "classify"

interface SidebarProps {
  onImpactUpdate: (data: ImpactResponse) => void
}

const TABS: { id: Mode; label: string; activeColor: string; bgClass: string }[] = [
  { id: "realtime", label: "Real-Time", activeColor: "text-cyan-400 border-cyan-400 bg-cyan-950/10", bgClass: "" },
  { id: "simulation", label: "Simulate", activeColor: "text-violet-400 border-violet-400 bg-violet-950/10", bgClass: "" },
  { id: "classify", label: "ML Classify", activeColor: "text-amber-400 border-amber-400 bg-amber-950/10", bgClass: "" },
]

export function Sidebar({ onImpactUpdate }: SidebarProps) {
  const [mode, setMode] = useState<Mode>("realtime")

  return (
    <div className="w-full h-full flex flex-col bg-[#050810] border-l border-slate-800 shadow-2xl">
      {/* Header */}
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
          <Globe2 className="text-cyan-500" />
          Solar Impact
        </h1>
        <p className="text-xs text-slate-400 mt-1">Submarine Cable Risk Predictor</p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-800">
        {TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setMode(tab.id)}
            className={`flex-1 py-3 text-xs font-medium transition-colors ${mode === tab.id
                ? `${tab.activeColor} border-b-2`
                : "text-slate-500 hover:text-slate-300"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {mode === "realtime" && <RealTimePanel onImpactUpdate={onImpactUpdate} />}
        {mode === "simulation" && <SimulationPanel onSimulationComplete={onImpactUpdate} />}
        {mode === "classify" && <FlareClassifierPanel />}
      </div>

      {/* Footer / Disclaimer */}
      <div className="p-4 border-t border-slate-800 text-[10px] text-slate-600 leading-tight">
        <p className="mb-2">
          <Activity className="inline w-3 h-3 mr-1" />
          Educational Tool Only
        </p>
        Data sources: NOAA SWPC, NASA DONKI. ML models: Gradient Boosting + XGBoost hybrid. Not for operational use.
      </div>
    </div>
  )
}
