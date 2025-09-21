"use client"
import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"
import BackgroundVideo from "./background-video"
import ParticlesContainer from "./particles-container"

const Hero = () => {
  const [typedText, setTypedText] = useState("")
  const fullText = "Autonomous Underwater Vehicle Society"

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.substring(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 70)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-blue-700 dark:bg-gray-900">
      <BackgroundVideo />

      <div className="absolute inset-0 z-5">
        <ParticlesContainer />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-800/80 to-blue-900/80 dark:from-gray-900/90 dark:via-gray-800/90 dark:to-black/90 z-2"></div>
      <div className="absolute inset-0 bg-black/30 dark:bg-black/60 z-3"></div>

      <div className="absolute inset-0 opacity-20 z-10">
        <div className="absolute w-full h-full grid grid-cols-12 gap-4">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className="rounded-full h-2 w-2 animate-pulse bg-blue-400 dark:bg-blue-300"
              style={{
                position: "absolute",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 7}s`,
                transform: `translateY(${Math.sin(Date.now() * 0.001 + i) * 20}px)`,
              }}
            />
          ))}
        </div>
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`bubble-${i}`}
            className="absolute rounded-full bg-white/10 dark:bg-white/20 animate-bounce"
            style={{
              width: `${10 + Math.random() * 20}px`,
              height: `${10 + Math.random() * 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col items-center text-center">
          <div
            className="inline-flex items-center justify-center rounded-full mb-6 w-[70px] h-[70px] relative animate-bounce bg-blue-700 dark:bg-gray-800"
            style={{
              animation: "bounce 2s infinite, float 6s ease-in-out infinite",
            }}
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/new-logo%281%29%281%29%281%29-H0Mr0Trz05JoEXzReMkJcgxtnuODZ7.png"
              width="110"
              height="110"
              className="rounded-full"
              style={{ filter: "brightness(0) invert(1)" }}
              alt="AUV Logo"
            />
          </div>

          <h1
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight animate-fade-in-up text-white"
            style={{
              textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
              animationDelay: "0.5s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            AUV IIITDM KANCHEEPURAM
          </h1>

          <div className="h-8 mb-6">
            <p
              className="text-xl md:text-2xl font-light text-white"
              style={{
                textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
              }}
            >
              {typedText}
            </p>
          </div>

          <p
            className="text-lg max-w-2xl mb-8 animate-fade-in-up text-white"
            style={{
              textShadow: "1px 1px 2px rgba(0,0,0,0.6)",
              animationDelay: "1s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            A group of undergraduate engineering students collaborating in an interdisciplinary society dedicated to
            designing and building underwater systems and vehicles for participation in diverse underwater robotics
            competitions.
          </p>

          <div
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up"
            style={{ animationDelay: "1.5s", opacity: 0, animationFillMode: "forwards" }}
          >
            <a
              href="#about"
              className="inline-flex items-center justify-center font-medium transition-all duration-300 rounded-md text-base px-5 py-2.5 gap-2 group hover:scale-105 hover:shadow-lg animate-pulse bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white"
              style={{
                animationDuration: "3s",
              }}
            >
              Learn More
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center font-medium transition-all duration-300 rounded-md text-base px-5 py-2.5 gap-2 hover:scale-105 hover:shadow-lg border-2 border-blue-700 bg-white text-blue-700 hover:bg-blue-50 dark:border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              Join Our Team
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path
            className="fill-black dark:fill-black"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,176C384,171,480,181,576,197.3C672,213,768,235,864,229.3C960,224,1056,192,1152,170.7C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  )
}

export default Hero
