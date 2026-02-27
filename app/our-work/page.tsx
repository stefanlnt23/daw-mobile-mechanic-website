"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowLeft, Phone, Star, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

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

function InfiniteGallery({ images }: { images: string[] }) {
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
    pressedSrc: null as string | null,
    items: [] as Array<{ el: HTMLDivElement; baseX: number; baseY: number }>,
    rafId: 0,
  })

  // Slowed down — mobile should feel calm, not frantic
  const IMG_SIZE = 190
  const GAP = 10
  const COLS = 2
  const ROWS = 2
  const CELL = IMG_SIZE + GAP
  const TILE_W = COLS * CELL
  const TILE_H = ROWS * CELL
  const AUTO_X = 0.12
  const AUTO_Y = 0
  const FRICTION = 0.92

  useEffect(() => {
    if (!images.length || !portalRef.current) return

    // Defer one frame — ensures flex layout has resolved clientWidth/clientHeight
    const frameId = requestAnimationFrame(() => {
    if (!portalRef.current) return
    const portal = portalRef.current
    const s = stateRef.current

    portal.innerHTML = ""
    s.items = []

    const W = portal.clientWidth  || 390
    const H = portal.clientHeight || 480
    s.offsetX = (W - TILE_W) / 2
    s.offsetY = (H - TILE_H) / 2

    for (let ty = -1; ty <= 2; ty++) {
      for (let tx = -1; tx <= 2; tx++) {
        for (let row = 0; row < ROWS; row++) {
          for (let col = 0; col < COLS; col++) {
            const wrap = document.createElement("div")
            wrap.style.cssText = "position:absolute;top:0;left:0;will-change:transform;cursor:pointer;"

            const img = document.createElement("img")
            const imgIdx = (row * COLS + col) % images.length
            img.src = `/gallery/${images[imgIdx]}`
            img.style.cssText = `
              display:block;width:${IMG_SIZE}px;height:${IMG_SIZE}px;
              border-radius:14px;object-fit:cover;
              box-shadow:0 6px 20px rgba(0,0,0,0.5);
              -webkit-user-drag:none;pointer-events:none;
            `
            img.draggable = false

            // Record pressed image before portal captures the pointer
            wrap.addEventListener("pointerdown", () => {
              s.pressedSrc = img.src
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
      if (!s.didDrag && s.pressedSrc) {
        s.paused = true
        s.velX = 0
        s.velY = 0
        setLightboxSrc(s.pressedSrc)
      }
      s.pressedSrc = null
    }

    portal.addEventListener("pointerdown", onDown)
    portal.addEventListener("pointermove", onMove)
    portal.addEventListener("pointerup", onUp)

    }) // end requestAnimationFrame

    return () => {
      cancelAnimationFrame(frameId)
      cancelAnimationFrame(stateRef.current.rafId)
      if (portalRef.current) {
        portalRef.current.removeEventListener("pointerdown", onDown)
        portalRef.current.removeEventListener("pointermove", onMove)
        portalRef.current.removeEventListener("pointerup", onUp)
      }
    }
  }, [images])

  function closeLightbox() {
    setLightboxSrc(null)
    stateRef.current.paused = false
  }

  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          WebkitMaskImage: [
            "linear-gradient(to right,  transparent 0%, black 20%, black 80%, transparent 100%)",
            "linear-gradient(to bottom, transparent 0%, black 16%, black 84%, transparent 100%)",
          ].join(", "),
          WebkitMaskComposite: "source-in",
          maskImage: [
            "linear-gradient(to right,  transparent 0%, black 20%, black 80%, transparent 100%)",
            "linear-gradient(to bottom, transparent 0%, black 16%, black 84%, transparent 100%)",
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

      {/* Lightbox — pure React state */}
      <AnimatePresence>
        {lightboxSrc && (
          <motion.div
            key="lb"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={closeLightbox}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.93)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 200,
              cursor: "zoom-out",
            }}
          >
            <motion.img
              key={lightboxSrc}
              src={lightboxSrc}
              alt="Work detail"
              initial={{ scale: 0.87, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.87, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "90%",
                maxHeight: "78vh",
                borderRadius: 18,
                boxShadow: "0 30px 80px rgba(0,0,0,0.9)",
                cursor: "default",
              }}
            />
            <button
              onClick={closeLightbox}
              style={{
                position: "absolute",
                top: 18,
                right: 18,
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.15)",
                border: "1.5px solid rgba(255,255,255,0.28)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                backdropFilter: "blur(8px)",
              }}
            >
              <X size={17} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default function OurWorkPage() {
  const images = useGalleryImages()

  return (
    <div className="bg-background flex flex-col" style={{ height: "100dvh" }}>
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-background/95 backdrop-blur-md sticky top-0 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
        <span className="text-xs font-bold uppercase tracking-widest text-primary">
          Our Work
        </span>
        <a
          href="tel:07426443009"
          className="flex items-center gap-1.5 bg-primary text-primary-foreground px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider"
        >
          <Phone className="w-3.5 h-3.5" />
          Call
        </a>
      </div>

      {/* Hero text */}
      <div className="px-6 pt-8 pb-5 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
          Real jobs · Real results
        </p>
        <h1 className="text-3xl font-black uppercase tracking-tight text-foreground leading-tight">
          Convince Yourself
        </h1>
        <p className="mt-3 text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
          Every photo below is a job Aaron completed at a customer&apos;s door — no garage, no middleman.
        </p>
      </div>

      {/* Trust pills */}
      <div className="flex gap-2.5 px-6 pb-5 justify-center flex-wrap">
        {[
          { icon: "🔧", text: "10+ yrs experience" },
          { icon: "📍", text: "Comes to you" },
          { icon: "✅", text: "Fully insured" },
          { icon: "💬", text: "WhatsApp updates" },
        ].map((pill) => (
          <div
            key={pill.text}
            className="flex items-center gap-1.5 bg-muted border border-border rounded-full px-3 py-1.5 text-xs font-semibold text-foreground"
          >
            <span>{pill.icon}</span>
            {pill.text}
          </div>
        ))}
      </div>

      {/* Infinite gallery — fills remaining screen */}
      <div
        className="flex-1 mx-0 mb-3 overflow-hidden relative"
        style={{ minHeight: 300 }}
      >
        {images.length > 0 ? (
          <InfiniteGallery images={images} />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm bg-muted/20 min-h-[380px]">
            Loading…
          </div>
        )}
      </div>

      <p className="text-center text-xs text-muted-foreground pb-2 opacity-55">
        Drag to explore · tap any photo to enlarge
      </p>

      {/* Star rating */}
      <div className="px-6 py-4 border-t border-border">
        <div className="flex items-center justify-center gap-1 mb-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground">
          Rated 5★ by customers across Shropshire
        </p>
      </div>

      {/* Sticky bottom CTA */}
      <div className="sticky bottom-0 bg-background/95 backdrop-blur-md border-t border-border p-4 grid grid-cols-2 gap-3">
        <a
          href="tel:07426443009"
          className="flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-xl font-bold text-sm uppercase tracking-wider"
        >
          <Phone className="w-4 h-4" />
          Call Aaron
        </a>
        <a
          href="https://wa.me/447426443009?text=Hi%20Aaron%2C%20I%20saw%20your%20work%20gallery%20and%20I%27d%20like%20to%20book%20a%20job."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-xl font-bold text-sm uppercase tracking-wider"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WhatsApp
        </a>
      </div>
    </div>
  )
}
