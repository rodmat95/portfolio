import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/context/language-context"
import esTranslations from "@/i18n/es.json"
import enTranslations from "@/i18n/en.json"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const heading = Inter({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

const mono = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata = {
  title: "Rodrigo Chavarry",
  description: "Rodrigo Chavarry's Professional Web Developer Portfolio",
    generator: 'v0.app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${heading.variable} ${mono.variable}`}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <LanguageProvider translations={{ es: esTranslations, en: enTranslations }}>{children}</LanguageProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
