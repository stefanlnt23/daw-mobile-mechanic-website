"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowRight, X } from "lucide-react"

function useGalleryImages() {
  const [images, setImages] = useState<string[]>([])
  useEffect(() => {
    fetch("/api/gallery")
      .then((r) => r.json())
      .then((d) => setImages(d.images ?? []))
      .catch(() => {})
  }, [])
  return images
}

/* ─────────────────────────────────────────────
   DESKTOP: Infinite drag portal
───────────────────────────────────────────── */
function DesktopGallery({ images }: { images: string[] }) {
  const portalRef = useRef<HTMLDivElement>(null)
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)

  const stateRef = useRef({
    offsetX: 0,
    offsetY: 0,
    velX: 0,
    velY: 0,
    isDragging: false,
    didDrag: false,
    lastX: 0,
    lastY: 0,
    paused: false,
    pressedSrc: null as string | null,   // track which img was pressed
    items: [] as Array<{ el: HTMLDivElement; baseX: number; baseY: number }>,
    rafId: 0,
  })

  const IMG_SIZE = 280
  const GAP = 16
  const COLS = 3
  const ROWS = 2
  const CELL = IMG_SIZE + GAP
  const TILE_W = COLS * CELL
  const TILE_H = ROWS * CELL
  const AUTO_X = 0.35
  const AUTO_Y = 0
  const FRICTION = 0.93

  useEffect(() => {
    if (!images.length || !portalRef.current) return
    const portal = portalRef.current
    const s = stateRef.current

    portal.innerHTML = ""
    s.items = []

    s.offsetX = (portal.clientWidth - TILE_W) / 2
    s.offsetY = (portal.clientHeight - TILE_H) / 2

    for (let ty = -1; ty <= 1; ty++) {
      for (let tx = -1; tx <= 1; tx++) {
        for (let row = 0; row < ROWS; row++) {
          for (let col = 0; col < COLS; col++) {
            const wrap = document.createElement("div")
            wrap.style.cssText = "position:absolute;top:0;left:0;will-change:transform;cursor:pointer;"

            const img = document.createElement("img")
            // Index must be based only on (row, col) — same slot in every tile
            // repeat shows the same photo so the wrap-around is invisible
            const imgIdx = (row * COLS + col) % images.length
            img.src = `/gallery/${images[imgIdx]}`
            img.style.cssText = `
              display:block;width:${IMG_SIZE}px;height:${IMG_SIZE}px;
              border-radius:18px;object-fit:cover;
              box-shadow:0 8px 28px rgba(0,0,0,0.5);
              transition:transform .35s cubic-bezier(.2,.8,.2,1),filter .25s,box-shadow .35s;
              -webkit-user-drag:none;pointer-events:none;
            `
            img.draggable = false

            // Record which img was pressed BEFORE portal captures the pointer
            wrap.addEventListener("pointerdown", () => {
              s.pressedSrc = img.src
            })

            wrap.addEventListener("pointerenter", () => {
              wrap.style.zIndex = "100"
              img.style.transform = "scale(1.07)"
              img.style.filter = "brightness(1.18)"
              img.style.boxShadow = "0 20px 50px rgba(0,0,0,0.7)"
            })
            wrap.addEventListener("pointerleave", () => {
              wrap.style.zIndex = ""
              img.style.transform = ""
              img.style.filter = ""
              img.style.boxShadow = "0 8px 28px rgba(0,0,0,0.5)"
            })

            wrap.appendChild(img)
            portal.appendChild(wrap)

            s.items.push({
              el: wrap,
              baseX: col * CELL + tx * TILE_W,
              baseY: row * CELL + ty * TILE_H,
            })
          }
        }
      }
    }

    function snapOffset() {
      if (s.offsetX > TILE_W / 2) s.offsetX -= TILE_W
      if (s.offsetX < -TILE_W / 2) s.offsetX += TILE_W
      if (s.offsetY > TILE_H / 2) s.offsetY -= TILE_H
      if (s.offsetY < -TILE_H / 2) s.offsetY += TILE_H
    }

    function update() {
      if (!s.paused) {
        if (!s.isDragging) {
          s.velX *= FRICTION
          s.velY *= FRICTION
        }
        s.offsetX += AUTO_X + s.velX
        s.offsetY += AUTO_Y + s.velY
        snapOffset()
        s.items.forEach((item) => {
          item.el.style.transform = `translate3d(${item.baseX + s.offsetX}px,${item.baseY + s.offsetY}px,0)`
        })
      }
      s.rafId = requestAnimationFrame(update)
    }
    s.rafId = requestAnimationFrame(update)

    const onDown = (e: PointerEvent) => {
      s.isDragging = true
      s.didDrag = false
      s.lastX = e.clientX
      s.lastY = e.clientY
      // setPointerCapture redirects all future pointer events to portal —
      // that's why we track pressedSrc on pointerdown (above) before this runs
      portal.setPointerCapture(e.pointerId)
    }
    const onMove = (e: PointerEvent) => {
      if (!s.isDragging) return
      const dx = e.clientX - s.lastX
      const dy = e.clientY - s.lastY
      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) s.didDrag = true
      s.velX = dx
      s.velY = dy
      s.lastX = e.clientX
      s.lastY = e.clientY
    }
    const onUp = () => {
      s.isDragging = false
      // Open lightbox if this was a tap (not a drag) on an image
      if (!s.didDrag && s.pressedSrc) {
        s.paused = true
        s.velX = 0
        s.velY = 0
        setLightboxSrc(s.pressedSrc)
      }
      s.pressedSrc = null
    }

    portal.addEventListener("pointerdown", onDown)
    window.addEventListener("pointermove", onMove)
    portal.addEventListener("pointerup", onUp)

    return () => {
      cancelAnimationFrame(s.rafId)
      portal.removeEventListener("pointerdown", onDown)
      window.removeEventListener("pointermove", onMove)
      portal.removeEventListener("pointerup", onUp)
    }
  }, [images])

  function closeLightbox() {
    setLightboxSrc(null)
    stateRef.current.paused = false
  }

  return (
    <>
      {/* Wrapper — CSS mask creates the fade, no hard clip so photos bleed out */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: 560,
          WebkitMaskImage: [
            "linear-gradient(to right,  transparent 0%, black 22%, black 78%, transparent 100%)",
            "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
          ].join(", "),
          WebkitMaskComposite: "source-in",
          maskImage: [
            "linear-gradient(to right,  transparent 0%, black 22%, black 78%, transparent 100%)",
            "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
          ].join(", "),
          maskComposite: "intersect",
        }}
      >
        <div
          ref={portalRef}
          style={{
            width: "100%",
            height: "100%",
            background: "transparent",
            cursor: "grab",
            touchAction: "none",
            userSelect: "none",
            position: "relative",
          }}
        />
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxSrc && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={closeLightbox}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.92)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 2000,
              cursor: "zoom-out",
            }}
          >
            <motion.img
              key={lightboxSrc}
              src={lightboxSrc}
              alt="Work photo enlarged"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "82%",
                maxHeight: "82vh",
                borderRadius: 22,
                boxShadow: "0 40px 100px rgba(0,0,0,0.9)",
                cursor: "default",
              }}
            />
            <button
              onClick={closeLightbox}
              style={{
                position: "fixed",
                top: 22,
                right: 26,
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.13)",
                border: "1.5px solid rgba(255,255,255,0.28)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                backdropFilter: "blur(8px)",
                zIndex: 2100,
              }}
            >
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

