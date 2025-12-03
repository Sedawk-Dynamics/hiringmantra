"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Phone, Mail, MapPin, Calendar, Building2, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    companySize: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    alert("Thank you! Our team will contact you within 24 hours.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary/30 backdrop-blur-2xl bg-gradient-to-r from-black/95 via-primary/5 to-black/95 shadow-2xl shadow-primary/5">
        <div className="container mx-auto px-6 py-5">
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
            <Link href="/">
              <Button variant="ghost" className="text-gray-200 hover:text-primary">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent animate-gradient">
              Get Expert Consultation
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Schedule a free consultation with our HR automation experts and discover how we can transform your hiring
              process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="backdrop-blur-xl bg-gradient-to-br from-zinc-900/90 via-zinc-950/90 to-black/90 border border-primary/20 rounded-2xl p-8 shadow-2xl shadow-primary/5">
              <h2 className="text-2xl font-bold mb-6 text-primary">Request a Consultation</h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/50 border border-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/50 border border-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Company Size</label>
                    <select
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/50 border border-primary/20 rounded-lg text-white focus:outline-none focus:border-primary/50 transition-colors"
                    >
                      <option value="">Select size</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-500">201-500 employees</option>
                      <option value="500+">500+ employees</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Service Interest</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/50 border border-primary/20 rounded-lg text-white focus:outline-none focus:border-primary/50 transition-colors"
                    >
                      <option value="">Select service</option>
                      <option value="recruitment">Recruitment</option>
                      <option value="payroll">Payroll Management</option>
                      <option value="compliance">Compliance</option>
                      <option value="onboarding">Employee Onboarding</option>
                      <option value="performance">Performance Management</option>
                      <option value="all">All Services</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-black/50 border border-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    placeholder="Tell us about your hiring needs..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-cyan-400 text-black font-semibold py-3 hover:from-primary/90 hover:to-cyan-500 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="backdrop-blur-xl bg-gradient-to-br from-zinc-900/90 via-zinc-950/90 to-black/90 border border-primary/20 rounded-2xl p-8 shadow-2xl shadow-primary/5">
                <h3 className="text-xl font-bold mb-6 text-primary">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Email</p>
                      <a
                        href="mailto:hello@hiringmantra.com"
                        className="text-white hover:text-primary transition-colors"
                      >
                        hello@hiringmantra.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Phone</p>
                      <a href="tel:+919625667062" className="text-white hover:text-primary transition-colors">
                        +91 96256 67062
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Office</p>
                      <p className="text-white">
                        5th Floor Plot No. 4, Tech Garden Sector 35,
                        <br />
                        Narsinghpur Gurugram – 122004 Haryana
                        <br />
                        INDIA
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-xl bg-gradient-to-br from-zinc-900/90 via-zinc-950/90 to-black/90 border border-primary/20 rounded-2xl p-8 shadow-2xl shadow-primary/5">
                <h3 className="text-xl font-bold mb-6 text-primary">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-white">Free Consultation</p>
                      <p className="text-sm text-gray-400">30-minute strategy session with our experts</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-white">Tailored Solutions</p>
                      <p className="text-sm text-gray-400">Custom HR automation for your business</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-white">Expert Support</p>
                      <p className="text-sm text-gray-400">Dedicated team to guide your transformation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  )
}
