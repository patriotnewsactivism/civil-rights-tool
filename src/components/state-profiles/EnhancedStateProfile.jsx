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
  Leaf,
  Shield,
  Scale,
  AlertCircle,
  CheckCircle,
  XCircle,
  Info
} from 'lucide-react';

const EnhancedStateProfile = ({ selectedState }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState({});

  // Find state data
  const stateProfile = stateProfiles?.find(state => 
    state.name === selectedState || state.code === selectedState
  );
  
  const marijuanaLaw = updatedMarijuanaLaws?.find(state => 
    state.state === selectedState
  );
  
  const recordingLaw = recordingConsentLaws?.find(state => 
    state.state === selectedState
  );

  if (!selectedState) {
    return (
      <div className="text-center py-12">
        <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Select a State</h3>
        <p className="text-gray-500">Choose a state from the dropdown to view detailed information about civil rights laws and protections.</p>
      </div>
    );
  }

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <Shield className="h-4 w-4" /> },
    { id: 'recording', label: 'Recording Laws', icon: <Camera className="h-4 w-4" /> },
    { id: 'marijuana', label: 'Marijuana Laws', icon: <Leaf className="h-4 w-4" /> },
    { id: 'resources', label: 'Legal Resources', icon: <Scale className="h-4 w-4" /> }
  ];

  return (
    <div className="space-y-6">
      {/* State Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">{selectedState}</h2>
            <p className="text-blue-100">Civil Rights & Legal Information</p>
          </div>
          <div className="text-right">
            <MapPin className="h-8 w-8 text-blue-200 mb-2" />
            <p className="text-sm text-blue-100">State Profile</p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        {activeTab === 'overview' && (
          <OverviewTab 
            stateProfile={stateProfile} 
            selectedState={selectedState}
            marijuanaLaw={marijuanaLaw}
            recordingLaw={recordingLaw}
          />
        )}
        
        {activeTab === 'recording' && (
          <RecordingLawsTab 
            recordingLaw={recordingLaw} 
            selectedState={selectedState}
          />
        )}
        
        {activeTab === 'marijuana' && (
          <MarijuanaLawsTab 
            marijuanaLaw={marijuanaLaw} 
            selectedState={selectedState}
          />
        )}
        
        {activeTab === 'resources' && (
          <ResourcesTab 
            stateProfile={stateProfile} 
            selectedState={selectedState}
          />
        )}
      </div>
    </div>
  );
};

// Overview Tab Component
const OverviewTab = ({ stateProfile, selectedState, marijuanaLaw, recordingLaw }) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    <InfoCard
      title="Recording Laws"
      icon={<Camera className="h-6 w-6 text-blue-600" />}
      status={recordingLaw?.consentRequired ? 'Two-Party Consent' : 'One-Party Consent'}
      statusColor={recordingLaw?.consentRequired ? 'yellow' : 'green'}
      description={recordingLaw?.summary || 'Recording law information not available'}
    />
    
    <InfoCard
      title="Marijuana Laws"
      icon={<Leaf className="h-6 w-6 text-green-600" />}
      status={marijuanaLaw?.recreationalStatus || 'Unknown'}
      statusColor={marijuanaLaw?.recreationalStatus === 'Legal' ? 'green' : 
                   marijuanaLaw?.recreationalStatus === 'Decriminalized' ? 'yellow' : 'red'}
      description={marijuanaLaw?.summary || 'Marijuana law information not available'}
    />
    
    <InfoCard
      title="Civil Rights"
      icon={<Shield className="h-6 w-6 text-purple-600" />}
      status="Protected"
      statusColor="green"
      description="Constitutional rights protected under federal and state law"
    />
  </div>
);

// Recording Laws Tab Component
const RecordingLawsTab = ({ recordingLaw, selectedState }) => {
  if (!recordingLaw) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <div className="flex items-center">
          <AlertCircle className="h-6 w-6 text-yellow-600 mr-3" />
          <div>
            <h3 className="text-lg font-semibold text-yellow-800">Information Not Available</h3>
            <p className="text-yellow-700">Recording law information for {selectedState} is not currently available.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center mb-4">
          <Camera className="h-6 w-6 text-blue-600 mr-3" />
          <h3 className="text-xl font-semibold text-gray-900">Recording Consent Laws</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Consent Requirement</h4>
            <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
              recordingLaw.consentRequired 
                ? 'bg-yellow-100 text-yellow-800' 
                : 'bg-green-100 text-green-800'
            }`}>
              {recordingLaw.consentRequired ? (
                <>
                  <AlertCircle className="h-4 w-4 mr-1" />
                  Two-Party Consent Required
                </>
              ) : (
                <>
                  <CheckCircle className="h-4 w-4 mr-1" />
                  One-Party Consent
                </>
              )}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Police Interactions</h4>
            <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
              recordingLaw.policeRecording 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {recordingLaw.policeRecording ? (
                <>
                  <CheckCircle className="h-4 w-4 mr-1" />
                  Generally Allowed
                </>
              ) : (
                <>
                  <XCircle className="h-4 w-4 mr-1" />
                  Restricted
                </>
              )}
            </div>
          </div>
        </div>
        
        {recordingLaw.summary && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-gray-700">{recordingLaw.summary}</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Marijuana Laws Tab Component
const MarijuanaLawsTab = ({ marijuanaLaw, selectedState }) => {
  if (!marijuanaLaw) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <div className="flex items-center">
          <AlertCircle className="h-6 w-6 text-yellow-600 mr-3" />
          <div>
            <h3 className="text-lg font-semibold text-yellow-800">Information Not Available</h3>
            <p className="text-yellow-700">Marijuana law information for {selectedState} is not currently available.</p>
          </div>
        </div>
      </div>
    );
  }

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'legal': return 'green';
      case 'decriminalized': return 'yellow';
      case 'medical only': return 'blue';
      default: return 'red';
    }
  };

  const getStatusIcon = (status) => {
    switch (status?.toLowerCase()) {
      case 'legal': return <CheckCircle className="h-4 w-4" />;
      case 'decriminalized': return <Info className="h-4 w-4" />;
      case 'medical only': return <FileText className="h-4 w-4" />;
      default: return <XCircle className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center mb-6">
          <Leaf className="h-6 w-6 text-green-600 mr-3" />
          <h3 className="text-xl font-semibold text-gray-900">Marijuana Laws</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Recreational Use</h4>
            <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-${getStatusColor(marijuanaLaw.recreationalStatus)}-100 text-${getStatusColor(marijuanaLaw.recreationalStatus)}-800`}>
              {getStatusIcon(marijuanaLaw.recreationalStatus)}
              <span className="ml-1">{marijuanaLaw.recreationalStatus}</span>
            </div>
            {marijuanaLaw.recreationalDetails && (
              <p className="text-gray-600 mt-2 text-sm">{marijuanaLaw.recreationalDetails}</p>
            )}
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Medical Use</h4>
            <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-${getStatusColor(marijuanaLaw.medicalStatus)}-100 text-${getStatusColor(marijuanaLaw.medicalStatus)}-800`}>
              {getStatusIcon(marijuanaLaw.medicalStatus)}
              <span className="ml-1">{marijuanaLaw.medicalStatus}</span>
            </div>
            {marijuanaLaw.medicalDetails && (
              <p className="text-gray-600 mt-2 text-sm">{marijuanaLaw.medicalDetails}</p>
            )}
          </div>
        </div>
        
        {marijuanaLaw.keyPoints && (
          <div className="mt-6">
            <h4 className="font-semibold text-gray-900 mb-3">Key Points</h4>
            <ul className="space-y-2">
              {marijuanaLaw.keyPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {marijuanaLaw.lastUpdated && (
          <div className="mt-4 text-sm text-gray-500">
            Last updated: {marijuanaLaw.lastUpdated}
          </div>
        )}
      </div>
    </div>
  );
};

// Resources Tab Component
const ResourcesTab = ({ stateProfile, selectedState }) => (
  <div className="space-y-6">
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center mb-4">
          <Scale className="h-6 w-6 text-blue-600 mr-3" />
          <h3 className="text-lg font-semibold text-gray-900">Legal Aid Organizations</h3>
        </div>
        <div className="space-y-3">
          <ResourceLink
            title="ACLU State Affiliate"
            url={`https://www.aclu.org/about/affiliates`}
            description="American Civil Liberties Union state chapter"
          />
          <ResourceLink
            title="Legal Aid Society"
            url={`https://www.legalaid.org`}
            description="Free legal services for low-income individuals"
          />
          <ResourceLink
            title="State Bar Association"
            url={`https://www.americanbar.org/groups/bar_services/resources/state_local_bar_associations/`}
            description="Professional legal organization and referral service"
          />
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center mb-4">
          <FileText className="h-6 w-6 text-green-600 mr-3" />
          <h3 className="text-lg font-semibold text-gray-900">Government Resources</h3>
        </div>
        <div className="space-y-3">
          <ResourceLink
            title="State Government Portal"
            url={`https://www.usa.gov/state-government/${selectedState.toLowerCase().replace(' ', '-')}`}
            description="Official state government website"
          />
          <ResourceLink
            title="State Attorney General"
            url={`https://www.naag.org/find-my-ag/`}
            description="State attorney general's office"
          />
          <ResourceLink
            title="State Legislature"
            url={`https://www.ncsl.org/research/about-state-legislatures/staff-change-legislative-websites.aspx`}
            description="State legislative information and bills"
          />
        </div>
      </div>
    </div>
  </div>
);

// Info Card Component
const InfoCard = ({ title, icon, status, statusColor, description }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
    <div className="flex items-center mb-3">
      {icon}
      <h3 className="text-lg font-semibold text-gray-900 ml-3">{title}</h3>
    </div>
    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-3 bg-${statusColor}-100 text-${statusColor}-800`}>
      {status}
    </div>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

// Resource Link Component
const ResourceLink = ({ title, url, description }) => (
  <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
    <div className="flex items-center justify-between">
      <div>
        <h4 className="font-medium text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-700 transition-colors"
      >
        <ExternalLink className="h-5 w-5" />
      </a>
    </div>
  </div>
);

export default EnhancedStateProfile;