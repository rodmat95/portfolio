"use client"

import { useLanguage } from "@/context/language-context"
import { cn } from "@/lib/utils"
import { Languages } from "lucide-react"

export function AdminLanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <div className="flex items-center justify-between w-full p-2 rounded-md hover:bg-muted/50 transition-colors">
      <span className="text-sm font-medium flex items-center gap-2">
         <Languages className="size-4" />
         {t('admin.language')}
      </span>
      <div className="flex items-center bg-muted rounded-lg p-1 border">
        {/* ... buttons ... */}
        <button
          onClick={() => setLanguage("en")}
          className={cn(
            "px-2 py-0.5 text-xs font-semibold rounded-md transition-all",
            language === "en" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
          )}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage("es")}
          className={cn(
            "px-2 py-0.5 text-xs font-semibold rounded-md transition-all",
            language === "es" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
          )}
        >
          ES
        </button>
      </div>
    </div>
  )
}
