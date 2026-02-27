# Geo-Coordinate Based Solar Flare Impact Prediction on Submarine Cables Using Hybrid XGBoost-ML Algorithm

## Complete Project Documentation

---

## 1. What Is This Project?

This project predicts **which submarine fiber optic cables will be damaged** when a solar flare/CME (Coronal Mass Ejection) hits Earth. It uses **Machine Learning (XGBoost + Gradient Boosting)** combined with real NASA/NOAA space weather data.

### Why Does This Matter?

- Over **95% of global internet traffic** travels through 485+ submarine cables on the ocean floor
- **Solar flares** cause geomagnetic storms that induce electric currents (GIC) in these cables
- GIC can **damage cable repeaters** → internet outage for entire continents
- **No existing system** predicts which specific cables are at risk based on their geo-coordinates
- This project provides a **real-time early warning system** for telecom operators

### Has Anyone Built This Before?

**No.** This is a novel implementation based on the research paper:
> "Geo-Coordinate Based Solar Flare Impact Prediction on Submarine Cables Using Hybrid XGBoost-ML Algorithm"

Previous related work:
- NASA monitors solar weather ✅ — but does NOT predict cable-specific impacts
- Submarine cable operators monitor cable health ✅ — but do NOT correlate with solar events
- This project **bridges both worlds** — combining space weather data with cable geo-coordinates using ML

---

## 2. System Architecture

```
┌──────────────────────────────────────────────────────────────────────────┐
│                           USER INTERFACE                                │
│        Next.js Frontend (localhost:3000)                                 │
│  ┌─────────────┐  ┌───────────────┐  ┌──────────────┐                  │
│  │  3D Globe    │  │   Sidebar     │  │  Analytics   │                  │
│  │  (globe.gl)  │  │  3 Tabs:      │  │  Dashboard   │                  │
│  │  Cables      │  │  • Real-Time  │  │  • Feature   │                  │
│  │  colored by  │  │  • Simulate   │  │    Importance│                  │
│  │  risk level  │  │  • ML Classify│  │  • Confusion │                  │
│  └─────┬───────┘  └───────┬───────┘  │    Matrix    │                  │
│        │                  │          └──────────────┘                   │
└────────┼──────────────────┼────────────────────────────────────────────┘
         │                  │
         │   Next.js API Routes (Server)
         │   ┌───────────────────────────────┐
         │   │ /api/space-weather/realtime   │ ← Fetches from NOAA
         │   │ /api/impact/realtime          │ ← Sends to ML Backend
         │   │ /api/impact/simulate          │ ← Sends to ML Backend
         │   │ /api/ml/flare                 │ ← Proxy to ML Backend
         │   │ /api/ml/metrics               │ ← Proxy to ML Backend
         │   │ /api/cables                   │ ← Serves cables.json
         │   └───────────────┬───────────────┘
         │                   │
         │                   ▼
┌────────┼───────────────────────────────────────────────────────────────┐
│        │         ML BACKEND (localhost:8000)                           │
│        │         FastAPI + Python                                      │
│  ┌─────┴────────────────────────────────────────────────────────┐     │
│  │                   TWO TRAINED MODELS                          │     │
│  │                                                               │     │
│  │  Model 1: Gradient Boosting                                   │     │
│  │  Task: Classify solar flare → C / M / X class                 │     │
│  │  Input: Fpeak, Fsoft, Fhard, Dflare, Hratio                   │     │
│  │                                                               │     │
│  │  Model 2: Hybrid XGBoost                                      │     │
│  │  Task: Predict cable risk → Low / Medium / High               │     │
│  │  Input: Sf, VCME, Bz, Vsw, Kp, Lat, Lcable                   │     │
│  └───────────────────────────────────────────────────────────────┘     │
└───────────────────────────────────────────────────────────────────────┘
         │
         ▼  DATA SOURCES
┌───────────────────────────────────────────────────────────────────────┐
│  NOAA SWPC APIs (Real-Time):                                         │
│  • Solar wind speed, density, Bz magnetic field                      │
│  • Kp geomagnetic index                                              │
│  • GOES X-ray flare events                                           │
│                                                                       │
│  NASA DONKI APIs (Historical):                                        │
│  • Solar flare events (2022-2025)                                    │
│  • CME events with speeds                                            │
│  • Geomagnetic storm records                                         │
│                                                                       │
│  cables.json (Static - 485 real cables):                             │
│  • Cable ID, coordinates, landing points                             │
│  • Mean latitude, estimated length                                   │
└───────────────────────────────────────────────────────────────────────┘
```

