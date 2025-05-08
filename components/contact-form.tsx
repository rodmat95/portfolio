"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { useLanguage } from "@/context/language-context"
import AnimatedButton from "./animated-button"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const { t } = useLanguage()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: t("contact.form.success"),
      description: t("contact.form.successDescription"),
    })

    // Reset form
    const form = e.target as HTMLFormElement
    form.reset()
    setIsSubmitting(false)
  }

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName)
  }

  const handleBlur = () => {
    setFocusedField(null)
  }

  const getFieldClasses = (fieldName: string) => {
    return `transition-all duration-300 focus:border-navy-400 focus:ring-navy-400 dark:focus:border-navy-300 dark:focus:ring-navy-300 dark:bg-dark-slate-100/10 dark:text-white ${
      focusedField === fieldName ? "border-navy-400 dark:border-navy-300" : ""
    }`
  }

  const getLabelClasses = (fieldName: string) => {
    return `transition-all duration-300 text-sm font-medium dark:text-slate-200 ${
      focusedField === fieldName ? "text-navy-600 dark:text-navy-300" : ""
    }`
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-2">
        <Label htmlFor="name" className={getLabelClasses("name")}>
          {t("contact.form.name")}
        </Label>
        <Input
          id="name"
          name="name"
          required
          placeholder={t("contact.form.namePlaceholder")}
          className={getFieldClasses("name")}
          onFocus={() => handleFocus("name")}
          onBlur={handleBlur}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email" className={getLabelClasses("email")}>
          {t("contact.form.email")}
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder={t("contact.form.emailPlaceholder")}
          className={getFieldClasses("email")}
          onFocus={() => handleFocus("email")}
          onBlur={handleBlur}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="subject" className={getLabelClasses("subject")}>
          {t("contact.form.subject")}
        </Label>
        <Input
          id="subject"
          name="subject"
          required
          placeholder={t("contact.form.subjectPlaceholder")}
          className={getFieldClasses("subject")}
          onFocus={() => handleFocus("subject")}
          onBlur={handleBlur}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message" className={getLabelClasses("message")}>
          {t("contact.form.message")}
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder={t("contact.form.messagePlaceholder")}
          className={`min-h-[120px] resize-y ${getFieldClasses("message")}`}
          onFocus={() => handleFocus("message")}
          onBlur={handleBlur}
        />
      </div>
      <AnimatedButton color="gradient" className="w-full mt-6" disabled={isSubmitting}>
        {isSubmitting ? t("contact.form.sending") : t("contact.form.send")}
      </AnimatedButton>
    </form>
  )
}
