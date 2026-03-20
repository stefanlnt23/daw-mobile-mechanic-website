import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, MessageCircle, Phone } from "lucide-react"
import { WorkGalleryGrid } from "@/components/work-gallery-grid"
import { DawReviews } from "@/components/daw-reviews"
import { workGallery } from "@/lib/work-gallery"

const phoneDisplay = "07360 078879"
const phoneHref = "tel:07360078879"
const whatsappHref =
  "https://wa.me/447360078879?text=Hi%20DAW%20Mobile%20Mechanic%2C%20I%27m%20looking%20for%20help%20with%20my%20vehicle."

export const metadata: Metadata = {
  title: "Our Work",
  description: "Recent jobs completed by DAW Mobile Mechanic across Telford and surrounding areas.",
  alternates: { canonical: "/our-work" },
}

export default function OurWorkPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-primary">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </section>

      <DawReviews limit={8} />

      <section className="mx-auto max-w-7xl px-4 pb-14 lg:px-8 lg:pb-20">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">Our Work</p>
            <h1 className="mt-3 font-display text-5xl uppercase leading-[0.9] text-foreground sm:text-6xl">
              Recent DAW Jobs
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              A full gallery of repairs, servicing, diagnostics, and maintenance work carried out for customers across Telford and nearby areas.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={phoneHref}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-primary-foreground transition hover:-translate-y-0.5 hover:brightness-105"
            >
              <Phone className="h-4 w-4" />
              Call {phoneDisplay}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-emerald-600 px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-emerald-500"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>

        <WorkGalleryGrid items={workGallery} />
      </section>
    </main>
  )
}
