"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/context/language-context"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const { t } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative overflow-hidden group">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark:text-slate-100" />
          <span className="sr-only">Toggle theme</span>
          <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-gradient-professional dark:bg-gradient-dark-subtle transition-transform duration-300 group-hover:scale-x-100"></span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="dark:bg-dark-slate-100 dark:border-dark-slate-300">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className={theme === "light" ? "bg-accent dark:bg-dark-accent-300 dark:text-white" : "dark:text-slate-200"}
        >
          <Sun className="mr-2 h-4 w-4" />
          <span>{t("themeToggle.light")}</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className={theme === "dark" ? "bg-accent dark:bg-dark-accent-300 dark:text-white" : "dark:text-slate-200"}
        >
          <Moon className="mr-2 h-4 w-4" />
          <span>{t("themeToggle.dark")}</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className={theme === "system" ? "bg-accent dark:bg-dark-accent-300 dark:text-white" : "dark:text-slate-200"}
        >
          <span className="mr-2">💻</span>
          <span>{t("themeToggle.system")}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
