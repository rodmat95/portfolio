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
import OverflowDetector from "@/components/overflow-detector"
import MenuDebug from "@/components/menu-debug"
import MenuTestButton from "@/components/menu-test-button"
import ScrollLockTester from "@/components/scroll-lock-tester"
import SectionDebug from "@/components/section-debug"

export default function Home() {
  const { t } = useLanguage()

  // Add debugging for section IDs
  useEffect(() => {
    if (typeof window === "undefined") return

    // Log all section IDs for debugging
    const sections = document.querySelectorAll("section[id]")
    console.log(
      "Available section IDs:",
      Array.from(sections).map((s) => s.id),
    )
  }, [])

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
    <div className="relative overflow-x-hidden">
      <StickyNav />

      <main className="overflow-x-hidden">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>

      <Footer />

      {/* Only rendered in development mode */}
      <OverflowDetector />

      {/* Debug component for mobile menu */}
      <MenuDebug />

      {/* Section debug tool */}
      {process.env.NODE_ENV === "development" && <SectionDebug />}

      {/* Test components for development */}
      {process.env.NODE_ENV === "development" && (
        <>
          <MenuTestButton />
          <ScrollLockTester />
        </>
      )}
    </div>
  )
}
