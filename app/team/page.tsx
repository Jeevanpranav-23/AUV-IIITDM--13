"use client"

import { useState, useEffect } from "react"
import LightRays from "../../components/LightRays"

// NOTE: You will need to have FontAwesome imported in your project for the icons to render correctly.

// Placeholder for the Contacts component
const Contacts = () => {
  return (
    <section id="contact" className="hub-section">
      <h2 className="section-title">Contact Us</h2>
      <div className="text-center text-gray-400">
        <p>Contact information will be displayed here.</p>
        <p>Email us at auviitdm@gmail.com</p>
      </div>
    </section>
  )
}

const TeamData = {
  "2023-24": [
    {
      name: "Computers",
      members: [
        { name: "Soorya", imageSource: "/assets/auv_photos_team/2023/cs/Soorya.jpg", linkedInLink: "#" },
        { name: "Vibhav", imageSource: "/assets/auv_photos_team/2022/cs/Vibhav.jpg", linkedInLink: "#" },
        { name: "Roshan", imageSource: "/assets/auv_photos_team/2023/cs/Roshan.jpg", linkedInLink: "#" },
        { name: "Abhishek MJ", imageSource: "/assets/auv_photos_team/2023/cs/Abhishek MJ.jpg", linkedInLink: "#" },
        {
          name: "Venkata Madhav",
          imageSource: "/assets/auv_photos_team/2023/cs/Madhav.jpg",
          linkedInLink: "https://www.linkedin.com/in/madhav2133/",
        },
      ],
    },
    {
      name: "Electronics",
      members: [
        { name: "Nithin", imageSource: "/assets/auv_photos_team/2023/ec/Nithin.jpg" },
        { name: "Mrudula", imageSource: "/assets/auv_photos_team/2023/ec/Mrudula.jpg" },
        { name: "KS Rahul", imageSource: "/assets/auv_photos_team/2023/ec/ec21b1057.jpg" },
      ],
    },
    {
      name: "Mechanical",
      members: [
        { name: "Srikrishnan", imageSource: "/assets/auv_photos_team/2023/me/Srikrishnan.jpg" },
        { name: "Raghav", imageSource: "/assets/auv_photos_team/2023/me/Raghav.jpg" },
        { name: "Vishal", imageSource: "/assets/auv_photos_team/2023/me/Vishal.jpg" },
        { name: "Vaishnavi", imageSource: "/assets/auv_photos_team/2023/me/Vaishnavi.jpg" },
        { name: "Vijay Krishna RV", imageSource: "/assets/auv_photos_team/2023/me/Vijay.jpg" },
      ],
    },
    {
      name: "Brilliant Minds",
      members: [
        { name: "Jhansi", imageSource: "/assets/auv_photos_team/2022/non-tech/jhansi.jpg" },
        { name: "Yash", imageSource: "/assets/auv_photos_team/2022/non-tech/Yash.jpg" },
        { name: "Ruthraj", imageSource: "/assets/auv_photos_team/2022/non-tech/Ruthraj.jpg" },
        { name: "G L Ram krishna", imageSource: "/assets/auv_photos_team/2022/non-tech/GLRAMAKRISHNA.jpeg" },
      ],
    },
  ],
  "2021-22": [
    {
      name: "Computers",
      members: [
        {
          name: "Vyshnav K",
          imageSource: "/assets/auv_photos_team/latest/computers/Vyshnav.jpeg",
          linkedInLink: "https://www.linkedin.com/in/vyshnavk/",
        },
        {
          name: "Mohamed Akil K",
          imageSource: "/assets/auv_photos_team/latest/computers/MohamedAkilK.jpg",
          linkedInLink: "https://www.linkedin.com/in/mohamed-akil/",
        },
        {
          name: "Venkata Madhav",
          imageSource: "/assets/auv_photos_team/2022/cs/Madhav.jpg",
          linkedInLink: "https://www.linkedin.com/in/madhav2133/",
        },
      ],
    },
    {
      name: "Electronics",
      members: [
        {
          name: "Rahulkannan S",
          imageSource: "/assets/auv_photos_team/latest/electronics/Rahul.jpg",
          linkedInLink: "#",
        },
        {
          name: "Manuraj Vanamala",
          imageSource: "/assets/auv_photos_team/latest/electronics/Manuraj.jpg",
          linkedInLink: "https://www.linkedin.com/in/manurajvanamala/",
        },
        {
          name: "Ismail Mohamed",
          imageSource: "/assets/auv_photos_team/latest/electronics/MohamedIsmail.jpg",
          linkedInLink: "https://www.linkedin.com/in/mohamed-ismail-j-0ab340213/",
        },
      ],
    },
    {
      name: "Mechanical",
      members: [
        {
          name: "Sukesh JR",
          imageSource: "/assets/auv_photos_team/latest/mechanical/SukeshJR.jpg",
          linkedInLink: "https://www.linkedin.com/in/sukeshjr/",
        },
        {
          name: "Vishnuvardhan Iyengar",
          imageSource: "/assets/auv_photos_team/latest/mechanical/VishnuVardhanIyengar.jpg",
          linkedInLink: "https://www.linkedin.com/in/vishnuvardhan-iyengar-4a5152221/",
        },
        {
          name: "S Muthu Shravan",
          imageSource: "/assets/auv_photos_team/latest/mechanical/MuthuShravan.jpg",
          linkedInLink: "https://www.linkedin.com/in/muthu-shravan-s-440a72135/",
        },
      ],
    },
  ],
  "2019-20": [
    {
      name: "Team Members",
      members: [
        {
          name: "Sandesh Bharadwaj (Team Lead)",
          imageSource: "/assets/auv_photos_team/2019-2020/sandesh.jpg",
          linkedInLink: "https://www.linkedin.com/in/sandeshbharadwaj97",
        },
        {
          name: "Chitrartha Dixit",
          imageSource: "/assets/auv_photos_team/2019-2020/chit.jpg",
          linkedInLink: "https://www.linkedin.com/in/chitrartha-dixit-342436166",
        },
        {
          name: "Ram Bahal Tiwari",
          imageSource: "/assets/auv_photos_team/2019-2020/ram.jpg",
          linkedInLink: "https://www.linkedin.com/in/ram-bahal-tiwari-342a3a169",
        },
        {
          name: "Ravi K",
          imageSource: "/assets/auv_photos_team/2019-2020/ravi.jpg",
          linkedInLink: "https://www.linkedin.com/in/ravikumar2503",
        },
        {
          name: "Roshan",
          imageSource: "/assets/auv_photos_team/2019-2020/roshan.jpg",
          linkedInLink: "https://www.linkedin.com/in/roshan-patel-07b578138",
        },
        {
          name: "Sharath Chandar",
          imageSource: "/assets/auv_photos_team/2019-2020/sharath.jpeg",
          linkedInLink: "https://www.linkedin.com/in/sharath-chandar-bb145b148",
        },
        {
          name: "Vaishali",
          imageSource: "/assets/auv_photos_team/2019-2020/vaishali.jpg",
          linkedInLink: "https://www.linkedin.com/in/vaishali-ravishankar-0b6505149",
        },
        {
          name: "Charan",
          imageSource: "/assets/auv_photos_team/2019-2020/charan.jpg",
          linkedInLink: "https://www.linkedin.com/in/charan-preetam-08021017a",
        },
        {
          name: "Mayank N. Mehta",
          imageSource: "/assets/auv_photos_team/2019-2020/mayank.jpg",
          linkedInLink: "https://www.linkedin.com/in/mayank-n-mehta-468a47187",
        },
        {
          name: "Prathamesh Daware",
          imageSource: "/assets/auv_photos_team/2019-2020/daware.jpg",
          linkedInLink: "https://www.linkedin.com/in/prathamesh-daware-0b3483185",
        },
        {
          name: "Vishva Bhate",
          imageSource: "/assets/auv_photos_team/2019-2020/vishva.jpg",
          linkedInLink: "https://www.linkedin.com/in/vishva-bhate-a72847175",
        },
        {
          name: "Arjun Ramesh",
          imageSource: "/assets/auv_photos_team/2019-2020/arjun.jpg",
          linkedInLink: "https://www.linkedin.com/in/arjun-ramesh-183517170",
        },
        {
          name: "Govind K.P.",
          imageSource: "/assets/auv_photos_team/2019-2020/govind.png",
          linkedInLink: "https://www.linkedin.com/in/govind-kp",
        },
        {
          name: "Prathamesh Degwekar",
          imageSource: "/assets/auv_photos_team/2019-2020/prathamesh.jpg",
          linkedInLink: "https://www.linkedin.com/in/prathamesh-degwekar-0575b2b9",
        },
        {
          name: "Subash Mylraj",
          imageSource: "/assets/auv_photos_team/2019-2020/subash-min.jpg",
          linkedInLink: "https://www.linkedin.com/in/subash-m-1bba75130",
        },
        {
          name: "Anupriya Gopal",
          imageSource: "/assets/auv_photos_team/2019-2020/anupriya.jpeg",
          linkedInLink: "https://www.linkedin.com/in/anupriya-gopal-724111170",
        },
        {
          name: "Shramona Roy",
          imageSource: "/assets/auv_photos_team/2019-2020/shramona.jpg",
          linkedInLink: "https://www.linkedin.com/in/shramona-roy-81939b170",
        },
      ],
    },
  ],
  "2018-19": [
    {
      name: "Team Members",
      members: [
        {
          name: "Sandesh Bharadwaj",
          imageSource: "/assets/auv_photos_team/2019-2020/sandesh.jpg",
          linkedInLink: "https://www.linkedin.com/in/sandeshbharadwaj97",
        },
        {
          name: "Chitrartha Dixit",
          imageSource: "/assets/auv_photos_team/2019-2020/chit.jpg",
          linkedInLink: "https://www.linkedin.com/in/chitrartha-dixit-342436166",
        },
        {
          name: "Ram Bahal Tiwari",
          imageSource: "/assets/auv_photos_team/2019-2020/ram.jpg",
          linkedInLink: "https://www.linkedin.com/in/ram-bahal-tiwari-342a3a169",
        },
        {
          name: "Roshan",
          imageSource: "/assets/auv_photos_team/2019-2020/roshan.jpg",
          linkedInLink: "https://www.linkedin.com/in/roshan-patel-07b578138/?originalSubdomain=in",
        },
        {
          name: "Prathamesh Daware",
          imageSource: "/assets/auv_photos_team/2019-2020/daware.jpg",
          linkedInLink: "https://www.linkedin.com/in/prathamesh-daware-0b3483185/",
        },
        {
          name: "Vishva Bhate",
          imageSource: "/assets/auv_photos_team/2019-2020/vishva.jpg",
          linkedInLink: "https://www.linkedin.com/in/vishva-bhate-a72847175/",
        },
        {
          name: "Govind K.P.",
          imageSource: "/assets/auv_photos_team/2019-2020/govind.png",
          linkedInLink: "https://in.linkedin.com/in/govind-kp",
        },
        {
          name: "Prathamesh Degwekar",
          imageSource: "/assets/auv_photos_team/2019-2020/prathamesh.jpg",
          linkedInLink: "https://www.linkedin.com/in/prathamesh-degwekar-0575b2b9/",
        },
      ],
    },
  ],
}

