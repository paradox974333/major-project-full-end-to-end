"use client"

import { useEffect, useMemo, useState } from "react"
import { Bell, MapPin, Search, ShieldAlert, Star, StarOff } from "lucide-react"
import type { CableSegment, ImpactResponse, WatchlistItem } from "@/lib/types"

interface CableIntelPanelProps {
  cables: CableSegment[]
  impactData: ImpactResponse | null
  selectedCableId: string | null
  onCableSelect: (cableId: string) => void
  watchlist: WatchlistItem[]
  onSaveWatchlist: (item: WatchlistItem) => void
  onRemoveWatchlist: (cableId: string) => void
}

function riskBadge(score: number) {
  if (score >= 0.7) return "bg-red-500/15 text-red-200 border-red-500/30"
  if (score >= 0.4) return "bg-orange-500/15 text-orange-200 border-orange-500/30"
  if (score >= 0.2) return "bg-yellow-500/15 text-yellow-200 border-yellow-500/30"
  return "bg-cyan-500/15 text-cyan-200 border-cyan-500/30"
}

export function CableIntelPanel({
  cables,
  impactData,
  selectedCableId,
  onCableSelect,
  watchlist,
  onSaveWatchlist,
  onRemoveWatchlist,
}: CableIntelPanelProps) {
  const [query, setQuery] = useState("")
  const [threshold, setThreshold] = useState(0.55)

  const selectedCable = useMemo(
    () => cables.find((cable) => cable.id === selectedCableId) ?? null,
    [cables, selectedCableId],
  )

  const selectedAggregate = useMemo(
    () => impactData?.cableAggregates.find((cable) => cable.cableId === selectedCableId) ?? null,
    [impactData, selectedCableId],
  )

  const selectedSegments = useMemo(
    () =>
      (impactData?.segmentRisks ?? [])
        .filter((segment) => segment.cableId === selectedCableId)
        .sort((a, b) => b.riskScore - a.riskScore),
    [impactData, selectedCableId],
  )

  const filteredCables = useMemo(() => {
    if (!query.trim()) {
      return cables.slice(0, 6)
    }

    const lowered = query.toLowerCase()
    return cables
      .filter((cable) => cable.name.toLowerCase().includes(lowered) || cable.id.toLowerCase().includes(lowered))
      .slice(0, 8)
  }, [cables, query])

  const watchlistEntry = useMemo(
    () => watchlist.find((entry) => entry.cableId === selectedCableId) ?? null,
    [selectedCableId, watchlist],
  )

  const watchlistStatus = useMemo(
    () =>
      watchlist
        .map((entry) => {
          const cable = cables.find((item) => item.id === entry.cableId)
          const aggregate = impactData?.cableAggregates.find((item) => item.cableId === entry.cableId)
          if (!cable) return null

          return {
            cableId: entry.cableId,
            cableName: cable.name,
            threshold: entry.threshold,
            currentRisk: aggregate?.maxRisk ?? 0,
          }
        })
        .filter(Boolean) as Array<{ cableId: string; cableName: string; threshold: number; currentRisk: number }>,
    [cables, impactData, watchlist],
  )

  useEffect(() => {
    if (watchlistEntry) {
      setThreshold(watchlistEntry.threshold)
    }
  }, [watchlistEntry])

  return (
    <div className="border-t border-slate-800 bg-slate-950/60">
      <div className="p-4 border-b border-slate-800">
        <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500 mb-2">Cable Intel</div>
        <div className="relative">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search cable by name"
            className="w-full rounded-lg border border-slate-700 bg-slate-900/80 pl-9 pr-3 py-2 text-sm text-white outline-none focus:border-cyan-500"
          />
        </div>
        <div className="mt-3 space-y-1.5 max-h-32 overflow-y-auto pr-1">
          {filteredCables.map((cable) => (
            <button
              key={cable.id}
              onClick={() => onCableSelect(cable.id)}
              className={`w-full rounded-lg border px-3 py-2 text-left transition ${
                cable.id === selectedCableId
                  ? "border-cyan-500/50 bg-cyan-500/10 text-cyan-100"
                  : "border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700"
              }`}
            >
              <div className="text-sm font-medium truncate">{cable.name}</div>
              <div className="text-[11px] text-slate-500">{cable.id}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 space-y-4">
        {selectedCable ? (
          <div className="space-y-3">
            <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-lg font-semibold text-white leading-tight">{selectedCable.name}</div>
                  <div className="mt-1 text-xs text-slate-400 flex items-center gap-1.5">
                    <MapPin className="w-3 h-3" />
                    Mean latitude {selectedCable.meanLat.toFixed(1)} deg
                  </div>
                </div>
                <div
                  className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${
                    riskBadge(selectedAggregate?.maxRisk ?? 0)
                  }`}
                >
                  {Math.round((selectedAggregate?.maxRisk ?? 0) * 100)}%
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <div className="rounded-lg bg-slate-950/70 p-2">
                  <div className="text-[11px] text-slate-500">Length</div>
                  <div className="text-sm font-semibold text-white">{selectedCable.lengthKm.toFixed(0)} km</div>
                </div>
                <div className="rounded-lg bg-slate-950/70 p-2">
                  <div className="text-[11px] text-slate-500">Hotspots</div>
                  <div className="text-sm font-semibold text-white">{selectedAggregate?.hotspotCount ?? 0}</div>
                </div>
                <div className="rounded-lg bg-slate-950/70 p-2">
                  <div className="text-[11px] text-slate-500">Avg Risk</div>
                  <div className="text-sm font-semibold text-white">
                    {Math.round((selectedAggregate?.meanRisk ?? 0) * 100)}%
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="text-xs uppercase tracking-wider text-slate-500">Watchlist Alert</div>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="0.2"
                    max="0.95"
                    step="0.05"
                    value={threshold}
                    onChange={(event) => setThreshold(Number(event.target.value))}
                    className="flex-1 accent-cyan-500"
                  />
                  <div className="w-14 text-right text-xs font-mono text-slate-300">{Math.round(threshold * 100)}%</div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => onSaveWatchlist({ cableId: selectedCable.id, threshold })}
                    className="flex-1 rounded-lg bg-cyan-600 hover:bg-cyan-500 px-3 py-2 text-xs font-semibold text-white"
                  >
                    <Star className="inline w-3 h-3 mr-1" />
                    {watchlistEntry ? "Update Watch" : "Add Watch"}
                  </button>
                  {watchlistEntry && (
                    <button
                      onClick={() => onRemoveWatchlist(selectedCable.id)}
                      className="rounded-lg border border-slate-700 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white"
                    >
                      <StarOff className="inline w-3 h-3 mr-1" />
                      Remove
                    </button>
                  )}
                </div>
              </div>

              {selectedAggregate?.topDrivers?.length ? (
                <div className="mt-4">
                  <div className="text-xs uppercase tracking-wider text-slate-500 mb-2">Top Drivers</div>
                  <div className="flex flex-wrap gap-2">
                    {selectedAggregate.topDrivers.map((driver) => (
                      <div key={driver.key} className="rounded-full bg-slate-950/80 border border-slate-800 px-2.5 py-1 text-[11px] text-slate-300">
                        {driver.label}: <span className="text-white">{driver.displayValue}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {impactData?.matchedEvents?.length ? (
                <div className="mt-4">
                  <div className="text-xs uppercase tracking-wider text-slate-500 mb-2">Closest Historical Match</div>
                  <div className="rounded-lg border border-slate-800 bg-slate-950/70 p-3">
                    <div className="text-sm font-medium text-white">{impactData.matchedEvents[0].name}</div>
                    <div className="text-xs text-slate-400 mt-1">
                      {impactData.matchedEvents[0].date} - {Math.round(impactData.matchedEvents[0].similarity * 100)}% similarity
                    </div>
                    <div className="text-xs text-slate-300 mt-2">{impactData.matchedEvents[0].matchReason}</div>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm font-semibold text-white">Segment Hotspots</div>
                <div className="text-[11px] uppercase tracking-wider text-slate-500">{selectedSegments.length} segments</div>
              </div>
              <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                {selectedSegments.length ? (
                  selectedSegments.map((segment) => (
                    <div key={`${segment.cableId}:${segment.segmentIndex}`} className="rounded-lg border border-slate-800 bg-slate-950/70 p-3">
                      <div className="flex items-center justify-between gap-3">
                        <div className="text-sm text-white font-medium">Segment {segment.segmentIndex + 1}</div>
                        <div className={`rounded-full border px-2 py-0.5 text-[11px] font-semibold ${riskBadge(segment.riskScore)}`}>
                          {Math.round(segment.riskScore * 100)}%
                        </div>
                      </div>
                      <div className="mt-2 text-xs text-slate-300">{segment.explanation?.headline}</div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {segment.explanation?.drivers?.slice(0, 3).map((driver) => (
                          <div key={driver.key} className="text-[11px] text-slate-400">
                            {driver.label}: <span className="text-slate-200">{driver.displayValue}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-sm text-slate-500">Run a real-time or simulated prediction to inspect hotspots.</div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-slate-800 bg-slate-950/50 p-4 text-sm text-slate-500">
            Search or click a cable on the globe to inspect route details, segment hotspots, and watchlist alerts.
          </div>
        )}

        {watchlistStatus.length ? (
          <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-white mb-3">
              <Bell className="w-4 h-4 text-cyan-400" />
              Watchlist Status
            </div>
            <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
              {watchlistStatus.map((entry) => {
                const triggered = entry.currentRisk >= entry.threshold
                return (
                  <button
                    key={entry.cableId}
                    onClick={() => onCableSelect(entry.cableId)}
                    className={`w-full rounded-lg border px-3 py-2 text-left ${
                      triggered ? "border-red-500/40 bg-red-500/10" : "border-slate-800 bg-slate-950/70"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="text-sm text-white truncate">{entry.cableName}</div>
                      <div className={`text-[11px] font-semibold ${triggered ? "text-red-300" : "text-slate-400"}`}>
                        {Math.round(entry.currentRisk * 100)}% / {Math.round(entry.threshold * 100)}%
                      </div>
                    </div>
                    <div className="mt-1 text-[11px] text-slate-500">
                      {triggered ? (
                        <>
                          <ShieldAlert className="inline w-3 h-3 mr-1 text-red-400" />
                          Threshold reached
                        </>
                      ) : (
                        "Monitoring"
                      )}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
