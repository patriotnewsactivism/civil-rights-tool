import React, { useState, useEffect, useMemo, useCallback, Suspense } from 'react';
import { Search, Scale, AlertCircle, Gavel, Shield, AlertTriangle, BookMarked, TrendingDown, Users, FileText, Camera, Globe, Leaf, Phone, Moon, Sun, AlertOctagon, RefreshCw, Wifi } from 'lucide-react';
import './App.css';
import ErrorBoundary, { withErrorBoundary } from './components/ErrorBoundary.jsx';

// Import the enhanced components with lazy loading
const ActivistToolkit = React.lazy(() => import('./components/activist/ActivistToolkit.jsx'));
const JournalistToolkit = React.lazy(() => import('./components/journalist/JournalistToolkit.jsx'));
const EnhancedStateProfile = React.lazy(() => import('./components/state-profiles/EnhancedStateProfile.jsx'));
const CircuitMap = React.lazy(() => import('./components/maps/CircuitMap.jsx'));
const CircuitAnalysisChart = React.lazy(() => import('./components/charts/CircuitAnalysisChart.jsx'));
const CircuitCourtCaseLawChart = React.lazy(() => import('./components/charts/CircuitCourtCaseLawChart.jsx'));
const CaseExplorer = React.lazy(() => import('./components/CaseExplorer.jsx'));
const LegalToolkitPro = React.lazy(() => import('./components/LegalToolkitPro.jsx'));

import { useAuth } from './context/AuthContext.jsx';
import { useTheme } from './context/ThemeContext.jsx';

// Component loading fallback
const ComponentLoading = () => (
  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 animate-pulse">
    <div className="h-8 bg-white/10 rounded w-1/3 mb-4"></div>
    <div className="h-4 bg-white/10 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-white/10 rounded w-2/3 mb-2"></div>
    <div className="h-4 bg-white/10 rounded w-1/2 mb-4"></div>
    <div className="h-32 bg-white/10 rounded mb-4"></div>
  </div>
);

// Wrap each component with error boundary
const SafeActivistToolkit = withErrorBoundary(ActivistToolkit);
const SafeJournalistToolkit = withErrorBoundary(JournalistToolkit);
const SafeEnhancedStateProfile = withErrorBoundary(EnhancedStateProfile);
const SafeCircuitMap = withErrorBoundary(CircuitMap);
const SafeCircuitAnalysisChart = withErrorBoundary(CircuitAnalysisChart);
const SafeCircuitCourtCaseLawChart = withErrorBoundary(CircuitCourtCaseLawChart);
const SafeCaseExplorer = withErrorBoundary(CaseExplorer);
   const SafeLegalToolkitPro = withErrorBoundary(LegalToolkitPro);

