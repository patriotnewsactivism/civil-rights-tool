import React, { useState, useEffect, useMemo } from 'react';
import { Search, Scale, AlertCircle, Gavel, Shield, AlertTriangle, BookMarked, TrendingDown, Users, FileText, Camera, Globe } from 'lucide-react';
import './App.css';

// Import the new components
import ActivistToolkit from './components/activist/ActivistToolkit';
import JournalistToolkit from './components/journalist/JournalistToolkit';
import StateProfile from './components/state-profiles/StateProfile';

const CivilRightsLegalTool = () => {
  // State declarations
  const [selectedState, setSelectedState] = useState('');
  const [results, setResults] = useState(null);
  const [activeTab, setActiveTab] = useState('legal'); // 'legal', 'activist', 'journalist', 'state'

  // Federal Circuit mapping with jurisdictional analysis
  const federalCircuits = useMemo(() => ({
    'AL': { circuit: '11th Circuit', hostility: 'Moderate', districts: ['Northern District of Alabama', 'Middle District of Alabama', 'Southern District of Alabama'] },
    'AK': { circuit: '9th Circuit', hostility: 'Protective', districts: ['District of Alaska'] },
    'AZ': { circuit: '9th Circuit', hostility: 'Protective', districts: ['District of Arizona'] },
    'AR': { circuit: '8th Circuit', hostility: 'Moderate', districts: ['Eastern District of Arkansas', 'Western District of Arkansas'] },
    'CA': { circuit: '9th Circuit', hostility: 'Protective', districts: ['Northern District of California', 'Central District of California', 'Eastern District of California', 'Southern District of California'] },
    'CO': { circuit: '10th Circuit', hostility: 'Moderate', districts: ['District of Colorado'] },
    'CT': { circuit: '2nd Circuit', hostility: 'Protective', districts: ['District of Connecticut'] },
    'DE': { circuit: '3rd Circuit', hostility: 'Moderate', districts: ['District of Delaware'] },
    'FL': { circuit: '11th Circuit', hostility: 'Moderate', districts: ['Northern District of Florida', 'Middle District of Florida', 'Southern District of Florida'] },
    'GA': { circuit: '11th Circuit', hostility: 'Moderate', districts: ['Northern District of Georgia', 'Middle District of Georgia', 'Southern District of Georgia'] },
    'HI': { circuit: '9th Circuit', hostility: 'Protective', districts: ['District of Hawaii'] },
    'ID': { circuit: '9th Circuit', hostility: 'Protective', districts: ['District of Idaho'] },
    'IL': { circuit: '7th Circuit', hostility: 'Moderate', districts: ['Northern District of Illinois', 'Central District of Illinois', 'Southern District of Illinois'] },
    'IN': { circuit: '7th Circuit', hostility: 'Moderate', districts: ['Northern District of Indiana', 'Southern District of Indiana'] },
    'IA': { circuit: '8th Circuit', hostility: 'Moderate', districts: ['Northern District of Iowa', 'Southern District of Iowa'] },
    'KS': { circuit: '10th Circuit', hostility: 'Moderate', districts: ['District of Kansas'] },
    'KY': { circuit: '6th Circuit', hostility: 'Moderate', districts: ['Eastern District of Kentucky', 'Western District of Kentucky'] },
    'LA': { circuit: '5th Circuit', hostility: 'EXTREMELY HOSTILE', districts: ['Eastern District of Louisiana', 'Middle District of Louisiana', 'Western District of Louisiana'] },
    'ME': { circuit: '1st Circuit', hostility: 'Protective', districts: ['District of Maine'] },
    'MD': { circuit: '4th Circuit', hostility: 'Protective', districts: ['District of Maryland'] },
    'MA': { circuit: '1st Circuit', hostility: 'Protective', districts: ['District of Massachusetts'] },
    'MI': { circuit: '6th Circuit', hostility: 'Moderate', districts: ['Eastern District of Michigan', 'Western District of Michigan'] },
    'MN': { circuit: '8th Circuit', hostility: 'Moderate', districts: ['District of Minnesota'] },
    'MS': { circuit: '5th Circuit', hostility: 'EXTREMELY HOSTILE', districts: ['Northern District of Mississippi', 'Southern District of Mississippi'] },
    'MO': { circuit: '8th Circuit', hostility: 'Moderate', districts: ['Eastern District of Missouri', 'Western District of Missouri'] },
    'MT': { circuit: '9th Circuit', hostility: 'Protective', districts: ['District of Montana'] },
    'NE': { circuit: '8th Circuit', hostility: 'Moderate', districts: ['District of Nebraska'] },
    'NV': { circuit: '9th Circuit', hostility: 'Protective', districts: ['District of Nevada'] },
    'NH': { circuit: '1st Circuit', hostility: 'Protective', districts: ['District of New Hampshire'] },
    'NJ': { circuit: '3rd Circuit', hostility: 'Moderate', districts: ['District of New Jersey'] },
    'NM': { circuit: '10th Circuit', hostility: 'Moderate', districts: ['District of New Mexico'] },
    'NY': { circuit: '2nd Circuit', hostility: 'Protective', districts: ['Northern District of New York', 'Southern District of New York', 'Eastern District of New York', 'Western District of New York'] },
    'NC': { circuit: '4th Circuit', hostility: 'Protective', districts: ['Eastern District of North Carolina', 'Middle District of North Carolina', 'Western District of North Carolina'] },
    'ND': { circuit: '8th Circuit', hostility: 'Moderate', districts: ['District of North Dakota'] },
    'OH': { circuit: '6th Circuit', hostility: 'Moderate', districts: ['Northern District of Ohio', 'Southern District of Ohio'] },
    'OK': { circuit: '10th Circuit', hostility: 'Moderate', districts: ['Northern District of Oklahoma', 'Eastern District of Oklahoma', 'Western District of Oklahoma'] },
    'OR': { circuit: '9th Circuit', hostility: 'Protective', districts: ['District of Oregon'] },
    'PA': { circuit: '3rd Circuit', hostility: 'Moderate', districts: ['Eastern District of Pennsylvania', 'Middle District of Pennsylvania', 'Western District of Pennsylvania'] },
    'RI': { circuit: '1st Circuit', hostility: 'Protective', districts: ['District of Rhode Island'] },
    'SC': { circuit: '4th Circuit', hostility: 'Protective', districts: ['District of South Carolina'] },
    'SD': { circuit: '8th Circuit', hostility: 'Moderate', districts: ['District of South Dakota'] },
    'TN': { circuit: '6th Circuit', hostility: 'Moderate', districts: ['Eastern District of Tennessee', 'Middle District of Tennessee', 'Western District of Tennessee'] },
    'TX': { circuit: '5th Circuit', hostility: 'EXTREMELY HOSTILE', districts: ['Northern District of Texas', 'Southern District of Texas', 'Eastern District of Texas', 'Western District of Texas'] },
    'UT': { circuit: '10th Circuit', hostility: 'Moderate', districts: ['District of Utah'] },
    'VT': { circuit: '2nd Circuit', hostility: 'Protective', districts: ['District of Vermont'] },
    'VA': { circuit: '4th Circuit', hostility: 'Protective', districts: ['Eastern District of Virginia', 'Western District of Virginia'] },
    'WA': { circuit: '9th Circuit', hostility: 'Protective', districts: ['Eastern District of Washington', 'Western District of Washington'] },
    'WV': { circuit: '4th Circuit', hostility: 'Protective', districts: ['Northern District of West Virginia', 'Southern District of West Virginia'] },
    'WI': { circuit: '7th Circuit', hostility: 'Moderate', districts: ['Eastern District of Wisconsin', 'Western District of Wisconsin'] },
    'WY': { circuit: '10th Circuit', hostility: 'Moderate', districts: ['District of Wyoming'] },
    'DC': { circuit: 'D.C. Circuit', hostility: 'Moderate', districts: ['District of Columbia'] }
  }), []);

  // Enhanced Stop and ID States with comprehensive constitutional analysis
  const stopAndIdStates = useMemo(() => ({
    'AL': {
      hasLaw: true,
      statute: 'Ala. Code § 15-5-30',
      requirements: 'Must provide name when lawfully detained on reasonable suspicion',
      penalty: 'Misdemeanor, up to 3 months jail',
      constitutionalStrategy: ['Demand specific articulable facts supporting reasonable suspicion', 'Challenge overbroad application'],
      controllingPrecedents: ['Terry v. Ohio (1968)', 'United States v. Sokolow (1989)'],
      tacticalNotes: '11th Circuit applies standard Terry analysis.',
      warningLevel: 'Moderate Risk'
    },
    // ... other states (truncated for brevity)
  }), []);

  // State list for dropdown
  const states = useMemo(() => [
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
  ], []);

  // Tab configuration
  const tabs = [
    { id: 'legal', label: 'Legal Analysis', icon: <Scale className="h-5 w-5" /> },
    { id: 'activist', label: 'Activist Toolkit', icon: <Users className="h-5 w-5" /> },
    { id: 'journalist', label: 'Journalist Toolkit', icon: <FileText className="h-5 w-5" /> },
    { id: 'state', label: 'State Profile', icon: <Globe className="h-5 w-5" /> },
  ];

  // Update results when state changes
  useEffect(() => {
    if (selectedState) {
      const circuit = federalCircuits[selectedState];
      setResults({
        state: states.find(s => s.code === selectedState)?.name,
        circuit,
      });
    } else {
      setResults(null);
    }
  }, [selectedState, federalCircuits, states]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Scale className="h-12 w-12 text-blue-400 mr-4" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Civil Rights Research Platform
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Comprehensive resources for legal analysis, activism, and journalism related to civil rights across America's legal landscape
          </p>
        </div>

        {/* State Selection */}
        <div className="max-w-md mx-auto mb-12">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Select State for Analysis
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Choose a state...</option>
              {states.map(state => (
                <option key={state.code} value={state.code}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Tabs */}
        {selectedState && (
          <div className="mb-8">
            <div className="flex flex-wrap border-b border-gray-700">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 text-sm font-medium ${
                    activeTab === tab.id
                      ? 'text-blue-400 border-b-2 border-blue-400'
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Content based on active tab */}
        {selectedState && results && (
          <div className="mt-6">
            {activeTab === 'legal' && (
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <div className="flex items-center mb-6">
                  <Scale className="h-8 w-8 text-blue-400 mr-3" />
                  <h2 className="text-2xl font-bold text-blue-400">Legal Analysis: {results.state}</h2>
                </div>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2 text-blue-300">Federal Circuit Information</h3>
                  <div className={`p-4 rounded-lg ${
                    results.circuit?.hostility === 'EXTREMELY HOSTILE' ? 'bg-red-900/20 border border-red-700' :
                    results.circuit?.hostility === 'Protective' ? 'bg-green-900/20 border border-green-700' :
                    'bg-blue-900/20 border border-blue-700'
                  }`}>
                    <p className="text-white"><span className="font-semibold">Circuit:</span> {results.circuit?.circuit}</p>
                    <p className="text-white"><span className="font-semibold">Constitutional Approach:</span> {results.circuit?.hostility}</p>
                    <p className="text-white"><span className="font-semibold">Federal Districts:</span> {results.circuit?.districts.join(', ')}</p>
                  </div>
                </div>
                
                {/* Legal disclaimer */}
                <div className="bg-red-900/20 border border-red-700/50 rounded-xl p-6 mt-6">
                  <div className="flex items-start">
                    <AlertCircle className="h-6 w-6 text-red-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-red-400 mb-2">Legal Warning</h3>
                      <p className="text-gray-300 text-sm">
                        This analysis provides general information and does not constitute legal advice. 
                        Constitutional law changes rapidly, and circuit precedents evolve constantly.
                        Always consult with a qualified attorney for specific legal guidance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'activist' && (
              <ActivistToolkit stateCode={selectedState} />
            )}

            {activeTab === 'journalist' && (
              <JournalistToolkit stateCode={selectedState} />
            )}

            {activeTab === 'state' && (
              <StateProfile stateCode={selectedState} />
            )}
          </div>
        )}

        {!selectedState && (
          <div className="text-center py-16">
            <Scale className="h-24 w-24 text-blue-400 mx-auto mb-6 opacity-50" />
            <p className="text-xl text-gray-400 mb-4">Select a state to begin your analysis</p>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              This platform provides comprehensive resources for legal analysis, activism, and journalism
              related to civil rights across America's legal landscape.
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