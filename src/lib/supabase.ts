import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rexovfpgmqtvjardwqrf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJleG92ZnBnbXF0dmphcmR3cXJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM2NDQ2ODcsImV4cCI6MjA4OTIyMDY4N30.oDntnBxyjBxUdPXiOFsfCQAseGm3Coz08IqH3HEibDo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
