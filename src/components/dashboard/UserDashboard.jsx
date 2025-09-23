import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext.jsx';
import { 
  User, 
  BookOpen, 
  Map, 
  Bell, 
  FileText, 
  Settings, 
  LogOut, 
  Bookmark, 
  Clock, 
  AlertCircle,
  CheckCircle,
  X
} from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';

const UserDashboard = () => {
  const { user, signOut } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [savedCases, setSavedCases] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationType, setNotificationType] = useState('success');

  // Tabs configuration
  const tabs = [
    { id: 'overview', label: 'Overview', icon: <User className="h-5 w-5" /> },
    { id: 'saved', label: 'Saved Cases', icon: <Bookmark className="h-5 w-5" /> },
    { id: 'history', label: 'Search History', icon: <Clock className="h-5 w-5" /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell className="h-5 w-5" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="h-5 w-5" /> },
  ];

  // Mock data loading
  useEffect(() => {
    const loadUserData = async () => {
      try {
        // Simulate API calls
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Mock data
        setSavedCases([
          { id: 1, title: 'Terry v. Ohio', date: '2023-09-15', circuit: 'Supreme Court' },
          { id: 2, title: 'Floyd v. City of New York', date: '2023-08-22', circuit: '2nd Circuit' },
          { id: 3, title: 'NAACP v. Alabama', date: '2023-07-10', circuit: 'Supreme Court' },
        ]);
        
        setRecentSearches([
          { id: 1, query: 'First Amendment protest rights', date: '2023-09-18', filters: { circuit: '9th Circuit' } },
          { id: 2, query: 'Stop and identify laws', date: '2023-09-15', filters: { state: 'Nevada' } },
          { id: 3, query: 'Qualified immunity', date: '2023-09-10', filters: {} },
        ]);
        
        setNotifications([
          { id: 1, message: 'New case added to your saved collection', date: '2023-09-19', read: false, type: 'info' },
          { id: 2, message: 'Important update to Terry v. Ohio analysis', date: '2023-09-17', read: true, type: 'update' },
          { id: 3, message: 'Circuit split detected on qualified immunity', date: '2023-09-12', read: false, type: 'alert' },
        ]);
      } catch (error) {
        console.error('Error loading user data:', error);
        showToast('Failed to load user data', 'error');
      } finally {
        setLoading(false);
      }
    };
    
    loadUserData();
  }, []);

  const showToast = (message, type = 'success') => {
    setNotificationMessage(message);
    setNotificationType(type);
    setShowNotification(true);
    
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      showToast('Successfully signed out');
    } catch (error) {
      showToast('Failed to sign out', 'error');
    }
  };

  const handleRemoveSavedCase = (id) => {
    setSavedCases(savedCases.filter(item => item.id !== id));
    showToast('Case removed from saved items');
  };

  const handleClearHistory = () => {
    setRecentSearches([]);
    showToast('Search history cleared');
  };

  const handleMarkAllRead = () => {
    setNotifications(notifications.map(item => ({ ...item, read: true })));
    showToast('All notifications marked as read');
  };

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      {/* Toast notification */}
      {showNotification && (
        <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg flex items-center ${
          notificationType === 'success' ? 'bg-green-800 text-green-100' : 
          notificationType === 'error' ? 'bg-red-800 text-red-100' : 
          'bg-blue-800 text-blue-100'
        }`}>
          {notificationType === 'success' ? (
            <CheckCircle className="h-5 w-5 mr-2" />
          ) : (
            <AlertCircle className="h-5 w-5 mr-2" />
          )}
          <span>{notificationMessage}</span>
          <button 
            onClick={() => setShowNotification(false)}
            className="ml-4 text-gray-300 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="md:w-64 flex-shrink-0">
            <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
              <div className="p-4 border-b border-slate-700">
                <div className="flex items-center">
                  <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-white font-medium">{user?.email || 'User'}</h3>
                    <p className="text-xs text-gray-400">Member since {new Date().toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
              
              <nav className="p-2">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                      activeTab === tab.id
                        ? 'bg-blue-900/50 text-blue-300'
                        : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    <span className="mr-3">{tab.icon}</span>
                    {tab.label}
                    {tab.id === 'notifications' && notifications.some(n => !n.read) && (
                      <span className="ml-auto bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {notifications.filter(n => !n.read).length}
                      </span>
                    )}
                  </button>
                ))}
                
                <button
                  onClick={handleSignOut}
                  className="w-full flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-slate-700 hover:text-white mt-4"
                >
                  <LogOut className="h-5 w-5 mr-3" />
                  Sign Out
                </button>
              </nav>
            </div>
          </div>
          
          {/* Main content */}
          <div className="flex-1">
            {loading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : (
              <>
                {activeTab === 'overview' && (
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-6">Dashboard Overview</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <Card
                        title="Saved Cases"
                        icon={<BookOpen className="h-6 w-6 text-blue-400" />}
                        className="bg-slate-800 border-slate-700"
                      >
                        <div className="text-3xl font-bold text-white">{savedCases.length}</div>
                        <p className="text-gray-400 text-sm">Cases in your library</p>
                      </Card>
                      
                      <Card
                        title="Recent Searches"
                        icon={<Clock className="h-6 w-6 text-blue-400" />}
                        className="bg-slate-800 border-slate-700"
                      >
                        <div className="text-3xl font-bold text-white">{recentSearches.length}</div>
                        <p className="text-gray-400 text-sm">Searches in your history</p>
                      </Card>
                      
                      <Card
                        title="Notifications"
                        icon={<Bell className="h-6 w-6 text-blue-400" />}
                        className="bg-slate-800 border-slate-700"
                      >
                        <div className="text-3xl font-bold text-white">{notifications.length}</div>
                        <p className="text-gray-400 text-sm">
                          {notifications.filter(n => !n.read).length} unread
                        </p>
                      </Card>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card
                        title="Recent Saved Cases"
                        icon={<Bookmark className="h-5 w-5 text-blue-400" />}
                        className="bg-slate-800 border-slate-700"
                      >
                        {savedCases.length > 0 ? (
                          <ul className="divide-y divide-slate-700">
                            {savedCases.slice(0, 3).map(item => (
                              <li key={item.id} className="py-2">
                                <div className="flex justify-between">
                                  <div>
                                    <p className="text-white font-medium">{item.title}</p>
                                    <p className="text-xs text-gray-400">{item.circuit} • Saved on {item.date}</p>
                                  </div>
                                  <button
                                    onClick={() => setActiveTab('saved')}
                                    className="text-blue-400 hover:text-blue-300 text-sm"
                                  >
                                    View
                                  </button>
                                </div>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-gray-400 py-4 text-center">No saved cases yet</p>
                        )}
                        
                        <div className="mt-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setActiveTab('saved')}
                            fullWidth
                          >
                            View All Saved Cases
                          </Button>
                        </div>
                      </Card>
                      
                      <Card
                        title="Recent Notifications"
                        icon={<Bell className="h-5 w-5 text-blue-400" />}
                        className="bg-slate-800 border-slate-700"
                      >
                        {notifications.length > 0 ? (
                          <ul className="divide-y divide-slate-700">
                            {notifications.slice(0, 3).map(item => (
                              <li key={item.id} className="py-2">
                                <div className="flex">
                                  <div className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 mr-2 ${
                                    item.read ? 'bg-transparent' : 
                                    item.type === 'alert' ? 'bg-red-500' : 
                                    item.type === 'update' ? 'bg-yellow-500' : 
                                    'bg-blue-500'
                                  }`} />
                                  <div>
                                    <p className={`font-medium ${item.read ? 'text-gray-400' : 'text-white'}`}>
                                      {item.message}
                                    </p>
                                    <p className="text-xs text-gray-500">{item.date}</p>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-gray-400 py-4 text-center">No notifications</p>
                        )}
                        
                        <div className="mt-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setActiveTab('notifications')}
                            fullWidth
                          >
                            View All Notifications
                          </Button>
                        </div>
                      </Card>
                    </div>
                  </div>
                )}
                
                {activeTab === 'saved' && (
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-6">Saved Cases</h2>
                    
                    {savedCases.length > 0 ? (
                      <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden">
                        <ul className="divide-y divide-slate-700">
                          {savedCases.map(item => (
                            <li key={item.id} className="p-4">
                              <div className="flex justify-between items-center">
                                <div>
                                  <h3 className="text-lg font-medium text-white">{item.title}</h3>
                                  <p className="text-sm text-gray-400">{item.circuit} • Saved on {item.date}</p>
                                </div>
                                <div className="flex space-x-2">
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => {}}
                                  >
                                    View Case
                                  </Button>
                                  <Button
                                    variant="danger"
                                    size="sm"
                                    onClick={() => handleRemoveSavedCase(item.id)}
                                  >
                                    Remove
                                  </Button>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 text-center">
                        <BookOpen className="h-12 w-12 mx-auto text-gray-500 mb-4" />
                        <h3 className="text-lg font-medium text-white mb-2">No saved cases</h3>
                        <p className="text-gray-400 mb-4">You haven't saved any cases yet.</p>
                        <Button
                          variant="primary"
                          onClick={() => {}}
                        >
                          Browse Cases
                        </Button>
                      </div>
                    )}
                  </div>
                )}
                
                {activeTab === 'history' && (
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-bold text-white">Search History</h2>
                      {recentSearches.length > 0 && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={handleClearHistory}
                        >
                          Clear History
                        </Button>
                      )}
                    </div>
                    
                    {recentSearches.length > 0 ? (
                      <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden">
                        <ul className="divide-y divide-slate-700">
                          {recentSearches.map(item => (
                            <li key={item.id} className="p-4">
                              <div>
                                <div className="flex items-center mb-1">
                                  <Search className="h-4 w-4 text-gray-400 mr-2" />
                                  <h3 className="text-lg font-medium text-white">{item.query}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-2">
                                  {Object.entries(item.filters).map(([key, value]) => (
                                    <span key={key} className="px-2 py-1 bg-slate-700 text-gray-300 rounded-md text-xs">
                                      {key}: {value}
                                    </span>
                                  ))}
                                </div>
                                <p className="text-sm text-gray-400">Searched on {item.date}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 text-center">
                        <Clock className="h-12 w-12 mx-auto text-gray-500 mb-4" />
                        <h3 className="text-lg font-medium text-white mb-2">No search history</h3>
                        <p className="text-gray-400">Your search history will appear here.</p>
                      </div>
                    )}
                  </div>
                )}
                
                {activeTab === 'notifications' && (
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-bold text-white">Notifications</h2>
                      {notifications.some(n => !n.read) && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={handleMarkAllRead}
                        >
                          Mark All as Read
                        </Button>
                      )}
                    </div>
                    
                    {notifications.length > 0 ? (
                      <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden">
                        <ul className="divide-y divide-slate-700">
                          {notifications.map(item => (
                            <li key={item.id} className={`p-4 ${!item.read ? 'bg-slate-700/30' : ''}`}>
                              <div className="flex">
                                <div className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 mr-3 ${
                                  item.read ? 'bg-transparent' : 
                                  item.type === 'alert' ? 'bg-red-500' : 
                                  item.type === 'update' ? 'bg-yellow-500' : 
                                  'bg-blue-500'
                                }`} />
                                <div>
                                  <p className={`font-medium ${item.read ? 'text-gray-400' : 'text-white'}`}>
                                    {item.message}
                                  </p>
                                  <p className="text-xs text-gray-500">{item.date}</p>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 text-center">
                        <Bell className="h-12 w-12 mx-auto text-gray-500 mb-4" />
                        <h3 className="text-lg font-medium text-white mb-2">No notifications</h3>
                        <p className="text-gray-400">You're all caught up!</p>
                      </div>
                    )}
                  </div>
                )}
                
                {activeTab === 'settings' && (
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-6">Account Settings</h2>
                    
                    <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden">
                      <div className="p-6">
                        <h3 className="text-lg font-medium text-white mb-4">Profile Information</h3>
                        
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                            <input
                              type="email"
                              value={user?.email || ''}
                              disabled
                              className="w-full bg-slate-700 border border-slate-600 rounded-md text-white py-2 px-3 opacity-70"
                            />
                          </div>
                          
                          <div>
                            <Button
                              variant="outline"
                              onClick={() => showToast('Password reset email sent', 'success')}
                            >
                              Change Password
                            </Button>
                          </div>
                        </div>
                        
                        <hr className="my-6 border-slate-700" />
                        
                        <h3 className="text-lg font-medium text-white mb-4">Notification Preferences</h3>
                        
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-white">Email Notifications</p>
                              <p className="text-sm text-gray-400">Receive updates via email</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" defaultChecked />
                              <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-white">Case Updates</p>
                              <p className="text-sm text-gray-400">Get notified about updates to saved cases</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" defaultChecked />
                              <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-white">Circuit Court Updates</p>
                              <p className="text-sm text-gray-400">Get notified about new circuit court decisions</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" />
                              <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                          </div>
                        </div>
                        
                        <hr className="my-6 border-slate-700" />
                        
                        <h3 className="text-lg font-medium text-white mb-4">Danger Zone</h3>
                        
                        <Button
                          variant="danger"
                          onClick={() => showToast('This feature is not available in the demo', 'error')}
                        >
                          Delete Account
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;