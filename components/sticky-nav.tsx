"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useLanguage } from "@/context/language-context"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"
import { useHeaderScroll } from "@/hooks/use-header-scroll"
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

  // Usar el nuevo hook para manejar la visibilidad del encabezado
  const { visible, isMobile } = useHeaderScroll()

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
          scrolled ? "bg-background/80 backdrop-blur-md border-b py-2" : "bg-transparent py-3",
          mobileMenuOpen ? "bg-background/90 backdrop-blur-md border-b" : "",
          // Solo aplicar la transformación en móviles
          !visible ? "transform -translate-y-full sm:transform-none" : "transform translate-y-0",
        )}
      >
        <div className="editorial-container">
          {/* Layout para pantallas grandes (nav y superiores) - Diseño original en una línea */}
          <div className="hidden nav:flex items-center justify-between">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "home")}
              className="text-lg font-medium tracking-tight transition-colors hover:text-primary"
            >
              <span className="font-bold">Rodmat95</span>.dev
            </a>

            <nav className="flex items-center mx-4 space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={`#${item.href}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "text-sm font-medium text-center transition-colors relative group",
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
                className="inline-flex items-center justify-center h-9 px-4 py-2 rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {t("navigation.letsTalk")}
              </a>
            </div>
          </div>

          {/* Layout para pantallas pequeñas de computadora (sm a nav) - Diseño de dos líneas */}
          <div className="hidden sm:block nav:hidden">
            {/* Primera línea: Logo y controles */}
            <div className="flex items-center justify-between">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, "home")}
                className="text-lg font-medium tracking-tight transition-colors hover:text-primary"
              >
                <span className="font-bold">Rodmat95</span>.dev
              </a>

              <div className="flex items-center space-x-4">
                <LanguageSwitcher />
                <ThemeToggle />
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "contact")}
                  className="inline-flex items-center justify-center h-9 px-4 py-2 rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {t("navigation.letsTalk")}
                </a>
              </div>
            </div>

            {/* Segunda línea: Navegación centrada */}
            <div className="flex justify-center">
              <nav className="flex items-center space-x-4 overflow-x-auto no-scrollbar py-2">
                {navigationItems.map((item) => (
                  <a
                    key={item.href}
                    href={`#${item.href}`}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      "text-sm font-medium text-center transition-colors relative group whitespace-nowrap",
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
            </div>
          </div>

          {/* Layout para móviles (xs a sm) - Menú hamburguesa */}
          <div className="flex sm:hidden items-center justify-between">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "home")}
              className="text-lg font-medium tracking-tight transition-colors hover:text-primary"
            >
              <span className="font-bold">Rodmat95</span>.dev
            </a>

            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              <ThemeToggle />
              <button
                className="p-2 rounded-md hover:bg-accent"
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
