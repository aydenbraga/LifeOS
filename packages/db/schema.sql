-- LifeOS Database Schema
-- Designed for Supabase (PostgreSQL)
-- Goal: Interconnected data for AI-driven insights

-- -----------------------------------------------------------------------------
-- 1. USER PROFILE & CORE
-- -----------------------------------------------------------------------------
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  username TEXT UNIQUE,
  full_name TEXT,
  avatar_url TEXT,
  timezone TEXT DEFAULT 'UTC',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- -----------------------------------------------------------------------------
-- 2. HEALTH & BIOMETRICS
-- -----------------------------------------------------------------------------
CREATE TABLE health_metrics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  weight DECIMAL,
  body_fat_pct DECIMAL,
  lean_mass DECIMAL,
  sleep_duration_mins INTEGER,
  sleep_quality_score INTEGER, -- 1-100
  water_intake_ml INTEGER,
  steps INTEGER,
  heart_rate_avg INTEGER,
  blood_pressure_systolic INTEGER,
  blood_pressure_diastolic INTEGER,
  calories_burned INTEGER,
  recovery_score INTEGER, -- 1-100
  mood_score INTEGER, -- 1-10
  energy_level INTEGER, -- 1-10
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, date)
);

CREATE TABLE medications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  type TEXT, -- 'tablet', 'vitamin', 'supplement', 'prescription'
  dosage TEXT,
  frequency TEXT,
  start_date DATE,
  end_date DATE,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE medication_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  medication_id UUID REFERENCES medications(id) ON DELETE CASCADE,
  taken_at TIMESTAMPTZ DEFAULT NOW(),
  status TEXT -- 'taken', 'missed', 'skipped'
);

-- -----------------------------------------------------------------------------
-- 3. GYM & ATHLETIC PERFORMANCE
-- -----------------------------------------------------------------------------
CREATE TABLE workout_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  session_name TEXT, -- e.g., 'Leg Day Hypertrophy'
  total_volume DECIMAL,
  duration_mins INTEGER,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE workout_exercises (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES workout_sessions(id) ON DELETE CASCADE,
  exercise_name TEXT NOT NULL,
  sets INTEGER,
  reps INTEGER,
  weight DECIMAL,
  rpe DECIMAL, -- Rate of Perceived Exertion
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE athletic_metrics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  metric_name TEXT NOT NULL, -- 'vertical jump', 'sprint 40yd', 'agility t-test'
  value DECIMAL NOT NULL,
  unit TEXT,
  date DATE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- -----------------------------------------------------------------------------
-- 4. STUDY & UNIVERSITY HUB
-- -----------------------------------------------------------------------------
CREATE TABLE academic_courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  course_name TEXT NOT NULL,
  unit_code TEXT,
  semester TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE academic_tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID REFERENCES academic_courses(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  due_date TIMESTAMPTZ,
  status TEXT DEFAULT 'pending', -- 'pending', 'in_progress', 'completed'
  priority INTEGER DEFAULT 3, -- 1: High, 2: Med, 3: Low
  weight DECIMAL, -- Weight towards final grade
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- -----------------------------------------------------------------------------
-- 5. FINANCIAL COMMAND CENTER
-- -----------------------------------------------------------------------------
CREATE TABLE financial_transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  amount DECIMAL NOT NULL,
  category TEXT,
  type TEXT NOT NULL, -- 'income', 'expense'
  date DATE NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE financial_assets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  asset_name TEXT NOT NULL,
  type TEXT, -- 'stock', 'etf', 'crypto', 'cash'
  amount DECIMAL,
  current_value DECIMAL,
  purchase_price DECIMAL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- -----------------------------------------------------------------------------
-- 6. GOAL SYSTEM
-- -----------------------------------------------------------------------------
CREATE TABLE goals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  parent_goal_id UUID REFERENCES goals(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  category TEXT, -- 'Fitness', 'Basketball', 'Study', etc.
  target_date DATE,
  progress_pct DECIMAL DEFAULT 0,
  is_completed BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE goal_milestones (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  goal_id UUID REFERENCES goals(id) ON DELETE CASCADE,
  description TEXT NOT NULL,
  is_completed BOOLEAN DEFAULT false,
  completion_date DATE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- -----------------------------------------------------------------------------
-- 7. HABITS & ROUTINES
-- -----------------------------------------------------------------------------
CREATE TABLE habits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  frequency TEXT, -- 'daily', 'weekly'
  target_value DECIMAL,
  unit TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE habit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  habit_id UUID REFERENCES habits(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  completed BOOLEAN DEFAULT false,
  value DECIMAL,
  UNIQUE(habit_id, date)
);

-- -----------------------------------------------------------------------------
-- 8. UNIFIED CALENDAR
-- -----------------------------------------------------------------------------
CREATE TABLE calendar_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  start_time TIMESTAMPTZ NOT NULL,
  end_time TIMESTAMPTZ,
  category TEXT, -- 'Study', 'Gym', 'Personal', 'Bill'
  event_type TEXT, -- 'task', 'appointment', 'reminder'
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- -----------------------------------------------------------------------------
-- INDEXES FOR AI QUERY PERFORMANCE
-- -----------------------------------------------------------------------------
CREATE INDEX idx_health_date ON health_metrics(user_id, date);
CREATE INDEX idx_workout_date ON workout_sessions(user_id, date);
CREATE INDEX idx_habit_date ON habit_logs(habit_id, date);
CREATE INDEX idx_academic_due ON academic_tasks(user_id, due_date);
CREATE INDEX idx_financial_date ON financial_transactions(user_id, date);
