import { createClient } from "@/utils/supabase/server"
import { ProjectsTable } from "@/components/admin/projects-table"

// * [SECTION] Admin Projects Page
export default async function ProjectsPage() {
  const supabase = await createClient()
  // ? [INFO] Fetch projects from Supabase
  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false })

  return <ProjectsTable projects={projects} />
}

