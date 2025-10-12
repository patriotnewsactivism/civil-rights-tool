import React, { useState } from 'react';
import { Shield, AlertTriangle, Info } from 'lucide-react';

const InteractiveUSMap = ({ selectedState, onStateSelect, darkMode = true }) => {
  const [hoveredState, setHoveredState] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  // State to circuit mapping with detailed information
  const stateData = {
    'AL': { circuit: '11th', name: 'Alabama', hostility: 'Moderate', color: '#f97316' },
    'AK': { circuit: '9th', name: 'Alaska', hostility: 'Protective', color: '#06b6d4' },
    'AZ': { circuit: '9th', name: 'Arizona', hostility: 'Protective', color: '#06b6d4' },
    'AR': { circuit: '8th', name: 'Arkansas', hostility: 'Moderate', color: '#84cc16' },
    'CA': { circuit: '9th', name: 'California', hostility: 'Protective', color: '#06b6d4' },
    'CO': { circuit: '10th', name: 'Colorado', hostility: 'Moderate', color: '#8b5cf6' },
    'CT': { circuit: '2nd', name: 'Connecticut', hostility: 'Protective', color: '#8b5cf6' },
    'DE': { circuit: '3rd', name: 'Delaware', hostility: 'Moderate', color: '#ec4899' },
    'FL': { circuit: '11th', name: 'Florida', hostility: 'Moderate', color: '#f97316' },
    'GA': { circuit: '11th', name: 'Georgia', hostility: 'Moderate', color: '#f97316' },
    'HI': { circuit: '9th', name: 'Hawaii', hostility: 'Protective', color: '#06b6d4' },
    'ID': { circuit: '9th', name: 'Idaho', hostility: 'Protective', color: '#06b6d4' },
    'IL': { circuit: '7th', name: 'Illinois', hostility: 'Moderate', color: '#6366f1' },
    'IN': { circuit: '7th', name: 'Indiana', hostility: 'Moderate', color: '#6366f1' },
    'IA': { circuit: '8th', name: 'Iowa', hostility: 'Moderate', color: '#84cc16' },
    'KS': { circuit: '10th', name: 'Kansas', hostility: 'Moderate', color: '#8b5cf6' },
    'KY': { circuit: '6th', name: 'Kentucky', hostility: 'Moderate', color: '#f59e0b' },
    'LA': { circuit: '5th', name: 'Louisiana', hostility: 'EXTREMELY HOSTILE', color: '#ef4444' },
    'ME': { circuit: '1st', name: 'Maine', hostility: 'Protective', color: '#3b82f6' },
    'MD': { circuit: '4th', name: 'Maryland', hostility: 'Protective', color: '#10b981' },
    'MA': { circuit: '1st', name: 'Massachusetts', hostility: 'Protective', color: '#3b82f6' },
    'MI': { circuit: '6th', name: 'Michigan', hostility: 'Moderate', color: '#f59e0b' },
    'MN': { circuit: '8th', name: 'Minnesota', hostility: 'Moderate', color: '#84cc16' },
    'MS': { circuit: '5th', name: 'Mississippi', hostility: 'EXTREMELY HOSTILE', color: '#ef4444' },
    'MO': { circuit: '8th', name: 'Missouri', hostility: 'Moderate', color: '#84cc16' },
    'MT': { circuit: '9th', name: 'Montana', hostility: 'Protective', color: '#06b6d4' },
    'NE': { circuit: '8th', name: 'Nebraska', hostility: 'Moderate', color: '#84cc16' },
    'NV': { circuit: '9th', name: 'Nevada', hostility: 'Protective', color: '#06b6d4' },
    'NH': { circuit: '1st', name: 'New Hampshire', hostility: 'Protective', color: '#3b82f6' },
    'NJ': { circuit: '3rd', name: 'New Jersey', hostility: 'Moderate', color: '#ec4899' },
    'NM': { circuit: '10th', name: 'New Mexico', hostility: 'Moderate', color: '#8b5cf6' },
    'NY': { circuit: '2nd', name: 'New York', hostility: 'Protective', color: '#8b5cf6' },
    'NC': { circuit: '4th', name: 'North Carolina', hostility: 'Protective', color: '#10b981' },
    'ND': { circuit: '8th', name: 'North Dakota', hostility: 'Moderate', color: '#84cc16' },
    'OH': { circuit: '6th', name: 'Ohio', hostility: 'Moderate', color: '#f59e0b' },
    'OK': { circuit: '10th', name: 'Oklahoma', hostility: 'Moderate', color: '#8b5cf6' },
    'OR': { circuit: '9th', name: 'Oregon', hostility: 'Protective', color: '#06b6d4' },
    'PA': { circuit: '3rd', name: 'Pennsylvania', hostility: 'Moderate', color: '#ec4899' },
    'RI': { circuit: '1st', name: 'Rhode Island', hostility: 'Protective', color: '#3b82f6' },
    'SC': { circuit: '4th', name: 'South Carolina', hostility: 'Protective', color: '#10b981' },
    'SD': { circuit: '8th', name: 'South Dakota', hostility: 'Moderate', color: '#84cc16' },
    'TN': { circuit: '6th', name: 'Tennessee', hostility: 'Moderate', color: '#f59e0b' },
    'TX': { circuit: '5th', name: 'Texas', hostility: 'EXTREMELY HOSTILE', color: '#ef4444' },
    'UT': { circuit: '10th', name: 'Utah', hostility: 'Moderate', color: '#8b5cf6' },
    'VT': { circuit: '2nd', name: 'Vermont', hostility: 'Protective', color: '#8b5cf6' },
    'VA': { circuit: '4th', name: 'Virginia', hostility: 'Protective', color: '#10b981' },
    'WA': { circuit: '9th', name: 'Washington', hostility: 'Protective', color: '#06b6d4' },
    'WV': { circuit: '4th', name: 'West Virginia', hostility: 'Protective', color: '#10b981' },
    'WI': { circuit: '7th', name: 'Wisconsin', hostility: 'Moderate', color: '#6366f1' },
    'WY': { circuit: '10th', name: 'Wyoming', hostility: 'Moderate', color: '#8b5cf6' },
    'DC': { circuit: 'DC', name: 'District of Columbia', hostility: 'Moderate', color: '#475569' }
  };

  // Simplified US state paths (using approximate coordinates)
  const statePaths = {
    'CA': 'M 50,200 L 50,100 L 150,100 L 150,200 Z',
    'TX': 'M 350,350 L 350,250 L 500,250 L 500,350 Z',
    'FL': 'M 700,400 L 700,300 L 800,300 L 800,400 Z',
    'NY': 'M 800,100 L 800,50 L 900,50 L 900,100 Z',
    // Add more state paths as needed
  };

  const handleStateClick = (stateCode) => {
    if (onStateSelect) {
      onStateSelect(stateCode);
    }
  };

  const handleStateHover = (stateCode, event) => {
    setHoveredState(stateCode);
    if (event) {
      const rect = event.currentTarget.getBoundingClientRect();
      setTooltipPosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      });
    }
  };

  const getHostilityColor = (hostility) => {
    switch (hostility) {
      case 'EXTREMELY HOSTILE': return '#ef4444';
      case 'Protective': return '#10b981';
      default: return '#f59e0b';
    }
  };

  return (
    <div className={`${darkMode ? 'bg-slate-900' : 'bg-white'} rounded-xl p-6 shadow-xl border ${darkMode ? 'border-white/20' : 'border-slate-200'}`}>
      <div className="mb-6">
        <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
          Federal Circuit Court Map
        </h3>
        <p className={`text-sm ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
          Click on any state to view detailed circuit court information and civil rights analysis
        </p>
      </div>

      {/* Map Container */}
      <div className="relative">
        {/* SVG Map */}
        <svg 
          viewBox="0 0 960 600" 
          className="w-full h-auto"
          style={{ maxHeight: '500px' }}
        >
          {/* Background */}
          <rect width="960" height="600" fill={darkMode ? '#1e293b' : '#f1f5f9'} />
          
          {/* States - Grid Layout for simplicity */}
          {Object.entries(stateData).map(([code, data], index) => {
            const row = Math.floor(index / 10);
            const col = index % 10;
            const x = col * 90 + 30;
            const y = row * 90 + 30;
            const isSelected = selectedState === code;
            const isHovered = hoveredState === code;
            
            return (
              <g key={code}>
                <rect
                  x={x}
                  y={y}
                  width="80"
                  height="80"
                  fill={data.color}
                  fillOpacity={isSelected ? 0.9 : isHovered ? 0.7 : 0.5}
                  stroke={isSelected ? '#ffffff' : isHovered ? '#ffffff' : data.color}
                  strokeWidth={isSelected ? 3 : isHovered ? 2 : 1}
                  rx="4"
                  className="cursor-pointer transition-all duration-200"
                  onClick={() => handleStateClick(code)}
                  onMouseEnter={(e) => handleStateHover(code, e)}
                  onMouseLeave={() => setHoveredState(null)}
                />
                <text
                  x={x + 40}
                  y={y + 35}
                  textAnchor="middle"
                  fill="white"
                  fontSize="14"
                  fontWeight="bold"
                  className="pointer-events-none"
                >
                  {code}
                </text>
                <text
                  x={x + 40}
                  y={y + 55}
                  textAnchor="middle"
                  fill="white"
                  fontSize="10"
                  className="pointer-events-none"
                >
                  {data.circuit} Cir.
                </text>
              </g>
            );
          })}
        </svg>

        {/* Tooltip */}
        {hoveredState && stateData[hoveredState] && (
          <div 
            className={`absolute z-50 ${darkMode ? 'bg-slate-800' : 'bg-white'} border ${darkMode ? 'border-white/20' : 'border-slate-200'} rounded-lg p-4 shadow-xl pointer-events-none`}
            style={{
              left: `${tooltipPosition.x + 10}px`,
              top: `${tooltipPosition.y + 10}px`,
              minWidth: '200px'
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className={`font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {stateData[hoveredState].name}
              </h4>
              {stateData[hoveredState].hostility === 'EXTREMELY HOSTILE' && (
                <AlertTriangle className="h-4 w-4 text-red-500" />
              )}
              {stateData[hoveredState].hostility === 'Protective' && (
                <Shield className="h-4 w-4 text-green-500" />
              )}
            </div>
            <div className={`text-sm ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
              <p><strong>Circuit:</strong> {stateData[hoveredState].circuit} Circuit</p>
              <p className="flex items-center mt-1">
                <strong>Civil Rights Posture:</strong>
                <span 
                  className="ml-2 px-2 py-0.5 rounded-full text-xs"
                  style={{ 
                    backgroundColor: `${getHostilityColor(stateData[hoveredState].hostility)}20`,
                    color: getHostilityColor(stateData[hoveredState].hostility)
                  }}
                >
                  {stateData[hoveredState].hostility}
                </span>
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
          <span className={`text-sm ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
            Protective (Strong civil rights protections)
          </span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-full bg-yellow-500 mr-2"></div>
          <span className={`text-sm ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
            Moderate (Mixed record on civil rights)
          </span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
          <span className={`text-sm ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
            Hostile (Restrictive civil rights rulings)
          </span>
        </div>
      </div>

      {/* Circuit Information */}
      <div className={`mt-6 p-4 rounded-lg ${darkMode ? 'bg-white/5' : 'bg-slate-50'} border ${darkMode ? 'border-white/10' : 'border-slate-200'}`}>
        <div className="flex items-start">
          <Info className={`h-5 w-5 mr-2 mt-0.5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          <div className={`text-sm ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
            <p className="mb-2">
              <strong>About Federal Circuits:</strong> The United States is divided into 13 federal judicial circuits, each with a Court of Appeals that hears cases from federal district courts within its jurisdiction.
            </p>
            <p>
              The civil rights posture indicates how favorable each circuit has historically been toward civil rights claims based on recent rulings and judicial composition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveUSMap;