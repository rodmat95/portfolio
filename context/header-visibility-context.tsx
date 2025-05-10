"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface HeaderVisibilityContextType {
  forceHeaderVisible: boolean
  setForceHeaderVisible: (value: boolean) => void
  resetHeaderVisibility: () => void
}

const HeaderVisibilityContext = createContext<HeaderVisibilityContextType | undefined>(undefined)

export function HeaderVisibilityProvider({ children }: { children: ReactNode }) {
  const [forceHeaderVisible, setForceHeaderVisible] = useState(false)

  // Reset the force visible state after a delay
  const resetHeaderVisibility = () => {
    // Reset after a delay to ensure the header stays visible during the initial scroll
    setTimeout(() => {
      setForceHeaderVisible(false)
    }, 1500) // 1.5 seconds should be enough for the scroll animation to complete
  }

  // Reset header visibility on scroll
  useEffect(() => {
    if (!forceHeaderVisible) return

    const handleScroll = () => {
      // Only reset if we're forcing the header to be visible
      // and the user has started scrolling manually
      if (forceHeaderVisible) {
        setForceHeaderVisible(false)
      }
    }

    // Add the event listener with a delay to avoid triggering during programmatic scrolling
    const timer = setTimeout(() => {
      window.addEventListener("scroll", handleScroll, { passive: true })
    }, 1000)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [forceHeaderVisible])

  return (
    <HeaderVisibilityContext.Provider value={{ forceHeaderVisible, setForceHeaderVisible, resetHeaderVisibility }}>
      {children}
    </HeaderVisibilityContext.Provider>
  )
}

export function useHeaderVisibility() {
  const context = useContext(HeaderVisibilityContext)
  if (context === undefined) {
    throw new Error("useHeaderVisibility must be used within a HeaderVisibilityProvider")
  }
  return context
}
