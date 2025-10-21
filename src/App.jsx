import React, { useState, useEffect, useMemo, useCallback, Suspense } from 'react';
import { Search, Scale, AlertCircle, Gavel, Shield, AlertTriangle, BookMarked, TrendingDown, Users, FileText, Camera, Globe, Leaf, Phone, Moon, Sun, AlertOctagon, RefreshCw, Wifi, Zap, Brain, Sparkles, TrendingUp, Map, Grid, CreditCard } from 'lucide-react';
import './App.css';
import ErrorBoundary, { withErrorBoundary } from './components/ErrorBoundary.jsx';
import EnhancedResourcesAndLaws from './components/EnhancedResourcesAndLaws.jsx';
import EnhancedCaseExplorer from './components/EnhancedCaseExplorer.jsx';
import UltimateDashboard from './components/UltimateDashboard.jsx';
import EnhancedRealTimeDashboard from './components/EnhancedRealTimeDashboard.jsx';
import EnhancedInteractive3DMap from './components/EnhancedInteractive3DMap.jsx';
import EnhancedLegislativeTracker from './components/EnhancedLegislativeTracker.jsx';
import EnhancedAILegalAssistant from './components/EnhancedAILegalAssistant.jsx';
import AILegalAssistant from './components/AILegalAssistant.jsx';
import HomePage from './components/HomePage.tsx';

// Import the enhanced components with lazy loading
const CivilRightsHub = React.lazy(() => import('./components/CivilRightsHub.tsx'));
const ActivistToolkit = React.lazy(() => import('./components/activist/ActivistToolkit.jsx'));
const JournalistToolkit = React.lazy(() => import('./components/journalist/JournalistToolkit.jsx'));
const EnhancedStateProfile = React.lazy(() => import('./components/state-profiles/EnhancedStateProfile.jsx'));
const CircuitMap = React.lazy(() => import('./components/maps/CircuitMap.jsx'));
const CircuitAnalysisChart = React.lazy(() => import('./components/charts/CircuitAnalysisChart.jsx'));
const CircuitCourtCaseLawChart = React.lazy(() => import('./components/charts/CircuitCourtCaseLawChart.jsx'));
const CaseExplorer = React.lazy(() => import('./components/EnhancedCaseExplorer.jsx'));
const LegalToolkitPro = React.lazy(() => import('./components/LegalToolkitPro.jsx'));
const ResourcesAndLaws = React.lazy(() => import('./components/EnhancedResourcesAndLaws.jsx'));
const PressPassGenerator = React.lazy(() => import('./components/PressPassGenerator.tsx'));

import { useAuth } from './context/AuthContext.jsx';
import { useTheme } from './context/ThemeContext.jsx';

// Component loading fallback
const ComponentLoading = () => (
    <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg p-8 animate-pulse">
      <div className="h-8 bg-white/30 rounded w-1/3 mb-4"></div>
      <div className="h-4 bg-white/30 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-white/30 rounded w-2/3 mb-2"></div>
      <div className="h-4 bg-white/30 rounded w-1/2 mb-4"></div>
      <div className="h-32 bg-white/30 rounded mb-4"></div>
    </div>
  );

// Wrap each component with error boundary
const SafeCivilRightsHub = withErrorBoundary(CivilRightsHub);
const SafeActivistToolkit = withErrorBoundary(ActivistToolkit);
const SafeJournalistToolkit = withErrorBoundary(JournalistToolkit);
const SafeEnhancedStateProfile = withErrorBoundary(EnhancedStateProfile);
const SafeCircuitMap = withErrorBoundary(CircuitMap);
const SafeCircuitAnalysisChart = withErrorBoundary(CircuitAnalysisChart);
const SafeCircuitCourtCaseLawChart = withErrorBoundary(CircuitCourtCaseLawChart);
const SafeCaseExplorer = withErrorBoundary(CaseExplorer);
const SafeLegalToolkitPro = withErrorBoundary(LegalToolkitPro);
const SafeResourcesAndLaws = withErrorBoundary(ResourcesAndLaws);
const SafePressPassGenerator = withErrorBoundary(PressPassGenerator);

