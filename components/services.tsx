"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface ServiceCardProps {
  iconImage: string
  title: string
  description: string
  highlight?: string
  image: string
  priority?: boolean
  index: number
  iconScale?: number
}

function ServiceCard({
  iconImage,
  title,
  description,
  highlight,
  image,
  priority,
  index,
  iconScale = 1,
}: ServiceCardProps) {
  const whatsappMessage = encodeURIComponent(`Hi Aaron, I'm interested in your ${title} service. Could you provide more details?`)
  const whatsappUrl = `https://wa.me/447426443009?text=${whatsappMessage}`
  const iconSize = 80
  const r = 14 // corner radius for the inner cutout corners
  const maskId = `card-mask-${index}`

  const iconDisplaySize = Math.round(64 * iconScale)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative h-full"
    >
      {/* Icon sitting outside the card in the top-left cutout */}
      <div
        className="absolute top-0 left-0 z-40 flex items-center justify-center"
        style={{ width: iconSize, height: iconSize }}
      >
        <div className="relative" style={{ width: iconDisplaySize, height: iconDisplaySize }}>
          <Image
            src={iconImage}
            alt={title}
            fill
            className="object-contain drop-shadow-[0_0_12px_rgba(234,179,8,0.3)]"
          />
        </div>
      </div>

      {/* Subtle shadow layer behind the cutout to show full card shape */}
      <div
        className="absolute inset-0 rounded-xl bg-card/20 border border-border/10"
        style={{ zIndex: 0 }}
      />

      {/* Main card - full rounded rectangle */}
      <div
        className="relative overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/40 h-full"
      >
        {/* Cutout overlay in top-left corner - matches section background to create L-shape */}
        <div
          className="absolute top-[-1px] left-[-1px] z-30 bg-background carbon-fiber"
          style={{
            width: iconSize + 1,
            height: iconSize + 1,
            borderBottomRightRadius: r,
          }}
        />
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/90 to-card/50" />
        </div>

        <div className="relative z-10 flex flex-col h-full">
          {/* Top row: empty space for icon + title beside it */}
          <div className="flex">
            {/* Spacer matching icon area */}
            <div className="flex-shrink-0" style={{ width: iconSize, height: iconSize }} />
            {/* Title area next to icon */}
            <div className="flex-1 p-4 pb-0 flex flex-col justify-center">
              <h3
                className={`font-black uppercase tracking-wider text-foreground ${
                  priority ? "text-xl md:text-2xl" : "text-lg sm:text-xl"
                }`}
              >
                {title}
              </h3>
              {priority && (
                <span className="mt-2 text-[10px] font-bold uppercase tracking-widest bg-primary text-primary-foreground px-2 py-0.5 rounded self-start">
                  Specialist
                </span>
              )}
            </div>
          </div>

          {/* Bottom section: full width content */}
          <div className={`flex-1 flex flex-col p-6 pt-4 ${priority ? "md:px-8" : ""}`}>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              {description}
            </p>

            {highlight && (
              <div className="mt-4 inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-lg px-3 py-2 self-start">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  {highlight}
                </span>
              </div>
            )}

            <div className="mt-auto pt-5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start bg-green-600 text-white px-6 py-3 rounded-lg text-sm font-black uppercase tracking-widest hover:bg-green-700 transition-all shadow-lg shadow-green-600/20"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Enquire Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Services() {
  const services = [
    {
      iconImage: "/images/service-timingchain.png",
      title: "Timing Chain Replacement",
      description:
        "Specialist timing chain replacement for Renault Trafic, Vauxhall Vivaro, and similar. Factory-grade parts and precision installation at your home or workplace.",
      image: "/images/timing-chain.jpg",
      priority: true,
    },
    {
      iconImage: "/images/service-diagnostics.png",
      title: "Advanced Diagnostics",
      description:
        "Dealer-level diagnostic equipment to trace stubborn faults. From failed starter motors to intermittent electrical gremlins, we find the root cause first.",
      image: "/images/diagnostics.jpg",
    },
    {
      iconImage: "/images/service-mot.png",
      title: "Full Servicing & MOT Prep",
      description:
        "Interim, full, and major services carried out on your driveway. Oil & filter changes, fluid top-ups, belt checks, and full MOT preparation so you pass first time.",
      image: "/images/servicing.jpg",
    },
    {
      iconImage: "/images/service-suspension.png",
      title: "Suspension & Brakes",
      description:
        "Expert brake and suspension repairs for a smoother, safer ride. Discs, pads, springs, shocks, and full geometry checks.",
      image: "/images/suspension.jpg",
    },
    {
      iconImage: "/images/service-clutch.png",
      title: "Clutch & Flywheel",
      description:
        "Complete clutch kit and dual-mass flywheel replacements. We handle the heavy lifting on-site so you avoid expensive garage recovery fees.",
      image: "/images/clutch.jpg",
    },
    {
      iconImage: "/images/service-pdi.png",
      title: "Dealer PDI Work",
      description:
        "Pre-delivery inspection services for motor traders. On-site inspections to your location so your stock is road-ready before the customer arrives.",
      image: "/images/hero-van.jpg",
      iconScale: 1.35,
    },
  ]

  return (
    <section id="services" aria-label="Mobile mechanic services in Shropshire" className="relative py-20 lg:py-28 carbon-fiber">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            What We Do
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-foreground text-balance">
            Specialized Services
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            From complex timing chain replacements to routine servicing, we bring
            the full workshop to your door.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              {...service}
              index={i}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <a
            href="https://wa.me/447426443009?text=Hi%20Aaron%2C%20I%27d%20like%20to%20know%20more%20about%20your%20full%20range%20of%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wider hover:border-primary hover:text-primary transition-all"
          >
            Reach Out For Many More
          </a>
        </motion.div>
      </div>
    </section>
  )
}
