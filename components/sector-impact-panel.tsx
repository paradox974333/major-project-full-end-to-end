"use client"

import type { SectorImpact } from "@/lib/types"

interface SectorImpactPanelProps {
  sectorImpacts: SectorImpact[]
  title?: string
}

function riskClasses(score: number) {
  if (score >= 0.7) return "border-red-500/30 bg-red-500/10 text-red-100"
  if (score >= 0.4) return "border-orange-500/30 bg-orange-500/10 text-orange-100"
  if (score >= 0.2) return "border-yellow-500/30 bg-yellow-500/10 text-yellow-100"
  return "border-cyan-500/20 bg-cyan-500/10 text-cyan-100"
}

export function SectorImpactPanel({
  sectorImpacts,
  title = "Cross-Sector Impact Outlook",
}: SectorImpactPanelProps) {
  if (!sectorImpacts.length) return null

  return (
    <div className="rounded-lg border border-slate-700 bg-slate-900/60 p-4">
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="text-sm font-semibold text-white">{title}</div>
        <div className="text-[11px] uppercase tracking-wider text-slate-500">
          Modeled system effects
        </div>
      </div>

      <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
        {sectorImpacts.map((impact) => (
          <div key={impact.id} className={`rounded-xl border p-3 ${riskClasses(impact.riskScore)}`}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-sm font-semibold text-white">{impact.label}</div>
                <div className="text-[11px] mt-1 text-slate-300">{impact.status}</div>
              </div>
              <div className="rounded-full border border-white/10 px-2 py-0.5 text-[11px] font-semibold text-white">
                {Math.round(impact.riskScore * 100)}%
              </div>
            </div>

            <div className="mt-2 text-xs text-slate-200">{impact.whyAffected}</div>

            <div className="mt-3 text-[11px] uppercase tracking-wider text-slate-400">Likely effects</div>
            <div className="mt-1 flex flex-wrap gap-2">
              {impact.likelyEffects.map((effect) => (
                <div
                  key={effect}
                  className="rounded-full border border-white/10 bg-slate-950/40 px-2.5 py-1 text-[11px] text-slate-200"
                >
                  {effect}
                </div>
              ))}
            </div>

            <div className="mt-3 text-[11px] text-slate-300">
              Mitigation: <span className="text-white">{impact.mitigationHint}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
