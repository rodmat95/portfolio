"use client"

import { useState, useEffect } from "react"
import { useHeaderVisibility } from "@/context/header-visibility-context"

/**
 * Hook personalizado para manejar la visibilidad del encabezado al desplazarse
 * Solo aplica el comportamiento de ocultar en dispositivos móviles
 */
export function useHeaderScroll() {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const { forceHeaderVisible } = useHeaderVisibility()

  // Detectar si estamos en un dispositivo móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640) // sm breakpoint es 640px
    }

    // Comprobar al inicio
    checkMobile()

    // Comprobar cuando cambia el tamaño de la ventana
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Manejar la visibilidad del encabezado al desplazarse
  useEffect(() => {
    const handleScroll = () => {
      // Si no estamos en móvil o estamos forzando la visibilidad, siempre mostrar
      if (!isMobile || forceHeaderVisible) {
        setVisible(true)
        return
      }

      const currentScrollPos = window.scrollY
      const isScrollingDown = currentScrollPos > prevScrollPos
      const isScrollingUp = currentScrollPos < prevScrollPos
      const isScrolledPastThreshold = currentScrollPos > 100

      // Solo ocultar encabezado cuando se desplaza hacia abajo y pasado el umbral
      if (isScrollingDown && isScrolledPastThreshold) {
        setVisible(false)
      } else if (isScrollingUp) {
        setVisible(true)
      }

      setPrevScrollPos(currentScrollPos)
    }

    // Añadir throttling para mejorar el rendimiento
    let ticking = false
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", scrollListener)
    return () => window.removeEventListener("scroll", scrollListener)
  }, [prevScrollPos, forceHeaderVisible, isMobile])

  return { visible, isMobile }
}
