"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-2 lg:px-8">
        <a href="#" className="relative flex items-center gap-3">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-44 h-44 pointer-events-none">
            <Image src="/images/adl-logo.webp" alt="ADL Mobile Mechanic" fill className="object-contain" />
          </div>
          <div className="w-12 flex-shrink-0" />
        </a>

        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-bold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors">
            Services
          </a>
          <a href="#warning-lights" className="text-sm font-bold uppercase tracking-wider text-muted-foreground hover:text-red-500 transition-colors">
            Warning Lights
          </a>
          <a href="#process" className="text-sm font-bold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors">
            Process
          </a>
          <a href="#contact" className="text-sm font-bold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors">
            Contact
          </a>
          <Link href="/our-work" className="text-sm font-bold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors">
            Our Work
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:07426443009"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-bold text-sm uppercase tracking-wider hover:brightness-110 transition-all pulse-cta"
          >
            <Phone className="w-4 h-4" />
            07426 443009
          </a>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <nav className="flex flex-col gap-4 px-4 py-6">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
              >
                Services
              </a>
              <a
                href="#warning-lights"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold uppercase tracking-wider text-muted-foreground hover:text-red-500 transition-colors"
              >
                Warning Lights
              </a>
              <a
                href="#process"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
              >
                Process
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
              <Link
                href="/our-work"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold uppercase tracking-wider text-primary hover:text-primary/80 transition-colors"
              >
                Our Work →
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
