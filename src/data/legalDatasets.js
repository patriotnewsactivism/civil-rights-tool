// Enhanced legal datasets with comprehensive state coverage
export const ALL_STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY","DC"
];

// Public Records Laws for all 50 states + DC
export const PUBLIC_RECORDS = {
  AL: { name: "Alabama", statute: "Alabama Open Records Act", displayTime: "Promptly / reasonable time", responseWindow: { type: "none", value: null } },
  AK: { name: "Alaska", statute: "Alaska Public Records Act" , displayTime: "Promptly / reasonable time", responseWindow: { type: "none", value: null } },
  AZ: { name: "Arizona", statute: "Arizona Public Records Law", displayTime: "Promptly / reasonable time", responseWindow: { type: "none", value: null } },
  AR: { name: "Arkansas", statute: "Arkansas Freedom of Information Act", displayTime: "3 business days", responseWindow: { type: "business_days", value: 3 } },
  CA: { name: "California", statute: "California Public Records Act (Gov. Code §§ 7920.000 et seq.)", displayTime: "10 calendar days", responseWindow: { type: "calendar_days", value: 10 }, updates: "Recodified under AB 473 (2023)" },
  CO: { name: "Colorado", statute: "Colorado Open Records Act (CORA)", displayTime: "Promptly / reasonable time", responseWindow: { type: "none", value: null } },
  CT: { name: "Connecticut", statute: "Freedom of Information Act", displayTime: "Promptly / reasonable time", responseWindow: { type: "none", value: null } },
  DE: { name: "Delaware", statute: "Delaware Freedom of Information Act", displayTime: "Promptly / reasonable time", responseWindow: { type: "none", value: null } },
  FL: { name: "Florida", statute: "Florida Public Records Law", displayTime: "Promptly / reasonable time", responseWindow: { type: "none", value: null } },
  GA: { name: "Georgia", statute: "Georgia Open Records Act", displayTime: "3 business days (acknowledge/produce or explain)", responseWindow: { type: "business_days", value: 3 } },
  HI: { name: "Hawaii", statute: "Uniform Information Practices Act (UIPA)", displayTime: "Promptly / reasonable time", responseWindow: { type: "none", value: null } },
  ID: { name: "Idaho", statute: "Idaho Public Records Act", displayTime: "Promptly / reasonable time", responseWindow: { type: "none", value: null } },
  IL: { name: "Illinois", statute: "Illinois Freedom of Information Act", displayTime: "5 business days (typical)", responseWindow: { type: "business_days", value: 5 } },
  IN: { name: "Indiana", statute: "Access to Public Records Act", displayTime: "Promptly / reasonable time", responseWindow: { type: "none", value: null } },
  IA: { name: "Iowa", statute: "Iowa Open Records Law", displayTime: "Promptly / reasonable time", responseWindow: { type: "none", value: null } },
  KS: { name: "Kansas", statute: "Kansas Open Records Act", displayTime: "Promptly / reasonable time", responseWindow: { type: "none", value: null } },
  KY: { name: "Kentucky", statute: "Kentucky Open Records Act", displayTime: "5 business days (acknowledge)", responseWindow: { type: "business_days", value: 5 } },
  LA: { name: "Louisiana", statute: "Louisiana Public Records Law", displayTime: "Promptly / reasonable time", responseWindow: { type: "none", value: null } },
  ME: { name: "Maine", statute: "Freedom of Access Act (FOAA)", displayTime: "Promptly / reasonable time", responseWindow: { type: "none", value: null } },
  MD: { name: "Maryland", statute: "Public Information Act (PIA)", displayTime: "10 business days (acknowledge)", responseWindow: { type: "business_days", value: 10 } },
  MA: { name: "Massachusetts", statute: "Public Records Law", displayTime: "10 business days (acknowledge)", responseWindow: { type: "business_days", value: 10 } },
  MI: { name: "Michigan", statute: "Michigan Freedom of Information Act", displayTime: "5 business days (typical)", responseWindow: { type: "business_days", value: 5 } },
  MN: { name: "Minnesota", statute: "Government Data Practices Act", displayTime: "Promptly / reasonable time", responseWindow: { type: "none", value: null } },
  MS: { name: "Mississippi", statute: "Public Records Act", displayTime: "7 working days (typical)", responseWindow: { type: "business_days", value: 7 } },
  MO: { name: "Missouri", statute: "Sunshine Law", displayTime: "3 business days (acknowledge)", responseWindow: { type: "business_days", value: 3 } },
  MT: { name: "Montana", statute: "Montana Public Records Act", displayTime: "Promptly / reasonable time", responseWindow: { type: "none", value: null } },
  NE: { name: "Nebraska", statute: "Nebraska Public Records Statutes", displayTime: "4 business days (acknowledge)", responseWindow: { type: "business_days", value: 4 } },
  NV: { name: "Nevada", statute: "Nevada Public Records Act", displayTime: "5 business days (acknowledge)", responseWindow: { type: "business_days", value: 5 } },
  NH: { name: "New Hampshire", statute: "Right-to-Know Law", displayTime: "5 business days (acknowledge)", responseWindow: { type: "business_days", value: 5 } },
  NJ: { name: "New Jersey", statute: "Open Public Records Act (OPRA)", displayTime: "7 business days (typical)", responseWindow: { type: "business_days", value: 7 } },
  NM: { name: "New Mexico", statute: "Inspection of Public Records Act (IPRA)", displayTime: "3 business days (acknowledge)", responseWindow: { type: "business_days", value: 3 } },
  NY: { name: "New York", statute: "Freedom of Information Law (FOIL)", displayTime: "5 business days (acknowledge)", responseWindow: { type: "business_days", value: 5 } },
  NC: { name: "North Carolina", statute: "Public Records Law", displayTime: "Promptly / reasonable time", responseWindow: { type: "none", value: null } },
  ND: { name: "North Dakota", statute: "Open Records Law", displayTime: "Promptly / reasonable time", responseWindow: { type: "none", value: null } },
  OH: { name: "Ohio", statute: "Ohio Public Records Act", displayTime: "Promptly / reasonable time", responseWindow: { type: "none", value: null } },
  OK: { name: "Oklahoma", statute: "Oklahoma Open Records Act", displayTime: "Promptly / reasonable time", responseWindow: { type: "none", value: null } },
  OR: { name: "Oregon", statute: "Oregon Public Records Law", displayTime: "5 business days (acknowledge)", responseWindow: { type: "business_days", value: 5 } },
  PA: { name: "Pennsylvania", statute: "Right-to-Know Law", displayTime: "5 business days (typical)", responseWindow: { type: "business_days", value: 5 } },
  RI: { name: "Rhode Island", statute: "Access to Public Records Act (APRA)", displayTime: "10 business days (typical)", responseWindow: { type: "business_days", value: 10 } },
  SC: { name: "South Carolina", statute: "Freedom of Information Act", displayTime: "10 business days (typical)", responseWindow: { type: "business_days", value: 10 } },
  SD: { name: "South Dakota", statute: "Open Records Law", displayTime: "Promptly / reasonable time", responseWindow: { type: "none", value: null } },
  TN: { name: "Tennessee", statute: "Public Records Act", displayTime: "7 business days (acknowledge)", responseWindow: { type: "business_days", value: 7 } },
  TX: { name: "Texas", statute: "Public Information Act", displayTime: "10 business days (acknowledge)", responseWindow: { type: "business_days", value: 10 } },
  UT: { name: "Utah", statute: "Government Records Access and Management Act (GRAMA)", displayTime: "10 business days (typical)", responseWindow: { type: "business_days", value: 10 } },
  VT: { name: "Vermont", statute: "Public Records Act", displayTime: "3 business days (acknowledge)", responseWindow: { type: "business_days", value: 3 } },
  VA: { name: "Virginia", statute: "Virginia Freedom of Information Act", displayTime: "5 working days (typical)", responseWindow: { type: "business_days", value: 5 } },
  WA: { name: "Washington", statute: "Public Records Act", displayTime: "5 business days (acknowledge)", responseWindow: { type: "business_days", value: 5 } },
  WV: { name: "West Virginia", statute: "Freedom of Information Act", displayTime: "Promptly / reasonable time", responseWindow: { type: "none", value: null } },
  WI: { name: "Wisconsin", statute: "Public Records Law", displayTime: "Promptly / reasonable time", responseWindow: { type: "none", value: null } },
  WY: { name: "Wyoming", statute: "Public Records Act", displayTime: "Promptly / reasonable time", responseWindow: { type: "none", value: null } },
  DC: { name: "District of Columbia", statute: "D.C. FOIA (D.C. Code § 2-531 et seq.)", displayTime: "15 business days", responseWindow: { type: "business_days", value: 15 } },
};

