/**
 * Comprehensive state profiles with information relevant to journalists and activists
 * 
 * This data includes:
 * - Basic state information
 * - Press freedom laws and shield laws
 * - Protest rights and restrictions
 * - Public records access
 * - Police accountability measures
 * - Key legal contacts and resources
 * - Recent civil rights incidents
 */

export const stateProfiles = {
  LA: {
    name: 'Louisiana',
    capital: 'Baton Rouge',
    // Legal information
    legalInfo: {
      publicRecords: {
        statute: 'Louisiana Public Records Act (La. R.S. 44:1 et seq.)',
        timeLimit: '3 business days for initial response, reasonable time for production',
        fees: 'Reasonable costs for duplication',
        exemptions: ['Ongoing criminal investigations', 'Attorney-client privileged information', 'Personal private information', 'Certain law enforcement records'],
        tips: 'Be specific in your request. Louisiana agencies must provide a written response within 3 business days.'
      },
      shieldLaw: {
        exists: true,
        description: 'Louisiana has a qualified shield law (La. R.S. 45:1451-1459) that protects journalists from being compelled to disclose sources or information.',
        caselaw: 'In re Burns (La. App. 1 Cir. 1994) - Court recognized qualified reporter privilege.'
      },
      protestRights: {
        permitRequirements: 'Permits generally required for demonstrations on public property',
        restrictions: [
          'No blocking of traffic or building entrances',
          'Noise ordinances may be enforced',
          'Counter-protesters must be given equal access'
        ],
        policeInteraction: 'Police may order dispersal if demonstration becomes disorderly',
        recentChanges: 'HB 727 (2018) made it a felony to trespass on critical infrastructure, including pipelines'
      },
      policeAccountability: {
        bodyCamera: 'Not mandated statewide; policies vary by department',
        complaintProcess: 'File with internal affairs division of relevant department',
        civilianOversight: 'Limited; New Orleans has civilian oversight board',
        recordsAccess: 'Police misconduct records generally not public'
      }
    },
    // Key contacts
    contacts: {
      legalAid: [
        {
          name: 'Louisiana Civil Justice Center',
          phone: '(504) 355-0970',
          website: 'https://laciviljustice.org'
        },
        {
          name: 'ACLU of Louisiana',
          phone: '(504) 522-0617',
          website: 'https://laaclu.org'
        }
      ],
      publicDefender: {
        name: 'Louisiana Public Defender Board',
        phone: '(225) 219-9305',
        website: 'https://lpdb.la.gov'
      },
      attorneyGeneral: {
        name: 'Louisiana Department of Justice',
        phone: '(225) 326-6079',
        website: 'https://agjefflandry.com'
      }
    },
    // Recent incidents
    recentIncidents: [
      {
        date: '2023-06-15',
        location: 'New Orleans',
        description: 'Lawsuit filed against NOPD for excessive force during protest',
        status: 'Pending litigation',
        source: 'ACLU of Louisiana'
      },
      {
        date: '2022-11-03',
        location: 'Baton Rouge',
        description: 'Journalist arrested while covering environmental protest',
        status: 'Charges dropped',
        source: 'Freedom of the Press Foundation'
      }
    ],
    // Medical marijuana information
    medicalMarijuana: {
      status: 'medical-only',
      legal: true,
      recreational: false,
      decriminalized: true,
      freeCardPrograms: [
        {
          name: 'Elevate Holistics',
          description: 'Free medical marijuana cards for new patients through partnership with The Apothecary Shoppe',
          website: 'https://app2.elevate-holistics.com/elevate/customer/partner/the-apothecary-shoppe',
          promoCode: 'APOTHECARYFREE',
          eligibility: 'New patients only'
        },
        {
          name: 'GoodCannaNow',
          description: 'Free medical cannabis certification for new patients in Louisiana',
          website: 'https://app.goodcannanow.com/goodcannanow/',
          eligibility: 'New patients with no current or prior certification'
        },
        {
          name: 'Patient Access to Medicine Program (PAM)',
          description: 'Program designed to help Louisiana patients access medical marijuana by reducing financial barriers',
          website: 'https://app.smartsheet.com/b/form/95439e7817384833981df645d7bfccc0',
          eligibility: 'Louisiana residents seeking medical marijuana access'
        }
      ]
    }
  },
  AL: {
    name: 'Alabama',
    capital: 'Montgomery',
    // Legal information
    legalInfo: {
      publicRecords: {
        statute: 'Alabama Open Records Act (Code of Alabama § 36-12-40)',
        timeLimit: '7-10 business days',
        fees: 'Reasonable costs for duplication',
        exemptions: ['Ongoing criminal investigations', 'Attorney-client privileged information', 'Certain personnel records'],
        tips: 'Be specific in your request. Agencies often interpret the law narrowly.'
      },
      shieldLaw: {
        exists: false,
        description: 'Alabama has no shield law protecting journalists from being compelled to testify about sources or information.',
        caselaw: 'Some limited protection through First Amendment interpretations in state courts.'
      },
      protestRights: {
        permitRequirements: 'Permits generally required for demonstrations on public property',
        restrictions: [
          'No blocking of traffic or building entrances',
          'Noise ordinances may be enforced',
          'Counter-protesters must be given equal access'
        ],
        policeInteraction: 'Police may order dispersal if demonstration becomes disorderly',
        recentChanges: 'HB 445 (2021) increased penalties for "riot" offenses'
      },
      policeAccountability: {
        bodyCamera: 'Not mandated statewide; policies vary by department',
        complaintProcess: 'File with internal affairs division of relevant department',
        civilianOversight: 'Limited; no statewide civilian oversight board',
        recordsAccess: 'Police misconduct records generally not public'
      }
    },
    // Key contacts
    contacts: {
      legalAid: [
        {
          name: 'Alabama Legal Aid',
          phone: '800-819-7752',
          website: 'https://legalaidalabama.org',
          services: ['Civil rights violations', 'Housing discrimination', 'Public benefits']
        },
        {
          name: 'Southern Poverty Law Center',
          phone: '334-956-8200',
          website: 'https://www.splcenter.org',
          services: ['Hate crimes', 'Discrimination cases', 'Immigrant rights']
        }
      ],
      civilRightsOrgs: [
        {
          name: 'ACLU of Alabama',
          phone: '334-265-2754',
          website: 'https://www.aclualabama.org',
          services: ['Legal assistance', 'Know Your Rights training', 'Policy advocacy']
        }
      ],
      journalistResources: [
        {
          name: 'Alabama Press Association',
          phone: '334-262-6871',
          website: 'https://www.alabamapress.org',
          services: ['Legal assistance for journalists', 'FOIA guidance', 'Professional development']
        }
      ],
      emergencyContacts: [
        {
          name: 'National Lawyers Guild Alabama',
          hotline: '205-322-8428',
          services: ['Legal observers', 'Protest arrest support', '24/7 emergency legal assistance']
        }
      ]
    },
    // Recent incidents
    recentIncidents: [
      {
        date: '2023-06-15',
        location: 'Birmingham',
        description: 'Journalists arrested while covering environmental protest',
        status: 'Charges dropped after media pressure'
      },
      {
        date: '2023-04-22',
        location: 'Montgomery',
        description: 'Voting rights demonstration met with excessive force allegations',
        status: 'Pending investigation'
      }
    ],
    // Key legislation to watch
    keyLegislation: [
      {
        bill: 'HB 312',
        session: '2023',
        description: 'Would restrict public access to police body camera footage',
        status: 'In committee',
        impact: 'Would significantly reduce transparency in police encounters'
      },
      {
        bill: 'SB 198',
        session: '2023',
        description: 'Enhanced penalties for protesters blocking traffic',
        status: 'Passed',
        impact: 'Creates felony charges for protesters who block highways'
      }
    ],
    // Media landscape
    mediaLandscape: {
      localOutlets: ['Alabama Media Group', 'Alabama Political Reporter', 'WBRC Fox 6 News'],
      independentMedia: ['Scalawag Magazine', 'Alabama Arise'],
      pressFreedomIssues: ['Consolidation of local newspapers', 'Limited access to government officials', 'Hostility toward journalists at protests']
    },
    // Circuit court information
    circuitInfo: {
      circuit: '11th Circuit',
      hostility: 'Moderate',
      districts: ['Northern District of Alabama', 'Middle District of Alabama', 'Southern District of Alabama'],
      keyJudges: [
        {
          name: 'Judge William H. Pryor Jr.',
          position: 'Chief Judge, 11th Circuit',
          appointed: 'George W. Bush',
          background: 'Conservative, former Alabama Attorney General'
        }
      ],
      notableCases: [
        {
          case: 'Lewis v. Alabama (2019)',
          topic: 'Voting rights',
          ruling: 'Upheld voter ID law',
          impact: 'Maintained barriers to voting for marginalized communities'
        }
      ]
    }
  },
  
  CA: {
    name: 'California',
    capital: 'Sacramento',
    // Legal information
    legalInfo: {
      publicRecords: {
        statute: 'California Public Records Act (Government Code § 6250)',
        timeLimit: '10 calendar days (can be extended by 14 days in unusual circumstances)',
        fees: 'Direct costs of duplication only',
        exemptions: ['Personnel records', 'Pending litigation', 'Deliberative process materials'],
        tips: 'Agencies must assist requesters in making focused requests. Electronic records must be provided in any format in which they exist.'
      },
      shieldLaw: {
        exists: true,
        description: 'California has strong shield law protection under California Constitution, Article I, Section 2(b) and Evidence Code Section 1070',
        coverage: 'Protects journalists from being held in contempt for refusing to disclose sources or unpublished information',
        limitations: 'Does not apply in certain criminal cases where information is critical to the case'
      },
      protestRights: {
        permitRequirements: 'Permits generally not required for demonstrations on public sidewalks and parks',
        restrictions: [
          'Cannot block building entrances or interfere with traffic',
          'No sound amplification without permits in some areas',
          'Temporary structures (stages, etc.) require permits'
        ],
        policeInteraction: 'Police must give clear dispersal orders and time to comply before taking action',
        recentChanges: 'SB 629 (2020) strengthened protections for journalists covering protests'
      },
      policeAccountability: {
        bodyCamera: 'Required for all state law enforcement agencies',
        complaintProcess: 'Complaints can be filed with departments or with state Department of Justice',
        civilianOversight: 'Many cities have civilian oversight commissions',
        recordsAccess: 'SB 1421 (2018) made police misconduct records more accessible to the public'
      }
    },
    // Key contacts
    contacts: {
      legalAid: [
        {
          name: 'Legal Aid Foundation of Los Angeles',
          phone: '800-399-4529',
          website: 'https://lafla.org',
          services: ['Civil rights violations', 'Housing discrimination', 'Immigration issues']
        },
        {
          name: 'California Rural Legal Assistance',
          phone: '661-854-3839',
          website: 'https://www.crla.org',
          services: ['Farmworker rights', 'Housing issues', 'Employment discrimination']
        }
      ],
      civilRightsOrgs: [
        {
          name: 'ACLU of California',
          phone: '415-621-2493',
          website: 'https://www.aclunc.org',
          services: ['Legal assistance', 'Know Your Rights training', 'Policy advocacy']
        },
        {
          name: "Lawyers' Committee for Civil Rights of the San Francisco Bay Area",
          phone: '415-814-7610',
          website: 'https://www.lccrsf.org',
          services: ['Racial justice', 'Immigrant rights', 'Economic justice']
        }
      ],
      journalistResources: [
        {
          name: 'First Amendment Coalition',
          phone: '415-460-5060',
          website: 'https://firstamendmentcoalition.org',
          services: ['Legal hotline for journalists', 'FOIA assistance', 'Litigation support']
        },
        {
          name: 'California News Publishers Association',
          phone: '916-288-6000',
          website: 'https://cnpa.com',
          services: ['Legal assistance', 'Public records advocacy', 'Professional development']
        }
      ],
      emergencyContacts: [
        {
          name: 'National Lawyers Guild - SF Bay Area Chapter',
          hotline: '415-285-1041',
          services: ['Legal observers', 'Protest arrest support', '24/7 emergency legal assistance']
        }
      ]
    },
    // Recent incidents
    recentIncidents: [
      {
        date: '2023-09-01',
        location: 'Los Angeles',
        description: 'Multiple journalists detained while covering housing rights protest',
        status: 'City settled lawsuit with affected journalists'
      },
      {
        date: '2023-07-12',
        location: 'Oakland',
        description: 'Excessive force allegations during environmental justice rally',
        status: 'Under investigation by civilian oversight board'
      }
    ],
    // Key legislation to watch
    keyLegislation: [
      {
        bill: 'AB 1327',
        session: '2023-2024',
        description: 'Would expand public access to police misconduct records',
        status: 'Passed Assembly, in Senate committee',
        impact: 'Would increase transparency in police discipline cases'
      },
      {
        bill: 'SB 731',
        session: '2023-2024',
        description: 'Enhanced protections for journalists covering protests',
        status: 'Signed into law',
        impact: 'Prevents arrest of journalists for being present at protests after dispersal orders'
      }
    ],
    // Media landscape
    mediaLandscape: {
      localOutlets: ['Los Angeles Times', 'San Francisco Chronicle', 'KQED Public Media'],
      independentMedia: ['CalMatters', 'Mission Local', 'Berkeleyside'],
      pressFreedomIssues: ['Consolidation of local news outlets', 'Police treatment of journalists at protests', 'High cost of public records requests']
    },
    // Circuit court information
    circuitInfo: {
      circuit: '9th Circuit',
      hostility: 'Protective',
      districts: ['Northern District of California', 'Central District of California', 'Eastern District of California', 'Southern District of California'],
      keyJudges: [
        {
          name: 'Judge Mary H. Murguia',
          position: 'Chief Judge, 9th Circuit',
          appointed: 'Barack Obama',
          background: 'Former prosecutor and district court judge'
        }
      ],
      notableCases: [
        {
          case: 'Rodriguez v. City of San Jose (2021)',
          topic: 'First Amendment rights at protests',
          ruling: 'Strengthened protections for observers at demonstrations',
          impact: 'Established clearer guidelines for police interaction with journalists'
        }
      ]
    }
  },
  
  NY: {
    name: 'New York',
    capital: 'Albany',
    // Legal information
    legalInfo: {
      publicRecords: {
        statute: 'New York Freedom of Information Law (Public Officers Law § 84)',
        timeLimit: '5 business days to acknowledge; 20 business days to provide records',
        fees: 'Up to 25 cents per page for copies; no fee for electronic records',
        exemptions: ['Law enforcement investigations', 'Inter-agency deliberative materials', 'Personal privacy'],
        tips: 'Appeals must be filed within 30 days of denial. The Committee on Open Government provides advisory opinions.'
      },
      shieldLaw: {
        exists: true,
        description: 'New York Civil Rights Law § 79-h provides strong protection for journalists',
        coverage: 'Absolute protection for confidential sources and qualified protection for non-confidential information',
        limitations: 'Qualified privilege can be overcome if information is critical to a case and unavailable elsewhere'
      },
      protestRights: {
        permitRequirements: 'Permits required for demonstrations using amplified sound or blocking streets',
        restrictions: [
          'Cannot block sidewalks completely',
          'Noise ordinances enforced in residential areas',
          'Masks prohibited at demonstrations (with exceptions)'
        ],
        policeInteraction: 'NYPD has specific protest response protocols; legal observers have right to monitor',
        recentChanges: 'RIGHT TO KNOW Act requires officers to identify themselves during stops'
      },
      policeAccountability: {
        bodyCamera: 'Required for NYPD patrol officers',
        complaintProcess: 'Civilian Complaint Review Board investigates police misconduct',
        civilianOversight: 'Strong civilian oversight through CCRB with subpoena power',
        recordsAccess: 'Police disciplinary records public following repeal of 50-a law in 2020'
      }
    },
    // Key contacts
    contacts: {
      legalAid: [
        {
          name: 'Legal Aid Society of New York',
          phone: '212-577-3300',
          website: 'https://www.legalaidnyc.org',
          services: ['Criminal defense', 'Housing issues', 'Immigration assistance']
        },
        {
          name: 'New York Legal Assistance Group',
          phone: '212-613-5000',
          website: 'https://nylag.org',
          services: ['Civil rights violations', 'Immigration issues', 'Public benefits']
        }
      ],
      civilRightsOrgs: [
        {
          name: 'New York Civil Liberties Union',
          phone: '212-607-3300',
          website: 'https://www.nyclu.org',
          services: ['Legal assistance', 'Know Your Rights training', 'Policy advocacy']
        },
        {
          name: 'Center for Constitutional Rights',
          phone: '212-614-6464',
          website: 'https://ccrjustice.org',
          services: ['Impact litigation', 'Legal advocacy', 'International human rights']
        }
      ],
      journalistResources: [
        {
          name: 'Reporters Committee for Freedom of the Press - NY',
          phone: '800-336-4243',
          website: 'https://www.rcfp.org',
          services: ['Legal hotline for journalists', 'FOIA assistance', 'Amicus briefs']
        },
        {
          name: 'Committee to Protect Journalists',
          phone: '212-465-1004',
          website: 'https://cpj.org',
          services: ['Emergency assistance', 'Documentation of press freedom violations', 'Advocacy']
        }
      ],
      emergencyContacts: [
        {
          name: 'National Lawyers Guild - NYC Chapter',
          hotline: '212-679-6018',
          services: ['Legal observers', 'Protest arrest support', '24/7 emergency legal assistance']
        }
      ]
    },
    // Recent incidents
    recentIncidents: [
      {
        date: '2023-08-15',
        location: 'New York City',
        description: 'Multiple journalists arrested during housing protest despite identifying as press',
        status: 'Lawsuit filed against NYPD'
      },
      {
        date: '2023-05-03',
        location: 'Buffalo',
        description: 'Excessive force allegations during labor demonstration',
        status: 'Under investigation by state Attorney General'
      }
    ],
    // Key legislation to watch
    keyLegislation: [
      {
        bill: 'S.2890',
        session: '2023-2024',
        description: 'Would strengthen protections for journalists covering protests',
        status: 'In committee',
        impact: 'Would create penalties for police who interfere with journalists'
      },
      {
        bill: 'A.3395',
        session: '2023-2024',
        description: 'Would expand public access to police disciplinary records',
        status: 'Passed Assembly',
        impact: 'Would increase transparency in police misconduct cases'
      }
    ],
    // Media landscape
    mediaLandscape: {
      localOutlets: ['The New York Times', 'New York Post', 'WNYC Public Radio'],
      independentMedia: ['The City', 'Documented NY', 'Gothamist'],
      pressFreedomIssues: ['Police treatment of journalists at protests', 'Consolidation of local news', 'Surveillance of reporters covering sensitive topics']
    },
    // Circuit court information
    circuitInfo: {
      circuit: '2nd Circuit',
      hostility: 'Protective',
      districts: ['Northern District of New York', 'Southern District of New York', 'Eastern District of New York', 'Western District of New York'],
      keyJudges: [
        {
          name: 'Judge Debra Ann Livingston',
          position: 'Chief Judge, 2nd Circuit',
          appointed: 'George W. Bush',
          background: 'Former prosecutor and law professor'
        }
      ],
      notableCases: [
        {
          case: 'Knight First Amendment Institute v. Trump (2019)',
          topic: 'Social media and free speech',
          ruling: 'Public officials cannot block critics on social media',
          impact: 'Expanded First Amendment protections to digital spaces'
        }
      ]
    }
  },
  
  TX: {
    name: 'Texas',
    capital: 'Austin',
    // Legal information
    legalInfo: {
      publicRecords: {
        statute: 'Texas Public Information Act (Govt Code § 552.001)',
        timeLimit: '10 business days',
        fees: 'Reasonable costs for duplication; can be waived for public interest',
        exemptions: ['Law enforcement investigations', 'Attorney-client privilege', 'Personal privacy'],
        tips: 'Be specific in requests. Texas Attorney General issues binding opinions on disputed records.'
      },
      shieldLaw: {
        exists: true,
        description: 'Texas Free Flow of Information Act provides qualified privilege',
        coverage: 'Protects confidential and non-confidential sources and information',
        limitations: 'Can be overcome in certain criminal cases or if information is critical to a case'
      },
      protestRights: {
        permitRequirements: 'Permits required for demonstrations using streets or amplified sound',
        restrictions: [
          'Cannot block highways (felony offense)',
          'No masks at demonstrations with intent to hide identity',
          'Enhanced penalties for protests near critical infrastructure'
        ],
        policeInteraction: 'Police have broad discretion in managing protests',
        recentChanges: 'HB 9 (2021) increased penalties for blocking highways and emergency vehicles'
      },
      policeAccountability: {
        bodyCamera: 'Required for larger departments; grant funding available',
        complaintProcess: 'File with internal affairs of relevant department',
        civilianOversight: 'Limited; varies by city',
        recordsAccess: 'Police misconduct records difficult to access; many exemptions'
      }
    },
    // Key contacts
    contacts: {
      legalAid: [
        {
          name: 'Texas RioGrande Legal Aid',
          phone: '888-988-9996',
          website: 'https://www.trla.org',
          services: ['Civil rights violations', 'Housing discrimination', 'Immigration issues']
        },
        {
          name: 'Lone Star Legal Aid',
          phone: '800-733-8394',
          website: 'https://www.lonestarlegal.org',
          services: ['Disaster recovery', 'Housing issues', 'Public benefits']
        }
      ],
      civilRightsOrgs: [
        {
          name: 'ACLU of Texas',
          phone: '713-942-8146',
          website: 'https://www.aclutx.org',
          services: ['Legal assistance', 'Know Your Rights training', 'Policy advocacy']
        },
        {
          name: 'Texas Civil Rights Project',
          phone: '512-474-5073',
          website: 'https://txcivilrights.org',
          services: ['Voting rights', 'Criminal justice reform', 'Racial justice']
        }
      ],
      journalistResources: [
        {
          name: 'Freedom of Information Foundation of Texas',
          phone: '512-377-1575',
          website: 'https://www.foift.org',
          services: ['Open records assistance', 'Legal hotline', 'Training']
        },
        {
          name: 'Texas Press Association',
          phone: '512-477-6755',
          website: 'https://www.texaspress.com',
          services: ['Legal assistance for journalists', 'Public records advocacy', 'Professional development']
        }
      ],
      emergencyContacts: [
        {
          name: 'National Lawyers Guild - Texas Chapter',
          hotline: '512-666-2889',
          services: ['Legal observers', 'Protest arrest support', '24/7 emergency legal assistance']
        }
      ]
    },
    // Recent incidents
    recentIncidents: [
      {
        date: '2023-07-22',
        location: 'Austin',
        description: 'Journalists prevented from documenting immigration protest',
        status: 'Media organizations filed complaints'
      },
      {
        date: '2023-04-10',
        location: 'Houston',
        description: 'Multiple arrests at environmental justice demonstration',
        status: 'Most charges dismissed; civil suits pending'
      }
    ],
    // Key legislation to watch
    keyLegislation: [
      {
        bill: 'HB 2889',
        session: '2023',
        description: 'Would further restrict protests near energy facilities',
        status: 'Passed',
        impact: 'Creates felony charges for protesters at oil and gas facilities'
      },
      {
        bill: 'SB 912',
        session: '2023',
        description: 'Would limit public information about police tactics',
        status: 'In committee',
        impact: 'Would reduce transparency in police operations'
      }
    ],
    // Media landscape
    mediaLandscape: {
      localOutlets: ['The Texas Tribune', 'Houston Chronicle', 'Dallas Morning News'],
      independentMedia: ['Texas Observer', 'Outlier Media', 'Austin Chronicle'],
      pressFreedomIssues: ['Access restrictions at the border', 'Hostility toward journalists at protests', 'Consolidation of local news outlets']
    },
    // Circuit court information
    circuitInfo: {
      circuit: '5th Circuit',
      hostility: 'EXTREMELY HOSTILE',
      districts: ['Northern District of Texas', 'Southern District of Texas', 'Eastern District of Texas', 'Western District of Texas'],
      keyJudges: [
        {
          name: 'Judge Priscilla Richman',
          position: 'Chief Judge, 5th Circuit',
          appointed: 'George W. Bush',
          background: 'Conservative, former corporate attorney'
        }
      ],
      notableCases: [
        {
          case: 'NetChoice v. Paxton (2022)',
          topic: 'Social media regulation',
          ruling: 'Upheld Texas law allowing lawsuits against social media platforms for content moderation',
          impact: 'Created conflict with First Amendment interpretations in other circuits'
        }
      ]
    }
  }
};