---

## 3. Data — What Do We Actually Use?

### 3.1 Training Data Sources

| Source | What We Get | API Endpoint | Type |
|--------|------------|--------------|------|
| **NOAA SWPC** | Real-time solar wind (speed, Bz, density) | `services.swpc.noaa.gov/products/solar-wind/` | Live telemetry |
| **NOAA SWPC** | Kp geomagnetic index | `services.swpc.noaa.gov/products/noaa-planetary-k-index.json` | Live telemetry |
| **NOAA SWPC** | GOES X-ray flare events | `services.swpc.noaa.gov/json/goes/primary/xray-flares-7-day.json` | 7-day rolling |
| **NASA DONKI** | Historical solar flares (2022-2025) | `kauai.ccmc.gsfc.nasa.gov/DONKI/WS/get/FLR` | Historical archive |
| **NASA DONKI** | CME events with speeds | `kauai.ccmc.gsfc.nasa.gov/DONKI/WS/get/CME` | Historical archive |
| **NASA DONKI** | Geomagnetic storms (Kp spikes) | `kauai.ccmc.gsfc.nasa.gov/DONKI/WS/get/GST` | Historical archive |
| **cables.json** | 485 real submarine cable routes | Local file | Static dataset |

### 3.2 Training Dataset 1: Solar Flare Classification

**File:** `data/solar_flare_data.csv`
**Samples:** ~2000+
**Source:** Real NOAA + NASA DONKI flare events, augmented with synthetic data if fewer than 500 real events

| Feature | Description | Unit | Range |
|---------|------------|------|-------|
| `Fpeak` | Peak X-ray flux (log₁₀) | log₁₀(W/m²) | -6.5 to -3.0 |
| `Fsoft` | Soft X-ray flux (1-8 Å band) | log₁₀(W/m²) | Derived from peak |
| `Fhard` | Hard X-ray flux (0.5-4 Å band) | log₁₀(W/m²) | Derived from peak |
| `Dflare` | Flare duration | seconds | 60 - 3600 |
| `Hratio` | Hardness ratio (Fhard/Fsoft) | ratio | 0.01 - 50 |
| **`flare_class`** | **Label: C, M, or X** | class | C / M / X |

**How labels are determined:** Based on the actual X-ray flux measured by GOES satellites:
- **C-class:** 10⁻⁶ to 10⁻⁵ W/m² (common, mild)
- **M-class:** 10⁻⁵ to 10⁻⁴ W/m² (moderate, can cause radio blackouts)
- **X-class:** > 10⁻⁴ W/m² (extreme, can damage infrastructure)

### 3.3 Training Dataset 2: Cable Risk Prediction

**File:** `data/cable_risk_data.csv`
**Samples:** 5000
**Source:** Real NOAA/DONKI distributions sampled into combinations with 485 real cable coordinates

| Feature | Description | Unit | Range |
|---------|------------|------|-------|
| `Sf` | Flare severity (from Model 1) | 1=C, 2=M, 3=X | 1 - 3 |
| `VCME` | CME speed | km/s | 250 - 3500 |
| `Bz` | Southward magnetic field | nT | -35 to +15 |
| `Vsw` | Solar wind speed | km/s | 250 - 900 |
| `Kp` | Geomagnetic storm index | index | 0 - 9 |
| `Lat` | Cable latitude (from cables.json) | degrees | -75 to +75 |
| `Lcable` | Cable length | km | 50 - 15000 |
| **`risk_score`** | **Continuous risk** | 0-1 | 0.0 - 1.0 |
| **`risk_category`** | **Label: Low/Medium/High** | class | Based on score thresholds |

**How risk labels are computed (from the research paper equations):**

