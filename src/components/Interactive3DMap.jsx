import React, { useState, useEffect } from 'react';
import { MapPin, TrendingUp, Users, AlertTriangle, Scale, Info, ExternalLink } from 'lucide-react';
import { stateProfiles } from '../data/stateProfiles';
import { updatedMarijuanaLaws } from '../data/updatedMarijuanaLaws';
import { comprehensiveRecordingLaws } from '../data/comprehensiveRecordingLaws';

const Interactive3DMap = () => {
  const [selectedState, setSelectedState] = useState(null);
  const [viewMode, setViewMode] = useState('overview');
  const [hoveredState, setHoveredState] = useState(null);

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
  };

  const renderStateInfo = () => {
    if (!selectedState) return null;

    const marijuanaLaw = updatedMarijuanaLaws?.find(l => l.state === selectedState);
    const recordingLaw = comprehensiveRecordingLaws?.find(l => l.state === selectedState);
    const stateCode = statePositions[selectedState]?.code;
    const profile = stateProfiles?.[stateCode];

    return (
      <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-gray-900">{selectedState}</h3>
          <button 
            onClick={() => setSelectedState(null)}
            className="text-gray-400 hover:text-gray-600 text-2xl"
          >
            ×
          </button>
        </div>

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
        <h2 className="text-4xl font-bold text-white mb-4">Interactive State Map</h2>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
          Click on any state to view detailed civil rights information, marijuana laws, and recording regulations.
        </p>
      </div>

      {/* View Mode Selector */}
      <div className="flex justify-center mb-8">
        <div className="bg-white rounded-lg shadow-lg p-2 flex space-x-2">
          <button
            onClick={() => setViewMode('overview')}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              viewMode === 'overview'
                ? 'bg-blue-600 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setViewMode('marijuana')}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              viewMode === 'marijuana'
                ? 'bg-green-600 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            Marijuana Laws
          </button>
          <button
            onClick={() => setViewMode('recording')}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              viewMode === 'recording'
                ? 'bg-purple-600 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            Recording Laws
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
          {selectedState ? (
            renderStateInfo()
          ) : (
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Select a State</h3>
              <p className="text-gray-600">
                Click on any state marker to view detailed information about civil rights laws, marijuana regulations, and recording consent requirements.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Interactive3DMap;