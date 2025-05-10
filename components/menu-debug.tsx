"use client"

import { useState, useEffect } from "react"

export default function MenuDebug() {
  const [isVisible, setIsVisible] = useState(false)
  const [debugInfo, setDebugInfo] = useState<Record<string, any>>({})

  // Toggle visibility with a keyboard shortcut (Ctrl+Shift+D)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === "D") {
        setIsVisible((prev) => !prev)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Collect debug information
  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      // Collect information about the mobile menu
      const mobileMenuElement = document.querySelector('[data-mobile-menu="true"]')
      const mobileMenuButton = document.querySelector('[aria-label="Toggle mobile menu"]')

      setDebugInfo({
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight,
        },
        mobileMenu: {
          exists: !!mobileMenuElement,
          visible: mobileMenuElement ? window.getComputedStyle(mobileMenuElement).display !== "none" : false,
          zIndex: mobileMenuElement ? window.getComputedStyle(mobileMenuElement).zIndex : "N/A",
          position: mobileMenuElement ? window.getComputedStyle(mobileMenuElement).position : "N/A",
        },
        mobileMenuButton: {
          exists: !!mobileMenuButton,
          position: mobileMenuButton
            ? {
                top: mobileMenuButton.getBoundingClientRect().top,
                left: mobileMenuButton.getBoundingClientRect().left,
              }
            : "N/A",
        },
        bodyStyles: {
          overflow: document.body.style.overflow,
        },
        timestamp: new Date().toISOString(),
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 z-[9999] bg-black/80 text-white p-4 rounded-lg shadow-lg max-w-[300px] max-h-[400px] overflow-auto">
      <h3 className="font-bold mb-2">Menu Debug</h3>
      <button onClick={() => setIsVisible(false)} className="absolute top-2 right-2 text-white hover:text-gray-300">
        ✕
      </button>
      <pre className="text-xs whitespace-pre-wrap">{JSON.stringify(debugInfo, null, 2)}</pre>
    </div>
  )
}
