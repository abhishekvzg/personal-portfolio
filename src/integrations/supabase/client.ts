import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://qdylnmynwtottnrqdhwx.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_xrpoo2D0CyEZgA1M_ARWRA_GEypH9BP';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
