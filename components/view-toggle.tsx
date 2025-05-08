"use client"

import { LayoutGrid, Rows } from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { useLanguage } from "@/context/language-context"

interface ViewToggleProps {
  view: "grid" | "list"
  onViewChange: (view: "grid" | "list") => void
}

export default function ViewToggle({ view, onViewChange }: ViewToggleProps) {
  const { t } = useLanguage()

  return (
    <ToggleGroup type="single" value={view} onValueChange={(value) => value && onViewChange(value as "grid" | "list")}>
      <ToggleGroupItem value="grid" aria-label={t("projects.gridView") || "Grid view"}>
        <LayoutGrid className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="list" aria-label={t("projects.listView") || "List view"}>
        <Rows className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
