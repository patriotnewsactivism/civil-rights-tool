# Social Media Platform for Journalists & Activists - Complete Guide

## Overview

This is a comprehensive social media platform specifically designed for journalists and civil rights activists to connect, collaborate, and drive change.

## Features

### 1. **Social Feed**
- Post updates, share content, use hashtags
- Like, comment, and share posts
- Threaded discussions
- Trending hashtags
- User discovery suggestions

### 2. **User Profiles**
- Customizable profiles with bio and role
- Contributor levels (New → Regular → Active → Expert → Elite)
- Achievement badges
- Activity stats (posts, comments, violations reported)
- Follower/following system

### 3. **Private Messaging**
- Send direct messages to other users
- Inbox and Sent folders
- Message threading and replies
- Unread notifications

### 4. **Public Comments**
- Comment on any content (posts, news, violations, cases)
- Upvote/downvote system
- Threaded replies
- Flag inappropriate content

### 5. **User Network/Discovery**
- Browse users by role (Journalist, Activist, Attorney)
- Follow/unfollow users
- Search by name, username, or bio
- View contributor levels and activity

### 6. **Notifications**
- Real-time notifications for:
  - Likes on your posts
  - Comments and replies
  - New followers
  - Mentions
  - Private messages
- Mark as read/unread
- Filter by unread

### 7. **Professional Home Page**
- Hero section with platform overview
- Feature showcase
- Stats display
- Call-to-action for signups

### 8. **Main Navigation**
- Easy access to all platform sections
- Notification and message badges
- Mobile-responsive menu
- Search functionality

## Database Setup

### Step 1: Run Community Schema (REQUIRED FIRST)

1. Open `src/database/community-schema.sql`
2. Go to your Supabase SQL Editor
3. Copy and paste the entire file
4. Run the query

This creates:
- `user_profiles` - User information
- `private_messages` - Private messaging
- `comments` - Public comments
- `comment_votes` - Voting system
- `user_connections` - Follow/follower relationships

### Step 2: Run Social Schema (REQUIRED SECOND)

1. Open `src/database/social-schema.sql`
2. Go to your Supabase SQL Editor
3. Copy and paste the entire file
4. Run the query

This creates:
- `posts` - Social feed posts
- `post_likes` - Post likes
- `post_shares` - Post shares
- `notifications` - Notification system
- `user_activity` - Activity tracking

**IMPORTANT**: Run community-schema.sql BEFORE social-schema.sql!

## Component Guide

### HomePage.tsx
Bold, branded landing page designed to convert visitors to users:
- BLACK BACKGROUND with blue/purple/pink gradients
- MASSIVE "CREATE ACCOUNT" and "LOGIN" buttons (impossible to miss)
- Clear activist/journalist messaging
- Live platform stats
- 3 core features highlighted
- Multiple signup CTAs throughout
- Modern, branded design
- Mobile responsive

**Key Design Elements:**
- "SPEAK. CONNECT. CHANGE." headline
- Grid pattern background
- Gradient text effects
- Hover animations on buttons
- Streamlined, no-BS approach

Usage:
```tsx
import HomePage from './components/HomePage';

<HomePage />
```

### MainNavigation.tsx
Site-wide navigation bar with:
- Logo and branding
- Navigation links
- Search bar
- Notification badges
- User menu dropdown

Usage:
```tsx
import MainNavigation from './components/MainNavigation';

<MainNavigation 
  currentPage="feed"
  onNavigate={(page) => setCurrentPage(page)}
/>
```

### SocialFeed.tsx
Main social feed with:
- Post creation form
- Feed of posts from network
- Like, comment, share buttons
- Trending hashtags sidebar
- Suggested users sidebar

Usage:
```tsx
import SocialFeed from './components/SocialFeed';

<SocialFeed />
```

### UserProfile.tsx
User profile page with:
- Profile information
- Editable bio and role
- Contributor level display
- Activity stats
- Achievement badges

Usage:
```tsx
import UserProfile from './components/UserProfile';

<UserProfile 
  userId={userId}
  isOwnProfile={true}
/>
```

### UserNetwork.tsx
User discovery page with:
- Search and filter users
- Browse by role
- Follow/unfollow buttons
- Activity stats for each user

Usage:
```tsx
import UserNetwork from './components/UserNetwork';

<UserNetwork />
```

### MessagingPanel.tsx
Private messaging system with:
- Inbox and Sent folders
- Compose new messages
- Message threading
- Search messages

Usage:
```tsx
import MessagingPanel from './components/MessagingPanel';

<MessagingPanel />
```

### NotificationsCenter.tsx
Notification hub with:
- All notifications feed
- Filter by unread
- Mark as read/delete
- Notification icons by type

Usage:
```tsx
import NotificationsCenter from './components/NotificationsCenter';

<NotificationsCenter />
```

### CommentsSection.tsx
Reusable comment component for any content:

