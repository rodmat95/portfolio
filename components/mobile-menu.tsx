"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"
import { useTheme } from "next-themes"
import { X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { language, setLanguage, t } = useLanguage()
  const { theme, setTheme } = useTheme()
  const scrollToSection = useSmoothScroll()

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Close the menu when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) onClose()
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isOpen, onClose])

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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex justify-end p-4">
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-6 w-6" />
            </Button>
          </div>

          <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] bg-background/90 backdrop-blur-md rounded-lg p-6 shadow-lg">
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
        </motion.div>
      )}
    </AnimatePresence>
  )
}
