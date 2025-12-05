import { useState, useEffect } from 'react';
import { MessageCircle, ThumbsUp, ThumbsDown, Send, Reply, Flag, User } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface CommentsSectionProps {
  contentType: 'violation' | 'news' | 'case' | 'legislation' | 'post';
  contentId: string;
  title?: string;
}

export default function CommentsSection({ contentType, contentId, title }: CommentsSectionProps) {
  const [comments, setComments] = useState<any[]>([]);
  const [newComment, setNewComment] = useState('');
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyText, setReplyText] = useState('');
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showAuthPrompt, setShowAuthPrompt] = useState(false);

  useEffect(() => {
    loadCurrentUser();
    loadComments();
  }, [contentType, contentId]);

  const loadCurrentUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    setCurrentUser(user);
  };

  const loadComments = async () => {
    try {
      const { data, error } = await supabase
        .from('comments')
        .select(`
          *,
          user:user_id(username, display_name, role, is_verified),
          replies:comments!parent_comment_id(
            *,
            user:user_id(username, display_name, role, is_verified)
          )
        `)
        .eq('content_type', contentType)
        .eq('content_id', contentId)
        .is('parent_comment_id', null)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setComments(data || []);
    } catch (error) {
      console.error('Error loading comments:', error);
    } finally {
      setLoading(false);
    }
  };

  const postComment = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!currentUser) {
      setShowAuthPrompt(true);
      return;
    }

    if (!newComment.trim()) return;

    try {
      const { error } = await supabase
        .from('comments')
        .insert({
          user_id: currentUser.id,
          content_type: contentType,
          content_id: contentId,
          comment_text: newComment,
        });

      if (error) throw error;

      setNewComment('');
      loadComments();
    } catch (error: any) {
      console.error('Error posting comment:', error);
      alert(error.message || 'Failed to post comment');
    }
  };

  const postReply = async (parentId: string) => {
    if (!currentUser) {
      setShowAuthPrompt(true);
      return;
    }

    if (!replyText.trim()) return;

    try {
      const { error } = await supabase
        .from('comments')
        .insert({
          user_id: currentUser.id,
          content_type: contentType,
          content_id: contentId,
          comment_text: replyText,
          parent_comment_id: parentId,
        });

      if (error) throw error;

      setReplyText('');
      setReplyingTo(null);
      loadComments();
    } catch (error: any) {
      console.error('Error posting reply:', error);
      alert(error.message || 'Failed to post reply');
    }
  };

  const voteComment = async (commentId: string, voteType: 'upvote' | 'downvote') => {
    if (!currentUser) {
      setShowAuthPrompt(true);
      return;
    }

    try {
      // Check if user already voted
      const { data: existingVote } = await supabase
        .from('comment_votes')
        .select('*')
        .eq('user_id', currentUser.id)
        .eq('comment_id', commentId)
        .single();

      if (existingVote) {
        // Update existing vote
        if (existingVote.vote_type === voteType) {
          // Remove vote if clicking same button
          await supabase
            .from('comment_votes')
            .delete()
            .eq('id', existingVote.id);
        } else {
          // Change vote
          await supabase
            .from('comment_votes')
            .update({ vote_type: voteType })
            .eq('id', existingVote.id);
        }
      } else {
        // Create new vote
        await supabase
          .from('comment_votes')
          .insert({
            user_id: currentUser.id,
            comment_id: commentId,
            vote_type: voteType,
          });
      }

      loadComments();
    } catch (error) {
      console.error('Error voting:', error);
    }
  };

  const flagComment = async (commentId: string) => {
    if (!currentUser) {
      setShowAuthPrompt(true);
      return;
    }

    if (!confirm('Flag this comment for moderation?')) return;

    try {
      await supabase
        .from('comments')
        .update({ is_flagged: true })
        .eq('id', commentId);

      alert('Comment flagged for review');
      loadComments();
    } catch (error) {
      console.error('Error flagging comment:', error);
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

  const CommentItem = ({ comment, isReply = false }: { comment: any; isReply?: boolean }) => (
    <div className={`${isReply ? 'ml-12 mt-4' : 'mb-6'} ${comment.is_flagged ? 'opacity-50' : ''}`}>
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
              <User className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-gray-900">
                  {comment.user?.display_name || comment.user?.username || 'Anonymous'}
                </span>
                {comment.user?.is_verified && (
                  <span className="text-blue-600" title="Verified">✓</span>
                )}
                {getRoleBadge(comment.user?.role)}
              </div>
              <span className="text-xs text-gray-500">
                {new Date(comment.created_at).toLocaleDateString()}
              </span>
            </div>
          </div>
          {comment.is_flagged && (
            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
              Flagged
            </span>
          )}
        </div>

        <p className="text-gray-700 mb-3 whitespace-pre-wrap">{comment.comment_text}</p>

        <div className="flex items-center space-x-4 text-sm">
          <button
            onClick={() => voteComment(comment.id, 'upvote')}
            className="flex items-center space-x-1 text-gray-600 hover:text-green-600"
          >
            <ThumbsUp className="h-4 w-4" />
            <span>{comment.upvotes || 0}</span>
          </button>

          <button
            onClick={() => voteComment(comment.id, 'downvote')}
            className="flex items-center space-x-1 text-gray-600 hover:text-red-600"
          >
            <ThumbsDown className="h-4 w-4" />
            <span>{comment.downvotes || 0}</span>
          </button>

          {!isReply && (
            <button
              onClick={() => setReplyingTo(comment.id)}
              className="flex items-center space-x-1 text-gray-600 hover:text-blue-600"
            >
              <Reply className="h-4 w-4" />
              <span>Reply</span>
            </button>
          )}

          <button
            onClick={() => flagComment(comment.id)}
            className="flex items-center space-x-1 text-gray-600 hover:text-yellow-600"
          >
            <Flag className="h-4 w-4" />
          </button>
        </div>

        {replyingTo === comment.id && (
          <div className="mt-4">
            <textarea
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={3}
              placeholder="Write a reply..."
            />
            <div className="flex space-x-2 mt-2">
              <button
                onClick={() => postReply(comment.id)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
              >
                Post Reply
              </button>
              <button
                onClick={() => {
                  setReplyingTo(null);
                  setReplyText('');
                }}
                className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Replies */}
      {comment.replies && comment.replies.length > 0 && (
        <div className="mt-4">
          {comment.replies.map((reply: any) => (
            <CommentItem key={reply.id} comment={reply} isReply={true} />
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900 flex items-center">
          <MessageCircle className="h-6 w-6 mr-2" />
          Comments {comments.length > 0 && `(${comments.length})`}
        </h3>
      </div>

      {title && (
        <div className="mb-4 p-3 bg-white rounded-lg border-l-4 border-blue-500">
          <p className="text-sm text-gray-600">Discussing:</p>
          <p className="font-semibold text-gray-900">{title}</p>
        </div>
      )}

      {/* Post New Comment */}
      {showAuthPrompt ? (
        <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-yellow-800 font-semibold mb-2">Please login to comment</p>
          <p className="text-sm text-yellow-700">You need to create an account or login to post comments and interact with the community.</p>
          <button
            onClick={() => setShowAuthPrompt(false)}
            className="mt-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            Dismiss
          </button>
        </div>
      ) : currentUser ? (
        <form onSubmit={postComment} className="mb-6">
          <div className="bg-white rounded-lg shadow p-4">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={4}
              placeholder="Share your thoughts..."
              required
            />
            <button
              type="submit"
              className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium flex items-center space-x-2"
            >
              <Send className="h-4 w-4" />
              <span>Post Comment</span>
            </button>
          </div>
        </form>
      ) : (
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-blue-800">Login to join the conversation</p>
        </div>
      )}

      {/* Comments List */}
      {loading ? (
        <div className="flex items-center justify-center p-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      ) : comments.length === 0 ? (
        <div className="text-center p-12">
          <MessageCircle className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        </div>
      ) : (
        <div>
          {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
      )}
    </div>
  );
}
