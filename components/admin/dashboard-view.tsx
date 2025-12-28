"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/context/language-context"

export function DashboardView() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{t('admin.dashboard')}</h1>
        <p className="text-muted-foreground">{t('admin.dashboardView.welcome')}.</p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t('admin.dashboardView.projectsTitle')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{t('admin.dashboardView.projectsAction')}</div>
            <p className="text-xs text-muted-foreground">
              {t('admin.dashboardView.projectsDesc')}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t('admin.dashboardView.messagesTitle')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{t('admin.dashboardView.messagesAction')}</div>
            <p className="text-xs text-muted-foreground">
              {t('admin.dashboardView.messagesDesc')}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
