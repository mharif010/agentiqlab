import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Agentiq Lab - AI-Powered Workflow Automation',
  description: 'Automate operations, reduce manual work, and scale faster with Agentiq Lab - the intelligent workflow automation platform for modern businesses.',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://agentiqlab.com',
    title: 'Agentiq Lab - AI-Powered Workflow Automation',
    description: 'Automate operations, reduce manual work, and scale faster with Agentiq Lab',
    images: [
      {
        url: 'https://agentiqlab.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Agentiq Lab',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentiq Lab - AI-Powered Workflow Automation',
    description: 'Automate operations, reduce manual work, and scale faster',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0ea5e9" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
