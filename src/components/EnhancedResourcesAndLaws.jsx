import React, { useState } from 'react';
import { BookOpen, Scale, Shield, AlertTriangle, ExternalLink, Search, Filter, MapPin } from 'lucide-react';

const EnhancedResourcesAndLaws = () => {
  const [selectedState, setSelectedState] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('rights');

  // Comprehensive marijuana laws data for all 50 states + DC
  const marijuanaLaws = {
    'Alabama': { 
      status: 'Medical Only', 
      possession: 'CBD only for specific conditions', 
      recreational: 'Illegal',
      freeCard: 'No state waiver program. Check telehealth discounts.',
      cardSources: ['https://medcardnow.com/get-your-medical-marijuana-card-for-free/']
    },
    'Alaska': { status: 'Fully Legal', possession: 'Up to 1 oz', recreational: 'Legal 21+' },
    'Arizona': { status: 'Fully Legal', possession: 'Up to 1 oz', recreational: 'Legal 21+' },
    'Arkansas': { status: 'Medical Only', possession: 'Medical patients only', recreational: 'Illegal' },
    'California': { status: 'Fully Legal', possession: 'Up to 1 oz', recreational: 'Legal 21+' },
    'Colorado': { status: 'Fully Legal', possession: 'Up to 1 oz', recreational: 'Legal 21+' },
    'Connecticut': { status: 'Fully Legal', possession: 'Up to 1.5 oz', recreational: 'Legal 21+' },
    'Delaware': { status: 'Fully Legal', possession: 'Up to 1 oz', recreational: 'Legal 21+' },
    'Florida': { status: 'Medical Only', possession: 'Medical patients only', recreational: 'Illegal' },
    'Georgia': { status: 'Medical Only', possession: 'Low-THC oil only', recreational: 'Illegal' },
    'Hawaii': { status: 'Medical Only', possession: 'Medical patients only', recreational: 'Illegal' },
    'Idaho': { status: 'Fully Illegal', possession: 'Illegal', recreational: 'Illegal' },
    'Illinois': { status: 'Fully Legal', possession: 'Up to 1 oz', recreational: 'Legal 21+' },
    'Indiana': { status: 'Fully Illegal', possession: 'Illegal', recreational: 'Illegal' },
    'Iowa': { status: 'CBD Only', possession: 'CBD only', recreational: 'Illegal' },
    'Kansas': { status: 'CBD Only', possession: 'CBD only', recreational: 'Illegal' },
    'Kentucky': { status: 'CBD Only', possession: 'CBD only', recreational: 'Illegal' },
    'Louisiana': { status: 'Medical Only', possession: 'Medical patients only', recreational: 'Illegal' },
    'Maine': { status: 'Fully Legal', possession: 'Up to 2.5 oz', recreational: 'Legal 21+' },
    'Maryland': { status: 'Fully Legal', possession: 'Up to 1.5 oz', recreational: 'Legal 21+' },
    'Massachusetts': { status: 'Fully Legal', possession: 'Up to 1 oz', recreational: 'Legal 21+' },
    'Michigan': { status: 'Fully Legal', possession: 'Up to 2.5 oz', recreational: 'Legal 21+' },
    'Minnesota': { status: 'Fully Legal', possession: 'Up to 2 oz', recreational: 'Legal 21+' },
    'Mississippi': { status: 'Medical Only', possession: 'Medical patients only', recreational: 'Illegal' },
    'Missouri': { status: 'Fully Legal', possession: 'Up to 3 oz', recreational: 'Legal 21+' },
    'Montana': { status: 'Fully Legal', possession: 'Up to 1 oz', recreational: 'Legal 21+' },
    'Nebraska': { status: 'CBD Only', possession: 'CBD only', recreational: 'Illegal' },
    'Nevada': { status: 'Fully Legal', possession: 'Up to 1 oz', recreational: 'Legal 21+' },
    'New Hampshire': { status: 'Medical Only', possession: 'Medical patients only', recreational: 'Illegal' },
    'New Jersey': { status: 'Fully Legal', possession: 'Up to 6 oz', recreational: 'Legal 21+' },
    'New Mexico': { status: 'Fully Legal', possession: 'Up to 2 oz', recreational: 'Legal 21+' },
    'New York': { status: 'Fully Legal', possession: 'Up to 3 oz', recreational: 'Legal 21+' },
    'North Carolina': { status: 'CBD Only', possession: 'CBD only', recreational: 'Illegal' },
    'North Dakota': { status: 'Medical Only', possession: 'Medical patients only', recreational: 'Illegal' },
    'Ohio': { status: 'Medical Only', possession: 'Medical patients only', recreational: 'Illegal' },
    'Oklahoma': { status: 'Medical Only', possession: 'Medical patients only', recreational: 'Illegal' },
    'Oregon': { status: 'Fully Legal', possession: 'Up to 1 oz', recreational: 'Legal 21+' },
    'Pennsylvania': { status: 'Medical Only', possession: 'Medical patients only', recreational: 'Illegal' },
    'Rhode Island': { status: 'Fully Legal', possession: 'Up to 1 oz', recreational: 'Legal 21+' },
    'South Carolina': { status: 'CBD Only', possession: 'CBD only', recreational: 'Illegal' },
    'South Dakota': { status: 'Medical Only', possession: 'Medical patients only', recreational: 'Illegal' },
    'Tennessee': { status: 'CBD Only', possession: 'CBD only', recreational: 'Illegal' },
    'Texas': { status: 'Medical Only', possession: 'Low-THC only', recreational: 'Illegal' },
    'Utah': { status: 'Medical Only', possession: 'Medical patients only', recreational: 'Illegal' },
    'Vermont': { status: 'Fully Legal', possession: 'Up to 1 oz', recreational: 'Legal 21+' },
    'Virginia': { status: 'Fully Legal', possession: 'Up to 1 oz', recreational: 'Legal 21+' },
    'Washington': { status: 'Fully Legal', possession: 'Up to 1 oz', recreational: 'Legal 21+' },
    'West Virginia': { status: 'Medical Only', possession: 'Medical patients only', recreational: 'Illegal' },
    'Wisconsin': { status: 'CBD Only', possession: 'CBD only', recreational: 'Illegal' },
    'Wyoming': { status: 'CBD Only', possession: 'CBD only', recreational: 'Illegal' },
    'Washington DC': { status: 'Fully Legal', possession: 'Up to 2 oz', recreational: 'Legal 21+' }
  };

  // Recording consent laws by state
  const recordingLaws = {
    'One-Party Consent': [
      'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'Colorado', 'Georgia', 'Hawaii', 'Idaho', 
      'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Michigan', 'Minnesota', 
      'Mississippi', 'Missouri', 'Nebraska', 'New Jersey', 'New Mexico', 'New York', 
      'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Rhode Island', 
      'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 
      'Virginia', 'West Virginia', 'Wisconsin', 'Wyoming', 'Washington DC'
    ],
    'Two-Party Consent': [
      'California', 'Connecticut', 'Delaware', 'Florida', 'Illinois', 'Maryland', 
      'Massachusetts', 'Montana', 'Nevada', 'New Hampshire', 'Pennsylvania', 'Washington'
    ]
  };

  const categories = [
    { id: 'rights', name: 'Know Your Rights', icon: Shield },
    { id: 'laws', name: 'State Laws', icon: Scale },
    { id: 'procedures', name: 'Legal Procedures', icon: BookOpen },
    { id: 'resources', name: 'Legal Resources', icon: ExternalLink }
  ];

  const constitutionalRights = [
    {
      title: 'Fourth Amendment - Search and Seizure',
      description: 'Protection against unreasonable searches and seizures',
      details: [
        'Police generally need a warrant to search your home',
        'You can refuse consent to searches of your person, car, or belongings',
        'Police can pat you down for weapons if they have reasonable suspicion',
        'Evidence obtained illegally may be excluded from court'
      ],
      source: 'U.S. Constitution, Fourth Amendment'
    },
    {
      title: 'Fifth Amendment - Self-Incrimination',
      description: 'Right to remain silent and avoid self-incrimination',
      details: [
        'You have the right to remain silent during police questioning',
        'You cannot be forced to testify against yourself',
        'Miranda rights must be read during custodial interrogation',
        'Silence cannot be used as evidence of guilt'
      ],
      source: 'U.S. Constitution, Fifth Amendment'
    },
    {
      title: 'First Amendment - Free Speech',
      description: 'Freedom of speech, press, assembly, and petition',
      details: [
        'Right to record police officers in public spaces',
        'Right to peaceful protest and assembly',
        'Protection for political speech and expression',
        'Right to criticize government and public officials'
      ],
      source: 'U.S. Constitution, First Amendment'
    },
    {
      title: 'Sixth Amendment - Right to Counsel',
      description: 'Right to legal representation in criminal proceedings',
      details: [
        'Right to an attorney during criminal proceedings',
        'Right to have an attorney present during questioning',
        'Right to appointed counsel if you cannot afford one',
        'Right to effective assistance of counsel'
      ],
      source: 'U.S. Constitution, Sixth Amendment'
    }
  ];

  const legalProcedures = [
    {
      title: 'Filing a Civil Rights Complaint',
      steps: [
        'Document the incident with photos, videos, and witness information',
        'File a complaint with the police department\'s Internal Affairs division',
        'Contact your local ACLU chapter or civil rights organization',
        'File a complaint with the FBI Civil Rights Division if federal laws were violated',
        'Consider filing a Section 1983 lawsuit in federal court',
        'Consult with a civil rights attorney for legal advice'
      ],
      timeLimit: 'Varies by jurisdiction - typically 1-3 years for civil claims',
      contact: 'FBI Civil Rights Division: 1-800-896-7743'
    },
    {
      title: 'What to Do During a Police Stop',
      steps: [
        'Stay calm and keep your hands visible',
        'Provide identification when lawfully requested',
        'Clearly state "I am exercising my right to remain silent"',
        'Do not consent to searches - say "I do not consent to any searches"',
        'Ask "Am I free to go?" if you\'re not sure if you\'re detained',
        'Remember details and document the encounter afterward'
      ],
      timeLimit: 'N/A - These are immediate actions',
      contact: 'Emergency: 911 | Non-emergency: Local police department'
    },
    {
      title: 'Recording Police Encounters',
      steps: [
        'Know your state\'s recording consent laws',
        'Keep a safe distance and don\'t interfere with police duties',
        'Clearly announce that you are recording',
        'Focus on the interaction, not just the officers',
        'Save and backup the recording immediately',
        'Share with civil rights organizations if violations occurred'
      ],
      timeLimit: 'Record as long as the encounter continues',
      contact: 'ACLU: aclu.org | Electronic Frontier Foundation: eff.org'
    }
  ];

  const legalResources = [
    {
      name: 'American Civil Liberties Union (ACLU)',
      description: 'National civil rights organization providing legal assistance',
      website: 'https://www.aclu.org',
      phone: '212-549-2500',
      services: ['Legal representation', 'Know Your Rights guides', 'Civil rights advocacy']
    },
    {
      name: 'FBI Civil Rights Division',
      description: 'Federal agency investigating civil rights violations',
      website: 'https://www.fbi.gov/investigate/civil-rights',
      phone: '1-800-896-7743',
      services: ['Federal civil rights investigations', 'Hate crime reporting', 'Police misconduct investigations']
    },
    {
      name: 'Legal Aid Organizations',
      description: 'Local organizations providing free legal assistance',
      website: 'https://www.lsc.gov/find-legal-aid',
      phone: 'Varies by location',
      services: ['Free legal representation', 'Legal advice', 'Court assistance']
    },
    {
      name: 'National Police Accountability Project',
      description: 'Network of attorneys dedicated to police accountability',
      website: 'https://www.nlg-npap.org',
      phone: '212-679-5100',
      services: ['Police misconduct litigation', 'Legal resources', 'Attorney referrals']
    }
  ];

  const filteredStates = Object.keys(marijuanaLaws).filter(state =>
    state.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'Fully Legal': return 'text-green-400 bg-green-900/30';
      case 'Medical Only': return 'text-yellow-400 bg-yellow-900/30';
      case 'CBD Only': return 'text-orange-400 bg-orange-900/30';
      case 'Fully Illegal': return 'text-red-400 bg-red-900/30';
      default: return 'text-gray-400 bg-gray-900/30';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <BookOpen className="w-8 h-8 text-blue-400" />
        <div>
          <h2 className="text-2xl font-bold text-white">Resources & Laws</h2>
          <p className="text-blue-200 text-sm">Comprehensive civil rights information and legal resources</p>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg border transition-colors flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'bg-blue-600/30 border-blue-500/50 text-white'
                  : 'bg-gray-800/50 border-gray-600/30 text-gray-300 hover:bg-gray-700/50 hover:text-white'
              }`}
            >
              <IconComponent className="w-4 h-4" />
              {category.name}
            </button>
          );
        })}
      </div>

      {/* Know Your Rights */}
      {activeCategory === 'rights' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {constitutionalRights.map((right, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-gray-600/30">
                <h3 className="text-lg font-semibold text-white mb-2">{right.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{right.description}</p>
                <ul className="space-y-2 mb-4">
                  {right.details.map((detail, idx) => (
                    <li key={idx} className="text-blue-200 text-sm flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-400 italic">Source: {right.source}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* State Laws */}
      {activeCategory === 'laws' && (
        <div className="space-y-6">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search states..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* Marijuana Laws */}
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-600/30">
            <h3 className="text-lg font-semibold text-white mb-4">Marijuana Laws by State (2025)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
              {filteredStates.map(state => (
                <div key={state} className="bg-gray-700/50 p-4 rounded border border-gray-600/30">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-white">{state}</h4>
                    <span className={`text-xs px-2 py-1 rounded ${getStatusColor(marijuanaLaws[state].status)}`}>
                      {marijuanaLaws[state].status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-300 space-y-1">
                    <p><strong>Possession:</strong> {marijuanaLaws[state].possession}</p>
                    <p><strong>Recreational:</strong> {marijuanaLaws[state].recreational}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recording Laws */}
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-600/30">
            <h3 className="text-lg font-semibold text-white mb-4">Recording Consent Laws</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-green-400 mb-3">One-Party Consent States</h4>
                <p className="text-sm text-gray-300 mb-3">You can record conversations without notifying others</p>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-400">
                  {recordingLaws['One-Party Consent'].map(state => (
                    <div key={state}>{state}</div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium text-yellow-400 mb-3">Two-Party Consent States</h4>
                <p className="text-sm text-gray-300 mb-3">All parties must consent to recording</p>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-400">
                  {recordingLaws['Two-Party Consent'].map(state => (
                    <div key={state}>{state}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Legal Procedures */}
      {activeCategory === 'procedures' && (
        <div className="space-y-6">
          {legalProcedures.map((procedure, index) => (
            <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-gray-600/30">
              <h3 className="text-lg font-semibold text-white mb-4">{procedure.title}</h3>
              <div className="space-y-3">
                {procedure.steps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="bg-blue-600 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-gray-300 text-sm">{step}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-600/30">
                <p className="text-sm text-gray-400">
                  <strong>Time Limit:</strong> {procedure.timeLimit}
                </p>
                <p className="text-sm text-gray-400">
                  <strong>Contact:</strong> {procedure.contact}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Legal Resources */}
      {activeCategory === 'resources' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {legalResources.map((resource, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-gray-600/30">
                <h3 className="text-lg font-semibold text-white mb-2">{resource.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-400">
                    <strong>Website:</strong> 
                    <a href={resource.website} target="_blank" rel="noopener noreferrer" 
                       className="text-blue-400 hover:text-blue-300 ml-1">
                      {resource.website}
                    </a>
                  </p>
                  <p className="text-sm text-gray-400">
                    <strong>Phone:</strong> {resource.phone}
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-white text-sm mb-2">Services:</h4>
                  <ul className="space-y-1">
                    {resource.services.map((service, idx) => (
                      <li key={idx} className="text-blue-200 text-sm flex items-center gap-2">
                        <span className="text-blue-400">•</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedResourcesAndLaws;