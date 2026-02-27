"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { Services } from "@/components/services"
import { BreakdownCta } from "@/components/breakdown-cta"
import { WarningLights } from "@/components/warning-lights"
import { Process } from "@/components/process"
import { ContactCta } from "@/components/contact-cta"
import { Footer } from "@/components/footer"
import { MobileBar } from "@/components/mobile-bar"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { PrivacyBanner } from "@/components/privacy-banner"

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-16 md:pb-0">
        <Hero />
        <TrustBar />
        <BreakdownCta className="md:hidden" />
        <Services />
        <WarningLights />
        <Process />
        <ContactCta />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileBar />
      <PrivacyBanner />
    </>
  )
}
