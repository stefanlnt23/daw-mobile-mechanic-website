import { Wrench } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary brushed-metal">
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary">
              <Wrench className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-sm font-bold text-foreground">
              ADL Mobile Mechanic
            </span>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            Serving Wem, Market Drayton & surrounding areas within a 30-mile
            radius.
          </p>

          <p className="text-xs text-muted-foreground">
            Design by{" "}
            <a
              href="https://web-force.info"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Web-force.info
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
