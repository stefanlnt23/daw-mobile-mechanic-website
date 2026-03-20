"use client"

import { useEffect, useState } from "react"

const businessHours = {
  0: null,
  1: { open: 8, close: 18 },
  2: { open: 8, close: 18 },
  3: { open: 8, close: 18 },
  4: { open: 8, close: 18 },
  5: { open: 8, close: 18 },
  6: { open: 8, close: 13 },
} as const

function getOpenState(date: Date) {
  const londonFormatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })

  const parts = londonFormatter.formatToParts(date)
  const weekday = parts.find((part) => part.type === "weekday")?.value ?? "Mon"
  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? "0")
  const minute = Number(parts.find((part) => part.type === "minute")?.value ?? "0")
  const timeLabel = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date)
  const dayMap: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  }
  const dayIndex = dayMap[weekday] ?? 1
  const schedule = businessHours[dayIndex as keyof typeof businessHours]

  if (!schedule) {
    return { isOpen: false, label: "Closed now", timeLabel }
  }

  const currentMinutes = hour * 60 + minute
  const openMinutes = schedule.open * 60
  const closeMinutes = schedule.close * 60
  const isOpen = currentMinutes >= openMinutes && currentMinutes < closeMinutes

  return {
    isOpen,
    label: isOpen ? "Open now" : "Closed now",
    timeLabel,
  }
}

type OpenStatusProps = {
  className?: string
}

export function OpenStatus({ className }: OpenStatusProps) {
  const [status, setStatus] = useState(() => getOpenState(new Date()))

  useEffect(() => {
    const update = () => setStatus(getOpenState(new Date()))
    update()
    const interval = window.setInterval(update, 1000)
    return () => window.clearInterval(interval)
  }, [])

  return (
    <div className={className}>
      <span
        className={`inline-block h-2.5 w-2.5 rounded-full ${status.isOpen ? "bg-emerald-500" : "bg-red-500"}`}
        aria-hidden="true"
      />
      <span>{status.label}</span>
      <span className="opacity-70">UK {status.timeLabel}</span>
    </div>
  )
}
