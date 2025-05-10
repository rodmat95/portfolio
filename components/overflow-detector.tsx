"use client"

import { useEffect, useState } from "react"

export default function OverflowDetector() {
  const [overflowElements, setOverflowElements] = useState<Element[]>([])
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    // Only run in development mode
    if (process.env.NODE_ENV !== "development") return

    const detectOverflow = () => {
      if (!isActive) return

      const allElements = document.querySelectorAll("*")
      const windowWidth = window.innerWidth
      const overflowing: Element[] = []

      allElements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        if (rect.width > windowWidth || rect.right > windowWidth) {
          overflowing.push(element)
          // Highlight overflowing elements
          ;(element as HTMLElement).style.outline = "2px solid red"
        } else {
          // Remove highlight
          ;(element as HTMLElement).style.outline = ""
        }
      })

      setOverflowElements(overflowing)
    }

    // Add keyboard shortcut to toggle detector (Ctrl+Shift+O)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === "O") {
        setIsActive((prev) => !prev)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("resize", detectOverflow)

    // Initial detection
    detectOverflow()

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("resize", detectOverflow)

      // Clean up any highlights
      document.querySelectorAll("*").forEach((element) => {
        ;(element as HTMLElement).style.outline = ""
      })
    }
  }, [isActive])

  if (!isActive || process.env.NODE_ENV !== "development") return null

  return (
    <div className="fixed bottom-4 left-4 z-[9999] bg-red-500 text-white p-4 rounded-lg shadow-lg max-w-[300px] overflow-y-auto max-h-[300px]">
      <h3 className="font-bold mb-2">Overflow Detected: {overflowElements.length}</h3>
      <button onClick={() => setIsActive(false)} className="absolute top-2 right-2 text-white hover:text-red-200">
        ✕
      </button>
      <ul className="text-xs">
        {overflowElements.slice(0, 10).map((el, i) => (
          <li key={i} className="mb-1">
            {el.tagName.toLowerCase()}
            {el.id ? `#${el.id}` : ""}
            {Array.from(el.classList).length > 0 ? `.${Array.from(el.classList).join(".")}` : ""}
          </li>
        ))}
        {overflowElements.length > 10 && <li>...and {overflowElements.length - 10} more</li>}
      </ul>
    </div>
  )
}
