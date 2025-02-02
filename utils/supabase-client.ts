import { createClient } from "@supabase/supabase-js"

// Initialize Supabase client
const supabaseUrl = "https://dkjqlhdbtxuaejhllyrn.supabase.co"
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRranFsaGRidHh1YWVqaGxseXJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0MTQ1MDMsImV4cCI6MjA1Mzk5MDUwM30.HzkhbhhcOWqWc6hF4rpL2jW_8xIlAiq_7YUZGYkLC1U"

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase credentials")
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

