import React, { useState, useEffect } from ‘react’;

const statePublicRecordsData = {
AL: { name: ‘Alabama’, statute: ‘Alabama Open Records Act (Code of Alabama § 36-12-40)’, timeLimit: ‘7-10 business days’ },
AK: { name: ‘Alaska’, statute: ‘Alaska Public Records Act (AS § 40.25.110-40.25.220)’, timeLimit: ‘10 business days’ },
AZ: { name: ‘Arizona’, statute: ‘Arizona Public Records Law (A.R.S. § 39-121)’, timeLimit: ‘Promptly (no specific timeframe)’ },
AR: { name: ‘Arkansas’, statute: ‘Arkansas Freedom of Information Act (A.C.A. § 25-19-101)’, timeLimit: ‘3 business days’ },
CA: { name: ‘California’, statute: ‘California Public Records Act (Government Code § 6250)’, timeLimit: ‘10 calendar days’ },
CO: { name: ‘Colorado’, statute: ‘Colorado Open Records Act (C.R.S. § 24-72-201)’, timeLimit: ‘3 business days’ },
CT: { name: ‘Connecticut’, statute: ‘Connecticut Freedom of Information Act (C.G.S. § 1-200)’, timeLimit: ‘4 business days’ },
DE: { name: ‘Delaware’, statute: ‘Delaware Freedom of Information Act (29 Del. C. § 10001)’, timeLimit: ‘15 business days’ },
FL: { name: ‘Florida’, statute: ‘Florida Sunshine Law (F.S. § 119.01)’, timeLimit: ‘Reasonable time (typically within days)’ },
GA: { name: ‘Georgia’, statute: ‘Georgia Open Records Act (O.C.G.A. § 50-18-70)’, timeLimit: ‘3 business days’ },
HI: { name: ‘Hawaii’, statute: ‘Hawaii Uniform Information Practices Act (HRS § 92F)’, timeLimit: ‘10 business days’ },
ID: { name: ‘Idaho’, statute: ‘Idaho Public Records Act (Idaho Code § 74-101)’, timeLimit: ‘3 business days’ },
IL: { name: ‘Illinois’, statute: ‘Illinois Freedom of Information Act (5 ILCS 140/)’, timeLimit: ‘5 business days’ },
IN: { name: ‘Indiana’, statute: ‘Indiana Access to Public Records Act (IC § 5-14-3)’, timeLimit: ‘24 hours (for documents readily available)’ },
IA: { name: ‘Iowa’, statute: ‘Iowa Open Records Law (Iowa Code § 22)’, timeLimit: ‘As soon as reasonably possible’ },
KS: { name: ‘Kansas’, statute: ‘Kansas Open Records Act (K.S.A. § 45-215)’, timeLimit: ‘3 business days’ },
KY: { name: ‘Kentucky’, statute: ‘Kentucky Open Records Act (KRS § 61.870)’, timeLimit: ‘3 business days’ },
LA: { name: ‘Louisiana’, statute: ‘Louisiana Public Records Act (R.S. 44:1)’, timeLimit: ‘3 business days’ },
ME: { name: ‘Maine’, statute: ‘Maine Freedom of Access Act (1 M.R.S. § 401)’, timeLimit: ‘Reasonable time’ },
MD: { name: ‘Maryland’, statute: ‘Maryland Public Information Act (GP § 4-101)’, timeLimit: ‘30 days’ },
MA: { name: ‘Massachusetts’, statute: ‘Massachusetts Public Records Law (M.G.L. c. 66)’, timeLimit: ‘10 business days’ },
MI: { name: ‘Michigan’, statute: ‘Michigan Freedom of Information Act (MCL § 15.231)’, timeLimit: ‘5 business days’ },
MN: { name: ‘Minnesota’, statute: ‘Minnesota Data Practices Act (M.S. § 13.01)’, timeLimit: ‘Immediately (if readily available)’ },
MS: { name: ‘Mississippi’, statute: ‘Mississippi Public Records Act (Miss. Code § 25-61-1)’, timeLimit: ‘7 business days’ },
MO: { name: ‘Missouri’, statute: ‘Missouri Sunshine Law (R.S.Mo. § 610.010)’, timeLimit: ‘3 business days’ },
MT: { name: ‘Montana’, statute: ‘Montana Right to Know Act (MCA § 2-6-101)’, timeLimit: ‘Reasonable time’ },
NE: { name: ‘Nebraska’, statute: ‘Nebraska Public Records Statutes (Neb. Rev. Stat. § 84-712)’, timeLimit: ‘4 business days’ },
NV: { name: ‘Nevada’, statute: ‘Nevada Public Records Act (NRS § 239)’, timeLimit: ‘5 business days’ },
NH: { name: ‘New Hampshire’, statute: ‘New Hampshire Right-to-Know Law (RSA § 91-A)’, timeLimit: ‘5 business days’ },
NJ: { name: ‘New Jersey’, statute: ‘New Jersey Open Public Records Act (N.J.S.A. § 47:1A-1)’, timeLimit: ‘7 business days’ },
NM: { name: ‘New Mexico’, statute: ‘New Mexico Inspection of Public Records Act (NMSA § 14-2-1)’, timeLimit: ‘3 business days’ },
NY: { name: ‘New York’, statute: ‘New York Freedom of Information Law (Public Officers Law § 84)’, timeLimit: ‘5 business days’ },
NC: { name: ‘North Carolina’, statute: ‘North Carolina Public Records Law (N.C.G.S. § 132-1)’, timeLimit: ‘As promptly as possible’ },
ND: { name: ‘North Dakota’, statute: ‘North Dakota Open Records Statute (NDCC § 44-04-18)’, timeLimit: ‘3 business days’ },
OH: { name: ‘Ohio’, statute: ‘Ohio Public Records Act (R.C. § 149.43)’, timeLimit: ‘Promptly (typically within days)’ },
OK: { name: ‘Oklahoma’, statute: ‘Oklahoma Open Records Act (51 O.S. § 24A.1)’, timeLimit: ‘5 business days’ },
OR: { name: ‘Oregon’, statute: ‘Oregon Public Records Law (ORS § 192.410)’, timeLimit: ‘Reasonable time’ },
PA: { name: ‘Pennsylvania’, statute: ‘Pennsylvania Right-to-Know Law (65 P.S. § 67.101)’, timeLimit: ‘5 business days’ },
RI: { name: ‘Rhode Island’, statute: ‘Rhode Island Access to Public Records Act (R.I.G.L. § 38-2-1)’, timeLimit: ‘10 business days’ },
SC: { name: ‘South Carolina’, statute: ‘South Carolina Freedom of Information Act (S.C. Code § 30-4-10)’, timeLimit: ‘15 business days’ },
SD: { name: ‘South Dakota’, statute: ‘South Dakota Sunshine Law (SDCL § 1-27-1)’, timeLimit: ‘Reasonable time’ },
TN: { name: ‘Tennessee’, statute: ‘Tennessee Public Records Act (T.C.A. § 10-7-503)’, timeLimit: ‘7 business days’ },
TX: { name: ‘Texas’, statute: ‘Texas Public Information Act (Govt Code § 552.001)’, timeLimit: ‘10 business days’ },
UT: { name: ‘Utah’, statute: ‘Utah Government Records Access and Management Act (Utah Code § 63G-2-101)’, timeLimit: ‘5-10 business days’ },
VT: { name: ‘Vermont’, statute: ‘Vermont Public Records Act (1 V.S.A. § 315)’, timeLimit: ‘3 business days’ },
VA: { name: ‘Virginia’, statute: ‘Virginia Freedom of Information Act (Va. Code § 2.2-3700)’, timeLimit: ‘5 business days’ },
WA: { name: ‘Washington’, statute: ‘Washington Public Records Act (RCW § 42.56)’, timeLimit: ‘5 business days’ },
WV: { name: ‘West Virginia’, statute: ‘West Virginia Freedom of Information Act (W. Va. Code § 29B-1-1)’, timeLimit: ‘5 business days’ },
WI: { name: ‘Wisconsin’, statute: ‘Wisconsin Open Records Law (Wis. Stat. § 19.31)’, timeLimit: ‘As soon as practicable’ },
WY: { name: ‘Wyoming’, statute: ‘Wyoming Public Records Act (Wyo. Stat. § 16-4-201)’, timeLimit: ‘3 business days’ },
DC: { name: ‘District of Columbia’, statute: ‘DC Freedom of Information Act (DC Code § 2-531)’, timeLimit: ‘15 business days’ }
};

