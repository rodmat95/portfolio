"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Pencil, Trash } from "lucide-react"
import { deleteProject } from "@/app/admin/projects/actions"
import { useLanguage } from "@/context/language-context"

// * [TYPE] Project definition
interface Project {
  id: number
  title: string
  category: string
  featured: boolean
  created_at: string
}

// * [UI] Admin Projects Table Component
export function ProjectsTable({ projects }: { projects: Project[] | null }) {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{t('admin.projectsView.title')}</h1>
          <p className="text-muted-foreground">{t('admin.projectsView.subtitle')}</p>
        </div>
        <Button asChild>
          <Link href="/admin/projects/new">
            <Plus className="mr-2 size-4" />
            {t('admin.projectsView.add')}
          </Link>
        </Button>
      </div>

      <div className="rounded-md border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t('admin.projectsView.table.title')}</TableHead>
              <TableHead>{t('admin.projectsView.table.category')}</TableHead>
              <TableHead>{t('admin.projectsView.table.featured')}</TableHead>
              <TableHead className="text-right">{t('admin.projectsView.table.actions')}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects?.map((project) => (
              <TableRow key={project.id}>
                <TableCell className="font-medium">{project.title}</TableCell>
                <TableCell>{project.category}</TableCell>
                <TableCell>{project.featured ? t('admin.projectsView.table.yes') : t('admin.projectsView.table.no')}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" asChild title={t('admin.projectsView.table.edit')}>
                      <Link href={`/admin/projects/${project.id}`}>
                        <Pencil className="size-4" />
                        <span className="sr-only">Edit</span>
                      </Link>
                    </Button>
                    <DeleteButton id={project.id} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {!projects?.length && (
              <TableRow>
                <TableCell colSpan={4} className="h-24 text-center">
                  {t('admin.projectsView.table.empty')}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

function DeleteButton({ id }: { id: number }) {
  const { t } = useLanguage()
  // ! [WARNING] Ensure ID is passed as string if expected by action, or cast to any to satisfy TS for server action usage
  const deleteAction = deleteProject.bind(null, id.toString()) as any 

  return (
    <form action={deleteAction}>
      <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive" title={t('admin.projectsView.table.delete')}>
         <Trash className="size-4" />
         <span className="sr-only">Delete</span>
      </Button>
    </form>
  )
}
