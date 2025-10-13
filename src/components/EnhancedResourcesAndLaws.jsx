import React, { useState, useEffect } from 'react';
import { 
  Leaf, 
  Phone, 
  BookOpen, 
  ExternalLink, 
  Search, 
  Filter, 
  MapPin, 
  DollarSign,
  Calendar,
  Users,
  AlertCircle,
  CheckCircle,
  XCircle,
  Info,
  Download,
  FileText,
  Scale,
  Shield,
  Camera,
  Gavel
} from 'lucide-react';
import { updatedMarijuanaLaws } from '../data/updatedMarijuanaLaws.js';
import { comprehensiveRecordingLaws } from '../data/comprehensiveRecordingLaws.js';
import { getLegalResourcesForState } from '../data/comprehensiveLegalResources.js';

const EnhancedResourcesAndLaws = ({ selectedState }) => {
  const [activeSubTab, setActiveSubTab] = useState('marijuana');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const subTabs = [
    { 
      id: 'marijuana', 
      label: 'Marijuana Laws', 
      icon: <Leaf className="h-4 w-4" />,
      color: 'green'
    },
    { 
      id: 'recording', 
      label: 'Recording Laws', 
      icon: <Camera className="h-4 w-4" />,
      color: 'blue'
    },
    { 
      id: 'resources', 
      label: 'Legal Resources', 
      icon: <Scale className="h-4 w-4" />,
      color: 'purple'
    },
    { 
      id: 'rights', 
      label: 'Constitutional Rights', 
      icon: <Shield className="h-4 w-4" />,
      color: 'indigo'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Legal Resources & State Laws
        </h2>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto">
          Access comprehensive legal information, state-specific laws, and resources to protect your rights.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search laws, resources, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="md:w-48">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              <option value="marijuana">Marijuana Laws</option>
              <option value="recording">Recording Laws</option>
              <option value="civil-rights">Civil Rights</option>
              <option value="legal-aid">Legal Aid</option>
            </select>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex">
            {subTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id)}
                className={`flex-1 flex items-center justify-center space-x-2 py-4 px-6 font-medium text-sm transition-colors ${
                  activeSubTab === tab.id
                    ? `text-${tab.color}-600 bg-${tab.color}-50 border-b-2 border-${tab.color}-500`
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeSubTab === 'marijuana' && <MarijuanaLawsSection searchTerm={searchTerm} />}
          {activeSubTab === 'recording' && <RecordingLawsSection searchTerm={searchTerm} />}
          {activeSubTab === 'resources' && <LegalResourcesSection searchTerm={searchTerm} />}
          {activeSubTab === 'rights' && <ConstitutionalRightsSection searchTerm={searchTerm} />}
        </div>
      </div>
    </div>
  );
};

// Marijuana Laws Section
const MarijuanaLawsSection = ({ searchTerm }) => {
  const filteredLaws = updatedMarijuanaLaws?.filter(law =>
    law.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
    law.recreationalStatus?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    law.medicalStatus?.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <div className="space-y-6">
      <div className="flex items-center mb-6">
        <Leaf className="h-6 w-6 text-green-600 mr-3" />
        <h3 className="text-xl font-semibold text-gray-900">Marijuana Laws by State</h3>
      </div>

      <div className="grid gap-4">
        {filteredLaws.slice(0, 10).map((law, index) => (
          <MarijuanaLawCard key={index} law={law} />
        ))}
      </div>

      {filteredLaws.length === 0 && (
        <div className="text-center py-8">
          <Leaf className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">No marijuana laws found matching your search.</p>
        </div>
      )}
    </div>
  );
};

// Recording Laws Section
const RecordingLawsSection = ({ searchTerm }) => {
  const filteredLaws = comprehensiveRecordingLaws?.filter(law =>
    law.state?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    law.consentType?.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <div className="space-y-6">
      <div className="flex items-center mb-6">
        <Camera className="h-6 w-6 text-blue-600 mr-3" />
        <h3 className="text-xl font-semibold text-gray-900">Recording Laws by State</h3>
      </div>

      <div className="grid gap-4">
        {filteredLaws.slice(0, 10).map((law, index) => (
          <RecordingLawCard key={index} law={law} />
        ))}
      </div>

      {filteredLaws.length === 0 && (
        <div className="text-center py-8">
          <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">No recording laws found matching your search.</p>
        </div>
      )}
    </div>
  );
};

// Legal Resources Section
const LegalResourcesSection = ({ searchTerm }) => {
  const nationalResources = [
    {
      name: "American Civil Liberties Union (ACLU)",
      description: "Defending civil rights and liberties nationwide",
      website: "https://www.aclu.org",
      phone: "1-212-549-2500",
      services: ["Civil Rights Defense", "Legal Representation", "Know Your Rights"]
    },
    {
      name: "Legal Aid Society",
      description: "Free legal services for low-income individuals",
      website: "https://www.legalaid.org",
      phone: "1-212-577-3300",
      services: ["Free Legal Aid", "Housing Rights", "Immigration"]
    },
    {
      name: "National Lawyers Guild",
      description: "Progressive legal organization supporting civil rights",
      website: "https://www.nlg.org",
      phone: "1-212-679-5100",
      services: ["Legal Observers", "Know Your Rights Training", "Protest Support"]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center mb-6">
        <Scale className="h-6 w-6 text-purple-600 mr-3" />
        <h3 className="text-xl font-semibold text-gray-900">Legal Resources & Organizations</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {nationalResources.map((resource, index) => (
          <LegalResourceCard key={index} resource={resource} />
        ))}
      </div>
    </div>
  );
};

// Constitutional Rights Section
const ConstitutionalRightsSection = ({ searchTerm }) => {
  const rights = [
    {
      amendment: "First Amendment",
      title: "Freedom of Speech & Religion",
      description: "Protects freedom of speech, religion, press, assembly, and petition",
      keyPoints: [
        "Freedom of speech and expression",
        "Freedom of religion and worship", 
        "Freedom of the press",
        "Right to peaceful assembly",
        "Right to petition government"
      ]
    },
    {
      amendment: "Fourth Amendment", 
      title: "Protection from Searches",
      description: "Protects against unreasonable searches and seizures",
      keyPoints: [
        "Protection from unreasonable searches",
        "Warrant requirements",
        "Probable cause standards",
        "Vehicle search limitations",
        "Digital privacy rights"
      ]
    },
    {
      amendment: "Fifth Amendment",
      title: "Due Process Rights", 
      description: "Protects due process and self-incrimination rights",
      keyPoints: [
        "Right to remain silent",
        "Protection from self-incrimination",
        "Due process of law",
        "Protection from double jeopardy",
        "Right to grand jury"
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center mb-6">
        <Shield className="h-6 w-6 text-indigo-600 mr-3" />
        <h3 className="text-xl font-semibold text-gray-900">Constitutional Rights</h3>
      </div>

      <div className="grid gap-6">
        {rights.map((right, index) => (
          <ConstitutionalRightCard key={index} right={right} />
        ))}
      </div>
    </div>
  );
};

// Component Cards
const MarijuanaLawCard = ({ law }) => {
  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'legal': return 'green';
      case 'decriminalized': return 'yellow';
      case 'medical only': return 'blue';
      default: return 'red';
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-semibold text-gray-900">{law.state}</h4>
        <div className="flex space-x-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium bg-${getStatusColor(law.recreationalStatus)}-100 text-${getStatusColor(law.recreationalStatus)}-800`}>
            Recreational: {law.recreationalStatus}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium bg-${getStatusColor(law.medicalStatus)}-100 text-${getStatusColor(law.medicalStatus)}-800`}>
            Medical: {law.medicalStatus}
          </span>
        </div>
      </div>
      {law.keyPoints && (
        <ul className="text-sm text-gray-600 space-y-1">
          {law.keyPoints.slice(0, 2).map((point, index) => (
            <li key={index} className="flex items-start">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
              {point}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const RecordingLawCard = ({ law }) => (
  <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
    <div className="flex items-center justify-between mb-3">
      <h4 className="font-semibold text-gray-900">{law.state}</h4>
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
        law.consentType === 'One-party' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
      }`}>
        {law.consentType} Consent
      </span>
    </div>
    <p className="text-sm text-gray-600">{law.summary}</p>
  </div>
);