Usage:
```tsx
import CommentsSection from './components/CommentsSection';

<CommentsSection
  contentType="news" // 'violation' | 'news' | 'case' | 'legislation'
  contentId="article-123"
  title="Article Title"
/>
```

### AuthModal.tsx
Login/signup modal with:
- Email/password authentication
- Google OAuth
- Username creation
- Form validation

Usage:
```tsx
import AuthModal from './components/AuthModal';

<AuthModal
  isOpen={showAuth}
  onClose={() => setShowAuth(false)}
  onAuthSuccess={() => {/* handle success */}}
/>
```

## User Roles

Users can select from these roles:

- **Member** (default) - Regular platform user
- **Activist** - Civil rights activist
- **Journalist** - News reporter or journalist  
- **Attorney** - Civil rights attorney
- **Moderator** - Content moderator (assigned by admin)
- **Admin** - Platform administrator (assigned manually)

Each role gets a unique badge displayed on profiles and posts.

## Contributor Levels

Users automatically earn levels based on total activity:

| Level | Activity Required | Badge |
|-------|------------------|-------|
| New Member | 0-9 | 🌱 |
| Regular Contributor | 10-24 | ✨ |
| Active Contributor | 25-49 | 🌟 |
| Expert Contributor | 50-99 | ⭐ |
| Elite Contributor | 100+ | 👑 |

**Activity = Posts + Comments + Violations Reported**

## Achievement Badges

Users earn badges for milestones:

- 🎯 **First Report** - Submitted first violation
- 💬 **Conversationalist** - Posted 10+ comments
- 🎂 **Veteran** - Account 30+ days old
- 🏆 **Top Contributor** - 50+ total activities

## Integration with Existing Features

### Add Comments to Violations

```tsx
// In ViolationsMap component
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

### Add Comments to Legal Cases

```tsx
// In case explorer component
<CommentsSection
  contentType="case"
  contentId={caseData.id}
  title={caseData.name}
/>
```

## Security Features

- **Row Level Security (RLS)** enabled on all tables
- **Password hashing** with Supabase Auth
- **Session management** with automatic expiration
- **OAuth integration** with Google
- **Email verification** for new accounts
- **Content flagging** for moderation
- **Private messaging** with user-only access

## Mobile Responsive

All components are fully responsive with:
- Mobile-first design
- Hamburger menus on small screens
- Touch-friendly buttons
- Optimized layouts for tablets
- Grid systems that adapt to screen size

## Performance Optimizations

- **Lazy loading** of images and content
- **Pagination** on feeds (50 posts at a time)
- **Database indexes** on frequently queried fields
- **Caching** of user profiles
- **Debounced search** to reduce API calls

## Testing Checklist

### User Accounts
- [ ] Sign up with email
- [ ] Login with email
- [ ] Login with Google OAuth
- [ ] Edit profile information
- [ ] Change role and bio
- [ ] View own profile

### Social Feed
- [ ] Create a post
- [ ] Like a post
- [ ] Comment on a post
- [ ] Share a post
- [ ] Use hashtags
- [ ] View trending hashtags

### Messaging
- [ ] Send a private message
- [ ] Receive a message
- [ ] Reply to a message
- [ ] Delete a message
- [ ] View unread count

### Network
- [ ] Search for users
- [ ] Filter by role
- [ ] Follow a user
- [ ] Unfollow a user
- [ ] View contributor levels

### Notifications
- [ ] Receive notification for like
- [ ] Receive notification for comment
- [ ] Receive notification for follow
- [ ] Mark notification as read
- [ ] Delete notification
- [ ] View unread count

### Comments
- [ ] Post a comment
- [ ] Reply to a comment
- [ ] Upvote a comment
- [ ] Downvote a comment
- [ ] Flag a comment

## Troubleshooting

### "Table does not exist" error
- Ensure you ran both `community-schema.sql` AND `social-schema.sql`
- Run community schema FIRST, then social schema

### "Permission denied" error
- Check RLS policies are enabled
- Verify user is logged in
- Check user has correct role

### Comments not showing
- Verify `contentType` and `contentId` match
- Check comments table has data
- Ensure RLS policies allow read access

### Notifications not appearing
- Check triggers are created
- Verify notification functions exist
- Ensure user_id is correct

## Future Enhancements

Potential features to add:

- Image uploads for posts and profiles
- Video embedding in posts
- Real-time feed updates with Supabase Realtime
- @ mentions autocomplete
- Direct message groups
- Post bookmarking
- Content moderation dashboard
- Email notifications
- Push notifications
- Export user data
- Block/mute users
- Report content
- Advanced search filters
- Trending topics algorithm
- User verification process

## Support

For issues:
1. Check Supabase dashboard logs
2. Verify all environment variables are set
3. Ensure both SQL schemas are run
4. Check browser console for errors
5. Review RLS policies in Supabase

## License

Built for the civil rights community. Use responsibly to drive positive change.
