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

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Top badge */}
            <div className="inline-flex items-center gap-2 bg-secondary/80 border border-border rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Serving Wem, Market Drayton & Surrounding Areas
              </span>
            </div>

            <div className="mb-4 flex items-center justify-center lg:justify-start gap-3">
              <span className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-primary">
                ADL
              </span>
              <span className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-widest text-foreground">
                Mobile Mechanic
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-none tracking-tight text-foreground text-balance">
              The Expert Workshop
              <br />
              <span className="text-primary">That Comes To You.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed text-pretty">
              Serving Wem, Market Drayton & a 30-mile radius. Expert diagnostics,
              timing chains, and dealer-level servicing without the garage price tag.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
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

          {/* Aaron's portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <div className="relative w-72 h-[22rem] sm:w-80 sm:h-[26rem] lg:w-[22rem] lg:h-[30rem]">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/20 to-primary/5 border-2 border-primary/30" />
              <Image
                src="/images/aaron-fixv2.png"
                alt="Aaron - ADL Mobile Mechanic"
                fill
                className="object-cover object-top rounded-2xl"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4 rounded-b-2xl">
                <p className="text-sm font-bold text-foreground">Aaron</p>
                <p className="text-xs text-muted-foreground">Owner & Lead Mechanic</p>
              </div>
            </div>
          </motion.div>
        </div>
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