```
Step 1: Interaction Term (Eq. 8)
    I = Sf × |Bz|    (flare severity × magnetic field coupling)

Step 2: Induced Electric Field (Eq. 7)
    E = I × Vsw / 1000   (interaction × solar wind)

Step 3: Base Risk Formula
    R_base = 0.30 × (Kp/9)           → storm severity
           + 0.25 × ((VCME-300)/2700)  → CME speed contribution
           + 0.25 × (E/50)             → induced field contribution
           + 0.20 × (Sf/3)             → flare severity

Step 4: Latitude Amplification (Eq. 14)
    R_final = R_base × (1 + 0.008 × |Lat|)
    (Cables near poles get higher risk)

Step 5: Categorize
    Low:    R < 0.33
    Medium: 0.33 ≤ R < 0.66
    High:   R ≥ 0.66
```

> **Key Point:** The risk labels are NOT arbitrary — they come from physics equations in the research paper that model how geomagnetically induced currents (GIC) affect cables based on their location.

---

## 4. The ML Models — Complete Details

### 4.1 Model 1: Solar Flare Classifier (Gradient Boosting)

**Purpose:** Given X-ray flux measurements from GOES satellites, classify the flare as C, M, or X class.

**Algorithm:** Gradient Boosting Classifier (sklearn)
```
Parameters:
  n_estimators = 200   (number of boosting rounds)
  learning_rate = 0.1  (shrinkage factor γ)
  max_depth = 5        (tree depth limit)
  subsample = 0.8      (stochastic gradient boosting)
```

**Math (from paper Eq. 4):**
```
F_m(x) = F_{m-1}(x) + γ_m · h_m(x)
```
Each round fits a new decision tree `h_m` to the negative gradient of the loss function. The final prediction is the sum of all trees.

**Input → Output:**
```
INPUT:  [Fpeak=-4.2, Fsoft=-4.35, Fhard=-3.98, Dflare=1200, Hratio=2.3]
OUTPUT: { class: "X", confidence: 0.97 }
```

### 4.2 Model 2: Cable Risk Predictor (Hybrid XGBoost)

**Purpose:** Given solar storm conditions + a specific cable's location, predict if that cable is at Low/Medium/High risk.

**Algorithm:** XGBoost Classifier (xgboost)
```
Parameters:
  n_estimators = 300   (boosting rounds)
  learning_rate = 0.1
  max_depth = 6
  reg_alpha = 0.1      (L1 regularization)
  reg_lambda = 1.0     (L2 regularization, paper Eq. 11)
  gamma = 0.1          (minimum split gain, paper Eq. 11)
```

**Math (from paper Eq. 9-11):**
```
Objective = Σ L(y_i, ŷ_i) + Σ Ω(f_k)
where Ω(f) = γT + ½λ‖w‖²

T = number of leaves, w = leaf weights
```

**Input → Output:**
```
INPUT:  [Sf=3, VCME=2000, Bz=-15, Vsw=600, Kp=7, Lat=62, Lcable=3000]
OUTPUT: { risk_category: "High", risk_score: 0.83 }
```

**Why is this "Hybrid"?**
The output of Model 1 (flare class → severity score Sf) becomes an INPUT to Model 2. This is the "hybrid" architecture:

```
                Model 1                    Model 2
X-ray data → [Gradient Boosting] → Sf → [XGBoost] → Cable Risk
                                    ↑
              Real-time NOAA data ──┘ (Kp, Bz, Vsw, VCME)
              Cable coordinates ────┘ (Lat, Lcable)
```

---

## 5. How Each Feature Works (Step-by-Step)

### 5.1 Real-Time Prediction

