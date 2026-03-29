const Database = require('better-sqlite3');
const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'curriculum.db');
const schemaPath = path.join(__dirname, 'curriculum_schema.sql');

if (!fs.existsSync(schemaPath)) {
  console.error('❌ Schema file not found.');
  process.exit(1);
}

const db = new Database(dbPath);
const schema = fs.readFileSync(schemaPath, 'utf8');

try {
  db.exec(schema);
  console.log('✅ SQLite Database Initialized successfully at', dbPath);
} catch (err) {
  console.error('❌ Initialization failed:', err.message);
} finally {
  db.close();
}
