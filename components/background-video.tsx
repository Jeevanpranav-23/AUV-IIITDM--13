"use client"

interface BackgroundVideoProps {
  className?: string
}

export default function BackgroundVideo({ className = "" }: BackgroundVideoProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none" // Changed from auto to none for faster initial load
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.3)" }}
        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080'%3E%3Crect width='100%25' height='100%25' fill='%23000'/%3E%3C/svg%3E"
      >
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hailuo_Video_421181342250778630-vmake-1sH8s2Q8NslojSg2RmjhsUQnKDmE5S.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-black/20" />
    </div>
  )
}
