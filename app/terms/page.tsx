import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for DAW Mobile Mechanic mobile mechanic services.",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
}

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16 lg:py-24">
        <Link href="/" className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-primary">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="font-display text-4xl uppercase text-foreground">Terms & Conditions</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: 19 March 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-muted-foreground sm:text-base">
          <section>
            <h2 className="font-display text-3xl uppercase text-foreground">1. Services</h2>
            <p className="mt-3">
              DAW Mobile Mechanic provides mobile repair and servicing work in Telford and surrounding areas, subject to safe access and suitable working conditions.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl uppercase text-foreground">2. Quotes & Approval</h2>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>Quotes are based on the information available at the time.</li>
              <li>If further faults are discovered, approval will be requested before extra chargeable work begins.</li>
              <li>Parts and labour may be itemised separately where needed.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-3xl uppercase text-foreground">3. Bookings</h2>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>Bookings are arranged by phone, WhatsApp, or email.</li>
              <li>Please give reasonable notice if you need to cancel or reschedule.</li>
              <li>Appointments may need to move due to weather, supplier delays, or safety concerns.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-3xl uppercase text-foreground">4. Payment</h2>
            <p className="mt-3">
              Payment is due as agreed at the time of booking or on completion of the work unless another arrangement has been confirmed in advance.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl uppercase text-foreground">5. Customer Responsibilities</h2>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>Provide accurate details about the vehicle and the fault where possible.</li>
              <li>Ensure the vehicle is accessible and the location is safe to work in.</li>
              <li>Tell us about any known hazards or previous incomplete repairs.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-3xl uppercase text-foreground">6. Contact</h2>
            <p className="mt-3">
              Questions about these terms can be sent to DAW Mobile Mechanic on 07360 078879 or dawmobilemechanic@outlook.com.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
