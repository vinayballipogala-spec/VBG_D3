import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Return null in dev if not configured to avoid runtime crashes.
const supabase = url && anonKey ? createClient(url, anonKey) : null;

export default supabase;
