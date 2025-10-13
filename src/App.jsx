import React, { useState } from 'react';
import './App.css';
import './index.css';
import FOIARequestTool from './components/FOIARequestTool';

// Simple working components first
const UltimateDashboard = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white mb-4">🚀 Ultimate Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-blue-800/30 p-6 rounded-lg border border-blue-600/30">
          <h3 className="text-lg font-semibold text-white mb-2">Civil Rights Violations</h3>
          <p className="text-3xl font-bold text-blue-300">247</p>
          <p className="text-sm text-blue-200">Reports this month</p>
        </div>
        <div className="bg-green-800/30 p-6 rounded-lg border border-green-600/30">
          <h3 className="text-lg font-semibold text-white mb-2">Active Cases</h3>
          <p className="text-3xl font-bold text-green-300">89</p>
          <p className="text-sm text-green-200">Currently tracking</p>
        </div>
        <div className="bg-purple-800/30 p-6 rounded-lg border border-purple-600/30">
          <h3 className="text-lg font-semibold text-white mb-2">Legal Resources</h3>
          <p className="text-3xl font-bold text-purple-300">1,234</p>
          <p className="text-sm text-purple-200">Available documents</p>
        </div>
      </div>
    </div>
  );
};

const Interactive3DMap = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white mb-4">🗺️ Interactive Map</h2>
      <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-600/30 text-center">
        <p className="text-white mb-4">Interactive 3D Map of Civil Rights Violations</p>
        <div className="bg-blue-900/50 h-96 rounded-lg flex items-center justify-center">
          <p className="text-blue-200">Map visualization loading...</p>
        </div>
      </div>
    </div>
  );
};

const AILegalAssistant = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setResponse('I can help you understand your civil rights. Please ask me about police stops, recording rights, or filing complaints.');
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white mb-4">🤖 AI Legal Assistant</h2>
      <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-600/30">
        <form onSubmit={handleSubmit} className="mb-4">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask me about your civil rights..."
            className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
            rows="3"
          />
          <button
            type="submit"
            className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Ask Question
          </button>
        </form>
        {response && (
          <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-600/30">
            <p className="text-white">{response}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const EnhancedResourcesAndLaws = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white mb-4">📚 Resources & Laws</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-600/30">
          <h3 className="text-lg font-semibold text-white mb-3">Know Your Rights</h3>
          <ul className="text-blue-200 space-y-2">
            <li>• Right to remain silent</li>
            <li>• Right to record police</li>
            <li>• Right to refuse searches</li>
            <li>• Right to legal representation</li>
          </ul>
        </div>
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-600/30">
          <h3 className="text-lg font-semibold text-white mb-3">State Laws</h3>
          <ul className="text-green-200 space-y-2">
            <li>• Marijuana laws by state</li>
            <li>• Recording consent laws</li>
            <li>• Stop and frisk policies</li>
            <li>• Complaint procedures</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const RealTimeDashboard = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white mb-4">📊 Real-Time Dashboard</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-600/30">
          <h3 className="text-lg font-semibold text-white mb-3">Live Police Scanner</h3>
          <div className="bg-red-900/30 p-4 rounded-lg">
            <p className="text-red-200">🔴 LIVE: Traffic stop in progress - Downtown</p>
            <p className="text-gray-300 text-sm mt-2">Scanner frequency: 154.755 MHz</p>
          </div>
        </div>
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-600/30">
          <h3 className="text-lg font-semibold text-white mb-3">Recent Reports</h3>
          <div className="space-y-2">
            <div className="bg-yellow-900/30 p-3 rounded">
              <p className="text-yellow-200">Unlawful search reported - Chicago, IL</p>
            </div>
            <div className="bg-orange-900/30 p-3 rounded">
              <p className="text-orange-200">Excessive force incident - Miami, FL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EnhancedCaseExplorer = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white mb-4">📁 Case Explorer</h2>
      <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-600/30">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search cases..."
            className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="space-y-4">
          <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-600/30">
            <h4 className="font-semibold text-white">Brown v. Board of Education</h4>
            <p className="text-blue-200 text-sm">Landmark civil rights case - School segregation</p>
          </div>
          <div className="bg-green-900/30 p-4 rounded-lg border border-green-600/30">
            <h4 className="font-semibold text-white">Miranda v. Arizona</h4>
            <p className="text-green-200 text-sm">Established Miranda rights</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [activeTab, setActiveTab] = useState('ultimate');

  const tabs = [
    { id: 'ultimate', name: '🚀 Ultimate Dashboard', component: UltimateDashboard },
    { id: 'foia', name: '📄 FOIA Requests', component: FOIARequestTool },
    { id: 'map', name: '🗺️ Interactive Map', component: Interactive3DMap },
    { id: 'ai', name: '🤖 AI Legal Assistant', component: AILegalAssistant },
    { id: 'resources', name: '📚 Resources & Laws', component: EnhancedResourcesAndLaws },
    { id: 'dashboard', name: '📊 Real-Time Dashboard', component: RealTimeDashboard },
    { id: 'cases', name: '📁 Case Explorer', component: EnhancedCaseExplorer }
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || UltimateDashboard;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      {/* Header */}
      <header className="bg-blue-900/50 backdrop-blur-sm border-b border-blue-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">
                ⚖️ Civil Rights Legal Tool
              </h1>
            </div>
            <div className="text-sm text-blue-200">
              Professional Legal Information Platform
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-blue-800/30 backdrop-blur-sm border-b border-blue-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-300 text-white'
                    : 'border-transparent text-blue-200 hover:text-white hover:border-blue-400'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 min-h-[600px]">
          <ActiveComponent />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900/50 backdrop-blur-sm border-t border-blue-700/50 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-blue-200 text-sm">
              © 2025 Civil Rights Legal Tool - Professional Legal Information Platform
            </p>
            <p className="text-blue-300 text-xs mt-2">
              This tool provides educational information only and does not constitute legal advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;