const CivilRightsLegalTool = () => {
  const [selectedState, setSelectedState] = useState('');
  const [results, setResults] = useState(null);
  const [activeTab, setActiveTab] = useState('legal');
  const { darkMode, toggleTheme } = useTheme();
  const { user, supabaseAvailable, checkSupabaseAvailability } = useAuth();
  const [isRetrying, setIsRetrying] = useState(false);
  
  // Handle retry connection
  const handleRetryConnection = async () => {
    setIsRetrying(true);
    await checkSupabaseAvailability();
    setTimeout(() => setIsRetrying(false), 1000);
  };
  

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
          
          {/* Database unavailable banner */}
          <DatabaseUnavailableBanner />
        </header>

        <div className="mb-8">
          <div className={`flex flex-wrap border-b ${darkMode ? 'border-white/10' : 'border-slate-200'}`}>
            <button
              className={`px-4 py-3 flex items-center font-medium text-sm ${activeTab === 'legal' ? 
                (darkMode ? 'text-white border-b-2 border-blue-500' : 'text-blue-900 border-b-2 border-blue-500') : 
                (darkMode ? 'text-white/70 hover:text-white' : 'text-slate-600 hover:text-blue-900')}`}
              onClick={() => setActiveTab('legal')}
              >
                <Scale className="h-4 w-4 mr-2" />
              Legal Analysis
            </button>
            <button
              className={`px-4 py-3 flex items-center font-medium text-sm ${activeTab === 'activist' ? 
                (darkMode ? 'text-white border-b-2 border-blue-500' : 'text-blue-900 border-b-2 border-blue-500') : 
                (darkMode ? 'text-white/70 hover:text-white' : 'text-slate-600 hover:text-blue-900')}`}
            >
              <AlertTriangle className="h-4 w-4 mr-2" />
              Activist Toolkit
            </button>
            <button
              className={`px-4 py-3 flex items-center font-medium text-sm ${activeTab === 'journalist' ? 
                (darkMode ? 'text-white border-b-2 border-blue-500' : 'text-blue-900 border-b-2 border-blue-500') : 
                (darkMode ? 'text-white/70 hover:text-white' : 'text-slate-600 hover:text-blue-900')}`}
              onClick={() => setActiveTab('journalist')}
            >
              <Camera className="h-4 w-4 mr-2" />
              Journalist Toolkit
            </button>
            <button
              className={`px-4 py-3 flex items-center font-medium text-sm ${activeTab === 'marijuana' ? 
                (darkMode ? 'text-white border-b-2 border-blue-500' : 'text-blue-900 border-b-2 border-blue-500') : 
                (darkMode ? 'text-white/70 hover:text-white' : 'text-slate-600 hover:text-blue-900')}`}
              onClick={() => setActiveTab('marijuana')}
            >
              <Leaf className="h-4 w-4 mr-2" />
              Marijuana Laws
            </button>
            <button
              className={`px-4 py-3 flex items-center font-medium text-sm ${activeTab === 'recording' ? 
                (darkMode ? 'text-white border-b-2 border-blue-500' : 'text-blue-900 border-b-2 border-blue-500') : 
                (darkMode ? 'text-white/70 hover:text-white' : 'text-slate-600 hover:text-blue-900')}`}
              onClick={() => setActiveTab('recording')}
            >
              <Phone className="h-4 w-4 mr-2" />
              Recording Laws
            </button>
            <button
              className={`px-4 py-3 flex items-center font-medium text-sm ${activeTab === 'cases' ? 
                (darkMode ? 'text-white border-b-2 border-blue-500' : 'text-blue-900 border-b-2 border-blue-500') : 
                (darkMode ? 'text-white/70 hover:text-white' : 'text-slate-600 hover:text-blue-900')}`}
              onClick={() => setActiveTab('cases')}
            >
              <Gavel className="h-4 w-4 mr-2" />
              Case Explorer
            </button>
               <button
                 className={`px-4 py-3 flex items-center font-medium text-sm ${activeTab === 'toolkit' ? 
                   (darkMode ? 'text-white border-b-2 border-blue-500' : 'text-blue-900 border-b-2 border-blue-500') : 
                   (darkMode ? 'text-white/70 hover:text-white' : 'text-slate-600 hover:text-blue-900')}`}
                 onClick={() => setActiveTab('toolkit')}
               >
                 <FileText className="h-4 w-4 mr-2" />
                 Legal Toolkit Pro
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
                    
                    {selectedState && (
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-white/5' : 'bg-blue-50'}`}>
                        <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                          {selectedState} Federal Court Information
                        </h3>
                        <p className={`${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
                          <span className="font-medium">Circuit:</span> {federalCircuits[selectedState].circuit}
                        </p>
                        <p className={`${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
                          <span className="font-medium">Civil Rights Posture:</span>{' '}
                          <span className={
                            federalCircuits[selectedState].hostility === 'Protective' ? 'text-green-400' :
                            federalCircuits[selectedState].hostility === 'Moderate' ? 'text-yellow-400' :
                            'text-red-400'
                          }>
                            {federalCircuits[selectedState].hostility}
                          </span>
                        </p>
                        <div className="mt-2">
                          <p className={`font-medium mb-1 ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>Federal Districts:</p>
                          <ul className={`list-disc pl-5 ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
                            {federalCircuits[selectedState].districts.map((district, index) => (
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

          {activeTab === 'activist' && (
            <ErrorBoundary>
              <Suspense fallback={<ComponentLoading />}>
                <SafeActivistToolkit />
              </Suspense>
            </ErrorBoundary>
          )}

          {activeTab === 'journalist' && (
            <ErrorBoundary>
              <Suspense fallback={<ComponentLoading />}>
                <SafeJournalistToolkit />
              </Suspense>
            </ErrorBoundary>
          )}

          {activeTab === 'marijuana' && (
            <div>
              <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                State Marijuana Laws
              </h2>
              <div className="mb-6">
                <label htmlFor="marijuana-state-select" className={`block mb-2 font-medium ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
                  Select a State
                </label>
                <select
                  id="marijuana-state-select"
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
              
              <ErrorBoundary>
                <Suspense fallback={<ComponentLoading />}>
                  <SafeEnhancedStateProfile stateCode={selectedState} />
                </Suspense>
              </ErrorBoundary>
            </div>
          )}

          {activeTab === 'recording' && (
            <div>
              <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                State Recording Consent Laws
              </h2>
              <div className="mb-6">
                <label htmlFor="recording-state-select" className={`block mb-2 font-medium ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
                  Select a State
                </label>
                <select
                  id="recording-state-select"
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
              
              <ErrorBoundary>
                <Suspense fallback={<ComponentLoading />}>
                  <SafeEnhancedStateProfile stateCode={selectedState} />
                </Suspense>
              </ErrorBoundary>
            </div>
          )}

          {activeTab === 'cases' && (
            <ErrorBoundary>
              <Suspense fallback={<ComponentLoading />}>
                <SafeCaseExplorer />
              </Suspense>
            </ErrorBoundary>
          )}
             {activeTab === 'toolkit' && (
               <ErrorBoundary>
                 <Suspense fallback={<ComponentLoading />}>
                   <SafeLegalToolkitPro />
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

export default CivilRightsLegalTool;