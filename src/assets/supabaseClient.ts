import { createClient } from '@supabase/supabase-js';

// Ganti dengan URL dan API Key proyek Supabase Anda
const supabaseUrl = 'https://yywxqjnhowfhuqqlvcwu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5d3hxam5ob3dmaHVxcWx2Y3d1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQyNjIzMjYsImV4cCI6MjA0OTgzODMyNn0.lFJ9ajvM3iojGjdKVtqZgRNjg7G0Cq8R7NylE9Qpmec';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
