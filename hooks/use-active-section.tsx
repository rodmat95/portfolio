"use client"

import { useState, useEffect } from "react"

export function useActiveSection(sections: string[], offset = 100) {
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset

      // Find the current section
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)

        if (element) {
          const { offsetTop, offsetHeight } = element

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            if (activeSection !== sectionId) {
              setActiveSection(sectionId)
            }
            break
          }
        }
      }

      // If we're at the top of the page, set active to the first section
      if (scrollPosition < offset) {
        setActiveSection("")
      }
    }

    // Initial check
    handleScroll()

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [sections, activeSection, offset])

  return activeSection
}
