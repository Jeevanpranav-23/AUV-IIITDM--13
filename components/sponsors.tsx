"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent } from "./ui/card"
import BackgroundVideo from "./background-video"
import ScrollAnimation from "react-animate-on-scroll"

const Sponsors = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const sponsorCategories = [
    {
      title: "Sponsored by",
      name: "IIITDM Kancheepuram",
      logo: "https://github.com/auviiitdm/auviiitdm.github.io/blob/main/src/assets/logo/ilogo.png?raw=true",
      url: "https://www.iiitdm.ac.in/",
      shortName: "IIITDMK",
    },
    {
      title: "Special Thanks",
      name: "Blue Robotics",
      logo: "https://github.com/auviiitdm/auviiitdm.github.io/blob/main/src/assets/logo/BlueRobotics__white-min.png?raw=true",
      url: "https://bluerobotics.com/",
    },
    {
      title: "Mentored by",
      name: "Defence Research and Development Organisation",
      logo: "https://github.com/auviiitdm/auviiitdm.github.io/blob/main/src/assets/logo/DRDO_RIC_Logo-min.png?raw=true",
      url: "https://www.drdo.gov.in/home",
      shortName: "DRDO",
      // --- KEY CHANGE: Added a flag for logos that need to be inverted on dark backgrounds ---
      invertOnDark: true,
    },
    {
      title: "Competition Partners",
      name: "SAUVC",
      logo: "https://github.com/auviiitdm/auviiitdm.github.io/blob/main/src/assets/logo/sauvclogo.png?raw=true",
      url: "https://sauvc.org/",
      invertOnDark: true, // SAUVC logo is also dark
    },
    {
      title: "Competition Partners",
      name: "MATE ROV",
      logo: "https://github.com/auviiitdm/auviiitdm.github.io/blob/main/src/assets/logo/materov-logo.png?raw=true",
      url: "https://www.marinetech.org/",
      invertOnDark: true, // MATE ROV logo is also dark
    },
    {
      title: "Past Sponsors",
      name: "SimScale",
      logo: "https://github.com/auviiitdm/auviiitdm.github.io/blob/main/src/assets/logo/SimScale_logo_Rev_White.png?raw=true",
      url: "https://www.simscale.com/",
    },
  ]

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % Math.ceil(sponsorCategories.length / 3))
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, sponsorCategories.length])

  const createRippleEffect = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const ripple = document.createElement("div")
    ripple.style.position = "absolute"
    ripple.style.left = x + "px"
    ripple.style.top = y + "px"
    ripple.style.width = "0"
    ripple.style.height = "0"
    // --- KEY CHANGE: Adjusted ripple color to be lighter ---
    ripple.style.backgroundColor = "rgba(59, 130, 246, 0.3)" // blue-500
    ripple.style.borderRadius = "50%"
    ripple.style.pointerEvents = "none"
    ripple.style.transform = "translate(-50%, -50%)"

    e.currentTarget.appendChild(ripple)

    ripple.animate(
      [
        { width: "0", height: "0", opacity: 1 },
        { width: "300px", height: "300px", opacity: 0 },
      ],
      {
        duration: 600,
        easing: "ease-out",
      },
    ).onfinish = () => ripple.remove()
  }

  return (
    <section
      id="sponsors"
      className="relative py-20 overflow-hidden"
      // --- KEY CHANGE: Removed inline white background style ---
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <BackgroundVideo />

      {/* --- KEY CHANGE: Replaced white background with a semi-transparent black overlay --- */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            // Blue particles already look good on a dark theme
            className="absolute w-1 h-1 bg-blue-300 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <ScrollAnimation animateIn="bounceInDown" duration={1}>
            {/* --- KEY CHANGE: Replaced TextScramble with regular text --- */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Sponsors</h2>
            {/* --- KEY CHANGE: Updated underline color --- */}
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full animate-pulse"></div>
          </ScrollAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {sponsorCategories.map((sponsor, index) => (
            <ScrollAnimation key={index} animateIn="zoomIn" delay={index * 150} duration={0.8}>
              <div className="text-center transform transition-all duration-500 hover:scale-105">
                {/* --- KEY CHANGE: Updated category title color --- */}
                <h3 className="text-lg font-medium text-gray-200 mb-4 animate-fadeIn">{sponsor.title}</h3>
                <a
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group relative overflow-hidden"
                  onClick={createRippleEffect}
                >
                  {/* --- KEY CHANGE: Updated card styling for dark theme --- */}
                  <Card className="bg-gray-800/50 backdrop-blur-md border-gray-700 hover:border-blue-500 transition-all duration-500 hover:transform hover:scale-110 hover:rotate-1 hover:bg-gray-700/60 hover:shadow-2xl relative overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex flex-col items-center space-y-4">
                        <div className="relative overflow-hidden rounded-lg">
                          <img
                            src={sponsor.logo || "/placeholder.svg"}
                            alt={`${sponsor.name} logo`}
                            className={`h-16 w-auto object-contain transition-all duration-500 transform group-hover:scale-110 ${
                              // --- KEY CHANGE: Conditionally invert dark logos to make them visible ---
                              sponsor.invertOnDark ? "filter invert" : "filter brightness-90 group-hover:brightness-110"
                            }`}
                          />
                        </div>
                        {/* --- KEY CHANGE: Updated sponsor name text color --- */}
                        <h4 className="text-gray-300 font-medium text-center group-hover:text-blue-400 transition-all duration-500 transform group-hover:scale-105">
                          {sponsor.shortName || sponsor.name}
                        </h4>
                      </div>
                    </CardContent>
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400 rounded-lg transition-all duration-500 opacity-0 group-hover:opacity-100 animate-pulse"></div>
                  </Card>
                </a>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <div className="mt-16 overflow-hidden">
          <div className="flex animate-scroll-infinite">
            {[...sponsorCategories, ...sponsorCategories].map((sponsor, index) => (
              <div
                key={index}
                // --- KEY CHANGE: Updated scrolling text color for better contrast ---
                className="flex-shrink-0 mx-8 text-blue-400 font-semibold text-lg opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                {sponsor.shortName || sponsor.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sponsors
