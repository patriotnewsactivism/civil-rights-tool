import React, { useState, useEffect, useRef } from 'react';
import { MapPin, TrendingUp, Users, AlertTriangle, Scale } from 'lucide-react';

const Interactive3DMap = ({ darkMode }) => {
  const [selectedState, setSelectedState] = useState(null);
  const [viewMode, setViewMode] = useState('rights'); // 'rights', 'legislation', 'news'
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const mapRef = useRef(null);

  // Enhanced state data with real-time metrics
  const stateMetrics = {
    CA: { rightsScore: 85, legislationCount: 12, newsActivity: 23, population: 39538223 },
    TX: { rightsScore: 65, legislationCount: 8, newsActivity: 15, population: 29145505 },
    NY: { rightsScore: 90, legislationCount: 15, newsActivity: 28, population: 20201249 },
    FL: { rightsScore: 70, legislationCount: 9, newsActivity: 18, population: 21538187 },
    // Add all 50 states with real metrics...
  };

  const getStateColor = (stateCode) => {
    const metrics = stateMetrics[stateCode] || { rightsScore: 50 };
    const score = metrics.rightsScore;
    
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    if (score >= 40) return 'text-orange-400';
    return 'text-red-400';
  };

  const getStateIntensity = (stateCode) => {
    const metrics = stateMetrics[stateCode] || { newsActivity: 10 };
    return Math.min(metrics.newsActivity / 30, 1); // Normalize to 0-1
  };

  const handleStateClick = (stateCode) => {
    setSelectedState(stateCode);
    // Add 3D animation effect
    if (mapRef.current) {
      mapRef.current.style.transform = 'scale(1.05)';
      setTimeout(() => {
        if (mapRef.current) {
          mapRef.current.style.transform = 'scale(1)';
        }
      }, 200);
    }
  };

  const renderStateCard = (stateCode) => {
    const metrics = stateMetrics[stateCode] || {};
    return (
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
        <h3 className="text-lg font-bold text-white mb-3">{stateCode}</h3>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-white/70 text-sm">Civil Rights Score</span>
            <span className={`font-bold ${getStateColor(stateCode)}`}>{metrics.rightsScore || 'N/A'}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-white/70 text-sm">Active Legislation</span>
            <span className="text-white font-semibold">{metrics.legislationCount || 0}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-white/70 text-sm">News Activity</span>
            <div className="flex items-center">
              <span className="text-white font-semibold mr-2">{metrics.newsActivity || 0}</span>
              <div className={`w-2 h-2 rounded-full ${metrics.newsActivity > 20 ? 'bg-red-400 animate-pulse' : metrics.newsActivity > 10 ? 'bg-yellow-400' : 'bg-green-400'}`}></div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-white/70 text-sm">Population</span>
            <span className="text-white font-semibold">{(metrics.population || 0).toLocaleString()}</span>
          </div>
        </div>
      </div>
    );
  };

  const renderLegend = () => {
    return (
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
        <h3 className="text-lg font-bold text-white mb-3">Map Legend</h3>
        
        <div className="space-y-3">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-400 rounded mr-3"></div>
            <span className="text-white text-sm">High Civil Rights Protection (80+)</span>
          </div>
          
          <div className="flex items-center">
            <div className="w-4 h-4 bg-yellow-400 rounded mr-3"></div>
            <span className="text-white text-sm">Moderate Protection (60-79)</span>
          </div>
          
          <div className="flex items-center">
            <div className="w-4 h-4 bg-orange-400 rounded mr-3"></div>
            <span className="text-white text-sm">Limited Protection (40-59)</span>
          </div>
          
          <div className="flex items-center">
            <div className="w-4 h-4 bg-red-400 rounded mr-3"></div>
            <span className="text-white text-sm">Low Protection (Below 40)</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-white mb-2">Interactive Civil Rights Map</h2>
        <p className="text-white/70">3D visualization of civil rights data across the United States</p>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap gap-4 justify-center mb-6">
        <div className="flex bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-2">
          {[
            { key: 'rights', label: 'Civil Rights', icon: Scale },
            { key: 'legislation', label: 'Legislation', icon: TrendingUp },
            { key: 'news', label: 'News Activity', icon: AlertTriangle }
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setViewMode(key)}
              className={`flex items-center px-4 py-2 rounded-md transition-all ${
                viewMode === key 
                  ? 'bg-white/20 text-white' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <Icon className="h-4 w-4 mr-2" />
              {label}
            </button>
          ))}
        </div>

        <div className="flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-2">
          <span className="text-white text-sm mr-3">Animation Speed:</span>
          <input
            type="range"
            min="0.5"
            max="3"
            step="0.5"
            value={animationSpeed}
            onChange={(e) => setAnimationSpeed(parseFloat(e.target.value))}
            className="w-20"
          />
          <span className="text-white text-sm ml-2">{animationSpeed}x</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Map Container */}
        <div className="lg:col-span-3">
          <div 
            ref={mapRef}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 h-96 relative overflow-hidden"
            style={{
              transform: 'perspective(1000px) rotateX(15deg)',
              transition: 'transform 0.3s ease'
            }}
          >
            {/* Simplified US Map Visualization */}
            <div className="relative w-full h-full">
              {/* State representations - simplified for demo */}
              {Object.keys(stateMetrics).slice(0, 10).map((stateCode, index) => (
                <div
                  key={stateCode}
                  className={`absolute cursor-pointer transform transition-all duration-300 hover:scale-110 ${
                    selectedState === stateCode ? 'scale-125 z-10' : ''
                  }`}
                  style={{
                    left: `${(index % 5) * 20 + 10}%`,
                    top: `${Math.floor(index / 5) * 40 + 20}%`,
                    animation: `pulse ${2 / animationSpeed}s infinite`
                  }}
                  onClick={() => handleStateClick(stateCode)}
                >
                  <MapPin 
                    className={`h-8 w-8 ${getStateColor(stateCode)} drop-shadow-lg`}
                    style={{
                      opacity: 0.6 + (getStateIntensity(stateCode) * 0.4)
                    }}
                  />
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity">
                    {stateCode}
                  </div>
                </div>
              ))}
              
              {/* Animated background elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 animate-pulse"></div>
            </div>

            {/* Selected State Info */}
            {selectedState && (
              <div className="absolute bottom-4 left-4 right-4 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                <button 
                  onClick={() => setSelectedState(null)}
                  className="absolute top-2 right-2 text-white/50 hover:text-white"
                >
                  ×
                </button>
                {renderStateCard(selectedState)}
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {renderLegend()}
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
            <h3 className="text-lg font-bold text-white mb-3">Quick Stats</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-white/70 text-sm">States Tracked</span>
                <span className="text-white font-semibold">50</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70 text-sm">Active Bills</span>
                <span className="text-white font-semibold">127</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70 text-sm">News Sources</span>
                <span className="text-white font-semibold">25+</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
            <h3 className="text-lg font-bold text-white mb-3">Top Active States</h3>
            <div className="space-y-2">
              {Object.entries(stateMetrics)
                .sort(([,a], [,b]) => b.newsActivity - a.newsActivity)
                .slice(0, 5)
                .map(([state, metrics]) => (
                  <div key={state} className="flex justify-between items-center">
                    <span className="text-white/70 text-sm">{state}</span>
                    <div className="flex items-center">
                      <span className="text-white text-sm mr-2">{metrics.newsActivity}</span>
                      <div className={`w-2 h-2 rounded-full ${metrics.newsActivity > 20 ? 'bg-red-400' : metrics.newsActivity > 10 ? 'bg-yellow-400' : 'bg-green-400'}`}></div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interactive3DMap;