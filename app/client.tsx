"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import { usePathname } from "next/navigation"
import LoadingScreen from "../components/loading-screen"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isLoading, setIsLoading] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    if (pathname === "/team") {
      setIsLoading(false)
    }
  }, [pathname])

  const handleEnterSite = () => {
    setIsLoading(false)
  }

  const shouldShowLoading = isLoading && pathname === "/"

  return (
    <div className={`font-sans ${inter.className}`}>
      {shouldShowLoading ? (
        <LoadingScreen onEnter={handleEnterSite} />
      ) : (
        <Suspense fallback={null}>{children}</Suspense>
      )}
      <style jsx global>{`
        .section-separator {
          height: 4px;
          background: linear-gradient(90deg, transparent 0%, #1e40af 20%, #1e40af 80%, transparent 100%);
          margin: 2rem 0;
          border-radius: 2px;
        }
        
        .section-container {
          position: relative;
          padding: 3rem 0;
        }
        
        .section-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80%;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, #1e40af 50%, transparent 100%);
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 2rem;
          position: relative;
        }
        
        .section-title {
          color: #1e40af;
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        
        .section-subtitle {
          color: #64748b;
          font-size: 1.1rem;
        }
      `}</style>
    </div>
  )
}
