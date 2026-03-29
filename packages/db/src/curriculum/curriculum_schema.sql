-- ============================================================
-- PrathamOne Sovereign Curriculum Manager (SQLite Slave Schema)
-- Mirrors the Supabase Academic Engine Structure
-- ============================================================

-- 1. BOARDS
CREATE TABLE IF NOT EXISTS boards (
    id TEXT PRIMARY KEY, -- Using TEXT for UUID compatibility
    short_name TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    language_options TEXT -- JSON string in SQLite
);

-- 2. CLASSES
CREATE TABLE IF NOT EXISTS classes (
    id TEXT PRIMARY KEY,
    board_id TEXT REFERENCES boards(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    stream TEXT
);

-- 3. SUBJECTS
CREATE TABLE IF NOT EXISTS subjects (
    id TEXT PRIMARY KEY,
    class_id TEXT REFERENCES classes(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    code TEXT,
    icon TEXT
);

-- 4. CHAPTERS
CREATE TABLE IF NOT EXISTS chapters (
    id TEXT PRIMARY KEY,
    subject_id TEXT REFERENCES subjects(id) ON DELETE CASCADE,
    chapter_no INTEGER,
    title TEXT NOT NULL,
    book_reference_url TEXT
);

-- 5. TOPICS
CREATE TABLE IF NOT EXISTS topics (
    id TEXT PRIMARY KEY,
    chapter_id TEXT REFERENCES chapters(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    difficulty TEXT DEFAULT 'Medium',
    order_index INTEGER DEFAULT 1,
    concept_mastery_html TEXT,
    hots_question TEXT, -- JSON string
    practice_questions TEXT -- JSON string
);
