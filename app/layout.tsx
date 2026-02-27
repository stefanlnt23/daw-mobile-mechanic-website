import type { Metadata, Viewport } from 'next'
import { Roboto_Condensed, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { StructuredData } from '@/components/structured-data'
import './globals.css'

const SITE_URL = 'https://adlmechanic.uk'

const _robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-roboto-condensed",
})
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'ADL Mobile Mechanic | Mobile Mechanic Wem, Market Drayton & Shropshire',
    template: '%s | ADL Mobile Mechanic',
  },
  description: 'Expert mobile mechanic serving Wem, Market Drayton, Shrewsbury, Whitchurch, Oswestry & a 30-mile radius across Shropshire. Timing chain specialist, advanced diagnostics, full servicing, MOT prep, clutch & flywheel, suspension & brakes, and dealer PDI work. We come to your home or workplace — no garage needed. Call Aaron on 07426 443009.',
  keywords: [
    'mobile mechanic',
    'mobile mechanic Wem',
    'mobile mechanic Market Drayton',
    'mobile mechanic Shropshire',
    'mobile mechanic Shrewsbury',
    'mobile mechanic Whitchurch',
    'mobile mechanic Oswestry',
    'mobile mechanic near me',
    'car mechanic Wem',
    'car mechanic Market Drayton',
    'timing chain replacement',
    'timing chain Renault Trafic',
    'timing chain Vauxhall Vivaro',
    'vehicle diagnostics Shropshire',
    'MOT preparation Shropshire',
    'clutch replacement mobile',
    'brake repair mobile mechanic',
    'suspension repair Shropshire',
    'dealer PDI work',
    'pre delivery inspection',
    'mobile car servicing',
    'oil change mobile',
    'car service at home',
    'mechanic that comes to you',
    'ADL Mobile Mechanic',
  ],
  authors: [{ name: 'ADL Mobile Mechanic' }],
  creator: 'Web-force.info',
  publisher: 'ADL Mobile Mechanic',
  formatDetection: {
    telephone: true,
    email: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: SITE_URL,
    siteName: 'ADL Mobile Mechanic',
    title: 'ADL Mobile Mechanic | The Expert Workshop That Comes To You',
    description: 'Expert mobile mechanic serving Wem, Market Drayton & a 30-mile radius across Shropshire. Timing chains, diagnostics, servicing, brakes, clutch & more. Call Aaron: 07426 443009.',
    images: [
      {
        url: '/images/aaron-fixv2.png',
        width: 1200,
        height: 630,
        alt: 'ADL Mobile Mechanic — Expert mobile mechanic serving Shropshire',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADL Mobile Mechanic | The Expert Workshop That Comes To You',
    description: 'Expert mobile mechanic serving Wem, Market Drayton & Shropshire. Call Aaron: 07426 443009.',
    images: ['/images/aaron-fixv2.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  category: 'automotive',
  other: {
    'geo.region': 'GB-SHR',
    'geo.placename': 'Wem, Shropshire',
    'geo.position': '52.8567;-2.7164',
    'ICBM': '52.8567, -2.7164',
    'revisit-after': '7 days',
    'rating': 'general',
  },
}

export const viewport: Viewport = {
  themeColor: '#1A1A1B',
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
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
