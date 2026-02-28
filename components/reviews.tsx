"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "James T.",
    text: "Aaron came out same day to diagnose a timing chain rattle on my Vivaro. Honest quote, top work, and saved me a fortune compared to the main dealer. Highly recommend.",
    rating: 5,
  },
  {
    name: "Sarah M.",
    text: "Fantastic service. Had a check engine light and Aaron found the issue within 20 minutes on my driveway. Fixed and cleared the same visit. Will definitely use again.",
    rating: 5,
  },
  {
    name: "David R.",
    text: "Used ADL for a full service and MOT prep. Van passed first time with no advisories. Great communication throughout and very fair pricing. Top mechanic.",
    rating: 5,
  },
  {
    name: "Mark W.",
    text: "Clutch went on my Transit and Aaron had it sorted within the day. Professional, tidy, and didn't leave a mess on the drive. Can't ask for more than that.",
    rating: 5,
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  )
}

export function Reviews() {
  return (
    <section id="reviews" aria-label="Customer reviews" className="relative py-20 lg:py-28 bg-secondary brushed-metal">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            What Our Customers Say
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-foreground text-balance">
            5-Star Reviews
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
              Google Reviews
            </span>
            <Stars count={5} />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-all"
            >
              <Stars count={review.rating} />
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="mt-4 text-sm font-bold text-foreground">
                {review.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
