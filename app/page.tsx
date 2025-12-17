"use client"

import StickyNav from "@/components/sticky-nav"
import HeroSection from "@/components/hero-section"
import ProjectsSection from "@/components/projects-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import { useEffect } from "react"
import { useLanguage } from "@/context/language-context"

export default function Home() {
  const { t } = useLanguage()

  // Smooth scrolling setup
  useEffect(() => {
    if (typeof window === "undefined") return // Avoid errors in SSR
    // Handle initial hash in URL
    const hash = window.location.hash
    if (hash) {
      const id = hash.replace("#", "")
      const element = document.getElementById(id)
      if (element) {
        setTimeout(() => {
          const yOffset = -80 // Header height offset
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
          window.scrollTo({ top: y, behavior: "smooth" })
        }, 100)
      }
    }
  }, [])

  return (
    <div className="relative">
      <StickyNav />

      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
