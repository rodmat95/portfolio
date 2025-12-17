"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Github, Linkedin, Mail } from "lucide-react"

import { useLanguage } from "@/context/language-context"
import { submitContactForm } from "@/lib/actions"
import { toast } from "sonner"

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const { t } = useLanguage()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("🖱️ Kontakt Section: Formulario enviado")
    setIsSubmitting(true)

    try {
      const formData = new FormData(e.currentTarget)
      
      console.log("📤 Contact Section: Llamando a server action...")
      const response = await submitContactForm(formData)
      console.log("📥 Contact Section: Respuesta del servidor:", response)

      if (response.success) {
        setSubmitted(true)
        toast.success(response.message)
      } else {
        toast.error(response.message)
        console.error("❌ Error en el envío:", response.errors)
      }
    } catch (error) {
      console.error("❌ Error inesperado:", error)
      toast.error(t("contact.form.error") || "Error al enviar el mensaje")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-spacing">
      <div className="editorial-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div
            className="lg:col-span-5 lg:sticky lg:top-32"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-editorial-lg mb-4">{t("contact.title")}</h2>
            <p className="text-editorial-body mb-8">{t("contact.description")}</p>

            <div className="space-y-6">
              <a href="mailto:rodmat0905@gmail.com" className="flex items-center group">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-foreground/60">{t("contact.contactInfo.email")}</div>
                  <div className="font-medium group-hover:text-primary transition-colors">rodmat0905@gmail.com</div>
                </div>
              </a>

              <a
                href="https://github.com/rodmat95"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                  <Github className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-foreground/60">{t("contact.contactInfo.github")}</div>
                  <div className="font-medium group-hover:text-primary transition-colors">github.com/rodmat95</div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/rodrigochavarry"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-foreground/60">{t("contact.contactInfo.linkedin")}</div>
                  <div className="font-medium group-hover:text-primary transition-colors">
                    linkedin.com/in/rodrigochavarry
                  </div>
                </div>
              </a>
            </div>

            <div className="mt-12 pt-8 border-t">
              <p className="text-lg font-medium mb-2">{t("contact.tagline")}</p>
              <p className="text-foreground/60">
                {t("contact.availability")} {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
              </p>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <div className="bg-primary/10 rounded-lg p-8 text-center">
                <h3 className="text-editorial-sm mb-4">{t("contact.form.success")}</h3>
                <p className="text-foreground/70 mb-6">{t("contact.form.successDescription")}</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="inline-flex items-center justify-center h-10 px-4 py-2 rounded-md text-sm font-medium transition-all bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {t("contact.form.send")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 bg-secondary/30 rounded-lg p-8">
                <div className="space-y-2">
                  <Label htmlFor="name">{t("contact.form.name")}</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder={t("contact.form.namePlaceholder")}
                    required
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{t("contact.form.email")}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t("contact.form.emailPlaceholder")}
                    required
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t("contact.form.message")}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={t("contact.form.messagePlaceholder")}
                    rows={6}
                    required
                    className="bg-background resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center h-11 px-6 py-3 rounded-md text-base font-medium transition-all bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-70"
                >
                  {isSubmitting ? t("contact.form.sending") : t("contact.form.send")}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}