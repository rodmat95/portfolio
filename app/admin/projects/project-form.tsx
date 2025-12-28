'use client'

import { useState } from 'react'
import { createProject, updateProject } from './actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/context/language-context'

// Categories from lib/projects.ts but excluding "all" which is a filter
const CATEGORIES = ["web", "ecommerce", "desktop", "mobile", "saas"]

export function ProjectForm({ project }: { project?: any }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setError(null)
    
    const formData = new FormData(event.currentTarget)
    
    const result = project 
      ? await updateProject(project.id, formData) 
      : await createProject(formData)
    
    if (result?.error) {
      setError(result.error)
      setLoading(false)
    }
  }

  const { t } = useLanguage()

  // Pre-process technologies array to string if editing
  const defaultTechnologies = project?.technologies 
    ? Array.isArray(project.technologies) 
      ? project.technologies.join(', ') 
      : project.technologies
    : ''

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="title">{t('admin.projectsView.form.title')}</Label>
          <Input id="title" name="title" defaultValue={project?.title} required />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="category">{t('admin.projectsView.form.category')}</Label>
          <Select name="category" defaultValue={project?.category || "web"}>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {CATEGORIES.map(c => (
                <SelectItem key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">{t('admin.projectsView.form.description')}</Label>
        <Textarea id="description" name="description" defaultValue={project?.description} required rows={3} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="goal">{t('admin.projectsView.form.goal')}</Label>
        <Textarea id="goal" name="goal" defaultValue={project?.goal} rows={2} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="results">{t('admin.projectsView.form.results')}</Label>
        <Textarea id="results" name="results" defaultValue={project?.results} rows={2} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="technologies">{t('admin.projectsView.form.technologies')} (comma separated)</Label>
        <Input 
          id="technologies" 
          name="technologies" 
          defaultValue={defaultTechnologies} 
          placeholder="React, Next.js, TypeScript"
          required 
        />
      </div>


      <div className="grid gap-4 md:grid-cols-3">
        <div className="space-y-2">
          <Label htmlFor="image">{t('admin.projectsView.form.image')}</Label>
          <div className="flex flex-col gap-2">
            {project?.image && (
               <div className="relative aspect-video w-full overflow-hidden rounded-md border">
                  <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
               </div>
            )}
            <Input id="image" name="image" type="file" accept="image/*" />
            <input type="hidden" name="existing_image" value={project?.image || ''} />
            <p className="text-xs text-muted-foreground">{t('admin.projectsView.form.uploadNew')}</p>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="live_url">{t('admin.projectsView.form.demoUrl')}</Label>
          <Input id="live_url" name="live_url" defaultValue={project?.live_url} placeholder="https://..." />
        </div>
        <div className="space-y-2">
          <Label htmlFor="repo_url">{t('admin.projectsView.form.repoUrl')}</Label>
          <Input id="repo_url" name="repo_url" defaultValue={project?.repo_url} placeholder="https://..." />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="featured" name="featured" defaultChecked={project?.featured} />
        <Label htmlFor="featured">{t('admin.projectsView.form.featured')}</Label>
      </div>

      <div className="flex items-center justify-end gap-4">
        <Button variant="outline" type="button" asChild>
          <Link href="/admin/projects">{t('admin.projectsView.form.cancel')}</Link>
        </Button>
        <Button type="submit" disabled={loading}>
          {loading && <Loader2 className="mr-2 size-4 animate-spin" />}
          {loading ? t('admin.projectsView.form.saving') : (project ? t('admin.projectsView.form.save') : t('admin.projectsView.form.create'))}
        </Button>
      </div>
    </form>
  )
}
