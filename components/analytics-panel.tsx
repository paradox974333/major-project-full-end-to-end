"use client"

import { useQuery } from "@tanstack/react-query"
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell, ScatterChart, Scatter, CartesianGrid, Legend
} from "recharts"
import { TrendingUp, Brain, Target } from "lucide-react"
import type { ModelMetrics } from "@/lib/types"

const COLORS = {
    primary: "#06b6d4",
    secondary: "#8b5cf6",
    tertiary: "#f59e0b",
    success: "#22c55e",
    danger: "#ef4444",
    muted: "#64748b",
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

    // Feature importance data
    const flareFeatures = Object.entries(flare.feature_importance).map(([name, value]) => ({
        name, value: parseFloat((value * 100).toFixed(1)),
    })).sort((a, b) => b.value - a.value)

    const cableFeatures = Object.entries(cable.feature_importance).map(([name, value]) => ({
        name, value: parseFloat((value * 100).toFixed(1)),
    })).sort((a, b) => b.value - a.value)

    // Confusion matrix for cable model
    const cmData = cable.confusion_matrix.flatMap((row, i) =>
        row.map((value, j) => ({
            actual: cable.class_names[i],
            predicted: cable.class_names[j],
            value,
        }))
    )

    return (
        <div className="space-y-8 p-4">
            {/* Header */}
            <div className="text-center space-y-1">
                <h2 className="text-xl font-bold text-white flex items-center justify-center gap-2">
                    <TrendingUp className="w-5 h-5 text-cyan-400" />
                    Model Analytics Dashboard
                </h2>
                <p className="text-xs text-neutral-400">
                    Performance metrics from real NASA DONKI & NOAA SWPC data
                </p>
            </div>

            {/* Accuracy cards */}
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

            {/* Flare Classifier Feature Importance */}
            <div className="space-y-2">
                <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Target className="w-4 h-4 text-cyan-400" />
                    Flare Classifier — Feature Importance
                </h3>
                <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                    <ResponsiveContainer width="100%" height={180}>
                        <BarChart data={flareFeatures} layout="vertical" margin={{ left: 50, right: 10 }}>
                            <XAxis type="number" tick={{ fill: "#94a3b8", fontSize: 10 }} />
                            <YAxis type="category" dataKey="name" tick={{ fill: "#94a3b8", fontSize: 11 }} width={48} />
                            <Tooltip
                                contentStyle={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 8, fontSize: 12 }}
                                labelStyle={{ color: "#e2e8f0" }}
                            />
                            <Bar dataKey="value" fill={COLORS.primary} radius={[0, 4, 4, 0]} name="Importance %" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Cable Risk Feature Importance */}
            <div className="space-y-2">
                <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Target className="w-4 h-4 text-violet-400" />
                    Cable Risk Model — Feature Importance
                </h3>
                <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                    <ResponsiveContainer width="100%" height={220}>
                        <BarChart data={cableFeatures} layout="vertical" margin={{ left: 50, right: 10 }}>
                            <XAxis type="number" tick={{ fill: "#94a3b8", fontSize: 10 }} />
                            <YAxis type="category" dataKey="name" tick={{ fill: "#94a3b8", fontSize: 11 }} width={48} />
                            <Tooltip
                                contentStyle={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 8, fontSize: 12 }}
                                labelStyle={{ color: "#e2e8f0" }}
                            />
                            <Bar dataKey="value" fill={COLORS.secondary} radius={[0, 4, 4, 0]} name="Importance %" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Model Comparison Tables */}
            <div className="space-y-2">
                <h3 className="text-sm font-semibold text-white">Model Comparison — Flare Classification</h3>
                <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                    <table className="w-full text-xs">
                        <thead>
                            <tr className="border-b border-white/10 text-neutral-400">
                                <th className="text-left p-2.5">Model</th>
                                <th className="text-right p-2.5">Acc</th>
                                <th className="text-right p-2.5">Prec</th>
                                <th className="text-right p-2.5">Rec</th>
                                <th className="text-right p-2.5">F1</th>
                            </tr>
                        </thead>
                        <tbody>
                            {flare.comparison.map((row, i) => (
                                <tr key={i} className={`border-b border-white/5 ${row.model.includes("Proposed") ? "bg-cyan-500/10 text-cyan-300 font-semibold" : "text-neutral-300"}`}>
                                    <td className="p-2.5">{row.model}</td>
                                    <td className="text-right p-2.5 font-mono">{(row.accuracy * 100).toFixed(1)}</td>
                                    <td className="text-right p-2.5 font-mono">{(row.precision * 100).toFixed(0)}</td>
                                    <td className="text-right p-2.5 font-mono">{(row.recall * 100).toFixed(0)}</td>
                                    <td className="text-right p-2.5 font-mono">{(row.f1 * 100).toFixed(0)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="space-y-2">
                <h3 className="text-sm font-semibold text-white">Model Comparison — Cable Risk Prediction</h3>
                <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                    <table className="w-full text-xs">
                        <thead>
                            <tr className="border-b border-white/10 text-neutral-400">
                                <th className="text-left p-2.5">Model</th>
                                <th className="text-right p-2.5">Acc</th>
                                <th className="text-right p-2.5">Prec</th>
                                <th className="text-right p-2.5">Rec</th>
                                <th className="text-right p-2.5">F1</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cable.comparison.map((row, i) => (
                                <tr key={i} className={`border-b border-white/5 ${row.model.includes("Proposed") ? "bg-violet-500/10 text-violet-300 font-semibold" : "text-neutral-300"}`}>
                                    <td className="p-2.5">{row.model}</td>
                                    <td className="text-right p-2.5 font-mono">{(row.accuracy * 100).toFixed(1)}</td>
                                    <td className="text-right p-2.5 font-mono">{(row.precision * 100).toFixed(0)}</td>
                                    <td className="text-right p-2.5 font-mono">{(row.recall * 100).toFixed(0)}</td>
                                    <td className="text-right p-2.5 font-mono">{(row.f1 * 100).toFixed(0)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Confusion Matrix Heatmap */}
            <div className="space-y-2">
                <h3 className="text-sm font-semibold text-white">Cable Risk — Confusion Matrix</h3>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="text-xs text-neutral-400 mb-2 text-center">Predicted →</div>
                    <div className="grid gap-1" style={{ gridTemplateColumns: `80px repeat(${cable.class_names.length}, 1fr)` }}>
                        {/* Header row */}
                        <div className="text-xs text-neutral-400 text-right pr-2">Actual ↓</div>
                        {cable.class_names.map(name => (
                            <div key={name} className="text-xs text-neutral-400 text-center font-medium">{name}</div>
                        ))}
                        {/* Data rows */}
                        {cable.confusion_matrix.map((row, i) => (
                            <>
                                <div key={`label-${i}`} className="text-xs text-neutral-300 text-right pr-2 font-medium self-center">
                                    {cable.class_names[i]}
                                </div>
                                {row.map((val, j) => {
                                    const maxVal = Math.max(...cable.confusion_matrix.flat())
                                    const intensity = val / maxVal
                                    const isDiag = i === j
                                    return (
                                        <div
                                            key={`${i}-${j}`}
                                            className="aspect-square flex items-center justify-center rounded-lg text-xs font-mono font-bold"
                                            style={{
                                                background: isDiag
                                                    ? `rgba(34, 197, 94, ${0.15 + intensity * 0.5})`
                                                    : `rgba(239, 68, 68, ${intensity * 0.4})`,
                                                color: isDiag ? "#86efac" : intensity > 0.1 ? "#fca5a5" : "#94a3b8",
                                            }}
                                        >
                                            {val}
                                        </div>
                                    )
                                })}
                            </>
                        ))}
                    </div>
                </div>
            </div>

            {/* Cross-validation scores */}
            <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-xs text-neutral-400 mb-1">Flare CV Accuracy</div>
                    <div className="text-lg font-bold text-cyan-400 font-mono">
                        {(flare.cv_accuracy_mean * 100).toFixed(1)}% <span className="text-xs text-neutral-400 font-normal">± {(flare.cv_accuracy_std * 100).toFixed(1)}</span>
                    </div>
                    <div className="text-xs text-neutral-500">5-Fold Cross Validation</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-xs text-neutral-400 mb-1">Cable CV Accuracy</div>
                    <div className="text-lg font-bold text-violet-400 font-mono">
                        {(cable.cv_accuracy_mean * 100).toFixed(1)}% <span className="text-xs text-neutral-400 font-normal">± {(cable.cv_accuracy_std * 100).toFixed(1)}</span>
                    </div>
                    <div className="text-xs text-neutral-500">5-Fold Cross Validation</div>
                </div>
            </div>

            {/* Data source footer */}
            <div className="text-center text-xs text-neutral-500 space-y-1 pt-2 border-t border-white/5">
                <p>Trained on real data from NASA DONKI & NOAA SWPC</p>
                <p>Solar flares (2022–2025) • CME events • Kp index • Solar wind</p>
            </div>
        </div>
    )
}
