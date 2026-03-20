"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"

export function PrivacyBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const dismissed = localStorage.getItem("privacy-banner-dismissed")
    if (!dismissed) {
      setVisible(true)
    }
  }, [])

  const dismiss = () => {
    localStorage.setItem("privacy-banner-dismissed", "true")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:bottom-4 md:left-4 md:right-auto md:max-w-md">
      <div className="rounded-none border border-border bg-card p-4 shadow-2xl shadow-black/20 md:rounded-xl">
        <div className="flex items-start gap-3">
          <div className="flex-1">
            <p className="text-sm leading-relaxed text-muted-foreground">
              This website does not use advertising or tracking cookies. It uses{" "}
              <strong className="text-foreground">privacy-friendly anonymous analytics</strong>{" "}
              and stores this banner preference on your device after dismissal.{" "}
              <Link href="/privacy" className="font-medium text-primary hover:underline">
                Privacy Policy
              </Link>
            </p>
          </div>
          <button
            onClick={dismiss}
            className="flex-shrink-0 rounded-lg bg-primary px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground transition-all hover:brightness-110"
          >
            OK
          </button>
          <button
            onClick={dismiss}
            className="flex-shrink-0 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Dismiss cookie notice"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
