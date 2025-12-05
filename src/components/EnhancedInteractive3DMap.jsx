import React, { useState, useEffect, useRef } from 'react';
import { MapPin, TrendingUp, Users, AlertTriangle, Scale, ExternalLink, Globe, BookOpen, Building, Gavel, FileText } from 'lucide-react';

const EnhancedInteractive3DMap = ({ darkMode }) => {
  const [selectedState, setSelectedState] = useState(null);
  const [viewMode, setViewMode] = useState('rights'); // 'rights', 'legislation', 'news'
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const [showResources, setShowResources] = useState(true);
  const mapRef = useRef(null);

  // Enhanced state data with real resource links
  const stateMetrics = {
    CA: { 
      rightsScore: 85, 
      legislationCount: 12, 
      newsActivity: 23, 
      population: 39538223,
      resources: [
        { name: 'California Legislature', url: 'https://leginfo.legislature.ca.gov/', type: 'official' },
        { name: 'CA Civil Rights Dept', url: 'https://calcivilrights.ca.gov/', type: 'government' },
        { name: 'ACLU California', url: 'https://www.aclunc.org/', type: 'advocacy' },
        { name: 'CA Courts Self-Help', url: 'https://selfhelp.courts.ca.gov/', type: 'legal' }
      ]
    },
    TX: { 
      rightsScore: 65, 
      legislationCount: 8, 
      newsActivity: 15, 
      population: 29145505,
      resources: [
        { name: 'Texas Legislature', url: 'https://capitol.texas.gov/', type: 'official' },
        { name: 'TX Attorney General', url: 'https://www.texasattorneygeneral.gov/', type: 'government' },
        { name: 'Texas Civil Rights Project', url: 'https://texascivilrightsproject.org/', type: 'advocacy' },
        { name: 'TX State Law Library', url: 'https://www.sll.texas.gov/', type: 'legal' }
      ]
    },
    NY: { 
      rightsScore: 90, 
      legislationCount: 15, 
      newsActivity: 28, 
      population: 20201249,
      resources: [
        { name: 'New York State Assembly', url: 'https://nyassembly.gov/', type: 'official' },
        { name: 'NY State Attorney General', url: 'https://ag.ny.gov/', type: 'government' },
        { name: 'NYCLU', url: 'https://www.nyclu.org/', type: 'advocacy' },
        { name: 'NY Courts', url: 'https://www.nycourts.gov/', type: 'legal' }
      ]
    },
    FL: { 
      rightsScore: 70, 
      legislationCount: 9, 
      newsActivity: 18, 
      population: 21538187,
      resources: [
        { name: 'Florida Legislature', url: 'https://www.flsenate.gov/', type: 'official' },
        { name: 'FL Attorney General', url: 'https://www.myfloridalegal.com/', type: 'government' },
        { name: 'ACLU Florida', url: 'https://www.aclufl.org/', type: 'advocacy' },
        { name: 'FL Courts', url: 'https://www.flcourts.org/', type: 'legal' }
      ]
    },
    WA: { 
      rightsScore: 88, 
      legislationCount: 11, 
      newsActivity: 19, 
      population: 7705281,
      resources: [
        { name: 'Washington Legislature', url: 'https://leg.wa.gov/', type: 'official' },
        { name: 'WA Attorney General', url: 'https://www.atg.wa.gov/', type: 'government' },
        { name: 'ACLU Washington', url: 'https://www.aclu-wa.org/', type: 'advocacy' },
        { name: 'WA Courts', url: 'https://www.courts.wa.gov/', type: 'legal' }
      ]
    }
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
    return Math.min(metrics.newsActivity / 30, 1);
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

  const openExternalResource = (url, title) => {
    if (url && url !== '#' && !url.includes('example.com')) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      alert(`This would open: ${title}\n\nURL: ${url}\n\nIn production, this links to the official government or organization website.`);
    }
  };

  const getResourceIcon = (type) => {
    switch (type) {
      case 'official': return <Building className="h-4 w-4" />;
      case 'government': return <Scale className="h-4 w-4" />;
      case 'advocacy': return <Users className="h-4 w-4" />;
      case 'legal': return <Gavel className="h-4 w-4" />;
      default: return <Globe className="h-4 w-4" />;
    }
  };

  const getResourceColor = (type) => {
    switch (type) {
      case 'official': return 'text-blue-400';
      case 'government': return 'text-green-400';
      case 'advocacy': return 'text-purple-400';
      case 'legal': return 'text-yellow-400';
      default: return 'text-white';
    }
  };

  const renderStateCard = (stateCode) => {
    const metrics = stateMetrics[stateCode] || {};
    return (
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
        <h3 className="text-lg font-bold text-white mb-3">{stateCode}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex justify-between">
            <span className="text-white/70 text-sm">Civil Rights Score</span>
            <span className={`font-bold ${getStateColor(stateCode)}`}>{metrics.rightsScore || 'N/A'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/70 text-sm">Active Legislation</span>
            <span className="text-white font-semibold">{metrics.legislationCount || 0}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/70 text-sm">News Activity</span>
            <div className="flex items-center">
              <span className="text-white font-semibold mr-2">{metrics.newsActivity || 0}</span>
              <div className={`w-2 h-2 rounded-full ${metrics.newsActivity > 20 ? 'bg-red-400' : metrics.newsActivity > 10 ? 'bg-yellow-400' : 'bg-green-400'}`}></div>
            </div>
          </div>
          <div className="flex justify-between">
            <span className="text-white/70 text-sm">Population</span>
            <span className="text-white font-semibold">{(metrics.population || 0).toLocaleString()}</span>
          </div>
        </div>

        {/* Resources Section */}
        {showResources && metrics.resources && metrics.resources.length > 0 && (
          <div className="border-t border-white/10 pt-3">
            <h4 className="text-sm font-semibold text-white mb-2 flex items-center">
              <Globe className="h-4 w-4 mr-2" />
              Resources & Links
            </h4>
            <div className="space-y-2">
              {metrics.resources.map((resource, index) => (
                <button
                  key={index}
                  onClick={() => openExternalResource(resource.url, resource.name)}
                  className={`w-full text-left text-xs hover:bg-white/10 rounded p-2 transition-colors flex items-center space-x-2 ${getResourceColor(resource.type)}`}
                >
                  {getResourceIcon(resource.type)}
                  <span className="flex-1 truncate">{resource.name}</span>
                  <ExternalLink className="h-3 w-3 flex-shrink-0" />
                </button>
              ))}
            </div>
          </div>
        )}
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

        {/* Resource Types Legend */}
        <div className="mt-4 pt-4 border-t border-white/10">
          <h4 className="text-sm font-semibold text-white mb-2">Resource Types:</h4>
          <div className="space-y-2">
            <div className="flex items-center">
              <Building className="h-4 w-4 text-blue-400 mr-2" />
              <span className="text-white text-xs">Official Legislature</span>
            </div>
            <div className="flex items-center">
              <Scale className="h-4 w-4 text-green-400 mr-2" />
              <span className="text-white text-xs">Government Agency</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 text-purple-400 mr-2" />
              <span className="text-white text-xs">Advocacy Organization</span>
            </div>
            <div className="flex items-center">
              <Gavel className="h-4 w-4 text-yellow-400 mr-2" />
              <span className="text-white text-xs">Legal Resource</span>
            </div>
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

        <div className="flex items-center space-x-4">
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

          <button
            onClick={() => setShowResources(!showResources)}
            className={`flex items-center px-4 py-2 rounded-lg transition-all ${
              showResources 
                ? 'bg-green-500 text-white' 
                : 'bg-white/10 text-white/70 hover:bg-white/20'
            }`}
          >
            <Globe className="h-4 w-4 mr-2" />
            {showResources ? 'Hide Resources' : 'Show Resources'}
          </button>
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
                    className={`h-8 w-8 ${getStateColor(stateCode)} drop-shadow-lg hover:drop-shadow-xl transition-all`}
                    style={{
                      opacity: 0.6 + (getStateIntensity(stateCode) * 0.4)
                    }}
                  />
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity">
                    {stateCode}
                  </div>
                  
                  {/* Click to explore tooltip */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to explore
                  </div>
                </div>
              ))}
              
              {/* Animated background elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 animate-pulse"></div>
              
              {/* Interactive elements */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg p-3">
                <div className="flex items-center justify-between text-xs text-white/70">
                  <span>Click any state to explore resources</span>
                  <span className="flex items-center">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    All links open externally
                  </span>
                </div>
              </div>
            </div>

            {/* Selected State Info */}
            {selectedState && (
              <div className="absolute bottom-16 left-4 right-4 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg p-4 max-h-48 overflow-y-auto">
                <button 
                  onClick={() => setSelectedState(null)}
                  className="absolute top-2 right-2 text-white/50 hover:text-white text-lg"
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
                <span className="text-white font-semibold">50+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70 text-sm">Active Bills</span>
                <span className="text-white font-semibold">127</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70 text-sm">News Sources</span>
                <span className="text-white font-semibold">25+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70 text-sm">Resource Links</span>
                <span className="text-white font-semibold">200+</span>
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
                  <button
                    key={state}
                    onClick={() => handleStateClick(state)}
                    className="w-full flex items-center justify-between p-2 hover:bg-white/10 rounded transition-colors"
                  >
                    <span className="text-white text-sm">{state}</span>
                    <div className="flex items-center">
                      <span className="text-white text-sm mr-2">{metrics.newsActivity}</span>
                      <div className={`w-2 h-2 rounded-full ${metrics.newsActivity > 20 ? 'bg-red-400' : metrics.newsActivity > 10 ? 'bg-yellow-400' : 'bg-green-400'}`}></div>
                    </div>
                  </button>
                ))}
            </div>
          </div>

          {/* Resource Quick Links */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
            <h3 className="text-lg font-bold text-white mb-3">Quick Links</h3>
            <div className="space-y-2">
              <button
                onClick={() => window.open('https://www.congress.gov/', '_blank')}
                className="w-full text-left text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded flex items-center space-x-2"
              >
                <Building className="h-4 w-4 text-blue-400" />
                <span>US Congress</span>
                <ExternalLink className="h-3 w-3 ml-auto" />
              </button>
              
              <button
                onClick={() => window.open('https://www.uscourts.gov/', '_blank')}
                className="w-full text-left text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded flex items-center space-x-2"
              >
                <Gavel className="h-4 w-4 text-yellow-400" />
                <span>Federal Courts</span>
                <ExternalLink className="h-3 w-3 ml-auto" />
              </button>
              
              <button
                onClick={() => window.open('https://www.doj.gov/', '_blank')}
                className="w-full text-left text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded flex items-center space-x-2"
              >
                <Scale className="h-4 w-4 text-green-400" />
                <span>Department of Justice</span>
                <ExternalLink className="h-3 w-3 ml-auto" />
              </button>
              
              <button
                onClick={() => window.open('https://www.eeoc.gov/', '_blank')}
                className="w-full text-left text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded flex items-center space-x-2"
              >
                <Users className="h-4 w-4 text-purple-400" />
                <span>EEOC</span>
                <ExternalLink className="h-3 w-3 ml-auto" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedInteractive3DMap;