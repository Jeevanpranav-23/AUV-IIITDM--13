"use client"

import type React from "react"
import { useState } from "react"
import ScrollAnimation from "react-animate-on-scroll"

const AUVV3 = () => {
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
    dimensions: "49.2 x 45.4 x 40 (cm)",
    weight: "11 kg",
    dofs: "5 (Heave, Surge, Sway, Roll, Yaw)",
    sensors: "3 cm resolution analog water pressure sensor, BNO555 9-DoF IMU (Internal measurment Unit), OAK-D Camera",
    powerSource: "Lithium Polymer battery (10400 mAh)",
    thrusters: "BlueRobotics T100 Thrusters (4), BlueRobotics T200 Thrusters (2)",
    processor: "NVIDIA Jetson Nano, STM32 Microcontroller",
  }

  const features = [
    {
      title: "Advanced Design",
      description:
        "The design aspect of this vehicle has a slightly marked departure from the previous two vehicles and it houses two hulls.",
    },
    {
      title: "Enhanced Control",
      description:
        "The vehicle has 5 DOFs viz. Heave, Surge, Sway, Yaw and Roll and it is controlled using 2 BlueRobotics T200 and 4 BlueRobotics T100 thrusters, arranged in a vectored configuration.",
    },
    {
      title: "Compact Build",
      description: "The vehicle weighs 11 kgs and its dimensions are 49.2 x 45.4 x 40 cm.",
    },
    {
      title: "Dual Hull System",
      description:
        'The vehicle has an open frame structure manufactured using acrylic of 5 mm thickness and it has two hulls, one 6" acrylic hull, and one 4" acrylic hull.',
    },
    {
      title: "Advanced Vision",
      description:
        "This vehicle contains an Oak-D-series-3 camera, a 3D camera which facilitates obstacle and props detection along with path planning for performing various autonomy tasks.",
    },
  ]

  return (
    <div className="vehicle-display">
      <ScrollAnimation animateIn="fadeIn" className="vehicle-image-container">
        <img
          src="https://github.com/Jeevanpranav-23/Auviiitdm-6/blob/main/public/auv-v3-hd.jpg?raw=true"
          alt="AUV Version 3.0"
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

export default AUVV3
