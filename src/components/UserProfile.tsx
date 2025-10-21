import { useState, useEffect } from 'react';
import { User, Mail, MessageCircle, FileText, Award, Calendar, MapPin, Edit2, Save, X, Shield, Star, TrendingUp } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface UserStats {
  violations_reported: number;
  comments_posted: number;
  messages_sent: number;
  account_age_days: number;
  followers: number;
  following: number;
}

interface UserProfileProps {
  userId?: string;
  isOwnProfile?: boolean;
}

export default function UserProfile({ userId, isOwnProfile = false }: UserProfileProps) {
  const [profile, setProfile] = useState<any>(null);
  const [stats, setStats] = useState<UserStats>({
    violations_reported: 0,
    comments_posted: 0,
    messages_sent: 0,
    account_age_days: 0,
    followers: 0,
    following: 0,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    display_name: '',
    bio: '',
    role: 'user',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProfile();
  }, [userId]);

  const loadProfile = async () => {
    try {
      const targetUserId = userId || (await supabase.auth.getUser()).data.user?.id;
      if (!targetUserId) return;

      // Load profile
      const { data: profileData } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', targetUserId)
        .single();

      if (profileData) {
        setProfile(profileData);
        setEditForm({
          display_name: profileData.display_name || '',
          bio: profileData.bio || '',
          role: profileData.role || 'user',
        });

        // Calculate account age
        const accountAge = Math.floor(
          (Date.now() - new Date(profileData.created_at).getTime()) / (1000 * 60 * 60 * 24)
        );

        // Load stats
        const [comments, messages, followers, following] = await Promise.all([
          supabase.from('comments').select('id', { count: 'exact' }).eq('user_id', targetUserId),
          supabase.from('private_messages').select('id', { count: 'exact' }).eq('sender_id', targetUserId),
          supabase.from('user_connections').select('id', { count: 'exact' }).eq('following_id', targetUserId),
          supabase.from('user_connections').select('id', { count: 'exact' }).eq('follower_id', targetUserId),
        ]);

        setStats({
          violations_reported: 0, // Will be loaded from violations table
          comments_posted: comments.count || 0,
          messages_sent: messages.count || 0,
          account_age_days: accountAge,
          followers: followers.count || 0,
          following: following.count || 0,
        });
      }
    } catch (error) {
      console.error('Error loading profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveProfile = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { error } = await supabase
        .from('user_profiles')
        .update({
          display_name: editForm.display_name,
          bio: editForm.bio,
          role: editForm.role,
          updated_at: new Date().toISOString(),
        })
        .eq('id', user.id);

      if (error) throw error;

      setIsEditing(false);
      loadProfile();
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const getContributorLevel = () => {
    const totalActivity = stats.violations_reported + stats.comments_posted + stats.messages_sent;
    
    if (totalActivity >= 100) return { level: 'Elite Contributor', color: 'text-purple-600', icon: '👑' };
    if (totalActivity >= 50) return { level: 'Expert Contributor', color: 'text-blue-600', icon: '⭐' };
    if (totalActivity >= 25) return { level: 'Active Contributor', color: 'text-green-600', icon: '🌟' };
    if (totalActivity >= 10) return { level: 'Regular Contributor', color: 'text-yellow-600', icon: '✨' };
    return { level: 'New Member', color: 'text-gray-600', icon: '🌱' };
  };

  const getRoleBadge = (role: string) => {
    const badges: Record<string, { label: string; color: string; icon: any }> = {
      admin: { label: 'Admin', color: 'bg-red-100 text-red-800', icon: Shield },
      moderator: { label: 'Moderator', color: 'bg-purple-100 text-purple-800', icon: Shield },
      attorney: { label: 'Civil Rights Attorney', color: 'bg-blue-100 text-blue-800', icon: Award },
      journalist: { label: 'Journalist', color: 'bg-green-100 text-green-800', icon: FileText },
      activist: { label: 'Activist', color: 'bg-orange-100 text-orange-800', icon: TrendingUp },
      user: { label: 'Member', color: 'bg-gray-100 text-gray-800', icon: User },
    };
    
    const badge = badges[role] || badges.user;
    const Icon = badge.icon;
    
    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${badge.color}`}>
        <Icon className="h-4 w-4 mr-1" />
        {badge.label}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="text-center p-12">
        <p className="text-gray-600">Profile not found</p>
      </div>
    );
  }

  const contributorLevel = getContributorLevel();
  const totalActivity = stats.violations_reported + stats.comments_posted + stats.messages_sent;

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-32"></div>
        <div className="px-6 pb-6">
          <div className="flex items-start justify-between -mt-16 mb-4">
            <div className="flex items-end space-x-4">
              <div className="h-32 w-32 rounded-full border-4 border-white bg-gray-200 flex items-center justify-center text-4xl shadow-lg">
                {profile.avatar_url ? (
                  <img src={profile.avatar_url} alt={profile.display_name} className="rounded-full" />
                ) : (
                  <User className="h-16 w-16 text-gray-400" />
                )}
              </div>
              <div className="mb-2">
                <h1 className="text-3xl font-bold text-gray-900">{profile.display_name || profile.username}</h1>
                <p className="text-gray-600">@{profile.username}</p>
              </div>
            </div>
            {isOwnProfile && !isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2"
              >
                <Edit2 className="h-4 w-4" />
                <span>Edit Profile</span>
              </button>
            )}
          </div>

          {/* Edit Form */}
          {isEditing ? (
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Display Name</label>
                  <input
                    type="text"
                    value={editForm.display_name}
                    onChange={(e) => setEditForm({ ...editForm, display_name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                  <textarea
                    value={editForm.bio}
                    onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about yourself..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                  <select
                    value={editForm.role}
                    onChange={(e) => setEditForm({ ...editForm, role: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="user">Member</option>
                    <option value="activist">Activist</option>
                    <option value="journalist">Journalist</option>
                    <option value="attorney">Civil Rights Attorney</option>
                  </select>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={handleSaveProfile}
                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center space-x-2"
                  >
                    <Save className="h-4 w-4" />
                    <span>Save Changes</span>
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center space-x-2"
                  >
                    <X className="h-4 w-4" />
                    <span>Cancel</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {getRoleBadge(profile.role)}
                {profile.is_verified && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-800">
                    <Star className="h-4 w-4 mr-1 fill-current" />
                    Verified
                  </span>
                )}
              </div>

              {/* Bio */}
              {profile.bio && (
                <p className="text-gray-700 mb-4">{profile.bio}</p>
              )}

              {/* Contributor Level */}
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-orange-200 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Contributor Level</p>
                    <p className={`text-2xl font-bold ${contributorLevel.color}`}>
                      {contributorLevel.icon} {contributorLevel.level}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Total Activity</p>
                    <p className="text-3xl font-bold text-gray-900">{totalActivity}</p>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <FileText className="h-5 w-5 text-blue-600" />
                    <span className="text-2xl font-bold text-gray-900">{stats.violations_reported}</span>
                  </div>
                  <p className="text-sm text-gray-600">Violations Reported</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <MessageCircle className="h-5 w-5 text-green-600" />
                    <span className="text-2xl font-bold text-gray-900">{stats.comments_posted}</span>
                  </div>
                  <p className="text-sm text-gray-600">Comments Posted</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Mail className="h-5 w-5 text-purple-600" />
                    <span className="text-2xl font-bold text-gray-900">{stats.messages_sent}</span>
                  </div>
                  <p className="text-sm text-gray-600">Messages Sent</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <User className="h-5 w-5 text-indigo-600" />
                    <span className="text-2xl font-bold text-gray-900">{stats.followers}</span>
                  </div>
                  <p className="text-sm text-gray-600">Followers</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <User className="h-5 w-5 text-pink-600" />
                    <span className="text-2xl font-bold text-gray-900">{stats.following}</span>
                  </div>
                  <p className="text-sm text-gray-600">Following</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Calendar className="h-5 w-5 text-orange-600" />
                    <span className="text-2xl font-bold text-gray-900">{stats.account_age_days}</span>
                  </div>
                  <p className="text-sm text-gray-600">Days Active</p>
                </div>
              </div>

              {/* Account Info */}
              <div className="text-sm text-gray-500 space-y-1">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Joined {new Date(profile.created_at).toLocaleDateString()}</span>
                </div>
                {profile.last_seen_at && (
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>Last seen {new Date(profile.last_seen_at).toLocaleDateString()}</span>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Achievement Badges */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Achievements</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.violations_reported >= 1 && (
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-3xl mb-2">🎯</div>
              <p className="text-sm font-semibold text-gray-900">First Report</p>
            </div>
          )}
          {stats.comments_posted >= 10 && (
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-3xl mb-2">💬</div>
              <p className="text-sm font-semibold text-gray-900">Conversationalist</p>
            </div>
          )}
          {stats.account_age_days >= 30 && (
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-3xl mb-2">🎂</div>
              <p className="text-sm font-semibold text-gray-900">Veteran</p>
            </div>
          )}
          {totalActivity >= 50 && (
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-3xl mb-2">🏆</div>
              <p className="text-sm font-semibold text-gray-900">Top Contributor</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
