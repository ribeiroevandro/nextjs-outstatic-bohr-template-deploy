import { absoluteUrl } from '@/lib/utils'
import { Metadata } from 'next'
import '../styles/index.css'
import "../styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://nextjs-outstatic-bohr-template-ribeiroevandro.bohr.io'),
  title: {
    default: 'Bohr Next.js with Outstatic Template',
    template: '%s | Bohr Next.js with Outstatic Template'
  },
  description: 'A basic Next.js template with Outstatic configured, a CMS based on NextJS',
  openGraph: {
    title: 'Bohr Next.js with Outstatic Template',
    description: 'A basic Next.js template with Outstatic configured, a CMS based on NextJS',
    url: absoluteUrl('/'),
    siteName: 'Bohr Next.js with Outstatic Template',
    images: [
      {
        url: absoluteUrl('/images/og-image.png'),
        width: 1800,
        height: 1600
      }
    ],
    locale: 'pt_BR',
    type: 'website'
  },
  icons: {
    icon: [{ url: '/favicon/favicon-32x32.png' }],
    apple: [{ url: '/favicon/apple-touch-icon.png' }]
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
