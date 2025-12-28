"use client"

import { useCallback } from "react"

export function useSmoothScroll() {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)

    if (element) {
      // ? [INFO] Get header height to adjust scroll position
      const header = document.querySelector("header")
      const headerHeight = header ? header.offsetHeight : 0

      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }, [])

  return scrollToSection
}
