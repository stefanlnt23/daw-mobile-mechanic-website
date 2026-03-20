"use client"

import Image from "next/image"
import Link from "next/link"
import type { WorkGalleryItem } from "@/lib/work-gallery"

type WorkCarouselProps = {
  items: WorkGalleryItem[]
}

export function WorkCarousel({ items }: WorkCarouselProps) {
  const loopItems = [...items, ...items]

  return (
    <div className="relative mt-10 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-[linear-gradient(90deg,var(--background),transparent)] sm:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-[linear-gradient(270deg,var(--background),transparent)] sm:w-20" />

      <div className="work-carousel-track flex w-max gap-5">
        {loopItems.map((item, index) => (
          <Link
            key={`${item.file}-${index}`}
            href="/our-work"
            className="group block w-[16rem] flex-shrink-0 overflow-hidden rounded-[2rem] border border-border/80 bg-card shadow-[0_18px_50px_rgba(10,42,61,0.08)] sm:w-[18rem]"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 16rem, 18rem"
              />
            </div>
            <div className="px-4 py-4">
              <p className="font-display text-[1.65rem] uppercase leading-none text-foreground">{item.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
