"use client"

import { createClient } from "@supabase/supabase-js"

// Initialize the Supabase client with environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

// Validate that the environment variables are set
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("Supabase URL or Anon Key is missing. Make sure you have set the environment variables correctly.")
}

// Create a single Supabase client for the entire application
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false, // This can help with some auth-related issues
  },
})

// Add a debug function to test the connection
export const testSupabaseConnection = async () => {
  try {
    const { data, error } = await supabase.from("contact").select("count", { count: "exact" }).limit(0)
    if (error) {
      console.error("Supabase connection test failed:", error)
      return { success: false, error }
    }
    console.log("Supabase connection successful")
    return { success: true, data }
  } catch (err) {
    console.error("Supabase connection test exception:", err)
    return { success: false, error: err }
  }
}

// Export a function to get the client (useful for testing and mocking)
export const getSupabaseClient = () => supabase
