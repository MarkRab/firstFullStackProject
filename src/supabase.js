import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://siqbfrdkzpacilnnzfeu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpcWJmcmRrenBhY2lsbm56ZmV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5Njg0MzksImV4cCI6MjAyODU0NDQzOX0.s-EE_uLL1PcsZ6UY3VoJt-X0xwE0vIvc8zjxvKlS9q8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
