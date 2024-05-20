const { createClient } = require('@supabase/supabase-js');
 
const supabaseUrl = 'https://vniorzzxrynrhvhffefd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZuaW9yenp4cnlucmh2aGZmZWZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU2MzUxMTAsImV4cCI6MjAzMTIxMTExMH0.PCLDSPZoiTJEOyoutxATAeLWncbOzg0M3-lat9ukzm0'

module.exports = createClient(supabaseUrl, supabaseKey);
