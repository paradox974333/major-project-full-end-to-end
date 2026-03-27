"use client"

import { useMemo } from "react"
import { useQuery } from "@tanstack/react-query"
import { Clock3, History, PlayCircle } from "lucide-react"
import type { HistoricalEvent, HistoricalReplayPreset, ImpactResponse } from "@/lib/types"

interface HistoryPanelProps {
  impactData: ImpactResponse | null
  onReplayEvent: (preset: HistoricalReplayPreset) => void
}

export function HistoryPanel({ impactData, onReplayEvent }: HistoryPanelProps) {
  const { data: historicalEvents, isLoading, error } = useQuery<HistoricalEvent[]>({
    queryKey: ["historical-events"],
    queryFn: async () => {
      const res = await fetch("/api/history/events?limit=14")
      if (!res.ok) throw new Error("Failed to load historical events")
      return res.json()
    },
    staleTime: 1000 * 60 * 30,
  })

  const historicalEventById = useMemo(
    () => new Map((historicalEvents ?? []).map((event) => [event.id, event])),
    [historicalEvents],
  )

  return (
    <div className="space-y-5 p-4">
      <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-white mb-3">
          <History className="w-4 h-4 text-cyan-400" />
          Match The Current Scenario
        </div>
        {impactData?.matchedEvents?.length ? (
          <div className="space-y-2">
            {impactData.matchedEvents.map((event) => {
              const matchedHistoricalEvent = historicalEventById.get(event.eventId)

              return (
                <div key={event.eventId} className="rounded-lg border border-slate-800 bg-slate-950/70 p-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-sm font-medium text-white">{event.name}</div>
                      <div className="text-xs text-slate-400 mt-1">
                        {event.date} - {event.flareClass}-class - Kp {event.peakKp.toFixed(1)}
                      </div>
                    </div>
                    <div className="text-xs font-semibold text-cyan-300">{Math.round(event.similarity * 100)}%</div>
                  </div>
                  <div className="mt-2 text-xs text-slate-300">{event.matchReason}</div>
                  {matchedHistoricalEvent?.affectedSystems?.length ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {matchedHistoricalEvent.affectedSystems.map((system) => (
                        <div
                          key={`${event.eventId}-${system}`}
                          className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1 text-[11px] text-cyan-100"
                        >
                          {system}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              )
            })}
          </div>
        ) : (
          <div className="text-sm text-slate-500">Run a prediction to compare it with live API historical storms.</div>
        )}
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-white mb-3">
          <Clock3 className="w-4 h-4 text-violet-400" />
          Historical Timeline
        </div>

        {isLoading ? (
          <div className="text-sm text-slate-500">Loading NASA DONKI storm history...</div>
        ) : error ? (
          <div className="text-sm text-red-400">Historical event feed is unavailable right now.</div>
        ) : (
          <div className="space-y-3 max-h-[28rem] overflow-y-auto pr-1">
            {(historicalEvents ?? []).map((event) => (
              <div key={event.id} className="rounded-lg border border-slate-800 bg-slate-950/70 p-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-medium text-white">{event.name}</div>
                    <div className="text-xs text-slate-400 mt-1">
                      {event.date} - {event.severity} - {event.flareClass}-class
                    </div>
                  </div>
                  <button
                    onClick={() => onReplayEvent(event.replay)}
                    className="rounded-lg border border-violet-500/30 bg-violet-500/10 px-3 py-1.5 text-xs font-semibold text-violet-200 hover:bg-violet-500/20"
                  >
                    <PlayCircle className="inline w-3 h-3 mr-1" />
                    Replay
                  </button>
                </div>
                <div className="mt-2 text-xs text-slate-300">{event.description}</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <div className="rounded-full bg-slate-900 px-2.5 py-1 text-[11px] text-slate-300">Kp {event.peakKp.toFixed(1)}</div>
                  <div className="rounded-full bg-slate-900 px-2.5 py-1 text-[11px] text-slate-300">{event.cmeSpeedKms.toFixed(0)} km/s</div>
                  <div className="rounded-full bg-slate-900 px-2.5 py-1 text-[11px] text-slate-300">
                    {event.bzIsEstimated ? "Proxy Bz" : "Bz"} {event.bzNtl.toFixed(1)} nT
                  </div>
                </div>
                {event.sourceLocation || event.activeRegionNum ? (
                  <div className="mt-3 text-[11px] text-slate-400">
                    {event.sourceLocation ? `Source ${event.sourceLocation}` : null}
                    {event.sourceLocation && event.activeRegionNum ? " - " : null}
                    {event.activeRegionNum ? `AR ${event.activeRegionNum}` : null}
                  </div>
                ) : null}
                {event.affectedSystems?.length ? (
                  <>
                    <div className="mt-3 text-[11px] uppercase tracking-wider text-slate-500">Likely affected systems</div>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {event.affectedSystems.map((system) => (
                        <div
                          key={`${event.id}-${system}`}
                          className="rounded-full border border-slate-700 bg-slate-900 px-2.5 py-1 text-[11px] text-slate-200"
                        >
                          {system}
                        </div>
                      ))}
                    </div>
                  </>
                ) : null}
                <div className="mt-3 text-[11px] uppercase tracking-wider text-slate-500">Observed / modeled notes</div>
                <ul className="mt-1 space-y-1 text-xs text-slate-300">
                  {event.impacts.map((impact) => (
                    <li key={impact}>- {impact}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
