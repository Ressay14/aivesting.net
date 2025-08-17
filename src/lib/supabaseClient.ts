import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ffhogyweggprycxgvdjy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmaG9neXdlZ2dwcnljeGd2ZGp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzMTU5MTQsImV4cCI6MjA2ODg5MTkxNH0.f72XQ1UmSVxEiLKvsRN82xyI8cCRytL6qroCnCh-Cyg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
