"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { useLanguage } from "@/context/language-context"

interface ProjectCardProps {
  title: string
  description: string
  goal: string
  technologies: string[]
  results: string
  image: string
  liveUrl: string
  repoUrl: string
  reverse?: boolean
}

export default function ProjectCard({
  title,
  description,
  goal,
  technologies,
  results,
  image,
  liveUrl,
  repoUrl,
  reverse = false,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const mockupRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  // Simulate scroll in mockup on hover
  const handleMouseEnter = () => {
    setIsHovered(true)
    if (mockupRef.current) {
      mockupRef.current.style.transform = "scale(1.08)"
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (mockupRef.current) {
      mockupRef.current.style.transform = "scale(1)"
    }
  }

  // Simulate loading state for demonstration
  useEffect(() => {
    // Start with loading state
    setIsLoading(true)

    // If image is empty or placeholder, keep loading state longer
    const loadingTime =
      image && !image.includes("placeholder")
        ? Math.random() * 1000 + 500
        : // Random time between 500ms and 1500ms
          Math.random() * 2000 + 1000 // Longer time for placeholders

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, loadingTime)

    return () => clearTimeout(timer)
  }, [image])

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  return (
    <motion.div
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {/* Project Image/Mockup */}
      <div
        className={`lg:col-span-6 ${reverse ? "lg:order-last" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden border shadow-lg transition-all duration-500 hover:shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent z-10" />

          {/* Device frame */}
          <div className="absolute inset-2 rounded-md overflow-hidden border-2 border-foreground/10 bg-background/80 backdrop-blur-sm">
            {/* Loading skeleton */}
            {isLoading && (
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="w-full h-full">
                  <Skeleton className="w-full h-full" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border-4 border-primary/30 border-t-primary animate-spin"></div>
                  </div>
                </div>
              </div>
            )}

            {/* Scrollable content */}
            <div
              ref={mockupRef}
              className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
                !imageLoaded && !isLoading ? "opacity-0" : "opacity-100"
              }`}
              style={{
                transformOrigin: "center center",
                height: "100%",
                transition: "opacity 0.5s ease-in-out, transform 0.7s ease-in-out",
              }}
            >
              <Image
                src={image || "/placeholder.svg?height=800&width=600"}
                alt={title}
                fill
                className={`object-cover object-center transition-opacity duration-500 ${
                  imageLoaded && !isLoading ? "opacity-100" : "opacity-0"
                }`}
                onLoad={handleImageLoad}
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className={`lg:col-span-6 ${reverse ? "lg:order-first" : ""}`}>
        <h3 className="text-editorial-md mb-4">{title}</h3>

        <p className="text-editorial-body mb-6">{description}</p>

        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-medium text-foreground/60 uppercase tracking-wider mb-2">
              {t("projects.goal")}
            </h4>
            <p className="text-editorial-body">{goal}</p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-foreground/60 uppercase tracking-wider mb-2">
              {t("projects.technologies")}
            </h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <Badge key={index} variant="outline" className="bg-secondary text-secondary-foreground">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* 
          <div>
            <h4 className="text-sm font-medium text-foreground/60 uppercase tracking-wider mb-2">
              {t("projects.results")}
            </h4>
            <p className="text-editorial-body">{results}</p>
          </div>
          */}

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-10 px-4 py-2 rounded-md text-sm font-medium transition-all bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              {t("projects.viewLive")}
            </a>

            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-10 px-4 py-2 rounded-md text-sm font-medium transition-all bg-secondary text-secondary-foreground hover:bg-secondary/80"
            >
              <Github className="w-4 h-4 mr-2" />
              {t("projects.viewCode")}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
