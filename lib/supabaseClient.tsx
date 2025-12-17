"use client"

import { createClient } from "@supabase/supabase-js"

// Initialize the Supabase client with environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY || ""

// Validate that the environment variables are set
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("Supabase URL or Publishable Key is missing. Make sure you have set the environment variables correctly.")
}

// Create a single Supabase client for the entire application
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Export a function to get the client (useful for testing and mocking)
export const getSupabaseClient = () => supabase
