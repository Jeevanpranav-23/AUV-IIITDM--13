"use client"

import { useState, useEffect } from "react"
import LightRays from "./LightRays"
import Particles from "./Particles"

interface LoadingScreenProps {
  onEnter?: () => void
}

export default function LoadingScreen({ onEnter }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [showWelcomeButton, setShowWelcomeButton] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setShowWelcomeButton(true), 300)
          return 100
        }
        return prev + Math.random() * 25
      })
    }, 50)

    return () => clearInterval(timer)
  }, [])

  const handleWelcomeClick = () => {
    if (onEnter) {
      onEnter()
    }
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center loading-screen">
      <div className="fixed inset-0 w-full h-full z-0">
        <div style={{ width: "100%", height: "600px", position: "relative" }}>
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
      </div>

      <div className="fixed inset-0 w-full h-full z-1">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={2.5}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Logo animation container */}
        <div className="relative w-[600px] h-[360px] flex items-center justify-center mb-12 logo-container">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/WhatsApp_Image_2025-09-08_at_00.48.06_0c6d1d3a-removebg-preview%281%29%281%29%281%29-mDDcRgq4vSUNp8Cqs6KCpqIIliOMK4.png"
            alt="AUV IIITDM Logo"
            className="absolute w-full h-full object-contain opacity-20"
            loading="eager"
          />

          <div
            className="absolute w-full h-full overflow-hidden"
            style={{
              clipPath: `inset(${100 - progress}% 0 0 0)`,
              transition: "clip-path 0.2s ease-out",
            }}
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/WhatsApp_Image_2025-09-08_at_00.48.06_0c6d1d3a-removebg-preview%281%29%281%29%281%29-mDDcRgq4vSUNp8Cqs6KCpqIIliOMK4.png"
              alt="AUV IIITDM Logo"
              className="w-full h-full object-contain"
              style={{
                filter: `brightness(0) saturate(100%) invert(19%) sepia(96%) saturate(1847%) hue-rotate(218deg) brightness(95%) contrast(95%)`,
              }}
              loading="eager"
            />
          </div>
        </div>

        {showWelcomeButton && (
          <button
            onClick={handleWelcomeClick}
            className="inline-flex items-center justify-center font-medium transition-all duration-300 rounded-md text-base px-8 py-3 gap-2 hover:scale-105 hover:shadow-lg border-2 border-blue-700 hover:bg-blue-50 dark:border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 welcome-button text-card bg-blue-700"
          >
            Welcome to AUV IIITDM
          </button>
        )}
      </div>

      <style jsx>{`
        .loading-screen {
          animation: fadeIn 0.3s ease-in;
        }
        
        .logo-container {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .welcome-button {
          animation: fadeInScale 0.5s ease-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        
        @keyframes fadeInScale {
          from { 
            opacity: 0;
            transform: scale(0.8);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  )
}
