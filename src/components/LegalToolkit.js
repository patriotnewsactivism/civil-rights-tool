import { useState } from 'react';

export default function LegalToolkit() {
  const [type, setType] = useState('foia');
  const [agency, setAgency] = useState('');
  const [jurisdiction, setJurisdiction] = useState('');
  const [incident, setIncident] = useState('');
  const [deadline, setDeadline] = useState('');
  const [output, setOutput] = useState('');

  const generateLetter = () => {
    let letter = '';
    if (type === 'foia') {
      letter = `To ${agency},\n\nUnder the Freedom of Information Act and applicable ${jurisdiction} law, I request access to records concerning ${incident}.\n\nPlease provide all responsive documents within the statutory timeframe.\n\nThank you,\n`;
    } else if (type === 'cease') {
      letter = `To ${agency},\n\nThis letter serves as a formal demand to immediately cease and desist all actions related to ${incident}.\n\nFailure to comply may result in legal action.\n\nSincerely,\n`;
    } else {
      // Demand letter
      const dateLine = deadline ? ` by ${deadline}` : '';
      letter = `To ${agency},\n\nI am writing to demand the release of records and information concerning ${incident} under applicable public records laws in ${jurisdiction}. Please provide these materials${dateLine}.\n\nThank you,\n`;
    }
    setOutput(letter);
  };

  const copyOutput = () => {
    if (output) {
      navigator.clipboard.writeText(output);
      alert('Letter copied to clipboard!');
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Legal Toolkit</h1>
      <label className="block mb-2">Document Type:</label>
      <select value={type} onChange={(e) => setType(e.target.value)} className="border p-2 mb-4 w-full">
        <option value="foia">FOIA Request</option>
        <option value="cease">Cease &amp; Desist</option>
        <option value="demand">Demand Letter</option>
      </select>
      <label className="block mb-2">Agency/Recipient:</label>
      <input value={agency} onChange={(e) => setAgency(e.target.value)} className="border p-2 mb-4 w-full" />
      <label className="block mb-2">Jurisdiction:</label>
      <input value={jurisdiction} onChange={(e) => setJurisdiction(e.target.value)} className="border p-2 mb-4 w-full" />
      <label className="block mb-2">Incident or Subject:</label>
      <textarea value={incident} onChange={(e) => setIncident(e.target.value)} className="border p-2 mb-4 w-full" rows="3" />
      {type === 'demand' && (
        <>
          <label className="block mb-2">Deadline (optional):</label>
          <input value={deadline} onChange={(e) => setDeadline(e.target.value)} className="border p-2 mb-4 w-full" />
        </>
      )}
      <button onClick={generateLetter} className="bg-blue-600 text-white px-4 py-2 mb-4">Generate Letter</button>
      <textarea readOnly value={output} className="border p-2 mb-2 w-full" rows="8" />
      <button onClick={copyOutput} className="bg-green-600 text-white px-4 py-2">Copy to Clipboard</button>
    </div>
  );
}
