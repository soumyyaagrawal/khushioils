import { createClient } from '@supabase/supabase-js'

// Server-side Supabase (for server-only operations). Use the service-role key.
const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceRole = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceRole) {
  // eslint-disable-next-line no-console
  console.warn('Supabase server missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY')
}

// Note: keep service-role keys server-side only.
export const supabaseAdmin = createClient(supabaseUrl || '', supabaseServiceRole || '')
export default supabaseAdmin