const videos = [
  { id: "u3nHWZGkxV8", title: "AUV IIITDM - Competition Highlights" },
  { id: "E-_hCViDmAk", title: "Testing and Development" },
  { id: "Tm2tWqYYt-c", title: "Team Showcase" },
  { id: "zgak4T-eD4E", title: "Technical Overview" },
  { id: "Bi_8wSK4RbY", title: "Competition Performance" },
  { id: "IF_YSmuBBcE", title: "Behind the Scenes" },
]

const TeamSection = ({ year, teams }) => {
  return (
    <div className="year-section">
      <h3 className="year-title">{year}</h3>
      <div className="teams-wrapper">
        {teams.map((team) => (
          <div key={team.name} className="team-section">
            <h4 className="team-heading">{team.name}</h4>
            <div className="members-grid">
              {team.members.map((member) => (
                <div key={member.name} className="member-item">
                  <img
                    src={member.imageSource || "/placeholder.svg"}
                    alt={member.name}
                    className="member-photo"
                    onClick={() =>
                      window.openPhotoModal &&
                      window.openPhotoModal(member.imageSource || "/placeholder.svg", member.name)
                    }
                    style={{ cursor: "pointer" }}
                  />
                  <div className="member-info">
                    <p className="member-name">{member.name}</p>
                    {member.linkedInLink && member.linkedInLink !== "#" && (
                      <a href={member.linkedInLink} target="_blank" rel="noopener noreferrer">
                        <i className="fa">&#xf0e1;</i>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [photoModal, setPhotoModal] = useState({ isOpen: false, imageSrc: "", memberName: "" })

  const openPhotoModal = (imageSrc, memberName) => {
    setPhotoModal({ isOpen: true, imageSrc, memberName })
    document.body.style.overflow = "hidden"
  }

  const closePhotoModal = () => {
    setPhotoModal({ isOpen: false, imageSrc: "", memberName: "" })
    document.body.style.overflow = "unset"
  }

  const createBubbleEffect = (event) => {
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
      bubble.style.backgroundColor = "#60a5fa" // Lighter blue for bubbles
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
      setIsScrolled(scrollY > 50)
      setShowBackToTop(scrollY > 400)
    }

    updateScrollProgress()

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")

          const children = entry.target.querySelectorAll(".animate-on-scroll-child")
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add("animate-slide-in-up")
            }, index * 100)
          })
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll("section, .hub-section")
    sections.forEach((section) => observer.observe(section))

    const handleParallax = () => {
      const scrolled = window.pageYOffset
      const parallaxElements = document.querySelectorAll(".parallax-element")

      parallaxElements.forEach((element) => {
        const speed = Number.parseFloat(element.getAttribute("data-speed") || "0.5")
        const yPos = -(scrolled * speed)
        element.style.transform = `translateY(${yPos}px)`
      })
    }

    const handleScroll = () => {
      updateScrollProgress()
      handleParallax()
    }

    document.addEventListener("click", createBubbleEffect)
    document.addEventListener("touchstart", createBubbleEffect)
    window.addEventListener("scroll", handleScroll)

    window.openPhotoModal = openPhotoModal

    return () => {
      sections.forEach((section) => observer.unobserve(section))
      document.removeEventListener("click", createBubbleEffect)
      document.removeEventListener("touchstart", createBubbleEffect)
      window.removeEventListener("scroll", handleScroll)
      delete window.openPhotoModal
    }
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      <div
        className={`teamhub min-h-screen bg-black flex flex-col transition-all duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
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
        </div>

        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20 parallax-element" // Brighter dots for contrast
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

        <div className={`navbar-container ${isScrolled ? "scrolled" : ""}`}>
          <div className="nav-content">
            <a href="/" className="back-button">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7H3" />
              </svg>
              Back to Home
            </a>

            <div className="nav-brand" style={{ left: "10px" }}>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/WhatsApp_Image_2025-09-08_at_00.48.06_0c6d1d3a-removebg-preview%281%29%281%29%281%29-mDDcRgq4vSUNp8Cqs6KCpqIIliOMK4.png"
                alt="AUV IIITDM Logo"
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "contain",
                  filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1)) brightness(0) invert(1)", // Inverted for dark mode
                }}
              />
              <span>AUV IIITDM</span>
            </div>

            <div className="nav-links">
              <button className="nav-link" onClick={() => scrollToSection("teams")}>
                Team Members
              </button>
              <button className="nav-link" onClick={() => scrollToSection("posts")}>
                Posts
              </button>
              <button className="nav-link" onClick={() => scrollToSection("gallery")}>
                Gallery
              </button>
              <button className="nav-link" onClick={() => scrollToSection("contact")}>
                Contact
              </button>
            </div>
          </div>
        </div>

        <div className="container relative z-10">
          <section id="teams" className="hub-section fade-in-on-scroll">
            <h2 className="section-title">Our Team</h2>
            <TeamSection year="2023-24" teams={TeamData["2023-24"]} />
            <TeamSection year="2021-22" teams={TeamData["2021-22"]} />
            <TeamSection year="2019-20" teams={TeamData["2019-20"]} />
            <TeamSection year="2018-19" teams={TeamData["2018-19"]} />
          </section>

          <section id="posts" className="hub-section fade-in-on-scroll">
            <h2 className="section-title">Latest Posts</h2>
            <div className="videos-container">
              <h3 className="section-subtitle">Latest Videos</h3>
              <div className="videos-grid">
                {videos.map((video, index) => (
                  <div key={video.id} className="video-card animate-on-scroll-child">
                    <div className="video-wrapper">
                      <iframe
                        title={video.title}
                        src={`https://www.youtube.com/embed/${video.id}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <h3 className="video-title">{video.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="gallery" className="hub-section fade-in-on-scroll">
            <h2 className="section-title">Gallery</h2>
            <div className="text-center text-gray-400">Gallery content will be displayed here.</div>
          </section>

          <div className="fade-in-on-scroll">
            <Contacts />
          </div>
        </div>

        {photoModal.isOpen && (
          <div className="photo-modal-overlay" onClick={closePhotoModal}>
            <div className="photo-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="photo-modal-close" onClick={closePhotoModal} aria-label="Close photo">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <img
                src={photoModal.imageSrc || "/placeholder.svg"}
                alt={photoModal.memberName}
                className="photo-modal-image"
              />
              <div className="photo-modal-name">{photoModal.memberName}</div>
            </div>
          </div>
        )}

        <div
          className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-blue-400 z-50 transition-all duration-300"
          style={{
            width: `${scrollProgress}%`,
          }}
        />

        <button
          className={`fixed bottom-8 right-8 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-500 hover:scale-110 transition-all duration-300 z-50 ${
            showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>

      <style jsx>{`
        .teamhub {
          width: 100%;
          min-height: 100vh;
          overflow-x: hidden;
          background-color: #000;
        }
        
        .teamhub .navbar-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(17, 24, 39, 0.85); /* Dark background */
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(96, 165, 250, 0.2); /* Light blue border */
          height: 70px;
          display: flex;
          align-items: center;
          padding: 0 30px;
          transition: all 0.3s ease;
        }
        
        .teamhub .navbar-container.scrolled {
          height: 60px;
          background: rgba(17, 24, 39, 0.95);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          border-bottom: 1px solid rgba(96, 165, 250, 0.3);
        }
        
        .teamhub .nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        .nav-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-left: 20px;
          will-change: transform;
        }
        
        .nav-brand img {
          height: 80px;
          width: auto;
          transition: transform 0.2s ease;
          backface-visibility: hidden;
        }
        
        .nav-brand:hover img {
          transform: scale(1.05) translateZ(0);
        }
        
        .nav-brand span {
          font-size: 1.25rem;
          font-weight: 700;
          color: #93c5fd; /* Light blue text */
          white-space: nowrap;
        }
        
        .teamhub .nav-links {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .teamhub .nav-link {
          all: unset;
          background: none !important;
          border: none;
          padding: 8px 16px;
          color: #d1d5db; /* Light gray text */
          font-weight: 500;
          font-size: 16px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .teamhub .nav-link:hover {
          color: #ffffff;
          background: rgba(96, 165, 250, 0.2) !important;
        }
        
        .teamhub .nav-link:hover::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 50%;
          transform: translateX(-50%);
          width: 32px;
          height: 2px;
          background: #60a5fa; /* Light blue underline */
          border-radius: 1px;
        }
        
        .teamhub .back-button {
          all: unset;
          display: flex;
          align-items: center;
          gap: 8px;
          color: #d1d5db !important; /* Light gray text */
          text-decoration: none !important;
          font-size: 16px !important;
          font-weight: 500;
          padding: 8px 16px;
          border-radius: 8px;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .teamhub .back-button:hover {
          color: #ffffff !important;
          background: rgba(96, 165, 250, 0.2) !important;
        }
        
        .teamhub .back-button svg {
          transition: transform 0.3s ease;
        }
        
        .teamhub .back-button:hover svg {
          transform: translateX(-2px);
        }
        
        .teamhub .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1rem 1rem 2rem;
        }
        
        .teamhub .hub-section {
          margin-bottom: 4rem;
          scroll-margin-top: 100px;
          background: #1f2937; /* Dark gray section */
          border-radius: 1rem;
          padding: 3rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          border: 1px solid #374151; /* Darker border */
          transition: all 0.3s ease;
        }
        
        .teamhub .hub-section:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
        }
        
        .teamhub .section-title {
          text-align: center;
          margin-bottom: 3rem;
          color: #60a5fa; /* Light blue title */
          font-size: 2rem;
          font-weight: 700;
          position: relative;
          padding-bottom: 0.5rem;
        }
        
        .teamhub .section-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 4px;
          background: #60a5fa; /* Light blue underline */
          border-radius: 9999px;
        }
        
        .teamhub .section-subtitle {
          color: #d1d5db; /* Light gray text */
          font-size: 1.25rem;
          margin-bottom: 1.5rem;
          text-align: center;
          font-weight: 500;
        }
        
        .teams-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
        }
        
        .year-section {
          margin-bottom: 3rem;
          padding: 2rem;
          background: rgba(59, 130, 246, 0.1); /* Semi-transparent blue */
          border-radius: 1rem;
          border: 1px solid rgba(59, 130, 246, 0.2);
        }
        
        .year-title {
          color: #93c5fd; /* Lighter blue */
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 2rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #60a5fa;
        }
        
        .teams-wrapper {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        
        .team-section {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }
        
        .team-heading {
          min-width: 120px;
          color: #93c5fd; /* Lighter blue */
          font-size: 1.1rem;
          font-weight: 500;
          margin: 0;
          padding-top: 4px;
        }
        
        .members-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 6px;
          width: calc(100% - 120px);
        }
        
        .member-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          width: 100%;
        }
        
        .member-photo {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #60a5fa;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .member-item:hover .member-photo {
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
          border-color: #93c5fd;
        }
        
        .member-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          width: 100%;
        }
        
        .member-name {
          margin: 0;
          font-size: 0.65rem;
          font-weight: 500;
          color: #d1d5db; /* Light gray text */
          text-align: center;
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .member-info a {
          color: #9ca3af; /* Muted light gray */
          transition: color 0.3s ease;
        }
        
        .member-info a:hover {
          color: #60a5fa;
        }
        
        .teamhub .videos-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
        }
        
        .teamhub .videos-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
          padding: 1rem;
        }
        
        .teamhub .video-card {
          background: #374151; /* Dark gray card */
          border-radius: 1rem;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          height: 100%;
          display: flex;
          flex-direction: column;
          min-width: 0;
          max-width: 100%;
          border: 1px solid #4b5563;
        }
        
        .teamhub .video-card:hover {
          transform: translateY(-5px) translateZ(0);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
          background: #4b5563;
        }
        
        .teamhub .video-wrapper {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
          background: rgba(0, 0, 0, 0.4);
          max-width: 100%;
        }
        
        .teamhub .video-wrapper iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
        }
        
        .teamhub .video-title {
          padding: 8px;
          margin: 0;
          color: #d1d5db;
          font-size: 0.8rem;
          font-weight: 500;
          text-align: center;
          line-height: 1.2;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-15px) rotate(1deg);
          }
          66% {
            transform: translateY(-5px) rotate(-1deg);
          }
        }
        
        .fade-in-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.3s ease, transform 0.3s ease;
          will-change: opacity, transform;
        }
        
        .fade-in-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .animate-slide-in-up {
          animation: slideInUp 0.8s ease-out forwards;
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 768px) {
          .teamhub .navbar-container {
            height: 60px;
            padding: 0 15px;
          }
        
          .teamhub .nav-content {
            flex-direction: row;
            justify-content: space-between;
            padding: 0 0.5rem;
          }
          
          .nav-brand {
            margin-left: 5px;
            gap: 8px;
          }
          
          .nav-brand img {
            height: 60px;
          }
          
          .nav-brand span {
            font-size: 1rem;
          }
          
          .teamhub .nav-links {
            gap: 8px;
          }
          
          .teamhub .nav-link,
          .teamhub .back-button {
            font-size: 14px;
            padding: 6px 12px;
          }
          
          .teamhub .container {
            padding: calc(60px + 1rem) 0.5rem 1rem;
          }
          
          .teamhub .hub-section {
            margin-bottom: 2rem;
            scroll-margin-top: 140px;
            padding: 1rem;
          }
          
          .teamhub .section-title {
            font-size: 1.5rem;
          }
          
          .teamhub .section-subtitle {
            font-size: 1rem;
          }
          
          .teamhub .team-section {
            flex-direction: column;
            gap: 0.5rem;
          }
          
          .teamhub .team-heading {
            min-width: unset;
            margin-bottom: 4px;
          }
          
          .teamhub .members-grid {
            width: 100%;
            grid-template-columns: repeat(4, 1fr);
            gap: 6px;
          }
          
          .teamhub .member-photo {
            width: 40px;
            height: 40px;
          }
          
          .teamhub .member-name {
            font-size: 0.6rem;
          }
          
          .teamhub .videos-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
        }
        
        @media (max-width: 480px) {
          .teamhub .videos-grid {
            grid-template-columns: 1fr;
          }
        }

        .photo-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          backdrop-filter: blur(4px);
          animation: fadeIn 0.2s ease-out;
        }

        .photo-modal-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: scaleIn 0.3s ease-out;
        }

        .photo-modal-close {
          position: absolute;
          top: -50px;
          right: -10px;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          backdrop-filter: blur(10px);
        }

        .photo-modal-close:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.1);
        }

        .photo-modal-image {
          max-width: 400px;
          max-height: 400px;
          width: auto;
          height: auto;
          border-radius: 12px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          object-fit: cover;
        }

        .photo-modal-name {
          color: white;
          font-size: 1.2rem;
          font-weight: 600;
          margin-top: 20px;
          text-align: center;
          background: rgba(255, 255, 255, 0.1);
          padding: 8px 20px;
          border-radius: 20px;
          backdrop-filter: blur(10px);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @media (max-width: 768px) {
          .photo-modal-image {
            max-width: 300px;
            max-height: 300px;
          }
          
          .photo-modal-close {
            top: -40px;
            right: 0;
            width: 35px;
            height: 35px;
          }
          
          .photo-modal-name {
            font-size: 1rem;
            margin-top: 15px;
          }
        }
      `}</style>
    </>
  )
}

export default App
