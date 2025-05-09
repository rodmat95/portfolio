import { supabase } from "@/lib/supabaseClient"

export interface Project {
  id: string
  title: string
  description: string
  goal: string
  technologies: string[]
  category: string
  results: string
  image: string
  live_url: string
  repo_url: string
  featured: boolean
  created_at: string
}

// Project categories for filtering - maintained in frontend
export const projectCategories = ["all", "web", "ecommerce", "desktop", "mobile", "saas"]

// Fetch all projects from Supabase
export async function getAllProjects(): Promise<Project[]> {
  const { data, error } = await supabase.from("projects").select("*").order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching projects:", error)
    return []
  }

  return data as Project[]
}

// Fetch featured projects from Supabase
export async function getFeaturedProjects(): Promise<Project[]> {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("featured", true)
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching featured projects:", error)
    return []
  }

  return data as Project[]
}

// Fetch projects by category from Supabase
export async function getProjectsByCategory(category: string): Promise<Project[]> {
  if (category === "all") {
    return getAllProjects()
  }

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("category", category)
    .order("created_at", { ascending: false })

  if (error) {
    console.error(`Error fetching projects for category ${category}:`, error)
    return []
  }

  return data as Project[]
}

// Fetch a single project by ID from Supabase
export async function getProjectById(id: string): Promise<Project | null> {
  const { data, error } = await supabase.from("projects").select("*").eq("id", id).single()

  if (error) {
    console.error(`Error fetching project with ID ${id}:`, error)
    return null
  }

  return data as Project
}
