import { createClient } from '@supabase/supabase-js'

// Client-side Supabase (for browser/CSR). Uses NEXT_PUBLIC_* env vars.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  // Keep this quiet in production; helpful during setup.
  // eslint-disable-next-line no-console
  console.warn('Supabase client missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY')
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '')
export default supabase
