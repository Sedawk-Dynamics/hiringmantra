import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "@/components/navbar"
import { WhatsAppButton } from "@/components/whatsapp-button"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hiring Mantra - Transform Your Workforce with AI",
  description: "Transparent HR solutions and executive hiring that power growth from startups to C-suite.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/favicon-32x32.jpg",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/favicon-16x16.jpg",
        type: "image/png",
        sizes: "16x16",
      },
    ],
    apple: "/apple-touch-icon.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans antialiased`}>
        <Navbar />
        {children}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
