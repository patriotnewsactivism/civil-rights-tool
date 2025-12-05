import { useState, useEffect } from 'react';
import { Users, UserPlus, UserCheck, Search, Filter, TrendingUp, Award } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function UserNetwork() {
  const [users, setUsers] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [following, setFollowing] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCurrentUser();
    loadUsers();
  }, [filterRole]);

  const loadCurrentUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const { data: profile } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', user.id)
        .single();
      setCurrentUser(profile);

      const { data: connections } = await supabase
        .from('user_connections')
        .select('following_id')
        .eq('follower_id', user.id);

      setFollowing(connections?.map(c => c.following_id) || []);
    }
  };

  const loadUsers = async () => {
    try {
      let query = supabase
        .from('user_profiles')
        .select('*')
        .neq('id', currentUser?.id || '')
        .order('posts_count', { ascending: false })
        .limit(50);

      if (filterRole !== 'all') {
        query = query.eq('role', filterRole);
      }

      const { data, error } = await query;

      if (error) throw error;
      setUsers(data || []);
    } catch (error) {
      console.error('Error loading users:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleFollow = async (userId: string) => {
    if (!currentUser) {
      alert('Please login to follow users');
      return;
    }

    try {
      if (following.includes(userId)) {
        await supabase
          .from('user_connections')
          .delete()
          .eq('follower_id', currentUser.id)
          .eq('following_id', userId);

        setFollowing(following.filter(id => id !== userId));
      } else {
        await supabase
          .from('user_connections')
          .insert({
            follower_id: currentUser.id,
            following_id: userId,
          });

        setFollowing([...following, userId]);
      }
    } catch (error) {
      console.error('Error toggling follow:', error);
    }
  };

  const getRoleBadge = (role: string) => {
    const badges: Record<string, { color: string; label: string; icon: string }> = {
      admin: { color: 'bg-red-100 text-red-800 border-red-200', label: 'Admin', icon: '👑' },
      moderator: { color: 'bg-purple-100 text-purple-800 border-purple-200', label: 'Moderator', icon: '🛡️' },
      attorney: { color: 'bg-blue-100 text-blue-800 border-blue-200', label: 'Civil Rights Attorney', icon: '⚖️' },
      journalist: { color: 'bg-green-100 text-green-800 border-green-200', label: 'Journalist', icon: '📰' },
      activist: { color: 'bg-orange-100 text-orange-800 border-orange-200', label: 'Activist', icon: '✊' },
      user: { color: 'bg-gray-100 text-gray-800 border-gray-200', label: 'Member', icon: '👤' },
    };

    const badge = badges[role] || badges.user;

    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold border ${badge.color}`}>
        <span className="mr-1">{badge.icon}</span>
        {badge.label}
      </span>
    );
  };

  const getContributorLevel = (user: any) => {
    const totalActivity = (user.posts_count || 0) + (user.comments_count || 0) + (user.violations_reported || 0);

    if (totalActivity >= 100) return { level: 'Elite', color: 'text-purple-600', icon: '👑' };
    if (totalActivity >= 50) return { level: 'Expert', color: 'text-blue-600', icon: '⭐' };
    if (totalActivity >= 25) return { level: 'Active', color: 'text-green-600', icon: '🌟' };
    if (totalActivity >= 10) return { level: 'Regular', color: 'text-yellow-600', icon: '✨' };
    return { level: 'New', color: 'text-gray-600', icon: '🌱' };
  };

  const filteredUsers = users.filter(user => {
    const searchLower = searchQuery.toLowerCase();
    return (
      user.username?.toLowerCase().includes(searchLower) ||
      user.display_name?.toLowerCase().includes(searchLower) ||
      user.bio?.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center">
            <Users className="h-10 w-10 mr-3 text-blue-600" />
            Discover the Network
          </h1>
          <p className="text-xl text-gray-600">
            Connect with journalists, activists, and civil rights advocates
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, username, or bio..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="all">All Roles</option>
                <option value="journalist">Journalists</option>
                <option value="activist">Activists</option>
                <option value="attorney">Attorneys</option>
                <option value="moderator">Moderators</option>
              </select>
            </div>
          </div>
        </div>

        {/* Users Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : filteredUsers.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <Users className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No users found</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUsers.map((user) => {
              const isFollowing = following.includes(user.id);
              const contributorLevel = getContributorLevel(user);
              const totalActivity = (user.posts_count || 0) + (user.comments_count || 0) + (user.violations_reported || 0);

              return (
                <div
                  key={user.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6"
                >
                  {/* Profile Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-2xl">
                        {(user.display_name || user.username)[0].toUpperCase()}
                      </div>
                      <div>
                        <div className="font-bold text-lg text-gray-900 flex items-center space-x-1">
                          <span>{user.display_name || user.username}</span>
                          {user.is_verified && (
                            <span className="text-blue-600" title="Verified">✓</span>
                          )}
                        </div>
                        <div className="text-sm text-gray-500">@{user.username}</div>
                      </div>
                    </div>
                  </div>

                  {/* Role Badge */}
                  <div className="mb-3">
                    {getRoleBadge(user.role)}
                  </div>

                  {/* Bio */}
                  {user.bio && (
                    <p className="text-gray-700 mb-4 line-clamp-2">{user.bio}</p>
                  )}

                  {/* Contributor Level */}
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-3 mb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs text-gray-600 mb-1">Contributor Level</div>
                        <div className={`font-bold ${contributorLevel.color}`}>
                          {contributorLevel.icon} {contributorLevel.level}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-600">Activity</div>
                        <div className="text-2xl font-bold text-gray-900">{totalActivity}</div>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="text-center">
                      <div className="font-bold text-lg text-gray-900">{user.posts_count || 0}</div>
                      <div className="text-xs text-gray-500">Posts</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-lg text-gray-900">{user.comments_count || 0}</div>
                      <div className="text-xs text-gray-500">Comments</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-lg text-gray-900">{user.violations_reported || 0}</div>
                      <div className="text-xs text-gray-500">Reports</div>
                    </div>
                  </div>

                  {/* Follow Button */}
                  {currentUser && currentUser.id !== user.id && (
                    <button
                      onClick={() => toggleFollow(user.id)}
                      className={`w-full py-2 px-4 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2 ${
                        isFollowing
                          ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                          : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                      }`}
                    >
                      {isFollowing ? (
                        <>
                          <UserCheck className="h-4 w-4" />
                          <span>Following</span>
                        </>
                      ) : (
                        <>
                          <UserPlus className="h-4 w-4" />
                          <span>Follow</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
