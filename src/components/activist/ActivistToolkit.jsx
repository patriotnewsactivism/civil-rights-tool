import React, { useState, useEffect } from 'react';
import { getStateProfile } from '../../data/stateProfiles';
import { 
  Users, 
  Shield, 
  AlertTriangle, 
  Camera, 
  FileText, 
  Phone, 
  MessageCircle, 
  Clipboard, 
  Download, 
  Printer, 
  CheckSquare, 
  AlertCircle, 
  MapPin, 
  Calendar, 
  BookOpen
} from 'lucide-react';

/**
 * Activist Toolkit Component
 * 
 * Provides specialized tools and resources for activists organizing around civil rights issues,
 * including state-specific protest rights, know-your-rights information, safety checklists,
 * and emergency contacts.
 * 
 * @param {Object} props - Component props
 * @param {string} props.stateCode - Two-letter state code
 */
const ActivistToolkit = ({ stateCode }) => {
  const [profile, setProfile] = useState(null);
  const [activeTab, setActiveTab] = useState('protest-rights');
  const [loading, setLoading] = useState(true);
  const [checklist, setChecklist] = useState({
    beforeProtest: {
      knowRights: false,
      emergencyContact: false,
      buddySystem: false,
      chargedPhone: false,
      waterFood: false,
      comfortableClothing: false,
      idAndMoney: false,
      medications: false
    },
    duringProtest: {
      stayCalm: false,
      stayTogether: false,
      documentPolice: false,
      followDirections: false,
      avoidEscalation: false,
      knowExits: false
    },
    ifArrested: {
      stayCalm: false,
      stateIntention: false,
      remainSilent: false,
      requestAttorney: false,
      dontResist: false,
      dontConsent: false,
      medicalAttention: false
    }
  });
  
  // Load state profile data
  useEffect(() => {
    if (stateCode) {
      setLoading(true);
      const stateProfile = getStateProfile(stateCode);
      setProfile(stateProfile);
      
      // Load saved checklist from localStorage
      const savedChecklist = localStorage.getItem(`activistChecklist_${stateCode}`);
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
    localStorage.setItem(`activistChecklist_${stateCode}`, JSON.stringify(newChecklist));
  };
  
  // Generate Know Your Rights template
  const generateKnowYourRightsText = () => {
    if (!profile) return '';
    
    return `KNOW YOUR RIGHTS IN ${profile.name.toUpperCase()}

PROTEST RIGHTS
-------------
• Permit Requirements: ${profile.legalInfo.protestRights.permitRequirements}

• Key Restrictions:
${profile.legalInfo.protestRights.restrictions.map(r => `  - ${r}`).join('\n')}

• Police Interaction: ${profile.legalInfo.protestRights.policeInteraction}

• Recent Legal Changes: ${profile.legalInfo.protestRights.recentChanges}

RECORDING THE POLICE
-------------------
• Body Camera Policy: ${profile.legalInfo.policeAccountability.bodyCamera}

• Right to Record: You generally have the right to record police in public places, but:
  - Maintain a reasonable distance
  - Do not interfere with police activities
  - Announce that you are recording if asked
  - Never resist if an officer attempts to confiscate your device

WHAT TO DO IF ARRESTED
---------------------
1. Stay calm and do not resist, even if you believe the arrest is unlawful
2. State clearly: "I am exercising my right to remain silent"
3. State clearly: "I want to speak to an attorney"
4. Do not consent to searches of your person, belongings, or devices
5. Do not sign anything without an attorney present
6. Make note of officer names, badge numbers, and patrol car numbers
7. If injured, request medical attention and document injuries

EMERGENCY LEGAL CONTACTS
----------------------
${profile.contacts.emergencyContacts.map(c => `• ${c.name}: ${c.hotline}`).join('\n')}

CIVIL RIGHTS ORGANIZATIONS
------------------------
${profile.contacts.civilRightsOrgs.map(o => `• ${o.name}: ${o.phone}`).join('\n')}

This information is provided for educational purposes only and does not constitute legal advice.
If you are arrested or detained, consult with a qualified attorney immediately.`;
  };
  
  // Copy Know Your Rights text to clipboard
  const copyKnowYourRightsText = () => {
    const text = generateKnowYourRightsText();
    navigator.clipboard.writeText(text);
    alert('Know Your Rights information copied to clipboard!');
  };
  
  // Print Know Your Rights text
  const printKnowYourRightsText = () => {
    const text = generateKnowYourRightsText();
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>Know Your Rights in ${profile.name}</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.5; padding: 20px; }
            pre { white-space: pre-wrap; }
          </style>
        </head>
        <body>
          <pre>${text}</pre>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };
  
  // Download Know Your Rights text
  const downloadKnowYourRightsText = () => {
    const text = generateKnowYourRightsText();
    const element = document.createElement('a');
    const file = new Blob([text], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `Know_Your_Rights_${profile.name}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
  
  // Generate police complaint template
  const generatePoliceComplaintTemplate = () => {
    if (!profile) return '';
    
    const today = new Date().toLocaleDateString();
    
    return `[Your Name]
[Your Address]
[City, State ZIP]
[Your Phone]
[Your Email]

${today}

[Police Department Name]
[Department Address]
[City, State ZIP]

RE: Formal Complaint Regarding Police Misconduct

To Whom It May Concern:

I am writing to file a formal complaint regarding an incident involving officer(s) of your department. The details are as follows:

Date of Incident: [DATE]
Time of Incident: [TIME]
Location: [LOCATION]
Officer(s) Involved: [OFFICER NAMES AND/OR BADGE NUMBERS, IF KNOWN]

Description of Incident:
[PROVIDE A DETAILED, FACTUAL ACCOUNT OF WHAT HAPPENED. INCLUDE SPECIFIC ACTIONS, STATEMENTS, AND BEHAVIORS OF THE OFFICER(S) THAT WERE PROBLEMATIC.]

Witnesses:
[LIST NAMES AND CONTACT INFORMATION OF ANY WITNESSES, IF APPLICABLE]

Evidence:
[DESCRIBE ANY EVIDENCE YOU HAVE, SUCH AS PHOTOS, VIDEOS, MEDICAL RECORDS, ETC.]

I believe the officer's conduct violated department policy and/or the law in the following ways:
[LIST SPECIFIC POLICIES OR LAWS YOU BELIEVE WERE VIOLATED, IF KNOWN]

I am requesting that this complaint be thoroughly investigated and appropriate action be taken. Please provide me with information about your complaint process, including how the investigation will proceed and when I can expect to receive updates or a response.

I understand that in ${profile.name}, the police complaint process typically involves ${profile.legalInfo.policeAccountability.complaintProcess}.

Please be advised that I am maintaining copies of all correspondence related to this matter. If I do not receive a response within a reasonable timeframe, I will pursue additional remedies, including contacting ${profile.contacts.civilRightsOrgs[0].name} or other appropriate oversight agencies.

Thank you for your prompt attention to this serious matter.

Sincerely,

[YOUR SIGNATURE]
[Your Name]`;
  };
  
  // Copy police complaint template to clipboard
  const copyPoliceComplaintTemplate = () => {
    const template = generatePoliceComplaintTemplate();
    navigator.clipboard.writeText(template);
    alert('Police complaint template copied to clipboard!');
  };
  
  // Print police complaint template
  const printPoliceComplaintTemplate = () => {
    const template = generatePoliceComplaintTemplate();
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>Police Complaint Template - ${profile.name}</title>
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
  
  // Download police complaint template
  const downloadPoliceComplaintTemplate = () => {
    const template = generatePoliceComplaintTemplate();
    const element = document.createElement('a');
    const file = new Blob([template], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `Police_Complaint_Template_${profile.name}.txt`;
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
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Activist Toolkit</h1>
          <p className="text-gray-600 dark:text-gray-300">Resources for organizing in {profile.name}</p>
        </div>
      </div>
      
      {/* Tab navigation */}
      <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
        <nav className="flex flex-wrap -mb-px">
          <button
            onClick={() => setActiveTab('protest-rights')}
            className={`mr-4 py-2 px-1 font-medium text-sm border-b-2 ${
              activeTab === 'protest-rights'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Protest Rights
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
            onClick={() => setActiveTab('templates')}
            className={`mr-4 py-2 px-1 font-medium text-sm border-b-2 ${
              activeTab === 'templates'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Legal Templates
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
        {/* Protest Rights Tab */}
        {activeTab === 'protest-rights' && (
          <div>
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Protest Rights in {profile.name}</h2>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-6">
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">Key Information:</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <span className="font-medium">Permit Requirements:</span> {profile.legalInfo.protestRights.permitRequirements}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <span className="font-medium">Police Interaction:</span> {profile.legalInfo.protestRights.policeInteraction}
              </p>
              {profile.legalInfo.protestRights.recentChanges && (
                <div className="mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-md">
                  <p className="text-sm font-medium text-yellow-800 dark:text-yellow-300">Recent Legal Changes:</p>
                  <p className="text-sm text-yellow-700 dark:text-yellow-400">{profile.legalInfo.protestRights.recentChanges}</p>
                </div>
              )}
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Key Restrictions</h3>
              
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <ul className="space-y-2">
                  {profile.legalInfo.protestRights.restrictions.map((restriction, index) => (
                    <li key={index} className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-yellow-500 dark:text-yellow-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{restriction}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Know Your Rights</h3>
              
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex justify-end space-x-2 mb-3">
                  <button 
                    onClick={copyKnowYourRightsText}
                    className="flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 rounded-md"
                  >
                    <Clipboard className="h-4 w-4 mr-1" />
                    Copy
                  </button>
                  <button 
                    onClick={printKnowYourRightsText}
                    className="flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 rounded-md"
                  >
                    <Printer className="h-4 w-4 mr-1" />
                    Print
                  </button>
                  <button 
                    onClick={downloadKnowYourRightsText}
                    className="flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 rounded-md"
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </button>
                </div>
                
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Right to Protest</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  The First Amendment protects your right to assemble and express your views through protest. 
                  However, police and government officials are allowed to place certain narrow restrictions on the exercise of speech rights.
                </p>
                
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">If You're Stopped by Police</h4>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-1">
                  <li>Stay calm and keep your hands visible</li>
                  <li>Ask if you are free to leave; if yes, calmly walk away</li>
                  <li>You have the right to remain silent</li>
                  <li>You do not have to consent to a search of yourself or your belongings</li>
                  <li>If you are not under arrest, you have the right to leave</li>
                </ul>
                
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">If You're Arrested</h4>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-1">
                  <li>Do not resist arrest, even if you believe the arrest is unfair</li>
                  <li>Say "I wish to remain silent" and ask for a lawyer immediately</li>
                  <li>Do not give any explanations or excuses</li>
                  <li>Do not say anything, sign anything, or make any decisions without a lawyer</li>
                  <li>You have the right to make a local phone call</li>
                  <li>If you're a non-citizen, you have the right to contact your consulate</li>
                </ul>
                
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Your Right to Record</h4>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>You have the right to photograph or record video in any public space</li>
                  <li>Police officers may not confiscate or demand to view your photos or videos without a warrant</li>
                  <li>Police may not delete your photos or videos under any circumstances</li>
                  <li>You may be asked to move to maintain public safety, but recording should not be restricted</li>
                </ul>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Police Accountability</h3>
              
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      <span className="font-medium">Body Cameras:</span> {profile.legalInfo.policeAccountability.bodyCamera}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      <span className="font-medium">Complaint Process:</span> {profile.legalInfo.policeAccountability.complaintProcess}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      <span className="font-medium">Civilian Oversight:</span> {profile.legalInfo.policeAccountability.civilianOversight}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      <span className="font-medium">Records Access:</span> {profile.legalInfo.policeAccountability.recordsAccess}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Recent Incidents</h3>
              
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                {profile.recentIncidents.map((incident, index) => (
                  <div key={index} className="mb-4 last:mb-0 pb-4 last:pb-0 border-b last:border-b-0 border-gray-200 dark:border-gray-700">
                    <div className="flex items-start">
                      <div className="mr-3 mt-1">
                        <AlertTriangle className="h-5 w-5 text-yellow-500 dark:text-yellow-400" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{incident.description}</p>
                        <div className="flex flex-wrap items-center mt-1 text-sm text-gray-600 dark:text-gray-400">
                          <span className="flex items-center mr-3">
                            <Calendar className="h-4 w-4 mr-1" />
                            {incident.date}
                          </span>
                          <span className="flex items-center mr-3">
                            <MapPin className="h-4 w-4 mr-1" />
                            {incident.location}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                          <span className="font-medium">Status:</span> {incident.status}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
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
                Use this checklist when preparing for protests or direct actions in {profile.name}.
                Your selections are saved locally for future reference.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Before Protest Checklist */}
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Before the Protest
                </h3>
                
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={checklist.beforeProtest.knowRights}
                      onChange={(e) => updateChecklist('beforeProtest', 'knowRights', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Know your rights and local laws</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={checklist.beforeProtest.emergencyContact}
                      onChange={(e) => updateChecklist('beforeProtest', 'emergencyContact', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Share your plans with an emergency contact</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={checklist.beforeProtest.buddySystem}
                      onChange={(e) => updateChecklist('beforeProtest', 'buddySystem', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Use the buddy system - don't go alone</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={checklist.beforeProtest.chargedPhone}
                      onChange={(e) => updateChecklist('beforeProtest', 'chargedPhone', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Fully charged phone with emergency numbers</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={checklist.beforeProtest.waterFood}
                      onChange={(e) => updateChecklist('beforeProtest', 'waterFood', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Bring water and snacks</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={checklist.beforeProtest.comfortableClothing}
                      onChange={(e) => updateChecklist('beforeProtest', 'comfortableClothing', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Wear comfortable, weather-appropriate clothing</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={checklist.beforeProtest.idAndMoney}
                      onChange={(e) => updateChecklist('beforeProtest', 'idAndMoney', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Bring ID and some cash</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={checklist.beforeProtest.medications}
                      onChange={(e) => updateChecklist('beforeProtest', 'medications', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Bring necessary medications</span>
                  </label>
                </div>
              </div>
              
              {/* During Protest Checklist */}
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  During the Protest
                </h3>
                
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={checklist.duringProtest.stayCalm}
                      onChange={(e) => updateChecklist('duringProtest', 'stayCalm', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Stay calm and focused</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={checklist.duringProtest.stayTogether}
                      onChange={(e) => updateChecklist('duringProtest', 'stayTogether', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Stay with your group/buddy</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={checklist.duringProtest.documentPolice}
                      onChange={(e) => updateChecklist('duringProtest', 'documentPolice', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Document police interactions if possible</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={checklist.duringProtest.followDirections}
                      onChange={(e) => updateChecklist('duringProtest', 'followDirections', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Follow organizer directions</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={checklist.duringProtest.avoidEscalation}
                      onChange={(e) => updateChecklist('duringProtest', 'avoidEscalation', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Avoid escalation with counter-protesters</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={checklist.duringProtest.knowExits}
                      onChange={(e) => updateChecklist('duringProtest', 'knowExits', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Be aware of exit routes</span>
                  </label>
                </div>
              </div>
              
              {/* If Arrested Checklist */}
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  If Arrested
                </h3>
                
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={checklist.ifArrested.stayCalm}
                      onChange={(e) => updateChecklist('ifArrested', 'stayCalm', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Stay calm and don't resist</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={checklist.ifArrested.stateIntention}
                      onChange={(e) => updateChecklist('ifArrested', 'stateIntention', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">State that you wish to remain silent</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={checklist.ifArrested.remainSilent}
                      onChange={(e) => updateChecklist('ifArrested', 'remainSilent', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Don't answer questions without a lawyer</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={checklist.ifArrested.requestAttorney}
                      onChange={(e) => updateChecklist('ifArrested', 'requestAttorney', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Ask for an attorney immediately</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={checklist.ifArrested.dontResist}
                      onChange={(e) => updateChecklist('ifArrested', 'dontResist', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Don't argue or resist, even if innocent</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={checklist.ifArrested.dontConsent}
                      onChange={(e) => updateChecklist('ifArrested', 'dontConsent', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Don't consent to searches</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={checklist.ifArrested.medicalAttention}
                      onChange={(e) => updateChecklist('ifArrested', 'medicalAttention', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Request medical attention if injured</span>
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
        
        {/* Legal Templates Tab */}
        {activeTab === 'templates' && (
          <div>
            <div className="flex items-center mb-4">
              <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Legal Templates</h2>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-6">
              <p className="text-gray-700 dark:text-gray-300">
                These templates can help you navigate legal situations in {profile.name}. Customize them for your specific situation.
                Always consult with an attorney when possible.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Police Complaint Template</h3>
              
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex justify-end space-x-2 mb-3">
                  <button 
                    onClick={copyPoliceComplaintTemplate}
                    className="flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 rounded-md"
                  >
                    <Clipboard className="h-4 w-4 mr-1" />
                    Copy
                  </button>
                  <button 
                    onClick={printPoliceComplaintTemplate}
                    className="flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 rounded-md"
                  >
                    <Printer className="h-4 w-4 mr-1" />
                    Print
                  </button>
                  <button 
                    onClick={downloadPoliceComplaintTemplate}
                    className="flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 rounded-md"
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </button>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-md font-mono text-sm whitespace-pre-wrap max-h-96 overflow-y-auto">
                  {generatePoliceComplaintTemplate()}
                </div>
                
                <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-md">
                  <p className="text-sm font-medium text-yellow-800 dark:text-yellow-300">Important Notes:</p>
                  <ul className="list-disc list-inside text-sm text-yellow-700 dark:text-yellow-400 space-y-1">
                    <li>Be factual and specific in your complaint</li>
                    <li>Include badge numbers and officer names when possible</li>
                    <li>Describe any witnesses or evidence</li>
                    <li>Keep a copy of your complaint and all correspondence</li>
                    <li>Follow up if you don't receive a response within {profile.name}'s required timeframe</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Other Useful Templates</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Public Records Request</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Use this template to request police reports, body camera footage, or other public records.
                  </p>
                  <button 
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                    onClick={() => alert('This would show a specialized public records request template')}
                  >
                    View Template
                  </button>
                </div>
                
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Property Return Request</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Use this template to request the return of property seized during an arrest or detention.
                  </p>
                  <button 
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                    onClick={() => alert('This would show a property return request template')}
                  >
                    View Template
                  </button>
                </div>
                
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Protest Permit Application</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Use this template to apply for a protest permit in {profile.name}.
                  </p>
                  <button 
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                    onClick={() => alert('This would show a protest permit application template')}
                  >
                    View Template
                  </button>
                </div>
                
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Civil Rights Complaint</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Use this template to file a civil rights complaint with state or federal authorities.
                  </p>
                  <button 
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                    onClick={() => alert('This would show a civil rights complaint template')}
                  >
                    View Template
                  </button>
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
                Save these emergency contacts before participating in protests or direct actions in {profile.name}. 
                Consider writing the most important numbers on your arm with permanent marker.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                </div>
              </div>
              
              {/* Civil Rights Organizations */}
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 dark:text-white mb-3">Civil Rights Organizations</h3>
                
                <div className="space-y-4">
                  {profile.contacts.civilRightsOrgs.map((org, index) => (
                    <div key={index}>
                      <p className="font-medium text-gray-900 dark:text-white">{org.name}</p>
                      <p className="text-gray-600 dark:text-gray-400">{org.phone}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        <a href={org.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">{org.website}</a>
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{org.services.join(', ')}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Legal Aid Organizations */}
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 dark:text-white mb-3">Legal Aid Organizations</h3>
                
                <div className="space-y-4">
                  {profile.contacts.legalAid.map((org, index) => (
                    <div key={index}>
                      <p className="font-medium text-gray-900 dark:text-white">{org.name}</p>
                      <p className="text-gray-600 dark:text-gray-400">{org.phone}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        <a href={org.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">{org.website}</a>
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{org.services.join(', ')}</p>
                    </div>
                  ))}
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
                  
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Street Medics</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Look for protesters with red crosses or medical symbols on their clothing or bags. They are trained to provide first aid at protests.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
              <h3 className="font-medium text-yellow-800 dark:text-yellow-300 mb-2">If You Are Detained or Arrested:</h3>
              <ul className="list-disc list-inside text-yellow-700 dark:text-yellow-400 space-y-1">
                <li>Remain calm and do not resist</li>
                <li>Ask if you are free to leave; if yes, calmly walk away</li>
                <li>If arrested, say "I wish to remain silent" and "I want to speak to an attorney"</li>
                <li>Do not consent to searches of your person, belongings, or devices</li>
                <li>Do not discuss your case with anyone except your attorney</li>
                <li>Make your phone call to an attorney or trusted person who can help arrange legal representation</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivistToolkit;