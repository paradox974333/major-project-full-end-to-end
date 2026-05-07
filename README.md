# Solar Flare and CME Submarine Cable Impact Predictor

An interactive engineering project that estimates how solar flares, CMEs, and geomagnetic storm conditions may affect global submarine cable routes and related infrastructure.

The app combines live space-weather telemetry, cable geo-coordinates, simulation controls, historical event context, and a Python ML backend.

## Why This Is a Valid Final-Year Project

This is a valid final-year engineering concept because it combines multiple engineering areas in one working system:

- Space-weather data ingestion from NOAA SWPC and NASA DONKI.
- Geo-coordinate processing for real submarine cable routes.
- Machine learning with Gradient Boosting and XGBoost.
- Physics-inspired risk scoring using Kp, southward Bz, CME speed, latitude, and cable length.
- Full-stack implementation with Next.js frontend and FastAPI backend.
- 3D visualization, simulation, analytics, watchlist alerts, export, and historical matching.

The project should be presented as an educational decision-support and risk-estimation tool, not as an operational forecast system.

## Current Features

- Real-time space-weather monitoring using NOAA SWPC solar wind and Kp data.
- Interactive 3D globe showing submarine cable routes and risk hotspots.
- Real-time cable impact prediction with ML backend and TypeScript fallback model.
- CME simulation mode with speed, launch time, and impact direction.
- Solar flare classifier for C/M/X class prediction.
- Cable risk classifier and regressor for Low/Medium/High risk plus continuous score.
- Analytics dashboard with feature importance, metrics, credibility warnings, and data coverage.
- Historical event matching and replay presets.
- Cable watchlist with threshold alerts.
- Cross-sector impact outlook for cables, grids, satellites, GNSS, radio, aviation, pipelines, and auroral activity.
- JSON/CSV export for simulation and impact reports.
- One-click Windows startup script for frontend and backend.

## Tech Stack

- Frontend: Next.js 16, React 19, TypeScript, Tailwind CSS.
- Visualization: react-globe.gl / Three.js.
- Server routes: Next.js API routes.
- ML backend: FastAPI, scikit-learn, XGBoost.
- State/data fetching: TanStack Query.

## ML Backend

The backend runs at:

```text
http://127.0.0.1:8000
```

Models:

- Flare classifier: Gradient Boosting classifier.
- Cable risk model: XGBoost classifier plus XGBoost regressor.

Current risk thresholds:

```text
Low:    score < 0.25
Medium: 0.25 <= score < 0.45
High:   score >= 0.45
```

The backend clamps extreme real-world route values to the model training range before prediction, so very long estimated cable segments do not break batch prediction.

## Run Project

Use the provided Windows script:

```powershell
.\start-project.bat
```

It starts:

- Backend: `http://127.0.0.1:8000`
- Frontend: `http://localhost:3000`

The script reuses existing `node_modules` and `ml_backend\.venv`. It reinstalls backend dependencies only when `ml_backend\requirements.txt` changes.

## Manual Run

Backend:

```powershell
cd ml_backend
.\.venv\Scripts\python.exe app.py
```

Frontend:

```powershell
npm run dev
```

## Verification Commands

```powershell
npm run lint
npx tsc --noEmit
npm run build
npm audit
```

Backend check:

```text
http://127.0.0.1:8000/health
```

## Important Disclaimer

This project is not an operational space-weather forecast tool. Real infrastructure impact depends on ground conductivity, cable electrical design, repeater protection, regional grid coupling, and detailed storm evolution. This system is best described as a research prototype and educational decision-support simulator.
