"use client"

import { motion } from "framer-motion"
import { Search, FileText, Wrench, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Diagnosis",
    description:
      "We start with a thorough diagnostic assessment using dealer-level equipment to pinpoint the exact issue.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Transparent Quote",
    description:
      "A clear, honest quote with no hidden extras. You know exactly what you're paying for before any work starts.",
  },
  {
    icon: Wrench,
    step: "03",
    title: "Mobile Repair",
    description:
      "Our fully equipped workshop comes to you. Professional-grade tools and genuine parts, at your location.",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Tested & Road-Ready",
    description:
      "Every repair is thoroughly system-tested before handover. You're back on the road with total confidence.",
  },
]

export function Process() {
  return (
    <section id="process" className="relative py-20 lg:py-28 bg-secondary brushed-metal">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-foreground text-balance">
            The Process
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            From first call to back on the road. A straightforward,
            no-nonsense approach to getting you sorted.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative group"
            >
              <div className="bg-card border border-border rounded-xl p-6 h-full hover:border-primary/40 transition-all">
                <div className="flex items-start justify-between">
                  {/* Step number */}
                  <span className="text-5xl font-black text-border group-hover:text-primary/20 transition-colors">
                    {step.step}
                  </span>

                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 border border-primary/20">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <h3 className="mt-4 text-lg sm:text-xl font-black uppercase tracking-wider text-foreground">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 border-t border-dashed border-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
