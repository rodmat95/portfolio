"use client"

import { useLanguage } from "@/context/language-context"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import { cn } from "@/lib/utils"

export default function LanguageSwitcher({ minimal = false }) {
  const { language, setLanguage, t } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label={t("languageSwitcher.label")}
          className="relative group overflow-hidden"
        >
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">{t("languageSwitcher.label")}</span>
          <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-primary transition-transform duration-300 group-hover:scale-x-100"></span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[120px]">
        <DropdownMenuItem
          onClick={() => setLanguage("es")}
          className={cn(language === "es" ? "bg-primary/10 text-primary" : "")}
        >
          <span className="mr-2">🇪🇸</span>
          <span>{t("languageSwitcher.languages.es")}</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("en")}
          className={cn(language === "en" ? "bg-primary/10 text-primary" : "")}
        >
          <span className="mr-2">🇺🇸</span>
          <span>{t("languageSwitcher.languages.en")}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
