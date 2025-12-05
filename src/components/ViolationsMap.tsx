import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { supabase } from '../lib/supabase';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in React Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface Violation {
  id: string;
  title: string;
  description: string;
  category: string;
  incident_at: string;
  latitude: number;
  longitude: number;
  city?: string;
  state?: string;
  severity: number;
  status: string;
}

export default function ViolationsMap() {
  const [violations, setViolations] = useState<Violation[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({ category: 'all', state: 'all' });

  // Fetch violations
  const fetchViolations = async () => {
    try {
      const response = await fetch('/api/violations');
      const data = await response.json();
      if (data.success) {
        setViolations(data.violations);
      }
    } catch (error) {
      console.error('Error fetching violations:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchViolations();

    // Set up real-time subscription for new violations
    const channel = supabase
      .channel('violations-channel')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'violations',
          filter: 'status=eq.approved'
        },
        (payload: any) => {
          console.log('New violation reported!', payload.new);
          setViolations(prev => [payload.new as Violation, ...prev]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // Filter violations
  const filteredViolations = violations.filter(v => {
    if (filter.category !== 'all' && v.category !== filter.category) return false;
    if (filter.state !== 'all' && v.state !== filter.state) return false;
    return true;
  });

  // Get severity color
  const getSeverityColor = (severity: number) => {
    if (severity >= 4) return 'text-red-600';
    if (severity >= 3) return 'text-orange-500';
    return 'text-yellow-500';
  };

  const categories = [
    'Police Misconduct',
    'Discrimination',
    'Voting Rights',
    'First Amendment',
    'Fourth Amendment',
    'Housing',
    'Employment',
    'Education',
    'Healthcare',
    'Other'
  ];

  const US_STATES = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
    'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
    'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading civil rights violations map...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="mb-4 flex flex-wrap gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={filter.category}
            onChange={(e) => setFilter(prev => ({ ...prev, category: e.target.value }))}
          >
            <option value="all">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={filter.state}
            onChange={(e) => setFilter(prev => ({ ...prev, state: e.target.value }))}
          >
            <option value="all">All States</option>
            {US_STATES.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>
        <div className="flex items-end">
          <div className="px-4 py-2 bg-blue-50 rounded-lg">
            <span className="text-sm font-medium text-blue-900">
              Showing {filteredViolations.length} violation{filteredViolations.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden border-4 border-blue-500" style={{ height: '700px' }}>
        <MapContainer
          center={[39.8283, -98.5795]} // Center of US
          zoom={4}
          style={{ height: '100%', width: '100%', minHeight: '700px' }}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            maxZoom={19}
            minZoom={3}
          />
          {filteredViolations.map((violation) => (
            <Marker
              key={violation.id}
              position={[violation.latitude, violation.longitude]}
            >
              <Popup maxWidth={300}>
                <div className="p-2">
                  <h3 className="font-bold text-lg mb-2">{violation.title}</h3>
                  <div className="mb-2">
                    <span className="inline-block px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded">
                      {violation.category}
                    </span>
                    <span className={`inline-block px-2 py-1 text-xs font-semibold ml-2 ${getSeverityColor(violation.severity)}`}>
                      Severity: {violation.severity}/5
                    </span>
                    <span className={`inline-block px-2 py-1 text-xs font-semibold ml-2 rounded ${
                      violation.status === 'approved' ? 'bg-green-100 text-green-800' :
                      violation.status === 'rejected' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {violation.status.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">{violation.description}</p>
                  <div className="text-xs text-gray-500">
                    <p>{violation.city && violation.state ? `${violation.city}, ${violation.state}` : 'Location not specified'}</p>
                    <p>{new Date(violation.incident_at).toLocaleString()}</p>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>Map Features:</strong> This interactive map displays ALL civil rights violation reports in real-time for transparency. 
          Click on markers to view details. Drag to pan, scroll to zoom. All reports are publicly visible until reviewed by administrators.
        </p>
      </div>

      {filteredViolations.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No violations reported yet for the selected filters.
        </div>
      )}
    </div>
  );
}
