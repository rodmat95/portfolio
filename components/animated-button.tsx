"use client"

import { Button } from "@/components/ui/button"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps {
  children: ReactNode
  className?: string
  variant?: "default" | "outline" | "ghost" | "secondary"
  color?: "primary" | "accent" | "muted" | "gradient"
  size?: "default" | "sm" | "lg" | "icon"
  onClick?: () => void
  asChild?: boolean
  disabled?: boolean
}

export default function AnimatedButton({
  children,
  className,
  variant = "default",
  color = "primary",
  size = "default",
  onClick,
  asChild = false,
  disabled = false,
}: AnimatedButtonProps) {
  const getColorClasses = () => {
    if (variant === "outline" || variant === "ghost") {
      switch (color) {
        case "primary":
          return "hover:text-navy-600 hover:border-navy-400 dark:text-navy-300 dark:hover:text-navy-200 dark:hover:border-navy-400" // Improved dark mode contrast
        case "accent":
          return "hover:text-accent-600 hover:border-accent-400 dark:text-accent-300 dark:hover:text-accent-200 dark:hover:border-accent-400" // Improved dark mode contrast
        case "muted":
          return "hover:text-slate-600 hover:border-slate-400 dark:text-slate-300 dark:hover:text-slate-200 dark:hover:border-slate-400" // Improved dark mode contrast
        case "gradient":
        default:
          return "hover:border-navy-400 dark:hover:border-navy-400" // Improved dark mode contrast
      }
    } else if (variant === "secondary") {
      switch (color) {
        case "primary":
          return "bg-navy-100 text-navy-700 hover:bg-navy-200 dark:bg-dark-navy-400 dark:text-white dark:hover:bg-dark-navy-500" // Improved dark mode contrast
        case "accent":
          return "bg-accent-100 text-accent-700 hover:bg-accent-200 dark:bg-dark-accent-400 dark:text-white dark:hover:bg-dark-accent-500" // Improved dark mode contrast
        case "muted":
          return "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-dark-slate-400 dark:text-white dark:hover:bg-dark-slate-500" // Improved dark mode contrast
        case "gradient":
        default:
          return "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-dark-slate-400 dark:text-white dark:hover:bg-dark-slate-500" // Improved dark mode contrast
      }
    } else {
      switch (color) {
        case "primary":
          return "bg-navy-600 hover:bg-navy-700 text-white dark:bg-dark-navy-500 dark:hover:bg-dark-navy-600" // Improved dark mode contrast
        case "accent":
          return "bg-accent-600 hover:bg-accent-700 text-white dark:bg-dark-accent-500 dark:hover:bg-dark-accent-600" // Improved dark mode contrast
        case "muted":
          return "bg-slate-600 hover:bg-slate-700 text-white dark:bg-dark-slate-500 dark:hover:bg-dark-slate-600" // Improved dark mode contrast
        case "gradient":
        default:
          return "bg-gradient-dark-subtle hover:bg-gradient-dark text-white dark:bg-gradient-dark-subtle dark:hover:bg-gradient-dark" // Improved dark mode gradient
      }
    }
  }

  return (
    <Button
      className={cn(
        "group relative overflow-hidden transition-all duration-300",
        getColorClasses(),
        variant === "default" &&
          color === "gradient" &&
          "bg-gradient-professional hover:shadow-md hover:shadow-slate-300/20 dark:bg-gradient-dark-subtle dark:hover:shadow-slate-900/20",
        className,
      )}
      variant={variant === "default" ? "default" : variant}
      size={size}
      onClick={onClick}
      asChild={asChild}
      disabled={disabled}
    >
      <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">{children}</span>
      {variant === "default" && color === "gradient" && (
        <span className="absolute inset-0 -z-10 bg-gradient-professional dark:bg-gradient-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-shift bg-[length:200%_200%]"></span>
      )}
    </Button>
  )
}
