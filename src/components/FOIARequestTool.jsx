import React, { useState, useEffect } from 'react';
import { FileText, Send, Clock, CheckCircle, AlertTriangle, Download, Search, Filter, Mail, Phone, Building } from 'lucide-react';

const FOIARequestTool = () => {
  const [requestType, setRequestType] = useState('state');
  const [selectedState, setSelectedState] = useState('');
  const [selectedAgency, setSelectedAgency] = useState('');
  const [requestDetails, setRequestDetails] = useState({
    subject: '',
    description: '',
    dateRange: '',
    specificRecords: '',
    format: 'electronic',
    expedited: false,
    feeWaiver: false,
    requesterInfo: {
      name: '',
      email: '',
      phone: '',
      address: '',
      organization: ''
    }
  });
  const [generatedRequest, setGeneratedRequest] = useState('');
  const [savedRequests, setSavedRequests] = useState([]);
  const [showPreview, setShowPreview] = useState(false);

  // State FOIA/Public Records Laws
  const stateLaws = {
    'Alabama': { law: 'Alabama Open Records Act', fee: '$0.25/page', timeframe: '7-10 business days', expedited: 'Available' },
    'Alaska': { law: 'Alaska Public Records Act', fee: '$0.25/page', timeframe: '10 business days', expedited: 'Available' },
    'Arizona': { law: 'Arizona Public Records Law', fee: 'Actual cost', timeframe: 'Prompt', expedited: 'Available' },
    'Arkansas': { law: 'Arkansas FOIA', fee: '$0.25/page', timeframe: '3 business days', expedited: 'Available' },
    'California': { law: 'California Public Records Act', fee: '$0.10/page', timeframe: '10 days', expedited: 'Available' },
    'Colorado': { law: 'Colorado Open Records Act', fee: '$0.25/page', timeframe: '3 business days', expedited: 'Available' },
    'Connecticut': { law: 'Connecticut FOIA', fee: '$0.50/page', timeframe: '4 business days', expedited: 'Available' },
    'Delaware': { law: 'Delaware FOIA', fee: 'Reasonable', timeframe: '15 business days', expedited: 'Available' },
    'Florida': { law: 'Florida Sunshine Law', fee: '$0.15/page', timeframe: 'Reasonable time', expedited: 'Available' },
    'Georgia': { law: 'Georgia Open Records Act', fee: '$0.10/page', timeframe: '3 business days', expedited: 'Available' },
    'Hawaii': { law: 'Hawaii UIPA', fee: 'Actual cost', timeframe: '10 business days', expedited: 'Available' },
    'Idaho': { law: 'Idaho Public Records Law', fee: 'Actual cost', timeframe: '3 business days', expedited: 'Limited' },
    'Illinois': { law: 'Illinois FOIA', fee: '$0.15/page', timeframe: '5 business days', expedited: 'Available' },
    'Indiana': { law: 'Indiana Access to Public Records Act', fee: 'Actual cost', timeframe: '24 hours', expedited: 'Available' },
    'Iowa': { law: 'Iowa Open Records Law', fee: 'Actual cost', timeframe: 'Reasonable time', expedited: 'Available' },
    'Kansas': { law: 'Kansas Open Records Act', fee: 'Actual cost', timeframe: '3 business days', expedited: 'Available' },
    'Kentucky': { law: 'Kentucky Open Records Act', fee: '$0.10/page', timeframe: '3 business days', expedited: 'Available' },
    'Louisiana': { law: 'Louisiana Public Records Law', fee: '$0.25/page', timeframe: '3 business days', expedited: 'Available' },
    'Maine': { law: 'Maine FOIA', fee: 'Actual cost', timeframe: '5 business days', expedited: 'Available' },
    'Maryland': { law: 'Maryland Public Information Act', fee: '$0.36/page', timeframe: '30 days', expedited: 'Available' },
    'Massachusetts': { law: 'Massachusetts Public Records Law', fee: '$0.05/page', timeframe: '10 business days', expedited: 'Available' },
    'Michigan': { law: 'Michigan FOIA', fee: 'Actual cost', timeframe: '5 business days', expedited: 'Available' },
    'Minnesota': { law: 'Minnesota Data Practices Act', fee: 'Actual cost', timeframe: 'Reasonable time', expedited: 'Available' },
    'Mississippi': { law: 'Mississippi Public Records Act', fee: '$0.50/page', timeframe: '7 business days', expedited: 'Limited' },
    'Missouri': { law: 'Missouri Sunshine Law', fee: '$0.10/page', timeframe: '3 business days', expedited: 'Available' },
    'Montana': { law: 'Montana Right to Know Law', fee: 'Actual cost', timeframe: 'Reasonable time', expedited: 'Available' },
    'Nebraska': { law: 'Nebraska Public Records Law', fee: 'Actual cost', timeframe: '4 business days', expedited: 'Available' },
    'Nevada': { law: 'Nevada Public Records Law', fee: 'Actual cost', timeframe: '5 business days', expedited: 'Available' },
    'New Hampshire': { law: 'New Hampshire Right-to-Know Law', fee: '$0.50/page', timeframe: '5 business days', expedited: 'Available' },
    'New Jersey': { law: 'New Jersey OPRA', fee: '$0.05/page', timeframe: '7 business days', expedited: 'Available' },
    'New Mexico': { law: 'New Mexico IPRA', fee: '$1.00/page', timeframe: '3 business days', expedited: 'Available' },
    'New York': { law: 'New York FOIL', fee: '$0.25/page', timeframe: '5 business days', expedited: 'Available' },
    'North Carolina': { law: 'North Carolina Public Records Law', fee: 'Actual cost', timeframe: 'Reasonable time', expedited: 'Available' },
    'North Dakota': { law: 'North Dakota Open Records Law', fee: 'Actual cost', timeframe: '3 business days', expedited: 'Limited' },
    'Ohio': { law: 'Ohio Public Records Act', fee: 'Actual cost', timeframe: 'Reasonable time', expedited: 'Available' },
    'Oklahoma': { law: 'Oklahoma Open Records Act', fee: 'Actual cost', timeframe: '3 business days', expedited: 'Available' },
    'Oregon': { law: 'Oregon Public Records Law', fee: 'Actual cost', timeframe: 'Reasonable time', expedited: 'Available' },
    'Pennsylvania': { law: 'Pennsylvania Right-to-Know Law', fee: '$0.25/page', timeframe: '5 business days', expedited: 'Available' },
    'Rhode Island': { law: 'Rhode Island Access to Public Records Act', fee: '$0.15/page', timeframe: '10 business days', expedited: 'Available' },
    'South Carolina': { law: 'South Carolina FOIA', fee: 'Actual cost', timeframe: '10 business days', expedited: 'Available' },
    'South Dakota': { law: 'South Dakota Open Records Law', fee: 'Actual cost', timeframe: '3 business days', expedited: 'Limited' },
    'Tennessee': { law: 'Tennessee Public Records Act', fee: '$0.15/page', timeframe: '7 business days', expedited: 'Available' },
    'Texas': { law: 'Texas Public Information Act', fee: 'Actual cost', timeframe: '10 business days', expedited: 'Available' },
    'Utah': { law: 'Utah GRAMA', fee: 'Actual cost', timeframe: '10 business days', expedited: 'Available' },
    'Vermont': { law: 'Vermont Public Records Law', fee: '$0.25/page', timeframe: '3 business days', expedited: 'Available' },
    'Virginia': { law: 'Virginia FOIA', fee: 'Actual cost', timeframe: '5 business days', expedited: 'Available' },
    'Washington': { law: 'Washington Public Records Act', fee: '$0.15/page', timeframe: '5 business days', expedited: 'Available' },
    'West Virginia': { law: 'West Virginia FOIA', fee: '$0.50/page', timeframe: '5 business days', expedited: 'Available' },
    'Wisconsin': { law: 'Wisconsin Open Records Law', fee: 'Actual cost', timeframe: 'Reasonable time', expedited: 'Available' },
    'Wyoming': { law: 'Wyoming Public Records Act', fee: 'Actual cost', timeframe: '3 business days', expedited: 'Limited' }
  };

  // Common state agencies
  const stateAgencies = {
    'Police Department': { email: 'records@[city]pd.gov', type: 'Law Enforcement' },
    'Sheriff\'s Office': { email: 'records@[county]sheriff.gov', type: 'Law Enforcement' },
    'State Police': { email: 'foia@[state]statepolice.gov', type: 'Law Enforcement' },
    'Department of Corrections': { email: 'publicrecords@[state]doc.gov', type: 'Corrections' },
    'Attorney General': { email: 'foia@[state]ag.gov', type: 'Legal' },
    'Department of Health': { email: 'records@[state]health.gov', type: 'Health' },
    'Department of Education': { email: 'foia@[state]education.gov', type: 'Education' },
    'Department of Transportation': { email: 'records@[state]dot.gov', type: 'Transportation' },
    'Environmental Agency': { email: 'foia@[state]epa.gov', type: 'Environment' },
    'Public Utilities Commission': { email: 'records@[state]puc.gov', type: 'Utilities' }
  };

  // Federal agencies
  const federalAgencies = {
    'FBI': { 
      email: 'foipa.request@ic.fbi.gov',
      address: 'FBI FOIA/PA Unit, 170 Marcel Drive, Winchester, VA 22602',
      phone: '(540) 868-4593',
      portal: 'https://vault.fbi.gov/@@search'
    },
    'DEA': {
      email: 'DEA.FOIA@usdoj.gov',
      address: 'DEA FOIA Office, 8701 Morrissette Drive, Springfield, VA 22152',
      phone: '(202) 307-7596',
      portal: 'https://www.dea.gov/foia'
    },
    'ICE': {
      email: 'ice-foia@dhs.gov',
      address: 'ICE FOIA Office, 500 12th Street SW, Washington, DC 20536',
      phone: '(866) 633-1182',
      portal: 'https://www.ice.gov/foia'
    },
    'CBP': {
      email: 'foia@cbp.dhs.gov',
      address: 'CBP FOIA Office, 1300 Pennsylvania Avenue NW, Washington, DC 20229',
      phone: '(202) 344-1610',
      portal: 'https://www.cbp.gov/foia'
    },
    'DOJ': {
      email: 'MRUFOIA.Requests@usdoj.gov',
      address: 'DOJ FOIA/PA Mail Referral Unit, 950 Pennsylvania Avenue NW, Washington, DC 20530',
      phone: '(202) 514-3642',
      portal: 'https://www.justice.gov/oip/foia-request'
    },
    'DHS': {
      email: 'foia@hq.dhs.gov',
      address: 'DHS FOIA Office, 245 Murray Lane SW, Washington, DC 20528',
      phone: '(202) 343-1743',
      portal: 'https://www.dhs.gov/foia'
    },
    'ATF': {
      email: 'foiadisclosureoffice@atf.gov',
      address: 'ATF Disclosure Division, 99 New York Avenue NE, Washington, DC 20226',
      phone: '(202) 648-8740',
      portal: 'https://www.atf.gov/foia'
    },
    'US Marshals': {
      email: 'usms.foia@usdoj.gov',
      address: 'USMS FOIA Office, 2604 Jefferson Davis Highway, Alexandria, VA 22301',
      phone: '(202) 307-9054',
      portal: 'https://www.usmarshals.gov/foia'
    }
  };

  const generateRequest = () => {
    const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const agency = requestType === 'federal' ? federalAgencies[selectedAgency] : stateAgencies[selectedAgency];
    const law = requestType === 'federal' ? 'Freedom of Information Act (5 U.S.C. § 552)' : stateLaws[selectedState]?.law;

    let request = `${today}

${requestType === 'federal' ? selectedAgency : `${selectedAgency} - ${selectedState}`}
${agency?.address || '[Agency Address]'}

ATTN: FOIA/Public Records Officer

RE: ${requestType === 'federal' ? 'Freedom of Information Act' : 'Public Records'} Request

Dear FOIA Officer:

Pursuant to the ${law}, I am writing to request access to and copies of the following records:

SUBJECT: ${requestDetails.subject}

DESCRIPTION OF RECORDS REQUESTED:
${requestDetails.description}

${requestDetails.dateRange ? `DATE RANGE: ${requestDetails.dateRange}` : ''}

${requestDetails.specificRecords ? `SPECIFIC RECORDS/IDENTIFIERS:
${requestDetails.specificRecords}` : ''}

PREFERRED FORMAT: ${requestDetails.format === 'electronic' ? 'Electronic format (PDF or native format)' : 'Paper copies'}

${requestDetails.expedited ? `EXPEDITED PROCESSING REQUEST:
I request expedited processing of this request. ${requestType === 'federal' ? 'This request involves a matter of urgency and concerns a matter of widespread and exceptional media interest in which there exist possible questions about the government\'s integrity that affect public confidence.' : 'This request involves a matter of immediate public interest and concern.'}` : ''}

${requestDetails.feeWaiver ? `FEE WAIVER REQUEST:
I request a waiver of all fees associated with this request. ${requestType === 'federal' ? 'Disclosure of the requested information is in the public interest because it is likely to contribute significantly to public understanding of the operations or activities of the government and is not primarily in my commercial interest.' : 'This information will be used for public interest purposes and not for commercial gain.'}` : ''}

${requestType === 'federal' ? `As provided in 5 U.S.C. § 552(a)(6)(A)(i), I expect a response within 20 business days.` : `As provided under ${law}, I expect a response within ${stateLaws[selectedState]?.timeframe || 'the timeframe specified by law'}.`}

If you deny all or any part of this request, please cite each specific exemption you believe justifies your refusal to release the information and notify me of appeal procedures available under the law.

If you have any questions regarding this request, please contact me at:

${requestDetails.requesterInfo.name}
${requestDetails.requesterInfo.organization ? `${requestDetails.requesterInfo.organization}\n` : ''}${requestDetails.requesterInfo.email}
${requestDetails.requesterInfo.phone}
${requestDetails.requesterInfo.address}

Thank you for your prompt attention to this matter.

Sincerely,

${requestDetails.requesterInfo.name}
${requestDetails.requesterInfo.organization || ''}`;

    setGeneratedRequest(request);
    setShowPreview(true);
  };

  const saveRequest = () => {
    const newRequest = {
      id: Date.now(),
      date: new Date().toISOString(),
      type: requestType,
      state: selectedState,
      agency: selectedAgency,
      subject: requestDetails.subject,
      status: 'pending',
      dueDate: calculateDueDate(),
      generatedRequest: generatedRequest
    };
    
    const updated = [...savedRequests, newRequest];
    setSavedRequests(updated);
    localStorage.setItem('foiaRequests', JSON.stringify(updated));
  };

  const calculateDueDate = () => {
    const today = new Date();
    const days = requestType === 'federal' ? 20 : parseInt(stateLaws[selectedState]?.timeframe) || 10;
    today.setDate(today.getDate() + days);
    return today.toLocaleDateString();
  };

  const downloadRequest = () => {
    const blob = new Blob([generatedRequest], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `FOIA_Request_${requestDetails.subject.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedRequest);
    alert('Request copied to clipboard!');
  };

  const sendEmail = () => {
    const agency = requestType === 'federal' ? federalAgencies[selectedAgency] : stateAgencies[selectedAgency];
    const subject = encodeURIComponent(`FOIA Request: ${requestDetails.subject}`);
    const body = encodeURIComponent(generatedRequest);
    window.location.href = `mailto:${agency?.email}?subject=${subject}&body=${body}`;
  };

  useEffect(() => {
    const saved = localStorage.getItem('foiaRequests');
    if (saved) {
      setSavedRequests(JSON.parse(saved));
    }
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'text-yellow-400 bg-yellow-900/30';
      case 'received': return 'text-blue-400 bg-blue-900/30';
      case 'processing': return 'text-purple-400 bg-purple-900/30';
      case 'completed': return 'text-green-400 bg-green-900/30';
      case 'denied': return 'text-red-400 bg-red-900/30';
      default: return 'text-gray-400 bg-gray-900/30';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <FileText className="w-8 h-8 text-blue-400" />
        <div>
          <h2 className="text-2xl font-bold text-white">FOIA/Public Records Request Generator</h2>
          <p className="text-blue-200 text-sm">Automated request generation with state-specific laws and tracking</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Request Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Request Type */}
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-600/30">
            <h3 className="text-lg font-semibold text-white mb-4">1. Select Request Type</h3>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setRequestType('federal')}
                className={`p-4 rounded-lg border transition-colors ${
                  requestType === 'federal'
                    ? 'bg-blue-600/30 border-blue-500/50 text-white'
                    : 'bg-gray-700/50 border-gray-600/30 text-gray-300 hover:bg-gray-600/50'
                }`}
              >
                <Building className="w-6 h-6 mx-auto mb-2" />
                <div className="font-medium">Federal FOIA</div>
                <div className="text-xs text-gray-400">FBI, DEA, ICE, etc.</div>
              </button>
              <button
                onClick={() => setRequestType('state')}
                className={`p-4 rounded-lg border transition-colors ${
                  requestType === 'state'
                    ? 'bg-blue-600/30 border-blue-500/50 text-white'
                    : 'bg-gray-700/50 border-gray-600/30 text-gray-300 hover:bg-gray-600/50'
                }`}
              >
                <Building className="w-6 h-6 mx-auto mb-2" />
                <div className="font-medium">State/Local</div>
                <div className="text-xs text-gray-400">Police, Sheriff, etc.</div>
              </button>
            </div>
          </div>

          {/* Agency Selection */}
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-600/30">
            <h3 className="text-lg font-semibold text-white mb-4">2. Select {requestType === 'federal' ? 'Federal Agency' : 'State & Agency'}</h3>
            
            {requestType === 'state' && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">State</label>
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                >
                  <option value="">Select a state...</option>
                  {Object.keys(stateLaws).map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
                {selectedState && (
                  <div className="mt-2 text-sm text-gray-400">
                    <p><strong>Law:</strong> {stateLaws[selectedState].law}</p>
                    <p><strong>Response Time:</strong> {stateLaws[selectedState].timeframe}</p>
                    <p><strong>Fee:</strong> {stateLaws[selectedState].fee}</p>
                  </div>
                )}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Agency</label>
              <select
                value={selectedAgency}
                onChange={(e) => setSelectedAgency(e.target.value)}
                className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
              >
                <option value="">Select an agency...</option>
                {Object.keys(requestType === 'federal' ? federalAgencies : stateAgencies).map(agency => (
                  <option key={agency} value={agency}>{agency}</option>
                ))}
              </select>
              {selectedAgency && (
                <div className="mt-2 text-sm text-gray-400">
                  {requestType === 'federal' ? (
                    <>
                      <p><strong>Email:</strong> {federalAgencies[selectedAgency].email}</p>
                      <p><strong>Phone:</strong> {federalAgencies[selectedAgency].phone}</p>
                      <p><strong>Portal:</strong> <a href={federalAgencies[selectedAgency].portal} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">{federalAgencies[selectedAgency].portal}</a></p>
                    </>
                  ) : (
                    <p><strong>Type:</strong> {stateAgencies[selectedAgency].type}</p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Request Details */}
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-600/30">
            <h3 className="text-lg font-semibold text-white mb-4">3. Request Details</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject/Title *</label>
                <input
                  type="text"
                  value={requestDetails.subject}
                  onChange={(e) => setRequestDetails({...requestDetails, subject: e.target.value})}
                  placeholder="e.g., Police Body Camera Footage from January 15, 2025"
                  className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Detailed Description *</label>
                <textarea
                  value={requestDetails.description}
                  onChange={(e) => setRequestDetails({...requestDetails, description: e.target.value})}
                  placeholder="Describe the records you're requesting in detail. Be as specific as possible..."
                  rows="4"
                  className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Date Range (Optional)</label>
                <input
                  type="text"
                  value={requestDetails.dateRange}
                  onChange={(e) => setRequestDetails({...requestDetails, dateRange: e.target.value})}
                  placeholder="e.g., January 1, 2025 to January 31, 2025"
                  className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Specific Records/Identifiers (Optional)</label>
                <textarea
                  value={requestDetails.specificRecords}
                  onChange={(e) => setRequestDetails({...requestDetails, specificRecords: e.target.value})}
                  placeholder="Case numbers, incident reports, badge numbers, etc."
                  rows="2"
                  className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Preferred Format</label>
                <select
                  value={requestDetails.format}
                  onChange={(e) => setRequestDetails({...requestDetails, format: e.target.value})}
                  className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                >
                  <option value="electronic">Electronic (PDF/Digital)</option>
                  <option value="paper">Paper Copies</option>
                </select>
              </div>

              <div className="flex gap-4">
                <label className="flex items-center gap-2 text-gray-300">
                  <input
                    type="checkbox"
                    checked={requestDetails.expedited}
                    onChange={(e) => setRequestDetails({...requestDetails, expedited: e.target.checked})}
                    className="w-4 h-4"
                  />
                  <span className="text-sm">Request Expedited Processing</span>
                </label>
                <label className="flex items-center gap-2 text-gray-300">
                  <input
                    type="checkbox"
                    checked={requestDetails.feeWaiver}
                    onChange={(e) => setRequestDetails({...requestDetails, feeWaiver: e.target.checked})}
                    className="w-4 h-4"
                  />
                  <span className="text-sm">Request Fee Waiver</span>
                </label>
              </div>
            </div>
          </div>

          {/* Requester Information */}
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-600/30">
            <h3 className="text-lg font-semibold text-white mb-4">4. Your Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                <input
                  type="text"
                  value={requestDetails.requesterInfo.name}
                  onChange={(e) => setRequestDetails({
                    ...requestDetails,
                    requesterInfo: {...requestDetails.requesterInfo, name: e.target.value}
                  })}
                  className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                <input
                  type="email"
                  value={requestDetails.requesterInfo.email}
                  onChange={(e) => setRequestDetails({
                    ...requestDetails,
                    requesterInfo: {...requestDetails.requesterInfo, email: e.target.value}
                  })}
                  className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                <input
                  type="tel"
                  value={requestDetails.requesterInfo.phone}
                  onChange={(e) => setRequestDetails({
                    ...requestDetails,
                    requesterInfo: {...requestDetails.requesterInfo, phone: e.target.value}
                  })}
                  className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Organization (Optional)</label>
                <input
                  type="text"
                  value={requestDetails.requesterInfo.organization}
                  onChange={(e) => setRequestDetails({
                    ...requestDetails,
                    requesterInfo: {...requestDetails.requesterInfo, organization: e.target.value}
                  })}
                  placeholder="e.g., WTPNews.org"
                  className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">Mailing Address</label>
                <textarea
                  value={requestDetails.requesterInfo.address}
                  onChange={(e) => setRequestDetails({
                    ...requestDetails,
                    requesterInfo: {...requestDetails.requesterInfo, address: e.target.value}
                  })}
                  rows="2"
                  className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={generateRequest}
            disabled={!requestDetails.subject || !requestDetails.description || !selectedAgency || (requestType === 'state' && !selectedState)}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 text-lg font-semibold"
          >
            <FileText className="w-5 h-5" />
            Generate FOIA Request
          </button>
        </div>

        {/* Saved Requests Sidebar */}
        <div className="space-y-6">
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-600/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-400" />
              Saved Requests ({savedRequests.length})
            </h3>
            
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {savedRequests.length === 0 ? (
                <p className="text-gray-400 text-sm text-center py-4">No saved requests yet</p>
              ) : (
                savedRequests.map(request => (
                  <div key={request.id} className="bg-gray-700/50 p-3 rounded border border-gray-600/30">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-white text-sm">{request.subject}</h4>
                      <span className={`text-xs px-2 py-1 rounded ${getStatusColor(request.status)}`}>
                        {request.status}
                      </span>
                    </div>
                    <div className="text-xs text-gray-400 space-y-1">
                      <p>{request.agency} - {request.state || 'Federal'}</p>
                      <p>Filed: {new Date(request.date).toLocaleDateString()}</p>
                      <p>Due: {request.dueDate}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg border border-gray-600 max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            <div className="p-6 border-b border-gray-600">
              <h3 className="text-xl font-semibold text-white">Generated FOIA Request</h3>
            </div>
            
            <div className="p-6 overflow-y-auto flex-1">
              <pre className="text-gray-300 text-sm whitespace-pre-wrap font-mono bg-gray-900/50 p-4 rounded">
                {generatedRequest}
              </pre>
            </div>

            <div className="p-6 border-t border-gray-600 flex gap-4">
              <button
                onClick={downloadRequest}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download
              </button>
              <button
                onClick={copyToClipboard}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                Copy
              </button>
              <button
                onClick={sendEmail}
                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Email
              </button>
              <button
                onClick={() => {
                  saveRequest();
                  alert('Request saved to tracking!');
                }}
                className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Save & Track
              </button>
              <button
                onClick={() => setShowPreview(false)}
                className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FOIARequestTool;