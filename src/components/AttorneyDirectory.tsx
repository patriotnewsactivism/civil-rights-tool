import { useState } from 'react';
import { Scale, Phone, ExternalLink, Star, Award, CheckCircle } from 'lucide-react';
import { civilRightsAttorneys, getAttorneysByState, getAllSpecialties } from '../data/civilRightsAttorneys';

const US_STATES = [
  { code: 'AL', name: 'Alabama' }, { code: 'AK', name: 'Alaska' }, { code: 'AZ', name: 'Arizona' },
  { code: 'AR', name: 'Arkansas' }, { code: 'CA', name: 'California' }, { code: 'CO', name: 'Colorado' },
  { code: 'CT', name: 'Connecticut' }, { code: 'DE', name: 'Delaware' }, { code: 'FL', name: 'Florida' },
  { code: 'GA', name: 'Georgia' }, { code: 'HI', name: 'Hawaii' }, { code: 'ID', name: 'Idaho' },
  { code: 'IL', name: 'Illinois' }, { code: 'IN', name: 'Indiana' }, { code: 'IA', name: 'Iowa' },
  { code: 'KS', name: 'Kansas' }, { code: 'KY', name: 'Kentucky' }, { code: 'LA', name: 'Louisiana' },
  { code: 'ME', name: 'Maine' }, { code: 'MD', name: 'Maryland' }, { code: 'MA', name: 'Massachusetts' },
  { code: 'MI', name: 'Michigan' }, { code: 'MN', name: 'Minnesota' }, { code: 'MS', name: 'Mississippi' },
  { code: 'MO', name: 'Missouri' }, { code: 'MT', name: 'Montana' }, { code: 'NE', name: 'Nebraska' },
  { code: 'NV', name: 'Nevada' }, { code: 'NH', name: 'New Hampshire' }, { code: 'NJ', name: 'New Jersey' },
  { code: 'NM', name: 'New Mexico' }, { code: 'NY', name: 'New York' }, { code: 'NC', name: 'North Carolina' },
  { code: 'ND', name: 'North Dakota' }, { code: 'OH', name: 'Ohio' }, { code: 'OK', name: 'Oklahoma' },
  { code: 'OR', name: 'Oregon' }, { code: 'PA', name: 'Pennsylvania' }, { code: 'RI', name: 'Rhode Island' },
  { code: 'SC', name: 'South Carolina' }, { code: 'SD', name: 'South Dakota' }, { code: 'TN', name: 'Tennessee' },
  { code: 'TX', name: 'Texas' }, { code: 'UT', name: 'Utah' }, { code: 'VT', name: 'Vermont' },
  { code: 'VA', name: 'Virginia' }, { code: 'WA', name: 'Washington' }, { code: 'WV', name: 'West Virginia' },
  { code: 'WI', name: 'Wisconsin' }, { code: 'WY', name: 'Wyoming' }
];

export default function AttorneyDirectory() {
  const [selectedState, setSelectedState] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');

  const specialties = getAllSpecialties();

  // Filter attorneys based on state and specialty
  const filteredAttorneys = civilRightsAttorneys.filter(attorney => {
    if (selectedState && attorney.state !== selectedState) return false;
    if (selectedSpecialty !== 'all' && !attorney.specialties.includes(selectedSpecialty)) return false;
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Licensed Civil Rights Attorneys</h1>
        <p className="text-lg text-gray-600">
          Find experienced, verified civil rights attorneys in your state
        </p>
      </div>

      {/* Filter Controls */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Your State <span className="text-red-500">*</span>
            </label>
            <select
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
            >
              <option value="">All States</option>
              {US_STATES.map(state => (
                <option key={state.code} value={state.code}>
                  {state.name} ({state.code})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Filter by Specialty
            </label>
            <select
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
            >
              <option value="all">All Specialties</option>
              {specialties.map(specialty => (
                <option key={specialty} value={specialty}>{specialty}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-700 font-medium">
          Found <span className="text-blue-600 font-bold">{filteredAttorneys.length}</span> attorney
          {filteredAttorneys.length !== 1 ? 's' : ''}
          {selectedState && ` in ${US_STATES.find(s => s.code === selectedState)?.name || selectedState}`}
        </p>
      </div>

      {/* Attorney Cards */}
      <div className="space-y-6">
        {filteredAttorneys.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <Scale className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No attorneys found</h3>
            <p className="text-gray-600">
              Try selecting a different state or specialty, or <span className="text-blue-600 cursor-pointer" onClick={() => { setSelectedState(''); setSelectedSpecialty('all'); }}>clear filters</span>
            </p>
          </div>
        ) : (
          filteredAttorneys.map((attorney) => (
            <div key={attorney.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 border-l-4 border-blue-600">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="flex-grow">
                  <div className="flex items-start mb-3">
                    <Scale className="w-8 h-8 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{attorney.name}</h3>
                      <p className="text-lg text-gray-600">{attorney.firm}</p>
                    </div>
                    {attorney.verified && (
                      <CheckCircle className="w-6 h-6 text-green-600 ml-2 flex-shrink-0" aria-label="Verified Attorney" />
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Bar Number</p>
                      <p className="font-semibold text-gray-900">{attorney.barNumber}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Experience</p>
                      <p className="font-semibold text-gray-900">{attorney.yearsExperience} years</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Cases Won</p>
                      <p className="font-semibold text-gray-900 flex items-center">
                        <Award className="w-4 h-4 text-yellow-500 mr-1" />
                        {attorney.casesWon}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Rating</p>
                      <p className="font-semibold text-gray-900 flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-1 fill-current" />
                        {attorney.rating.toFixed(1)} / 5.0
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">Specialties</p>
                    <div className="flex flex-wrap gap-2">
                      {attorney.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href={`tel:${attorney.phone.replace(/[^0-9]/g, '')}`}
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      {attorney.phone}
                    </a>
                    <a
                      href={attorney.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Disclaimer */}
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-sm text-yellow-800">
          <strong>Disclaimer:</strong> This directory is provided as a resource only. We recommend verifying attorney credentials 
          with your state bar association. Inclusion in this directory does not constitute a legal endorsement or guarantee of services.
        </p>
      </div>
    </div>
  );
}
