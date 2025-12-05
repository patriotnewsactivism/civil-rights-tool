import React, { useState } from 'react';
import { 
  Shield, 
  AlertTriangle, 
  Scale, 
  BookOpen, 
  Phone, 
  ExternalLink,
  MapPin,
  FileText,
  Users,
  Gavel,
  Info,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { getStateDetails } from '../../data/stateDetails';

const DetailedStateProfile = ({ stateCode, darkMode = true }) => {
  const [expandedSection, setExpandedSection] = useState('overview');
  const stateData = getStateDetails(stateCode);

  if (!stateData) {
    return (
      <div className={`${darkMode ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'} rounded-xl p-6 border ${darkMode ? 'border-white/20' : 'border-slate-200'}`}>
        <p>Select a state to view detailed civil rights information.</p>
      </div>
    );
  }

  const getHostilityColor = (hostility) => {
    switch (hostility) {
      case 'EXTREMELY HOSTILE': return 'text-red-500 bg-red-500/10';
      case 'Protective': return 'text-green-500 bg-green-500/10';
      default: return 'text-yellow-500 bg-yellow-500/10';
    }
  };

  const getHostilityIcon = (hostility) => {
    switch (hostility) {
      case 'EXTREMELY HOSTILE': return <AlertTriangle className="h-5 w-5" />;
      case 'Protective': return <Shield className="h-5 w-5" />;
      default: return <Info className="h-5 w-5" />;
    }
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const Section = ({ id, title, icon: Icon, children }) => {
    const isExpanded = expandedSection === id;
    
    return (
      <div className={`${darkMode ? 'bg-white/5' : 'bg-slate-50'} rounded-lg border ${darkMode ? 'border-white/10' : 'border-slate-200'} overflow-hidden`}>
        <button
          onClick={() => toggleSection(id)}
          className={`w-full px-6 py-4 flex items-center justify-between ${darkMode ? 'hover:bg-white/10' : 'hover:bg-slate-100'} transition-colors`}
        >
          <div className="flex items-center">
            <Icon className={`h-5 w-5 mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              {title}
            </h3>
          </div>
          {isExpanded ? (
            <ChevronUp className={`h-5 w-5 ${darkMode ? 'text-white/70' : 'text-slate-600'}`} />
          ) : (
            <ChevronDown className={`h-5 w-5 ${darkMode ? 'text-white/70' : 'text-slate-600'}`} />
          )}
        </button>
        
        {isExpanded && (
          <div className="px-6 py-4 border-t border-white/10">
            {children}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={`${darkMode ? 'bg-slate-900' : 'bg-white'} rounded-xl p-6 shadow-xl border ${darkMode ? 'border-white/20' : 'border-slate-200'}`}>
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              {stateData.name}
            </h2>
            <p className={`text-sm ${darkMode ? 'text-white/70' : 'text-slate-600'} mt-1`}>
              Comprehensive Civil Rights Analysis
            </p>
          </div>
          <div className={`flex items-center px-4 py-2 rounded-lg ${getHostilityColor(stateData.hostility)}`}>
            {getHostilityIcon(stateData.hostility)}
            <span className="ml-2 font-semibold">{stateData.hostility}</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className={`${darkMode ? 'bg-white/5' : 'bg-slate-50'} rounded-lg p-4 border ${darkMode ? 'border-white/10' : 'border-slate-200'}`}>
            <div className="flex items-center mb-2">
              <Scale className={`h-5 w-5 mr-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <span className={`text-sm font-medium ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
                Federal Circuit
              </span>
            </div>
            <p className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              {stateData.circuit}
            </p>
          </div>

          <div className={`${darkMode ? 'bg-white/5' : 'bg-slate-50'} rounded-lg p-4 border ${darkMode ? 'border-white/10' : 'border-slate-200'}`}>
            <div className="flex items-center mb-2">
              <FileText className={`h-5 w-5 mr-2 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
              <span className={`text-sm font-medium ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
                State Laws
              </span>
            </div>
            <p className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              {stateData.civilRightsLaws?.length || 0}
            </p>
          </div>

          <div className={`${darkMode ? 'bg-white/5' : 'bg-slate-50'} rounded-lg p-4 border ${darkMode ? 'border-white/10' : 'border-slate-200'}`}>
            <div className="flex items-center mb-2">
              <Gavel className={`h-5 w-5 mr-2 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
              <span className={`text-sm font-medium ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
                Landmark Cases
              </span>
            </div>
            <p className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              {stateData.landmarkCases?.length || 0}
            </p>
          </div>
        </div>
      </div>

      {/* Warning Banner for Hostile States */}
      {stateData.warnings && stateData.warnings.length > 0 && (
        <div className="mb-6 bg-red-500/10 border border-red-500/20 rounded-lg p-4">
          <div className="flex items-start">
            <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="text-red-500 font-bold mb-2">Important Warnings</h4>
              <ul className="space-y-1">
                {stateData.warnings.map((warning, index) => (
                  <li key={index} className="text-red-400 text-sm">
                    • {warning}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Expandable Sections */}
      <div className="space-y-4">
        {/* Civil Rights Laws */}
        <Section id="laws" title="State Civil Rights Laws" icon={FileText}>
          <ul className="space-y-2">
            {stateData.civilRightsLaws?.map((law, index) => (
              <li key={index} className={`flex items-start ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
                <span className={`mr-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>•</span>
                <span>{law}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Landmark Cases */}
        <Section id="cases" title="Landmark Cases" icon={Gavel}>
          <div className="space-y-3">
            {stateData.landmarkCases?.map((caseInfo, index) => (
              <div key={index} className={`${darkMode ? 'bg-white/5' : 'bg-white'} rounded-lg p-3 border ${darkMode ? 'border-white/10' : 'border-slate-200'}`}>
                <p className={`font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {caseInfo}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Resources */}
        <Section id="resources" title="Legal Resources & Organizations" icon={BookOpen}>
          <div className="space-y-3">
            {stateData.resources?.map((resource, index) => (
              <div key={index} className={`${darkMode ? 'bg-white/5' : 'bg-white'} rounded-lg p-4 border ${darkMode ? 'border-white/10' : 'border-slate-200'}`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className={`font-bold ${darkMode ? 'text-white' : 'text-slate-900'} mb-1`}>
                      {resource.name}
                    </h4>
                    <p className={`text-sm ${darkMode ? 'text-white/70' : 'text-slate-600'} mb-2`}>
                      {resource.description}
                    </p>
                  </div>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`ml-4 p-2 rounded-lg ${darkMode ? 'bg-blue-500/20 hover:bg-blue-500/30' : 'bg-blue-50 hover:bg-blue-100'} transition-colors`}
                  >
                    <ExternalLink className={`h-4 w-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* State Agencies */}
        <Section id="agencies" title="State Civil Rights Agencies" icon={Users}>
          <div className="space-y-3">
            {stateData.stateAgencies?.map((agency, index) => (
              <div key={index} className={`${darkMode ? 'bg-white/5' : 'bg-white'} rounded-lg p-4 border ${darkMode ? 'border-white/10' : 'border-slate-200'}`}>
                <h4 className={`font-bold ${darkMode ? 'text-white' : 'text-slate-900'} mb-2`}>
                  {agency.name}
                </h4>
                <div className="space-y-1">
                  <div className="flex items-center">
                    <Phone className={`h-4 w-4 mr-2 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                    <a href={`tel:${agency.phone}`} className={`text-sm ${darkMode ? 'text-white/80 hover:text-white' : 'text-slate-700 hover:text-slate-900'}`}>
                      {agency.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <ExternalLink className={`h-4 w-4 mr-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                    <a 
                      href={agency.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`text-sm ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* State Constitution */}
        <Section id="constitution" title="State Constitutional Provisions" icon={Scale}>
          <ul className="space-y-2">
            {stateData.constitution?.provisions?.map((provision, index) => (
              <li key={index} className={`flex items-start ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
                <span className={`mr-2 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>•</span>
                <span>{provision}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Recent Developments */}
        <Section id="developments" title="Recent Developments" icon={Info}>
          <ul className="space-y-2">
            {stateData.recentDevelopments?.map((development, index) => (
              <li key={index} className={`flex items-start ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
                <span className={`mr-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>•</span>
                <span>{development}</span>
              </li>
            ))}
          </ul>
        </Section>
      </div>

      {/* Footer */}
      <div className={`mt-6 p-4 rounded-lg ${darkMode ? 'bg-white/5' : 'bg-slate-50'} border ${darkMode ? 'border-white/10' : 'border-slate-200'}`}>
        <p className={`text-xs ${darkMode ? 'text-white/50' : 'text-slate-500'} italic`}>
          This information is provided for educational purposes and should not be considered legal advice. 
          For specific legal guidance, please consult with a qualified attorney in your jurisdiction.
        </p>
      </div>
    </div>
  );
};

export default DetailedStateProfile;