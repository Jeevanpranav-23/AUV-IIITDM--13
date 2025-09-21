"use client"

import type React from "react"
import { useRef, useState } from "react"
import BackgroundVideo from "./background-video"
import ScrollAnimation from "react-animate-on-scroll"
import "../styles/components/Contact.css"

// --- FORM COMPONENT ---
const Form = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)
  const [loading, setLoading] = useState(false)
  const [notification, setNotification] = useState<{ type: string; message: string } | null>(null)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const createEnhancedBubbleEffect = (event: React.MouseEvent) => {
    // This effect is already dark-theme friendly, no changes needed here.
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    for (let i = 0; i < 12; i++) {
      const bubble = document.createElement("div")
      bubble.style.position = "absolute"
      bubble.style.left = `${x}px`
      bubble.style.top = `${y}px`
      bubble.style.width = Math.random() * 10 + 6 + "px"
      bubble.style.height = bubble.style.width
      bubble.style.backgroundColor = "#3b82f6" // Using a brighter blue for better visibility
      bubble.style.borderRadius = "50%"
      bubble.style.pointerEvents = "none"
      bubble.style.zIndex = "10000"
      bubble.style.opacity = "0.8"
      bubble.style.boxShadow = "0 0 15px rgba(59, 130, 246, 0.6)"
      const angle = (i / 12) * Math.PI * 2
      const distance = 60 + Math.random() * 40
      const endX = x + Math.cos(angle) * distance
      const endY = y + Math.sin(angle) * distance
      event.currentTarget.appendChild(bubble)
      bubble.animate(
        [
          { transform: `translate(0, 0) scale(1)`, opacity: "0.8" },
          { transform: `translate(${endX - x}px, ${endY - y}px) scale(0)`, opacity: "0" },
        ],
        {
          duration: 800 + Math.random() * 400,
          easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        },
      ).onfinish = () => bubble.remove()
    }
  }

  const sendForm = (event: React.FormEvent) => {
    event.preventDefault()
    const email = emailRef.current?.value
    const message = messageRef.current?.value

    if (!email || !message) {
      setNotification({ type: "error", message: "Please fill in all fields" })
      setTimeout(() => setNotification(null), 4000)
      return
    }

    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setNotification({ type: "success", message: "Message sent successfully! We'll get back to you soon." })
      if (emailRef.current) emailRef.current.value = ""
      if (messageRef.current) messageRef.current.value = ""
      setTimeout(() => setNotification(null), 4000)
    }, 2000)
  }

  return (
    <div className="contact-form-container">
      {loading && (
        <div className="loading-overlay animate-fadeIn">
          <div className="spinner animate-spin-slow"></div>
          {/* --- KEY CHANGE: Updated loading text color for visibility --- */}
          <p className="mt-4 text-blue-400 font-semibold animate-pulse">Sending your message...</p>
        </div>
      )}
      {notification && (
        <div
          className={`notification ${notification.type} animate-slideInDown transform transition-all duration-500`}
          style={{
            background:
              notification.type === "success"
                ? "linear-gradient(135deg, #10b981, #059669)"
                : "linear-gradient(135deg, #ef4444, #dc2626)",
            borderRadius: "15px",
            padding: "15px 20px",
            color: "white",
            fontWeight: "600",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
          }}
        >
          {notification.message}
        </div>
      )}
      <ScrollAnimation animateIn="slideInUp" duration={1}>
        {/* --- KEY CHANGE: Added dark background and padding to the form itself --- */}
        <form className="contact-form bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8" onSubmit={sendForm}>
          <div className="form-header animate-fadeIn">
            {/* --- KEY CHANGE: Updated form header text colors --- */}
            <h3 className="text-2xl font-bold text-white mb-2">Get in Touch</h3>
            <p className="text-gray-300">Have a question or want to collaborate? Drop us a message!</p>
          </div>

          <div className="form-group">
            <input
              type="email"
              ref={emailRef}
              placeholder="Your email address"
              // --- KEY CHANGE: Added text and placeholder colors ---
              className={`form-input text-white placeholder-gray-400 transform transition-all duration-300 ${
                focusedField === "email" ? "scale-105 shadow-lg border-blue-500" : ""
              }`}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              style={{
                // --- KEY CHANGE: Updated input styles for dark theme ---
                borderRadius: "12px",
                border: "2px solid #374151", // gray-700
                padding: "15px",
                fontSize: "16px",
                background: focusedField === "email" ? "linear-gradient(135deg, #1f2937, #111827)" : "#111827", // gray-800, gray-900
              }}
            />
          </div>

          <div className="form-group">
            <textarea
              ref={messageRef}
              placeholder="Your message"
              // --- KEY CHANGE: Added text and placeholder colors ---
              className={`form-input text-white placeholder-gray-400 transform transition-all duration-300 ${
                focusedField === "message" ? "scale-105 shadow-lg border-blue-500" : ""
              }`}
              rows={4}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
              style={{
                // --- KEY CHANGE: Updated textarea styles for dark theme ---
                borderRadius: "12px",
                border: "2px solid #374151", // gray-700
                padding: "15px",
                fontSize: "16px",
                background: focusedField === "message" ? "linear-gradient(135deg, #1f2937, #111827)" : "#111827", // gray-800, gray-900
                resize: "vertical",
              }}
            />
          </div>

          {/* The submit button style works well on a dark theme already, no changes needed */}
          <button
            type="submit"
            className="w-full relative overflow-hidden rounded-xl p-4 text-base font-semibold cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-105 hover:-translate-y-1"
            onClick={createEnhancedBubbleEffect}
            style={{
              background: "linear-gradient(135deg, #1e40af, #3b82f6)",
              color: "white",
              border: "none",
              boxShadow: "0 10px 30px rgba(30, 64, 175, 0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, #1d4ed8, #2563eb)"
              e.currentTarget.style.boxShadow = "0 15px 40px rgba(30, 64, 175, 0.4)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, #1e40af, #3b82f6)"
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(30, 64, 175, 0.3)"
            }}
          >
            <span className="relative z-10">Send Message</span>
          </button>
        </form>
      </ScrollAnimation>
    </div>
  )
}

