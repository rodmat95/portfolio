"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { useLanguage } from "@/context/language-context"
import type { Project } from "@/lib/projects"

interface ProjectDetailModalProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const { t } = useLanguage()
  const modalRef = useRef<HTMLDivElement>(null)
  const [headerOffset, setHeaderOffset] = useState("5rem")
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Reset loading state when project changes
  useEffect(() => {
    if (project) {
      setIsLoading(true)
      setImageLoaded(false)

      // Simulate loading time
      const timer = setTimeout(
        () => {
          setIsLoading(false)
        },
        Math.random() * 1000 + 500,
      )

      return () => clearTimeout(timer)
    }
  }, [project])

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onClose])

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose()
      }
    }
    window.addEventListener("mousedown", handleClickOutside)
    return () => window.removeEventListener("mousedown", handleClickOutside)
  }, [onClose])

  // Dynamically adjust modal position based on header height
  useEffect(() => {
    if (typeof window === "undefined") return

    const calculateHeaderOffset = () => {
      const header = document.querySelector("header")
      if (header) {
        const headerHeight = header.offsetHeight
        setHeaderOffset(`${headerHeight + 16}px`)
      }
    }

    // Calculate on mount and when window resizes
    calculateHeaderOffset()
    window.addEventListener("resize", calculateHeaderOffset)

    return () => {
      window.removeEventListener("resize", calculateHeaderOffset)
    }
  }, [])

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          ref={modalRef}
          className="bg-background border rounded-lg shadow-xl w-full max-w-4xl overflow-y-auto my-auto"
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          {/* Header with image */}
          <div className="relative h-64 sm:h-80">
            {/* Loading skeleton */}
            {isLoading && (
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <Skeleton className="w-full h-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border-4 border-primary/30 border-t-primary animate-spin"></div>
                </div>
              </div>
            )}

            <Image
              src={project.image || "/placeholder.svg?height=800&width=600"}
              alt={project.title}
              fill
              className={`object-cover object-center transition-opacity duration-500 ${
                imageLoaded && !isLoading ? "opacity-100" : "opacity-0"
              }`}
              onLoad={handleImageLoad}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors z-10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">{project.title}</h2>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="outline" className="bg-secondary text-secondary-foreground">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-foreground/90 text-lg leading-relaxed mb-6">{project.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">{t("projects.goal")}</h3>
                <p className="text-foreground/80">{project.goal}</p>
              </div>

              {/* 
              <div>
                <h3 className="text-lg font-medium mb-2">{t("projects.results")}</h3>
                <p className="text-foreground/80">{project.results}</p>
              </div>
              */}

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href={project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 px-6 py-2 rounded-md text-sm font-medium transition-all bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {t("projects.viewLive")}
                </a>

                <a
                  href={project.repo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 px-6 py-2 rounded-md text-sm font-medium transition-all bg-secondary text-secondary-foreground hover:bg-secondary/80"
                >
                  <Github className="w-4 h-4 mr-2" />
                  {t("projects.viewCode")}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
