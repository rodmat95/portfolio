"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useLanguage } from "@/context/language-context"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"
import { ThemeToggle } from "@/components/theme-toggle"
import LanguageSwitcher from "@/components/language-switcher"
import FixedMobileMenu from "@/components/fixed-mobile-menu"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"

export default function StickyNav() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useLanguage()
  const scrollToSection = useSmoothScroll()

  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const navigationItems = [
    { href: "home", label: t("navigation.home") },
    { href: "projects", label: t("navigation.projects") },
    { href: "about", label: t("navigation.about") },
    { href: "services", label: t("navigation.services") },
    { href: "contact", label: t("navigation.contact") },
  ]

  // Log when menu state changes (for debugging)
  useEffect(() => {
    console.log("Mobile menu state changed:", mobileMenuOpen)
  }, [mobileMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 20)

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

  // Handle header visibility on scroll (hide on scroll down, show on scroll up)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      const isScrollingDown = currentScrollPos > prevScrollPos
      const isScrollingUp = currentScrollPos < prevScrollPos
      const isScrolledPastThreshold = currentScrollPos > 100

      // Only hide header when scrolling down and past the threshold
      if (isScrollingDown && isScrolledPastThreshold) {
        setVisible(false)
      } else if (isScrollingUp) {
        setVisible(true)
      }

      setPrevScrollPos(currentScrollPos)
    }

    // Add throttling to improve performance
    let ticking = false
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", scrollListener)
    return () => window.removeEventListener("scroll", scrollListener)
  }, [prevScrollPos])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    scrollToSection(sectionId)
  }

  const toggleMobileMenu = () => {
    console.log("Toggle mobile menu clicked, current state:", mobileMenuOpen)
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "bg-background/80 backdrop-blur-md border-b py-4" : "bg-transparent py-6",
          mobileMenuOpen ? "bg-background/90 backdrop-blur-md border-b" : "",
          // Add this line for mobile header visibility
          !visible ? "transform -translate-y-full md:transform-none" : "transform translate-y-0",
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
              <button
                className="md:hidden p-2 rounded-md hover:bg-accent"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Render the fixed mobile menu */}
      <FixedMobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  )
}
