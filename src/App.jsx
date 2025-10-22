import React, { useState } from 'react';
import { Search, FileText, MessageCircle, MapPin, Shield, Users, Eye, Clock, Newspaper, Database, Upload, LogOut } from 'lucide-react';
import './App.css';
import EnhancedInteractive3DMap from './components/EnhancedInteractive3DMap';
import EnhancedResourcesAndLaws from './components/EnhancedResourcesAndLaws';
import AILegalAssistant from './components/AILegalAssistant';
import EnhancedRealTimeDashboard from './components/EnhancedRealTimeDashboard';
import EnhancedFOIARequestTool from './components/EnhancedFOIARequestTool';
import PoliceAccountabilityDatabase from './components/PoliceAccountabilityDatabase';
import InvestigativeJournalismSuite from './components/InvestigativeJournalismSuite';
import { useAuth } from './context/AuthContext';
import { supabase } from './lib/supabase';
import { AuthTabs } from './components/auth/AuthForms';

const App = () => {
  const { user, loading, signOut, supabaseAvailable } = useAuth();
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

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-white border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
          </div>
          <h2 className="mt-4 text-xl font-semibold text-white">Loading Civil Rights Tool...</h2>
          <p className="mt-2 text-white/70">Checking authentication status...</p>
        </div>
      </div>
    );
  }

  // Show login page if user is not authenticated and Supabase is available
  if (!user && supabaseAvailable) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Header */}
        <header className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Shield className="h-8 w-8 text-blue-400" />
                <h1 className="ml-3 text-2xl font-bold text-white">Civil Rights Tool</h1>
              </div>
            </div>
          </div>
        </header>

        {/* Login Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-white mb-4">
              Welcome to the Civil Rights Toolkit
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your comprehensive platform for civil rights protection, legal guidance, and investigative journalism.
              Please sign in to access all features.
            </p>
          </div>

          {/* Auth Forms */}
          <div className="max-w-md mx-auto">
            <AuthTabs 
              defaultTab="login"
              onLoginSuccess={() => {
                console.log('Login successful');
              }}
              onSignupSuccess={() => {
                console.log('Signup successful');
              }}
            />
          </div>

          {/* Feature Preview */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                <Database className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Police Accountability</h3>
              <p className="text-gray-400">
                Track officer misconduct and access comprehensive accountability data.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white mb-4">
                <Upload className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Investigative Tools</h3>
              <p className="text-gray-400">
                Secure leak submission and comprehensive investigation management.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white mb-4">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">AI Legal Assistant</h3>
              <p className="text-gray-400">
                Zero-hallucination legal guidance with cited sources.
              </p>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-slate-800/50 backdrop-blur-sm border-t border-slate-700 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <p className="text-gray-400">
                Empowering citizens with knowledge and tools to protect their civil rights.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Built for investigative journalism and community advocacy.
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  // Show main app if user is authenticated OR if Supabase is not available (allow access without auth)
  return (
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
              {user ? (
                <>
                  <span className="text-sm text-gray-600">
                    {user.email}
                  </span>
                  <button
                    onClick={handleSignOut}
                    className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Sign Out</span>
                  </button>
                </>
              ) : (
                <span className="text-sm text-gray-600">Empowering Communities</span>
              )}
              <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Users className="h-4 w-4 text-white" />
              </div>
            </div>
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
          </div>
        </div>
      </footer>
    </div>
  );
};

// Ultimate Dashboard Component
const UltimateDashboard = () => {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg p-8 shadow-xl">
        <h2 className="text-4xl font-bold mb-4">
          Welcome to the Civil Rights Network
        </h2>
        <p className="text-xl max-w-3xl mx-auto opacity-95">
          Your comprehensive platform for civil rights protection, legal guidance, and investigative journalism.
          Access real-time data, AI-powered legal assistance, and community organizing tools.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
            <span className="font-semibold">8 Tools</span> Available
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
            <span className="font-semibold">50+ States</span> Covered
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
            <span className="font-semibold">24/7</span> Access
          </div>
        </div>
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
            <Eye className="h-8 w-8 text-red-500 mb-2" />
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
};

export default App;