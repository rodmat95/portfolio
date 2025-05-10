"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Search, PenTool, CodeIcon, Zap, BarChart } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export default function ProcessSection() {
  const { t } = useLanguage()

  return (
    <div className="mt-12">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="relative overflow-hidden">
          <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-4xl font-bold text-primary">1</span>
          </div>
          <CardHeader className="flex flex-row items-center gap-2">
            <Lightbulb className="h-5 w-5 text-primary flex-shrink-0" />
            <div className="min-w-0 flex-1">
              <CardTitle className="truncate">{t("process.steps.discovery.title")}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground break-words-fix">{t("process.steps.discovery.description")}</p>
            <div className="mt-4 space-y-2">
              <h4 className="font-medium">{t("process.steps.discovery.activities")}</h4>
              <ul className="list-disc pl-5 text-sm text-muted-foreground">
                {t("process.steps.discovery.activitiesList").map((activity: string, index: number) => (
                  <li key={index} className="break-words-fix">
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
        <Card className="relative overflow-hidden">
          <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-4xl font-bold text-primary">2</span>
          </div>
          <CardHeader className="flex flex-row items-center gap-2">
            <Search className="h-5 w-5 text-primary flex-shrink-0" />
            <div className="min-w-0 flex-1">
              <CardTitle className="truncate">{t("process.steps.research.title")}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground break-words-fix">{t("process.steps.research.description")}</p>
            <div className="mt-4 space-y-2">
              <h4 className="font-medium">{t("process.steps.research.activities")}</h4>
              <ul className="list-disc pl-5 text-sm text-muted-foreground">
                {t("process.steps.research.activitiesList").map((activity: string, index: number) => (
                  <li key={index} className="break-words-fix">
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
        <Card className="relative overflow-hidden">
          <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-4xl font-bold text-primary">3</span>
          </div>
          <CardHeader className="flex flex-row items-center gap-2">
            <PenTool className="h-5 w-5 text-primary flex-shrink-0" />
            <div className="min-w-0 flex-1">
              <CardTitle className="truncate">{t("process.steps.design.title")}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground break-words-fix">{t("process.steps.design.description")}</p>
            <div className="mt-4 space-y-2">
              <h4 className="font-medium">{t("process.steps.design.activities")}</h4>
              <ul className="list-disc pl-5 text-sm text-muted-foreground">
                {t("process.steps.design.activitiesList").map((activity: string, index: number) => (
                  <li key={index} className="break-words-fix">
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
        <Card className="relative overflow-hidden">
          <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-4xl font-bold text-primary">4</span>
          </div>
          <CardHeader className="flex flex-row items-center gap-2">
            <CodeIcon className="h-5 w-5 text-primary flex-shrink-0" />
            <div className="min-w-0 flex-1">
              <CardTitle className="truncate">{t("process.steps.development.title")}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground break-words-fix">{t("process.steps.development.description")}</p>
            <div className="mt-4 space-y-2">
              <h4 className="font-medium">{t("process.steps.development.activities")}</h4>
              <ul className="list-disc pl-5 text-sm text-muted-foreground">
                {t("process.steps.development.activitiesList").map((activity: string, index: number) => (
                  <li key={index} className="break-words-fix">
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
        <Card className="relative overflow-hidden">
          <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-4xl font-bold text-primary">5</span>
          </div>
          <CardHeader className="flex flex-row items-center gap-2">
            <Zap className="h-5 w-5 text-primary flex-shrink-0" />
            <div className="min-w-0 flex-1">
              <CardTitle className="truncate">{t("process.steps.testing.title")}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground break-words-fix">{t("process.steps.testing.description")}</p>
            <div className="mt-4 space-y-2">
              <h4 className="font-medium">{t("process.steps.testing.activities")}</h4>
              <ul className="list-disc pl-5 text-sm text-muted-foreground">
                {t("process.steps.testing.activitiesList").map((activity: string, index: number) => (
                  <li key={index} className="break-words-fix">
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
        <Card className="relative overflow-hidden">
          <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-4xl font-bold text-primary">6</span>
          </div>
          <CardHeader className="flex flex-row items-center gap-2">
            <BarChart className="h-5 w-5 text-primary flex-shrink-0" />
            <div className="min-w-0 flex-1">
              <CardTitle className="truncate">{t("process.steps.launch.title")}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground break-words-fix">{t("process.steps.launch.description")}</p>
            <div className="mt-4 space-y-2">
              <h4 className="font-medium">{t("process.steps.launch.activities")}</h4>
              <ul className="list-disc pl-5 text-sm text-muted-foreground">
                {t("process.steps.launch.activitiesList").map((activity: string, index: number) => (
                  <li key={index} className="break-words-fix">
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-12 mx-auto max-w-3xl bg-muted p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">{t("process.problemSolving.title")}</h3>
        <p className="text-muted-foreground mb-6">{t("process.problemSolving.description")}</p>
        <ol className="space-y-4">
          {t("process.problemSolving.steps").map((step: any, index: number) => (
            <li key={index} className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border bg-background text-sm font-medium">
                {index + 1}
              </span>
              <div>
                <h4 className="font-medium">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
