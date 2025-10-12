import React, { useState, useEffect } from 'react';
import { Grid, List, Map, TrendingUp, Users, AlertTriangle, Sparkles, Zap, Brain } from 'lucide-react';
import RealTimeDashboard from './RealTimeDashboard';
import Interactive3DMap from './Interactive3DMap';
import AILegalAssistant from './AILegalAssistant';
import LegislativeTrackerAPI from '../services/LegislativeTrackerAPI';
import NewsAggregatorAPI from '../services/NewsAggregatorAPI';

const UltimateDashboard = ({ darkMode }) => {
  const [activeView, setActiveView] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);
  const [notifications, setNotifications] = useState([]);
  const [aiAssistantOpen, setAiAssistantOpen] = useState(false);

  useEffect(() => {
    initializeDashboard();
    setupRealTimeUpdates();
  }, []);

  const initializeDashboard = async () => {
    setIsLoading(true);
    
    try {
      // Load initial data
      const [legislativeData, newsData] = await Promise.all([
        LegislativeTrackerAPI.getBillsByState('ALL'),
        NewsAggregatorAPI.getLatestCivilRightsNews(5)
      ]);

      // Set up initial notifications
      const initialNotifications = [
        {
          id: 1,
          type: 'info',
          title: 'Dashboard Initialized',
          message: 'Real-time civil rights monitoring is now active',
          timestamp: new Date()
        },
        {
          id: 2,
          type: 'success',
          title: 'New Legislation Detected',
          message: `${legislativeData.length} active bills tracked across all states`,
          timestamp: new Date()
        },
        {
          id: 3,
          type: 'warning',
          title: 'Breaking News Alert',
          message: `${newsData.length} new civil rights developments in the last hour`,
          timestamp: new Date()
        }
      ];

      setNotifications(initialNotifications);
    } catch (error) {
      console.error('Error initializing dashboard:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const setupRealTimeUpdates = () => {
    // Subscribe to legislative updates
    LegislativeTrackerAPI.subscribeToBillUpdates('ALL', (update) => {
      const notification = {
        id: Date.now(),
        type: 'info',
        title: 'Legislative Update',
        message: `Bill ${update.number} status changed to ${update.status}`,
        timestamp: new Date()
      };
      setNotifications(prev => [notification, ...prev.slice(0, 9)]);
    });

    // Subscribe to news updates
    NewsAggregatorAPI.subscribeToNewsUpdates((update) => {
      const notification = {
        id: Date.now(),
        type: 'warning',
        title: 'Breaking News',
        message: update.title,
        timestamp: new Date()
      };
      setNotifications(prev => [notification, ...prev.slice(0, 9)]);
    });
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'success': return <TrendingUp className="h-4 w-4 text-green-400" />;
      case 'warning': return <AlertTriangle className="h-4 w-4 text-yellow-400" />;
      case 'error': return <Zap className="h-4 w-4 text-red-400" />;
      default: return <Brain className="h-4 w-4 text-blue-400" />;
    }
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="text-center py-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg border border-white/10">
        <Sparkles className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-white mb-4">
          Ultimate Civil Rights Command Center
        </h1>
        <p className="text-xl text-white/80 mb-6">
          Real-time monitoring, AI-powered insights, and comprehensive legal intelligence
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => setActiveView('realtime')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center transition-colors"
          >
            <TrendingUp className="h-5 w-5 mr-2" />
            Real-Time Data
          </button>
          <button
            onClick={() => setActiveView('map')}
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg flex items-center transition-colors"
          >
            <Map className="h-5 w-5 mr-2" />
            Interactive Map
          </button>
          <button
            onClick={() => setAiAssistantOpen(true)}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center transition-colors"
          >
            <Brain className="h-5 w-5 mr-2" />
            AI Assistant
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center">
          <TrendingUp className="h-8 w-8 text-green-400 mx-auto mb-3" />
          <h3 className="text-2xl font-bold text-white">127</h3>
          <p className="text-white/70">Active Bills</p>
        </div>
        
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center">
          <AlertTriangle className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
          <h3 className="text-2xl font-bold text-white">23</h3>
          <p className="text-white/70">Breaking Alerts</p>
        </div>
        
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center">
          <Users className="h-8 w-8 text-blue-400 mx-auto mb-3" />
          <h3 className="text-2xl font-bold text-white">50+</h3>
          <p className="text-white/70">States Monitored</p>
        </div>
        
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center">
          <Brain className="h-8 w-8 text-purple-400 mx-auto mb-3" />
          <h3 className="text-2xl font-bold text-white">AI</h3>
          <p className="text-white/70">Legal Assistant</p>
        </div>
      </div>

      {/* Feature Highlights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
          <TrendingUp className="h-10 w-10 text-green-400 mb-4" />
          <h3 className="text-xl font-bold text-white mb-3">Real-Time Tracking</h3>
          <p className="text-white/70 mb-4">
            Monitor legislation, court cases, and news as they happen with live updates every minute.
          </p>
          <ul className="text-white/60 text-sm space-y-1">
            <li>• Live bill tracking</li>
            <li>• Breaking news alerts</li>
            <li>• Court case updates</li>
            <li>• Legislative changes</li>
          </ul>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
          <Map className="h-10 w-10 text-blue-400 mb-4" />
          <h3 className="text-xl font-bold text-white mb-3">Interactive Visualization</h3>
          <p className="text-white/70 mb-4">
            Explore civil rights data through stunning 3D visualizations and interactive maps.
          </p>
          <ul className="text-white/60 text-sm space-y-1">
            <li>• 3D state-by-state map</li>
            <li>• Rights score visualization</li>
            <li>• Trend analysis charts</li>
            <li>• Heat maps and metrics</li>
          </ul>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
          <Brain className="h-10 w-10 text-purple-400 mb-4" />
          <h3 className="text-xl font-bold text-white mb-3">AI Legal Assistant</h3>
          <p className="text-white/70 mb-4">
            Get instant answers to your civil rights questions with our advanced AI legal assistant.
          </p>
          <ul className="text-white/60 text-sm space-y-1">
            <li>• Natural language queries</li>
            <li>• 24/7 availability</li>
            <li>• Multi-state law knowledge</li>
            <li>• Confidence scoring</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderRealTimeView = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Real-Time Civil Rights Monitor</h2>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-green-400 text-sm">Live</span>
        </div>
      </div>
      <RealTimeDashboard darkMode={darkMode} />
    </div>
  );

  const renderMapView = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Interactive Civil Rights Map</h2>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          <span className="text-blue-400 text-sm">3D Mode</span>
        </div>
      </div>
      <Interactive3DMap darkMode={darkMode} />
    </div>
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-white"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Navigation */}
      <div className="flex flex-wrap gap-4 justify-between items-center">
        <div className="flex flex-wrap gap-2">
          {[
            { key: 'overview', label: 'Overview', icon: Grid },
            { key: 'realtime', label: 'Real-Time', icon: TrendingUp },
            { key: 'map', label: 'Interactive Map', icon: Map },
            { key: 'assistant', label: 'AI Assistant', icon: Brain }
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => key === 'assistant' ? setAiAssistantOpen(true) : setActiveView(key)}
              className={`flex items-center px-4 py-2 rounded-lg transition-all ${
                activeView === key 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              <Icon className="h-4 w-4 mr-2" />
              {label}
            </button>
          ))}
        </div>

        {/* Live Indicator */}
        <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-3 py-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-green-400 text-sm font-medium">LIVE</span>
        </div>
      </div>

      {/* Notifications */}
      {notifications.length > 0 && (
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
          <h3 className="text-lg font-bold text-white mb-3 flex items-center">
            <AlertTriangle className="h-5 w-5 mr-2" />
            Recent Updates
          </h3>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {notifications.slice(0, 3).map((notification) => (
              <div key={notification.id} className="flex items-start space-x-3">
                {getNotificationIcon(notification.type)}
                <div className="flex-1">
                  <p className="text-white font-medium text-sm">{notification.title}</p>
                  <p className="text-white/70 text-xs">{notification.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Content */}
      {activeView === 'overview' && renderOverview()}
      {activeView === 'realtime' && renderRealTimeView()}
      {activeView === 'map' && renderMapView()}

      {/* AI Assistant Modal */}
      {aiAssistantOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg w-full max-w-4xl h-3/4 m-4">
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <h3 className="text-xl font-bold text-white flex items-center">
                <Brain className="h-6 w-6 mr-2" />
                AI Legal Assistant
              </h3>
              <button
                onClick={() => setAiAssistantOpen(false)}
                className="text-white/50 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            <div className="h-full">
              <AILegalAssistant darkMode={darkMode} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UltimateDashboard;