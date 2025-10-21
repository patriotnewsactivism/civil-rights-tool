import { useState } from 'react';
import { Leaf, FileText, ExternalLink, Check, X, AlertCircle } from 'lucide-react';

const US_STATES = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
  'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
  'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
  'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
];

interface StateMarijuanaLaw {
  state: string;
  recreational: boolean;
  medical: boolean;
  decriminalized: boolean;
  possessionLimit: string;
  freeCardProgram: boolean;
  freeCardDetails?: string;
  resources: {
    name: string;
    description: string;
    link: string;
  }[];
}

// Sample marijuana law data - this should be expanded with complete state information
const marijuanaLaws: Record<string, StateMarijuanaLaw> = {
  CA: {
    state: 'California',
    recreational: true,
    medical: true,
    decriminalized: true,
    possessionLimit: '1 oz for adults 21+',
    freeCardProgram: true,
    freeCardDetails: 'Medi-Cal beneficiaries can get free medical marijuana ID cards',
    resources: [
      {
        name: 'California Department of Public Health - Medical Marijuana',
        description: 'Official state medical marijuana program information',
        link: 'https://www.cdph.ca.gov/Programs/CHSI/Pages/Medical-Marijuana-Program.aspx'
      },
      {
        name: 'Free/Reduced Fee Medical Card Program',
        description: 'Information on obtaining free or reduced-cost medical marijuana cards',
        link: 'https://www.cdph.ca.gov/Programs/CHSI/Pages/MMICP-County-Program-Listing.aspx'
      }
    ]
  },
  CO: {
    state: 'Colorado',
    recreational: true,
    medical: true,
    decriminalized: true,
    possessionLimit: '1 oz for adults 21+',
    freeCardProgram: false,
    resources: [
      {
        name: 'Colorado Department of Public Health - Medical Marijuana',
        description: 'Official medical marijuana registry information',
        link: 'https://cdphe.colorado.gov/medical-marijuana'
      }
    ]
  },
  FL: {
    state: 'Florida',
    recreational: false,
    medical: true,
    decriminalized: false,
    possessionLimit: 'Medical patients only',
    freeCardProgram: false,
    resources: [
      {
        name: 'Florida Department of Health - Office of Medical Marijuana Use',
        description: 'Official medical marijuana program information',
        link: 'https://knowthefactsmmj.com/'
      }
    ]
  },
  IL: {
    state: 'Illinois',
    recreational: true,
    medical: true,
    decriminalized: true,
    possessionLimit: '30g for adults 21+',
    freeCardProgram: false,
    resources: [
      {
        name: 'Illinois Department of Public Health - Medical Cannabis',
        description: 'Official medical cannabis program',
        link: 'https://dph.illinois.gov/topics-services/prevention-wellness/medical-cannabis.html'
      }
    ]
  },
  MA: {
    state: 'Massachusetts',
    recreational: true,
    medical: true,
    decriminalized: true,
    possessionLimit: '1 oz for adults 21+',
    freeCardProgram: false,
    resources: [
      {
        name: 'Massachusetts Cannabis Control Commission',
        description: 'Official cannabis regulation information',
        link: 'https://masscannabiscontrol.com/'
      }
    ]
  },
  NY: {
    state: 'New York',
    recreational: true,
    medical: true,
    decriminalized: true,
    possessionLimit: '3 oz for adults 21+',
    freeCardProgram: false,
    resources: [
      {
        name: 'New York State Office of Cannabis Management',
        description: 'Official cannabis regulation and medical program information',
        link: 'https://cannabis.ny.gov/'
      }
    ]
  },
  WA: {
    state: 'Washington',
    recreational: true,
    medical: true,
    decriminalized: true,
    possessionLimit: '1 oz for adults 21+',
    freeCardProgram: false,
    resources: [
      {
        name: 'Washington State Liquor and Cannabis Board',
        description: 'Official cannabis regulation information',
        link: 'https://lcb.wa.gov/mjlicense/marijuana-licensing'
      }
    ]
  },
  OR: {
    state: 'Oregon',
    recreational: true,
    medical: true,
    decriminalized: true,
    possessionLimit: '1 oz for adults 21+',
    freeCardProgram: false,
    resources: [
      {
        name: 'Oregon Health Authority - Medical Marijuana Program',
        description: 'Official medical marijuana program information',
        link: 'https://www.oregon.gov/oha/PH/DISEASESCONDITIONS/CHRONICDISEASE/MEDICALMARIJUANAPROGRAM/Pages/index.aspx'
      }
    ]
  }
};

