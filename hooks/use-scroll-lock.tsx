"use client"

import { useEffect, useRef } from "react"

/**
 * A hook that locks/unlocks scrolling on the body element
 * Works across different browsers and devices including iOS Safari
 */
export function useScrollLock(lock: boolean) {
  // Store the original body styles to restore them later
  const originalStylesRef = useRef<{
    overflow: string
    paddingRight: string
    position: string
    height: string
    width: string
    top: string
  } | null>(null)

  // Store the original scroll position
  const scrollPositionRef = useRef(0)

  useEffect(() => {
    // Only run in the browser
    if (typeof window === "undefined") return

    // Get the body element
    const body = document.body
    const html = document.documentElement

    if (lock) {
      // Save the current scroll position
      scrollPositionRef.current = window.scrollY

      // Store original styles before modifying them
      originalStylesRef.current = {
        overflow: body.style.overflow,
        paddingRight: body.style.paddingRight,
        position: body.style.position,
        height: body.style.height,
        width: body.style.width,
        top: body.style.top,
      }

      // Calculate the scrollbar width to prevent layout shift
      const scrollbarWidth = window.innerWidth - html.clientWidth

      // Apply styles to lock scrolling
      body.style.overflow = "hidden"
      body.style.paddingRight = `${scrollbarWidth}px`

      // For iOS Safari, we need to use position: fixed
      // This prevents the background from scrolling when swiping
      body.style.position = "fixed"
      body.style.width = "100%"
      body.style.height = "100%"
      body.style.top = `-${scrollPositionRef.current}px`

      // Add a class to the html element for additional styling if needed
      html.classList.add("scroll-locked")
    } else if (originalStylesRef.current) {
      // Restore original styles
      body.style.overflow = originalStylesRef.current.overflow
      body.style.paddingRight = originalStylesRef.current.paddingRight
      body.style.position = originalStylesRef.current.position
      body.style.height = originalStylesRef.current.height
      body.style.width = originalStylesRef.current.width
      body.style.top = originalStylesRef.current.top

      // Remove the class from the html element
      html.classList.remove("scroll-locked")

      // Restore scroll position for iOS Safari
      if (body.style.position === "fixed") {
        window.scrollTo(0, scrollPositionRef.current)
      }
    }

    // Cleanup function to ensure scrolling is re-enabled when component unmounts
    return () => {
      if (originalStylesRef.current) {
        body.style.overflow = originalStylesRef.current.overflow
        body.style.paddingRight = originalStylesRef.current.paddingRight
        body.style.position = originalStylesRef.current.position
        body.style.height = originalStylesRef.current.height
        body.style.width = originalStylesRef.current.width
        body.style.top = originalStylesRef.current.top

        html.classList.remove("scroll-locked")

        if (body.style.position === "fixed") {
          window.scrollTo(0, scrollPositionRef.current)
        }
      }
    }
  }, [lock])
}
