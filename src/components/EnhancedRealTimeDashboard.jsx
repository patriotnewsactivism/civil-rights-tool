import React, { useState, useEffect } from 'react';
import { TrendingUp, AlertTriangle, Clock, MapPin, Users, Scale, ExternalLink, BookOpen, Globe, Filter, Search, Star } from 'lucide-react';
import LegislativeTrackerAPI from '../services/LegislativeTrackerAPI';
import NewsAggregatorAPI from '../services/NewsAggregatorAPI';
import WTPNewsAPI from '../services/WTPNewsAPI';
import SponsoredSection from './SponsoredSection';

const EnhancedRealTimeDashboard = ({ darkMode }) => {
  const [legislativeUpdates, setLegislativeUpdates] = useState([]);
  const [newsUpdates, setNewsUpdates] = useState([]);
  const [breakingAlerts, setBreakingAlerts] = useState([]);
  const [wtpNewsArticles, setWtpNewsArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedState, setSelectedState] = useState('ALL');
  const [filterType, setFilterType] = useState('all'); // 'all', 'legislative', 'news', 'breaking'
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadInitialData();
    subscribeToUpdates();
  }, [selectedState]);

  const loadInitialData = async () => {
    setIsLoading(true);
    
    try {
      // Load WTP News (priority content)
      const wtpArticles = WTPNewsAPI.getAllArticles();
      setWtpNewsArticles(wtpArticles);

      // Load legislative updates
      const bills = await LegislativeTrackerAPI.getBillsByState(selectedState);
      setLegislativeUpdates(bills.slice(0, 10));

      // Load news updates from external API
      const news = await NewsAggregatorAPI.getLatestCivilRightsNews(15);
      
      // Merge WTP News with regular news (WTP News first, they're featured)
      const combinedNews = [...wtpArticles, ...news];
      setNewsUpdates(combinedNews);

      // Load breaking alerts - combine WTP breaking news with regular alerts
      const wtpBreaking = WTPNewsAPI.getBreakingNews();
      const alerts = await NewsAggregatorAPI.getBreakingAlerts(8);
      setBreakingAlerts([...wtpBreaking, ...alerts]);
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
      setNewsUpdates(prev => [update, ...prev.slice(0, 14)]);
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

  const filteredLegislativeUpdates = legislativeUpdates.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredNewsUpdates = newsUpdates.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredBreakingAlerts = breakingAlerts.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openExternalLink = (url) => {
    if (url && url !== '#' && !url.includes('example.com')) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const openBillDetails = (billId) => {
    // Open bill details in new window
    const billUrl = `https://legiscan.com/bill/${billId}`;
    window.open(billUrl, '_blank', 'noopener,noreferrer');
  };

  const openNewsSource = (article) => {
    if (article.url && article.url !== '#' && !article.url.includes('example.com')) {
      window.open(article.url, '_blank', 'noopener,noreferrer');
    } else {
      // If no real URL, show a modal with more details
      alert(`Article: ${article.title}\n\nSource: ${article.source?.name || 'Unknown'}\nPublished: ${new Date(article.publishedAt).toLocaleDateString()}\n\nDescription: ${article.description || 'No description available'}\n\nNote: This is a demo article. In production, this would link to the full article.`);
    }
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
      {/* Sponsored Banner */}
      <SponsoredSection placement="banner" />

      {/* Header with Search and Filters */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Real-Time Civil Rights Monitor</h2>
          <p className="text-white/70">Live updates on legislation, news, and developments</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
            <input
              type="text"
              placeholder="Search updates..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400"
            />
          </div>
          
          {/* Filter */}
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400"
          >
            <option value="all">All Updates</option>
            <option value="legislative">Legislative Only</option>
            <option value="news">News Only</option>
            <option value="breaking">Breaking Only</option>
          </select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm">Active Bills</p>
              <p className="text-2xl font-bold text-white">{filteredLegislativeUpdates.length}</p>
            </div>
            <Scale className="h-8 w-8 text-blue-400" />
          </div>
        </div>
        
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm">Breaking News</p>
              <p className="text-2xl font-bold text-white">{filteredBreakingAlerts.length}</p>
            </div>
            <AlertTriangle className="h-8 w-8 text-red-400" />
          </div>
        </div>
        
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm">Latest Updates</p>
              <p className="text-2xl font-bold text-white">{filteredNewsUpdates.length}</p>
            </div>
            <Clock className="h-8 w-8 text-green-400" />
          </div>
        </div>
        
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm">Sources Active</p>
              <p className="text-2xl font-bold text-white">25+</p>
            </div>
            <Globe className="h-8 w-8 text-purple-400" />
          </div>
        </div>
      </div>

      {/* Legislative Updates */}
      {(filterType === 'all' || filterType === 'legislative') && (
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white flex items-center">
              <Scale className="h-5 w-5 mr-2" />
              Legislative Updates
            </h3>
            <button
              onClick={() => setFilterType('legislative')}
              className="text-blue-400 hover:text-blue-300 text-sm flex items-center"
            >
              <Filter className="h-4 w-4 mr-1" />
              Filter
            </button>
          </div>
          
          <div className="space-y-3">
            {filteredLegislativeUpdates.map((bill, index) => (
              <div key={index} className="border-l-4 border-blue-400 pl-4 bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold text-white">{bill.title}</h4>
                    <span className="text-xs bg-white/20 text-white px-2 py-1 rounded">
                      {bill.number}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm px-2 py-1 rounded ${getStatusColor(bill.status)} bg-white/10`}>
                      {bill.status}
                    </span>
                    <button
                      onClick={() => openBillDetails(bill.bill_id)}
                      className="text-blue-400 hover:text-blue-300 p-1"
                      title="View full bill details"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                <p className="text-white/70 text-sm mb-2">
                  {bill.sponsor} • {bill.state}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-xs">
                    {new Date(bill.status_date).toLocaleDateString()}
                  </span>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => {
                        // Copy bill number to clipboard
                        navigator.clipboard.writeText(bill.number);
                        alert(`Copied ${bill.number} to clipboard`);
                      }}
                      className="text-white/60 hover:text-white text-xs flex items-center"
                    >
                      <BookOpen className="h-3 w-3 mr-1" />
                      Copy Bill #
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* News Updates */}
      {(filterType === 'all' || filterType === 'news') && (
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              Latest News
            </h3>
            <button
              onClick={() => setFilterType('news')}
              className="text-blue-400 hover:text-blue-300 text-sm flex items-center"
            >
              <Filter className="h-4 w-4 mr-1" />
              Filter
            </button>
          </div>
          
          <div className="space-y-3">
            {filteredNewsUpdates.map((news, index) => {
              const isWTPNews = news.source === 'We The People News' || news.sponsored;
              const isFeatured = news.featured;
              
              return (
                <div 
                  key={index} 
                  className={`border-l-4 pl-4 rounded-lg p-4 hover:bg-white/10 transition-colors cursor-pointer group ${
                    isWTPNews 
                      ? 'border-red-500 bg-gradient-to-r from-red-900/20 via-blue-900/20 to-transparent' 
                      : 'border-green-400 bg-white/5'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1 mr-2">
                      <div className="flex items-center space-x-2 mb-1">
                        {isWTPNews && (
                          <span className="text-xs font-bold bg-red-600 text-white px-2 py-1 rounded flex items-center">
                            <Star className="h-3 w-3 mr-1 fill-current" />
                            WTP NEWS
                          </span>
                        )}
                        {isFeatured && !isWTPNews && (
                          <span className="text-xs font-semibold bg-yellow-600 text-white px-2 py-1 rounded">
                            FEATURED
                          </span>
                        )}
                        {news.category && (
                          <span className="text-xs bg-white/20 text-white px-2 py-1 rounded">
                            {news.category}
                          </span>
                        )}
                      </div>
                      <h4 className="font-semibold text-white group-hover:text-blue-300 transition-colors">
                        {news.title}
                      </h4>
                    </div>
                    <button
                      onClick={() => openNewsSource(news)}
                      className="text-blue-400 hover:text-blue-300 p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      title="Read full article"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                  
                  <p className="text-white/70 text-sm mb-2 line-clamp-2">
                    {news.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className={`text-xs flex items-center ${isWTPNews ? 'text-red-400 font-semibold' : 'text-white/60'}`}>
                        <Globe className="h-3 w-3 mr-1" />
                        {news.source?.name || news.source || 'Unknown Source'}
                      </span>
                      <span className="text-white/60 text-xs">
                        {new Date(news.publishedAt).toLocaleDateString()}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {news.url && news.url !== '#' && !news.url.includes('example.com') && (
                        <button
                          onClick={() => openNewsSource(news)}
                          className="text-blue-400 hover:text-blue-300 text-xs flex items-center"
                        >
                          <BookOpen className="h-3 w-3 mr-1" />
                          Read More
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Breaking Alerts */}
      {filteredBreakingAlerts.length > 0 && (filterType === 'all' || filterType === 'breaking') && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2 text-red-400" />
              Breaking Alerts
            </h3>
            <button
              onClick={() => setFilterType('breaking')}
              className="text-red-400 hover:text-red-300 text-sm flex items-center"
            >
              <Filter className="h-4 w-4 mr-1" />
              Filter
            </button>
          </div>
          
          <div className="space-y-3">
            {filteredBreakingAlerts.map((alert, index) => (
              <div key={index} className="bg-red-500/5 rounded-lg p-4 hover:bg-red-500/10 transition-colors cursor-pointer group">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-white group-hover:text-red-300 transition-colors flex-1 mr-2">
                    {alert.title}
                  </h4>
                  <button
                    onClick={() => openNewsSource(alert)}
                    className="text-red-400 hover:text-red-300 p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Read full story"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
                
                <p className="text-white/80 text-sm mb-2">
                  {alert.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-white/60 text-xs flex items-center">
                      <Globe className="h-3 w-3 mr-1" />
                      {alert.source?.name || 'Breaking News'}
                    </span>
                    <span className="text-white/60 text-xs">
                      {new Date(alert.publishedAt).toLocaleTimeString()}
                    </span>
                  </div>
                  
                  {alert.url && alert.url !== '#' && !alert.url.includes('example.com') && (
                    <button
                      onClick={() => openNewsSource(alert)}
                      className="text-red-400 hover:text-red-300 text-xs flex items-center"
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Full Story
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* No Results Message */}
      {filteredLegislativeUpdates.length === 0 && filteredNewsUpdates.length === 0 && filteredBreakingAlerts.length === 0 && (
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 text-center">
          <Search className="h-12 w-12 text-white/50 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">No Updates Found</h3>
          <p className="text-white/70">
            {searchTerm ? `No results found for "${searchTerm}"` : 'No updates match your current filter settings.'}
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setFilterType('all');
            }}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default EnhancedRealTimeDashboard;