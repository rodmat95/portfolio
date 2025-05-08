"use client"

import type { ReactNode } from "react"

interface SectionBackgroundProps {
  children: ReactNode
  variant?: "primary" | "secondary" | "muted" | "accent" | "gradient"
  className?: string
}

export default function SectionBackground({ children, variant = "primary", className = "" }: SectionBackgroundProps) {
  const getBackgroundClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-slate-50 dark:bg-dark-slate-100/90" // Improved dark mode contrast
      case "secondary":
        return "bg-white dark:bg-dark-slate-50/90" // Improved dark mode contrast
      case "muted":
        return "bg-slate-100 dark:bg-dark-slate-200/90" // Improved dark mode contrast
      case "accent":
        return "bg-accent-50 dark:bg-dark-accent-100/90" // Improved dark mode contrast
      case "gradient":
      default:
        return "bg-gradient-to-br from-slate-50 to-accent-50 dark:from-dark-slate-100/90 dark:to-dark-accent-100/90" // Improved dark mode contrast
    }
  }

  return (
    <div className={`relative ${className}`}>
      <div className={`absolute inset-0 -z-10 ${getBackgroundClasses()}`} />
      {children}
    </div>
  )
}
