import React, { useState } from 'react';
import { Leaf, Phone, BookOpen, ExternalLink, Search, Filter } from 'lucide-react';

const ResourcesAndLaws = ({ selectedState, darkMode }) => {
  const [activeSubTab, setActiveSubTab] = useState('marijuana');
  const [searchTerm, setSearchTerm] = useState('');

  // Marijuana laws data (simplified for demo)
  const marijuanaLaws = {
    CA: { status: 'Legal', possession: 'Up to 1 oz', cultivation: '6 plants', details: 'Recreational and medical use legal' },
    NY: { status: 'Legal', possession: 'Up to 3 oz', cultivation: '6 plants', details: 'Recreational and medical use legal' },
    TX: { status: 'Illegal', possession: 'Criminal offense', cultivation: 'Felony', details: 'Only CBD oil with low THC allowed' },
    FL: { status: 'Medical Only', possession: 'Medical patients only', cultivation: 'Licensed facilities only', details: 'Medical marijuana program active' }
  };

  // Recording laws data (simplified for demo)
  const recordingLaws = {
    CA: { consent: 'Two-party', police: 'Generally allowed in public', details: 'All parties must consent to recording' },
    NY: { consent: 'One-party', police: 'Allowed in public', details: 'Only one party needs to consent' },
    TX: { consent: 'One-party', police: 'Allowed in public', details: 'One party consent required' },
    FL: { consent: 'Two-party', police: 'Allowed in public', details: 'All parties must consent except in public' }
  };

  const currentMarijuanaLaw = marijuanaLaws[selectedState] || { status: 'Select a state', possession: '—', cultivation: '—', details: 'Please select a state to view laws' };
  const currentRecordingLaw = recordingLaws[selectedState] || { consent: 'Select a state', police: '—', details: 'Please select a state to view laws' };

  return (
    <div className="space-y-6">
      {/* Sub-navigation */}
      <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4">
        <button
          className={`px-4 py-2 rounded-lg flex items-center text-sm font-medium transition-colors ${
            activeSubTab === 'marijuana' 
              ? 'bg-blue-600 text-white' 
              : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
          }`}
          onClick={() => setActiveSubTab('marijuana')}
        >
          <Leaf className="h-4 w-4 mr-2" />
          Marijuana Laws
        </button>
        <button
          className={`px-4 py-2 rounded-lg flex items-center text-sm font-medium transition-colors ${
            activeSubTab === 'recording' 
              ? 'bg-blue-600 text-white' 
              : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
          }`}
          onClick={() => setActiveSubTab('recording')}
        >
          <Phone className="h-4 w-4 mr-2" />
          Recording Laws
        </button>
        <button
          className={`px-4 py-2 rounded-lg flex items-center text-sm font-medium transition-colors ${
            activeSubTab === 'resources' 
              ? 'bg-blue-600 text-white' 
              : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
          }`}
          onClick={() => setActiveSubTab('resources')}
        >
          <BookOpen className="h-4 w-4 mr-2" />
          Legal Resources
        </button>
      </div>

      {/* Marijuana Laws Tab */}
      {activeSubTab === 'marijuana' && (
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
          <h3 className="text-2xl font-bold text-white mb-4">
            Marijuana Laws - {selectedState || 'Select a State'}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Legal Status</h4>
                <p className={`text-lg font-medium ${
                  currentMarijuanaLaw.status === 'Legal' ? 'text-green-400' :
                  currentMarijuanaLaw.status === 'Medical Only' ? 'text-yellow-400' :
                  currentMarijuanaLaw.status === 'Illegal' ? 'text-red-400' : 'text-white/70'
                }`}>
                  {currentMarijuanaLaw.status}
                </p>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Possession Limit</h4>
                <p className="text-white/80">{currentMarijuanaLaw.possession}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Cultivation</h4>
                <p className="text-white/80">{currentMarijuanaLaw.cultivation}</p>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Additional Details</h4>
                <p className="text-white/80">{currentMarijuanaLaw.details}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Recording Laws Tab */}
      {activeSubTab === 'recording' && (
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
          <h3 className="text-2xl font-bold text-white mb-4">
            Recording Laws - {selectedState || 'Select a State'}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Consent Required</h4>
                <p className={`text-lg font-medium ${
                  currentRecordingLaw.consent === 'One-party' ? 'text-green-400' :
                  currentRecordingLaw.consent === 'Two-party' ? 'text-yellow-400' : 'text-white/70'
                }`}>
                  {currentRecordingLaw.consent}
                </p>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Recording Police</h4>
                <p className="text-white/80">{currentRecordingLaw.police}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Details</h4>
                <p className="text-white/80">{currentRecordingLaw.details}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Legal Resources Tab */}
      {activeSubTab === 'resources' && (
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
          <h3 className="text-2xl font-bold text-white mb-4">Legal Resources</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-white text-lg">Federal Resources</h4>
              <div className="space-y-3">
                <a href="https://www.justice.gov/crt" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <span className="text-white">DOJ Civil Rights Division</span>
                  <ExternalLink className="h-4 w-4 text-white/50" />
                </a>
                <a href="https://www.aclu.org/" target="_blank" rel="noopener noreferrer"
                   className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <span className="text-white">ACLU Resources</span>
                  <ExternalLink className="h-4 w-4 text-white/50" />
                </a>
                <a href="https://www.naacpldf.org/" target="_blank" rel="noopener noreferrer"
                   className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <span className="text-white">NAACP Legal Defense Fund</span>
                  <ExternalLink className="h-4 w-4 text-white/50" />
                </a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-white text-lg">Legal Aid Organizations</h4>
              <div className="space-y-3">
                <a href="https://www.splcenter.org/" target="_blank" rel="noopener noreferrer"
                   className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <span className="text-white">Southern Poverty Law Center</span>
                  <ExternalLink className="h-4 w-4 text-white/50" />
                </a>
                <a href="https://www.eff.org/" target="_blank" rel="noopener noreferrer"
                   className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <span className="text-white">Electronic Frontier Foundation</span>
                  <ExternalLink className="h-4 w-4 text-white/50" />
                </a>
                <a href="https://www.legalaid.org/" target="_blank" rel="noopener noreferrer"
                   className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <span className="text-white">Legal Aid Society</span>
                  <ExternalLink className="h-4 w-4 text-white/50" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResourcesAndLaws;