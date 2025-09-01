import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Search, Scale, AlertCircle, Gavel, Shield, AlertTriangle, BookMarked, TrendingDown } from 'lucide-react';
import './App.css';

const CivilRightsLegalTool = () => {
<<<<<<< Updated upstream
=======
  // State declarations
>>>>>>> Stashed changes
  const [selectedState, setSelectedState] = useState('');
  const [results, setResults] = useState(null);

  // Federal Circuit mapping with jurisdictional analysis
  const federalCircuits = useMemo(() => ({
    'AL': { circuit: '11th Circuit', hostility: 'Moderate', districts: ['Northern District of Alabama', 'Middle District of Alabama', 'Southern District of Alabama'] },
    'AK': { circuit: '9th Circuit', hostility: 'Protective', districts: ['District of Alaska'] },
    'AZ': { circuit: '9th Circuit', hostility: 'Protective', districts: ['District of Arizona'] },
    'AR': { circuit: '8th Circuit', hostility: 'Moderate', districts: ['Eastern District of Arkansas', 'Western District of Arkansas'] },
    'CA': { circuit: '9th Circuit', hostility: 'Protective', districts: ['Northern District of California', 'Central District of California', 'Eastern District of California', 'Southern District of California'] },
    'CO': { circuit: '10th Circuit', hostility: 'Moderate', districts: ['District of Colorado'] },
    'CT': { circuit: '2nd Circuit', hostility: 'Protective', districts: ['District of Connecticut'] },
    'DE': { circuit: '3rd Circuit', hostility: 'Moderate', districts: ['District of Delaware'] },
    'FL': { circuit: '11th Circuit', hostility: 'Moderate', districts: ['Northern District of Florida', 'Middle District of Florida', 'Southern District of Florida'] },
    'GA': { circuit: '11th Circuit', hostility: 'Moderate', districts: ['Northern District of Georgia', 'Middle District of Georgia', 'Southern District of Georgia'] },
    'HI': { circuit: '9th Circuit', hostility: 'Protective', districts: ['District of Hawaii'] },
    'ID': { circuit: '9th Circuit', hostility: 'Protective', districts: ['District of Idaho'] },
    'IL': { circuit: '7th Circuit', hostility: 'Moderate', districts: ['Northern District of Illinois', 'Central District of Illinois', 'Southern District of Illinois'] },
    'IN': { circuit: '7th Circuit', hostility: 'Moderate', districts: ['Northern District of Indiana', 'Southern District of Indiana'] },
    'IA': { circuit: '8th Circuit', hostility: 'Moderate', districts: ['Northern District of Iowa', 'Southern District of Iowa'] },
    'KS': { circuit: '10th Circuit', hostility: 'Moderate', districts: ['District of Kansas'] },
    'KY': { circuit: '6th Circuit', hostility: 'Moderate', districts: ['Eastern District of Kentucky', 'Western District of Kentucky'] },
    'LA': { circuit: '5th Circuit', hostility: 'EXTREMELY HOSTILE', districts: ['Eastern District of Louisiana', 'Middle District of Louisiana', 'Western District of Louisiana'] },
    'ME': { circuit: '1st Circuit', hostility: 'Protective', districts: ['District of Maine'] },
    'MD': { circuit: '4th Circuit', hostility: 'Protective', districts: ['District of Maryland'] },
    'MA': { circuit: '1st Circuit', hostility: 'Protective', districts: ['District of Massachusetts'] },
    'MI': { circuit: '6th Circuit', hostility: 'Moderate', districts: ['Eastern District of Michigan', 'Western District of Michigan'] },
    'MN': { circuit: '8th Circuit', hostility: 'Moderate', districts: ['District of Minnesota'] },
    'MS': { circuit: '5th Circuit', hostility: 'EXTREMELY HOSTILE', districts: ['Northern District of Mississippi', 'Southern District of Mississippi'] },
    'MO': { circuit: '8th Circuit', hostility: 'Moderate', districts: ['Eastern District of Missouri', 'Western District of Missouri'] },
    'MT': { circuit: '9th Circuit', hostility: 'Protective', districts: ['District of Montana'] },
    'NE': { circuit: '8th Circuit', hostility: 'Moderate', districts: ['District of Nebraska'] },
    'NV': { circuit: '9th Circuit', hostility: 'Protective', districts: ['District of Nevada'] },
    'NH': { circuit: '1st Circuit', hostility: 'Protective', districts: ['District of New Hampshire'] },
    'NJ': { circuit: '3rd Circuit', hostility: 'Moderate', districts: ['District of New Jersey'] },
    'NM': { circuit: '10th Circuit', hostility: 'Moderate', districts: ['District of New Mexico'] },
    'NY': { circuit: '2nd Circuit', hostility: 'Protective', districts: ['Northern District of New York', 'Southern District of New York', 'Eastern District of New York', 'Western District of New York'] },
    'NC': { circuit: '4th Circuit', hostility: 'Protective', districts: ['Eastern District of North Carolina', 'Middle District of North Carolina', 'Western District of North Carolina'] },
    'ND': { circuit: '8th Circuit', hostility: 'Moderate', districts: ['District of North Dakota'] },
    'OH': { circuit: '6th Circuit', hostility: 'Moderate', districts: ['Northern District of Ohio', 'Southern District of Ohio'] },
    'OK': { circuit: '10th Circuit', hostility: 'Moderate', districts: ['Northern District of Oklahoma', 'Eastern District of Oklahoma', 'Western District of Oklahoma'] },
    'OR': { circuit: '9th Circuit', hostility: 'Protective', districts: ['District of Oregon'] },
    'PA': { circuit: '3rd Circuit', hostility: 'Moderate', districts: ['Eastern District of Pennsylvania', 'Middle District of Pennsylvania', 'Western District of Pennsylvania'] },
    'RI': { circuit: '1st Circuit', hostility: 'Protective', districts: ['District of Rhode Island'] },
    'SC': { circuit: '4th Circuit', hostility: 'Protective', districts: ['District of South Carolina'] },
    'SD': { circuit: '8th Circuit', hostility: 'Moderate', districts: ['District of South Dakota'] },
    'TN': { circuit: '6th Circuit', hostility: 'Moderate', districts: ['Eastern District of Tennessee', 'Middle District of Tennessee', 'Western District of Tennessee'] },
    'TX': { circuit: '5th Circuit', hostility: 'EXTREMELY HOSTILE', districts: ['Northern District of Texas', 'Southern District of Texas', 'Eastern District of Texas', 'Western District of Texas'] },
    'UT': { circuit: '10th Circuit', hostility: 'Moderate', districts: ['District of Utah'] },
    'VT': { circuit: '2nd Circuit', hostility: 'Protective', districts: ['District of Vermont'] },
    'VA': { circuit: '4th Circuit', hostility: 'Protective', districts: ['Eastern District of Virginia', 'Western District of Virginia'] },
    'WA': { circuit: '9th Circuit', hostility: 'Protective', districts: ['Eastern District of Washington', 'Western District of Washington'] },
    'WV': { circuit: '4th Circuit', hostility: 'Protective', districts: ['Northern District of West Virginia', 'Southern District of West Virginia'] },
    'WI': { circuit: '7th Circuit', hostility: 'Moderate', districts: ['Eastern District of Wisconsin', 'Western District of Wisconsin'] },
    'WY': { circuit: '10th Circuit', hostility: 'Moderate', districts: ['District of Wyoming'] },
    'DC': { circuit: 'D.C. Circuit', hostility: 'Moderate', districts: ['District of Columbia'] }
  }), []);

<<<<<<< Updated upstream
  // Complete Stop and ID States data for ALL states
=======
  // Enhanced Stop and ID States with comprehensive constitutional analysis
>>>>>>> Stashed changes
  const stopAndIdStates = useMemo(() => ({
    'AL': {
      hasLaw: true,
      statute: 'Ala. Code § 15-5-30',
      requirements: 'Must provide name when lawfully detained on reasonable suspicion',
      penalty: 'Misdemeanor, up to 3 months jail',
      constitutionalStrategy: ['Demand specific articulable facts supporting reasonable suspicion', 'Challenge overbroad application'],
      controllingPrecedents: ['Terry v. Ohio (1968)', 'United States v. Sokolow (1989)'],
      tacticalNotes: '11th Circuit applies standard Terry analysis.',
      warningLevel: 'Moderate Risk'
    },
    'AK': {
      hasLaw: false,
      statute: 'No stop and identify law',
      requirements: 'No requirement to provide ID during detention',
      penalty: 'None for refusing identification',
      constitutionalStrategy: ['Assert strong state privacy protections', 'Refuse identification unless arrested'],
      controllingPrecedents: ['Alaska Constitution Article I, Section 22'],
      tacticalNotes: '9th Circuit provides strong protections.',
      warningLevel: 'Low Risk - Constitutional Protection'
    },
    'AZ': {
      hasLaw: true,
      statute: 'A.R.S. § 13-2412',
      requirements: 'Must provide truthful name when lawfully detained',
      penalty: 'Class 1 misdemeanor',
      constitutionalStrategy: ['Challenge lawfulness of detention', 'Invoke 9th Circuit protections'],
      controllingPrecedents: ['Miranda v. Arizona (1966)', 'Arizona v. Johnson (2009)'],
      tacticalNotes: '9th Circuit provides stronger protections than most circuits.',
      warningLevel: 'Low Risk - 9th Circuit Protection'
    },
    'AR': {
      hasLaw: true,
      statute: 'Ark. Code § 5-71-213',
      requirements: 'Must provide name when lawfully stopped',
      penalty: 'Class C misdemeanor',
      constitutionalStrategy: ['Challenge reasonable suspicion standard', 'Demand specific articulable facts'],
      controllingPrecedents: ['Terry v. Ohio (1968)', 'Brown v. Texas (1979)'],
      tacticalNotes: '8th Circuit applies moderate scrutiny to Terry stops.',
      warningLevel: 'Moderate Risk'
    },
    'CA': {
      hasLaw: false,
      statute: 'No general stop and identify law - CONSTITUTIONAL PROTECTION',
      requirements: 'NO requirement to provide ID during consensual encounters',
      penalty: 'None for refusing identification',
      constitutionalStrategy: ['Assert California Constitutional privacy rights', 'Refuse identification unless arrested'],
      controllingPrecedents: ['Cohen v. California (1971)', 'California Constitution Article I, Section 1'],
      tacticalNotes: 'Strongest constitutional protections in nation.',
      warningLevel: 'Minimal Risk - Maximum Protection'
    },
    'CO': {
      hasLaw: true,
      statute: 'C.R.S. § 16-3-103',
      requirements: 'Must provide name, address, and explanation of actions when detained',
      penalty: 'Class 3 misdemeanor',
      constitutionalStrategy: ['Challenge scope of required information', 'Assert right to remain silent beyond ID'],
      controllingPrecedents: ['Counterman v. Colorado (2023)', 'Terry v. Ohio (1968)'],
      tacticalNotes: '10th Circuit applies standard constitutional analysis.',
      warningLevel: 'Moderate Risk'
    },
    'CT': {
      hasLaw: false,
      statute: 'No stop and identify law',
      requirements: 'No requirement to provide ID during detention',
      penalty: 'None for refusing identification',
      constitutionalStrategy: ['Assert Fourth Amendment protections', 'Refuse identification unless arrested'],
      controllingPrecedents: ['Terry v. Ohio (1968)', '2nd Circuit precedents'],
      tacticalNotes: '2nd Circuit provides good constitutional protections.',
      warningLevel: 'Low Risk - No ID Law'
    },
    'DE': {
      hasLaw: true,
      statute: 'Del. Code tit. 11, § 1902',
      requirements: 'Must provide name when lawfully detained',
      penalty: 'Class C misdemeanor',
      constitutionalStrategy: ['Challenge reasonable suspicion foundation', 'Limit to name only'],
      controllingPrecedents: ['Terry v. Ohio (1968)', 'Hiibel v. Sixth Judicial District (2004)'],
      tacticalNotes: '3rd Circuit applies moderate scrutiny.',
      warningLevel: 'Moderate Risk'
    },
    'FL': {
      hasLaw: true,
      statute: 'Fla. Stat. § 856.021 (loitering/prowling contexts only)',
      requirements: 'Must identify when detained for loitering or prowling',
      penalty: 'Second degree misdemeanor',
      constitutionalStrategy: ['Challenge vague loitering standards', 'Assert right to be present in public'],
      controllingPrecedents: ['Papachristou v. Jacksonville (1972)', 'City of Chicago v. Morales (1999)'],
      tacticalNotes: 'Limited to specific loitering/prowling contexts.',
      warningLevel: 'Moderate Risk - Limited Scope'
    },
    'GA': {
      hasLaw: true,
      statute: 'O.C.G.A. § 16-11-36',
      requirements: 'Must provide name and address when lawfully detained',
      penalty: 'Misdemeanor',
      constitutionalStrategy: ['Challenge reasonable suspicion', 'Limit to required information only'],
      controllingPrecedents: ['Terry v. Ohio (1968)', '11th Circuit precedents'],
      tacticalNotes: '11th Circuit applies standard Terry analysis.',
      warningLevel: 'Moderate Risk'
    },
    'HI': {
      hasLaw: false,
      statute: 'No stop and identify law',
      requirements: 'No requirement to provide ID during detention',
      penalty: 'None for refusing identification',
      constitutionalStrategy: ['Assert state constitutional privacy rights', 'Refuse ID unless arrested'],
      controllingPrecedents: ['Hawaii Constitution privacy protections', '9th Circuit precedents'],
      tacticalNotes: '9th Circuit provides strong constitutional protections.',
      warningLevel: 'Low Risk - No ID Law'
    },
    'ID': {
      hasLaw: false,
      statute: 'No stop and identify law',
      requirements: 'No requirement to provide ID during detention',
      penalty: 'None for refusing identification',
      constitutionalStrategy: ['Assert Fourth Amendment protections', 'Refuse ID unless arrested'],
      controllingPrecedents: ['Terry v. Ohio (1968)', '9th Circuit precedents'],
      tacticalNotes: '9th Circuit provides protective constitutional interpretation.',
      warningLevel: 'Low Risk - No ID Law'
    },
    'IL': {
      hasLaw: true,
      statute: '725 ILCS 5/107-14',
      requirements: 'Must provide name when lawfully detained',
      penalty: 'Class C misdemeanor',
      constitutionalStrategy: ['Challenge reasonable suspicion standard', 'Limit to name disclosure only'],
      controllingPrecedents: ['Terry v. Ohio (1968)', '7th Circuit precedents'],
      tacticalNotes: '7th Circuit applies moderate constitutional scrutiny.',
      warningLevel: 'Moderate Risk'
    },
    'IN': {
      hasLaw: true,
      statute: 'Ind. Code § 34-28-5-3.5',
      requirements: 'Must provide name when lawfully detained',
      penalty: 'Class C misdemeanor',
      constitutionalStrategy: ['Challenge detention legality', 'Assert constitutional limits'],
      controllingPrecedents: ['Terry v. Ohio (1968)', '7th Circuit analysis'],
      tacticalNotes: '7th Circuit provides moderate protections.',
      warningLevel: 'Moderate Risk'
    },
    'IA': {
      hasLaw: false,
      statute: 'No stop and identify law',
      requirements: 'No requirement to provide ID during detention',
      penalty: 'None for refusing identification',
      constitutionalStrategy: ['Assert Fourth Amendment rights', 'Refuse ID unless arrested'],
      controllingPrecedents: ['Terry v. Ohio (1968)', '8th Circuit precedents'],
      tacticalNotes: '8th Circuit applies standard constitutional analysis.',
      warningLevel: 'Low Risk - No ID Law'
    },
    'KS': {
      hasLaw: true,
      statute: 'Kan. Stat. § 22-2402',
      requirements: 'Must provide name when lawfully detained',
      penalty: 'Class C misdemeanor',
      constitutionalStrategy: ['Challenge reasonable suspicion basis', 'Limit scope of disclosure'],
      controllingPrecedents: ['Terry v. Ohio (1968)', '10th Circuit precedents'],
      tacticalNotes: '10th Circuit applies moderate constitutional scrutiny.',
      warningLevel: 'Moderate Risk'
    },
    'KY': {
      hasLaw: false,
      statute: 'No stop and identify law',
      requirements: 'No requirement to provide ID during detention',
      penalty: 'None for refusing identification',
      constitutionalStrategy: ['Assert constitutional protections', 'Refuse ID unless arrested'],
      controllingPrecedents: ['Terry v. Ohio (1968)', '6th Circuit precedents'],
      tacticalNotes: '6th Circuit provides moderate constitutional protections.',
      warningLevel: 'Low Risk - No ID Law'
    },
    'LA': {
      hasLaw: true,
      statute: 'La. Code Crim. Proc. art. 215.1',
      requirements: 'Must provide name when lawfully detained',
      penalty: 'Fine up to $200',
      constitutionalStrategy: ['WARNING: 5th Circuit extremely hostile', 'Document everything carefully'],
      controllingPrecedents: ['Terry v. Ohio (1968)', 'WARNING: 5th Circuit hostility'],
      tacticalNotes: 'CRITICAL WARNING: 5th Circuit creates severe liability risks.',
      warningLevel: 'EXTREME DANGER - 5th Circuit Hostility'
    },
    'ME': {
      hasLaw: false,
      statute: 'No stop and identify law',
      requirements: 'No requirement to provide ID during detention',
      penalty: 'None for refusing identification',
      constitutionalStrategy: ['Assert strong constitutional protections', 'Refuse ID unless arrested'],
      controllingPrecedents: ['Terry v. Ohio (1968)', '1st Circuit protective precedents'],
      tacticalNotes: '1st Circuit provides strong constitutional protections.',
      warningLevel: 'Low Risk - No ID Law'
    },
    'MD': {
      hasLaw: false,
      statute: 'No stop and identify law',
      requirements: 'No requirement to provide ID during detention',
      penalty: 'None for refusing identification',
      constitutionalStrategy: ['Assert Fourth Amendment protections', 'Refuse ID unless arrested'],
      controllingPrecedents: ['Terry v. Ohio (1968)', '4th Circuit strong protections'],
      tacticalNotes: '4th Circuit provides excellent constitutional protections.',
      warningLevel: 'Low Risk - Strong Circuit Protection'
    },
    'MA': {
      hasLaw: false,
      statute: 'No stop and identify law',
      requirements: 'No requirement to provide ID during detention',
      penalty: 'None for refusing identification',
      constitutionalStrategy: ['Assert strong state constitutional protections', 'Refuse ID unless arrested'],
      controllingPrecedents: ['Massachusetts Constitution Article 14', '1st Circuit protections'],
      tacticalNotes: '1st Circuit and state constitution provide strong protections.',
      warningLevel: 'Low Risk - Strong Constitutional Protection'
    },
    'MI': {
      hasLaw: false,
      statute: 'No stop and identify law',
      requirements: 'No requirement to provide ID during detention',
      penalty: 'None for refusing identification',
      constitutionalStrategy: ['Assert constitutional rights', 'Refuse ID unless arrested'],
      controllingPrecedents: ['Terry v. Ohio (1968)', '6th Circuit precedents'],
      tacticalNotes: '6th Circuit provides moderate constitutional analysis.',
      warningLevel: 'Low Risk - No ID Law'
    },
    'MN': {
      hasLaw: false,
      statute: 'No stop and identify law',
      requirements: 'No requirement to provide ID during detention',
      penalty: 'None for refusing identification',
      constitutionalStrategy: ['Assert Fourth Amendment protections', 'Refuse ID unless arrested'],
      controllingPrecedents: ['Terry v. Ohio (1968)', '8th Circuit precedents'],
      tacticalNotes: '8th Circuit applies moderate constitutional scrutiny.',
      warningLevel: 'Low Risk - No ID Law'
    },
    'MS': {
      hasLaw: false,
      statute: 'No stop and identify law',
      requirements: 'No requirement to provide ID during detention',
      penalty: 'None for refusing identification',
      constitutionalStrategy: ['WARNING: 5th Circuit extremely hostile', 'Document everything'],
      controllingPrecedents: ['Terry v. Ohio (1968)', 'WARNING: 5th Circuit hostility'],
      tacticalNotes: 'CRITICAL WARNING: 5th Circuit creates severe constitutional risks.',
      warningLevel: 'EXTREME DANGER - 5th Circuit Hostility'
    },
    'MO': {
      hasLaw: true,
      statute: 'Mo. Rev. Stat. § 84.710',
      requirements: 'Must provide name when lawfully detained',
      penalty: 'Fine',
      constitutionalStrategy: ['Challenge reasonable suspicion standard', 'Limit disclosure scope'],
      controllingPrecedents: ['Terry v. Ohio (1968)', '8th Circuit precedents'],
      tacticalNotes: '8th Circuit applies standard constitutional analysis.',
      warningLevel: 'Moderate Risk'
    },
    'MT': {
      hasLaw: true,
      statute: 'Mont. Code § 46-5-401',
      requirements: 'Must provide name when lawfully detained',
      penalty: 'Misdemeanor',
      constitutionalStrategy: ['Assert strong state privacy protections', 'Challenge detention basis'],
      controllingPrecedents: ['Montana Constitution Article II, Section 10', '9th Circuit protections'],
      tacticalNotes: 'Montana Constitution provides privacy protections exceeding federal standards.',
      warningLevel: 'Low Risk - Strong State Protection'
    },
    'NE': {
      hasLaw: true,
      statute: 'Neb. Rev. Stat. § 29-829',
      requirements: 'Must provide name when lawfully detained',
      penalty: 'Class V misdemeanor',
      constitutionalStrategy: ['Challenge reasonable suspicion', 'Assert constitutional limits'],
      controllingPrecedents: ['Terry v. Ohio (1968)', '8th Circuit precedents'],
      tacticalNotes: '8th Circuit applies moderate constitutional scrutiny.',
      warningLevel: 'Moderate Risk'
    },
    'NV': {
      hasLaw: true,
      statute: 'NRS 171.123 (Hiibel case origin)',
      requirements: 'Must identify when detained, 60-minute limit',
      penalty: 'Misdemeanor',
      constitutionalStrategy: ['Challenge reasonable suspicion under strict Hiibel precedent', 'Assert time limits'],
      controllingPrecedents: ['Hiibel v. Sixth Judicial District Court (2004)', 'Terry v. Ohio (1968)'],
      tacticalNotes: 'Origin of Hiibel case provides detailed precedential guidance.',
      warningLevel: 'Moderate Risk - Well-Established Limits'
    },
    'NH': {
      hasLaw: true,
      statute: 'N.H. Rev. Stat. § 594:2',
      requirements: 'Must provide name when lawfully detained',
      penalty: 'Violation',
      constitutionalStrategy: ['Challenge detention legality', 'Assert 1st Circuit protections'],
      controllingPrecedents: ['Terry v. Ohio (1968)', '1st Circuit protective precedents'],
      tacticalNotes: '1st Circuit provides strong constitutional protections.',
      warningLevel: 'Low Risk - Protective Circuit'
    },
    'NJ': {
      hasLaw: false,
      statute: 'No stop and identify law',
      requirements: 'No requirement to provide ID during detention',
      penalty: 'None for refusing identification',
      constitutionalStrategy: ['Assert strong state constitutional protections', 'Refuse ID unless arrested'],
      controllingPrecedents: ['New Jersey Constitution privacy protections', '3rd Circuit precedents'],
      tacticalNotes: 'New Jersey provides constitutional protections exceeding federal minimums.',
      warningLevel: 'Low Risk - Strong State Protection'
    },
    'NM': {
      hasLaw: true,
      statute: 'N.M. Stat. § 30-22-3',
      requirements: 'Must provide name when lawfully detained',
      penalty: 'Petty misdemeanor',
      constitutionalStrategy: ['Challenge reasonable suspicion', 'Assert constitutional limits'],
      controllingPrecedents: ['Terry v. Ohio (1968)', '10th Circuit precedents'],
      tacticalNotes: '10th Circuit applies standard constitutional analysis.',
      warningLevel: 'Moderate Risk'
    },
    'NY': {
      hasLaw: false,
      statute: 'No stop and identify law',
      requirements: 'No requirement to provide ID during detention',
      penalty: 'None for refusing identification',
      constitutionalStrategy: ['Assert strong constitutional protections', 'Leverage Floyd precedent'],
      controllingPrecedents: ['Floyd v. City of New York', '2nd Circuit protective precedents'],
      tacticalNotes: '2nd Circuit provides strong constitutional protections.',
      warningLevel: 'Low Risk - Strong Circuit Protection'
    },
    'NC': {
      hasLaw: false,
      statute: 'No stop and identify law',
      requirements: 'No requirement to provide ID during detention',
      penalty: 'None for refusing identification',
      constitutionalStrategy: ['Assert Fourth Amendment protections', 'Leverage 4th Circuit strength'],
      controllingPrecedents: ['Terry v. Ohio (1968)', '4th Circuit strong protections'],
      tacticalNotes: '4th Circuit provides excellent constitutional protections.',
      warningLevel: 'Low Risk - Strong Circuit Protection'
    },
    'ND': {
      hasLaw: true,
      statute: 'N.D. Cent. Code § 29-29-21',
      requirements: 'Must provide name when lawfully detained',
      penalty: 'Class B misdemeanor',
      constitutionalStrategy: ['Challenge reasonable suspicion', 'Assert constitutional limits'],
      controllingPrecedents: ['Terry v. Ohio (1968)', '8th Circuit precedents'],
      tacticalNotes: '8th Circuit applies moderate constitutional scrutiny.',
      warningLevel: 'Moderate Risk'
    },
    'OH': {
      hasLaw: true,
      statute: 'Ohio Rev. Code § 2921.29',
      requirements: 'Must provide name, address, or date of birth when lawfully detained',
      penalty: 'Minor misdemeanor',
      constitutionalStrategy: ['Challenge scope of required information', 'Assert Brandenburg protections'],
      controllingPrecedents: ['Brandenburg v. Ohio (1969)', 'Terry v. Ohio (1968)'],
      tacticalNotes: '6th Circuit applies moderate constitutional analysis.',
      warningLevel: 'Moderate Risk'
    },
    'OK': {
      hasLaw: false,
      statute: 'No stop and identify law',
      requirements: 'No requirement to provide ID during detention',
      penalty: 'None for refusing identification',
      constitutionalStrategy: ['Assert Fourth Amendment protections', 'Refuse ID unless arrested'],
      controllingPrecedents: ['Terry v. Ohio (1968)', '10th Circuit precedents'],
      tacticalNotes: '10th Circuit applies standard constitutional analysis.',
      warningLevel: 'Low Risk - No ID Law'
    },
    'OR': {
      hasLaw: false,
      statute: 'No stop and identify law',
      requirements: 'No requirement to provide ID during detention',
      penalty: 'None for refusing identification',
      constitutionalStrategy: ['Assert Fourth Amendment protections', 'Leverage 9th Circuit strength'],
      controllingPrecedents: ['Terry v. Ohio (1968)', '9th Circuit protective precedents'],
      tacticalNotes: '9th Circuit provides strongest constitutional protections.',
      warningLevel: 'Low Risk - Strongest Circuit Protection'
    },
    'PA': {
      hasLaw: false,
      statute: 'No stop and identify law',
      requirements: 'No requirement to provide ID during detention',
      penalty: 'None for refusing identification',
      constitutionalStrategy: ['Assert Fourth Amendment protections', 'Refuse ID unless arrested'],
      controllingPrecedents: ['Terry v. Ohio (1968)', '3rd Circuit precedents'],
      tacticalNotes: '3rd Circuit applies moderate constitutional scrutiny.',
      warningLevel: 'Low Risk - No ID Law'
    },
    'RI': {
      hasLaw: true,
      statute: 'R.I. Gen. Laws § 12-7-1',
      requirements: 'Must provide name when lawfully detained',
      penalty: 'Fine',
      constitutionalStrategy: ['Challenge detention legality', 'Assert 1st Circuit protections'],
      controllingPrecedents: ['Terry v. Ohio (1968)', '1st Circuit protective precedents'],
      tacticalNotes: '1st Circuit provides strong constitutional protections.',
      warningLevel: 'Low Risk - Protective Circuit'
    },
    'SC': {
      hasLaw: false,
      statute: 'No stop and identify law',
      requirements: 'No requirement to provide ID during detention',
      penalty: 'None for refusing identification',
      constitutionalStrategy: ['Assert Fourth Amendment protections', 'Leverage 4th Circuit strength'],
      controllingPrecedents: ['Terry v. Ohio (1968)', '4th Circuit strong protections'],
      tacticalNotes: '4th Circuit provides excellent constitutional protections.',
      warningLevel: 'Low Risk - Strong Circuit Protection'
    },
    'SD': {
      hasLaw: false,
      statute: 'No stop and identify law',
      requirements: 'No requirement to provide ID during detention',
      penalty: 'None for refusing identification',
      constitutionalStrategy: ['Assert Fourth Amendment protections', 'Refuse ID unless arrested'],
      controllingPrecedents: ['Terry v. Ohio (1968)', '8th Circuit precedents'],
      tacticalNotes: '8th Circuit applies moderate constitutional scrutiny.',
      warningLevel: 'Low Risk - No ID Law'
    },
    'TN': {
      hasLaw: false,
      statute: 'No stop and identify law',
      requirements: 'No requirement to provide ID during detention',
      penalty: 'None for refusing identification',
      constitutionalStrategy: ['Assert Fourth Amendment protections', 'Refuse ID unless arrested'],
      controllingPrecedents: ['Terry v. Ohio (1968)', '6th Circuit precedents'],
      tacticalNotes: '6th Circuit provides moderate constitutional protections.',
      warningLevel: 'Low Risk - No ID Law'
    },
    'TX': {
      hasLaw: true,
      statute: 'Tex. Penal Code § 38.02',
      requirements: 'Must identify ONLY when arrested (not during detention)',
      penalty: 'Class C misdemeanor',
      constitutionalStrategy: ['Distinguish detention from arrest', 'WARNING: 5th Circuit hostile'],
      controllingPrecedents: ['Brown v. Texas (1979)', 'WARNING: McKesson v. Doe (2023)'],
      tacticalNotes: 'CRITICAL WARNING: 5th Circuit created negligent protest liability.',
      warningLevel: 'EXTREME DANGER - 5th Circuit Hostility'
    },
    'UT': {
      hasLaw: true,
      statute: 'Utah Code § 77-7-15',
      requirements: 'Must provide name when lawfully detained',
      penalty: 'Class C misdemeanor',
      constitutionalStrategy: ['Challenge reasonable suspicion', 'Assert constitutional limits'],
      controllingPrecedents: ['Terry v. Ohio (1968)', '10th Circuit precedents'],
      tacticalNotes: '10th Circuit applies standard constitutional analysis.',
      warningLevel: 'Moderate Risk'
    },
    'VT': {
      hasLaw: true,
      statute: 'Vt. Stat. tit. 24, § 1983',
      requirements: 'Must provide name when lawfully detained',
      penalty: 'Fine',
      constitutionalStrategy: ['Challenge detention basis', 'Assert 2nd Circuit protections'],
      controllingPrecedents: ['Terry v. Ohio (1968)', '2nd Circuit protective precedents'],
      tacticalNotes: '2nd Circuit provides strong constitutional protections.',
      warningLevel: 'Low Risk - Protective Circuit'
    },
    'VA': {
      hasLaw: false,
      statute: 'No stop and identify law',
      requirements: 'No requirement to provide ID during detention',
      penalty: 'None for refusing identification',
      constitutionalStrategy: ['Assert Fourth Amendment protections', 'Leverage 4th Circuit strength'],
      controllingPrecedents: ['Terry v. Ohio (1968)', '4th Circuit strong protections'],
      tacticalNotes: '4th Circuit provides excellent constitutional protections.',
      warningLevel: 'Low Risk - Strong Circuit Protection'
    },
    'WA': {
      hasLaw: false,
      statute: 'No stop and identify law',
      requirements: 'No requirement to provide ID during detention',
      penalty: 'None for refusing identification',
      constitutionalStrategy: ['Assert Fourth Amendment protections', 'Leverage 9th Circuit strength'],
      controllingPrecedents: ['Terry v. Ohio (1968)', '9th Circuit protective precedents'],
      tacticalNotes: '9th Circuit provides strongest constitutional protections.',
      warningLevel: 'Low Risk - Strongest Circuit Protection'
    },
    'WV': {
      hasLaw: false,
      statute: 'No stop and identify law',
      requirements: 'No requirement to provide ID during detention',
      penalty: 'None for refusing identification',
      constitutionalStrategy: ['Assert Fourth Amendment protections', 'Leverage 4th Circuit strength'],
      controllingPrecedents: ['Terry v. Ohio (1968)', '4th Circuit strong protections'],
      tacticalNotes: '4th Circuit provides excellent constitutional protections.',
      warningLevel: 'Low Risk - Strong Circuit Protection'
    },
    'WI': {
      hasLaw: true,
      statute: 'Wis. Stat. § 968.24',
      requirements: 'Must provide name when lawfully detained',
      penalty: 'Forfeiture',
      constitutionalStrategy: ['Challenge reasonable suspicion', 'Assert constitutional limits'],
      controllingPrecedents: ['Terry v. Ohio (1968)', '7th Circuit precedents'],
      tacticalNotes: '7th Circuit applies moderate constitutional scrutiny.',
      warningLevel: 'Moderate Risk'
    },
    'WY': {
      hasLaw: false,
      statute: 'No stop and identify law',
      requirements: 'No requirement to provide ID during detention',
      penalty: 'None for refusing identification',
      constitutionalStrategy: ['Assert Fourth Amendment protections', 'Refuse ID unless arrested'],
      controllingPrecedents: ['Terry v. Ohio (1968)', '10th Circuit precedents'],
      tacticalNotes: '10th Circuit applies standard constitutional analysis.',
      warningLevel: 'Low Risk - No ID Law'
    },
    'DC': {
      hasLaw: false,
      statute: 'No stop and identify law',
      requirements: 'No requirement to provide ID during detention',
      penalty: 'None for refusing identification',
      constitutionalStrategy: ['Assert Fourth Amendment protections', 'Refuse ID unless arrested'],
      controllingPrecedents: ['Terry v. Ohio (1968)', 'D.C. Circuit precedents'],
      tacticalNotes: 'D.C. Circuit applies careful constitutional analysis.',
      warningLevel: 'Low Risk - No ID Law'
    }
  }), []);

<<<<<<< Updated upstream
  // First Amendment landmark cases for key states
=======
  // Enhanced First Amendment landmark cases with constitutional impact analysis
>>>>>>> Stashed changes
  const firstAmendmentLandmarks = useMemo(() => ({
    'AL': {
      caseName: 'NAACP v. Alabama',
      citation: '357 U.S. 449 (1958)',
      year: '1958',
      constitutionalSignificance: 'Established freedom of association as fundamental right',
      facts: 'Alabama demanded NAACP membership lists during civil rights activism',
      holding: 'Compelled disclosure of membership violates First Amendment association rights',
      tacticalImpact: 'Foundation for associational privacy in organizing',
      modernApplication: 'Protects digital organizing and activist networks'
    },
    'LA': {
      caseName: 'Cox v. Louisiana',
      citation: '379 U.S. 536 (1965)',
      year: '1965',
      constitutionalSignificance: 'Civil rights protest limitations and time/place/manner restrictions',
      facts: 'Reverend Cox led civil rights demonstration near courthouse, arrested for disturbing peace',
      holding: 'States cannot broadly prohibit peaceful demonstrations but may impose narrow time/place/manner restrictions',
      tacticalImpact: 'Established framework for protest regulation but with significant limitations',
      modernApplication: 'WARNING: 5th Circuit McKesson decision has effectively gutted these protections'
    },
    'MS': {
      caseName: 'Mississippi Burning Cases - Civil Rights Workers Murders',
      citation: 'United States v. Price, 383 U.S. 787 (1966)',
      year: '1966',
      constitutionalSignificance: 'Federal prosecution of state actors violating civil rights',
      facts: 'Murder of civil rights workers James Chaney, Andrew Goodman, and Michael Schwerner',
      holding: 'Federal courts have jurisdiction over state actors conspiring to violate civil rights',
      tacticalImpact: 'Established federal oversight of state civil rights violations',
      modernApplication: 'WARNING: 5th Circuit has severely weakened these protections'
    },
    'CA': {
      caseName: 'Cohen v. California',
      citation: '403 U.S. 15 (1971)',
      year: '1971',
      constitutionalSignificance: 'Strongest protection for offensive political speech',
      facts: 'Paul Cohen wore profane anti-draft jacket in courthouse',
      holding: 'Offensive political speech protected unless directed incitement',
      tacticalImpact: 'Broad protection for provocative political expression',
      modernApplication: 'Critical for protecting harsh government criticism'
    },
    'TX': {
      caseName: 'Texas v. Johnson',
      citation: '491 U.S. 397 (1989)',
      year: '1989',
      constitutionalSignificance: 'Symbolic political speech protection',
      facts: 'Gregory Johnson burned flag during RNC protest',
      holding: 'Flag burning constitutes protected symbolic speech',
      tacticalImpact: 'Strong protection for symbolic political expression',
      modernApplication: 'WARNING: 5th Circuit McKesson decision creates protest liability'
    },
    'OH': {
      caseName: 'Brandenburg v. Ohio',
      citation: '395 U.S. 444 (1969)',
      year: '1969',
      constitutionalSignificance: 'Highest protection for political speech',
      facts: 'KKK leader made inflammatory speech at rally',
      holding: 'Speech protected unless directed to imminent lawless action',
      tacticalImpact: 'Strongest protection for political speech',
      modernApplication: 'Gold standard but 5th Circuit creates dangerous exceptions'
    },
    'CO': {
      caseName: 'Counterman v. Colorado',
      citation: '600 U.S. 66 (2023)',
      year: '2023',
      constitutionalSignificance: 'Digital age true threats protection',
      facts: 'Prosecution for social media messages without subjective intent',
      holding: 'True threats require proof of subjective awareness',
      tacticalImpact: 'Higher protection for online speech',
      modernApplication: 'Essential for protecting digital communications'
    }
  }), []);

<<<<<<< Updated upstream
  // Circuit analysis
=======
  // Circuit-specific constitutional analysis
>>>>>>> Stashed changes
  const circuitAnalysis = useMemo(() => ({
    '1st Circuit': {
      approach: 'Protective',
      qualifiedImmunity: 'Strict application requiring clearly established law',
      section1983: 'Moderate plaintiff success rate',
      keyStrengths: ['Strong reasonable suspicion requirements', 'Protective of press rights'],
      warnings: 'Generally favorable but requires thorough precedent research'
    },
    '2nd Circuit': {
      approach: 'Protective',
      qualifiedImmunity: 'Increasingly restrictive application',
      section1983: 'Strong municipal liability precedents',
      keyStrengths: ['Floyd v. City of New York protections', 'Strong press access rights'],
      warnings: 'Sophisticated legal arguments required'
    },
    '3rd Circuit': {
      approach: 'Moderate',
      qualifiedImmunity: 'Standard application',
      section1983: 'Mixed plaintiff success rate',
      keyStrengths: ['Moderate constitutional interpretation'],
      warnings: 'Standard constitutional analysis applies'
    },
    '4th Circuit': {
      approach: 'Strongly Protective',
      qualifiedImmunity: 'More restrictive than most circuits',
      section1983: 'Excellent precedents',
      keyStrengths: ['Strong digital privacy protections', 'Restrictive ID requirements'],
      warnings: 'Excellent jurisdiction for constitutional challenges'
    },
    '5th Circuit': {
      approach: 'EXTREMELY HOSTILE',
      qualifiedImmunity: 'Broadest application favoring officers',
      section1983: 'Very high bar for municipal liability',
      keyStrengths: 'NONE - Avoid this circuit',
      warnings: 'CRITICAL: Creates negligent protest liability. NEVER file organizer cases here.'
    },
    '6th Circuit': {
      approach: 'Moderate',
      qualifiedImmunity: 'Standard application',
      section1983: 'Mixed success rate',
      keyStrengths: ['Standard constitutional analysis'],
      warnings: 'Requires solid constitutional arguments'
    },
    '7th Circuit': {
      approach: 'Moderate',
      qualifiedImmunity: 'Standard application',
      section1983: 'Moderate success rate',
      keyStrengths: ['Careful constitutional analysis'],
      warnings: 'Standard constitutional analysis applies'
    },
    '8th Circuit': {
      approach: 'Moderate',
      qualifiedImmunity: 'Standard application',
      section1983: 'Mixed success rate',
      keyStrengths: ['Standard constitutional interpretation'],
      warnings: 'Requires thorough constitutional arguments'
    },
    '9th Circuit': {
      approach: 'Most Protective',
      qualifiedImmunity: 'Most restrictive application',
      section1983: 'Broad interpretation of violations',
      keyStrengths: ['Strongest reasonable suspicion requirements', 'Broad recording rights'],
      warnings: 'Excellent jurisdiction but appeals may reverse'
    },
    '10th Circuit': {
      approach: 'Moderate',
      qualifiedImmunity: 'Standard application',
      section1983: 'Standard analysis',
      keyStrengths: ['Careful constitutional analysis'],
      warnings: 'Standard constitutional analysis applies'
    },
    '11th Circuit': {
      approach: 'Moderate',
      qualifiedImmunity: 'Standard application',
      section1983: 'Mixed success rate',
      keyStrengths: ['Standard Terry analysis'],
      warnings: 'Requires solid constitutional arguments'
    },
    'D.C. Circuit': {
      approach: 'Moderate',
      qualifiedImmunity: 'Careful application',
      section1983: 'Thoughtful analysis',
      keyStrengths: ['Sophisticated constitutional analysis'],
      warnings: 'Requires detailed legal arguments'
    }
  }), []);

<<<<<<< Updated upstream
  // State constitutional protections
  const stateConstitutionalProtections = useMemo(() => ({
    'MT': 'Article II, Section 10 - Privacy rights exceed federal Fourth Amendment',
    'CA': 'Article I, Section 1 - Inalienable privacy rights stronger than federal law',
    'AK': 'Article I, Section 22 - Privacy protections broader than federal minimums',
    'HI': 'Strong constitutional privacy traditions protecting autonomy',
    'MA': 'Article 14 - Stronger search and seizure protections than federal',
    'NJ': 'Robust state privacy jurisprudence exceeding federal protections',
    'NY': 'Strong state constitutional protections in criminal procedure',
    'WA': 'Article I, Section 7 - Strong privacy protections'
=======
  // State constitutional protections exceeding federal minimums
  const stateConstitutionalProtections = useMemo(() => ({
    'MT': 'Article II, Section 10 - Right to privacy exceeds federal Fourth Amendment protections',
    'CA': 'Article I, Section 1 - Inalienable right to privacy creates stronger protections than federal law',
    'AK': 'Article I, Section 22 - Privacy protections broader than federal constitutional minimums',
    'HI': 'Strong constitutional privacy traditions protecting individual autonomy',
    'MA': 'Article 14 - Protection against unreasonable searches stronger than federal standards',
    'NJ': 'Robust state constitutional privacy jurisprudence exceeding federal protections'
>>>>>>> Stashed changes
  }), []);

  const states = useMemo(() => [
    { code: 'AL', name: 'Alabama' }, { code: 'AK', name: 'Alaska' }, { code: 'AZ', name: 'Arizona' },
    { code: 'AR', name: 'Arkansas' }, { code: 'CA', name: 'California' }, { code: 'CO', name: 'Colorado' },
    { code: 'CT', name: 'Connecticut' }, { code: 'DE', name: 'Delaware' }, { code: 'FL', name: 'Florida' },
    { code: 'GA', name: 'Georgia' }, { code: 'HI', name: 'Hawaii' }, { code: 'ID', name: 'Idaho' },
    { code: 'IL', name: 'Illinois' }, { code: 'IN', name: 'Indiana' }, { code: 'IA', name: 'Iowa' },
    { code: 'KS', name: 'Kansas' }, { code: 'KY', name: 'Kentucky' }, { code: 'LA', name: 'Louisiana' },
    { code: 'ME', name: 'Maine' }, { code: 'MD', name: 'Maryland' }, { code: 'MA', name: 'Massachusetts' },
    { code: 'MI', name: 'Michigan' }, { code: 'MN', name: 'Minnesota' }, { code: 'MS', name: 'Mississippi' },
    { code: 'MO', name: 'Missouri' }, { code: 'MT', name: 'Montana' }, { code: 'NE', name: 'Nebraska' },
    { code: 'NV', name: 'Nevada' }, { code: 'NH', name: 'New Hampshire' }, { code: 'NJ', name: 'New Jersey' },
    { code: 'NM', name: 'New Mexico' }, { code: 'NY', name: 'New York' }, { code: 'NC', name: 'North Carolina' },
    { code: 'ND', name: 'North Dakota' }, { code: 'OH', name: 'Ohio' }, { code: 'OK', name: 'Oklahoma' },
    { code: 'OR', name: 'Oregon' }, { code: 'PA', name: 'Pennsylvania' }, { code: 'RI', name: 'Rhode Island' },
    { code: 'SC', name: 'South Carolina' }, { code: 'SD', name: 'South Dakota' }, { code: 'TN', name: 'Tennessee' },
    { code: 'TX', name: 'Texas' }, { code: 'UT', name: 'Utah' }, { code: 'VT', name: 'Vermont' },
    { code: 'VA', name: 'Virginia' }, { code: 'WA', name: 'Washington' }, { code: 'WV', name: 'West Virginia' },
    { code: 'WI', name: 'Wisconsin' }, { code: 'WY', name: 'Wyoming' }, { code: 'DC', name: 'District of Columbia' }
  ], []);

  const getTacticalGuidance = useCallback((state, circuit) => {
    const baseGuidance = {
      universalPrinciples: [
        '"Officer, are you detaining me or am I free to leave?"',
        'If detained: "What specific facts give you reasonable suspicion?"',
        'Document badge numbers, patrol car numbers, time, location',
        '"I am exercising my right to remain silent."'
      ]
    };

    if (circuit?.hostility === 'EXTREMELY HOSTILE') {
      return {
        ...baseGuidance,
        circuitSpecific: [
          'CRITICAL WARNING: This circuit is extremely hostile to civil rights',
          'Avoid filing protest organizer cases in this jurisdiction',
          'Document everything - expect judicial skepticism',
          'Consider removal to different circuit if possible'
        ]
      };
    }

    if (circuit?.hostility === 'Protective') {
      return {
        ...baseGuidance,
        circuitSpecific: [
          'This circuit provides stronger constitutional protections',
          'Leverage favorable precedents for broader challenges',
          'Consider this jurisdiction for impact litigation',
          'Strong reasonable suspicion requirements work in your favor'
        ]
      };
    }

    return {
      ...baseGuidance,
      circuitSpecific: [
        'Standard constitutional analysis applies',
        'Focus on specific articulable facts requirement',
        'Document all interactions for potential challenges'
      ]
    };
  }, []);

  const getImmediateActions = useCallback((state) => {
    const stopAndId = stopAndIdStates[state];
    
    if (!stopAndId?.hasLaw) {
      return [
        'REFUSE identification unless under arrest',
        'Assert Fourth Amendment protections',
        'State: "I do not consent to any search"',
        'Ask: "Am I being detained or am I free to leave?"'
      ];
    }

    return [
      'Challenge reasonable suspicion: "What specific facts support suspicion?"',
      'Document officer responses and badge numbers',
      'Limit compliance to statutory minimum only',
      'Assert: "I exercise my right to remain silent beyond identification"'
    ];
  }, [stopAndIdStates]);

  const getWarningColor = useCallback((warningLevel) => {
<<<<<<< Updated upstream
    if (warningLevel?.includes('EXTREME DANGER')) return 'border-red-600 bg-red-900/30';
    if (warningLevel?.includes('Moderate Risk')) return 'border-yellow-600 bg-yellow-900/30';
    if (warningLevel?.includes('Low Risk') || warningLevel?.includes('Minimal Risk')) return 'border-green-600 bg-green-900/30';
    return 'border-gray-600 bg-gray-900/30';
  }, []);

  useEffect(() => {
    if (selectedState) {
      try {
        const circuit = federalCircuits[selectedState];
        const stopAndId = stopAndIdStates[selectedState];
        const firstAmendmentLandmark = firstAmendmentLandmarks[selectedState];
        const circuitInfo = circuit ? circuitAnalysis[circuit.circuit] : null;
        const stateConstitutionalInfo = stateConstitutionalProtections[selectedState];

        // Ensure we have required data
        if (!circuit || !stopAndId) {
          console.error(`Missing data for state: ${selectedState}`);
          return;
        }

        setResults({
          state: states.find(s => s.code === selectedState)?.name,
          circuit,
          stopAndId,
          firstAmendmentLandmark,
          circuitInfo,
          stateConstitutionalInfo,
          tacticalGuidance: getTacticalGuidance(selectedState, circuit),
          immediateActions: getImmediateActions(selectedState)
        });
      } catch (error) {
        console.error('Error processing state data:', error);
        setResults(null);
      }
    } else {
      setResults(null);
    }
  }, [selectedState, federalCircuits, stopAndIdStates, firstAmendmentLandmarks, circuitAnalysis, stateConstitutionalProtections, states, getTacticalGuidance, getImmediateActions]);
=======
    switch (warningLevel) {
      case 'EXTREME DANGER - 5th Circuit Hostility':
        return 'border-red-600 bg-red-900/30';
      case 'Moderate Risk':
        return 'border-yellow-600 bg-yellow-900/30';
      case 'Minimal Risk - Maximum Protection':
        return 'border-green-600 bg-green-900/30';
      case 'Low Risk - 9th Circuit Protection':
        return 'border-blue-600 bg-blue-900/30';
      default:
        return 'border-gray-600 bg-gray-900/30';
    }
  }, []);

  useEffect(() => {
    if (selectedState) {
      const circuit = federalCircuits[selectedState];
      const stopAndId = stopAndIdStates[selectedState];
      const firstAmendmentLandmark = firstAmendmentLandmarks[selectedState];
      const circuitInfo = circuitAnalysis[circuit?.circuit];
      const stateConstitutionalInfo = stateConstitutionalProtections[selectedState];

      setResults({
        state: states.find(s => s.code === selectedState)?.name,
        circuit,
        stopAndId,
        firstAmendmentLandmark,
        circuitInfo,
        stateConstitutionalInfo,
        tacticalGuidance: getTacticalGuidance(selectedState, circuit),
        immediateActions: getImmediateActions(selectedState)
      });
    }
  }, [
    selectedState,
    circuitAnalysis,
    federalCircuits,
    firstAmendmentLandmarks,
    getTacticalGuidance,
    getImmediateActions,
    stateConstitutionalProtections,
    states,
    stopAndIdStates
  ]);
>>>>>>> Stashed changes

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Scale className="h-12 w-12 text-blue-400 mr-4" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Constitutional Rights Research Platform
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Forensic analysis of systematic constitutional violations through jurisdictional manipulation, 
            documenting patterns of institutional circumvention of citizen rights across America's legal landscape
          </p>
        </div>

        {/* State Selection */}
        <div className="max-w-md mx-auto mb-12">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Select Jurisdiction for Constitutional Analysis
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Choose jurisdiction for investigation...</option>
              {states.map(state => (
                <option key={state.code} value={state.code}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results */}
        {results && (
          <div className="space-y-8">
            {/* Circuit Hostility Analysis */}
            <div className={`backdrop-blur-sm rounded-xl p-8 border-2 ${
              results.circuit.hostility === 'EXTREMELY HOSTILE' ? 'border-red-500 bg-red-900/20' :
              results.circuit.hostility === 'Protective' ? 'border-green-500 bg-green-900/20' :
              'border-yellow-500 bg-yellow-900/20'
            }`}>
              <div className="flex items-center mb-6">
                {results.circuit.hostility === 'EXTREMELY HOSTILE' ? 
                  <AlertTriangle className="h-8 w-8 text-red-400 mr-3" /> :
                  <Gavel className="h-8 w-8 text-blue-400 mr-3" />
                }
                <h2 className="text-2xl font-bold">
                  <span className="text-blue-400">Federal Circuit Analysis: </span>
                  <span className={
                    results.circuit.hostility === 'EXTREMELY HOSTILE' ? 'text-red-400' :
                    results.circuit.hostility === 'Protective' ? 'text-green-400' :
                    'text-yellow-400'
                  }>
                    {results.circuit.hostility}
                  </span>
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">{results.circuit.circuit}</h3>
                  <div className="space-y-3">
                    {results.circuitInfo && (
                      <>
                        <div>
                          <span className="font-medium text-white">Qualified Immunity Approach:</span>
                          <span className="ml-2 text-gray-300">{results.circuitInfo.qualifiedImmunity}</span>
                        </div>
                        <div>
                          <span className="font-medium text-white">§1983 Success Rate:</span>
                          <span className="ml-2 text-gray-300">{results.circuitInfo.section1983}</span>
                        </div>
                        <div>
                          <span className="font-medium text-white">Key Strengths:</span>
                          <ul className="ml-2 text-gray-300">
                            {results.circuitInfo.keyStrengths.map((strength, index) => (
                              <li key={index} className="text-sm">• {strength}</li>
                            ))}
                          </ul>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">Strategic Warning</h3>
                  <div className={`p-4 rounded-lg border ${
                    results.circuit.hostility === 'EXTREMELY HOSTILE' ? 'border-red-500 bg-red-900/30' :
                    results.circuit.hostility === 'Protective' ? 'border-green-500 bg-green-900/30' :
                    'border-yellow-500 bg-yellow-900/30'
                  }`}>
                    <p className="text-gray-300 text-sm font-medium">
                      {results.circuitInfo?.warnings || 'Standard constitutional analysis applies'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stop and ID Constitutional Analysis */}
            <div className={`backdrop-blur-sm rounded-xl p-8 border-2 ${getWarningColor(results.stopAndId.warningLevel)}`}>
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-red-400 mr-3" />
                <h2 className="text-2xl font-bold text-red-400">
                  Identification Laws: {results.stopAndId.hasLaw ? 'CONSTITUTIONAL VULNERABILITY' : 'CONSTITUTIONAL PROTECTION'}
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">Legal Framework</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="font-medium text-white">Statute:</span>
                      <span className="ml-2 text-gray-300">{results.stopAndId.statute}</span>
                    </div>
                    <div>
                      <span className="font-medium text-white">Requirements:</span>
                      <span className="ml-2 text-gray-300">{results.stopAndId.requirements}</span>
                    </div>
                    <div>
                      <span className="font-medium text-white">Penalty:</span>
                      <span className="ml-2 text-gray-300">{results.stopAndId.penalty}</span>
                    </div>
                    <div className={`p-3 rounded-lg border ${getWarningColor(results.stopAndId.warningLevel)}`}>
                      <span className="font-medium text-white">Risk Assessment:</span>
                      <span className="ml-2 text-gray-300 text-sm">{results.stopAndId.warningLevel}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">Constitutional Challenge Strategy</h3>
                  <ul className="space-y-2">
                    {results.stopAndId.constitutionalStrategy?.map((strategy, index) => (
                      <li key={index} className="text-gray-300 text-sm flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        {strategy}
                      </li>
                    )) || <li className="text-gray-300 text-sm">Constitutional protections prevent identification demands</li>}
                  </ul>
                  
                  <div className="mt-4">
                    <h4 className="font-medium text-white mb-2">Controlling Precedents:</h4>
                    <ul className="space-y-1">
                      {results.stopAndId.controllingPrecedents?.map((precedent, index) => (
                        <li key={index} className="text-gray-300 text-xs">• {precedent}</li>
                      )) || <li className="text-gray-300 text-xs">Standard Fourth Amendment protections apply</li>}
                    </ul>
                  </div>
                </div>
              </div>
              
              {results.stopAndId.tacticalNotes && (
                <div className="mt-6 p-4 bg-slate-800/50 rounded-lg border border-slate-600">
                  <h4 className="font-medium text-white mb-2">Tactical Analysis:</h4>
                  <p className="text-gray-300 text-sm">{results.stopAndId.tacticalNotes}</p>
                </div>
              )}
            </div>

            {/* First Amendment Landmark Case Analysis */}
            {results.firstAmendmentLandmark && (
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <div className="flex items-center mb-6">
                  <BookMarked className="h-8 w-8 text-yellow-400 mr-3" />
                  <h2 className="text-2xl font-bold text-yellow-400">First Amendment Landmark Analysis</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-purple-400">{results.firstAmendmentLandmark.caseName}</h3>
                    <div className="space-y-3">
                      <div>
                        <span className="font-medium text-white">Citation:</span>
                        <span className="ml-2 text-gray-300">{results.firstAmendmentLandmark.citation}</span>
                      </div>
                      <div>
                        <span className="font-medium text-white">Constitutional Significance:</span>
                        <span className="ml-2 text-gray-300">{results.firstAmendmentLandmark.constitutionalSignificance}</span>
                      </div>
                      <div>
                        <span className="font-medium text-white">Facts:</span>
                        <p className="text-gray-300 text-sm mt-1">{results.firstAmendmentLandmark.facts}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-purple-400">Constitutional Impact</h3>
                    <div className="space-y-3">
                      <div>
                        <span className="font-medium text-white">Holding:</span>
                        <p className="text-gray-300 text-sm mt-1">{results.firstAmendmentLandmark.holding}</p>
                      </div>
                      <div>
                        <span className="font-medium text-white">Tactical Impact:</span>
                        <p className="text-gray-300 text-sm mt-1">{results.firstAmendmentLandmark.tacticalImpact}</p>
                      </div>
                      <div>
                        <span className="font-medium text-white">Modern Application:</span>
                        <p className="text-gray-300 text-sm mt-1">{results.firstAmendmentLandmark.modernApplication}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* State Constitutional Protections */}
            {results.stateConstitutionalInfo && (
              <div className="bg-green-900/20 backdrop-blur-sm rounded-xl p-8 border border-green-700">
                <div className="flex items-center mb-6">
                  <Shield className="h-8 w-8 text-green-400 mr-3" />
                  <h2 className="text-2xl font-bold text-green-400">Enhanced State Constitutional Protections</h2>
                </div>
                <div className="p-4 bg-green-900/30 rounded-lg border border-green-600">
                  <p className="text-gray-300">{results.stateConstitutionalInfo}</p>
                  <p className="text-green-300 text-sm mt-2 font-medium">
                    This state provides constitutional protections exceeding federal constitutional minimums.
                  </p>
                </div>
              </div>
            )}

            {/* Tactical Guidance */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <div className="flex items-center mb-6">
                <TrendingDown className="h-8 w-8 text-purple-400 mr-3" />
                <h2 className="text-2xl font-bold text-purple-400">Immediate Tactical Response Framework</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-blue-400">Universal Principles</h3>
                  <ul className="space-y-2">
                    {results.tacticalGuidance.universalPrinciples.map((principle, index) => (
                      <li key={index} className="text-gray-300 text-sm bg-slate-700/50 p-2 rounded border-l-4 border-blue-400">
                        {principle}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-blue-400">Circuit-Specific Strategy</h3>
                  <ul className="space-y-2">
                    {results.tacticalGuidance.circuitSpecific.map((strategy, index) => (
                      <li key={index} className={`text-gray-300 text-sm p-2 rounded border-l-4 ${
                        results.circuit.hostility === 'EXTREMELY HOSTILE' ? 'bg-red-900/30 border-red-400' :
                        results.circuit.hostility === 'Protective' ? 'bg-green-900/30 border-green-400' :
                        'bg-slate-700/50 border-yellow-400'
                      }`}>
                        {strategy}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Immediate Actions */}
            <div className="bg-blue-900/20 backdrop-blur-sm rounded-xl p-8 border border-blue-700">
              <div className="flex items-center mb-6">
                <AlertCircle className="h-8 w-8 text-blue-400 mr-3" />
                <h2 className="text-2xl font-bold text-blue-400">Immediate Response Protocol</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {results.immediateActions.map((action, index) => (
                  <div key={index} className="bg-blue-900/30 p-4 rounded-lg border border-blue-600">
                    <div className="flex items-center mb-2">
                      <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">
                        {index + 1}
                      </span>
                      <span className="text-blue-300 font-medium text-sm">Step {index + 1}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{action}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Legal Disclaimer */}
            <div className="bg-red-900/20 border border-red-700/50 rounded-xl p-6">
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-red-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-red-400 mb-2">Critical Legal Warning</h3>
                  <p className="text-gray-300 text-sm">
                    This forensic analysis documents systematic constitutional violations and provides general tactical guidance. 
                    It does not constitute legal advice. Constitutional law changes rapidly, and circuit precedents evolve constantly. 
                    The documented patterns of institutional hostility require specialized legal counsel familiar with current jurisprudential trends. 
                    This research platform exposes jurisdictional manipulation of constitutional protections but cannot replace competent legal representation 
                    familiar with local enforcement patterns and judicial temperament.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {!selectedState && (
          <div className="text-center py-16">
            <Scale className="h-24 w-24 text-blue-400 mx-auto mb-6 opacity-50" />
            <p className="text-xl text-gray-400 mb-4">Select a jurisdiction to begin constitutional analysis</p>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              This investigative platform documents systematic patterns of constitutional circumvention through jurisdictional manipulation, 
              revealing how identical citizen conduct faces dramatically different legal consequences across America's fragmented constitutional landscape.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

<<<<<<< Updated upstream
function App() {
  return (
    <div className="App">
      <CivilRightsLegalTool />
    </div>
  );
}

export default App;
=======
export default CivilRightsLegalTool;
>>>>>>> Stashed changes
