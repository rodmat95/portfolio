import { createClient } from '@/utils/supabase/server'
import { EditProjectView } from '@/components/admin/edit-project-view'
import { notFound } from 'next/navigation'

export default async function EditProjectPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const resolvedParams = await params
  const supabase = await createClient()
  
  const { data: project } = await supabase
    .from('projects')
    .select('*')
    .eq('id', resolvedParams.id)
    .single()
  
  if (!project) {
    notFound()
  }
  
  return <EditProjectView project={project} />
}