const LegalToolkit = () => {
const [documentType, setDocumentType] = useState(‘FOIA Request’);
const [agency, setAgency] = useState(’’);
const [selectedState, setSelectedState] = useState(’’);
const [jurisdiction, setJurisdiction] = useState(’’);
const [incident, setIncident] = useState(’’);
const [generatedLetter, setGeneratedLetter] = useState(’’);
const [timeLimit, setTimeLimit] = useState(’’);
const [statute, setStatute] = useState(’’);

useEffect(() => {
if (selectedState && statePublicRecordsData[selectedState]) {
const stateData = statePublicRecordsData[selectedState];
setJurisdiction(stateData.name);
setTimeLimit(stateData.timeLimit);
setStatute(stateData.statute);
} else {
setJurisdiction(’’);
setTimeLimit(’’);
setStatute(’’);
}
}, [selectedState]);

const generateLetter = () => {
const today = new Date().toLocaleDateString();

```
let letter = '';

if (documentType === 'FOIA Request') {
  letter = `[Your Name]
```

[Your Address]
[City, State, ZIP Code]
[Email Address]
[Phone Number]

${today}

${agency}
FOIA Officer
[Agency Address]

Re: Freedom of Information Act Request

Dear FOIA Officer:

Pursuant to the Freedom of Information Act, 5 U.S.C. § 552, and any applicable state public records laws${selectedState ? ` including the ${statute}` : ‘’}, I hereby request access to and copies of the following records:

SUBJECT MATTER: ${incident || ‘[Please describe the specific records you are seeking]’}

JURISDICTION: ${jurisdiction || ‘[Specify the relevant jurisdiction]’}

${selectedState ? `APPLICABLE STATE LAW: This request is also made under ${statute}, which provides for disclosure of public records within ${timeLimit}.` : ‘’}

REQUEST SPECIFICATIONS:

- Time Period: [Specify dates or time range]
- Record Types: [Specify types of documents - emails, reports, policies, etc.]
- Individuals/Entities: [Name specific people or departments if applicable]

This request seeks records regardless of format, including but not limited to: paper documents, electronic files, emails, text messages, audio recordings, video recordings, photographs, databases, and any other media containing the requested information.

I request that fees be waived as this request is in the public interest and will contribute significantly to public understanding of government operations. If fees cannot be waived entirely, please contact me if costs will exceed $25.00.

If any portion of this request is denied, please specify which exemption applies and provide a detailed justification. If records are partially redacted, please provide all non-exempt portions.

${selectedState ? `Please note that under ${statute}, you are required to respond within ${timeLimit}.` : ‘Please respond within the statutorily required timeframe.’}

I look forward to your prompt response. Please contact me if you need clarification or additional information.

Sincerely,

[Your Signature]
[Your Printed Name]

-----

DELIVERY METHOD: [Check appropriate method]
☐ Email
☐ Certified Mail, Return Receipt Requested
☐ Hand Delivery
☐ Regular Mail

FOLLOW-UP TRACKING:
Request Date: ${today}
${selectedState ? `Response Due: [Calculate based on ${timeLimit}]` : ‘Response Due: [Calculate based on applicable law]’}
Reference Number: [Agency will provide]`;
}

```
setGeneratedLetter(letter);
```

};

