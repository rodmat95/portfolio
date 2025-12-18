"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useLanguage } from "@/context/language-context"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"
import { ThemeToggle } from "@/components/theme-toggle"
import LanguageSwitcher from "@/components/language-switcher"
import MobileMenu from "@/components/mobile-menu"
import { cn } from "@/lib/utils"

export default function StickyNav() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [translateY, setTranslateY] = useState(0)
  const lastScrollY = useRef(0)
  const { t } = useLanguage()
  const scrollToSection = useSmoothScroll()

  const navigationItems = [
    { href: "home", label: t("navigation.home") },
    { href: "projects", label: t("navigation.projects") },
    { href: "about", label: t("navigation.about") },
    { href: "services", label: t("navigation.services") },
    { href: "contact", label: t("navigation.contact") },
  ]

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 20)

      // Calculate translation (progressive hide/show)
      // Only apply if scrolled past the top area to avoid conflict with initial state
      if (currentScrollY > 0) {
        const delta = currentScrollY - lastScrollY.current
        setTranslateY((prev) => {
          const newY = prev - delta
          // Clamp between -100 (approx header height) and 0
          return Math.max(-100, Math.min(0, newY))
        })
      } else {
        setTranslateY(0)
      }
      
      lastScrollY.current = currentScrollY

      // Determine active section
      const sections = navigationItems.map((item) => item.href)
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    scrollToSection(sectionId)
  }

  return (
    <header
      style={{ "--header-y": `${translateY}px` } as React.CSSProperties}
      className={cn(
        "sticky top-0 left-0 right-0 z-50 transition-colors duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md border-b py-4" : "bg-transparent py-6",
        mobileMenuOpen ? "bg-background/90 backdrop-blur-md border-b" : "",
        !mobileMenuOpen && "translate-y-[var(--header-y)] md:translate-y-0 will-change-transform"
      )}
    >
      <div className="editorial-container">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="text-lg font-medium tracking-tight transition-colors hover:text-primary"
          >
            <span className="font-bold">Rodmat95</span>.dev
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={`#${item.href}`}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "text-sm font-medium transition-colors relative group",
                  activeSection === item.href ? "text-primary" : "text-foreground/80 hover:text-foreground",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300",
                    activeSection === item.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                  )}
                />
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <ThemeToggle />
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="hidden md:inline-flex items-center justify-center h-9 px-4 py-2 rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {t("navigation.letsTalk")}
            </a>

            {/* Mobile menu button */}
            <button className="md:hidden p-2 rounded-md hover:bg-accent" onClick={() => setMobileMenuOpen(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu"
              >
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  )
}
