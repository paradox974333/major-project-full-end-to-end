import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Providers } from "./providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Solar Flare Impact Predictor",
  description: "Real-time & simulated CME impact on submarine cables",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#050713] text-slate-100 overflow-hidden antialiased`}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  )
}
