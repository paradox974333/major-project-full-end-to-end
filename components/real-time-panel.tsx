"use client"

import { useQuery, useMutation } from "@tanstack/react-query"
import type { SpaceWeather, ImpactResponse } from "@/lib/types"
import { Loader2, AlertTriangle, RefreshCw } from "lucide-react"

interface RealTimePanelProps {
  onImpactUpdate: (data: ImpactResponse) => void
}

export function RealTimePanel({ onImpactUpdate }: RealTimePanelProps) {
  // Fetch Space Weather
  const {
    data: weather,
    isLoading,
    refetch,
  } = useQuery<SpaceWeather>({
    queryKey: ["space-weather"],
    queryFn: async () => {
      const res = await fetch("/api/space-weather/realtime")
      if (!res.ok) throw new Error("Failed to fetch weather")
      return res.json()
    },
    refetchInterval: 60000, // 1 min
  })

  // Calculate Impact Mutation
  const impactMutation = useMutation({
    mutationFn: async () => {
      const res = await fetch("/api/impact/realtime", { method: "POST" })
      if (!res.ok) throw new Error("Failed to calculate impact")
      return res.json()
    },
    onSuccess: (data) => {
      onImpactUpdate(data)
    },
  })

  if (isLoading)
    return (
      <div className="p-4 text-cyan-500">
        <Loader2 className="animate-spin" /> Loading telemetry...
      </div>
    )

  if (!weather) return <div className="p-4 text-red-500">Telemetry Offline</div>

  const getKpColor = (kp: number) => {
    if (kp >= 7) return "bg-red-600 text-white"
    if (kp >= 5) return "bg-orange-500 text-white"
    if (kp >= 3) return "bg-yellow-500 text-black"
    return "bg-green-500 text-black"
  }

  return (
    <div className="space-y-6 p-4">
      {/* Solar Wind Card */}
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
            <div className="text-xs text-slate-400">p/cm³</div>
          </div>
          <div>
            <div
              className={`text-2xl font-mono font-bold ${weather.solarWind.bzNtl < -5 ? "text-red-400" : "text-white"}`}
            >
              {weather.solarWind.bzNtl.toFixed(1)}
            </div>
            <div className="text-xs text-slate-400">Bz (nT)</div>
          </div>
        </div>
        {weather.solarWind.bzNtl < -5 && (
          <div className="mt-3 text-xs text-red-400 flex items-center gap-1">
            <AlertTriangle className="w-3 h-3" /> Southward Bz detected: Increased coupling risk.
          </div>
        )}
      </div>

      {/* Kp Index Card */}
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
        <div className="mt-4 flex gap-1 h-2">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <div
              key={i}
              className={`flex-1 rounded-sm ${i <= Math.floor(weather.kp.current) ? getKpColor(i) : "bg-slate-800"}`}
            />
          ))}
        </div>
      </div>

      {/* Action */}
      <button
        onClick={() => impactMutation.mutate()}
        disabled={impactMutation.isPending}
        className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-md transition-all shadow-[0_0_15px_rgba(8,145,178,0.5)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {impactMutation.isPending ? <Loader2 className="animate-spin" /> : "PREDICT CABLE IMPACT"}
      </button>

      {/* Results Summary */}
      {impactMutation.data && (
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-slate-300">High Risk Cables</h4>
          <div className="max-h-48 overflow-y-auto space-y-2 pr-2 scrollbar-thin scrollbar-thumb-slate-700">
            {impactMutation.data.cableAggregates.slice(0, 5).map((cable) => (
              <div
                key={cable.cableId}
                className="bg-slate-800/50 p-2 rounded border border-slate-700 flex justify-between items-center"
              >
                <div className="truncate max-w-[60%] text-sm text-slate-200">{cable.cableName}</div>
                <div
                  className={`text-xs font-bold px-2 py-1 rounded ${
                    cable.maxRisk > 0.7
                      ? "bg-red-900 text-red-200"
                      : cable.maxRisk > 0.4
                        ? "bg-orange-900 text-orange-200"
                        : "bg-green-900 text-green-200"
                  }`}
                >
                  {(cable.maxRisk * 100).toFixed(0)}% Risk
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
