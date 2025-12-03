"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Users, Target, Globe, Shield, Zap, CheckCircle2, Briefcase } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id))
          }
        })
      },
      { threshold: 0.1 },
    )

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: Target,
      title: "Executive Search & Leadership Hiring",
      description:
        "Strategic C-suite placements that drive organizational transformation and long-term growth for ambitious companies.",
      features: [
        "C-Suite & VP-level hiring",
        "Board advisory placements",
        "Global executive networks",
        "Leadership assessment",
      ],
    },
    {
      icon: Users,
      title: "Volume Hiring & Mass Recruitment",
      description:
        "End-to-end mass hiring solutions with AI-powered screening, fast TAT, and quality candidate pipelines at scale.",
      features: [
        "Bulk recruitment drives",
        "Campus hiring programs",
        "Seasonal workforce scaling",
        "Multi-location hiring",
      ],
    },
    {
      icon: Briefcase,
      title: "Permanent Staffing Solutions",
      description:
        "Full-cycle recruitment for permanent roles across all functions and seniority levels with guaranteed quality.",
      features: [
        "Mid to senior-level hiring",
        "Cross-functional recruitment",
        "Industry-specific expertise",
        "90-day replacement guarantee",
      ],
    },
    {
      icon: Zap,
      title: "Contract & Temporary Staffing",
      description:
        "Flexible workforce solutions for project-based, seasonal, or interim staffing needs with rapid deployment.",
      features: ["Project-based contractors", "Interim management", "Seasonal staffing", "Compliance management"],
    },
    {
      icon: Globe,
      title: "HR Consulting & Workforce Strategy",
      description:
        "Strategic HR advisory services to optimize workforce planning, talent strategy, and organizational design.",
      features: [
        "Workforce planning",
        "Org structure design",
        "Compensation benchmarking",
        "Talent retention strategies",
      ],
    },
    {
      icon: Shield,
      title: "Payroll & Compliance Management",
      description:
        "End-to-end payroll processing and statutory compliance to ensure accuracy, timeliness, and regulatory adherence.",
      features: [
        "Multi-state payroll processing",
        "Tax compliance management",
        "Statutory filings",
        "Payroll automation",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary/20 backdrop-blur-xl bg-gradient-to-r from-black/80 via-primary/10 to-black/80">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/hm-20horizontal-20png-20-282-29-20-282-29.png"
                alt="Hiring Mantra"
                width={420}
                height={84}
                className="h-24 w-auto brightness-110 hover:brightness-125 transition-all duration-300"
              />
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/services" className="text-sm text-primary font-medium transition-colors duration-300">
                Services
              </Link>
              <Link
                href="/how-it-works"
                className="text-sm text-gray-300 hover:text-primary transition-colors duration-300"
              >
                How It Works
              </Link>
              <Link href="/about" className="text-sm text-gray-300 hover:text-primary transition-colors duration-300">
                About
              </Link>
              <Link
                href="/resources"
                className="text-sm text-gray-300 hover:text-primary transition-colors duration-300"
              >
                Resources
              </Link>
              <Link href="/careers" className="text-sm text-gray-300 hover:text-primary transition-colors duration-300">
                Careers
              </Link>
            </div>
            <Button className="bg-primary text-black hover:bg-primary/90 font-semibold pulse-glow">
              Get Consultation
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 animated-gradient-bg" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight text-balance leading-[1.1]">
              Our <span className="gradient-text-multi">Services</span>
            </h1>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto text-balance leading-relaxed">
              Comprehensive HR and recruitment solutions designed to scale with your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section
        className="py-20 px-6 relative"
        id="services-grid"
        ref={(el) => {
          sectionRefs.current["services-grid"] = el
        }}
      >
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Card
                key={i}
                className={`group relative border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-8 hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] overflow-hidden cursor-pointer ${
                  visibleSections.has("services-grid") ? "scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="gradient-border p-12 rounded-3xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="gradient-text-multi">Transform</span> Your Hiring?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you build the team that drives your success
            </p>
            <Button
              size="lg"
              className="bg-primary text-black hover:bg-primary/90 font-semibold text-lg px-8 py-6 glow-effect-enhanced group"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
