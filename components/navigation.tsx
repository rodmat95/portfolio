"use client"

import type React from "react"

import Link from "next/link"
import { useActiveSection } from "@/hooks/use-active-section"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"
import { useLanguage } from "@/context/language-context"
import { cn } from "@/lib/utils"

interface NavigationItem {
  href: string
  label: string
}

export default function Navigation() {
  const { t } = useLanguage()
  const scrollToSection = useSmoothScroll()

  const navigationItems: NavigationItem[] = [
    { href: "home", label: t("navigation.home") },
    { href: "about", label: t("navigation.about") },
    { href: "projects", label: t("navigation.projects") },
    { href: "skills", label: t("navigation.skills") },
    { href: "process", label: t("navigation.process") },
    { href: "contact", label: t("navigation.contact") },
  ]

  const sectionIds = navigationItems.map((item) => item.href)
  const activeSection = useActiveSection(sectionIds, 64) // 64px offset for header height

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    scrollToSection(sectionId)
  }

  return (
    <nav className="hidden md:flex gap-6">
      {navigationItems.map((item) => (
        <Link
          key={item.href}
          href={`#${item.href}`}
          className={cn(
            "text-sm font-medium transition-all duration-300 relative overflow-hidden group",
            activeSection === item.href ? "text-primary" : "text-foreground/80 hover:text-primary",
          )}
          onClick={(e) => handleClick(e, item.href)}
        >
          <span className="relative z-10">{item.label}</span>
          {activeSection === item.href ? (
            <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
          ) : (
            <span className="absolute -bottom-1 left-0 right-0 h-0.5 w-0 bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
          )}
        </Link>
      ))}
    </nav>
  )
}
