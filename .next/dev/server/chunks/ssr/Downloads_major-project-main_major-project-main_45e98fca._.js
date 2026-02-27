module.exports = [
"[project]/Downloads/major-project-main/major-project-main/components/globe-wrapper.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
;
"use client";
;
;
const GlobeViz = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/Downloads/major-project-main/major-project-main/components/globe-viz.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full bg-[#050713] animate-pulse"
        }, void 0, false, {
            fileName: "[project]/Downloads/major-project-main/major-project-main/components/globe-wrapper.tsx",
            lineNumber: 7,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
const __TURBOPACK__default__export__ = GlobeViz;
}),
"[project]/Downloads/major-project-main/major-project-main/components/real-time-panel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RealTimePanel",
    ()=>RealTimePanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) <export default as RefreshCw>");
"use client";
;
;
;
function RealTimePanel({ onImpactUpdate }) {
    // Fetch Space Weather
    const { data: weather, isLoading, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "space-weather"
        ],
        queryFn: async ()=>{
            const res = await fetch("/api/space-weather/realtime");
            if (!res.ok) throw new Error("Failed to fetch weather");
            return res.json();
        },
        refetchInterval: 60000
    });
    // Calculate Impact Mutation
    const impactMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: async ()=>{
            const res = await fetch("/api/impact/realtime", {
                method: "POST"
            });
            if (!res.ok) throw new Error("Failed to calculate impact");
            return res.json();
        },
        onSuccess: (data)=>{
            onImpactUpdate(data);
        }
    });
    if (isLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 text-cyan-500",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "animate-spin"
            }, void 0, false, {
                fileName: "[project]/Downloads/major-project-main/major-project-main/components/real-time-panel.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this),
            " Loading telemetry..."
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/major-project-main/major-project-main/components/real-time-panel.tsx",
        lineNumber: 41,
        columnNumber: 7
    }, this);
    if (!weather) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 text-red-500",
        children: "Telemetry Offline"
    }, void 0, false, {
        fileName: "[project]/Downloads/major-project-main/major-project-main/components/real-time-panel.tsx",
        lineNumber: 46,
        columnNumber: 24
    }, this);
    const getKpColor = (kp)=>{
        if (kp >= 7) return "bg-red-600 text-white";
        if (kp >= 5) return "bg-orange-500 text-white";
        if (kp >= 3) return "bg-yellow-500 text-black";
        return "bg-green-500 text-black";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-slate-900/50 border border-slate-700 rounded-lg p-4 backdrop-blur-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                className: "w-3 h-3"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/real-time-panel.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            " Solar Wind (L1)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/real-time-panel.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 gap-4 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-mono font-bold text-white",
                                        children: weather.solarWind.speedKms.toFixed(0)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/real-time-panel.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-slate-400",
                                        children: "km/s"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/real-time-panel.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/real-time-panel.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-mono font-bold text-white",
                                        children: weather.solarWind.densityPcm3.toFixed(1)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/real-time-panel.tsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-slate-400",
                                        children: "p/cm³"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/real-time-panel.tsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/real-time-panel.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `text-2xl font-mono font-bold ${weather.solarWind.bzNtl < -5 ? "text-red-400" : "text-white"}`,
                                        children: weather.solarWind.bzNtl.toFixed(1)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/real-time-panel.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-slate-400",
                                        children: "Bz (nT)"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/real-time-panel.tsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/real-time-panel.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/real-time-panel.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    weather.solarWind.bzNtl < -5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 text-xs text-red-400 flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                className: "w-3 h-3"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/real-time-panel.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this),
                            " Southward Bz detected: Increased coupling risk."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/real-time-panel.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/major-project-main/major-project-main/components/real-time-panel.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-slate-900/50 border border-slate-700 rounded-lg p-4 backdrop-blur-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-3",
                        children: "Planetary K-Index"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/real-time-panel.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `px-4 py-2 rounded-md font-bold text-xl ${getKpColor(weather.kp.current)}`,
                                children: [
                                    "Kp ",
                                    weather.kp.current.toFixed(1)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/real-time-panel.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-lg font-bold text-white",
                                        children: weather.kp.scale
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/real-time-panel.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-slate-400",
                                        children: "NOAA Scale"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/real-time-panel.tsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/real-time-panel.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/real-time-panel.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex gap-1 h-2",
                        children: [
                            0,
                            1,
                            2,
                            3,
                            4,
                            5,
                            6,
                            7,
                            8,
                            9
                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex-1 rounded-sm ${i <= Math.floor(weather.kp.current) ? getKpColor(i) : "bg-slate-800"}`
                            }, i, false, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/real-time-panel.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/real-time-panel.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/major-project-main/major-project-main/components/real-time-panel.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>impactMutation.mutate(),
                disabled: impactMutation.isPending,
                className: "w-full py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-md transition-all shadow-[0_0_15px_rgba(8,145,178,0.5)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                children: impactMutation.isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "animate-spin"
                }, void 0, false, {
                    fileName: "[project]/Downloads/major-project-main/major-project-main/components/real-time-panel.tsx",
                    lineNumber: 115,
                    columnNumber: 37
                }, this) : "PREDICT CABLE IMPACT"
            }, void 0, false, {
                fileName: "[project]/Downloads/major-project-main/major-project-main/components/real-time-panel.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            impactMutation.data && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-sm font-semibold text-slate-300",
                        children: "High Risk Cables"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/real-time-panel.tsx",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-h-48 overflow-y-auto space-y-2 pr-2 scrollbar-thin scrollbar-thumb-slate-700",
                        children: impactMutation.data.cableAggregates.slice(0, 5).map((cable)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-800/50 p-2 rounded border border-slate-700 flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "truncate max-w-[60%] text-sm text-slate-200",
                                        children: cable.cableName
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/real-time-panel.tsx",
                                        lineNumber: 128,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `text-xs font-bold px-2 py-1 rounded ${cable.maxRisk > 0.7 ? "bg-red-900 text-red-200" : cable.maxRisk > 0.4 ? "bg-orange-900 text-orange-200" : "bg-green-900 text-green-200"}`,
                                        children: [
                                            (cable.maxRisk * 100).toFixed(0),
                                            "% Risk"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/real-time-panel.tsx",
                                        lineNumber: 129,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, cable.cableId, true, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/real-time-panel.tsx",
                                lineNumber: 124,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/real-time-panel.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/major-project-main/major-project-main/components/real-time-panel.tsx",
                lineNumber: 120,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/major-project-main/major-project-main/components/real-time-panel.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SimulationPanel",
    ()=>SimulationPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-ssr] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/date-fns/format.js [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
;
;
function SimulationPanel({ onSimulationComplete }) {
    const [speed, setSpeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1500);
    const [dirLon, setDirLon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [dirLat, setDirLat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [startTime, setStartTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Date().toISOString().slice(0, 16));
    const transitHours = 1.496e8 / speed / 3600;
    const simMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: async ()=>{
            const res = await fetch("/api/impact/simulate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    startTime: new Date(startTime).toISOString(),
                    cmeSpeedKms: speed,
                    directionLon: dirLon,
                    directionLat: dirLat
                })
            });
            if (!res.ok) throw new Error("Simulation failed");
            return res.json();
        },
        onSuccess: (data)=>{
            onSimulationComplete(data);
        }
    });
    const getSpeedCategory = (s)=>{
        if (s >= 2500) return {
            label: "Extreme",
            color: "text-red-400"
        };
        if (s >= 1800) return {
            label: "Fast",
            color: "text-orange-400"
        };
        if (s >= 1000) return {
            label: "Moderate",
            color: "text-yellow-400"
        };
        return {
            label: "Slow",
            color: "text-green-400"
        };
    };
    const speedCat = getSpeedCategory(speed);
    const getKpColor = (kp)=>{
        if (kp >= 7) return "text-red-400";
        if (kp >= 5) return "text-orange-400";
        if (kp >= 3) return "text-yellow-400";
        return "text-green-400";
    };
    const getRiskBadge = (risk)=>{
        if (risk >= 0.7) return {
            bg: "bg-red-900/60 text-red-200 border-red-700/50",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"]
        };
        if (risk >= 0.4) return {
            bg: "bg-orange-900/60 text-orange-200 border-orange-700/50",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"]
        };
        if (risk >= 0.2) return {
            bg: "bg-yellow-900/60 text-yellow-200 border-yellow-700/50",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"]
        };
        return {
            bg: "bg-green-900/60 text-green-200 border-green-700/50",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"]
        };
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5 p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs text-slate-400 mb-1",
                                children: "CME Launch Time (UTC)"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "datetime-local",
                                value: startTime,
                                onChange: (e)=>setStartTime(e.target.value),
                                className: "w-full bg-slate-900 border border-slate-700 rounded p-2 text-sm text-white focus:border-violet-500 outline-none"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-xs mb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-400",
                                        children: "CME Speed"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `font-mono font-bold ${speedCat.color}`,
                                        children: [
                                            speed,
                                            " km/s — ",
                                            speedCat.label
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                min: "400",
                                max: "3000",
                                step: "50",
                                value: speed,
                                onChange: (e)=>setSpeed(Number(e.target.value)),
                                className: "w-full accent-violet-500"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-[10px] text-slate-600 mt-0.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "400"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "1000"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "2000"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                        lineNumber: 97,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "3000"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-slate-500 mt-1 flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this),
                                    " Est. Transit: ",
                                    transitHours.toFixed(1),
                                    " hours"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-slate-400 mb-1",
                                        children: "Impact Lat (°)"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: "-90",
                                        max: "90",
                                        value: dirLat,
                                        onChange: (e)=>setDirLat(Number(e.target.value)),
                                        className: "w-full bg-slate-900 border border-slate-700 rounded p-2 text-sm text-white focus:border-violet-500 outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-slate-400 mb-1",
                                        children: "Impact Lon (°)"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: "-180",
                                        max: "180",
                                        value: dirLon,
                                        onChange: (e)=>setDirLon(Number(e.target.value)),
                                        className: "w-full bg-slate-900 border border-slate-700 rounded p-2 text-sm text-white focus:border-violet-500 outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>simMutation.mutate(),
                disabled: simMutation.isPending,
                className: "w-full py-3 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-md transition-all shadow-[0_0_15px_rgba(124,58,237,0.5)] disabled:opacity-50 flex items-center justify-center gap-2",
                children: simMutation.isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "animate-spin"
                }, void 0, false, {
                    fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                    lineNumber: 138,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                            lineNumber: 141,
                            columnNumber: 13
                        }, this),
                        " RUN SIMULATION"
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            simMutation.data && (()=>{
                const data = simMutation.data;
                const kpPeak = data.syntheticKpPeak;
                const affectedCables = data.cableAggregates.filter((c)=>c.maxRisk > 0.05);
                const highRiskCables = data.cableAggregates.filter((c)=>c.maxRisk > 0.4);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-slate-900/80 border border-violet-500/30 rounded-lg p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-violet-400 text-sm font-bold mb-3 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                            lineNumber: 157,
                                            columnNumber: 17
                                        }, this),
                                        " Simulation Results"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                    lineNumber: 156,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-400",
                                                    children: "Arrival:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white font-mono",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(data.predictedArrivalTime), "MMM d, HH:mm"),
                                                        " UTC"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                            lineNumber: 160,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-400",
                                                    children: "Peak Intensity:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `font-bold ${getKpColor(kpPeak)}`,
                                                    children: [
                                                        "Kp ",
                                                        kpPeak.toFixed(1),
                                                        " (",
                                                        data.gScale,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                            lineNumber: 166,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-400",
                                                    children: "Cables Affected:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white font-bold",
                                                    children: [
                                                        affectedCables.length,
                                                        " / ",
                                                        data.cableAggregates.length
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                            lineNumber: 172,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-400",
                                                    children: "High Risk:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `font-bold ${highRiskCables.length > 0 ? "text-red-400" : "text-green-400"}`,
                                                    children: [
                                                        highRiskCables.length,
                                                        " cables"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                            lineNumber: 176,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                    lineNumber: 159,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                            lineNumber: 155,
                            columnNumber: 13
                        }, this),
                        affectedCables.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-sm font-semibold text-slate-300 mb-2",
                                    children: "Most Affected Cables"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                    lineNumber: 188,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-h-52 overflow-y-auto space-y-1.5 pr-1 scrollbar-thin scrollbar-thumb-slate-700",
                                    children: data.cableAggregates.filter((c)=>c.maxRisk > 0.05).sort((a, b)=>b.maxRisk - a.maxRisk).slice(0, 15).map((cable)=>{
                                        const badge = getRiskBadge(cable.maxRisk);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `p-2 rounded border flex justify-between items-center ${badge.bg}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "truncate max-w-[55%] text-xs font-medium",
                                                    children: cable.cableName
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs font-bold font-mono",
                                                    children: [
                                                        (cable.maxRisk * 100).toFixed(1),
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, cable.cableId, true, {
                                            fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                            lineNumber: 199,
                                            columnNumber: 25
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                    lineNumber: 191,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                            lineNumber: 187,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-4 text-sm text-slate-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                    className: "w-8 h-8 mx-auto mb-2 text-green-500/50"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                    lineNumber: 216,
                                    columnNumber: 17
                                }, this),
                                "All cables within safe limits.",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs mt-1",
                                    children: "Try increasing CME speed above 1500 km/s"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                    lineNumber: 218,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                            lineNumber: 215,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                    lineNumber: 153,
                    columnNumber: 11
                }, this);
            })()
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/major-project-main/major-project-main/components/flare-classifier-panel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlareClassifierPanel",
    ()=>FlareClassifierPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript) <export default as Activity>");
