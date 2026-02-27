"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { ContactCta } from "@/components/contact-cta"
import { Footer } from "@/components/footer"
import { MobileBar } from "@/components/mobile-bar"
import { DemoModal } from "@/components/demo-modal"

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Header />
      <main className="pb-16 md:pb-0">
        <Hero />
        <TrustBar />
        <Services onBookNow={() => setModalOpen(true)} />
        <Process />
        <ContactCta />
      </main>
      <Footer />
      <MobileBar />
      <DemoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
