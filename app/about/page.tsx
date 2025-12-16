"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Target, Heart, Lightbulb, Award } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We measure our success by the impact we create for our clients and candidates.",
    },
    {
      icon: Heart,
      title: "People-First",
      description: "Every hire is a person, not just a resume. We prioritize cultural fit and long-term success.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We leverage cutting-edge AI and technology to deliver smarter, faster hiring solutions.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We're committed to exceptional service quality and continuous improvement in everything we do.",
    },
  ]

  const achievements = [
    { value: "500+", label: "Startups Powered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "50+", label: "Countries Served" },
    { value: "10,000+", label: "Successful Placements" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 animated-gradient-bg" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight text-balance leading-[1.1]">
              About <span className="gradient-text-multi">Hiring Mantra</span>
            </h1>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto text-balance leading-relaxed">
              Empowering organizations to build exceptional teams through transparent, innovative HR solutions
            </p>
          </div>
        </div>
      </section>
      {/* Mission Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <Card className="border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-12">
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-400 leading-relaxed mb-6">
              At Hiring Mantra, we believe that great teams are built on great hires. Our mission is to humanize the
              hiring process by combining cutting-edge AI technology with a deep understanding of people and culture.
            </p>
            <p className="text-xl text-gray-400 leading-relaxed">
              We're committed to making workforce management transparent, efficient, and effective for startups, SMEs,
              and enterprises worldwide. From executive search to volume hiring, payroll to compliance - we're your
              strategic partner in building teams that drive growth.
            </p>
          </Card>
        </div>
      </section>
      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text-multi">Values</span>
            </h2>
            <p className="text-xl text-gray-400">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <Card
                key={i}
                className="group border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-8 hover:border-primary/50 transition-all duration-500 hover:scale-105"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Achievements */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="gradient-border p-12 rounded-3xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-5xl font-bold gradient-text-multi mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Us in <span className="gradient-text-multi">Transforming</span> HR
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Partner with Hiring Mantra and experience the future of workforce management
          </p>
          <Link href="/consultation">
            <Button
              size="lg"
              className="bg-primary text-black hover:bg-primary/90 font-semibold text-lg px-8 py-6 glow-effect-enhanced group"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
