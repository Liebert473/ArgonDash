import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseAnonKey || !supabaseUrl){
    throw new Error('Supabase URL or Anon Key is missing.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)