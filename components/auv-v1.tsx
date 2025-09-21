"use client"

import type React from "react"
import { useState } from "react"
import ScrollAnimation from "react-animate-on-scroll"

const AUVV1 = () => {
  const [activeTab, setActiveTab] = useState("features")

  const createBubbleEffect = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    for (let i = 0; i < 8; i++) {
      const bubble = document.createElement("div")
      bubble.style.position = "absolute"
      bubble.style.left = x + "px"
      bubble.style.top = y + "px"
      bubble.style.width = "6px"
      bubble.style.height = "6px"
      bubble.style.backgroundColor = "#1e40af"
      bubble.style.borderRadius = "50%"
      bubble.style.pointerEvents = "none"
      bubble.style.zIndex = "1000"

      const angle = (i / 8) * Math.PI * 2
      const distance = 30 + Math.random() * 20
      const endX = x + Math.cos(angle) * distance
      const endY = y + Math.sin(angle) * distance

      bubble.animate(
        [
          { transform: "translate(0, 0) scale(1)", opacity: 1 },
          { transform: `translate(${endX - x}px, ${endY - y}px) scale(0)`, opacity: 0 },
        ],
        {
          duration: 600,
          easing: "ease-out",
        },
      )

      e.currentTarget.appendChild(bubble)
      setTimeout(() => bubble.remove(), 600)
    }
  }

  const specs = {
    dimensions: "80 x 55 x 40 (cm)",
    weight: "20 kg",
    dofs: "4 (Heave, Surge, Pitch, Yaw)",
    sensors: "Pressure sensor, 9-DoF IMU (Inertial Measurment Unit), Logitech C270 camera",
    powerSource: "Lithium Polymer battery (10400 mAh)",
    thrusters: "BlueRobotics T100 Thrusters (4)",
    processor: "Raspberry Pi 3, Arduino Mega",
  }

  const features = [
    {
      title: "First Generation Design",
      description: "Our inaugural AUV design featuring a robust and practical architecture for underwater operations.",
    },
    {
      title: "Four DOF Control",
      description: "Capable of Heave, Surge, Pitch, and Yaw movements, providing essential maneuverability underwater.",
    },
    {
      title: "Efficient Propulsion",
      description: "Equipped with four BlueRobotics T100 Thrusters for reliable and efficient underwater propulsion.",
    },
    {
      title: "Sensor Integration",
      description:
        "Features essential sensors including pressure sensor, IMU, and camera for basic navigation and vision capabilities.",
    },
    {
      title: "Dual Processing System",
      description: "Utilizes Raspberry Pi 3 for high-level processing and Arduino Mega for low-level control systems.",
    },
  ]

  return (
    <div className="vehicle-display">
      <ScrollAnimation animateIn="fadeIn" className="vehicle-image-container">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/auv-v1%281%29%281%29%281%29-wHuMh0mhdg3ulQIL7yPtmjjyDk2t54.png"
          alt="AUV Version 1.0"
          className="vehicle-image"
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" className="vehicle-details">
        <div className="vehicle-tabs">
          <div
            className={`vehicle-tab ${activeTab === "features" ? "active" : ""}`}
            onClick={(e) => {
              setActiveTab("features")
              createBubbleEffect(e)
            }}
            style={{ position: "relative" }}
          >
            Features
          </div>
          <div
            className={`vehicle-tab ${activeTab === "specs" ? "active" : ""}`}
            onClick={(e) => {
              setActiveTab("specs")
              createBubbleEffect(e)
            }}
            style={{ position: "relative" }}
          >
            Specifications
          </div>
        </div>

        <div className="vehicle-tab-content">
          {activeTab === "features" && (
            <div className="vehicle-features">
              {features.map((feature, index) => (
                <ScrollAnimation key={index} animateIn="fadeInUp" delay={index * 100} className="feature-item">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </ScrollAnimation>
              ))}
            </div>
          )}

          {activeTab === "specs" && (
            <table className="specs-table">
              <tbody>
                <tr>
                  <th>Dimensions</th>
                  <td>{specs.dimensions}</td>
                </tr>
                <tr>
                  <th>Weight</th>
                  <td>{specs.weight}</td>
                </tr>
                <tr>
                  <th>DOFs</th>
                  <td>{specs.dofs}</td>
                </tr>
                <tr>
                  <th>Sensors</th>
                  <td>{specs.sensors}</td>
                </tr>
                <tr>
                  <th>Power Source</th>
                  <td>{specs.powerSource}</td>
                </tr>
                <tr>
                  <th>Thrusters</th>
                  <td>{specs.thrusters}</td>
                </tr>
                <tr>
                  <th>Processor</th>
                  <td>{specs.processor}</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </ScrollAnimation>
    </div>
  )
}

export default AUVV1
