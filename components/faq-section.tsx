"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What areas do you cover?",
    answer:
      "We're based in Wem and cover a 30-mile radius across Shropshire and into Cheshire. That includes Shrewsbury, Market Drayton, Whitchurch, Oswestry, Telford, Newport, Nantwich, and Crewe. If you're unsure, just give Aaron a call.",
  },
  {
    question: "Do you need space on my driveway?",
    answer:
      "A standard parking space is usually enough. We bring everything we need in the van. If access is tight, we can discuss options when you book — we're flexible.",
  },
  {
    question: "How do I book?",
    answer:
      "Just call or WhatsApp Aaron on 07426 443009. We'll have a quick chat about the issue, arrange a time that suits you, and come to your location.",
  },
  {
    question: "What are your prices?",
    answer:
      "Prices depend on the job — diagnostics start from £40, servicing and repairs are quoted individually. You'll always get a clear, upfront quote before any work begins. No hidden extras.",
  },
  {
    question: "Do you supply the parts?",
    answer:
      "Yes, we source quality parts from trusted suppliers at trade prices, so you don't need to worry about finding them yourself. We always use OE-equivalent or genuine parts.",
  },
  {
    question: "How long do repairs usually take?",
    answer:
      "Most diagnostics and minor repairs are done within an hour or two. Bigger jobs like timing chains or clutch replacements are typically a full day. We'll give you a time estimate when we quote.",
  },
  {
    question: "What if it rains?",
    answer:
      "We work in all weather — the van carries gazebos and covers for wet conditions. Unless it's genuinely unsafe, rain won't delay your repair.",
  },
  {
    question: "Can you work on any vehicle?",
    answer:
      "We work on most makes and models — cars, vans, and light commercial vehicles. We're specialists in Renault Trafic and Vauxhall Vivaro timing chains, but handle everything from Fords to BMWs.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" aria-label="Frequently asked questions" className="relative py-20 lg:py-28 carbon-fiber">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Got Questions?
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-foreground text-balance">
            FAQ
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Quick answers to the most common questions we get.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="bg-card border border-border rounded-xl px-6">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                <AccordionTrigger className="text-base font-bold text-foreground hover:no-underline hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
