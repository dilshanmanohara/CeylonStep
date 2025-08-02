
import { createClient } from '@supabase/supabase-js';

// Try both public and server-side env variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL and anon key are required. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY (for client), or SUPABASE_URL and SUPABASE_ANON_KEY (for server) in your environment variables.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);