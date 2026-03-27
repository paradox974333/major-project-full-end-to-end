const DEFAULT_ML_BACKEND_URL = "http://127.0.0.1:8000"

export const ML_BACKEND_URL = process.env.ML_BACKEND_URL ?? DEFAULT_ML_BACKEND_URL

export async function predictCableRiskBatch(payload: { cables: Record<string, number>[] }) {
  const response = await fetch(`${ML_BACKEND_URL}/predict/cable-risk/batch`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    cache: "no-store",
    signal: AbortSignal.timeout(15000),
  })

  if (!response.ok) {
    throw new Error(`ML backend returned ${response.status}`)
  }

  return response.json()
}

export async function predictFlare(payload: unknown) {
  const response = await fetch(`${ML_BACKEND_URL}/predict/flare`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    cache: "no-store",
    signal: AbortSignal.timeout(10000),
  })

  if (!response.ok) {
    throw new Error(`ML backend returned ${response.status}`)
  }

  return response.json()
}

export async function fetchModelMetrics() {
  const response = await fetch(`${ML_BACKEND_URL}/model/metrics`, {
    cache: "no-store",
    signal: AbortSignal.timeout(10000),
  })

  if (!response.ok) {
    throw new Error(`ML backend returned ${response.status}`)
  }

  return response.json()
}

export async function fetchHealth() {
  const response = await fetch(`${ML_BACKEND_URL}/health`, {
    cache: "no-store",
    signal: AbortSignal.timeout(5000),
  })

  if (!response.ok) {
    throw new Error(`ML backend returned ${response.status}`)
  }

  return response.json()
}
