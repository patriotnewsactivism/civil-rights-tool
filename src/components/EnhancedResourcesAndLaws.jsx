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
  FileText
} from 'lucide-react';
import { updatedMarijuanaLaws } from '../data/updatedMarijuanaLaws.js';
import { comprehensiveRecordingLaws } from '../data/comprehensiveRecordingLaws.js';
import { getLegalResourcesForState } from '../data/comprehensiveLegalResources.js';

const EnhancedResourcesAndLaws = ({ selectedState, darkMode }) => {
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

  // Get current state data
  const currentMarijuanaLaw = selectedState ? updatedMarijuanaLaws[selectedState] : null;
  const currentRecordingLaw = selectedState ? comprehensiveRecordingLaws[selectedState] : null;
  const currentLegalResources = selectedState ? getLegalResourcesForState(selectedState) : null;

  // Marijuana Laws Component
  const MarijuanaLawsSection = () => {
    if (!currentMarijuanaLaw) {
      return (
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
          <h3 className="text-2xl font-bold text-white mb-4">Marijuana Laws</h3>
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 text-yellow-400 mr-2" />
              <p className="text-yellow-200">Please select a state to view marijuana laws</p>
            </div>
          </div>
        </div>
      );
    }

    const getStatusColor = (status) => {
      switch (status) {
        case 'Recreational & Medical': return 'text-green-400';
        case 'Medical Only': return 'text-blue-400';
        case 'Limited Medical': return 'text-yellow-400';
        case 'Illegal': return 'text-red-400';
        default: return 'text-white/70';
      }
    };

    const getStatusIcon = (status) => {
      switch (status) {
        case 'Recreational & Medical': return <CheckCircle className="h-5 w-5 text-green-400" />;
        case 'Medical Only': return <Info className="h-5 w-5 text-blue-400" />;
        case 'Limited Medical': return <Info className="h-5 w-5 text-yellow-400" />;
        case 'Illegal': return <XCircle className="h-5 w-5 text-red-400" />;
        default: return <AlertCircle className="h-5 w-5 text-white/50" />;
      }
    };

    return (
      <div className="space-y-6">
        {/* Status Overview */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-white">Marijuana Laws - {selectedState}</h3>
            <div className="flex items-center space-x-2">
              {getStatusIcon(currentMarijuanaLaw.status)}
              <span className={`text-lg font-medium ${getStatusColor(currentMarijuanaLaw.status)}`}>
                {currentMarijuanaLaw.status}
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold text-white mb-2 flex items-center">
                <Leaf className="h-4 w-4 mr-2" />
                Possession Limit
              </h4>
              <p className="text-white/80">{currentMarijuanaLaw.possession}</p>
            </div>

            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold text-white mb-2">Cultivation</h4>
              <p className="text-white/80">{currentMarijuanaLaw.cultivation}</p>
            </div>

            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold text-white mb-2">Medical Program</h4>
              <p className="text-white/80">{currentMarijuanaLaw.medicalProgram}</p>
            </div>

            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold text-white mb-2">Recreational</h4>
              <p className="text-white/80">{currentMarijuanaLaw.recreational}</p>
            </div>

            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold text-white mb-2">THC Limit</h4>
              <p className="text-white/80">{currentMarijuanaLaw.thcLimit}</p>
            </div>

            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold text-white mb-2">Dispensaries</h4>
              <p className="text-white/80">{currentMarijuanaLaw.dispensaries}</p>
            </div>
          </div>
        </div>

        {/* Medical Card Information */}
        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
          <h4 className="text-xl font-bold text-green-300 mb-4 flex items-center">
            <DollarSign className="h-5 w-5 mr-2" />
            Medical Marijuana Card Information
          </h4>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-lg p-4">
              <h5 className="font-semibold text-green-300 mb-2">Application Process</h5>
              <p className="text-white/80 text-sm">{currentMarijuanaLaw.freeCardInfo}</p>
            </div>

            <div className="bg-white/10 rounded-lg p-4">
              <h5 className="font-semibold text-green-300 mb-2">Qualifying Conditions</h5>
              <div className="space-y-1">
                {currentMarijuanaLaw.qualifyingConditions.slice(0, 10).map((condition, index) => (
                  <div key={index} className="flex items-center text-sm text-white/80">
                    <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                    {condition}
                  </div>
                ))}
                {currentMarijuanaLaw.qualifyingConditions.length > 10 && (
                  <p className="text-xs text-white/60">+{currentMarijuanaLaw.qualifyingConditions.length - 10} more conditions</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Key Regulations */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
          <h4 className="text-xl font-bold text-white mb-4">Key Regulations</h4>
          <ul className="list-disc pl-5 space-y-2 text-white/80">
            {currentMarijuanaLaw.keyRegulations.map((regulation, index) => (
              <li key={index} className="text-white/80">{regulation}</li>
            ))}
          </ul>
        </div>

        {/* Recent Changes */}
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
          <h4 className="font-semibold text-blue-300 mb-2">Recent Changes (2024-2025)</h4>
          <p className="text-white/80 text-sm">{currentMarijuanaLaw.recentChanges}</p>
        </div>

        {/* Details Section */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
          <h4 className="text-xl font-bold text-white mb-4">Additional Details</h4>
          <p className="text-white/80">{currentMarijuanaLaw.details}</p>
        </div>
      </div>
    );
  };

  // Recording Laws Component
  const RecordingLawsSection = () => {
    if (!currentRecordingLaw) {
      return (
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
          <h3 className="text-2xl font-bold text-white mb-4">Recording Laws</h3>
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 text-yellow-400 mr-2" />
              <p className="text-yellow-200">Please select a state to view recording laws</p>
            </div>
          </div>
        </div>
      );
    }

    const getConsentColor = (consent) => {
      switch (consent) {
        case 'One-party': return 'text-green-400';
        case 'Two-party': return 'text-yellow-400';
        case 'All-party': return 'text-orange-400';
        default: return 'text-white/70';
      }
    };

    return (
      <div className="space-y-6">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
          <h3 className="text-2xl font-bold text-white mb-4">Recording Laws - {selectedState}</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold text-white mb-2">Consent Required</h4>
              <p className={`text-lg font-medium ${getConsentColor(currentRecordingLaw.consent)}`}>
                {currentRecordingLaw.consent}
              </p>
              <p className="text-xs text-white/60 mt-1">
                {currentRecordingLaw.consent === 'One-party' 
                  ? 'Only you need to consent to recording' 
                  : 'All parties must consent to recording'}
              </p>
            </div>

            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold text-white mb-2">Recording Police</h4>
              <p className="text-white/80">{currentRecordingLaw.recordingPolice}</p>
            </div>

            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold text-white mb-2">Public Recording</h4>
              <p className="text-white/80">{currentRecordingLaw.publicRecording}</p>
            </div>

            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold text-white mb-2">Private Recording</h4>
              <p className="text-white/80">{currentRecordingLaw.privateRecording}</p>
            </div>
          </div>

          {/* Important Notes */}
          <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <h4 className="font-semibold text-blue-300 mb-2">Important Notes</h4>
            <p className="text-white/80 text-sm">{currentRecordingLaw.notes}</p>
          </div>

          {/* Penalties */}
          <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
            <h4 className="font-semibold text-red-300 mb-2">Penalties for Illegal Recording</h4>
            <p className="text-white/80 text-sm">{currentRecordingLaw.penalties}</p>
          </div>
        </div>

        {/* Details Section */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
          <h4 className="text-xl font-bold text-white mb-4">Additional Details</h4>
          <p className="text-white/80">{currentRecordingLaw.details}</p>
        </div>
      </div>
    );
  };

  // Legal Resources Component
  const LegalResourcesSection = () => {
    if (!currentLegalResources) {
      return (
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
          <h3 className="text-2xl font-bold text-white mb-4">Legal Resources</h3>
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 text-yellow-400 mr-2" />
              <p className="text-yellow-200">Please select a state to view legal resources</p>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
          <h3 className="text-2xl font-bold text-white mb-4">Legal Resources - {selectedState}</h3>

          {/* Legal Aid Organizations */}
          <div className="mb-6">
            <h4 className="text-xl font-bold text-white mb-4 flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Legal Aid Organizations
            </h4>
            <div className="space-y-4">
              {currentLegalResources.legalAidOrganizations.map((org, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-semibold text-white">{org.name}</h5>
                    <ExternalLink className="h-4 w-4 text-white/50" />
                  </div>
                  <div className="space-y-2 text-sm text-white/80">
                    <p><strong>Phone:</strong> {org.phone}</p>
                    <p><strong>Services:</strong> {org.services.join(', ')}</p>
                    <p><strong>Eligibility:</strong> {org.eligibility}</p>
                    <p>{org.notes}</p>
                  </div>
                  <a 
                    href={org.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-2 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm transition-colors"
                  >
                    Visit Website
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Bar Associations */}
          <div className="mb-6">
            <h4 className="text-xl font-bold text-white mb-4">Bar Associations</h4>
            <div className="space-y-4">
              {currentLegalResources.barAssociations.map((bar, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-semibold text-white">{bar.name}</h5>
                    <ExternalLink className="h-4 w-4 text-white/50" />
                  </div>
                  <div className="space-y-2 text-sm text-white/80">
                    <p><strong>Phone:</strong> {bar.phone}</p>
                    <p><strong>Services:</strong> {bar.services.join(', ')}</p>
                    <p>{bar.notes}</p>
                  </div>
                  <a 
                    href={bar.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-2 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm transition-colors"
                  >
                    Visit Website
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Civil Rights Organizations */}
          <div className="mb-6">
            <h4 className="text-xl font-bold text-white mb-4">Civil Rights Organizations</h4>
            <div className="space-y-4">
              {currentLegalResources.civilRightsOrganizations.map((org, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-semibold text-white">{org.name}</h5>
                    <ExternalLink className="h-4 w-4 text-white/50" />
                  </div>
                  <div className="space-y-2 text-sm text-white/80">
                    <p><strong>Phone:</strong> {org.phone}</p>
                    <p><strong>Services:</strong> {org.services.join(', ')}</p>
                    <p>{org.notes}</p>
                  </div>
                  <a 
                    href={org.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-2 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm transition-colors"
                  >
                    Visit Website
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* State-Specific Laws */}
          <div className="mb-6">
            <h4 className="text-xl font-bold text-white mb-4">State-Specific Legal Information</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-lg p-4">
                <h5 className="font-semibold text-white mb-2">Anti-Discrimination Laws</h5>
                <p className="text-white/80 text-sm">{currentLegalResources.stateSpecificLaws.antiDiscrimination}</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h5 className="font-semibold text-white mb-2">Housing Rights</h5>
                <p className="text-white/80 text-sm">{currentLegalResources.stateSpecificLaws.housingRights}</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h5 className="font-semibold text-white mb-2">Employment Rights</h5>
                <p className="text-white/80 text-sm">{currentLegalResources.stateSpecificLaws.employmentRights}</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h5 className="font-semibold text-white mb-2">Voting Rights</h5>
                <p className="text-white/80 text-sm">{currentLegalResources.stateSpecificLaws.votingRights}</p>
              </div>
            </div>
          </div>

          {/* Recent Legal Changes */}
          {currentLegalResources.recentLegalChanges && (
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <h4 className="font-semibold text-blue-300 mb-2">Recent Legal Changes</h4>
              <ul className="space-y-1">
                {currentLegalResources.recentLegalChanges.map((change, index) => (
                  <li key={index} className="flex items-start text-sm text-white/80">
                    <Calendar className="h-3 w-3 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    {change}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Sub-navigation */}
      <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4">
        <button
          className={`px-4 py-3 rounded-lg flex items-center text-base font-bold transition-colors ${
            activeSubTab === 'marijuana' 
              ? 'bg-blue-500 text-white' 
              : 'bg-white/20 text-white/90 hover:bg-white/30 hover:text-white'
          }`}
          onClick={() => setActiveSubTab('marijuana')}
        >
          <Leaf className="h-5 w-5 mr-2" />
          Marijuana Laws
        </button>
        <button
          className={`px-4 py-3 rounded-lg flex items-center text-base font-bold transition-colors ${
            activeSubTab === 'recording' 
              ? 'bg-blue-500 text-white' 
              : 'bg-white/20 text-white/90 hover:bg-white/30 hover:text-white'
          }`}
          onClick={() => setActiveSubTab('recording')}
        >
          <Phone className="h-5 w-5 mr-2" />
          Recording Laws
        </button>
        <button
          className={`px-4 py-3 rounded-lg flex items-center text-base font-bold transition-colors ${
            activeSubTab === 'resources' 
              ? 'bg-blue-500 text-white' 
              : 'bg-white/20 text-white/90 hover:bg-white/30 hover:text-white'
          }`}
          onClick={() => setActiveSubTab('resources')}
        >
          <BookOpen className="h-5 w-5 mr-2" />
          Legal Resources
        </button>
      </div>

      {/* Content based on active tab */}
      {activeSubTab === 'marijuana' && <MarijuanaLawsSection />}
      {activeSubTab === 'recording' && <RecordingLawsSection />}
      {activeSubTab === 'resources' && <LegalResourcesSection />}
    </div>
  );
};

export default EnhancedResourcesAndLaws;