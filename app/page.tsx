"use client"

import { useEffect, useState } from "react"
import Hero from "../components/hero"
import About from "../components/about"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import Achievement from "../components/achievement"
import Contacts from "../components/contacts"
import Vehicles from "../components/vehicles"
import Sponsors from "../components/sponsors"
import LightRays from "../components/LightRays"
import "../styles/navbar.css"

export default function Page() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)

  const createBubbleEffect = (event: MouseEvent | TouchEvent) => {
    const clientX = "touches" in event ? event.touches[0]?.clientX : event.clientX
    const clientY = "touches" in event ? event.touches[0]?.clientY : event.clientY

    if (clientX === undefined || clientY === undefined) return

    for (let i = 0; i < 8; i++) {
      const bubble = document.createElement("div")
      bubble.style.position = "fixed"
      bubble.style.left = `${clientX}px`
      bubble.style.top = `${clientY}px`
      bubble.style.width = "8px"
      bubble.style.height = "8px"
      bubble.style.backgroundColor = "#1e40af"
      bubble.style.borderRadius = "50%"
      bubble.style.pointerEvents = "none"
      bubble.style.zIndex = "10000"
      bubble.style.opacity = "0.8"

      const angle = (i / 8) * Math.PI * 2
      const distance = 50 + Math.random() * 30
      const endX = clientX + Math.cos(angle) * distance
      const endY = clientY + Math.sin(angle) * distance

      document.body.appendChild(bubble)

      bubble.animate(
        [
          { transform: `translate(-50%, -50%) scale(1)`, opacity: "0.8" },
          { transform: `translate(${endX - clientX - 4}px, ${endY - clientY - 4}px) scale(0)`, opacity: "0" },
        ],
        {
          duration: 600 + Math.random() * 200,
          easing: "ease-out",
        },
      ).onfinish = () => bubble.remove()
    }
  }

  useEffect(() => {
    setIsLoaded(true)

    const updateScrollProgress = () => {
      const scrollY = window.scrollY || 0
      const documentHeight = document.documentElement.scrollHeight || 1
      const windowHeight = window.innerHeight
      const progress = (scrollY / (documentHeight - windowHeight)) * 100
      setScrollProgress(progress)
      setShowScrollTop(scrollY > 300)
    }

    // Initial scroll position update
    updateScrollProgress()

    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")

          // Add staggered animations for child elements
          const children = entry.target.querySelectorAll(".animate-on-scroll-child")
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add("animate-slide-in-up")
            }, index * 100)
          })
        }
      })
    }, observerOptions)

    // Observe all main sections
    const sections = document.querySelectorAll("section, main > div")
    sections.forEach((section) => observer.observe(section))

    // Smooth scroll behavior for navigation links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    }

    // Add smooth scroll to all navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]')
    navLinks.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll)
    })

    // Parallax effect for background elements
    const handleParallax = () => {
      const scrolled = window.pageYOffset
      const parallaxElements = document.querySelectorAll(".parallax-element")

      parallaxElements.forEach((element) => {
        const speed = Number.parseFloat(element.getAttribute("data-speed") || "0.5")
        const yPos = -(scrolled * speed)
        ;(element as HTMLElement).style.transform = `translateY(${yPos}px)`
      })
    }

    const handleScroll = () => {
      updateScrollProgress()
      handleParallax()
    }

    document.addEventListener("click", createBubbleEffect)
    document.addEventListener("touchstart", createBubbleEffect)
    window.addEventListener("scroll", handleScroll)

    // Cleanup
    return () => {
      sections.forEach((section) => observer.unobserve(section))
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll)
      })
      document.removeEventListener("click", createBubbleEffect)
      document.removeEventListener("touchstart", createBubbleEffect)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      className={`min-h-screen bg-background text-foreground flex flex-col transition-all duration-1000 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
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
        className="opacity-40"
      />

      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 parallax-element"
            data-speed={Math.random() * 0.5 + 0.2}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <Navbar />

      <main className="flex-grow relative z-10">
        <div className="fade-in-on-scroll">
          <Hero />
        </div>

        <div className="fade-in-on-scroll">
          <About />
        </div>

        <div className="fade-in-on-scroll">
          <Achievement />
        </div>

        <div className="fade-in-on-scroll">
          <Vehicles />
        </div>

        <div className="fade-in-on-scroll">
          <Sponsors />
        </div>

        <div className="fade-in-on-scroll">
          <Contacts />
        </div>
      </main>

      <div className="fade-in-on-scroll">
        <Footer />
      </div>

      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 z-50 transition-all duration-300"
        style={{
          width: `${scrollProgress}%`,
        }}
      />

      <button
        className={`fixed bottom-8 right-8 w-12 h-12 bg-blue-600 dark:bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-700 dark:hover:bg-blue-400 hover:scale-110 transition-all duration-300 z-50 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        onClick={() => {
          if (typeof window !== "undefined") {
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
        }}
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  )
}
