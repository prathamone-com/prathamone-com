-- ============================================================
-- PrathamOne Sovereign Profiles (Cloud Synchronization v2.0)
-- 2026-03-29: Initial Sovereign Sync Infrastructure
-- ============================================================

-- 1. Create the Profiles Table
CREATE TABLE IF NOT EXISTS public."Sovereign_Profiles" (
    id TEXT PRIMARY KEY, -- scholar_1, scholar_2, etc.
    "studentName" TEXT NOT NULL,
    coins INTEGER DEFAULT 0,
    "currentStreak" INTEGER DEFAULT 0,
    "completedChapters" JSONB DEFAULT '[]'::jsonb,
    "recentActivity" JSONB DEFAULT '[]'::jsonb,
    "unlockedItems" JSONB DEFAULT '[]'::jsonb,
    "activeBounties" JSONB DEFAULT '[]'::jsonb,
    "totalMinutes" INTEGER DEFAULT 0,
    last_sync TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public."Sovereign_Profiles" ENABLE ROW LEVEL SECURITY;

-- 3. Create RLS Policies
-- Allow anyone to create/upsert their own profile based on ID
DROP POLICY IF EXISTS "Enable all for profile holders" ON public."Sovereign_Profiles";
CREATE POLICY "Enable all for profile holders" 
ON public."Sovereign_Profiles" 
FOR ALL 
USING (true) 
WITH CHECK (true);

-- 4. Create Index for performance
CREATE INDEX IF NOT EXISTS idx_sovereign_profiles_last_sync ON public."Sovereign_Profiles" (last_sync DESC);
