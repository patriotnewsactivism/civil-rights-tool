import React, { useState, useEffect } from 'react';
import { TrendingUp, AlertTriangle, Clock, MapPin, Users, Scale } from 'lucide-react';
import LegislativeTrackerAPI from '../services/LegislativeTrackerAPI';
import NewsAggregatorAPI from '../services/NewsAggregatorAPI';

const RealTimeDashboard = ({ darkMode }) => {
  const [legislativeUpdates, setLegislativeUpdates] = useState([]);
  const [newsUpdates, setNewsUpdates] = useState([]);
  const [breakingAlerts, setBreakingAlerts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedState, setSelectedState] = useState('ALL');

  useEffect(() => {
    loadInitialData();
    subscribeToUpdates();
  }, []);

  const loadInitialData = async () => {
    setIsLoading(true);
    
    try {
      // Load legislative updates
      const bills = await LegislativeTrackerAPI.getBillsByState(selectedState);
      setLegislativeUpdates(bills.slice(0, 10));

      // Load news updates
      const news = await NewsAggregatorAPI.getLatestCivilRightsNews(10);
      setNewsUpdates(news);

      // Load breaking alerts
      const alerts = await NewsAggregatorAPI.getBreakingAlerts(5);
      setBreakingAlerts(alerts);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const subscribeToUpdates = () => {
    // Subscribe to legislative updates
    LegislativeTrackerAPI.subscribeToBillUpdates('ALL', (update) => {
      setLegislativeUpdates(prev => [update, ...prev.slice(0, 9)]);
    });

    // Subscribe to news updates
    NewsAggregatorAPI.subscribeToNewsUpdates((update) => {
      setNewsUpdates(prev => [update, ...prev.slice(0, 9)]);
    });
  };

  const getStatusColor = (status) => {
    const colors = {
      'Signed into Law': 'text-green-400',
      'Passed': 'text-blue-400',
      'In Committee': 'text-yellow-400',
      'On Floor': 'text-purple-400',
      'Failed': 'text-red-400'
    };
    return colors[status] || 'text-white/70';
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Real-Time Civil Rights Dashboard</h2>
        <p className="text-white/70">Live updates on legislation, news, and developments</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm">Active Bills</p>
              <p className="text-2xl font-bold text-white">{legislativeUpdates.length}</p>
            </div>
            <Scale className="h-8 w-8 text-blue-400" />
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm">Breaking News</p>
              <p className="text-2xl font-bold text-white">{breakingAlerts.length}</p>
            </div>
            <AlertTriangle className="h-8 w-8 text-red-400" />
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm">Latest Updates</p>
              <p className="text-2xl font-bold text-white">{newsUpdates.length}</p>
            </div>
            <Clock className="h-8 w-8 text-green-400" />
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm">States Tracking</p>
              <p className="text-2xl font-bold text-white">50+</p>
            </div>
            <MapPin className="h-8 w-8 text-purple-400" />
          </div>
        </div>
      </div>

      {/* Legislative Updates */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <Scale className="h-5 w-5 mr-2" />
          Legislative Updates
        </h3>
        <div className="space-y-3">
          {legislativeUpdates.map((bill, index) => (
            <div key={index} className="border-l-4 border-blue-400 pl-4">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-white">{bill.title}</h4>
                <span className={`text-sm px-2 py-1 rounded ${getStatusColor(bill.status)} bg-white/10`}>
                  {bill.status}
                </span>
              </div>
              <p className="text-white/70 text-sm">{bill.sponsor} • {bill.state}</p>
              <p className="text-white/60 text-xs mt-1">{bill.status_date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* News Updates */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <Clock className="h-5 w-5 mr-2" />
          Latest News
        </h3>
        <div className="space-y-3">
          {newsUpdates.map((news, index) => (
            <div key={index} className="border-l-4 border-green-400 pl-4">
              <h4 className="font-semibold text-white">{news.title}</h4>
              <p className="text-white/70 text-sm">{news.description}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-white/60 text-xs">{news.source.name}</span>
                <span className="text-white/60 text-xs">
                  {new Date(news.publishedAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Breaking Alerts */}
      {breakingAlerts.length > 0 && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <AlertTriangle className="h-5 w-5 mr-2 text-red-400" />
            Breaking Alerts
          </h3>
          <div className="space-y-3">
            {breakingAlerts.map((alert, index) => (
              <div key={index} className="bg-red-500/5 rounded-lg p-4">
                <h4 className="font-semibold text-white">{alert.title}</h4>
                <p className="text-white/70 text-sm">{alert.description}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-white/60 text-xs">{alert.source.name}</span>
                  <span className="text-white/60 text-xs">
                    {new Date(alert.publishedAt).toLocaleTimeString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RealTimeDashboard;