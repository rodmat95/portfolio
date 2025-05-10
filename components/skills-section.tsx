"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Code,
  Figma,
  GitBranch,
  Globe,
  Layers,
  MessageSquare,
  Puzzle,
  Search,
  Server,
  Sparkles,
  Users,
} from "lucide-react"
import { useLanguage } from "@/context/language-context"

export default function SkillsSection() {
  const { t } = useLanguage()

  return (
    <Tabs defaultValue="technical" className="mt-12">
      <div className="flex justify-center">
        <TabsList>
          <TabsTrigger value="technical">{t("skills.tabs.technical")}</TabsTrigger>
          <TabsTrigger value="soft">{t("skills.tabs.soft")}</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="technical" className="mt-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center gap-2">
              <Code className="h-5 w-5 text-primary flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <CardTitle className="truncate">{t("skills.technical.frontend.title")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                {t("skills.technical.frontend.skills").map((skill: string, index: number) => (
                  <li key={index} className="break-words-fix">
                    {skill}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-2">
              <Server className="h-5 w-5 text-primary flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <CardTitle className="truncate">{t("skills.technical.backend.title")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                {t("skills.technical.backend.skills").map((skill: string, index: number) => (
                  <li key={index} className="break-words-fix">
                    {skill}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-2">
              <Layers className="h-5 w-5 text-primary flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <CardTitle className="truncate">{t("skills.technical.database.title")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                {t("skills.technical.database.skills").map((skill: string, index: number) => (
                  <li key={index} className="break-words-fix">
                    {skill}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-2">
              <Figma className="h-5 w-5 text-primary flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <CardTitle className="truncate">{t("skills.technical.design.title")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                {t("skills.technical.design.skills").map((skill: string, index: number) => (
                  <li key={index} className="break-words-fix">
                    {skill}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-2">
              <GitBranch className="h-5 w-5 text-primary flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <CardTitle className="truncate">{t("skills.technical.devops.title")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                {t("skills.technical.devops.skills").map((skill: string, index: number) => (
                  <li key={index} className="break-words-fix">
                    {skill}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-2">
              <Globe className="h-5 w-5 text-primary flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <CardTitle className="truncate">{t("skills.technical.other.title")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                {t("skills.technical.other.skills").map((skill: string, index: number) => (
                  <li key={index} className="break-words-fix">
                    {skill}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
      <TabsContent value="soft" className="mt-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center gap-2">
              <Puzzle className="h-5 w-5 text-primary flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <CardTitle className="truncate">{t("skills.soft.problemSolving.title")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{t("skills.soft.problemSolving.description")}</p>
              <div className="mt-4">
                <p className="font-medium">{t("skills.soft.problemSolving.example")}</p>
                <p className="text-sm text-muted-foreground">{t("skills.soft.problemSolving.exampleText")}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <CardTitle className="truncate">{t("skills.soft.communication.title")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{t("skills.soft.communication.description")}</p>
              <div className="mt-4">
                <p className="font-medium">{t("skills.soft.communication.example")}</p>
                <p className="text-sm text-muted-foreground">{t("skills.soft.communication.exampleText")}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-2">
              <Users className="h-5 w-5 text-primary flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <CardTitle className="truncate">{t("skills.soft.collaboration.title")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{t("skills.soft.collaboration.description")}</p>
              <div className="mt-4">
                <p className="font-medium">{t("skills.soft.collaboration.example")}</p>
                <p className="text-sm text-muted-foreground">{t("skills.soft.collaboration.exampleText")}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <CardTitle className="truncate">{t("skills.soft.creativity.title")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{t("skills.soft.creativity.description")}</p>
              <div className="mt-4">
                <p className="font-medium">{t("skills.soft.creativity.example")}</p>
                <p className="text-sm text-muted-foreground">{t("skills.soft.creativity.exampleText")}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-2">
              <Search className="h-5 w-5 text-primary flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <CardTitle className="truncate">{t("skills.soft.attention.title")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{t("skills.soft.attention.description")}</p>
              <div className="mt-4">
                <p className="font-medium">{t("skills.soft.attention.example")}</p>
                <p className="text-sm text-muted-foreground">{t("skills.soft.attention.exampleText")}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-2">
              <Layers className="h-5 w-5 text-primary flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <CardTitle className="truncate">{t("skills.soft.adaptability.title")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{t("skills.soft.adaptability.description")}</p>
              <div className="mt-4">
                <p className="font-medium">{t("skills.soft.adaptability.example")}</p>
                <p className="text-sm text-muted-foreground">{t("skills.soft.adaptability.exampleText")}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  )
}
