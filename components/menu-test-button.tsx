"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import FixedMobileMenu from "@/components/fixed-mobile-menu"

export default function MenuTestButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <div className="fixed bottom-20 right-6 z-[60] md:hidden">
        <Button onClick={() => setIsMenuOpen(true)} variant="secondary" className="shadow-lg">
          Test Menu
        </Button>
      </div>
      <FixedMobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}
