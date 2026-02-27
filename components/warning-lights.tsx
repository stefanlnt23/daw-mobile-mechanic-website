"use client"

import { motion } from "framer-motion"
import { AlertTriangle, Phone } from "lucide-react"
import Image from "next/image"

const warningLights = [
  {
    image: "/images/check-engine.png",
    name: "Check Engine",
    severity: "high",
    advice: "Do NOT keep driving. Could indicate serious engine issues. Pull over safely and call for a diagnostic.",
  },
  {
    image: "/images/engine-temperature.png",
    name: "Engine Temperature",
    severity: "high",
    advice: "Your engine is overheating. Stop immediately, let it cool down, and call a mechanic before driving further.",
  },
  {
    image: "/images/oil-pressure-warning.png",
    name: "Oil Pressure",
    severity: "high",
    advice: "Low oil pressure can destroy your engine in minutes. Stop driving immediately and get it checked.",
  },
  {
    image: "/images/battery-warning.png",
    name: "Battery / Charging",
    severity: "medium",
    advice: "Your alternator or battery may be failing. Drive straight home or to a safe location and call for help.",
  },
  {
    image: "/images/abs-warning.png",
    name: "ABS Warning",
    severity: "medium",
    advice: "Your anti-lock brakes may not work properly. Drive carefully and get a brake diagnostic as soon as possible.",
  },
  {
    image: "/images/epc-warning.png",
    name: "EPC / Power Loss",
    severity: "medium",
    advice: "Reduced engine power. Avoid motorways, drive gently and get a diagnostic scan to find the fault.",
  },
]

const severityColors: Record<string, string> = {
  high: "text-red-500 bg-red-500/10 border-red-500/30",
  medium: "text-amber-500 bg-amber-500/10 border-amber-500/30",
}

export function WarningLights() {
  return (
    <section id="warning-lights" className="relative py-20 lg:py-28 carbon-fiber">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-1.5 mb-6">
            <AlertTriangle className="w-4 h-4 text-red-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-red-500">
              Warning Light On?
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-foreground text-balance">
            Don&apos;t Ignore It.<br />
            <span className="text-primary">Call Aaron Instead.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            A warning light on your dashboard means something needs attention <strong>now</strong>.
            Driving with a warning light can turn a <strong>£100 fix into a £2,000 repair</strong>.
            Don&apos;t risk it — get a quick diagnostic and save yourself the headache.
          </p>
        </motion.div>

        {/* Warning lights grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {warningLights.map((light, index) => {
            const iconSize = 64
            const r = 12
            return (
              <motion.div
                key={light.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Icon in the top-left cutout */}
                <div
                  className="absolute top-0 left-0 z-40 flex items-center justify-center"
                  style={{ width: iconSize, height: iconSize }}
                >
                  <div className="relative w-11 h-11">
                    <Image
                      src={light.image}
                      alt={light.name}
                      fill
                      className="object-contain drop-shadow-[0_0_10px_rgba(239,68,68,0.4)]"
                    />
                  </div>
                </div>

                {/* Subtle shadow behind cutout */}
                <div
                  className={`absolute inset-0 rounded-xl bg-card/20 border ${
                    light.severity === "high" ? "border-red-500/10" : "border-amber-500/10"
                  }`}
                  style={{ zIndex: 0 }}
                />

                {/* Card with reversed-L cutout */}
                <div
                  className={`relative overflow-hidden rounded-xl bg-card border ${severityColors[light.severity]}`}
                >
                  {/* Cutout overlay */}
                  <div
                    className="absolute top-[-1px] left-[-1px] z-30 bg-background carbon-fiber"
                    style={{
                      width: iconSize + 1,
                      height: iconSize + 1,
                      borderBottomRightRadius: r,
                    }}
                  />

                  <div className="relative z-10">
                    {/* Top row: spacer for icon + title */}
                    <div className="flex">
                      <div className="flex-shrink-0" style={{ width: iconSize, height: iconSize }} />
                      <div className="flex-1 p-4 pb-0 flex items-center gap-2">
                        <h3 className="font-black uppercase text-sm tracking-wider text-foreground">
                          {light.name}
                        </h3>
                        <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                          light.severity === "high"
                            ? "bg-red-500/20 text-red-500"
                            : "bg-amber-500/20 text-amber-500"
                        }`}>
                          {light.severity === "high" ? "Stop" : "Caution"}
                        </span>
                      </div>
                    </div>

                    {/* Full width content below */}
                    <div className="p-5 pt-3">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {light.advice}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-card border border-border rounded-2xl p-8 md:p-12"
        >
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary rounded-tl-2xl" />
          <AlertTriangle className="w-10 h-10 text-red-500 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground mb-3">
            Broken Down? <span className="text-red-500">Don&apos;t Drive.</span>
          </h3>
          <p className="text-muted-foreground max-w-lg mx-auto mb-6 leading-relaxed">
            If your car has broken down or a warning light is on, don&apos;t risk making it worse.
            Call Aaron for a mobile diagnostic — he comes to you, wherever you are.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:07426443009"
              className="flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-lg font-black text-lg uppercase tracking-wider hover:bg-red-700 transition-all animate-pulse"
            >
              <Phone className="w-5 h-5" />
              Call Aaron Now: 07426 443009
            </a>
            <a
              href="https://wa.me/447426443009"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-border text-foreground px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wider hover:border-green-500 hover:text-green-500 transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Aaron
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
