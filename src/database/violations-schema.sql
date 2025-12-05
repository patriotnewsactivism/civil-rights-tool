-- Civil Rights Violations Database Schema
-- Run this in Supabase SQL Editor

-- Create violations table
CREATE TABLE IF NOT EXISTS public.violations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  category VARCHAR(50) NOT NULL CHECK (category IN (
    'Police Misconduct',
    'Discrimination',
    'Voting Rights',
    'First Amendment',
    'Fourth Amendment',
    'Housing',
    'Employment',
    'Education',
    'Healthcare',
    'Other'
  )),
  incident_at TIMESTAMPTZ NOT NULL,
  latitude FLOAT8 NOT NULL CHECK (latitude >= -90 AND latitude <= 90),
  longitude FLOAT8 NOT NULL CHECK (longitude >= -180 AND longitude <= 180),
  address TEXT,
  city VARCHAR(100),
  state VARCHAR(2),
  zip_code VARCHAR(10),
  severity INTEGER DEFAULT 1 CHECK (severity >= 1 AND severity <= 5),
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  media_url TEXT,
  reporter_hash VARCHAR(64),
  ip_hash VARCHAR(64),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for geospatial queries
CREATE INDEX IF NOT EXISTS idx_violations_location ON public.violations(latitude, longitude);

-- Create index for status queries
CREATE INDEX IF NOT EXISTS idx_violations_status ON public.violations(status);

-- Create index for state queries
CREATE INDEX IF NOT EXISTS idx_violations_state ON public.violations(state);

-- Create index for date queries
CREATE INDEX IF NOT EXISTS idx_violations_incident_at ON public.violations(incident_at DESC);

-- Enable Row Level Security
ALTER TABLE public.violations ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can view ALL violations (transparency until moderated)
CREATE POLICY "All violations are viewable by everyone"
  ON public.violations
  FOR SELECT
  USING (true);

-- Policy: Anyone can insert violations (they start as pending)
CREATE POLICY "Anyone can submit violations"
  ON public.violations
  FOR INSERT
  WITH CHECK (true);

-- Policy: Only authenticated users with admin role can update/delete
CREATE POLICY "Only admins can moderate violations"
  ON public.violations
  FOR ALL
  USING (auth.jwt() ->> 'role' = 'admin');

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_violations_updated_at
  BEFORE UPDATE ON public.violations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Enable Realtime for approved violations
ALTER PUBLICATION supabase_realtime ADD TABLE public.violations;

COMMENT ON TABLE public.violations IS 'Civil rights violations reported by users with real-time map display';
