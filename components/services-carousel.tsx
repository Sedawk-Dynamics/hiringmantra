"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, Users, TrendingUp, Shield, Zap, Globe, Sparkles } from "lucide-react"
import { Card } from "@/components/ui/card"

const services = [
  {
    icon: Users,
    title: "Transform Recruitment",
    description: "End-to-end candidate experience with culture-driven hiring for SMEs and startups",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: TrendingUp,
    title: "Accelerate HR Operations",
    description: "Affordable HR-as-a-Service with transparent pricing and flexible solutions",
    gradient: "from-cyan-500/20 to-cyan-500/5",
  },
  {
    icon: Shield,
    title: "Empower Compliance",
    description: "Automated payroll with full regulatory compliance designed for growing businesses",
    gradient: "from-primary/20 to-cyan-500/10",
  },
  {
    icon: Zap,
    title: "Executive Search",
    description: "Strategic leadership hiring to accelerate your business transformation",
    gradient: "from-cyan-500/20 to-primary/10",
  },
  {
    icon: Globe,
    title: "Global Expansion",
    description: "Scale internationally with compliant hiring across 50+ countries",
    gradient: "from-primary/15 to-cyan-500/15",
  },
  {
    icon: Sparkles,
    title: "HR Consulting",
    description: "Strategic guidance to optimize your entire HR function",
    gradient: "from-cyan-500/15 to-primary/15",
  },
]

export function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setIsTransitioning(true)
        setTimeout(() => {
          setCurrentIndex((prevIndex) => {
            const nextIndex = prevIndex + 1
            return nextIndex >= services.length ? 0 : nextIndex
          })
          setIsTransitioning(false)
        }, 100)
      }, 2000)

      return () => clearInterval(interval)
    }
  }, [isHovered])

  const goToPrevious = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length)
      setIsTransitioning(false)
    }, 100)
  }

  const goToNext = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length)
      setIsTransitioning(false)
    }, 100)
  }

  const goToSlide = (index: number) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setIsTransitioning(false)
    }, 100)
  }

  return (
    <div
      className="relative max-w-7xl mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-20 w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-primary transition-all duration-300 flex items-center justify-center group"
        aria-label="Previous service"
      >
        <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-20 w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-primary transition-all duration-300 flex items-center justify-center group"
        aria-label="Next service"
      >
        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
      </button>

      {/* Carousel Content */}
      <div className="overflow-hidden">
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 ease-in-out ${
            isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        >
          {[0, 1, 2].map((offset) => {
            const index = (currentIndex + offset) % services.length
            const service = services[index]
            return (
              <div key={`${index}-${offset}`} className="transform transition-all duration-700 ease-out">
                <Card className="gradient-border p-8 bg-white/[0.02] hover:bg-white/[0.05] group cursor-pointer h-full transition-all duration-500">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ease-out relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 shimmer" />
                    <service.icon className="w-7 h-7 text-primary relative z-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed transition-all duration-500">{service.description}</p>
                </Card>
              </div>
            )
          })}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {services.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-2 rounded-full transition-all duration-500 ease-out ${
              i === currentIndex ? "bg-primary w-8 scale-110" : "bg-white/20 hover:bg-white/40 w-2"
            }`}
            aria-label={`Go to service ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
