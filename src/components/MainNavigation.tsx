import { useState, useEffect } from 'react';
import { Shield, Home, Users, MessageSquare, Bell, Search, MapPin, Scale, BookOpen, TrendingUp, Menu, X, User, LogOut, Camera } from 'lucide-react';
import { supabase } from '../lib/supabase';
import AuthModal from './AuthModal';

interface MainNavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function MainNavigation({ currentPage, onNavigate }: MainNavigationProps) {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [showAuth, setShowAuth] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [unreadNotifications, setUnreadNotifications] = useState(0);
  const [unreadMessages, setUnreadMessages] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadCurrentUser();
  }, []);

  useEffect(() => {
    if (currentUser) {
      loadNotificationCounts();
    }
  }, [currentUser]);

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

  const loadNotificationCounts = async () => {
    if (!currentUser) return;

    try {
      const [notifications, messages] = await Promise.all([
        supabase
          .from('notifications')
          .select('id', { count: 'exact' })
          .eq('user_id', currentUser.id)
          .eq('is_read', false),
        supabase
          .from('private_messages')
          .select('id', { count: 'exact' })
          .eq('recipient_id', currentUser.id)
          .eq('is_read', false)
      ]);

      setUnreadNotifications(notifications.count || 0);
      setUnreadMessages(messages.count || 0);
    } catch (error) {
      console.error('Error loading notification counts:', error);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setCurrentUser(null);
    onNavigate('home');
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'feed', label: 'Feed', icon: MessageSquare },
    { id: 'network', label: 'Network', icon: Users },
    { id: 'press-pass', label: 'Press Pass', icon: Camera },
    { id: 'violations', label: 'Violations', icon: MapPin },
    { id: 'legal', label: 'Legal Tools', icon: Scale },
    { id: 'cases', label: 'Cases', icon: BookOpen },
    { id: 'tracker', label: 'Tracker', icon: TrendingUp },
  ];

  return (
    <>
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hidden sm:block">
                CRN
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="hidden lg:block">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-2">
              {/* Search */}
              <div className="hidden md:block relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent w-48 lg:w-64"
                />
              </div>

              {currentUser ? (
                <>
                  {/* Notifications */}
                  <button
                    onClick={() => onNavigate('notifications')}
                    className="relative p-2 text-gray-700 hover:bg-gray-50 rounded-full"
                  >
                    <Bell className="h-6 w-6" />
                    {unreadNotifications > 0 && (
                      <span className="absolute top-0 right-0 h-5 w-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                        {unreadNotifications > 9 ? '9+' : unreadNotifications}
                      </span>
                    )}
                  </button>

                  {/* Messages */}
                  <button
                    onClick={() => onNavigate('messages')}
                    className="relative p-2 text-gray-700 hover:bg-gray-50 rounded-full"
                  >
                    <MessageSquare className="h-6 w-6" />
                    {unreadMessages > 0 && (
                      <span className="absolute top-0 right-0 h-5 w-5 bg-blue-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                        {unreadMessages > 9 ? '9+' : unreadMessages}
                      </span>
                    )}
                  </button>

                  {/* Profile Dropdown */}
                  <div className="relative group">
                    <button className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-full">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                        {(currentUser.display_name || currentUser.username)[0].toUpperCase()}
                      </div>
                    </button>

                    {/* Dropdown Menu */}
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                      <div className="p-3 border-b border-gray-100">
                        <div className="font-semibold text-gray-900">
                          {currentUser.display_name || currentUser.username}
                        </div>
                        <div className="text-sm text-gray-500">@{currentUser.username}</div>
                      </div>
                      <button
                        onClick={() => onNavigate('profile')}
                        className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center space-x-2"
                      >
                        <User className="h-4 w-4" />
                        <span>My Profile</span>
                      </button>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center space-x-2 text-red-600"
                      >
                        <LogOut className="h-4 w-4" />
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <button
                  onClick={() => setShowAuth(true)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all"
                >
                  Join
                </button>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-gray-700"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2 border-t border-gray-200">
              {/* Mobile Search */}
              <div className="relative px-2 mb-4">
                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </nav>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuth}
        onClose={() => setShowAuth(false)}
        onAuthSuccess={() => {
          setShowAuth(false);
          loadCurrentUser();
          onNavigate('feed');
        }}
      />
    </>
  );
}
