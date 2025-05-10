"use client"

import { useCallback } from "react"

export function useSmoothScroll() {
  const scrollToSection = useCallback((sectionId: string) => {
    console.log(`Attempting to scroll to section: ${sectionId}`)
    const element = document.getElementById(sectionId)

    if (element) {
      console.log(`Found element with id: ${sectionId}`)
      // Get header height to adjust scroll position
      const header = document.querySelector("header")
      const headerHeight = header ? header.offsetHeight : 0
      console.log(`Header height: ${headerHeight}px`)

      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - headerHeight

      console.log(`Scrolling to position: ${offsetPosition}`)
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    } else {
      console.warn(`Element with id "${sectionId}" not found`)
      // Log all available section IDs for debugging
      const allSections = document.querySelectorAll("section[id]")
      console.log(
        "Available sections:",
        Array.from(allSections).map((s) => s.id),
      )
    }
  }, [])

  return scrollToSection
}
