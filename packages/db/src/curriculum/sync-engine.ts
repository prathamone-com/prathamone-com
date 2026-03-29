/**
 * ==========================================================
 * AITDL AI AGENT BUILD SIGNATURE
 * ==========================================================
 * Architect    : Jawahar R Mallah
 * Designation  : AI Systems Architect & Author
 * Organization : AITDL Network | PrathamOne
 * Framework    : Autonomous AI Agent Development
 * Authored By  : Jawahar R Mallah
 * Version      : 1.0.0
 * Release Date : 29 March 2026
 * Environment  : Production Sync Engine (Sovereign)
 * ==========================================================
 */

import Database from 'better-sqlite3';
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config({ path: path.join(__dirname, '../../../../apps/web/.env') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials. Ensure NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);
const dbPath = path.join(__dirname, './curriculum.db');
const db = new Database(dbPath);

async function syncTable(tableName: string, supabaseTable: string) {
  console.log(`\n🔄 Syncing table: ${tableName}...`);
  const rows = db.prepare(`SELECT * FROM ${tableName}`).all();
  
  if (rows.length === 0) {
    console.log(`⚠️ No data found in local table ${tableName}. Skipping.`);
    return;
  }

  // Transform rows for Supabase (e.g., parse JSON strings)
  const transformedRows = rows.map((row: any) => {
    const newRow = { ...row };
    // SQLite stores JSON as TEXT, Supabase expects objects for jsonb
    if (newRow.language_options) {
        try { newRow.language_options = JSON.parse(newRow.language_options); } catch (e) {}
    }
    if (newRow.hots_question) {
        try { newRow.hots_question = JSON.parse(newRow.hots_question); } catch (e) {}
    }
    if (newRow.practice_questions) {
        try { newRow.practice_questions = JSON.parse(newRow.practice_questions); } catch (e) {}
    }
    return newRow;
  });

  const { error } = await supabase
    .from(supabaseTable)
    .upsert(transformedRows, { onConflict: 'id' });

  if (error) {
    console.error(`❌ Error syncing ${tableName}:`, error.message);
  } else {
    console.log(`✅ Successfully synced ${rows.length} rows to ${supabaseTable}.`);
  }
}

async function runSync() {
  console.log('🚀 Starting Sovereign Curriculum Mirroring Process...');
  
  try {
    // Order matters due to foreign key constraints
    await syncTable('boards', 'boards');
    await syncTable('classes', 'classes');
    await syncTable('subjects', 'subjects');
    await syncTable('chapters', 'chapters');
    await syncTable('topics', 'topics');
    
    console.log('\n✨ Mirroring Complete. Your Sovereign Curriculum is now live on Supabase Cloud.');
  } catch (err) {
    console.error('\n💥 Fatal Sync Error:', err);
    process.exit(1);
  } finally {
    db.close();
  }
}

runSync();
