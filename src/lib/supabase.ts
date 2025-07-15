import { createClient } from "@supabase/supabase-js";

// This file is used to create a Supabase client instance

export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)