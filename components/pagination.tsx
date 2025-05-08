"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const { t } = useLanguage()

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = []
    const maxPagesToShow = 5

    if (totalPages <= maxPagesToShow) {
      // Show all pages if there are fewer than maxPagesToShow
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // Always show first page
      pages.push(1)

      // Calculate start and end of page range
      let start = Math.max(2, currentPage - 1)
      let end = Math.min(totalPages - 1, currentPage + 1)

      // Adjust if we're at the beginning
      if (currentPage <= 2) {
        end = Math.min(totalPages - 1, 4)
      }

      // Adjust if we're at the end
      if (currentPage >= totalPages - 1) {
        start = Math.max(2, totalPages - 3)
      }

      // Add ellipsis if needed at the beginning
      if (start > 2) {
        pages.push("ellipsis-start")
      }

      // Add middle pages
      for (let i = start; i <= end; i++) {
        pages.push(i)
      }

      // Add ellipsis if needed at the end
      if (end < totalPages - 1) {
        pages.push("ellipsis-end")
      }

      // Always show last page
      if (totalPages > 1) {
        pages.push(totalPages)
      }
    }

    return pages
  }

  const pageNumbers = getPageNumbers()

  return (
    <div className="flex items-center justify-center space-x-2 mt-12">
      <Button
        variant="outline"
        size="icon"
        onClick={handlePrevious}
        disabled={currentPage === 1}
        aria-label={t("pagination.previous") || "Previous page"}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <div className="flex items-center space-x-1">
        {pageNumbers.map((page, index) => {
          if (page === "ellipsis-start" || page === "ellipsis-end") {
            return (
              <div key={`ellipsis-${index}`} className="px-3 py-2">
                ...
              </div>
            )
          }

          return (
            <Button
              key={`page-${page}`}
              variant={currentPage === page ? "default" : "outline"}
              size="sm"
              onClick={() => onPageChange(page as number)}
              className={currentPage === page ? "bg-primary text-primary-foreground" : ""}
            >
              {page}
            </Button>
          )
        })}
      </div>

      <Button
        variant="outline"
        size="icon"
        onClick={handleNext}
        disabled={currentPage === totalPages}
        aria-label={t("pagination.next") || "Next page"}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
