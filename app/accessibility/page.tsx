import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "Accessibility Statement for the DAW Mobile Mechanic website.",
  alternates: { canonical: "/accessibility" },
  robots: { index: true, follow: true },
}

export default function AccessibilityStatement() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16 lg:py-24">
        <Link href="/" className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-primary">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="font-display text-4xl uppercase text-foreground">Accessibility Statement</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: 19 March 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-muted-foreground sm:text-base">
          <section>
            <h2 className="font-display text-3xl uppercase text-foreground">Commitment</h2>
            <p className="mt-3">
              DAW Mobile Mechanic aims to make this website clear, readable, and easy to use on phones, tablets, and desktop devices.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl uppercase text-foreground">What We Have Done</h2>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>Used high-contrast colours and readable type sizes.</li>
              <li>Made primary actions easy to find on mobile.</li>
              <li>Included descriptive labels and simple navigation structure.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-3xl uppercase text-foreground">Feedback</h2>
            <p className="mt-3">
              If you have trouble using this website or need information in another format, contact DAW Mobile Mechanic on 07360 078879 or email dawmobilemechanic@outlook.com.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
