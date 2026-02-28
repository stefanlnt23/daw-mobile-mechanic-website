"use client"

import { motion } from "framer-motion"
import { Phone, ChevronDown } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section aria-label="ADL Mobile Mechanic — The expert workshop that comes to you" className="relative min-h-screen flex items-center justify-center overflow-hidden carbon-fiber pt-16">
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

            {/* Social links */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a
                href="https://maps.app.goo.gl/YgRhvhhv55J5oQbE9?g_st=ic"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ADL Mobile Mechanic on Google Maps"
                className="flex items-center gap-2 border border-border text-muted-foreground px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider hover:border-[#4285F4] hover:text-[#4285F4] transition-all"
              >
                <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Google Maps
              </a>
              <a
                href="https://www.facebook.com/share/1KSQPwjb7G/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ADL Mobile Mechanic on Facebook"
                className="flex items-center gap-2 border border-border text-muted-foreground px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider hover:border-[#1877F2] hover:text-[#1877F2] transition-all"
              >
                <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </a>
              <a
                href="https://www.instagram.com/adlmobilemechanic1999/reels/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ADL Mobile Mechanic on Instagram"
                className="flex items-center gap-2 border border-border text-muted-foreground px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider hover:border-[#E1306C] hover:text-[#E1306C] transition-all"
              >
                <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Instagram
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
