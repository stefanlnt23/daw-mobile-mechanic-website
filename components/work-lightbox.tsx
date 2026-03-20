"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import type { WorkGalleryItem } from "@/lib/work-gallery"

type WorkLightboxProps = {
  items: WorkGalleryItem[]
  currentIndex: number | null
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

const slideVariants = {
  enter: (dir: number) => ({ x: dir * 120, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: -dir * 120, opacity: 0 }),
}

export function WorkLightbox({ items, currentIndex, onClose, onNext, onPrev }: WorkLightboxProps) {
  const touchStartX = useRef(0)
  const isOpen = currentIndex !== null
  const [direction, setDirection] = useState(0)

  const goNext = () => {
    setDirection(1)
    onNext()
  }

  const goPrev = () => {
    setDirection(-1)
    onPrev()
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") goNext()
      else if (event.key === "ArrowLeft") goPrev()
      else if (event.key === "Escape") onClose()
    }

    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isOpen])

  const item = currentIndex !== null ? items[currentIndex] : null

  return (
    <AnimatePresence>
      {isOpen && item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[120] bg-black/92 backdrop-blur-sm"
          onClick={onClose}
          onTouchStart={(event) => {
            touchStartX.current = event.touches[0].clientX
          }}
          onTouchEnd={(event) => {
            const deltaX = event.changedTouches[0].clientX - touchStartX.current
            if (deltaX < -50) goNext()
            else if (deltaX > 50) goPrev()
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
            <AnimatePresence custom={direction} mode="wait">
              <motion.img
                key={item.src}
                src={item.src}
                alt={item.alt}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="max-h-[80vh] max-w-[90vw] rounded-[1.5rem] object-contain shadow-[0_30px_90px_rgba(0,0,0,0.8)]"
                onClick={(event) => event.stopPropagation()}
              />
            </AnimatePresence>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[121] px-4 pb-6 sm:px-8">
            <div className="mx-auto max-w-3xl rounded-full border border-white/10 bg-white/8 px-4 py-3 text-center backdrop-blur-md">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white sm:text-base">{item.title}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/55">
                {currentIndex + 1} / {items.length}
              </p>
            </div>
          </div>

          <button
            onClick={(event) => {
              event.stopPropagation()
              onClose()
            }}
            className="fixed right-4 top-4 z-[122] inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md"
          >
            <X className="h-5 w-5" />
          </button>

          {items.length > 1 && (
            <>
              <button
                onClick={(event) => {
                  event.stopPropagation()
                  goPrev()
                }}
                className="fixed left-3 top-1/2 z-[122] inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md sm:left-5"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                onClick={(event) => {
                  event.stopPropagation()
                  goNext()
                }}
                className="fixed right-3 top-1/2 z-[122] inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md sm:right-5"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
