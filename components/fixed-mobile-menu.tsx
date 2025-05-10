"use client"

import { useEffect } from "react"
import { useLanguage } from "@/context/language-context"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"
import { useScrollLock } from "@/hooks/use-scroll-lock"
import { useTheme } from "next-themes"
import { X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FixedMobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function FixedMobileMenu({ isOpen, onClose }: FixedMobileMenuProps) {
  const { language, setLanguage, t } = useLanguage()
  const { theme, setTheme } = useTheme()
  const scrollToSection = useSmoothScroll()

  // Use our custom scroll lock hook
  useScrollLock(isOpen)

  // Log when menu state changes (for debugging)
  useEffect(() => {
    console.log("Mobile menu isOpen:", isOpen)
  }, [isOpen])

  // Prevent touch move events when menu is open (additional protection for iOS)
  useEffect(() => {
    if (!isOpen) return

    const preventTouchMove = (e: TouchEvent) => {
      // Allow scrolling inside the menu content
      const isMenuContent = (e.target as Element)?.closest(".menu-content")
      if (!isMenuContent) {
        e.preventDefault()
      }
    }

    document.addEventListener("touchmove", preventTouchMove, { passive: false })

    return () => {
      document.removeEventListener("touchmove", preventTouchMove)
    }
  }, [isOpen])

  const navigationItems = [
    { href: "home", label: t("navigation.home") },
    { href: "projects", label: t("navigation.projects") },
    { href: "about", label: t("navigation.about") },
    { href: "services", label: t("navigation.services") },
    { href: "contact", label: t("navigation.contact") },
  ]

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    onClose()
  }

  // Handle language change without closing the menu
  const handleLanguageChange = (lang: "es" | "en") => {
    setLanguage(lang)
    // Intentionally not closing the menu
  }

  // Handle theme change without closing the menu
  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme)
    // Intentionally not closing the menu
  }

  // If menu is not open, don't render anything
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[9999] bg-background/80 backdrop-blur-md md:hidden overflow-hidden"
      aria-modal="true"
      role="dialog"
      aria-label={t("navigation.menu") || "Menu"}
    >
      <div className="flex justify-end p-4">
        <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close menu">
          <X className="h-6 w-6" />
        </Button>
      </div>

      <div className="flex flex-col items-center justify-center h-[calc(100vh-72px)] w-full bg-background/90 backdrop-blur-md p-6 menu-content overflow-y-auto">
        <nav className="flex flex-col items-center space-y-6 mb-12">
          {navigationItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-xl font-medium transition-colors hover:text-primary"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex flex-col items-center space-y-8">
          {/* Language Switcher */}
          <div className="flex flex-col items-center">
            <p className="text-sm text-foreground/60 mb-3">{t("languageSwitcher.label")}</p>
            <div className="flex space-x-4">
              <Button
                variant={language === "es" ? "default" : "outline"}
                size="sm"
                onClick={() => handleLanguageChange("es")}
                className="min-w-[100px]"
              >
                <span className="mr-2">🇪🇸</span>
                <span>{t("languageSwitcher.languages.es")}</span>
              </Button>
              <Button
                variant={language === "en" ? "default" : "outline"}
                size="sm"
                onClick={() => handleLanguageChange("en")}
                className="min-w-[100px]"
              >
                <span className="mr-2">🇺🇸</span>
                <span>{t("languageSwitcher.languages.en")}</span>
              </Button>
            </div>
          </div>

          {/* Theme Switcher */}
          <div className="flex flex-col items-center">
            <p className="text-sm text-foreground/60 mb-3">{t("themeToggle.title")}</p>
            <div className="flex space-x-4">
              <Button
                variant={theme === "light" ? "default" : "outline"}
                size="sm"
                onClick={() => handleThemeChange("light")}
              >
                <Sun className="h-4 w-4 mr-2" />
                <span>{t("themeToggle.light")}</span>
              </Button>
              <Button
                variant={theme === "dark" ? "default" : "outline"}
                size="sm"
                onClick={() => handleThemeChange("dark")}
              >
                <Moon className="h-4 w-4 mr-2" />
                <span>{t("themeToggle.dark")}</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
