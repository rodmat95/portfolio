"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { useLanguage } from "@/context/language-context"
import AnimatedButton from "./animated-button"
import { submitContactForm, type SubmissionResponse } from "@/lib/actions"
import { Loader2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [formErrors, setFormErrors] = useState<Record<string, string[]>>({})
  const [formSuccess, setFormSuccess] = useState<string | null>(null)
  const [formError, setFormError] = useState<string | null>(null)
  const { t } = useLanguage()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("🖱️ Client: Formulario enviado por el usuario")
    setIsSubmitting(true)
    setFormErrors({})
    setFormSuccess(null)
    setFormError(null)

    try {
      // Obtener datos del formulario
      const formData = new FormData(e.currentTarget)

      // Enviar datos del formulario usando la acción del servidor
      console.log("📤 Client: Llamando a server action submitContactForm...")
      const response: SubmissionResponse = await submitContactForm(formData)
      console.log("📥 Client: Respuesta recibida del servidor:", response)

      if (response.success) {
        // Mostrar mensaje de éxito
        setFormSuccess(response.message)
        // Reiniciar formulario
        e.currentTarget.reset()
        // Mostrar notificación toast
        toast({
          title: t("contact.form.success"),
          description: response.message,
        })
      } else {
        // Mostrar mensaje de error
        setFormError(response.message)
        // Establecer errores específicos de campo si están disponibles
        if (response.errors) {
          setFormErrors(response.errors)
        }
      }
    } catch (error) {
      console.error("Error al enviar formulario:", error)
      setFormError(t("contact.form.error") || "Ocurrió un error al enviar el formulario.")
    } finally {
      setIsSubmitting(false)
    }
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
    } ${formErrors[fieldName] ? "border-red-500 dark:border-red-400" : ""}`
  }

  const getLabelClasses = (fieldName: string) => {
    return `transition-all duration-300 text-sm font-medium dark:text-slate-200 ${
      focusedField === fieldName ? "text-navy-600 dark:text-navy-300" : ""
    } ${formErrors[fieldName] ? "text-red-500 dark:text-red-400" : ""}`
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Mensaje de éxito */}
      {formSuccess && (
        <Alert className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
          <AlertTitle className="text-green-800 dark:text-green-400">¡Mensaje enviado!</AlertTitle>
          <AlertDescription className="text-green-700 dark:text-green-300">{formSuccess}</AlertDescription>
        </Alert>
      )}

      {/* Mensaje de error */}
      {formError && (
        <Alert className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
          <AlertTitle className="text-red-800 dark:text-red-400">Error</AlertTitle>
          <AlertDescription className="text-red-700 dark:text-red-300">{formError}</AlertDescription>
        </Alert>
      )}

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
          aria-invalid={!!formErrors.name}
          aria-describedby={formErrors.name ? "name-error" : undefined}
        />
        {formErrors.name && (
          <p id="name-error" className="text-sm text-red-500 dark:text-red-400 mt-1">
            {formErrors.name[0]}
          </p>
        )}
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
          aria-invalid={!!formErrors.email}
          aria-describedby={formErrors.email ? "email-error" : undefined}
        />
        {formErrors.email && (
          <p id="email-error" className="text-sm text-red-500 dark:text-red-400 mt-1">
            {formErrors.email[0]}
          </p>
        )}
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
          aria-invalid={!!formErrors.message}
          aria-describedby={formErrors.message ? "message-error" : undefined}
        />
        {formErrors.message && (
          <p id="message-error" className="text-sm text-red-500 dark:text-red-400 mt-1">
            {formErrors.message[0]}
          </p>
        )}
      </div>
      <AnimatedButton color="gradient" className="w-full mt-6" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {t("contact.form.sending")}
          </>
        ) : (
          t("contact.form.send")
        )}
      </AnimatedButton>
    </form>
  )
}
