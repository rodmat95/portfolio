"use client"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Trash } from "lucide-react"
import { deleteMessage } from "@/app/admin/contact/actions"
import { useLanguage } from "@/context/language-context"

interface ContactMessage {
  id: number
  created_at: string
  name: string
  email: string
  message: string
}

export function ContactTable({ messages }: { messages: ContactMessage[] | null }) {
  const { t, language } = useLanguage()

  // Helper to format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{t('admin.contactView.title')}</h1>
        <p className="text-muted-foreground">{t('admin.contactView.subtitle')}</p>
      </div>

      <div className="rounded-md border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t('admin.contactView.table.date')}</TableHead>
              <TableHead>{t('admin.contactView.table.name')}</TableHead>
              <TableHead>{t('admin.contactView.table.email')}</TableHead>
              <TableHead>{t('admin.contactView.table.message')}</TableHead>
              <TableHead className="text-right">{t('admin.contactView.table.actions')}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {messages?.map((msg) => (
              <TableRow key={msg.id}>
                <TableCell className="whitespace-nowrap">{msg.created_at ? formatDate(msg.created_at) : '-'}</TableCell>
                <TableCell className="font-medium">{msg.name}</TableCell>
                <TableCell>
                  <a href={`mailto:${msg.email}`} className="flex items-center gap-1 hover:underline text-blue-500">
                    {msg.email}
                  </a>
                </TableCell>
                <TableCell className="max-w-md truncate" title={msg.message}>
                  {msg.message}
                </TableCell>
                <TableCell className="text-right">
                  <DeleteButton id={msg.id} />
                </TableCell>
              </TableRow>
            ))}
            {!messages?.length && (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                  {t('admin.contactView.table.empty')}
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
  // Binding ID. Support both number (if supported) or convert. deleteMessage accepts number | string.
  const deleteAction = deleteMessage.bind(null, id) as any

  return (
    <form action={deleteAction}>
       <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive" title={t('admin.contactView.table.delete')}>
          <Trash className="size-4" />
          <span className="sr-only">Delete</span>
       </Button>
    </form>
  )
}
