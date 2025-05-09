"use server"

import { supabase } from "@/lib/supabaseClient"
import { z } from "zod"

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
  try {
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
      const formattedErrors: Record<string, string[]> = {}

      // Formatear errores de Zod en una estructura más utilizable
      validationResult.error.errors.forEach((error) => {
        const field = error.path[0] as string
        if (!formattedErrors[field]) {
          formattedErrors[field] = []
        }
        formattedErrors[field].push(error.message)
      })

      return {
        success: false,
        message: "Por favor corrige los errores en el formulario",
        errors: formattedErrors,
      }
    }

    // Si la validación pasa, insertar datos en Supabase
    const { error } = await supabase.from("contact").insert([
      {
        name: data.name,
        email: data.email,
        message: data.message
      },
    ])

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
