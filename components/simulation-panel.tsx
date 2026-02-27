"use client"

import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import type { SimulationResponse } from "@/lib/types"
import { Loader2, Play, Clock, Zap, AlertTriangle, Shield, ShieldAlert } from "lucide-react"
import { format } from "date-fns"

interface SimulationPanelProps {
  onSimulationComplete: (data: SimulationResponse) => void
}

export function SimulationPanel({ onSimulationComplete }: SimulationPanelProps) {
  const [speed, setSpeed] = useState(1500)
  const [dirLon, setDirLon] = useState(0)
  const [dirLat, setDirLat] = useState(0)
  const [startTime, setStartTime] = useState(new Date().toISOString().slice(0, 16))

  const transitHours = 1.496e8 / speed / 3600

  const simMutation = useMutation({
    mutationFn: async () => {
      const res = await fetch("/api/impact/simulate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          startTime: new Date(startTime).toISOString(),
          cmeSpeedKms: speed,
          directionLon: dirLon,
          directionLat: dirLat,
        }),
      })
      if (!res.ok) throw new Error("Simulation failed")
      return res.json()
    },
    onSuccess: (data) => {
      onSimulationComplete(data)
    },
  })

  const getSpeedCategory = (s: number) => {
    if (s >= 2500) return { label: "Extreme", color: "text-red-400" }
    if (s >= 1800) return { label: "Fast", color: "text-orange-400" }
    if (s >= 1000) return { label: "Moderate", color: "text-yellow-400" }
    return { label: "Slow", color: "text-green-400" }
  }
  const speedCat = getSpeedCategory(speed)

  const getKpColor = (kp: number) => {
    if (kp >= 7) return "text-red-400"
    if (kp >= 5) return "text-orange-400"
    if (kp >= 3) return "text-yellow-400"
    return "text-green-400"
  }

  const getRiskBadge = (risk: number) => {
    if (risk >= 0.7) return { bg: "bg-red-900/60 text-red-200 border-red-700/50", icon: ShieldAlert }
    if (risk >= 0.4) return { bg: "bg-orange-900/60 text-orange-200 border-orange-700/50", icon: AlertTriangle }
    if (risk >= 0.2) return { bg: "bg-yellow-900/60 text-yellow-200 border-yellow-700/50", icon: Shield }
    return { bg: "bg-green-900/60 text-green-200 border-green-700/50", icon: Shield }
  }

  return (
    <div className="space-y-5 p-4">
      <div className="space-y-4">
        {/* Start Time */}
        <div>
          <label className="block text-xs text-slate-400 mb-1">CME Launch Time (UTC)</label>
          <input
            type="datetime-local"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-sm text-white focus:border-violet-500 outline-none"
          />
        </div>

        {/* Speed Slider */}
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-400">CME Speed</span>
            <span className={`font-mono font-bold ${speedCat.color}`}>
              {speed} km/s — {speedCat.label}
            </span>
          </div>
          <input
            type="range"
            min="400"
            max="3000"
            step="50"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="w-full accent-violet-500"
          />
          <div className="flex justify-between text-[10px] text-slate-600 mt-0.5">
            <span>400</span>
            <span>1000</span>
            <span>2000</span>
            <span>3000</span>
          </div>
          <div className="text-xs text-slate-500 mt-1 flex items-center gap-1">
            <Clock className="w-3 h-3" /> Est. Transit: {transitHours.toFixed(1)} hours
          </div>
        </div>

        {/* Direction Inputs */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-slate-400 mb-1">Impact Lat (°)</label>
            <input
              type="number"
              min="-90"
              max="90"
              value={dirLat}
              onChange={(e) => setDirLat(Number(e.target.value))}
              className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-sm text-white focus:border-violet-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1">Impact Lon (°)</label>
            <input
              type="number"
              min="-180"
              max="180"
              value={dirLon}
              onChange={(e) => setDirLon(Number(e.target.value))}
              className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-sm text-white focus:border-violet-500 outline-none"
            />
          </div>
        </div>
      </div>

      <button
        onClick={() => simMutation.mutate()}
        disabled={simMutation.isPending}
        className="w-full py-3 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-md transition-all shadow-[0_0_15px_rgba(124,58,237,0.5)] disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {simMutation.isPending ? (
          <Loader2 className="animate-spin" />
        ) : (
          <>
            <Play className="w-4 h-4" /> RUN SIMULATION
          </>
        )}
      </button>

      {simMutation.data && (() => {
        const data = simMutation.data
        const kpPeak = data.syntheticKpPeak
        const affectedCables = data.cableAggregates.filter((c: { maxRisk: number }) => c.maxRisk > 0.05)
        const highRiskCables = data.cableAggregates.filter((c: { maxRisk: number }) => c.maxRisk > 0.4)

        return (
          <div className="space-y-3">
            {/* Summary Card */}
            <div className="bg-slate-900/80 border border-violet-500/30 rounded-lg p-4">
              <h4 className="text-violet-400 text-sm font-bold mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4" /> Simulation Results
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Arrival:</span>
                  <span className="text-white font-mono">
                    {format(new Date(data.predictedArrivalTime), "MMM d, HH:mm")} UTC
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Peak Intensity:</span>
                  <span className={`font-bold ${getKpColor(kpPeak)}`}>
                    Kp {kpPeak.toFixed(1)} ({data.gScale})
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Cables Affected:</span>
                  <span className="text-white font-bold">{affectedCables.length} / {data.cableAggregates.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">High Risk:</span>
                  <span className={`font-bold ${highRiskCables.length > 0 ? "text-red-400" : "text-green-400"}`}>
                    {highRiskCables.length} cables
                  </span>
                </div>
              </div>
            </div>

            {/* Cable list */}
            {affectedCables.length > 0 ? (
              <div>
                <h4 className="text-sm font-semibold text-slate-300 mb-2">
                  Most Affected Cables
                </h4>
                <div className="max-h-52 overflow-y-auto space-y-1.5 pr-1 scrollbar-thin scrollbar-thumb-slate-700">
                  {data.cableAggregates
                    .filter((c: { maxRisk: number }) => c.maxRisk > 0.05)
                    .sort((a: { maxRisk: number }, b: { maxRisk: number }) => b.maxRisk - a.maxRisk)
                    .slice(0, 15)
                    .map((cable: { cableId: string; cableName: string; maxRisk: number }) => {
                      const badge = getRiskBadge(cable.maxRisk)
                      return (
                        <div
                          key={cable.cableId}
                          className={`p-2 rounded border flex justify-between items-center ${badge.bg}`}
                        >
                          <div className="truncate max-w-[55%] text-xs font-medium">
                            {cable.cableName}
                          </div>
                          <div className="text-xs font-bold font-mono">
                            {(cable.maxRisk * 100).toFixed(1)}%
                          </div>
                        </div>
                      )
                    })}
                </div>
              </div>
            ) : (
              <div className="text-center py-4 text-sm text-slate-500">
                <Shield className="w-8 h-8 mx-auto mb-2 text-green-500/50" />
                All cables within safe limits.
                <div className="text-xs mt-1">Try increasing CME speed above 1500 km/s</div>
              </div>
            )}
          </div>
        )
      })()}
    </div>
  )
}
