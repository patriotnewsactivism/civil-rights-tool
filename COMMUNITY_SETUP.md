# Community Features Setup Guide

This guide explains how to set up user accounts, private messaging, and public commenting features.

## Prerequisites

- Supabase account (you already have this configured)
- VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables (already set)

## Database Setup

### Step 1: Create Tables

1. Go to your Supabase project dashboard: https://supabase.com/dashboard
2. Navigate to **SQL Editor** in the left sidebar
3. Click **New Query**
4. Open the file `src/database/community-schema.sql`
5. Copy the entire contents
6. Paste into the Supabase SQL Editor
7. Click **Run** to execute the schema

This will create 5 tables:
- `user_profiles` - User information and stats
- `private_messages` - Private messages between users
- `comments` - Public comments on content
- `comment_votes` - Upvote/downvote tracking
- `user_connections` - Follow/follower relationships

### Step 2: Enable Authentication

1. In your Supabase dashboard, go to **Authentication** > **Providers**
2. **Email** provider should already be enabled
3. **Optional**: Enable Google OAuth:
   - Click on **Google** provider
   - Follow instructions to get Google OAuth credentials
   - Add credentials and enable the provider

## Using the Components

### 1. Authentication Modal

Add login/signup to your app:

```tsx
import AuthModal from './components/AuthModal';
import { useState } from 'react';

function YourComponent() {
  const [showAuth, setShowAuth] = useState(false);

  return (
    <>
      <button onClick={() => setShowAuth(true)}>
        Login / Sign Up
      </button>
      
      <AuthModal
        isOpen={showAuth}
        onClose={() => setShowAuth(false)}
        onAuthSuccess={() => {
          console.log('User logged in!');
          setShowAuth(false);
        }}
      />
    </>
  );
}
```

### 2. User Profile

Show user profile with stats:

```tsx
import UserProfile from './components/UserProfile';
import { supabase } from './lib/supabase';

function ProfilePage() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUserId(data.user?.id);
    });
  }, []);

  return (
    <UserProfile 
      userId={userId}  // Optional: shows other user's profile
      isOwnProfile={true}  // Enables editing
    />
  );
}
```

### 3. Messaging Panel

Add private messaging:

```tsx
import MessagingPanel from './components/MessagingPanel';

function MessagesPage() {
  return <MessagingPanel />;
}
```

### 4. Comments Section

Add comments to any content:

```tsx
import CommentsSection from './components/CommentsSection';

function NewsArticle() {
  return (
    <div>
      <h1>Article Title</h1>
      <p>Article content...</p>
      
      <CommentsSection
        contentType="news"  // 'violation' | 'news' | 'case' | 'legislation'
        contentId="article-123"
        title="Article Title (optional)"
      />
    </div>
  );
}
```

## Contributor Levels

Users automatically earn contributor levels based on activity:

| Level | Required Activity | Badge |
|-------|------------------|-------|
| New Member | 0-9 actions | 🌱 |
| Regular Contributor | 10-24 actions | ✨ |
| Active Contributor | 25-49 actions | 🌟 |
| Expert Contributor | 50-99 actions | ⭐ |
| Elite Contributor | 100+ actions | 👑 |

**Activity counts:**
- Violations reported
- Comments posted
- Messages sent

## User Roles

Users can select their role in their profile:

- **Member** (default) - Regular platform user
- **Activist** - Civil rights activist
- **Journalist** - News reporter or journalist
- **Attorney** - Civil rights attorney
- **Moderator** - Can moderate content (assigned by admin)
- **Admin** - Full platform access (assigned manually in database)

Role badges appear on profiles and comments.

## Achievement Badges

Users earn achievement badges:

- 🎯 **First Report** - Submitted first violation report
- 💬 **Conversationalist** - Posted 10+ comments
- 🎂 **Veteran** - Account 30+ days old
- 🏆 **Top Contributor** - 50+ total activities

## Privacy & Security

- **Row Level Security (RLS)** enabled on all tables
- Users can only:
  - View all public profiles
  - Edit their own profile
  - Send messages to any user
  - View their own sent/received messages
  - Delete their own messages and comments
  - Comment on public content
  - Vote on comments (one vote per comment)
- **Flagged content** is visible to moderators for review
- **Message encryption** can be added by enabling Supabase's encryption features

## Integration with Existing Features

### Add Comments to Violations Map

```tsx
// In ViolationsMap.tsx
import CommentsSection from './CommentsSection';

// When displaying a violation detail:
<CommentsSection
  contentType="violation"
  contentId={violation.id}
  title={violation.location}
/>
```

### Add Comments to News Articles

```tsx
// In news display component
<CommentsSection
  contentType="news"
  contentId={article.id}
  title={article.title}
/>
```

### Add User Profile Link to Nav

```tsx
import { User } from 'lucide-react';

// In navigation
<Link to="/profile">
  <User className="h-5 w-5" />
  My Profile
</Link>
```

## Testing

1. **Create an Account**:
   - Click "Sign Up"
   - Enter username, email, password
   - Check email for verification link

2. **Edit Profile**:
   - Go to profile page
   - Click "Edit Profile"
   - Update bio and role
   - Save changes

3. **Send a Message**:
   - Go to Messages
   - Click "New Message"
   - Enter recipient username
   - Write message and send

4. **Post a Comment**:
   - Find content with comments section
   - Write comment
   - Post and see it appear
   - Try upvoting, replying, flagging

## Troubleshooting

### "Profile not created" error

If signup succeeds but profile creation fails:

1. Check Supabase logs
2. Ensure `user_profiles` table exists
3. Check RLS policies allow INSERT

### Comments not loading

1. Verify `comments` table exists
2. Check console for errors
3. Ensure `contentType` and `contentId` are correct

### Messages not sending

1. Check recipient username is correct
2. Ensure `private_messages` table exists
3. Verify user is logged in

## Next Steps

- Add email notifications for new messages
- Add real-time comment updates with Supabase Realtime
- Add image uploads for profiles
- Add @ mentions in comments
- Add notification system for replies
- Add search for users and messages

## Support

For issues or questions:
- Check Supabase dashboard logs
- Review database table structure
- Ensure environment variables are set
- Check browser console for errors
