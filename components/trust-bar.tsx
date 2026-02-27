"use client"

import { motion } from "framer-motion"
import { MapPin, Shield, Wrench } from "lucide-react"

const trustItems = [
  {
    icon: MapPin,
    text: "30-Mile Radius from Wem",
  },
  {
    icon: Shield,
    text: "PDI Specialist for Dealers",
  },
  {
    icon: Wrench,
    text: "Mobile & Workshop Services",
  },
]

export function TrustBar() {
  return (
    <section className="relative bg-secondary brushed-metal border-y border-border">
      <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center justify-center gap-3"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 border border-primary/20">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-bold uppercase tracking-wider text-foreground">
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
