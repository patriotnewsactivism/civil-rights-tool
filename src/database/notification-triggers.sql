-- =====================================================
-- NOTIFICATION TRIGGERS
-- Auto-create notifications for user actions
-- Run this AFTER social-schema.sql
-- =====================================================

-- Notification for post likes
CREATE OR REPLACE FUNCTION create_like_notification()
RETURNS TRIGGER AS $$
DECLARE
  post_author_id UUID;
BEGIN
  -- Get the post author
  SELECT user_id INTO post_author_id FROM public.posts WHERE id = NEW.post_id;
  
  -- Don't notify if user liked their own post
  IF post_author_id != NEW.user_id THEN
    INSERT INTO public.notifications (user_id, type, from_user_id, post_id)
    VALUES (post_author_id, 'like', NEW.user_id, NEW.post_id);
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER notify_post_like
  AFTER INSERT ON public.post_likes
  FOR EACH ROW EXECUTE FUNCTION create_like_notification();

-- Notification for comments
CREATE OR REPLACE FUNCTION create_comment_notification()
RETURNS TRIGGER AS $$
DECLARE
  content_author_id UUID;
BEGIN
  -- For post comments, get post author
  IF NEW.content_type = 'post' THEN
    SELECT user_id INTO content_author_id 
    FROM public.posts 
    WHERE id::text = NEW.content_id;
    
    -- Don't notify if user commented on their own post
    IF content_author_id != NEW.user_id THEN
      INSERT INTO public.notifications (user_id, type, from_user_id, comment_id, content)
      VALUES (content_author_id, 'comment', NEW.user_id, NEW.id, 
              substring(NEW.comment_text, 1, 100));
    END IF;
  END IF;
  
  -- For comment replies, notify parent comment author
  IF NEW.parent_comment_id IS NOT NULL THEN
    SELECT user_id INTO content_author_id 
    FROM public.comments 
    WHERE id = NEW.parent_comment_id;
    
    -- Don't notify if user replied to their own comment
    IF content_author_id != NEW.user_id THEN
      INSERT INTO public.notifications (user_id, type, from_user_id, comment_id, content)
      VALUES (content_author_id, 'reply', NEW.user_id, NEW.id,
              substring(NEW.comment_text, 1, 100));
    END IF;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER notify_comment
  AFTER INSERT ON public.comments
  FOR EACH ROW EXECUTE FUNCTION create_comment_notification();

-- Notification for follows
CREATE OR REPLACE FUNCTION create_follow_notification()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.notifications (user_id, type, from_user_id)
  VALUES (NEW.following_id, 'follow', NEW.follower_id);
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER notify_follow
  AFTER INSERT ON public.user_connections
  FOR EACH ROW EXECUTE FUNCTION create_follow_notification();

-- Notification for post shares
CREATE OR REPLACE FUNCTION create_share_notification()
RETURNS TRIGGER AS $$
DECLARE
  post_author_id UUID;
BEGIN
  -- Get the post author
  SELECT user_id INTO post_author_id FROM public.posts WHERE id = NEW.post_id;
  
  -- Don't notify if user shared their own post
  IF post_author_id != NEW.user_id THEN
    INSERT INTO public.notifications (user_id, type, from_user_id, post_id, content)
    VALUES (post_author_id, 'share', NEW.user_id, NEW.post_id,
            substring(NEW.share_comment, 1, 100));
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER notify_share
  AFTER INSERT ON public.post_shares
  FOR EACH ROW EXECUTE FUNCTION create_share_notification();

-- Notification for private messages
CREATE OR REPLACE FUNCTION create_message_notification()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.notifications (user_id, type, from_user_id, message_id, content)
  VALUES (NEW.recipient_id, 'message', NEW.sender_id, NEW.id,
          substring(NEW.message_text, 1, 100));
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER notify_message
  AFTER INSERT ON public.private_messages
  FOR EACH ROW EXECUTE FUNCTION create_message_notification();

-- =====================================================
-- SETUP COMPLETE
-- Notifications will now be created automatically
-- when users perform actions (like, comment, follow, etc.)
-- =====================================================
