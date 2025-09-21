"use client"

import { useState, useEffect } from "react"
import ScrollAnimation from "react-animate-on-scroll"
import "../styles/components/achievement.css"
import BackgroundVideo from "./background-video"

const Achievement = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const [progressValues, setProgressValues] = useState<{ [key: number]: number }>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => [...prev, cardIndex])

            setTimeout(() => {
              setProgressValues((prev) => ({ ...prev, [cardIndex]: 100 }))
            }, cardIndex * 200)
          }
        })
      },
      { threshold: 0.3 },
    )

    const cards = document.querySelectorAll(".achievement-card")
    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const achievements = [
    // Your achievements data remains the same...
    {
      type: "competition",
      title: "SAUVC 2019",
      description: "17th Place in Singapore AUV Challenge",
      details:
        "Participated in the Singapore Autonomous Underwater Vehicle Challenge (SAUVC) 2019 and secured 17th position among international teams.",
      videoUrl: "https://www.youtube.com/embed/c58AMctLp04?playlist=c58AMctLp04&loop=1",
      icon: "🌊",
      year: 2019,
      progress: 85,
    },
    {
      type: "competition",
      title: "SAUVC 2020",
      description: "Singapore AUV Challenge Participation",
      details:
        "Successfully participated in SAUVC 2020, demonstrating our improved autonomous underwater vehicle capabilities.",
      videoUrl: "https://www.youtube.com/embed/Wj7A49-mySk?playlist=NsHS6F2bjII&loop=1",
      icon: "🌊",
      year: 2020,
      progress: 90,
    },
    {
      type: "competition",
      title: "SAUVC 2022",
      description: "Singapore AUV Challenge Latest Participation",
      details: "Represented our institution in SAUVC 2022 with advanced autonomous features and improved design.",
      videoUrl: "https://www.youtube.com/embed/c58AMctLp04?playlist=c58AMctLp04&loop=1",
      icon: "🌊",
      year: 2022,
      progress: 95,
    },
    {
      type: "conference",
      title: "Global Oceans 2021",
      description: "Development of AUV for SAUVC During COVID-19",
      authors: "Mayank Navneet Mehta, Subash Mylraj, Vishva Nilesh Bhate",
      conference: "Global OCEANS 2021, San Diego – Porto, Sept 20-23, 2021",
      videoUrl: "https://www.youtube.com/embed/c58AMctLp04?playlist=c58AMctLp04&loop=1",
      icon: "🎓",
      progress: 88,
    },
    {
      type: "research",
      title: "Research Paper Publication",
      description: "Development of AUV for SAUVC During COVID-19",
      authors: "Mayank Navneet Mehta, Subash Mylraj, Vishva Nilesh Bhate",
      details:
        "This paper describes the design, implementation, and testing of control and vision algorithms for an AUV in virtual and real environments. Hardware design and the software stack of the vec6 underwater vehicle are described in this paper.",
      link: "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9705822",
      icon: "📚",
      progress: 92,
    },
    {
      type: "research",
      title: "Bio-Inspired Design Research",
      description: "Design and Performance Analysis of Bio-Inspired Remotely Operated Robot",
      authors: "Sukesh J R, Ruthwik Dasyam, Muthu S, Vishnuvardhan Iyengar",
      details:
        "Underwater robot designs are bio-inspired by the behavior and physiology of aquatic animals to improve their maneuverability and energy efficiency. This paper discusses the MPF bio-inspired robot made for the MATE ROV challenge.",
      link: "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9705822",
      icon: "🤖",
      progress: 87,
    },
    {
      type: "research",
      title: "Research Paper Publication",
      description: "Analysis of Underwater Coral Reef Health Using Neural Networks",
      authors: "Venkata Madhav, T. Vyshnav, K. and Soorya, R.",
      details:
        "This study showcases the potential of deep neural networks by implementing the YOLOv8 CNN model for automated coral health assessment. The model classifies coral into three categories: healthy, partially bleached, and completely bleached, achieving an accuracy of 78% in validation data.",
      conference: "Presented at IEEE OCEANS 2024 Conference, Singapore",
      link: "https://doi.org/10.1109/OCEANS51537.2024.10682334",
      icon: "🔬",
      progress: 94,
    },
    {
      type: "competition",
      title: "MATE ROV 2022",
      description: "Global Competition Participation",
      details:
        "Represented our country at MATE ROV 2022, focusing on the United Nations Decade of Ocean Science for Sustainable Development. Created a working machine that embraces environmental, social, and governance efforts.",
      videoUrl: "https://www.youtube.com/embed/u3nHWZGkxV8",
      icon: "🏆",
      logo: "https://github.com/auviiitdm/auviiitdm.github.io/blob/main/src/assets/logo/materov-logo.png?raw=true",
      progress: 91,
    },
  ]

  const groupedAchievements = {
    competition: achievements.filter((a) => a.type === "competition"),
    research: achievements.filter((a) => a.type === "research" || a.type === "conference"),
  }

  return (
    <section className="achievements-section relative overflow-hidden" id="achievements">
      <BackgroundVideo />

      <div className="absolute inset-0 bg-black/80"></div>

      <div className="achievements-container relative z-10">
        <ScrollAnimation animateIn="bounceInDown" duration={1}>
          <h2 className="section-title text-white">Achievements</h2>
        </ScrollAnimation>

        <div className="achievements-categories">
          <div className="category">
            <ScrollAnimation animateIn="slideInLeft" delay={300}>
              <h3 className="category-title text-white">Competitions</h3>
            </ScrollAnimation>
            <div className="achievements-grid">
              {groupedAchievements.competition.map((achievement, index) => (
                <div
                  key={index}
                  data-index={index}
                  className={`achievement-card text-gray-300 transform transition-all duration-700 hover:scale-105 hover:rotate-1 hover:shadow-2xl ${
                    visibleCards.includes(index) ? "animate-bounceIn" : "opacity-0 translate-y-10"
                  }`}
                  style={{
                    animationDelay: `${300 + index * 200}ms`,
                    background: "linear-gradient(135deg, #1f2937, #111827)",
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <div className="achievement-progress-bar">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${progressValues[index] || 0}%`,
                        background: "linear-gradient(90deg, #1e40af, #3b82f6)",
                        height: "4px",
                        transition: "width 1s ease-out",
                        borderRadius: "2px",
                      }}
                    />
                  </div>

                  <div className="achievement-header">
                    {achievement.logo ? (
                      <img
                        src={achievement.logo || "/placeholder.svg"}
                        alt={achievement.title}
                        className="achievement-logo transform hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="achievement-icon text-4xl animate-bounce">{achievement.icon}</div>
                    )}
                    {achievement.year && (
                      <div className="achievement-year bg-blue-900/70 text-blue-300 px-3 py-1 rounded-full text-sm font-semibold">
                        {achievement.year}
                      </div>
                    )}
                  </div>
                  <div className="achievement-content">
                    <h3 className="achievement-title text-white hover:text-blue-400 transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    <p className="achievement-description">{achievement.description}</p>
                    {achievement.details && <p className="achievement-details">{achievement.details}</p>}
                    {achievement.videoUrl && (
                      <div className="video-wrapper transform hover:scale-105 transition-transform duration-300">
                        <iframe
                          title={achievement.title}
                          src={achievement.videoUrl}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="category">
            <ScrollAnimation animateIn="slideInRight" delay={600}>
              <h3 className="category-title text-white">Research & Publications</h3>
            </ScrollAnimation>
            <div className="achievements-grid">
              {groupedAchievements.research.map((achievement, index) => {
                const globalIndex = groupedAchievements.competition.length + index
                return (
                  <div
                    key={index}
                    data-index={globalIndex}
                    className={`achievement-card text-gray-300 transform transition-all duration-700 hover:scale-105 hover:-rotate-1 hover:shadow-2xl ${
                      visibleCards.includes(globalIndex) ? "animate-bounceIn" : "opacity-0 translate-y-10"
                    }`}
                    style={{
                      animationDelay: `${600 + index * 200}ms`,
                      background: "linear-gradient(135deg, #1f2937, #111827)",
                      borderRadius: "20px",
                      overflow: "hidden",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    <div className="achievement-progress-bar">
                      <div
                        className="progress-fill"
                        style={{
                          width: `${progressValues[globalIndex] || 0}%`,
                          background: "linear-gradient(90deg, #059669, #10b981)",
                          height: "4px",
                          transition: "width 1s ease-out",
                          borderRadius: "2px",
                        }}
                      />
                    </div>

                    <div className="achievement-icon text-4xl animate-pulse mb-4">{achievement.icon}</div>
                    <div className="achievement-content">
                      <h3 className="achievement-title text-white hover:text-green-400 transition-colors duration-300">
                        {achievement.title}
                      </h3>
                      <p className="achievement-description">{achievement.description}</p>
                      {achievement.authors && <p className="achievement-authors">By {achievement.authors}</p>}
                      {achievement.conference && <p className="achievement-conference">{achievement.conference}</p>}
                      {achievement.details && <p className="achievement-details">{achievement.details}</p>}
                      <div className="achievement-media">
                        {achievement.videoUrl && (
                          <div className="video-wrapper transform hover:scale-105 transition-transform duration-300">
                            <iframe
                              title={achievement.title}
                              src={achievement.videoUrl}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>
                          </div>
                        )}
                        {achievement.link && (
                          <a
                            href={achievement.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="achievement-link transform hover:scale-105 hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full inline-block mt-4"
                          >
                            View Research Paper
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievement
