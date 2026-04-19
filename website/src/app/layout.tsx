import type { Metadata } from 'next'
import { DM_Serif_Display, Crimson_Pro, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const serif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-serif',
  display: 'swap',
})

const body = Crimson_Pro({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
})

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'The Architecture of Trust — Data Standards & Governance',
  description: 'A living research compendium on enterprise data standards, governance frameworks, and technical enforcement across modern data ecosystems.',
  keywords: ['data standards', 'data governance', 'data contracts', 'DAMA-DMBOK', 'DCAM', 'federated governance'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
