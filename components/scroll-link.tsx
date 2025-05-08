"use client"

import type React from "react"

import type { ReactNode } from "react"
import Link from "next/link"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"

interface ScrollLinkProps {
  href: string
  children: ReactNode
  className?: string
}

export default function ScrollLink({ href, children, className }: ScrollLinkProps) {
  const scrollToSection = useSmoothScroll()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const sectionId = href.replace("#", "")
    scrollToSection(sectionId)
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  )
}
