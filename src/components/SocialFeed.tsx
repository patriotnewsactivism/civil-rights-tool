import { useState, useEffect } from 'react';
import { Heart, MessageCircle, Share2, Send, Image, Link as LinkIcon, Hash, TrendingUp, Users, Bookmark } from 'lucide-react';
import { supabase } from '../lib/supabase';
import CommentsSection from './CommentsSection';

export default function SocialFeed() {
  const [posts, setPosts] = useState<any[]>([]);
  const [newPost, setNewPost] = useState('');
  const [showComments, setShowComments] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [trendingHashtags, setTrendingHashtags] = useState<any[]>([]);
  const [suggestedUsers, setSuggestedUsers] = useState<any[]>([]);

  useEffect(() => {
    loadCurrentUser();
    loadPosts();
    loadTrendingHashtags();
    loadSuggestedUsers();
  }, []);

  const loadCurrentUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const { data: profile } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', user.id)
        .single();
      setCurrentUser(profile);
    }
  };

  const loadPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select(`
          *,
          user:user_id(username, display_name, role, is_verified),
          likes:post_likes(user_id)
        `)
        .eq('visibility', 'public')
        .order('created_at', { ascending: false })
        .limit(50);

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error loading posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadTrendingHashtags = async () => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('hashtags')
        .gte('created_at', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString())
        .not('hashtags', 'is', null);

      if (error) throw error;

      const hashtagCounts: Record<string, number> = {};
      data?.forEach((post: any) => {
        post.hashtags?.forEach((tag: string) => {
          hashtagCounts[tag] = (hashtagCounts[tag] || 0) + 1;
        });
      });

      const trending = Object.entries(hashtagCounts)
        .map(([tag, count]) => ({ tag, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 10);

      setTrendingHashtags(trending);
    } catch (error) {
      console.error('Error loading trending hashtags:', error);
    }
  };

  const loadSuggestedUsers = async () => {
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('id, username, display_name, role, is_verified, posts_count')
        .neq('id', currentUser?.id || '')
        .order('posts_count', { ascending: false })
        .limit(5);

      if (error) throw error;
      setSuggestedUsers(data || []);
    } catch (error) {
      console.error('Error loading suggested users:', error);
    }
  };

  const createPost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser || !newPost.trim()) return;

    try {
      const hashtags = newPost.match(/#\w+/g)?.map(tag => tag.slice(1)) || [];

      const { error } = await supabase
        .from('posts')
        .insert({
          user_id: currentUser.id,
          content: newPost,
          hashtags,
          post_type: 'text',
        });

      if (error) throw error;

      setNewPost('');
      loadPosts();
    } catch (error: any) {
      console.error('Error creating post:', error);
      alert(error.message || 'Failed to create post');
    }
  };

  const likePost = async (postId: string) => {
    if (!currentUser) {
      alert('Please login to like posts');
      return;
    }

    try {
      const post = posts.find(p => p.id === postId);
      const hasLiked = post?.likes?.some((like: any) => like.user_id === currentUser.id);

      if (hasLiked) {
        await supabase
          .from('post_likes')
          .delete()
          .eq('post_id', postId)
          .eq('user_id', currentUser.id);
      } else {
        await supabase
          .from('post_likes')
          .insert({
            post_id: postId,
            user_id: currentUser.id,
          });
      }

      loadPosts();
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  const sharePost = async (postId: string) => {
    if (!currentUser) {
      alert('Please login to share posts');
      return;
    }

    const shareComment = prompt('Add a comment to your share (optional):');

    try {
      await supabase
        .from('post_shares')
        .insert({
          post_id: postId,
          user_id: currentUser.id,
          share_comment: shareComment || null,
        });

      alert('Post shared to your profile!');
      loadPosts();
    } catch (error) {
      console.error('Error sharing post:', error);
    }
  };

  const getRoleBadge = (role: string) => {
    const badges: Record<string, { color: string; label: string }> = {
      admin: { color: 'bg-red-100 text-red-800', label: 'Admin' },
      moderator: { color: 'bg-purple-100 text-purple-800', label: 'Mod' },
      attorney: { color: 'bg-blue-100 text-blue-800', label: 'Attorney' },
      journalist: { color: 'bg-green-100 text-green-800', label: 'Journalist' },
      activist: { color: 'bg-orange-100 text-orange-800', label: 'Activist' },
    };

    if (!role || role === 'user') return null;

    const badge = badges[role];
    if (!badge) return null;

    return (
      <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${badge.color}`}>
        {badge.label}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar - Trending */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-6 space-y-6">
              {/* Trending Hashtags */}
              <div className="bg-white rounded-xl shadow-md p-4">
                <h3 className="font-bold text-lg mb-4 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                  Trending
                </h3>
                <div className="space-y-3">
                  {trendingHashtags.map((item, index) => (
                    <button
                      key={index}
                      className="w-full text-left hover:bg-gray-50 rounded-lg p-2 transition-colors"
                    >
                      <div className="font-semibold text-blue-600">#{item.tag}</div>
                      <div className="text-sm text-gray-500">{item.count} posts</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Feed */}
          <div className="lg:col-span-6">
            {/* Post Creator */}
            {currentUser && (
              <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <form onSubmit={createPost}>
                  <textarea
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    rows={3}
                    placeholder="What's happening in civil rights today? Use #hashtags..."
                  />
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex space-x-2">
                      <button
                        type="button"
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                        title="Add image"
                      >
                        <Image className="h-5 w-5" />
                      </button>
                      <button
                        type="button"
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                        title="Add link"
                      >
                        <LinkIcon className="h-5 w-5" />
                      </button>
                      <button
                        type="button"
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                        title="Add hashtag"
                      >
                        <Hash className="h-5 w-5" />
                      </button>
                    </div>
                    <button
                      type="submit"
                      disabled={!newPost.trim()}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                    >
                      <Send className="h-4 w-4" />
                      <span>Post</span>
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Posts Feed */}
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              </div>
            ) : posts.length === 0 ? (
              <div className="bg-white rounded-xl shadow-md p-12 text-center">
                <MessageCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">No posts yet. Be the first to share!</p>
              </div>
            ) : (
              <div className="space-y-6">
                {posts.map((post) => {
                  const hasLiked = post.likes?.some((like: any) => like.user_id === currentUser?.id);
                  
                  return (
                    <div key={post.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                      <div className="p-6">
                        {/* Post Header */}
                        <div className="flex items-start space-x-3 mb-4">
                          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                            {(post.user?.display_name || post.user?.username || 'U')[0].toUpperCase()}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <span className="font-bold text-gray-900">
                                {post.user?.display_name || post.user?.username}
                              </span>
                              {post.user?.is_verified && (
                                <span className="text-blue-600" title="Verified">✓</span>
                              )}
                              {getRoleBadge(post.user?.role)}
                            </div>
                            <div className="text-sm text-gray-500">
                              @{post.user?.username} • {new Date(post.created_at).toLocaleDateString()}
                            </div>
                          </div>
                        </div>

                        {/* Post Content */}
                        <div className="mb-4">
                          <p className="text-gray-800 whitespace-pre-wrap text-lg leading-relaxed">
                            {post.content}
                          </p>
                          {post.hashtags && post.hashtags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-3">
                              {post.hashtags.map((tag: string, index: number) => (
                                <span
                                  key={index}
                                  className="text-blue-600 hover:text-blue-700 cursor-pointer font-medium"
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Post Actions */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <button
                            onClick={() => likePost(post.id)}
                            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                              hasLiked
                                ? 'text-red-600 bg-red-50'
                                : 'text-gray-600 hover:bg-gray-50'
                            }`}
                          >
                            <Heart className={`h-5 w-5 ${hasLiked ? 'fill-current' : ''}`} />
                            <span className="font-semibold">{post.likes_count || 0}</span>
                          </button>

                          <button
                            onClick={() => setShowComments(showComments === post.id ? null : post.id)}
                            className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                          >
                            <MessageCircle className="h-5 w-5" />
                            <span className="font-semibold">{post.comments_count || 0}</span>
                          </button>

                          <button
                            onClick={() => sharePost(post.id)}
                            className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                          >
                            <Share2 className="h-5 w-5" />
                            <span className="font-semibold">{post.shares_count || 0}</span>
                          </button>

                          <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                            <Bookmark className="h-5 w-5" />
                          </button>
                        </div>
                      </div>

                      {/* Comments Section */}
                      {showComments === post.id && (
                        <div className="border-t border-gray-100 p-6">
                          <CommentsSection
                            contentType="post"
                            contentId={post.id}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right Sidebar - Suggested Users */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-6 space-y-6">
              {/* Suggested Users */}
              <div className="bg-white rounded-xl shadow-md p-4">
                <h3 className="font-bold text-lg mb-4 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-purple-600" />
                  Who to Follow
                </h3>
                <div className="space-y-4">
                  {suggestedUsers.map((user) => (
                    <div key={user.id} className="flex items-start space-x-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                        {(user.display_name || user.username)[0].toUpperCase()}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm truncate">
                          {user.display_name || user.username}
                        </div>
                        <div className="text-xs text-gray-500">@{user.username}</div>
                        {getRoleBadge(user.role)}
                      </div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1 rounded-full font-semibold">
                        Follow
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
