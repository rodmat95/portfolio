"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useScrollLock } from "@/hooks/use-scroll-lock"

export default function ScrollLockTester() {
  const [isLocked, setIsLocked] = useState(false)

  // Use our scroll lock hook
  useScrollLock(isLocked)

  return (
    <div className="fixed bottom-32 right-6 z-[60] md:hidden flex flex-col gap-2">
      <Button
        onClick={() => setIsLocked(!isLocked)}
        variant={isLocked ? "destructive" : "secondary"}
        className="shadow-lg"
      >
        {isLocked ? "Unlock Scroll" : "Lock Scroll"}
      </Button>
      <div className="text-xs bg-background/80 p-2 rounded text-center">
        Scroll is {isLocked ? "locked" : "unlocked"}
      </div>
    </div>
  )
}
