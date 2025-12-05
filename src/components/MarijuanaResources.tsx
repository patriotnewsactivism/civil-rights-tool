import { useState } from 'react';
import { Leaf, FileText, ExternalLink, Check, X, AlertCircle } from 'lucide-react';
import { comprehensiveMarijuanaLaws } from '../data/comprehensiveMarijuanaLaws.js';

const US_STATES = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
  'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
  'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
  'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY', 'DC'
];

const stateNames: Record<string, string> = {
  'AL': 'Alabama', 'AK': 'Alaska', 'AZ': 'Arizona', 'AR': 'Arkansas', 'CA': 'California',
  'CO': 'Colorado', 'CT': 'Connecticut', 'DE': 'Delaware', 'FL': 'Florida', 'GA': 'Georgia',
  'HI': 'Hawaii', 'ID': 'Idaho', 'IL': 'Illinois', 'IN': 'Indiana', 'IA': 'Iowa',
  'KS': 'Kansas', 'KY': 'Kentucky', 'LA': 'Louisiana', 'ME': 'Maine', 'MD': 'Maryland',
  'MA': 'Massachusetts', 'MI': 'Michigan', 'MN': 'Minnesota', 'MS': 'Mississippi', 'MO': 'Missouri',
  'MT': 'Montana', 'NE': 'Nebraska', 'NV': 'Nevada', 'NH': 'New Hampshire', 'NJ': 'New Jersey',
  'NM': 'New Mexico', 'NY': 'New York', 'NC': 'North Carolina', 'ND': 'North Dakota', 'OH': 'Ohio',
  'OK': 'Oklahoma', 'OR': 'Oregon', 'PA': 'Pennsylvania', 'RI': 'Rhode Island', 'SC': 'South Carolina',
  'SD': 'South Dakota', 'TN': 'Tennessee', 'TX': 'Texas', 'UT': 'Utah', 'VT': 'Vermont',
  'VA': 'Virginia', 'WA': 'Washington', 'WV': 'West Virginia', 'WI': 'Wisconsin', 'WY': 'Wyoming', 'DC': 'Washington D.C.'
};

// Use comprehensive marijuana laws data from src/data
const marijuanaLaws: Record<string, any> = comprehensiveMarijuanaLaws as Record<string, any>;

export default function MarijuanaResources() {
  const [selectedState, setSelectedState] = useState('');

  const stateData = selectedState ? marijuanaLaws[selectedState] : null;
  const stateName = selectedState ? stateNames[selectedState] : '';
  
  const isRecreational = stateData?.recreational === 'Legal';
  const isMedical = stateData?.medicalProgram === 'Active';
  const hasDispensaries = stateData?.dispensaries?.includes('dispensaries');

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
              {stateName} - Legal Status
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className={`p-4 rounded-lg ${isRecreational ? 'bg-green-50 border-2 border-green-500' : 'bg-red-50 border-2 border-red-300'}`}>
                {isRecreational ? (
                  <Check className="w-6 h-6 text-green-600 mb-2" />
                ) : (
                  <X className="w-6 h-6 text-red-600 mb-2" />
                )}
                <p className="font-semibold text-gray-900">Recreational</p>
                <p className="text-sm text-gray-600">{isRecreational ? 'Legal' : 'Not Legal'}</p>
              </div>

              <div className={`p-4 rounded-lg ${isMedical ? 'bg-green-50 border-2 border-green-500' : 'bg-red-50 border-2 border-red-300'}`}>
                {isMedical ? (
                  <Check className="w-6 h-6 text-green-600 mb-2" />
                ) : (
                  <X className="w-6 h-6 text-red-600 mb-2" />
                )}
                <p className="font-semibold text-gray-900">Medical</p>
                <p className="text-sm text-gray-600">{isMedical ? 'Legal' : 'Not Legal'}</p>
              </div>

              <div className={`p-4 rounded-lg ${hasDispensaries ? 'bg-green-50 border-2 border-green-500' : 'bg-gray-50 border-2 border-gray-300'}`}>
                {hasDispensaries ? (
                  <Check className="w-6 h-6 text-green-600 mb-2" />
                ) : (
                  <X className="w-6 h-6 text-gray-600 mb-2" />
                )}
                <p className="font-semibold text-gray-900">Dispensaries</p>
                <p className="text-sm text-gray-600">{hasDispensaries ? 'Available' : 'Not Available'}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm font-medium text-gray-700">Possession Limit</p>
                <p className="text-lg font-bold text-blue-900">{stateData.possession || 'N/A'}</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <p className="text-sm font-medium text-gray-700">Home Cultivation</p>
                <p className="text-lg font-bold text-purple-900">{stateData.cultivation || 'Prohibited'}</p>
              </div>
            </div>
          </div>

          {/* Free Card Program */}
          {stateData.freeCardInfo && (
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-500 rounded-lg shadow-lg p-6">
              <div className="flex items-start">
                <AlertCircle className="w-8 h-8 text-green-600 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-green-900 mb-2">Medical Card Information</h3>
                  <p className="text-green-800">{stateData.freeCardInfo}</p>
                </div>
              </div>
            </div>
          )}

          {/* Qualifying Conditions */}
          {stateData.qualifyingConditions && stateData.qualifyingConditions.length > 0 && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Qualifying Medical Conditions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {stateData.qualifyingConditions.map((condition: string, index: number) => (
                  <div key={index} className="flex items-center">
                    <Check className="w-4 h-4 text-green-600 mr-2" />
                    <span className="text-gray-700">{condition}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Additional Details */}
          {stateData.details && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Additional Information</h3>
              <p className="text-gray-700">{stateData.details}</p>
              {stateData.recentChanges && (
                <p className="text-sm text-blue-800 mt-2"><strong>Recent Changes:</strong> {stateData.recentChanges}</p>
              )}
            </div>
          )}

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
