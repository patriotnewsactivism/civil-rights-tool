import { useState, useEffect } from 'react';
import { Bell, Heart, MessageCircle, Share2, UserPlus, AtSign, CheckCheck, Trash2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function NotificationsCenter() {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [filter, setFilter] = useState<'all' | 'unread'>('all');
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    loadCurrentUser();
  }, []);

  useEffect(() => {
    if (currentUser) {
      loadNotifications();
    }
  }, [currentUser, filter]);

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

  const loadNotifications = async () => {
    if (!currentUser) return;

    try {
      let query = supabase
        .from('notifications')
        .select(`
          *,
          from_user:from_user_id(username, display_name, role)
        `)
        .eq('user_id', currentUser.id)
        .order('created_at', { ascending: false })
        .limit(50);

      if (filter === 'unread') {
        query = query.eq('is_read', false);
      }

      const { data, error } = await query;

      if (error) throw error;
      setNotifications(data || []);
    } catch (error) {
      console.error('Error loading notifications:', error);
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (notificationId: string) => {
    try {
      await supabase
        .from('notifications')
        .update({ is_read: true })
        .eq('id', notificationId);

      loadNotifications();
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  const markAllAsRead = async () => {
    try {
      await supabase
        .from('notifications')
        .update({ is_read: true })
        .eq('user_id', currentUser.id)
        .eq('is_read', false);

      loadNotifications();
    } catch (error) {
      console.error('Error marking all as read:', error);
    }
  };

  const deleteNotification = async (notificationId: string) => {
    try {
      await supabase
        .from('notifications')
        .delete()
        .eq('id', notificationId);

      setNotifications(notifications.filter(n => n.id !== notificationId));
    } catch (error) {
      console.error('Error deleting notification:', error);
    }
  };

  const getNotificationIcon = (type: string) => {
    const icons: Record<string, any> = {
      like: { icon: Heart, color: 'text-red-500', bg: 'bg-red-50' },
      comment: { icon: MessageCircle, color: 'text-blue-500', bg: 'bg-blue-50' },
      share: { icon: Share2, color: 'text-green-500', bg: 'bg-green-50' },
      follow: { icon: UserPlus, color: 'text-purple-500', bg: 'bg-purple-50' },
      mention: { icon: AtSign, color: 'text-orange-500', bg: 'bg-orange-50' },
      reply: { icon: MessageCircle, color: 'text-indigo-500', bg: 'bg-indigo-50' },
      message: { icon: MessageCircle, color: 'text-pink-500', bg: 'bg-pink-50' },
    };

    return icons[type] || { icon: Bell, color: 'text-gray-500', bg: 'bg-gray-50' };
  };

  const getNotificationText = (notification: any) => {
    const fromUser = notification.from_user?.display_name || notification.from_user?.username || 'Someone';

    switch (notification.type) {
      case 'like':
        return `${fromUser} liked your post`;
      case 'comment':
        return `${fromUser} commented on your post`;
      case 'share':
        return `${fromUser} shared your post`;
      case 'follow':
        return `${fromUser} started following you`;
      case 'mention':
        return `${fromUser} mentioned you in a post`;
      case 'reply':
        return `${fromUser} replied to your comment`;
      case 'message':
        return `${fromUser} sent you a message`;
      default:
        return notification.content || 'New notification';
    }
  };

  const unreadCount = notifications.filter(n => !n.is_read).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center">
            <Bell className="h-10 w-10 mr-3 text-blue-600" />
            Notifications
          </h1>
          {unreadCount > 0 && (
            <p className="text-lg text-gray-600">
              You have {unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}
            </p>
          )}
        </div>

        {/* Filters and Actions */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('unread')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === 'unread'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Unread {unreadCount > 0 && `(${unreadCount})`}
              </button>
            </div>

            {unreadCount > 0 && (
              <button
                onClick={markAllAsRead}
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                <CheckCheck className="h-5 w-5" />
                <span>Mark all as read</span>
              </button>
            )}
          </div>
        </div>

        {/* Notifications List */}
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : notifications.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <Bell className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">
              {filter === 'unread' ? 'No unread notifications' : 'No notifications yet'}
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {notifications.map((notification) => {
              const iconData = getNotificationIcon(notification.type);
              const Icon = iconData.icon;

              return (
                <div
                  key={notification.id}
                  className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-4 ${
                    !notification.is_read ? 'border-l-4 border-blue-500' : ''
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    {/* Icon */}
                    <div className={`flex-shrink-0 h-12 w-12 rounded-full ${iconData.bg} flex items-center justify-center`}>
                      <Icon className={`h-6 w-6 ${iconData.color}`} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-900 font-medium">
                        {getNotificationText(notification)}
                      </p>
                      {notification.content && (
                        <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                          {notification.content}
                        </p>
                      )}
                      <p className="text-gray-400 text-sm mt-1">
                        {new Date(notification.created_at).toLocaleString()}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-2">
                      {!notification.is_read && (
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="Mark as read"
                        >
                          <CheckCheck className="h-5 w-5" />
                        </button>
                      )}
                      <button
                        onClick={() => deleteNotification(notification.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
