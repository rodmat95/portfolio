"use client"

import { useEffect, useState } from "react"

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrollPosition = window.scrollY
      const progress = (scrollPosition / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed left-0 top-0 z-[60] h-1 w-full bg-transparent hidden md:block">
      <div className="h-full bg-primary transition-all duration-150 ease-out" style={{ width: `${scrollProgress}%` }} />
    </div>
  )
}
