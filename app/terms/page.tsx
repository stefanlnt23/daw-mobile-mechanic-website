import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for ADL Mobile Mechanic mobile vehicle repair and servicing services in Shropshire.",
  alternates: { canonical: '/terms' },
  robots: { index: true, follow: true },
}

export default function TermsAndConditions() {
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
          Terms & Conditions
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Last updated: 27 February 2026
        </p>

        <div className="space-y-8 text-muted-foreground leading-relaxed text-sm sm:text-base">
          <section>
            <h2 className="text-lg font-bold text-foreground uppercase tracking-wider mb-3">
              1. About These Terms
            </h2>
            <p>
              These terms and conditions govern your use of the ADL Mobile Mechanic website and the vehicle repair and servicing services we provide. By using our website or engaging our services, you agree to these terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground uppercase tracking-wider mb-3">
              2. Our Services
            </h2>
            <p>
              ADL Mobile Mechanic provides mobile vehicle repair and servicing at your chosen location within our coverage area (Wem, Market Drayton, and a 30-mile radius). Services include but are not limited to:
            </p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li>Timing chain replacement</li>
              <li>Advanced vehicle diagnostics</li>
              <li>Full servicing and MOT preparation</li>
              <li>Suspension and brake repairs</li>
              <li>Clutch and flywheel replacement</li>
              <li>Dealer pre-delivery inspection (PDI) work</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground uppercase tracking-wider mb-3">
              3. Quotes & Pricing
            </h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>All quotes are provided based on the information you supply about your vehicle and the work required.</li>
              <li>Quotes are valid for 14 days from the date issued unless otherwise stated.</li>
              <li>If additional work is discovered during a repair, we will contact you for approval before proceeding. No extra charges will be applied without your consent.</li>
              <li>Prices include labour. Parts costs will be itemised separately in your quote.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground uppercase tracking-wider mb-3">
              4. Bookings & Cancellations
            </h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>Bookings are confirmed via phone or WhatsApp.</li>
              <li>We ask for at least 24 hours&apos; notice if you need to cancel or reschedule a booking.</li>
              <li>We reserve the right to cancel or reschedule bookings due to weather conditions, parts availability, or other circumstances beyond our control.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground uppercase tracking-wider mb-3">
              5. Payment
            </h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>Payment is due upon completion of the work unless otherwise agreed in advance.</li>
              <li>We accept bank transfer, cash, and other payment methods as agreed at the time of booking.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground uppercase tracking-wider mb-3">
              6. Warranty
            </h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>All labour carried out by ADL Mobile Mechanic is guaranteed for a period agreed at the time of service.</li>
              <li>Parts fitted carry the manufacturer&apos;s warranty. We will assist with any warranty claims on parts we have supplied and fitted.</li>
              <li>Warranty does not cover damage caused by misuse, neglect, or subsequent modifications by third parties.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground uppercase tracking-wider mb-3">
              7. Liability
            </h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>We carry full public liability insurance for all work carried out.</li>
              <li>Our liability is limited to the cost of the services provided. We are not liable for indirect or consequential losses.</li>
              <li>You are responsible for ensuring that the location provided for the work is safe, level, and suitable for vehicle repairs.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground uppercase tracking-wider mb-3">
              8. Your Responsibilities
            </h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>Provide accurate information about your vehicle and the issues you are experiencing.</li>
              <li>Ensure the vehicle is accessible at the agreed time and location.</li>
              <li>Inform us of any known hazards at the work location.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground uppercase tracking-wider mb-3">
              9. Website Use
            </h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>The content on this website is for general information purposes only and does not constitute professional mechanical advice.</li>
              <li>We make every effort to keep the website up to date, but we do not guarantee that all information is accurate or current at all times.</li>
              <li>We are not responsible for the content of external websites linked from this site.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground uppercase tracking-wider mb-3">
              10. Changes to These Terms
            </h2>
            <p>
              We may update these terms from time to time. Any changes will be posted on this page with an updated revision date. Continued use of our website or services after changes are posted constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground uppercase tracking-wider mb-3">
              11. Governing Law
            </h2>
            <p>
              These terms are governed by and construed in accordance with the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground uppercase tracking-wider mb-3">
              12. Contact Us
            </h2>
            <p>
              If you have any questions about these terms, please contact us:
            </p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li>Phone: 07426 443009</li>
              <li>WhatsApp: 07426 443009</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}
