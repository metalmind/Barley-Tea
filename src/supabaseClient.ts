// Import Supabase (if using npm)
// import { createClient } from '@supabase/supabase-js';

// Supabaseimport { createClient } from '@supabase/supabase-js' <-- found this somewhere else: https://www.freecodecamp.org/news/set-up-authentication-in-apps-with-supabase/

// Initialize Supabase client

/**
const SUPABASE_URL = "https://edgvbfktdwptgsnczmer.supabase.co"; // Supabase URL
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkZ3ZiZmt0ZHdwdGdzbmN6bWVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk2MTE4NDIsImV4cCI6MjA3NTE4Nzg0Mn0.sjQwJ0ggoRrCTrPT1eFUDVF4ip74Bir4LOX3yT8nntY"; // Our Supabase Public Anon Key

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

 */


import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://edgvbfktdwptgsnczmer.supabase.co'
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkZ3ZiZmt0ZHdwdGdzbmN6bWVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk2MTE4NDIsImV4cCI6MjA3NTE4Nzg0Mn0.sjQwJ0ggoRrCTrPT1eFUDVF4ip74Bir4LOX3yT8nntY"; // Our Supabase Public Anon Key

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
