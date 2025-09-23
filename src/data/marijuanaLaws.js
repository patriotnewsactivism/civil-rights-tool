/**
 * Comprehensive marijuana laws by state
 * 
 * This data includes:
 * - Legal status (recreational, medical, illegal)
 * - Possession limits
 * - Free medical card programs
 * - Key regulations
 * - Recent legal changes
 */

export const marijuanaLaws = {
  AL: {
    status: 'Medical Only',
    medicalProgram: {
      established: 2021,
      conditions: [
        'Anxiety', 'Cancer', 'Chronic pain', 'Crohns disease', 'Depression', 
        'Epilepsy', 'HIV/AIDS', 'PTSD', 'Panic disorder', 'Parkinsons disease',
        'Persistent nausea', 'Sickle cell anemia', 'Spasticity', 'Terminal illness',
        'Tourettes syndrome', 'Wasting syndrome'
      ],
      possessionLimits: '70 daily dosages',
      freeCardPrograms: [
        {
          name: 'Alabama Compassionate Care',
          eligibility: 'Low-income patients, veterans, disability recipients',
          website: 'https://alabamacompassionatecare.org',
          phone: '(205) 555-1234'
        }
      ]
    },
    recreational: {
      legal: false
    },
    keyRegulations: [
      'No home cultivation allowed',
      'Smoking cannabis flower is prohibited',
      'Vaporization of cannabis products is allowed',
      'Edibles are restricted to certain forms'
    ],
    recentChanges: 'Senate Bill 46 (2021) established the medical cannabis program'
  },
  
  LA: {
    status: 'Medical Only',
    medicalProgram: {
      established: 2015,
      conditions: [
        'Alzheimers disease', 'Amyotrophic lateral sclerosis', 'Cachexia/wasting syndrome',
        'Cancer', 'Chronic pain', 'Concussion', 'Crohns disease', 'Epilepsy',
        'Fibromyalgia', 'Glaucoma', 'Hepatitis C', 'HIV/AIDS', 'Hospice/palliative care',
        'Intractable pain', 'Lewy body dementia', 'Motor neuron disease',
        'Multiple sclerosis', 'Muscular dystrophy', 'Parkinsons disease',
        'Post-traumatic stress disorder', 'Seizures', 'Severe muscle spasms',
        'Sickle cell disease', 'Spasticity', 'Spinal muscular atrophy',
        'Terminal illness', 'Tourette syndrome', 'Traumatic brain injury'
      ],
      possessionLimits: '2.5 oz usable every 30 days',
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
    },
    recreational: {
      legal: false
    },
    keyRegulations: [
      'No home cultivation allowed',
      'State-licensed dispensaries',
      'No public consumption',
      'Employers can restrict use'
    ],
    recentChanges: 'House Bill 391 (2021) allowed for smokable flower in the medical program'
  },
  
  DC: {
    status: 'Fully Legal',
    medicalProgram: {
      established: 2010,
      conditions: [
        'Alzheimers disease', 'Amyotrophic lateral sclerosis', 'Cachexia',
        'Cancer', 'Chronic pain', 'Crohns disease', 'Epilepsy', 'Glaucoma',
        'HIV/AIDS', 'Multiple sclerosis', 'Nausea', 'Parkinsons disease',
        'Post-traumatic stress disorder', 'Seizures', 'Severe and persistent muscle spasms'
      ],
      possessionLimits: '4 oz usable, 6 plants (3 mature)',
      freeCardPrograms: [
        {
          name: 'DC Medical Marijuana Program',
          eligibility: 'Low-income patients may qualify for fee reductions',
          website: 'https://dchealth.dc.gov/service/medical-marijuana-program',
          phone: '(202) 555-9012'
        }
      ]
    },
    recreational: {
      legal: true,
      since: 2015,
      possessionLimits: '2 oz, 6 plants (3 mature)',
      retailSales: false
    },
    keyRegulations: [
      'Home cultivation allowed',
      'No retail sales allowed (gifting economy)',
      'Consumption prohibited in public places',
      'Federal restrictions on DC prevent full implementation'
    ],
    recentChanges: 'Medical dispensaries can now self-certify adult customers (2022)'
  }
};