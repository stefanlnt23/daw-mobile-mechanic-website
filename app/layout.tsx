import type { Metadata, Viewport } from "next"
import { Barlow_Condensed, Space_Grotesk } from "next/font/google"
import { StructuredData } from "@/components/structured-data"
import { PrivacyBanner } from "@/components/privacy-banner"
import "./globals.css"

const SITE_URL = "https://dawmobilemechanic.co.uk"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-barlow-condensed",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "DAW Mobile Mechanic | Mobile Mechanic Telford",
    template: "%s | DAW Mobile Mechanic",
  },
  description:
    "DAW Mobile Mechanic covers Telford and up to 20 miles around it. Mobile servicing, MOT repairs, brakes, suspension, diagnostics, steering, exhausts, timing belts, and more at your home or workplace.",
  keywords: [
    "DAW Mobile Mechanic",
    "mobile mechanic Telford",
    "Telford mobile mechanic",
    "mobile mechanic near Telford",
    "mobile car servicing Telford",
    "MOT repairs Telford",
    "brake repair Telford",
    "car diagnostics Telford",
    "timing belt replacement Telford",
    "suspension repair Telford",
    "mechanic that comes to you",
  ],
  authors: [{ name: "DAW Mobile Mechanic" }],
  creator: "Web-force.info",
  publisher: "DAW Mobile Mechanic",
  formatDetection: {
    telephone: true,
    email: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: "DAW Mobile Mechanic",
    title: "DAW Mobile Mechanic | Broken Down? Call DAW.",
    description:
      "Mobile mechanic covering Telford and surrounding areas. Servicing, MOT repairs, diagnostics, brakes, suspension, steering, exhausts, timing belts, and more.",
    images: [
      {
        url: "/socials.webp",
        width: 1536,
        height: 1024,
        alt: "DAW Mobile Mechanic mobile mechanic social preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DAW Mobile Mechanic | Broken Down? Call DAW.",
    description:
      "Mobile mechanic covering Telford and surrounding areas with fast mobile-friendly contact options.",
    images: ["/socials.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/daw-logo.svg",
    apple: "/daw-logo.svg",
  },
  category: "automotive",
}

export const viewport: Viewport = {
  themeColor: "#0a0f1e",
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={`${spaceGrotesk.variable} ${barlowCondensed.variable} font-sans antialiased`}>
        {children}
        <PrivacyBanner />
      </body>
    </html>
  )
}
