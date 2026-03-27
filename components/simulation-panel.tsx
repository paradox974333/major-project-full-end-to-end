"use client"

import { useEffect, useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { AlertTriangle, Download, Loader2, Play, Shield, ShieldAlert, Zap } from "lucide-react"
import { format } from "date-fns"
import { SectorImpactPanel } from "@/components/sector-impact-panel"
import { exportImpactAsCsv, exportImpactAsJson } from "@/lib/export-utils"
import type { HistoricalReplayPreset, SimulationResponse } from "@/lib/types"

interface SimulationPanelProps {
  onSimulationComplete: (data: SimulationResponse) => void
  onCableSelect: (cableId: string) => void
  preset?: HistoricalReplayPreset | null
}

export function SimulationPanel({ onSimulationComplete, onCableSelect, preset }: SimulationPanelProps) {
  const [speed, setSpeed] = useState(1500)
  const [dirLon, setDirLon] = useState(0)
  const [dirLat, setDirLat] = useState(0)
  const [startTime, setStartTime] = useState(new Date().toISOString().slice(0, 16))

  useEffect(() => {
    if (!preset) return

    setSpeed(preset.cmeSpeedKms)
    setDirLon(preset.directionLon)
    setDirLat(preset.directionLat)
    setStartTime(new Date(preset.startTime).toISOString().slice(0, 16))
  }, [preset])

  const transitHours = 1.496e8 / speed / 3600

  const simMutation = useMutation<SimulationResponse>({
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

  const getSpeedCategory = (value: number) => {
    if (value >= 2500) return { label: "Extreme", color: "text-red-400" }
    if (value >= 1800) return { label: "Fast", color: "text-orange-400" }
    if (value >= 1000) return { label: "Moderate", color: "text-yellow-400" }
    return { label: "Slow", color: "text-green-400" }
  }

  const speedCat = getSpeedCategory(speed)

  const getRiskBadge = (risk: number) => {
    if (risk >= 0.7) return { bg: "bg-red-900/60 text-red-200 border-red-700/50", icon: ShieldAlert }
    if (risk >= 0.4) return { bg: "bg-orange-900/60 text-orange-200 border-orange-700/50", icon: AlertTriangle }
    if (risk >= 0.2) return { bg: "bg-yellow-900/60 text-yellow-200 border-yellow-700/50", icon: Shield }
    return { bg: "bg-green-900/60 text-green-200 border-green-700/50", icon: Shield }
  }

  return (
    <div className="space-y-5 p-4">
      {preset ? (
        <div className="rounded-xl border border-violet-500/20 bg-violet-500/10 p-3 text-xs text-violet-200">
          Loaded historical replay preset: <span className="font-semibold">{preset.label}</span>
        </div>
      ) : null}

      <div className="space-y-4">
        <div>
          <label className="block text-xs text-slate-400 mb-1">CME Launch Time (UTC)</label>
          <input
            type="datetime-local"
            value={startTime}
            onChange={(event) => setStartTime(event.target.value)}
            className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-sm text-white focus:border-violet-500 outline-none"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-400">CME Speed</span>
            <span className={`font-mono font-bold ${speedCat.color}`}>
              {speed} km/s - {speedCat.label}
            </span>
          </div>
          <input
            type="range"
            min="400"
            max="3000"
            step="50"
            value={speed}
            onChange={(event) => setSpeed(Number(event.target.value))}
            className="w-full accent-violet-500"
          />
          <div className="text-xs text-slate-500 mt-1">Estimated transit time: {transitHours.toFixed(1)} hours</div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-slate-400 mb-1">Impact Lat (deg)</label>
            <input
              type="number"
              min="-90"
              max="90"
              value={dirLat}
              onChange={(event) => setDirLat(Number(event.target.value))}
              className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-sm text-white focus:border-violet-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1">Impact Lon (deg)</label>
            <input
              type="number"
              min="-180"
              max="180"
              value={dirLon}
              onChange={(event) => setDirLon(Number(event.target.value))}
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
            <Play className="w-4 h-4" /> RUN STORM SIMULATION
          </>
        )}
      </button>

      {simMutation.data ? (
        <div className="space-y-3">
          <div className="bg-slate-900/80 border border-violet-500/30 rounded-lg p-4">
            <h4 className="text-violet-400 text-sm font-bold mb-3 flex items-center gap-2">
              <Zap className="w-4 h-4" /> Simulation Results
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-400">Arrival:</span>
                <span className="text-white font-mono">{format(new Date(simMutation.data.predictedArrivalTime), "MMM d, HH:mm")} UTC</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Peak Intensity:</span>
                <span className="font-bold text-white">Kp {simMutation.data.syntheticKpPeak.toFixed(1)} ({simMutation.data.gScale})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Direction:</span>
                <span className="text-white font-mono">{dirLat.toFixed(0)} deg / {dirLon.toFixed(0)} deg</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Closest Match:</span>
                <span className="text-white font-medium">{simMutation.data.matchedEvents[0]?.name ?? "N/A"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">High-Risk Systems:</span>
                <span className="text-white font-medium">{simMutation.data.summary.highRiskSystems ?? 0}</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-slate-700 bg-slate-900/60 p-4">
            <div className="text-xs uppercase tracking-wider text-slate-500 mb-2">Historical Comparison</div>
            {simMutation.data.matchedEvents[0] ? (
              <>
                <div className="text-sm font-semibold text-white">{simMutation.data.matchedEvents[0].name}</div>
                <div className="text-xs text-slate-400 mt-1">
                  {simMutation.data.matchedEvents[0].date} - {Math.round(simMutation.data.matchedEvents[0].similarity * 100)}% match
                </div>
                <div className="text-xs text-slate-300 mt-2">{simMutation.data.matchedEvents[0].matchReason}</div>
              </>
            ) : null}
          </div>

          <SectorImpactPanel
            sectorImpacts={simMutation.data.sectorImpacts}
            title="Simulated Cross-Sector Impact Outlook"
          />

          <div>
            <h4 className="text-sm font-semibold text-slate-300 mb-2">Most Affected Cables</h4>
            <div className="max-h-52 overflow-y-auto space-y-1.5 pr-1">
              {simMutation.data.cableAggregates.slice(0, 12).map((cable) => {
                const badge = getRiskBadge(cable.maxRisk)
                return (
                  <button
                    key={cable.cableId}
                    onClick={() => onCableSelect(cable.cableId)}
                    className={`w-full p-2 rounded border flex justify-between items-center ${badge.bg}`}
                  >
                    <div className="truncate max-w-[55%] text-xs font-medium text-left">{cable.cableName}</div>
                    <div className="text-xs font-bold font-mono">{(cable.maxRisk * 100).toFixed(1)}%</div>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => exportImpactAsJson("simulation-impact-report.json", simMutation.data)}
              className="flex-1 rounded-lg border border-slate-700 px-3 py-2 text-xs font-semibold text-slate-200 hover:border-violet-500/40"
            >
              <Download className="inline w-3 h-3 mr-1" />
              Export JSON
            </button>
            <button
              onClick={() => exportImpactAsCsv("simulation-impact-report.csv", simMutation.data)}
              className="flex-1 rounded-lg border border-slate-700 px-3 py-2 text-xs font-semibold text-slate-200 hover:border-violet-500/40"
            >
              <Download className="inline w-3 h-3 mr-1" />
              Export CSV
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}
