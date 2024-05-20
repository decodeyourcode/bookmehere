<<<<<<< HEAD
const { createClient } = require('@supabase/supabase-js');
 
const supabaseUrl = 'https://vniorzzxrynrhvhffefd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZuaW9yenp4cnlucmh2aGZmZWZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU2MzUxMTAsImV4cCI6MjAzMTIxMTExMH0.PCLDSPZoiTJEOyoutxATAeLWncbOzg0M3-lat9ukzm0'

module.exports = createClient(supabaseUrl, supabaseKey);
=======
const { Pool } = require('pg')
 
/*
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
})

pool.connect((err) => {
    if (err) throw err
    console.log("Connect to PostgreSQL successfully!")
})

module.exports = pool*/
>>>>>>> f2e05b7e6de7f9fa5c93dae06857c9c02fa4a9d2
