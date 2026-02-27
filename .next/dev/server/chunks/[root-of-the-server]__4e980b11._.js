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
"[project]/Downloads/space-weather-impact-predictor/app/api/cables/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$space$2d$weather$2d$impact$2d$predictor$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CABLES_URL"]);
        if (!response.ok) {
            throw new Error(`Failed to fetch cables: ${response.statusText}`);
        }
        const geojson = await response.json();
        const features = geojson.features || [];
        const cables = features.map((f, index)=>{
            if (!f.geometry || f.geometry.type !== "LineString" && f.geometry.type !== "MultiLineString") {
                return null;
            }
            let coordinates = [];
            if (f.geometry.type === "LineString") {
                coordinates = f.geometry.coordinates;
            } else if (f.geometry.type === "MultiLineString") {
                // Flatten MultiLineString to a single path for simplicity in this demo
                // In a real app, we might treat them as separate segments
                coordinates = f.geometry.coordinates.flat();
            }
            // Simple mean lat/lon calc
            let sumLat = 0, sumLon = 0;
            coordinates.forEach((c)=>{
                sumLon += c[0];
                sumLat += c[1];
            });
            return {
                id: f.properties?.id || f.properties?.slug || `cable-${index}`,
                name: f.properties?.name || "Unknown Cable",
                coordinates: coordinates,
                lengthKm: Number.parseFloat(f.properties?.length) || 0,
                meanLat: sumLat / coordinates.length,
                meanLon: sumLon / coordinates.length,
                landingPoints: []
            };
        }).filter((c)=>c !== null);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$space$2d$weather$2d$impact$2d$predictor$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(cables);
    } catch (error) {
        console.error("Failed to fetch cables", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$space$2d$weather$2d$impact$2d$predictor$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to fetch cable data"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4e980b11._.js.map