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

  // Group states by circuit
  const circuitGroups = {};
  Object.entries(stateCircuitMap).forEach(([stateCode, data]) => {
    const { circuit } = data;
    if (!circuitGroups[circuit]) {
      circuitGroups[circuit] = [];
    }
    circuitGroups[circuit].push(stateCode);
  });

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 rounded-xl p-6 shadow-xl border border-white/20">
      <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-4">Federal Circuit Court Map</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Circuit Map Visualization */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-4">
          <div className="mb-4 text-white/80 text-sm">
            Interactive map showing federal circuit jurisdictions and their civil rights posture
          </div>
          
          <div className="relative w-full aspect-[4/3] bg-slate-800 rounded-lg overflow-hidden">
            {/* Circuit Regions - Simplified Visual Representation */}
            <div className="absolute inset-0 p-2">
              {Object.entries(circuitGroups).map(([circuit, states]) => {
                const color = getCircuitColor(circuit);
                // Calculate position based on circuit
                let position = {};
                switch(circuit) {
                  case '1st Circuit': 
                    position = { top: '15%', left: '85%', width: '15%', height: '15%' }; 
                    break;
                  case '2nd Circuit': 
                    position = { top: '20%', left: '80%', width: '15%', height: '15%' }; 
                    break;
                  case '3rd Circuit': 
                    position = { top: '30%', left: '75%', width: '15%', height: '15%' }; 
                    break;
                  case '4th Circuit': 
                    position = { top: '40%', left: '70%', width: '15%', height: '20%' }; 
                    break;
                  case '5th Circuit': 
                    position = { top: '60%', left: '45%', width: '20%', height: '25%' }; 
                    break;
                  case '6th Circuit': 
                    position = { top: '35%', left: '60%', width: '15%', height: '20%' }; 
                    break;
                  case '7th Circuit': 
                    position = { top: '30%', left: '55%', width: '15%', height: '20%' }; 
                    break;
                  case '8th Circuit': 
                    position = { top: '25%', left: '45%', width: '20%', height: '30%' }; 
                    break;
                  case '9th Circuit': 
                    position = { top: '30%', left: '15%', width: '30%', height: '40%' }; 
                    break;
                  case '10th Circuit': 
                    position = { top: '35%', left: '35%', width: '15%', height: '30%' }; 
                    break;
                  case '11th Circuit': 
                    position = { top: '60%', left: '65%', width: '15%', height: '20%' }; 
                    break;
                  case 'D.C. Circuit': 
                    position = { top: '35%', left: '78%', width: '5%', height: '5%' }; 
                    break;
                  default:
                    position = {};
                }
                
                return (
                  <div 
                    key={circuit}
                    className="absolute rounded-lg border-2 border-white/30 flex items-center justify-center cursor-pointer transition-all hover:border-white hover:z-10"
                    style={{
                      backgroundColor: `${color}50`,
                      top: position.top,
                      left: position.left,
                      width: position.width,
                      height: position.height
                    }}
                  >
                    <div className="text-white font-bold text-xs md:text-sm text-center">
                      {circuit}
                    </div>
                  </div>
                );
              })}
              
              {/* Alaska and Hawaii special positioning */}
              <div className="absolute bottom-2 left-2 flex space-x-2">
                <div 
                  className="rounded-lg border-2 border-white/30 p-1 text-white text-xs"
                  style={{ backgroundColor: `${getCircuitColor('9th Circuit')}50` }}
                >
                  AK
                </div>
                <div 
                  className="rounded-lg border-2 border-white/30 p-1 text-white text-xs"
                  style={{ backgroundColor: `${getCircuitColor('9th Circuit')}50` }}
                >
                  HI
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <span className="text-white/80 text-xs">Protective</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <span className="text-white/80 text-xs">Moderate</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <span className="text-white/80 text-xs">Hostile</span>
            </div>
          </div>
        </div>
        
        {/* Circuit List */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-4">
          <div className="mb-4 text-white/80 text-sm">
            Select a circuit to view details
          </div>
          
          <div className="space-y-2 max-h-96 overflow-y-auto pr-2">
            {Object.entries(circuitGroups).map(([circuit, states]) => {
              const color = getCircuitColor(circuit);
              // Get hostility level (use the first state's hostility as representative)
              const hostility = stateCircuitMap[states[0]]?.hostility;
              
              return (
                <div 
                  key={circuit}
                  className="bg-white/5 hover:bg-white/10 rounded-lg p-3 cursor-pointer transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div 
                        className="w-4 h-4 rounded-full mr-2" 
                        style={{ backgroundColor: color }}
                      ></div>
                      <span className="text-white font-medium">{circuit}</span>
                    </div>
                    <div>
                      {hostility === 'EXTREMELY HOSTILE' && (
                        <span className="bg-red-500/20 text-red-300 text-xs px-2 py-1 rounded-full">
                          Hostile
                        </span>
                      )}
                      {hostility === 'Protective' && (
                        <span className="bg-green-500/20 text-green-300 text-xs px-2 py-1 rounded-full">
                          Protective
                        </span>
                      )}
                      {hostility === 'Moderate' && (
                        <span className="bg-yellow-500/20 text-yellow-300 text-xs px-2 py-1 rounded-full">
                          Moderate
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-2 flex flex-wrap gap-1">
                    {states.map(state => (
                      <span 
                        key={state}
                        className={`text-xs px-2 py-1 rounded-full ${
                          selectedState === state 
                            ? 'bg-blue-500/50 text-white' 
                            : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          onStateSelect && onStateSelect(state);
                        }}
                      >
                        {state}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-xs text-white/50 italic">
        Circuit court jurisdictions determine which federal appeals court hears cases from your state.
        The civil rights posture indicates how favorable the circuit is to civil rights claims.
      </div>
    </div>
  );
};

export default CircuitMap;