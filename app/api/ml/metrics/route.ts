import { NextResponse } from "next/server"

const ML_BACKEND = "http://localhost:8000"

export async function GET() {
    try {
        const res = await fetch(`${ML_BACKEND}/model/metrics`)
        if (!res.ok) throw new Error("ML backend error")
        return NextResponse.json(await res.json())
    } catch {
        return NextResponse.json(
            { error: "ML backend unavailable" },
            { status: 503 }
        )
    }
}
