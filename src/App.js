import React, { useState, useEffect, useMemo, useCallback } from ‘react’;
import { Search, Scale, AlertCircle, Gavel, Shield, AlertTriangle, BookMarked, TrendingDown } from ‘lucide-react’;
import ‘./App.css’;

const CivilRightsLegalTool = () => {
const [selectedState, setSelectedState] = useState(’’);
const [results, setResults] = useState(null);

// Federal Circuit mapping with jurisdictional analysis
const federalCircuits = useMemo(() => ({
‘AL’: { circuit: ‘11th Circuit’, hostility: ‘Moderate’, districts: [‘Northern District of Alabama’, ‘Middle District of Alabama’, ‘Southern District of Alabama’] },
‘AK’: { circuit: ‘9th Circuit’, hostility: ‘Protective’, districts: [‘District of Alaska’] },
‘AZ’: { circuit: ‘9th Circuit’, hostility: ‘Protective’, districts: [‘District of Arizona’] },
‘AR’: { circuit: ‘8th Circuit’, hostility: ‘Moderate’, districts: [‘Eastern District of Arkansas’, ‘Western District of Arkansas’] },
‘CA’: { circuit: ‘9th Circuit’, hostility: ‘Protective’, districts: [‘Northern District of California’, ‘Central District of California’, ‘Eastern District of California’, ‘Southern District of California’] },
‘CO’: { circuit: ‘10th Circuit’, hostility: ‘Moderate’, districts: [‘District of Colorado’] },
‘CT’: { circuit: ‘2nd Circuit’, hostility: ‘Protective’, districts: [‘District of Connecticut’] },
‘DE’: { circuit: ‘3rd Circuit’, hostility: ‘Moderate’, districts: [‘District of Delaware’] },
‘FL’: { circuit: ‘11th Circuit’, hostility: ‘Moderate’, districts: [‘Northern District of Florida’, ‘Middle District of Florida’, ‘Southern District of Florida’] },
‘GA’: { circuit: ‘11th Circuit’, hostility: ‘Moderate’, districts: [‘Northern District of Georgia’, ‘Middle District of Georgia’, ‘Southern District of Georgia’] },
‘HI’: { circuit: ‘9th Circuit’, hostility: ‘Protective’, districts: [‘District of Hawaii’] },
‘ID’: { circuit: ‘9th Circuit’, hostility: ‘Protective’, districts: [‘District of Idaho’] },
‘IL’: { circuit: ‘7th Circuit’, hostility: ‘Moderate’, districts: [‘Northern District of Illinois’, ‘Central District of Illinois’, ‘Southern District of Illinois’] },
‘IN’: { circuit: ‘7th Circuit’, hostility: ‘Moderate’, districts: [‘Northern District of Indiana’, ‘Southern District of Indiana’] },
‘IA’: { circuit: ‘8th Circuit’, hostility: ‘Moderate’, districts: [‘Northern District of Iowa’, ‘Southern District of Iowa’] },
‘KS’: { circuit: ‘10th Circuit’, hostility: ‘Moderate’, districts: [‘District of Kansas’] },
‘KY’: { circuit: ‘6th Circuit’, hostility: ‘Moderate’, districts: [‘Eastern District of Kentucky’, ‘Western District of Kentucky’] },
‘LA’: { circuit: ‘5th Circuit’, hostility: ‘EXTREMELY HOSTILE’, districts: [‘Eastern District of Louisiana’, ‘Middle District of Louisiana’, ‘Western District of Louisiana’] },
‘ME’: { circuit: ‘1st Circuit’, hostility: ‘Protective’, districts: [‘District of Maine’] },
‘MD’: { circuit: ‘4th Circuit’, hostility: ‘Protective’, districts: [‘District of Maryland’] },
‘MA’: { circuit: ‘1st Circuit’, hostility: ‘Protective’, districts: [‘District of Massachusetts’] },
‘MI’: { circuit: ‘6th Circuit’, hostility: ‘Moderate’, districts: [‘Eastern District of Michigan’, ‘Western District of Michigan’] },
‘MN’: { circuit: ‘8th Circuit’, hostility: ‘Moderate’, districts: [‘District of Minnesota’] },
‘MS’: { circuit: ‘5th Circuit’, hostility: ‘EXTREMELY HOSTILE’, districts: [‘Northern District of Mississippi’, ‘Southern District of Mississippi’] },
‘MO’: { circuit: ‘8th Circuit’, hostility: ‘Moderate’, districts: [‘Eastern District of Missouri’, ‘Western District of Missouri’] },
‘MT’: { circuit: ‘9th Circuit’, hostility: ‘Protective’, districts: [‘District of Montana’] },
‘NE’: { circuit: ‘8th Circuit’, hostility: ‘Moderate’, districts: [‘District of Nebraska’] },
‘NV’: { circuit: ‘9th Circuit’, hostility: ‘Protective’, districts: [‘District of Nevada’] },
‘NH’: { circuit: ‘1st Circuit’, hostility: ‘Protective’, districts: [‘District of New Hampshire’] },
‘NJ’: { circuit: ‘3rd Circuit’, hostility: ‘Moderate’, districts: [‘District of New Jersey’] },
‘NM’: { circuit: ‘10th Circuit’, hostility: ‘Moderate’, districts: [‘District of New Mexico’] },
‘NY’: { circuit: ‘2nd Circuit’, hostility: ‘Protective’, districts: [‘Northern District of New York’, ‘Southern District of New York’, ‘Eastern District of New York’, ‘Western District of New York’] },
‘NC’: { circuit: ‘4th Circuit’, hostility: ‘Protective’, districts: [‘Eastern District of North Carolina’, ‘Middle District of North Carolina’, ‘Western District of North Carolina’] },
‘ND’: { circuit: ‘8th Circuit’, hostility: ‘Moderate’, districts: [‘District of North Dakota’] },
‘OH’: { circuit: ‘6th Circuit’, hostility: ‘Moderate’, districts: [‘Northern District of Ohio’, ‘Southern District of Ohio’] },
‘OK’: { circuit: ‘10th Circuit’, hostility: ‘Moderate’, districts: [‘Northern District of Oklahoma’, ‘Eastern District of Oklahoma’, ‘Western District of Oklahoma’] },
‘OR’: { circuit: ‘9th Circuit’, hostility: ‘Protective’, districts: [‘District of Oregon’] },
‘PA’: { circuit: ‘3rd Circuit’, hostility: ‘Moderate’, districts: [‘Eastern District of Pennsylvania’, ‘Middle District of Pennsylvania’, ‘Western District of Pennsylvania’] },
‘RI’: { circuit: ‘1st Circuit’, hostility: ‘Protective’, districts: [‘District of Rhode Island’] },
‘SC’: { circuit: ‘4th Circuit’, hostility: ‘Protective’, districts: [‘District of South Carolina’] },
‘SD’: { circuit: ‘8th Circuit’, hostility: ‘Moderate’, districts: [‘District of South Dakota’] },
‘TN’: { circuit: ‘6th Circuit’, hostility: ‘Moderate’, districts: [‘Eastern District of Tennessee’, ‘Middle District of Tennessee’, ‘Western District of Tennessee’] },
‘TX’: { circuit: ‘5th Circuit’, hostility: ‘EXTREMELY HOSTILE’, districts: [‘Northern District of Texas’, ‘Southern District of Texas’, ‘Eastern District of Texas’, ‘Western District of Texas’] },
‘UT’: { circuit: ‘10th Circuit’, hostility: ‘Moderate’, districts: [‘District of Utah’] },
‘VT’: { circuit: ‘2nd Circuit’, hostility: ‘Protective’, districts: [‘District of Vermont’] },
‘VA’: { circuit: ‘4th Circuit’, hostility: ‘Protective’, districts: [‘Eastern District of Virginia’, ‘Western District of Virginia’] },
‘WA’: { circuit: ‘9th Circuit’, hostility: ‘Protective’, districts: [‘Eastern District of Washington’, ‘Western District of Washington’] },
‘WV’: { circuit: ‘4th Circuit’, hostility: ‘Protective’, districts: [‘Northern District of West Virginia’, ‘Southern District of West Virginia’] },
‘WI’: { circuit: ‘7th Circuit’, hostility: ‘Moderate’, districts: [‘Eastern District of Wisconsin’, ‘Western District of Wisconsin’] },
‘WY’: { circuit: ‘10th Circuit’, hostility: ‘Moderate’, districts: [‘District of Wyoming’] },
‘DC’: { circuit: ‘D.C. Circuit’, hostility: ‘Moderate’, districts: [‘District of Columbia’] }
}), []);

// Complete Stop and ID States data for ALL states
const stopAndIdStates = useMemo(() => ({
‘AL’: {
hasLaw: true,
statute: ‘Ala. Code § 15-5-30’,
requirements: ‘Must provide name when lawfully detained on reasonable suspicion’,
penalty: ‘Misdemeanor, up to 3 months jail’,
constitutionalStrategy: [‘Demand specific articulable facts supporting reasonable suspicion’, ‘Challenge overbroad application’],
controllingPrecedents: [‘Terry v. Ohio (1968)’, ‘United States v. Sokolow (1989)’],
tacticalNotes: ‘11th Circuit applies standard Terry analysis.’,
warningLevel: ‘Moderate Risk’
},
‘AK’: {
hasLaw: false,
statute: ‘No stop and identify law’,
requirements: ‘No requirement to provide ID during detention’,
penalty: ‘None for refusing identification’,
constitutionalStrategy: [‘Assert strong state privacy protections’, ‘Refuse identification unless arrested’],
controllingPrecedents: [‘Alaska Constitution Article I, Section 22’],
tacticalNotes: ‘9th Circuit provides strong protections.’,
warningLevel: ‘Low Risk - Constitutional Protection’
},
‘AZ’: {
hasLaw: true,
statute: ‘A.R.S. § 13-2412’,
requirements: ‘Must provide truthful name when lawfully detained’,
penalty: ‘Class 1 misdemeanor’,
constitutionalStrategy: [‘Challenge lawfulness of detention’, ‘Invoke 9th Circuit protections’],
controllingPrecedents: [‘Miranda v. Arizona (1966)’, ‘Arizona v. Johnson (2009)’],
tacticalNotes: ‘9th Circuit provides stronger protections than most circuits.’,
warningLevel: ‘Low Risk - 9th Circuit Protection’
},
‘AR’: {
hasLaw: true,
statute: ‘Ark. Code § 5-71-213’,
requirements: ‘Must provide name when lawfully stopped’,
penalty: ‘Class C misdemeanor’,
constitutionalStrategy: [‘Challenge reasonable suspicion standard’, ‘Demand specific articulable facts’],
controllingPrecedents: [‘Terry v. Ohio (1968)’, ‘Brown v. Texas (1979)’],
tacticalNotes: ‘8th Circuit applies moderate scrutiny to Terry stops.’,
warningLevel: ‘Moderate Risk’
},
‘CA’: {
hasLaw: false,
statute: ‘No general stop and identify law - CONSTITUTIONAL PROTECTION’,
requirements: ‘NO requirement to provide ID during consensual encounters’,
penalty: ‘None for refusing identification’,
constitutionalStrategy: [‘Assert California Constitutional privacy rights’, ‘Refuse identification unless arrested’],
controllingPrecedents: [‘Cohen v. California (1971)’, ‘California Constitution Article I, Section 1’],
tacticalNotes: ‘Strongest constitutional protections in nation.’,
warningLevel: ‘Minimal Risk - Maximum Protection’
},
‘CO’: {
hasLaw: true,
statute: ‘C.R.S. § 16-3-103’,
requirements: ‘Must provide name, address, and explanation of actions when detained’,
penalty: ‘Class 3 misdemeanor’,
constitutionalStrategy: [‘Challenge scope of required information’, ‘Assert right to remain silent beyond ID’],
controllingPrecedents: [‘Counterman v. Colorado (2023)’, ‘Terry v. Ohio (1968)’],
tacticalNotes: ‘10th Circuit applies standard constitutional analysis.’,
warningLevel: ‘Moderate Risk’
},
‘CT’: {
hasLaw: false,
statute: ‘No stop and identify law’,
requirements: ‘No requirement to provide ID during detention’,
penalty: ‘None for refusing identification’,
constitutionalStrategy: [‘Assert Fourth Amendment protections’, ‘Refuse identification unless arrested’],
controllingPrecedents: [‘Terry v. Ohio (1968)’, ‘2nd Circuit precedents’],
tacticalNotes: ‘2nd Circuit provides good constitutional protections.’,
warningLevel: ‘Low Risk - No ID Law’
},
‘DE’: {
hasLaw: true,
statute: ‘Del. Code tit. 11, § 1902’,
requirements: ‘Must provide name when lawfully detained’,
penalty: ‘Class C misdemeanor’,
constitutionalStrategy: [‘Challenge reasonable suspicion foundation’, ‘Limit to name only’],
controllingPrecedents: [‘Terry v. Ohio (1968)’, ‘Hiibel v. Sixth Judicial District (2004)’],
tacticalNotes: ‘3rd Circuit applies moderate scrutiny.’,
warningLevel: ‘Moderate Risk’
},
‘FL’: {
hasLaw: true,
statute: ‘Fla. Stat. § 856.021 (loitering/prowling contexts only)’,
requirements: ‘Must identify when detained for loitering or prowling’,
penalty: ‘Second degree misdemeanor’,
constitutionalStrategy: [‘Challenge vague loitering standards’, ‘Assert right to be present in public’],
controllingPrecedents: [‘Papachristou v. Jacksonville (1972)’, ‘City of Chicago v. Morales (1999)’],
tacticalNotes: ‘Limited to specific loitering/prowling contexts.’,
warningLevel: ‘Moderate Risk - Limited Scope’
},
‘GA’: {
hasLaw: true,
statute: ‘O.C.G.A. § 16-11-36’,
requirements: ‘Must provide name and address when lawfully detained’,
penalty: ‘Misdemeanor’,
constitutionalStrategy: [‘Challenge reasonable suspicion’, ‘Limit to required information only’],
controllingPrecedents: [‘Terry v. Ohio (1968)’, ‘11th Circuit precedents’],
tacticalNotes: ‘11th Circuit applies standard Terry analysis.’,
warningLevel: ‘Moderate Risk’
},
‘HI’: {
hasLaw: false,
statute: ‘No stop and identify law’,
requirements: ‘No requirement to provide ID during detention’,
penalty: ‘None for refusing identification’,
constitutionalStrategy: [‘Assert state constitutional privacy rights’, ‘Refuse ID unless arrested’],
controllingPrecedents: [‘Hawaii Constitution privacy protections’, ‘9th Circuit precedents’],
tacticalNotes: ‘9th Circuit provides strong constitutional protections.’,
warningLevel: ‘Low Risk - No ID Law’
},
‘ID’: {
hasLaw: false,
statute: ‘No stop and identify law’,
requirements: ‘No requirement to provide ID during detention’,
penalty: ‘None for refusing identification’,
constitutionalStrategy: [‘Assert Fourth Amendment protections’, ‘Refuse ID unless arrested’],
controllingPrecedents: [‘Terry v. Ohio (1968)’, ‘9th Circuit precedents’],
tacticalNotes: ‘9th Circuit provides protective constitutional interpretation.’,
warningLevel: ‘Low Risk - No ID Law’
},
‘IL’: {
hasLaw: true,
statute: ‘725 ILCS 5/107-14’,
requirements: ‘Must provide name when lawfully detained’,
penalty: ‘Class C misdemeanor’,
constitutionalStrategy: [‘Challenge reasonable suspicion standard’, ‘Limit to name disclosure only’],
controllingPrecedents: [‘Terry v. Ohio (1968)’, ‘7th Circuit precedents’],
tacticalNotes: ‘7th Circuit applies moderate constitutional scrutiny.’,
warningLevel: ‘Moderate Risk’
},
‘IN’: {
hasLaw: true,
statute: ‘Ind. Code § 34-28-5-3.5’,
requirements: ‘Must provide name when lawfully detained’,
penalty: ‘Class C misdemeanor’,
constitutionalStrategy: [‘Challenge detention legality’, ‘Assert constitutional limits’],
controllingPrecedents: [‘Terry v. Ohio (1968)’, ‘7th Circuit analysis’],
tacticalNotes: ‘7th Circuit provides moderate protections.’,
warningLevel: ‘Moderate Risk’
},
‘IA’: {
hasLaw: false,
statute: ‘No stop and identify law’,
requirements: ‘No requirement to provide ID during detention’,
penalty: ‘None for refusing identification’,
constitutionalStrategy: [‘Assert Fourth Amendment rights’, ‘Refuse ID unless arrested’],
controllingPrecedents: [‘Terry v. Ohio (1968)’, ‘8th Circuit precedents’],
tacticalNotes: ‘8th Circuit applies standard constitutional analysis.’,
warningLevel: ‘Low Risk - No ID Law’
},
‘KS’: {
hasLaw: true,
statute: ‘Kan. Stat. § 22-2402’,
requirements: ‘Must provide name when lawfully detained’,
penalty: ‘Class C misdemeanor’,
constitutionalStrategy: [‘Challenge reasonable suspicion basis’, ‘Limit scope of disclosure’],
controllingPrecedents: [‘Terry v. Ohio (1968)’, ‘10th Circuit precedents’],
tacticalNotes: ‘10th Circuit applies moderate constitutional scrutiny.’,
warningLevel: ‘Moderate Risk’
},
‘KY’: {
hasLaw: false,
statute: ‘No stop and identify law’,
requirements: ‘No requirement to provide ID during detention’,
penalty: ‘None for refusing identification’,
constitutionalStrategy: [‘Assert constitutional protections’, ‘Refuse ID unless arrested’],
controllingPrecedents: [‘Terry v. Ohio (1968)’, ‘6th Circuit precedents’],
tacticalNotes: ‘6th Circuit provides moderate constitutional protections.’,
warningLevel: ‘Low Risk - No ID Law’
},
‘LA’: {
hasLaw: true,
statute: ‘La. Code Crim. Proc. art. 215.1’,
requirements: ‘Must provide name when lawfully detained’,
penalty: ‘Fine up to $200’,
constitutionalStrategy: [‘WARNING: 5th Circuit extremely hostile’, ‘Document everything carefully’],
controllingPrecedents: [‘Terry v. Ohio (1968)’, ‘WARNING: 5th Circuit hostility’],
tacticalNotes: ‘CRITICAL WARNING: 5th Circuit creates severe liability risks.’,
warningLevel: ‘EXTREME DANGER - 5th Circuit Hostility’
},
‘ME’: {
hasLaw: false,
statute: ‘No stop and identify law’,
requirements: ‘No requirement to provide ID during detention’,
penalty: ‘None for refusing identification’,
constitutionalStrategy: [‘Assert strong constitutional protections’, ‘Refuse ID unless arrested’],
controllingPrecedents: [‘Terry v. Ohio (1968)’, ‘1st Circuit protective precedents’],
tacticalNotes: ‘1st Circuit provides strong constitutional protections.’,
warningLevel: ‘Low Risk - No ID Law’
},
‘MD’: {
hasLaw: false,
statute: ‘No stop and identify law’,
requirements: ‘No requirement to provide ID during detention’,
penalty: ‘None for refusing identification’,
constitutionalStrategy: [‘Assert Fourth Amendment protections’, ‘Refuse ID unless arrested’],
controllingPrecedents: [‘Terry v. Ohio (1968)’, ‘4th Circuit strong protections’],
tacticalNotes: ‘4th Circuit provides excellent constitutional protections.’,
warningLevel: ‘Low Risk - Strong Circuit Protection’
},
‘MA’: {
hasLaw: false,
statute: ‘No stop and identify law’,
requirements: ‘No requirement to provide ID during detention’,
penalty: ‘None for refusing identification’,
constitutionalStrategy: [‘Assert strong state constitutional protections’, ‘Refuse ID unless arrested’],
controllingPrecedents: [‘Massachusetts Constitution Article 14’, ‘1st Circuit protections’],
tacticalNotes: ‘1st Circuit and state constitution provide strong protections.’,
warningLevel: ‘Low Risk - Strong Constitutional Protection’
},
‘MI’: {
hasLaw: false,
statute: ‘No stop and identify law’,
requirements: ‘No requirement to provide ID during detention’,
penalty: ‘None for refusing identification’,
constitutionalStrategy: [‘Assert constitutional rights’, ‘Refuse ID unless arrested’],
controllingPrecedents: [‘Terry v. Ohio (1968)’, ‘6th Circuit precedents’],
tacticalNotes: ‘6th Circuit provides moderate constitutional analysis.’,
warningLevel: ‘Low Risk - No ID Law’
},
‘MN’: {
hasLaw: false,
statute: ‘No stop and identify law’,
requirements: ‘No requirement to provide ID during detention’,
penalty: ‘None for refusing identification’,
constitutionalStrategy: [‘Assert Fourth Amendment protections’, ‘Refuse ID unless arrested’],
controllingPrecedents: [‘Terry v. Ohio (1968)’, ‘8th Circuit precedents’],
tacticalNotes: ‘8th Circuit applies moderate constitutional scrutiny.’,
warningLevel: ‘Low Risk - No ID Law’
},
‘MS’: {
hasLaw: false,
statute: ‘No stop and identify law’,
requirements: ‘No requirement to provide ID during detention’,
penalty: ‘None for refusing identification’,
constitutionalStrategy: [‘WARNING: 5th Circuit extremely hostile’, ‘Document everything’],
controllingPrecedents: [‘Terry v. Ohio (1968)’, ‘WARNING: 5th Circuit hostility’],
tacticalNotes: ‘CRITICAL WARNING: 5th Circuit creates severe constitutional risks.’,
warningLevel: ‘EXTREME DANGER - 5th Circuit Hostility’
},
‘MO’: {
hasLaw: true,
statute: ‘Mo. Rev. Stat. § 84.710’,
requirements: ‘Must provide name when lawfully detained’,
penalty: ‘Fine’,
constitutionalStrategy: [‘Challenge reasonable suspicion standard’, ‘Limit disclosure scope’],
controllingPrecedents: [‘Terry v. Ohio (1968)’, ‘8th Circuit precedents’],
tacticalNotes: ‘8th Circuit applies standard constitutional analysis.’,
warningLevel: ‘Moderate Risk’
},
‘MT’: {
hasLaw: true,
statute: ‘Mont. Code § 46-5-401’,
requirements: ‘Must provide name when lawfully detained’,
penalty: ‘Misdemeanor’,
constitutionalStrategy: [‘Assert strong state privacy protections’, ‘Challenge detention basis’],
controllingPrecedents: [‘Montana Constitution Article II, Section 10’, ‘9th Circuit protections’],
tacticalNotes: ‘Montana Constitution provides privacy protections exceeding federal standards.’,
warningLevel: ‘Low Risk - Strong State Protection’
},
‘NE’: {
hasLaw: true,
statute: ‘Neb. Rev. Stat. § 29-829’,
requirements: ‘Must provide name when lawfully detained’,
penalty: ‘Class V misdemeanor’,
constitutionalStrategy: [‘Challenge reasonable suspicion’, ‘Assert constitutional limits’],
controllingPrecedents: [‘Terry v. Ohio (1968)’, ‘8th Circuit precedents’],
tacticalNotes: ‘8th Circuit applies moderate constitutional scrutiny.’,
warningLevel: ‘Moderate Risk’
},
‘NV’: {
hasLaw: true,
statute: ‘NRS 171.123 (Hiibel case origin)’,
requirements: ‘Must identify when detained, 60-minute limit’,
penalty: ‘Misdemeanor’,
constitutionalStrategy: [‘Challenge reasonable suspicion under strict Hiibel precedent’, ‘Assert time limits’],
controllingPrecedents: [‘Hiibel v. Sixth Judicial District Court (2004)’, ‘Terry v. Ohio (1968)’],
tacticalNotes: ‘Origin of Hiibel case provides detailed precedential guidance.’,
warningLevel: ‘Moderate Risk - Well-Established Limits’
},
‘NH’: {
hasLaw: true,
statute: ‘N.H. Rev. Stat. § 594:2’,
requirements: ‘Must provide name when lawfully detained’,
penalty: ‘Violation’,
constitutionalStrategy: [‘Challenge detention legality’, ‘Assert 1st Circuit protections’],
controllingPrecedents: [‘Terry v. Ohio (1968)’, ‘1st Circuit protective precedents’],
tacticalNotes: ‘1st Circuit provides strong constitutional protections.’,
warningLevel: ‘Low Risk - Protective Circuit’
},
‘NJ’: {
hasLaw: false,
statute: ‘No stop and identify law’,
requirements: ‘No requirement to provide ID during detention’,
penalty: ‘None for refusing identification’,
constitutionalStrategy: [‘Assert strong state constitutional protections’, ‘Refuse ID unless arrested’],
controllingPrecedents: [‘New Jersey Constitution privacy protections’, ‘3rd Circuit precedents’],
tacticalNotes: ‘New Jersey provides constitutional protections exceeding federal minimums.’,
warningLevel: ‘Low Risk - Strong State Protection’
},
‘NM’: {
hasLaw: true,
statute: ‘N.M. Stat. § 30-22-3’,
requirements: ‘Must provide name when lawfully detained’,
penalty: ‘Petty misdemeanor’,
constitutionalStrategy: [‘Challenge reasonable suspicion’, ‘Assert constitutional limits’],
controllingPrecedents: [‘Terry v. Ohio (1968)’, ‘10th Circuit precedents’],
tacticalNotes: ‘10th Circuit applies standard constitutional analysis.’,
warningLevel: ‘Moderate Risk’
},
‘NY’: {
hasLaw: false,
statute: ‘No stop and identify law’,
requirements: ‘No requirement to provide ID during detention’,
penalty: ‘None for refusing identification’,
constitutionalStrategy: [‘Assert strong constitutional protections’, ‘Leverage Floyd precedent’],
controllingPrecedents: [‘Floyd v. City of New York’, ‘2nd Circuit protective precedents’],
tacticalNotes: ‘2nd Circuit provides strong constitutional protections.’,
warningLevel: ‘Low Risk - Strong Circuit Protection’
},
‘NC’: {
hasLaw: false,
statute: ‘No stop and identify law’,
requirements: ‘No requirement to provide ID during detention’,
penalty: ‘None for refusing identification’,
constitutionalStrategy: [‘Assert Fourth Amendment protections’, ‘Leverage 4th Circuit strength’],
controllingPrecedents: [‘Terry v. Ohio (1968)’, ‘4th Circuit strong protections’],
tacticalNotes: ‘4th Circuit provides excellent constitutional protections.’,
warningLevel: ‘Low Risk - Strong Circuit Protection’
},
‘ND’: {
hasLaw: true,
statute: ‘N.D. Cent. Code § 29-29-21’,
requirements: ‘Must provide name when lawfully detained’,
penalty: ‘Class B misdemeanor’,
constitutionalStrategy: [‘Challenge reasonable suspicion’, ‘Assert constitutional limits’],
controllingPrecedents: [‘Terry v. Ohio (1968)’, ‘8th Circuit precedents’],
tacticalNotes: ‘8th Circuit applies moderate constitutional scrutiny.’,
warningLevel: ‘Moderate Risk’
},
‘OH’: {
hasLaw: true,
statute: ‘Ohio Rev. Code § 2921.29’,
requirements: ‘Must provide name, address, or date of birth when lawfully detained’,
penalty: ‘Minor misdemeanor’,
constitutionalStrategy: [‘Challenge scope of required information’, ‘Assert Brandenburg protections’],
controllingPrecedents: [‘Brandenburg v. Ohio (1969)’, ‘Terry v. Ohio (1968)’],
tacticalNotes: ‘6th Circuit applies moderate constitutional analysis.’,
warningLevel: ‘Moderate Risk’
},
‘OK’: {
hasLaw: false,
statute: ‘No stop and identify law’,
requirements: ‘No requirement to provide ID during detention’,
penalty: ‘None for refusing identification’,
constitutionalStrategy: [‘Assert Fourth Amendment protections’, ‘Refuse ID unless arrested’],
controllingPrecedents: [‘Terry v. Ohio (1968)’, ‘10th Circuit precedents’],
tacticalNotes: ‘10th Circuit applies standard constitutional analysis.’,
warningLevel: ‘Low Risk - No ID Law’
},
‘OR’: {
hasLaw: false,
statute: ‘No stop and identify law’,
requirements: ‘No requirement to provide ID during detention’,
penalty: ‘None for refusing identification’,
constitutionalStrategy: [‘Assert Fourth Amendment protections’, ‘Leverage 9th Circuit strength’],
controllingPrecedents: [‘Terry v. Ohio (1968)’, ‘9th Circuit protective precedents’],
tacticalNotes: ‘9th Circuit provides strongest constitutional protections.’,
warningLevel: ‘Low Risk - Strongest Circuit Protection’
},
‘PA’: {
hasLaw: false,
statute: ‘No stop and identify law’,
requirements: ‘No requirement to provide ID during detention’,
penalty: ‘None for refusing identification’,
constitutionalStrategy: [‘Assert Fourth Amendment protections’, ‘Refuse ID unless arrested’],
controllingPrecedents: [‘Terry v. Ohio (1968)’, ‘3rd Circuit precedents’],
tacticalNotes: ‘3rd Circuit applies moderate constitutional scrutiny.’,
warningLevel: ‘Low Risk - No ID Law’
},
‘RI’: {
hasLaw: true,
statute: ‘R.I. Gen. Laws § 12-7-1’,
requirements: ‘Must provide name when lawfully detained’,
penalty: ‘Fine’,
constitutionalStrategy: [‘Challenge detention legality’, ‘Assert 1st Circuit protections’],
controllingPrecedents: [‘Terry v. Ohio (1968)’, ‘1st Circuit protective precedents’],
tacticalNotes: ‘1st Circuit provides strong constitutional protections.’,
warningLevel: ‘Low Risk - Protective Circuit’
},
‘SC’: {
hasLaw: false,
statute: ‘No stop and identify law’,
requirements: ‘No requirement to provide ID during detention’,
penalty: ‘None for refusing identification’,
constitutionalStrategy: [‘Assert Fourth Amendment protections’, ‘Leverage 4th Circuit strength’],
controllingPrecedents: [‘Terry v. Ohio (1968)’, ‘4th Circuit strong protections’],
tacticalNotes: ‘4th Circuit provides excellent constitutional protections.’,
warningLevel: ‘Low Risk - Strong Circuit Protection’
},
‘SD’: {
hasLaw: false,
statute: ‘No stop and identify law’,
requirements: ‘No requirement to provide ID during detention’,
penalty: ‘None for refusing identification’,
constitutionalStrategy: [‘Assert Fourth Amendment protections’, ‘Refuse ID unless arrested’],
controllingPrecedents: [‘Terry v. Ohio (1968)’, ‘8th Circuit precedents’],
tacticalNotes: ‘8th Circuit applies moderate constitutional scrutiny.’,
warningLevel: ‘Low Risk - No ID Law’
},
‘TN’: {
hasLaw: false,
statute: ‘No stop and identify law’,
requirements: ‘No requirement to provide ID during detention’,
penalty: ‘None for refusing identification’,
constitutionalStrategy: [‘Assert Fourth Amendment protections’, ‘Refuse ID unless arrested’],
controllingPrecedents: [‘Terry v. Ohio (1968)’, ‘6th Circuit precedents’],
tacticalNotes: ‘6th Circuit provides moderate constitutional protections.’,
warningLevel: ‘Low Risk - No ID Law’
},
‘TX’: {
hasLaw: true,
statute: ‘Tex. Penal Code § 38.02’,
requirements: ‘Must identify ONLY when arrested (not during detention)’,
penalty: ‘Class C misdemeanor’,
constitutionalStrategy: [‘Distinguish detention from arrest’, ‘WARNING: 5th Circuit hostile’],
controllingPrecedents: [‘Brown v. Texas (1979)’, ‘WARNING: McKesson v. Doe (2023)’],
tacticalNotes: ‘CRITICAL WARNING: 5th Circuit created “negligent protest” liability.’,
warningLevel: ‘EXTREME DANGER - 5th Circuit Hostility’
},
‘UT’: {
hasLaw: true,
statute: ‘Utah Code § 77-7-15’,
requirements: ‘Must provide name when lawfully detained’,
penalty: ‘Class C misdemeanor’,
constitutionalStrategy: [‘Challenge reasonable suspicion’, ‘Assert constitutional limits’],
controllingPrecedents: [‘Terry v. Ohio (1968)’, ‘10th Circuit precedents’],
tacticalNotes: ‘10th Circuit applies standard constitutional analysis.’,
warningLevel: ‘Moderate Risk’
},
‘VT’: {
hasLaw: true,
statute: ‘Vt. Stat. tit. 24, § 1983’,
requirements: ‘Must provide name when lawfully detained’,
penalty: ‘Fine’,
constitutionalStrategy: [‘Challenge detention basis’, ‘Assert 2nd Circuit protections’],
controllingPrecedents: [‘Terry v. Ohio (1968)’, ‘2nd Circuit protective precedents’],
tacticalNotes: ‘2nd Circuit provides strong constitutional protections.’,
warningLevel: ‘Low Risk - Protective Circuit’
},
‘VA’: {
hasLaw: false,
statute: ‘No stop and identify law’,
requirements: ‘No requirement to provide ID during detention’,
penalty: ‘None for refusing identification’,
constitutionalStrategy: [‘Assert Fourth Amendment protections’, ‘Leverage 4th Circuit strength’],
controllingPrecedents: [‘Terry v. Ohio (1968)’, ‘4th Circuit strong protections’],
tacticalNotes: ‘4th Circuit provides excellent constitutional protections.’,
warningLevel: ‘Low Risk - Strong Circuit Protection’
},
‘WA’: {
hasLaw: false,
statute: ‘No stop and identify law’,
requirements: ‘No requirement to provide ID during detention’,
penalty: ‘None for refusing identification’,
constitutionalStrategy: [‘Assert Fourth Amendment protections’, ‘Leverage 9th Circuit strength’],
controllingPrecedents: [‘Terry v. Ohio (1968)’, ‘9th Circuit protective precedents’],
tacticalNotes: ‘9th Circuit provides strongest constitutional protections.’,
warningLevel: ‘Low Risk - Strongest Circuit Protection’
},
‘WV’: {
hasLaw: false,
statute: ‘No stop and identify law’,
requirements: ‘No requirement to provide ID during detention’,
penalty: ‘None for refusing identification’,
constitutionalStrategy: [‘Assert Fourth Amendment protections’, ‘Leverage 4th Circuit strength’],
controllingPrecedents: [‘Terry v. Ohio (1968)’, ‘4th Circuit strong protections’],
tacticalNotes: ‘4th Circuit provides excellent constitutional protections.’,
warningLevel: ‘Low Risk - Strong Circuit Protection’
},
‘WI’: {
hasLaw: true,
statute: ‘Wis. Stat. § 968.24’,
requirements: ‘Must provide name when lawfully detained’,
penalty: ‘Forfeiture’,
constitutionalStrategy: [‘Challenge reasonable suspicion’, ‘Assert constitutional limits’],
controllingPrecedents: [‘Terry v. Ohio (1968)’, ‘7th Circuit precedents’],
tacticalNotes: ‘7th Circuit applies moderate constitutional scrutiny.’,
warningLevel: ‘Moderate Risk’
},
‘WY’: {
hasLaw: false,
statute: ‘No stop and identify law’,
requirements: ‘No requirement to provide ID during detention’,
penalty: ‘None for refusing identification’,
constitutionalStrategy: [‘Assert Fourth Amendment protections’, ‘Refuse ID unless arrested’],
controllingPrecedents: [‘Terry v. Ohio (1968)’, ‘10th Circuit precedents’],
tacticalNotes: ‘10th Circuit applies standard constitutional analysis.’,
warningLevel: ‘Low Risk - No ID Law’
},
‘DC’: {
hasLaw: false,
statute: ‘No stop and identify law’,
requirements: ‘No requirement to provide ID during detention’,
penalty: ‘None for refusing identification’,
constitutionalStrategy: [‘Assert Fourth Amendment protections’, ‘Refuse ID unless arrested’],
controllingPrecedents: [‘Terry v. Ohio (1968)’, ‘D.C. Circuit precedents’],
tacticalNotes: ‘D.C. Circuit applies careful constitutional analysis.’,
warningLevel: ‘Low Risk - No ID Law’
}
}), []);

// First Amendment landmark cases for key states
const firstAmendmentLandmarks = useMemo(() => ({
‘AL’: {
caseName: ‘NAACP v. Alabama’,
citation: ‘357 U.S. 449 (1958)’,
year: ‘1958’,
constitutionalSignificance: ‘Established freedom of association as fundamental right’,
facts: ‘Alabama demanded NAACP membership lists during civil rights activism’,
holding: ‘Compelled disclosure of membership violates First Amendment association rights’,
tacticalImpact: ‘Foundation for associational privacy in organizing’,
modernApplication: ‘Protects digital organizing and activist networks’
},
‘CA’: {
caseName: ‘Cohen v. California’,
citation: ‘403 U.S. 15 (1971)’,
year: ‘1971’,
constitutionalSignificance: ‘Strongest protection for offensive political speech’,
facts: ‘Paul Cohen wore “F*** the Draft” jacket in courthouse’,
holding: ‘Offensive political speech protected unless directed incitement’,
tacticalImpact: ‘Broad protection for provocative political expression’,
modernApplication: ‘Critical for protecting harsh government criticism’
},
‘TX’: {
caseName: ‘Texas v. Johnson’,
citation: ‘491 U.S. 397 (1989)’,
year: ‘1989’,
constitutionalSignificance: ‘Symbolic political speech protection’,
facts: ‘Gregory Johnson burned flag during RNC protest’,
holding: ‘Flag burning constitutes protected symbolic speech’,
tacticalImpact: ‘Strong protection for symbolic political expression’,
modernApplication: ‘WARNING: 5th Circuit McKesson decision creates protest liability’
},
‘OH’: {
caseName: ‘Brandenburg v. Ohio’,
citation: ‘395 U.S. 444 (1969)’,
year: ‘1969’,
constitutionalSignificance: ‘Highest protection for political speech’,
facts: ‘KKK leader made inflammatory speech at rally’,
holding: ‘Speech protected unless directed to imminent lawless action’,
tacticalImpact: ‘Strongest protection for political speech’,
modernApplication: ‘Gold standard but 5th Circuit creates dangerous exceptions’
},
‘CO’: {
caseName: ‘Counterman v. Colorado’,
citation: ‘600 U.S. 66 (2023)’,
year: ‘2023’,
constitutionalSignificance: ‘Digital age true threats protection’,
facts: ‘Prosecution for social media messages without subjective intent’,
holding: ‘True threats require proof of subjective awareness’,
tacticalImpact: ‘Higher protection for online speech’,
modernApplication: ‘Essential for protecting digital communications’
}
}), []);

// Circuit analysis
const circuitAnalysis = useMemo(() => ({
‘1st Circuit’: {
approach: ‘Protective’,
qualifiedImmunity: ‘Strict application requiring clearly established law’,
section1983: ‘Moderate plaintiff success rate’,
keyStrengths: [‘Strong reasonable suspicion requirements’, ‘Protective of press rights’],
warnings: ‘Generally favorable but requires thorough precedent research’
},
‘2nd Circuit’: {
approach: ‘Protective’,
qualifiedImmunity: ‘Increasingly restrictive application’,
section1983: ‘Strong municipal liability precedents’,
keyStrengths: [‘Floyd v. City of New York protections’, ‘Strong press access rights’],
warnings: ‘Sophisticated legal arguments required’
},
‘3rd Circuit’: {
approach: ‘Moderate’,
qualifiedImmunity: ‘Standard application’,
section1983: ‘Mixed plaintiff success rate’,
keyStrengths: [‘Moderate constitutional interpretation’],
warnings: ‘Standard constitutional analysis applies’
},
‘4th Circuit’: {
approach: ‘Strongly Protective’,
qualifiedImmunity: ‘More restrictive than most circuits’,
section1983: ‘Excellent precedents’,
keyStrengths: [‘Strong digital privacy protections’, ‘Restrictive ID requirements’],
warnings: ‘Excellent jurisdiction for constitutional challenges’
},
‘5th Circuit’: {
approach: ‘EXTREMELY HOSTILE’,
qualifiedImmunity: ‘Broadest application favoring officers’,
section1983: ‘Very high bar for municipal liability’,
keyStrengths: ‘NONE - Avoid this circuit’,
warnings: ‘CRITICAL: Creates “negligent protest” liability. NEVER file organizer cases here.’
},
‘6th Circuit’: {
approach: ‘Moderate’,
qualifiedImmunity: ‘Standard application’,
section1983: ‘Mixed success rate’,
keyStrengths: [‘Standard constitutional analysis’],
warnings: ‘Requires solid constitutional arguments’
},
‘7th Circuit’: {
approach: ‘Moderate’,
qualifiedImmunity: ‘Standard application’,
section1983: ‘Moderate success rate’,
keyStrengths: [‘Careful constitutional analysis’],
warnings: ‘Standard constitutional analysis applies’
},
‘8th Circuit’: {
approach: ‘Moderate’,
qualifiedImmunity: ‘Standard application’,
section1983: ‘Mixed success rate’,
keyStrengths: [‘Standard constitutional interpretation’],
warnings: ‘Requires thorough constitutional arguments’
},
‘9th Circuit’: {
approach: ‘Most Protective’,
qualifiedImmunity: ‘Most restrictive application’,
section1983: ‘Broad interpretation of violations’,
keyStrengths: [‘Strongest reasonable suspicion requirements’, ‘Broad recording rights’],
warnings: ‘Excellent jurisdiction but appeals may reverse’
},
‘10th Circuit’: {
approach: ‘Moderate’,
qualifiedImmunity: ‘Standard application’,
section1983: ‘Standard analysis’,
keyStrengths: [‘Careful constitutional analysis’],
warnings: ‘Standard constitutional analysis applies’
},
‘11th Circuit’: {
approach: ‘Moderate’,
qualifiedImmunity: ‘Standard application’,
section1983: ‘Mixed success rate’,
keyStrengths: [‘Standard Terry analysis’],
warnings: ‘Requires solid constitutional arguments’
},
‘D.C. Circuit’: {
approach: ‘Moderate’,
qualifiedImmunity: ‘Careful application’,
section1983: ‘Thoughtful analysis’,
keyStrengths: [‘Sophisticated constitutional analysis’],
warnings: ‘Requires detailed legal arguments’
}
}), []);

// State constitutional protections
const stateConstitutionalProtections = useMemo(() => ({
‘MT’: ‘Article II, Section 10 - Privacy rights exceed federal Fourth Amendment’,
‘CA’: ‘Article I, Section 1 - Inalienable privacy rights stronger than federal law’,
‘AK’: ‘Article I, Section 22 - Privacy protections broader than federal minimums’,
‘HI’: ‘Strong constitutional privacy traditions protecting autonomy’,
‘MA’: ‘Article 14 - Stronger search and seizure protections than federal’,
‘NJ’: ‘Robust state privacy jurisprudence exceeding federal protections’,
‘NY’: ‘Strong state constitutional protections in criminal procedure’,
‘WA’: ‘Article I, Section 7 - Strong privacy protections’
}), []);

const states = useMemo(() => [
{ code: ‘AL’, name: ‘Alabama’ }, { code: ‘AK’, name: ‘Alaska’ }, { code: ‘AZ’, name: ‘Arizona’ },
{ code: ‘AR’, name: ‘Arkansas’ }, { code: ‘CA’, name: ‘California’ }, { code: ‘CO’, name: ‘Colorado’ },
{ code: ‘CT’, name: ‘Connecticut’ }, { code: ‘DE’, name: ‘Delaware’ }, { code: ‘FL’, name: ‘Florida’ },
{ code: ‘GA’, name: ‘Georgia’ }, { code: ‘HI’, name: ‘Hawaii’ }, { code: ‘ID’, name: ‘Idaho’ },
{ code: ‘IL’, name: ‘Illinois’ }, { code: ‘IN’, name: ‘Indiana’ }, { code: ‘IA’, name: ‘Iowa’ },
{ code: ‘KS’, name: ‘Kansas’ }, { code: ‘KY’, name: ‘Kentucky’ }, { code: ‘LA’, name: ‘Louisiana’ },
{ code: ‘ME’, name: ‘Maine’ }, { code: ‘MD’, name: ‘Maryland’ }, { code: ‘MA’, name: ‘Massachusetts’ },
{ code: ‘MI’, name: ‘Michigan’ }, { code: ‘MN’, name: ‘Minnesota’ }, { code: ‘MS’, name: ‘Mississippi’ },
{ code: ‘MO’, name: ‘Missouri’ }, { code: ‘MT’, name: ‘Montana’ }, { code: ‘NE’, name: ‘Nebraska’ },
{ code: ‘NV’, name: ‘Nevada’ }, { code: ‘NH’, name: ‘New Hampshire’ }, { code: ‘NJ’, name: ‘New Jersey’ },
{ code: ‘NM’, name: ‘New Mexico’ }, { code: ‘NY’, name: ‘New York’ }, { code: ‘NC’, name: ‘North Carolina’ },
{ code: ‘ND’, name: ‘North Dakota’ }, { code: ‘OH’, name: ‘Ohio’ }, { code: ‘OK’, name: ‘Oklahoma’ },
{ code: ‘OR’, name: ‘Oregon’ }, { code: ‘PA’, name: ‘Pennsylvania’ }, { code: ‘RI’, name: ‘Rhode Island’ },
{ code: ‘SC’, name: ‘South Carolina’ }, { code: ‘SD’, name: ‘South Dakota’ }, { code: ‘TN’, name: ‘Tennessee’ },
{ code: ‘TX’, name: ‘Texas’ }, { code: ‘UT’, name: ‘Utah’ }, { code: ‘VT’, name: ‘Vermont’ },
{ code: ‘VA’, name: ‘Virginia’ }, { code: ‘WA’, name: ‘Washington’ }, { code: ‘WV’, name: ‘West Virginia’ },
{ code: ‘WI’, name: ‘Wisconsin’ }, { code: ‘WY’, name: ‘Wyoming’ }, { code: ‘DC’, name: ‘District of Columbia’ }
], []);

const getTacticalGuidance = useCallback((state, circuit) => {
const baseGuidance = {
universalPrinciples: [
‘“Officer, are you detaining me or am I free to leave?”’,
‘If detained: “What specific facts give you reasonable suspicion?”’,
‘Document badge numbers, patrol car numbers, time, location’,
‘“I am exercising my right to remain silent.”’
]
};

```
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
```

}, []);

const getImmediateActions = useCallback((state) => {
const stopAndId = stopAndIdStates[state];

```
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
```

}, [stopAndIdStates]);

const getWarningColor = useCallback((warningLevel) => {
if (warningLevel?.includes(‘EXTREME DANGER’)) return ‘border-red-600 bg-red-900/30’;
if (warningLevel?.includes(‘Moderate Risk’)) return ‘border-yellow-600 bg-yellow-900/30’;
if (warningLevel?.includes(‘Low Risk’) || warningLevel?.includes(‘Minimal Risk’)) return ‘border-green-600 bg-green-900/30’;
return ‘border-gray-600 bg-gray-900/30’;
}, []);

useEffect(() => {
if (selectedState) {
const circuit = federalCircuits[selectedState];
const stopAndId = stopAndIdStates[selectedState];
const firstAmendmentLandmark = firstAmendmentLandmarks[selectedState];
const circuitInfo = circuitAnalysis[circuit?.circuit];
const stateConstitutionalInfo = stateConstitutionalProtections[selectedState];

```
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
} else {
  setResults(null);
}
```

}, [selectedState, federalCircuits, stopAndIdStates, firstAmendmentLandmarks, circuitAnalysis, stateConstitutionalProtections, states, getTacticalGuidance, getImmediateActions]);

return (
<div style={{
minHeight: ‘100vh’,
background: ‘linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #334155 100%)’,
color: ‘white’,
fontFamily: ‘-apple-system, BlinkMacSystemFont, “Segoe UI”, Roboto, sans-serif’
}}>
<div style={{ maxWidth: ‘1200px’, margin: ‘0 auto’, padding: ‘2rem’ }}>
{/* Header */}
<div style={{ textAlign: ‘center’, marginBottom: ‘3rem’ }}>
<div style={{ display: ‘flex’, alignItems: ‘center’, justifyContent: ‘center’, marginBottom: ‘1.5rem’ }}>
<Scale size={48} color=”#60a5fa” style={{ marginRight: ‘1rem’ }} />
<h1 style={{
fontSize: ‘2.5rem’,
fontWeight: ‘bold’,
background: ‘linear-gradient(to right, #60a5fa, #a855f7)’,
backgroundClip: ‘text’,
WebkitBackgroundClip: ‘text’,
color: ‘transparent’
}}>
Constitutional Rights Research Platform
</h1>
</div>
<p style={{ fontSize: ‘1.25rem’, color: ‘#d1d5db’, maxWidth: ‘64rem’, margin: ‘0 auto’ }}>
Forensic analysis of systematic constitutional violations through jurisdictional manipulation,
documenting patterns of institutional circumvention of citizen rights across America’s legal landscape
</p>
</div>

```
    {/* State Selection */}
    <div style={{ maxWidth: '28rem', margin: '0 auto 3rem auto' }}>
      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#d1d5db', marginBottom: '0.5rem' }}>
        Select Jurisdiction for Constitutional Analysis
      </label>
      <div style={{ position: 'relative' }}>
        <Search size={20} style={{ position: 'absolute', left: '0.75rem', top: '0.75rem', color: '#9ca3af' }} />
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          style={{ 
            width: '100%', 
            paddingLeft: '2.5rem', 
            paddingRight: '1rem', 
            paddingTop: '0.75rem',
            paddingBottom: '0.75rem',
            backgroundColor: '#1e293b', 
            border: '1px solid #475569', 
            borderRadius: '0.5rem', 
            color: 'white',
            fontSize: '1rem'
          }}
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
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {/* Circuit Analysis */}
        <div style={{ 
          padding: '2rem', 
          border: `2px solid ${results.circuit.hostility === 'EXTREMELY HOSTILE' ? '#ef4444' : results.circuit.hostility === 'Protective' ? '#22c55e' : '#eab308'}`,
          borderRadius: '0.75rem',
          background: `${results.circuit.hostility === 'EXTREMELY HOSTILE' ? 'rgba(220, 38, 38, 0.2)' : results.circuit.hostility === 'Protective' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(234, 179, 8, 0.2)'}`
        }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
            {results.circuit.hostility === 'EXTREMELY HOSTILE' ? 
              <AlertTriangle size={32} color="#f87171" style={{ marginRight: '0.75rem' }} /> :
              <Gavel size={32} color="#60a5fa" style={{ marginRight: '0.75rem' }} />
            }
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
              <span style={{ color: '#60a5fa' }}>Federal Circuit Analysis: </span>
              <span style={{ 
                color: results.circuit.hostility === 'EXTREMELY HOSTILE' ? '#f87171' :
                       results.circuit.hostility === 'Protective' ? '#4ade80' : '#facc15'
              }}>
                {results.circuit.hostility}
              </span>
            </h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem', color: '#c084fc' }}>
                {results.circuit.circuit}
              </h3>
              {results.circuitInfo && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div>
                    <span style={{ fontWeight: '500', color: 'white' }}>Qualified Immunity:</span>
                    <span style={{ marginLeft: '0.5rem', color: '#d1d5db' }}>{results.circuitInfo.qualifiedImmunity}</span>
                  </div>
                  <div>
                    <span style={{ fontWeight: '500', color: 'white' }}>§1983 Success:</span>
                    <span style={{ marginLeft: '0.5rem', color: '#d1d5db' }}>{results.circuitInfo.section1983}</span>
                  </div>
                </div>
              )}
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem', color: '#c084fc' }}>
                Strategic Warning
              </h3>
              <div style={{ 
                padding: '1rem', 
                borderRadius: '0.5rem', 
                border: `1px solid ${results.circuit.hostility === 'EXTREMELY HOSTILE' ? '#ef4444' : results.circuit.hostility === 'Protective' ? '#22c55e' : '#eab308'}`,
                background: `${results.circuit.hostility === 'EXTREMELY HOSTILE' ? 'rgba(220, 38, 38, 0.3)' : results.circuit.hostility === 'Protective' ? 'rgba(34, 197, 94, 0.3)' : 'rgba(234, 179, 8, 0.3)'}`
              }}>
                <p style={{ color: '#d1d5db', fontSize: '0.875rem', fontWeight: '500' }}>
                  {results.circuitInfo?.warnings || 'Standard constitutional analysis applies'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stop and ID Analysis */}
        <div style={{ 
          padding: '2rem', 
          border: `2px solid ${getWarningColor(results.stopAndId.warningLevel).split(' ')[0].split('-')[1]}`,
          borderRadius: '0.75rem',
          background: getWarningColor(results.stopAndId.warningLevel).split('bg-')[1]
        }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
            <Shield size={32} color="#f87171" style={{ marginRight: '0.75rem' }} />
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#f87171' }}>
              Identification Laws: {results.stopAndId.hasLaw ? 'CONSTITUTIONAL VULNERABILITY' : 'CONSTITUTIONAL PROTECTION'}
            </h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem', color: '#c084fc' }}>
                Legal Framework
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div>
                  <span style={{ fontWeight: '500', color: 'white' }}>Statute:</span>
                  <span style={{ marginLeft: '0.5rem', color: '#d1d5db' }}>{results.stopAndId.statute}</span>
                </div>
                <div>
                  <span style={{ fontWeight: '500', color: 'white' }}>Requirements:</span>
                  <span style={{ marginLeft: '0.5rem', color: '#d1d5db' }}>{results.stopAndId.requirements}</span>
                </div>
                <div>
                  <span style={{ fontWeight: '500', color: 'white' }}>Penalty:</span>
                  <span style={{ marginLeft: '0.5rem', color: '#d1d5db' }}>{results.stopAndId.penalty}</span>
                </div>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem', color: '#c084fc' }}>
                Constitutional Strategy
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {results.stopAndId.constitutionalStrategy?.map((strategy, index) => (
                  <li key={index} style={{ color: '#d1d5db', fontSize: '0.875rem', display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ color: '#60a5fa', marginRight: '0.5rem' }}>•</span>
                    {strategy}
                  </li>
                )) || <li style={{ color: '#d1d5db', fontSize: '0.875rem' }}>No identification required</li>}
              </ul>
            </div>
          </div>
        </div>

        {/* First Amendment Landmark */}
        {results.firstAmendmentLandmark && (
          <div style={{ 
            padding: '2rem', 
            border: '1px solid #374151', 
            borderRadius: '0.75rem',
            background: 'rgba(30, 41, 59, 0.5)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
              <BookMarked size={32} color="#fbbf24" style={{ marginRight: '0.75rem' }} />
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fbbf24' }}>
                First Amendment Landmark
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem', color: '#c084fc' }}>
                  {results.firstAmendmentLandmark.caseName}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div>
                    <span style={{ fontWeight: '500', color: 'white' }}>Citation:</span>
                    <span style={{ marginLeft: '0.5rem', color: '#d1d5db' }}>{results.firstAmendmentLandmark.citation}</span>
                  </div>
                  <div>
                    <span style={{ fontWeight: '500', color: 'white' }}>Significance:</span>
                    <span style={{ marginLeft: '0.5rem', color: '#d1d5db' }}>{results.firstAmendmentLandmark.constitutionalSignificance}</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem', color: '#c084fc' }}>
                  Modern Application
                </h3>
                <p style={{ color: '#d1d5db', fontSize: '0.875rem' }}>
                  {results.firstAmendmentLandmark.modernApplication}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* State Constitutional Protections */}
        {results.stateConstitutionalInfo && (
          <div style={{ 
            padding: '2rem', 
            border: '1px solid #166534', 
            borderRadius: '0.75rem',
            background: 'rgba(34, 197, 94, 0.2)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
              <Shield size={32} color="#4ade80" style={{ marginRight: '0.75rem' }} />
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4ade80' }}>
                Enhanced State Constitutional Protections
              </h2>
            </div>
            <div style={{ 
              padding: '1rem', 
              background: 'rgba(34, 197, 94, 0.3)', 
              borderRadius: '0.5rem', 
              border: '1px solid #22c55e' 
            }}>
              <p style={{ color: '#d1d5db' }}>{results.stateConstitutionalInfo}</p>
            </div>
          </div>
        )}

        {/* Immediate Actions */}
        <div style={{ 
          padding: '2rem', 
          border: '1px solid #1d4ed8', 
          borderRadius: '0.75rem',
          background: 'rgba(59, 130, 246, 0.2)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
            <AlertCircle size={32} color="#60a5fa" style={{ marginRight: '0.75rem' }} />
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#60a5fa' }}>
              Immediate Response Protocol
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            {results.immediateActions.map((action, index) => (
              <div key={index} style={{ 
                background: 'rgba(59, 130, 246, 0.3)', 
                padding: '1rem', 
                borderRadius: '0.5rem', 
                border: '1px solid #3b82f6' 
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ 
                    background: '#3b82f6', 
                    color: 'white', 
                    borderRadius: '50%', 
                    width: '1.5rem', 
                    height: '1.5rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    fontSize: '0.875rem', 
                    fontWeight: 'bold', 
                    marginRight: '0.5rem' 
                  }}>
                    {index + 1}
                  </span>
                  <span style={{ color: '#93c5fd', fontWeight: '500', fontSize: '0.875rem' }}>
                    Step {index + 1}
                  </span>
                </div>
                <p style={{ color: '#d1d5db', fontSize: '0.875rem' }}>{action}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div style={{ 
          padding: '1.5rem', 
          border: '1px solid rgba(239, 68, 68, 0.5)', 
          borderRadius: '0.75rem',
          background: 'rgba(220, 38, 38, 0.2)'
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <AlertCircle size={24} color="#f87171" style={{ marginRight: '0.75rem', marginTop: '0.25rem', flexShrink: 0 }} />
            <div>
              <h3 style={{ fontWeight: '600', color: '#f87171', marginBottom: '0.5rem' }}>
                Critical Legal Warning
              </h3>
              <p style={{ color: '#d1d5db', fontSize: '0.875rem' }}>
                This analysis documents constitutional violations and provides tactical guidance. 
                It does not constitute legal advice. Constitutional law changes rapidly. 
                Consult qualified legal counsel familiar with current precedents and local enforcement patterns.
              </p>
            </div>
          </div>
        </div>
      </div>
    )}

    {!selectedState && (
      <div style={{ textAlign: 'center', padding: '4rem 0' }}>
        <Scale size={96} color="#60a5fa" style={{ margin: '0 auto 1.5rem auto', opacity: 0.5 }} />
        <p style={{ fontSize: '1.25rem', color: '#9ca3af', marginBottom: '1rem' }}>
          Select a jurisdiction to begin constitutional analysis
        </p>
        <p style={{ color: '#6b7280', fontSize: '0.875rem', maxWidth: '32rem', margin: '0 auto' }}>
          This platform documents systematic constitutional circumvention through jurisdictional manipulation, 
          revealing how identical conduct faces different legal consequences across America's legal landscape.
        </p>
      </div>
    )}
  </div>
</div>
```

);
};

function App() {
return (
<div className="App">
<CivilRightsLegalTool />
</div>
);
}

export default App;