// Stop and ID Laws
export const STOP_AND_ID = {
  AL: { stopAndID: true, law: "Ala. Code § 15-5-30", idRequired: "Name/address/explanation if felony/public offense suspicion", recording: "One-party consent" },
  AZ: { stopAndID: true, law: "A.R.S. § 13-2412", idRequired: "Name only upon lawful stop", recording: "One-party consent" },
  AR: { stopAndID: true, law: "Ark. Code § 5-71-213", idRequired: "Name/address upon lawful stop", recording: "One-party consent" },
  CA: { stopAndID: false, law: "No general stop-and-ID statute; ID required when driving/under arrest/licensed activities", idRequired: "Only when driving/under arrest/licensed activities", recording: "Two-party consent" },
  CO: { stopAndID: true, law: "C.R.S. § 16-3-103", idRequired: "Name/address upon reasonable suspicion", recording: "One-party consent" },
  DE: { stopAndID: true, law: "Del. Code tit. 11, § 1902", idRequired: "Name upon lawful stop", recording: "One-party consent" },
  FL: { stopAndID: true, law: "Fla. Stat. § 856.021", idRequired: "Name upon lawful stop", recording: "Two-party consent" },
  GA: { stopAndID: true, law: "O.C.G.A. § 16-11-36", idRequired: "Name/address upon lawful stop", recording: "One-party consent" },
  IL: { stopAndID: true, law: "725 ILCS 5/107-14", idRequired: "Name upon lawful stop", recording: "One-party consent" },
  IN: { stopAndID: true, law: "Ind. Code § 34-28-5-3.5", idRequired: "Name upon lawful stop", recording: "One-party consent" },
  KS: { stopAndID: true, law: "K.S.A. § 22-2402", idRequired: "Name upon lawful stop", recording: "One-party consent" },
  LA: { stopAndID: true, law: "La. Code Crim. Proc. art. 215.1", idRequired: "Name upon lawful stop", recording: "One-party consent" },
  MO: { stopAndID: true, law: "Mo. Rev. Stat. § 84.710", idRequired: "Name upon lawful stop (Kansas City)", recording: "One-party consent" },
  MT: { stopAndID: true, law: "Mont. Code § 46-5-401", idRequired: "Name upon lawful stop", recording: "One-party consent" },
  NE: { stopAndID: true, law: "Neb. Rev. Stat. § 29-829", idRequired: "Name upon lawful stop", recording: "One-party consent" },
  NV: { stopAndID: true, law: "Nev. Rev. Stat. § 171.123", idRequired: "Name upon lawful stop", recording: "One-party consent" },
  NH: { stopAndID: true, law: "N.H. Rev. Stat. § 594:2", idRequired: "Name upon lawful stop", recording: "One-party consent" },
  NM: { stopAndID: true, law: "N.M. Stat. § 30-22-3", idRequired: "Name upon lawful stop", recording: "One-party consent" },
  NY: { stopAndID: true, law: "N.Y. Crim. Proc. Law § 140.50 (stop/question/frisk)", idRequired: "Name/address/explanation of conduct when lawfully stopped", recording: "One-party consent" },
  ND: { stopAndID: true, law: "N.D. Cent. Code § 29-29-21", idRequired: "Name upon lawful stop", recording: "One-party consent" },
  OH: { stopAndID: true, law: "Ohio Rev. Code § 2921.29", idRequired: "Name/address/DOB upon lawful stop", recording: "One-party consent" },
  RI: { stopAndID: true, law: "R.I. Gen. Laws § 12-7-1", idRequired: "Name upon lawful stop", recording: "One-party consent" },
  TX: { stopAndID: true, law: "Tex. Penal Code § 38.02", idRequired: "Name/address/DOB upon lawful arrest", recording: "One-party consent" },
  UT: { stopAndID: true, law: "Utah Code § 77-7-15", idRequired: "Name upon lawful stop", recording: "One-party consent" },
  VT: { stopAndID: true, law: "Vt. Stat. tit. 24, § 1983", idRequired: "Name upon lawful stop", recording: "One-party consent" },
  WI: { stopAndID: true, law: "Wis. Stat. § 968.24", idRequired: "Name upon lawful stop", recording: "One-party consent" },
  DC: { stopAndID: true, law: "Terry-stop authority (case law / rules)", idRequired: "Identification upon lawful stop (context-dependent)", recording: "One-party consent" },
};