"use client";
;
;
;
;
const PRESETS = {
    "C-class (Mild)": {
        Fpeak: -5.8,
        Fsoft: -5.9,
        Fhard: -5.7,
        Dflare: 300,
        Hratio: 0.15
    },
    "M-class (Moderate)": {
        Fpeak: -4.5,
        Fsoft: -4.6,
        Fhard: -4.3,
        Dflare: 900,
        Hratio: 0.20
    },
    "X-class (Extreme)": {
        Fpeak: -3.5,
        Fsoft: -3.7,
        Fhard: -3.2,
        Dflare: 1800,
        Hratio: 0.25
    }
};
const CLASS_COLORS = {
    C: "#22c55e",
    M: "#f59e0b",
    X: "#ef4444"
};
const CLASS_LABELS = {
    C: "C-Class (Minor)",
    M: "M-Class (Moderate)",
    X: "X-Class (Extreme)"
};
function FlareClassifierPanel() {
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        Fpeak: -4.5,
        Fsoft: -4.6,
        Fhard: -4.3,
        Dflare: 900,
        Hratio: 0.20
    });
    const mutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: async (input)=>{
            const res = await fetch("/api/ml/flare", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(input)
            });
            if (!res.ok) throw new Error("ML backend error");
            return res.json();
        }
    });
    const loadPreset = (name)=>{
        setForm(PRESETS[name]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-4 p-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-xs font-medium text-neutral-400 uppercase tracking-wider mb-2 block",
                        children: "Quick Presets"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/flare-classifier-panel.tsx",
                        lineNumber: 47,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1.5",
                        children: Object.keys(PRESETS).map((name)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>loadPreset(name),
                                className: "text-xs py-1.5 px-3 rounded bg-white/5 hover:bg-white/10 transition text-left text-neutral-300",
                                children: name
                            }, name, false, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/flare-classifier-panel.tsx",
                                lineNumber: 52,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/flare-classifier-panel.tsx",
                        lineNumber: 50,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/major-project-main/major-project-main/components/flare-classifier-panel.tsx",
                lineNumber: 46,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-xs font-medium text-neutral-400 uppercase tracking-wider block",
                        children: "X-Ray Flux Parameters"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/flare-classifier-panel.tsx",
                        lineNumber: 65,
                        columnNumber: 17
                    }, this),
                    [
                        [
                            "Fpeak",
                            "Peak Flux (log₁₀ W/m²)",
                            -7,
                            -2,
                            0.1
                        ],
                        [
                            "Fsoft",
                            "Soft X-Ray (log₁₀)",
                            -7,
                            -2,
                            0.1
                        ],
                        [
                            "Fhard",
                            "Hard X-Ray (log₁₀)",
                            -7,
                            -2,
                            0.1
                        ],
                        [
                            "Dflare",
                            "Duration (seconds)",
                            60,
                            7200,
                            60
                        ],
                        [
                            "Hratio",
                            "Hardness Ratio",
                            0.01,
                            1.0,
                            0.01
                        ]
                    ].map(([key, label, min, max, step])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between text-xs text-neutral-400 mb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: label
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/major-project-main/major-project-main/components/flare-classifier-panel.tsx",
                                            lineNumber: 77,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-neutral-200",
                                            children: form[key]
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/major-project-main/major-project-main/components/flare-classifier-panel.tsx",
                                            lineNumber: 78,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/major-project-main/major-project-main/components/flare-classifier-panel.tsx",
                                    lineNumber: 76,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "range",
                                    min: min,
                                    max: max,
                                    step: step,
                                    value: form[key],
                                    onChange: (e)=>setForm((f)=>({
                                                ...f,
                                                [key]: parseFloat(e.target.value)
                                            })),
                                    className: "w-full accent-cyan-500"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/major-project-main/major-project-main/components/flare-classifier-panel.tsx",
                                    lineNumber: 80,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, key, true, {
                            fileName: "[project]/Downloads/major-project-main/major-project-main/components/flare-classifier-panel.tsx",
                            lineNumber: 75,
                            columnNumber: 21
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/major-project-main/major-project-main/components/flare-classifier-panel.tsx",
                lineNumber: 64,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>mutation.mutate(form),
                disabled: mutation.isPending,
                className: "w-full py-2.5 rounded-lg font-semibold text-sm bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 disabled:opacity-50 transition-all text-white flex items-center justify-center gap-2",
                children: [
                    mutation.isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/flare-classifier-panel.tsx",
                        lineNumber: 98,
                        columnNumber: 21
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/flare-classifier-panel.tsx",
                        lineNumber: 100,
                        columnNumber: 21
                    }, this),
                    mutation.isPending ? "Classifying..." : "CLASSIFY SOLAR FLARE"
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/major-project-main/major-project-main/components/flare-classifier-panel.tsx",
                lineNumber: 92,
                columnNumber: 13
            }, this),
            mutation.data && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 animate-in fade-in slide-in-from-bottom-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-xl border text-center",
                        style: {
                            borderColor: CLASS_COLORS[mutation.data.predicted_class] + "40",
                            background: CLASS_COLORS[mutation.data.predicted_class] + "10"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center gap-2 mb-2",
                                children: [
                                    mutation.data.predicted_class === "X" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                        className: "w-5 h-5",
                                        style: {
                                            color: CLASS_COLORS.X
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/flare-classifier-panel.tsx",
                                        lineNumber: 118,
                                        columnNumber: 33
                                    }, this) : mutation.data.predicted_class === "M" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                        className: "w-5 h-5",
                                        style: {
                                            color: CLASS_COLORS.M
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/flare-classifier-panel.tsx",
                                        lineNumber: 120,
                                        columnNumber: 33
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                        className: "w-5 h-5",
                                        style: {
                                            color: CLASS_COLORS.C
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/flare-classifier-panel.tsx",
                                        lineNumber: 122,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl font-bold",
                                        style: {
                                            color: CLASS_COLORS[mutation.data.predicted_class]
                                        },
                                        children: CLASS_LABELS[mutation.data.predicted_class]
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/flare-classifier-panel.tsx",
                                        lineNumber: 124,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/flare-classifier-panel.tsx",
                                lineNumber: 116,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-neutral-300",
                                children: [
                                    "Confidence: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono font-semibold text-white",
                                        children: [
                                            (mutation.data.confidence * 100).toFixed(1),
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/flare-classifier-panel.tsx",
                                        lineNumber: 132,
                                        columnNumber: 41
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/flare-classifier-panel.tsx",
                                lineNumber: 131,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/flare-classifier-panel.tsx",
                        lineNumber: 109,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-xs font-medium text-neutral-400 uppercase tracking-wider",
                                children: "Class Probabilities"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/flare-classifier-panel.tsx",
                                lineNumber: 140,
                                columnNumber: 25
                            }, this),
                            [
                                "C",
                                "M",
                                "X"
                            ].map((cls)=>{
                                const prob = mutation.data.probabilities[cls];
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-neutral-400",
                                                    children: CLASS_LABELS[cls]
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/major-project-main/major-project-main/components/flare-classifier-panel.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono text-neutral-200",
                                                    children: [
                                                        (prob * 100).toFixed(1),
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/major-project-main/major-project-main/components/flare-classifier-panel.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/major-project-main/major-project-main/components/flare-classifier-panel.tsx",
                                            lineNumber: 147,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-2 rounded-full bg-white/5 overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-full rounded-full transition-all duration-700",
                                                style: {
                                                    width: `${prob * 100}%`,
                                                    background: CLASS_COLORS[cls]
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/flare-classifier-panel.tsx",
                                                lineNumber: 152,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/major-project-main/major-project-main/components/flare-classifier-panel.tsx",
                                            lineNumber: 151,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, cls, true, {
                                    fileName: "[project]/Downloads/major-project-main/major-project-main/components/flare-classifier-panel.tsx",
                                    lineNumber: 146,
                                    columnNumber: 33
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/flare-classifier-panel.tsx",
                        lineNumber: 139,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 rounded-lg bg-white/5 border border-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-neutral-400 mb-1",
                                children: "Severity Score"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/flare-classifier-panel.tsx",
                                lineNumber: 167,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-1",
                                children: [
                                    1,
                                    2,
                                    3
                                ].map((level)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-3 flex-1 rounded-full transition-all duration-500",
                                        style: {
                                            background: level <= mutation.data.severity_score ? CLASS_COLORS[mutation.data.predicted_class] : "rgba(255,255,255,0.05)"
                                        }
                                    }, level, false, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/flare-classifier-panel.tsx",
                                        lineNumber: 170,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/flare-classifier-panel.tsx",
                                lineNumber: 168,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-neutral-400 mt-1 flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Low"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/flare-classifier-panel.tsx",
                                        lineNumber: 182,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Moderate"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/flare-classifier-panel.tsx",
                                        lineNumber: 182,
                                        columnNumber: 45
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Extreme"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/flare-classifier-panel.tsx",
                                        lineNumber: 182,
                                        columnNumber: 66
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/flare-classifier-panel.tsx",
                                lineNumber: 181,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/flare-classifier-panel.tsx",
                        lineNumber: 166,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/major-project-main/major-project-main/components/flare-classifier-panel.tsx",
                lineNumber: 107,
                columnNumber: 17
            }, this),
            mutation.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs",
                children: [
                    "ML backend unavailable. Start the Python server: ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                        children: "python ml_backend/app.py"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/flare-classifier-panel.tsx",
                        lineNumber: 190,
                        columnNumber: 70
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/major-project-main/major-project-main/components/flare-classifier-panel.tsx",
                lineNumber: 189,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/major-project-main/major-project-main/components/flare-classifier-panel.tsx",
        lineNumber: 44,
        columnNumber: 9
    }, this);
}
}),
"[project]/Downloads/major-project-main/major-project-main/components/sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$components$2f$real$2d$time$2d$panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/components/real-time-panel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$components$2f$simulation$2d$panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$components$2f$flare$2d$classifier$2d$panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/components/flare-classifier-panel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$earth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe2$3e$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/lucide-react/dist/esm/icons/earth.js [app-ssr] (ecmascript) <export default as Globe2>");
"use client";
;
;
;
;
;
;
const TABS = [
    {
        id: "realtime",
        label: "Real-Time",
        activeColor: "text-cyan-400 border-cyan-400 bg-cyan-950/10",
        bgClass: ""
    },
    {
        id: "simulation",
        label: "Simulate",
        activeColor: "text-violet-400 border-violet-400 bg-violet-950/10",
        bgClass: ""
    },
    {
        id: "classify",
        label: "ML Classify",
        activeColor: "text-amber-400 border-amber-400 bg-amber-950/10",
        bgClass: ""
    }
];
function Sidebar({ onImpactUpdate }) {
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("realtime");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full flex flex-col bg-[#050810] border-l border-slate-800 shadow-2xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 border-b border-slate-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-xl font-bold text-white tracking-tight flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$earth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe2$3e$__["Globe2"], {
                                className: "text-cyan-500"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/sidebar.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            "Solar Impact"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/sidebar.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-slate-400 mt-1",
                        children: "Submarine Cable Risk Predictor"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/sidebar.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/major-project-main/major-project-main/components/sidebar.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex border-b border-slate-800",
                children: TABS.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setMode(tab.id),
                        className: `flex-1 py-3 text-xs font-medium transition-colors ${mode === tab.id ? `${tab.activeColor} border-b-2` : "text-slate-500 hover:text-slate-300"}`,
                        children: tab.label
                    }, tab.id, false, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/sidebar.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Downloads/major-project-main/major-project-main/components/sidebar.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto",
                children: [
                    mode === "realtime" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$components$2f$real$2d$time$2d$panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RealTimePanel"], {
                        onImpactUpdate: onImpactUpdate
                    }, void 0, false, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/sidebar.tsx",
                        lineNumber: 54,
                        columnNumber: 33
                    }, this),
                    mode === "simulation" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$components$2f$simulation$2d$panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SimulationPanel"], {
                        onSimulationComplete: onImpactUpdate
                    }, void 0, false, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/sidebar.tsx",
                        lineNumber: 55,
                        columnNumber: 35
                    }, this),
                    mode === "classify" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$components$2f$flare$2d$classifier$2d$panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlareClassifierPanel"], {}, void 0, false, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/sidebar.tsx",
                        lineNumber: 56,
                        columnNumber: 33
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/major-project-main/major-project-main/components/sidebar.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-t border-slate-800 text-[10px] text-slate-600 leading-tight",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                className: "inline w-3 h-3 mr-1"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/sidebar.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            "Educational Tool Only"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/sidebar.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    "Data sources: NOAA SWPC, NASA DONKI. ML models: Gradient Boosting + XGBoost hybrid. Not for operational use."
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/major-project-main/major-project-main/components/sidebar.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/major-project-main/major-project-main/components/sidebar.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnalyticsPanel",
    ()=>AnalyticsPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/recharts/es6/chart/BarChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/recharts/es6/cartesian/Bar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/recharts/es6/cartesian/XAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/recharts/es6/cartesian/YAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/recharts/es6/component/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/recharts/es6/component/ResponsiveContainer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/lucide-react/dist/esm/icons/brain.js [app-ssr] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/lucide-react/dist/esm/icons/target.js [app-ssr] (ecmascript) <export default as Target>");
