<<<<<<< HEAD
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
=======
import React, { useState } from 'react';
import { Search, FileText, MessageCircle, MapPin, Shield, Users, Eye, Clock, Newspaper, Database, Upload } from 'lucide-react';
import './App.css';
import EnhancedInteractive3DMap from './components/EnhancedInteractive3DMap';
import EnhancedResourcesAndLaws from './components/EnhancedResourcesAndLaws';
import AILegalAssistant from './components/AILegalAssistant';
import EnhancedRealTimeDashboard from './components/EnhancedRealTimeDashboard';
import EnhancedFOIARequestTool from './components/EnhancedFOIARequestTool';
import PoliceAccountabilityDatabase from './components/PoliceAccountabilityDatabase';
import InvestigativeJournalismSuite from './components/InvestigativeJournalismSuite';

const App = () => {
>>>>>>> 80c2e1954a68162125132b7d79023abf0fce04fb
  const [activeTab, setActiveTab] = useState('ultimate');

  const tabs = [
    { id: 'ultimate', label: 'Ultimate Dashboard', icon: Shield },
    { id: 'accountability', label: 'Police Accountability', icon: Database },
    { id: 'journalism', label: 'Investigative Tools', icon: Upload },
    { id: 'foia', label: 'FOIA Requests', icon: FileText },
    { id: 'dashboard', label: 'Real-Time Monitor', icon: Clock },
    { id: 'map', label: 'Interactive Map', icon: MapPin },
    { id: 'ai', label: 'AI Legal Assistant', icon: MessageCircle },
    { id: 'resources', label: 'Resources & Laws', icon: Search }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'ultimate':
        return <UltimateDashboard />;
      case 'accountability':
        return <PoliceAccountabilityDatabase />;
      case 'journalism':
        return <InvestigativeJournalismSuite />;
      case 'foia':
        return <EnhancedFOIARequestTool />;
      case 'dashboard':
        return <EnhancedRealTimeDashboard />;
      case 'map':
        return <EnhancedInteractive3DMap />;
      case 'ai':
        return <AILegalAssistant />;
      case 'resources':
        return <EnhancedResourcesAndLaws />;
      default:
        return <UltimateDashboard />;
    }
  };

  return (
<<<<<<< HEAD
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
=======
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-blue-600" />
              <h1 className="ml-3 text-2xl font-bold text-gray-900">Civil Rights Tool</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Empowering Communities</span>
              <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Users className="h-4 w-4 text-white" />
              </div>
            </div>
>>>>>>> 80c2e1954a68162125132b7d79023abf0fce04fb
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto py-4">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderTabContent()}
      </main>

<<<<<<< HEAD
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
=======
      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-600">
              Empowering citizens with knowledge and tools to protect their civil rights.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Built for investigative journalism and community advocacy.
            </p>
>>>>>>> 80c2e1954a68162125132b7d79023abf0fce04fb
          </div>
        </div>
      </footer>
    </div>
  );
};

<<<<<<< HEAD
// Main App - Show bold black HomePage
const App = () => {
  return <HomePage />;
=======
// Ultimate Dashboard Component
const UltimateDashboard = () => {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to the Ultimate Civil Rights Toolkit
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your comprehensive platform for civil rights protection, legal guidance, and investigative journalism.
          Access real-time data, AI-powered legal assistance, and community organizing tools.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
            <Database className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Police Accountability</h3>
          <p className="text-gray-600">
            Track officer misconduct, file complaints, and access comprehensive accountability data across jurisdictions.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white mb-4">
            <Upload className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Investigative Tools</h3>
          <p className="text-gray-600">
            Secure leak submission, story building, source protection, and comprehensive investigation management.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white mb-4">
            <FileText className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">FOIA Generator</h3>
          <p className="text-gray-600">
            Automated public records requests with state-specific laws, tracking, and professional templates.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white mb-4">
            <Clock className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Real-Time Monitor</h3>
          <p className="text-gray-600">
            Live police scanner feeds, active calls tracking, and real-time civil rights violation monitoring.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white mb-4">
            <MapPin className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Interactive Map</h3>
          <p className="text-gray-600">
            Civil rights violation reporting, police scanner frequencies, and location-based incident tracking.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4">
            <MessageCircle className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">AI Legal Assistant</h3>
          <p className="text-gray-600">
            Zero-hallucination legal guidance with cited sources for civil rights, police encounters, and legal procedures.
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <AlertTriangle className="h-8 w-8 text-red-500 mb-2" />
            <span className="text-sm font-medium text-gray-900">Report Violation</span>
          </button>
          <button className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <FileText className="h-8 w-8 text-blue-500 mb-2" />
            <span className="text-sm font-medium text-gray-900">File FOIA Request</span>
          </button>
          <button className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <MessageCircle className="h-8 w-8 text-green-500 mb-2" />
            <span className="text-sm font-medium text-gray-900">Legal Questions</span>
          </button>
          <button className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <Search className="h-8 w-8 text-purple-500 mb-2" />
            <span className="text-sm font-medium text-gray-900">Find Resources</span>
          </button>
        </div>
      </div>
    </div>
  );
>>>>>>> 80c2e1954a68162125132b7d79023abf0fce04fb
};

export default App;