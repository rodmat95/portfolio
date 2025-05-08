"use client"

import type React from "react"

import { useSmoothScroll } from "@/hooks/use-smooth-scroll"
import { ThemeToggle } from "@/components/theme-toggle"
import LanguageSwitcher from "@/components/language-switcher"
import { useLanguage } from "@/context/language-context"

export default function Footer() {
  const scrollToSection = useSmoothScroll()
  const { t } = useLanguage()

  const navigationItems = [
    { href: "home", label: t("navigation.home") },
    { href: "projects", label: t("navigation.projects") },
    { href: "about", label: t("navigation.about") },
    { href: "services", label: t("navigation.services") },
    { href: "contact", label: t("navigation.contact") },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    scrollToSection(sectionId)
  }

  return (
    <footer className="py-12 border-t">
      <div className="editorial-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "home")}
              className="text-lg font-medium tracking-tight transition-colors hover:text-primary"
            >
              <span className="font-bold">Rodmat95</span>.dev
            </a>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-6 md:mb-0">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={`#${item.href}`}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm text-foreground/70 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <ThemeToggle />
            <div className="text-sm text-foreground/60">
              © {new Date().getFullYear()} {t("footer.rights")}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