```
User clicks "PREDICT CABLE IMPACT"
    │
    ▼
Frontend → POST /api/impact/realtime
    │
    ▼
API Route fetches live NOAA data:
  • Solar wind: speed=452 km/s, density=5.0 p/cm³, Bz=1.0 nT
  • Kp index: 2.7 (G0 = no storm)
    │
    ▼
API Route calculates:
  • Sf = 1 (Kp < 4, so C-class equivalent)
  • For EACH of 485 cables, constructs input vector:
    [Sf=1, VCME=542, Bz=1.0, Vsw=452, Kp=2.7, Lat=cable.lat, Lcable=cable.length]
    │
    ▼
Sends batch of 485 inputs → ML Backend (port 8000)
    │
    ▼
XGBoost model predicts for each cable:
  • Cable at 62°N (Greenland): risk_score = 0.44, category = "Medium"
  • Cable at 15°N (2Africa):   risk_score = 0.05, category = "Low"
  • Cable at 5°S (equatorial):  risk_score = 0.02, category = "Low"
    │
    ▼
Frontend receives results → Globe colors change:
  • Cyan = Low risk
  • Orange = Medium risk
  • Red = High risk
```

### 5.2 Simulation Mode

```
User sets: CME Speed = 2500 km/s, Direction = (0°, 0°)
User clicks "RUN SIMULATION"
    │
    ▼
API Route calculates synthetic storm conditions:
  • Transit time: 1.496×10⁸ km ÷ 2500 km/s = 16.6 hours
  • Synthetic Kp = 1.5 + 7.5 × (2500-400)/2600 = 7.6
  • G-Scale = G3 (strong storm)
  • Estimated Bz = -(7.6 × 2.5) = -19.0 nT (strong southward)
    │
    ▼
Sends 485 cables to XGBoost with simulated conditions:
  [Sf=3, VCME=2500, Bz=-19.0, Vsw=725, Kp=7.6, Lat=each, Lcable=each]
    │
    ▼
Results: Most cables show HIGH risk (83%+)
Globe turns RED everywhere → visual warning
List shows specific cable names with risk %
```

### 5.3 Flare Classification (ML Classify Tab)

```
User selects "X-class (Extreme)" preset or enters custom values
User clicks "CLASSIFY SOLAR FLARE"
    │
    ▼
Sends Fpeak, Fsoft, Fhard, Dflare, Hratio → ML Backend
    │
    ▼
Gradient Boosting classifies: "X-class" with 97% confidence
    │
    ▼
Result displayed with color-coded severity
```

---

## 6. File Structure

```
major-project-main/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Main page: Globe + Sidebar + Analytics toggle
│   ├── layout.tsx                # Root layout with providers
│   └── api/
│       ├── cables/route.ts       # Serves cable data
│       ├── space-weather/
│       │   └── realtime/route.ts # Proxies NOAA live data
│       ├── impact/
│       │   ├── realtime/route.ts # ML-only real-time prediction
│       │   └── simulate/route.ts # ML-only simulation prediction
│       └── ml/
│           ├── flare/route.ts    # Proxy: flare classification
│           ├── cable-risk/route.ts # Proxy: batch cable risk
│           └── metrics/route.ts  # Proxy: model performance metrics
│
├── components/
│   ├── globe-viz.tsx             # 3D globe with cable visualization
│   ├── sidebar.tsx               # Tabbed sidebar (3 tabs)
│   ├── real-time-panel.tsx       # Real-time space weather + prediction
│   ├── simulation-panel.tsx      # CME simulation with results
│   ├── flare-classifier-panel.tsx # Manual flare classification
│   └── analytics-panel.tsx       # ML model metrics dashboard
│
├── lib/
│   ├── types.ts                  # All TypeScript interfaces
│   ├── constants.ts              # NOAA API URLs
│   ├── risk-model.ts             # (Legacy) TypeScript risk equations
│   └── data/
│       ├── cables.json           # 485 real submarine cable routes
│       └── cables.ts             # Processes cables with names + lengths
│
├── ml_backend/                   # Python ML Server
│   ├── app.py                    # FastAPI server (port 8000)
│   ├── generate_data.py          # Synthetic data generator
│   ├── scrape_real_data.py       # NOAA/NASA API scraper
│   ├── train_models.py           # Model training pipeline
│   ├── requirements.txt          # Python dependencies
│   ├── data/                     # Generated training CSVs
│   │   ├── solar_flare_data.csv
│   │   └── cable_risk_data.csv
│   └── models/                   # Trained model files
│       ├── flare_classifier.joblib
│       ├── cable_risk_model.joblib
│       ├── flare_scaler.joblib
│       ├── cable_risk_scaler.joblib
│       └── metrics.json
│
└── PROJECT_DOCUMENTATION.md      # This file
```

