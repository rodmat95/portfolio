"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { useLanguage } from "@/context/language-context"
import { motion, AnimatePresence } from "framer-motion"
import { Settings, X, Sun, Moon, Globe, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"

export default function MobileControls() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<"menu" | "settings">("menu")
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
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
      if (isOpen) setIsOpen(false)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isOpen])

  const navigationItems = [
    { href: "home", label: t("navigation.home") },
    { href: "about", label: t("navigation.about") },
    { href: "projects", label: t("navigation.projects") },
    { href: "skills", label: t("navigation.skills") },
    { href: "process", label: t("navigation.process") },
    { href: "contact", label: t("navigation.contact") },
  ]

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setIsOpen(false)
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
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <motion.button
          className="w-14 h-14 rounded-full bg-gradient-professional dark:bg-gradient-dark text-white shadow-lg flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <X size={24} /> : <Settings size={24} />}
        </motion.button>
      </div>

      {/* Expandable Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-md md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="fixed bottom-24 right-6 w-64 bg-background/95 backdrop-blur-sm border rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              {/* Tabs */}
              <div className="flex border-b">
                <button
                  className={`flex-1 py-3 px-4 text-sm font-medium ${
                    activeTab === "menu" ? "bg-muted text-foreground" : "text-muted-foreground"
                  }`}
                  onClick={() => setActiveTab("menu")}
                >
                  <div className="flex items-center justify-center gap-2">
                    <Menu size={16} />
                    <span>{t("navigation.menu") || "Menu"}</span>
                  </div>
                </button>
                <button
                  className={`flex-1 py-3 px-4 text-sm font-medium ${
                    activeTab === "settings" ? "bg-muted text-foreground" : "text-muted-foreground"
                  }`}
                  onClick={() => setActiveTab("settings")}
                >
                  <div className="flex items-center justify-center gap-2">
                    <Settings size={16} />
                    <span>{t("settings.title") || "Settings"}</span>
                  </div>
                </button>
              </div>

              {/* Content */}
              <div className="p-5">
                {activeTab === "menu" && (
                  <div className="space-y-3">
                    {navigationItems.map((item) => (
                      <button
                        key={item.href}
                        className="w-full text-left px-4 py-2.5 rounded-md hover:bg-muted transition-colors text-foreground"
                        onClick={() => handleNavClick(item.href)}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}

                {activeTab === "settings" && (
                  <div className="space-y-6">
                    {/* Theme Selection */}
                    <div className="pb-5 border-b">
                      <h3 className="text-sm font-medium mb-3">{t("themeToggle.title") || "Theme"}</h3>
                      <div className="grid grid-cols-3 gap-3">
                        <Button
                          variant={theme === "light" ? "default" : "outline"}
                          size="sm"
                          onClick={() => handleThemeChange("light")}
                          className="w-full h-10 flex flex-col items-center justify-center gap-[0.5px] py-2"
                        >
                          <Sun className="h-4 w-4" />
                          <span className="text-xs">{t("themeToggle.light")}</span>
                        </Button>
                        <Button
                          variant={theme === "dark" ? "default" : "outline"}
                          size="sm"
                          onClick={() => handleThemeChange("dark")}
                          className="w-full h-10 flex flex-col items-center justify-center gap-[0.5px] py-2"
                        >
                          <Moon className="h-4 w-4" />
                          <span className="text-xs">{t("themeToggle.dark")}</span>
                        </Button>
                        <Button
                          variant={theme === "system" ? "default" : "outline"}
                          size="sm"
                          onClick={() => handleThemeChange("system")}
                          className="w-full h-10 flex flex-col items-center justify-center gap-[0.5px] py-2"
                        >
                          <span className="h-4 w-4">💻</span>
                          <span className="text-xs">{t("themeToggle.system")}</span>
                        </Button>
                      </div>
                    </div>

                    {/* Language Selection */}
                    <div>
                      <h3 className="text-sm font-medium mb-3">{t("languageSwitcher.label")}</h3>
                      <div className="grid grid-cols-2 gap-3">
                        <Button
                          variant={language === "es" ? "default" : "outline"}
                          size="sm"
                          onClick={() => handleLanguageChange("es")}
                          className="w-full h-10"
                        >
                          <Globe className="h-4 w-4 mr-1" />
                          <span className="text-xs">{t("languageSwitcher.languages.es")}</span>
                        </Button>
                        <Button
                          variant={language === "en" ? "default" : "outline"}
                          size="sm"
                          onClick={() => handleLanguageChange("en")}
                          className="w-full h-10"
                        >
                          <Globe className="h-4 w-4 mr-1" />
                          <span className="text-xs">{t("languageSwitcher.languages.en")}</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