// Add more states as needed...

/**
 * Get a state profile by state code
 * 
 * @param {string} stateCode - Two-letter state code
 * @returns {Object|null} State profile or null if not found
 */
export const getStateProfile = (stateCode) => {
  if (!stateCode) return null;
  
  const code = stateCode.toUpperCase();
  return stateProfiles[code] || null;
};

/**
 * Get all state profiles
 * 
 * @returns {Object} All state profiles
 */
export const getAllStateProfiles = () => {
  return stateProfiles;
};

/**
 * Get states by circuit court
 * 
 * @param {string} circuit - Circuit court name
 * @returns {Array} Array of state codes in the circuit
 */
export const getStatesByCircuit = (circuit) => {
  if (!circuit) return [];
  
  return Object.entries(stateProfiles)
    .filter(([_, profile]) => profile.circuitInfo.circuit === circuit)
    .map(([stateCode, _]) => stateCode);
};

/**
 * Get states by hostility level
 * 
 * @param {string} hostility - Hostility level
 * @returns {Array} Array of state codes with the hostility level
 */
export const getStatesByHostility = (hostility) => {
  if (!hostility) return [];
  
  return Object.entries(stateProfiles)
    .filter(([_, profile]) => profile.circuitInfo.hostility === hostility)
    .map(([stateCode, _]) => stateCode);
};