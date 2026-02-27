import type { Metadata, Viewport } from 'next'
import { Roboto_Condensed, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-roboto-condensed",
})
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'ADL Mobile Mechanic | The Expert Workshop That Comes To You',
  description: 'Expert mobile mechanic serving Wem, Market Drayton & a 30-mile radius. Timing chains, advanced diagnostics, dealer PDI work, and dealer-level servicing without the garage price tag.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
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
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
