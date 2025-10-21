-- =====================================================
-- COMMUNITY FEATURES SCHEMA
-- User Accounts, Messaging, and Comments
-- =====================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =====================================================
-- USER PROFILES TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS public.user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username VARCHAR(50) UNIQUE NOT NULL,
  display_name VARCHAR(100),
  bio TEXT,
  avatar_url TEXT,
  role VARCHAR(20) DEFAULT 'user' CHECK (role IN ('user', 'journalist', 'attorney', 'activist', 'moderator', 'admin')),
  is_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_seen_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =====================================================
-- PRIVATE MESSAGES TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS public.private_messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  sender_id UUID NOT NULL REFERENCES public.user_profiles(id) ON DELETE CASCADE,
  recipient_id UUID NOT NULL REFERENCES public.user_profiles(id) ON DELETE CASCADE,
  subject VARCHAR(255),
  message_text TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  is_starred BOOLEAN DEFAULT FALSE,
  parent_message_id UUID REFERENCES public.private_messages(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Prevent users from messaging themselves
  CONSTRAINT no_self_messaging CHECK (sender_id != recipient_id)
);

-- =====================================================
-- COMMENTS TABLE (for public content)
-- =====================================================
CREATE TABLE IF NOT EXISTS public.comments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.user_profiles(id) ON DELETE CASCADE,
  content_type VARCHAR(50) NOT NULL CHECK (content_type IN ('violation', 'news', 'case', 'legislation', 'post')),
  content_id VARCHAR(255) NOT NULL,  -- ID of the violation, news article, case, or bill
  comment_text TEXT NOT NULL,
  parent_comment_id UUID REFERENCES public.comments(id) ON DELETE CASCADE,  -- For threaded replies
  upvotes INTEGER DEFAULT 0,
  downvotes INTEGER DEFAULT 0,
  is_flagged BOOLEAN DEFAULT FALSE,
  is_moderated BOOLEAN DEFAULT FALSE,
  moderation_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =====================================================
-- COMMENT VOTES TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS public.comment_votes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.user_profiles(id) ON DELETE CASCADE,
  comment_id UUID NOT NULL REFERENCES public.comments(id) ON DELETE CASCADE,
  vote_type VARCHAR(10) NOT NULL CHECK (vote_type IN ('upvote', 'downvote')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Ensure one vote per user per comment
  UNIQUE(user_id, comment_id)
);

