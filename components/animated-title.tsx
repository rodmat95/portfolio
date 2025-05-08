"use client"

import type { ReactNode } from "react"

interface AnimatedTitleProps {
  children: ReactNode
  className?: string
  variant?: "default" | "gradient" | "muted"
  size?: "sm" | "md" | "lg"
}

export default function AnimatedTitle({
  children,
  className = "",
  variant = "default",
  size = "lg",
}: AnimatedTitleProps) {
  const getTitleClasses = () => {
    switch (variant) {
      case "gradient":
        return "bg-gradient-professional dark:bg-gradient-dark-subtle bg-clip-text text-transparent" // Improved dark mode gradient
      case "muted":
        return "text-slate-600 dark:text-slate-300" // Improved dark mode contrast
      case "default":
      default:
        return "text-navy-800 dark:text-slate-100" // Improved dark mode contrast
    }
  }

  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "text-xl sm:text-2xl md:text-3xl"
      case "md":
        return "text-2xl sm:text-3xl md:text-4xl"
      case "lg":
      default:
        return "text-3xl sm:text-4xl md:text-5xl"
    }
  }

  return (
    <h2
      className={`font-heading font-bold leading-tight ${getSizeClasses()} ${getTitleClasses()} relative inline-block group ${className}`}
    >
      {children}
      <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-professional dark:bg-gradient-dark-subtle rounded-full transform transition-transform duration-500 origin-left group-hover:scale-x-110"></span>
    </h2>
  )
}
