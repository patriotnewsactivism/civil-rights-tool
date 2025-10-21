import { useState, useEffect } from 'react';
import { CheckCircle, XCircle, Clock, RefreshCw, AlertTriangle, Lock } from 'lucide-react';

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
  created_at: string;
}

export default function AdminModerationPanel() {
  const [violations, setViolations] = useState<Violation[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('pending');
  const [moderating, setModerating] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    
    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password: adminPassword }),
      });

      if (response.ok) {
        const data = await response.json();
        setIsAuthenticated(true);
        sessionStorage.setItem('adminToken', data.sessionToken);
        setAdminPassword(''); // Clear password from memory
      } else if (response.status === 503) {
        const data = await response.json();
        setLoginError(data.message || 'Admin panel not configured. See server logs for setup instructions.');
      } else {
        setLoginError('Incorrect password. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setLoginError('Login failed. Please try again.');
    }
  };

  const fetchViolations = async () => {
    try {
      setLoading(true);
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
    // Check if already authenticated from session (validate token is 64 chars hex = secure session token)
    const savedToken = sessionStorage.getItem('adminToken');
    
    if (savedToken && savedToken.length === 64 && /^[0-9a-f]+$/.test(savedToken)) {
      setIsAuthenticated(true);
    } else if (savedToken) {
      // Clear old insecure token format
      sessionStorage.removeItem('adminToken');
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchViolations();
    }
  }, [isAuthenticated]);

  const moderateViolation = async (violationId: string, newStatus: 'approved' | 'rejected') => {
    setModerating(violationId);
    try {
      const adminToken = sessionStorage.getItem('adminToken') || '';
      const response = await fetch(`/api/violations/${violationId}/moderate`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'X-Admin-Token': adminToken,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        // Update local state
        setViolations(prev =>
          prev.map(v =>
            v.id === violationId ? { ...v, status: newStatus } : v
          )
        );
      } else {
        if (response.status === 401 || response.status === 403) {
          alert('Authentication failed. Please log in again.');
          setIsAuthenticated(false);
          sessionStorage.removeItem('adminToken');
        } else {
          alert('Failed to moderate violation. Please try again.');
        }
      }
    } catch (error) {
      console.error('Error moderating violation:', error);
      alert('Error moderating violation. Please try again.');
    } finally {
      setModerating(null);
    }
  };

  const filteredViolations = violations.filter(v => {
    if (filter === 'all') return true;
    return v.status === filter;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckCircle className="w-3 h-3 mr-1" />
            Approved
          </span>
        );
      case 'rejected':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            <XCircle className="w-3 h-3 mr-1" />
            Rejected
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            <Clock className="w-3 h-3 mr-1" />
            Pending Review
          </span>
        );
    }
  };

  const getSeverityBadge = (severity: number) => {
    const colors = {
      5: 'bg-red-600 text-white',
      4: 'bg-red-500 text-white',
      3: 'bg-orange-500 text-white',
      2: 'bg-yellow-500 text-white',
      1: 'bg-yellow-400 text-gray-900',
    };
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[severity as keyof typeof colors] || colors[1]}`}>
        <AlertTriangle className="w-3 h-3 mr-1" />
        Severity {severity}/5
      </span>
    );
  };

  const stats = {
    total: violations.length,
    pending: violations.filter(v => v.status === 'pending').length,
    approved: violations.filter(v => v.status === 'approved').length,
    rejected: violations.filter(v => v.status === 'rejected').length,
  };

  // Show login form if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="w-full max-w-md mx-auto mt-12">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="text-center mb-6">
            <Lock className="w-16 h-16 mx-auto text-purple-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900">Admin Access Required</h2>
            <p className="text-gray-600 mt-2">Enter your admin password to access the moderation panel</p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Admin Password
              </label>
              <input
                type="password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter admin password"
                required
              />
            </div>

            {loginError && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-600">{loginError}</p>
              </div>
            )}

            <button
              type="submit"
              className="w-full px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
            >
              Access Admin Panel
            </button>
          </form>

          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800 font-semibold mb-2">
              🔒 Setup Instructions
            </p>
            <p className="text-sm text-blue-700 mb-2">
              To configure admin access:
            </p>
            <ol className="text-sm text-blue-700 list-decimal list-inside space-y-1">
              <li>Copy <code className="bg-blue-100 px-1 rounded font-mono">.env.example</code> to <code className="bg-blue-100 px-1 rounded font-mono">.env</code></li>
              <li>Set <code className="bg-blue-100 px-1 rounded font-mono">ADMIN_PASSWORD=your_secure_password</code></li>
              <li>Restart the server</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading moderation panel...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-bold text-gray-900">Admin Moderation Panel</h2>
          <button
            onClick={fetchViolations}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </button>
        </div>
        
        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="text-2xl font-bold text-blue-900">{stats.total}</div>
            <div className="text-sm text-blue-600">Total Reports</div>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="text-2xl font-bold text-yellow-900">{stats.pending}</div>
            <div className="text-sm text-yellow-600">Pending Review</div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="text-2xl font-bold text-green-900">{stats.approved}</div>
            <div className="text-sm text-green-600">Approved</div>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="text-2xl font-bold text-red-900">{stats.rejected}</div>
            <div className="text-sm text-red-600">Rejected</div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6">
          {(['all', 'pending', 'approved', 'rejected'] as const).map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === status
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
              {status !== 'all' && ` (${stats[status]})`}
            </button>
          ))}
        </div>
      </div>

      {/* Violations List */}
      <div className="space-y-4">
        {filteredViolations.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-500">No {filter !== 'all' ? filter : ''} violations to display</p>
          </div>
        ) : (
          filteredViolations.map((violation) => (
            <div
              key={violation.id}
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{violation.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {getStatusBadge(violation.status)}
                    {getSeverityBadge(violation.severity)}
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {violation.category}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4">{violation.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                <div>
                  <span className="font-semibold">Location:</span>{' '}
                  {violation.city && violation.state
                    ? `${violation.city}, ${violation.state}`
                    : 'Not specified'}
                </div>
                <div>
                  <span className="font-semibold">Coordinates:</span> {violation.latitude.toFixed(4)}, {violation.longitude.toFixed(4)}
                </div>
                <div>
                  <span className="font-semibold">Incident Date:</span>{' '}
                  {new Date(violation.incident_at).toLocaleString()}
                </div>
                <div>
                  <span className="font-semibold">Reported:</span>{' '}
                  {new Date(violation.created_at).toLocaleString()}
                </div>
              </div>

              {/* Moderation Actions */}
              {violation.status === 'pending' && (
                <div className="flex gap-3 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => moderateViolation(violation.id, 'approved')}
                    disabled={moderating === violation.id}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {moderating === violation.id ? 'Processing...' : 'Approve'}
                  </button>
                  <button
                    onClick={() => moderateViolation(violation.id, 'rejected')}
                    disabled={moderating === violation.id}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <XCircle className="w-4 h-4 mr-2" />
                    {moderating === violation.id ? 'Processing...' : 'Reject'}
                  </button>
                </div>
              )}

              {violation.status !== 'pending' && (
                <div className="pt-4 border-t border-gray-200">
                  <button
                    onClick={() => moderateViolation(violation.id, 'pending')}
                    disabled={moderating === violation.id}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Clock className="w-4 h-4 mr-2" />
                    {moderating === violation.id ? 'Processing...' : 'Reset to Pending'}
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
