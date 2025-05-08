"use client"

import type React from "react"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

type AnimationType = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "none"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: AnimationType
  delay?: number
  duration?: number
  threshold?: number
  once?: boolean
  id?: string
}

export default function AnimatedSection({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  once = true,
  id,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold, once })

  const getAnimationClasses = () => {
    if (animation === "none") return ""

    const baseClasses = "transition-all"
    const durationClass = `duration-${duration * 1000}`
    const delayClass = delay > 0 ? `delay-${delay * 1000}` : ""

    const animationClasses = {
      "fade-up": "translate-y-10 opacity-0",
      "fade-down": "-translate-y-10 opacity-0",
      "fade-left": "translate-x-10 opacity-0",
      "fade-right": "-translate-x-10 opacity-0",
      "zoom-in": "scale-95 opacity-0",
    }

    return cn(baseClasses, durationClass, delayClass, !isVisible && animationClasses[animation])
  }

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={cn(getAnimationClasses(), className)}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
      }}
      id={id}
    >
      {children}
    </section>
  )
}
