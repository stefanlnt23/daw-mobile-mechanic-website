import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, MessageCircle, Phone } from "lucide-react"

const phoneDisplay = "07360 078879"
const phoneHref = "tel:07360078879"
const whatsappHref =
  "https://wa.me/447360078879?text=Hi%20DAW%20Mobile%20Mechanic%2C%20I%27m%20looking%20for%20help%20with%20my%20vehicle."

const areas = [
  "Telford",
  "Wellington",
  "Madeley",
  "Oakengates",
  "Shifnal",
  "Newport",
  "Ironbridge",
  "Broseley",
  "Bridgnorth",
  "Surrounding areas in Shropshire",
]

export const metadata: Metadata = {
  title: "Areas We Serve",
  description:
    "Areas served by DAW Mobile Mechanic, including Telford, Wellington, Madeley, Oakengates, Shifnal, Newport, Ironbridge, Broseley, Bridgnorth, and nearby parts of Shropshire.",
  alternates: { canonical: "/areas-we-serve" },
}

export default function AreasWeServePage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto max-w-5xl px-4 py-12 lg:px-8 lg:py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-primary">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="mt-8 rounded-[2.5rem] border border-border/80 bg-card p-8 shadow-[0_18px_50px_rgba(0,0,0,0.24)] md:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">Service Area</p>
          <h1 className="mt-3 font-display text-5xl uppercase leading-[0.9] text-foreground sm:text-6xl">
            Areas We Serve
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
            DAW Mobile Mechanic is based in Telford and works across Telford and nearby areas in Shropshire. If you are close by and unsure whether your location is covered, call or WhatsApp to check availability.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {areas.map((area) => (
              <div
                key={area}
                className="rounded-full border border-border/80 bg-background px-4 py-2 text-sm font-bold uppercase tracking-[0.14em] text-foreground"
              >
                {area}
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
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
      </section>
    </main>
  )
}
