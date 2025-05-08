"use client"

import { useEffect, useState, useRef } from "react"

type AnimationOptions = {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export function useScrollAnimation(options: AnimationOptions = {}) {
  const { threshold = 0.1, rootMargin = "0px", once = true } = options
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const currentRef = ref.current
    if (!currentRef) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && currentRef) {
            observer.unobserve(currentRef)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(currentRef)

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, rootMargin, once])

  return { ref, isVisible }
}
