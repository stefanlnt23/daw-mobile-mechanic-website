"use client"

import { motion } from "framer-motion"
import { Phone } from "lucide-react"

/*
  Simplified SVG map of Shropshire area with Wem at center
  and a 30-mile radius circle. Towns placed at approximate
  relative positions.
*/

const towns = [
  { name: "Wem", x: 50, y: 45, center: true },
  { name: "Shrewsbury", x: 38, y: 60 },
  { name: "Market Drayton", x: 68, y: 38 },
  { name: "Whitchurch", x: 58, y: 28 },
  { name: "Oswestry", x: 22, y: 40 },
  { name: "Telford", x: 48, y: 75 },
  { name: "Newport", x: 62, y: 72 },
  { name: "Nantwich", x: 75, y: 22 },
  { name: "Crewe", x: 80, y: 15 },
]

export function CoverageMap() {
  return (
    <section id="coverage" aria-label="Service coverage area" className="relative py-20 lg:py-28 carbon-fiber">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Where We Operate
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-foreground text-balance">
            Coverage Area
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Based in Wem, we cover a 30-mile radius across Shropshire and into
            Cheshire. If you&apos;re nearby, we&apos;ll come to you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl"
        >
          <div className="bg-card border border-border rounded-xl p-6 sm:p-10">
            <svg
              viewBox="0 0 100 90"
              className="w-full h-auto"
              aria-label="Map showing 30-mile service radius around Wem, Shropshire"
            >
              {/* Shropshire rough outline */}
              <path
                d="M15,10 L60,5 L85,12 L90,35 L82,60 L75,80 L55,88 L30,85 L12,70 L8,45 L10,25 Z"
                fill="none"
                stroke="hsl(var(--border))"
                strokeWidth="0.5"
                strokeDasharray="2,2"
                opacity="0.5"
              />

              {/* 30-mile radius circle */}
              <circle
                cx="50"
                cy="45"
                r="35"
                fill="hsl(var(--primary) / 0.08)"
                stroke="hsl(var(--primary) / 0.3)"
                strokeWidth="0.5"
                strokeDasharray="3,2"
              />

              {/* Inner radius ring for visual depth */}
              <circle
                cx="50"
                cy="45"
                r="18"
                fill="hsl(var(--primary) / 0.05)"
                stroke="hsl(var(--primary) / 0.15)"
                strokeWidth="0.3"
              />

              {/* Town markers and labels */}
              {towns.map((town) => (
                <g key={town.name}>
                  {town.center ? (
                    <>
                      <circle
                        cx={town.x}
                        cy={town.y}
                        r="2.5"
                        fill="hsl(var(--primary))"
                      />
                      <circle
                        cx={town.x}
                        cy={town.y}
                        r="4.5"
                        fill="none"
                        stroke="hsl(var(--primary))"
                        strokeWidth="0.5"
                        opacity="0.5"
                      />
                      <text
                        x={town.x}
                        y={town.y - 6}
                        textAnchor="middle"
                        fill="hsl(var(--primary))"
                        fontSize="3.5"
                        fontWeight="bold"
                        fontFamily="system-ui"
                      >
                        {town.name}
                      </text>
                      <text
                        x={town.x}
                        y={town.y + 8}
                        textAnchor="middle"
                        fill="hsl(var(--primary) / 0.6)"
                        fontSize="2"
                        fontFamily="system-ui"
                      >
                        (HQ)
                      </text>
                    </>
                  ) : (
                    <>
                      <circle
                        cx={town.x}
                        cy={town.y}
                        r="1.2"
                        fill="hsl(var(--muted-foreground))"
                        opacity="0.6"
                      />
                      <text
                        x={town.x}
                        y={town.y - 3}
                        textAnchor="middle"
                        fill="hsl(var(--muted-foreground))"
                        fontSize="2.5"
                        fontFamily="system-ui"
                        opacity="0.8"
                      >
                        {town.name}
                      </text>
                    </>
                  )}
                </g>
              ))}
            </svg>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Not sure if you&apos;re covered?
          </p>
          <a
            href="tel:+447426443009"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wider hover:brightness-110 transition-all"
          >
            <Phone className="w-4 h-4" />
            Call Aaron
          </a>
        </motion.div>
      </div>
    </section>
  )
}
