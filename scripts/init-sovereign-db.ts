/**
 * PrathamOne - Sovereign DB Initialization Script
 * Usage: npx ts-node scripts/init-sovereign-db.ts [DATABASE_URL]
 */

import { Client } from 'pg';
import * as fs from 'fs';
import * as path from 'path';

async function main() {
  const dbUrl = process.argv[2] || process.env.DATABASE_URL;

  if (!dbUrl) {
    console.error('ERROR: DATABASE_URL is missing.');
    console.log('Usage: npx ts-node scripts/init-sovereign-db.ts "postgresql://postgres:[PASSWORD]@db.[PROJECT].supabase.co:5432/postgres"');
    process.exit(1);
  }

  const client = new Client({
    connectionString: dbUrl,
    ssl: { rejectUnauthorized: false }
  });

  try {
    console.log('Connecting to Supabase...');
    await client.connect();
    console.log('Connected successfully.');

    // path to the migration file
    const migrationPath = path.join(__dirname, '../apps/web/supabase/migrations/20260329_sovereign_profiles.sql');
    const sql = fs.readFileSync(migrationPath, 'utf8');

    console.log('Executing Sovereign Sync Migration...');
    await client.query(sql);
    
    console.log('SUCCESS: Sovereign_Profiles table created and RLS policies applied.');
  } catch (err: any) {
    console.error('DEPLOYMENT FAILED:', err.message);
  } finally {
    await client.end();
  }
}

main();
