"use client"

import { useEffect, useState } from "react"

export default function SectionDebug() {
  const [sections, setSections] = useState<string[]>([])
  const [isVisible, setIsVisible] = useState(false)

  // Toggle visibility with Ctrl+Shift+S
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === "S") {
        setIsVisible((prev) => !prev)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Collect section IDs
  useEffect(() => {
    if (!isVisible) return

    const sectionElements = document.querySelectorAll("section[id]")
    setSections(Array.from(sectionElements).map((s) => s.id))
  }, [isVisible])

  // Test navigation to each section
  const navigateToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const header = document.querySelector("header")
      const headerHeight = header ? header.offsetHeight : 0
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed top-20 right-4 z-[9999] bg-black/80 text-white p-4 rounded-lg shadow-lg max-w-[300px] max-h-[400px] overflow-auto">
      <h3 className="font-bold mb-2">Section IDs</h3>
      <button onClick={() => setIsVisible(false)} className="absolute top-2 right-2 text-white hover:text-gray-300">
        ✕
      </button>
      <ul className="space-y-2">
        {sections.map((id) => (
          <li key={id} className="flex items-center justify-between">
            <span>{id}</span>
            <button onClick={() => navigateToSection(id)} className="px-2 py-1 bg-blue-500 text-white rounded text-xs">
              Test
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
