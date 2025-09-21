"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(false) // This can still control the page theme

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 50)
      if (currentScrollY > lastScrollY && currentScrollY > 200 && Math.abs(currentScrollY - lastScrollY) > 10) {
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true)
      }
      setLastScrollY(currentScrollY)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    if (newTheme) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const smoothScrollTo = (targetId: string, event: React.MouseEvent) => {
    event.preventDefault()
    const target = document.querySelector(targetId)
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
    setIsMenuOpen(false)
  }

  const createBubbleEffect = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    for (let i = 0; i < 8; i++) {
      const bubble = document.createElement("div")
      bubble.style.position = "absolute";
      bubble.style.left = `${x}px`;
      bubble.style.top = `${y}px`;
      bubble.style.width = Math.random() * 6 + 3 + "px";
      bubble.style.height = bubble.style.width;
      // Changed bubble color to be more visible on black
      bubble.style.backgroundColor = "#60a5fa"; // A light blue
      bubble.style.borderRadius = "50%";
      bubble.style.pointerEvents = "none";
      bubble.style.zIndex = "1000";
      bubble.style.opacity = "0.8";
      const angle = (i / 8) * Math.PI * 2
      const distance = 30 + Math.random() * 20
      const endX = x + Math.cos(angle) * distance
      const endY = y + Math.sin(angle) * distance
      event.currentTarget.appendChild(bubble)
      bubble.animate(
        [
          { transform: `translate(0, 0) scale(1)`, opacity: "0.8" },
          { transform: `translate(${endX - x}px, ${endY - y}px) scale(0)`, opacity: "0" },
        ],
        {
          duration: 600 + Math.random() * 200,
          easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        },
      ).onfinish = () => bubble.remove()
    }
  }

  const navLinks = [
    { href: "#about", text: "About", type: "scroll" },
    { href: "#achievements", text: "Achievements", type: "scroll" },
    { href: "#vehicles", text: "Vehicles", type: "scroll" },
    { href: "#sponsors", text: "Sponsors", type: "scroll" },
    { href: "/team", text: "TeamHub", type: "navigate" },
    { href: "#contact", text: "Contact", type: "scroll" },
  ]

  return (
    <nav
      // --- KEY CHANGE: Updated background to be black and translucent ---
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md shadow-lg border-b border-gray-700"
          : "bg-black/80"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a
            href="#home"
            className="flex items-center space-x-3 transition-all duration-300 hover:scale-105"
            onClick={(e) => {
              createBubbleEffect(e)
              smoothScrollTo("#home", e)
            }}
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/WhatsApp_Image_2025-09-08_at_00.48.06_0c6d1d3a-removebg-preview%281%29%281%29%281%29-6FX6aLQa5N4BwsWUfoD6g30TVpqaXQ.png"
              alt="AUV IIITDM Logo"
              className="w-auto h-20"
            />
            {/* --- KEY CHANGE: Updated logo text color --- */}
            <span className="text-xl font-bold text-blue-300">AUV IIITDM</span>
          </a>

          <div className="flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              // --- KEY CHANGE: Updated button text/icon and hover colors ---
              className="p-2 rounded-lg transition-all duration-300 text-gray-300 hover:bg-gray-700"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            <button
              // --- KEY CHANGE: Updated button hover color ---
              className="md:hidden relative p-2 rounded-lg transition-all duration-300 hover:bg-gray-700"
              onClick={(e) => {
                createBubbleEffect(e)
                setIsMenuOpen(!isMenuOpen)
              }}
              aria-label="Toggle navigation menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                {/* --- KEY CHANGE: Updated hamburger icon color --- */}
                <span
                  className={`block w-5 h-0.5 bg-blue-300 transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-blue-300 transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-blue-300 transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
                  }`}
                />
              </div>
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) =>
              link.type === "navigate" ? (
                <Link
                  key={index}
                  href={link.href}
                  // --- KEY CHANGE: Updated link and hover colors ---
                  className="relative px-4 py-2 text-gray-300 font-medium rounded-lg transition-all duration-300 hover:text-white hover:bg-gray-700 group"
                  onClick={(e) => {
                    createBubbleEffect(e)
                    setIsMenuOpen(false)
                  }}
                >
                  {link.text}
                  <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-8 group-hover:left-1/2 transform -translate-x-1/2" />
                </Link>
              ) : (
                <a
                  key={index}
                  href={link.href}
                  // --- KEY CHANGE: Updated link and hover colors ---
                  className="relative px-4 py-2 text-gray-300 font-medium rounded-lg transition-all duration-300 hover:text-white hover:bg-gray-700 group"
                  onClick={(e) => {
                    createBubbleEffect(e)
                    smoothScrollTo(link.href, e)
                  }}
                >
                  {link.text}
                  <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-8 group-hover:left-1/2 transform -translate-x-1/2" />
                </a>
              ),
            )}
          </div>
        </div>

        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="pt-2 space-y-1">
            {navLinks.map((link, index) =>
              link.type === "navigate" ? (
                <Link
                  key={index}
                  href={link.href}
                  // --- KEY CHANGE: Updated mobile link and hover colors ---
                  className="block px-4 py-3 text-gray-300 font-medium rounded-lg transition-all duration-300 hover:text-white hover:bg-gray-700 transform hover:translate-x-2"
                  onClick={(e) => {
                    createBubbleEffect(e)
                    setIsMenuOpen(false)
                  }}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.text}
                </Link>
              ) : (
                <a
                  key={index}
                  href={link.href}
                  // --- KEY CHANGE: Updated mobile link and hover colors ---
                  className="block px-4 py-3 text-gray-300 font-medium rounded-lg transition-all duration-300 hover:text-white hover:bg-gray-700 transform hover:translate-x-2"
                  onClick={(e) => {
                    createBubbleEffect(e)
                    smoothScrollTo(link.href, e)
                  }}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.text}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
