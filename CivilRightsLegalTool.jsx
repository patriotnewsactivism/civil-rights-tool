import React, { useState, useEffect } from 'react';
import { Search, Scale, FileText, Users, AlertCircle, BookOpen, Gavel, Shield, Eye, AlertTriangle, BookMarked, TrendingDown } from 'lucide-react';

const CivilRightsLegalTool = () => {
  const [selectedState, setSelectedState] = useState('');
  const [results, setResults] = useState(null);
  
  // Federal Circuit mapping with jurisdictional analysis
  const federalCircuits = {
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
  };

  // Enhanced Stop and ID States with comprehensive constitutional analysis
  const stopAndIdStates = {
    'AL': {
      hasLaw: true,
      statute: 'Ala. Code § 15-5-30',
      requirements: 'Must provide name when lawfully detained on reasonable suspicion of felony or public offense',
      penalty: 'Misdemeanor, up to 3 months jail',
      constitutionalStrategy: [
        'Demand specific articulable facts supporting reasonable suspicion',
        'Challenge scope of "public offense" as potentially overbroad under vagueness doctrine',
        'Distinguish between consensual encounters and investigative detentions',
        'Assert Brown v. Texas protections against presence-based suspicion'
      ],
      controllingPrecedents: [
        'Terry v. Ohio (1968) - reasonable suspicion standard',
        'United States v. Sokolow (1989) - articulable facts requirement',
        'Florida v. Bostick (1991) - consensual encounter test'
      ],
      tacticalNotes: '11th Circuit applies standard Terry analysis. Challenge both reasonable suspicion foundation and statutory scope.',
      warningLevel: 'Moderate Risk'
    },
    'AZ': {
      hasLaw: true,
      statute: 'A.R.S. § 13-2412',
      requirements: 'Must provide truthful name when lawfully detained',
      penalty: 'Class 1 misdemeanor',
      constitutionalStrategy: [
        'Challenge lawfulness of detention under strict Terry standard',
        'Demand reasonable suspicion articulation with specific behavioral observations',
        'Assert right to remain silent beyond name disclosure',
        'Invoke 9th Circuit\'s stricter reasonable suspicion interpretations'
      ],
      controllingPrecedents: [
        'Miranda v. Arizona (1966) - constitutional protections during detention',
        'Arizona v. Johnson (2009) - scope of Terry stops',
        'United States v. Arvizu (2002) - totality of circumstances test'
      ],
      tacticalNotes: '9th Circuit provides stronger protections. Leverage circuit\'s more restrictive Terry interpretations.',
      warningLevel: 'Low Risk - 9th Circuit Protection'
    },
    'CA': {
      hasLaw: false,
      statute: 'No general stop and identify law - CONSTITUTIONAL PROTECTION',
      requirements: 'NO requirement to provide ID during consensual encounters',
      penalty: 'None for refusing identification',
      constitutionalStrategy: [
        'Assert California Constitutional Article I, Section 1 privacy rights',
        'Invoke "No Secret Police Act" requiring officer identification',
        'Distinguish Terry stops from voluntary encounters',
        'Refuse identification unless under formal arrest'
      ],
      controllingPrecedents: [
        'Cohen v. California (1971) - strong speech protections',
        'People v. Brendlin (2007) - detention standards',
        'California Constitution Article I, Section 1 - privacy protection'
      ],
      tacticalNotes: 'Strongest constitutional protections in nation. State constitutional privacy rights exceed federal minimums.',
      warningLevel: 'Minimal Risk - Maximum Protection'
    },
    'FL': {
      hasLaw: true,
      statute: 'Fla. Stat. § 856.021 (loitering/prowling contexts only)',
      requirements: 'Must identify when detained for loitering or prowling',
      penalty: 'Second degree misdemeanor',
      constitutionalStrategy: [
        'Challenge vague loitering/prowling standards under due process',
        'Demand specific behavioral observations supporting detention',
        'Assert constitutional right to be present in public spaces',
        'Challenge overbroad application beyond specific statutory contexts'
      ],
      controllingPrecedents: [
        'Papachristou v. Jacksonville (1972) - vague loitering laws unconstitutional',
        'City of Chicago v. Morales (1999) - specificity requirements',
        'Kolender v. Lawson (1983) - void for vagueness doctrine'
      ],
      tacticalNotes: 'Limited to specific loitering/prowling contexts. Strong constitutional challenges available to vague standards.',
      warningLevel: 'Moderate Risk - Limited Scope'
    },
    'TX': {
      hasLaw: true,
      statute: 'Tex. Penal Code § 38.02',
      requirements: 'Must identify ONLY when arrested (not during detention)',
      penalty: 'Class C misdemeanor',
      constitutionalStrategy: [
        'Distinguish between detention and formal arrest',
        'Assert Brown v. Texas protections against presence-based suspicion',
        'Refuse identification unless under formal arrest with probable cause',
        'WARNING: 5th Circuit extremely hostile to civil rights challenges'
      ],
      controllingPrecedents: [
        'Brown v. Texas (1979) - location alone insufficient for reasonable suspicion',
        'Terry v. Ohio (1968) - detention vs. arrest distinction',
        'McKesson v. Doe (2023) - DANGEROUS 5th Circuit precedent for protesters'
      ],
      tacticalNotes: 'CRITICAL WARNING: 5th Circuit created "negligent protest" liability. Avoid circuit for protest organizer cases.',
      warningLevel: 'EXTREME DANGER - 5th Circuit Hostility'
    },
    'NV': {
      hasLaw: true,
      statute: 'NRS 171.123 (Hiibel case origin)',
      requirements: 'Must identify when detained, 60-minute limit',
      penalty: 'Misdemeanor',
      constitutionalStrategy: [
        'Challenge reasonable suspicion under strict Hiibel precedent',
        'Assert constitutional detention time limits',
        'Argue self-incrimination if identification could be incriminating',
        'Leverage 9th Circuit protections for broader constitutional challenges'
      ],
      controllingPrecedents: [
        'Hiibel v. Sixth Judicial District Court (2004) - seminal case establishing limits',
        'Terry v. Ohio (1968) - reasonable suspicion foundation',
        'United States v. Sharpe (1985) - detention time limits'
      ],
      tacticalNotes: 'Origin of Hiibel case provides detailed precedential guidance. 9th Circuit offers protective interpretations.',
      warningLevel: 'Moderate Risk - Well-Established Limits'
    }
  };

  // Enhanced First Amendment landmark cases with constitutional impact analysis
  const firstAmendmentLandmarks = {
    'AL': {
      caseName: 'NAACP v. Alabama',
      citation: '357 U.S. 449 (1958)',
      year: '1958',
      constitutionalSignificance: 'Established freedom of association as fundamental right',
      facts: 'Alabama demanded NAACP membership lists during height of civil rights activism, attempting to expose and intimidate civil rights organizers',
      holding: 'Compelled disclosure of organizational membership violates freedom of association under First and Fourteenth Amendments',
      tacticalImpact: 'Foundation for associational privacy rights in civil rights organizing. Protects activist group membership from government scrutiny.',
      modernApplication: 'Essential precedent for protecting digital organizing, encrypted communications, and activist network privacy'
    },
    'CA': {
      caseName: 'Cohen v. California',
      citation: '403 U.S. 15 (1971)',
      year: '1971',
      constitutionalSignificance: 'Strongest protection for offensive political speech',
      facts: 'Paul Cohen wore jacket reading "F*** the Draft" in Los Angeles courthouse, arrested for disturbing peace',
      holding: 'Offensive political speech protected unless directed incitement to imminent lawless action',
      tacticalImpact: 'Broad protection for provocative political expression and anti-war activism. Government cannot regulate speech based on offensive content.',
      modernApplication: 'Critical for protecting harsh criticism of government, profane political messages, and controversial activist speech'
    },
    'CO': {
      caseName: 'Counterman v. Colorado',
      citation: '600 U.S. 66 (2023)',
      year: '2023',
      constitutionalSignificance: 'Digital age protection requiring subjective awareness for true threats',
      facts: 'Billy Counterman prosecuted for threatening social media messages without proof he understood threatening nature',
      holding: 'True threat prosecutions require proof of subjective awareness of threatening nature, not just objective standard',
      tacticalImpact: 'Higher protection for online speech and digital communications. Prosecutors must prove speaker\'s intent.',
      modernApplication: 'Essential for protecting activists and journalists from threat prosecutions based on misunderstood digital communications'
    },
    'TX': {
      caseName: 'Texas v. Johnson',
      citation: '491 U.S. 397 (1989)',
      year: '1989',
      constitutionalSignificance: 'Symbolic political speech receives highest protection',
      facts: 'Gregory Johnson burned American flag during Republican National Convention protest, arrested under flag desecration law',
      holding: 'Flag burning constitutes symbolic political speech protected by First Amendment',
      tacticalImpact: 'Strong protection for symbolic political expression and protest activities. Government cannot prohibit expression due to offensive message.',
      modernApplication: 'WARNING: Despite strong precedent, 5th Circuit\'s McKesson decision creates severe liability risks for protest organizers'
    },
    'OH': {
      caseName: 'Brandenburg v. Ohio',
      citation: '395 U.S. 444 (1969)',
      year: '1969',
      constitutionalSignificance: 'Established highest protection for political speech through incitement test',
      facts: 'KKK leader made inflammatory speech at rally advocating violence against racial minorities',
      holding: 'Speech protected unless directed to producing imminent lawless action and likely to produce such action',
      tacticalImpact: 'Strongest possible protection for political speech, even extremist advocacy. Government cannot restrict based on abstract advocacy.',
      modernApplication: 'Gold standard for protecting controversial political speech, but 5th Circuit\'s negligence standard directly contradicts Brandenburg'
    }
  };

  // Circuit-specific constitutional analysis
  const circuitAnalysis = {
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
      keyStrengths: ['Floyd v. City of New York stop-and-frisk protections', 'Strong press access rights'],
      warnings: 'Sophisticated legal arguments required due to complex precedents'
    },
    '4th Circuit': {
      approach: 'Strongly Protective',
      qualifiedImmunity: 'More restrictive than most circuits',
      section1983: 'Excellent precedents in Wingate v. Fulford',
      keyStrengths: ['Wingate precedent strengthens ID refusal rights', 'Strong digital privacy protections'],
      warnings: 'Excellent jurisdiction for constitutional challenges'
    },
    '5th Circuit': {
      approach: 'EXTREMELY HOSTILE',
      qualifiedImmunity: 'Broadest application favoring officers',
      section1983: 'Very high bar for municipal liability',
      keyStrengths: 'NONE - Avoid this circuit',
      warnings: 'CRITICAL: McKesson creates "negligent protest" liability. NEVER file protest organizer cases here.'
    },
    '9th Circuit': {
      approach: 'Most Protective',
      qualifiedImmunity: 'Most restrictive application of immunity',
      section1983: 'Broad interpretation of constitutional violations',
      keyStrengths: ['Strongest reasonable suspicion requirements', 'Broad recording rights recognition'],
      warnings: 'Excellent jurisdiction but federal appeals may reverse'
    }
  };

  // State constitutional protections exceeding federal minimums
  const stateConstitutionalProtections = {
    'MT': 'Article II, Section 10 - Right to privacy exceeds federal Fourth Amendment protections',
    'CA': 'Article I, Section 1 - Inalienable right to privacy creates stronger protections than federal law',
    'AK': 'Article I, Section 22 - Privacy protections broader than federal constitutional minimums',
    'HI': 'Strong constitutional privacy traditions protecting individual autonomy',
    'MA': 'Article 14 - Protection against unreasonable searches stronger than federal standards',
    'NJ': 'Robust state constitutional privacy jurisprudence exceeding federal protections'
  };

  const states = [
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
  ];

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
  }, [selectedState]);

  const getTacticalGuidance = (state, circuit) => {
    const baseGuidance = {
      universalPrinciples: [
        '"Officer, are you detaining me or am I free to leave?"',
        'If detained: "What specific facts give you reasonable suspicion of criminal activity?"',
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
          'Document everything - expect judicial skepticism of constitutional claims',
          'Consider removal to federal court with different precedential framework'
        ]
      };
    }

    if (circuit?.hostility === 'Protective') {
      return {
        ...baseGuidance,
        circuitSpecific: [
          'This circuit provides stronger constitutional protections',
          'Leverage favorable precedents for broader constitutional challenges',
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
        'Document all interactions for potential constitutional challenges'
      ]
    };
  };

  const getImmediateActions = (state) => {
    const stopAndId = stopAndIdStates[state];
    
    if (!stopAndId?.hasLaw) {
      return [
        'REFUSE identification unless under arrest',
        'Assert Fourth Amendment protections',
        'Clearly state: "I do not consent to any search"',
        'Ask: "Am I being detained or am I free to leave?"'
      ];
    }

    return [
      'Challenge reasonable suspicion: "What specific facts support your suspicion?"',
      'Document officer responses and badge numbers',
      'Limit compliance to statutory minimum only',
      'Assert constitutional protections: "I am exercising my right to remain silent beyond identification"'
    ];
  };

  const getWarningColor = (warningLevel) => {
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
  };

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
            <p className="text-gray-500 text-xs max-w-2xl mx-auto">
              This investigative platform documents systematic patterns of constitutional circumvention through jurisdictional manipulation, 
              revealing how identical citizen conduct faces dramatically different legal consequences across America's fragmented constitutional landscape.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CivilRightsLegalTool;