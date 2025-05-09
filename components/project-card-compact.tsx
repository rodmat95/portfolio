"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { useLanguage } from "@/context/language-context"
import type { Project } from "@/lib/projects"

interface ProjectCardCompactProps {
  project: Project
  index: number
  onClick: (project: Project) => void
}

export default function ProjectCardCompact({ project, index, onClick }: ProjectCardCompactProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const { t } = useLanguage()

  // Simulate loading state for demonstration
  useEffect(() => {
    // Start with loading state
    setIsLoading(true)

    // If image is empty or placeholder, keep loading state longer
    const loadingTime =
      project.image && !project.image.includes("placeholder")
        ? Math.random() * 1000 + 500
        : // Random time between 500ms and 1500ms
          Math.random() * 2000 + 1000 // Longer time for placeholders

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, loadingTime)

    return () => clearTimeout(timer)
  }, [project.image])

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  return (
    <motion.div
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onClick={() => onClick(project)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/3] rounded-lg overflow-hidden border shadow-md transition-all duration-300 group-hover:shadow-lg">
        {/* Loading skeleton */}
        {isLoading && (
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <Skeleton className="w-full h-full" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full border-4 border-primary/30 border-t-primary animate-spin"></div>
            </div>
          </div>
        )}

        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm z-10 flex items-center justify-center transition-all duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="bg-primary rounded-full p-3 transform transition-transform duration-300 group-hover:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
        </div>

        {/* Image */}
        <Image
          src={project.image || "/placeholder.svg?height=800&width=600"}
          alt={project.title}
          fill
          className={`object-cover object-top transition-all duration-500 group-hover:scale-105 ${
            imageLoaded && !isLoading ? "opacity-100" : "opacity-0"
          }`}
          onLoad={handleImageLoad}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent z-[5]" />

        {/* Tech badges */}
        <div className="absolute top-3 left-3 right-3 z-[6] flex flex-wrap gap-1">
          {project.technologies.slice(0, 2).map((tech, i) => (
            <Badge key={i} variant="secondary" className="bg-background/80 backdrop-blur-sm text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 2 && (
            <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm text-xs">
              +{project.technologies.length - 2}
            </Badge>
          )}
        </div>
      </div>

      <div className="mt-4">
        <h3 className="font-medium text-lg mb-1 transition-colors group-hover:text-primary">{project.title}</h3>
        <p className="text-foreground/70 text-sm line-clamp-2">{project.description}</p>
      </div>
    </motion.div>
  )
}
