"use client"

import dynamic from "next/dynamic"

const GlobeViz = dynamic(() => import("./globe-viz"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-[#050713] animate-pulse" />,
})

export default GlobeViz
