"use server"

import { createClient } from "@supabase/supabase-js"
import { z } from "zod"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY || ""
)

// Define el esquema de validación sin el campo subject
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  email: z.string().email({ message: "Por favor ingresa un correo electrónico válido" }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres" }),
})

// Tipo para los datos del formulario
export type ContactFormData = z.infer<typeof contactFormSchema>

// Tipo para la respuesta
export type SubmissionResponse = {
  success: boolean
  message: string
  errors?: Record<string, string[]>
}

export async function submitContactForm(formData: FormData): Promise<SubmissionResponse> {
  console.log("--- Inicio de submitContactForm ---")
  try {
    const apiKey = process.env.RESEND_API_KEY
    console.log("🔑 Checking Resend API Key:", apiKey ? `Presente (${apiKey.substring(0, 4)}...)` : "MISSING")
    
    // Extraer datos del formulario
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    }

    // Validar datos del formulario
    const validationResult = contactFormSchema.safeParse(data)

    // Si la validación falla, devolver errores
    if (!validationResult.success) {
      console.log("❌ Validación fallida:", validationResult.error.flatten())
      return {
        success: false,
        message: "Por favor corrige los errores en el formulario",
        errors: validationResult.error.flatten().fieldErrors,
      }
    }

    console.log("✅ Validación exitosa. Integrando con Supabase...")

    // Si la validación pasa, insertar datos en Supabase
    const { error } = await supabase.from("contact").insert([
      {
        name: data.name,
        email: data.email,
        message: data.message
      },
    ])

    // Enviar email con Resend (sin bloquear si falla, pero registrando el error)
    if (!error) {
      console.log("✅ Datos guardados en Supabase. Intentando enviar email con Resend...")
      try {
        console.log(`📧 Enviando email a: ${process.env.CONTACT_EMAIL || "delivered@resend.dev"} desde: onboarding@resend.dev`)
        const emailResponse = await resend.emails.send({
          from: "Portfolio Contact Form <onboarding@resend.dev>",
          to: process.env.CONTACT_EMAIL || "delivered@resend.dev",
          replyTo: data.email,
          subject: `Nuevo mensaje de: ${data.name}`,
          html: `
            <h1>Nuevo Mensaje de Contacto</h1>
            <p><strong>Nombre:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Mensaje:</strong></p>
            <p>${data.message}</p>
          `,
        })
        console.log("✅ Email enviado exitosamente con Resend:", emailResponse)
      } catch (emailError) {
        console.error("❌ Error CRÍTICO al enviar email con Resend:", emailError)
      }
    } else {
        console.error("❌ Error al guardar en Supabase, omitiendo envío de email:", error)
    }

    // Manejar error de Supabase
    if (error) {
      console.error("Error al insertar datos del formulario de contacto:", error)
      return {
        success: false,
        message: "Hubo un problema al enviar tu mensaje. Por favor intenta nuevamente.",
      }
    }

    // Devolver respuesta exitosa
    return {
      success: true,
      message: "¡Mensaje enviado! Gracias por contactarme, responderé a la brevedad.",
    }
  } catch (error) {
    // Manejar errores inesperados
    console.error("Error inesperado en el envío del formulario de contacto:", error)
    return {
      success: false,
      message: "Ocurrió un error inesperado. Por favor intenta nuevamente más tarde.",
    }
  }
}
