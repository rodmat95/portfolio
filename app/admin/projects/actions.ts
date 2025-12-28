'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'

// Validation schema
const projectSchema = z.object({
  title: z.string().min(2, "Title is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  goal: z.string().optional(),
  technologies: z.string(), // We'll handle splitting this string in the action
  category: z.string(),
  results: z.string().optional(),
  image: z.string().optional(),
  live_url: z.string().optional(),
  repo_url: z.string().optional(),
  featured: z.coerce.boolean(),
})


// Helper to slugify title
function slugify(text: string) {
  return text.toString().toLowerCase()
    .trim()
    .replace(/\s+/g, '-')     // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-')   // Replace multiple - with single -
}

export async function createProject(formData: FormData) {
  const supabase = await createClient()
  
  const title = formData.get('title') as string
  const techString = formData.get('technologies') as string
  const technologies = techString.split(',').map(t => t.trim()).filter(Boolean)
  const file = formData.get('image') as File

  let imageUrl = ''

  if (file && file.size > 0) {
    const slug = slugify(title)
    const fileExt = file.name.split('.').pop()
    const fileName = `${slug}-${Date.now()}.${fileExt}`
    
    // Upload to 'portfolio' bucket
    const { data: uploadData, error: uploadError } = await supabase
      .storage
      .from('portfolio')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false
      })

    if (uploadError) {
      return { error: `Image upload failed: ${uploadError.message}` }
    }

    // Get public URL
    const { data: { publicUrl } } = supabase
      .storage
      .from('portfolio')
      .getPublicUrl(fileName)
      
    imageUrl = publicUrl
  }

  const rawData = {
    title,
    description: formData.get('description'),
    goal: formData.get('goal'),
    technologies,
    category: formData.get('category'),
    results: formData.get('results'),
    image: imageUrl, 
    live_url: formData.get('live_url'),
    repo_url: formData.get('repo_url'),
    featured: formData.get('featured') === 'on',
  }

  const { error } = await supabase.from('projects').insert([rawData])

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/admin/projects')
  revalidatePath('/') 
  redirect('/admin/projects')
}

export async function updateProject(id: string, formData: FormData) {
  const supabase = await createClient()
  
  const title = formData.get('title') as string
  const techString = formData.get('technologies') as string
  const technologies = techString.split(',').map(t => t.trim()).filter(Boolean)
  const file = formData.get('image') as File
  const existingImage = formData.get('existing_image') as string

  let imageUrl = existingImage

  if (file && file.size > 0) {
    const slug = slugify(title)
    const fileExt = file.name.split('.').pop()
    const fileName = `${slug}-${Date.now()}.${fileExt}`
    
    // Upload new image
    const { error: uploadError } = await supabase
      .storage
      .from('portfolio')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false
      })

    if (uploadError) {
      return { error: `Image upload failed: ${uploadError.message}` }
    }

    // Get new public URL
    const { data: { publicUrl } } = supabase
      .storage
      .from('portfolio')
      .getPublicUrl(fileName)
      
    imageUrl = publicUrl
  }

  const rawData = {
    title,
    description: formData.get('description'),
    goal: formData.get('goal'),
    technologies,
    category: formData.get('category'),
    results: formData.get('results'),
    image: imageUrl,
    live_url: formData.get('live_url'),
    repo_url: formData.get('repo_url'),
    featured: formData.get('featured') === 'on',
  }

  const { error } = await supabase
    .from('projects')
    .update(rawData)
    .eq('id', id)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/admin/projects')
  revalidatePath('/')
  redirect('/admin/projects')
}

export async function deleteProject(id: string) {
  const supabase = await createClient()
  
  // Optional: Delete image from storage if we wanted to be clean, 
  // but keeping it simple for now as we don't track the filename directly in DB reliably enough without parsing.
  
  const { error } = await supabase.from('projects').delete().eq('id', id)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/admin/projects')
  revalidatePath('/')
}
