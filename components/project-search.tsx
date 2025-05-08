"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/context/language-context"

interface ProjectSearchProps {
  onSearch: (query: string) => void
}

export default function ProjectSearch({ onSearch }: ProjectSearchProps) {
  const [query, setQuery] = useState("")
  const { t } = useLanguage()

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value
    setQuery(newQuery)
    onSearch(newQuery)
  }

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <Search className="h-4 w-4 text-foreground/60" />
      </div>
      <Input
        type="text"
        placeholder={t("projects.searchPlaceholder") || "Search projects..."}
        value={query}
        onChange={handleSearch}
        className="pl-10 bg-background/50 border-foreground/10 focus:border-primary"
      />
    </div>
  )
}