// Cannabis/Marijuana Laws
export const CANNABIS = {
  AK: { status: "Recreational & Medical", enacted: "2014", possession: "Up to 1 oz flower; 6 plants", details: "Ballot Measure 2" },
  AZ: { status: "Recreational & Medical", enacted: "2020", possession: "Up to 1 oz flower; 6 plants", details: "Prop 207" },
  CA: { status: "Recreational & Medical", enacted: "2016", possession: "Up to 1 oz flower; 6 plants; 8g concentrates", details: "Prop 64" },
  CO: { status: "Recreational & Medical", enacted: "2012", possession: "Up to 1 oz flower; 6 plants", details: "Amendment 64" },
  CT: { status: "Recreational & Medical", enacted: "2021", possession: "Up to 1.5 oz flower; 6 plants", details: "Public Act 21-1" },
  DE: { status: "Recreational & Medical", enacted: "2023", possession: "Up to 1 oz flower", details: "HB 1 & HB 2" },
  IL: { status: "Recreational & Medical", enacted: "2019", possession: "Up to 1 oz flower", details: "Cannabis Regulation Act" },
  ME: { status: "Recreational & Medical", enacted: "2016", possession: "Up to 2.5 oz flower; 6 plants", details: "Question 1" },
  MD: { status: "Recreational & Medical", enacted: "2022", possession: "Up to 1.5 oz flower; 2 plants", details: "Question 4" },
  MA: { status: "Recreational & Medical", enacted: "2016", possession: "Up to 1 oz flower; 6 plants", details: "Question 4" },
  MI: { status: "Recreational & Medical", enacted: "2018", possession: "Up to 2.5 oz flower; 12 plants", details: "Proposal 1" },
  MN: { status: "Recreational & Medical", enacted: "2023", possession: "Up to 2 oz flower; 8 plants", details: "HF 100" },
  MT: { status: "Recreational & Medical", enacted: "2020", possession: "Up to 1 oz flower; 4 plants", details: "Initiative 190" },
  NV: { status: "Recreational & Medical", enacted: "2016", possession: "Up to 1 oz flower; 6 plants", details: "Question 2" },
  NJ: { status: "Recreational & Medical", enacted: "2020", possession: "Up to 6 oz flower", details: "Public Question 1" },
  NM: { status: "Recreational & Medical", enacted: "2021", possession: "Up to 2 oz flower; 6 plants", details: "Cannabis Regulation Act" },
  NY: { status: "Recreational & Medical", enacted: "2021", possession: "Up to 3 oz flower; 6 plants", details: "MRTA" },
  OR: { status: "Recreational & Medical", enacted: "2014", possession: "Up to 1 oz flower; 4 plants", details: "Measure 91" },
  RI: { status: "Recreational & Medical", enacted: "2022", possession: "Up to 1 oz flower; 6 plants", details: "Rhode Island Cannabis Act" },
  VT: { status: "Recreational & Medical", enacted: "2018", possession: "Up to 1 oz flower; 6 plants", details: "Act 86" },
  VA: { status: "Recreational & Medical", enacted: "2021", possession: "Up to 1 oz flower; 4 plants", details: "HB 2312" },
  WA: { status: "Recreational & Medical", enacted: "2012", possession: "Up to 1 oz flower", details: "Initiative 502" },
  DC: { status: "Recreational & Medical", enacted: "2014", possession: "Up to 2 oz flower; 6 plants", details: "Initiative 71" },
  // Medical Only States
  AL: { status: "Medical Only", enacted: "2021", possession: "Qualified patients only", details: "Compassion Act" },
  AR: { status: "Medical Only", enacted: "2016", possession: "Qualified patients only", details: "Issue 6" },
  FL: { status: "Medical Only", enacted: "2016", possession: "Qualified patients only", details: "Amendment 2" },
  HI: { status: "Medical Only", enacted: "2000", possession: "Qualified patients only", details: "Act 228" },
  LA: { status: "Medical Only", enacted: "2015", possession: "Qualified patients only", details: "Act 261" },
  MO: { status: "Medical Only", enacted: "2018", possession: "Qualified patients only", details: "Amendment 2" },
  NH: { status: "Medical Only", enacted: "2013", possession: "Qualified patients only", details: "HB 573" },
  ND: { status: "Medical Only", enacted: "2016", possession: "Qualified patients only", details: "Measure 5" },
  OH: { status: "Medical Only", enacted: "2016", possession: "Qualified patients only", details: "HB 523" },
  OK: { status: "Medical Only", enacted: "2018", possession: "Qualified patients only", details: "State Question 788" },
  PA: { status: "Medical Only", enacted: "2016", possession: "Qualified patients only", details: "Act 16" },
  SD: { status: "Medical Only", enacted: "2020", possession: "Qualified patients only", details: "Measure 26" },
  TX: { status: "Medical Only (Limited)", enacted: "2015", possession: "Low-THC only for qualified patients", details: "Compassionate Use Act" },
  UT: { status: "Medical Only", enacted: "2018", possession: "Qualified patients only", details: "Prop 2" },
  WV: { status: "Medical Only", enacted: "2017", possession: "Qualified patients only", details: "SB 386" },
};

