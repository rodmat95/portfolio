"use client"

import { useEffect, useState } from "react"

export default function CursorHighlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", updatePosition)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div
      className={`pointer-events-none fixed z-50 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 transition-all duration-100 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) scale(${isVisible ? 1 : 0})`,
      }}
    />
  )
}
