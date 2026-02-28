"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "Ant Fa",
    text: "Can't recommend Aaron enough. Great service that he provides. Always on time and keeps you updated throughout the day. Brilliant",
    rating: 5,
  },
  {
    name: "John Wood",
    text: "Used ADL Mobile Mechanic a few times for issues with my car. Always turned up on time and nothing was ever a problem. Great communication throughout and very fairly priced. Would highly recommend",
    rating: 5,
  },
  {
    name: "Jack Hubbleday",
    text: "Aaron has looked after my cars since he started his business, I never hesitate to ask him to take a look and to just get things sorted, no messing about....",
    rating: 5,
  },
  {
    name: "Jess W",
    text: "Highly recommend. Friendly and professional service.",
    rating: 5,
  },
  {
    name: "John Howarth",
    text: "Knowledgeable, reliable, good communication. Looks after all my cars and vans.",
    rating: 5,
  },
  {
    name: "Darren Lock",
    text: "Great mobile mechanic, use a few times and always turn up on time.",
    rating: 5,
  },
  {
    name: "Jen Whitehead",
    text: "Had few jobs done on my car by ADL from servicing to DPF problems fixed. Best mobile mechanic around. The only person to work on my car from now on!",
    rating: 5,
  },
  {
    name: "Val Scott",
    text: "Excellent service highly recommended 5 stars without a doubt",
    rating: 5,
  },
  {
    name: "Finnley Edwards",
    text: "Amazing service would highly recommend, looks after all our cars now wouldn't go back to a normal garage or main dealership again.",
    rating: 5,
  },
  {
    name: "Simon Farnfield",
    text: "Aaron is top notch! Super reliable and knows his stuff. It's great that he comes over to us in Shrewsbury and sorts our cars on the drive! Highly recommended.",
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

function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
      <a
        href="https://maps.app.goo.gl/YgRhvhhv55J5oQbE9?g_st=ic"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 border border-border text-muted-foreground px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wider hover:border-[#4285F4] hover:text-[#4285F4] transition-all"
        aria-label="ADL Mobile Mechanic on Google Maps"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
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
        className="flex items-center gap-2 border border-border text-muted-foreground px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wider hover:border-[#1877F2] hover:text-[#1877F2] transition-all"
        aria-label="ADL Mobile Mechanic on Facebook"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
        Facebook
      </a>
      <a
        href="https://www.instagram.com/adlmobilemechanic1999/reels/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 border border-border text-muted-foreground px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wider hover:border-[#E1306C] hover:text-[#E1306C] transition-all"
        aria-label="ADL Mobile Mechanic on Instagram"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
        Instagram
      </a>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="https://maps.app.goo.gl/YgRhvhhv55J5oQbE9?g_st=ic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-black text-sm uppercase tracking-wider hover:brightness-110 transition-all"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="white" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="white" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="white" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="white" />
            </svg>
            View All Reviews on Google
          </a>

          <SocialLinks />
        </motion.div>
      </div>
    </section>
  )
}
