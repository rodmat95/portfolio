"use client"

import Link from "next/link"
import { logout } from "@/app/(auth)/login/actions"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, FolderKanban, Mail, LogOut } from "lucide-react"
import { AdminThemeToggle } from "@/components/admin/admin-theme-toggle"
import { AdminLanguageSwitcher } from "@/components/admin/admin-language-switcher"
import { useLanguage } from "@/context/language-context"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { t } = useLanguage()

  return (
    <div className="flex h-screen w-full flex-col md:flex-row bg-muted/20">
      <aside className="w-full md:w-64 bg-background border-r px-4 py-6 flex flex-col gap-6">
        <div className="flex items-center gap-2 px-2">
          <div className="size-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold">
            A
          </div>
          <span className="font-semibold text-lg">{t('admin.title')}</span>
        </div>
        
        <nav className="flex flex-col gap-2 flex-1">
          <Link 
            href="/admin" 
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted transition-colors text-sm font-medium"
          >
            <LayoutDashboard className="size-4" />
            {t('admin.dashboard')}
          </Link>
          <Link 
            href="/admin/projects" 
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted transition-colors text-sm font-medium"
          >
            <FolderKanban className="size-4" />
            {t('admin.projects')}
          </Link>
          <Link 
            href="/admin/contact" 
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted transition-colors text-sm font-medium"
          >
            <Mail className="size-4" />
            {t('admin.messages')}
          </Link>
        </nav>

        <div className="flex flex-col gap-1 px-2 py-4 border-t mt-auto">
             <AdminThemeToggle />
             <AdminLanguageSwitcher />
        </div>

        <form action={logout}>
          <Button variant="outline" className="w-full justify-start gap-3" type="submit">
            <LogOut className="size-4" />
            {t('admin.logout')}
          </Button>
        </form>
      </aside>

      <main className="flex-1 overflow-auto p-6 md:p-10">
        <div className="mx-auto max-w-6xl">
          {children}
        </div>
      </main>
    </div>
  )
}