-- =====================================================
-- CONNECTIONS/FOLLOWERS TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS public.user_connections (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  follower_id UUID NOT NULL REFERENCES public.user_profiles(id) ON DELETE CASCADE,
  following_id UUID NOT NULL REFERENCES public.user_profiles(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Prevent duplicate follows and self-following
  UNIQUE(follower_id, following_id),
  CONSTRAINT no_self_following CHECK (follower_id != following_id)
);

-- =====================================================
-- INDEXES for performance
-- =====================================================

-- User profiles
CREATE INDEX idx_user_profiles_username ON public.user_profiles(username);
CREATE INDEX idx_user_profiles_role ON public.user_profiles(role);

-- Private messages
CREATE INDEX idx_messages_sender ON public.private_messages(sender_id);
CREATE INDEX idx_messages_recipient ON public.private_messages(recipient_id);
CREATE INDEX idx_messages_created ON public.private_messages(created_at DESC);
CREATE INDEX idx_messages_unread ON public.private_messages(recipient_id, is_read) WHERE is_read = FALSE;

-- Comments
CREATE INDEX idx_comments_user ON public.comments(user_id);
CREATE INDEX idx_comments_content ON public.comments(content_type, content_id);
CREATE INDEX idx_comments_parent ON public.comments(parent_comment_id);
CREATE INDEX idx_comments_created ON public.comments(created_at DESC);

-- Comment votes
CREATE INDEX idx_comment_votes_comment ON public.comment_votes(comment_id);
CREATE INDEX idx_comment_votes_user ON public.comment_votes(user_id);

-- User connections
CREATE INDEX idx_connections_follower ON public.user_connections(follower_id);
CREATE INDEX idx_connections_following ON public.user_connections(following_id);

-- =====================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- =====================================================

-- Enable RLS on all tables
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.private_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.comment_votes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_connections ENABLE ROW LEVEL SECURITY;

-- User Profiles: Everyone can view, only owner can update
CREATE POLICY "Public profiles are viewable by everyone" 
  ON public.user_profiles FOR SELECT 
  USING (true);

CREATE POLICY "Users can update own profile" 
  ON public.user_profiles FOR UPDATE 
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" 
  ON public.user_profiles FOR INSERT 
  WITH CHECK (auth.uid() = id);

-- Private Messages: Only sender and recipient can view/manage
CREATE POLICY "Users can view their messages" 
  ON public.private_messages FOR SELECT 
  USING (auth.uid() = sender_id OR auth.uid() = recipient_id);

CREATE POLICY "Users can send messages" 
  ON public.private_messages FOR INSERT 
  WITH CHECK (auth.uid() = sender_id);

CREATE POLICY "Users can update their sent messages" 
  ON public.private_messages FOR UPDATE 
  USING (auth.uid() = sender_id OR auth.uid() = recipient_id);

CREATE POLICY "Users can delete their messages" 
  ON public.private_messages FOR DELETE 
  USING (auth.uid() = sender_id);

-- Comments: Public read, authenticated write
CREATE POLICY "Comments are viewable by everyone" 
  ON public.comments FOR SELECT 
  USING (true);

CREATE POLICY "Authenticated users can create comments" 
  ON public.comments FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own comments" 
  ON public.comments FOR UPDATE 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own comments" 
  ON public.comments FOR DELETE 
  USING (auth.uid() = user_id);

-- Comment Votes: Authenticated users can vote
CREATE POLICY "Everyone can view votes" 
  ON public.comment_votes FOR SELECT 
  USING (true);

CREATE POLICY "Authenticated users can vote" 
  ON public.comment_votes FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their votes" 
  ON public.comment_votes FOR UPDATE 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their votes" 
  ON public.comment_votes FOR DELETE 
  USING (auth.uid() = user_id);

-- User Connections: Public read, users can follow others
CREATE POLICY "Connections are viewable by everyone" 
  ON public.user_connections FOR SELECT 
  USING (true);

CREATE POLICY "Users can follow others" 
  ON public.user_connections FOR INSERT 
  WITH CHECK (auth.uid() = follower_id);

CREATE POLICY "Users can unfollow" 
  ON public.user_connections FOR DELETE 
  USING (auth.uid() = follower_id);

-- =====================================================
-- TRIGGERS for automatic timestamp updates
-- =====================================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_user_profiles_updated_at BEFORE UPDATE ON public.user_profiles 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_private_messages_updated_at BEFORE UPDATE ON public.private_messages 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_comments_updated_at BEFORE UPDATE ON public.comments 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- FUNCTIONS for common operations
-- =====================================================

-- Get unread message count for a user
CREATE OR REPLACE FUNCTION get_unread_message_count(user_uuid UUID)
RETURNS INTEGER AS $$
BEGIN
  RETURN (SELECT COUNT(*) FROM public.private_messages 
          WHERE recipient_id = user_uuid AND is_read = FALSE);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Mark message as read
CREATE OR REPLACE FUNCTION mark_message_read(message_uuid UUID, user_uuid UUID)
RETURNS BOOLEAN AS $$
BEGIN
  UPDATE public.private_messages 
  SET is_read = TRUE 
  WHERE id = message_uuid AND recipient_id = user_uuid;
  RETURN FOUND;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Get comment count for content
CREATE OR REPLACE FUNCTION get_comment_count(p_content_type VARCHAR, p_content_id VARCHAR)
RETURNS INTEGER AS $$
BEGIN
  RETURN (SELECT COUNT(*) FROM public.comments 
          WHERE content_type = p_content_type AND content_id = p_content_id);
END;
$$ LANGUAGE plpgsql;

-- =====================================================
-- SETUP INSTRUCTIONS
-- =====================================================
-- 
-- To use this schema with your Supabase database:
-- 
-- 1. Go to your Supabase project dashboard
-- 2. Navigate to SQL Editor
-- 3. Copy and paste this entire schema
-- 4. Click "Run" to execute
-- 5. Verify tables are created in the Table Editor
-- 
-- After creating tables, you can use Supabase Auth for:
-- - Email/password signup and login
-- - OAuth providers (Google, GitHub, etc.)
-- - Magic link authentication
-- 
-- =====================================================
