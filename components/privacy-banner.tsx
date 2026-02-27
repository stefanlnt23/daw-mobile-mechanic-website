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
      <div className="bg-card border border-border rounded-none md:rounded-xl p-4 shadow-2xl shadow-black/40">
        <div className="flex items-start gap-3">
          <div className="flex-1">
            <p className="text-sm text-muted-foreground leading-relaxed">
              This website uses{" "}
              <strong className="text-foreground">no cookies</strong>. We collect
              only anonymous analytics to improve your experience.{" "}
              <Link href="/privacy" className="text-primary hover:underline font-medium">
                Privacy Policy
              </Link>
            </p>
          </div>
          <button
            onClick={dismiss}
            className="flex-shrink-0 bg-primary text-primary-foreground px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all"
          >
            Got it
          </button>
          <button
            onClick={dismiss}
            className="flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Dismiss privacy notice"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
