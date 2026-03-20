import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for DAW Mobile Mechanic and how personal data is handled under UK GDPR.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16 lg:py-24">
        <Link href="/" className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-primary">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="font-display text-4xl uppercase text-foreground">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: 19 March 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-muted-foreground sm:text-base">
          <section>
            <h2 className="font-display text-3xl uppercase text-foreground">1. Who We Are</h2>
            <p className="mt-3">
              DAW Mobile Mechanic is a mobile vehicle repair and servicing business operating in Telford and the surrounding area.
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1">
              <li>Phone: 07360 078879</li>
              <li>Email: dawmobilemechanic@outlook.com</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-3xl uppercase text-foreground">2. What Data We Collect</h2>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>Contact details you provide when calling, emailing, or messaging us.</li>
              <li>Vehicle information needed to quote, diagnose, or complete work.</li>
              <li>Anonymous website analytics used to understand site performance.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-3xl uppercase text-foreground">3. How We Use It</h2>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>To respond to enquiries and provide quotes.</li>
              <li>To arrange bookings and carry out repair or servicing work.</li>
              <li>To keep basic records needed for customer support and legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-3xl uppercase text-foreground">4. Your Rights</h2>
            <p className="mt-3">
              Under UK GDPR, you can request access to your data, ask for inaccuracies to be corrected, request deletion where appropriate, and object to certain processing.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl uppercase text-foreground">5. Contact</h2>
            <p className="mt-3">
              For privacy questions, contact DAW Mobile Mechanic on 07360 078879 or by email at dawmobilemechanic@outlook.com.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