/* ─────────────────────────────────────────────
   MOBILE: Auto-scrolling horizontal strip
───────────────────────────────────────────── */
function MobileTicker({ images }: { images: string[] }) {
  if (!images.length) return null
  const strip = [...images, ...images]

  return (
    <div className="overflow-hidden relative">
      <div className="gallery-ticker flex gap-3" style={{ width: "max-content" }}>
        {strip.map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 rounded-2xl overflow-hidden"
            style={{ width: 170, height: 170 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/gallery/${img}`}
              alt={`Work photo ${(i % images.length) + 1}`}
              style={{ width: 170, height: 170, objectFit: "cover", display: "block" }}
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <div
        className="absolute inset-y-0 left-0 w-16 pointer-events-none"
        style={{ background: "linear-gradient(to right, var(--background), transparent)" }}
      />
      <div
        className="absolute inset-y-0 right-0 w-16 pointer-events-none"
        style={{ background: "linear-gradient(to left, var(--background), transparent)" }}
      />
    </div>
  )
}

/* ─────────────────────────────────────────────
   Main exported section
───────────────────────────────────────────── */
export function GallerySection() {
  const images = useGalleryImages()

  return (
    <section id="our-work" aria-label="Our past work gallery" className="relative py-12 lg:py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Real Jobs, Real Results
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-foreground text-balance">
            Our Work
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Every photo is a job completed at a customer&apos;s door — no garage needed.
          </p>
        </motion.div>

        {/* Desktop */}
        <div className="hidden md:block">
          {images.length > 0 ? (
            <DesktopGallery images={images} />
          ) : (
            <div
              style={{
                width: "100%",
                height: 560,
                borderRadius: 32,
                background: "#0a0a0a",
                border: "1px solid #1a1a1a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#555",
                fontSize: 14,
              }}
            >
              Loading gallery…
            </div>
          )}
          <p className="text-center text-xs text-muted-foreground mt-4 opacity-60">
            Drag to explore · Click any photo to enlarge
          </p>
        </div>

        {/* Mobile: ticker + CTA */}
        <div className="md:hidden space-y-6">
          <MobileTicker images={images} />
          <div className="text-center">
            <Link
              href="/our-work"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider hover:brightness-110 transition-all"
            >
              View All Our Work
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="mt-3 text-xs text-muted-foreground">
              {images.length} jobs documented · tap to explore the full gallery
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .gallery-ticker {
          animation: gallery-scroll 32s linear infinite;
        }
        @keyframes gallery-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
