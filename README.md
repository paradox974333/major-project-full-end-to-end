# Solar Flare & CME Submarine Cable Impact Predictor

A 3D interactive visualization tool that predicts and displays the potential impact of solar flares and Coronal Mass Ejections (CMEs) on global submarine cable infrastructure.

## Features

- **Real-Time Monitoring**: Fetches live solar wind data (speed, density, Bz) and Kp index from NOAA SWPC.
- **Interactive 3D Globe**: Visualizes submarine cables and highlights segments at risk using `react-globe.gl`.
- **Risk Modeling**: Implements a simplified geophysical model to estimate Geomagnetically Induced Current (GIC) risks based on latitude, cable length, and storm intensity.
- **Simulation Mode**: Allows users to simulate CME events with custom speeds, directions, and launch times to see potential future impacts.

## Tech Stack

- **Frontend**: Next.js 14 (App Router), React, Tailwind CSS, Lucide React
- **Visualization**: `react-globe.gl` (Three.js wrapper)
- **State Management**: TanStack Query (React Query)
- **Backend**: Next.js API Routes (Serverless functions)

## Getting Started

1. **Install Dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

2. **Run Development Server**:
   \`\`\`bash
   npm run dev
   \`\`\`

3. **Open Application**:
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env.local` file in the root directory to configure external data sources (optional for demo mode as fallbacks are included):

\`\`\`env
# Optional: URL to a custom GeoJSON file for submarine cables
SUBMARINE_CABLE_GEOJSON_URL=https://example.com/cables.json
\`\`\`

## Methodology & Disclaimer

This tool uses a simplified proxy model for educational purposes:
- **Risk Factors**: Considers geomagnetic latitude (auroral oval proximity), cable length (voltage accumulation), and storm intensity (Kp/Solar Wind).
- **Data Sources**: 
  - Solar Wind: NOAA Space Weather Prediction Center (SWPC)
  - CME Parameters: NASA DONKI
  - Cables: TeleGeography (Mock/Public data for demo)

**Note**: This is NOT an operational forecast tool. Real-world GIC impact depends on complex ground conductivity models and detailed cable electrical characteristics not modeled here.
