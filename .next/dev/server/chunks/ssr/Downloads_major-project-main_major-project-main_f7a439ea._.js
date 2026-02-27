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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 p-4",
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
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "datetime-local",
                                value: startTime,
                                onChange: (e)=>setStartTime(e.target.value),
                                className: "w-full bg-slate-900 border border-slate-700 rounded p-2 text-sm text-white focus:border-cyan-500 outline-none"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                        lineNumber: 45,
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
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-cyan-400 font-mono",
                                        children: [
                                            speed,
                                            " km/s"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                min: "400",
                                max: "3000",
                                step: "50",
                                value: speed,
                                onChange: (e)=>setSpeed(Number(e.target.value)),
                                className: "w-full accent-cyan-500"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-slate-500 mt-1 flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this),
                                    " Est. Transit: ",
                                    transitHours.toFixed(1),
                                    " hours"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                        lineNumber: 56,
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
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: "-90",
                                        max: "90",
                                        value: dirLat,
                                        onChange: (e)=>setDirLat(Number(e.target.value)),
                                        className: "w-full bg-slate-900 border border-slate-700 rounded p-2 text-sm text-white focus:border-cyan-500 outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-slate-400 mb-1",
                                        children: "Impact Lon (°)"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: "-180",
                                        max: "180",
                                        value: dirLon,
                                        onChange: (e)=>setDirLon(Number(e.target.value)),
                                        className: "w-full bg-slate-900 border border-slate-700 rounded p-2 text-sm text-white focus:border-cyan-500 outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                lineNumber: 43,
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
                    lineNumber: 108,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                            lineNumber: 111,
                            columnNumber: 13
                        }, this),
                        " RUN SIMULATION"
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            simMutation.data && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-slate-900/80 border border-violet-500/30 rounded-lg p-4 animate-in fade-in slide-in-from-bottom-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-violet-400 text-sm font-bold mb-2 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this),
                            " Simulation Results"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                        lineNumber: 118,
                        columnNumber: 11
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
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white",
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(simMutation.data.predictedArrivalTime), "MMM d, HH:mm"),
                                            " UTC"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                        lineNumber: 124,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-400",
                                        children: "Peak Intensity:"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                        lineNumber: 129,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white font-bold",
                                        children: [
                                            "Kp ",
                                            simMutation.data.syntheticKpPeak.toFixed(1),
                                            " (",
                                            simMutation.data.gScale,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                lineNumber: 128,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-400",
                                        children: "Affected Cables:"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                        lineNumber: 135,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white",
                                        children: simMutation.data.cableAggregates.filter((c)=>c.maxRisk > 0.2).length
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
                lineNumber: 117,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/major-project-main/major-project-main/components/simulation-panel.tsx",
        lineNumber: 42,
        columnNumber: 5
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$earth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe2$3e$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/lucide-react/dist/esm/icons/earth.js [app-ssr] (ecmascript) <export default as Globe2>");
"use client";
;
;
;
;
;
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
                                lineNumber: 21,
                                columnNumber: 11
                            }, this),
                            "Solar Impact"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/sidebar.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-slate-400 mt-1",
                        children: "Submarine Cable Risk Predictor"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/sidebar.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/major-project-main/major-project-main/components/sidebar.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex border-b border-slate-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setMode("realtime"),
                        className: `flex-1 py-3 text-sm font-medium transition-colors ${mode === "realtime" ? "text-cyan-400 border-b-2 border-cyan-400 bg-cyan-950/10" : "text-slate-500 hover:text-slate-300"}`,
                        children: "Real-Time"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/sidebar.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setMode("simulation"),
                        className: `flex-1 py-3 text-sm font-medium transition-colors ${mode === "simulation" ? "text-violet-400 border-b-2 border-violet-400 bg-violet-950/10" : "text-slate-500 hover:text-slate-300"}`,
                        children: "Simulation"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/sidebar.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/major-project-main/major-project-main/components/sidebar.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto",
                children: mode === "realtime" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$components$2f$real$2d$time$2d$panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RealTimePanel"], {
                    onImpactUpdate: onImpactUpdate
                }, void 0, false, {
                    fileName: "[project]/Downloads/major-project-main/major-project-main/components/sidebar.tsx",
                    lineNumber: 54,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$components$2f$simulation$2d$panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SimulationPanel"], {
                    onSimulationComplete: onImpactUpdate
                }, void 0, false, {
                    fileName: "[project]/Downloads/major-project-main/major-project-main/components/sidebar.tsx",
                    lineNumber: 56,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/major-project-main/major-project-main/components/sidebar.tsx",
                lineNumber: 52,
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
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            "Educational Tool Only"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/components/sidebar.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    "Data sources: NOAA SWPC, NASA DONKI. Risk model is a simplified GIC proxy. Not for operational use."
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/major-project-main/major-project-main/components/sidebar.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/major-project-main/major-project-main/components/sidebar.tsx",
        lineNumber: 17,
        columnNumber: 5
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
"use client";
;
;
;
;
;
function Page() {
    const [risks, setRisks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
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
                className: "flex-1 min-w-0 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$components$2f$globe$2d$wrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        cables: cables || [],
                        risks: risks
                    }, void 0, false, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/app/page.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 left-4 pointer-events-none md:hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-white font-bold text-lg drop-shadow-md",
                            children: "Solar Impact"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/major-project-main/major-project-main/app/page.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/major-project-main/major-project-main/app/page.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/major-project-main/major-project-main/app/page.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-96 h-full z-50 bg-red-500",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$components$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sidebar"], {
                    onImpactUpdate: handleImpactUpdate
                }, void 0, false, {
                    fileName: "[project]/Downloads/major-project-main/major-project-main/app/page.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/major-project-main/major-project-main/app/page.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/major-project-main/major-project-main/app/page.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Downloads_major-project-main_major-project-main_f7a439ea._.js.map