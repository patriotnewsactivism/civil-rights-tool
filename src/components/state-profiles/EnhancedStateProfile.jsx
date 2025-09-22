import React, { useState } from 'react';
import { stateProfiles } from '../../data/stateProfiles';
import { marijuanaLaws } from '../../data/marijuanaLaws';
import { recordingConsentLaws } from '../../data/recordingConsentLaws';
import { 
  Gavel, 
  Camera, 
  FileText, 
  Leaf, 
  Phone, 
  Shield, 
  AlertTriangle, 
  BookOpen, 
  Landmark, 
  MapPin,
  ChevronDown,
  ChevronUp,
  ExternalLink
} from 'lucide-react';

const EnhancedStateProfile = ({ stateCode }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState({});

  if (!stateCode || !stateProfiles[stateCode]) {
    return (
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-xl border border-white/20">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Please select a state to view its profile</h2>
          <p>Select a state from the dropdown menu to view detailed legal information.</p>
        </div>
      </div>
    );
  }

  const stateProfile = stateProfiles[stateCode];
  const marijuanaLaw = marijuanaLaws[stateCode];
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
      <div className="mb-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden">
        <button 
          onClick={() => toggleSection(title)}
          className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
        >
          <div className="flex items-center">
            {icon}
            <h3 className="text-xl font-semibold ml-2 text-white">{title}</h3>
          </div>
          {isExpanded ? <ChevronUp className="h-5 w-5 text-white/70" /> : <ChevronDown className="h-5 w-5 text-white/70" />}
        </button>
        
        {isExpanded && (
          <div className="p-4 pt-0 text-white/90">
            {content}
          </div>
        )}
      </div>
    );
  };

  const renderMarijuanaLawContent = () => {
    if (!marijuanaLaw) return <p>No marijuana law data available for this state.</p>;
    
    return (
      <div>
        <div className="mb-4">
          <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
            marijuanaLaw.status === 'Fully Legal' ? 'bg-green-500/20 text-green-300' :
            marijuanaLaw.status === 'Medical Only' ? 'bg-blue-500/20 text-blue-300' :
            marijuanaLaw.status === 'Limited Medical' ? 'bg-yellow-500/20 text-yellow-300' :
            'bg-red-500/20 text-red-300'
          }`}>
            {marijuanaLaw.status}
          </div>
        </div>

        {marijuanaLaw.medicalProgram.established && (
          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2 text-white">Medical Program</h4>
            <p><span className="font-medium">Established:</span> {marijuanaLaw.medicalProgram.established}</p>
            <p className="mt-2"><span className="font-medium">Qualifying Conditions:</span></p>
            {Array.isArray(marijuanaLaw.medicalProgram.conditions) ? (
              <ul className="list-disc pl-5 mt-1 space-y-1">
                {marijuanaLaw.medicalProgram.conditions.map((condition, index) => (
                  <li key={index}>{condition}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-1">{marijuanaLaw.medicalProgram.conditions}</p>
            )}
            <p className="mt-2"><span className="font-medium">Possession Limits:</span> {marijuanaLaw.medicalProgram.possessionLimits}</p>
            
            {marijuanaLaw.medicalProgram.freeCardPrograms && marijuanaLaw.medicalProgram.freeCardPrograms.length > 0 && (
              <div className="mt-4">
                <h5 className="font-semibold text-white">Free/Reduced-Cost Medical Card Programs:</h5>
                {marijuanaLaw.medicalProgram.freeCardPrograms.map((program, index) => (
                  <div key={index} className="mt-2 p-3 bg-white/5 rounded-lg">
                    <p className="font-medium text-white">{program.name}</p>
                    <p><span className="font-medium">Eligibility:</span> {program.eligibility}</p>
                    {program.website && (
                      <p>
                        <span className="font-medium">Website:</span>{' '}
                        <a href={program.website} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 inline-flex items-center">
                          {program.website.replace(/(^\w+:|^)\/\//, '')}
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </p>
                    )}
                    {program.phone && <p><span className="font-medium">Phone:</span> {program.phone}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {marijuanaLaw.recreational.legal && (
          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2 text-white">Recreational Use</h4>
            <p><span className="font-medium">Legal Since:</span> {marijuanaLaw.recreational.since}</p>
            <p><span className="font-medium">Possession Limits:</span> {marijuanaLaw.recreational.possessionLimits}</p>
            <p><span className="font-medium">Retail Sales:</span> {marijuanaLaw.recreational.retailSales ? 'Yes' : 'Not yet implemented'}</p>
          </div>
        )}

        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2 text-white">Key Regulations</h4>
          <ul className="list-disc pl-5 space-y-1">
            {marijuanaLaw.keyRegulations.map((regulation, index) => (
              <li key={index}>{regulation}</li>
            ))}
          </ul>
        </div>

        {marijuanaLaw.recentChanges && (
          <div>
            <h4 className="text-lg font-semibold mb-2 text-white">Recent Changes</h4>
            <p>{marijuanaLaw.recentChanges}</p>
          </div>
        )}
      </div>
    );
  };

  const renderRecordingLawContent = () => {
    if (!recordingLaw) return <p>No recording consent law data available for this state.</p>;
    
    return (
      <div>
        <div className="mb-4">
          <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
            recordingLaw.consentType === 'One-Party' ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'
          }`}>
            {recordingLaw.consentType} Consent State
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2 text-white">Statute</h4>
          <p>{recordingLaw.statute}</p>
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2 text-white">Description</h4>
          <p>{recordingLaw.description}</p>
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2 text-white">Exceptions</h4>
          <ul className="list-disc pl-5 space-y-1">
            {recordingLaw.exceptions.map((exception, index) => (
              <li key={index}>{exception}</li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2 text-white">Penalties</h4>
          <p><span className="font-medium">Criminal:</span> {recordingLaw.penalties.criminal}</p>
          <p><span className="font-medium">Civil:</span> {recordingLaw.penalties.civil}</p>
        </div>

        {recordingLaw.caseLaw && recordingLaw.caseLaw.length > 0 && (
          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2 text-white">Relevant Case Law</h4>
            {recordingLaw.caseLaw.map((caseItem, index) => (
              <div key={index} className="mb-3 p-3 bg-white/5 rounded-lg">
                <p className="font-medium text-white">{caseItem.case}</p>
                <p><span className="font-medium">Ruling:</span> {caseItem.ruling}</p>
                <p><span className="font-medium">Significance:</span> {caseItem.significance}</p>
              </div>
            ))}
          </div>
        )}

        {recordingLaw.recentChanges && (
          <div>
            <h4 className="text-lg font-semibold mb-2 text-white">Recent Changes</h4>
            <p>{recordingLaw.recentChanges}</p>
          </div>
        )}
      </div>
    );
  };

  const renderPublicRecordsContent = () => {
    const { publicRecords } = stateProfile.legalInfo;
    
    return (
      <div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2 text-white">Statute</h4>
          <p>{publicRecords.statute}</p>
        </div>
        
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2 text-white">Time Limit for Response</h4>
          <p>{publicRecords.timeLimit}</p>
        </div>
        
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2 text-white">Fees</h4>
          <p>{publicRecords.fees}</p>
        </div>
        
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2 text-white">Common Exemptions</h4>
          <ul className="list-disc pl-5 space-y-1">
            {publicRecords.exemptions.map((exemption, index) => (
              <li key={index}>{exemption}</li>
            ))}
          </ul>
        </div>
        
        {publicRecords.tips && (
          <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
            <h4 className="text-lg font-semibold mb-2 text-white">Tips for Requesters</h4>
            <p>{publicRecords.tips}</p>
          </div>
        )}
      </div>
    );
  };

  const renderShieldLawContent = () => {
    const { shieldLaw } = stateProfile.legalInfo;
    
    return (
      <div>
        <div className="mb-4">
          <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
            shieldLaw.exists ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
          }`}>
            {shieldLaw.exists ? 'Shield Law Exists' : 'No Shield Law'}
          </div>
        </div>
        
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2 text-white">Description</h4>
          <p>{shieldLaw.description}</p>
        </div>
        
        {shieldLaw.caselaw && (
          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2 text-white">Case Law</h4>
            <p>{shieldLaw.caselaw}</p>
          </div>
        )}
        
        {shieldLaw.statute && (
          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2 text-white">Statute</h4>
            <p>{shieldLaw.statute}</p>
          </div>
        )}
      </div>
    );
  };

  const renderProtestRightsContent = () => {
    const { protestRights } = stateProfile.legalInfo;
    
    return (
      <div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2 text-white">Permit Requirements</h4>
          <p>{protestRights.permitRequirements}</p>
        </div>
        
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2 text-white">Restrictions</h4>
          <ul className="list-disc pl-5 space-y-1">
            {protestRights.restrictions.map((restriction, index) => (
              <li key={index}>{restriction}</li>
            ))}
          </ul>
        </div>
        
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2 text-white">Notable Cases</h4>
          <ul className="list-disc pl-5 space-y-1">
            {protestRights.notableCases.map((caseItem, index) => (
              <li key={index}>{caseItem}</li>
            ))}
          </ul>
        </div>
        
        {protestRights.recentChanges && (
          <div className="p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
            <h4 className="text-lg font-semibold mb-2 text-white">Recent Changes</h4>
            <p>{protestRights.recentChanges}</p>
          </div>
        )}
      </div>
    );
  };

  const renderPoliceAccountabilityContent = () => {
    const { policeAccountability } = stateProfile.legalInfo;
    
    return (
      <div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2 text-white">Body Camera Laws</h4>
          <p>{policeAccountability.bodyCameras}</p>
        </div>
        
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2 text-white">Complaint Process</h4>
          <p>{policeAccountability.complaintProcess}</p>
        </div>
        
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2 text-white">Special Protections</h4>
          <ul className="list-disc pl-5 space-y-1">
            {policeAccountability.specialProtections.map((protection, index) => (
              <li key={index}>{protection}</li>
            ))}
          </ul>
        </div>
        
        {policeAccountability.independentReview && (
          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2 text-white">Independent Review</h4>
            <p>{policeAccountability.independentReview}</p>
          </div>
        )}
      </div>
    );
  };

  const renderKeyContactsContent = () => {
    const { keyContacts } = stateProfile;
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {keyContacts.map((contact, index) => (
          <div key={index} className="p-4 bg-white/5 rounded-lg">
            <h4 className="text-lg font-semibold mb-2 text-white">{contact.organization}</h4>
            <p><span className="font-medium">Type:</span> {contact.type}</p>
            {contact.phone && <p><span className="font-medium">Phone:</span> {contact.phone}</p>}
            {contact.email && (
              <p>
                <span className="font-medium">Email:</span>{' '}
                <a href={`mailto:${contact.email}`} className="text-blue-400 hover:text-blue-300">
                  {contact.email}
                </a>
              </p>
            )}
            {contact.website && (
              <p>
                <span className="font-medium">Website:</span>{' '}
                <a href={contact.website} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 inline-flex items-center">
                  {contact.website.replace(/(^\w+:|^)\/\//, '')}
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </p>
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderRecentIncidentsContent = () => {
    const { recentIncidents } = stateProfile;
    
    return (
      <div>
        {recentIncidents.map((incident, index) => (
          <div key={index} className="mb-4 p-4 bg-white/5 rounded-lg">
            <h4 className="text-lg font-semibold mb-2 text-white">{incident.title}</h4>
            <p className="text-sm text-white/70 mb-2">{incident.date} • {incident.location}</p>
            <p className="mb-2">{incident.description}</p>
            {incident.status && <p><span className="font-medium">Status:</span> {incident.status}</p>}
            {incident.source && (
              <p className="mt-2">
                <a href={incident.source} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 inline-flex items-center">
                  Source
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </p>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 rounded-xl p-6 shadow-xl border border-white/20">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            {stateProfile.name}
          </h2>
          <p className="text-white/70">Capital: {stateProfile.capital}</p>
        </div>
        <div className="text-5xl font-bold text-white/20">{stateCode}</div>
      </div>

      <div className="mb-6">
        <div className="flex flex-wrap border-b border-white/10">
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
          <button
            className={`px-4 py-2 font-medium text-sm ${activeTab === 'contacts' ? 'text-white border-b-2 border-blue-500' : 'text-white/70 hover:text-white'}`}
            onClick={() => setActiveTab('contacts')}
          >
            Legal Resources
          </button>
          <button
            className={`px-4 py-2 font-medium text-sm ${activeTab === 'incidents' ? 'text-white border-b-2 border-blue-500' : 'text-white/70 hover:text-white'}`}
            onClick={() => setActiveTab('incidents')}
          >
            Recent Incidents
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {activeTab === 'overview' && (
          <>
            {renderSection(
              "Public Records Access", 
              renderPublicRecordsContent(), 
              <FileText className="h-5 w-5 text-blue-400" />,
              true
            )}
            
            {renderSection(
              "Shield Law", 
              renderShieldLawContent(), 
              <Shield className="h-5 w-5 text-purple-400" />
            )}
            
            {renderSection(
              "Protest Rights", 
              renderProtestRightsContent(), 
              <AlertTriangle className="h-5 w-5 text-yellow-400" />
            )}
            
            {renderSection(
              "Police Accountability", 
              renderPoliceAccountabilityContent(), 
              <Camera className="h-5 w-5 text-red-400" />
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
              <Phone className="h-5 w-5 text-blue-400" />,
              true
            )}
          </>
        )}

        {activeTab === 'contacts' && (
          <>
            {renderSection(
              "Key Legal Contacts & Resources", 
              renderKeyContactsContent(), 
              <BookOpen className="h-5 w-5 text-purple-400" />,
              true
            )}
          </>
        )}

        {activeTab === 'incidents' && (
          <>
            {renderSection(
              "Recent Civil Rights Incidents", 
              renderRecentIncidentsContent(), 
              <AlertTriangle className="h-5 w-5 text-yellow-400" />,
              true
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default EnhancedStateProfile;