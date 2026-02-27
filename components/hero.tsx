"use client"

import { motion } from "framer-motion"
import { Phone, ChevronDown } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden carbon-fiber pt-16">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-van.jpg"
          alt="ADL Mobile Mechanic van equipped with professional tools"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Top badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/80 border border-border rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Serving Wem, Market Drayton & Surrounding Areas
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-none tracking-tight text-foreground text-balance">
            The Expert Workshop
            <br />
            <span className="text-primary">That Comes To You.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Serving Wem, Market Drayton & a 30-mile radius. Expert diagnostics,
            timing chains, and dealer-level servicing without the garage price tag.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:07426443009"
              className="flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-black text-lg uppercase tracking-wider hover:brightness-110 transition-all pulse-cta"
            >
              <Phone className="w-5 h-5" />
              Call Aaron: 07426 443009
            </a>
            <a
              href="#services"
              className="flex items-center gap-2 border border-border text-foreground px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wider hover:border-primary hover:text-primary transition-all"
            >
              View Services
              <ChevronDown className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>
  )
}
