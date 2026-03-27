"use client"

import { useMutation, useQuery } from "@tanstack/react-query"
import { AlertTriangle, Download, Loader2, RefreshCw } from "lucide-react"
import { SectorImpactPanel } from "@/components/sector-impact-panel"
import { exportImpactAsCsv, exportImpactAsJson } from "@/lib/export-utils"
import type { ImpactResponse, SpaceWeather } from "@/lib/types"

interface RealTimePanelProps {
  onImpactUpdate: (data: ImpactResponse) => void
  onCableSelect: (cableId: string) => void
}

export function RealTimePanel({ onImpactUpdate, onCableSelect }: RealTimePanelProps) {
  const { data: weather, isLoading } = useQuery<SpaceWeather>({
    queryKey: ["space-weather"],
    queryFn: async () => {
      const res = await fetch("/api/space-weather/realtime")
      if (!res.ok) throw new Error("Failed to fetch weather")
      return res.json()
    },
    refetchInterval: 60000,
  })

  const impactMutation = useMutation<ImpactResponse>({
    mutationFn: async () => {
      const res = await fetch("/api/impact/realtime", { method: "POST" })
      if (!res.ok) throw new Error("Failed to calculate impact")
      return res.json()
    },
    onSuccess: (data) => {
      onImpactUpdate(data)
    },
  })

  if (isLoading) {
    return (
      <div className="p-4 text-cyan-500">
        <Loader2 className="animate-spin" /> Loading telemetry...
      </div>
    )
  }

  if (!weather) return <div className="p-4 text-red-500">Telemetry Offline</div>

  const getKpColor = (kp: number) => {
    if (kp >= 7) return "bg-red-600 text-white"
    if (kp >= 5) return "bg-orange-500 text-white"
    if (kp >= 3) return "bg-yellow-500 text-black"
    return "bg-green-500 text-black"
  }

  return (
    <div className="space-y-6 p-4">
      <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 backdrop-blur-sm">
        <h3 className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
          <RefreshCw className="w-3 h-3" /> Solar Wind (L1)
        </h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-mono font-bold text-white">{weather.solarWind.speedKms.toFixed(0)}</div>
            <div className="text-xs text-slate-400">km/s</div>
          </div>
          <div>
            <div className="text-2xl font-mono font-bold text-white">{weather.solarWind.densityPcm3.toFixed(1)}</div>
            <div className="text-xs text-slate-400">p/cm3</div>
          </div>
          <div>
            <div className={`text-2xl font-mono font-bold ${weather.solarWind.bzNtl < -5 ? "text-red-400" : "text-white"}`}>
              {weather.solarWind.bzNtl.toFixed(1)}
            </div>
            <div className="text-xs text-slate-400">Bz (nT)</div>
          </div>
        </div>
        {weather.solarWind.bzNtl < -5 && (
          <div className="mt-3 text-xs text-red-400 flex items-center gap-1">
            <AlertTriangle className="w-3 h-3" /> Southward Bz detected: increased coupling risk.
          </div>
        )}
      </div>

      <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 backdrop-blur-sm">
        <h3 className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-3">Planetary K-Index</h3>
        <div className="flex items-center justify-between">
          <div className={`px-4 py-2 rounded-md font-bold text-xl ${getKpColor(weather.kp.current)}`}>
            Kp {weather.kp.current.toFixed(1)}
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-white">{weather.kp.scale}</div>
            <div className="text-xs text-slate-400">NOAA Scale</div>
          </div>
        </div>
      </div>

      <button
        onClick={() => impactMutation.mutate()}
        disabled={impactMutation.isPending}
        className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-md transition-all shadow-[0_0_15px_rgba(8,145,178,0.5)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {impactMutation.isPending ? <Loader2 className="animate-spin" /> : "PREDICT STORM IMPACT"}
      </button>

      {impactMutation.data ? (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-lg border border-slate-700 bg-slate-900/60 p-3 text-center">
              <div className="text-[11px] text-slate-500">Segments</div>
              <div className="text-sm font-semibold text-white">{impactMutation.data.summary.totalSegments}</div>
            </div>
            <div className="rounded-lg border border-slate-700 bg-slate-900/60 p-3 text-center">
              <div className="text-[11px] text-slate-500">High-Risk Segments</div>
              <div className="text-sm font-semibold text-white">{impactMutation.data.summary.highRiskSegments}</div>
            </div>
            <div className="rounded-lg border border-slate-700 bg-slate-900/60 p-3 text-center">
              <div className="text-[11px] text-slate-500">High-Risk Cables</div>
              <div className="text-sm font-semibold text-white">{impactMutation.data.summary.highRiskCables}</div>
            </div>
            <div className="rounded-lg border border-slate-700 bg-slate-900/60 p-3 text-center">
              <div className="text-[11px] text-slate-500">High-Risk Systems</div>
              <div className="text-sm font-semibold text-white">{impactMutation.data.summary.highRiskSystems ?? 0}</div>
            </div>
          </div>

          <div className="rounded-lg border border-slate-700 bg-slate-900/60 p-4">
            <div className="text-xs uppercase tracking-wider text-slate-500 mb-2">Closest Historical Match</div>
            {impactMutation.data.matchedEvents[0] ? (
              <>
                <div className="text-sm font-semibold text-white">{impactMutation.data.matchedEvents[0].name}</div>
                <div className="text-xs text-slate-400 mt-1">
                  {impactMutation.data.matchedEvents[0].date} - {Math.round(impactMutation.data.matchedEvents[0].similarity * 100)}% match
                </div>
                <div className="text-xs text-slate-300 mt-2">{impactMutation.data.matchedEvents[0].matchReason}</div>
              </>
            ) : (
              <div className="text-sm text-slate-500">Historical comparison will appear after a run.</div>
            )}
          </div>

          <SectorImpactPanel sectorImpacts={impactMutation.data.sectorImpacts} />

          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-slate-300">Highest Risk Cables</h4>
            <div className="max-h-48 overflow-y-auto space-y-2 pr-2">
              {impactMutation.data.cableAggregates.slice(0, 6).map((cable) => (
                <button
                  key={cable.cableId}
                  onClick={() => onCableSelect(cable.cableId)}
                  className="w-full bg-slate-800/50 p-2 rounded border border-slate-700 flex justify-between items-center hover:border-cyan-500/40"
                >
                  <div className="truncate max-w-[60%] text-sm text-slate-200 text-left">{cable.cableName}</div>
                  <div className="text-xs font-bold px-2 py-1 rounded bg-cyan-500/10 text-cyan-200">
                    {(cable.maxRisk * 100).toFixed(0)}%
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => exportImpactAsJson("realtime-impact-report.json", impactMutation.data)}
              className="flex-1 rounded-lg border border-slate-700 px-3 py-2 text-xs font-semibold text-slate-200 hover:border-cyan-500/40"
            >
              <Download className="inline w-3 h-3 mr-1" />
              Export JSON
            </button>
            <button
              onClick={() => exportImpactAsCsv("realtime-impact-report.csv", impactMutation.data)}
              className="flex-1 rounded-lg border border-slate-700 px-3 py-2 text-xs font-semibold text-slate-200 hover:border-cyan-500/40"
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
