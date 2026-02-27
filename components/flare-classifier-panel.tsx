"use client"

import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { Zap, AlertTriangle, Sun, Activity } from "lucide-react"
import type { FlareInput, FlareClassification } from "@/lib/types"

const PRESETS: Record<string, FlareInput> = {
    "C-class (Mild)": { Fpeak: -5.8, Fsoft: -5.9, Fhard: -5.7, Dflare: 300, Hratio: 0.15 },
    "M-class (Moderate)": { Fpeak: -4.5, Fsoft: -4.6, Fhard: -4.3, Dflare: 900, Hratio: 0.20 },
    "X-class (Extreme)": { Fpeak: -3.5, Fsoft: -3.7, Fhard: -3.2, Dflare: 1800, Hratio: 0.25 },
}

const CLASS_COLORS: Record<string, string> = {
    C: "#22c55e", M: "#f59e0b", X: "#ef4444"
}

const CLASS_LABELS: Record<string, string> = {
    C: "C-Class (Minor)", M: "M-Class (Moderate)", X: "X-Class (Extreme)"
}

export function FlareClassifierPanel() {
    const [form, setForm] = useState<FlareInput>({
        Fpeak: -4.5, Fsoft: -4.6, Fhard: -4.3, Dflare: 900, Hratio: 0.20
    })

    const mutation = useMutation({
        mutationFn: async (input: FlareInput): Promise<FlareClassification> => {
            const res = await fetch("/api/ml/flare", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(input),
            })
            if (!res.ok) throw new Error("ML backend error")
            return res.json()
        },
    })

    const loadPreset = (name: string) => {
        setForm(PRESETS[name])
    }

    return (
        <div className="flex flex-col gap-4 p-1">
            {/* Presets */}
            <div>
                <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-2 block">
                    Quick Presets
                </label>
                <div className="flex flex-col gap-1.5">
                    {Object.keys(PRESETS).map(name => (
                        <button
                            key={name}
                            onClick={() => loadPreset(name)}
                            className="text-xs py-1.5 px-3 rounded bg-white/5 hover:bg-white/10 transition text-left text-neutral-300"
                        >
                            {name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Input fields */}
            <div className="space-y-3">
                <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider block">
                    X-Ray Flux Parameters
                </label>
                {([
                    ["Fpeak", "Peak Flux (log₁₀ W/m²)", -7, -2, 0.1],
                    ["Fsoft", "Soft X-Ray (log₁₀)", -7, -2, 0.1],
                    ["Fhard", "Hard X-Ray (log₁₀)", -7, -2, 0.1],
                    ["Dflare", "Duration (seconds)", 60, 7200, 60],
                    ["Hratio", "Hardness Ratio", 0.01, 1.0, 0.01],
                ] as const).map(([key, label, min, max, step]) => (
                    <div key={key}>
                        <div className="flex justify-between text-xs text-neutral-400 mb-1">
                            <span>{label}</span>
                            <span className="font-mono text-neutral-200">{form[key as keyof FlareInput]}</span>
                        </div>
                        <input
                            type="range"
                            min={min} max={max} step={step}
                            value={form[key as keyof FlareInput]}
                            onChange={e => setForm(f => ({ ...f, [key]: parseFloat(e.target.value) }))}
                            className="w-full accent-cyan-500"
                        />
                    </div>
                ))}
            </div>

            {/* Classify button */}
            <button
                onClick={() => mutation.mutate(form)}
                disabled={mutation.isPending}
                className="w-full py-2.5 rounded-lg font-semibold text-sm bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 disabled:opacity-50 transition-all text-white flex items-center justify-center gap-2"
            >
                {mutation.isPending ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                    <Sun className="w-4 h-4" />
                )}
                {mutation.isPending ? "Classifying..." : "CLASSIFY SOLAR FLARE"}
            </button>

            {/* Results */}
            {mutation.data && (
                <div className="space-y-3 animate-in fade-in slide-in-from-bottom-2">
                    {/* Main result */}
                    <div
                        className="p-4 rounded-xl border text-center"
                        style={{
                            borderColor: CLASS_COLORS[mutation.data.predicted_class] + "40",
                            background: CLASS_COLORS[mutation.data.predicted_class] + "10",
                        }}
                    >
                        <div className="flex items-center justify-center gap-2 mb-2">
                            {mutation.data.predicted_class === "X" ? (
                                <AlertTriangle className="w-5 h-5" style={{ color: CLASS_COLORS.X }} />
                            ) : mutation.data.predicted_class === "M" ? (
                                <Zap className="w-5 h-5" style={{ color: CLASS_COLORS.M }} />
                            ) : (
                                <Activity className="w-5 h-5" style={{ color: CLASS_COLORS.C }} />
                            )}
                            <span
                                className="text-2xl font-bold"
                                style={{ color: CLASS_COLORS[mutation.data.predicted_class] }}
                            >
                                {CLASS_LABELS[mutation.data.predicted_class]}
                            </span>
                        </div>
                        <div className="text-sm text-neutral-300">
                            Confidence: <span className="font-mono font-semibold text-white">
                                {(mutation.data.confidence * 100).toFixed(1)}%
                            </span>
                        </div>
                    </div>

                    {/* Probability breakdown */}
                    <div className="space-y-2">
                        <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
                            Class Probabilities
                        </label>
                        {(["C", "M", "X"] as const).map(cls => {
                            const prob = mutation.data!.probabilities[cls]
                            return (
                                <div key={cls} className="space-y-1">
                                    <div className="flex justify-between text-xs">
                                        <span className="text-neutral-400">{CLASS_LABELS[cls]}</span>
                                        <span className="font-mono text-neutral-200">{(prob * 100).toFixed(1)}%</span>
                                    </div>
                                    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                                        <div
                                            className="h-full rounded-full transition-all duration-700"
                                            style={{
                                                width: `${prob * 100}%`,
                                                background: CLASS_COLORS[cls],
                                            }}
                                        />
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* Severity indicator */}
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                        <div className="text-xs text-neutral-400 mb-1">Severity Score</div>
                        <div className="flex gap-1">
                            {[1, 2, 3].map(level => (
                                <div
                                    key={level}
                                    className="h-3 flex-1 rounded-full transition-all duration-500"
                                    style={{
                                        background: level <= mutation.data!.severity_score
                                            ? CLASS_COLORS[mutation.data!.predicted_class]
                                            : "rgba(255,255,255,0.05)",
                                    }}
                                />
                            ))}
                        </div>
                        <div className="text-xs text-neutral-400 mt-1 flex justify-between">
                            <span>Low</span><span>Moderate</span><span>Extreme</span>
                        </div>
                    </div>
                </div>
            )}

            {mutation.error && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                    ML backend unavailable. Start the Python server: <code>python ml_backend/app.py</code>
                </div>
            )}
        </div>
    )
}
