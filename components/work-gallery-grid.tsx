"use client"

import { useState } from "react"
import Image from "next/image"
import type { WorkGalleryItem } from "@/lib/work-gallery"
import { WorkLightbox } from "@/components/work-lightbox"

type WorkGalleryGridProps = {
  items: WorkGalleryItem[]
}

export function WorkGalleryGrid({ items }: WorkGalleryGridProps) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null)

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => (
          <button
            key={item.file}
            type="button"
            onClick={() => setCurrentIndex(index)}
            className="group overflow-hidden rounded-[2rem] border border-border/80 bg-card text-left shadow-[0_18px_50px_rgba(0,0,0,0.24)]"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
            </div>
            <div className="px-5 py-4">
              <p className="font-display text-2xl uppercase leading-none text-foreground">{item.title}</p>
            </div>
          </button>
        ))}
      </div>

      <WorkLightbox
        items={items}
        currentIndex={currentIndex}
        onClose={() => setCurrentIndex(null)}
        onNext={() => setCurrentIndex((index) => (index === null ? null : (index + 1) % items.length))}
        onPrev={() => setCurrentIndex((index) => (index === null ? null : (index - 1 + items.length) % items.length))}
      />
    </>
  )
}