// Notice Requirements for Legal Actions
export const NOTICE_RULES = {
  AL: {
    govTortClaim: { timeLimit: "1 year", statute: "Ala. Code § 11-47-190", requirements: "Written notice required to municipality" },
    medMalpractice: { timeLimit: "90 days", statute: "Ala. Code § 6-5-484", requirements: "Pre-suit notice with expert affidavit" },
    ceaseDesist: { requirements: "No specific statutory requirements; rely on common law + specific cause statutes" },
  },
  CA: {
    govTortClaim: { timeLimit: "6 months", statute: "Gov. Code § 911.2", requirements: "Claim within 6 months of accrual; specific form requirements" },
    medMalpractice: { timeLimit: "90 days", statute: "CCP § 364", requirements: "90-day notice; expert declaration typical in practice" },
    ceaseDesist: { requirements: "Use applicable Civil Code section(s) for the violation (defamation, privacy, IP, etc.)" },
  },
  FL: {
    govTortClaim: { timeLimit: "3 years", statute: "Fla. Stat. § 768.28", requirements: "Notice to appropriate agency" },
    medMalpractice: { timeLimit: "90 days", statute: "Fla. Stat. § 766.106", requirements: "Pre-suit investigation period" },
    ceaseDesist: { requirements: "Florida Deceptive and Unfair Trade Practices Act for consumer issues" },
  },
  NY: {
    govTortClaim: { timeLimit: "90 days", statute: "Gen. Muni. Law § 50-e", requirements: "Notice of claim to public corporation" },
    medMalpractice: { timeLimit: "90 days", statute: "CPLR § 3012-a", requirements: "Certificate of merit required" },
    ceaseDesist: { requirements: "New York General Business Law § 349 for deceptive practices" },
  },
  TX: {
    govTortClaim: { timeLimit: "6 months", statute: "Tex. Civ. Prac. & Rem. Code § 101.101", requirements: "Notice to governmental unit" },
    medMalpractice: { timeLimit: "60 days", statute: "Tex. Civ. Prac. & Rem. Code § 74.051", requirements: "Expert report required" },
    ceaseDesist: { requirements: "Texas Deceptive Trade Practices Act for consumer issues" },
  },
};

// Hostile States Warning System
export const HOSTILE_STATES = {
  // States with documented issues for auditors/journalists
  TX: { 
    warning: "HIGH RISK", 
    issues: ["Aggressive police response to auditors", "Frequent unlawful arrests", "Anti-recording sentiment"],
    recommendations: ["Bring backup", "Know local ordinances", "Have attorney on standby"]
  },
  FL: { 
    warning: "MODERATE RISK", 
    issues: ["Inconsistent enforcement", "Some departments hostile to recording"],
    recommendations: ["Research specific jurisdiction", "Stay on public property"]
  },
  AZ: { 
    warning: "MODERATE RISK", 
    issues: ["Border patrol complications", "Some anti-auditor sentiment"],
    recommendations: ["Avoid federal facilities", "Know immigration status requirements"]
  }
};

// Helper functions
export function addBusinessDays(start, days) {
  const d = new Date(start);
  let added = 0;
  while (added < days) {
    d.setDate(d.getDate() + 1);
    const dayOfWeek = d.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      added++;
    }
  }
  return d;
}

export function coveragePercent(map) {
  const have = Object.keys(map).length;
  return Math.round((have / ALL_STATES.length) * 100);
}