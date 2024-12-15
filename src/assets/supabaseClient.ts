import { createClient } from '@supabase/supabase-js';

// Ganti dengan URL dan API Key proyek Supabase Anda
const supabaseUrl = 'https://nsysxbfavdctxapbbwwy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zeXN4YmZhdmRjdHhhcGJid3d5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQyNjg3MjYsImV4cCI6MjA0OTg0NDcyNn0.0bF3Alo7Jj6FPXizVMTHyN_bd-FT2LYAc1DyhQXhDhY';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
