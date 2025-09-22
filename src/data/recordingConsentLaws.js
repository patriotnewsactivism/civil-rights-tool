/**
 * Comprehensive recording consent laws by state
 * 
 * This data includes:
 * - One-party vs. two-party consent requirements
 * - Exceptions and special provisions
 * - Penalties for violations
 * - Relevant case law
 * - Recent legal changes
 */

export const recordingConsentLaws = {
  AL: {
    consentType: 'One-Party',
    statute: 'Alabama Code § 13A-11-30',
    description: 'Alabama is a one-party consent state. As long as you are a party to the conversation, you can record it without informing the other parties.',
    exceptions: [
      'Recording for criminal or tortious purposes is illegal regardless of consent'
    ],
    penalties: {
      criminal: 'Class A misdemeanor',
      civil: 'Actual damages plus punitive damages and attorney fees'
    },
    caseLaw: [
      {
        case: 'AGO 2008-004',
        ruling: 'Alabama Attorney General Opinion confirming one-party consent standard',
        significance: 'Official interpretation of state law by Attorney General'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  AK: {
    consentType: 'One-Party',
    statute: 'Alaska Stat. § 42.20.310',
    description: 'Alaska is a one-party consent state. You may record conversations you participate in without notifying other parties.',
    exceptions: [
      'Recording for criminal, tortious, or other injurious purposes is illegal'
    ],
    penalties: {
      criminal: 'Class A misdemeanor',
      civil: 'Actual damages, $1,000 per day of violation, punitive damages, and attorney fees'
    },
    caseLaw: [
      {
        case: 'State v. Glass, 583 P.2d 872 (Alaska 1978)',
        ruling: 'Alaska Constitution provides greater protection than federal law for recordings by police informants',
        significance: 'Established additional protections under state constitution'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  AZ: {
    consentType: 'One-Party',
    statute: 'Ariz. Rev. Stat. Ann. § 13-3005',
    description: 'Arizona is a one-party consent state. You can record a conversation if you are a party to it or have permission from one party.',
    exceptions: [
      'Recording for criminal or tortious purposes is illegal regardless of consent'
    ],
    penalties: {
      criminal: 'Class 5 felony',
      civil: 'Actual damages, punitive damages, and attorney fees'
    },
    caseLaw: [
      {
        case: 'State v. Hauss, 142 Ariz. 159, 688 P.2d 1051 (Ariz. Ct. App. 1984)',
        ruling: 'Confirmed one-party consent standard under Arizona law',
        significance: 'Established precedent for one-party consent interpretation'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  AR: {
    consentType: 'One-Party',
    statute: 'Ark. Code Ann. § 5-60-120',
    description: 'Arkansas is a one-party consent state. Recording is legal if you are a party to the conversation or have consent from one party.',
    exceptions: [
      'Recording for criminal or tortious purposes is illegal regardless of consent'
    ],
    penalties: {
      criminal: 'Class A misdemeanor',
      civil: 'Actual damages and punitive damages'
    },
    caseLaw: [
      {
        case: 'Alexander v. Pathfinder, Inc., 189 F.3d 735 (8th Cir. 1999)',
        ruling: 'Applied Arkansas one-party consent standard in federal case',
        significance: 'Federal court recognition of Arkansas one-party consent law'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  CA: {
    consentType: 'Two-Party',
    statute: 'Cal. Penal Code § 632',
    description: 'California is a two-party (all-party) consent state. All parties to a confidential communication must give permission for recording.',
    exceptions: [
      'Public conversations where there is no reasonable expectation of privacy',
      'Certain law enforcement exceptions with court approval',
      'Emergency situations involving danger of great bodily harm'
    ],
    penalties: {
      criminal: 'Fine up to $2,500 and/or imprisonment up to 1 year',
      civil: '$5,000 or three times actual damages, whichever is greater'
    },
    caseLaw: [
      {
        case: 'Kearney v. Salomon Smith Barney, Inc., 39 Cal. 4th 95 (2006)',
        ruling: 'California law applies to out-of-state parties recording calls with California residents',
        significance: 'Extended California two-party consent law across state lines'
      },
      {
        case: 'Flanagan v. Flanagan, 27 Cal. 4th 766 (2002)',
        ruling: 'Defined "confidential communication" as any communication where parties have a reasonable expectation that it is not being recorded',
        significance: 'Clarified scope of privacy expectations under California law'
      }
    ],
    recentChanges: 'SB 23 (2023) strengthened penalties for recording intimate parts of a person without consent'
  },
  CO: {
    consentType: 'One-Party',
    statute: 'Colo. Rev. Stat. § 18-9-303',
    description: 'Colorado is a one-party consent state. You can legally record a conversation if you are a party to it or have permission from one party.',
    exceptions: [
      'Recording for criminal or tortious purposes is illegal regardless of consent'
    ],
    penalties: {
      criminal: 'Class 1 misdemeanor',
      civil: 'Actual damages, statutory damages of $100 per day or $10,000, whichever is greater'
    },
    caseLaw: [
      {
        case: 'People v. Lesslie, 24 P.3d 22 (Colo. App. 2000)',
        ruling: 'Confirmed Colorado as a one-party consent state for recording purposes',
        significance: 'Clear judicial interpretation of state statute'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  CT: {
    consentType: 'One-Party',
    statute: 'Conn. Gen. Stat. § 53a-187, § 53a-189',
    description: 'Connecticut is a one-party consent state for audio recording. You can record a conversation if you are a party to it.',
    exceptions: [
      'Recording telephone conversations requires all-party consent',
      'Video recording in private places without consent is prohibited'
    ],
    penalties: {
      criminal: 'Class D felony',
      civil: 'Actual damages and punitive damages'
    },
    caseLaw: [
      {
        case: 'State v. Grullon, 212 Conn. 195 (1989)',
        ruling: 'One party to a conversation can consent to its recording',
        significance: 'Judicial confirmation of one-party consent standard'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  DE: {
    consentType: 'One-Party',
    statute: 'Del. Code Ann. tit. 11, § 2402',
    description: 'Delaware is a one-party consent state. You can record a conversation if you are a party to it or have permission from one party.',
    exceptions: [
      'Recording for criminal or tortious purposes is illegal regardless of consent'
    ],
    penalties: {
      criminal: 'Class F felony',
      civil: 'Actual damages, punitive damages, and attorney fees'
    },
    caseLaw: [
      {
        case: 'Acosta v. State, 417 A.2d 373 (Del. 1980)',
        ruling: 'Upheld one-party consent for recording in criminal investigation',
        significance: 'Judicial confirmation of one-party consent standard'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  FL: {
    consentType: 'Two-Party',
    statute: 'Fla. Stat. § 934.03',
    description: 'Florida is a two-party (all-party) consent state. All parties to a private conversation must consent to recording.',
    exceptions: [
      'Public conversations where there is no reasonable expectation of privacy',
      'Law enforcement exceptions with court approval',
      'Business extension exception for certain business communications'
    ],
    penalties: {
      criminal: 'Third-degree felony, punishable by up to 5 years in prison',
      civil: 'Actual damages, punitive damages, attorney fees, and $100 per day or $1,000, whichever is higher'
    },
    caseLaw: [
      {
        case: 'McDade v. State, 154 So. 3d 292 (Fla. 2014)',
        ruling: 'Recording made in suspect\'s home without consent violated Florida law even when one party consented',
        significance: 'Strong affirmation of two-party consent requirement'
      },
      {
        case: 'State v. Inciarrano, 473 So. 2d 1272 (Fla. 1985)',
        ruling: 'No reasonable expectation of privacy in committing a crime',
        significance: 'Created exception for recordings of criminal activity'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  GA: {
    consentType: 'One-Party',
    statute: 'Ga. Code Ann. § 16-11-62, § 16-11-66',
    description: 'Georgia is a one-party consent state. You can record a conversation if you are a party to it or have permission from one party.',
    exceptions: [
      'Recording in private places for indecent purposes is prohibited',
      'Recording for criminal or tortious purposes is illegal'
    ],
    penalties: {
      criminal: 'Felony punishable by 1-5 years imprisonment',
      civil: 'Actual damages and punitive damages'
    },
    caseLaw: [
      {
        case: 'Ransom v. Ransom, 253 Ga. App. 656 (2002)',
        ruling: 'Telephone conversations may be recorded by one party without consent of the other',
        significance: 'Clear judicial interpretation of one-party consent standard'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  HI: {
    consentType: 'One-Party',
    statute: 'Haw. Rev. Stat. § 803-42',
    description: 'Hawaii is a one-party consent state. You can record a conversation if you are a party to it or have permission from one party.',
    exceptions: [
      'Recording for criminal or tortious purposes is illegal regardless of consent'
    ],
    penalties: {
      criminal: 'Class C felony',
      civil: 'Actual damages, $100 per day or $10,000, whichever is greater, punitive damages, and attorney fees'
    },
    caseLaw: [
      {
        case: 'State v. Lester, 649 P.2d 346 (Haw. 1982)',
        ruling: 'Confirmed one-party consent standard under Hawaii law',
        significance: 'Established precedent for one-party consent interpretation'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  ID: {
    consentType: 'One-Party',
    statute: 'Idaho Code § 18-6702',
    description: 'Idaho is a one-party consent state. You can record a conversation if you are a party to it or have permission from one party.',
    exceptions: [
      'Recording for criminal or tortious purposes is illegal regardless of consent'
    ],
    penalties: {
      criminal: 'Felony punishable by up to 5 years imprisonment and/or $5,000 fine',
      civil: 'Actual damages, punitive damages, and attorney fees'
    },
    caseLaw: [
      {
        case: 'State v. Townsend, 124 Idaho 881 (1993)',
        ruling: 'Applied one-party consent standard in criminal case',
        significance: 'Judicial confirmation of one-party consent interpretation'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  IL: {
    consentType: 'One-Party',
    statute: '720 ILCS 5/14-2',
    description: 'Illinois is now a one-party consent state. You can record a conversation if you are a party to it or have permission from one party.',
    exceptions: [
      'Recording private conversations with criminal intent is still prohibited',
      'Surreptitious recording of private conversations in private places may still be illegal'
    ],
    penalties: {
      criminal: 'Class 4 felony',
      civil: 'Greater of actual damages or statutory damages of $500 per violation'
    },
    caseLaw: [
      {
        case: 'People v. Clark, 2014 IL 115776',
        ruling: 'Illinois Supreme Court struck down previous two-party consent law as unconstitutionally overbroad',
        significance: 'Led to legislative change from two-party to one-party consent'
      },
      {
        case: 'ACLU v. Alvarez, 679 F.3d 583 (7th Cir. 2012)',
        ruling: 'First Amendment protects audio recording of police officers performing public duties',
        significance: 'Established constitutional protection for recording public officials'
      }
    ],
    recentChanges: 'In 2014, Illinois changed from a two-party consent state to a one-party consent state after its previous law was found unconstitutional'
  },
  IN: {
    consentType: 'One-Party',
    statute: 'Ind. Code § 35-33.5-1-5',
    description: 'Indiana is a one-party consent state. You can record a conversation if you are a party to it or have permission from one party.',
    exceptions: [
      'Recording for criminal or tortious purposes is illegal regardless of consent'
    ],
    penalties: {
      criminal: 'Level 6 felony',
      civil: 'Actual damages and punitive damages'
    },
    caseLaw: [
      {
        case: 'Berger v. State, 531 N.E.2d 521 (Ind. Ct. App. 1988)',
        ruling: 'Upheld one-party consent standard for recording',
        significance: 'Judicial confirmation of one-party consent interpretation'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  IA: {
    consentType: 'One-Party',
    statute: 'Iowa Code § 808B.2',
    description: 'Iowa is a one-party consent state. You can record a conversation if you are a party to it or have permission from one party.',
    exceptions: [
      'Recording for criminal or tortious purposes is illegal regardless of consent'
    ],
    penalties: {
      criminal: 'Class D felony',
      civil: 'Actual damages, statutory damages of $100 per day or $1,000, whichever is higher, punitive damages, and attorney fees'
    },
    caseLaw: [
      {
        case: 'State v. Philpott, 882 N.W.2d 857 (Iowa 2016)',
        ruling: 'Confirmed one-party consent standard in context of police recording',
        significance: 'Recent judicial confirmation of one-party consent standard'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  KS: {
    consentType: 'One-Party',
    statute: 'Kan. Stat. Ann. § 21-6101',
    description: 'Kansas is a one-party consent state. You can record a conversation if you are a party to it or have permission from one party.',
    exceptions: [
      'Recording for criminal or tortious purposes is illegal regardless of consent'
    ],
    penalties: {
      criminal: 'Class A nonperson misdemeanor',
      civil: 'Actual damages and punitive damages'
    },
    caseLaw: [
      {
        case: 'State v. Roudybush, 235 Kan. 834 (1984)',
        ruling: 'Applied one-party consent standard in criminal case',
        significance: 'Judicial confirmation of one-party consent interpretation'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  KY: {
    consentType: 'One-Party',
    statute: 'Ky. Rev. Stat. Ann. § 526.010, § 526.020',
    description: 'Kentucky is a one-party consent state. You can record a conversation if you are a party to it or have permission from one party.',
    exceptions: [
      'Recording for criminal or tortious purposes is illegal regardless of consent'
    ],
    penalties: {
      criminal: 'Class D felony',
      civil: 'Actual damages and punitive damages'
    },
    caseLaw: [
      {
        case: 'Carrier v. Commonwealth, 607 S.W.2d 115 (Ky. Ct. App. 1980)',
        ruling: 'Applied one-party consent standard in criminal case',
        significance: 'Judicial confirmation of one-party consent interpretation'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  LA: {
    consentType: 'One-Party',
    statute: 'La. Rev. Stat. Ann. § 15:1303',
    description: 'Louisiana is a one-party consent state. You can record a conversation if you are a party to it or have permission from one party.',
    exceptions: [
      'Recording for criminal or tortious purposes is illegal regardless of consent'
    ],
    penalties: {
      criminal: 'Fine up to $10,000 and/or imprisonment up to 5 years',
      civil: 'Actual damages, punitive damages, and attorney fees'
    },
    caseLaw: [
      {
        case: 'State v. Reeves, 427 So. 2d 403 (La. 1982)',
        ruling: 'Applied one-party consent standard in criminal case',
        significance: 'Judicial confirmation of one-party consent interpretation'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  ME: {
    consentType: 'One-Party',
    statute: 'Me. Rev. Stat. Ann. tit. 15, § 710',
    description: 'Maine is a one-party consent state. You can record a conversation if you are a party to it or have permission from one party.',
    exceptions: [
      'Recording for criminal or tortious purposes is illegal regardless of consent'
    ],
    penalties: {
      criminal: 'Class C crime',
      civil: 'Actual damages, punitive damages, and attorney fees'
    },
    caseLaw: [
      {
        case: 'State v. Moulton, 481 A.2d 155 (Me. 1984)',
        ruling: 'Applied one-party consent standard in criminal case',
        significance: 'Judicial confirmation of one-party consent interpretation'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  MD: {
    consentType: 'Two-Party',
    statute: 'Md. Code Ann., Cts. & Jud. Proc. § 10-402',
    description: 'Maryland is a two-party (all-party) consent state. All parties to a private conversation must consent to recording.',
    exceptions: [
      'Public conversations where there is no reasonable expectation of privacy',
      'Law enforcement exceptions with court approval',
      'Recording of emergency communications involving danger'
    ],
    penalties: {
      criminal: 'Felony punishable by up to 5 years imprisonment and/or $10,000 fine',
      civil: 'Actual damages, punitive damages, and attorney fees'
    },
    caseLaw: [
      {
        case: 'Agnew v. State, 461 Md. 672 (2018)',
        ruling: 'Confirmed that Maryland law requires all-party consent for recording private conversations',
        significance: 'Recent judicial confirmation of two-party consent requirement'
      },
      {
        case: 'Graber v. Leiter, 2010 (U.S. District Court)',
        ruling: 'Recording police in public is protected by First Amendment',
        significance: 'Created exception for recording public officials in public places'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  MA: {
    consentType: 'Two-Party',
    statute: 'Mass. Gen. Laws ch. 272, § 99',
    description: 'Massachusetts is a two-party (all-party) consent state. All parties to a private conversation must consent to recording.',
    exceptions: [
      'Public conversations where there is no reasonable expectation of privacy',
      'Law enforcement exceptions with court approval'
    ],
    penalties: {
      criminal: 'Fine up to $10,000 and/or imprisonment up to 5 years',
      civil: 'Actual damages, punitive damages, and attorney fees'
    },
    caseLaw: [
      {
        case: 'Commonwealth v. Manzelli, 864 N.E.2d 566 (Mass. 2007)',
        ruling: 'Confirmed strict interpretation of all-party consent requirement',
        significance: 'Reinforced Massachusetts\' strict two-party consent standard'
      },
      {
        case: 'Project Veritas Action Fund v. Rollins, 982 F.3d 813 (1st Cir. 2020)',
        ruling: 'Secret recording of government officials performing duties in public spaces is protected by First Amendment',
        significance: 'Created constitutional exception for recording public officials'
      }
    ],
    recentChanges: 'First Circuit Court of Appeals ruled in 2020 that secret recording of government officials in public is constitutionally protected'
  },
  MI: {
    consentType: 'One-Party',
    statute: 'Mich. Comp. Laws § 750.539c',
    description: 'Michigan is a one-party consent state. You can record a conversation if you are a party to it or have permission from one party.',
    exceptions: [
      'Recording for criminal or tortious purposes is illegal regardless of consent'
    ],
    penalties: {
      criminal: 'Felony punishable by up to 2 years imprisonment and/or $2,000 fine',
      civil: 'Actual damages, punitive damages, and attorney fees'
    },
    caseLaw: [
      {
        case: 'Sullivan v. Gray, 117 Mich. App. 476 (1982)',
        ruling: 'Michigan eavesdropping statute does not apply to participant recording',
        significance: 'Established one-party consent standard in Michigan'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  MN: {
    consentType: 'One-Party',
    statute: 'Minn. Stat. § 626A.02',
    description: 'Minnesota is a one-party consent state. You can record a conversation if you are a party to it or have permission from one party.',
    exceptions: [
      'Recording for criminal or tortious purposes is illegal regardless of consent'
    ],
    penalties: {
      criminal: 'Felony punishable by up to 5 years imprisonment and/or $20,000 fine',
      civil: 'Actual damages, punitive damages, and attorney fees'
    },
    caseLaw: [
      {
        case: 'State v. Bellfield, 275 N.W.2d 577 (Minn. 1978)',
        ruling: 'Applied one-party consent standard in criminal case',
        significance: 'Judicial confirmation of one-party consent interpretation'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  MS: {
    consentType: 'One-Party',
    statute: 'Miss. Code Ann. § 41-29-531',
    description: 'Mississippi is a one-party consent state. You can record a conversation if you are a party to it or have permission from one party.',
    exceptions: [
      'Recording for criminal or tortious purposes is illegal regardless of consent'
    ],
    penalties: {
      criminal: 'Felony punishable by up to 5 years imprisonment and/or $10,000 fine',
      civil: 'Actual damages and punitive damages'
    },
    caseLaw: [
      {
        case: 'Williamson v. State, 993 So. 2d 822 (Miss. Ct. App. 2007)',
        ruling: 'Applied one-party consent standard in criminal case',
        significance: 'Judicial confirmation of one-party consent interpretation'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  MO: {
    consentType: 'One-Party',
    statute: 'Mo. Rev. Stat. § 542.402',
    description: 'Missouri is a one-party consent state. You can record a conversation if you are a party to it or have permission from one party.',
    exceptions: [
      'Recording for criminal or tortious purposes is illegal regardless of consent'
    ],
    penalties: {
      criminal: 'Class E felony',
      civil: 'Actual damages, punitive damages, and attorney fees'
    },
    caseLaw: [
      {
        case: 'State v. Speer, 419 S.W.3d 158 (Mo. Ct. App. 2013)',
        ruling: 'Applied one-party consent standard in criminal case',
        significance: 'Recent judicial confirmation of one-party consent standard'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  MT: {
    consentType: 'One-Party',
    statute: 'Mont. Code Ann. § 45-8-213',
    description: 'Montana is a one-party consent state. You can record a conversation if you are a party to it or have permission from one party.',
    exceptions: [
      'Recording for criminal or tortious purposes is illegal regardless of consent'
    ],
    penalties: {
      criminal: 'Fine up to $500 and/or imprisonment up to 6 months',
      civil: 'Actual damages and punitive damages'
    },
    caseLaw: [
      {
        case: 'State v. Goetz, 191 P.3d 489 (Mont. 2008)',
        ruling: 'Montana Constitution requires law enforcement to obtain warrant before recording conversations in private homes',
        significance: 'Established greater privacy protection under state constitution'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  NE: {
    consentType: 'One-Party',
    statute: 'Neb. Rev. Stat. § 86-290',
    description: 'Nebraska is a one-party consent state. You can record a conversation if you are a party to it or have permission from one party.',
    exceptions: [
      'Recording for criminal or tortious purposes is illegal regardless of consent'
    ],
    penalties: {
      criminal: 'Class IV felony',
      civil: 'Actual damages, statutory damages of $1,000 per day per violation, and attorney fees'
    },
    caseLaw: [
      {
        case: 'State v. Knutson, 288 Neb. 823 (2014)',
        ruling: 'Applied one-party consent standard in criminal case',
        significance: 'Recent judicial confirmation of one-party consent standard'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  NV: {
    consentType: 'One-Party',
    statute: 'Nev. Rev. Stat. § 200.620, § 200.650',
    description: 'Nevada has a mixed consent law. For telephone conversations, all parties must consent. For in-person conversations, only one party needs to consent.',
    exceptions: [
      'Law enforcement exceptions with court approval',
      'Emergency situations involving danger'
    ],
    penalties: {
      criminal: 'Category D felony',
      civil: 'Actual damages and punitive damages'
    },
    caseLaw: [
      {
        case: 'Lane v. Allstate Ins. Co., 969 P.2d 938 (Nev. 1998)',
        ruling: 'Confirmed that Nevada requires all-party consent for telephone conversations',
        significance: 'Established dual standard for telephone vs. in-person conversations'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  NH: {
    consentType: 'One-Party',
    statute: 'N.H. Rev. Stat. Ann. § 570-A:2',
    description: 'New Hampshire is a one-party consent state. You can record a conversation if you are a party to it or have permission from one party.',
    exceptions: [
      'Recording for criminal or tortious purposes is illegal regardless of consent'
    ],
    penalties: {
      criminal: 'Class B felony',
      civil: 'Actual damages, punitive damages, and attorney fees'
    },
    caseLaw: [
      {
        case: 'State v. Locke, 761 A.2d 376 (N.H. 1999)',
        ruling: 'Applied one-party consent standard in criminal case',
        significance: 'Judicial confirmation of one-party consent interpretation'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  NJ: {
    consentType: 'One-Party',
    statute: 'N.J. Stat. Ann. § 2A:156A-4',
    description: 'New Jersey is a one-party consent state. You can record a conversation if you are a party to it or have permission from one party.',
    exceptions: [
      'Recording for criminal or tortious purposes is illegal regardless of consent'
    ],
    penalties: {
      criminal: 'Third-degree crime',
      civil: 'Actual damages, punitive damages, and attorney fees'
    },
    caseLaw: [
      {
        case: 'State v. Diaz, 308 N.J. Super. 504 (1998)',
        ruling: 'Applied one-party consent standard in criminal case',
        significance: 'Judicial confirmation of one-party consent interpretation'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  NM: {
    consentType: 'One-Party',
    statute: 'N.M. Stat. Ann. § 30-12-1',
    description: 'New Mexico is a one-party consent state. You can record a conversation if you are a party to it or have permission from one party.',
    exceptions: [
      'Recording for criminal or tortious purposes is illegal regardless of consent'
    ],
    penalties: {
      criminal: 'Misdemeanor',
      civil: 'Actual damages and punitive damages'
    },
    caseLaw: [
      {
        case: 'State v. Hogervorst, 90 N.M. 580 (1977)',
        ruling: 'Applied one-party consent standard in criminal case',
        significance: 'Judicial confirmation of one-party consent interpretation'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  NY: {
    consentType: 'One-Party',
    statute: 'N.Y. Penal Law § 250.00, § 250.05',
    description: 'New York is a one-party consent state. You can record a conversation if you are a party to it or have permission from one party.',
    exceptions: [
      'Recording for criminal or tortious purposes is illegal regardless of consent'
    ],
    penalties: {
      criminal: 'Class E felony',
      civil: 'Actual damages and punitive damages'
    },
    caseLaw: [
      {
        case: 'People v. Lasher, 58 N.Y.2d 962 (1983)',
        ruling: 'Applied one-party consent standard in criminal case',
        significance: 'Judicial confirmation of one-party consent interpretation'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  NC: {
    consentType: 'One-Party',
    statute: 'N.C. Gen. Stat. § 15A-287',
    description: 'North Carolina is a one-party consent state. You can record a conversation if you are a party to it or have permission from one party.',
    exceptions: [
      'Recording for criminal or tortious purposes is illegal regardless of consent'
    ],
    penalties: {
      criminal: 'Class H felony',
      civil: 'Actual damages and punitive damages'
    },
    caseLaw: [
      {
        case: 'State v. Price, 170 N.C. App. 57 (2005)',
        ruling: 'Applied one-party consent standard in criminal case',
        significance: 'Judicial confirmation of one-party consent interpretation'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  ND: {
    consentType: 'One-Party',
    statute: 'N.D. Cent. Code § 12.1-15-02',
    description: 'North Dakota is a one-party consent state. You can record a conversation if you are a party to it or have permission from one party.',
    exceptions: [
      'Recording for criminal or tortious purposes is illegal regardless of consent'
    ],
    penalties: {
      criminal: 'Class C felony',
      civil: 'Actual damages and punitive damages'
    },
    caseLaw: [
      {
        case: 'State v. Loh, 874 N.W.2d 332 (N.D. 2016)',
        ruling: 'Applied one-party consent standard in criminal case',
        significance: 'Recent judicial confirmation of one-party consent standard'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  OH: {
    consentType: 'One-Party',
    statute: 'Ohio Rev. Code Ann. § 2933.52',
    description: 'Ohio is a one-party consent state. You can record a conversation if you are a party to it or have permission from one party.',
    exceptions: [
      'Recording for criminal or tortious purposes is illegal regardless of consent'
    ],
    penalties: {
      criminal: 'Fourth-degree felony',
      civil: 'Actual damages, punitive damages, and attorney fees'
    },
    caseLaw: [
      {
        case: 'State v. Geraldo, 68 Ohio St. 2d 120 (1981)',
        ruling: 'Applied one-party consent standard in criminal case',
        significance: 'Judicial confirmation of one-party consent interpretation'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  OK: {
    consentType: 'One-Party',
    statute: 'Okla. Stat. tit. 13, § 176.4',
    description: 'Oklahoma is a one-party consent state. You can record a conversation if you are a party to it or have permission from one party.',
    exceptions: [
      'Recording for criminal or tortious purposes is illegal regardless of consent'
    ],
    penalties: {
      criminal: 'Felony punishable by up to 5 years imprisonment and/or $5,000 fine',
      civil: 'Actual damages, punitive damages, and attorney fees'
    },
    caseLaw: [
      {
        case: 'Weaver v. State, 763 P.2d 72 (Okla. Crim. App. 1988)',
        ruling: 'Applied one-party consent standard in criminal case',
        significance: 'Judicial confirmation of one-party consent interpretation'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  OR: {
    consentType: 'One-Party',
    statute: 'Or. Rev. Stat. § 165.540',
    description: 'Oregon is a one-party consent state. You can record a conversation if you are a party to it or have permission from one party.',
    exceptions: [
      'Recording telephone conversations requires notification or a warning tone',
      'Recording for criminal or tortious purposes is illegal'
    ],
    penalties: {
      criminal: 'Class A misdemeanor',
      civil: 'Actual damages and punitive damages'
    },
    caseLaw: [
      {
        case: 'State v. Lissy, 304 Or. App. 656 (2020)',
        ruling: 'Applied one-party consent standard while noting special requirements for telephone recordings',
        significance: 'Recent judicial confirmation of one-party consent standard with telephone exception'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  PA: {
    consentType: 'Two-Party',
    statute: '18 Pa. Cons. Stat. § 5703, § 5704',
    description: 'Pennsylvania is a two-party (all-party) consent state. All parties to a private conversation must consent to recording.',
    exceptions: [
      'Public conversations where there is no reasonable expectation of privacy',
      'Law enforcement exceptions with court approval',
      'Emergency situations involving danger'
    ],
    penalties: {
      criminal: 'Third-degree felony',
      civil: 'Actual damages, punitive damages, and attorney fees'
    },
    caseLaw: [
      {
        case: 'Commonwealth v. Spence, 91 A.3d 44 (Pa. 2014)',
        ruling: 'Confirmed Pennsylvania\'s strict two-party consent requirement',
        significance: 'Recent judicial confirmation of two-party consent standard'
      },
      {
        case: 'Agnew v. Dupler, 717 A.2d 519 (Pa. 1998)',
        ruling: 'No expectation of privacy in conversations that can be overheard without amplification',
        significance: 'Clarified scope of privacy expectations under Pennsylvania law'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  RI: {
    consentType: 'One-Party',
    statute: 'R.I. Gen. Laws § 11-35-21',
    description: 'Rhode Island is a one-party consent state. You can record a conversation if you are a party to it or have permission from one party.',
    exceptions: [
      'Recording for criminal or tortious purposes is illegal regardless of consent'
    ],
    penalties: {
      criminal: 'Felony punishable by up to 5 years imprisonment and/or $5,000 fine',
      civil: 'Actual damages and punitive damages'
    },
    caseLaw: [
      {
        case: 'State v. O\'Brien, 774 A.2d 89 (R.I. 2001)',
        ruling: 'Applied one-party consent standard in criminal case',
        significance: 'Judicial confirmation of one-party consent interpretation'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  SC: {
    consentType: 'One-Party',
    statute: 'S.C. Code Ann. § 17-30-30',
    description: 'South Carolina is a one-party consent state. You can record a conversation if you are a party to it or have permission from one party.',
    exceptions: [
      'Recording for criminal or tortious purposes is illegal regardless of consent'
    ],
    penalties: {
      criminal: 'Felony punishable by up to 5 years imprisonment and/or $5,000 fine',
      civil: 'Actual damages and punitive damages'
    },
    caseLaw: [
      {
        case: 'Dorman v. Aiken Communications, Inc., 398 S.C. 452 (2012)',
        ruling: 'Applied one-party consent standard in civil case',
        significance: 'Judicial confirmation of one-party consent interpretation'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  SD: {
    consentType: 'One-Party',
    statute: 'S.D. Codified Laws § 23A-35A-20',
    description: 'South Dakota is a one-party consent state. You can record a conversation if you are a party to it or have permission from one party.',
    exceptions: [
      'Recording for criminal or tortious purposes is illegal regardless of consent'
    ],
    penalties: {
      criminal: 'Class 5 felony',
      civil: 'Actual damages and punitive damages'
    },
    caseLaw: [
      {
        case: 'State v. Braddock, 452 N.W.2d 785 (S.D. 1990)',
        ruling: 'Applied one-party consent standard in criminal case',
        significance: 'Judicial confirmation of one-party consent interpretation'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  TN: {
    consentType: 'One-Party',
    statute: 'Tenn. Code Ann. § 39-13-601',
    description: 'Tennessee is a one-party consent state. You can record a conversation if you are a party to it or have permission from one party.',
    exceptions: [
      'Recording for criminal or tortious purposes is illegal regardless of consent'
    ],
    penalties: {
      criminal: 'Class D felony',
      civil: 'Actual damages, punitive damages, and attorney fees'
    },
    caseLaw: [
      {
        case: 'State v. Mosher, 755 S.W.2d 464 (Tenn. Crim. App. 1988)',
        ruling: 'Applied one-party consent standard in criminal case',
        significance: 'Judicial confirmation of one-party consent interpretation'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  TX: {
    consentType: 'One-Party',
    statute: 'Tex. Penal Code Ann. § 16.02',
    description: 'Texas is a one-party consent state. You can record a conversation if you are a party to it or have permission from one party.',
    exceptions: [
      'Recording for criminal or tortious purposes is illegal regardless of consent'
    ],
    penalties: {
      criminal: 'Second-degree felony',
      civil: 'Actual damages, statutory damages of $10,000 per violation, punitive damages, and attorney fees'
    },
    caseLaw: [
      {
        case: 'Kotrla v. Kotrla, 718 S.W.2d 853 (Tex. App. 1986)',
        ruling: 'Applied one-party consent standard in civil case',
        significance: 'Judicial confirmation of one-party consent interpretation'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  UT: {
    consentType: 'One-Party',
    statute: 'Utah Code Ann. § 77-23a-4',
    description: 'Utah is a one-party consent state. You can record a conversation if you are a party to it or have permission from one party.',
    exceptions: [
      'Recording for criminal or tortious purposes is illegal regardless of consent'
    ],
    penalties: {
      criminal: 'Third-degree felony',
      civil: 'Actual damages, statutory damages of $100 per day or $1,000, whichever is higher, punitive damages, and attorney fees'
    },
    caseLaw: [
      {
        case: 'State v. Boone, 232 P.3d 503 (Utah 2010)',
        ruling: 'Applied one-party consent standard in criminal case',
        significance: 'Recent judicial confirmation of one-party consent standard'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  VT: {
    consentType: 'One-Party',
    statute: 'Vt. Stat. Ann. tit. 13, § 2605',
    description: 'Vermont is a one-party consent state. You can record a conversation if you are a party to it or have permission from one party.',
    exceptions: [
      'Recording for criminal or tortious purposes is illegal regardless of consent'
    ],
    penalties: {
      criminal: 'Imprisonment up to 2 years and/or $1,000 fine',
      civil: 'Actual damages and punitive damages'
    },
    caseLaw: [
      {
        case: 'State v. Brooks, 157 Vt. 490 (1991)',
        ruling: 'Applied one-party consent standard in criminal case',
        significance: 'Judicial confirmation of one-party consent interpretation'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  VA: {
    consentType: 'One-Party',
    statute: 'Va. Code Ann. § 19.2-62',
    description: 'Virginia is a one-party consent state. You can record a conversation if you are a party to it or have permission from one party.',
    exceptions: [
      'Recording for criminal or tortious purposes is illegal regardless of consent'
    ],
    penalties: {
      criminal: 'Class 6 felony',
      civil: 'Actual damages, statutory damages of $100 per day or $1,000, whichever is higher, punitive damages, and attorney fees'
    },
    caseLaw: [
      {
        case: 'Cogdill v. Commonwealth, 219 Va. 272 (1978)',
        ruling: 'Applied one-party consent standard in criminal case',
        significance: 'Judicial confirmation of one-party consent interpretation'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  WA: {
    consentType: 'Two-Party',
    statute: 'Wash. Rev. Code § 9.73.030',
    description: 'Washington is a two-party (all-party) consent state. All parties to a private conversation must consent to recording.',
    exceptions: [
      'Public conversations where there is no reasonable expectation of privacy',
      'Emergency situations involving danger',
      'Law enforcement exceptions with court approval',
      'Recordings of threats, extortion, blackmail, or commercial solicitations'
    ],
    penalties: {
      criminal: 'Gross misdemeanor',
      civil: 'Actual damages, statutory damages of $100 per day up to $1,000, punitive damages, and attorney fees'
    },
    caseLaw: [
      {
        case: 'State v. Townsend, 147 Wash. 2d 666 (2002)',
        ruling: 'Confirmed Washington\'s strict two-party consent requirement',
        significance: 'Judicial confirmation of two-party consent standard'
      },
      {
        case: 'Lewis v. State Dept. of Licensing, 157 Wash. 2d 446 (2006)',
        ruling: 'Conversations with public officials in public places may not have privacy protection',
        significance: 'Created exception for recording public officials in public places'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  WV: {
    consentType: 'One-Party',
    statute: 'W. Va. Code § 62-1D-3',
    description: 'West Virginia is a one-party consent state. You can record a conversation if you are a party to it or have permission from one party.',
    exceptions: [
      'Recording for criminal or tortious purposes is illegal regardless of consent'
    ],
    penalties: {
      criminal: 'Felony punishable by up to 5 years imprisonment and/or $10,000 fine',
      civil: 'Actual damages, punitive damages, and attorney fees'
    },
    caseLaw: [
      {
        case: 'State v. Williams, 215 W. Va. 201 (2004)',
        ruling: 'Applied one-party consent standard in criminal case',
        significance: 'Judicial confirmation of one-party consent interpretation'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  WI: {
    consentType: 'One-Party',
    statute: 'Wis. Stat. § 968.31',
    description: 'Wisconsin is a one-party consent state. You can record a conversation if you are a party to it or have permission from one party.',
    exceptions: [
      'Recording for criminal or tortious purposes is illegal regardless of consent'
    ],
    penalties: {
      criminal: 'Class H felony',
      civil: 'Actual damages, punitive damages, and attorney fees'
    },
    caseLaw: [
      {
        case: 'State v. Duchow, 310 Wis. 2d 1 (2008)',
        ruling: 'Applied one-party consent standard in criminal case',
        significance: 'Recent judicial confirmation of one-party consent standard'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  WY: {
    consentType: 'One-Party',
    statute: 'Wyo. Stat. Ann. § 7-3-702',
    description: 'Wyoming is a one-party consent state. You can record a conversation if you are a party to it or have permission from one party.',
    exceptions: [
      'Recording for criminal or tortious purposes is illegal regardless of consent'
    ],
    penalties: {
      criminal: 'Felony punishable by up to 5 years imprisonment and/or $10,000 fine',
      civil: 'Actual damages, punitive damages, and attorney fees'
    },
    caseLaw: [
      {
        case: 'Almada v. State, 994 P.2d 299 (Wyo. 1999)',
        ruling: 'Applied one-party consent standard in criminal case',
        significance: 'Judicial confirmation of one-party consent interpretation'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  DC: {
    consentType: 'One-Party',
    statute: 'D.C. Code § 23-542',
    description: 'Washington D.C. is a one-party consent jurisdiction. You can record a conversation if you are a party to it or have permission from one party.',
    exceptions: [
      'Recording for criminal or tortious purposes is illegal regardless of consent'
    ],
    penalties: {
      criminal: 'Felony punishable by up to 5 years imprisonment and/or $10,000 fine',
      civil: 'Actual damages, punitive damages, and attorney fees'
    },
    caseLaw: [
      {
        case: 'United States v. Edmond, 718 F. Supp. 988 (D.D.C. 1989)',
        ruling: 'Applied one-party consent standard in criminal case',
        significance: 'Judicial confirmation of one-party consent interpretation'
      }
    ],
    recentChanges: 'No significant recent changes to recording consent laws'
  },
  // Federal law for reference
  FEDERAL: {
    consentType: 'One-Party',
    statute: '18 U.S.C. § 2511',
    description: 'Federal law permits recording of conversations with the consent of at least one party. This serves as a baseline, but state laws may be more restrictive.',
    exceptions: [
      'Recording for criminal or tortious purposes is illegal regardless of consent',
      'Law enforcement exceptions with court approval'
    ],
    penalties: {
      criminal: 'Fine and/or imprisonment up to 5 years',
      civil: 'Actual damages, statutory damages of $100 per day or $10,000, whichever is higher, punitive damages, and attorney fees'
    },
    caseLaw: [
      {
        case: 'Bartnicki v. Vopper, 532 U.S. 514 (2001)',
        ruling: 'First Amendment protects publication of illegally intercepted communications if the publisher was not involved in the illegal interception',
        significance: 'Established First Amendment protection for publishing certain illegally recorded content'
      },
      {
        case: 'United States v. White, 401 U.S. 745 (1971)',
        ruling: 'Fourth Amendment does not protect conversations recorded by participants',
        significance: 'Established constitutional basis for one-party consent standard'
      }
    ],
    recentChanges: 'No significant recent changes to federal recording consent laws'
  }
};