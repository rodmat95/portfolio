"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"
import { useLanguage } from "@/context/language-context"
import { Menu, X, Globe, Sun, Moon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"

interface NavigationItem {
  href: string
  label: string
}

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const { t, language, setLanguage } = useLanguage()
  const { theme, setTheme } = useTheme()
  const scrollToSection = useSmoothScroll()

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen || showSettings) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen, showSettings])

  const navigationItems: NavigationItem[] = [
    { href: "home", label: t("navigation.home") },
    { href: "about", label: t("navigation.about") },
    { href: "projects", label: t("navigation.projects") },
    { href: "skills", label: t("navigation.skills") },
    { href: "process", label: t("navigation.process") },
    { href: "contact", label: t("navigation.contact") },
  ]

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    scrollToSection(sectionId)
    setIsOpen(false)
    setShowSettings(false)
  }

  const toggleSettings = () => {
    setShowSettings(!showSettings)
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
    <div className="md:hidden">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={toggleSettings} className="relative" aria-label="Settings">
          <Globe className="h-5 w-5" />
          {showSettings && (
            <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-primary animate-pulse"></span>
          )}
        </Button>
        <Button variant="outline" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Backdrop overlay for when menu is open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background/50 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Settings panel */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 right-4 z-50 bg-background/95 backdrop-blur-sm border rounded-lg shadow-lg p-4 w-64"
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-2">{t("themeToggle.title") || "Theme"}</h3>
                <div className="grid grid-cols-3 gap-2">
                  <Button
                    variant={theme === "light" ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleThemeChange("light")}
                    className="w-full"
                  >
                    <Sun className="h-4 w-4 mr-1" />
                    <span className="text-xs">{t("themeToggle.light")}</span>
                  </Button>
                  <Button
                    variant={theme === "dark" ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleThemeChange("dark")}
                    className="w-full"
                  >
                    <Moon className="h-4 w-4 mr-1" />
                    <span className="text-xs">{t("themeToggle.dark")}</span>
                  </Button>
                  <Button
                    variant={theme === "system" ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleThemeChange("system")}
                    className="w-full"
                  >
                    <span className="text-xs">{t("themeToggle.system")}</span>
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">{t("languageSwitcher.label")}</h3>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant={language === "es" ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleLanguageChange("es")}
                    className="w-full"
                  >
                    <span className="text-xs">{t("languageSwitcher.languages.es")}</span>
                  </Button>
                  <Button
                    variant={language === "en" ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleLanguageChange("en")}
                    className="w-full"
                  >
                    <span className="text-xs">{t("languageSwitcher.languages.en")}</span>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main navigation menu */}
      <div
        className={cn(
          "fixed inset-x-0 top-16 bottom-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-lg transition-transform duration-300 transform overflow-y-auto",
          isOpen ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <div className="container py-4">
          <nav className="flex flex-col space-y-4">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={`#${item.href}`}
                className="text-lg font-medium py-2 hover:text-primary transition-colors"
                onClick={(e) => handleClick(e, item.href)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
