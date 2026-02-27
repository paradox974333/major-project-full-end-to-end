(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/major-project-main/major-project-main/node_modules/react-globe.gl/dist/react-globe.gl.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Globe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$react$2d$kapsule$2f$dist$2f$react$2d$kapsule$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/react-kapsule/dist/react-kapsule.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$globe$2e$gl$2f$dist$2f$globe$2e$gl$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/globe.gl/dist/globe.gl.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/major-project-main/major-project-main/node_modules/prop-types/index.js [app-client] (ecmascript)");
;
;
;
var GlobePropTypes = {
    width: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    height: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    globeOffset: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number),
    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    backgroundImageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    globeImageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    bumpImageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    globeTileEngineUrl: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    showGlobe: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    showGraticules: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    showAtmosphere: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    atmosphereColor: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    atmosphereAltitude: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    globeMaterial: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
    onGlobeReady: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    onGlobeClick: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    onGlobeRightClick: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    pointsData: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object),
    pointLat: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    pointLng: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    pointColor: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    pointAltitude: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    pointRadius: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    pointResolution: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    pointsMerge: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    pointsTransitionDuration: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    pointLabel: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    onPointClick: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    onPointRightClick: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    onPointHover: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    arcsData: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object),
    arcStartLat: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    arcStartLng: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    arcEndLat: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    arcEndLng: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    arcColor: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string),
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    arcAltitude: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    arcAltitudeAutoScale: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    arcStroke: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    arcCurveResolution: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    arcCircularResolution: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    arcDashLength: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    arcDashGap: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    arcDashInitialGap: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    arcDashAnimateTime: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    arcsTransitionDuration: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    arcLabel: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    onArcClick: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    onArcRightClick: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    onArcHover: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    polygonsData: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object),
    polygonGeoJsonGeometry: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    polygonCapColor: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    polygonCapMaterial: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    polygonSideColor: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    polygonSideMaterial: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    polygonStrokeColor: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    polygonAltitude: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    polygonCapCurvatureResolution: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    polygonsTransitionDuration: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    polygonLabel: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    onPolygonClick: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    onPolygonRightClick: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    onPolygonHover: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    pathsData: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].array,
    pathPoints: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].array,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    pathPointLat: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    pathPointLng: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    pathPointAlt: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    pathResolution: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    pathColor: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string),
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    pathStroke: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    pathDashLength: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    pathDashGap: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    pathDashInitialGap: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    pathDashAnimateTime: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    pathTransitionDuration: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    pathLabel: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    onPathClick: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    onPathRightClick: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    onPathHover: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    heatmapsData: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].array,
    heatmapPoints: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].array,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    heatmapPointLat: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    heatmapPointLng: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    heatmapPointWeight: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    heatmapBandwidth: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    heatmapColorFn: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    heatmapColorSaturation: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    heatmapBaseAltitude: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    heatmapTopAltitude: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    heatmapsTransitionDuration: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    onHeatmapClick: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    onHeatmapRightClick: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    onHeatmapHover: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    hexBinPointsData: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object),
    hexBinPointLat: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    hexBinPointLng: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    hexBinPointWeight: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    hexBinResolution: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    hexMargin: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    hexTopColor: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    hexSideColor: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    hexAltitude: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    hexTopCurvatureResolution: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    hexBinMerge: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    hexTransitionDuration: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    hexLabel: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    onHexClick: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    onHexRightClick: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    onHexHover: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    hexPolygonsData: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object),
    hexPolygonGeoJsonGeometry: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    hexPolygonColor: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    hexPolygonAltitude: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    hexPolygonResolution: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    hexPolygonMargin: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    hexPolygonUseDots: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    hexPolygonCurvatureResolution: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    hexPolygonDotResolution: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    hexPolygonsTransitionDuration: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    hexPolygonLabel: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    onHexPolygonClick: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    onHexPolygonRightClick: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    onHexPolygonHover: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    tilesData: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object),
    tileLat: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    tileLng: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    tileAltitude: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    tileWidth: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    tileHeight: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    tileUseGlobeProjection: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    tileMaterial: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    tileCurvatureResolution: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    tilesTransitionDuration: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    tileLabel: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    onTileClick: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    onTileRightClick: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    onTileHover: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    particlesData: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object),
    particlesList: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    particleLat: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    particleLng: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    particleAltitude: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    particlesSize: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    particlesSizeAttenuation: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    particlesColor: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    particlesTexture: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    particleLabel: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    onParticleClick: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    onParticleRightClick: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    onParticleHover: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    ringsData: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object),
    ringLat: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    ringLng: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    ringAltitude: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    ringColor: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string),
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    ringResolution: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    ringMaxRadius: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    ringPropagationSpeed: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    ringRepeatPeriod: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    labelsData: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object),
    labelLat: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    labelLng: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    labelAltitude: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    labelRotation: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    labelText: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    labelSize: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    labelTypeFace: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
    labelColor: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    labelResolution: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    labelIncludeDot: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    labelDotRadius: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    labelDotOrientation: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    labelsTransitionDuration: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    labelLabel: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    onLabelClick: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    onLabelRightClick: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    onLabelHover: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    htmlElementsData: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object),
    htmlLat: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    htmlLng: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    htmlAltitude: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    htmlElement: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    htmlElementVisibilityModifier: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    htmlTransitionDuration: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    objectsData: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object),
    objectLat: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    objectLng: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    objectAltitude: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    objectRotation: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].shape({
            x: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
            y: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
            z: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    objectFacesSurface: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    objectThreeObject: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    objectLabel: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    onObjectClick: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    onObjectRightClick: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    onObjectHover: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    customLayerData: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object),
    customThreeObject: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    customThreeObjectUpdate: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    customLayerLabel: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    onCustomLayerClick: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    onCustomLayerRightClick: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    onCustomLayerHover: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    enablePointerInteraction: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    pointerEventsFilter: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    lineHoverPrecision: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    showPointerCursor: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ]),
    onZoom: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
};
var Globe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$react$2d$kapsule$2f$dist$2f$react$2d$kapsule$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$major$2d$project$2d$main$2f$major$2d$project$2d$main$2f$node_modules$2f$globe$2e$gl$2f$dist$2f$globe$2e$gl$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
    methodNames: [
        // bind methods
        'pauseAnimation',
        'resumeAnimation',
        'pointOfView',
        'lights',
        'scene',
        'camera',
        'renderer',
        'postProcessingComposer',
        'controls',
        'getGlobeRadius',
        'getCoords',
        'getScreenCoords',
        'toGeoCoords',
        'toGlobeCoords',
        'globeTileEngineClearCache'
    ],
    initPropNames: [
        'animateIn',
        'waitForGlobeReady',
        'rendererConfig'
    ]
});
Globe.displayName = 'Globe';
Globe.propTypes = GlobePropTypes;
;
}),
]);

//# sourceMappingURL=e6c4c_react-globe_gl_dist_react-globe_gl_mjs_d0c2397d._.js.map