(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/space-weather-impact-predictor/components/globe-viz.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GlobeViz
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$space$2d$weather$2d$impact$2d$predictor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/space-weather-impact-predictor/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$space$2d$weather$2d$impact$2d$predictor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/space-weather-impact-predictor/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$space$2d$weather$2d$impact$2d$predictor$2f$node_modules$2f$react$2d$globe$2e$gl$2f$dist$2f$react$2d$globe$2e$gl$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/space-weather-impact-predictor/node_modules/react-globe.gl/dist/react-globe.gl.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function GlobeViz({ cables, risks, onCableClick }) {
    _s();
    const globeEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$space$2d$weather$2d$impact$2d$predictor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$space$2d$weather$2d$impact$2d$predictor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$space$2d$weather$2d$impact$2d$predictor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlobeViz.useEffect": ()=>{
            setMounted(true);
            if (globeEl.current) {
                globeEl.current.controls().autoRotate = true;
                globeEl.current.controls().autoRotateSpeed = 0.5;
            }
        }
    }["GlobeViz.useEffect"], []);
    // Merge risk data into cable objects for visualization
    const vizData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$space$2d$weather$2d$impact$2d$predictor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GlobeViz.useMemo[vizData]": ()=>{
            return cables.map({
                "GlobeViz.useMemo[vizData]": (cable)=>{
                    const risk = risks.find({
                        "GlobeViz.useMemo[vizData].risk": (r)=>r.cableId === cable.id
                    }["GlobeViz.useMemo[vizData].risk"]);
                    return {
                        ...cable,
                        riskScore: risk?.riskScore || 0,
                        riskLevel: risk?.riskLevel || "LOW"
                    };
                }
            }["GlobeViz.useMemo[vizData]"]);
        }
    }["GlobeViz.useMemo[vizData]"], [
        cables,
        risks
    ]);
    const getCableColor = (d)=>{
        const score = d.riskScore;
        if (score >= 0.7) return "#ef4444" // Red
        ;
        if (score >= 0.4) return "#f97316" // Orange
        ;
        if (score >= 0.2) return "#eab308" // Yellow
        ;
        return "#06b6d4" // Cyan (Low/Base)
        ;
    };
    const getCableAltitude = (d)=>{
        return d.riskScore > 0.2 ? 0.02 + d.riskScore * 0.05 : 0.01;
    };
    if (!mounted) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$space$2d$weather$2d$impact$2d$predictor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full bg-[#050713] flex items-center justify-center",
        children: "Loading Globe..."
    }, void 0, false, {
        fileName: "[project]/Downloads/space-weather-impact-predictor/components/globe-viz.tsx",
        lineNumber: 50,
        columnNumber: 12
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$space$2d$weather$2d$impact$2d$predictor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$space$2d$weather$2d$impact$2d$predictor$2f$node_modules$2f$react$2d$globe$2e$gl$2f$dist$2f$react$2d$globe$2e$gl$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ref: globeEl,
        globeImageUrl: "https://us1.discourse-cdn.com/flex024/uploads/plot/original/3X/c/d/cde0e6c8ef16b160bb50390eced5e16953039965.jpeg",
        backgroundImageUrl: "//unpkg.com/three-globe/example/img/night-sky.png",
        pathsData: vizData,
        pathPoints: "coordinates",
        pathPointLat: (p)=>p[1],
        pathPointLng: (p)=>p[0],
        pathColor: getCableColor,
        pathDashLength: 0.1,
        pathDashGap: 0.005,
        pathDashAnimateTime: 12000,
        pathAltitude: getCableAltitude,
        pathStroke: 2,
        pathLabel: (d)=>`
        <div style="background: rgba(0,0,0,0.8); padding: 8px; border-radius: 4px; color: white; font-family: sans-serif;">
          <b>${d.name}</b><br/>
          Risk: ${d.riskLevel} (${(d.riskScore * 100).toFixed(0)}%)
        </div>
      `,
        onPathClick: (d)=>onCableClick?.(d.id),
        atmosphereColor: "#3b82f6",
        atmosphereAltitude: 0.15
    }, void 0, false, {
        fileName: "[project]/Downloads/space-weather-impact-predictor/components/globe-viz.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(GlobeViz, "n8Xfd06Kp5w6YmBeIoy+nNRx4wQ=");
_c = GlobeViz;
var _c;
__turbopack_context__.k.register(_c, "GlobeViz");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/space-weather-impact-predictor/components/globe-viz.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Downloads/space-weather-impact-predictor/components/globe-viz.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=Downloads_space-weather-impact-predictor_components_globe-viz_tsx_702f2a42._.js.map