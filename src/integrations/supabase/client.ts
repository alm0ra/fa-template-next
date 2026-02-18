// Supabase Client
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const SUPABASE_PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || '';
const isBrowser = typeof window !== 'undefined';

// Check if env vars are configured
const isConfigured = SUPABASE_URL && SUPABASE_PUBLISHABLE_KEY;

if (!isConfigured && process.env.NODE_ENV !== "production") {
  console.warn(
    '⚠️ Supabase not configured!\n' +
    'Create a .env file with:\n' +
    '  NEXT_PUBLIC_SUPABASE_URL=your-url\n' +
    '  NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-key\n' +
    'See .env.example for reference.'
  );
}

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase: SupabaseClient<Database> = isConfigured
  ? createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
      auth: {
        ...(isBrowser ? { storage: localStorage } : {}),
        persistSession: isBrowser,
        autoRefreshToken: isBrowser,
      }
    })
  : (null as unknown as SupabaseClient<Database>);

// Helper to check if supabase is available
export const isSupabaseConfigured = () => isConfigured;
