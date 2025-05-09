"use server"

import { supabase } from "@/lib/supabaseClient"
import { z } from "zod"

// Define validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  email: z.string().email({ message: "Por favor ingresa un correo electrónico válido" }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres" }),
})

// Type for form data
export type ContactFormData = z.infer<typeof contactFormSchema>

// Type for response
export type SubmissionResponse = {
  success: boolean
  message: string
  errors?: Record<string, string[]>
  debug?: any // For development debugging
}

export async function submitContactForm(formData: FormData): Promise<SubmissionResponse> {
  try {
    // Extract form data
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    }

    // Log received data for debugging
    console.log("Server action received data:", data)

    // Validate form data
    const validationResult = contactFormSchema.safeParse(data)

    // If validation fails, return errors
    if (!validationResult.success) {
      const formattedErrors: Record<string, string[]> = {}

      // Format Zod errors into a more usable structure
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

    // Check Supabase connection before attempting insert
    const { error: connectionError } = await supabase.from("contact").select("id").limit(1)
    if (connectionError) {
      console.error("Supabase connection error:", connectionError)
      return {
        success: false,
        message: "Error de conexión con la base de datos. Por favor intenta nuevamente más tarde.",
        debug: connectionError,
      }
    }

    // If validation passes, insert data into Supabase
    // Include all required fields based on the table schema
    const { data: insertData, error } = await supabase
      .from("contact")
      .insert([
        {
          name: data.name,
          email: data.email,
          subject: "Mensaje desde formulario de contacto", // Default subject
          message: data.message,
          read: false, // Default read status
        },
      ])
      .select()

    // Handle Supabase error
    if (error) {
      console.error("Error inserting contact form data:", error)

      // Check for specific error types
      if (error.code === "23505") {
        return {
          success: false,
          message: "Ya existe un registro con esta información. Por favor intenta con datos diferentes.",
          debug: error,
        }
      }

      if (error.code === "23502") {
        return {
          success: false,
          message: "Falta un campo requerido en el formulario.",
          debug: error,
        }
      }

      return {
        success: false,
        message: "Hubo un problema al enviar tu mensaje. Por favor intenta nuevamente.",
        debug: error,
      }
    }

    // Log successful insert
    console.log("Contact form data inserted successfully:", insertData)

    // Return successful response
    return {
      success: true,
      message: "¡Mensaje enviado! Gracias por contactarme, responderé a la brevedad.",
    }
  } catch (error) {
    // Handle unexpected errors
    console.error("Unexpected error in contact form submission:", error)
    return {
      success: false,
      message: "Ocurrió un error inesperado. Por favor intenta nuevamente más tarde.",
      debug: error instanceof Error ? error.message : String(error),
    }
  }
}