---

## 7. How to Run the Project

### Step 1: Start ML Backend
```bash
cd ml_backend
pip install -r requirements.txt
python scrape_real_data.py    # Scrapes real NASA/NOAA data (run once)
python train_models.py         # Trains both models (run once)
python app.py                  # Starts FastAPI server on port 8000
```

### Step 2: Start Frontend
```bash
cd major-project-main
npm install
npm run dev                    # Starts Next.js on port 3000
```

### Step 3: Use the Application
1. Open `http://localhost:3000`
2. **Real-Time tab:** Click "PREDICT CABLE IMPACT" to see current risk levels
3. **Simulate tab:** Set CME speed (try 2500 km/s) and click "RUN SIMULATION"
4. **ML Classify tab:** Test manual flare classification
5. **Analytics view:** Click "Analytics" button to see model performance

---

## 8. What Makes Each Cable Higher or Lower Risk?

The XGBoost model has learned that **two cable properties** matter most:

### Latitude (Most Important)
Cables near the **auroral zones (60°N/S)** are at highest risk because Earth's magnetic field concentrates charged particles there. The model learned this from the training data where `Lat` combined with storm severity determines risk.

| Cable Example | Latitude | Typical Risk During G3 Storm |
|--------------|----------|------------------------------|
| Greenland Connect | 62°N | 83% (HIGH) |
| Cantat 3 | 58°N | 80% (HIGH) |
| 2Africa | 15°N | 35% (MEDIUM) |
| SEA-ME-WE 6 | 5°N | 12% (LOW) |

### Cable Length (Secondary Factor)
Longer cables accumulate more voltage from GIC. A 5000 km transatlantic cable picks up more induced voltage than a 200 km coastal link.

---

## 9. Model Performance Metrics

| Metric | Flare Classifier (GB) | Cable Risk (XGBoost) |
|--------|----------------------|---------------------|
| **Accuracy** | ~99%+ | ~96% |
| **Precision** | ~99% | ~96% |
| **Recall** | ~99% | ~96% |
| **F1-Score** | ~99% | ~96% |
| **5-Fold CV** | ~99% | ~95% |

These metrics are available live in the **Analytics dashboard** on the frontend.

---

## 10. Technology Stack

| Component | Technology | Purpose |
|-----------|-----------|---------|
| Frontend | Next.js 16 + React 19 | UI framework |
| 3D Globe | globe.gl | Cable visualization |
| Charts | Recharts | Analytics charts |
| Styling | Tailwind CSS | UI styling |
| ML Backend | FastAPI (Python) | Serves ML predictions |
| Flare Model | scikit-learn Gradient Boosting | Flare classification |
| Risk Model | XGBoost | Cable risk prediction |
| Data Processing | Pandas + NumPy | Data manipulation |
| Real-time Data | NOAA SWPC APIs | Live space weather |
| Historical Data | NASA DONKI APIs | Training data source |

---

## 11. Research Paper Equations Implemented

| Equation | Description | Implementation |
|----------|-------------|---------------|
| Eq. 1 | Min-Max Normalization | `MinMaxScaler` in training |
| Eq. 2 | X-ray Flux Log Transform | `Fpeak = log10(Fxray)` |
| Eq. 3 | Flare Classification | `argmax P(Y=k\|Xf)` |
| Eq. 4 | Gradient Boosting Update | `Fm(x) = Fm-1(x) + γm·hm(x)` |
| Eq. 6 | Flare Severity Mapping | `Sf: C→1, M→2, X→3` |
| Eq. 7 | Induced Field Proxy | `E = I × Vsw / 1000` |
| Eq. 8 | Interaction Term | `I = Sf × \|Bz\|` |
| Eq. 9-11 | XGBoost Objective | Regularized loss with L1+L2 |
| Eq. 13 | Risk Thresholds | `Low<0.33, Medium<0.66, High` |
| Eq. 14 | Latitude Amplification | `R × (1 + α\|Lat\|)` |
