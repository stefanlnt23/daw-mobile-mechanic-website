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
  googleMapsHref: string
  facebookHref: string
  instagramHref: string
}

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Why DAW", href: "#why-daw" },
  { label: "Gallery", href: "#gallery" },
  { label: "Our Work", href: "/our-work", isPage: true },
  { label: "Contact", href: "#contact" },
]

export function HomeHeader({
  phoneDisplay,
  phoneHref,
  googleMapsHref,
  facebookHref,
  instagramHref,
}: HomeHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/94 md:bg-background/88 md:backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 lg:px-8">
        <div className="flex items-center justify-between">
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

        <div className="grid grid-cols-3 gap-2 md:hidden">
          <a
            href={facebookHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit DAW Mobile Mechanic on Facebook"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl border border-[#2d69d8] bg-[#1877F2] px-3 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_10px_24px_rgba(24,119,242,0.28)] transition hover:brightness-110"
          >
            <svg className="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M24 12.073C24 5.446 18.627.073 12 .073S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Facebook
          </a>
          <a
            href={instagramHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit DAW Mobile Mechanic on Instagram"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl border border-[#d93a68] bg-[linear-gradient(135deg,#f44771,#e1306c)] px-3 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_10px_24px_rgba(225,48,108,0.28)] transition hover:brightness-110"
          >
            <svg className="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Insta
          </a>
          <a
            href={googleMapsHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open DAW Mobile Mechanic on Google Maps"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl border border-white/12 bg-white/8 px-3 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_10px_24px_rgba(0,0,0,0.18)] transition hover:border-white/24 hover:bg-white/12"
          >
            <svg className="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Google
          </a>
        </div>
      </div>
    </header>
  )
}
