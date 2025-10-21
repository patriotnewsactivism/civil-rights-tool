import React, { useState, useEffect } from 'react';
import { Upload, Lock, FileText, Eye, AlertTriangle, Send, Download, Search, Shield, Clock, User, MessageSquare } from 'lucide-react';

const InvestigativeJournalismSuite = () => {
  const [activeTab, setActiveTab] = useState('leaks');
  const [leakFiles, setLeakFiles] = useState([]);
  const [storyDraft, setStoryDraft] = useState('');
  const [contacts, setContacts] = useState([]);
  const [investigations, setInvestigations] = useState([]);

  // Sample data
  const sampleContacts = [
    { id: 1, name: 'ACLU Legal Team', email: 'legal@aclu.org', type: 'Legal', priority: 'High' },
    { id: 2, name: 'NAACP Chapter', email: 'info@naacp.org', type: 'Civil Rights', priority: 'High' },
    { id: 3, name: 'Local Whistleblower', email: 'anonymous@protonmail.com', type: 'Source', priority: 'Critical' },
    { id: 4, name: 'Police Oversight Board', email: 'oversight@city.gov', type: 'Official', priority: 'Medium' }
  ];

  const sampleInvestigations = [
    {
      id: 1,
      title: 'Police Misconduct in 12th Precinct',
      status: 'Active',
      priority: 'High',
      created: '2024-09-15',
      lastUpdate: '2024-10-10',
      sources: 3,
      documents: 15,
      description: 'Investigating pattern of excessive force complaints against officers in 12th precinct'
    },
    {
      id: 2,
      title: 'Jail Conditions Investigation',
      status: 'Review',
      priority: 'Critical',
      created: '2024-08-20',
      lastUpdate: '2024-10-08',
      sources: 5,
      documents: 32,
      description: 'Documenting inhumane conditions and medical neglect in county jail'
    }
  ];

  useEffect(() => {
    setContacts(sampleContacts);
    setInvestigations(sampleInvestigations);
  }, []);

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const newFiles = files.map(file => ({
      id: Date.now() + Math.random(),
      name: file.name,
      size: file.size,
      type: file.type,
      uploadDate: new Date().toISOString().split('T')[0],
      status: 'Encrypted',
      description: ''
    }));
    setLeakFiles([...leakFiles, ...newFiles]);
  };

  const secureDeleteFile = (fileId) => {
    // In a real app, this would securely wipe the file
    setLeakFiles(leakFiles.filter(file => file.id !== fileId));
  };

  const generateSecureLink = (file) => {
    // Generate time-limited secure access link
    const expiry = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
    return `secure://${file.id}/${expiry}`;
  };

  const submitToLegalReview = () => {
    // Simulate legal review submission
    alert('Story submitted for legal review. You will receive feedback within 24-48 hours.');
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'Critical': return 'text-red-600 bg-red-100';
      case 'High': return 'text-orange-600 bg-orange-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Active': return 'text-green-600 bg-green-100';
      case 'Review': return 'text-yellow-600 bg-yellow-100';
      case 'Published': return 'text-blue-600 bg-blue-100';
      case 'Archived': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const tabs = [
    { id: 'leaks', label: 'Secure Leaks', icon: Upload },
    { id: 'story', label: 'Story Builder', icon: FileText },
    { id: 'contacts', label: 'Source Network', icon: User },
    { id: 'investigations', label: 'Active Investigations', icon: Search }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Eye className="h-8 w-8 text-blue-600" />
              <h1 className="text-3xl font-bold text-gray-900">Investigative Journalism Suite</h1>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-green-600" />
              <span className="text-sm text-green-600 font-medium">End-to-End Encrypted</span>
            </div>
          </div>
          <p className="text-gray-600 mt-2">
            Secure tools for investigative journalism, source protection, and story development
          </p>
        </div>

        {/* Security Notice */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <div className="flex">
            <AlertTriangle className="h-5 w-5 text-yellow-400" />
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <strong>Security Notice:</strong> All communications are encrypted. Follow operational security protocols.
                Use secure channels only. This system is designed for maximum source protection.
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {/* Secure Leaks Tab */}
            {activeTab === 'leaks' && (
              <div className="space-y-6">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Secure Document Upload</h3>
                  <p className="text-gray-600 mb-4">
                    Upload sensitive documents, images, videos, or audio files. All files are encrypted and access is logged.
                  </p>
                  <input
                    type="file"
                    multiple
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.mp4,.mp3,.wav,.txt"
                  />
                  <label
                    htmlFor="file-upload"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer transition-colors"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Select Files
                  </label>
                  <p className="text-xs text-gray-500 mt-2">
                    Maximum file size: 100MB per file. Supported formats: PDF, DOC, Images, Video, Audio
                  </p>
                </div>

                {leakFiles.length > 0 && (
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Uploaded Files</h3>
                    <div className="space-y-3">
                      {leakFiles.map((file) => (
                        <div key={file.id} className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <FileText className="h-8 w-8 text-blue-600" />
                            <div>
                              <p className="font-medium text-gray-900">{file.name}</p>
                              <p className="text-sm text-gray-600">
                                {(file.size / 1024 / 1024).toFixed(2)} MB • Uploaded {file.uploadDate}
                              </p>
                              <div className="flex items-center space-x-2 mt-1">
                                <Lock className="h-3 w-3 text-green-600" />
                                <span className="text-xs text-green-600">Encrypted</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => navigator.clipboard.writeText(generateSecureLink(file))}
                              className="text-blue-600 hover:text-blue-800 text-sm"
                            >
                              Copy Secure Link
                            </button>
                            <button
                              onClick={() => secureDeleteFile(file.id)}
                              className="text-red-600 hover:text-red-800 text-sm"
                            >
                              Secure Delete
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">Security Features</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• End-to-end encryption for all uploads</li>
                    <li>• Automatic metadata stripping</li>
                    <li>• Secure deletion with data wiping</li>
                    <li>• Access logging and monitoring</li>
                    <li>• Time-limited secure sharing links</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Story Builder Tab */}
            {activeTab === 'story' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Story Title
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your story title"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Story Content
                  </label>
                  <textarea
                    value={storyDraft}
                    onChange={(e) => setStoryDraft(e.target.value)}
                    placeholder="Write your story here... Use [SOURCE] tags to mark information that needs verification."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="12"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Word count: {storyDraft.split(/\s+/).filter(word => word.length > 0).length}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                    <Search className="h-4 w-4" />
                    <span>Fact Check</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                    <Send className="h-4 w-4" />
                    <span>Legal Review</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
                    <Download className="h-4 w-4" />
                    <span>Export Draft</span>
                  </button>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <div className="flex">
                    <AlertTriangle className="h-5 w-5 text-yellow-400" />
                    <div className="ml-3">
                      <h4 className="text-sm font-medium text-yellow-800">Editorial Guidelines</h4>
                      <ul className="text-sm text-yellow-700 mt-1 space-y-1">
                        <li>• Verify all facts with at least two independent sources</li>
                        <li>• Protect source identity - use generic descriptions</li>
                        <li>• Obtain legal review before publication</li>
                        <li>• Follow journalistic ethics and standards</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Contacts Tab */}
            {activeTab === 'contacts' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900">Trusted Contacts</h3>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                    Add Contact
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {contacts.map((contact) => (
                    <div key={contact.id} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-medium text-gray-900">{contact.name}</h4>
                          <p className="text-sm text-gray-600">{contact.type}</p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(contact.priority)}`}>
                          {contact.priority}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{contact.email}</p>
                      <div className="flex space-x-2">
                        <button className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm">
                          <MessageSquare className="inline h-4 w-4 mr-1" />
                          Message
                        </button>
                        <button className="flex-1 bg-gray-600 text-white px-3 py-2 rounded-md hover:bg-gray-700 transition-colors text-sm">
                          <Shield className="inline h-4 w-4 mr-1" />
                          Secure
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">Communication Security</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Use encrypted email (ProtonMail, Tutanota)</li>
                    <li>• Verify contact identity through secure channels</li>
                    <li>• Use Signal for sensitive communications</li>
                    <li>• Never discuss sources over unencrypted channels</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Investigations Tab */}
            {activeTab === 'investigations' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900">Active Investigations</h3>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                    New Investigation
                  </button>
                </div>

                <div className="space-y-4">
                  {investigations.map((investigation) => (
                    <div key={investigation.id} className="bg-white border rounded-lg p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-lg font-medium text-gray-900">{investigation.title}</h4>
                          <p className="text-gray-600 mt-1">{investigation.description}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(investigation.status)}`}>
                            {investigation.status}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(investigation.priority)}`}>
                            {investigation.priority}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600">Sources</p>
                          <p className="font-medium">{investigation.sources}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Documents</p>
                          <p className="font-medium">{investigation.documents}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Created</p>
                          <p className="font-medium">{investigation.created}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Last Update</p>
                          <p className="font-medium">{investigation.lastUpdate}</p>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                          <Search className="inline h-4 w-4 mr-1" />
                          View Details
                        </button>
                        <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                          <FileText className="inline h-4 w-4 mr-1" />
                          Add Document
                        </button>
                        <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
                          <Send className="inline h-4 w-4 mr-1" />
                          Submit Story
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestigativeJournalismSuite;