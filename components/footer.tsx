import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary brushed-metal">
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <div className="flex flex-col gap-6">
          {/* Top row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="relative w-36 h-36 -my-10">
                <Image src="/images/adl-logo.png" alt="ADL Mobile Mechanic" fill className="object-contain" />
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

          {/* Legal links & copyright */}
          <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <Link href="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/accessibility" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Accessibility
              </Link>
            </nav>
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} ADL Mobile Mechanic. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
