import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Search, Scale, AlertCircle, Gavel, Shield, AlertTriangle, BookMarked, TrendingDown, Users, FileText, Camera, Globe } from 'lucide-react';
import './App.css';

// Import the enhanced components
import ActivistToolkit from './components/activist/ActivistToolkit.jsx';
import JournalistToolkit from './components/journalist/JournalistToolkit.jsx';
import StateProfile from './components/state-profiles/StateProfile.jsx';
import CircuitMap from './components/maps/CircuitMap.jsx';
import CircuitAnalysisChart from './components/charts/CircuitAnalysisChart.jsx';
import CaseExplorer from './components/CaseExplorer.jsx';
import { useAuth } from './context/AuthContext.jsx';

const CivilRightsLegalTool = () => {
  const [selectedState, setSelectedState] = useState('');
  const [results, setResults] = useState(null);
  const [activeTab, setActiveTab] = useState('legal');
  const { user } = useAuth();

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

  // First Amendment landmark cases for key states
  const firstAmendmentLandmarks = useMemo(() => ({
    'AL': {
      caseName: 'NAACP v. Alabama',
      citation: '357 U.S. 449 (1958)',
      year: '1958',
      constitutionalSignificance: 'Established freedom of association as fundamental right',
      facts: 'Alabama demanded NAACP membership lists during civil rights activism',
      holding: 'Compelled disclosure of membership violates First Amendment association rights',
      tacticalImpact: 'Foundation for associational privacy in organizing',
      modernApplication: 'Protects digital organizing and activist networks'
    },
    // ... other landmark cases
  }), []);

  // Circuit analysis
  const circuitAnalysis = useMemo(() => ({
    '1st Circuit': {
      approach: 'Protective',
      qualifiedImmunity: 'Strict application requiring clearly established law',
      section1983: 'Moderate plaintiff success rate',
      keyStrengths: ['Strong reasonable suspicion requirements', 'Protective of press rights'],
      warnings: 'Generally favorable but requires thorough precedent research'
    },
    // ... other circuits
  }), []);

  // State list for dropdown
  const states = useMemo(() => [
    { code: 'AL', name: 'Alabama' }, { code: 'AK', name: 'Alaska' }, { code: 'AZ', name: 'Arizona' },
    // ... all states
  ], []);

  const getWarningColor = useCallback((warningLevel) => {
    if (warningLevel?.includes('EXTREME DANGER')) return 'border-red-600 bg-red-900/30';
    if (warningLevel?.includes('Moderate Risk')) return 'border-yellow-600 bg-yellow-900/30';
    if (warningLevel?.includes('Low Risk') || warningLevel?.includes('Minimal Risk')) return 'border-green-600 bg-green-900/30';
    return 'border-gray-600 bg-gray-900/30';
  }, []);

  const getTacticalGuidance = useCallback((state, circuit) => {
    const baseGuidance = {
      universalPrinciples: [
        '"Officer, are you detaining me or am I free to leave?"',
        'If detained: "What specific facts give you reasonable suspicion?"',
        'Document badge numbers, patrol car numbers, time, location',
        '"I am exercising my right to remain silent."'
      ]
    };

    if (circuit?.hostility === 'EXTREMELY HOSTILE') {
      return {
        ...baseGuidance,
        circuitSpecific: [
          'CRITICAL WARNING: This circuit is extremely hostile to civil rights',
          'Avoid filing protest organizer cases in this jurisdiction',
          'Document everything - expect judicial skepticism',
          'Consider removal to different circuit if possible'
        ]
      };
    }

    if (circuit?.hostility === 'Protective') {
      return {
        ...baseGuidance,
        circuitSpecific: [
          'This circuit provides stronger constitutional protections',
          'Leverage favorable precedents for broader challenges',
          'Consider this jurisdiction for impact litigation',
          'Strong reasonable suspicion requirements work in your favor'
        ]
      };
    }

    return {
      ...baseGuidance,
      circuitSpecific: [
        'Standard constitutional analysis applies',
        'Focus on specific articulable facts requirement',
        'Document all interactions for potential challenges'
      ]
    };
  }, []);

  const getImmediateActions = useCallback((state) => {
    const stopAndId = stopAndIdStates[state];
    
    if (!stopAndId?.hasLaw) {
      return [
        'REFUSE identification unless under arrest',
        'Assert Fourth Amendment protections',
        'State: "I do not consent to any search"',
        'Ask: "Am I being detained or am I free to leave?"'
      ];
    }

    return [
      'Challenge reasonable suspicion: "What specific facts support suspicion?"',
      'Document officer responses and badge numbers',
      'Limit compliance to statutory minimum only',
      'Assert: "I exercise my right to remain silent beyond identification"'
    ];
  }, [stopAndIdStates]);

  // Update results when state changes
  useEffect(() => {
    if (selectedState) {
      const circuit = federalCircuits[selectedState];
      const stopAndId = stopAndIdStates[selectedState];
      const firstAmendmentLandmark = firstAmendmentLandmarks[selectedState];
      const circuitInfo = circuitAnalysis[circuit?.circuit];
      const stateConstitutionalInfo = null; // We'll add this later
      
      setResults({
        state: states.find(s => s.code === selectedState)?.name,
        circuit,
        stopAndId,
        firstAmendmentLandmark,
        circuitInfo,
        stateConstitutionalInfo,
        tacticalGuidance: getTacticalGuidance(selectedState, circuit),
        immediateActions: getImmediateActions(selectedState)
      });
    } else {
      setResults(null);
    }
  }, [selectedState, federalCircuits, stopAndIdStates, firstAmendmentLandmarks, circuitAnalysis, states, getTacticalGuidance, getImmediateActions]);

  // Original beautiful styling with enhanced functionality
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header - Original beautiful design */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Scale className="h-12 w-12 text-blue-400 mr-4" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Constitutional Rights Research Platform
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Forensic analysis of systematic constitutional violations through jurisdictional manipulation, 
            documenting patterns of institutional circumvention of citizen rights across America's legal landscape
          </p>
        </div>

        {/* Enhanced Navigation with Original Styling */}
        <div className="flex justify-center mb-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-2 border border-slate-700">
            <div className="flex space-x-1">
              {[
                { id: 'legal', label: 'Legal Analysis', icon: <Scale className="h-4 w-4" /> },
                { id: 'activist', label: 'Activist Toolkit', icon: <Users className="h-4 w-4" /> },
                { id: 'journalist', label: 'Journalist Toolkit', icon: <FileText className="h-4 w-4" /> },
                { id: 'state', label: 'State Profile', icon: <Globe className="h-4 w-4" /> },
                { id: 'cases', label: 'Case Explorer', icon: <Gavel className="h-4 w-4" /> },
                { id: 'visualization', label: 'Data Visualization', icon: <TrendingDown className="h-4 w-4" /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* State Selection - Original beautiful design */}
        <div className="max-w-md mx-auto mb-12">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Select Jurisdiction for Constitutional Analysis
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Choose jurisdiction for investigation...</option>
              {states.map(state => (
                <option key={state.code} value={state.code}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Enhanced Content Area with Original Styling */}
        {selectedState && results && (
          <div className="space-y-8">
            {activeTab === 'legal' && (
              <div className="space-y-8">
                {/* Circuit Hostility Analysis - Original beautiful design */}
                <div className={`backdrop-blur-sm rounded-xl p-8 border-2 ${
                  results.circuit.hostility === 'EXTREMELY HOSTILE' ? 'border-red-500 bg-red-900/20' :
                  results.circuit.hostility === 'Protective' ? 'border-green-500 bg-green-900/20' :
                  'border-yellow-500 bg-yellow-900/20'
                }`}>
                  <div className="flex items-center mb-6">
                    {results.circuit.hostility === 'EXTREMELY HOSTILE' ? 
                      <AlertTriangle className="h-8 w-8 text-red-400 mr-3" /> :
                      <Gavel className="h-8 w-8 text-blue-400 mr-3" />
                    }
                    <h2 className="text-2xl font-bold">
                      <span className="text-blue-400">Federal Circuit Analysis: </span>
                      <span className={
                        results.circuit.hostility === 'EXTREMELY HOSTILE' ? 'text-red-400' :
                        results.circuit.hostility === 'Protective' ? 'text-green-400' :
                        'text-yellow-400'
                      }>
                        {results.circuit.hostility}
                      </span>
                    </h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-purple-400">{results.circuit.circuit}</h3>
                      <div className="space-y-3">
                        <div>
                          <span className="font-medium text-white">Federal Districts:</span>
                          <span className="ml-2 text-gray-300">{results.circuit.districts.join(', ')}</span>
                        </div>
                        {results.circuitInfo && (
                          <>
                            <div>
                              <span className="font-medium text-white">Qualified Immunity Approach:</span>
                              <span className="ml-2 text-gray-300">{results.circuitInfo.qualifiedImmunity}</span>
                            </div>
                            <div>
                              <span className="font-medium text-white">§1983 Success Rate:</span>
                              <span className="ml-2 text-gray-300">{results.circuitInfo.section1983}</span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-purple-400">Strategic Analysis</h3>
                      <div className={`p-4 rounded-lg border ${
                        results.circuit.hostility === 'EXTREMELY HOSTILE' ? 'border-red-500 bg-red-900/30' :
                        results.circuit.hostility === 'Protective' ? 'border-green-500 bg-green-900/30' :
                        'border-yellow-500 bg-yellow-900/30'
                      }`}>
                        <p className="text-gray-300 text-sm font-medium">
                          {results.circuitInfo?.warnings || 'Standard constitutional analysis applies'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stop and ID Analysis - Original design */}
                <div className={`backdrop-blur-sm rounded-xl p-8 border-2 ${getWarningColor(results.stopAndId.warningLevel)}`}>
                  <div className="flex items-center mb-6">
                    <Shield className="h-8 w-8 text-red-400 mr-3" />
                    <h2 className="text-2xl font-bold text-red-400">
                      Identification Laws: {results.stopAndId.hasLaw ? 'CONSTITUTIONAL VULNERABILITY' : 'CONSTITUTIONAL PROTECTION'}
                    </h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-purple-400">Legal Framework</h3>
                      <div className="space-y-3">
                        <div>
                          <span className="font-medium text-white">Statute:</span>
                          <span className="ml-2 text-gray-300">{results.stopAndId.statute}</span>
                        </div>
                        <div>
                          <span className="font-medium text-white">Requirements:</span>
                          <span className="ml-2 text-gray-300">{results.stopAndId.requirements}</span>
                        </div>
                        <div>
                          <span className="font-medium text-white">Penalty:</span>
                          <span className="ml-2 text-gray-300">{results.stopAndId.penalty}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-purple-400">Tactical Response</h3>
                      <ul className="space-y-2">
                        {results.stopAndId.constitutionalStrategy?.map((strategy, index) => (
                          <li key={index} className="text-gray-300 text-sm flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            {strategy}
                          </li>
                        ))}
                      </ul>
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

            {activeTab === 'cases' && (
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <CaseExplorer />
              </div>
            )}

            {activeTab === 'visualization' && (
              <div className="space-y-8">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                  <CircuitMap selectedState={selectedState} onStateSelect={setSelectedState} />
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                  <CircuitAnalysisChart circuitData={results?.circuit} />
                </div>
              </div>
            )}
          </div>
        )}

        {!selectedState && (
          <div className="text-center py-16">
            <Scale className="h-24 w-24 text-blue-400 mx-auto mb-6 opacity-50" />
            <p className="text-xl text-gray-400 mb-4">Select a jurisdiction to begin constitutional analysis</p>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              This investigative platform documents systematic patterns of constitutional circumvention through jurisdictional manipulation,
              revealing how identical citizen conduct faces dramatically different legal consequences across America's fragmented constitutional landscape.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const App = () => {
  return <CivilRightsLegalTool />;
};

export default App;