return (
React.createElement(‘div’, { style: {
minHeight: ‘100vh’,
background: ‘linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)’,
fontFamily: ‘Arial, sans-serif’,
padding: ‘20px’
}},
React.createElement(‘div’, { style: {
maxWidth: ‘800px’,
margin: ‘0 auto’,
backgroundColor: ‘rgba(255, 255, 255, 0.95)’,
borderRadius: ‘15px’,
padding: ‘30px’,
boxShadow: ‘0 8px 32px rgba(0, 0, 0, 0.1)’
}},
React.createElement(‘h1’, { style: {
color: ‘#1e3c72’,
textAlign: ‘center’,
marginBottom: ‘30px’,
fontSize: ‘2.5rem’,
fontWeight: ‘bold’
}}, ‘Legal Toolkit’),

```
    React.createElement('div', { style: { marginBottom: '25px' }}, 
      React.createElement('label', { style: { 
        display: 'block', 
        marginBottom: '8px', 
        fontWeight: 'bold',
        color: '#2c3e50',
        fontSize: '1.1rem'
      }}, 'Document Type:'),
      React.createElement('select', { 
        value: documentType,
        onChange: (e) => setDocumentType(e.target.value),
        style: { 
          width: '100%', 
          padding: '12px', 
          border: '2px solid #3498db',
          borderRadius: '8px',
          fontSize: '16px',
          color: '#000000',
          backgroundColor: '#ffffff'
        }
      }, 
        React.createElement('option', { value: 'FOIA Request' }, 'FOIA Request'),
        React.createElement('option', { value: 'State Public Records Request' }, 'State Public Records Request'),
        React.createElement('option', { value: 'Subpoena Duces Tecum' }, 'Subpoena Duces Tecum'),
        React.createElement('option', { value: 'Discovery Request' }, 'Discovery Request')
      )
    ),

    React.createElement('div', { style: { marginBottom: '25px' }}, 
      React.createElement('label', { style: { 
        display: 'block', 
        marginBottom: '8px', 
        fontWeight: 'bold',
        color: '#2c3e50',
        fontSize: '1.1rem'
      }}, 'State/Jurisdiction:'),
      React.createElement('select', { 
        value: selectedState,
        onChange: (e) => setSelectedState(e.target.value),
        style: { 
          width: '100%', 
          padding: '12px', 
          border: '2px solid #3498db',
          borderRadius: '8px',
          fontSize: '16px',
          color: '#000000',
          backgroundColor: '#ffffff'
        }
      }, 
        React.createElement('option', { value: '' }, 'Select a state...'),
        Object.entries(statePublicRecordsData).map(([code, data]) => 
          React.createElement('option', { key: code, value: code }, data.name)
        )
      )
    ),

    selectedState && React.createElement('div', null,
      React.createElement('div', { style: { marginBottom: '25px' }}, 
        React.createElement('label', { style: { 
          display: 'block', 
          marginBottom: '8px', 
          fontWeight: 'bold',
          color: '#2c3e50',
          fontSize: '1.1rem'
        }}, 'Applicable Statute:'),
        React.createElement('input', {
          type: 'text',
          value: statute,
          readOnly: true,
          style: { 
            width: '100%', 
            padding: '12px', 
            border: '2px solid #27ae60',
            borderRadius: '8px',
            fontSize: '16px',
            color: '#000000',
            backgroundColor: '#e8f5e8'
          }
        })
      ),

      React.createElement('div', { style: { marginBottom: '25px' }}, 
        React.createElement('label', { style: { 
          display: 'block', 
          marginBottom: '8px', 
          fontWeight: 'bold',
          color: '#2c3e50',
          fontSize: '1.1rem'
        }}, 'Statutory Response Time:'),
        React.createElement('input', {
          type: 'text',
          value: timeLimit,
          readOnly: true,
          style: { 
            width: '100%', 
            padding: '12px', 
            border: '2px solid #27ae60',
            borderRadius: '8px',
            fontSize: '16px',
            color: '#000000',
            backgroundColor: '#e8f5e8'
          }
        })
      )
    ),

    React.createElement('div', { style: { marginBottom: '25px' }}, 
      React.createElement('label', { style: { 
        display: 'block', 
        marginBottom: '8px', 
        fontWeight: 'bold',
        color: '#2c3e50',
        fontSize: '1.1rem'
      }}, 'Agency/Recipient:'),
      React.createElement('input', {
        type: 'text',
        value: agency,
        onChange: (e) => setAgency(e.target.value),
        placeholder: 'Enter the name of the agency or department',
        style: { 
          width: '100%', 
          padding: '12px', 
          border: '2px solid #3498db',
          borderRadius: '8px',
          fontSize: '16px',
          color: '#000000',
          backgroundColor: '#ffffff'
        }
      })
    ),

    React.createElement('div', { style: { marginBottom: '25px' }}, 
      React.createElement('label', { style: { 
        display: 'block', 
        marginBottom: '8px', 
        fontWeight: 'bold',
        color: '#2c3e50',
        fontSize: '1.1rem'
      }}, 'Jurisdiction:'),
      React.createElement('input', {
        type: 'text',
        value: jurisdiction,
        onChange: (e) => setJurisdiction(e.target.value),
        placeholder: 'Will auto-populate based on state selection',
        style: { 
          width: '100%', 
          padding: '12px', 
          border: selectedState ? '2px solid #27ae60' : '2px solid #3498db',
          borderRadius: '8px',
          fontSize: '16px',
          color: '#000000',
          backgroundColor: selectedState ? '#e8f5e8' : '#ffffff'
        }
      })
    ),

    React.createElement('div', { style: { marginBottom: '25px' }}, 
      React.createElement('label', { style: { 
        display: 'block', 
        marginBottom: '8px', 
        fontWeight: 'bold',
        color: '#2c3e50',
        fontSize: '1.1rem'
      }}, 'Incident or Subject:'),
      React.createElement('textarea', {
        value: incident,
        onChange: (e) => setIncident(e.target.value),
        placeholder: 'Describe the specific records, incident, or subject matter you are requesting...',
        style: { 
          width: '100%', 
          height: '120px',
          padding: '12px', 
          border: '2px solid #3498db',
          borderRadius: '8px',
          fontSize: '16px',
          color: '#000000',
          backgroundColor: '#ffffff',
          resize: 'vertical'
        }
      })
    ),

    React.createElement('button', { 
      onClick: generateLetter,
      style: { 
        width: '100%',
        padding: '15px',
        backgroundColor: '#3498db',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontSize: '18px',
        fontWeight: 'bold',
        cursor: 'pointer',
        marginBottom: '25px'
      }
    }, 'Generate Letter'),

    generatedLetter && React.createElement('div', { style: { marginTop: '25px' }}, 
      React.createElement('label', { style: { 
        display: 'block', 
        marginBottom: '8px', 
        fontWeight: 'bold',
        color: '#2c3e50',
        fontSize: '1.1rem'
      }}, 'Generated Document:'),
      React.createElement('textarea', {
        value: generatedLetter,
        onChange: (e) => setGeneratedLetter(e.target.value),
        style: { 
          width: '100%', 
          height: '400px',
          padding: '15px', 
          border: '2px solid #27ae60',
          borderRadius: '8px',
          fontSize: '14px',
          color: '#000000',
          backgroundColor: '#ffffff',
          fontFamily: 'monospace',
          lineHeight: '1.4',
          resize: 'vertical'
        }
      }),
      React.createElement('div', { style: { marginTop: '10px', textAlign: 'center' }}, 
        React.createElement('button', { 
          onClick: () => navigator.clipboard.writeText(generatedLetter),
          style: { 
            padding: '10px 20px',
            backgroundColor: '#27ae60',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer',
            marginRight: '10px'
          }
        }, 'Copy to Clipboard'),
        React.createElement('button', { 
          onClick: () => {
            const blob = new Blob([generatedLetter], { type: 'text/plain' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${documentType.replace(/\s+/g, '_')}_${today.replace(/\//g, '-')}.txt`;
            a.click();
            window.URL.revokeObjectURL(url);
          },
          style: { 
            padding: '10px 20px',
            backgroundColor: '#8e44ad',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer'
          }
        }, 'Download as Text File')
      )
    )
  )
)
```

);
};

export default LegalToolkit;