"use client";
;
;
;
;
const COLORS = {
    primary: "#06b6d4",
    secondary: "#8b5cf6",
    tertiary: "#f59e0b",
    success: "#22c55e",
    danger: "#ef4444",
    muted: "#64748b"
};
function AnalyticsPanel() {
    const { data: metrics, isLoading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "model-metrics"
        ],
        queryFn: async ()=>{
            const res = await fetch("/api/ml/metrics");
            if (!res.ok) throw new Error("Failed to fetch metrics");
            return res.json();
        }
    });
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-96",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-10 h-10 border-3 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mx-auto"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                        lineNumber: 34,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-neutral-400",
                        children: "Loading analytics..."
                    }, void 0, false, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                        lineNumber: 35,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                lineNumber: 33,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
            lineNumber: 32,
            columnNumber: 13
        }, this);
    }
    if (error || !metrics) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-96",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center space-y-2 text-neutral-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {
                        className: "w-12 h-12 mx-auto opacity-40"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                        lineNumber: 45,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm",
                        children: "ML backend unavailable"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                        lineNumber: 46,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                        className: "text-xs bg-white/5 px-2 py-1 rounded",
                        children: "python ml_backend/app.py"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                        lineNumber: 47,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                lineNumber: 44,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
            lineNumber: 43,
            columnNumber: 13
        }, this);
    }
    const flare = metrics.flare_classifier;
    const cable = metrics.cable_risk_model;
    // Feature importance data
    const flareFeatures = Object.entries(flare.feature_importance).map(([name, value])=>({
            name,
            value: parseFloat((value * 100).toFixed(1))
        })).sort((a, b)=>b.value - a.value);
    const cableFeatures = Object.entries(cable.feature_importance).map(([name, value])=>({
            name,
            value: parseFloat((value * 100).toFixed(1))
        })).sort((a, b)=>b.value - a.value);
    // Confusion matrix for cable model
    const cmData = cable.confusion_matrix.flatMap((row, i)=>row.map((value, j)=>({
                actual: cable.class_names[i],
                predicted: cable.class_names[j],
                value
            })));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8 p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center space-y-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold text-white flex items-center justify-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                className: "w-5 h-5 text-cyan-400"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                lineNumber: 79,
                                columnNumber: 21
                            }, this),
                            "Model Analytics Dashboard"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                        lineNumber: 78,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-neutral-400",
                        children: "Performance metrics from real NASA DONKI & NOAA SWPC data"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                        lineNumber: 82,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                lineNumber: 77,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border border-cyan-500/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-cyan-400 font-medium mb-1",
                                children: "Flare Classifier"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                lineNumber: 90,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-3xl font-bold text-white",
                                children: [
                                    (flare.accuracy * 100).toFixed(1),
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                lineNumber: 91,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-neutral-400 mt-1",
                                children: "Gradient Boosting"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                lineNumber: 92,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                        lineNumber: 89,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-xl bg-gradient-to-br from-violet-500/10 to-violet-600/5 border border-violet-500/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-violet-400 font-medium mb-1",
                                children: "Cable Risk Model"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                lineNumber: 95,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-3xl font-bold text-white",
                                children: [
                                    (cable.accuracy * 100).toFixed(1),
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                lineNumber: 96,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-neutral-400 mt-1",
                                children: "Hybrid XGBoost"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                lineNumber: 97,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                        lineNumber: 94,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                lineNumber: 88,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-semibold text-white flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                className: "w-4 h-4 text-cyan-400"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                lineNumber: 104,
                                columnNumber: 21
                            }, this),
                            "Flare Classifier — Feature Importance"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                        lineNumber: 103,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/5 rounded-xl p-3 border border-white/10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                            width: "100%",
                            height: 180,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BarChart"], {
                                data: flareFeatures,
                                layout: "vertical",
                                margin: {
                                    left: 50,
                                    right: 10
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                                        type: "number",
                                        tick: {
                                            fill: "#94a3b8",
                                            fontSize: 10
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                        lineNumber: 110,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                                        type: "category",
                                        dataKey: "name",
                                        tick: {
                                            fill: "#94a3b8",
                                            fontSize: 11
                                        },
                                        width: 48
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                        lineNumber: 111,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                        contentStyle: {
                                            background: "#1e293b",
                                            border: "1px solid #334155",
                                            borderRadius: 8,
                                            fontSize: 12
                                        },
                                        labelStyle: {
                                            color: "#e2e8f0"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                        lineNumber: 112,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bar"], {
                                        dataKey: "value",
                                        fill: COLORS.primary,
                                        radius: [
                                            0,
                                            4,
                                            4,
                                            0
                                        ],
                                        name: "Importance %"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                        lineNumber: 116,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                lineNumber: 109,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                            lineNumber: 108,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                        lineNumber: 107,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                lineNumber: 102,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-semibold text-white flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                className: "w-4 h-4 text-violet-400"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                lineNumber: 125,
                                columnNumber: 21
                            }, this),
                            "Cable Risk Model — Feature Importance"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                        lineNumber: 124,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/5 rounded-xl p-3 border border-white/10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                            width: "100%",
                            height: 220,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BarChart"], {
                                data: cableFeatures,
                                layout: "vertical",
                                margin: {
                                    left: 50,
                                    right: 10
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                                        type: "number",
                                        tick: {
                                            fill: "#94a3b8",
                                            fontSize: 10
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                        lineNumber: 131,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                                        type: "category",
                                        dataKey: "name",
                                        tick: {
                                            fill: "#94a3b8",
                                            fontSize: 11
                                        },
                                        width: 48
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                        lineNumber: 132,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                        contentStyle: {
                                            background: "#1e293b",
                                            border: "1px solid #334155",
                                            borderRadius: 8,
                                            fontSize: 12
                                        },
                                        labelStyle: {
                                            color: "#e2e8f0"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                        lineNumber: 133,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bar"], {
                                        dataKey: "value",
                                        fill: COLORS.secondary,
                                        radius: [
                                            0,
                                            4,
                                            4,
                                            0
                                        ],
                                        name: "Importance %"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                        lineNumber: 137,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                lineNumber: 130,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                            lineNumber: 129,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                        lineNumber: 128,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                lineNumber: 123,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-semibold text-white",
                        children: "Model Comparison — Flare Classification"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                        lineNumber: 145,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/5 rounded-xl border border-white/10 overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "border-b border-white/10 text-neutral-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-left p-2.5",
                                                children: "Model"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                                lineNumber: 150,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-right p-2.5",
                                                children: "Acc"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                                lineNumber: 151,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-right p-2.5",
                                                children: "Prec"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                                lineNumber: 152,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-right p-2.5",
                                                children: "Rec"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                                lineNumber: 153,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-right p-2.5",
                                                children: "F1"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                                lineNumber: 154,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                        lineNumber: 149,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                    lineNumber: 148,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: flare.comparison.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: `border-b border-white/5 ${row.model.includes("Proposed") ? "bg-cyan-500/10 text-cyan-300 font-semibold" : "text-neutral-300"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-2.5",
                                                    children: row.model
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "text-right p-2.5 font-mono",
                                                    children: (row.accuracy * 100).toFixed(1)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "text-right p-2.5 font-mono",
                                                    children: (row.precision * 100).toFixed(0)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "text-right p-2.5 font-mono",
                                                    children: (row.recall * 100).toFixed(0)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "text-right p-2.5 font-mono",
                                                    children: (row.f1 * 100).toFixed(0)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                            lineNumber: 159,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                    lineNumber: 157,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                            lineNumber: 147,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                        lineNumber: 146,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                lineNumber: 144,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-semibold text-white",
                        children: "Model Comparison — Cable Risk Prediction"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                        lineNumber: 173,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/5 rounded-xl border border-white/10 overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "border-b border-white/10 text-neutral-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-left p-2.5",
                                                children: "Model"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                                lineNumber: 178,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-right p-2.5",
                                                children: "Acc"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                                lineNumber: 179,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-right p-2.5",
                                                children: "Prec"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                                lineNumber: 180,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-right p-2.5",
                                                children: "Rec"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                                lineNumber: 181,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-right p-2.5",
                                                children: "F1"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                                lineNumber: 182,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                        lineNumber: 177,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                    lineNumber: 176,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: cable.comparison.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: `border-b border-white/5 ${row.model.includes("Proposed") ? "bg-violet-500/10 text-violet-300 font-semibold" : "text-neutral-300"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-2.5",
                                                    children: row.model
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "text-right p-2.5 font-mono",
                                                    children: (row.accuracy * 100).toFixed(1)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "text-right p-2.5 font-mono",
                                                    children: (row.precision * 100).toFixed(0)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "text-right p-2.5 font-mono",
                                                    children: (row.recall * 100).toFixed(0)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "text-right p-2.5 font-mono",
                                                    children: (row.f1 * 100).toFixed(0)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                            lineNumber: 187,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                    lineNumber: 185,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                            lineNumber: 175,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                        lineNumber: 174,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                lineNumber: 172,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-semibold text-white",
                        children: "Cable Risk — Confusion Matrix"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                        lineNumber: 202,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/5 rounded-xl p-4 border border-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-neutral-400 mb-2 text-center",
                                children: "Predicted →"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                lineNumber: 204,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-1",
                                style: {
                                    gridTemplateColumns: `80px repeat(${cable.class_names.length}, 1fr)`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-neutral-400 text-right pr-2",
                                        children: "Actual ↓"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                        lineNumber: 207,
                                        columnNumber: 25
                                    }, this),
                                    cable.class_names.map((name)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-neutral-400 text-center font-medium",
                                            children: name
                                        }, name, false, {
                                            fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                            lineNumber: 209,
                                            columnNumber: 29
                                        }, this)),
                                    cable.confusion_matrix.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-neutral-300 text-right pr-2 font-medium self-center",
                                                    children: cable.class_names[i]
                                                }, `label-${i}`, false, {
                                                    fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 33
                                                }, this),
                                                row.map((val, j)=>{
                                                    const maxVal = Math.max(...cable.confusion_matrix.flat());
                                                    const intensity = val / maxVal;
                                                    const isDiag = i === j;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "aspect-square flex items-center justify-center rounded-lg text-xs font-mono font-bold",
                                                        style: {
                                                            background: isDiag ? `rgba(34, 197, 94, ${0.15 + intensity * 0.5})` : `rgba(239, 68, 68, ${intensity * 0.4})`,
                                                            color: isDiag ? "#86efac" : intensity > 0.1 ? "#fca5a5" : "#94a3b8"
                                                        },
                                                        children: val
                                                    }, `${i}-${j}`, false, {
                                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 41
                                                    }, this);
                                                })
                                            ]
                                        }, void 0, true))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                lineNumber: 205,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                        lineNumber: 203,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                lineNumber: 201,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 rounded-xl bg-white/5 border border-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-neutral-400 mb-1",
                                children: "Flare CV Accuracy"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                lineNumber: 245,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-lg font-bold text-cyan-400 font-mono",
                                children: [
                                    (flare.cv_accuracy_mean * 100).toFixed(1),
                                    "% ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-neutral-400 font-normal",
                                        children: [
                                            "± ",
                                            (flare.cv_accuracy_std * 100).toFixed(1)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                        lineNumber: 247,
                                        columnNumber: 70
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                lineNumber: 246,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-neutral-500",
                                children: "5-Fold Cross Validation"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                lineNumber: 249,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                        lineNumber: 244,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 rounded-xl bg-white/5 border border-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-neutral-400 mb-1",
                                children: "Cable CV Accuracy"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                lineNumber: 252,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-lg font-bold text-violet-400 font-mono",
                                children: [
                                    (cable.cv_accuracy_mean * 100).toFixed(1),
                                    "% ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-neutral-400 font-normal",
                                        children: [
                                            "± ",
                                            (cable.cv_accuracy_std * 100).toFixed(1)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                        lineNumber: 254,
                                        columnNumber: 70
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                lineNumber: 253,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-neutral-500",
                                children: "5-Fold Cross Validation"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                                lineNumber: 256,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                        lineNumber: 251,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                lineNumber: 243,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center text-xs text-neutral-500 space-y-1 pt-2 border-t border-white/5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Trained on real data from NASA DONKI & NOAA SWPC"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                        lineNumber: 262,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Solar flares (2022–2025) • CME events • Kp index • Solar wind"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                        lineNumber: 263,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
                lineNumber: 261,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx",
        lineNumber: 75,
        columnNumber: 9
    }, this);
}
}),
"[project]/Downloads/major-project-main/major-project-main/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$components$2f$globe$2d$wrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/components/globe-wrapper.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$components$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/components/sidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$components$2f$analytics$2d$panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/components/analytics-panel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$earth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe2$3e$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/lucide-react/dist/esm/icons/earth.js [app-ssr] (ecmascript) <export default as Globe2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-ssr] (ecmascript) <export default as BarChart3>");
"use client";
;
;
;
;
;
;
;
function Page() {
    const [risks, setRisks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("globe");
    // Initial Cable Fetch
    const { data: cables } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "cables"
        ],
        queryFn: async ()=>{
            const res = await fetch("/api/cables");
            if (!res.ok) throw new Error("Failed to fetch cables");
            return res.json();
        },
        staleTime: Number.POSITIVE_INFINITY
    });
    const handleImpactUpdate = (data)=>{
        setRisks(data.segmentRisks);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "flex h-screen w-screen overflow-hidden bg-[#050713]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-w-0 relative flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 left-4 z-30 flex gap-1 bg-black/40 backdrop-blur-md rounded-lg p-1 border border-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setView("globe"),
                                className: `flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${view === "globe" ? "bg-cyan-500/20 text-cyan-300 shadow-inner" : "text-neutral-400 hover:text-white"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$earth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe2$3e$__["Globe2"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/app/page.tsx",
                                        lineNumber: 43,
                                        columnNumber: 13
                                    }, this),
                                    " Globe"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/app/page.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setView("analytics"),
                                className: `flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${view === "analytics" ? "bg-violet-500/20 text-violet-300 shadow-inner" : "text-neutral-400 hover:text-white"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/app/page.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this),
                                    " Analytics"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/app/page.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/app/page.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    view === "globe" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$components$2f$globe$2d$wrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            cables: cables || [],
                            risks: risks
                        }, void 0, false, {
                            fileName: "[project]/Downloads/major-project-main/major-project-main/app/page.tsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/app/page.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto pt-14 px-4 pb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$components$2f$analytics$2d$panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnalyticsPanel"], {}, void 0, false, {
                            fileName: "[project]/Downloads/major-project-main/major-project-main/app/page.tsx",
                            lineNumber: 63,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/app/page.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/major-project-main/major-project-main/app/page.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-96 h-full z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$components$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sidebar"], {
                    onImpactUpdate: handleImpactUpdate
                }, void 0, false, {
                    fileName: "[project]/Downloads/major-project-main/major-project-main/app/page.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/major-project-main/major-project-main/app/page.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/major-project-main/major-project-main/app/page.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Downloads_major-project-main_major-project-main_45e98fca._.js.map