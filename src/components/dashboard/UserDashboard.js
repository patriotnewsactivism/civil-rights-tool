import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../context/AuthContext';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { User, BookOpen, Star, Clock, Bell, Settings, Trash2, AlertCircle } from 'lucide-react';

/**
 * User Dashboard Component
 * 
 * Displays user information, saved cases, and preferences
 */
const UserDashboard = () => {
  const { user, signOut } = useAuth();
  const [savedCases, setSavedCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('saved');
  
  // Fetch user's saved cases
  useEffect(() => {
    const fetchSavedCases = async () => {
      if (!user) return;
      
      try {
        setLoading(true);
        
        // Query saved cases from the user_saved_cases table
        const { data, error } = await supabase
          .from('user_saved_cases')
          .select(`
            id,
            case_id,
            created_at,
            cases:case_id (
              id,
              title,
              court,
              citation,
              jurisdiction,
              date_filed,
              summary,
              document_url,
              tags
            )
          `)
          .eq('user_id', user.id);
        
        if (error) throw error;
        
        // Transform the data to extract the case information
        const transformedData = data.map(item => ({
          savedId: item.id,
          savedAt: item.created_at,
          ...item.cases
        }));
        
        setSavedCases(transformedData);
      } catch (err) {
        console.error('Error fetching saved cases:', err);
        setError('Failed to load your saved cases. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchSavedCases();
  }, [user]);
  
  // Remove a saved case
  const removeSavedCase = async (savedId) => {
    try {
      const { error } = await supabase
        .from('user_saved_cases')
        .delete()
        .eq('id', savedId);
      
      if (error) throw error;
      
      // Update the local state
      setSavedCases(savedCases.filter(item => item.savedId !== savedId));
    } catch (err) {
      console.error('Error removing saved case:', err);
      setError('Failed to remove the saved case. Please try again.');
    }
  };
  
  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return 'Unknown date';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  // Dashboard tabs
  const tabs = [
    { id: 'saved', label: 'Saved Cases', icon: <Star className="h-5 w-5" /> },
    { id: 'recent', label: 'Recent Activity', icon: <Clock className="h-5 w-5" /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell className="h-5 w-5" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="h-5 w-5" /> }
  ];
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* User profile card */}
        <div className="md:w-1/3">
          <Card className="h-full">
            <div className="flex flex-col items-center text-center">
              <div className="h-24 w-24 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                <User className="h-12 w-12 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">{user?.email}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Member since {formatDate(user?.created_at)}</p>
              
              <div className="mt-6 w-full">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={signOut}
                >
                  Sign Out
                </Button>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Dashboard content */}
        <div className="md:w-2/3">
          <Card className="h-full">
            <div className="mb-6">
              <div className="flex border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`flex items-center py-2 px-4 whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
                        : 'text-gray-500 dark:text-gray-400'
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Saved Cases Tab */}
            {activeTab === 'saved' && (
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Your Saved Cases</h3>
                
                {loading ? (
                  <div className="flex items-center justify-center py-12">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                  </div>
                ) : error ? (
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-md text-red-700 dark:text-red-400">
                    <div className="flex">
                      <AlertCircle className="h-5 w-5 mr-2" />
                      <span>{error}</span>
                    </div>
                  </div>
                ) : savedCases.length === 0 ? (
                  <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                    <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-40" />
                    <p>You haven't saved any cases yet.</p>
                    <p className="mt-2 text-sm">When you find interesting cases, save them for quick access.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {savedCases.map((caseItem) => (
                      <motion.div
                        key={caseItem.savedId}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="border border-gray-200 dark:border-gray-700 rounded-md p-4"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white">{caseItem.title}</h4>
                            <div className="flex flex-wrap gap-2 mt-1">
                              {caseItem.court && (
                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                  {caseItem.court}
                                </span>
                              )}
                              {caseItem.date_filed && (
                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                  Filed: {formatDate(caseItem.date_filed)}
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">
                              {caseItem.summary || 'No summary available'}
                            </p>
                          </div>
                          <button
                            onClick={() => removeSavedCase(caseItem.savedId)}
                            className="text-gray-400 hover:text-red-500 dark:hover:text-red-400"
                            title="Remove from saved cases"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                        
                        <div className="mt-3 flex justify-between items-center">
                          <div className="flex flex-wrap gap-1">
                            {caseItem.tags && caseItem.tags.slice(0, 3).map((tag, index) => (
                              <span
                                key={index}
                                className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                              >
                                {tag}
                              </span>
                            ))}
                            {caseItem.tags && caseItem.tags.length > 3 && (
                              <span className="text-xs text-gray-500 dark:text-gray-400">
                                +{caseItem.tags.length - 3} more
                              </span>
                            )}
                          </div>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            Saved on {formatDate(caseItem.savedAt)}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            )}
            
            {/* Recent Activity Tab */}
            {activeTab === 'recent' && (
              <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                <Clock className="h-12 w-12 mx-auto mb-4 opacity-40" />
                <p>Your recent activity will appear here.</p>
                <p className="mt-2 text-sm">We track your searches and case views to help you find relevant information.</p>
              </div>
            )}
            
            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                <Bell className="h-12 w-12 mx-auto mb-4 opacity-40" />
                <p>You have no notifications.</p>
                <p className="mt-2 text-sm">We'll notify you about new cases in your watched jurisdictions.</p>
              </div>
            )}
            
            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Account Settings</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Notifications</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          id="notifications-new-cases"
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="notifications-new-cases" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                          New cases in watched jurisdictions
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="notifications-updates"
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="notifications-updates" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                          Updates to saved cases
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="notifications-newsletter"
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="notifications-newsletter" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                          Weekly civil rights legal newsletter
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Privacy Settings</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          id="privacy-history"
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="privacy-history" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                          Save search history
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="privacy-analytics"
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="privacy-analytics" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                          Allow anonymous usage analytics
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <Button variant="danger" size="sm">
                      Delete Account
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;