export default function MarijuanaResources() {
  const [selectedState, setSelectedState] = useState('');

  const stateData = selectedState ? marijuanaLaws[selectedState] : null;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <div className="flex items-center justify-center mb-4">
          <Leaf className="w-12 h-12 text-green-600 mr-3" />
          <h1 className="text-4xl font-bold text-gray-900">Marijuana Law Resources</h1>
        </div>
        <p className="text-lg text-gray-600">
          State-specific marijuana laws, medical card information, and free resources
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Your State to View Laws & Resources
        </label>
        <select
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          <option value="">Select a state...</option>
          {US_STATES.map(state => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>
      </div>

      {stateData ? (
        <div className="space-y-6">
          {/* Legal Status */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FileText className="w-6 h-6 mr-2 text-green-600" />
              {stateData.state} - Legal Status
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className={`p-4 rounded-lg ${stateData.recreational ? 'bg-green-50 border-2 border-green-500' : 'bg-red-50 border-2 border-red-300'}`}>
                {stateData.recreational ? (
                  <Check className="w-6 h-6 text-green-600 mb-2" />
                ) : (
                  <X className="w-6 h-6 text-red-600 mb-2" />
                )}
                <p className="font-semibold text-gray-900">Recreational</p>
                <p className="text-sm text-gray-600">{stateData.recreational ? 'Legal' : 'Not Legal'}</p>
              </div>

              <div className={`p-4 rounded-lg ${stateData.medical ? 'bg-green-50 border-2 border-green-500' : 'bg-red-50 border-2 border-red-300'}`}>
                {stateData.medical ? (
                  <Check className="w-6 h-6 text-green-600 mb-2" />
                ) : (
                  <X className="w-6 h-6 text-red-600 mb-2" />
                )}
                <p className="font-semibold text-gray-900">Medical</p>
                <p className="text-sm text-gray-600">{stateData.medical ? 'Legal' : 'Not Legal'}</p>
              </div>

              <div className={`p-4 rounded-lg ${stateData.decriminalized ? 'bg-green-50 border-2 border-green-500' : 'bg-red-50 border-2 border-red-300'}`}>
                {stateData.decriminalized ? (
                  <Check className="w-6 h-6 text-green-600 mb-2" />
                ) : (
                  <X className="w-6 h-6 text-red-600 mb-2" />
                )}
                <p className="font-semibold text-gray-900">Decriminalized</p>
                <p className="text-sm text-gray-600">{stateData.decriminalized ? 'Yes' : 'No'}</p>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-sm font-medium text-gray-700">Possession Limit</p>
              <p className="text-lg font-bold text-blue-900">{stateData.possessionLimit}</p>
            </div>
          </div>

          {/* Free Card Program */}
          {stateData.freeCardProgram && (
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-500 rounded-lg shadow-lg p-6">
              <div className="flex items-start">
                <AlertCircle className="w-8 h-8 text-green-600 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-green-900 mb-2">Free Medical Card Program Available!</h3>
                  <p className="text-green-800">{stateData.freeCardDetails}</p>
                </div>
              </div>
            </div>
          )}

          {/* Resources */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Official Resources</h2>
            <div className="space-y-4">
              {stateData.resources.map((resource, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{resource.name}</h3>
                  <p className="text-gray-600 mb-3">{resource.description}</p>
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Visit Resource
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>Disclaimer:</strong> Laws are subject to change. Always verify current laws with official state sources. 
              This information is for educational purposes only and does not constitute legal advice.
            </p>
          </div>
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <Leaf className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">Select a state above to view marijuana laws and resources</p>
        </div>
      )}
    </div>
  );
}
