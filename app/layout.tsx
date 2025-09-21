import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ClientLayout from "./client"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AUV IIITDM Kancheepuram",
  description: "Autonomous Underwater Vehicle Society - IIITDM Kancheepuram",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
