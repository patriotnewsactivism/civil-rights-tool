import React, { useState, useEffect } from 'react';
import { Radio, AlertTriangle, Clock, MapPin, Filter, Volume2, Users, TrendingUp, Eye, Phone } from 'lucide-react';

const RealTimeDashboard = () => {
  const [activeCalls, setActiveCalls] = useState([]);
  const [scannerFeeds, setScannerFeeds] = useState([]);
  const [recentViolations, setRecentViolations] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedCity, setSelectedCity] = useState('all');
  const [isLiveMode, setIsLiveMode] = useState(true);

  // Mock real-time data
  useEffect(() => {
    const mockActiveCalls = [
      {
        id: 1,
        type: 'Traffic Stop',
        location: 'Downtown Los Angeles, CA',
        coordinates: '34.0522°N, 118.2437°W',
        time: '2 minutes ago',
        priority: 'high',
        units: ['Unit 23A', 'Unit 45B'],
        status: 'in-progress',
        description: 'Vehicle stop for traffic violation',
        frequency: '154.755 MHz'
      },
      {
        id: 2,
        type: 'Civil Rights Incident',
        location: 'Chicago Loop, IL',
        coordinates: '41.8781°N, 87.6298°W',
        time: '5 minutes ago',
        priority: 'urgent',
        units: ['Unit 12C', 'Supervisor 7'],
        status: 'investigating',
        description: 'Report of excessive force during arrest',
        frequency: '155.475 MHz'
      },
      {
        id: 3,
        type: 'First Amendment Activity',
        location: 'Times Square, NYC',
        coordinates: '40.7580°N, 73.9855°W',
        time: '8 minutes ago',
        priority: 'medium',
        units: ['Unit 34D'],
        status: 'monitoring',
        description: 'Peaceful protest monitoring',
        frequency: '154.430 MHz'
      },
      {
        id: 4,
        type: 'Search Warrant Execution',
        location: 'Miami Beach, FL',
        coordinates: '25.7617°N, 80.1918°W',
        time: '12 minutes ago',
        priority: 'high',
        units: ['SWAT Team', 'Unit 56E'],
        status: 'active',
        description: 'Warrant execution in progress',
        frequency: '154.920 MHz'
      },
      {
        id: 5,
        type: 'Disturbance Call',
        location: 'Houston Center, TX',
        coordinates: '29.7604°N, 95.3698°W',
        time: '15 minutes ago',
        priority: 'medium',
        units: ['Unit 78F'],
        status: 'responding',
        description: 'Domestic disturbance call',
        frequency: '155.370 MHz'
      }
    ];

    const mockScannerFeeds = [
      {
        id: 1,
        city: 'Los Angeles',
        state: 'CA',
        frequency: '154.755 MHz',
        listeners: 1247,
        status: 'live',
        department: 'LAPD',
        feedUrl: 'https://broadcastify.com/listen/feed/1234',
        lastActivity: '30 seconds ago'
      },
      {
        id: 2,
        city: 'Chicago',
        state: 'IL',
        frequency: '155.475 MHz',
        listeners: 892,
        status: 'live',
        department: 'CPD',
        feedUrl: 'https://broadcastify.com/listen/feed/5678',
        lastActivity: '1 minute ago'
      },
      {
        id: 3,
        city: 'New York',
        state: 'NY',
        frequency: '154.430 MHz',
        listeners: 2156,
        status: 'live',
        department: 'NYPD',
        feedUrl: 'https://broadcastify.com/listen/feed/9012',
        lastActivity: '45 seconds ago'
      },
      {
        id: 4,
        city: 'Miami',
        state: 'FL',
        frequency: '154.920 MHz',
        listeners: 634,
        status: 'live',
        department: 'Miami PD',
        feedUrl: 'https://broadcastify.com/listen/feed/3456',
        lastActivity: '2 minutes ago'
      },
      {
        id: 5,
        city: 'Houston',
        state: 'TX',
        frequency: '155.370 MHz',
        listeners: 743,
        status: 'live',
        department: 'HPD',
        feedUrl: 'https://broadcastify.com/listen/feed/7890',
        lastActivity: '1 minute ago'
      }
    ];

    const mockViolations = [
      {
        id: 1,
        type: 'Unlawful Search',
        location: 'Los Angeles, CA',
        time: '1 hour ago',
        status: 'investigating',
        reportedBy: 'Citizen Report',
        caseNumber: 'CR-2025-001234'
      },
      {
        id: 2,
        type: 'Excessive Force',
        location: 'Chicago, IL',
        time: '3 hours ago',
        status: 'filed',
        reportedBy: 'Witness',
        caseNumber: 'CR-2025-001235'
      },
      {
        id: 3,
        type: 'First Amendment Violation',
        location: 'Miami, FL',
        time: '6 hours ago',
        status: 'resolved',
        reportedBy: 'ACLU',
        caseNumber: 'CR-2025-001236'
      },
      {
        id: 4,
        type: 'Recording Rights Violation',
        location: 'New York, NY',
        time: '8 hours ago',
        status: 'under-review',
        reportedBy: 'Journalist',
        caseNumber: 'CR-2025-001237'
      },
      {
        id: 5,
        type: 'Unlawful Detention',
        location: 'Houston, TX',
        time: '12 hours ago',
        status: 'investigating',
        reportedBy: 'Legal Aid',
        caseNumber: 'CR-2025-001238'
      }
    ];

    setActiveCalls(mockActiveCalls);
    setScannerFeeds(mockScannerFeeds);
    setRecentViolations(mockViolations);

    // Simulate real-time updates
    const interval = setInterval(() => {
      if (isLiveMode) {
        // Update timestamps
        setActiveCalls(prev => prev.map(call => ({
          ...call,
          time: updateTimeStamp(call.time)
        })));
      }
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, [isLiveMode]);

  const updateTimeStamp = (currentTime) => {
    const match = currentTime.match(/(\d+) minutes? ago/);
    if (match) {
      const minutes = parseInt(match[1]) + 1;
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    }
    return currentTime;
  };

  const filteredCalls = activeCalls.filter(call => {
    const matchesFilter = selectedFilter === 'all' || call.priority === selectedFilter;
    const matchesCity = selectedCity === 'all' || call.location.includes(selectedCity);
    return matchesFilter && matchesCity;
  });

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'urgent': return 'bg-red-600 text-white';
      case 'high': return 'bg-orange-600 text-white';
      case 'medium': return 'bg-yellow-600 text-white';
      case 'low': return 'bg-gray-600 text-white';
      default: return 'bg-gray-600 text-white';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'in-progress': return 'text-red-400';
      case 'investigating': return 'text-orange-400';
      case 'monitoring': return 'text-blue-400';
      case 'active': return 'text-red-400';
      case 'responding': return 'text-yellow-400';
      case 'resolved': return 'text-green-400';
      case 'filed': return 'text-blue-400';
      case 'under-review': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  const cities = ['all', 'Los Angeles', 'Chicago', 'New York', 'Miami', 'Houston'];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Radio className="w-8 h-8 text-red-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">Real-Time Police Monitoring</h2>
            <p className="text-gray-300 text-sm">Live scanner feeds and civil rights incident tracking</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsLiveMode(!isLiveMode)}
            className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
              isLiveMode 
                ? 'bg-red-600 hover:bg-red-700 text-white' 
                : 'bg-gray-600 hover:bg-gray-700 text-white'
            }`}
          >
            <div className={`w-2 h-2 rounded-full ${isLiveMode ? 'bg-white animate-pulse' : 'bg-gray-400'}`} />
            {isLiveMode ? 'LIVE' : 'PAUSED'}
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-400" />
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="px-3 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
          >
            <option value="all">All Priorities</option>
            <option value="urgent">Urgent</option>
            <option value="high">High Priority</option>
            <option value="medium">Medium</option>
            <option value="low">Low Priority</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-gray-400" />
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="px-3 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
          >
            {cities.map(city => (
              <option key={city} value={city}>
                {city === 'all' ? 'All Cities' : city}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Calls */}
        <div className="lg:col-span-2">
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-600/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-400" />
                Active Calls
                <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                  {filteredCalls.length}
                </span>
              </h3>
              <div className="text-sm text-gray-400">
                Last updated: {new Date().toLocaleTimeString()}
              </div>
            </div>
            
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {filteredCalls.map(call => (
                <div key={call.id} className="bg-gray-700/50 p-4 rounded-lg border border-gray-600/30">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-3">
                      <h4 className="font-semibold text-white">{call.type}</h4>
                      <span className={`text-xs px-2 py-1 rounded ${getPriorityColor(call.priority)}`}>
                        {call.priority.toUpperCase()}
                      </span>
                      <span className={`text-xs font-medium ${getStatusColor(call.status)}`}>
                        {call.status.replace('-', ' ').toUpperCase()}
                      </span>
                    </div>
                    <div className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {call.time}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-gray-300 flex items-start gap-1">
                        <MapPin className="w-3 h-3 mt-1 flex-shrink-0" />
                        {call.location}
                      </p>
                      <p className="text-gray-400 text-xs ml-4">{call.coordinates}</p>
                    </div>
                    <div>
                      <p className="text-gray-300 flex items-center gap-1">
                        <Radio className="w-3 h-3" />
                        {call.frequency}
                      </p>
                      <p className="text-gray-400 text-xs">Units: {call.units.join(', ')}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mt-2 italic">{call.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scanner Feeds */}
        <div className="space-y-6">
          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-600/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Volume2 className="w-5 h-5 text-green-400" />
              Live Scanner Feeds
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {scannerFeeds.map(feed => (
                <div key={feed.id} className="bg-gray-700/50 p-3 rounded border border-gray-600/30">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-medium text-white text-sm">{feed.department}</h4>
                      <p className="text-gray-300 text-xs">{feed.city}, {feed.state}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-xs">LIVE</span>
                    </div>
                  </div>
                  
                  <div className="text-xs text-gray-400 mb-2">
                    <p>Frequency: {feed.frequency}</p>
                    <p className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {feed.listeners} listeners
                    </p>
                    <p>Last activity: {feed.lastActivity}</p>
                  </div>
                  
                  <a
                    href={feed.feedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-xs"
                  >
                    <Volume2 className="w-3 h-3" />
                    Listen Live
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Violations */}
          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-600/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-400" />
              Recent Violations
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {recentViolations.map(violation => (
                <div key={violation.id} className="bg-gray-700/50 p-3 rounded border border-gray-600/30">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-medium text-white text-sm">{violation.type}</h4>
                    <span className={`text-xs px-2 py-1 rounded ${getStatusColor(violation.status)} bg-gray-600`}>
                      {violation.status.replace('-', ' ')}
                    </span>
                  </div>
                  
                  <div className="text-xs text-gray-400">
                    <p className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {violation.location}
                    </p>
                    <p className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {violation.time}
                    </p>
                    <p>Reported by: {violation.reportedBy}</p>
                    <p>Case: {violation.caseNumber}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-blue-800/30 p-4 rounded-lg border border-blue-600/30 text-center">
          <div className="text-2xl font-bold text-blue-300">{activeCalls.length}</div>
          <div className="text-sm text-blue-200">Active Calls</div>
        </div>
        <div className="bg-green-800/30 p-4 rounded-lg border border-green-600/30 text-center">
          <div className="text-2xl font-bold text-green-300">{scannerFeeds.length}</div>
          <div className="text-sm text-green-200">Live Feeds</div>
        </div>
        <div className="bg-yellow-800/30 p-4 rounded-lg border border-yellow-600/30 text-center">
          <div className="text-2xl font-bold text-yellow-300">{recentViolations.length}</div>
          <div className="text-sm text-yellow-200">Recent Reports</div>
        </div>
        <div className="bg-purple-800/30 p-4 rounded-lg border border-purple-600/30 text-center">
          <div className="text-2xl font-bold text-purple-300">
            {scannerFeeds.reduce((sum, feed) => sum + feed.listeners, 0)}
          </div>
          <div className="text-sm text-purple-200">Total Listeners</div>
        </div>
      </div>
    </div>
  );
};

export default RealTimeDashboard;