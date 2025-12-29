"use client"

import { ProjectForm } from './project-form'
import { useLanguage } from '@/context/language-context'

export function EditProjectView({ project }: { project: any }) {
  const { t } = useLanguage()

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{t('admin.projectsView.form.editTitle')}</h1>
        <p className="text-muted-foreground">{t('admin.projectsView.form.featuredDesc')} (Description placeholder for edit)</p>
      </div>
      <div className="rounded-lg border bg-card p-6">
        <ProjectForm project={project} />
      </div>
    </div>
  )
}
