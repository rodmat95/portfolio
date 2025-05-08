"use client"

import { useLanguage } from "@/context/language-context"
import { cn } from "@/lib/utils"

interface ProjectFiltersProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export default function ProjectFilters({ categories, activeCategory, onCategoryChange }: ProjectFiltersProps) {
  const { t } = useLanguage()

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "px-4 py-2 text-sm font-medium rounded-full transition-all",
            activeCategory === category
              ? "bg-primary text-primary-foreground"
              : "bg-secondary/50 text-foreground/70 hover:bg-secondary",
          )}
        >
          {t(`projects.filters.${category}`) || category}
        </button>
      ))}
    </div>
  )
}
