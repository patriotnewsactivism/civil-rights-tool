-- =====================================================
-- SOCIAL MEDIA FEATURES SCHEMA
-- Posts, Likes, Shares, Notifications
-- Run this AFTER community-schema.sql
-- =====================================================

-- =====================================================
-- POSTS TABLE (Social Feed)
-- =====================================================
CREATE TABLE IF NOT EXISTS public.posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.user_profiles(id) ON DELETE CASCADE,
  post_type VARCHAR(20) DEFAULT 'text' CHECK (post_type IN ('text', 'image', 'link', 'article', 'violation')),
  content TEXT NOT NULL,
  image_url TEXT,
  link_url TEXT,
  link_title TEXT,
  hashtags TEXT[],
  mentioned_users UUID[],
  reference_type VARCHAR(50),  -- 'violation', 'news', 'case', 'legislation'
  reference_id VARCHAR(255),
  likes_count INTEGER DEFAULT 0,
  shares_count INTEGER DEFAULT 0,
  comments_count INTEGER DEFAULT 0,
  is_pinned BOOLEAN DEFAULT FALSE,
  visibility VARCHAR(20) DEFAULT 'public' CHECK (visibility IN ('public', 'followers', 'private')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =====================================================
-- POST LIKES TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS public.post_likes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.user_profiles(id) ON DELETE CASCADE,
  post_id UUID NOT NULL REFERENCES public.posts(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  UNIQUE(user_id, post_id)
);

-- =====================================================
-- POST SHARES TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS public.post_shares (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.user_profiles(id) ON DELETE CASCADE,
  post_id UUID NOT NULL REFERENCES public.posts(id) ON DELETE CASCADE,
  share_comment TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =====================================================
-- NOTIFICATIONS TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS public.notifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.user_profiles(id) ON DELETE CASCADE,
  type VARCHAR(50) NOT NULL CHECK (type IN ('like', 'comment', 'share', 'follow', 'mention', 'reply', 'message')),
  from_user_id UUID REFERENCES public.user_profiles(id) ON DELETE CASCADE,
  post_id UUID REFERENCES public.posts(id) ON DELETE CASCADE,
  comment_id UUID REFERENCES public.comments(id) ON DELETE CASCADE,
  message_id UUID REFERENCES public.private_messages(id) ON DELETE CASCADE,
  content TEXT,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =====================================================
-- USER ACTIVITY LOG (for contributor stats)
-- =====================================================
CREATE TABLE IF NOT EXISTS public.user_activity (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.user_profiles(id) ON DELETE CASCADE,
  activity_type VARCHAR(50) NOT NULL CHECK (activity_type IN ('post', 'comment', 'message', 'violation', 'like', 'share')),
  reference_id UUID,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =====================================================
-- Add activity tracking columns to user_profiles
-- =====================================================
ALTER TABLE public.user_profiles 
ADD COLUMN IF NOT EXISTS posts_count INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS violations_reported INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS comments_count INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS messages_count INTEGER DEFAULT 0;

-- =====================================================
-- INDEXES
-- =====================================================
CREATE INDEX idx_posts_user ON public.posts(user_id);
CREATE INDEX idx_posts_created ON public.posts(created_at DESC);
CREATE INDEX idx_posts_hashtags ON public.posts USING GIN(hashtags);
CREATE INDEX idx_posts_type ON public.posts(post_type);
CREATE INDEX idx_posts_visibility ON public.posts(visibility);

CREATE INDEX idx_post_likes_post ON public.post_likes(post_id);
CREATE INDEX idx_post_likes_user ON public.post_likes(user_id);

CREATE INDEX idx_post_shares_post ON public.post_shares(post_id);
CREATE INDEX idx_post_shares_user ON public.post_shares(user_id);

CREATE INDEX idx_notifications_user ON public.notifications(user_id);
CREATE INDEX idx_notifications_unread ON public.notifications(user_id, is_read) WHERE is_read = FALSE;
CREATE INDEX idx_notifications_created ON public.notifications(created_at DESC);

CREATE INDEX idx_user_activity_user ON public.user_activity(user_id);
CREATE INDEX idx_user_activity_type ON public.user_activity(activity_type);

-- =====================================================
-- ROW LEVEL SECURITY
-- =====================================================
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.post_likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.post_shares ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_activity ENABLE ROW LEVEL SECURITY;

-- Posts: Public posts viewable by all, private posts only by author and followers
CREATE POLICY "Public posts are viewable by everyone"
  ON public.posts FOR SELECT
  USING (visibility = 'public' OR auth.uid() = user_id);

CREATE POLICY "Users can create posts"
  ON public.posts FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own posts"
  ON public.posts FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own posts"
  ON public.posts FOR DELETE
  USING (auth.uid() = user_id);

-- Post Likes
CREATE POLICY "Everyone can view post likes"
  ON public.post_likes FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can like posts"
  ON public.post_likes FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can unlike posts"
  ON public.post_likes FOR DELETE
  USING (auth.uid() = user_id);

-- Post Shares
CREATE POLICY "Everyone can view shares"
  ON public.post_shares FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can share posts"
  ON public.post_shares FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Notifications
-- NOTE: Notifications should be created by database triggers or Edge Functions with service role
-- to prevent notification spoofing. Client-side inserts are disabled for security.
CREATE POLICY "Users can view their notifications"
  ON public.notifications FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their notifications"
  ON public.notifications FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their notifications"
  ON public.notifications FOR DELETE
  USING (auth.uid() = user_id);

-- User Activity
CREATE POLICY "Users can view activity"
  ON public.user_activity FOR SELECT
  USING (true);

CREATE POLICY "Users can log activity"
  ON public.user_activity FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- =====================================================
-- TRIGGERS
-- =====================================================
CREATE OR REPLACE FUNCTION update_posts_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_posts_timestamp 
  BEFORE UPDATE ON public.posts
  FOR EACH ROW EXECUTE FUNCTION update_posts_updated_at();

-- Increment likes count
CREATE OR REPLACE FUNCTION increment_post_likes()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE public.posts SET likes_count = likes_count + 1 WHERE id = NEW.post_id;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER increment_likes_trigger
  AFTER INSERT ON public.post_likes
  FOR EACH ROW EXECUTE FUNCTION increment_post_likes();

-- Decrement likes count
CREATE OR REPLACE FUNCTION decrement_post_likes()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE public.posts SET likes_count = likes_count - 1 WHERE id = OLD.post_id;
    RETURN OLD;
END;
$$ language 'plpgsql';

CREATE TRIGGER decrement_likes_trigger
  AFTER DELETE ON public.post_likes
  FOR EACH ROW EXECUTE FUNCTION decrement_post_likes();

-- Increment shares count
CREATE OR REPLACE FUNCTION increment_post_shares()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE public.posts SET shares_count = shares_count + 1 WHERE id = NEW.post_id;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER increment_shares_trigger
  AFTER INSERT ON public.post_shares
  FOR EACH ROW EXECUTE FUNCTION increment_post_shares();

-- Update user stats on post creation
CREATE OR REPLACE FUNCTION update_user_post_count()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE public.user_profiles SET posts_count = posts_count + 1 WHERE id = NEW.user_id;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_post_count_trigger
  AFTER INSERT ON public.posts
  FOR EACH ROW EXECUTE FUNCTION update_user_post_count();

-- Update user stats on comment creation
CREATE OR REPLACE FUNCTION update_user_comment_count()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE public.user_profiles SET comments_count = comments_count + 1 WHERE id = NEW.user_id;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_comment_count_trigger
  AFTER INSERT ON public.comments
  FOR EACH ROW EXECUTE FUNCTION update_user_comment_count();

-- Update user stats on message creation
CREATE OR REPLACE FUNCTION update_user_message_count()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE public.user_profiles SET messages_count = messages_count + 1 WHERE id = NEW.sender_id;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_message_count_trigger
  AFTER INSERT ON public.private_messages
  FOR EACH ROW EXECUTE FUNCTION update_user_message_count();

-- =====================================================
-- FUNCTIONS
-- =====================================================

-- Get unread notifications count
CREATE OR REPLACE FUNCTION get_unread_notifications_count(user_uuid UUID)
RETURNS INTEGER AS $$
BEGIN
  RETURN (SELECT COUNT(*) FROM public.notifications 
          WHERE user_id = user_uuid AND is_read = FALSE);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Mark notification as read
CREATE OR REPLACE FUNCTION mark_notification_read(notification_uuid UUID, user_uuid UUID)
RETURNS BOOLEAN AS $$
BEGIN
  UPDATE public.notifications 
  SET is_read = TRUE 
  WHERE id = notification_uuid AND user_id = user_uuid;
  RETURN FOUND;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Get feed posts (including followed users)
CREATE OR REPLACE FUNCTION get_feed_posts(user_uuid UUID, limit_count INTEGER DEFAULT 20)
RETURNS TABLE (
  post_id UUID,
  user_id UUID,
  content TEXT,
  created_at TIMESTAMP WITH TIME ZONE
) AS $$
BEGIN
  RETURN QUERY
  SELECT p.id, p.user_id, p.content, p.created_at
  FROM public.posts p
  WHERE p.visibility = 'public'
    OR p.user_id = user_uuid
    OR p.user_id IN (
      SELECT following_id FROM public.user_connections WHERE follower_id = user_uuid
    )
  ORDER BY p.created_at DESC
  LIMIT limit_count;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Get trending hashtags
CREATE OR REPLACE FUNCTION get_trending_hashtags(limit_count INTEGER DEFAULT 10)
RETURNS TABLE (
  hashtag TEXT,
  count BIGINT
) AS $$
BEGIN
  RETURN QUERY
  SELECT unnest(hashtags) as hashtag, COUNT(*) as count
  FROM public.posts
  WHERE created_at > NOW() - INTERVAL '7 days'
  GROUP BY hashtag
  ORDER BY count DESC
  LIMIT limit_count;
END;
$$ LANGUAGE plpgsql;

-- =====================================================
-- SETUP COMPLETE
-- =====================================================
