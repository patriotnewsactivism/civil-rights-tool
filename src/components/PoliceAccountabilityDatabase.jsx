import React, { useState, useEffect } from 'react';
import { Search, Filter, Download, AlertTriangle, Shield, FileText, Clock, MapPin, User, Badge } from 'lucide-react';

const PoliceAccountabilityDatabase = () => {
  const [officers, setOfficers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterState, setFilterState] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('');
  const [selectedOfficer, setSelectedOfficer] = useState(null);
  const [complaints, setComplaints] = useState([]);
  const [showComplaintForm, setShowComplaintForm] = useState(false);

  // Sample officer data with misconduct records
  const sampleOfficers = [
    {
      id: 1,
      name: "Officer John Smith",
      badgeNumber: "1234",
      department: "NYPD",
      state: "New York",
      city: "New York City",
      rank: "Patrol Officer",
      complaintsCount: 3,
      settlements: 45000,
      status: "Active",
      lastIncident: "2024-08-15",
      photo: "https://via.placeholder.com/150",
      misconductTypes: ["Excessive Force", "False Arrest", "Racial Profiling"],
      certifications: ["Firearms", "CPR", "De-escalation"],
      disciplinaryActions: ["Written Warning", "Suspension (5 days)"]
    },
    {
      id: 2,
      name: "Sergeant Maria Garcia",
      badgeNumber: "5678",
      department: "LAPD",
      state: "California",
      city: "Los Angeles",
      rank: "Sergeant",
      complaintsCount: 1,
      settlements: 0,
      status: "Active",
      lastIncident: "2024-06-20",
      photo: "https://via.placeholder.com/150",
      misconductTypes: ["Verbal Abuse"],
      certifications: ["Supervisor", "Crisis Intervention", "K-9 Handler"],
      disciplinaryActions: ["Training Required"]
    },
    {
      id: 3,
      name: "Officer Michael Johnson",
      badgeNumber: "9012",
      department: "Chicago PD",
      state: "Illinois",
      city: "Chicago",
      rank: "Patrol Officer",
      complaintsCount: 7,
      settlements: 125000,
      status: "Under Investigation",
      lastIncident: "2024-09-10",
      photo: "https://via.placeholder.com/150",
      misconductTypes: ["Excessive Force", "Sexual Misconduct", "Evidence Tampering"],
      certifications: ["Firearms", "Field Training Officer"],
      disciplinaryActions: ["Multiple Suspensions", "Demotion Considered"]
    }
  ];

  const sampleComplaints = [
    {
      id: 1,
      officerId: 1,
      complainant: "Anonymous",
      dateFiled: "2024-08-15",
      incidentDate: "2024-08-10",
      description: "Excessive force during traffic stop, resulting in injuries requiring medical attention",
      status: "Under Review",
      location: "Bronx, NY",
      witnesses: 2,
      evidence: ["Body Cam Footage", "Medical Records", "Witness Statements"]
    },
    {
      id: 2,
      officerId: 3,
      complainant: "Jane Doe",
      dateFiled: "2024-09-10",
      incidentDate: "2024-09-08",
      description: "Unlawful search and seizure without warrant or probable cause",
      status: "Substantiated",
      location: "South Side, Chicago",
      witnesses: 0,
      evidence: ["Security Camera Footage"]
    }
  ];

  useEffect(() => {
    setOfficers(sampleOfficers);
    setComplaints(sampleComplaints);
  }, []);

  const filteredOfficers = officers.filter(officer => {
    const matchesSearch = officer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         officer.badgeNumber.includes(searchTerm) ||
                         officer.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesState = !filterState || officer.state === filterState;
    const matchesDepartment = !filterDepartment || officer.department === filterDepartment;
    
    return matchesSearch && matchesState && matchesDepartment;
  });

  const getStatusColor = (status) => {
    switch(status) {
      case 'Active': return 'text-green-600 bg-green-100';
      case 'Under Investigation': return 'text-yellow-600 bg-yellow-100';
      case 'Suspended': return 'text-red-600 bg-red-100';
      case 'Terminated': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getComplaintStatusColor = (status) => {
    switch(status) {
      case 'Substantiated': return 'text-red-600 bg-red-100';
      case 'Unsubstantiated': return 'text-gray-600 bg-gray-100';
      case 'Under Review': return 'text-yellow-600 bg-yellow-100';
      case 'Resolved': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const exportData = () => {
    const data = {
      officers: filteredOfficers,
      complaints: complaints,
      exportDate: new Date().toISOString(),
      totalSettlements: filteredOfficers.reduce((sum, officer) => sum + officer.settlements, 0),
      totalComplaints: filteredOfficers.reduce((sum, officer) => sum + officer.complaintsCount, 0)
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `police-accountability-data-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleComplaintSubmit = (complaintData) => {
    const newComplaint = {
      id: complaints.length + 1,
      ...complaintData,
      dateFiled: new Date().toISOString().split('T')[0],
      status: 'Under Review'
    };
    setComplaints([...complaints, newComplaint]);
    setShowComplaintForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-blue-600" />
              <h1 className="text-3xl font-bold text-gray-900">Police Accountability Database</h1>
            </div>
            <button
              onClick={exportData}
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              <Download className="h-4 w-4" />
              <span>Export Data</span>
            </button>
          </div>
          <p className="text-gray-600 mt-2">
            Track officer misconduct, complaints, and settlements across jurisdictions
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Officers</p>
                <p className="text-2xl font-bold text-gray-900">{officers.length}</p>
              </div>
              <User className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Complaints</p>
                <p className="text-2xl font-bold text-gray-900">
                  {officers.reduce((sum, officer) => sum + officer.complaintsCount, 0)}
                </p>
              </div>
              <AlertTriangle className="h-8 w-8 text-yellow-600" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Settlements</p>
                <p className="text-2xl font-bold text-gray-900">
                  ${officers.reduce((sum, officer) => sum + officer.settlements, 0).toLocaleString()}
                </p>
              </div>
              <FileText className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Under Investigation</p>
                <p className="text-2xl font-bold text-gray-900">
                  {officers.filter(officer => officer.status === 'Under Investigation').length}
                </p>
              </div>
              <Clock className="h-8 w-8 text-red-600" />
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Search className="inline h-4 w-4 mr-1" />
                Search
              </label>
              <input
                type="text"
                placeholder="Name, Badge #, Department"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                State
              </label>
              <select
                value={filterState}
                onChange={(e) => setFilterState(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All States</option>
                <option value="New York">New York</option>
                <option value="California">California</option>
                <option value="Illinois">Illinois</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Department
              </label>
              <select
                value={filterDepartment}
                onChange={(e) => setFilterDepartment(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Departments</option>
                <option value="NYPD">NYPD</option>
                <option value="LAPD">LAPD</option>
                <option value="Chicago PD">Chicago PD</option>
              </select>
            </div>
            <div className="flex items-end">
              <button
                onClick={() => setShowComplaintForm(true)}
                className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
              >
                File Complaint
              </button>
            </div>
          </div>
        </div>

        {/* Officers List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredOfficers.map((officer) => (
            <div key={officer.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={officer.photo}
                    alt={officer.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{officer.name}</h3>
                    <p className="text-sm text-gray-600">{officer.rank}</p>
                    <p className="text-sm text-gray-600">Badge #{officer.badgeNumber}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(officer.status)}`}>
                  {officer.status}
                </span>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  {officer.department}, {officer.city}, {officer.state}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  {officer.complaintsCount} complaints filed
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <FileText className="h-4 w-4 mr-2" />
                  ${officer.settlements.toLocaleString()} in settlements
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  Last incident: {officer.lastIncident}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Misconduct Types:</h4>
                <div className="flex flex-wrap gap-2">
                  {officer.misconductTypes.map((type, index) => (
                    <span key={index} className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-md">
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={() => setSelectedOfficer(officer)}
                  className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm"
                >
                  View Details
                </button>
                <button
                  onClick={() => setShowComplaintForm(true)}
                  className="flex-1 bg-gray-600 text-white px-3 py-2 rounded-md hover:bg-gray-700 transition-colors text-sm"
                >
                  File Complaint
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredOfficers.length === 0 && (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No officers found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters</p>
          </div>
        )}

        {/* Complaint Form Modal */}
        {showComplaintForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">File a Complaint</h3>
              <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                handleComplaintSubmit({
                  officerName: formData.get('officerName'),
                  incidentDate: formData.get('incidentDate'),
                  description: formData.get('description'),
                  location: formData.get('location'),
                  witnesses: parseInt(formData.get('witnesses')) || 0
                });
              }}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Officer Name
                    </label>
                    <input
                      type="text"
                      name="officerName"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Incident Date
                    </label>
                    <input
                      type="date"
                      name="incidentDate"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      required
                      placeholder="City, State"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Number of Witnesses
                    </label>
                    <input
                      type="number"
                      name="witnesses"
                      min="0"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Description of Incident
                    </label>
                    <textarea
                      name="description"
                      required
                      rows="4"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Please describe what happened..."
                    />
                  </div>
                </div>
                <div className="flex space-x-3 mt-6">
                  <button
                    type="submit"
                    className="flex-1 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                  >
                    Submit Complaint
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowComplaintForm(false)}
                    className="flex-1 bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PoliceAccountabilityDatabase;