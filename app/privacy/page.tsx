import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for ADL Mobile Mechanic. How we collect, use, and protect your personal data under UK GDPR.",
  alternates: { canonical: '/privacy' },
  robots: { index: true, follow: true },
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background carbon-fiber">
      <div className="mx-auto max-w-3xl px-4 py-16 lg:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Last updated: 27 February 2026
        </p>

        <div className="space-y-8 text-muted-foreground leading-relaxed text-sm sm:text-base">
          <section>
            <h2 className="text-lg font-bold text-foreground uppercase tracking-wider mb-3">
              1. Who We Are
            </h2>
            <p>
              ADL Mobile Mechanic is a mobile vehicle repair and servicing business operating in Wem, Market Drayton, and surrounding areas within a 30-mile radius. For any privacy-related queries, you can contact us at:
            </p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li>Phone: 07426 443009</li>
              <li>WhatsApp: 07426 443009</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground uppercase tracking-wider mb-3">
              2. What Data We Collect
            </h2>
            <p>We collect minimal personal data. This may include:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>
                <strong className="text-foreground">Contact information</strong> — your name, phone number, and any details you share when contacting us via phone or WhatsApp.
              </li>
              <li>
                <strong className="text-foreground">Vehicle information</strong> — make, model, registration, and fault details you provide when requesting a service.
              </li>
              <li>
                <strong className="text-foreground">Anonymous usage data</strong> — we use Vercel Analytics to collect anonymous, aggregated website usage data (page views, device type, country). This data cannot identify you personally and does not use cookies.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground uppercase tracking-wider mb-3">
              3. How We Use Your Data
            </h2>
            <p>We use your personal data to:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Respond to your enquiries and provide quotes.</li>
              <li>Carry out vehicle repairs and servicing you have requested.</li>
              <li>Contact you about your booking or follow up on completed work.</li>
              <li>Improve our website based on anonymous analytics.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground uppercase tracking-wider mb-3">
              4. Legal Basis for Processing
            </h2>
            <p>Under UK GDPR, we process your data on the following bases:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>
                <strong className="text-foreground">Contractual necessity</strong> — to provide the services you have requested.
              </li>
              <li>
                <strong className="text-foreground">Legitimate interest</strong> — to respond to enquiries and improve our services.
              </li>
              <li>
                <strong className="text-foreground">Consent</strong> — where you have given us explicit permission, such as contacting us via WhatsApp.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground uppercase tracking-wider mb-3">
              5. Cookies & Tracking
            </h2>
            <p>
              This website does <strong className="text-foreground">not</strong> use cookies for tracking or advertising purposes. We use Vercel Analytics, which is a privacy-focused, cookieless analytics service that collects only anonymous, aggregated data.
            </p>
            <p className="mt-3">
              No third-party tracking cookies, advertising pixels, or social media trackers are present on this website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground uppercase tracking-wider mb-3">
              6. Data Sharing
            </h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. Your data may be shared only with:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>
                <strong className="text-foreground">Vercel Inc.</strong> — our website hosting provider, which processes anonymous analytics data on our behalf.
              </li>
              <li>
                <strong className="text-foreground">Parts suppliers</strong> — only vehicle details (never your personal information) when ordering parts for your repair.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground uppercase tracking-wider mb-3">
              7. Data Retention
            </h2>
            <p>
              We retain your contact and vehicle information only for as long as necessary to provide our services and meet any legal obligations. You can request deletion of your data at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground uppercase tracking-wider mb-3">
              8. Your Rights
            </h2>
            <p>Under UK GDPR, you have the right to:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Request deletion of your data.</li>
              <li>Object to or restrict our processing of your data.</li>
              <li>Request a copy of your data in a portable format.</li>
              <li>Withdraw consent at any time where processing is based on consent.</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us by phone or WhatsApp on 07426 443009.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground uppercase tracking-wider mb-3">
              9. Complaints
            </h2>
            <p>
              If you are unhappy with how we handle your data, you have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO):
            </p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li>Website: ico.org.uk</li>
              <li>Phone: 0303 123 1113</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground uppercase tracking-wider mb-3">
              10. Changes to This Policy
            </h2>
            <p>
              We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
