import { createClient } from '@supabase/supabase-js'

// Supabase configuration (hardcoded for debug/testing)
const supabaseUrl = 'https://xghhtgiqjjetnbtqteyf.supabase.co'
const supabaseAnonKey = 'sb_publishable_-xhtSwo45bOd6NjSAI3FhQ_05LvWoxg'

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types for TypeScript
export interface BetaSignup {
  id?: number
  business_name: string
  email: string
  phone: string
  city: string
  state: string
  created_at?: string
}

// Helper function to insert a new beta signup
export async function insertBetaSignup(data: Omit<BetaSignup, 'id' | 'created_at'>) {
  const { data: result, error } = await supabase
    .from('beta_signups')
    .insert([data])
    .select()

  if (error) {
    throw new Error(`Error inserting beta signup: ${error.message}`)
  }

  return result
} 