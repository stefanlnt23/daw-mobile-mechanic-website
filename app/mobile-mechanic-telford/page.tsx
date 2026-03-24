import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, Clock3, Mail, MapPin, MessageCircle, Phone, Wrench } from "lucide-react"

const phoneDisplay = "07360 078879"
const phoneHref = "tel:07360078879"
const whatsappHref =
  "https://wa.me/447360078879?text=Hi%20DAW%20Mobile%20Mechanic%2C%20I%27m%20looking%20for%20help%20with%20my%20vehicle."
const email = "dawmobilemechanic@outlook.com"
const googleMapsHref = "https://maps.app.goo.gl/TNWxsrNMaq3E5wJi7"

const services = [
  "Mobile car servicing",
  "Diagnostics and warning light checks",
  "Brake repairs and replacements",
  "Suspension repairs",
  "MOT failure repairs",
  "Steering and exhaust work",
  "Timing belt replacement",
]

const locations = [
  "Telford",
  "Overdale",
  "Wellington",
  "Madeley",
  "Oakengates",
  "Shifnal",
  "Newport",
  "Ironbridge",
]

const faqs = [
  {
    question: "Do you cover all of Telford?",
    answer:
      "DAW Mobile Mechanic is based in Overdale, Telford and covers Telford plus nearby areas in Shropshire. If you are just outside the usual radius, call or WhatsApp to check.",
  },
  {
    question: "Can you repair my car at home or work?",
    answer:
      "Yes. Most servicing and repair work can be carried out at your home or workplace as long as the vehicle is safely accessible.",
  },
  {
    question: "What jobs do you handle?",
    answer:
      "Common jobs include servicing, diagnostics, brakes, suspension, steering, exhausts, timing belts, and MOT-related repairs.",
  },
]

export const metadata: Metadata = {
  title: "Mobile Mechanic Telford",
  description:
    "Mobile mechanic in Telford offering on-site servicing, diagnostics, brakes, suspension, MOT repairs, steering, exhausts, and timing belts across Telford and nearby areas.",
  alternates: {
    canonical: "/mobile-mechanic-telford",
  },
  openGraph: {
    title: "Mobile Mechanic Telford | DAW Mobile Mechanic",
    description:
      "On-site car repairs and servicing in Telford. Call DAW Mobile Mechanic for diagnostics, brakes, suspension, MOT repairs, and more.",
    url: "/mobile-mechanic-telford",
  },
}

export default function MobileMechanicTelfordPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto max-w-6xl px-4 py-12 lg:px-8 lg:py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-primary">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="mt-8 overflow-hidden rounded-[2.5rem] border border-border/80 bg-card shadow-[0_18px_50px_rgba(0,0,0,0.24)]">
          <div className="bg-[linear-gradient(135deg,rgba(230,57,70,0.16),rgba(10,15,30,0.04)_58%,transparent)] px-8 py-10 md:px-10 md:py-12">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">Telford Service Area</p>
            <h1 className="mt-4 max-w-4xl font-display text-5xl uppercase leading-[0.9] text-foreground sm:text-6xl md:text-7xl">
              Mobile Mechanic
              <span className="mt-2 block text-primary">Telford</span>
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
              DAW Mobile Mechanic provides on-site car repairs and servicing across Telford. If you need a mobile mechanic
              for diagnostics, brakes, suspension, MOT repairs, steering, exhausts, or timing belts, DAW comes to your home
              or workplace and gets the job sorted without the garage runaround.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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

            <div className="mt-8 grid gap-3 text-sm text-foreground/82 sm:grid-cols-2 lg:grid-cols-4">
              <div className="inline-flex items-center gap-2 rounded-2xl border border-border/70 bg-background/70 px-4 py-3">
                <MapPin className="h-4 w-4 text-primary" />
                Brookes Ave., Overdale, Telford TF3 5FP
              </div>
              <div className="inline-flex items-center gap-2 rounded-2xl border border-border/70 bg-background/70 px-4 py-3">
                <Clock3 className="h-4 w-4 text-primary" />
                Mon-Fri 8am-6pm, Sat 8am-1pm
              </div>
              <div className="inline-flex items-center gap-2 rounded-2xl border border-border/70 bg-background/70 px-4 py-3">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                5.0 from 58 Google reviews
              </div>
              <a
                href={googleMapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-border/70 bg-background/70 px-4 py-3 transition hover:border-primary hover:text-primary"
              >
                <MapPin className="h-4 w-4 text-primary" />
                View on Google Maps
              </a>
            </div>
          </div>
        </div>

        <section className="mt-10 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-[2rem] border border-border/80 bg-card p-8">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">Services</p>
            <h2 className="mt-3 font-display text-4xl uppercase leading-none text-foreground sm:text-5xl">
              On-site car repairs in Telford
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground">
              This page is focused on customers searching for a mobile mechanic in Telford. It gives Google a clearer local
              signal than a broad homepage while still helping customers quickly understand what DAW actually does.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {services.map((service) => (
                <div key={service} className="flex items-start gap-3 rounded-2xl border border-border/70 bg-background/70 px-4 py-4">
                  <Wrench className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span className="text-sm font-medium text-foreground">{service}</span>
                </div>
              ))}
            </div>
          </article>

          <aside className="rounded-[2rem] border border-border/80 bg-card p-8">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">Coverage</p>
            <h2 className="mt-3 font-display text-4xl uppercase leading-none text-foreground">Nearby Areas</h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground">
              Based in Overdale, DAW covers Telford and nearby areas. If you are close by and not sure whether your address is
              included, call or WhatsApp and check before booking.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {locations.map((location) => (
                <span
                  key={location}
                  className="rounded-full border border-border/80 bg-background px-4 py-2 text-sm font-bold uppercase tracking-[0.14em] text-foreground"
                >
                  {location}
                </span>
              ))}
            </div>
            <a
              href={`mailto:${email}`}
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-border/80 bg-background px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-foreground transition hover:border-primary hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              {email}
            </a>
          </aside>
        </section>

        <section className="mt-10 grid gap-5 lg:grid-cols-3">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-[2rem] border border-border/80 bg-card p-6">
              <h2 className="font-display text-3xl uppercase leading-none text-foreground">{faq.question}</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{faq.answer}</p>
            </article>
          ))}
        </section>
      </section>
    </main>
  )
}
