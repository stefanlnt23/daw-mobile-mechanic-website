"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface LightboxProps {
  images: string[]
  currentIndex: number | null
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

const slideVariants = {
  enter: (dir: number) => ({ x: dir * 140, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: -dir * 140, opacity: 0 }),
}

export function Lightbox({ images, currentIndex, onClose, onNext, onPrev }: LightboxProps) {
  const touchStartX = useRef(0)
  const isOpen = currentIndex !== null
  const [direction, setDirection] = useState(0)

  const goNext = () => { setDirection(1); onNext() }
  const goPrev = () => { setDirection(-1); onPrev() }

  // Lock body scroll while open
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

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext()
      else if (e.key === "ArrowLeft") goPrev()
      else if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isOpen, onNext, onPrev, onClose])

  const src = currentIndex !== null ? `/gallery/${images[currentIndex]}` : null

  const navBtn: React.CSSProperties = {
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 48,
    height: 48,
    borderRadius: "50%",
    background: "rgba(255,255,255,0.12)",
    border: "1.5px solid rgba(255,255,255,0.22)",
    color: "#fff",
    cursor: "pointer",
    backdropFilter: "blur(8px)",
    zIndex: 2100,
  }

  return (
    <AnimatePresence>
      {isOpen && src && (
        <motion.div
          key="lightbox-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX }}
          onTouchEnd={(e) => {
            const dx = e.changedTouches[0].clientX - touchStartX.current
            if (dx < -50) goNext()
            else if (dx > 50) goPrev()
          }}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.93)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2000,
            touchAction: "none",
            overflow: "hidden",
          }}
        >
          {/* Photo — slides directionally on index change */}
          <AnimatePresence custom={direction}>
            <motion.img
              key={currentIndex}
              src={src}
              alt="Work photo enlarged"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "absolute",
                maxWidth: "88%",
                maxHeight: "80vh",
                borderRadius: 18,
                boxShadow: "0 30px 80px rgba(0,0,0,0.9)",
                cursor: "default",
                display: "block",
              }}
            />
          </AnimatePresence>

          {/* Close */}
          <button
            onClick={(e) => { e.stopPropagation(); onClose() }}
            style={{ ...navBtn, top: 18, right: 18, width: 42, height: 42 }}
          >
            <X size={18} />
          </button>

          {/* Prev */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goPrev() }}
              style={{ ...navBtn, left: 12, top: "50%", transform: "translateY(-50%)" }}
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* Next */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goNext() }}
              style={{ ...navBtn, right: 12, top: "50%", transform: "translateY(-50%)" }}
            >
              <ChevronRight size={24} />
            </button>
          )}

          {/* Counter */}
          <div
            style={{
              position: "fixed",
              bottom: 22,
              left: "50%",
              transform: "translateX(-50%)",
              color: "rgba(255,255,255,0.45)",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.05em",
              zIndex: 2100,
              pointerEvents: "none",
              whiteSpace: "nowrap",
            }}
          >
            {currentIndex + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
