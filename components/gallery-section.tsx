"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Lightbox } from "./lightbox"

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
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)

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
    pressedIdx: -1,
    items: [] as Array<{ el: HTMLDivElement; baseX: number; baseY: number }>,
    rafId: 0,
  })

  const IMG_SIZE = 280
  const GAP = 16
  const ROWS = 2
  const CELL = IMG_SIZE + GAP
  const AUTO_X = 0.35
  const AUTO_Y = 0
  const FRICTION = 0.93

  useEffect(() => {
    if (!images.length || !portalRef.current) return
    const portal = portalRef.current
    const s = stateRef.current

    portal.innerHTML = ""
    s.items = []

    // Tile wide enough to hold all images — each tile identical for seamless looping
    const COLS = Math.ceil(images.length / ROWS)
    const TILE_W = COLS * CELL
    const TILE_H = ROWS * CELL

    s.offsetX = (portal.clientWidth - TILE_W) / 2
    s.offsetY = (portal.clientHeight - TILE_H) / 2

    for (let ty = -1; ty <= 1; ty++) {
      for (let tx = -1; tx <= 1; tx++) {
        for (let row = 0; row < ROWS; row++) {
          for (let col = 0; col < COLS; col++) {
            const wrap = document.createElement("div")
            wrap.style.cssText = "position:absolute;top:0;left:0;will-change:transform;cursor:pointer;"

            const img = document.createElement("img")
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

            wrap.addEventListener("pointerdown", () => { s.pressedIdx = imgIdx })

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
      if (!s.didDrag && s.pressedIdx >= 0) {
        s.paused = true
        s.velX = 0
        s.velY = 0
        setLightboxIdx(s.pressedIdx)
      }
      s.pressedIdx = -1
    }

    portal.addEventListener("pointerdown", onDown)
    portal.addEventListener("pointermove", onMove)
    portal.addEventListener("pointerup", onUp)

    return () => {
      cancelAnimationFrame(s.rafId)
      portal.removeEventListener("pointerdown", onDown)
      portal.removeEventListener("pointermove", onMove)
      portal.removeEventListener("pointerup", onUp)
    }
  }, [images])

  function closeLightbox() {
    setLightboxIdx(null)
    stateRef.current.paused = false
  }

  return (
    <>
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

      <Lightbox
        images={images}
        currentIndex={lightboxIdx}
        onClose={closeLightbox}
        onNext={() => setLightboxIdx((i) => (i === null ? null : (i + 1) % images.length))}
        onPrev={() => setLightboxIdx((i) => (i === null ? null : (i - 1 + images.length) % images.length))}
      />
    </>
  )
}

/* ─────────────────────────────────────────────
   MOBILE: Interactive draggable strip (single row)
───────────────────────────────────────────── */
function MobileStrip({ images }: { images: string[] }) {
  const portalRef = useRef<HTMLDivElement>(null)
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)

  const stateRef = useRef({
    offsetX: 0,
    velX: 0,
    isDragging: false,
    didDrag: false,
    lastX: 0,
    paused: false,
    pressedIdx: -1,
    items: [] as Array<{ el: HTMLDivElement; baseX: number }>,
    rafId: 0,
  })

  const IMG_W = 155
  const IMG_H = 155
  const GAP = 10
  const CELL = IMG_W + GAP
  const AUTO_X = 0.15
  const FRICTION = 0.91

  useEffect(() => {
    if (!images.length || !portalRef.current) return
    const portal = portalRef.current
    const s = stateRef.current

    portal.innerHTML = ""
    s.items = []
    s.offsetX = 0

    // One tile holds all images — 3 copies for seamless wrap
    const COLS = images.length
    const TILE_W = COLS * CELL

    const PORTAL_H = portal.clientHeight || IMG_H + 20
    const TOP = Math.round((PORTAL_H - IMG_H) / 2)

    for (let tx = -1; tx <= 1; tx++) {
      for (let col = 0; col < COLS; col++) {
        const wrap = document.createElement("div")
        wrap.style.cssText = `position:absolute;top:${TOP}px;left:0;will-change:transform;cursor:pointer;`

        const img = document.createElement("img")
        const imgIdx = col % images.length
        img.src = `/gallery/${images[imgIdx]}`
        img.style.cssText = `
          display:block;width:${IMG_W}px;height:${IMG_H}px;
          border-radius:14px;object-fit:cover;
          box-shadow:0 5px 16px rgba(0,0,0,0.35);
          -webkit-user-drag:none;pointer-events:none;
        `
        img.draggable = false

        wrap.addEventListener("pointerdown", () => { s.pressedIdx = imgIdx })

        wrap.appendChild(img)
        portal.appendChild(wrap)
        s.items.push({ el: wrap, baseX: col * CELL + tx * TILE_W })
      }
    }

    function snapOffset() {
      if (s.offsetX > TILE_W / 2) s.offsetX -= TILE_W
      if (s.offsetX < -TILE_W / 2) s.offsetX += TILE_W
    }

    function update() {
      if (!s.paused) {
        if (!s.isDragging) s.velX *= FRICTION
        s.offsetX += AUTO_X + s.velX
        snapOffset()
        s.items.forEach((item) => {
          item.el.style.transform = `translate3d(${item.baseX + s.offsetX}px,0,0)`
        })
      }
      s.rafId = requestAnimationFrame(update)
    }
    s.rafId = requestAnimationFrame(update)

    const onDown = (e: PointerEvent) => {
      s.isDragging = true
      s.didDrag = false
      s.lastX = e.clientX
      portal.setPointerCapture(e.pointerId)
    }
    const onMove = (e: PointerEvent) => {
      if (!s.isDragging) return
      const dx = e.clientX - s.lastX
      if (Math.abs(dx) > 3) s.didDrag = true
      s.velX = dx
      s.lastX = e.clientX
    }
    const onUp = () => {
      s.isDragging = false
      if (!s.didDrag && s.pressedIdx >= 0) {
        s.paused = true
        s.velX = 0
        setLightboxIdx(s.pressedIdx)
      }
      s.pressedIdx = -1
    }

    portal.addEventListener("pointerdown", onDown)
    portal.addEventListener("pointermove", onMove)
    portal.addEventListener("pointerup", onUp)

    return () => {
      cancelAnimationFrame(s.rafId)
      portal.removeEventListener("pointerdown", onDown)
      portal.removeEventListener("pointermove", onMove)
      portal.removeEventListener("pointerup", onUp)
    }
  }, [images])

  function closeLightbox() {
    setLightboxIdx(null)
    stateRef.current.paused = false
  }

  return (
    <>
      <div
        style={{
          position: "relative",
          height: IMG_H + 30,
          overflow: "hidden",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          maskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      >
        <div
          ref={portalRef}
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            touchAction: "none",
            userSelect: "none",
            cursor: "grab",
          }}
        />
      </div>

      <Lightbox
        images={images}
        currentIndex={lightboxIdx}
        onClose={closeLightbox}
        onNext={() => setLightboxIdx((i) => (i === null ? null : (i + 1) % images.length))}
        onPrev={() => setLightboxIdx((i) => (i === null ? null : (i - 1 + images.length) % images.length))}
      />
    </>
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

        {/* SEO fallback for crawlers that don't execute JS */}
        <noscript>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              { src: "/gallery/timing-chain-job.jpg", alt: "Timing chain replacement on Renault Trafic at customer's driveway" },
              { src: "/gallery/diagnostics-scan.jpg", alt: "Dealer-level diagnostic scan on engine management system" },
              { src: "/gallery/brake-disc-replacement.jpg", alt: "New brake discs and pads fitted on-site in Shropshire" },
              { src: "/gallery/clutch-replacement.jpg", alt: "Complete clutch and flywheel replacement at customer's home" },
              { src: "/gallery/full-service.jpg", alt: "Full vehicle service completed on driveway in Wem" },
              { src: "/gallery/suspension-repair.jpg", alt: "Suspension spring and shock absorber replacement" },
            ].map((img) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                width={280}
                height={280}
                style={{ borderRadius: 18, objectFit: "cover", width: "100%", height: "auto" }}
                loading="lazy"
              />
            ))}
          </div>
        </noscript>

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

        {/* Mobile: interactive strip + CTA */}
        <div className="md:hidden space-y-6">
          <MobileStrip images={images} />
          <div className="text-center">
            <Link
              href="/our-work"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider hover:brightness-110 transition-all"
            >
              View All Our Work
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="mt-3 text-xs text-muted-foreground">
              {images.length} jobs documented · tap any photo to enlarge
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
