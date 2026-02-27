import { NextResponse } from "next/server"

const ML_BACKEND = "http://localhost:8000"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const res = await fetch(`${ML_BACKEND}/predict/flare`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })

    if (!res.ok) {
      const err = await res.text()
      return NextResponse.json({ error: err }, { status: res.status })
    }

    return NextResponse.json(await res.json())
  } catch {
    return NextResponse.json(
      { error: "ML backend unavailable" },
      { status: 503 }
    )
  }
}
