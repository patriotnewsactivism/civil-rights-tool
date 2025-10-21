import React, { useReducer, useEffect, useRef, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import Button from './ui/Button';
import { Copy, Download, FileText, Contact, Printer, RefreshCw, AlertTriangle, BookOpen } from 'lucide-react';
import { 
  ALL_STATES, 
  PUBLIC_RECORDS, 
  STOP_AND_ID, 
  CANNABIS, 
  NOTICE_RULES, 
  HOSTILE_STATES,
  addBusinessDays,
  coveragePercent 
} from '../data/legalDatasets';
import { generateActivistToolkitPDF, generateIDCardPDF } from '../utils/pdfGenerator';

// Document type definitions
const DOC_TYPES = [
  "FOIA Request",
  "State Public Records Request", 
  "ID Rights Card",
  "Cease and Desist Letter",
  "Notice of Claim",
  "Pre-Suit Notice",
  "Subpoena Duces Tecum",
  "Discovery Request"
];

const VIOLATION_TYPES = [
  "harassment",
  "intellectual_property", 
  "debt_collection",
  "trespass",
  "defamation",
  "contract",
  "privacy"
];

const CLAIM_TYPES = ["general", "government", "medical"];

// Initial state
const initialState = {
  documentType: "FOIA Request",
  agency: "",
  selectedState: "",
  jurisdiction: "",
  incident: "",
  recipient: "",
  damages: "",
  violationType: "harassment",
  claimType: "general", 
  plaintiffName: "",
  defendantName: "",
  caseNumber: "",
  courtName: "",
  timeLimit: "",
  statute: "",
  generated: ""
};

// Reducer for state management
function reducer(state, action) {
  switch(action.type) {
    case "set":
      return { ...state, [action.key]: action.value };
    case "hydrate":
      return { ...state, ...action.payload };
    case "generate":
      return { ...state, generated: action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

// Helper functions
const fmtDate = (d = new Date()) => d.toLocaleDateString();

function copyToClipboard(text) {
  return navigator.clipboard.writeText(text);
}

function downloadText(filename, contents) {
  const blob = new Blob([contents], {type: "text/plain;charset=utf-8"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

// Document generators
function generateFOIARequest(params) {
  const { today, agency, selectedState, statute, timeLimit, incident, jurisdiction, stateUpdates } = params;
  const stateLaw = selectedState && statute && timeLimit ? ` including the ${statute}` : "";
  const stateClause = selectedState && statute && timeLimit ? `APPLICABLE STATE LAW: This request is also made under ${statute}, which provides for disclosure within ${timeLimit}.` : "";
  const updates = stateUpdates ? `\n\nLEGISLATIVE UPDATE: ${stateUpdates}` : "";
  
  return `[Your Name]
[Your Address]
[City, State, ZIP Code]
[Email Address]
[Phone Number]

${today}

${agency || "[Agency Name]"}
FOIA Officer / Records Custodian
[Agency Address]
[City, State, ZIP Code]

Re: Freedom of Information Act Request — EXPEDITED PROCESSING REQUESTED

Dear FOIA Officer:

Pursuant to the Freedom of Information Act, 5 U.S.C. § 552, and any applicable state public records laws${stateLaw}, I request access to and copies of the following records:

SUBJECT MATTER: ${incident || "[Describe the specific records sought with maximum specificity]"}

JURISDICTION: ${jurisdiction || "[Specify the relevant jurisdiction]"}

${stateClause}${updates}

DETAILED REQUEST SPECIFICATIONS:
- Time Period: [Specify exact dates]
- Record Types: emails, reports, policies, audio/video, databases, metadata
- Individuals/Entities: [Name people/departments]
- Keywords: [Search terms, case numbers]
- Format: Electronic (searchable PDFs/native with metadata)

PUBLIC INTEREST & FEE WAIVER REQUEST: I request a fee waiver...

SEGREGABILITY & PARTIAL DISCLOSURE: If any portion is denied...

PRESERVATION NOTICE: Preserve all responsive records.

${selectedState && timeLimit ? `RESPONSE TIMEFRAME: Under ${statute}, a response is due within ${timeLimit}.` : `Please respond within the statutory timeframe and acknowledge receipt.`}

Sincerely,
[Your Name]`;
}

function generateCeaseDesistLetter(params) {
  const { today, selectedState, stateNotice, recipient, violationType, incident, jurisdiction, damages } = params;
  
  const stateSection = (() => {
    if(!stateNotice) return "";
    let s = `\n\nSTATE-SPECIFIC REQUIREMENTS: ${stateNotice.requirements}`;
    if(stateNotice.mandatoryNotice) s += `\n\nMANDATORY NOTICE PERIOD: ${stateNotice.mandatoryNotice}`;
    if(stateNotice.penalties) s += `\n\nSTATUTORY PENALTIES: ${stateNotice.penalties}`;
    return s;
  })();
  
  const blocks = {
    harassment: "• Harassment/IIED/Stalking • Privacy • Civil rights (42 U.S.C. § 1983)",
    intellectual_property: "• Copyright • Trademark/Lanham • DMCA • Trade secrets",
    debt_collection: "• FDCPA • FCRA • TCPA • State licensing • UDAP",
    trespass: "• Trespass • Nuisance • Privacy • Interference with business",
    defamation: "• Defamation (libel/slander) • False light • Trade libel",
    contract: "• Breach • Good faith/fair dealing • Estoppel • Unjust enrichment",
    privacy: "• Intrusion • Public disclosure • Appropriation • ECPA • State privacy acts",
  };
  
  return `[Your Name]
[Your Address]
[City, State ZIP]
[Email] | [Phone]

${today}

${recipient || "[Recipient Name]"}
[Recipient Address]

RE: FORMAL CEASE AND DESIST — ${violationType.toUpperCase()} VIOLATIONS
${jurisdiction ? `JURISDICTION: ${jurisdiction}` : ""}

Dear ${recipient || "[Recipient]"}:

You are hereby notified to immediately CEASE AND DESIST from the following unlawful activities:

SPECIFIC VIOLATIONS:
${incident || "[Provide detailed description — dates/times/locations/witnesses]"}

LEGAL BASIS:
${blocks[violationType]}${stateSection}

DEMAND: (1) Cease all activities; (2) Remove infringing/false materials; (3) Confirm compliance within ${stateNotice?.mandatoryNotice || "10 business days"}.

EVIDENCE: [List]
DAMAGES/HARM: ${damages || "[Monetary/reputational/emotional/fees]"}

CONSEQUENCES: Civil action (damages; injunction) • Penalties where applicable • Regulatory complaints

No rights are waived.

Sincerely,
[Your Name]`;
}

function generateNoticeOfClaim(params) {
  const { today, gov, plaintiff, defendant, incident, jurisdiction } = params;
  return `NOTICE OF CLAIM

Date: ${today}
Jurisdiction: ${jurisdiction || "[Jurisdiction]"}
Claimant: ${plaintiff || "[Plaintiff]"}
Respondent: ${defendant || "[Defendant]"}
Time Limit: ${gov?.timeLimit || "[See statute]"}
Statute: ${gov?.statute || "[Statute]"}

FACTS: ${incident || "[Describe incident with dates/locations/damages]"}

DEMAND: Preserve evidence; acknowledge receipt; advise on claim processing.`;
}

function generatePreSuitNotice(params) {
  const { today, med, plaintiff, defendant, incident } = params;
  return `PRE‑SUIT NOTICE (Medical)

Date: ${today}
Plaintiff: ${plaintiff || "[Plaintiff]"}
Defendant: ${defendant || "[Defendant]"}
Statute: ${med?.statute || "[Statute]"}
Time Limit: ${med?.timeLimit || "[Timeframe]"}

BASIS: ${incident || "[Negligence, standard of care, causation, damages]"}`;
}

function generateSubpoenaDucesTecum(params) {
  const { today, courtName, caseNumber, plaintiff, defendant, recipient, incident } = params;
  return `SUBPOENA DUCES TECUM

${courtName || "[Court Name]"}
Case No.: ${caseNumber || "[Case Number]"}
${plaintiff || "[Plaintiff]"} v. ${defendant || "[Defendant]"}

TO: ${recipient || "[Custodian of Records]"}

YOU ARE COMMANDED to produce:
${incident || "[Describe categories/date ranges/formats]"}

DATE OF ISSUANCE: ${today}`;
}

function generateDiscoveryRequest(params) {
  const { today, caseNumber, plaintiff, defendant, incident } = params;
  return `PLAINTIFF'S FIRST SET OF REQUESTS FOR PRODUCTION

Date: ${today}
Case: ${caseNumber || "[Case Number]"}
Parties: ${plaintiff || "[Plaintiff]"} v. ${defendant || "[Defendant]"}

REQUESTS:
1. All documents concerning ${incident || "[Subject matter]"}.
2. All communications referring to the subject.
3. Policies/procedures in effect during the period.
4. All audio/video/photos relating to the incident.
5. ESI in native format with metadata.`;
}

export default function LegalToolkitPro() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const idCardRef = useRef(null);

  // Persist key fields (without generated text)
  useEffect(() => {
    const saved = localStorage.getItem("ltp-state");
    if(saved) {
      try {
        dispatch({ type: "hydrate", payload: JSON.parse(saved) });
      } catch (e) {
        console.error("Failed to load saved state:", e);
      }
    }
  }, []);

  useEffect(() => {
    const { generated, ...rest } = state;
    localStorage.setItem("ltp-state", JSON.stringify(rest));
  }, [state.documentType, state.selectedState, state.agency, state.violationType, state.claimType]);

  // Derive statute/time window from dataset
  useEffect(() => {
    const code = state.selectedState;
    if(!code) {
      dispatch({ type: "hydrate", payload: { jurisdiction: "", timeLimit: "", statute: "" } });
      return;
    }

    const pr = PUBLIC_RECORDS[code];
    if(state.documentType === "FOIA Request" || state.documentType === "State Public Records Request") {
      if(pr) {
        dispatch({ type: "hydrate", payload: { 
          jurisdiction: pr.name, 
          timeLimit: pr.displayTime, 
          statute: pr.statute 
        }});
      }
      return;
    }

    if(state.documentType === "ID Rights Card") {
      const rights = STOP_AND_ID[code];
      if(pr && rights) {
        dispatch({ type: "hydrate", payload: { 
          jurisdiction: pr.name, 
          timeLimit: rights.stopAndID ? "Stop & Identify State" : "No Stop & Identify Law", 
          statute: rights.law 
        }});
      }
      return;
    }

    const notice = NOTICE_RULES[code];
    if(notice) {
      const payload = { jurisdiction: pr?.name || state.jurisdiction };
      if(state.documentType === "Notice of Claim" && state.claimType === "government" && notice.govTortClaim) {
        payload.timeLimit = notice.govTortClaim.timeLimit;
        payload.statute = notice.govTortClaim.statute;
      } else if(state.documentType === "Pre-Suit Notice" && state.claimType === "medical" && notice.medMalpractice) {
        payload.timeLimit = notice.medMalpractice.timeLimit;
        payload.statute = notice.medMalpractice.statute;
      }
      dispatch({ type: "hydrate", payload });
    }
  }, [state.selectedState, state.documentType, state.claimType]);

  const today = useMemo(() => fmtDate(new Date()), []);

  function handleGenerate() {
    const code = state.selectedState;
    const pr = code ? PUBLIC_RECORDS[code] : undefined;
    const notice = code ? NOTICE_RULES[code] : undefined;
    const updates = pr?.updates;

    let out = "";
    switch(state.documentType) {
      case "FOIA Request":
        out = generateFOIARequest({ 
          today, 
          agency: state.agency, 
          selectedState: code, 
          statute: state.statute, 
          timeLimit: state.timeLimit, 
          incident: state.incident, 
          jurisdiction: state.jurisdiction, 
          stateUpdates: updates 
        });
        break;
      case "ID Rights Card":
        out = `ID Rights Card — ${state.jurisdiction || code || "[State]"}\nStop & ID: ${state.statute || "—"}`;
        break;
      case "Cease and Desist Letter":
        out = generateCeaseDesistLetter({ 
          today, 
          selectedState: code, 
          stateNotice: notice?.ceaseDesist, 
          recipient: state.recipient, 
          violationType: state.violationType, 
          incident: state.incident, 
          jurisdiction: state.jurisdiction, 
          damages: state.damages 
        });
        break;
      case "Notice of Claim":
        out = generateNoticeOfClaim({ 
          today, 
          gov: notice?.govTortClaim, 
          plaintiff: state.plaintiffName, 
          defendant: state.defendantName, 
          incident: state.incident, 
          jurisdiction: state.jurisdiction 
        });
        break;
      case "Pre-Suit Notice":
        out = generatePreSuitNotice({ 
          today, 
          med: notice?.medMalpractice, 
          plaintiff: state.plaintiffName, 
          defendant: state.defendantName, 
          incident: state.incident 
        });
        break;
      case "Subpoena Duces Tecum":
        out = generateSubpoenaDucesTecum({ 
          today, 
          courtName: state.courtName, 
          caseNumber: state.caseNumber, 
          plaintiff: state.plaintiffName, 
          defendant: state.defendantName, 
          recipient: state.recipient, 
          incident: state.incident 
        });
        break;
      case "Discovery Request":
        out = generateDiscoveryRequest({ 
          today, 
          caseNumber: state.caseNumber, 
          plaintiff: state.plaintiffName, 
          defendant: state.defendantName, 
          incident: state.incident 
        });
        break;
    }
    dispatch({ type: "generate", value: out });
  }

  async function exportIdCardPNG() {
    if(!idCardRef.current) return;
    // This would require html-to-image library
    // For now, just download as text
    downloadText(`id-rights-card-${state.selectedState || "state"}.txt`, state.generated);
  }

  async function exportIdCardPDF() {
    if(!idCardRef.current) return;
    // This would require jsPDF library
    // For now, just download as text
    downloadText(`id-rights-card-${state.selectedState || "state"}.txt`, state.generated);
  }

  const rightsForState = state.selectedState ? STOP_AND_ID[state.selectedState] : undefined;
  const cannabisForState = state.selectedState ? CANNABIS[state.selectedState] : undefined;
  const prForState = state.selectedState ? PUBLIC_RECORDS[state.selectedState] : undefined;
  const hostileWarning = state.selectedState ? HOSTILE_STATES[state.selectedState] : undefined;

  const coveragePR = Math.round((Object.keys(PUBLIC_RECORDS).length / ALL_STATES.length) * 100);

  return (
    <div className="mx-auto max-w-6xl p-4 space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Civil Rights Legal Toolkit Pro</h1>
          <p className="text-sm text-muted-foreground">Fast, accurate legal document generation • Mobile-ready • Attorney‑grade exports</p>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" onClick={() => dispatch({ type: "reset" })}>
            <RefreshCw className="mr-2 h-4 w-4" />Reset
          </Button>
          <Button onClick={handleGenerate}>
            <FileText className="mr-2 h-4 w-4" />Generate
          </Button>
        </div>
      </div>

      {/* Hostile State Warning */}
      {hostileWarning && (
        <Card className="border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="flex items-center text-red-800">
              <AlertTriangle className="mr-2 h-5 w-5" />
              {hostileWarning.warning} - Auditor/Journalist Warning
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-red-700">
              <p className="font-semibold mb-2">Known Issues:</p>
              <ul className="list-disc pl-5 mb-3">
                {hostileWarning.issues.map((issue, idx) => (
                  <li key={idx}>{issue}</li>
                ))}
              </ul>
              <p className="font-semibold mb-2">Recommendations:</p>
              <ul className="list-disc pl-5">
                {hostileWarning.recommendations.map((rec, idx) => (
                  <li key={idx}>{rec}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Inputs */}
      <Card>
        <CardHeader>
          <CardTitle>Document Generator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="block text-sm font-medium mb-1">Document Type</label>
              <select
                className="w-full rounded-md border px-3 py-2 text-sm"
                value={state.documentType}
                onChange={(e) => dispatch({ type: "set", key: "documentType", value: e.target.value })}
              >
                {DOC_TYPES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">State</label>
              <select
                className="w-full rounded-md border px-3 py-2 text-sm"
                value={state.selectedState}
                onChange={(e) => dispatch({ type: "set", key: "selectedState", value: e.target.value })}
              >
                <option value="">—</option>
                {ALL_STATES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Agency / Recipient</label>
              <input
                type="text"
                className="w-full rounded-md border px-3 py-2 text-sm"
                value={state.agency}
                onChange={(e) => dispatch({ type: "set", key: "agency", value: e.target.value })}
                placeholder="e.g., City Clerk / Records Custodian"
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="block text-sm font-medium mb-1">Jurisdiction</label>
              <input
                type="text"
                className="w-full rounded-md border px-3 py-2 text-sm"
                value={state.jurisdiction}
                onChange={(e) => dispatch({ type: "set", key: "jurisdiction", value: e.target.value })}
                placeholder="Auto‑filled by state"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Statute</label>
              <input
                type="text"
                className="w-full rounded-md border px-3 py-2 text-sm"
                value={state.statute}
                onChange={(e) => dispatch({ type: "set", key: "statute", value: e.target.value })}
                placeholder="Auto‑filled by doc type"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Time Limit</label>
              <input
                type="text"
                className="w-full rounded-md border px-3 py-2 text-sm"
                value={state.timeLimit}
                onChange={(e) => dispatch({ type: "set", key: "timeLimit", value: e.target.value })}
                placeholder="Auto‑filled by doc type"
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium mb-1">Subject / Incident</label>
              <textarea
                className="w-full rounded-md border px-3 py-2 text-sm"
                rows={5}
                value={state.incident}
                onChange={(e) => dispatch({ type: "set", key: "incident", value: e.target.value })}
                placeholder="Describe records sought or facts (who/what/when/where)"
              />
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Violation Type (Cease & Desist)</label>
                <select
                  className="w-full rounded-md border px-3 py-2 text-sm"
                  value={state.violationType}
                  onChange={(e) => dispatch({ type: "set", key: "violationType", value: e.target.value })}
                >
                  {VIOLATION_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t.replaceAll("_", " ")}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Damages (optional)</label>
                <textarea
                  className="w-full rounded-md border px-3 py-2 text-sm"
                  rows={3}
                  value={state.damages}
                  onChange={(e) => dispatch({ type: "set", key: "damages", value: e.target.value })}
                  placeholder="Monetary damages, reputational harm, etc."
                />
              </div>
            </div>
          </div>

          {/* Additional fields for parties and case info */}
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="block text-sm font-medium mb-1">Plaintiff</label>
              <input
                type="text"
                className="w-full rounded-md border px-3 py-2 text-sm"
                value={state.plaintiffName}
                onChange={(e) => dispatch({ type: "set", key: "plaintiffName", value: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Defendant</label>
              <input
                type="text"
                className="w-full rounded-md border px-3 py-2 text-sm"
                value={state.defendantName}
                onChange={(e) => dispatch({ type: "set", key: "defendantName", value: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Recipient (for C&D/Subpoena)</label>
              <input
                type="text"
                className="w-full rounded-md border px-3 py-2 text-sm"
                value={state.recipient}
                onChange={(e) => dispatch({ type: "set", key: "recipient", value: e.target.value })}
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="block text-sm font-medium mb-1">Claim Type</label>
              <select
                className="w-full rounded-md border px-3 py-2 text-sm"
                value={state.claimType}
                onChange={(e) => dispatch({ type: "set", key: "claimType", value: e.target.value })}
              >
                <option value="general">General</option>
                <option value="government">Government Tort</option>
                <option value="medical">Medical</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Case Number</label>
              <input
                type="text"
                className="w-full rounded-md border px-3 py-2 text-sm"
                value={state.caseNumber}
                onChange={(e) => dispatch({ type: "set", key: "caseNumber", value: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Court Name</label>
              <input
                type="text"
                className="w-full rounded-md border px-3 py-2 text-sm"
                value={state.courtName}
                onChange={(e) => dispatch({ type: "set", key: "courtName", value: e.target.value })}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Law chips */}
      <div className="flex flex-wrap gap-2">
        {prForState && (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            FOIA: {prForState.statute} • {prForState.displayTime}
          </span>
        )}
        {rightsForState && (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            Stop & ID: {rightsForState.stopAndID ? rightsForState.law : "None"}
          </span>
        )}
        {rightsForState && (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            Recording: {rightsForState.recording}
          </span>
        )}
        {cannabisForState && (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Cannabis: {cannabisForState.status}
          </span>
        )}
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          PR coverage: {coveragePR}%
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Preview</CardTitle>
          </CardHeader>
          <CardContent>
            {state.documentType === "ID Rights Card" ? (
              <div className="flex justify-center">
                <div 
                  ref={idCardRef} 
                  className="relative w-[500px] h-[350px] rounded-2xl border border-white/10 shadow-xl text-white text-xs leading-tight"
                  style={{ 
                    background: "linear-gradient(135deg, #1B365D 0%, #2C5AA0 100%)", 
                    fontFamily: "Inter, system-ui, Arial, sans-serif" 
                  }}
                >
                  <div className="text-center border-b border-white/20 pb-2 px-4 pt-3">
                    <div className="text-lg font-bold tracking-wide">
                      {(prForState?.name || "[STATE NAME]").toUpperCase()}
                    </div>
                    <div className="text-base font-semibold">CIVIL RIGHTS & LAWS REFERENCE CARD</div>
                  </div>
                  <div className="flex gap-4 px-4 pt-3" style={{ height: 270 }}>
                    <div className="flex-1">
                      <div className="text-sm font-bold mb-1 text-yellow-300">CONSTITUTIONAL RIGHTS</div>
                      <div className="text-xs mb-1">• I do not consent to searches</div>
                      <div className="text-xs mb-1">• I invoke my right to remain silent</div>
                      <div className="text-xs mb-1">• I do not waive any rights</div>
                      <div className="text-xs mb-2">• I want a lawyer if detained</div>
                      <div className="text-sm font-bold mb-1 text-yellow-300">STATE LAWS</div>
                      <div className="text-xs mb-1">
                        {rightsForState?.stopAndID ? `✓ Stop & ID: ${rightsForState.law}` : "✗ No Stop & ID Law"}
                      </div>
                      <div className="text-xs mb-1">Recording: {rightsForState?.recording || "—"}</div>
                      {cannabisForState && (
                        <div className="text-xs mb-1 text-green-300">Cannabis: {cannabisForState.status}</div>
                      )}
                      <div className="text-xs mb-1">FOIA Response: {prForState?.displayTime || "N/A"}</div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold mb-1 text-yellow-300">POLICE ENCOUNTER SCRIPT</div>
                      <div className="text-xs mb-1 font-semibold">"Officer, am I being detained or am I free to go?"</div>
                      <div className="text-xs">If <b>FREE TO GO</b>:</div>
                      <div className="text-xs italic mb-1">"I choose to leave now. Have a good day."</div>
                      <div className="text-xs">If <b>DETAINED</b>:</div>
                      <div className="text-xs mb-0.5">"I respectfully decline to answer questions."</div>
                      <div className="text-xs mb-0.5">"I do not consent to any search."</div>
                      <div className="text-xs mb-1">
                        {rightsForState?.stopAndID 
                          ? '"Please state the law requiring me to provide ID."'
                          : '"I am not required to show ID unless driving or under arrest."'
                        }
                      </div>
                      <div className="text-xs">If <b>ARRESTED</b>:</div>
                      <div className="text-xs mb-1">"I invoke my right to remain silent and want a lawyer."</div>
                      <div className="text-xs">EMERGENCY CONTACTS:</div>
                      <div className="text-xs">Attorney: _______________</div>
                      <div className="text-xs">Emergency: _______________</div>
                    </div>
                  </div>
                  <div className="absolute left-5 right-5 bottom-2 border-t border-white/20 pt-1 flex justify-between text-xs opacity-80">
                    <div>Generated: {fmtDate()}</div>
                    <div>Civil Rights Toolkit Pro 2025</div>
                  </div>
                </div>
              </div>
            ) : (
              <textarea
                className="w-full min-h-[300px] rounded-md border px-3 py-2 text-sm font-mono"
                value={state.generated}
                onChange={(e) => dispatch({ type: "generate", value: e.target.value })}
              />
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {/* Comprehensive Toolkit PDF Download */}
            <div className="rounded-lg border-2 border-blue-500 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 mb-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h4 className="font-bold text-blue-900 flex items-center">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Activist & Journalist Legal Toolkit PDF
                  </h4>
                  <p className="text-sm text-blue-700 mt-1">
                    Comprehensive 10+ page guide with your rights, best practices, emergency contacts, and state-specific laws.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button 
                  onClick={() => generateActivistToolkitPDF(state.selectedState)}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Download className="mr-2 h-4 w-4"/>
                  Download Complete Toolkit PDF
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => generateIDCardPDF(state.selectedState)}
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  <Contact className="mr-2 h-4 w-4"/>
                  Download Pocket ID Card
                </Button>
              </div>
            </div>

            {/* Standard Document Actions */}
            <div className="flex flex-wrap gap-2">
              <Button 
                variant="outline" 
                onClick={() => copyToClipboard(state.generated)} 
                disabled={state.documentType === "ID Rights Card" && !state.generated}
              >
                <Copy className="mr-2 h-4 w-4"/>Copy Text
              </Button>
              <Button 
                variant="outline" 
                onClick={() => downloadText(`${state.documentType.replaceAll(" ", "-").toLowerCase()}.txt`, state.generated)} 
                disabled={state.documentType === "ID Rights Card" && !state.generated}
              >
                <Download className="mr-2 h-4 w-4"/>Download .txt
              </Button>
              {state.documentType === "ID Rights Card" && (
                <>
                  <Button onClick={exportIdCardPNG}>
                    <Contact className="mr-2 h-4 w-4"/>Export PNG
                  </Button>
                  <Button onClick={exportIdCardPDF}>
                    <Printer className="mr-2 h-4 w-4"/>Export PDF
                  </Button>
                </>
              )}
            </div>
            <div className="text-sm text-muted-foreground">
              Tip: For deadlines like "5 business days," a reminder from today ({fmtDate()}) might be{" "}
              <code>{fmtDate(addBusinessDays(new Date(), 5))}</code>.
            </div>
            <div className="rounded-md border p-3 text-xs leading-relaxed text-muted-foreground">
              <b>Disclaimer:</b> This software provides legal information and document automation. It is not legal advice and does not create an attorney–client relationship. Statutes are jurisdiction-specific and change frequently—verify before filing.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}