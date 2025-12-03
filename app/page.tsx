"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ArrowRight,
  Sparkles,
  Target,
  Users,
  TrendingUp,
  Globe,
  Shield,
  Zap,
  CheckCircle2,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { SignInModal } from "@/components/sign-in-modal" // Fixed import paths to use correct file names
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ServicesCarousel } from "@/components/services-carousel"

export default function HiringMantraLanding() {
  const [scrollY, setScrollY] = useState(0)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})
  const [whatsappHover, setWhatsappHover] = useState(false)
  const [isSignInOpen, setIsSignInOpen] = useState(false) // Added state for sign-in modal

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id))
            entry.target.classList.add("visible")
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: "-50px 0px",
      },
    )

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary/30 backdrop-blur-2xl bg-gradient-to-r from-black/95 via-primary/5 to-black/95 shadow-2xl shadow-primary/5">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 group">
              <div className="relative">
                <Image
                  src="/images/hm-20horizontal-20png-20-282-29-20-282-29.png"
                  alt="Hiring Mantra"
                  width={420}
                  height={84}
                  className="h-24 w-auto brightness-110 hover:brightness-125 transition-all duration-300"
                />
              </div>
            </div>
            <div className="hidden md:flex items-center gap-1">
              <Link
                href="/"
                className="relative px-4 py-2 text-sm font-medium text-gray-200 hover:text-primary transition-all duration-300 group"
              >
                <span className="relative z-10">Home</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 rounded-lg transition-all duration-300"></span>
              </Link>
              <Link
                href="/services"
                className="relative px-4 py-2 text-sm font-medium text-gray-200 hover:text-primary transition-all duration-300 group"
              >
                <span className="relative z-10">Services</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 rounded-lg transition-all duration-300"></span>
              </Link>
              <Link
                href="/how-it-works"
                className="relative px-4 py-2 text-sm font-medium text-gray-200 hover:text-primary transition-all duration-300 group"
              >
                <span className="relative z-10">How It Works</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 rounded-lg transition-all duration-300"></span>
              </Link>
              <Link
                href="/about"
                className="relative px-4 py-2 text-sm font-medium text-gray-200 hover:text-primary transition-all duration-300 group"
              >
                <span className="relative z-10">About</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 rounded-lg transition-all duration-300"></span>
              </Link>
              <Link
                href="/resources"
                className="relative px-4 py-2 text-sm font-medium text-gray-200 hover:text-primary transition-all duration-300 group"
              >
                <span className="relative z-10">Resources</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 rounded-lg transition-all duration-300"></span>
              </Link>
              <Link
                href="/careers"
                className="relative px-4 py-2 text-sm font-medium text-gray-200 hover:text-primary transition-all duration-300 group"
              >
                <span className="relative z-10">Careers</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 rounded-lg transition-all duration-300"></span>
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                onClick={() => setIsSignInOpen(true)}
                className="hidden lg:inline-flex text-gray-200 hover:text-primary hover:bg-primary/10 border border-primary/20 hover:border-primary/50 transition-all duration-300"
              >
                Sign In
              </Button>
              <Link href="/consultation">
                <Button className="bg-gradient-to-r from-primary to-cyan-400 text-black hover:from-primary/90 hover:to-cyan-500 font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-300">
                  Get Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 animated-gradient-bg" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 via-cyan-500/5 to-primary/5 rounded-full blur-[150px] animate-spin"
          style={{ animationDuration: "30s" }}
        />

        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 animate-fade-in shimmer relative overflow-hidden">
              <Sparkles className="w-4 h-4 text-primary hover-rotate" />
              <span className="text-sm text-gray-300">Hire to Rehire - Complete HR Management Platform</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight text-balance leading-[1.1] slide-up">
              Transform <span className="gradient-text-multi">Your Workforce,</span> Accelerate Growth
            </h1>

            <p
              className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto text-balance leading-relaxed slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              Transparent HR solutions and executive hiring that power growth from startups to C-suite.
            </p>

            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Link href="/consultation">
                <Button
                  size="lg"
                  className="bg-primary text-black hover:bg-primary/90 font-semibold text-lg px-8 py-6 group hover:scale-105 transition-all duration-300"
                >
                  Transform Your HR Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              {/* <Button
                size="lg"
                variant="outline"
                className="border-white/20 hover:bg-white/10 hover:border-primary text-white hover:text-white text-lg px-8 py-6 group transition-all duration-300 bg-transparent"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button> */}
            </div>

            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { label: "Startups Powered", value: "500+" },
                { label: "Success Rate", value: "98%" },
                { label: "Countries", value: "50+" },
                { label: "Time Saved", value: "70%" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="gradient-border p-6 rounded-2xl scale-in hover:scale-105 transition-transform duration-300 cursor-pointer group"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="text-3xl font-bold gradient-text-multi mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Hiring Mantra */}
      <section
        className="py-20 px-6"
        id="why-hiring-mantra"
        ref={(el) => {
          sectionRefs.current["why-hiring-mantra"] = el
        }}
      >
        <div className="container mx-auto">
          <div
            className={`max-w-3xl mx-auto text-center mb-16 ${visibleSections.has("why-hiring-mantra") ? "slide-up" : "opacity-0"}`}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Humanizing Work <span className="gradient-text-multi">with AI</span>
            </h2>
            <p className="text-xl text-gray-400 text-balance leading-relaxed">
              We transform how SMEs and startups accelerate growth by empowering human potential through intelligent HR
              technology. From local talent to global opportunities – we ignite your workforce evolution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Target,
                title: "Transform HR Operations",
                description:
                  "Accelerate your business growth with affordable, end-to-end HR solutions designed specifically for SMEs and startups",
              },
              {
                icon: Users,
                title: "Empower Your People",
                description:
                  "Culture-driven hiring and post-placement success programs that build thriving, engaged teams",
              },
              {
                icon: Globe,
                title: "Ignite Global Reach",
                description:
                  "Local to Global strategy – expand your talent pool while maintaining compliance and cultural fit",
              },
            ].map((item, i) => (
              <Card
                key={i}
                className={`gradient-border p-8 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 group cursor-pointer ${visibleSections.has("why-hiring-mantra") ? "scale-in" : "opacity-0"}`}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <item.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Carousel Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] animate-pulse" />

        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Our <span className="gradient-text-multi">Services</span>
            </h2>
            <p className="text-lg text-gray-400 text-balance">
              Explore our comprehensive HR solutions designed for your business growth
            </p>
          </div>

          <ServicesCarousel />
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 px-6 relative"
        ref={(el) => {
          sectionRefs.current["services"] = el
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] animate-pulse" />
        <div
          className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />

        <div className="container mx-auto relative z-10">
          <div
            className={`max-w-3xl mx-auto text-center mb-16 ${visibleSections.has("services") ? "slide-up" : "opacity-0"}`}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Empower Your SME with <span className="gradient-text-multi">Smart HR</span>
            </h2>
            <p className="text-xl text-gray-400 text-balance">
              Comprehensive HR solutions that transform how startups and SMEs accelerate growth. From talent acquisition
              to employee success – we ignite human potential through intelligent technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              {
                icon: Users,
                title: "Transform Recruitment",
                description: "End-to-end candidate experience with culture-driven hiring for SMEs and startups",
                features: ["AI-powered matching", "Culture fit assessment", "Fast hiring cycles"],
                gradient: "from-primary/20 to-primary/5",
              },
              {
                icon: TrendingUp,
                title: "Accelerate HR Operations",
                description: "Affordable HR-as-a-Service with transparent pricing and flexible solutions",
                features: ["Scalable systems", "Compliance management", "Cost optimization"],
                gradient: "from-cyan-500/20 to-cyan-500/5",
              },
              {
                icon: Shield,
                title: "Empower Compliance",
                description: "Automated payroll with full regulatory compliance designed for growing businesses",
                features: ["Multi-country support", "Tax compliance", "Automated processing"],
                gradient: "from-primary/20 to-cyan-500/10",
              },
              {
                icon: Zap,
                title: "Executive Search",
                description: "Strategic leadership hiring to accelerate your business transformation",
                features: ["C-suite specialists", "Industry experts", "Cultural alignment"],
                gradient: "from-cyan-500/20 to-primary/10",
              },
              {
                icon: Globe,
                title: "Global Expansion",
                description: "Scale internationally with compliant hiring across 50+ countries",
                features: ["Legal compliance", "Local expertise", "Seamless onboarding"],
                gradient: "from-primary/15 to-cyan-500/15",
              },
              {
                icon: Sparkles,
                title: "HR Consulting",
                description: "Strategic guidance to optimize your entire HR function",
                features: ["Process optimization", "Tech integration", "Best practices"],
                gradient: "from-cyan-500/15 to-primary/15",
              },
            ].map((service, i) => (
              <Card
                key={i}
                className={`gradient-border p-8 bg-white/[0.02] hover:bg-white/[0.05] group cursor-pointer hover:scale-105 transition-all duration-500 ${visibleSections.has("services") ? "scale-in" : "opacity-0"}`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative overflow-hidden`}
                >
                  <div className="absolute inset-0 shimmer" />
                  <service.icon className="w-7 h-7 text-primary relative z-10" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="py-20 px-6"
        ref={(el) => {
          sectionRefs.current["how-it-works"] = el
        }}
      >
        <div className="container mx-auto">
          <div
            className={`max-w-3xl mx-auto text-center mb-16 ${visibleSections.has("how-it-works") ? "slide-up" : "opacity-0"}`}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              A streamlined process, <span className="gradient-text-multi">executed with care</span>
            </h2>
            <p className="text-xl text-gray-400">
              We transform complex business challenges into innovative HR solutions, built to reflect quality,
              scalability, and excellence
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Discovery & Assessment",
                  description:
                    "We analyze your business needs, culture, and growth objectives to create a tailored HR strategy",
                },
                {
                  step: "02",
                  title: "Strategic Planning",
                  description:
                    "Develop comprehensive hiring roadmaps with timeline, budget, and success metrics clearly defined",
                },
                {
                  step: "03",
                  title: "Talent Acquisition",
                  description: "Execute AI-powered recruitment campaigns with culture-driven candidate assessment",
                },
                {
                  step: "04",
                  title: "Integration & Success",
                  description:
                    "Seamless onboarding with ongoing support to ensure long-term employee engagement and growth",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`gradient-border p-8 bg-white/[0.02] flex gap-8 items-start hover:scale-105 transition-all duration-500 group cursor-pointer ${visibleSections.has("how-it-works") ? "slide-up" : "opacity-0"}`}
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <div className="text-6xl font-bold gradient-text-multi min-w-[100px] group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-6 relative"
        ref={(el) => {
          sectionRefs.current["about"] = el
        }}
      >
        <div className="container mx-auto relative z-10">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className={visibleSections.has("about") ? "slide-up" : "opacity-0"}>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">
                We help businesses grow with <span className="gradient-text-multi">innovative HR solutions</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Hiring Mantra is more than a recruitment agency. We're your strategic partner in workforce
                transformation, combining cutting-edge AI technology with deep human insight to build teams that drive
                real business growth.
              </p>
              <div className="space-y-4">
                {[
                  "Trusted by 500+ startups and SMEs globally",
                  "98% client satisfaction rate",
                  "Average 70% reduction in time-to-hire",
                  "Present in 50+ countries worldwide",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300"
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/about">
                <Button
                  size="lg"
                  className="mt-8 bg-primary text-black hover:bg-primary/90 font-semibold hover:scale-110 transition-all duration-300"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div
              className={`relative ${visibleSections.has("about") ? "scale-in" : "opacity-0"}`}
              style={{ animationDelay: "0.3s" }}
            >
              <div className="gradient-border p-8 bg-white/[0.02] rounded-3xl hover:scale-105 transition-all duration-500">
                <div className="aspect-square bg-gradient-to-br from-primary/20 via-cyan-500/10 to-primary/5 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 shimmer" />
                  <div className="text-center relative z-10">
                    <div className="text-6xl font-bold gradient-text-multi mb-4">1000+</div>
                    <div className="text-xl text-gray-300">Successful Placements</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="py-20 px-6"
        id="testimonials"
        ref={(el) => {
          sectionRefs.current["testimonials"] = el
        }}
      >
        <div className="container mx-auto">
          <div
            className={`max-w-3xl mx-auto text-center mb-16 ${visibleSections.has("testimonials") ? "slide-up" : "opacity-0"}`}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Trusted by <span className="gradient-text-multi">global leaders</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              {
                quote:
                  "Their expertise in AI-powered hiring transformed our digital presence completely. We couldn't be happier with the results.",
                author: "Sarah Chen",
                role: "CEO, TechStart Inc",
              },
              {
                quote:
                  "Hiring Mantra helped us scale from 10 to 100 employees in just 6 months. Their strategic approach is unmatched.",
                author: "Michael Rodriguez",
                role: "Founder, Growth Labs",
              },
              {
                quote:
                  "The best HR partner we've worked with. Professional, efficient, and truly understands startup culture.",
                author: "Emily Watson",
                role: "COO, InnovateNow",
              },
            ].map((testimonial, i) => (
              <Card
                key={i}
                className={`gradient-border p-8 bg-white/[0.02] hover:scale-105 transition-all duration-500 cursor-pointer group ${visibleSections.has("testimonials") ? "scale-in" : "opacity-0"}`}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="mb-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <svg
                        key={j}
                        className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        style={{ transitionDelay: `${j * 50}ms` }}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 leading-relaxed italic">&ldquo;{testimonial.quote}&rdquo;</p>
                </div>
                <div>
                  <div className="font-semibold group-hover:text-primary transition-colors duration-300">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Preview */}
      <section
        id="resources"
        className="py-20 px-6"
        ref={(el) => {
          sectionRefs.current["resources"] = el
        }}
      >
        <div className="container mx-auto">
          <div
            className={`max-w-3xl mx-auto text-center mb-16 ${visibleSections.has("resources") ? "slide-up" : "opacity-0"}`}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Latest <span className="gradient-text-multi">Insights</span>
            </h2>
            <p className="text-xl text-gray-400">
              Stay ahead with expert perspectives on HR, recruitment, and workforce management
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              {
                title: "The Future of AI in Recruitment",
                category: "Technology",
                date: "Dec 2024",
                gradient: "from-primary/20 to-primary/5",
                image: "/futuristic-ai-robot-analyzing-candidate-resumes-ho.jpg",
              },
              {
                title: "10 Tips for Scaling Your Startup Team",
                category: "Growth",
                date: "Nov 2024",
                gradient: "from-cyan-500/20 to-cyan-500/5",
                image: "/diverse-startup-team-collaboration-modern-office-g.jpg",
              },
              {
                title: "Building a Culture-First Organization",
                category: "Culture",
                date: "Nov 2024",
                gradient: "from-primary/15 to-cyan-500/15",
                image: "/happy-diverse-team-celebrating-together-modern-wor.jpg",
              },
            ].map((article, i) => (
              <Card
                key={i}
                className={`gradient-border p-8 bg-white/[0.02] group cursor-pointer hover:scale-105 transition-all duration-500 ${visibleSections.has("resources") ? "scale-in" : "opacity-0"}`}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="aspect-video rounded-xl mb-6 relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="text-sm text-primary mb-2 group-hover:scale-105 transition-transform duration-300 inline-block">
                  {article.category}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {article.title}
                </h3>
                <div className="text-sm text-gray-500">{article.date}</div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/resources">
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 hover:bg-white/5 hover:border-primary/50 bg-transparent hover:scale-110 transition-all duration-300"
              >
                View All Resources
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section
        id="careers"
        className="py-20 px-6 relative"
        ref={(el) => {
          sectionRefs.current["careers"] = el
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent animate-pulse" />

        <div className="container mx-auto relative z-10">
          <div
            className={`max-w-4xl mx-auto gradient-border p-12 md:p-16 bg-white/[0.02] rounded-3xl text-center hover:scale-105 transition-all duration-500 ${visibleSections.has("careers") ? "scale-in" : "opacity-0"}`}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Join Our <span className="gradient-text-multi">Mission</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about transforming the future of work
            </p>
            <Link href="/careers" className="inline-block">
              <Button
                size="lg"
                className="bg-primary text-black hover:bg-primary/90 font-semibold hover:scale-110 transition-all duration-300"
              >
                View Open Positions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        className="py-20 px-6"
        id="contact"
        ref={(el) => {
          sectionRefs.current["contact"] = el
        }}
      >
        <div className="container mx-auto">
          <div
            className={`max-w-5xl mx-auto gradient-border p-12 md:p-20 bg-white/[0.02] rounded-3xl text-center relative overflow-hidden ${visibleSections.has("contact") ? "scale-in" : "opacity-0"}`}
          >
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
                Ready to <span className="gradient-text-multi">Transform</span> Your Workforce?
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
                Let's discuss how we can help you build the team that will drive your business forward
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/consultation">
                  <Button
                    size="lg"
                    className="bg-primary text-black hover:bg-primary/90 font-semibold text-lg px-10 py-6 hover:scale-110 transition-all duration-300"
                  >
                    Get Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="https://wa.me/919625667062" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/20 hover:bg-white/5 hover:border-primary text-lg px-10 py-6 bg-transparent hover:scale-110 transition-all duration-300 text-white hover:text-white"
                  >
                    Schedule a Call
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative mt-32 border-t border-primary/20 bg-black">
        <div className="container mx-auto px-6 py-16">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-16 mb-12">
            {/* Brand Section */}
            <div className="space-y-6">
              <Image
                src="/images/hm-20horizontal-20png-20-282-29-20-282-29.png"
                alt="Hiring Mantra"
                width={180}
                height={60}
                className="h-16 w-auto mb-6"
              />
              <p className="text-sm text-gray-400 leading-relaxed">
                Empowering SMEs, Startups & C-Suite Leaders by Humanizing Work with AI
              </p>

              {/* Social Media Icons */}
              <div className="flex gap-4 pt-4">
                <Link
                  href="https://linkedin.com/company/hiringmantra"
                  target="_blank"
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                </Link>
                <Link
                  href="https://twitter.com/hiringmantra"
                  target="_blank"
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                >
                  <Twitter className="w-5 h-5 text-primary" />
                </Link>
                <Link
                  href="https://instagram.com/hiringmantra"
                  target="_blank"
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5 text-primary" />
                </Link>
                <Link
                  href="https://facebook.com/hiringmantra"
                  target="_blank"
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                >
                  <Facebook className="w-5 h-5 text-primary" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-primary transition-colors duration-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-primary transition-colors duration-300">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-primary transition-colors duration-300">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-400 hover:text-primary transition-colors duration-300">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/consultation"
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-6">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <a
                    href="mailto:hello@hiringmantra.com"
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    hello@hiringmantra.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <a
                    href="tel:+919625667062"
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    +91 96256 67062
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <address className="text-gray-400 not-italic leading-relaxed">
                    5th Floor Plot No. 4, Tech Garden Sector 35,
                    <br />
                    Narsinghpur Gurugram – 122004
                    <br />
                    Haryana
                    <br />
                    INDIA
                  </address>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">© 2025 Hiring Mantra. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-gray-500">
              <Link href="/privacy-policy" className="hover:text-primary transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-primary transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="hover:text-primary transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />

      {/* Sign In Modal */}
      <SignInModal isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)} />
    </div>
  )
}
