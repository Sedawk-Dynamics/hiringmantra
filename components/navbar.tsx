"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { SignInModal } from "@/components/sign-in-modal"

export function Navbar() {
  const [isSignInOpen, setIsSignInOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary/30 backdrop-blur-2xl bg-gradient-to-r from-black/95 via-primary/5 to-black/95 shadow-2xl shadow-primary/5">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 group">
              <div className="relative">
                <Link href="/">
                  <Image
                    src="/images/hm-20horizontal-20png-20-282-29-20-282-29.png"
                    alt="Hiring Mantra"
                    width={420}
                    height={84}
                    className="h-24 w-auto brightness-110 hover:brightness-125 transition-all duration-300"
                  />
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-1">
              <Link
                href="/"
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                  isActive("/") ? "text-primary" : "text-gray-200 hover:text-primary"
                }`}
              >
                <span className="relative z-10">Home</span>
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-cyan-400 transition-all duration-300 ${
                    isActive("/") ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
                <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 rounded-lg transition-all duration-300"></span>
              </Link>
              <Link
                href="/services"
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                  isActive("/services") ? "text-primary" : "text-gray-200 hover:text-primary"
                }`}
              >
                <span className="relative z-10">Services</span>
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-cyan-400 transition-all duration-300 ${
                    isActive("/services") ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
                <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 rounded-lg transition-all duration-300"></span>
              </Link>
              <Link
                href="/virtual-hr"
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                  isActive("/virtual-hr") ? "text-primary" : "text-gray-200 hover:text-primary"
                }`}
              >
                <span className="relative z-10">Virtual HR Services</span>
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-cyan-400 transition-all duration-300 ${
                    isActive("/virtual-hr") ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
                <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 rounded-lg transition-all duration-300"></span>
              </Link>
              <Link
                href="/about"
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                  isActive("/about") ? "text-primary" : "text-gray-200 hover:text-primary"
                }`}
              >
                <span className="relative z-10">About</span>
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-cyan-400 transition-all duration-300 ${
                    isActive("/about") ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
                <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 rounded-lg transition-all duration-300"></span>
              </Link>
              <Link
                href="/resources"
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                  isActive("/resources") ? "text-primary" : "text-gray-200 hover:text-primary"
                }`}
              >
                <span className="relative z-10">Resources</span>
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-cyan-400 transition-all duration-300 ${
                    isActive("/resources") ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
                <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 rounded-lg transition-all duration-300"></span>
              </Link>
              <Link
                href="/careers"
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                  isActive("/careers") ? "text-primary" : "text-gray-200 hover:text-primary"
                }`}
              >
                <span className="relative z-10">Careers</span>
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-cyan-400 transition-all duration-300 ${
                    isActive("/careers") ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
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

      <SignInModal isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)} />
    </>
  )
}
