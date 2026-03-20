"use client"

import { motion } from "framer-motion"
import { Phone } from "lucide-react"

const towns = [
  { name: "Telford", x: 48, y: 48, center: true },
  { name: "Wellington", x: 39, y: 42 },
  { name: "Madeley", x: 44, y: 60 },
  { name: "Oakengates", x: 56, y: 46 },
  { name: "Shifnal", x: 68, y: 60 },
  { name: "Newport", x: 27, y: 58 },
  { name: "Broseley", x: 36, y: 72 },
  { name: "Bridgnorth", x: 56, y: 78 },
  { name: "Ironbridge", x: 46, y: 67 },
]

const PRIMARY = "#cf6a2d"
const PRIMARY_DIM = "rgba(207,106,45,0.34)"
const PRIMARY_FAINT = "rgba(207,106,45,0.09)"
const PRIMARY_SUBTLE = "rgba(207,106,45,0.16)"
const PRIMARY_HALF = "rgba(207,106,45,0.72)"
const MUTED = "rgba(16,36,50,0.7)"
const MUTED_DIM = "rgba(16,36,50,0.46)"
const BORDER = "rgba(16,36,50,0.12)"

export function CoverageMap() {
  return (
    <section
      id="coverage"
      aria-label="Service coverage area"
      className="rounded-[2rem] border border-border/80 bg-card p-8 shadow-[0_18px_50px_rgba(10,42,61,0.08)]"
    >
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-primary">
            Where We Cover
          </span>
          <h2 className="mt-3 font-display text-4xl uppercase leading-none text-foreground sm:text-5xl">
            Coverage Area
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            Based in Telford and covering up to roughly 20 miles around it. If you&apos;re nearby and not sure, just call or WhatsApp.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl"
        >
          <div className="rounded-[1.5rem] border border-border/80 bg-background/70 p-6 sm:p-8">
            <svg
              viewBox="0 0 100 90"
              className="w-full h-auto"
              aria-label="Map showing service radius around Telford"
            >
              <rect x="4" y="4" width="92" height="82" rx="10" fill="rgba(255,255,255,0.28)" />

              <path
                d="M16,20 C28,26 36,26 46,22 C60,16 71,16 84,22"
                fill="none"
                stroke="rgba(84,154,196,0.28)"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <path
                d="M20,30 C34,36 44,37 57,34 C68,31 77,34 86,40"
                fill="none"
                stroke="rgba(16,36,50,0.08)"
                strokeWidth="1"
                strokeDasharray="2,3"
              />
              <path
                d="M12,56 C24,52 35,51 48,54 C58,56 72,62 86,60"
                fill="none"
                stroke="rgba(16,36,50,0.08)"
                strokeWidth="1"
                strokeDasharray="2,3"
              />

              <path
                d="M18,12 L58,8 L82,18 L88,40 L80,66 L66,80 L42,84 L20,74 L12,55 L11,30 Z"
                fill="rgba(207,106,45,0.03)"
                stroke={BORDER}
                strokeWidth="0.7"
                strokeDasharray="2,2"
              />

              <circle
                cx="48"
                cy="48"
                r="27"
                fill={PRIMARY_FAINT}
                stroke={PRIMARY_DIM}
                strokeWidth="0.7"
                strokeDasharray="3,2"
              />

              <circle
                cx="48"
                cy="48"
                r="14"
                fill="rgba(207,106,45,0.05)"
                stroke={PRIMARY_SUBTLE}
                strokeWidth="0.5"
              />

              {towns.map((town) => (
                <g key={town.name}>
                  {town.center ? (
                    <>
                      <circle cx={town.x} cy={town.y} r="2.5" fill={PRIMARY} />
                      <circle
                        cx={town.x}
                        cy={town.y}
                        r="4.5"
                        fill="none"
                        stroke={PRIMARY}
                        strokeWidth="0.5"
                        opacity="0.5"
                      />
                      <text
                        x={town.x}
                        y={town.y - 6}
                        textAnchor="middle"
                        fill={PRIMARY}
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
                        fill={PRIMARY_HALF}
                        fontSize="2.1"
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
                        fill={MUTED_DIM}
                      />
                      <text
                        x={town.x}
                        y={town.y - 3}
                        textAnchor="middle"
                        fill={MUTED}
                        fontSize="2.5"
                        fontFamily="system-ui"
                      >
                        {town.name}
                      </text>
                    </>
                  )}
                </g>
              ))}

              <path
                d="M27,58 L39,42 L48,48 L56,46 L68,60"
                fill="none"
                stroke="rgba(16,36,50,0.16)"
                strokeWidth="0.8"
                strokeDasharray="1.5,2"
              />
            </svg>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Telford", "Wellington", "Madeley", "Oakengates", "Shifnal", "Newport"].map((place) => (
                <div
                  key={place}
                  className="rounded-full border border-border/80 bg-card px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-foreground"
                >
                  {place}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="mb-4 text-muted-foreground">
            Not sure if you&apos;re covered?
          </p>
          <a
            href="tel:07360078879"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-primary-foreground transition hover:-translate-y-0.5 hover:brightness-105"
          >
            <Phone className="h-4 w-4" />
            Check Your Area
          </a>
        </motion.div>
      </div>
    </section>
  )
}
