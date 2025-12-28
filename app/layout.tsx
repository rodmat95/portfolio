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

// * [CONFIG] Metadata configuration
export const metadata = {
  title: {
    default: "Rodrigo Chavarry | Professional Web Developer",
    template: "%s | Rodrigo Chavarry",
  },
  description:
    "Rodrigo Chavarry's Professional Portfolio. Expert web developer specializing in modern, responsive, and high-performance web applications using React, Next.js, and TypeScript.",
  keywords: [
    "Web Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Rodrigo Chavarry",
    "Rodmat95",
    "Desarrollador Web",
  ],
  authors: [{ name: "Rodrigo Chavarry" }],
  creator: "Rodrigo Chavarry",
  openGraph: {
    type: "website",
    locale: "ls_LA",
    url: "https://rodmat95.dev",
    title: "Rodrigo Chavarry | Professional Web Developer",
    description: "Expert web developer specializing in modern web applications.",
    siteName: "Rodrigo Chavarry Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rodrigo Chavarry Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rodrigo Chavarry | Professional Web Developer",
    description: "Expert web developer specializing in modern web applications.",
    images: ["/og-image.jpg"],
    creator: "@rodmat95",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
  },
  metadataBase: new URL("https://rodmat95.dev"),
}

// * [LAYOUT] Root Layout Component
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rodrigo Chavarry",
    url: "https://rodmat95.dev",
    jobTitle: "Web Developer",
    email: "rodmat0905@gmail.com",
    image: "https://rodmat95.dev/images/profile-illustration.png",
    sameAs: [
      "https://github.com/rodmat95",
      "https://linkedin.com/in/rodrigochavarry",
    ],
    description:
      "Professional Web Developer specializing in creating modern, responsive, and user-friendly web applications.",
  }

  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${heading.variable} ${mono.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <LanguageProvider translations={{ es: esTranslations, en: enTranslations }}>{children}</LanguageProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
