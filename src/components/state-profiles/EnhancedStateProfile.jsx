import React, { useState } from 'react';
import { stateProfiles } from '../../data/stateProfiles';
import { updatedMarijuanaLaws } from '../../data/updatedMarijuanaLaws';
import { recordingConsentLaws } from '../../data/recordingConsentLaws';
import { 
  ExternalLink, 
  Phone, 
  Mail, 
  MapPin, 
  Users, 
  Gavel, 
  Camera, 
  FileText, 
  Leaf
} from 'lucide-react';

const EnhancedStateProfile = ({ stateCode, darkMode }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState({});

  const stateProfile = stateProfiles[stateCode];
  const marijuanaLaw = updatedMarijuanaLaws[stateCode];
  const recordingLaw = recordingConsentLaws[stateCode];

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const renderSection = (title, content, icon, defaultExpanded = false) => {
    const isExpanded = expandedSections[title] !== undefined ? expandedSections[title] : defaultExpanded;
    
    return (
      <div className="border-b border-white/10 pb-6 mb-6 last:border-0 last:pb-0 last:mb-0">
        <div 
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleSection(title)}
        >
          <h3 className="text-xl font-bold text-white flex items-center">
            {icon}
            <span className="ml-2">{title}</span>
          </h3>
          <span className="text-white/50">
            {isExpanded ? '−' : '+'}
          </span>
        </div>
        
        {isExpanded && (
          <div className="mt-4 pl-2">
            {content}
          </div>
        )}
      </div>
    );
  };

  const renderOverviewContent = () => {
    if (!stateProfile) return <p>No profile data available for this state.</p>;
    
    return (
      <div>
        <p className="text-white/80 mb-4">{stateProfile.description}</p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white/5 rounded-lg p-4">
            <h4 className="font-semibold text-white mb-2 flex items-center">
              <Users className="h-4 w-4 mr-2" />
              Population
            </h4>
            <p className="text-white/80">{stateProfile.population}</p>
          </div>
          
          <div className="bg-white/5 rounded-lg p-4">
            <h4 className="font-semibold text-white mb-2 flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              Capital
            </h4>
            <p className="text-white/80">{stateProfile.capital}</p>
          </div>
        </div>
        
        <div className="mt-6">
          <h4 className="text-lg font-semibold mb-3 text-white">Key Contacts</h4>
          <div className="space-y-3">
            {stateProfile.contacts.map((contact, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-4">
                <h5 className="font-medium text-white">{contact.title}</h5>
                <p className="text-white/80">{contact.name}</p>
                {contact.phone && (
                  <p className="flex items-center text-white/70 mt-1">
                    <Phone className="h-4 w-4 mr-2" />
                    {contact.phone}
                  </p>
                )}
                {contact.email && (
                  <p className="flex items-center text-white/70 mt-1">
                    <Mail className="h-4 w-4 mr-2" />
                    {contact.email}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderMarijuanaLawContent = () => {
    if (!marijuanaLaw) return <p>No marijuana law data available for this state.</p>;
    
    // Function to get status color
    const getStatusColor = (status) => {
      switch (status) {
        case 'Recreational & Medical': return 'bg-green-500/20 text-green-300';
        case 'Medical Only': return 'bg-blue-500/20 text-blue-300';
        case 'Limited Medical': return 'bg-yellow-500/20 text-yellow-300';
        case 'Illegal': return 'bg-red-500/20 text-red-300';
        default: return 'bg-gray-500/20 text-gray-300';
      }
    };

    return (
      <div>
        <div className="mb-4">
          <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(marijuanaLaw.status)}`}>
            {marijuanaLaw.status}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2 text-white">Possession Limits</h4>
          <p className="text-white/80">{marijuanaLaw.possession}</p>
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2 text-white">Cultivation</h4>
          <p className="text-white/80">{marijuanaLaw.cultivation}</p>
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2 text-white">Medical Program</h4>
          <p className="text-white/80">{marijuanaLaw.medicalProgram}</p>
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2 text-white">Recreational</h4>
          <p className="text-white/80">{marijuanaLaw.recreational}</p>
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2 text-white">THC Limit</h4>
          <p className="text-white/80">{marijuanaLaw.thcLimit}</p>
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2 text-white">Dispensaries</h4>
          <p className="text-white/80">{marijuanaLaw.dispensaries}</p>
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2 text-white">Qualifying Medical Conditions</h4>
          <div className="flex flex-wrap gap-2">
            {marijuanaLaw.qualifyingConditions.slice(0, 10).map((condition, index) => (
              <span key={index} className="px-3 py-1 bg-indigo-500/20 text-indigo-200 rounded-full text-sm">
                {condition}
              </span>
            ))}
            {marijuanaLaw.qualifyingConditions.length > 10 && (
              <span className="px-3 py-1 bg-indigo-500/20 text-indigo-200 rounded-full text-sm">
                +{marijuanaLaw.qualifyingConditions.length - 10} more
              </span>
            )}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2 text-white">Free Medical Card Information</h4>
          <p className="text-white/80">{marijuanaLaw.freeCardInfo}</p>
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2 text-white">Key Regulations</h4>
          <ul className="list-disc pl-5 space-y-1 text-white/80">
            {marijuanaLaw.keyRegulations.map((regulation, index) => (
              <li key={index}>{regulation}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2 text-white">Recent Changes (2024-2025)</h4>
          <p className="text-white/80">{marijuanaLaw.recentChanges}</p>
        </div>
      </div>
    );
  };

  const renderRecordingLawContent = () => {
    if (!recordingLaw) return <p>No recording consent law data available for this state.</p>;
    
    const getConsentColor = (consent) => {
      switch (consent) {
        case 'One-party': return 'bg-green-500/20 text-green-300';
        case 'Two-party': return 'bg-yellow-500/20 text-yellow-300';
        case 'All-party': return 'bg-orange-500/20 text-orange-300';
        default: return 'bg-gray-500/20 text-gray-300';
      }
    };

    return (
      <div>
        <div className="mb-4">
          <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getConsentColor(recordingLaw.consent)}`}>
            {recordingLaw.consent} consent required
          </div>
        </div>
        
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2 text-white">Recording Police</h4>
          <p className="text-white/80">{recordingLaw.recordingPolice}</p>
        </div>
        
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2 text-white">Public Recording</h4>
          <p className="text-white/80">{recordingLaw.publicRecording}</p>
        </div>
        
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2 text-white">Private Recording</h4>
          <p className="text-white/80">{recordingLaw.privateRecording}</p>
        </div>
        
        <div className="mb-4 bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
          <h4 className="text-lg font-semibold mb-2 text-blue-300">Important Notes</h4>
          <p className="text-white/80">{recordingLaw.notes}</p>
        </div>
        
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
          <h4 className="text-lg font-semibold mb-2 text-red-300">Penalties for Illegal Recording</h4>
          <p className="text-white/80">{recordingLaw.penalties}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-slate-800 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">{stateProfile?.name || stateCode} Civil Rights Profile</h2>
      </div>

      <div className="flex flex-wrap gap-2 border-b border-white/10 mb-6">
        <button
          className={`px-4 py-2 font-medium text-sm ${activeTab === 'overview' ? 'text-white border-b-2 border-blue-500' : 'text-white/70 hover:text-white'}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm ${activeTab === 'marijuana' ? 'text-white border-b-2 border-blue-500' : 'text-white/70 hover:text-white'}`}
          onClick={() => setActiveTab('marijuana')}
        >
          Marijuana Laws
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm ${activeTab === 'recording' ? 'text-white border-b-2 border-blue-500' : 'text-white/70 hover:text-white'}`}
          onClick={() => setActiveTab('recording')}
        >
          Recording Consent
        </button>
      </div>

      {activeTab === 'overview' && (
        <>
          {renderSection(
            "State Overview", 
            renderOverviewContent(), 
            <Gavel className="h-5 w-5 text-blue-400" />,
            true
          )}
        </>
      )}

      {activeTab === 'marijuana' && (
        <>
          {renderSection(
            "Marijuana Laws", 
            renderMarijuanaLawContent(), 
            <Leaf className="h-5 w-5 text-green-400" />,
            true
          )}
        </>
      )}

      {activeTab === 'recording' && (
        <>
          {renderSection(
            "Recording Consent Laws", 
            renderRecordingLawContent(), 
            <Camera className="h-5 w-5 text-red-400" />,
            true
          )}
        </>
      )}
    </div>
  );
};

export default EnhancedStateProfile;