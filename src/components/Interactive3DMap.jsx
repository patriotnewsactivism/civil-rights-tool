import React, { useState, useEffect } from 'react';
import { MapPin, Search, Radio, AlertTriangle, Phone, Filter, Clock, Users } from 'lucide-react';

const Interactive3DMap = () => {
  const [selectedState, setSelectedState] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [recentReports, setRecentReports] = useState([]);
  const [activeCalls, setActiveCalls] = useState([]);

  // US States with coordinates and data
  const states = {
    'California': { 
      x: 50, y: 200, 
      violations: 45, 
      scannerFreq: '154.755 MHz',
      liveLink: 'https://broadcastify.com/listen/feed/1234',
      recentIncidents: ['Unlawful search - Los Angeles', 'Excessive force - San Francisco']
    },
    'Texas': { 
      x: 300, y: 280, 
      violations: 38, 
      scannerFreq: '155.370 MHz',
      liveLink: 'https://broadcastify.com/listen/feed/5678',
      recentIncidents: ['Traffic stop violation - Houston', 'First Amendment violation - Dallas']
    },
    'Florida': { 
      x: 450, y: 350, 
      violations: 32, 
      scannerFreq: '154.920 MHz',
      liveLink: 'https://broadcastify.com/listen/feed/9012',
      recentIncidents: ['Police brutality - Miami', 'Unlawful detention - Tampa']
    },
    'New York': { 
      x: 500, y: 120, 
      violations: 41, 
      scannerFreq: '154.430 MHz',
      liveLink: 'https://broadcastify.com/listen/feed/3456',
      recentIncidents: ['Stop and frisk violation - NYC', 'Recording rights violation - Buffalo']
    },
    'Illinois': { 
      x: 350, y: 180, 
      violations: 29, 
      scannerFreq: '155.475 MHz',
      liveLink: 'https://broadcastify.com/listen/feed/7890',
      recentIncidents: ['Civil rights violation - Chicago', 'Unlawful arrest - Springfield']
    }
  };

  // Violation types for reporting
  const violationTypes = [
    'Police Brutality',
    'Unlawful Search',
    'Excessive Force',
    'First Amendment Violation',
    'Unlawful Detention',
    'Recording Rights Violation',
    'Racial Profiling',
    'Stop and Frisk Abuse',
    'Miranda Rights Violation',
    'False Arrest',
    'Civil Rights Violation'
  ];

  // Mock active calls data
  useEffect(() => {
    const mockCalls = [
      { id: 1, type: 'Traffic Stop', location: 'Downtown LA', time: '2 min ago', priority: 'high' },
      { id: 2, type: 'Civil Rights Incident', location: 'Chicago Loop', time: '5 min ago', priority: 'urgent' },
      { id: 3, type: 'Disturbance', location: 'Miami Beach', time: '8 min ago', priority: 'medium' },
      { id: 4, type: 'Traffic Stop', location: 'Manhattan', time: '12 min ago', priority: 'low' },
      { id: 5, type: 'Investigation', location: 'Houston Center', time: '15 min ago', priority: 'medium' }
    ];
    setActiveCalls(mockCalls);

    // Mock recent reports
    const mockReports = [
      { id: 1, type: 'Unlawful Search', location: 'Los Angeles, CA', time: '1 hour ago', status: 'investigating' },
      { id: 2, type: 'Excessive Force', location: 'Chicago, IL', time: '3 hours ago', status: 'filed' },
      { id: 3, type: 'First Amendment', location: 'Miami, FL', time: '6 hours ago', status: 'resolved' }
    ];
    setRecentReports(mockReports);
  }, []);

  const [reportForm, setReportForm] = useState({
    type: '',
    location: '',
    zipCode: '',
    description: '',
    evidence: '',
    witness: ''
  });

  const [showReportForm, setShowReportForm] = useState(false);

  const handleStateClick = (stateName) => {
    setSelectedState(stateName);
  };

  const handleReportSubmit = (e) => {
    e.preventDefault();
    // Add new report to recent reports
    const newReport = {
      id: recentReports.length + 1,
      type: reportForm.type,
      location: `${reportForm.location}, ${reportForm.zipCode}`,
      time: 'Just now',
      status: 'submitted'
    };
    setRecentReports([newReport, ...recentReports]);
    setReportForm({ type: '', location: '', zipCode: '', description: '', evidence: '', witness: '' });
    setShowReportForm(false);
  };

  const filteredCalls = activeCalls.filter(call => 
    activeFilter === 'all' || call.priority === activeFilter
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">🗺️ Interactive Civil Rights Map</h2>
        <button
          onClick={() => setShowReportForm(true)}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
        >
          <AlertTriangle className="w-4 h-4" />
          Report Violation
        </button>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search by city, ZIP code, or state..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <select
          value={activeFilter}
          onChange={(e) => setActiveFilter(e.target.value)}
          className="px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
        >
          <option value="all">All Calls</option>
          <option value="urgent">Urgent</option>
          <option value="high">High Priority</option>
          <option value="medium">Medium</option>
          <option value="low">Low Priority</option>
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Interactive Map */}
        <div className="lg:col-span-2">
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-600/30">
            <h3 className="text-lg font-semibold text-white mb-4">US Civil Rights Violations Map</h3>
            <div className="relative bg-blue-900/30 rounded-lg h-96 overflow-hidden">
              <svg viewBox="0 0 600 400" className="w-full h-full">
                {/* US Map Background */}
                <rect width="600" height="400" fill="#1e3a8a" opacity="0.3" />
                
                {/* State Markers */}
                {Object.entries(states).map(([stateName, data]) => (
                  <g key={stateName}>
                    <circle
                      cx={data.x}
                      cy={data.y}
                      r="8"
                      fill={selectedState === stateName ? "#ef4444" : "#3b82f6"}
                      stroke="#ffffff"
                      strokeWidth="2"
                      className="cursor-pointer hover:fill-red-500 transition-colors"
                      onClick={() => handleStateClick(stateName)}
                    />
                    <text
                      x={data.x}
                      y={data.y - 15}
                      textAnchor="middle"
                      fill="white"
                      fontSize="12"
                      className="pointer-events-none"
                    >
                      {stateName}
                    </text>
                    <text
                      x={data.x}
                      y={data.y + 25}
                      textAnchor="middle"
                      fill="#fbbf24"
                      fontSize="10"
                      className="pointer-events-none"
                    >
                      {data.violations} reports
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </div>

          {/* Selected State Info */}
          {selectedState && (
            <div className="mt-4 bg-blue-800/30 p-4 rounded-lg border border-blue-600/30">
              <h4 className="text-lg font-semibold text-white mb-2">{selectedState} Details</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-blue-200">Violations: <span className="text-white font-semibold">{states[selectedState].violations}</span></p>
                  <p className="text-blue-200">Scanner Freq: <span className="text-white font-semibold">{states[selectedState].scannerFreq}</span></p>
                </div>
                <div>
                  <a 
                    href={states[selectedState].liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 flex items-center gap-1"
                  >
                    <Radio className="w-4 h-4" />
                    Live Scanner Feed
                  </a>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-blue-200 text-sm mb-1">Recent Incidents:</p>
                {states[selectedState].recentIncidents.map((incident, idx) => (
                  <p key={idx} className="text-yellow-300 text-xs">• {incident}</p>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Sidebar */}
        <div className="space-y-4">
          {/* Active Calls */}
          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-600/30">
            <div className="flex items-center gap-2 mb-3">
              <Phone className="w-4 h-4 text-red-400" />
              <h4 className="font-semibold text-white">Active Calls</h4>
              <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">{filteredCalls.length}</span>
            </div>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {filteredCalls.map(call => (
                <div key={call.id} className="bg-gray-700/50 p-2 rounded text-sm">
                  <div className="flex justify-between items-start">
                    <span className="text-white font-medium">{call.type}</span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      call.priority === 'urgent' ? 'bg-red-600 text-white' :
                      call.priority === 'high' ? 'bg-orange-600 text-white' :
                      call.priority === 'medium' ? 'bg-yellow-600 text-white' :
                      'bg-gray-600 text-white'
                    }`}>
                      {call.priority}
                    </span>
                  </div>
                  <p className="text-gray-300 text-xs">{call.location}</p>
                  <p className="text-gray-400 text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {call.time}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Reports */}
          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-600/30">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-4 h-4 text-yellow-400" />
              <h4 className="font-semibold text-white">Recent Reports</h4>
            </div>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {recentReports.map(report => (
                <div key={report.id} className="bg-gray-700/50 p-2 rounded text-sm">
                  <div className="flex justify-between items-start">
                    <span className="text-white font-medium">{report.type}</span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      report.status === 'resolved' ? 'bg-green-600 text-white' :
                      report.status === 'investigating' ? 'bg-blue-600 text-white' :
                      report.status === 'filed' ? 'bg-yellow-600 text-white' :
                      'bg-purple-600 text-white'
                    }`}>
                      {report.status}
                    </span>
                  </div>
                  <p className="text-gray-300 text-xs">{report.location}</p>
                  <p className="text-gray-400 text-xs">{report.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Report Form Modal */}
      {showReportForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-600 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold text-white mb-4">Report Civil Rights Violation</h3>
            <form onSubmit={handleReportSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Violation Type</label>
                <select
                  value={reportForm.type}
                  onChange={(e) => setReportForm({...reportForm, type: e.target.value})}
                  className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
                  required
                >
                  <option value="">Select violation type...</option>
                  {violationTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">City</label>
                  <input
                    type="text"
                    value={reportForm.location}
                    onChange={(e) => setReportForm({...reportForm, location: e.target.value})}
                    className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
                    placeholder="City name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">ZIP Code</label>
                  <input
                    type="text"
                    value={reportForm.zipCode}
                    onChange={(e) => setReportForm({...reportForm, zipCode: e.target.value})}
                    className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
                    placeholder="ZIP code"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
                <textarea
                  value={reportForm.description}
                  onChange={(e) => setReportForm({...reportForm, description: e.target.value})}
                  className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
                  rows="3"
                  placeholder="Describe the incident..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Evidence (URLs, photos, etc.)</label>
                <input
                  type="text"
                  value={reportForm.evidence}
                  onChange={(e) => setReportForm({...reportForm, evidence: e.target.value})}
                  className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
                  placeholder="Evidence links or descriptions"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Witness Information</label>
                <input
                  type="text"
                  value={reportForm.witness}
                  onChange={(e) => setReportForm({...reportForm, witness: e.target.value})}
                  className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
                  placeholder="Witness contact or details"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded transition-colors"
                >
                  Submit Report
                </button>
                <button
                  type="button"
                  onClick={() => setShowReportForm(false)}
                  className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Interactive3DMap;