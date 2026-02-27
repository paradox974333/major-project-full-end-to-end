module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Downloads/space-weather-impact-predictor/lib/risk-model.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateRealTimeRisk",
    ()=>calculateRealTimeRisk,
    "calculateSimulationRisk",
    ()=>calculateSimulationRisk,
    "getRiskLevel",
    ()=>getRiskLevel
]);
function getRiskLevel(score) {
    if (score >= 0.7) return "CRITICAL";
    if (score >= 0.4) return "HIGH";
    if (score >= 0.2) return "MEDIUM";
    return "LOW";
}
// Helper to calculate distance between two points (Haversine approximation or simple spherical)
function angularDistance(lat1, lon1, lat2, lon2) {
    const toRad = (d)=>d * Math.PI / 180;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return c * 180 / Math.PI // degrees
    ;
}
function calculateRealTimeRisk(cables, weather) {
    const { kp } = weather;
    const { speedKms, densityPcm3, bzNtl } = weather.solarWind;
    // 1. Coupling Proxy (Simplified)
    // Southward Bz (negative) increases coupling. High speed + high density increases pressure.
    const bzFactor = bzNtl < 0 ? Math.abs(bzNtl) : 0;
    const coupling = bzFactor * speedKms * Math.sqrt(densityPcm3);
    // Normalize coupling roughly (e.g., typical storm might be 5 * 400 * sqrt(5) ~ 4500)
    const couplingNorm = Math.min(coupling / 10000, 1.5);
    // 2. Storm Factor based on Kp
    const stormFactor = Math.min(kp.current / 9.0, 1.0);
    const risks = [];
    cables.forEach((cable)=>{
        // In a real app, we'd split cables into smaller segments.
        // Here we treat the whole cable as one segment for simplicity,
        // or use its mean lat/lon.
        const L = cable.lengthKm;
        const phi = cable.meanLat;
        // Latitude Weight: Peak near 60 degrees (auroral oval), decays towards equator
        // Gaussian: exp(-((|phi| - 60)^2) / (2 * 20^2))
        const latWeight = Math.exp(-Math.pow(Math.abs(phi) - 60, 2) / (2 * Math.pow(20, 2)));
        // Length Weight: Longer cables accumulate more voltage
        // Saturate at 2000km
        const lengthWeight = Math.min(L / 2000, 1.5);
        // Combine
        let rawRisk = stormFactor * latWeight * lengthWeight * (1 + couplingNorm * 0.2);
        // Normalize to 0-1
        rawRisk = Math.min(rawRisk, 1.0);
        risks.push({
            cableId: cable.id,
            cableName: cable.name,
            segmentIndex: 0,
            riskScore: rawRisk,
            riskLevel: getRiskLevel(rawRisk),
            meanLat: cable.meanLat,
            meanLon: cable.meanLon,
            coordinates: cable.coordinates
        });
    });
    return risks;
}
function calculateSimulationRisk(cables, params) {
    const { syntheticKp, directionLat, directionLon } = params;
    const stormFactor = syntheticKp / 9.0;
    const risks = [];
    cables.forEach((cable)=>{
        const L = cable.lengthKm;
        const phi = cable.meanLat;
        // Latitude Weight
        const latWeight = Math.exp(-Math.pow(Math.abs(phi) - 60, 2) / (2 * Math.pow(20, 2)));
        // Length Weight
        const lengthWeight = Math.min(L / 2000, 1.5);
        // Footprint Weight (Directional Impact)
        // Calculate angular distance from CME impact point to cable center
        const angle = angularDistance(phi, cable.meanLon, directionLat, directionLon);
        // Sigma ~ 40 degrees
        const footprintWeight = Math.exp(-Math.pow(angle, 2) / (2 * Math.pow(40, 2)));
        // Combine
        let rawRisk = stormFactor * latWeight * lengthWeight * footprintWeight * 1.5 // Boost for visibility
        ;
        rawRisk = Math.min(rawRisk, 1.0);
        risks.push({
            cableId: cable.id,
            cableName: cable.name,
            segmentIndex: 0,
            riskScore: rawRisk,
            riskLevel: getRiskLevel(rawRisk),
            meanLat: cable.meanLat,
            meanLon: cable.meanLon,
            coordinates: cable.coordinates
        });
    });
    return risks;
}
}),
"[project]/Downloads/space-weather-impact-predictor/app/api/impact/realtime/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$space$2d$weather$2d$impact$2d$predictor$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/space-weather-impact-predictor/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$space$2d$weather$2d$impact$2d$predictor$2f$lib$2f$risk$2d$model$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/space-weather-impact-predictor/lib/risk-model.ts [app-route] (ecmascript)");
;
;
async function POST(req) {
    try {
        // In a real app, we might fetch cables from DB or cache here.
        // For this demo, we'll fetch from our own internal API or reuse logic.
        // To keep it self-contained, we'll re-fetch the mock cables internally.
        // 1. Get Cables (Internal call logic)
        const cablesRes = await fetch(new URL("/api/cables", req.url));
        const cables = await cablesRes.json();
        // 2. Get Weather (Internal call logic)
        const weatherRes = await fetch(new URL("/api/space-weather/realtime", req.url));
        const weather = await weatherRes.json();
        // 3. Calculate Risk
        const segmentRisks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$space$2d$weather$2d$impact$2d$predictor$2f$lib$2f$risk$2d$model$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["calculateRealTimeRisk"])(cables, weather);
        // 4. Aggregate
        const cableAggregates = segmentRisks.map((r)=>({
                cableId: r.cableId,
                cableName: r.cableName,
                maxRisk: r.riskScore,
                meanRisk: r.riskScore,
                worstSegment: {
                    lat: r.meanLat,
                    lon: r.meanLon,
                    riskScore: r.riskScore
                }
            })).sort((a, b)=>b.maxRisk - a.maxRisk);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$space$2d$weather$2d$impact$2d$predictor$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            updatedAt: new Date().toISOString(),
            globalKp: weather.kp.current,
            gScale: weather.kp.scale,
            segmentRisks,
            cableAggregates
        });
    } catch (error) {
        console.error(error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$space$2d$weather$2d$impact$2d$predictor$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Calculation failed"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__085e76f1._.js.map