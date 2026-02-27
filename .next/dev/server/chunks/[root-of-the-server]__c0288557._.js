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
"[project]/Downloads/space-weather-impact-predictor/lib/constants.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CABLES_URL",
    ()=>CABLES_URL,
    "NOAA_KP_INDEX_URL",
    ()=>NOAA_KP_INDEX_URL,
    "NOAA_SOLAR_WIND_MAG_URL",
    ()=>NOAA_SOLAR_WIND_MAG_URL,
    "NOAA_SOLAR_WIND_SPEED_URL",
    ()=>NOAA_SOLAR_WIND_SPEED_URL
]);
const CABLES_URL = "https://raw.githubusercontent.com/opengeos/leafmap/master/examples/data/cable_geo.geojson";
const NOAA_SOLAR_WIND_MAG_URL = "https://services.swpc.noaa.gov/products/summary/solar-wind-mag-field.json";
const NOAA_SOLAR_WIND_SPEED_URL = "https://services.swpc.noaa.gov/products/summary/solar-wind-speed.json";
const NOAA_KP_INDEX_URL = "https://services.swpc.noaa.gov/products/noaa-planetary-k-index.json";
}),
"[project]/Downloads/space-weather-impact-predictor/app/api/space-weather/realtime/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$space$2d$weather$2d$impact$2d$predictor$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/space-weather-impact-predictor/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$space$2d$weather$2d$impact$2d$predictor$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/space-weather-impact-predictor/lib/constants.ts [app-route] (ecmascript)");
;
;
async function GET() {
    try {
        const [magRes, speedRes, kpRes] = await Promise.all([
            fetch(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$space$2d$weather$2d$impact$2d$predictor$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NOAA_SOLAR_WIND_MAG_URL"]),
            fetch(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$space$2d$weather$2d$impact$2d$predictor$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NOAA_SOLAR_WIND_SPEED_URL"]),
            fetch(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$space$2d$weather$2d$impact$2d$predictor$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NOAA_KP_INDEX_URL"])
        ]);
        if (!magRes.ok || !speedRes.ok || !kpRes.ok) {
            throw new Error("Failed to fetch one or more NOAA data sources");
        }
        const magData = await magRes.json();
        const speedData = await speedRes.json();
        const kpData = await kpRes.json();
        // Mag and Speed are summary JSONs with keys like "Bz" and "WindSpeed"
        const bz = Number.parseFloat(magData.Bz) || 0;
        const speed = Number.parseFloat(speedData.WindSpeed) || 400;
        const density = Number.parseFloat(speedData.Density) || 5 // Fallback if missing
        ;
        // Kp index is a list of lists: [["time_tag", "kp_index", ...], ...]
        // We want the last entry
        let currentKp = 0;
        let lastUpdate = new Date().toISOString();
        if (Array.isArray(kpData) && kpData.length > 1) {
            // Get the last row
            const lastRow = kpData[kpData.length - 1];
            // Index 1 is usually the Kp value
            currentKp = Number.parseFloat(lastRow[1]) || 0;
            lastUpdate = lastRow[0] || new Date().toISOString();
        }
        let scale = "G0";
        if (currentKp >= 5) scale = "G1";
        if (currentKp >= 6) scale = "G2";
        if (currentKp >= 7) scale = "G3";
        if (currentKp >= 8) scale = "G4";
        if (currentKp >= 9) scale = "G5";
        const weatherData = {
            fetchedAt: new Date().toISOString(),
            solarWind: {
                speedKms: speed,
                densityPcm3: density,
                bzNtl: bz
            },
            kp: {
                current: currentKp,
                lastUpdate: lastUpdate,
                scale: scale
            }
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$space$2d$weather$2d$impact$2d$predictor$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(weatherData);
    } catch (error) {
        console.error("Error fetching space weather:", error);
        // Fallback to mock data if external API fails
        const mockData = {
            fetchedAt: new Date().toISOString(),
            solarWind: {
                speedKms: 450,
                densityPcm3: 5,
                bzNtl: -2
            },
            kp: {
                current: 3,
                lastUpdate: new Date().toISOString(),
                scale: "G0"
            }
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$space$2d$weather$2d$impact$2d$predictor$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(mockData);
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c0288557._.js.map