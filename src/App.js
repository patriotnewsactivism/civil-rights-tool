import React, { useState } from 'react';
import { Search, Scale, AlertCircle, Gavel, Shield, AlertTriangle } from 'lucide-react';
import './App.css';

const CivilRightsLegalTool = () => {
  const [selectedState, setSelectedState] = useState('');
  const [results, setResults] = useState(null);

  // Simplified states array
  const states = [
    { code: 'AL', name: 'Alabama' }, { code: 'AK', name: 'Alaska' }, { code: 'AZ', name: 'Arizona' },
    { code: 'AR', name: 'Arkansas' }, { code: 'CA', name: 'California' }, { code: 'CO', name: 'Colorado' },
    { code: 'CT', name: 'Connecticut' }, { code: 'DE', name: 'Delaware' }, { code: 'FL', name: 'Florida' },
    { code: 'GA', name: 'Georgia' }, { code: 'HI', name: 'Hawaii' }, { code: 'ID', name: 'Idaho' },
    { code: 'IL', name: 'Illinois' }, { code: 'IN', name: 'Indiana' }, { code: 'IA', name: 'Iowa' },
    { code: 'KS', name: 'Kansas' }, { code: 'KY', name: 'Kentucky' }, { code: 'LA', name: 'Louisiana' },
    { code: 'ME', name: 'Maine' }, { code: 'MD', name: 'Maryland' }, { code: 'MA', name: 'Massachusetts' },
    { code: 'MI', name: 'Michigan' }, { code: 'MN', name: 'Minnesota' }, { code: 'MS', name: 'Mississippi' },
    { code: 'MO', name: 'Missouri' }, { code: 'MT', name: 'Montana' }, { code: 'NE', name: 'Nebraska' },
    { code: 'NV', name: 'Nevada' }, { code: 'NH', name: 'New Hampshire' }, { code: 'NJ', name: 'New Jersey' },
    { code: 'NM', name: 'New Mexico' }, { code: 'NY', name: 'New York' }, { code: 'NC', name: 'North Carolina' },
    { code: 'ND', name: 'North Dakota' }, { code: 'OH', name: 'Ohio' }, { code: 'OK', name: 'Oklahoma' },
    { code: 'OR', name: 'Oregon' }, { code: 'PA', name: 'Pennsylvania' }, { code: 'RI', name: 'Rhode Island' },
    { code: 'SC', name: 'South Carolina' }, { code: 'SD', name: 'South Dakota' }, { code: 'TN', name: 'Tennessee' },
    { code: 'TX', name: 'Texas' }, { code: 'UT', name: 'Utah' }, { code: 'VT', name: 'Vermont' },
    { code: 'VA', name: 'Virginia' }, { code: 'WA', name: 'Washington' }, { code: 'WV', name: 'West Virginia' },
    { code: 'WI', name: 'Wisconsin' }, { code: 'WY', name: 'Wyoming' }, { code: 'DC', name: 'District of Columbia' }
  ];

  // Handle state selection with detailed logging
  const handleStateChange = (e) => {
    const stateCode = e.target.value;
    console.log('=== STATE SELECTION DEBUG ===');
    console.log('Selected state code:', stateCode);
    
    setSelectedState(stateCode);
    
    if (stateCode) {
      const stateName = states.find(s => s.code === stateCode)?.name;
      console.log('State name:', stateName);
      
      // Create test results for ALL states including 5th Circuit
      const testResults = {
        state: stateName,
        stateCode: stateCode,
        circuit: getCircuitData(stateCode),
        stopAndId: getStopAndIdData(stateCode),
        isWorking: true
      };
      
      console.log('Test results:', testResults);
      setResults(testResults);
      console.log('Results state should be updated');
    } else {
      setResults(null);
      console.log('Results cleared');
    }
  };

  // Get circuit data
  const getCircuitData = (stateCode) => {
    const circuitMap = {
      'LA': { circuit: '5th Circuit', hostility: 'EXTREMELY HOSTILE' },
      'MS': { circuit: '5th Circuit', hostility: 'EXTREMELY HOSTILE' },
      'TX': { circuit: '5th Circuit', hostility: 'EXTREMELY HOSTILE' },
      'CA': { circuit: '9th Circuit', hostility: 'Protective' },
      'NY': { circuit: '2nd Circuit', hostility: 'Protective' },
      'FL': { circuit: '11th Circuit', hostility: 'Moderate' }
    };
    
    return circuitMap[stateCode] || { circuit: 'Test Circuit', hostility: 'Test' };
  };

  // Get stop and ID data
  const getStopAndIdData = (stateCode) => {
    const stopIdMap = {
      'LA': {
        hasLaw: true,
        statute: 'La. Code Crim. Proc. art. 215.1',
        warningLevel: 'EXTREME DANGER - 5th Circuit Hostility'
      },
      'MS': {
        hasLaw: false,
        statute: 'No stop and identify law',
        warningLevel: 'EXTREME DANGER - 5th Circuit Hostility'
      },
      'TX': {
        hasLaw: true,
        statute: 'Tex. Penal Code § 38.02',
        warningLevel: 'EXTREME DANGER - 5th Circuit Hostility'
      }
    };
    
    return stopIdMap[stateCode] || {
      hasLaw: false,
      statute: 'Test statute',
      warningLevel: 'Test warning'
    };
  };

  console.log('=== RENDER DEBUG ===');
  console.log('Current selectedState:', selectedState);
  console.log('Current results:', results);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Scale className="h-12 w-12 text-blue-400 mr-4" />
            <h1 className="text-4xl font-bold constitutional-title">
              <span className="title-line-break">Constitutional Rights</span>
              <span>Research Platform</span>
            </h1>
          </div>
          <p className="forensic-analysis-text max-w-4xl mx-auto">
            Forensic analysis of systematic constitutional violations through jurisdictional manipulation, 
            documenting patterns of institutional circumvention of citizen rights across America's legal landscape
          </p>
        </div>

        {/* State Selection */}
        <div className="max-w-md mx-auto mb-12">
          <div className="text-center mb-4">
            <Scale className="h-8 w-8 text-blue-400 mx-auto mb-2" />
            <p className="instruction-text">
              Select a jurisdiction to begin constitutional analysis
            </p>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <select
              value={selectedState}
              onChange={handleStateChange}
              className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Choose jurisdiction for investigation...</option>
              {states.map(state => (
                <option key={state.code} value={state.code}>
                  {state.name} {(state.code === 'LA' || state.code === 'MS' || state.code === 'TX') ? '🚨 5TH CIRCUIT' : ''}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-4">
            <p className="description-text text-center">
              This investigative platform documents systematic patterns of constitutional circumvention through jurisdictional manipulation, 
              revealing how identical citizen conduct faces dramatically different legal consequences across America's fragmented constitutional landscape.
            </p>
          </div>
        </div>

        {/* Debug Info */}
        <div className="max-w-md mx-auto mb-8 p-4 bg-gray-800 rounded-lg border border-gray-600">
          <h3 className="text-yellow-400 font-bold mb-2">🐛 DEBUG INFO:</h3>
          <p className="text-white text-sm">Selected State: {selectedState || 'None'}</p>
          <p className="text-white text-sm">Results Exist: {results ? 'YES' : 'NO'}</p>
          {results && (
            <div className="text-green-400 text-sm mt-2">
              <p>State: {results.state}</p>
              <p>Circuit: {results.circuit?.circuit}</p>
              <p>Hostility: {results.circuit?.hostility}</p>
            </div>
          )}
        </div>

        {/* Results */}
        {results ? (
          <div className="space-y-8">
            {/* 5th Circuit Warning */}
            {results.circuit?.hostility === 'EXTREMELY HOSTILE' && (
              <div className="bg-red-900/40 backdrop-blur-sm rounded-xl p-6 border-4 border-red-500">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="h-10 w-10 text-red-400 mr-4" />
                  <h2 className="text-2xl font-bold text-red-400">
                    🚨 CRITICAL: {results.circuit.circuit} - EXTREMELY HOSTILE 🚨
                  </h2>
                </div>
                <div className="bg-red-800/50 p-4 rounded-lg">
                  <p className="text-white font-bold text-lg">
                    This circuit has created severe constitutional liability for activists.
                  </p>
                </div>
              </div>
            )}

            {/* Main Analysis */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <div className="flex items-center mb-6">
                <Gavel className="h-8 w-8 text-blue-400 mr-3" />
                <h2 className="text-2xl font-bold text-blue-400">
                  Analysis for {results.state} ({results.stateCode})
                </h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-purple-400">Federal Circuit</h3>
                  <p className="text-gray-300">{results.circuit?.circuit}</p>
                  <p className={`font-bold ${
                    results.circuit?.hostility === 'EXTREMELY HOSTILE' ? 'text-red-400' :
                    results.circuit?.hostility === 'Protective' ? 'text-green-400' :
                    'text-yellow-400'
                  }`}>
                    Hostility Level: {results.circuit?.hostility}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-purple-400">Stop and ID Law</h3>
                  <p className="text-gray-300">Has Law: {results.stopAndId?.hasLaw ? 'YES' : 'NO'}</p>
                  <p className="text-gray-300">Statute: {results.stopAndId?.statute}</p>
                  <p className="text-gray-300">Warning Level: {results.stopAndId?.warningLevel}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <Scale className="h-24 w-24 text-blue-400 mx-auto mb-6 opacity-50" />
            <p className="text-xl text-gray-400 mb-4">
              {selectedState ? `Loading data for ${selectedState}...` : 'Select a jurisdiction to begin constitutional analysis'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <CivilRightsLegalTool />
    </div>
  );
}

export default App;
