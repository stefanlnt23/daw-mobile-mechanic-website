"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu, Phone } from "lucide-react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

type HomeHeaderProps = {
  phoneDisplay: string
  phoneHref: string
}

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Why DAW", href: "#why-daw" },
  { label: "Gallery", href: "#gallery" },
  { label: "Our Work", href: "/our-work", isPage: true },
  { label: "Contact", href: "#contact" },
]

export function HomeHeader({ phoneDisplay, phoneHref }: HomeHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/94 md:bg-background/88 md:backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <a href="#" className="flex items-center">
          <div className="relative h-16 w-[15rem] flex-shrink-0 sm:w-[18rem] md:w-[20rem]">
            <Image
              src="/daw-logo.svg"
              alt="DAW Mobile Mechanic logo"
              fill
              className="object-contain"
              sizes="(min-width: 768px) 320px, (min-width: 640px) 288px, 240px"
            />
          </div>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) =>
            item.isPage ? (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-semibold text-muted-foreground transition hover:text-foreground"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold text-muted-foreground transition hover:text-foreground"
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={phoneHref}
            className="hidden rounded-full bg-primary px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-primary-foreground transition hover:-translate-y-0.5 hover:brightness-105 md:inline-flex"
          >
            Call Now
          </a>

          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open navigation menu"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border/80 bg-card text-foreground shadow-sm transition hover:border-primary hover:text-primary md:hidden"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[85vw] border-l border-border/80 bg-background px-0 sm:max-w-sm">
              <SheetHeader className="border-b border-border/70 px-6 py-5 text-left">
                <SheetTitle className="font-display text-3xl uppercase tracking-[0.08em] text-foreground">
                  Menu
                </SheetTitle>
                <SheetDescription className="text-sm font-medium text-muted-foreground">
                  Quick links and contact options.
                </SheetDescription>
              </SheetHeader>

              <div className="flex flex-col px-6 py-6">
                <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
                  {navItems.map((item) =>
                    item.isPage ? (
                      <SheetClose asChild key={item.label}>
                        <Link
                          href={item.href}
                          className="rounded-2xl border border-border/70 bg-card/80 px-4 py-4 text-base font-bold uppercase tracking-[0.16em] text-foreground transition hover:border-primary hover:text-primary"
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    ) : (
                      <SheetClose asChild key={item.label}>
                        <a
                          href={item.href}
                          className="rounded-2xl border border-border/70 bg-card/80 px-4 py-4 text-base font-bold uppercase tracking-[0.16em] text-foreground transition hover:border-primary hover:text-primary"
                        >
                          {item.label}
                        </a>
                      </SheetClose>
                    ),
                  )}
                </nav>

                <div className="mt-6">
                  <a
                    href={phoneHref}
                    className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-primary-foreground transition hover:brightness-105"
                  >
                    <Phone className="h-4 w-4" />
                    Call {phoneDisplay}
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
