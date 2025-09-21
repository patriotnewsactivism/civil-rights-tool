import React, { useState, useEffect } from 'react';
import { getStateProfile } from '../../data/stateProfiles';
import { 
  FileText, 
  Camera, 
  Mic, 
  Shield, 
  AlertTriangle, 
  Download, 
  Printer, 
  Share2, 
  Clipboard, 
  CheckSquare, 
  AlertCircle, 
  Phone, 
  FileSearch, 
  BookOpen
} from 'lucide-react';

/**
 * Journalist Toolkit Component
 * 
 * Provides specialized tools and resources for journalists covering civil rights issues,
 * including state-specific press freedom information, FOIA request templates,
 * safety checklists, and emergency contacts.
 * 
 * @param {Object} props - Component props
 * @param {string} props.stateCode - Two-letter state code
 */
const JournalistToolkit = ({ stateCode }) => {
  const [profile, setProfile] = useState(null);
  const [activeTab, setActiveTab] = useState('shield-law');
  const [loading, setLoading] = useState(true);
  const [checklist, setChecklist] = useState({
    equipment: {
      camera: false,
      recorder: false,
      notebook: false,
      phone: false,
      charger: false,
      firstAid: false,
      water: false,
      id: false,
      pressPass: false
    },
    safety: {
      contactInfo: false,
      emergencyContact: false,
      legalObserver: false,
      exitStrategy: false,
      meetingPoint: false,
      signalApp: false,
      encryption: false
    },
    legal: {
      shieldLaw: false,
      pressRights: false,
      contactAttorney: false,
      pressCredentials: false
    }
  });
  
  // Load state profile data
  useEffect(() => {
    if (stateCode) {
      setLoading(true);
      const stateProfile = getStateProfile(stateCode);
      setProfile(stateProfile);
      
      // Load saved checklist from localStorage
      const savedChecklist = localStorage.getItem(`journalistChecklist_${stateCode}`);
      if (savedChecklist) {
        setChecklist(JSON.parse(savedChecklist));
      }
      
      setLoading(false);
    }
  }, [stateCode]);
  
  // Save checklist to localStorage
  const updateChecklist = (category, item, value) => {
    const newChecklist = {
      ...checklist,
      [category]: {
        ...checklist[category],
        [item]: value
      }
    };
    
    setChecklist(newChecklist);
    localStorage.setItem(`journalistChecklist_${stateCode}`, JSON.stringify(newChecklist));
  };
  
  // Generate FOIA request template
  const generateFOIATemplate = () => {
    if (!profile) return '';
    
    const today = new Date().toLocaleDateString();
    
    return `[Your Name]
[Your Organization]
[Your Address]
[City, State ZIP]
[Your Phone]
[Your Email]

${today}

Records Custodian
[Agency Name]
[Agency Address]
[City, State ZIP]

RE: Public Records Request

Dear Records Custodian:

Pursuant to the ${profile.legalInfo.publicRecords.statute}, I hereby request the following records:

[DESCRIBE RECORDS WITH REASONABLE PARTICULARITY]

If you are not the custodian of the requested records, please forward this request to the appropriate person or let me know which person or agency holds these records.

This request is not being made for commercial purposes. I request a waiver of all fees for this request as disclosure of the requested information is in the public interest and will contribute significantly to public understanding of [SUBJECT MATTER].

The ${profile.legalInfo.publicRecords.statute} requires a response within ${profile.legalInfo.publicRecords.timeLimit}. If access to the records I am requesting will take longer, please contact me with information about when I might expect copies or the ability to inspect the requested records.

If you deny any or all of this request, please cite each specific exemption you feel justifies the refusal to release the information and notify me of the appeal procedures available to me under the law.

Thank you for considering my request.

Sincerely,

[Your Name]
[Your Organization]`;
  };
  
  // Copy FOIA template to clipboard
  const copyFOIATemplate = () => {
    const template = generateFOIATemplate();
    navigator.clipboard.writeText(template);
    alert('FOIA request template copied to clipboard!');
  };
  
  // Print FOIA template
  const printFOIATemplate = () => {
    const template = generateFOIATemplate();
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>FOIA Request Template - ${profile.name}</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.5; padding: 20px; }
            pre { white-space: pre-wrap; }
          </style>
        </head>
        <body>
          <pre>${template}</pre>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };
  
  // Download FOIA template
  const downloadFOIATemplate = () => {
    const template = generateFOIATemplate();
    const element = document.createElement('a');
    const file = new Blob([template], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `FOIA_Request_Template_${profile.name}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
  
  if (loading || !profile) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Journalist Toolkit</h1>
          <p className="text-gray-600 dark:text-gray-300">Resources for reporting in {profile.name}</p>
        </div>
      </div>
      
      {/* Tab navigation */}
      <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
        <nav className="flex flex-wrap -mb-px">
          <button
            onClick={() => setActiveTab('shield-law')}
            className={`mr-4 py-2 px-1 font-medium text-sm border-b-2 ${
              activeTab === 'shield-law'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Shield Law Guide
          </button>
          <button
            onClick={() => setActiveTab('foia')}
            className={`mr-4 py-2 px-1 font-medium text-sm border-b-2 ${
              activeTab === 'foia'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            FOIA Templates
          </button>
          <button
            onClick={() => setActiveTab('safety')}
            className={`mr-4 py-2 px-1 font-medium text-sm border-b-2 ${
              activeTab === 'safety'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Safety Checklist
          </button>
          <button
            onClick={() => setActiveTab('contacts')}
            className={`mr-4 py-2 px-1 font-medium text-sm border-b-2 ${
              activeTab === 'contacts'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Emergency Contacts
          </button>
        </nav>
      </div>
      
      {/* Tab content */}
      <div>
        {/* Shield Law Guide Tab */}
        {activeTab === 'shield-law' && (
          <div>
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Shield Law Guide</h2>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-6">
              <div className="flex items-center mb-2">
                <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full mr-2 ${
                  profile.legalInfo.shieldLaw.exists ? 
                  'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 
                  'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                }`}>
                  {profile.legalInfo.shieldLaw.exists ? '✓' : '✗'}
                </span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {profile.legalInfo.shieldLaw.exists ? 'Shield Law Exists' : 'No Shield Law'}
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                {profile.legalInfo.shieldLaw.description}
              </p>
              {profile.legalInfo.shieldLaw.exists && (
                <>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    <span className="font-medium">Coverage:</span> {profile.legalInfo.shieldLaw.coverage}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-medium">Limitations:</span> {profile.legalInfo.shieldLaw.limitations}
                  </p>
                </>
              )}
              {!profile.legalInfo.shieldLaw.exists && profile.legalInfo.shieldLaw.caselaw && (
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Case Law Protection:</span> {profile.legalInfo.shieldLaw.caselaw}
                </p>
              )}
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">What Journalists Should Know</h3>
              
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">If You Receive a Subpoena:</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                  <li>Do not ignore it - contact legal counsel immediately</li>
                  <li>Notify your news organization's attorney</li>
                  <li>Do not discuss the subpoena with the issuing attorney</li>
                  <li>Preserve relevant materials but do not turn anything over without legal advice</li>
                  <li>Contact the Reporters Committee for Freedom of the Press legal hotline: 800-336-4243</li>
                </ul>
                
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Best Practices for Source Protection:</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                  <li>Be clear with sources about confidentiality terms</li>
                  <li>Use secure communication methods (Signal, encrypted email)</li>
                  <li>Minimize digital records of source interactions</li>
                  <li>Consider conducting sensitive interviews in person</li>
                  <li>Be aware of surveillance in public places</li>
                </ul>
                
                {profile.legalInfo.shieldLaw.exists ? (
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-md">
                    <p className="text-sm font-medium text-green-800 dark:text-green-300">
                      {profile.name}'s shield law provides legal protection, but always consult with an attorney about specific situations.
                    </p>
                  </div>
                ) : (
                  <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-md">
                    <p className="text-sm font-medium text-yellow-800 dark:text-yellow-300">
                      {profile.name} lacks a shield law, so extra caution is needed when promising confidentiality to sources.
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Related Court Cases</h3>
              
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="mb-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">Branzburg v. Hayes (1972)</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Supreme Court ruling that reporters do not have an absolute privilege to refuse to testify before a grand jury.
                  </p>
                </div>
                
                <div className="mb-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">In re Grand Jury Subpoena, Judith Miller (2005)</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    D.C. Circuit upheld contempt citations against reporters who refused to testify about confidential sources.
                  </p>
                </div>
                
                {profile.circuitInfo.notableCases.map((caseItem, index) => (
                  <div key={index} className="mb-3 last:mb-0">
                    <h4 className="font-medium text-gray-900 dark:text-white">{caseItem.case}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {caseItem.topic}: {caseItem.ruling}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* FOIA Templates Tab */}
        {activeTab === 'foia' && (
          <div>
            <div className="flex items-center mb-4">
              <FileSearch className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">FOIA Request Templates</h2>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-6">
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">{profile.name} Public Records Law:</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <span className="font-medium">Statute:</span> {profile.legalInfo.publicRecords.statute}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <span className="font-medium">Response Time:</span> {profile.legalInfo.publicRecords.timeLimit}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <span className="font-medium">Fees:</span> {profile.legalInfo.publicRecords.fees}
              </p>
              <div className="mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-md">
                <p className="text-sm font-medium text-yellow-800 dark:text-yellow-300">Pro Tips:</p>
                <p className="text-sm text-yellow-700 dark:text-yellow-400">{profile.legalInfo.publicRecords.tips}</p>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">FOIA Request Template</h3>
              
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex justify-end space-x-2 mb-3">
                  <button 
                    onClick={copyFOIATemplate}
                    className="flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 rounded-md"
                  >
                    <Clipboard className="h-4 w-4 mr-1" />
                    Copy
                  </button>
                  <button 
                    onClick={printFOIATemplate}
                    className="flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 rounded-md"
                  >
                    <Printer className="h-4 w-4 mr-1" />
                    Print
                  </button>
                  <button 
                    onClick={downloadFOIATemplate}
                    className="flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 rounded-md"
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </button>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-md font-mono text-sm whitespace-pre-wrap">
                  {generateFOIATemplate()}
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Common FOIA Request Types</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Police Records Request</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Use this template to request incident reports, arrest records, body camera footage, or department policies.
                  </p>
                  <button 
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                    onClick={() => alert('This would show a specialized police records template')}
                  >
                    View Template
                  </button>
                </div>
                
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Government Agency Emails</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Use this template to request email communications between officials about specific topics.
                  </p>
                  <button 
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                    onClick={() => alert('This would show a specialized email records template')}
                  >
                    View Template
                  </button>
                </div>
                
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Budget and Financial Records</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Use this template to request government agency budgets, expenditures, and contracts.
                  </p>
                  <button 
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                    onClick={() => alert('This would show a specialized financial records template')}
                  >
                    View Template
                  </button>
                </div>
                
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Environmental Records</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Use this template to request environmental impact studies, permits, and enforcement actions.
                  </p>
                  <button 
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                    onClick={() => alert('This would show a specialized environmental records template')}
                  >
                    View Template
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Safety Checklist Tab */}
        {activeTab === 'safety' && (
          <div>
            <div className="flex items-center mb-4">
              <AlertTriangle className="h-6 w-6 text-yellow-500 dark:text-yellow-400 mr-2" />
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Safety Checklist</h2>
            </div>
            
            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 mb-6">
              <p className="text-gray-700 dark:text-gray-300">
                Use this checklist when preparing to cover protests, civil unrest, or other potentially dangerous situations in {profile.name}.
                Your selections are saved locally for future reference.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Equipment Checklist */}
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center">
                  <Camera className="h-5 w-5 mr-2" />
                  Equipment Checklist
                </h3>
                
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={checklist.equipment.camera}
                      onChange={(e) => updateChecklist('equipment', 'camera', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Camera/Smartphone with full battery</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={checklist.equipment.recorder}
                      onChange={(e) => updateChecklist('equipment', 'recorder', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Audio recorder</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={checklist.equipment.notebook}
                      onChange={(e) => updateChecklist('equipment', 'notebook', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Notebook and pens</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={checklist.equipment.phone}
                      onChange={(e) => updateChecklist('equipment', 'phone', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Charged phone with emergency contacts</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={checklist.equipment.charger}
                      onChange={(e) => updateChecklist('equipment', 'charger', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Portable charger/power bank</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={checklist.equipment.firstAid}
                      onChange={(e) => updateChecklist('equipment', 'firstAid', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">First aid kit</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={checklist.equipment.water}
                      onChange={(e) => updateChecklist('equipment', 'water', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Water and snacks</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={checklist.equipment.id}
                      onChange={(e) => updateChecklist('equipment', 'id', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Government-issued ID</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={checklist.equipment.pressPass}
                      onChange={(e) => updateChecklist('equipment', 'pressPass', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Press credentials/media pass</span>
                  </label>
                </div>
              </div>
              
              {/* Safety Preparations */}
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  Safety Preparations
                </h3>
                
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={checklist.safety.contactInfo}
                      onChange={(e) => updateChecklist('safety', 'contactInfo', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Write emergency contact info on arm</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={checklist.safety.emergencyContact}
                      onChange={(e) => updateChecklist('safety', 'emergencyContact', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Inform colleague/editor of location</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={checklist.safety.legalObserver}
                      onChange={(e) => updateChecklist('safety', 'legalObserver', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Save legal observer hotline number</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={checklist.safety.exitStrategy}
                      onChange={(e) => updateChecklist('safety', 'exitStrategy', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Plan exit routes/strategy</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={checklist.safety.meetingPoint}
                      onChange={(e) => updateChecklist('safety', 'meetingPoint', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Establish meeting point if separated</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={checklist.safety.signalApp}
                      onChange={(e) => updateChecklist('safety', 'signalApp', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Install Signal app for secure communications</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={checklist.safety.encryption}
                      onChange={(e) => updateChecklist('safety', 'encryption', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Enable device encryption</span>
                  </label>
                </div>
              </div>
              
              {/* Legal Preparations */}
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Legal Preparations
                </h3>
                
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={checklist.legal.shieldLaw}
                      onChange={(e) => updateChecklist('legal', 'shieldLaw', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Review {profile.name} shield law status</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={checklist.legal.pressRights}
                      onChange={(e) => updateChecklist('legal', 'pressRights', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Review press rights at protests</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={checklist.legal.contactAttorney}
                      onChange={(e) => updateChecklist('legal', 'contactAttorney', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Save media attorney contact information</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={checklist.legal.pressCredentials}
                      onChange={(e) => updateChecklist('legal', 'pressCredentials', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Prepare press credentials</span>
                  </label>
                </div>
              </div>
              
              {/* State-Specific Considerations */}
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  {profile.name}-Specific Considerations
                </h3>
                
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  {profile.legalInfo.protestRights.restrictions.map((restriction, index) => (
                    <p key={index} className="flex items-start">
                      <CheckSquare className="h-4 w-4 mr-2 mt-0.5 text-yellow-500 dark:text-yellow-400" />
                      {restriction}
                    </p>
                  ))}
                  
                  <p className="flex items-start">
                    <CheckSquare className="h-4 w-4 mr-2 mt-0.5 text-yellow-500 dark:text-yellow-400" />
                    {profile.legalInfo.protestRights.policeInteraction}
                  </p>
                  
                  {profile.legalInfo.protestRights.recentChanges && (
                    <p className="flex items-start">
                      <AlertTriangle className="h-4 w-4 mr-2 mt-0.5 text-red-500 dark:text-red-400" />
                      Recent change: {profile.legalInfo.protestRights.recentChanges}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Emergency Contacts Tab */}
        {activeTab === 'contacts' && (
          <div>
            <div className="flex items-center mb-4">
              <Phone className="h-6 w-6 text-red-600 dark:text-red-400 mr-2" />
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Emergency Contacts</h2>
            </div>
            
            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 mb-6">
              <p className="text-gray-700 dark:text-gray-300">
                Save these emergency contacts before reporting in {profile.name}. Consider writing the most important numbers on your arm with permanent marker.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Press Freedom Organizations */}
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 dark:text-white mb-3">Press Freedom Organizations</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Reporters Committee for Freedom of the Press</p>
                    <p className="text-red-600 dark:text-red-400 font-bold">Legal Hotline: 800-336-4243</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">24/7 emergency legal assistance for journalists</p>
                  </div>
                  
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Committee to Protect Journalists</p>
                    <p className="text-red-600 dark:text-red-400 font-bold">Emergency Response: 212-300-9000</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">For journalists facing threats or emergencies</p>
                  </div>
                  
                  {profile.contacts.journalistResources.map((resource, index) => (
                    <div key={index}>
                      <p className="font-medium text-gray-900 dark:text-white">{resource.name}</p>
                      <p className="text-red-600 dark:text-red-400 font-bold">{resource.phone}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{resource.services.join(', ')}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Legal Observers & Emergency Legal Aid */}
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 dark:text-white mb-3">Legal Observers & Emergency Legal Aid</h3>
                
                <div className="space-y-4">
                  {profile.contacts.emergencyContacts.map((contact, index) => (
                    <div key={index}>
                      <p className="font-medium text-gray-900 dark:text-white">{contact.name}</p>
                      <p className="text-red-600 dark:text-red-400 font-bold">Hotline: {contact.hotline}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{contact.services.join(', ')}</p>
                    </div>
                  ))}
                  
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">First Amendment Coalition</p>
                    <p className="text-red-600 dark:text-red-400 font-bold">Hotline: 415-460-5060</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Legal assistance for press freedom issues</p>
                  </div>
                </div>
              </div>
              
              {/* Digital Security Emergency */}
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 dark:text-white mb-3">Digital Security Emergency</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Access Now Digital Security Helpline</p>
                    <p className="text-red-600 dark:text-red-400 font-bold">Helpline: help@accessnow.org</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">24/7 assistance with digital security emergencies</p>
                  </div>
                  
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Freedom of the Press Foundation</p>
                    <p className="text-red-600 dark:text-red-400 font-bold">Contact: info@freedom.press</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Digital security training and assistance</p>
                  </div>
                </div>
              </div>
              
              {/* Medical Emergency */}
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 dark:text-white mb-3">Medical Emergency</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Emergency Services</p>
                    <p className="text-red-600 dark:text-red-400 font-bold">Call: 911</p>
                  </div>
                  
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Poison Control</p>
                    <p className="text-red-600 dark:text-red-400 font-bold">Hotline: 800-222-1222</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">For chemical exposure (e.g., tear gas, pepper spray)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
              <h3 className="font-medium text-yellow-800 dark:text-yellow-300 mb-2">If You Are Detained or Arrested:</h3>
              <ul className="list-disc list-inside text-yellow-700 dark:text-yellow-400 space-y-1">
                <li>Identify yourself as a journalist</li>
                <li>Ask to contact your news organization and attorney</li>
                <li>Do not resist arrest, even if you believe it's unlawful</li>
                <li>Do not consent to searches of your equipment or materials</li>
                <li>Invoke your right to remain silent if questioned about your reporting</li>
                <li>Request any seized equipment be sealed pending legal review</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JournalistToolkit;