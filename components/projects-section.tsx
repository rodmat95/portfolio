"use client"

import { useState, useEffect, useMemo } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import ProjectCard from "@/components/project-card"
import ProjectCardCompact from "@/components/project-card-compact"
import ProjectSearch from "@/components/project-search"
import ProjectFilters from "@/components/project-filters"
import Pagination from "@/components/pagination"
import ViewToggle from "@/components/view-toggle"
import ProjectDetailModal from "@/components/project-detail-modal"
import { getAllProjects, projectCategories, type Project } from "@/lib/projects"

export default function ProjectsSection() {
  const { t } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [view, setView] = useState<"grid" | "list">("grid")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  // After the existing useState declarations, add:
  useEffect(() => {
    // Function to set view based on screen width
    const handleResize = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      if (mobile) {
        setView("list")
      }
    }

    // Set initial view
    handleResize()

    // Add event listener for window resize
    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const ITEMS_PER_PAGE = useMemo(() => {
    return view === "list" || isMobile ? 3 : 6
  }, [view, isMobile])

  // Fetch projects from Supabase
  useEffect(() => {
    async function fetchProjects() {
      setLoading(true)
      try {
        const data = await getAllProjects()
        setProjects(data)
      } catch (error) {
        console.error("Error fetching projects:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, activeCategory])

  // Filter projects based on search query and category
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Filter by search query
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()))

      // Filter by category
      const matchesCategory = activeCategory === "all" || project.category === activeCategory

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, activeCategory, projects])

  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE)

  // Get current page projects
  const currentProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    return filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE)
  }, [filteredProjects, currentPage, ITEMS_PER_PAGE])

  // Handle project selection for modal
  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
  }

  return (
    <section id="projects" className="section-spacing bg-secondary/30">
      <div className="editorial-container">
        <motion.div
          className="max-w-2xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-editorial-lg mb-4">{t("projects.title")}</h2>
          <p className="text-editorial-body">{t("projects.description")}</p>
        </motion.div>

        {/* Filters and Search */}
        <div className="mb-12 space-y-6">
          <ProjectFilters
            categories={projectCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="w-full sm:w-64">
              <ProjectSearch onSearch={setSearchQuery} />
            </div>
            <div className="hidden md:block">
              <ViewToggle view={view} onViewChange={setView} />
            </div>
          </div>
        </div>

        {/* Loading state */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        )}

        {/* No results message */}
        {!loading && filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-foreground/70">{t("projects.noResults")}</p>
            <button
              onClick={() => {
                setSearchQuery("")
                setActiveCategory("all")
              }}
              className="mt-4 text-primary hover:underline"
            >
              {t("projects.clearFilters")}
            </button>
          </div>
        )}

        {/* Grid View (non-mobile only) */}
        {!loading && view === "grid" && !isMobile && filteredProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
              <ProjectCardCompact key={project.id} project={project} index={index} onClick={handleProjectClick} />
            ))}
          </div>
        )}

        {/* List View (or mobile) */}
        {!loading && (view === "list" || isMobile) && filteredProjects.length > 0 && (
          <div className="space-y-16">
            {currentProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                goal={project.goal}
                technologies={project.technologies}
                results={project.results}
                image={project.image}
                liveUrl={project.live_url}
                repoUrl={project.repo_url}
                reverse={index % 2 !== 0}
              />
            ))}
          </div>
        )}

        {/* Pagination */}
        {!loading && filteredProjects.length > ITEMS_PER_PAGE && (
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        )}

        {/* Project Detail Modal */}
        <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
    </section>
  )
}
