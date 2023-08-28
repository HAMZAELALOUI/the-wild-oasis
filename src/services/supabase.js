
import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://zpbiwjnuoimudhtffxwu.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpwYml3am51b2ltdWRodGZmeHd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMwNzM2MDAsImV4cCI6MjAwODY0OTYwMH0.yS30WSkSTZvPfUtNNmhoH_bCo-b3qceHYF86Zo5kwLM'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;