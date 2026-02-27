"use client"

import { motion } from "framer-motion"
import { Link2, Gauge, Shield, Disc3 } from "lucide-react"
import Image from "next/image"

interface ServiceCardProps {
  icon: React.ElementType
  title: string
  description: string
  highlight?: string
  image: string
  priority?: boolean
  index: number
  onBookNow: () => void
}

function ServiceCard({
  icon: Icon,
  title,
  description,
  highlight,
  image,
  priority,
  index,
  onBookNow,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/40 h-full"
    >
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/90 to-card/50" />
      </div>

      <div className={`relative z-10 p-6 flex flex-col h-full ${priority ? "md:p-8" : ""}`}>
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 border border-primary/20">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          {priority && (
            <span className="text-[10px] font-bold uppercase tracking-widest bg-primary text-primary-foreground px-2 py-0.5 rounded">
              Specialist
            </span>
          )}
        </div>

        <h3
          className={`font-black uppercase tracking-wider text-foreground mb-3 ${
            priority ? "text-xl md:text-2xl" : "text-lg"
          }`}
        >
          {title}
        </h3>

        <p className="text-muted-foreground leading-relaxed text-sm">
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
          <button
            onClick={onBookNow}
            className="self-start bg-secondary text-foreground border border-border px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
          >
            Book Now
          </button>
        </div>
      </div>
    </motion.div>
  )
}

interface ServicesProps {
  onBookNow: () => void
}

export function Services({ onBookNow }: ServicesProps) {
  const services = [
    {
      icon: Link2,
      title: "Trafic & Vivaro Timing Chain Packages",
      description:
        "Specialist timing chain replacement for Renault Trafic, Vauxhall Vivaro, and similar. Factory-grade parts and precision installation for the notoriously tricky 1.6 engine.",
      highlight: "1.6 Engine Expertise",
      image: "/images/timing-chain.jpg",
      priority: true,
    },
    {
      icon: Gauge,
      title: "Advanced Diagnostics",
      description:
        "Dealer-level diagnostic equipment to trace stubborn faults. From failed starter motors to intermittent electrical gremlins, we find the root cause first.",
      image: "/images/diagnostics.jpg",
    },
    {
      icon: Shield,
      title: "Dealer PDI Work",
      description:
        "Pre-delivery inspection services for motor traders. On-site inspections to your location so your stock is road-ready before the customer arrives.",
      image: "/images/hero-van.jpg",
    },
    {
      icon: Disc3,
      title: "Suspension & Brakes",
      description:
        "Expert brake and suspension repairs for a smoother, safer ride. Discs, pads, springs, shocks and full geometry checks.",
      image: "/images/suspension.jpg",
    },
  ]

  return (
    <section id="services" className="relative py-20 lg:py-28 carbon-fiber">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Row 1: Timing Chain (wide) + Diagnostics */}
          <div className="md:col-span-1">
            <ServiceCard
              {...services[0]}
              index={0}
              onBookNow={onBookNow}
            />
          </div>
          <div className="md:col-span-1">
            <ServiceCard
              {...services[1]}
              index={1}
              onBookNow={onBookNow}
            />
          </div>
          {/* Row 2: PDI Work + Suspension & Brakes */}
          <div className="md:col-span-1">
            <ServiceCard
              {...services[2]}
              index={2}
              onBookNow={onBookNow}
            />
          </div>
          <div className="md:col-span-1">
            <ServiceCard
              {...services[3]}
              index={3}
              onBookNow={onBookNow}
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <button
            onClick={onBookNow}
            className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wider hover:border-primary hover:text-primary transition-all"
          >
            Full Service List
          </button>
        </motion.div>
      </div>
    </section>
  )
}
