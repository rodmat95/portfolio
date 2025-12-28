"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/context/language-context"

export function AdminThemeToggle() {
  const { theme, setTheme } = useTheme()
  const { t } = useLanguage()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex items-center justify-between w-full p-2 rounded-md hover:bg-muted/50 transition-colors animate-pulse">
        <span className="text-sm font-medium flex items-center gap-2">
           <div className="size-4 bg-muted rounded" />
           <div className="h-4 w-16 bg-muted rounded" />
        </span>
        <div className="flex items-center bg-muted rounded-full p-1 border">
           <div className="size-5 bg-background rounded-full" />
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-between w-full p-2 rounded-md hover:bg-muted/50 transition-colors">
      <span className="text-sm font-medium flex items-center gap-2">
         {theme === 'dark' ? <Moon className="size-4" /> : <Sun className="size-4" />}
         {t('admin.appearance')}
      </span>
      <div className="flex items-center bg-muted rounded-full p-1 border">
        <button
          onClick={() => setTheme("light")}
          className={cn(
            "rounded-full p-1 transition-all hover:bg-background/50",
            theme === "light" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground"
          )}
          title="Light Mode"
        >
          <Sun className="size-3.5" />
        </button>
        <button
          onClick={() => setTheme("dark")}
          className={cn(
            "rounded-full p-1 transition-all hover:bg-background/50",
            theme === "dark" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground"
          )}
          title="Dark Mode"
        >
          <Moon className="size-3.5" />
        </button>
      </div>
    </div>
  )
}