const CivilRightsLegalTool = () => {
  const [selectedState, setSelectedState] = useState('');
  const [results, setResults] = useState(null);
  const [activeTab, setActiveTab] = useState('ultimate');
  const { darkMode, toggleTheme } = useTheme();
  const { user, supabaseAvailable, checkSupabaseAvailability } = useAuth();
  const [isRetrying, setIsRetrying] = useState(false);

  // Handle retry connection
  const handleRetryConnection = async () => {
    setIsRetrying(true);
    await checkSupabaseAvailability();
    setTimeout(() => setIsRetrying(false), 1000);
  };

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
    'DC': { circuit: 'D.C. Circuit', hostility: 'Protective', districts: ['District of Columbia'] }
  }), []);

  const handleStateSelect = useCallback((e) => {
    setSelectedState(e.target.value);
  }, []);

  const handleMapStateSelect = useCallback((stateCode) => {
    setSelectedState(stateCode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Set dark mode by default
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800' : 'bg-gradient-to-br from-blue-50 via-white to-blue-50'}`}>
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <div className="flex justify-between items-center">
            <h1 className={`text-4xl font-bold ${darkMode ? 'bg-gradient-to-r from-white to-blue-200' : 'bg-gradient-to-r from-blue-900 to-purple-800'} bg-clip-text text-transparent`}>
              Civil Rights Legal Tool
            </h1>
            <button 
              onClick={toggleTheme} 
              className={`p-2 rounded-full ${darkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-blue-100 hover:bg-blue-200'}`}
            >
              {darkMode ? <Sun className="h-5 w-5 text-yellow-300" /> : <Moon className="h-5 w-5 text-blue-800" />}
            </button>
          </div>
          <p className={`mt-2 ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
            Comprehensive legal resources for activists, journalists, and citizens
          </p>
          
        </header>

        <div className="mb-8">
          <div className={`flex flex-wrap border-b ${darkMode ? 'border-white/30' : 'border-slate-400'}`}>
            <button
              className={`px-4 py-3 flex items-center font-bold text-base ${activeTab === 'civilrights' ? 
                (darkMode ? 'text-white border-b-2 border-red-400' : 'text-blue-800 border-b-2 border-red-400') : 
                (darkMode ? 'text-white/90 hover:text-white' : 'text-slate-700 hover:text-blue-800')}`}
              onClick={() => setActiveTab('civilrights')}
              >
                <AlertOctagon className="h-5 w-5 mr-2" />
              Civil Rights Hub
            </button>
            <button
              className={`px-4 py-3 flex items-center font-bold text-base ${activeTab === 'ultimate' ? 
                (darkMode ? 'text-white border-b-2 border-blue-400' : 'text-blue-800 border-b-2 border-blue-400') : 
                (darkMode ? 'text-white/90 hover:text-white' : 'text-slate-700 hover:text-blue-800')}`}
              onClick={() => setActiveTab('ultimate')}
              >
                <Sparkles className="h-5 w-5 mr-2" />
              Ultimate Dashboard
            </button>
            <button
              className={`px-4 py-3 flex items-center font-bold text-base ${activeTab === 'realtime' ? 
                (darkMode ? 'text-white border-b-2 border-blue-400' : 'text-blue-800 border-b-2 border-blue-400') : 
                (darkMode ? 'text-white/90 hover:text-white' : 'text-slate-700 hover:text-blue-800')}`}
              onClick={() => setActiveTab('realtime')}
              >
                <TrendingUp className="h-5 w-5 mr-2" />
              Real-Time Monitor
            </button>
            <button
              className={`px-4 py-3 flex items-center font-bold text-base ${activeTab === '3dmap' ? 
                (darkMode ? 'text-white border-b-2 border-blue-400' : 'text-blue-800 border-b-2 border-blue-400') : 
                (darkMode ? 'text-white/90 hover:text-white' : 'text-slate-700 hover:text-blue-800')}`}
              onClick={() => setActiveTab('3dmap')}
              >
                <Map className="h-5 w-5 mr-2" />
              Interactive 3D Map
            </button>
            <button
              className={`px-4 py-3 flex items-center font-bold text-base ${activeTab === 'legislative' ? 
                (darkMode ? 'text-white border-b-2 border-blue-400' : 'text-blue-800 border-b-2 border-blue-400') : 
                (darkMode ? 'text-white/90 hover:text-white' : 'text-slate-700 hover:text-blue-800')}`}
              onClick={() => setActiveTab('legislative')}
              >
                <FileText className="h-5 w-5 mr-2" />
              Legislative Tracker
            </button>
            <button
              className={`px-4 py-3 flex items-center font-bold text-base ${activeTab === 'ai' ? 
                (darkMode ? 'text-white border-b-2 border-blue-400' : 'text-blue-800 border-b-2 border-blue-400') : 
                (darkMode ? 'text-white/90 hover:text-white' : 'text-slate-700 hover:text-blue-800')}`}
              onClick={() => setActiveTab('ai')}
              >
                <Brain className="h-5 w-5 mr-2" />
              AI Legal Assistant
            </button>
            <button
              className={`px-4 py-3 flex items-center font-bold text-base ${activeTab === 'legal' ? 
                (darkMode ? 'text-white border-b-2 border-blue-400' : 'text-blue-800 border-b-2 border-blue-400') : 
                (darkMode ? 'text-white/90 hover:text-white' : 'text-slate-700 hover:text-blue-800')}`}
              onClick={() => setActiveTab('legal')}
              >
                <Scale className="h-5 w-5 mr-2" />
              Legal Analysis
            </button>
            <button
              className={`px-4 py-3 flex items-center font-bold text-base ${activeTab === 'resources' ? 
                (darkMode ? 'text-white border-b-2 border-blue-400' : 'text-blue-800 border-b-2 border-blue-400') : 
                (darkMode ? 'text-white/90 hover:text-white' : 'text-slate-700 hover:text-blue-800')}`}
              onClick={() => setActiveTab('resources')}
            >
              <BookMarked className="h-5 w-5 mr-2" />
              Resources & Laws
            </button>
            <button
              className={`px-4 py-3 flex items-center font-bold text-base ${activeTab === 'cases' ? 
                (darkMode ? 'text-white border-b-2 border-blue-400' : 'text-blue-800 border-b-2 border-blue-400') : 
                (darkMode ? 'text-white/90 hover:text-white' : 'text-slate-700 hover:text-blue-800')}`}
              onClick={() => setActiveTab('cases')}
            >
              <Gavel className="h-5 w-5 mr-2" />
              Case Explorer
            </button>
            <button
              className={`px-4 py-3 flex items-center font-bold text-base ${activeTab === 'toolkit' ? 
                (darkMode ? 'text-white border-b-2 border-blue-400' : 'text-blue-800 border-b-2 border-blue-400') : 
                (darkMode ? 'text-white/90 hover:text-white' : 'text-slate-700 hover:text-blue-800')}`}
              onClick={() => setActiveTab('toolkit')}
            >
              <FileText className="h-5 w-5 mr-2" />
              Legal Toolkit Pro
            </button>
            <button
              className={`px-4 py-3 flex items-center font-bold text-base ${activeTab === 'presspass' ? 
                (darkMode ? 'text-white border-b-2 border-blue-400' : 'text-blue-800 border-b-2 border-blue-400') : 
                (darkMode ? 'text-white/90 hover:text-white' : 'text-slate-700 hover:text-blue-800')}`}
              onClick={() => setActiveTab('presspass')}
            >
              <Camera className="h-5 w-5 mr-2" />
              Free Press Pass
            </button>
          </div>
        </div>

        <ErrorBoundary>
          {activeTab === 'legal' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <div className={`p-6 rounded-xl shadow-xl ${darkMode ? 'bg-white/5 backdrop-blur-sm border border-white/10' : 'bg-white border border-slate-200'}`}>
                    <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                      Federal Circuit Analysis
                    </h2>
                    <p className={`mb-6 ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
                      Select a state to see its federal circuit court jurisdiction and analysis of how favorable the circuit is for civil rights cases.
                    </p>
                    
                    <div className="mb-6">
                      <label htmlFor="state-select" className={`block mb-2 font-medium ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
                        Select a State
                      </label>
                      <select
                        id="state-select"
                        value={selectedState}
                        onChange={handleStateSelect}
                        className={`w-full p-2 rounded-lg border ${darkMode ? 'bg-white/10 border-white/20 text-white' : 'bg-white border-slate-300 text-slate-800'}`}
                      >
                        <option value="">-- Select a State --</option>
                        {Object.keys(federalCircuits).sort().map(state => (
                          <option key={state} value={state}>{state}</option>
                        ))}
                      </select>
                    </div>
                    
                    {selectedState && federalCircuits[selectedState] && (
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-white/5' : 'bg-blue-50'}`}>
                        <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                          {selectedState} Federal Court Information
                        </h3>
                        <p className={`${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
                          <span className="font-medium">Circuit:</span> {federalCircuits[selectedState]?.circuit || 'N/A'}
                        </p>
                        <p className={`${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
                          <span className="font-medium">Civil Rights Posture:</span> 
                          <span className={
                            federalCircuits[selectedState]?.hostility === 'Protective' ? 'text-green-400' :
                            federalCircuits[selectedState]?.hostility === 'Moderate' ? 'text-yellow-400' :
                            'text-red-400'
                          }>
                            {federalCircuits[selectedState]?.hostility || 'Unknown'}
                          </span>
                        </p>
                        <div className="mt-2">
                          <p className={`font-medium mb-1 ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>Federal Districts:</p>
                          <ul className={`list-disc pl-5 ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
                            {(federalCircuits[selectedState]?.districts || []).map((district, index) => (
                              <li key={index}>{district}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div>
                  <div className={`p-6 rounded-xl shadow-xl h-full ${darkMode ? 'bg-white/5 backdrop-blur-sm border border-white/10' : 'bg-white border border-slate-200'}`}>
                    <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                      Quick Resources
                    </h2>
                    <ul className="space-y-3">
                      <li>
                        <a 
                          href="https://www.uscourts.gov/about-federal-courts/court-website-links/court-website-links" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`flex items-center p-3 rounded-lg ${darkMode ? 'bg-white/5 hover:bg-white/10 text-white' : 'bg-blue-50 hover:bg-blue-100 text-blue-800'}`}
                        >
                          <Globe className="h-5 w-5 mr-3" />
                          <span>Federal Court Websites</span>
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://www.justice.gov/crt" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`flex items-center p-3 rounded-lg ${darkMode ? 'bg-white/5 hover:bg-white/10 text-white' : 'bg-blue-50 hover:bg-blue-100 text-blue-800'}`}
                        >
                          <Scale className="h-5 w-5 mr-3" />
                          <span>DOJ Civil Rights Division</span>
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://www.aclu.org/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`flex items-center p-3 rounded-lg ${darkMode ? 'bg-white/5 hover:bg-white/10 text-white' : 'bg-blue-50 hover:bg-blue-100 text-blue-800'}`}
                        >
                          <Shield className="h-5 w-5 mr-3" />
                          <span>ACLU Resources</span>
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://www.splcenter.org/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`flex items-center p-3 rounded-lg ${darkMode ? 'bg-white/5 hover:bg-white/10 text-white' : 'bg-blue-50 hover:bg-blue-100 text-blue-800'}`}
                        >
                          <AlertCircle className="h-5 w-5 mr-3" />
                          <span>Southern Poverty Law Center</span>
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://www.naacpldf.org/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`flex items-center p-3 rounded-lg ${darkMode ? 'bg-white/5 hover:bg-white/10 text-white' : 'bg-blue-50 hover:bg-blue-100 text-blue-800'}`}
                        >
                          <Gavel className="h-5 w-5 mr-3" />
                          <span>NAACP Legal Defense Fund</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                <ErrorBoundary>
                  <Suspense fallback={<ComponentLoading />}>
                    <SafeCircuitMap selectedState={selectedState} onStateSelect={handleMapStateSelect} />
                  </Suspense>
                </ErrorBoundary>
                
                <ErrorBoundary>
                  <Suspense fallback={<ComponentLoading />}>
                    <SafeCircuitAnalysisChart />
                  </Suspense>
                </ErrorBoundary>
                
                <ErrorBoundary>
                  <Suspense fallback={<ComponentLoading />}>
                    <SafeCircuitCourtCaseLawChart />
                  </Suspense>
                </ErrorBoundary>
              </div>
            </div>
          )}

          {activeTab === 'resources' && (
            <ErrorBoundary>
              <Suspense fallback={<ComponentLoading />}>
                <SafeResourcesAndLaws selectedState={selectedState} darkMode={darkMode} />
              </Suspense>
            </ErrorBoundary>
          )}

          {activeTab === 'cases' && (
            <ErrorBoundary>
              <Suspense fallback={<ComponentLoading />}>
                <SafeCaseExplorer />
              </Suspense>
            </ErrorBoundary>
          )}
          
          {activeTab === 'civilrights' && (
            <ErrorBoundary>
              <Suspense fallback={<ComponentLoading />}>
                <SafeCivilRightsHub />
              </Suspense>
            </ErrorBoundary>
          )}

          {activeTab === 'ultimate' && (
            <ErrorBoundary>
              <Suspense fallback={<ComponentLoading />}>
                <UltimateDashboard darkMode={darkMode} />
              </Suspense>
            </ErrorBoundary>
          )}
          
          {activeTab === 'realtime' && (
            <ErrorBoundary>
              <Suspense fallback={<ComponentLoading />}>
                <EnhancedRealTimeDashboard darkMode={darkMode} />
              </Suspense>
            </ErrorBoundary>
          )}
          
          {activeTab === '3dmap' && (
            <ErrorBoundary>
              <Suspense fallback={<ComponentLoading />}>
                <EnhancedInteractive3DMap darkMode={darkMode} />
              </Suspense>
            </ErrorBoundary>
          )}
          
          {activeTab === 'legislative' && (
            <ErrorBoundary>
              <Suspense fallback={<ComponentLoading />}>
                <EnhancedLegislativeTracker darkMode={darkMode} />
              </Suspense>
            </ErrorBoundary>
          )}
          
          {activeTab === 'ai' && (
            <ErrorBoundary>
              <Suspense fallback={<ComponentLoading />}>
                <EnhancedAILegalAssistant darkMode={darkMode} />
              </Suspense>
            </ErrorBoundary>
          )}
          
          {activeTab === 'presspass' && (
            <ErrorBoundary>
              <Suspense fallback={<ComponentLoading />}>
                <SafePressPassGenerator />
              </Suspense>
            </ErrorBoundary>
          )}
        </ErrorBoundary>
      </div>
      
      <footer className={`py-6 px-4 border-t ${darkMode ? 'border-white/10 text-white/50' : 'border-slate-200 text-slate-500'}`}>
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">
                Civil Rights Legal Tool © {new Date().getFullYear()} | For educational purposes only
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-sm hover:underline">Privacy Policy</a>
              <a href="#" className="text-sm hover:underline">Terms of Use</a>
              <a href="#" className="text-sm hover:underline">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Main App - Show bold black HomePage
const App = () => {
  return <HomePage />;
};

export default App;