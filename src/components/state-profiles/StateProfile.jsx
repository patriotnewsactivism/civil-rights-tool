import React, { useState, useEffect } from 'react';
import { getStateProfile } from '../../data/stateProfiles';
import { 
  Scale, 
  FileText, 
  Shield, 
  AlertTriangle, 
  Phone, 
  Globe, 
  Calendar, 
  MapPin, 
  AlertCircle, 
  BookOpen, 
  Gavel, 
  Users, 
  Camera, 
  FileSearch, 
  Clipboard, 
  MessageCircle, 
  Bookmark,
  Download,
  Share2,
  Printer
} from 'lucide-react';

/**
 * Comprehensive State Profile Component
 * 
 * Displays detailed information about a state's legal landscape,
 * resources, and recent incidents relevant to journalists and activists.
 * 
 * @param {Object} props - Component props
 * @param {string} props.stateCode - Two-letter state code
 */
const StateProfile = ({ stateCode }) => {
  const [profile, setProfile] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(true);
  const [bookmarked, setBookmarked] = useState(false);
  const [notes, setNotes] = useState('');
  
  // Load state profile data
  useEffect(() => {
    if (stateCode) {
      setLoading(true);
      const stateProfile = getStateProfile(stateCode);
      setProfile(stateProfile);
      
      // Check if state is bookmarked
      const bookmarks = JSON.parse(localStorage.getItem('stateBookmarks') || '[]');
      setBookmarked(bookmarks.includes(stateCode));
      
      // Load notes for this state
      const savedNotes = localStorage.getItem(`stateNotes_${stateCode}`);
      if (savedNotes) {
        setNotes(savedNotes);
      } else {
        setNotes('');
      }
      
      setLoading(false);
    }
  }, [stateCode]);
  
  // Toggle bookmark status
  const toggleBookmark = () => {
    const newStatus = !bookmarked;
    setBookmarked(newStatus);
    
    // Update localStorage
    const bookmarks = JSON.parse(localStorage.getItem('stateBookmarks') || '[]');
    if (newStatus) {
      if (!bookmarks.includes(stateCode)) {
        bookmarks.push(stateCode);
      }
    } else {
      const index = bookmarks.indexOf(stateCode);
      if (index !== -1) {
        bookmarks.splice(index, 1);
      }
    }
    localStorage.setItem('stateBookmarks', JSON.stringify(bookmarks));
  };
  
  // Save notes
  const saveNotes = () => {
    localStorage.setItem(`stateNotes_${stateCode}`, notes);
    alert('Notes saved successfully!');
  };
  
  // Print profile
  const printProfile = () => {
    window.print();
  };
  
  // Share profile
  const shareProfile = () => {
    if (navigator.share) {
      navigator.share({
        title: `${profile.name} Civil Rights Legal Profile`,
        text: `Civil rights legal information for ${profile.name}`,
        url: window.location.href
      });
    } else {
      // Fallback for browsers that don't support the Web Share API
      const url = window.location.href;
      navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    }
  };
  
  // Download profile as PDF
  const downloadProfile = () => {
    // This would normally use a library like jsPDF
    // For now, we'll just show an alert
    alert('Download functionality would generate a PDF of this profile');
  };
  
  if (loading || !profile) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-6xl mx-auto print:shadow-none">
      {/* Header with state name and actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 pb-4 border-b border-gray-200 dark:border-gray-700 print:border-black">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white print:text-black">{profile.name}</h1>
          <p className="text-gray-600 dark:text-gray-300 print:text-gray-800">Capital: {profile.capital}</p>
        </div>
        
        <div className="flex space-x-2 mt-4 md:mt-0 print:hidden">
          <button 
            onClick={toggleBookmark}
            className={`p-2 rounded-full ${bookmarked ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-300' : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'}`}
            title={bookmarked ? "Remove bookmark" : "Bookmark this state"}
          >
            <Bookmark className="h-5 w-5" />
          </button>
          <button 
            onClick={printProfile}
            className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            title="Print profile"
          >
            <Printer className="h-5 w-5" />
          </button>
          <button 
            onClick={downloadProfile}
            className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            title="Download as PDF"
          >
            <Download className="h-5 w-5" />
          </button>
          <button 
            onClick={shareProfile}
            className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            title="Share profile"
          >
            <Share2 className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      {/* Circuit Court Information */}
      <div className="mb-6 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 print:bg-white print:border print:border-black">
        <div className="flex items-start">
          <Scale className="h-6 w-6 text-blue-600 dark:text-blue-400 print:text-black mr-2 flex-shrink-0" />
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white print:text-black">Federal Circuit Information</h2>
            <p className="text-gray-700 dark:text-gray-300 print:text-black">
              <span className="font-medium">{profile.circuitInfo.circuit}</span> • 
              <span className={`ml-2 font-medium ${
                profile.circuitInfo.hostility === 'EXTREMELY HOSTILE' ? 'text-red-600 dark:text-red-400' :
                profile.circuitInfo.hostility === 'Hostile' ? 'text-orange-600 dark:text-orange-400' :
                profile.circuitInfo.hostility === 'Moderate' ? 'text-yellow-600 dark:text-yellow-400' :
                'text-green-600 dark:text-green-400'
              } print:text-black`}>
                {profile.circuitInfo.hostility}
              </span>
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 print:text-black mt-1">
              Districts: {profile.circuitInfo.districts.join(', ')}
            </p>
          </div>
        </div>
      </div>
      
      {/* Tab navigation */}
      <div className="border-b border-gray-200 dark:border-gray-700 mb-6 print:hidden">
        <nav className="flex flex-wrap -mb-px">
          <button
            onClick={() => setActiveTab('overview')}
            className={`mr-4 py-2 px-1 font-medium text-sm border-b-2 ${
              activeTab === 'overview'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('journalist')}
            className={`mr-4 py-2 px-1 font-medium text-sm border-b-2 ${
              activeTab === 'journalist'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            For Journalists
          </button>
          <button
            onClick={() => setActiveTab('activist')}
            className={`mr-4 py-2 px-1 font-medium text-sm border-b-2 ${
              activeTab === 'activist'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            For Activists
          </button>
          <button
            onClick={() => setActiveTab('legal')}
            className={`mr-4 py-2 px-1 font-medium text-sm border-b-2 ${
              activeTab === 'legal'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Legal Resources
          </button>
          <button
            onClick={() => setActiveTab('incidents')}
            className={`mr-4 py-2 px-1 font-medium text-sm border-b-2 ${
              activeTab === 'incidents'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Recent Incidents
          </button>
          <button
            onClick={() => setActiveTab('notes')}
            className={`mr-4 py-2 px-1 font-medium text-sm border-b-2 ${
              activeTab === 'notes'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            My Notes
          </button>
        </nav>
      </div>
      
      {/* Tab content */}
      <div className="print:block">
        {/* Overview Tab */}
        {(activeTab === 'overview' || true) && (
          <div className="mb-8 print:mb-4 print:border-t print:border-gray-300 print:pt-4">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white print:text-black">State Overview</h2>
            
            {/* Circuit Court Key Judges */}
            <div className="mb-6 print:mb-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white print:text-black flex items-center">
                <Gavel className="h-5 w-5 mr-2 text-gray-700 dark:text-gray-300 print:text-black" />
                Key Federal Judges
              </h3>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 print:border-black">
                {profile.circuitInfo.keyJudges.map((judge, index) => (
                  <div key={index} className="mb-3 last:mb-0">
                    <p className="font-medium text-gray-900 dark:text-white print:text-black">{judge.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 print:text-black">
                      {judge.position} • Appointed by {judge.appointed}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 print:text-black">{judge.background}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Notable Cases */}
            <div className="mb-6 print:mb-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white print:text-black flex items-center">
                <FileText className="h-5 w-5 mr-2 text-gray-700 dark:text-gray-300 print:text-black" />
                Notable Cases
              </h3>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 print:border-black">
                {profile.circuitInfo.notableCases.map((caseItem, index) => (
                  <div key={index} className="mb-3 last:mb-0">
                    <p className="font-medium text-gray-900 dark:text-white print:text-black">{caseItem.case}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 print:text-black">
                      <span className="font-medium">Topic:</span> {caseItem.topic}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 print:text-black">
                      <span className="font-medium">Ruling:</span> {caseItem.ruling}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 print:text-black">
                      <span className="font-medium">Impact:</span> {caseItem.impact}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Key Legislation */}
            <div className="mb-6 print:mb-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white print:text-black flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-gray-700 dark:text-gray-300 print:text-black" />
                Key Legislation to Watch
              </h3>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 print:border-black">
                {profile.keyLegislation.map((legislation, index) => (
                  <div key={index} className="mb-3 last:mb-0">
                    <p className="font-medium text-gray-900 dark:text-white print:text-black">
                      {legislation.bill} ({legislation.session})
                      <span className={`ml-2 text-sm px-2 py-0.5 rounded-full ${
                        legislation.status === 'Passed' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                        legislation.status === 'In committee' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' :
                        'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                      } print:bg-white print:border print:border-black print:text-black`}>
                        {legislation.status}
                      </span>
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 print:text-black">{legislation.description}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 print:text-black">
                      <span className="font-medium">Impact:</span> {legislation.impact}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Journalist Tab */}
        {(activeTab === 'journalist' || true) && (
          <div className="mb-8 print:mb-4 print:border-t print:border-gray-300 print:pt-4">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white print:text-black">For Journalists</h2>
            
            {/* Shield Law */}
            <div className="mb-6 print:mb-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white print:text-black flex items-center">
                <Shield className="h-5 w-5 mr-2 text-gray-700 dark:text-gray-300 print:text-black" />
                Shield Law Protection
              </h3>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 print:border-black">
                <div className="flex items-center mb-2">
                  <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full mr-2 ${
                    profile.legalInfo.shieldLaw.exists ? 
                    'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 
                    'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                  } print:bg-white print:border print:border-black print:text-black`}>
                    {profile.legalInfo.shieldLaw.exists ? '✓' : '✗'}
                  </span>
                  <span className="font-medium text-gray-900 dark:text-white print:text-black">
                    {profile.legalInfo.shieldLaw.exists ? 'Shield Law Exists' : 'No Shield Law'}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 print:text-black mb-2">
                  {profile.legalInfo.shieldLaw.description}
                </p>
                {profile.legalInfo.shieldLaw.exists && (
                  <>
                    <p className="text-sm text-gray-600 dark:text-gray-400 print:text-black mb-1">
                      <span className="font-medium">Coverage:</span> {profile.legalInfo.shieldLaw.coverage}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 print:text-black">
                      <span className="font-medium">Limitations:</span> {profile.legalInfo.shieldLaw.limitations}
                    </p>
                  </>
                )}
                {!profile.legalInfo.shieldLaw.exists && profile.legalInfo.shieldLaw.caselaw && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 print:text-black">
                    <span className="font-medium">Case Law Protection:</span> {profile.legalInfo.shieldLaw.caselaw}
                  </p>
                )}
              </div>
            </div>
            
            {/* Public Records */}
            <div className="mb-6 print:mb-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white print:text-black flex items-center">
                <FileSearch className="h-5 w-5 mr-2 text-gray-700 dark:text-gray-300 print:text-black" />
                Public Records Access
              </h3>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 print:border-black">
                <p className="font-medium text-gray-900 dark:text-white print:text-black mb-2">
                  {profile.legalInfo.publicRecords.statute}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 print:text-black mb-1">
                      <span className="font-medium">Response Time:</span> {profile.legalInfo.publicRecords.timeLimit}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 print:text-black mb-1">
                      <span className="font-medium">Fees:</span> {profile.legalInfo.publicRecords.fees}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 print:text-black mb-1">Key Exemptions:</p>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 print:text-black">
                      {profile.legalInfo.publicRecords.exemptions.map((exemption, index) => (
                        <li key={index}>{exemption}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-md print:bg-white print:border print:border-black">
                  <p className="text-sm font-medium text-yellow-800 dark:text-yellow-300 print:text-black">Pro Tips:</p>
                  <p className="text-sm text-yellow-700 dark:text-yellow-400 print:text-black">{profile.legalInfo.publicRecords.tips}</p>
                </div>
              </div>
            </div>
            
            {/* Media Landscape */}
            <div className="mb-6 print:mb-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white print:text-black flex items-center">
                <Globe className="h-5 w-5 mr-2 text-gray-700 dark:text-gray-300 print:text-black" />
                Media Landscape
              </h3>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 print:border-black">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 print:text-black mb-1">Major Local Outlets:</p>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 print:text-black">
                      {profile.mediaLandscape.localOutlets.map((outlet, index) => (
                        <li key={index}>{outlet}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 print:text-black mb-1">Independent Media:</p>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 print:text-black">
                      {profile.mediaLandscape.independentMedia.map((outlet, index) => (
                        <li key={index}>{outlet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 print:text-black mb-1">Press Freedom Issues:</p>
                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 print:text-black">
                    {profile.mediaLandscape.pressFreedomIssues.map((issue, index) => (
                      <li key={index}>{issue}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Journalist Resources */}
            <div className="mb-6 print:mb-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white print:text-black flex items-center">
                <Phone className="h-5 w-5 mr-2 text-gray-700 dark:text-gray-300 print:text-black" />
                Journalist Resources
              </h3>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 print:border-black">
                {profile.contacts.journalistResources.map((resource, index) => (
                  <div key={index} className="mb-3 last:mb-0">
                    <p className="font-medium text-gray-900 dark:text-white print:text-black">{resource.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 print:text-black">
                      <span className="font-medium">Phone:</span> {resource.phone}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 print:text-black">
                      <span className="font-medium">Website:</span> <a href={resource.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline print:text-black">{resource.website}</a>
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 print:text-black">
                      <span className="font-medium">Services:</span> {resource.services.join(', ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Activist Tab */}
        {(activeTab === 'activist' || true) && (
          <div className="mb-8 print:mb-4 print:border-t print:border-gray-300 print:pt-4">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white print:text-black">For Activists</h2>
            
            {/* Protest Rights */}
            <div className="mb-6 print:mb-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white print:text-black flex items-center">
                <Users className="h-5 w-5 mr-2 text-gray-700 dark:text-gray-300 print:text-black" />
                Protest Rights
              </h3>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 print:border-black">
                <p className="text-gray-700 dark:text-gray-300 print:text-black mb-2">
                  <span className="font-medium">Permit Requirements:</span> {profile.legalInfo.protestRights.permitRequirements}
                </p>
                <div className="mb-3">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 print:text-black mb-1">Key Restrictions:</p>
                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 print:text-black">
                    {profile.legalInfo.protestRights.restrictions.map((restriction, index) => (
                      <li key={index}>{restriction}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 print:text-black mb-2">
                  <span className="font-medium">Police Interaction:</span> {profile.legalInfo.protestRights.policeInteraction}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 print:text-black">
                  <span className="font-medium">Recent Changes:</span> {profile.legalInfo.protestRights.recentChanges}
                </p>
              </div>
            </div>
            
            {/* Police Accountability */}
            <div className="mb-6 print:mb-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white print:text-black flex items-center">
                <Camera className="h-5 w-5 mr-2 text-gray-700 dark:text-gray-300 print:text-black" />
                Police Accountability
              </h3>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 print:border-black">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 print:text-black mb-1">
                      <span className="font-medium">Body Cameras:</span> {profile.legalInfo.policeAccountability.bodyCamera}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 print:text-black mb-1">
                      <span className="font-medium">Complaint Process:</span> {profile.legalInfo.policeAccountability.complaintProcess}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 print:text-black mb-1">
                      <span className="font-medium">Civilian Oversight:</span> {profile.legalInfo.policeAccountability.civilianOversight}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 print:text-black mb-1">
                      <span className="font-medium">Records Access:</span> {profile.legalInfo.policeAccountability.recordsAccess}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Civil Rights Organizations */}
            <div className="mb-6 print:mb-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white print:text-black flex items-center">
                <Shield className="h-5 w-5 mr-2 text-gray-700 dark:text-gray-300 print:text-black" />
                Civil Rights Organizations
              </h3>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 print:border-black">
                {profile.contacts.civilRightsOrgs.map((org, index) => (
                  <div key={index} className="mb-3 last:mb-0">
                    <p className="font-medium text-gray-900 dark:text-white print:text-black">{org.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 print:text-black">
                      <span className="font-medium">Phone:</span> {org.phone}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 print:text-black">
                      <span className="font-medium">Website:</span> <a href={org.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline print:text-black">{org.website}</a>
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 print:text-black">
                      <span className="font-medium">Services:</span> {org.services.join(', ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Emergency Contacts */}
            <div className="mb-6 print:mb-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white print:text-black flex items-center">
                <AlertCircle className="h-5 w-5 mr-2 text-red-600 dark:text-red-400 print:text-black" />
                Emergency Legal Contacts
              </h3>
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 print:bg-white print:border print:border-black">
                {profile.contacts.emergencyContacts.map((contact, index) => (
                  <div key={index} className="mb-3 last:mb-0">
                    <p className="font-medium text-gray-900 dark:text-white print:text-black">{contact.name}</p>
                    <p className="text-sm text-red-600 dark:text-red-400 print:text-black font-bold">
                      Hotline: {contact.hotline}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 print:text-black">
                      <span className="font-medium">Services:</span> {contact.services.join(', ')}
                    </p>
                  </div>
                ))}
                <div className="mt-3 p-2 bg-white dark:bg-gray-800 rounded border border-red-200 dark:border-red-800 print:border-black">
                  <p className="text-sm font-medium text-gray-900 dark:text-white print:text-black">Before Protests:</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 print:text-black">Write this number on your arm with permanent marker. Save it in your phone under ICE (In Case of Emergency).</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Legal Resources Tab */}
        {(activeTab === 'legal' || true) && (
          <div className="mb-8 print:mb-4 print:border-t print:border-gray-300 print:pt-4">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white print:text-black">Legal Resources</h2>
            
            {/* Legal Aid Organizations */}
            <div className="mb-6 print:mb-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white print:text-black flex items-center">
                <Scale className="h-5 w-5 mr-2 text-gray-700 dark:text-gray-300 print:text-black" />
                Legal Aid Organizations
              </h3>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 print:border-black">
                {profile.contacts.legalAid.map((org, index) => (
                  <div key={index} className="mb-3 last:mb-0">
                    <p className="font-medium text-gray-900 dark:text-white print:text-black">{org.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 print:text-black">
                      <span className="font-medium">Phone:</span> {org.phone}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 print:text-black">
                      <span className="font-medium">Website:</span> <a href={org.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline print:text-black">{org.website}</a>
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 print:text-black">
                      <span className="font-medium">Services:</span> {org.services.join(', ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Recent Incidents Tab */}
        {(activeTab === 'incidents' || true) && (
          <div className="mb-8 print:mb-4 print:border-t print:border-gray-300 print:pt-4">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white print:text-black">Recent Incidents</h2>
            
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 print:border-black">
              {profile.recentIncidents.map((incident, index) => (
                <div key={index} className="mb-4 last:mb-0 pb-4 last:pb-0 border-b last:border-b-0 border-gray-200 dark:border-gray-700 print:border-black">
                  <div className="flex items-start">
                    <div className="mr-3 mt-1">
                      <AlertTriangle className="h-5 w-5 text-yellow-500 dark:text-yellow-400 print:text-black" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white print:text-black">{incident.description}</p>
                      <div className="flex flex-wrap items-center mt-1 text-sm text-gray-600 dark:text-gray-400 print:text-black">
                        <span className="flex items-center mr-3">
                          <Calendar className="h-4 w-4 mr-1" />
                          {incident.date}
                        </span>
                        <span className="flex items-center mr-3">
                          <MapPin className="h-4 w-4 mr-1" />
                          {incident.location}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 print:text-black">
                        <span className="font-medium">Status:</span> {incident.status}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Notes Tab - Only visible in interactive mode, not in print */}
        {activeTab === 'notes' && (
          <div className="mb-8 print:hidden">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">My Notes</h2>
            
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full h-64 p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="Add your notes about this state here..."
              ></textarea>
              
              <div className="mt-3 flex justify-end">
                <Button onClick={saveNotes} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Save Notes
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StateProfile;