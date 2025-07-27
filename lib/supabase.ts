import { createClient } from '@supabase/supabase-js'

// Supabase configuration
// You'll need to replace these with your actual Supabase credentials
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types for TypeScript
export interface BetaSignup {
  id?: number
  business_name: string
  email: string
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