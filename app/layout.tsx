import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PortfolioX — Build your portfolio in seconds',
  description: 'AI-powered, designer-grade portfolios — instantly. Build your portfolio in seconds using your resume or telling a bit about yourself.',
  keywords: 'portfolio, resume, AI, website builder, developer portfolio',
  authors: [{ name: 'PortfolioX' }],
  openGraph: {
    title: 'PortfolioX — Build your portfolio in seconds',
    description: 'AI-powered, designer-grade portfolios — instantly. No design skills required.',
    url: 'https://portfoliox.dev',
    siteName: 'PortfolioX',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PortfolioX - AI Portfolio Builder',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PortfolioX — Build your portfolio in seconds',
    description: 'AI-powered, designer-grade portfolios — instantly.',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "PortfolioX",
              "description": "AI-powered portfolio builder that creates designer-grade portfolios instantly",
              "url": "https://portfoliox.dev",
              "applicationCategory": "WebApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-background-dark text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}