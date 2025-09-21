"use client"

import type React from "react"
import { useState, useEffect } from "react"
import ScrollAnimation from "react-animate-on-scroll"
import AUVV1 from "./auv-v1"
import AUVV2 from "./auv-v2"
import AUVV3 from "./auv-v3"
import BackgroundVideo from "./background-video"
import "../styles/components/vehicles.css"

const Vehicles = () => {
  const [view, setView] = useState("auv3")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const section = document.getElementById("vehicles")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const createEnhancedBubbleEffect = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    for (let i = 0; i < 12; i++) {
      const bubble = document.createElement("div")
      bubble.style.position = "absolute"
      bubble.style.left = x + "px"
      bubble.style.top = y + "px"
      bubble.style.width = Math.random() * 8 + 4 + "px"
      bubble.style.height = bubble.style.width
      bubble.style.backgroundColor = "#3b82f6" // Brighter blue
      bubble.style.borderRadius = "50%"
      bubble.style.pointerEvents = "none"
      bubble.style.zIndex = "1000"
      bubble.style.boxShadow = "0 0 10px rgba(59, 130, 246, 0.5)"

      const angle = (i / 12) * Math.PI * 2
      const distance = 40 + Math.random() * 30
      const endX = x + Math.cos(angle) * distance
      const endY = y + Math.sin(angle) * distance

      bubble.animate(
        [
          { transform: "translate(0, 0) scale(1)", opacity: 1 },
          { transform: `translate(${endX - x}px, ${endY - y}px) scale(0)`, opacity: 0 },
        ],
        {
          duration: 800 + Math.random() * 400,
          easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        },
      )

      e.currentTarget.appendChild(bubble)
      setTimeout(() => bubble.remove(), 1200)
    }
  }

  return (
    <section className="vehicles-section relative overflow-hidden" id="vehicles">
      <BackgroundVideo />

      <div className="absolute inset-0 bg-black/80"></div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-200 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="vehicles-container relative z-10">
        <ScrollAnimation animateIn="fadeInUp" duration={1} delay={200}>
          <h2 className="vehicles-title text-white">Our Vehicles</h2>

          <div className="vehicles-content">
            <nav className="vehicle-nav">
              <div className="vehicle-nav-list flex flex-col gap-6 py-8">
                {[
                  { key: "auv3", icon: "🚀", label: "AUV V3.0" },
                  { key: "auv2", icon: "🛥️", label: "AUV V2.0" },
                  { key: "auv1", icon: "🌊", label: "AUV V1.0" },
                ].map((item, index) => (
                  <ScrollAnimation key={item.key} animateIn="slideInLeft" delay={300 + index * 150} duration={0.8}>
                    <div
                      className={`vehicle-nav-item transform transition-all duration-500 hover:scale-110 hover:rotate-1 hover:shadow-2xl ${
                        view === item.key ? "active scale-105" : ""
                      }`}
                      onClick={(e) => {
                        setView(item.key)
                        createEnhancedBubbleEffect(e)
                      }}
                      style={{
                        position: "relative",
                        background:
                          view === item.key
                            ? "linear-gradient(135deg, #1e40af, #3b82f6)"
                            : "linear-gradient(135deg, #374151, #1f2937)",
                        borderRadius: "15px",
                        padding: "20px",
                        cursor: "pointer",
                        boxShadow:
                          view === item.key ? "0 10px 30px rgba(30, 64, 175, 0.3)" : "0 5px 15px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <span className="nav-icon text-2xl mr-3 animate-bounce">{item.icon}</span>
                      <span className={`font-semibold ${view === item.key ? "text-white" : "text-white"}`}>
                        {item.label}
                      </span>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </nav>

            <div className="vehicle-content">
              <div
                className="transform transition-all duration-700 ease-out"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0) scale(1)" : "translateY(50px) scale(0.9)",
                }}
              >
                {view === "auv3" && (
                  <div className="animate-slideInRight">
                    <AUVV3 />
                  </div>
                )}
                {view === "auv2" && (
                  <div className="animate-slideInRight">
                    <AUVV2 />
                  </div>
                )}
                {view === "auv1" && (
                  <div className="animate-slideInRight">
                    <AUVV1 />
                  </div>
                )}
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

export default Vehicles
