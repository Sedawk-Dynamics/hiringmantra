"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Search, Users, CheckCircle, Rocket } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HowItWorksPage() {
  const steps = [
    {
      icon: Search,
      title: "Understand Your Needs",
      description:
        "We begin with a deep-dive consultation to understand your organization's culture, goals, and specific hiring requirements.",
      details: [
        "Initial discovery call",
        "Role profiling & JD refinement",
        "Success metrics definition",
        "Timeline planning",
      ],
    },
    {
      icon: Users,
      title: "Source & Screen Candidates",
      description:
        "Our team leverages AI-powered tools and extensive networks to identify, screen, and shortlist the best-fit candidates.",
      details: [
        "Multi-channel sourcing",
        "AI-powered screening",
        "Skills & culture assessment",
        "Background verification",
      ],
    },
    {
      icon: CheckCircle,
      title: "Interview & Evaluate",
      description:
        "We coordinate interviews, gather feedback, and provide comprehensive candidate evaluations to support your decision-making.",
      details: [
        "Interview scheduling",
        "Assessment coordination",
        "Feedback compilation",
        "Final shortlist presentation",
      ],
    },
    {
      icon: Rocket,
      title: "Onboard & Support",
      description:
        "Post-placement, we ensure smooth onboarding and provide ongoing support to guarantee long-term success and satisfaction.",
      details: ["Offer negotiation support", "Onboarding assistance", "90-day follow-up", "Replacement guarantee"],
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
              <Link
                href="/services"
                className="text-sm text-gray-300 hover:text-primary transition-colors duration-300"
              >
                Services
              </Link>
              <Link href="/how-it-works" className="text-sm text-primary font-medium transition-colors duration-300">
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
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight text-balance leading-[1.1]">
              How <span className="gradient-text-multi">It Works</span>
            </h1>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto text-balance leading-relaxed">
              A transparent, proven process designed to deliver exceptional hiring outcomes
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-12">
            {steps.map((step, i) => (
              <Card
                key={i}
                className="group relative border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-8 hover:border-primary/50 transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <step.icon className="w-10 h-10 text-primary" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-black flex items-center justify-center font-bold text-sm">
                        {i + 1}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-lg mb-6 leading-relaxed">{step.description}</p>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-300">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
              Ready to Get <span className="gradient-text-multi">Started?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Experience our proven process and see how we can transform your hiring
            </p>
            <Button
              size="lg"
              className="bg-primary text-black hover:bg-primary/90 font-semibold text-lg px-8 py-6 glow-effect-enhanced group"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
