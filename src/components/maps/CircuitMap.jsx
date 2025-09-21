import React, { useState, useEffect } from 'react';
import { MapPin, AlertTriangle, Shield } from 'lucide-react';

const CircuitMap = ({ selectedState = null, onStateSelect }) => {
  const [hoveredState, setHoveredState] = useState(null);
  
  // Circuit colors
  const getCircuitColor = (circuit) => {
    switch (circuit) {
      case '1st Circuit': return '#3b82f6'; // blue-500
      case '2nd Circuit': return '#8b5cf6'; // violet-500
      case '3rd Circuit': return '#ec4899'; // pink-500
      case '4th Circuit': return '#10b981'; // emerald-500
      case '5th Circuit': return '#ef4444'; // red-500
      case '6th Circuit': return '#f59e0b'; // amber-500
      case '7th Circuit': return '#6366f1'; // indigo-500
      case '8th Circuit': return '#84cc16'; // lime-500
      case '9th Circuit': return '#06b6d4'; // cyan-500
      case '10th Circuit': return '#8b5cf6'; // violet-500
      case '11th Circuit': return '#f97316'; // orange-500
      case 'D.C. Circuit': return '#475569'; // slate-600
      default: return '#94a3b8'; // slate-400
    }
  };

  // Circuit hostility indicator
  const getHostilityIndicator = (hostility) => {
    switch (hostility) {
      case 'EXTREMELY HOSTILE': 
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case 'Protective': 
        return <Shield className="h-4 w-4 text-green-500" />;
      default: 
        return null;
    }
  };

  // State to circuit mapping
  const stateCircuitMap = {
    'ME': { circuit: '1st Circuit', hostility: 'Protective' },
    'NH': { circuit: '1st Circuit', hostility: 'Protective' },
    'MA': { circuit: '1st Circuit', hostility: 'Protective' },
    'RI': { circuit: '1st Circuit', hostility: 'Protective' },
    'NY': { circuit: '2nd Circuit', hostility: 'Protective' },
    'VT': { circuit: '2nd Circuit', hostility: 'Protective' },
    'CT': { circuit: '2nd Circuit', hostility: 'Protective' },
    'PA': { circuit: '3rd Circuit', hostility: 'Moderate' },
    'NJ': { circuit: '3rd Circuit', hostility: 'Moderate' },
    'DE': { circuit: '3rd Circuit', hostility: 'Moderate' },
    'MD': { circuit: '4th Circuit', hostility: 'Protective' },
    'VA': { circuit: '4th Circuit', hostility: 'Protective' },
    'WV': { circuit: '4th Circuit', hostility: 'Protective' },
    'NC': { circuit: '4th Circuit', hostility: 'Protective' },
    'SC': { circuit: '4th Circuit', hostility: 'Protective' },
    'LA': { circuit: '5th Circuit', hostility: 'EXTREMELY HOSTILE' },
    'TX': { circuit: '5th Circuit', hostility: 'EXTREMELY HOSTILE' },
    'MS': { circuit: '5th Circuit', hostility: 'EXTREMELY HOSTILE' },
    'OH': { circuit: '6th Circuit', hostility: 'Moderate' },
    'MI': { circuit: '6th Circuit', hostility: 'Moderate' },
    'KY': { circuit: '6th Circuit', hostility: 'Moderate' },
    'TN': { circuit: '6th Circuit', hostility: 'Moderate' },
    'IL': { circuit: '7th Circuit', hostility: 'Moderate' },
    'IN': { circuit: '7th Circuit', hostility: 'Moderate' },
    'WI': { circuit: '7th Circuit', hostility: 'Moderate' },
    'MN': { circuit: '8th Circuit', hostility: 'Moderate' },
    'IA': { circuit: '8th Circuit', hostility: 'Moderate' },
    'MO': { circuit: '8th Circuit', hostility: 'Moderate' },
    'AR': { circuit: '8th Circuit', hostility: 'Moderate' },
    'ND': { circuit: '8th Circuit', hostility: 'Moderate' },
    'SD': { circuit: '8th Circuit', hostility: 'Moderate' },
    'NE': { circuit: '8th Circuit', hostility: 'Moderate' },
    'CA': { circuit: '9th Circuit', hostility: 'Protective' },
    'OR': { circuit: '9th Circuit', hostility: 'Protective' },
    'WA': { circuit: '9th Circuit', hostility: 'Protective' },
    'NV': { circuit: '9th Circuit', hostility: 'Protective' },
    'ID': { circuit: '9th Circuit', hostility: 'Protective' },
    'MT': { circuit: '9th Circuit', hostility: 'Protective' },
    'AZ': { circuit: '9th Circuit', hostility: 'Protective' },
    'AK': { circuit: '9th Circuit', hostility: 'Protective' },
    'HI': { circuit: '9th Circuit', hostility: 'Protective' },
    'CO': { circuit: '10th Circuit', hostility: 'Moderate' },
    'KS': { circuit: '10th Circuit', hostility: 'Moderate' },
    'NM': { circuit: '10th Circuit', hostility: 'Moderate' },
    'OK': { circuit: '10th Circuit', hostility: 'Moderate' },
    'UT': { circuit: '10th Circuit', hostility: 'Moderate' },
    'WY': { circuit: '10th Circuit', hostility: 'Moderate' },
    'AL': { circuit: '11th Circuit', hostility: 'Moderate' },
    'GA': { circuit: '11th Circuit', hostility: 'Moderate' },
    'FL': { circuit: '11th Circuit', hostility: 'Moderate' },
    'DC': { circuit: 'D.C. Circuit', hostility: 'Moderate' },
  };

  // Placeholder for the actual map
  // In a real implementation, this would be an SVG map of the US with state paths
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-lg p-4">
      <h3 className="text-lg font-medium text-white mb-4">Federal Circuit Court Map</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 max-h-96 overflow-y-auto">
        {Object.entries(stateCircuitMap).map(([stateCode, { circuit, hostility }]) => (
          <div 
            key={stateCode}
            className={`
              flex items-center p-2 rounded cursor-pointer
              ${selectedState === stateCode ? 'bg-blue-900/50 border border-blue-500' : 'hover:bg-slate-800'}
            `}
            onClick={() => onStateSelect && onStateSelect(stateCode)}
            onMouseEnter={() => setHoveredState(stateCode)}
            onMouseLeave={() => setHoveredState(null)}
          >
            <div 
              className="w-4 h-4 rounded-full mr-2" 
              style={{ backgroundColor: getCircuitColor(circuit) }}
            ></div>
            <span className="text-white text-sm">{stateCode}</span>
            <span className="text-gray-400 text-xs ml-2">{circuit}</span>
            <div className="ml-auto">
              {getHostilityIndicator(hostility)}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 border-t border-slate-700 pt-4">
        <div className="text-sm text-white mb-2">Circuit Legend</div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {['1st Circuit', '2nd Circuit', '3rd Circuit', '4th Circuit', '5th Circuit', '6th Circuit', 
            '7th Circuit', '8th Circuit', '9th Circuit', '10th Circuit', '11th Circuit', 'D.C. Circuit'].map(circuit => (
            <div key={circuit} className="flex items-center">
              <div 
                className="w-3 h-3 rounded-full mr-1" 
                style={{ backgroundColor: getCircuitColor(circuit) }}
              ></div>
              <span className="text-gray-400 text-xs">{circuit}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-4 text-xs text-gray-500">
        Note: This is a simplified representation. In a production version, this would be an interactive SVG map.
      </div>
    </div>
  );
};

export default CircuitMap;