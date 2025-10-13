import React, { useState } from 'react';
import { Shield, Scale, Users, Search, MessageCircle, Map, FileText, ExternalLink } from 'lucide-react';
import './App.css';

// Import existing components (we'll update these next)
import EnhancedResourcesAndLaws from './components/EnhancedResourcesAndLaws';
import EnhancedStateProfile from './components/EnhancedStateProfile';
import RealTimeDashboard from './components/RealTimeDashboard';
import Interactive3DMap from './components/Interactive3DMap';
import AILegalAssistant from './components/AILegalAssistant';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedState, setSelectedState] = useState('');

  const states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'rights':
        return <YourRightsSection />;
      case 'laws':
        return <StateLawsSection selectedState={selectedState} setSelectedState={setSelectedState} states={states} />;
      case 'resources':
        return <ResourcesSection />;
      case 'dashboard':
        return <RealTimeDashboard />;
      case 'map':
        return <Interactive3DMap />;
      case 'ai':
        return <AILegalAssistant />;
      default:
        return <HomeSection setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-blue-600 mr-3" />
              <span className="text-xl font-bold text-gray-900">Civil Rights Hub</span>
            </div>
            <div className="flex items-center space-x-8">
              <button
                onClick={() => setActiveTab('home')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'home' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => setActiveTab('rights')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'rights' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Your Rights
              </button>
              <button
                onClick={() => setActiveTab('laws')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'laws' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                State Laws
              </button>
              <button
                onClick={() => setActiveTab('resources')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'resources' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Resources
              </button>
              <button
                onClick={() => setActiveTab('ai')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'ai' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                AI Assistant
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Shield className="h-6 w-6 text-blue-600 mr-2" />
              <span className="text-gray-600">© 2025 Civil Rights Hub. Protecting your constitutional rights.</span>
            </div>
            <div className="flex space-x-6">
              <button className="text-gray-600 hover:text-blue-600 transition-colors">Privacy</button>
              <button className="text-gray-600 hover:text-blue-600 transition-colors">Terms</button>
              <button className="text-gray-600 hover:text-blue-600 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Home Section Component
const HomeSection = ({ setActiveTab }) => (
  <div className="relative">
    {/* Hero Section */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
        Know Your Rights.
        <br />
        Protect Your Freedom.
      </h1>
      <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
        Access comprehensive civil rights information, state-specific laws, and legal
        resources to understand and defend your constitutional rights.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => setActiveTab('laws')}
          className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
        >
          Find Your State Laws
        </button>
        <button
          onClick={() => setActiveTab('resources')}
          className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 transition-colors shadow-lg"
        >
          Get Legal Help
        </button>
      </div>
    </div>

    {/* Feature Cards */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard
          icon={<Shield className="h-12 w-12 text-blue-600" />}
          title="Constitutional Rights"
          description="First, Fourth, and Fifth Amendment protections and how they apply to your daily life."
          onClick={() => setActiveTab('rights')}
        />
        <FeatureCard
          icon={<Scale className="h-12 w-12 text-blue-600" />}
          title="Legal Resources"
          description="Connect with qualified legal aid organizations and understand your legal options."
          onClick={() => setActiveTab('resources')}
        />
        <FeatureCard
          icon={<Users className="h-12 w-12 text-blue-600" />}
          title="State-Specific Laws"
          description="Recording laws and regulations by state, including marijuana laws and civil rights protections."
          onClick={() => setActiveTab('laws')}
        />
      </div>
    </div>
  </div>
);

// Feature Card Component
const FeatureCard = ({ icon, title, description, onClick }) => (
  <div 
    className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
    onClick={onClick}
  >
    <div className="mb-4 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
      View Details →
    </button>
  </div>
);

// Your Rights Section
const YourRightsSection = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-white mb-4">Your Constitutional Rights</h2>
      <p className="text-xl text-blue-100 max-w-3xl mx-auto">
        Understanding your fundamental rights is the first step in protecting them.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <RightCard
        title="First Amendment"
        subtitle="Freedom of Speech & Religion"
        points={[
          "Freedom of speech and expression",
          "Freedom of religion and worship",
          "Freedom of the press",
          "Right to peaceful assembly",
          "Right to petition government"
        ]}
      />
      <RightCard
        title="Fourth Amendment"
        subtitle="Protection from Searches"
        points={[
          "Protection from unreasonable searches",
          "Warrant requirements",
          "Probable cause standards",
          "Vehicle search limitations",
          "Digital privacy rights"
        ]}
      />
      <RightCard
        title="Fifth Amendment"
        subtitle="Due Process Rights"
        points={[
          "Right to remain silent",
          "Protection from self-incrimination",
          "Due process of law",
          "Protection from double jeopardy",
          "Right to grand jury"
        ]}
      />
    </div>
  </div>
);

// Right Card Component
const RightCard = ({ title, subtitle, points }) => (
  <div className="bg-white rounded-xl p-6 shadow-lg">
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-blue-600 font-medium mb-4">{subtitle}</p>
    <ul className="space-y-2">
      {points.map((point, index) => (
        <li key={index} className="flex items-start">
          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
          <span className="text-gray-700">{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

// State Laws Section
const StateLawsSection = ({ selectedState, setSelectedState, states }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-white mb-4">State-Specific Laws</h2>
      <p className="text-xl text-blue-100 max-w-3xl mx-auto">
        Recording laws and civil rights protections vary by state. Select your state to
        view specific regulations and important information.
      </p>
    </div>

    <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
      <div className="flex items-center mb-6">
        <Map className="h-6 w-6 text-blue-600 mr-3" />
        <h3 className="text-xl font-semibold text-gray-900">Select Your State</h3>
      </div>
      <p className="text-gray-600 mb-6">Choose a state to view recording laws and civil rights information</p>
      
      <select
        value={selectedState}
        onChange={(e) => setSelectedState(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="">Choose your state...</option>
        {states.map(state => (
          <option key={state} value={state}>{state}</option>
        ))}
      </select>
    </div>

    {selectedState && (
      <div className="bg-white rounded-xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">{selectedState} Laws & Regulations</h3>
        <EnhancedStateProfile selectedState={selectedState} />
      </div>
    )}
  </div>
);

// Resources Section
const ResourcesSection = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-white mb-4">Legal Resources</h2>
      <p className="text-xl text-blue-100 max-w-3xl mx-auto">
        Connect with qualified legal aid organizations and access important resources.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ResourceCard
        title="ACLU"
        description="American Civil Liberties Union - Defending civil rights and liberties"
        link="https://www.aclu.org"
      />
      <ResourceCard
        title="Legal Aid Society"
        description="Free legal services for low-income individuals"
        link="https://www.legalaid.org"
      />
      <ResourceCard
        title="National Lawyers Guild"
        description="Progressive legal organization supporting civil rights"
        link="https://www.nlg.org"
      />
    </div>

    <div className="mt-16">
      <EnhancedResourcesAndLaws />
    </div>
  </div>
);

// Resource Card Component
const ResourceCard = ({ title, description, link }) => (
  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
    >
      Visit Website
      <ExternalLink className="h-4 w-4 ml-1" />
    </a>
  </div>
);

export default App;