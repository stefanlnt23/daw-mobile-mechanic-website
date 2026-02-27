"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Wrench, Phone, Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3 lg:px-8">
        <a href="#" className="flex items-center gap-3">
          <div className="flex items-center justify-center w-11 h-11 rounded-full bg-primary/10 border-2 border-primary">
            <Wrench className="w-5 h-5 text-primary" />
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl font-black tracking-tight text-primary">
              ADL
            </span>
            <span className="text-sm font-bold text-foreground uppercase tracking-widest">
              Mobile Mechanic
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-bold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors">
            Services
          </a>
          <a href="#process" className="text-sm font-bold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors">
            Process
          </a>
          <a href="#contact" className="text-sm font-bold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors">
            Contact
          </a>
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
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
