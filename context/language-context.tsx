"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "es" | "en"
type Translations = Record<string, any>

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  translations: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
  initialLanguage?: Language
  translations: {
    es: Translations
    en: Translations
  }
}

export function LanguageProvider({ children, initialLanguage = "es", translations }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(initialLanguage)
  const [currentTranslations, setCurrentTranslations] = useState<Translations>(translations[initialLanguage])

  useEffect(() => {
    // * [LOGIC] Check if there's a saved language preference in localStorage
    const savedLanguage = localStorage.getItem("language") as Language | null
    if (savedLanguage && (savedLanguage === "es" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    // * [LOGIC] Update translations when language changes
    setCurrentTranslations(translations[language])
    // ? [INFO] Save language preference to localStorage
    localStorage.setItem("language", language)
  }, [language, translations])

  // * [UTIL] Function to get nested translations using dot notation
  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = currentTranslations

    for (const k of keys) {
      if (value === undefined) return key
      value = value[k]
    }

    return value !== undefined ? value : key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, translations: currentTranslations }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
