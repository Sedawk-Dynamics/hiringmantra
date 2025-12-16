"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, MapPin, Briefcase, Clock } from "lucide-react"
import Link from "next/link"

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior Recruitment Consultant",
      department: "Recruitment",
      location: "Mumbai, India",
      type: "Full-time",
      description:
        "Lead end-to-end recruitment for mid to senior-level positions across diverse industries and drive client relationships.",
    },
    {
      title: "HR Business Partner",
      department: "Human Resources",
      location: "Bangalore, India",
      type: "Full-time",
      description:
        "Partner with internal teams to develop and implement HR strategies, policies, and programs that support business objectives.",
    },
    {
      title: "Talent Acquisition Specialist",
      department: "Recruitment",
      location: "Remote",
      type: "Full-time",
      description:
        "Source, screen, and engage top talent for our clients using innovative recruiting techniques and AI-powered tools.",
    },
    {
      title: "Payroll Operations Manager",
      department: "Payroll & Compliance",
      location: "Delhi NCR, India",
      type: "Full-time",
      description:
        "Oversee payroll operations, ensure compliance with regulations, and manage a team of payroll specialists.",
    },
  ]

  const benefits = [
    "Competitive compensation packages",
    "Flexible work arrangements",
    "Health & wellness programs",
    "Learning & development budget",
    "Performance bonuses",
    "Career growth opportunities",
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 animated-gradient-bg" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight text-balance leading-[1.1]">
              Join <span className="gradient-text-multi">Our Team</span>
            </h1>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto text-balance leading-relaxed">
              Build your career with a team that's transforming the future of work
            </p>
          </div>
        </div>
      </section>
      {/* Why Join Us */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <Card className="border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-12">
            <h2 className="text-4xl font-bold mb-6">Why Hiring Mantra?</h2>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              At Hiring Mantra, you'll work with a passionate team that's redefining recruitment and HR services. We
              value innovation, growth, and a people-first culture. Join us to make a real impact on how organizations
              build their teams.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>
      {/* Open Positions */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Open <span className="gradient-text-multi">Positions</span>
            </h2>
            <p className="text-xl text-gray-400">Find your next opportunity with us</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {openPositions.map((position, i) => (
              <Card
                key={i}
                className="group border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-8 hover:border-primary/50 transition-all duration-500 cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        {position.department}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {position.type}
                      </div>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{position.description}</p>
                  </div>
                  <Link href={`mailto:careers@hiringmantra.com?subject=Application for ${position.title}`}>
                    <Button className="bg-primary text-black hover:bg-primary/90 font-semibold group/btn whitespace-nowrap">
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="gradient-border p-12 rounded-3xl text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Don't See the <span className="gradient-text-multi">Right Role?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              We're always looking for exceptional talent. Send us your resume and let's explore how you can contribute.
            </p>
            <Link href="mailto:careers@hiringmantra.com?subject=General Application - Resume Submission">
              <Button
                size="lg"
                className="bg-primary text-black hover:bg-primary/90 font-semibold text-lg px-8 py-6 glow-effect-enhanced group"
              >
                Submit Your Resume
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
