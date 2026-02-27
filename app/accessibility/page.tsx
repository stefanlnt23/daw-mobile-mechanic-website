import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "Accessibility Statement for the ADL Mobile Mechanic website. Our commitment to WCAG 2.1 AA accessibility standards.",
  alternates: { canonical: '/accessibility' },
  robots: { index: true, follow: true },
}

export default function AccessibilityStatement() {
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
          Accessibility Statement
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Last updated: 27 February 2026
        </p>

        <div className="space-y-8 text-muted-foreground leading-relaxed text-sm sm:text-base">
          <section>
            <h2 className="text-lg font-bold text-foreground uppercase tracking-wider mb-3">
              Our Commitment
            </h2>
            <p>
              ADL Mobile Mechanic is committed to making our website accessible to everyone, including people with disabilities. We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground uppercase tracking-wider mb-3">
              What We Do
            </h2>
            <p>To ensure accessibility, our website has been built with the following in mind:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Clear, readable text with sufficient colour contrast against backgrounds.</li>
              <li>Descriptive alt text on all images.</li>
              <li>Semantic HTML structure with proper heading hierarchy.</li>
              <li>Keyboard navigable interface — all interactive elements can be accessed without a mouse.</li>
              <li>Responsive design that works across mobile, tablet, and desktop devices.</li>
              <li>ARIA labels on interactive elements where appropriate.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground uppercase tracking-wider mb-3">
              Known Limitations
            </h2>
            <p>
              While we strive for full accessibility, some areas may not yet be fully optimised. We are continuously working to improve the experience for all users.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground uppercase tracking-wider mb-3">
              Need Help?
            </h2>
            <p>
              If you experience any difficulty accessing our website or have suggestions for improvement, please contact us. We take all feedback seriously and will do our best to accommodate your needs.
            </p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li>Phone: 07426 443009</li>
              <li>WhatsApp: 07426 443009</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground uppercase tracking-wider mb-3">
              Alternative Access
            </h2>
            <p>
              If you are unable to use our website, you can always reach us directly by phone or WhatsApp. We are happy to provide any information from the website over the phone.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
