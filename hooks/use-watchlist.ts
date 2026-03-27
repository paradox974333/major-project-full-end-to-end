"use client"

import { useEffect, useState } from "react"
import type { WatchlistItem } from "@/lib/types"

const STORAGE_KEY = "solar-impact-watchlist"

export function useWatchlist() {
  const [watchlist, setWatchlist] = useState<WatchlistItem[]>([])

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (raw) {
        setWatchlist(JSON.parse(raw) as WatchlistItem[])
      }
    } catch (error) {
      console.error("Failed to read watchlist from storage:", error)
    }
  }, [])

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(watchlist))
    } catch (error) {
      console.error("Failed to persist watchlist:", error)
    }
  }, [watchlist])

  const addOrUpdate = (item: WatchlistItem) => {
    setWatchlist((current) => {
      const existing = current.find((entry) => entry.cableId === item.cableId)
      if (existing) {
        return current.map((entry) => (entry.cableId === item.cableId ? item : entry))
      }
      return [...current, item]
    })
  }

  const remove = (cableId: string) => {
    setWatchlist((current) => current.filter((entry) => entry.cableId !== cableId))
  }

  return {
    watchlist,
    addOrUpdate,
    remove,
  }
}
