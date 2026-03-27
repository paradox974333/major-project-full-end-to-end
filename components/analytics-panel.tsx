"use client"

import { useQuery } from "@tanstack/react-query"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { AlertTriangle, Brain, Database, TrendingUp } from "lucide-react"
import type { ModelCredibility, ModelMetrics } from "@/lib/types"

const COLORS = {
  primary: "#06b6d4",
  secondary: "#8b5cf6",
}

export function AnalyticsPanel() {
  const { data: metrics, isLoading, error } = useQuery<ModelMetrics>({
    queryKey: ["model-metrics"],
    queryFn: async () => {
      const res = await fetch("/api/ml/metrics")
      if (!res.ok) throw new Error("Failed to fetch metrics")
      return res.json()
    },
  })

  const { data: credibility } = useQuery<ModelCredibility>({
    queryKey: ["model-credibility"],
    queryFn: async () => {
      const res = await fetch("/api/ml/credibility")
      if (!res.ok) throw new Error("Failed to fetch credibility")
      return res.json()
    },
  })

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center space-y-3">
          <div className="w-10 h-10 border-3 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mx-auto" />
          <p className="text-sm text-neutral-400">Loading analytics...</p>
        </div>
      </div>
    )
  }

  if (error || !metrics) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center space-y-2 text-neutral-400">
          <Brain className="w-12 h-12 mx-auto opacity-40" />
          <p className="text-sm">ML backend unavailable</p>
          <code className="text-xs bg-white/5 px-2 py-1 rounded">python ml_backend/app.py</code>
        </div>
      </div>
    )
  }

  const flare = metrics.flare_classifier
  const cable = metrics.cable_risk_model

  const flareFeatures = Object.entries(flare.feature_importance)
    .map(([name, value]) => ({ name, value: parseFloat((value * 100).toFixed(1)) }))
    .sort((a, b) => b.value - a.value)

  const cableFeatures = Object.entries(cable.feature_importance)
    .map(([name, value]) => ({ name, value: parseFloat((value * 100).toFixed(1)) }))
    .sort((a, b) => b.value - a.value)

  return (
    <div className="space-y-8 p-4">
      <div className="text-center space-y-1">
        <h2 className="text-xl font-bold text-white flex items-center justify-center gap-2">
          <TrendingUp className="w-5 h-5 text-cyan-400" />
          Model Analytics Dashboard
        </h2>
        <p className="text-xs text-neutral-400">Performance, credibility, and real-data coverage for the hybrid pipeline</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border border-cyan-500/20">
          <div className="text-xs text-cyan-400 font-medium mb-1">Flare Classifier</div>
          <div className="text-3xl font-bold text-white">{(flare.accuracy * 100).toFixed(1)}%</div>
          <div className="text-xs text-neutral-400 mt-1">Gradient Boosting</div>
        </div>
        <div className="p-4 rounded-xl bg-gradient-to-br from-violet-500/10 to-violet-600/5 border border-violet-500/20">
          <div className="text-xs text-violet-400 font-medium mb-1">Cable Risk Model</div>
          <div className="text-3xl font-bold text-white">{(cable.accuracy * 100).toFixed(1)}%</div>
          <div className="text-xs text-neutral-400 mt-1">Hybrid XGBoost</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-white">Flare Feature Importance</h3>
          <div className="bg-white/5 rounded-xl p-3 border border-white/10">
            <ResponsiveContainer width="100%" height={190}>
              <BarChart data={flareFeatures} layout="vertical" margin={{ left: 30, right: 10 }}>
                <XAxis type="number" tick={{ fill: "#94a3b8", fontSize: 10 }} />
                <YAxis type="category" dataKey="name" tick={{ fill: "#94a3b8", fontSize: 11 }} width={52} />
                <Tooltip contentStyle={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 8, fontSize: 12 }} />
                <Bar dataKey="value" fill={COLORS.primary} radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-white">Cable Feature Importance</h3>
          <div className="bg-white/5 rounded-xl p-3 border border-white/10">
            <ResponsiveContainer width="100%" height={190}>
              <BarChart data={cableFeatures} layout="vertical" margin={{ left: 30, right: 10 }}>
                <XAxis type="number" tick={{ fill: "#94a3b8", fontSize: 10 }} />
                <YAxis type="category" dataKey="name" tick={{ fill: "#94a3b8", fontSize: 11 }} width={52} />
                <Tooltip contentStyle={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 8, fontSize: 12 }} />
                <Bar dataKey="value" fill={COLORS.secondary} radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="text-sm font-semibold text-white mb-3">Model Comparison</div>
          <table className="w-full text-xs">
            <thead>
              <tr className="text-slate-500 border-b border-white/10">
                <th className="text-left pb-2">Model</th>
                <th className="text-right pb-2">Acc</th>
                <th className="text-right pb-2">F1</th>
              </tr>
            </thead>
            <tbody>
              {flare.comparison.map((row) => (
                <tr key={`flare-${row.model}`} className="border-b border-white/5 text-slate-300">
                  <td className="py-2">{row.model}</td>
                  <td className="text-right py-2">{(row.accuracy * 100).toFixed(1)}</td>
                  <td className="text-right py-2">{(row.f1 * 100).toFixed(1)}</td>
                </tr>
              ))}
              {cable.comparison.map((row) => (
                <tr key={`cable-${row.model}`} className="border-b border-white/5 text-slate-300">
                  <td className="py-2">{row.model}</td>
                  <td className="text-right py-2">{(row.accuracy * 100).toFixed(1)}</td>
                  <td className="text-right py-2">{(row.f1 * 100).toFixed(1)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="text-sm font-semibold text-white mb-3">Cross Validation</div>
          <div className="space-y-3">
            <div className="rounded-lg bg-slate-950/70 p-3">
              <div className="text-xs text-slate-500">Flare CV Accuracy</div>
              <div className="text-lg font-bold text-cyan-400 font-mono">
                {(flare.cv_accuracy_mean * 100).toFixed(1)}%
              </div>
              <div className="text-xs text-slate-500">Std dev {(flare.cv_accuracy_std * 100).toFixed(2)}%</div>
            </div>
            <div className="rounded-lg bg-slate-950/70 p-3">
              <div className="text-xs text-slate-500">Cable CV Accuracy</div>
              <div className="text-lg font-bold text-violet-400 font-mono">
                {(cable.cv_accuracy_mean * 100).toFixed(1)}%
              </div>
              <div className="text-xs text-slate-500">Std dev {(cable.cv_accuracy_std * 100).toFixed(2)}%</div>
            </div>
          </div>
        </div>
      </div>

      {credibility ? (
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-white mb-3">
              <Database className="w-4 h-4 text-cyan-400" />
              Data Coverage
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="rounded-lg bg-slate-950/70 p-3 text-slate-300">Cables: {credibility.dataCoverage.realCableCount}</div>
              <div className="rounded-lg bg-slate-950/70 p-3 text-slate-300">CMEs: {credibility.dataCoverage.realCmeCount}</div>
              <div className="rounded-lg bg-slate-950/70 p-3 text-slate-300">Bz samples: {credibility.dataCoverage.realBzCount}</div>
              <div className="rounded-lg bg-slate-950/70 p-3 text-slate-300">Wind samples: {credibility.dataCoverage.realWindSpeedCount}</div>
              <div className="rounded-lg bg-slate-950/70 p-3 text-slate-300">Kp samples: {credibility.dataCoverage.realKpCount}</div>
              <div className="rounded-lg bg-slate-950/70 p-3 text-slate-300">Storm Kp: {credibility.dataCoverage.stormKpCount}</div>
            </div>
          </div>

          <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-white mb-3">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              Credibility Guardrails
            </div>
            <div className="space-y-2 text-xs text-slate-300">
              {credibility.warnings.map((warning) => (
                <div key={warning} className="rounded-lg bg-slate-950/70 p-3">{warning}</div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
