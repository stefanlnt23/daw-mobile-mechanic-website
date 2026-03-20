import { Star } from "lucide-react"

const googleReviewsUrl =
  "https://maps.app.goo.gl/TNWxsrNMaq3E5wJi7"
const facebookUrl = "https://www.facebook.com/profile.php?id=61576953417451"
const instagramUrl =
  "https://www.instagram.com/dawmobilemechanic?fbclid=IwY2xjawQpacNleHRuA2FlbQIxMABicmlkETBGOEN2N2MydEs4YUZ2YzREc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHhC5eChIiTO7louY37PYPnN66kzBt4O7TEQo6rkrs3q-MiJZ4u9AmRVkK3qO_aem_pz48dCIaCW_WMX8vxy9MpA"

const reviews = [
  {
    name: "Ian Lloyd",
    meta: "Local Guide · a month ago",
    text: "I can’t recommend DAW Mobile Mechanic highly enough. Dawid replaced the cambelt on my son’s Mercedes A180 and the service was professional, prompt, and friendly from start to finish.",
  },
  {
    name: "Willem Roberts",
    meta: "a month ago",
    text: "Absolutely brilliant mechanic. The high-pressure fuel pump issue was diagnosed and fixed quickly with clear communication, fair pricing, and no messing about.",
  },
  {
    name: "Samantha Matthews",
    meta: "a month ago",
    text: "Dawid is incredibly knowledgeable and capable. He explained everything clearly without drowning me in jargon and his pricing was fair.",
  },
  {
    name: "Roger Hulett",
    meta: "a month ago",
    text: "Sorted a sensor problem with precision and care. Fast, good quality work at a reasonable price. I’ll be using him for all my car maintenance.",
  },
  {
    name: "Yuki Wu",
    meta: "a month ago",
    text: "Daw helped fix my Mini when I suspected a broken coil spring. He was kind, responsible, professional, and solved the problem quickly.",
  },
  {
    name: "Gurpreet Sandhu",
    meta: "2 months ago",
    text: "Top quality customer service. Polite, courteous, clear on costs, and kept me up to date throughout. I will certainly be using again.",
  },
  {
    name: "Maia Price",
    meta: "a month ago",
    text: "Reasonable price quoted, arrived on time, and did a great job replacing a starter motor on my Megane even though access was awkward.",
  },
  {
    name: "Miraj Abeysekara",
    meta: "4 months ago",
    text: "A thorough job fixing my car and properly resolving the engine indicator issue. Great communication, fair pricing, and honest work.",
  },
  {
    name: "Margaret Dyas",
    meta: "3 months ago",
    text: "Dawid has been out to me three times and each time he has sorted the problem and saved me money. A very good, honest, reliable mechanic.",
  },
  {
    name: "andy davis",
    meta: "4 months ago",
    text: "He came out to do my cambelt and water pump on the wettest, coldest day and still got the job done to a very high standard.",
  },
]

function GoogleBadge() {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-border/80 bg-card px-4 py-2 shadow-sm">
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
      </svg>
      <span className="text-sm font-bold uppercase tracking-[0.18em] text-foreground">Google Reviews</span>
    </div>
  )
}

function Stars() {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="h-4 w-4 fill-[#f5b301] text-[#f5b301]" />
      ))}
    </div>
  )
}

type DawReviewsProps = {
  limit?: number
}

export function DawReviews({ limit = 6 }: DawReviewsProps) {
  const visibleReviews = reviews.slice(0, limit)

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <GoogleBadge />
          <h2 className="mt-4 font-display text-4xl uppercase leading-none text-foreground sm:text-5xl">
            Trusted by local drivers
          </h2>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <div className="inline-flex items-center gap-3">
              <span className="font-display text-4xl uppercase leading-none text-foreground">5.0</span>
              <Stars />
            </div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-muted-foreground">
              57 Google Reviews
            </p>
          </div>
          <p className="mt-4 max-w-2xl text-base leading-7 font-medium text-muted-foreground">
            Recent customer feedback highlighting fair pricing, clear communication, punctuality, diagnostics, cambelts, and convenient mobile repairs.
          </p>
        </div>

        <a
          href={googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-primary-foreground transition hover:-translate-y-0.5 hover:brightness-105"
        >
          View All On Google Maps
        </a>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visibleReviews.map((review) => (
          <article key={review.name} className="rounded-[2rem] border border-border/80 bg-card p-6 shadow-[0_18px_50px_rgba(10,42,61,0.08)]">
            <div className="flex items-center justify-between gap-4">
              <p className="font-display text-2xl uppercase leading-none text-foreground">{review.name}</p>
              <Stars />
            </div>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">{review.meta}</p>
            <p className="mt-4 text-sm leading-7 font-medium text-muted-foreground">{review.text}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href={googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-foreground transition hover:-translate-y-0.5 hover:border-primary hover:text-primary"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          Google Maps
        </a>
        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-foreground transition hover:-translate-y-0.5 hover:border-[#1877F2] hover:text-[#1877F2]"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
          Facebook
        </a>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-foreground transition hover:-translate-y-0.5 hover:border-[#E1306C] hover:text-[#E1306C]"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          Instagram
        </a>
      </div>
    </section>
  )
}