// --- CONTACTS COMPONENT ---
const Contacts = () => {
  const [mapZoom, setMapZoom] = useState(false)

  const createEnhancedBubbleEffect = (event: React.MouseEvent) => {
    // This effect is also dark-theme friendly, no changes needed.
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    for (let i = 0; i < 10; i++) {
      const bubble = document.createElement("div")
      bubble.style.position = "absolute"
      bubble.style.left = `${x}px`
      bubble.style.top = `${y}px`
      bubble.style.width = Math.random() * 8 + 4 + "px"
      bubble.style.height = bubble.style.width
      bubble.style.backgroundColor = "#3b82f6"
      bubble.style.borderRadius = "50%"
      bubble.style.pointerEvents = "none"
      bubble.style.zIndex = "10000"
      bubble.style.opacity = "0.8"
      bubble.style.boxShadow = "0 0 12px rgba(59, 130, 246, 0.5)"
      const angle = (i / 10) * Math.PI * 2
      const distance = 50 + Math.random() * 30
      const endX = x + Math.cos(angle) * distance
      const endY = y + Math.sin(angle) * distance
      event.currentTarget.appendChild(bubble)
      bubble.animate(
        [
          { transform: `translate(0, 0) scale(1)`, opacity: "0.8" },
          { transform: `translate(${endX - x}px, ${endY - y}px) scale(0)`, opacity: "0" },
        ],
        {
          duration: 700 + Math.random() * 300,
          easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        },
      ).onfinish = () => bubble.remove()
    }
  }

  return (
    <div className="contact relative overflow-hidden" id="contact">
      <BackgroundVideo />

      {/* --- KEY CHANGE: Replaced white background with semi-transparent black overlay --- */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="animate-fadeIn relative z-10">
        <div className="container">
          <ScrollAnimation animateIn="bounceInDown" duration={1}>
            <h2 className="title text-5xl md:text-6xl font-bold text-center mb-12 text-white">
              {/* --- KEY CHANGE: Replaced TextScramble with regular text --- */}
              Contact
            </h2>
          </ScrollAnimation>

          <div className="contact-grid">
            <ScrollAnimation animateIn="slideInLeft" duration={1} delay={300}>
              <div className="contact-info">
                <div
                  className={`map-container transform transition-all duration-700 cursor-pointer ${
                    mapZoom ? "scale-110" : "hover:scale-105"
                  }`}
                  onClick={() => setMapZoom(!mapZoom)}
                >
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/map%281%29%281%29%281%29-Wk5j2dIoGtsvcyraQEUY8JH9b3wxLu.png"
                    alt="AUV IIITDM location"
                    className="map-image rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 bg-blue-500 opacity-0 hover:opacity-10 transition-opacity duration-300 rounded-lg"></div>
                </div>

                <div className="contact-details space-y-6">
                  {/* --- KEY CHANGE: Updated email link text and hover styles --- */}
                  <a
                    href="mailto:auv.society@iiitdm.ac.in"
                    className="email-link relative text-gray-300 transform transition-all duration-300 hover:scale-105 hover:text-blue-400 block p-4 rounded-lg hover:bg-gray-800"
                    onClick={createEnhancedBubbleEffect}
                  >
                    <i className="fa fa-envelope mr-3 text-blue-500"></i>
                    auv.society@iiitdm.ac.in
                  </a>

                  {/* The social links already work well on a dark theme */}
                  <div className="social-links flex space-x-6 justify-center">
                    {[
                      { href: "https://www.instagram.com/auv_iiitdm/?hl=en", icon: "fa-instagram", color: "#E4405F" },
                      { href: "https://github.com/auv-iiitdm", icon: "fa-github", color: "#333" },
                      {
                        href: "https://www.linkedin.com/company/auv-iiitdm-kancheepuram/",
                        icon: "fa-linkedin",
                        color: "#0077B5",
                      },
                      {
                        href: "https://www.youtube.com/channel/UCFBFlcfjEGOUsuFfPC-62bg",
                        icon: "fa-youtube",
                        color: "#FF0000",
                      },
                    ].map((social, index) => (
                      <ScrollAnimation key={index} animateIn="bounceIn" delay={600 + index * 100}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative transform transition-all duration-300 hover:scale-125 hover:-translate-y-2 p-3 rounded-full hover:shadow-lg"
                          onClick={createEnhancedBubbleEffect}
                          style={{
                            background: `linear-gradient(135deg, ${social.color}20, ${social.color}10)`,
                            border: `2px solid ${social.color}30`,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = social.color
                            e.currentTarget.style.color = "white"
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = `linear-gradient(135deg, ${social.color}20, ${social.color}10)`
                            e.currentTarget.style.color = social.color
                          }}
                        >
                          <i className={`fa ${social.icon} text-xl`} style={{ color: social.color }}></i>
                        </a>
                      </ScrollAnimation>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn="slideInRight" duration={1} delay={600}>
              <div className="contact-form-wrapper">
                <Form />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
