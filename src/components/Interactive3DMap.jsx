import React, { useState, useEffect } from 'react';
import { MapPin, TrendingUp, Users, AlertTriangle, Scale, Info, ExternalLink, PlusCircle, Radio, Phone, Clock, Filter } from 'lucide-react';
import { stateProfiles } from '../data/stateProfiles';
import { updatedMarijuanaLaws } from '../data/updatedMarijuanaLaws';
import { comprehensiveRecordingLaws } from '../data/comprehensiveRecordingLaws';

const Interactive3DMap = () => {
  const [selectedState, setSelectedState] = useState(null);
  const [viewMode, setViewMode] = useState('overview');
  const [hoveredState, setHoveredState] = useState(null);
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportData, setReportData] = useState({
    violationType: '',
    description: '',
    evidence: '',
    date: '',
    time: '',
    city: '',
    zipCode: '',
    witnesses: ''
  });
  const [scannerData, setScannerData] = useState({});
  const [activeCalls, setActiveCalls] = useState([]);
  const [callFilter, setCallFilter] = useState('all');
  const [recentReports, setRecentReports] = useState([]);

  // US States with their approximate positions for visualization
  const statePositions = {
    'Alabama': { x: 70, y: 65, code: 'AL' },
    'Alaska': { x: 10, y: 85, code: 'AK' },
    'Arizona': { x: 20, y: 60, code: 'AZ' },
    'Arkansas': { x: 60, y: 60, code: 'AR' },
    'California': { x: 10, y: 45, code: 'CA' },
    'Colorado': { x: 35, y: 50, code: 'CO' },
    'Connecticut': { x: 85, y: 35, code: 'CT' },
    'Delaware': { x: 82, y: 45, code: 'DE' },
    'Florida': { x: 75, y: 80, code: 'FL' },
    'Georgia': { x: 72, y: 68, code: 'GA' },
    'Hawaii': { x: 15, y: 85, code: 'HI' },
    'Idaho': { x: 25, y: 30, code: 'ID' },
    'Illinois': { x: 62, y: 45, code: 'IL' },
    'Indiana': { x: 68, y: 45, code: 'IN' },
    'Iowa': { x: 58, y: 40, code: 'IA' },
    'Kansas': { x: 50, y: 52, code: 'KS' },
    'Kentucky': { x: 70, y: 52, code: 'KY' },
    'Louisiana': { x: 62, y: 72, code: 'LA' },
    'Maine': { x: 88, y: 25, code: 'ME' },
    'Maryland': { x: 80, y: 47, code: 'MD' },
    'Massachusetts': { x: 87, y: 35, code: 'MA' },
    'Michigan': { x: 70, y: 35, code: 'MI' },
    'Minnesota': { x: 55, y: 30, code: 'MN' },
    'Mississippi': { x: 65, y: 68, code: 'MS' },
    'Missouri': { x: 58, y: 52, code: 'MO' },
    'Montana': { x: 30, y: 25, code: 'MT' },
    'Nebraska': { x: 48, y: 45, code: 'NE' },
    'Nevada': { x: 18, y: 48, code: 'NV' },
    'New Hampshire': { x: 87, y: 32, code: 'NH' },
    'New Jersey': { x: 83, y: 42, code: 'NJ' },
    'New Mexico': { x: 32, y: 62, code: 'NM' },
    'New York': { x: 82, y: 35, code: 'NY' },
    'North Carolina': { x: 78, y: 58, code: 'NC' },
    'North Dakota': { x: 48, y: 28, code: 'ND' },
    'Ohio': { x: 72, y: 45, code: 'OH' },
    'Oklahoma': { x: 52, y: 60, code: 'OK' },
    'Oregon': { x: 15, y: 32, code: 'OR' },
    'Pennsylvania': { x: 78, y: 42, code: 'PA' },
    'Rhode Island': { x: 88, y: 37, code: 'RI' },
    'South Carolina': { x: 76, y: 65, code: 'SC' },
    'South Dakota': { x: 48, y: 35, code: 'SD' },
    'Tennessee': { x: 68, y: 58, code: 'TN' },
    'Texas': { x: 48, y: 70, code: 'TX' },
    'Utah': { x: 28, y: 48, code: 'UT' },
    'Vermont': { x: 85, y: 30, code: 'VT' },
    'Virginia': { x: 78, y: 52, code: 'VA' },
    'Washington': { x: 18, y: 25, code: 'WA' },
    'West Virginia': { x: 75, y: 50, code: 'WV' },
    'Wisconsin': { x: 62, y: 35, code: 'WI' },
    'Wyoming': { x: 35, y: 40, code: 'WY' }
  };

  // Violation types for reporting
  const violationTypes = [
    'Police Brutality',
    'Unlawful Search/Seizure',
    'Recording Rights Violation',
    'Free Speech Suppression',
    'Religious Freedom Violation',
    'Press Freedom Violation',
    'Assembly Rights Violation',
    'Discrimination',
    'Excessive Force',
    'Wrongful Arrest',
    'Other Civil Rights Violation'
  ];

  // Scanner frequency data (simplified example - real implementation would fetch from API)
  const scannerFrequencyData = {
    'CA': {
      systems: [
        { name: 'Los Angeles Police Department', frequency: '856.250 MHz', feedUrl: 'https://www.broadcastify.com/listen/feed/1' },
        { name: 'San Francisco Police', frequency: '851.4375 MHz', feedUrl: 'https://www.broadcastify.com/listen/feed/2' },
        { name: 'Oakland Police', frequency: '851.4625 MHz', feedUrl: 'https://www.broadcastify.com/listen/feed/3' }
      ]
    },
    'NY': {
      systems: [
        { name: 'New York Police Department', frequency: '851.0625 MHz', feedUrl: 'https://www.broadcastify.com/listen/feed/4' },
        { name: 'Buffalo Police', frequency: '853.425 MHz', feedUrl: 'https://www.broadcastify.com/listen/feed/5' }
      ]
    },
    'TX': {
      systems: [
        { name: 'Houston Police Department', frequency: '853.325 MHz', feedUrl: 'https://www.broadcastify.com/listen/feed/6' },
        { name: 'Dallas Police', frequency: '851.425 MHz', feedUrl: 'https://www.broadcastify.com/listen/feed/7' }
      ]
    }
  };

  // Get marijuana law status for a state
  const getMarijuanaStatus = (stateName) => {
    const law = updatedMarijuanaLaws?.find(l => l.state === stateName);
    return law?.recreationalStatus || 'Unknown';
  };

  // Get recording law status for a state
  const getRecordingStatus = (stateName) => {
    const law = comprehensiveRecordingLaws?.find(l => l.state === stateName);
    return law?.consentType || 'Unknown';
  };

  // Get state color based on marijuana legalization status
  const getStateColor = (stateName) => {
    const status = getMarijuanaStatus(stateName);
    switch (status.toLowerCase()) {
      case 'legal':
        return 'text-green-400';
      case 'decriminalized':
        return 'text-yellow-400';
      case 'medical only':
        return 'text-blue-400';
      default:
        return 'text-red-400';
    }
  };

  const handleStateClick = (stateName) => {
    setSelectedState(stateName);
    // In a real implementation, we would fetch scanner data and active calls for the selected state
    // For this demo, we'll use sample data
    setScannerData(scannerFrequencyData[statePositions[stateName]?.code] || {});
    setActiveCalls(generateSampleCalls(stateName));
  };

  // Generate sample active calls for demo purposes
  const generateSampleCalls = (stateName) => {
    const callTypes = ['Traffic Stop', 'Domestic Disturbance', 'Assist Officer', 'Theft', 'Medical Emergency', 'Civil Rights Incident'];
    const locations = ['Downtown', 'North District', 'South District', 'West Side', 'East End', 'Central Park'];
    
    return Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      type: callTypes[Math.floor(Math.random() * callTypes.length)],
      location: `${locations[Math.floor(Math.random() * locations.length)]}, ${stateName}`,
      timestamp: new Date(Date.now() - Math.random() * 3600000).toLocaleTimeString(),
      description: `Active call reported at ${new Date(Date.now() - Math.random() * 3600000).toLocaleTimeString()}`
    }));
  };

  // Handle report submission
  const handleReportSubmit = (e) => {
    e.preventDefault();
    
    // In a real implementation, this would send data to a backend service
    const newReport = {
      ...reportData,
      id: Date.now(),
      state: selectedState,
      submittedAt: new Date().toLocaleString()
    };
    
    setRecentReports(prev => [newReport, ...prev.slice(0, 4)]);
    setShowReportModal(false);
    
    // Reset form
    setReportData({
      violationType: '',
      description: '',
      evidence: '',
      date: '',
      time: '',
      city: '',
      zipCode: '',
      witnesses: ''
    });
    
    alert('Civil rights violation report submitted. Thank you for your report. Our team will review it and take appropriate action.');
  };

  const renderStateInfo = () => {
    if (!selectedState) return null;

    const marijuanaLaw = updatedMarijuanaLaws?.find(l => l.state === selectedState);
    const recordingLaw = comprehensiveRecordingLaws?.find(l => l.state === selectedState);
    const stateCode = statePositions[selectedState]?.code;
    const profile = stateProfiles?.[stateCode];

    return (
      <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-gray-900">{selectedState}</h3>
          <button 
            onClick={() => setSelectedState(null)}
            className="text-gray-400 hover:text-gray-600 text-2xl"
          >
            ×
          </button>
        </div>

        {/* Report Violation Button */}
        <button
          onClick={() => setShowReportModal(true)}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center transition-colors"
        >
          <PlusCircle className="h-5 w-5 mr-2" />
          Report Civil Rights Violation
        </button>

        {/* Marijuana Laws */}
        {marijuanaLaw && (
          <div className="border-t pt-4">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
              <Scale className="h-5 w-5 mr-2 text-green-600" />
              Marijuana Laws
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Recreational:</span>
                <span className={`font-medium ${
                  marijuanaLaw.recreationalStatus === 'Legal' ? 'text-green-600' :
                  marijuanaLaw.recreationalStatus === 'Decriminalized' ? 'text-yellow-600' :
                  'text-red-600'
                }`}>
                  {marijuanaLaw.recreationalStatus}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Medical:</span>
                <span className={`font-medium ${
                  marijuanaLaw.medicalStatus === 'Legal' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {marijuanaLaw.medicalStatus}
                </span>
              </div>
              {marijuanaLaw.keyPoints && marijuanaLaw.keyPoints.length > 0 && (
                <div className="mt-2">
                  <p className="text-sm text-gray-600 font-medium mb-1">Key Points:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {marijuanaLaw.keyPoints.slice(0, 3).map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Recording Laws */}
        {recordingLaw && (
          <div className="border-t pt-4">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2 text-blue-600" />
              Recording Laws
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Consent Type:</span>
                <span className={`font-medium ${
                  recordingLaw.consentType === 'One-party' ? 'text-green-600' : 'text-yellow-600'
                }`}>
                  {recordingLaw.consentType}
                </span>
              </div>
              {recordingLaw.summary && (
                <p className="text-sm text-gray-600 mt-2">{recordingLaw.summary}</p>
              )}
            </div>
          </div>
        )}

        {/* Scanner Frequencies */}
        {scannerData.systems && scannerData.systems.length > 0 && (
          <div className="border-t pt-4">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
              <Radio className="h-5 w-5 mr-2 text-purple-600" />
              Police Scanner Frequencies
            </h4>
            <div className="space-y-3">
              {scannerData.systems.map((system, idx) => (
                <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-gray-900">{system.name}</p>
                      <p className="text-sm text-gray-600">{system.frequency}</p>
                    </div>
                    {system.feedUrl && (
                      <a
                        href={system.feedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Listen Live
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Scanner frequencies are provided for informational purposes only. 
              Always comply with local laws when monitoring police communications.
            </p>
          </div>
        )}

        {/* Active Calls */}
        {activeCalls.length > 0 && (
          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-semibold text-gray-900 flex items-center">
                <Phone className="h-5 w-5 mr-2 text-red-600" />
                Recent Active Calls
              </h4>
              <select
                value={callFilter}
                onChange={(e) => setCallFilter(e.target.value)}
                className="text-sm border border-gray-300 rounded px-2 py-1"
              >
                <option value="all">All Types</option>
                <option value="civil">Civil Rights Incidents</option>
                <option value="traffic">Traffic Stops</option>
                <option value="disturbance">Disturbances</option>
              </select>
            </div>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {activeCalls.map((call) => (
                <div key={call.id} className="bg-blue-50 p-2 rounded border border-blue-100">
                  <div className="flex justify-between">
                    <span className="font-medium text-blue-800 text-sm">{call.type}</span>
                    <span className="text-blue-600 text-xs flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {call.timestamp}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">{call.location}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recent Reports */}
        {recentReports.length > 0 && (
          <div className="border-t pt-4">
            <h4 className="font-semibold text-gray-900 mb-2">Recent Violation Reports</h4>
            <div className="space-y-2">
              {recentReports.map((report) => (
                <div key={report.id} className="bg-red-50 p-3 rounded-lg border border-red-100">
                  <p className="font-medium text-red-800 text-sm">{report.violationType}</p>
                  <p className="text-xs text-gray-600">{report.submittedAt}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* State Profile Info */}
        {profile && (
          <div className="border-t pt-4">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
              <Info className="h-5 w-5 mr-2 text-purple-600" />
              Additional Information
            </h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p><strong>Capital:</strong> {profile.capital}</p>
              {profile.legalInfo?.shieldLaw?.exists && (
                <p className="text-green-600">✓ Shield Law Protection Available</p>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Interactive Civil Rights Map</h2>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
          Report violations, monitor police activity, and access civil rights information by state.
        </p>
      </div>

      {/* View Mode Selector */}
      <div className="flex justify-center mb-8">
        <div className="bg-white rounded-lg shadow-lg p-2 flex space-x-2">
          <button
            onClick={() => setViewMode('overview')}
            className={`px-4 py-2 rounded-md font-medium transition-colors flex items-center ${
              viewMode === 'overview'
                ? 'bg-blue-600 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <MapPin className="h-4 w-4 mr-2" />
            Overview
          </button>
          <button
            onClick={() => setViewMode('scanner')}
            className={`px-4 py-2 rounded-md font-medium transition-colors flex items-center ${
              viewMode === 'scanner'
                ? 'bg-purple-600 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Radio className="h-4 w-4 mr-2" />
            Scanner Data
          </button>
          <button
            onClick={() => setViewMode('calls')}
            className={`px-4 py-2 rounded-md font-medium transition-colors flex items-center ${
              viewMode === 'calls'
                ? 'bg-red-600 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Phone className="h-4 w-4 mr-2" />
            Active Calls
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Map Container */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-xl p-8 relative" style={{ minHeight: '600px' }}>
            <div className="relative w-full h-full">
              {/* State Markers */}
              {Object.entries(statePositions).map(([stateName, position]) => (
                <div
                  key={stateName}
                  className={`absolute cursor-pointer transform transition-all duration-200 hover:scale-125 ${
                    selectedState === stateName ? 'scale-150 z-10' : ''
                  }`}
                  style={{
                    left: `${position.x}%`,
                    top: `${position.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  onClick={() => handleStateClick(stateName)}
                  onMouseEnter={() => setHoveredState(stateName)}
                  onMouseLeave={() => setHoveredState(null)}
                >
                  <MapPin 
                    className={`h-6 w-6 ${getStateColor(stateName)} drop-shadow-lg`}
                  />
                  {(hoveredState === stateName || selectedState === stateName) && (
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-20">
                      {stateName}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="bg-white rounded-xl shadow-lg p-6 mt-4">
            <h3 className="font-semibold text-gray-900 mb-4">Map Legend - Marijuana Status</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-400 rounded mr-2"></div>
                <span className="text-sm text-gray-700">Legal</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-yellow-400 rounded mr-2"></div>
                <span className="text-sm text-gray-700">Decriminalized</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-400 rounded mr-2"></div>
                <span className="text-sm text-gray-700">Medical Only</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-red-400 rounded mr-2"></div>
                <span className="text-sm text-gray-700">Illegal</span>
              </div>
            </div>
          </div>
        </div>

        {/* State Information Panel */}
        <div className="lg:col-span-1">
          {renderStateInfo()}
        </div>
      </div>

      {/* Report Violation Modal */}
      {showReportModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-gray-900">Report Civil Rights Violation</h3>
                <button 
                  onClick={() => setShowReportModal(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <form onSubmit={handleReportSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Violation Type
                  </label>
                  <select
                    value={reportData.violationType}
                    onChange={(e) => setReportData({...reportData, violationType: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select violation type</option>
                    {violationTypes.map((type, idx) => (
                      <option key={idx} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      value={reportData.city}
                      onChange={(e) => setReportData({...reportData, city: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter city"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      value={reportData.zipCode}
                      onChange={(e) => setReportData({...reportData, zipCode: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter ZIP code"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      value={reportData.date}
                      onChange={(e) => setReportData({...reportData, date: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Time
                    </label>
                    <input
                      type="time"
                      value={reportData.time}
                      onChange={(e) => setReportData({...reportData, time: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    value={reportData.description}
                    onChange={(e) => setReportData({...reportData, description: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows="4"
                    placeholder="Describe the violation in detail..."
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Evidence (URLs, file names, etc.)
                  </label>
                  <textarea
                    value={reportData.evidence}
                    onChange={(e) => setReportData({...reportData, evidence: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows="2"
                    placeholder="Provide links to evidence, videos, photos, etc."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Witnesses
                  </label>
                  <textarea
                    value={reportData.witnesses}
                    onChange={(e) => setReportData({...reportData, witnesses: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows="2"
                    placeholder="Names and contact information of witnesses (if available)"
                  />
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-medium text-yellow-800 mb-2">Important Information</h4>
                  <p className="text-yellow-700 text-sm">
                    This report will be submitted to appropriate civil rights organizations and legal databases. 
                    Please ensure all information is accurate. False reporting may have legal consequences.
                  </p>
                </div>
                
                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowReportModal(false)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    Submit Report
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Interactive3DMap;