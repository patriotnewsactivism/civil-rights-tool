import { useState } from 'react';
import { Radio, ExternalLink, MapPin } from 'lucide-react';
import { policeScannerFrequencies, getScannersByState } from '../data/policeScannerFrequencies';

const US_STATES = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
  'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
  'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
  'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
];

export default function PoliceScannerDirectory() {
  const [selectedState, setSelectedState] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredScanners = selectedState
    ? getScannersByState(selectedState)
    : searchTerm
    ? policeScannerFrequencies.filter(s => 
        s.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.agency.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8 text-center">
        <div className="flex items-center justify-center mb-4">
          <Radio className="w-12 h-12 text-blue-600 mr-3" />
          <h1 className="text-4xl font-bold text-gray-900">Police Scanner Directory</h1>
        </div>
        <p className="text-lg text-gray-600">
          Live police scanner frequencies and feeds across all 50 states
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Listen online at <a href="https://www.broadcastify.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Broadcastify.com</a> or use a scanner radio
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select State
            </label>
            <select
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              value={selectedState}
              onChange={(e) => {
                setSelectedState(e.target.value);
                setSearchTerm('');
              }}
            >
              <option value="">Select a state...</option>
              {US_STATES.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Or Search by City/Agency
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              placeholder="e.g., Los Angeles, NYPD..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setSelectedState('');
              }}
            />
          </div>
        </div>
      </div>

      {filteredScanners.length > 0 ? (
        <div className="space-y-4">
          <div className="text-center mb-4">
            <span className="text-lg font-semibold text-gray-900">
              Found {filteredScanners.length} scanner{filteredScanners.length !== 1 ? 's' : ''}
            </span>
          </div>
          
          {filteredScanners.map((scanner) => (
            <div 
              key={scanner.id} 
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-blue-500"
            >
              <div className="flex flex-wrap items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="text-xl font-bold text-gray-900">{scanner.agency}</h3>
                  </div>
                  <p className="text-gray-600 mb-2">{scanner.city}, {scanner.state}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                    <div className="bg-blue-50 p-3 rounded">
                      <p className="text-xs font-medium text-gray-600">Frequency</p>
                      <p className="text-lg font-bold text-blue-900">{scanner.frequency}</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded">
                      <p className="text-xs font-medium text-gray-600">Type</p>
                      <p className="text-lg font-bold text-green-900">{scanner.type}</p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded">
                      <p className="text-xs font-medium text-gray-600">Mode</p>
                      <p className="text-lg font-bold text-purple-900">{scanner.mode}</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-700">{scanner.description}</p>
                </div>
                
                {scanner.broadcastifyFeed && (
                  <div className="mt-4 md:mt-0 md:ml-4">
                    <a
                      href={scanner.broadcastifyFeed}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      <Radio className="w-4 h-4 mr-2" />
                      Listen Live
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-gray-50 rounded-lg p-12 text-center">
          <Radio className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 text-lg">
            {selectedState || searchTerm ? 'No scanners found for your search' : 'Select a state or search for a city to view scanner frequencies'}
          </p>
        </div>
      )}

      <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h3 className="font-bold text-yellow-900 mb-2">Important Information</h3>
        <ul className="text-sm text-yellow-800 space-y-1">
          <li>• Scanner frequencies are from public radio reference databases</li>
          <li>• Many jurisdictions have moved to encrypted digital systems</li>
          <li>• Always verify frequencies are current before relying on them</li>
          <li>• Listening to scanners for journalistic purposes is legal in most states</li>
          <li>• Using scanner information to commit crimes is illegal</li>
        </ul>
      </div>
    </div>
  );
}
