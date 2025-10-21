import { useState } from 'react';
import { AlertCircle, CheckCircle, MapPin } from 'lucide-react';

interface ViolationFormData {
  title: string;
  description: string;
  category: string;
  incident_at: string;
  latitude: number | '';
  longitude: number | '';
  address: string;
  city: string;
  state: string;
  zip_code: string;
  severity: number;
}

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

export default function ReportViolationForm() {
  const [formData, setFormData] = useState<ViolationFormData>({
    title: '',
    description: '',
    category: '',
    incident_at: '',
    latitude: '',
    longitude: '',
    address: '',
    city: '',
    state: '',
    zip_code: '',
    severity: 3
  });

  const [status, setStatus] = useState<{type: 'success' | 'error' | null, message: string}>({
    type: null,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getCurrentLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData(prev => ({
            ...prev,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }));
          setStatus({ type: 'success', message: 'Location detected successfully!' });
        },
        (error) => {
          setStatus({ type: 'error', message: 'Unable to detect location. Please enter manually.' });
        }
      );
    } else {
      setStatus({ type: 'error', message: 'Geolocation is not supported by your browser.' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/violations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          latitude: Number(formData.latitude),
          longitude: Number(formData.longitude)
        })
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ 
          type: 'success', 
          message: 'Your violation report has been submitted and will appear on the map!' 
        });
        // Reset form
        setFormData({
          title: '',
          description: '',
          category: '',
          incident_at: '',
          latitude: '',
          longitude: '',
          address: '',
          city: '',
          state: '',
          zip_code: '',
          severity: 3
        });
      } else {
        setStatus({ type: 'error', message: data.error || 'Failed to submit report' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Network error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Report Civil Rights Violation</h2>
      <p className="text-gray-600 mb-6">
        Submit a report and it will appear on the public map in real-time for everyone to see.
      </p>

      {status.type && (
        <div className={`mb-6 p-4 rounded-lg flex items-start ${
          status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
        }`}>
          {status.type === 'success' ? (
            <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
          )}
          <span>{status.message}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={formData.title}
            onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
            placeholder="Brief description of the incident"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category <span className="text-red-500">*</span>
          </label>
          <select
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={formData.category}
            onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
          >
            <option value="">Select a category</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            required
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={formData.description}
            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
            placeholder="Provide details about what happened..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date & Time of Incident <span className="text-red-500">*</span>
          </label>
          <input
            type="datetime-local"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={formData.incident_at}
            onChange={(e) => setFormData(prev => ({ ...prev, incident_at: e.target.value }))}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location <span className="text-red-500">*</span>
          </label>
          <button
            type="button"
            onClick={getCurrentLocation}
            className="mb-3 flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <MapPin className="w-4 h-4 mr-2" />
            Use My Current Location
          </button>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                type="number"
                step="any"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.latitude}
                onChange={(e) => setFormData(prev => ({ ...prev, latitude: e.target.value ? parseFloat(e.target.value) : '' }))}
                placeholder="Latitude"
              />
            </div>
            <div>
              <input
                type="number"
                step="any"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.longitude}
                onChange={(e) => setFormData(prev => ({ ...prev, longitude: e.target.value ? parseFloat(e.target.value) : '' }))}
                placeholder="Longitude"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.city}
              onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
              placeholder="City name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.state}
              onChange={(e) => setFormData(prev => ({ ...prev, state: e.target.value }))}
            >
              <option value="">Select state</option>
              {US_STATES.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={formData.address}
            onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
            placeholder="Street address (optional)"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Severity (1-5)</label>
          <input
            type="range"
            min="1"
            max="5"
            className="w-full"
            value={formData.severity}
            onChange={(e) => setFormData(prev => ({ ...prev, severity: parseInt(e.target.value) }))}
          />
          <div className="flex justify-between text-xs text-gray-600">
            <span>Minor</span>
            <span className="font-bold text-lg">{formData.severity}</span>
            <span>Severe</span>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Report'}
        </button>
      </form>
    </div>
  );
}
