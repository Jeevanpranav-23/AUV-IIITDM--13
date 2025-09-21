"use client"

import { useState, useEffect, useRef } from "react"
import { Code, Award, Rocket, Users } from "lucide-react"
import ModelViewer from "./model-viewer"

const stats = [
  { icon: <Rocket className="h-6 w-6 text-blue-600" />, value: "3", label: "Vehicles Built" },
  { icon: <Users className="h-6 w-6 text-blue-600" />, value: "30+", label: "Team Members" },
  { icon: <Code className="h-6 w-6 text-blue-600" />, value: "9000+", label: "Lines of Code" },
  { icon: <Award className="h-6 w-6 text-blue-600" />, value: "Top 20", label: "SAUVC Ranking" },
  { icon: <Code className="h-6 w-6 text-blue-600" />, value: "2019", label: "Established" },
]

const About = () => {
  const [activeTab, setActiveTab] = useState("mission")
  const [isVisible, setIsVisible] = useState(false)
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0))
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        const numericValue = Number.parseInt(stat.value.replace(/\D/g, "")) || 0
        let current = 0
        const increment = numericValue / 50
        const timer = setInterval(() => {
          current += increment
          if (current >= numericValue) {
            current = numericValue
            clearInterval(timer)
          }
          setAnimatedValues((prev) => {
            const newValues = [...prev]
            newValues[index] = Math.floor(current)
            return newValues
          })
        }, 30)
      })
    }
  }, [isVisible])

  return (
    <section id="about" className="relative py-20 bg-black overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`mb-10 text-center transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h2
            className="text-3xl font-bold mb-4 text-blue-800 md:text-4xl shadow-none"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0)" }}
          >
            About AUV IIITDM
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-blue-700" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0)" }}>
            An interdisciplinary society dedicated to designing and building underwater systems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl bg-black hover:shadow-2xl transition-shadow duration-300 h-96">
              <ModelViewer />
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-500 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            <div className="mb-6">
              <div className="flex space-x-1 border-b border-slate-200">
                <button
                  className={`py-2 px-4 font-medium text-sm transition-all duration-300 hover:scale-105 ${
                    activeTab === "mission"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                  onClick={() => setActiveTab("mission")}
                >
                  Our Mission
                </button>
                <button
                  className={`py-2 px-4 font-medium text-sm transition-all duration-300 hover:scale-105 ${
                    activeTab === "motto"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                  onClick={() => setActiveTab("motto")}
                >
                  Our Vision
                </button>
                <button
                  className={`py-2 px-4 font-medium text-sm transition-all duration-300 hover:scale-105 ${
                    activeTab === "values"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                  onClick={() => setActiveTab("values")}
                >
                  Our Values
                </button>
              </div>

              <div className="mt-6">
                {activeTab === "mission" && (
                  <div className="animate-fadeIn">
                    <h3 className="text-xl font-semibold mb-3 flex items-center text-slate-900">
                      <Rocket className="h-5 w-5 text-blue-600 mr-2" />
                      Our Mission
                    </h3>
                    <p className="text-slate-600 mb-4">
                      A group of undergraduate engineering students collaborating in an interdisciplinary society
                      dedicated to designing and building underwater systems and vehicles for participation in diverse
                      underwater robotics competitions.
                    </p>
                    <p className="text-slate-600">
                      With a profound understanding of mechanical, electronics, and software engineering, we exploit our
                      theoretical knowledge to create underwater vehicles capable of exploring the expansive ocean
                      depths.
                    </p>
                  </div>
                )}

                {activeTab === "motto" && (
                  <div className="animate-fadeIn">
                    <h3 className="text-xl font-semibold mb-3 flex items-center text-slate-900">
                      <Award className="h-5 w-5 text-blue-600 mr-2" />
                      Our Vision
                    </h3>
                    <p className="text-slate-600 mb-4">
                      To be a leading force in underwater robotics innovation, pushing the boundaries of autonomous
                      underwater vehicle technology.
                    </p>
                    <p className="text-slate-600">
                      We aspire to contribute meaningfully to marine exploration, environmental monitoring, and
                      underwater research through cutting-edge AUV systems.
                    </p>
                  </div>
                )}

                {activeTab === "values" && (
                  <div className="animate-fadeIn">
                    <h3 className="text-xl font-semibold mb-3 flex items-center text-slate-900">
                      <Users className="h-5 w-5 text-blue-600 mr-2" />
                      Our Values
                    </h3>
                    <ul className="text-slate-600 space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>
                          <strong className="text-slate-900">Innovation:</strong> Pushing the boundaries of underwater
                          robotics technology
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>
                          <strong className="text-slate-900">Collaboration:</strong> Interdisciplinary teamwork across
                          engineering domains
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>
                          <strong className="text-slate-900">Excellence:</strong> Striving for the highest standards in
                          AUV development
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>
                          <strong className="text-slate-900">Sustainability:</strong> Contributing to marine
                          conservation and research
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>
                          <strong className="text-slate-900">Learning:</strong> Continuous skill development and
                          knowledge sharing
                        </span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`bg-black p-4 rounded-lg shadow-sm text-center transform transition-all duration-500 hover:scale-110 hover:shadow-lg border border-slate-200 hover:border-blue-300 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${800 + index * 100}ms`,
                    boxShadow: isVisible ? "0 10px 25px rgba(30, 64, 175, 0.1)" : "0 1px 3px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div className="flex justify-center mb-2 transform hover:rotate-12 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {stat.value.includes("+")
                      ? `${animatedValues[index]}+`
                      : stat.value.includes("Top")
                        ? stat.value
                        : animatedValues[index]}
                  </div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
