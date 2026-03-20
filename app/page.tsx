import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import {
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Star,
} from "lucide-react"
import { WorkCarousel } from "@/components/work-carousel"
import { featuredWork } from "@/lib/work-gallery"
import { CoverageMap } from "@/components/coverage-map"
import { DawReviews } from "@/components/daw-reviews"
import { OpenStatus } from "@/components/open-status"
import { HomeHeader } from "@/components/home-header"

export const metadata: Metadata = {
  title: "Mobile Mechanic Telford | On-Site Car Repairs",
  description:
    "Reliable mobile mechanic in Telford. DAW Mobile Mechanic comes to you for servicing, diagnostics, MOT repairs, brakes, suspension, steering, exhausts, and timing belts across Telford and surrounding areas.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "DAW Mobile Mechanic",
    title: "Mobile Mechanic Telford | DAW Mobile Mechanic",
    description:
      "On-site car repairs and servicing in Telford and surrounding areas. Mobile diagnostics, MOT repairs, brakes, suspension, steering, exhausts, and timing belts.",
    url: "/",
    images: [
      {
        url: "/socials.png",
        width: 1536,
        height: 1024,
        alt: "DAW Mobile Mechanic mobile mechanic social preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DAW Mobile Mechanic | Broken Down? Call DAW.",
    description:
      "Mobile mechanic covering Telford and surrounding areas with fast mobile-friendly contact options.",
    images: ["/socials.png"],
  },
}

const phoneDisplay = "07360 078879"
const phoneHref = "tel:07360078879"
const whatsappHref =
  "https://wa.me/447360078879?text=Hi%20DAW%20Mobile%20Mechanic%2C%20I%27m%20looking%20for%20help%20with%20my%20vehicle."
const email = "dawmobilemechanic@outlook.com"
const googleMapsHref = "https://maps.app.goo.gl/TNWxsrNMaq3E5wJi7"
const facebookHref = "https://www.facebook.com/profile.php?id=61576953417451"
const instagramHref =
  "https://www.instagram.com/dawmobilemechanic?fbclid=IwY2xjawQpacNleHRuA2FlbQIxMABicmlkETBGOEN2N2MydEs4YUZ2YzREc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHhC5eChIiTO7louY37PYPnN66kzBt4O7TEQo6rkrs3q-MiJZ4u9AmRVkK3qO_aem_pz48dCIaCW_WMX8vxy9MpA"

const openingHours = [
  { day: "Monday", time: "8am-6pm" },
  { day: "Tuesday", time: "8am-6pm" },
  { day: "Wednesday", time: "8am-6pm" },
  { day: "Thursday", time: "8am-6pm" },
  { day: "Friday", time: "8am-6pm" },
  { day: "Saturday", time: "8am-1pm" },
  { day: "Sunday", time: "Closed" },
]

const compactOpeningHours = [
  { label: "Mon-Fri", time: "08:00am to 6pm" },
  { label: "Saturday", time: "08:00am to 1pm" },
  { label: "Sunday", time: "Closed" },
]

const makes = [
  { name: "Alfa Romeo", src: "/car-logos/alfa-romeo.png" },
  { name: "AMG", src: "/car-logos/amg.png" },
  { name: "Audi", src: "/car-logos/audi.png" },
  { name: "BMW", src: "/car-logos/bmw.png" },
  { name: "Fiat", src: "/car-logos/fiat.png" },
  { name: "Ford", src: "/car-logos/ford.png" },
  { name: "Honda", src: "/car-logos/honda.png" },
  { name: "Hyundai", src: "/car-logos/hyundai.png" },
  { name: "Infiniti", src: "/car-logos/infiniti.png" },
  { name: "Jaguar", src: "/car-logos/jaguar.png" },
  { name: "Jeep", src: "/car-logos/jeep.png" },
  { name: "Kia", src: "/car-logos/kia.png" },
  { name: "Land Rover", src: "/car-logos/land-rover.png" },
  { name: "Lexus", src: "/car-logos/lexus.png" },
  { name: "Mazda", src: "/car-logos/mazda.png" },
  { name: "Mercedes", src: "/car-logos/mercedes.png" },
  { name: "MG", src: "/car-logos/mg.png" },
  { name: "Mini", src: "/car-logos/mini.png" },
  { name: "Mitsubishi", src: "/car-logos/mitsubishi.png" },
  { name: "Nissan", src: "/car-logos/nissan.png" },
  { name: "Renault", src: "/car-logos/renault.png" },
  { name: "Suzuki", src: "/car-logos/suzuki.png" },
  { name: "Tesla", src: "/car-logos/tesla.png" },
  { name: "Toyota", src: "/car-logos/toyota.png" },
  { name: "Vauxhall", src: "/car-logos/vauxhall.png" },
  { name: "Volkswagen", src: "/car-logos/volkswagen.png" },
]

const services = [
  {
    title: "Servicing",
    copy: "Routine, interim, full, and major servicing carried out at your home or workplace.",
    includes: ["Oil and filter changes", "Fluid top-ups and checks", "Interim, full, or major service"],
    image: "/daw-img/servicing.png",
    alt: "Mobile mechanic performing an oil change",
  },
  {
    title: "MOT Repairs",
    copy: "Fast fixes for common MOT failures so you can get the vehicle retested without the usual hassle.",
    includes: ["Brake and suspension repairs", "Minor mechanical fixes", "Retest prep and advice"],
    image: "/daw-img/brakes.png",
    alt: "Mechanic replacing brake components for MOT repair work",
  },
  {
    title: "Brakes & Suspension",
    copy: "Pads, discs, springs, shocks, arms, and the jobs that stop a small issue turning into a bigger one.",
    includes: ["Brake pads and discs", "Springs and shock absorbers", "Arms, links, and worn parts"],
    image: "/daw-img/suspension.png",
    alt: "Mechanic working on car suspension components",
  },
  {
    title: "Diagnostics",
    copy: "Fault finding for warning lights, drivability issues, and those problems that need proper investigation.",
    includes: ["Warning light checks", "Fault-code scanning", "Root-cause investigation"],
    image: "/daw-img/diagnostics.png",
    alt: "Mechanic using a diagnostic scanner on an engine",
  },
  {
    title: "Steering & Exhausts",
    copy: "Mobile repairs for worn components, noisy systems, and issues affecting comfort and safety.",
    includes: ["Steering component repairs", "Exhaust inspections", "Replacement of worn parts"],
    image: "/daw-img/exhausts.png",
    alt: "Mechanic inspecting an exhaust system under a car",
  },
  {
    title: "Timing Belts",
    copy: "Major maintenance handled with care using quality parts and a clear quote before work begins.",
    includes: ["Timing belt replacement", "Quality parts fitted", "Clear quote before work starts"],
    image: "/daw-img/timing-belts.png",
    alt: "Close-up of a car timing belt in the engine bay",
  },
]

const reasons = [
  {
    title: "Built for convenience",
    copy: "No towing. No waiting room. No losing half a day at a garage. DAW comes to you.",
    image: "/section-img/built-for-convenience.png",
    alt: "Mobile mechanic convenience image",
  },
  {
    title: "Clear and honest",
    copy: "Straight answers, practical advice, and updates you can actually understand before any extra work.",
    image: "/section-img/clear-and-honest.png",
    alt: "Mechanic discussing straightforward advice",
  },
  {
    title: "Made for busy lives",
    copy: "Ideal for customers at home, at work, or stuck with a car that needs attention where it sits.",
    image: "/section-img/made-for-busy-lives.png",
    alt: "Mobile mechanic service designed for busy customers",
  },
]

const processSteps = [
  {
    title: "Call or WhatsApp",
    copy: "Send the issue, reg, and location. You get a quick reply and a sensible next step.",
    image: "/process-bg/phone.png",
  },
  {
    title: "Book the visit",
    copy: "Choose a time that works for you in Telford or within roughly 20 miles.",
    image: "/process-bg/scheduling.png",
  },
  {
    title: "Get it sorted",
    copy: "DAW arrives, diagnoses or repairs the problem, and keeps you updated throughout.",
    image: "/process-bg/sorted.png",
  },
]

const faqs = [
  {
    question: "What areas do you cover?",
    answer:
      "DAW Mobile Mechanic is based in Telford and covers up to roughly 20 miles around it. If you're nearby and unsure, call or WhatsApp and ask.",
  },
  {
    question: "Can you work at my home or workplace?",
    answer:
      "Yes. Most work is carried out on-site as long as the vehicle is safely accessible and there is enough room to work around it.",
  },
  {
    question: "What kind of jobs do you do?",
    answer:
      "Servicing, MOT repairs, brakes, suspension, diagnostics, steering, exhausts, timing belts, and a wide range of general mechanical work.",
  },
  {
    question: "How do I contact you fastest?",
    answer:
      "For the fastest response, use the call or WhatsApp buttons. Email is also listed if you prefer sending details that way.",
  },
]

export default function Home() {
  return (
    <>
      <HomeHeader phoneDisplay={phoneDisplay} phoneHref={phoneHref} />

      <main className="pb-24 md:pb-10">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(230,57,70,0.18),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(136,153,187,0.14),transparent_34%)]" />
          <div className="absolute inset-x-0 top-0 h-[28rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.045),transparent)]" />

          <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8 lg:py-12">
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="relative z-10 pt-0 lg:pt-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/75 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Telford + 20 Miles Radius
              </div>

              <h1 className="mt-8 max-w-3xl font-display text-5xl uppercase leading-[0.88] tracking-tight text-foreground sm:text-6xl lg:text-8xl">
                Broken Down?
                <span className="mt-2 block text-primary">Call DAW.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                Mobile mechanic support across Telford and surrounding areas. Servicing, MOT repairs,
                brakes, suspension, diagnostics, steering, exhausts, timing belts, and more, without
                the garage runaround.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={phoneHref}
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-primary-foreground transition hover:-translate-y-0.5 hover:brightness-105"
                >
                  <Phone className="h-4 w-4" />
                  Call {phoneDisplay}
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-emerald-600/40 bg-emerald-600 px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-emerald-500"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp DAW
                </a>
              </div>
            </div>

            <div className="relative z-10">
              <div className="grid gap-5 lg:pl-6">
                <div className="relative flex min-h-[24rem] items-end justify-center overflow-visible sm:min-h-[31rem] lg:min-h-[40rem]">
                  <div className="absolute left-1/2 top-[10%] h-52 w-52 -translate-x-1/2 rounded-full bg-primary/12 blur-3xl sm:h-64 sm:w-64 lg:h-72 lg:w-72" />
                  <div className="absolute right-[8%] top-[22%] h-40 w-40 rounded-full bg-white/8 blur-3xl sm:h-52 sm:w-52 lg:h-60 lg:w-60" />
                  <div className="absolute bottom-[10%] left-[10%] h-32 w-32 rounded-full bg-primary/10 blur-3xl sm:h-40 sm:w-40 lg:h-48 lg:w-48" />
                  <div className="absolute bottom-[2%] left-[14%] right-[10%] h-14 rounded-full bg-white/10 blur-2xl" />

                  <div className="relative z-10 w-[132%] max-w-[52rem] sm:w-[124%] lg:w-[148%] lg:-translate-x-4">
                    <Image
                      src="/header-img/hero-team.png"
                      alt="DAW Mobile Mechanic team standing in front of a van"
                      width={1200}
                      height={1250}
                      priority
                      className="h-auto w-full object-contain object-bottom drop-shadow-[0_32px_70px_rgba(0,0,0,0.32)]"
                    />
                  </div>
                </div>
              </div>
            </div>
            </div>

            <div className="relative z-10 mt-10 grid gap-3 sm:grid-cols-3 sm:items-start">
              <div className="overflow-hidden rounded-3xl border border-border/80 bg-card/80 shadow-sm">
                <div className="relative aspect-[16/5.2] border-b border-border/70 bg-card/60">
                  <Image
                    src="/card-bg/hundredsdone.png"
                    alt=""
                    fill
                    aria-hidden="true"
                    className="object-cover object-center"
                    sizes="(min-width: 640px) 33vw, 100vw"
                    priority
                  />
                </div>
                <div className="flex min-h-[132px] flex-col items-center justify-center px-4 py-2.5 text-center">
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-foreground/80">Experience</p>
                  <p className="mt-1 font-display text-[1.4rem] uppercase leading-none text-foreground">Hundreds Done</p>
                  <p className="mt-1.5 max-w-[28ch] text-[13px] leading-5 font-medium text-foreground/80">A wide range of servicing, repair, and diagnostic jobs carried out for local drivers.</p>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-border/80 bg-card/80 shadow-sm">
                <div className="relative aspect-[16/5.2] border-b border-border/70 bg-card/60">
                  <Image
                    src="/card-bg/quote.png"
                    alt=""
                    fill
                    aria-hidden="true"
                    className="object-cover object-center"
                    sizes="(min-width: 640px) 33vw, 100vw"
                    priority
                  />
                </div>
                <div className="flex min-h-[132px] flex-col items-center justify-center px-4 py-2.5 text-center">
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-foreground/80">Pricing</p>
                  <p className="mt-1 font-display text-[1.4rem] uppercase leading-none text-foreground">Quote First</p>
                  <p className="mt-1.5 max-w-[28ch] text-[13px] leading-5 font-medium text-foreground/80">Clear advice and a straightforward quote before any work starts, with no garage runaround.</p>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-border/80 bg-card/80 shadow-sm">
                <div className="relative aspect-[16/5.2] border-b border-border/70 bg-card/60">
                  <Image
                    src="/card-bg/5stars.png"
                    alt=""
                    fill
                    aria-hidden="true"
                    className="object-cover object-center"
                    sizes="(min-width: 640px) 33vw, 100vw"
                    priority
                  />
                  <a
                    href={googleMapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-full border border-white/75 bg-background/88 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-foreground shadow-sm backdrop-blur-sm transition hover:border-primary/50 hover:text-primary"
                  >
                    View On Google
                  </a>
                </div>
                <div className="flex min-h-[132px] flex-col items-center justify-center px-4 py-2.5 text-center">
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-foreground/80">Trust</p>
                  <div className="mt-1 flex flex-col items-center gap-1.5">
                    <p className="font-display text-[1.4rem] uppercase leading-none text-foreground">5.0 Rated</p>
                    <div className="flex items-center gap-2 text-[13px] font-medium text-foreground/80">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                      </svg>
                      <span>57 Google reviews</span>
                    </div>
                    <div className="flex items-center gap-1 text-primary">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-8 lg:px-8 lg:pb-12">
          <div className="rounded-[2rem] border border-border/80 bg-card/70 px-5 py-6 shadow-sm">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">Makes We Work With</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground sm:text-base">
                  From everyday family cars to performance and work vehicles.
                </p>
              </div>

              <div className="relative w-full overflow-hidden lg:max-w-4xl">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-[linear-gradient(90deg,var(--card),transparent)] sm:w-16" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-[linear-gradient(270deg,var(--card),transparent)] sm:w-16" />

                <div className="car-logo-track flex w-max items-center gap-4 py-1">
                  {[...makes, ...makes].map((make, index) => (
                    <div
                      key={`${make.name}-${index}`}
                      className="flex h-20 w-28 flex-shrink-0 items-center justify-center rounded-[1.5rem] border border-border bg-background/90 px-4 py-3 shadow-sm sm:h-24 sm:w-32"
                      aria-label={make.name}
                      title={make.name}
                    >
                      <div className="relative h-full w-full">
                        <Image
                          src={make.src}
                          alt={make.name}
                          fill
                          className="object-contain"
                          sizes="128px"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">Services</p>
              <h2 className="mt-3 max-w-2xl font-display text-4xl uppercase leading-none text-foreground sm:text-5xl">
                The jobs people call DAW for most
              </h2>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="group relative overflow-hidden rounded-[2rem] border border-border/80 bg-card shadow-[0_18px_60px_rgba(0,0,0,0.24)]">
                <div className="relative aspect-[4/2.6] sm:aspect-[4/3.1]">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,15,30,0.28)_0%,rgba(10,15,30,0.18)_42%,rgba(10,15,30,0.88)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                    <h3 className="font-display text-[1.7rem] uppercase leading-[0.92] text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.45)] sm:text-[2rem] lg:text-[2.15rem] xl:text-[2.35rem]">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <div className="border-t border-border/70 bg-card px-6 py-6 sm:px-7">
                  <p className="text-sm leading-7 text-muted-foreground sm:text-[15px]">
                    {service.copy}
                  </p>
                  <div className="mt-5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-primary">
                      Includes
                    </p>
                    <ul className="mt-3 space-y-2">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="gallery" className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">Gallery</p>
              <h2 className="mt-3 font-display text-4xl uppercase leading-none text-foreground sm:text-5xl">
                Recent Work
              </h2>
            </div>
            <Link
              href="/our-work"
              className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-[0.18em] text-primary-foreground shadow-[0_16px_36px_rgba(230,57,70,0.28)] transition hover:-translate-y-0.5 hover:brightness-105"
            >
              View Full Work Gallery
            </Link>
          </div>

          <WorkCarousel items={featuredWork} />
        </section>

        <DawReviews limit={3} />

        <section id="why-daw" className="border-y border-border/70 bg-card/55 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">Why DAW</p>
              <h2 className="mt-3 font-display text-4xl uppercase leading-none text-foreground sm:text-5xl">
                Built to win trust before the phone even rings
              </h2>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {reasons.map((reason) => (
              <article key={reason.title} className="group relative overflow-hidden rounded-[2rem] border border-border/80 bg-card shadow-[0_18px_60px_rgba(0,0,0,0.24)]">
                  <div className="relative aspect-[4/4.8]">
                    <Image
                      src={reason.image}
                      alt={reason.alt}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,15,30,0.08)_6%,rgba(10,15,30,0.28)_34%,rgba(10,15,30,0.76)_64%,rgba(10,15,30,0.96)_100%)]" />
                    <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-7">
                      <h3 className="font-display text-[2rem] uppercase leading-[0.92] text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.45)] sm:text-[2.2rem]">
                        {reason.title}
                      </h3>
                      <p className="mt-3 max-w-sm text-[15px] leading-7 text-white/92 [text-shadow:0_2px_10px_rgba(0,0,0,0.4)] sm:text-base">
                        {reason.copy}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
          <div className="rounded-[2.5rem] border border-border/80 bg-card p-6 shadow-[0_18px_50px_rgba(0,0,0,0.24)] md:p-8">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">Where We Cover</p>
              <h2 className="mt-3 font-display text-4xl uppercase leading-none text-foreground sm:text-5xl">
                Coverage Area
              </h2>
              <p className="mt-4 text-base leading-7 font-medium text-muted-foreground">
                Based in Telford and covering up to roughly 20 miles around it. If you&apos;re nearby and not sure, just call or WhatsApp.
              </p>
            </div>

            <div className="mt-8">
              <CoverageMap compact />
            </div>

            <div className="mt-10">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">How It Works</p>
              <div className="mt-6 grid gap-4 lg:grid-cols-3">
                {processSteps.map((step, index) => (
                  <article key={step.title} className="overflow-hidden rounded-[2rem] border border-border/80 bg-background/80">
                    <div className="relative aspect-[16/7.5] border-b border-border/70 bg-card/60">
                      <Image
                        src={step.image}
                        alt=""
                        fill
                        aria-hidden="true"
                        className="object-cover object-center"
                        sizes="(min-width: 1024px) 33vw, 100vw"
                      />
                    </div>
                    <div className="flex items-start gap-3 p-3.5">
                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-black text-primary-foreground">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-display text-[1.55rem] uppercase leading-none text-foreground">{step.title}</h3>
                        <p className="mt-1.5 text-sm leading-5.5 font-medium text-foreground/80">{step.copy}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-5 lg:grid-cols-2">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-[2rem] border border-border/80 bg-card p-6">
                <h3 className="font-display text-3xl uppercase leading-none text-foreground">{faq.question}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 pb-10 lg:px-8 lg:pb-20">
          <div className="overflow-hidden rounded-[2.5rem] border border-border/80 bg-[linear-gradient(135deg,#0a0f1e_0%,#0d1529_58%,#e63946_165%)] px-6 py-10 text-white shadow-[0_24px_90px_rgba(0,0,0,0.34)] sm:px-10 lg:px-14 lg:py-14">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/65">Contact DAW</p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl uppercase leading-none sm:text-5xl lg:text-6xl">
              Need a mobile mechanic in or around Telford?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/78">
              Call, WhatsApp, or email with the issue and your location to get booked in quickly and without the usual garage hassle.
            </p>

            <div className="mt-8 flex flex-col gap-3 md:flex-row">
              <a
                href={phoneHref}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-primary-foreground transition hover:-translate-y-0.5 hover:brightness-105"
              >
                <Phone className="h-4 w-4" />
                {phoneDisplay}
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/18 bg-white/10 px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white/16"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/18 bg-white/10 px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white/16"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={googleMapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/16"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Google Maps
              </a>
              <a
                href={facebookHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/16"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </a>
              <a
                href={instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/16"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Instagram
              </a>
            </div>

            <div className="mt-8 flex flex-col gap-3 text-sm text-white/78 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
              <div className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Telford, United Kingdom
              </div>
              <div className="inline-flex items-center gap-2">
                <Clock3 className="h-4 w-4 text-primary" />
                Mon-Fri 8am-6pm, Sat 8am-1pm
              </div>
              <OpenStatus className="inline-flex items-center gap-2" />
              <div className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                {email}
              </div>
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-white/12 bg-white/8 p-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/72">Opening Hours</p>
                  <p className="mt-2 font-display text-2xl uppercase text-white">This Week</p>
                </div>
                <OpenStatus className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 text-sm font-semibold text-white" />
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {compactOpeningHours.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3">
                    <p className="text-sm font-semibold text-white">{item.label}</p>
                    <p className="mt-1 text-sm text-white/72">{item.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="fixed bottom-6 right-6 z-50 hidden flex-col gap-3 md:flex">
        <a
          href={phoneHref}
          className="inline-flex items-center gap-3 rounded-full bg-primary px-5 py-4 text-sm font-bold uppercase tracking-[0.18em] text-primary-foreground shadow-[0_16px_36px_rgba(230,57,70,0.35)] transition hover:-translate-y-0.5 hover:brightness-105"
        >
          <Phone className="h-4 w-4" />
          Call Now
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-full bg-emerald-600 px-5 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-[0_16px_36px_rgba(5,150,105,0.25)] transition hover:-translate-y-0.5 hover:bg-emerald-500"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border/70 bg-background/96 p-3 backdrop-blur-xl md:hidden">
        <div className="mx-auto grid max-w-xl grid-cols-2 gap-3">
          <a
            href={phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-4 text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-4 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </div>

      <footer className="border-t border-border/70 bg-card/55">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 text-sm text-muted-foreground lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-5">
            <div className="relative h-14 w-28 flex-shrink-0">
              <Image
                src="/daw-logo.svg"
                alt="DAW Mobile Mechanic logo"
                fill
                className="object-contain"
                sizes="112px"
              />
            </div>
            <div>
              <p className="font-display text-2xl uppercase leading-none text-foreground">DAW Mobile Mechanic</p>
            <p className="mt-2 max-w-xl leading-7">
              Mobile repairs, servicing, diagnostics, and maintenance for drivers across Telford and surrounding areas.
            </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
            <a href={phoneHref} className="transition hover:text-foreground">
              {phoneDisplay}
            </a>
            <a href={`mailto:${email}`} className="transition hover:text-foreground">
              {email}
            </a>
            <Link href="/privacy" className="transition hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="transition hover:text-foreground">
              Terms
            </Link>
            <Link href="/accessibility" className="transition hover:text-foreground">
              Accessibility
            </Link>
          </div>
        </div>
        <div className="border-t border-border/60">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <p>© {new Date().getFullYear()} DAW Mobile Mechanic. All rights reserved.</p>
            <p>
              Designed and developed by{" "}
              <a
                href="https://web-force.info"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-foreground transition hover:text-primary"
              >
                Stefan Lenta at Web-Force.info
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
