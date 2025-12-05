"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SignInModal } from "@/components/sign-in-modal"
import { WhatsAppButton } from "@/components/whatsapp-button"
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Clock,
  TrendingUp,
  Shield,
  MessageSquare,
  Calendar,
  DollarSign,
  Award,
  Target,
  UserCheck,
  FileText,
  BarChart3,
  Lock,
  Globe,
  Heart,
  Zap,
} from "lucide-react"

export default function VirtualHRPage() {
  const [isSignInOpen, setIsSignInOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const features = [
    {
      icon: Users,
      title: "Dedicated HR Partner",
      description: "Get a dedicated virtual HR professional assigned to your business",
    },
    {
      icon: Clock,
      title: "Flexible Availability",
      description: "Access HR support when you need it, without full-time overhead",
    },
    {
      icon: Shield,
      title: "Compliance Expertise",
      description: "Stay compliant with labor laws and HR regulations effortlessly",
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "HR support that grows with your business needs",
    },
    {
      icon: MessageSquare,
      title: "Direct Communication",
      description: "Direct line to your HR partner via phone, email, or video calls",
    },
    {
      icon: Calendar,
      title: "Strategic Planning",
      description: "Long-term HR strategy development and implementation",
    },
  ]

  const services = [
    "Employee Onboarding & Offboarding",
    "Performance Management Systems",
    "Policy Development & Implementation",
    "Conflict Resolution & Mediation",
    "HR Compliance & Audits",
    "Benefits Administration",
    "Training & Development Programs",
    "Employee Relations Advisory",
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary/30 backdrop-blur-2xl bg-gradient-to-r from-black/95 via-primary/5 to-black/95 shadow-2xl shadow-primary/5">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <Image
                  src="/images/hm-20horizontal-20png-20-282-29-20-282-29.png"
                  alt="Hiring Mantra"
                  width={420}
                  height={84}
                  className="h-24 w-auto brightness-110 hover:brightness-125 transition-all duration-300"
                />
              </div>
            </Link>
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
                href="/virtual-hr"
                className="relative px-4 py-2 text-sm font-medium text-primary transition-all duration-300 group"
              >
                <span className="relative z-10">Virtual HR Services</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-cyan-400 transition-all duration-300"></span>
                <span className="absolute inset-0 bg-primary/10 rounded-lg transition-all duration-300"></span>
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

      <main className="pt-32">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 mb-6">
              <span className="text-sm font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Individual Virtual HR Services
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Your Dedicated{" "}
              <span className="bg-gradient-to-r from-primary via-cyan-400 to-accent bg-clip-text text-transparent">
                HR Partner
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-4 leading-relaxed">
              Senior-Level Expertise Without the Full-Time Cost
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-3xl mx-auto">
              For high-growth startups and small businesses, the need for strategic HR guidance is constant, but the
              budget for a full-time, senior HR leader is often out of reach. Our Individual Virtual HR (V-HR) service
              assigns you a dedicated, highly experienced HR professional who integrates with your team remotely.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/consultation">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-cyan-400 text-black hover:from-primary/90 hover:to-cyan-500 font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
                >
                  Get Your Virtual HR Partner
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href={`https://wa.me/919625667062`} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/30 text-white hover:bg-white/5 hover:text-white transition-all duration-300 bg-transparent"
                >
                  Schedule a Call
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="relative p-8 rounded-2xl border-l-4 border-primary bg-gradient-to-r from-primary/10 to-transparent backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="text-5xl text-primary/30">"</div>
                <div>
                  <p className="text-lg text-gray-200 italic mb-4">
                    Our V-HR Lead transformed our entire people operations. Turnover dropped 15% in six months, and we
                    finally have strategic HR guidance that scales with our growth.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <span className="text-lg font-bold text-black">SG</span>
                    </div>
                    <div>
                      <p className="font-semibold text-white">Sarah Garcia</p>
                      <p className="text-sm text-gray-400">CEO, TechFlow Solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Chart Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              V-HR vs.{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Full-Time HR Manager
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See how our Individual V-HR service compares to hiring a full-time HR manager
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-primary/30">
                    <th className="text-left p-6 text-gray-400 font-semibold">Feature</th>
                    <th className="text-left p-6 text-gray-400 font-semibold">Single In-House HR Manager (FTE)</th>
                    <th className="text-left p-6 text-primary font-semibold">Your Individual V-HR Lead</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="p-6 font-medium text-white">Cost</td>
                    <td className="p-6 text-gray-400">High fixed annual salary + 30% overhead (taxes, benefits)</td>
                    <td className="p-6 text-gray-300">Fractional, predictable monthly retainer</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="p-6 font-medium text-white">Expertise</td>
                    <td className="p-6 text-gray-400">Limited to one person's generalist experience</td>
                    <td className="p-6 text-gray-300">Access to senior, specialized, multi-sector experience</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="p-6 font-medium text-white">Scalability</td>
                    <td className="p-6 text-gray-400">Fixed capacity; hard to scale up or down</td>
                    <td className="p-6 text-gray-300">Flexible capacity; easily adjust hours/scope as you grow</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-6 font-medium text-white">Tech Integration</td>
                    <td className="p-6 text-gray-400">Must buy and learn all software separately</td>
                    <td className="p-6 text-gray-300">Manages and integrates your HRIS/Tech stack</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* How It Works Section with Visual Workflow */}
        <section className="container mx-auto px-6 py-20 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How the Individual{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                V-HR Model Works
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              You don't just get outsourced tasks; you gain a strategic partner focused on your long-term success
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center font-bold text-black text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Direct Assignment & Integration</h3>
                  <div className="space-y-2 text-gray-400">
                    <p>
                      <strong className="text-primary">Your Dedicated Lead:</strong> You are matched with an HR
                      professional whose expertise aligns with your sector (Tech/FinTech) and stage (Seed/Scale).
                    </p>
                    <p>
                      <strong className="text-primary">Seamless Integration:</strong> Your V-HR Lead attends key
                      management meetings (virtually), learns your company culture, and operates as an official member
                      of your leadership team.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center font-bold text-black text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Technology-Driven Efficiency</h3>
                  <p className="text-gray-400 mb-4">
                    Your V-HR Lead utilizes and manages cloud-based tools to automate and streamline work:
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-white">HRIS Management:</strong> They oversee your chosen HR Information
                        System, ensuring data accuracy and reporting capability
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-white">Policy Automation:</strong> Implementing and managing automated
                        workflows for onboarding, leave requests, and document signing
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-white">Data Analytics:</strong> Providing you with clean, customized
                        data reports on turnover, hiring metrics, and compliance status
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Workflow Diagram */}
            <div className="flex items-center justify-center">
              <div className="w-full p-8 rounded-2xl bg-white/[0.02] border border-primary/20">
                <h4 className="text-center text-lg font-semibold mb-8 text-primary">Our 4-Step Deployment Process</h4>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                      <Target className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-1">Client Needs Analysis</h5>
                      <p className="text-sm text-gray-400">Understanding your unique HR challenges</p>
                    </div>
                  </div>
                  <div className="ml-8 h-8 border-l-2 border-dashed border-primary/30"></div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                      <UserCheck className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-1">V-HR Lead Match</h5>
                      <p className="text-sm text-gray-400">Pairing you with the perfect expert</p>
                    </div>
                  </div>
                  <div className="ml-8 h-8 border-l-2 border-dashed border-primary/30"></div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                      <Zap className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-1">HRIS/Tech Stack Setup</h5>
                      <p className="text-sm text-gray-400">Implementing the right tools & systems</p>
                    </div>
                  </div>
                  <div className="ml-8 h-8 border-l-2 border-dashed border-primary/30"></div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-1">Ongoing Strategic Guidance</h5>
                      <p className="text-sm text-gray-400">Continuous support as you scale</p>
                    </div>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-400 mt-8 italic">Integration completed in under 2 weeks</p>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Services Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Key Services Delivered by{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Your V-HR Lead
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Your V-HR Lead manages the full spectrum of HR needs, with a specialization in the demands of rapidly
              scaling organizations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-primary/20 hover:border-primary/40 hover:bg-white/[0.05] transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Strategic People Planning</h3>
              <p className="text-gray-400">
                Developing annual HR roadmaps, forecasting organizational structure, and building succession plans
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.02] border border-primary/20 hover:border-primary/40 hover:bg-white/[0.05] transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Recruitment Oversight</h3>
              <p className="text-gray-400">
                Managing the entire recruiting process, from job description finalization to offer negotiation
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.02] border border-primary/20 hover:border-primary/40 hover:bg-white/[0.05] transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6">
                <FileText className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Compliance & Policy</h3>
              <p className="text-gray-400">
                Drafting and implementing foundational employee handbooks, ensuring multi-state/global labor law
                compliance
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.02] border border-primary/20 hover:border-primary/40 hover:bg-white/[0.05] transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6">
                <Award className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Performance & Culture</h3>
              <p className="text-gray-400">
                Designing and rolling out effective performance management systems and employee engagement surveys
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.02] border border-primary/20 hover:border-primary/40 hover:bg-white/[0.05] transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6">
                <MessageSquare className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Employee Relations</h3>
              <p className="text-gray-400">
                Handling sensitive employee investigations, conflict resolution, and mediating disputes
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.02] border border-primary/20 hover:border-primary/40 hover:bg-white/[0.05] transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6">
                <Heart className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">DEI & Belonging Strategy</h3>
              <p className="text-gray-400">
                Building measurable, inclusive cultures that go beyond basic compliance to create true belonging
              </p>
            </div>
          </div>

          {/* Urgent CTA */}
          <div className="mt-12 text-center">
            <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-accent/20 to-primary/20 border border-accent/30">
              <h3 className="text-2xl font-bold mb-4 text-white">Need to Hire NOW?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl">
                Startups often have urgent recruiting needs. Get immediate access to our recruitment experts.
              </p>
              <Link href="/consultation">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-accent to-orange-500 text-black hover:from-accent/90 hover:to-orange-600 font-semibold shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:scale-105 transition-all duration-300"
                >
                  Fast-Track Recruitment Support
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Cost Savings Section with Chart */}
        <section className="container mx-auto px-6 py-20 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                The{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Budget-Friendly
                </span>{" "}
                Advantage
              </h2>
              <p className="text-xl text-gray-400">
                The Individual V-HR model is optimized for the financial realities of a startup
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Cost Comparison Visual */}
              <div className="p-8 rounded-2xl bg-white/[0.02] border border-primary/20">
                <h3 className="text-2xl font-bold mb-8 text-center text-white">Cost Comparison: FTE vs. V-HR</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">In-House FTE</span>
                      <span className="text-2xl font-bold text-gray-400">$90,000</span>
                    </div>
                    <div className="h-12 bg-gradient-to-r from-gray-600/30 to-gray-400/30 rounded-lg relative overflow-hidden">
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-gray-500/50 to-gray-400/50"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">+ Benefits, Taxes, Software</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-primary font-medium">V-HR Service</span>
                      <span className="text-2xl font-bold text-primary">$30,000 - $50,000</span>
                    </div>
                    <div className="h-12 bg-gradient-to-r from-primary/30 to-cyan-400/30 rounded-lg relative overflow-hidden">
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-primary to-cyan-400"
                        style={{ width: "55%" }}
                      ></div>
                    </div>
                    <p className="text-sm text-primary/70 mt-1">All-Inclusive</p>
                  </div>
                </div>
                <p className="text-center text-lg font-semibold text-accent mt-8">
                  💰 Save up to 60% annually on senior HR leadership
                </p>
              </div>

              {/* Savings Benefits */}
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">Savings vs. FTE</h4>
                    <p className="text-gray-400">
                      The cost of one Individual V-HR subscription is typically 30% to 70% less than the total loaded
                      cost (salary + benefits + taxes + software) of a permanent full-time HR manager
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">Predictable Spend</h4>
                    <p className="text-gray-400">
                      You pay a fixed monthly retainer for senior expertise, eliminating the surprise costs of hiring
                      and training
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">Flexible Scaling</h4>
                    <p className="text-gray-400">
                      Easily adjust your service level as your company grows, without the commitment of a full-time hire
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Security Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Trust,{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Security & Compliance
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Your data security and ethical HR practices are our top priorities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-primary/20 hover:border-primary/40 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6">
                <Lock className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Data Security & Privacy</h3>
              <p className="text-gray-400 mb-4">
                Enterprise-grade security protecting sensitive payroll and employee data
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>GDPR & CCPA Compliant</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>End-to-End Encryption</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Regular Security Audits</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.02] border border-primary/20 hover:border-primary/40 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6">
                <Globe className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Change Management Expertise</h3>
              <p className="text-gray-400 mb-4">Expert guidance through restructuring and transformation</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Organizational Restructuring</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Mergers & Acquisitions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Culture Transformation</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.02] border border-primary/20 hover:border-primary/40 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Service Level Agreement</h3>
              <p className="text-gray-400 mb-4">Professional guarantee ensuring reliable, timely support</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>4-Hour Critical Response</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>24-Hour Standard Response</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>99.9% Uptime Guarantee</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-20">
          <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-black to-accent/10 p-12 md:p-16">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Gain Strategic{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  HR Leadership?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get started with your dedicated V-HR specialist today and experience senior HR expertise without the
                overhead
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/consultation">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-cyan-400 text-black hover:from-primary/90 hover:to-cyan-500 font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
                  >
                    Book a Consultation with a V-HR Specialist
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href={`https://wa.me/919625667062`} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary/30 text-white hover:bg-white/5 hover:text-white transition-all duration-300 bg-transparent"
                  >
                    Schedule a Call
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SignInModal isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)} />
      <WhatsAppButton />
    </div>
  )
}