const LegalResourceCard = ({ resource }) => (
  <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
    <h4 className="font-semibold text-gray-900 mb-2">{resource.name}</h4>
    <p className="text-gray-600 mb-4">{resource.description}</p>
    
    <div className="space-y-2 mb-4">
      <div className="flex items-center text-sm text-gray-600">
        <Phone className="h-4 w-4 mr-2" />
        {resource.phone}
      </div>
      <div className="flex items-center text-sm text-gray-600">
        <ExternalLink className="h-4 w-4 mr-2" />
        <a href={resource.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
          Visit Website
        </a>
      </div>
    </div>
    
    <div>
      <h5 className="font-medium text-gray-900 mb-2">Services:</h5>
      <div className="flex flex-wrap gap-1">
        {resource.services.map((service, index) => (
          <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
            {service}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const ConstitutionalRightCard = ({ right }) => (
  <div className="bg-gray-50 rounded-lg p-6">
    <div className="flex items-center mb-4">
      <Shield className="h-6 w-6 text-indigo-600 mr-3" />
      <div>
        <h4 className="font-semibold text-gray-900">{right.amendment}</h4>
        <p className="text-indigo-600 font-medium">{right.title}</p>
      </div>
    </div>
    
    <p className="text-gray-600 mb-4">{right.description}</p>
    
    <ul className="space-y-2">
      {right.keyPoints.map((point, index) => (
        <li key={index} className="flex items-start">
          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
          <span className="text-gray-700 text-sm">{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default EnhancedResourcesAndLaws;