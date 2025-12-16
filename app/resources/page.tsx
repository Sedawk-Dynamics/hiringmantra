"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Calendar } from "lucide-react"
import Image from "next/image"

export default function ResourcesPage() {
  const resources = [
    {
      category: "Technology",
      title: "The Future of AI in Recruitment",
      excerpt:
        "Discover how artificial intelligence is revolutionizing the hiring process and what it means for your organization.",
      date: "Dec 2024",
      image: "/futuristic-ai-robot-analyzing-candidate-resumes-ho.jpg",
    },
    {
      category: "Growth",
      title: "10 Tips for Scaling Your Startup Team",
      excerpt:
        "Essential strategies for building and growing your team as your startup scales from seed to Series A and beyond.",
      date: "Nov 2024",
      image: "/diverse-startup-team-collaboration-modern-office-g.jpg",
    },
    {
      category: "Culture",
      title: "Building a Culture-First Organization",
      excerpt:
        "Learn how to create a strong company culture that attracts top talent and drives long-term business success.",
      date: "Nov 2024",
      image: "/happy-diverse-team-celebrating-together-modern-wor.jpg",
    },
    {
      category: "Strategy",
      title: "Remote Hiring Best Practices",
      excerpt:
        "Navigate the challenges of remote recruitment with proven strategies for assessing and onboarding distributed teams.",
      date: "Oct 2024",
      image: "/remote-team-video-call-collaboration.jpg",
    },
    {
      category: "Leadership",
      title: "Executive Hiring in a Competitive Market",
      excerpt:
        "Insights on attracting and securing top executive talent when competition for leadership is at an all-time high.",
      date: "Oct 2024",
      image: "/executive-leadership-meeting-boardroom.jpg",
    },
    {
      category: "Compliance",
      title: "Payroll Compliance 101",
      excerpt:
        "A comprehensive guide to managing payroll compliance across multiple jurisdictions and staying audit-ready.",
      date: "Sep 2024",
      image: "/financial-compliance-audit-documents.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 animated-gradient-bg" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight text-balance leading-[1.1]">
              Resources & <span className="gradient-text-multi">Insights</span>
            </h1>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto text-balance leading-relaxed">
              Expert insights, best practices, and thought leadership on modern workforce management
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, i) => (
              <Card
                key={i}
                className="group border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={resource.image || "/placeholder.svg"}
                    alt={resource.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary text-xs font-semibold">
                      {resource.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                    <Calendar className="w-4 h-4" />
                    {resource.date}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {resource.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4">{resource.excerpt}</p>
                  <Button
                    variant="ghost"
                    className="text-primary hover:text-primary/80 p-0 h-auto font-semibold group/btn"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="gradient-border p-12 rounded-3xl text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay <span className="gradient-text-multi">Informed</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Subscribe to our newsletter for the latest insights, trends, and best practices in HR and recruitment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:outline-none text-white placeholder:text-gray-500"
              />
              <Button className="bg-primary text-black hover:bg-primary/90 font-semibold px-8">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
