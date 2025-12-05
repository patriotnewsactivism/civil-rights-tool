-- =====================================================
-- FIX SUPABASE PERMISSIONS FOR GOOGLE SIGN-IN
-- Run this in your Supabase SQL Editor AFTER running SETUP_SUPABASE.sql
-- =====================================================
--
-- PROBLEM: Tables are invisible to anon/authenticated users because
-- they don't have the necessary GRANT permissions.
--
-- SOLUTION: Grant schema/table access to anon and authenticated roles.
--
-- =====================================================

-- Grant schema usage to anon and authenticated roles
GRANT USAGE ON SCHEMA public TO anon, authenticated;

-- Grant permissions on test table (for availability check)
GRANT SELECT ON TABLE public.test TO anon, authenticated;
ALTER TABLE public.test DISABLE ROW LEVEL SECURITY;

-- Grant permissions on violations table
GRANT ALL ON TABLE public.violations TO anon, authenticated;

-- Grant permissions on admin_sessions table
GRANT ALL ON TABLE public.admin_sessions TO anon, authenticated;

-- Grant permissions on user_profiles table
GRANT ALL ON TABLE public.user_profiles TO anon, authenticated;

-- Grant permissions on user_connections table
GRANT ALL ON TABLE public.user_connections TO anon, authenticated;

-- Grant permissions on private_messages table
GRANT ALL ON TABLE public.private_messages TO anon, authenticated;

-- Grant permissions on posts table
GRANT ALL ON TABLE public.posts TO anon, authenticated;

-- Grant permissions on post_likes table
GRANT ALL ON TABLE public.post_likes TO anon, authenticated;

-- Grant permissions on post_shares table
GRANT ALL ON TABLE public.post_shares TO anon, authenticated;

-- Grant permissions on comments table
GRANT ALL ON TABLE public.comments TO anon, authenticated;

-- Grant permissions on comment_votes table
GRANT ALL ON TABLE public.comment_votes TO anon, authenticated;

-- Grant permissions on notifications table
GRANT ALL ON TABLE public.notifications TO anon, authenticated;

-- Grant permissions on user_activity table
GRANT ALL ON TABLE public.user_activity TO anon, authenticated;

-- Set default privileges for future tables
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO anon, authenticated;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO anon, authenticated;

-- =====================================================
-- SUCCESS MESSAGE
-- =====================================================
DO $$
BEGIN
  RAISE NOTICE '✅ Permissions fixed! All tables are now accessible to anon and authenticated users.';
  RAISE NOTICE '📋 Next step: Refresh your app and try Google sign-in again!';
END $$;
