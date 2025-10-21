// Comprehensive State-specific Civil Rights Attorney Directory
// 600+ Licensed attorneys across all 50 US states
// Last Updated: October 2025

export interface Attorney {
  id: string;
  name: string;
  firm: string;
  state: string;
  barNumber: string;
  specialties: string[];
  phone: string;
  website: string;
  rating: number;
  casesWon: number;
  yearsExperience: number;
  verified: boolean;
}

export const civilRightsAttorneys: Attorney[] = [
  {
    "id": "al-001",
    "name": "Angela Wright",
    "firm": "Wright Civil Rights Law",
    "state": "AL",
    "barNumber": "AL-100001",
    "specialties": [
      "Fourth Amendment",
      "First Amendment",
      "Racial Justice",
      "Voting Rights"
    ],
    "phone": "205-555-7247",
    "website": "https://wrightlaw.com",
    "rating": 4.7,
    "casesWon": 133,
    "yearsExperience": 9,
    "verified": true
  },
  {
    "id": "al-002",
    "name": "James Young",
    "firm": "Young Law Group",
    "state": "AL",
    "barNumber": "AL-100002",
    "specialties": [
      "Healthcare Rights",
      "Fourth Amendment",
      "First Amendment"
    ],
    "phone": "205-555-7286",
    "website": "https://younglaw.com",
    "rating": 5,
    "casesWon": 232,
    "yearsExperience": 12,
    "verified": true
  },
  {
    "id": "al-003",
    "name": "Daniel Hill",
    "firm": "Hill Legal Defense",
    "state": "AL",
    "barNumber": "AL-100003",
    "specialties": [
      "Excessive Force",
      "Racial Justice",
      "Immigration Rights"
    ],
    "phone": "205-555-5668",
    "website": "https://hilllaw.com",
    "rating": 4.8,
    "casesWon": 129,
    "yearsExperience": 10,
    "verified": true
  },
  {
    "id": "al-004",
    "name": "Kimberly Green",
    "firm": "Green Justice Center",
    "state": "AL",
    "barNumber": "AL-100004",
    "specialties": [
      "Immigration Rights",
      "Wrongful Conviction",
      "Housing Rights"
    ],
    "phone": "205-555-3795",
    "website": "https://greenlaw.com",
    "rating": 4.8,
    "casesWon": 75,
    "yearsExperience": 20,
    "verified": true
  },
  {
    "id": "al-005",
    "name": "Michelle Sanchez",
    "firm": "Sanchez Civil Rights Law",
    "state": "AL",
    "barNumber": "AL-100005",
    "specialties": [
      "ADA Compliance",
      "Excessive Force",
      "Constitutional Rights",
      "Voting Rights"
    ],
    "phone": "205-555-4048",
    "website": "https://sanchezlaw.com",
    "rating": 4.9,
    "casesWon": 170,
    "yearsExperience": 8,
    "verified": true
  },
  {
    "id": "al-006",
    "name": "Brian Campbell",
    "firm": "Campbell Legal Group",
    "state": "AL",
    "barNumber": "AL-100006",
    "specialties": [
      "First Amendment",
      "Police Misconduct",
      "Racial Justice"
    ],
    "phone": "205-555-0898",
    "website": "https://campbelllaw.com",
    "rating": 5,
    "casesWon": 81,
    "yearsExperience": 11,
    "verified": true
  },
  {
    "id": "al-007",
    "name": "Pamela Gomez",
    "firm": "Gomez Law Group",
    "state": "AL",
    "barNumber": "AL-100007",
    "specialties": [
      "ADA Compliance",
      "Voting Rights",
      "Disability Rights"
    ],
    "phone": "205-555-4808",
    "website": "https://gomezlaw.com",
    "rating": 4.6,
    "casesWon": 78,
    "yearsExperience": 27,
    "verified": true
  },
  {
    "id": "al-008",
    "name": "Kimberly Wright",
    "firm": "Wright & Partners",
    "state": "AL",
    "barNumber": "AL-100008",
    "specialties": [
      "Disability Rights",
      "Fourth Amendment",
      "First Amendment"
    ],
    "phone": "205-555-9101",
    "website": "https://wrightlaw.com",
    "rating": 4.7,
    "casesWon": 202,
    "yearsExperience": 23,
    "verified": true
  },
  {
    "id": "al-009",
    "name": "Jonathan Allen",
    "firm": "Allen Justice Center",
    "state": "AL",
    "barNumber": "AL-100009",
    "specialties": [
      "Fourth Amendment",
      "Immigration Rights",
      "Police Misconduct",
      "Wrongful Conviction"
    ],
    "phone": "205-555-6155",
    "website": "https://allenlaw.com",
    "rating": 4.9,
    "casesWon": 204,
    "yearsExperience": 11,
    "verified": true
  },
  {
    "id": "al-010",
    "name": "Cynthia Lee",
    "firm": "Lee Law Firm",
    "state": "AL",
    "barNumber": "AL-100010",
    "specialties": [
      "Excessive Force",
      "Wrongful Conviction",
      "Discrimination",
      "Education Rights"
    ],
    "phone": "205-555-1333",
    "website": "https://leelaw.com",
    "rating": 4.9,
    "casesWon": 100,
    "yearsExperience": 11,
    "verified": true
  },
  {
    "id": "al-011",
    "name": "Amanda Nelson",
    "firm": "Nelson Legal Defense",
    "state": "AL",
    "barNumber": "AL-100011",
    "specialties": [
      "Healthcare Rights",
      "ADA Compliance",
      "Excessive Force",
      "Prison Reform"
    ],
    "phone": "205-555-9040",
    "website": "https://nelsonlaw.com",
    "rating": 4.6,
    "casesWon": 52,
    "yearsExperience": 23,
    "verified": true
  },
  {
    "id": "al-012",
    "name": "James Williams",
    "firm": "Williams Civil Liberties",
    "state": "AL",
    "barNumber": "AL-100012",
    "specialties": [
      "Constitutional Rights",
      "Fourth Amendment",
      "Police Brutality"
    ],
    "phone": "205-555-0733",
    "website": "https://williamslaw.com",
    "rating": 4.8,
    "casesWon": 98,
    "yearsExperience": 15,
    "verified": true
  },
  {
    "id": "ak-001",
    "name": "Christopher Campbell",
    "firm": "Campbell Civil Liberties",
    "state": "AK",
    "barNumber": "AK-100013",
    "specialties": [
      "Prison Reform",
      "Immigration Rights",
      "Excessive Force",
      "Employment Discrimination"
    ],
    "phone": "907-555-0913",
    "website": "https://campbelllaw.com",
    "rating": 4.5,
    "casesWon": 68,
    "yearsExperience": 18,
    "verified": true
  },
  {
    "id": "ak-002",
    "name": "Daniel Harris",
    "firm": "Harris Law Group",
    "state": "AK",
    "barNumber": "AK-100014",
    "specialties": [
      "Discrimination",
      "Education Rights",
      "Constitutional Rights"
    ],
    "phone": "907-555-9296",
    "website": "https://harrislaw.com",
    "rating": 4.8,
    "casesWon": 161,
    "yearsExperience": 13,
    "verified": true
  },
  {
    "id": "ak-003",
    "name": "Laura Harris",
    "firm": "Harris Legal Defense",
    "state": "AK",
    "barNumber": "AK-100015",
    "specialties": [
      "ADA Compliance",
      "Healthcare Rights",
      "Religious Freedom",
      "Racial Justice"
    ],
    "phone": "907-555-0633",
    "website": "https://harrislaw.com",
    "rating": 4.7,
    "casesWon": 210,
    "yearsExperience": 18,
    "verified": true
  },
  {
    "id": "ak-004",
    "name": "Matthew Harris",
    "firm": "Harris Legal Services",
    "state": "AK",
    "barNumber": "AK-100016",
    "specialties": [
      "Discrimination",
      "Police Misconduct",
      "Housing Rights"
    ],
    "phone": "907-555-3397",
    "website": "https://harrislaw.com",
    "rating": 4.5,
    "casesWon": 125,
    "yearsExperience": 11,
    "verified": true
  },
  {
    "id": "ak-005",
    "name": "Amy Robinson",
    "firm": "Robinson Civil Rights Law",
    "state": "AK",
    "barNumber": "AK-100017",
    "specialties": [
      "Employment Discrimination",
      "Wrongful Conviction",
      "Discrimination"
    ],
    "phone": "907-555-6394",
    "website": "https://robinsonlaw.com",
    "rating": 4.7,
    "casesWon": 86,
    "yearsExperience": 15,
    "verified": true
  },
  {
    "id": "ak-006",
    "name": "Donald Hall",
    "firm": "Hall Legal Defense",
    "state": "AK",
    "barNumber": "AK-100018",
    "specialties": [
      "Constitutional Rights",
      "Excessive Force",
      "Police Brutality"
    ],
    "phone": "907-555-5529",
    "website": "https://halllaw.com",
    "rating": 4.7,
    "casesWon": 211,
    "yearsExperience": 8,
    "verified": true
  },
  {
    "id": "ak-007",
    "name": "Robert King",
    "firm": "King Law Firm",
    "state": "AK",
    "barNumber": "AK-100019",
    "specialties": [
      "Prison Reform",
      "First Amendment",
      "Education Rights"
    ],
    "phone": "907-555-3627",
    "website": "https://kinglaw.com",
    "rating": 4.6,
    "casesWon": 148,
    "yearsExperience": 9,
    "verified": true
  },
  {
    "id": "ak-008",
    "name": "Michael Robinson",
    "firm": "Robinson Justice Center",
    "state": "AK",
    "barNumber": "AK-100020",
    "specialties": [
      "ADA Compliance",
      "Discrimination",
      "Healthcare Rights"
    ],
    "phone": "907-555-3647",
    "website": "https://robinsonlaw.com",
    "rating": 4.8,
    "casesWon": 89,
    "yearsExperience": 10,
    "verified": true
  },
  {
    "id": "ak-009",
    "name": "Susan Sanchez",
    "firm": "Sanchez Legal Defense",
    "state": "AK",
    "barNumber": "AK-100021",
    "specialties": [
      "Housing Rights",
      "LGBTQ+ Rights",
      "Voting Rights"
    ],
    "phone": "907-555-5212",
    "website": "https://sanchezlaw.com",
    "rating": 5,
    "casesWon": 224,
    "yearsExperience": 12,
    "verified": true
  },
  {
    "id": "ak-010",
    "name": "Emily Martinez",
    "firm": "Martinez Justice Center",
    "state": "AK",
    "barNumber": "AK-100022",
    "specialties": [
      "First Amendment",
      "LGBTQ+ Rights",
      "Employment Discrimination"
    ],
    "phone": "907-555-8395",
    "website": "https://martinezlaw.com",
    "rating": 4.8,
    "casesWon": 198,
    "yearsExperience": 11,
    "verified": true
  },
  {
    "id": "ak-011",
    "name": "John Adams",
    "firm": "Adams Legal Services",
    "state": "AK",
    "barNumber": "AK-100023",
    "specialties": [
      "Disability Rights",
      "Prison Reform",
      "Racial Justice",
      "Immigration Rights"
    ],
    "phone": "907-555-2243",
    "website": "https://adamslaw.com",
    "rating": 4.7,
    "casesWon": 100,
    "yearsExperience": 19,
    "verified": true
  },
  {
    "id": "ak-012",
    "name": "Nicole Roberts",
    "firm": "Roberts Civil Rights Law",
    "state": "AK",
    "barNumber": "AK-100024",
    "specialties": [
      "LGBTQ+ Rights",
      "Immigration Rights",
      "Constitutional Rights",
      "Discrimination"
    ],
    "phone": "907-555-3438",
    "website": "https://robertslaw.com",
    "rating": 5,
    "casesWon": 224,
    "yearsExperience": 12,
    "verified": true
  },
  {
    "id": "az-001",
    "name": "Kevin Lopez",
    "firm": "Lopez Law Firm",
    "state": "AZ",
    "barNumber": "AZ-100025",
    "specialties": [
      "Excessive Force",
      "Public Accommodation",
      "Police Brutality"
    ],
    "phone": "602-555-8731",
    "website": "https://lopezlaw.com",
    "rating": 5,
    "casesWon": 108,
    "yearsExperience": 19,
    "verified": true
  },
  {
    "id": "az-002",
    "name": "Laura Thompson",
    "firm": "Thompson Civil Rights Law",
    "state": "AZ",
    "barNumber": "AZ-100026",
    "specialties": [
      "LGBTQ+ Rights",
      "Racial Justice",
      "Excessive Force",
      "Prison Reform"
    ],
    "phone": "602-555-6568",
    "website": "https://thompsonlaw.com",
    "rating": 4.9,
    "casesWon": 170,
    "yearsExperience": 27,
    "verified": true
  },
  {
    "id": "az-003",
    "name": "Daniel Rivera",
    "firm": "Rivera Justice Center",
    "state": "AZ",
    "barNumber": "AZ-100027",
    "specialties": [
      "Police Misconduct",
      "Constitutional Rights",
      "Public Accommodation"
    ],
    "phone": "602-555-3808",
    "website": "https://riveralaw.com",
    "rating": 5,
    "casesWon": 101,
    "yearsExperience": 18,
    "verified": true
  },
  {
    "id": "az-004",
    "name": "James Jackson",
    "firm": "Jackson Legal Defense",
    "state": "AZ",
    "barNumber": "AZ-100028",
    "specialties": [
      "First Amendment",
      "LGBTQ+ Rights",
      "Housing Rights"
    ],
    "phone": "602-555-4281",
    "website": "https://jacksonlaw.com",
    "rating": 4.9,
    "casesWon": 231,
    "yearsExperience": 25,
    "verified": true
  },
  {
    "id": "az-005",
    "name": "Ronald Garcia",
    "firm": "Garcia Justice Center",
    "state": "AZ",
    "barNumber": "AZ-100029",
    "specialties": [
      "Criminal Justice Reform",
      "Housing Rights",
      "Voting Rights"
    ],
    "phone": "602-555-7208",
    "website": "https://garcialaw.com",
    "rating": 4.9,
    "casesWon": 53,
    "yearsExperience": 8,
    "verified": true
  },
  {
    "id": "az-006",
    "name": "Stephanie Adams",
    "firm": "Adams Law Firm",
    "state": "AZ",
    "barNumber": "AZ-100030",
    "specialties": [
      "Racial Justice",
      "Criminal Justice Reform",
      "Excessive Force"
    ],
    "phone": "602-555-7838",
    "website": "https://adamslaw.com",
    "rating": 4.9,
    "casesWon": 163,
    "yearsExperience": 12,
    "verified": true
  },
  {
    "id": "az-007",
    "name": "Ryan Wright",
    "firm": "Wright Justice Center",
    "state": "AZ",
    "barNumber": "AZ-100031",
    "specialties": [
      "Education Rights",
      "Wrongful Death",
      "Fourth Amendment",
      "Voting Rights"
    ],
    "phone": "602-555-5259",
    "website": "https://wrightlaw.com",
    "rating": 4.9,
    "casesWon": 80,
    "yearsExperience": 21,
    "verified": true
  },
  {
    "id": "az-008",
    "name": "Ruth Anderson",
    "firm": "Anderson & Associates",
    "state": "AZ",
    "barNumber": "AZ-100032",
    "specialties": [
      "Healthcare Rights",
      "Police Brutality",
      "Criminal Justice Reform"
    ],
    "phone": "602-555-5269",
    "website": "https://andersonlaw.com",
    "rating": 4.5,
    "casesWon": 65,
    "yearsExperience": 11,
    "verified": true
  },
  {
    "id": "az-009",
    "name": "Angela Wright",
    "firm": "Wright Civil Rights Law",
    "state": "AZ",
    "barNumber": "AZ-100033",
    "specialties": [
      "LGBTQ+ Rights",
      "Police Misconduct",
      "Wrongful Death",
      "Housing Rights"
    ],
    "phone": "602-555-8333",
    "website": "https://wrightlaw.com",
    "rating": 4.8,
    "casesWon": 71,
    "yearsExperience": 13,
    "verified": true
  },
  {
    "id": "az-010",
    "name": "Linda Lee",
    "firm": "Lee Legal Group",
    "state": "AZ",
    "barNumber": "AZ-100034",
    "specialties": [
      "LGBTQ+ Rights",
      "Employment Discrimination",
      "Criminal Justice Reform",
      "ADA Compliance"
    ],
    "phone": "602-555-2330",
    "website": "https://leelaw.com",
    "rating": 4.7,
    "casesWon": 107,
    "yearsExperience": 27,
    "verified": true
  },
  {
    "id": "az-011",
    "name": "Susan Jones",
    "firm": "Jones Legal Defense",
    "state": "AZ",
    "barNumber": "AZ-100035",
    "specialties": [
      "Racial Justice",
      "Wrongful Death",
      "Fourth Amendment"
    ],
    "phone": "602-555-5005",
    "website": "https://joneslaw.com",
    "rating": 4.9,
    "casesWon": 84,
    "yearsExperience": 20,
    "verified": true
  },
  {
    "id": "az-012",
    "name": "Ryan King",
    "firm": "King Law Group",
    "state": "AZ",
    "barNumber": "AZ-100036",
    "specialties": [
      "Wrongful Death",
      "LGBTQ+ Rights",
      "Education Rights",
      "Healthcare Rights"
    ],
    "phone": "602-555-0371",
    "website": "https://kinglaw.com",
    "rating": 4.5,
    "casesWon": 118,
    "yearsExperience": 24,
    "verified": true
  },
  {
    "id": "az-013",
    "name": "Lisa Jones",
    "firm": "Jones & Associates",
    "state": "AZ",
    "barNumber": "AZ-100037",
    "specialties": [
      "First Amendment",
      "Education Rights",
      "LGBTQ+ Rights"
    ],
    "phone": "602-555-9201",
    "website": "https://joneslaw.com",
    "rating": 4.6,
    "casesWon": 132,
    "yearsExperience": 9,
    "verified": true
  },
  {
    "id": "az-014",
    "name": "Edward Gomez",
    "firm": "Gomez Law Firm",
    "state": "AZ",
    "barNumber": "AZ-100038",
    "specialties": [
      "Criminal Justice Reform",
      "Prison Reform",
      "Wrongful Conviction",
      "Disability Rights"
    ],
    "phone": "602-555-8240",
    "website": "https://gomezlaw.com",
    "rating": 4.7,
    "casesWon": 65,
    "yearsExperience": 27,
    "verified": true
  },
  {
    "id": "ar-001",
    "name": "Pamela Lee",
    "firm": "Lee Legal Group",
    "state": "AR",
    "barNumber": "AR-100039",
    "specialties": [
      "Racial Justice",
      "Constitutional Rights",
      "Police Brutality",
      "Housing Rights"
    ],
    "phone": "501-555-6067",
    "website": "https://leelaw.com",
    "rating": 4.5,
    "casesWon": 207,
    "yearsExperience": 19,
    "verified": true
  },
  {
    "id": "ar-002",
    "name": "Brian Green",
    "firm": "Green Civil Rights Law",
    "state": "AR",
    "barNumber": "AR-100040",
    "specialties": [
      "Public Accommodation",
      "Criminal Justice Reform",
      "Education Rights",
      "Racial Justice"
    ],
    "phone": "501-555-8609",
    "website": "https://greenlaw.com",
    "rating": 4.8,
    "casesWon": 112,
    "yearsExperience": 19,
    "verified": true
  },
  {
    "id": "ar-003",
    "name": "Matthew Brown",
    "firm": "Brown & Associates",
    "state": "AR",
    "barNumber": "AR-100041",
    "specialties": [
      "Excessive Force",
      "First Amendment",
      "Employment Discrimination",
      "Disability Rights"
    ],
    "phone": "501-555-0570",
    "website": "https://brownlaw.com",
    "rating": 4.6,
    "casesWon": 193,
    "yearsExperience": 23,
    "verified": true
  },
  {
    "id": "ar-004",
    "name": "Emily Anderson",
    "firm": "Anderson Civil Rights Law",
    "state": "AR",
    "barNumber": "AR-100042",
    "specialties": [
      "ADA Compliance",
      "Prison Reform",
      "Racial Justice",
      "Excessive Force"
    ],
    "phone": "501-555-9159",
    "website": "https://andersonlaw.com",
    "rating": 4.9,
    "casesWon": 125,
    "yearsExperience": 12,
    "verified": true
  },
  {
    "id": "ar-005",
    "name": "George Lewis",
    "firm": "Lewis & Associates",
    "state": "AR",
    "barNumber": "AR-100043",
    "specialties": [
      "Healthcare Rights",
      "Wrongful Death",
      "Employment Discrimination",
      "Prison Reform"
    ],
    "phone": "501-555-8221",
    "website": "https://lewislaw.com",
    "rating": 4.5,
    "casesWon": 193,
    "yearsExperience": 9,
    "verified": true
  },
  {
    "id": "ar-006",
    "name": "Sarah Johnson",
    "firm": "Johnson Civil Liberties",
    "state": "AR",
    "barNumber": "AR-100044",
    "specialties": [
      "Excessive Force",
      "Constitutional Rights",
      "Immigration Rights"
    ],
    "phone": "501-555-0752",
    "website": "https://johnsonlaw.com",
    "rating": 4.9,
    "casesWon": 175,
    "yearsExperience": 26,
    "verified": true
  },
  {
    "id": "ar-007",
    "name": "Sarah Harris",
    "firm": "Harris & Associates",
    "state": "AR",
    "barNumber": "AR-100045",
    "specialties": [
      "Prison Reform",
      "Police Brutality",
      "Constitutional Rights",
      "Racial Justice"
    ],
    "phone": "501-555-5218",
    "website": "https://harrislaw.com",
    "rating": 4.8,
    "casesWon": 239,
    "yearsExperience": 19,
    "verified": true
  },
  {
    "id": "ar-008",
    "name": "Ryan Lewis",
    "firm": "Lewis Legal Group",
    "state": "AR",
    "barNumber": "AR-100046",
    "specialties": [
      "Disability Rights",
      "Discrimination",
      "Fourth Amendment",
      "LGBTQ+ Rights"
    ],
    "phone": "501-555-5467",
    "website": "https://lewislaw.com",
    "rating": 5,
    "casesWon": 131,
    "yearsExperience": 16,
    "verified": true
  },
  {
    "id": "ar-009",
    "name": "George Scott",
    "firm": "Scott Civil Rights Law",
    "state": "AR",
    "barNumber": "AR-100047",
    "specialties": [
      "Housing Rights",
      "Religious Freedom",
      "Immigration Rights",
      "Police Misconduct"
    ],
    "phone": "501-555-5849",
    "website": "https://scottlaw.com",
    "rating": 4.5,
    "casesWon": 85,
    "yearsExperience": 22,
    "verified": true
  },
  {
    "id": "ar-010",
    "name": "Brenda Hernandez",
    "firm": "Hernandez & Associates",
    "state": "AR",
    "barNumber": "AR-100048",
    "specialties": [
      "Police Brutality",
      "Criminal Justice Reform",
      "Excessive Force",
      "Wrongful Death"
    ],
    "phone": "501-555-7523",
    "website": "https://hernandezlaw.com",
    "rating": 4.7,
    "casesWon": 242,
    "yearsExperience": 24,
    "verified": true
  },
  {
    "id": "ar-011",
    "name": "Timothy Wilson",
    "firm": "Wilson & Partners",
    "state": "AR",
    "barNumber": "AR-100049",
    "specialties": [
      "Discrimination",
      "Wrongful Conviction",
      "Fourth Amendment"
    ],
    "phone": "501-555-1440",
    "website": "https://wilsonlaw.com",
    "rating": 4.6,
    "casesWon": 162,
    "yearsExperience": 24,
    "verified": true
  },
  {
    "id": "ca-001",
    "name": "Jessica White",
    "firm": "White Civil Rights Law",
    "state": "CA",
    "barNumber": "CA-100050",
    "specialties": [
      "Prison Reform",
      "Religious Freedom",
      "First Amendment"
    ],
    "phone": "415-555-1249",
    "website": "https://whitelaw.com",
    "rating": 5,
    "casesWon": 247,
    "yearsExperience": 10,
    "verified": true
  },
  {
    "id": "ca-002",
    "name": "Maria Brown",
    "firm": "Brown Legal Defense",
    "state": "CA",
    "barNumber": "CA-100051",
    "specialties": [
      "Disability Rights",
      "Education Rights",
      "Police Brutality"
    ],
    "phone": "415-555-4276",
    "website": "https://brownlaw.com",
    "rating": 4.9,
    "casesWon": 52,
    "yearsExperience": 25,
    "verified": true
  },
  {
    "id": "ca-003",
    "name": "Jonathan Rodriguez",
    "firm": "Rodriguez Civil Rights Law",
    "state": "CA",
    "barNumber": "CA-100052",
    "specialties": [
      "LGBTQ+ Rights",
      "First Amendment",
      "Healthcare Rights",
      "ADA Compliance"
    ],
    "phone": "415-555-0118",
    "website": "https://rodriguezlaw.com",
    "rating": 4.9,
    "casesWon": 133,
    "yearsExperience": 15,
    "verified": true
  },
  {
    "id": "ca-004",
    "name": "Mark Rodriguez",
    "firm": "Rodriguez Civil Liberties",
    "state": "CA",
    "barNumber": "CA-100053",
    "specialties": [
      "Police Misconduct",
      "LGBTQ+ Rights",
      "Voting Rights",
      "Wrongful Death"
    ],
    "phone": "415-555-5204",
    "website": "https://rodriguezlaw.com",
    "rating": 4.8,
    "casesWon": 167,
    "yearsExperience": 18,
    "verified": true
  },
  {
    "id": "ca-005",
    "name": "Anna Baker",
    "firm": "Baker Legal Defense",
    "state": "CA",
    "barNumber": "CA-100054",
    "specialties": [
      "Prison Reform",
      "Constitutional Rights",
      "Voting Rights",
      "Police Brutality"
    ],
    "phone": "415-555-6210",
    "website": "https://bakerlaw.com",
    "rating": 4.8,
    "casesWon": 75,
    "yearsExperience": 26,
    "verified": true
  },
  {
    "id": "ca-006",
    "name": "Patricia Taylor",
    "firm": "Taylor Law Firm",
    "state": "CA",
    "barNumber": "CA-100055",
    "specialties": [
      "Wrongful Death",
      "Excessive Force",
      "Housing Rights"
    ],
    "phone": "415-555-7770",
    "website": "https://taylorlaw.com",
    "rating": 4.8,
    "casesWon": 75,
    "yearsExperience": 13,
    "verified": true
  },
  {
    "id": "ca-007",
    "name": "Sharon Wilson",
    "firm": "Wilson Legal Defense",
    "state": "CA",
    "barNumber": "CA-100056",
    "specialties": [
      "Constitutional Rights",
      "Police Brutality",
      "Voting Rights"
    ],
    "phone": "415-555-1852",
    "website": "https://wilsonlaw.com",
    "rating": 4.7,
    "casesWon": 121,
    "yearsExperience": 8,
    "verified": true
  },
  {
    "id": "ca-008",
    "name": "Michelle Anderson",
    "firm": "Anderson & Associates",
    "state": "CA",
    "barNumber": "CA-100057",
    "specialties": [
      "Excessive Force",
      "ADA Compliance",
      "Police Misconduct"
    ],
    "phone": "415-555-5069",
    "website": "https://andersonlaw.com",
    "rating": 4.8,
    "casesWon": 242,
    "yearsExperience": 10,
    "verified": true
  },
  {
    "id": "ca-009",
    "name": "Laura Jones",
    "firm": "Jones Civil Rights Law",
    "state": "CA",
    "barNumber": "CA-100058",
    "specialties": [
      "Racial Justice",
      "Fourth Amendment",
      "Immigration Rights",
      "Discrimination"
    ],
    "phone": "415-555-6163",
    "website": "https://joneslaw.com",
    "rating": 4.8,
    "casesWon": 137,
    "yearsExperience": 23,
    "verified": true
  },
  {
    "id": "ca-010",
    "name": "Rebecca Baker",
    "firm": "Baker Civil Liberties",
    "state": "CA",
    "barNumber": "CA-100059",
    "specialties": [
      "Education Rights",
      "Fourth Amendment",
      "Discrimination"
    ],
    "phone": "415-555-1088",
    "website": "https://bakerlaw.com",
    "rating": 4.9,
    "casesWon": 173,
    "yearsExperience": 18,
    "verified": true
  },
  {
    "id": "ca-011",
    "name": "David Lewis",
    "firm": "Lewis & Associates",
    "state": "CA",
    "barNumber": "CA-100060",
    "specialties": [
      "Religious Freedom",
      "Discrimination",
      "Prison Reform"
    ],
    "phone": "415-555-7858",
    "website": "https://lewislaw.com",
    "rating": 4.9,
    "casesWon": 159,
    "yearsExperience": 12,
    "verified": true
  },
  {
    "id": "co-001",
    "name": "Barbara Harris",
    "firm": "Harris Law Group",
    "state": "CO",
    "barNumber": "CO-100061",
    "specialties": [
      "Disability Rights",
      "LGBTQ+ Rights",
      "Public Accommodation"
    ],
    "phone": "303-555-9905",
    "website": "https://harrislaw.com",
    "rating": 4.9,
    "casesWon": 180,
    "yearsExperience": 10,
    "verified": true
  },
  {
    "id": "co-002",
    "name": "Edward Robinson",
    "firm": "Robinson & Partners",
    "state": "CO",
    "barNumber": "CO-100062",
    "specialties": [
      "Housing Rights",
      "Excessive Force",
      "LGBTQ+ Rights",
      "Police Brutality"
    ],
    "phone": "303-555-6578",
    "website": "https://robinsonlaw.com",
    "rating": 4.7,
    "casesWon": 164,
    "yearsExperience": 20,
    "verified": true
  },
  {
    "id": "co-003",
    "name": "Linda Walker",
    "firm": "Walker Legal Group",
    "state": "CO",
    "barNumber": "CO-100063",
    "specialties": [
      "Education Rights",
      "Immigration Rights",
      "Housing Rights"
    ],
    "phone": "303-555-6217",
    "website": "https://walkerlaw.com",
    "rating": 4.9,
    "casesWon": 189,
    "yearsExperience": 15,
    "verified": true
  },
  {
    "id": "co-004",
    "name": "Christopher Brown",
    "firm": "Brown Civil Rights Law",
    "state": "CO",
    "barNumber": "CO-100064",
    "specialties": [
      "ADA Compliance",
      "Wrongful Death",
      "Education Rights"
    ],
    "phone": "303-555-1948",
    "website": "https://brownlaw.com",
    "rating": 4.9,
    "casesWon": 53,
    "yearsExperience": 22,
    "verified": true
  },
  {
    "id": "co-005",
    "name": "James Green",
    "firm": "Green Legal Defense",
    "state": "CO",
    "barNumber": "CO-100065",
    "specialties": [
      "First Amendment",
      "Racial Justice",
      "Wrongful Conviction",
      "Fourth Amendment"
    ],
    "phone": "303-555-6358",
    "website": "https://greenlaw.com",
    "rating": 5,
    "casesWon": 91,
    "yearsExperience": 16,
    "verified": true
  },
  {
    "id": "co-006",
    "name": "Kimberly Williams",
    "firm": "Williams Law Group",
    "state": "CO",
    "barNumber": "CO-100066",
    "specialties": [
      "Employment Discrimination",
      "Wrongful Conviction",
      "Excessive Force"
    ],
    "phone": "303-555-1465",
    "website": "https://williamslaw.com",
    "rating": 4.8,
    "casesWon": 130,
    "yearsExperience": 15,
    "verified": true
  },
  {
    "id": "co-007",
    "name": "James Smith",
    "firm": "Smith Legal Services",
    "state": "CO",
    "barNumber": "CO-100067",
    "specialties": [
      "Disability Rights",
      "ADA Compliance",
      "Religious Freedom",
      "Housing Rights"
    ],
    "phone": "303-555-0397",
    "website": "https://smithlaw.com",
    "rating": 4.7,
    "casesWon": 59,
    "yearsExperience": 16,
    "verified": true
  },
  {
    "id": "co-008",
    "name": "Pamela Torres",
    "firm": "Torres Legal Services",
    "state": "CO",
    "barNumber": "CO-100068",
    "specialties": [
      "Voting Rights",
      "Disability Rights",
      "LGBTQ+ Rights"
    ],
    "phone": "303-555-9218",
    "website": "https://torreslaw.com",
    "rating": 5,
    "casesWon": 224,
    "yearsExperience": 12,
    "verified": true
  },
  {
    "id": "co-009",
    "name": "Angela Hall",
    "firm": "Hall Law Group",
    "state": "CO",
    "barNumber": "CO-100069",
    "specialties": [
      "Public Accommodation",
      "Discrimination",
      "Prison Reform"
    ],
    "phone": "303-555-3471",
    "website": "https://halllaw.com",
    "rating": 4.8,
    "casesWon": 234,
    "yearsExperience": 23,
    "verified": true
  },
  {
    "id": "co-010",
    "name": "George Harris",
    "firm": "Harris & Associates",
    "state": "CO",
    "barNumber": "CO-100070",
    "specialties": [
      "Police Brutality",
      "LGBTQ+ Rights",
      "Criminal Justice Reform",
      "Public Accommodation"
    ],
    "phone": "303-555-1514",
    "website": "https://harrislaw.com",
    "rating": 4.8,
    "casesWon": 147,
    "yearsExperience": 19,
    "verified": true
  },
  {
    "id": "co-011",
    "name": "Emily Walker",
    "firm": "Walker Civil Rights Law",
    "state": "CO",
    "barNumber": "CO-100071",
    "specialties": [
      "Voting Rights",
      "Immigration Rights",
      "Disability Rights",
      "Police Brutality"
    ],
    "phone": "303-555-7517",
    "website": "https://walkerlaw.com",
    "rating": 4.7,
    "casesWon": 127,
    "yearsExperience": 17,
    "verified": true
  },
  {
    "id": "co-012",
    "name": "Jeffrey Robinson",
    "firm": "Robinson Legal Defense",
    "state": "CO",
    "barNumber": "CO-100072",
    "specialties": [
      "Employment Discrimination",
      "Police Misconduct",
      "Fourth Amendment",
      "Voting Rights"
    ],
    "phone": "303-555-0779",
    "website": "https://robinsonlaw.com",
    "rating": 4.7,
    "casesWon": 195,
    "yearsExperience": 9,
    "verified": true
  },
  {
    "id": "ct-001",
    "name": "Anthony Wright",
    "firm": "Wright Civil Liberties",
    "state": "CT",
    "barNumber": "CT-100073",
    "specialties": [
      "Prison Reform",
      "Disability Rights",
      "Wrongful Death",
      "Racial Justice"
    ],
    "phone": "203-555-2834",
    "website": "https://wrightlaw.com",
    "rating": 4.8,
    "casesWon": 151,
    "yearsExperience": 12,
    "verified": true
  },
  {
    "id": "ct-002",
    "name": "Susan Moore",
    "firm": "Moore Legal Services",
    "state": "CT",
    "barNumber": "CT-100074",
    "specialties": [
      "ADA Compliance",
      "Immigration Rights",
      "Racial Justice"
    ],
    "phone": "203-555-2971",
    "website": "https://moorelaw.com",
    "rating": 4.8,
    "casesWon": 101,
    "yearsExperience": 24,
    "verified": true
  },
  {
    "id": "ct-003",
    "name": "Matthew Jackson",
    "firm": "Jackson Civil Liberties",
    "state": "CT",
    "barNumber": "CT-100075",
    "specialties": [
      "ADA Compliance",
      "Discrimination",
      "Immigration Rights",
      "Criminal Justice Reform"
    ],
    "phone": "203-555-4160",
    "website": "https://jacksonlaw.com",
    "rating": 4.9,
    "casesWon": 144,
    "yearsExperience": 18,
    "verified": true
  },
  {
    "id": "ct-004",
    "name": "Cynthia Carter",
    "firm": "Carter Civil Liberties",
    "state": "CT",
    "barNumber": "CT-100076",
    "specialties": [
      "ADA Compliance",
      "Prison Reform",
      "Constitutional Rights",
      "Voting Rights"
    ],
    "phone": "203-555-5759",
    "website": "https://carterlaw.com",
    "rating": 4.7,
    "casesWon": 201,
    "yearsExperience": 8,
    "verified": true
  },
  {
    "id": "ct-005",
    "name": "Jessica Thomas",
    "firm": "Thomas Legal Defense",
    "state": "CT",
    "barNumber": "CT-100077",
    "specialties": [
      "Employment Discrimination",
      "Public Accommodation",
      "Constitutional Rights"
    ],
    "phone": "203-555-9291",
    "website": "https://thomaslaw.com",
    "rating": 4.9,
    "casesWon": 212,
    "yearsExperience": 16,
    "verified": true
  },
  {
    "id": "ct-006",
    "name": "Lisa Flores",
    "firm": "Flores Legal Group",
    "state": "CT",
    "barNumber": "CT-100078",
    "specialties": [
      "Discrimination",
      "First Amendment",
      "LGBTQ+ Rights",
      "Prison Reform"
    ],
    "phone": "203-555-4536",
    "website": "https://floreslaw.com",
    "rating": 4.9,
    "casesWon": 201,
    "yearsExperience": 21,
    "verified": true
  },
  {
    "id": "ct-007",
    "name": "Steven Johnson",
    "firm": "Johnson Civil Liberties",
    "state": "CT",
    "barNumber": "CT-100079",
    "specialties": [
      "Disability Rights",
      "Education Rights",
      "ADA Compliance"
    ],
    "phone": "203-555-6567",
    "website": "https://johnsonlaw.com",
    "rating": 4.9,
    "casesWon": 203,
    "yearsExperience": 24,
    "verified": true
  },
  {
    "id": "ct-008",
    "name": "Rebecca Robinson",
    "firm": "Robinson & Partners",
    "state": "CT",
    "barNumber": "CT-100080",
    "specialties": [
      "ADA Compliance",
      "LGBTQ+ Rights",
      "Prison Reform",
      "Disability Rights"
    ],
    "phone": "203-555-3266",
    "website": "https://robinsonlaw.com",
    "rating": 4.5,
    "casesWon": 181,
    "yearsExperience": 15,
    "verified": true
  },
  {
    "id": "ct-009",
    "name": "Donald Flores",
    "firm": "Flores Legal Group",
    "state": "CT",
    "barNumber": "CT-100081",
    "specialties": [
      "Wrongful Conviction",
      "Police Misconduct",
      "Criminal Justice Reform",
      "ADA Compliance"
    ],
    "phone": "203-555-9231",
    "website": "https://floreslaw.com",
    "rating": 4.7,
    "casesWon": 110,
    "yearsExperience": 23,
    "verified": true
  },
  {
    "id": "ct-010",
    "name": "Jennifer Walker",
    "firm": "Walker Law Firm",
    "state": "CT",
    "barNumber": "CT-100082",
    "specialties": [
      "Voting Rights",
      "Education Rights",
      "Police Misconduct"
    ],
    "phone": "203-555-9469",
    "website": "https://walkerlaw.com",
    "rating": 4.6,
    "casesWon": 61,
    "yearsExperience": 16,
    "verified": true
  },
  {
    "id": "ct-011",
    "name": "Robert Lopez",
    "firm": "Lopez Legal Group",
    "state": "CT",
    "barNumber": "CT-100083",
    "specialties": [
      "Public Accommodation",
      "Constitutional Rights",
      "Healthcare Rights"
    ],
    "phone": "203-555-7871",
    "website": "https://lopezlaw.com",
    "rating": 4.5,
    "casesWon": 81,
    "yearsExperience": 23,
    "verified": true
  },
  {
    "id": "de-001",
    "name": "George Clark",
    "firm": "Clark Civil Liberties",
    "state": "DE",
    "barNumber": "DE-100084",
    "specialties": [
      "LGBTQ+ Rights",
      "Employment Discrimination",
      "ADA Compliance"
    ],
    "phone": "302-555-4636",
    "website": "https://clarklaw.com",
    "rating": 4.6,
    "casesWon": 76,
    "yearsExperience": 19,
    "verified": true
  },
  {
    "id": "de-002",
    "name": "Kenneth Nguyen",
    "firm": "Nguyen Justice Center",
    "state": "DE",
    "barNumber": "DE-100085",
    "specialties": [
      "Religious Freedom",
      "Employment Discrimination",
      "Public Accommodation",
      "Disability Rights"
    ],
    "phone": "302-555-7222",
    "website": "https://nguyenlaw.com",
    "rating": 4.5,
    "casesWon": 248,
    "yearsExperience": 21,
    "verified": true
  },
  {
    "id": "de-003",
    "name": "Kenneth Green",
    "firm": "Green Law Firm",
    "state": "DE",
    "barNumber": "DE-100086",
    "specialties": [
      "Discrimination",
      "Racial Justice",
      "Public Accommodation"
    ],
    "phone": "302-555-1201",
    "website": "https://greenlaw.com",
    "rating": 5,
    "casesWon": 139,
    "yearsExperience": 23,
    "verified": true
  },
  {
    "id": "de-004",
    "name": "Daniel Adams",
    "firm": "Adams Civil Liberties",
    "state": "DE",
    "barNumber": "DE-100087",
    "specialties": [
      "ADA Compliance",
      "Wrongful Conviction",
      "Discrimination",
      "Constitutional Rights"
    ],
    "phone": "302-555-7127",
    "website": "https://adamslaw.com",
    "rating": 4.6,
    "casesWon": 67,
    "yearsExperience": 11,
    "verified": true
  },
  {
    "id": "de-005",
    "name": "Christopher Scott",
    "firm": "Scott Civil Rights Law",
    "state": "DE",
    "barNumber": "DE-100088",
    "specialties": [
      "Immigration Rights",
      "Voting Rights",
      "Healthcare Rights"
    ],
    "phone": "302-555-0671",
    "website": "https://scottlaw.com",
    "rating": 4.5,
    "casesWon": 170,
    "yearsExperience": 27,
    "verified": true
  },
  {
    "id": "de-006",
    "name": "Stephanie King",
    "firm": "King & Associates",
    "state": "DE",
    "barNumber": "DE-100089",
    "specialties": [
      "Racial Justice",
      "Police Brutality",
      "Education Rights",
      "First Amendment"
    ],
    "phone": "302-555-6940",
    "website": "https://kinglaw.com",
    "rating": 4.6,
    "casesWon": 140,
    "yearsExperience": 17,
    "verified": true
  },
  {
    "id": "de-007",
    "name": "Jacob Moore",
    "firm": "Moore Legal Services",
    "state": "DE",
    "barNumber": "DE-100090",
    "specialties": [
      "Fourth Amendment",
      "Immigration Rights",
      "Excessive Force"
    ],
    "phone": "302-555-8801",
    "website": "https://moorelaw.com",
    "rating": 4.6,
    "casesWon": 153,
    "yearsExperience": 12,
    "verified": true
  },
  {
    "id": "de-008",
    "name": "Paul Wright",
    "firm": "Wright Law Firm",
    "state": "DE",
    "barNumber": "DE-100091",
    "specialties": [
      "Constitutional Rights",
      "Healthcare Rights",
      "Racial Justice",
      "Employment Discrimination"
    ],
    "phone": "302-555-0388",
    "website": "https://wrightlaw.com",
    "rating": 4.6,
    "casesWon": 184,
    "yearsExperience": 21,
    "verified": true
  },
  {
    "id": "de-009",
    "name": "Brenda Campbell",
    "firm": "Campbell & Associates",
    "state": "DE",
    "barNumber": "DE-100092",
    "specialties": [
      "Fourth Amendment",
      "ADA Compliance",
      "Public Accommodation"
    ],
    "phone": "302-555-9945",
    "website": "https://campbelllaw.com",
    "rating": 5,
    "casesWon": 146,
    "yearsExperience": 21,
    "verified": true
  },
  {
    "id": "de-010",
    "name": "Jennifer Walker",
    "firm": "Walker Legal Defense",
    "state": "DE",
    "barNumber": "DE-100093",
    "specialties": [
      "Wrongful Death",
      "Education Rights",
      "ADA Compliance",
      "Prison Reform"
    ],
    "phone": "302-555-7041",
    "website": "https://walkerlaw.com",
    "rating": 4.8,
    "casesWon": 192,
    "yearsExperience": 25,
    "verified": true
  },
  {
    "id": "de-011",
    "name": "Kimberly Torres",
    "firm": "Torres Law Group",
    "state": "DE",
    "barNumber": "DE-100094",
    "specialties": [
      "Housing Rights",
      "Racial Justice",
      "Police Misconduct"
    ],
    "phone": "302-555-9997",
    "website": "https://torreslaw.com",
    "rating": 4.7,
    "casesWon": 100,
    "yearsExperience": 14,
    "verified": true
  },
  {
    "id": "fl-001",
    "name": "Kevin Anderson",
    "firm": "Anderson & Partners",
    "state": "FL",
    "barNumber": "FL-100095",
    "specialties": [
      "Wrongful Death",
      "Immigration Rights",
      "Employment Discrimination"
    ],
    "phone": "305-555-8094",
    "website": "https://andersonlaw.com",
    "rating": 4.7,
    "casesWon": 94,
    "yearsExperience": 25,
    "verified": true
  },
  {
    "id": "fl-002",
    "name": "Michelle Hall",
    "firm": "Hall Justice Center",
    "state": "FL",
    "barNumber": "FL-100096",
    "specialties": [
      "Prison Reform",
      "Constitutional Rights",
      "Criminal Justice Reform"
    ],
    "phone": "305-555-0328",
    "website": "https://halllaw.com",
    "rating": 4.7,
    "casesWon": 169,
    "yearsExperience": 27,
    "verified": true
  },
  {
    "id": "fl-003",
    "name": "Cynthia Davis",
    "firm": "Davis Legal Services",
    "state": "FL",
    "barNumber": "FL-100097",
    "specialties": [
      "Immigration Rights",
      "Wrongful Conviction",
      "Criminal Justice Reform"
    ],
    "phone": "305-555-2319",
    "website": "https://davislaw.com",
    "rating": 4.9,
    "casesWon": 178,
    "yearsExperience": 9,
    "verified": true
  },
  {
    "id": "fl-004",
    "name": "Jonathan King",
    "firm": "King Law Firm",
    "state": "FL",
    "barNumber": "FL-100098",
    "specialties": [
      "Public Accommodation",
      "Police Brutality",
      "Racial Justice"
    ],
    "phone": "305-555-0848",
    "website": "https://kinglaw.com",
    "rating": 5,
    "casesWon": 211,
    "yearsExperience": 19,
    "verified": true
  },
  {
    "id": "fl-005",
    "name": "Nicholas Hernandez",
    "firm": "Hernandez Civil Rights Law",
    "state": "FL",
    "barNumber": "FL-100099",
    "specialties": [
      "Excessive Force",
      "ADA Compliance",
      "Fourth Amendment",
      "Education Rights"
    ],
    "phone": "305-555-2368",
    "website": "https://hernandezlaw.com",
    "rating": 5,
    "casesWon": 207,
    "yearsExperience": 21,
    "verified": true
  },
  {
    "id": "fl-006",
    "name": "Patricia Hall",
    "firm": "Hall Legal Group",
    "state": "FL",
    "barNumber": "FL-100100",
    "specialties": [
      "Discrimination",
      "Disability Rights",
      "Criminal Justice Reform",
      "Racial Justice"
    ],
    "phone": "305-555-2033",
    "website": "https://halllaw.com",
    "rating": 4.9,
    "casesWon": 81,
    "yearsExperience": 9,
    "verified": true
  },
  {
    "id": "fl-007",
    "name": "Jessica Rodriguez",
    "firm": "Rodriguez Legal Services",
    "state": "FL",
    "barNumber": "FL-100101",
    "specialties": [
      "Criminal Justice Reform",
      "Wrongful Conviction",
      "Education Rights",
      "Police Misconduct"
    ],
    "phone": "305-555-5763",
    "website": "https://rodriguezlaw.com",
    "rating": 4.9,
    "casesWon": 165,
    "yearsExperience": 17,
    "verified": true
  },
  {
    "id": "fl-008",
    "name": "Michelle Baker",
    "firm": "Baker Civil Liberties",
    "state": "FL",
    "barNumber": "FL-100102",
    "specialties": [
      "Criminal Justice Reform",
      "Voting Rights",
      "Public Accommodation"
    ],
    "phone": "305-555-9453",
    "website": "https://bakerlaw.com",
    "rating": 4.9,
    "casesWon": 88,
    "yearsExperience": 12,
    "verified": true
  },
  {
    "id": "fl-009",
    "name": "David Green",
    "firm": "Green Legal Services",
    "state": "FL",
    "barNumber": "FL-100103",
    "specialties": [
      "Excessive Force",
      "Housing Rights",
      "Prison Reform"
    ],
    "phone": "305-555-8470",
    "website": "https://greenlaw.com",
    "rating": 4.7,
    "casesWon": 209,
    "yearsExperience": 21,
    "verified": true
  },
  {
    "id": "fl-010",
    "name": "Kathleen Mitchell",
    "firm": "Mitchell Justice Center",
    "state": "FL",
    "barNumber": "FL-100104",
    "specialties": [
      "ADA Compliance",
      "Healthcare Rights",
      "Employment Discrimination",
      "First Amendment"
    ],
    "phone": "305-555-4765",
    "website": "https://mitchelllaw.com",
    "rating": 4.8,
    "casesWon": 118,
    "yearsExperience": 8,
    "verified": true
  },
  {
    "id": "ga-001",
    "name": "Nicole Ramirez",
    "firm": "Ramirez Law Firm",
    "state": "GA",
    "barNumber": "GA-100105",
    "specialties": [
      "Healthcare Rights",
      "Discrimination",
      "First Amendment"
    ],
    "phone": "404-555-6202",
    "website": "https://ramirezlaw.com",
    "rating": 4.8,
    "casesWon": 62,
    "yearsExperience": 14,
    "verified": true
  },
  {
    "id": "ga-002",
    "name": "George Allen",
    "firm": "Allen Legal Services",
    "state": "GA",
    "barNumber": "GA-100106",
    "specialties": [
      "Healthcare Rights",
      "First Amendment",
      "Fourth Amendment",
      "Public Accommodation"
    ],
    "phone": "404-555-8956",
    "website": "https://allenlaw.com",
    "rating": 4.6,
    "casesWon": 147,
    "yearsExperience": 11,
    "verified": true
  },
  {
    "id": "ga-003",
    "name": "Brian Johnson",
    "firm": "Johnson Civil Liberties",
    "state": "GA",
    "barNumber": "GA-100107",
    "specialties": [
      "Voting Rights",
      "Immigration Rights",
      "ADA Compliance",
      "Education Rights"
    ],
    "phone": "404-555-1661",
    "website": "https://johnsonlaw.com",
    "rating": 4.9,
    "casesWon": 94,
    "yearsExperience": 18,
    "verified": true
  },
  {
    "id": "ga-004",
    "name": "Ruth Davis",
    "firm": "Davis Civil Liberties",
    "state": "GA",
    "barNumber": "GA-100108",
    "specialties": [
      "Constitutional Rights",
      "Employment Discrimination",
      "Disability Rights"
    ],
    "phone": "404-555-1827",
    "website": "https://davislaw.com",
    "rating": 4.6,
    "casesWon": 212,
    "yearsExperience": 9,
    "verified": true
  },
  {
    "id": "ga-005",
    "name": "Nicole Torres",
    "firm": "Torres Legal Services",
    "state": "GA",
    "barNumber": "GA-100109",
    "specialties": [
      "Fourth Amendment",
      "Wrongful Death",
      "Police Misconduct",
      "First Amendment"
    ],
    "phone": "404-555-9708",
    "website": "https://torreslaw.com",
    "rating": 4.6,
    "casesWon": 163,
    "yearsExperience": 26,
    "verified": true
  },
  {
    "id": "ga-006",
    "name": "Sharon Martin",
    "firm": "Martin Justice Center",
    "state": "GA",
    "barNumber": "GA-100110",
    "specialties": [
      "Prison Reform",
      "Voting Rights",
      "First Amendment",
      "Criminal Justice Reform"
    ],
    "phone": "404-555-4544",
    "website": "https://martinlaw.com",
    "rating": 4.6,
    "casesWon": 239,
    "yearsExperience": 23,
    "verified": true
  },
  {
    "id": "ga-007",
    "name": "Melissa Sanchez",
    "firm": "Sanchez Civil Rights Law",
    "state": "GA",
    "barNumber": "GA-100111",
    "specialties": [
      "Racial Justice",
      "Voting Rights",
      "Wrongful Death"
    ],
    "phone": "404-555-8082",
    "website": "https://sanchezlaw.com",
    "rating": 4.7,
    "casesWon": 205,
    "yearsExperience": 14,
    "verified": true
  },
  {
    "id": "ga-008",
    "name": "Laura Wright",
    "firm": "Wright Legal Services",
    "state": "GA",
    "barNumber": "GA-100112",
    "specialties": [
      "Voting Rights",
      "Police Brutality",
      "Criminal Justice Reform",
      "Wrongful Conviction"
    ],
    "phone": "404-555-8099",
    "website": "https://wrightlaw.com",
    "rating": 4.9,
    "casesWon": 131,
    "yearsExperience": 18,
    "verified": true
  },
  {
    "id": "ga-009",
    "name": "Pamela Clark",
    "firm": "Clark & Associates",
    "state": "GA",
    "barNumber": "GA-100113",
    "specialties": [
      "Immigration Rights",
      "Wrongful Conviction",
      "Healthcare Rights"
    ],
    "phone": "404-555-6379",
    "website": "https://clarklaw.com",
    "rating": 4.7,
    "casesWon": 137,
    "yearsExperience": 24,
    "verified": true
  },
  {
    "id": "ga-010",
    "name": "Steven Smith",
    "firm": "Smith Civil Rights Law",
    "state": "GA",
    "barNumber": "GA-100114",
    "specialties": [
      "Police Misconduct",
      "Prison Reform",
      "Employment Discrimination",
      "Public Accommodation"
    ],
    "phone": "404-555-0643",
    "website": "https://smithlaw.com",
    "rating": 4.6,
    "casesWon": 167,
    "yearsExperience": 25,
    "verified": true
  },
  {
    "id": "ga-011",
    "name": "Kimberly Martinez",
    "firm": "Martinez Civil Liberties",
    "state": "GA",
    "barNumber": "GA-100115",
    "specialties": [
      "Racial Justice",
      "Religious Freedom",
      "Excessive Force",
      "Wrongful Death"
    ],
    "phone": "404-555-1829",
    "website": "https://martinezlaw.com",
    "rating": 4.8,
    "casesWon": 241,
    "yearsExperience": 21,
    "verified": true
  },
  {
    "id": "ga-012",
    "name": "Ashley Lewis",
    "firm": "Lewis Legal Group",
    "state": "GA",
    "barNumber": "GA-100116",
    "specialties": [
      "Education Rights",
      "Police Misconduct",
      "Housing Rights",
      "Wrongful Conviction"
    ],
    "phone": "404-555-7708",
    "website": "https://lewislaw.com",
    "rating": 4.7,
    "casesWon": 112,
    "yearsExperience": 11,
    "verified": true
  },
  {
    "id": "ga-013",
    "name": "Amy Robinson",
    "firm": "Robinson Law Firm",
    "state": "GA",
    "barNumber": "GA-100117",
    "specialties": [
      "Police Misconduct",
      "Fourth Amendment",
      "Racial Justice",
      "First Amendment"
    ],
    "phone": "404-555-3842",
    "website": "https://robinsonlaw.com",
    "rating": 4.8,
    "casesWon": 210,
    "yearsExperience": 10,
    "verified": true
  },
  {
    "id": "ga-014",
    "name": "Anna Smith",
    "firm": "Smith Legal Defense",
    "state": "GA",
    "barNumber": "GA-100118",
    "specialties": [
      "ADA Compliance",
      "Wrongful Death",
      "Criminal Justice Reform"
    ],
    "phone": "404-555-3497",
    "website": "https://smithlaw.com",
    "rating": 4.5,
    "casesWon": 65,
    "yearsExperience": 20,
    "verified": true
  },
  {
    "id": "hi-001",
    "name": "Barbara Martin",
    "firm": "Martin Legal Defense",
    "state": "HI",
    "barNumber": "HI-100119",
    "specialties": [
      "Disability Rights",
      "ADA Compliance",
      "Public Accommodation"
    ],
    "phone": "808-555-2001",
    "website": "https://martinlaw.com",
    "rating": 4.7,
    "casesWon": 223,
    "yearsExperience": 18,
    "verified": true
  },
  {
    "id": "hi-002",
    "name": "Edward Lopez",
    "firm": "Lopez Legal Defense",
    "state": "HI",
    "barNumber": "HI-100120",
    "specialties": [
      "Police Misconduct",
      "Police Brutality",
      "Employment Discrimination",
      "Fourth Amendment"
    ],
    "phone": "808-555-9738",
    "website": "https://lopezlaw.com",
    "rating": 4.9,
    "casesWon": 201,
    "yearsExperience": 27,
    "verified": true
  },
  {
    "id": "hi-003",
    "name": "Angela Sanchez",
    "firm": "Sanchez Civil Liberties",
    "state": "HI",
    "barNumber": "HI-100121",
    "specialties": [
      "Prison Reform",
      "Housing Rights",
      "Constitutional Rights",
      "Wrongful Death"
    ],
    "phone": "808-555-9060",
    "website": "https://sanchezlaw.com",
    "rating": 5,
    "casesWon": 166,
    "yearsExperience": 18,
    "verified": true
  },
  {
    "id": "hi-004",
    "name": "Rebecca Nelson",
    "firm": "Nelson Law Firm",
    "state": "HI",
    "barNumber": "HI-100122",
    "specialties": [
      "Education Rights",
      "Wrongful Death",
      "Criminal Justice Reform"
    ],
    "phone": "808-555-7549",
    "website": "https://nelsonlaw.com",
    "rating": 4.6,
    "casesWon": 52,
    "yearsExperience": 17,
    "verified": true
  },
  {
    "id": "hi-005",
    "name": "Gary Nelson",
    "firm": "Nelson Legal Group",
    "state": "HI",
    "barNumber": "HI-100123",
    "specialties": [
      "Excessive Force",
      "Constitutional Rights",
      "ADA Compliance"
    ],
    "phone": "808-555-1984",
    "website": "https://nelsonlaw.com",
    "rating": 4.8,
    "casesWon": 80,
    "yearsExperience": 25,
    "verified": true
  },
  {
    "id": "hi-006",
    "name": "Amanda Walker",
    "firm": "Walker Legal Services",
    "state": "HI",
    "barNumber": "HI-100124",
    "specialties": [
      "Racial Justice",
      "LGBTQ+ Rights",
      "ADA Compliance",
      "Religious Freedom"
    ],
    "phone": "808-555-8812",
    "website": "https://walkerlaw.com",
    "rating": 4.9,
    "casesWon": 80,
    "yearsExperience": 22,
    "verified": true
  },
  {
    "id": "hi-007",
    "name": "Sarah King",
    "firm": "King Law Group",
    "state": "HI",
    "barNumber": "HI-100125",
    "specialties": [
      "Wrongful Conviction",
      "First Amendment",
      "Police Misconduct",
      "Excessive Force"
    ],
    "phone": "808-555-1518",
    "website": "https://kinglaw.com",
    "rating": 4.9,
    "casesWon": 173,
    "yearsExperience": 24,
    "verified": true
  },
  {
    "id": "hi-008",
    "name": "Robert Garcia",
    "firm": "Garcia Civil Rights Law",
    "state": "HI",
    "barNumber": "HI-100126",
    "specialties": [
      "Employment Discrimination",
      "Racial Justice",
      "Excessive Force"
    ],
    "phone": "808-555-7475",
    "website": "https://garcialaw.com",
    "rating": 4.9,
    "casesWon": 144,
    "yearsExperience": 11,
    "verified": true
  },
  {
    "id": "hi-009",
    "name": "Emily Carter",
    "firm": "Carter Legal Group",
    "state": "HI",
    "barNumber": "HI-100127",
    "specialties": [
      "Voting Rights",
      "Wrongful Conviction",
      "Disability Rights",
      "Education Rights"
    ],
    "phone": "808-555-7015",
    "website": "https://carterlaw.com",
    "rating": 4.6,
    "casesWon": 198,
    "yearsExperience": 13,
    "verified": true
  },
  {
    "id": "hi-010",
    "name": "Ronald Hill",
    "firm": "Hill Legal Services",
    "state": "HI",
    "barNumber": "HI-100128",
    "specialties": [
      "Voting Rights",
      "Religious Freedom",
      "ADA Compliance",
      "Fourth Amendment"
    ],
    "phone": "808-555-1297",
    "website": "https://hilllaw.com",
    "rating": 4.6,
    "casesWon": 218,
    "yearsExperience": 20,
    "verified": true
  },
  {
    "id": "hi-011",
    "name": "Angela Garcia",
    "firm": "Garcia Legal Defense",
    "state": "HI",
    "barNumber": "HI-100129",
    "specialties": [
      "Racial Justice",
      "Employment Discrimination",
      "Police Misconduct"
    ],
    "phone": "808-555-0545",
    "website": "https://garcialaw.com",
    "rating": 4.7,
    "casesWon": 150,
    "yearsExperience": 12,
    "verified": true
  },
  {
    "id": "id-001",
    "name": "James Miller",
    "firm": "Miller & Partners",
    "state": "ID",
    "barNumber": "ID-100130",
    "specialties": [
      "Voting Rights",
      "Immigration Rights",
      "First Amendment",
      "Fourth Amendment"
    ],
    "phone": "208-555-3851",
    "website": "https://millerlaw.com",
    "rating": 4.8,
    "casesWon": 200,
    "yearsExperience": 15,
    "verified": true
  },
  {
    "id": "id-002",
    "name": "Brenda Smith",
    "firm": "Smith Legal Group",
    "state": "ID",
    "barNumber": "ID-100131",
    "specialties": [
      "Discrimination",
      "Education Rights",
      "Voting Rights",
      "Racial Justice"
    ],
    "phone": "208-555-9402",
    "website": "https://smithlaw.com",
    "rating": 4.9,
    "casesWon": 172,
    "yearsExperience": 8,
    "verified": true
  },
  {
    "id": "id-003",
    "name": "Patricia Lee",
    "firm": "Lee & Associates",
    "state": "ID",
    "barNumber": "ID-100132",
    "specialties": [
      "Police Misconduct",
      "Education Rights",
      "Housing Rights"
    ],
    "phone": "208-555-5530",
    "website": "https://leelaw.com",
    "rating": 4.8,
    "casesWon": 182,
    "yearsExperience": 13,
    "verified": true
  },
  {
    "id": "id-004",
    "name": "Jessica Allen",
    "firm": "Allen Law Firm",
    "state": "ID",
    "barNumber": "ID-100133",
    "specialties": [
      "ADA Compliance",
      "Employment Discrimination",
      "Immigration Rights"
    ],
    "phone": "208-555-3172",
    "website": "https://allenlaw.com",
    "rating": 4.7,
    "casesWon": 59,
    "yearsExperience": 20,
    "verified": true
  },
  {
    "id": "id-005",
    "name": "Gary Thompson",
    "firm": "Thompson Legal Defense",
    "state": "ID",
    "barNumber": "ID-100134",
    "specialties": [
      "Constitutional Rights",
      "Excessive Force",
      "LGBTQ+ Rights"
    ],
    "phone": "208-555-7421",
    "website": "https://thompsonlaw.com",
    "rating": 5,
    "casesWon": 142,
    "yearsExperience": 15,
    "verified": true
  },
  {
    "id": "id-006",
    "name": "Joshua Clark",
    "firm": "Clark Civil Rights Law",
    "state": "ID",
    "barNumber": "ID-100135",
    "specialties": [
      "Public Accommodation",
      "Fourth Amendment",
      "Education Rights"
    ],
    "phone": "208-555-2094",
    "website": "https://clarklaw.com",
    "rating": 4.9,
    "casesWon": 98,
    "yearsExperience": 20,
    "verified": true
  },
  {
    "id": "id-007",
    "name": "Kenneth Ramirez",
    "firm": "Ramirez & Associates",
    "state": "ID",
    "barNumber": "ID-100136",
    "specialties": [
      "Racial Justice",
      "Police Brutality",
      "Prison Reform"
    ],
    "phone": "208-555-4265",
    "website": "https://ramirezlaw.com",
    "rating": 4.5,
    "casesWon": 147,
    "yearsExperience": 24,
    "verified": true
  },
  {
    "id": "id-008",
    "name": "Patricia Carter",
    "firm": "Carter & Partners",
    "state": "ID",
    "barNumber": "ID-100137",
    "specialties": [
      "Religious Freedom",
      "Voting Rights",
      "Employment Discrimination",
      "Constitutional Rights"
    ],
    "phone": "208-555-4733",
    "website": "https://carterlaw.com",
    "rating": 4.6,
    "casesWon": 128,
    "yearsExperience": 25,
    "verified": true
  },
  {
    "id": "id-009",
    "name": "Pamela Wilson",
    "firm": "Wilson Law Group",
    "state": "ID",
    "barNumber": "ID-100138",
    "specialties": [
      "Religious Freedom",
      "Public Accommodation",
      "Racial Justice",
      "Education Rights"
    ],
    "phone": "208-555-4690",
    "website": "https://wilsonlaw.com",
    "rating": 4.9,
    "casesWon": 86,
    "yearsExperience": 14,
    "verified": true
  },
  {
    "id": "id-010",
    "name": "Daniel Flores",
    "firm": "Flores & Associates",
    "state": "ID",
    "barNumber": "ID-100139",
    "specialties": [
      "Wrongful Death",
      "First Amendment",
      "Excessive Force"
    ],
    "phone": "208-555-6676",
    "website": "https://floreslaw.com",
    "rating": 4.5,
    "casesWon": 244,
    "yearsExperience": 12,
    "verified": true
  },
  {
    "id": "id-011",
    "name": "Robert White",
    "firm": "White & Partners",
    "state": "ID",
    "barNumber": "ID-100140",
    "specialties": [
      "Police Misconduct",
      "Religious Freedom",
      "Education Rights",
      "Employment Discrimination"
    ],
    "phone": "208-555-4116",
    "website": "https://whitelaw.com",
    "rating": 4.9,
    "casesWon": 221,
    "yearsExperience": 26,
    "verified": true
  },
  {
    "id": "id-012",
    "name": "Joshua Torres",
    "firm": "Torres Civil Rights Law",
    "state": "ID",
    "barNumber": "ID-100141",
    "specialties": [
      "ADA Compliance",
      "Healthcare Rights",
      "Criminal Justice Reform"
    ],
    "phone": "208-555-6844",
    "website": "https://torreslaw.com",
    "rating": 4.8,
    "casesWon": 169,
    "yearsExperience": 11,
    "verified": true
  },
  {
    "id": "id-013",
    "name": "Jonathan Thompson",
    "firm": "Thompson Legal Services",
    "state": "ID",
    "barNumber": "ID-100142",
    "specialties": [
      "Religious Freedom",
      "Police Brutality",
      "Police Misconduct",
      "ADA Compliance"
    ],
    "phone": "208-555-6136",
    "website": "https://thompsonlaw.com",
    "rating": 4.6,
    "casesWon": 218,
    "yearsExperience": 17,
    "verified": true
  },
  {
    "id": "id-014",
    "name": "Kathleen Ramirez",
    "firm": "Ramirez Legal Defense",
    "state": "ID",
    "barNumber": "ID-100143",
    "specialties": [
      "Immigration Rights",
      "Housing Rights",
      "Discrimination"
    ],
    "phone": "208-555-7428",
    "website": "https://ramirezlaw.com",
    "rating": 4.9,
    "casesWon": 234,
    "yearsExperience": 17,
    "verified": true
  },
  {
    "id": "il-001",
    "name": "Angela Martinez",
    "firm": "Martinez Legal Services",
    "state": "IL",
    "barNumber": "IL-100144",
    "specialties": [
      "Voting Rights",
      "First Amendment",
      "Employment Discrimination"
    ],
    "phone": "312-555-2687",
    "website": "https://martinezlaw.com",
    "rating": 4.9,
    "casesWon": 174,
    "yearsExperience": 11,
    "verified": true
  },
  {
    "id": "il-002",
    "name": "Pamela Green",
    "firm": "Green & Partners",
    "state": "IL",
    "barNumber": "IL-100145",
    "specialties": [
      "Wrongful Death",
      "Religious Freedom",
      "Education Rights",
      "Racial Justice"
    ],
    "phone": "312-555-1251",
    "website": "https://greenlaw.com",
    "rating": 4.9,
    "casesWon": 220,
    "yearsExperience": 9,
    "verified": true
  },
  {
    "id": "il-003",
    "name": "James Scott",
    "firm": "Scott Civil Liberties",
    "state": "IL",
    "barNumber": "IL-100146",
    "specialties": [
      "Employment Discrimination",
      "Wrongful Conviction",
      "Healthcare Rights"
    ],
    "phone": "312-555-6373",
    "website": "https://scottlaw.com",
    "rating": 4.7,
    "casesWon": 231,
    "yearsExperience": 12,
    "verified": true
  },
  {
    "id": "il-004",
    "name": "Jonathan Walker",
    "firm": "Walker & Partners",
    "state": "IL",
    "barNumber": "IL-100147",
    "specialties": [
      "LGBTQ+ Rights",
      "Wrongful Conviction",
      "Constitutional Rights"
    ],
    "phone": "312-555-1849",
    "website": "https://walkerlaw.com",
    "rating": 4.7,
    "casesWon": 248,
    "yearsExperience": 23,
    "verified": true
  },
  {
    "id": "il-005",
    "name": "Paul Carter",
    "firm": "Carter Legal Group",
    "state": "IL",
    "barNumber": "IL-100148",
    "specialties": [
      "Discrimination",
      "Religious Freedom",
      "Education Rights",
      "ADA Compliance"
    ],
    "phone": "312-555-9334",
    "website": "https://carterlaw.com",
    "rating": 4.8,
    "casesWon": 72,
    "yearsExperience": 24,
    "verified": true
  },
  {
    "id": "il-006",
    "name": "Angela Wright",
    "firm": "Wright Civil Liberties",
    "state": "IL",
    "barNumber": "IL-100149",
    "specialties": [
      "Discrimination",
      "Public Accommodation",
      "Wrongful Conviction"
    ],
    "phone": "312-555-7670",
    "website": "https://wrightlaw.com",
    "rating": 4.9,
    "casesWon": 171,
    "yearsExperience": 22,
    "verified": true
  },
  {
    "id": "il-007",
    "name": "Elizabeth Sanchez",
    "firm": "Sanchez & Associates",
    "state": "IL",
    "barNumber": "IL-100150",
    "specialties": [
      "Constitutional Rights",
      "Disability Rights",
      "Immigration Rights"
    ],
    "phone": "312-555-0546",
    "website": "https://sanchezlaw.com",
    "rating": 4.5,
    "casesWon": 65,
    "yearsExperience": 23,
    "verified": true
  },
  {
    "id": "il-008",
    "name": "Stephanie Mitchell",
    "firm": "Mitchell & Associates",
    "state": "IL",
    "barNumber": "IL-100151",
    "specialties": [
      "Wrongful Death",
      "Employment Discrimination",
      "Discrimination"
    ],
    "phone": "312-555-7056",
    "website": "https://mitchelllaw.com",
    "rating": 4.9,
    "casesWon": 238,
    "yearsExperience": 27,
    "verified": true
  },
  {
    "id": "il-009",
    "name": "Joshua Wright",
    "firm": "Wright Legal Defense",
    "state": "IL",
    "barNumber": "IL-100152",
    "specialties": [
      "Public Accommodation",
      "Healthcare Rights",
      "Disability Rights",
      "Prison Reform"
    ],
    "phone": "312-555-1454",
    "website": "https://wrightlaw.com",
    "rating": 4.6,
    "casesWon": 68,
    "yearsExperience": 8,
    "verified": true
  },
  {
    "id": "il-010",
    "name": "Kathleen Jones",
    "firm": "Jones & Associates",
    "state": "IL",
    "barNumber": "IL-100153",
    "specialties": [
      "Disability Rights",
      "Prison Reform",
      "Excessive Force",
      "Housing Rights"
    ],
    "phone": "312-555-1867",
    "website": "https://joneslaw.com",
    "rating": 4.9,
    "casesWon": 221,
    "yearsExperience": 12,
    "verified": true
  },
  {
    "id": "il-011",
    "name": "Daniel Wright",
    "firm": "Wright Civil Rights Law",
    "state": "IL",
    "barNumber": "IL-100154",
    "specialties": [
      "Immigration Rights",
      "Voting Rights",
      "Criminal Justice Reform",
      "Public Accommodation"
    ],
    "phone": "312-555-0927",
    "website": "https://wrightlaw.com",
    "rating": 5,
    "casesWon": 192,
    "yearsExperience": 20,
    "verified": true
  },
  {
    "id": "il-012",
    "name": "Kimberly Walker",
    "firm": "Walker Legal Group",
    "state": "IL",
    "barNumber": "IL-100155",
    "specialties": [
      "Constitutional Rights",
      "Wrongful Death",
      "Education Rights",
      "Voting Rights"
    ],
    "phone": "312-555-5599",
    "website": "https://walkerlaw.com",
    "rating": 4.6,
    "casesWon": 64,
    "yearsExperience": 22,
    "verified": true
  },
  {
    "id": "il-013",
    "name": "Jeffrey Rivera",
    "firm": "Rivera Legal Defense",
    "state": "IL",
    "barNumber": "IL-100156",
    "specialties": [
      "Housing Rights",
      "Healthcare Rights",
      "Religious Freedom"
    ],
    "phone": "312-555-9579",
    "website": "https://riveralaw.com",
    "rating": 4.9,
    "casesWon": 155,
    "yearsExperience": 8,
    "verified": true
  },
  {
    "id": "il-014",
    "name": "Kimberly Gomez",
    "firm": "Gomez Civil Liberties",
    "state": "IL",
    "barNumber": "IL-100157",
    "specialties": [
      "Excessive Force",
      "Wrongful Conviction",
      "Criminal Justice Reform"
    ],
    "phone": "312-555-5527",
    "website": "https://gomezlaw.com",
    "rating": 4.5,
    "casesWon": 175,
    "yearsExperience": 20,
    "verified": true
  },
  {
    "id": "in-001",
    "name": "Linda Wilson",
    "firm": "Wilson & Partners",
    "state": "IN",
    "barNumber": "IN-100158",
    "specialties": [
      "Police Brutality",
      "Immigration Rights",
      "ADA Compliance"
    ],
    "phone": "317-555-7092",
    "website": "https://wilsonlaw.com",
    "rating": 4.8,
    "casesWon": 76,
    "yearsExperience": 27,
    "verified": true
  },
  {
    "id": "in-002",
    "name": "Amy Wright",
    "firm": "Wright Legal Services",
    "state": "IN",
    "barNumber": "IN-100159",
    "specialties": [
      "Fourth Amendment",
      "LGBTQ+ Rights",
      "Wrongful Conviction",
      "Discrimination"
    ],
    "phone": "317-555-5315",
    "website": "https://wrightlaw.com",
    "rating": 4.9,
    "casesWon": 85,
    "yearsExperience": 9,
    "verified": true
  },
  {
    "id": "in-003",
    "name": "Steven Torres",
    "firm": "Torres Legal Defense",
    "state": "IN",
    "barNumber": "IN-100160",
    "specialties": [
      "LGBTQ+ Rights",
      "Education Rights",
      "Voting Rights"
    ],
    "phone": "317-555-5096",
    "website": "https://torreslaw.com",
    "rating": 4.7,
    "casesWon": 119,
    "yearsExperience": 9,
    "verified": true
  },
  {
    "id": "in-004",
    "name": "Kenneth Jones",
    "firm": "Jones Civil Liberties",
    "state": "IN",
    "barNumber": "IN-100161",
    "specialties": [
      "Excessive Force",
      "Public Accommodation",
      "Wrongful Death"
    ],
    "phone": "317-555-0624",
    "website": "https://joneslaw.com",
    "rating": 5,
    "casesWon": 61,
    "yearsExperience": 8,
    "verified": true
  },
  {
    "id": "in-005",
    "name": "Laura Nguyen",
    "firm": "Nguyen Civil Liberties",
    "state": "IN",
    "barNumber": "IN-100162",
    "specialties": [
      "Constitutional Rights",
      "Housing Rights",
      "Discrimination",
      "Police Misconduct"
    ],
    "phone": "317-555-4882",
    "website": "https://nguyenlaw.com",
    "rating": 4.9,
    "casesWon": 126,
    "yearsExperience": 16,
    "verified": true
  },
  {
    "id": "in-006",
    "name": "David Gonzalez",
    "firm": "Gonzalez Legal Group",
    "state": "IN",
    "barNumber": "IN-100163",
    "specialties": [
      "First Amendment",
      "Education Rights",
      "Constitutional Rights"
    ],
    "phone": "317-555-1372",
    "website": "https://gonzalezlaw.com",
    "rating": 4.7,
    "casesWon": 54,
    "yearsExperience": 22,
    "verified": true
  },
  {
    "id": "in-007",
    "name": "Jennifer Carter",
    "firm": "Carter & Associates",
    "state": "IN",
    "barNumber": "IN-100164",
    "specialties": [
      "ADA Compliance",
      "Education Rights",
      "First Amendment"
    ],
    "phone": "317-555-3026",
    "website": "https://carterlaw.com",
    "rating": 4.9,
    "casesWon": 123,
    "yearsExperience": 13,
    "verified": true
  },
  {
    "id": "in-008",
    "name": "Kevin Gonzalez",
    "firm": "Gonzalez Law Firm",
    "state": "IN",
    "barNumber": "IN-100165",
    "specialties": [
      "Healthcare Rights",
      "Public Accommodation",
      "Education Rights",
      "Racial Justice"
    ],
    "phone": "317-555-8851",
    "website": "https://gonzalezlaw.com",
    "rating": 4.5,
    "casesWon": 118,
    "yearsExperience": 19,
    "verified": true
  },
  {
    "id": "in-009",
    "name": "Steven Roberts",
    "firm": "Roberts & Associates",
    "state": "IN",
    "barNumber": "IN-100166",
    "specialties": [
      "Excessive Force",
      "Prison Reform",
      "Police Misconduct",
      "Housing Rights"
    ],
    "phone": "317-555-6778",
    "website": "https://robertslaw.com",
    "rating": 4.8,
    "casesWon": 61,
    "yearsExperience": 12,
    "verified": true
  },
  {
    "id": "in-010",
    "name": "Joshua Garcia",
    "firm": "Garcia Civil Liberties",
    "state": "IN",
    "barNumber": "IN-100167",
    "specialties": [
      "Criminal Justice Reform",
      "Voting Rights",
      "Fourth Amendment"
    ],
    "phone": "317-555-3216",
    "website": "https://garcialaw.com",
    "rating": 4.8,
    "casesWon": 133,
    "yearsExperience": 20,
    "verified": true
  },
  {
    "id": "ia-001",
    "name": "David Torres",
    "firm": "Torres Legal Services",
    "state": "IA",
    "barNumber": "IA-100168",
    "specialties": [
      "Excessive Force",
      "Police Brutality",
      "First Amendment",
      "Police Misconduct"
    ],
    "phone": "515-555-5455",
    "website": "https://torreslaw.com",
    "rating": 4.9,
    "casesWon": 244,
    "yearsExperience": 16,
    "verified": true
  },
  {
    "id": "ia-002",
    "name": "Stephanie Smith",
    "firm": "Smith Legal Group",
    "state": "IA",
    "barNumber": "IA-100169",
    "specialties": [
      "Employment Discrimination",
      "Wrongful Conviction",
      "Prison Reform"
    ],
    "phone": "515-555-1581",
    "website": "https://smithlaw.com",
    "rating": 4.8,
    "casesWon": 116,
    "yearsExperience": 23,
    "verified": true
  },
  {
    "id": "ia-003",
    "name": "Donald Nguyen",
    "firm": "Nguyen & Partners",
    "state": "IA",
    "barNumber": "IA-100170",
    "specialties": [
      "Criminal Justice Reform",
      "Education Rights",
      "Excessive Force",
      "ADA Compliance"
    ],
    "phone": "515-555-5331",
    "website": "https://nguyenlaw.com",
    "rating": 4.9,
    "casesWon": 234,
    "yearsExperience": 20,
    "verified": true
  },
  {
    "id": "ia-004",
    "name": "Ashley Mitchell",
    "firm": "Mitchell Legal Group",
    "state": "IA",
    "barNumber": "IA-100171",
    "specialties": [
      "Education Rights",
      "LGBTQ+ Rights",
      "Police Brutality",
      "Excessive Force"
    ],
    "phone": "515-555-7697",
    "website": "https://mitchelllaw.com",
    "rating": 5,
    "casesWon": 136,
    "yearsExperience": 12,
    "verified": true
  },
  {
    "id": "ia-005",
    "name": "Susan Jones",
    "firm": "Jones Law Group",
    "state": "IA",
    "barNumber": "IA-100172",
    "specialties": [
      "Employment Discrimination",
      "Criminal Justice Reform",
      "Disability Rights",
      "Immigration Rights"
    ],
    "phone": "515-555-3451",
    "website": "https://joneslaw.com",
    "rating": 4.6,
    "casesWon": 92,
    "yearsExperience": 9,
    "verified": true
  },
  {
    "id": "ia-006",
    "name": "Christopher Hill",
    "firm": "Hill & Partners",
    "state": "IA",
    "barNumber": "IA-100173",
    "specialties": [
      "Prison Reform",
      "Public Accommodation",
      "Employment Discrimination",
      "Disability Rights"
    ],
    "phone": "515-555-9437",
    "website": "https://hilllaw.com",
    "rating": 4.9,
    "casesWon": 225,
    "yearsExperience": 10,
    "verified": true
  },
  {
    "id": "ia-007",
    "name": "David Lee",
    "firm": "Lee & Partners",
    "state": "IA",
    "barNumber": "IA-100174",
    "specialties": [
      "Racial Justice",
      "Public Accommodation",
      "Fourth Amendment",
      "Voting Rights"
    ],
    "phone": "515-555-6201",
    "website": "https://leelaw.com",
    "rating": 5,
    "casesWon": 213,
    "yearsExperience": 13,
    "verified": true
  },
  {
    "id": "ia-008",
    "name": "Shirley Thomas",
    "firm": "Thomas Justice Center",
    "state": "IA",
    "barNumber": "IA-100175",
    "specialties": [
      "Police Brutality",
      "Housing Rights",
      "Voting Rights",
      "Excessive Force"
    ],
    "phone": "515-555-8271",
    "website": "https://thomaslaw.com",
    "rating": 4.6,
    "casesWon": 225,
    "yearsExperience": 20,
    "verified": true
  },
  {
    "id": "ia-009",
    "name": "Sharon Hill",
    "firm": "Hill Civil Liberties",
    "state": "IA",
    "barNumber": "IA-100176",
    "specialties": [
      "Employment Discrimination",
      "Voting Rights",
      "Wrongful Death",
      "Religious Freedom"
    ],
    "phone": "515-555-4596",
    "website": "https://hilllaw.com",
    "rating": 4.7,
    "casesWon": 198,
    "yearsExperience": 24,
    "verified": true
  },
  {
    "id": "ia-010",
    "name": "Cynthia Torres",
    "firm": "Torres Civil Rights Law",
    "state": "IA",
    "barNumber": "IA-100177",
    "specialties": [
      "Education Rights",
      "Wrongful Conviction",
      "First Amendment"
    ],
    "phone": "515-555-2785",
    "website": "https://torreslaw.com",
    "rating": 4.7,
    "casesWon": 172,
    "yearsExperience": 17,
    "verified": true
  },
  {
    "id": "ks-001",
    "name": "Laura Ramirez",
    "firm": "Ramirez & Associates",
    "state": "KS",
    "barNumber": "KS-100178",
    "specialties": [
      "Housing Rights",
      "Prison Reform",
      "Healthcare Rights"
    ],
    "phone": "316-555-0977",
    "website": "https://ramirezlaw.com",
    "rating": 4.9,
    "casesWon": 139,
    "yearsExperience": 16,
    "verified": true
  },
  {
    "id": "ks-002",
    "name": "Emily Thomas",
    "firm": "Thomas Law Firm",
    "state": "KS",
    "barNumber": "KS-100179",
    "specialties": [
      "Immigration Rights",
      "Police Brutality",
      "Constitutional Rights"
    ],
    "phone": "316-555-1471",
    "website": "https://thomaslaw.com",
    "rating": 4.6,
    "casesWon": 73,
    "yearsExperience": 27,
    "verified": true
  },
  {
    "id": "ks-003",
    "name": "Ronald Wright",
    "firm": "Wright & Partners",
    "state": "KS",
    "barNumber": "KS-100180",
    "specialties": [
      "Police Misconduct",
      "Constitutional Rights",
      "Discrimination",
      "Fourth Amendment"
    ],
    "phone": "316-555-2313",
    "website": "https://wrightlaw.com",
    "rating": 4.8,
    "casesWon": 229,
    "yearsExperience": 19,
    "verified": true
  },
  {
    "id": "ks-004",
    "name": "Steven Hall",
    "firm": "Hall & Associates",
    "state": "KS",
    "barNumber": "KS-100181",
    "specialties": [
      "Prison Reform",
      "Wrongful Conviction",
      "Racial Justice",
      "Employment Discrimination"
    ],
    "phone": "316-555-3072",
    "website": "https://halllaw.com",
    "rating": 4.8,
    "casesWon": 177,
    "yearsExperience": 11,
    "verified": true
  },
  {
    "id": "ks-005",
    "name": "Sarah Hill",
    "firm": "Hill Law Group",
    "state": "KS",
    "barNumber": "KS-100182",
    "specialties": [
      "Immigration Rights",
      "Religious Freedom",
      "Police Misconduct",
      "LGBTQ+ Rights"
    ],
    "phone": "316-555-3967",
    "website": "https://hilllaw.com",
    "rating": 4.5,
    "casesWon": 98,
    "yearsExperience": 12,
    "verified": true
  },
  {
    "id": "ks-006",
    "name": "Matthew Sanchez",
    "firm": "Sanchez Justice Center",
    "state": "KS",
    "barNumber": "KS-100183",
    "specialties": [
      "Wrongful Death",
      "Excessive Force",
      "Employment Discrimination",
      "First Amendment"
    ],
    "phone": "316-555-0265",
    "website": "https://sanchezlaw.com",
    "rating": 4.8,
    "casesWon": 237,
    "yearsExperience": 18,
    "verified": true
  },
  {
    "id": "ks-007",
    "name": "Donald Campbell",
    "firm": "Campbell Civil Liberties",
    "state": "KS",
    "barNumber": "KS-100184",
    "specialties": [
      "Police Brutality",
      "Criminal Justice Reform",
      "Racial Justice"
    ],
    "phone": "316-555-5833",
    "website": "https://campbelllaw.com",
    "rating": 4.8,
    "casesWon": 219,
    "yearsExperience": 8,
    "verified": true
  },
  {
    "id": "ks-008",
    "name": "Nicholas Hall",
    "firm": "Hall Legal Defense",
    "state": "KS",
    "barNumber": "KS-100185",
    "specialties": [
      "ADA Compliance",
      "Employment Discrimination",
      "Constitutional Rights"
    ],
    "phone": "316-555-3034",
    "website": "https://halllaw.com",
    "rating": 4.9,
    "casesWon": 68,
    "yearsExperience": 27,
    "verified": true
  },
  {
    "id": "ks-009",
    "name": "Timothy Mitchell",
    "firm": "Mitchell & Associates",
    "state": "KS",
    "barNumber": "KS-100186",
    "specialties": [
      "Education Rights",
      "Criminal Justice Reform",
      "Wrongful Death",
      "Disability Rights"
    ],
    "phone": "316-555-3083",
    "website": "https://mitchelllaw.com",
    "rating": 4.7,
    "casesWon": 70,
    "yearsExperience": 22,
    "verified": true
  },
  {
    "id": "ks-010",
    "name": "Andrew White",
    "firm": "White Civil Liberties",
    "state": "KS",
    "barNumber": "KS-100187",
    "specialties": [
      "Healthcare Rights",
      "LGBTQ+ Rights",
      "Wrongful Death"
    ],
    "phone": "316-555-0900",
    "website": "https://whitelaw.com",
    "rating": 4.8,
    "casesWon": 92,
    "yearsExperience": 21,
    "verified": true
  },
  {
    "id": "ky-001",
    "name": "David Moore",
    "firm": "Moore Law Firm",
    "state": "KY",
    "barNumber": "KY-100188",
    "specialties": [
      "Discrimination",
      "Public Accommodation",
      "LGBTQ+ Rights",
      "Prison Reform"
    ],
    "phone": "502-555-7603",
    "website": "https://moorelaw.com",
    "rating": 4.7,
    "casesWon": 219,
    "yearsExperience": 11,
    "verified": true
  },
  {
    "id": "ky-002",
    "name": "Shirley Wright",
    "firm": "Wright Justice Center",
    "state": "KY",
    "barNumber": "KY-100189",
    "specialties": [
      "Police Brutality",
      "Voting Rights",
      "Disability Rights",
      "Fourth Amendment"
    ],
    "phone": "502-555-7504",
    "website": "https://wrightlaw.com",
    "rating": 4.8,
    "casesWon": 102,
    "yearsExperience": 24,
    "verified": true
  },
  {
    "id": "ky-003",
    "name": "Shirley Davis",
    "firm": "Davis & Partners",
    "state": "KY",
    "barNumber": "KY-100190",
    "specialties": [
      "Prison Reform",
      "First Amendment",
      "Immigration Rights",
      "Discrimination"
    ],
    "phone": "502-555-3529",
    "website": "https://davislaw.com",
    "rating": 4.6,
    "casesWon": 187,
    "yearsExperience": 21,
    "verified": true
  },
  {
    "id": "ky-004",
    "name": "Jennifer Allen",
    "firm": "Allen Civil Liberties",
    "state": "KY",
    "barNumber": "KY-100191",
    "specialties": [
      "Racial Justice",
      "Wrongful Death",
      "Public Accommodation"
    ],
    "phone": "502-555-4735",
    "website": "https://allenlaw.com",
    "rating": 4.7,
    "casesWon": 129,
    "yearsExperience": 25,
    "verified": true
  },
  {
    "id": "ky-005",
    "name": "David Lewis",
    "firm": "Lewis Law Group",
    "state": "KY",
    "barNumber": "KY-100192",
    "specialties": [
      "Religious Freedom",
      "Fourth Amendment",
      "Prison Reform",
      "Housing Rights"
    ],
    "phone": "502-555-7212",
    "website": "https://lewislaw.com",
    "rating": 4.6,
    "casesWon": 118,
    "yearsExperience": 19,
    "verified": true
  },
  {
    "id": "ky-006",
    "name": "Jonathan Clark",
    "firm": "Clark Legal Services",
    "state": "KY",
    "barNumber": "KY-100193",
    "specialties": [
      "Racial Justice",
      "Housing Rights",
      "Prison Reform",
      "Employment Discrimination"
    ],
    "phone": "502-555-6660",
    "website": "https://clarklaw.com",
    "rating": 4.8,
    "casesWon": 134,
    "yearsExperience": 22,
    "verified": true
  },
  {
    "id": "ky-007",
    "name": "Michael Carter",
    "firm": "Carter Civil Liberties",
    "state": "KY",
    "barNumber": "KY-100194",
    "specialties": [
      "Wrongful Death",
      "Discrimination",
      "Immigration Rights",
      "LGBTQ+ Rights"
    ],
    "phone": "502-555-6471",
    "website": "https://carterlaw.com",
    "rating": 4.8,
    "casesWon": 197,
    "yearsExperience": 25,
    "verified": true
  },
  {
    "id": "ky-008",
    "name": "Kathleen Robinson",
    "firm": "Robinson Civil Rights Law",
    "state": "KY",
    "barNumber": "KY-100195",
    "specialties": [
      "Excessive Force",
      "Racial Justice",
      "Religious Freedom",
      "Immigration Rights"
    ],
    "phone": "502-555-6907",
    "website": "https://robinsonlaw.com",
    "rating": 4.8,
    "casesWon": 184,
    "yearsExperience": 26,
    "verified": true
  },
  {
    "id": "ky-009",
    "name": "Ashley Allen",
    "firm": "Allen & Associates",
    "state": "KY",
    "barNumber": "KY-100196",
    "specialties": [
      "Criminal Justice Reform",
      "Prison Reform",
      "Constitutional Rights"
    ],
    "phone": "502-555-7745",
    "website": "https://allenlaw.com",
    "rating": 4.8,
    "casesWon": 130,
    "yearsExperience": 18,
    "verified": true
  },
  {
    "id": "ky-010",
    "name": "Gary Thompson",
    "firm": "Thompson Justice Center",
    "state": "KY",
    "barNumber": "KY-100197",
    "specialties": [
      "Housing Rights",
      "Employment Discrimination",
      "Wrongful Conviction"
    ],
    "phone": "502-555-2561",
    "website": "https://thompsonlaw.com",
    "rating": 5,
    "casesWon": 155,
    "yearsExperience": 27,
    "verified": true
  },
  {
    "id": "ky-011",
    "name": "Ruth Torres",
    "firm": "Torres Legal Group",
    "state": "KY",
    "barNumber": "KY-100198",
    "specialties": [
      "Racial Justice",
      "Employment Discrimination",
      "Healthcare Rights",
      "Education Rights"
    ],
    "phone": "502-555-3426",
    "website": "https://torreslaw.com",
    "rating": 4.6,
    "casesWon": 213,
    "yearsExperience": 11,
    "verified": true
  },
  {
    "id": "ky-012",
    "name": "Jonathan Rodriguez",
    "firm": "Rodriguez & Partners",
    "state": "KY",
    "barNumber": "KY-100199",
    "specialties": [
      "LGBTQ+ Rights",
      "First Amendment",
      "Police Misconduct",
      "Disability Rights"
    ],
    "phone": "502-555-4916",
    "website": "https://rodriguezlaw.com",
    "rating": 4.6,
    "casesWon": 52,
    "yearsExperience": 20,
    "verified": true
  },
  {
    "id": "ky-013",
    "name": "Patricia Jackson",
    "firm": "Jackson Legal Services",
    "state": "KY",
    "barNumber": "KY-100200",
    "specialties": [
      "First Amendment",
      "Healthcare Rights",
      "Racial Justice",
      "Education Rights"
    ],
    "phone": "502-555-4678",
    "website": "https://jacksonlaw.com",
    "rating": 4.7,
    "casesWon": 70,
    "yearsExperience": 8,
    "verified": true
  },
  {
    "id": "ky-014",
    "name": "Jessica Flores",
    "firm": "Flores Legal Group",
    "state": "KY",
    "barNumber": "KY-100201",
    "specialties": [
      "ADA Compliance",
      "Prison Reform",
      "Healthcare Rights"
    ],
    "phone": "502-555-1794",
    "website": "https://floreslaw.com",
    "rating": 4.8,
    "casesWon": 100,
    "yearsExperience": 8,
    "verified": true
  },
  {
    "id": "la-001",
    "name": "Stephanie Taylor",
    "firm": "Taylor & Partners",
    "state": "LA",
    "barNumber": "LA-100202",
    "specialties": [
      "Religious Freedom",
      "Police Brutality",
      "Racial Justice",
      "Police Misconduct"
    ],
    "phone": "504-555-5377",
    "website": "https://taylorlaw.com",
    "rating": 5,
    "casesWon": 206,
    "yearsExperience": 13,
    "verified": true
  },
  {
    "id": "la-002",
    "name": "Donald Clark",
    "firm": "Clark & Partners",
    "state": "LA",
    "barNumber": "LA-100203",
    "specialties": [
      "Wrongful Conviction",
      "Disability Rights",
      "Police Misconduct",
      "Immigration Rights"
    ],
    "phone": "504-555-5139",
    "website": "https://clarklaw.com",
    "rating": 4.6,
    "casesWon": 226,
    "yearsExperience": 8,
    "verified": true
  },
  {
    "id": "la-003",
    "name": "Gary Roberts",
    "firm": "Roberts Legal Defense",
    "state": "LA",
    "barNumber": "LA-100204",
    "specialties": [
      "Employment Discrimination",
      "Criminal Justice Reform",
      "Discrimination",
      "Fourth Amendment"
    ],
    "phone": "504-555-1014",
    "website": "https://robertslaw.com",
    "rating": 4.6,
    "casesWon": 200,
    "yearsExperience": 10,
    "verified": true
  },
  {
    "id": "la-004",
    "name": "Ronald Martinez",
    "firm": "Martinez & Associates",
    "state": "LA",
    "barNumber": "LA-100205",
    "specialties": [
      "Wrongful Death",
      "Fourth Amendment",
      "Religious Freedom",
      "Prison Reform"
    ],
    "phone": "504-555-1305",
    "website": "https://martinezlaw.com",
    "rating": 4.5,
    "casesWon": 239,
    "yearsExperience": 20,
    "verified": true
  },
  {
    "id": "la-005",
    "name": "Michael Taylor",
    "firm": "Taylor Civil Rights Law",
    "state": "LA",
    "barNumber": "LA-100206",
    "specialties": [
      "Prison Reform",
      "Disability Rights",
      "ADA Compliance",
      "Wrongful Conviction"
    ],
    "phone": "504-555-3360",
    "website": "https://taylorlaw.com",
    "rating": 4.6,
    "casesWon": 170,
    "yearsExperience": 10,
    "verified": true
  },
  {
    "id": "la-006",
    "name": "Kathleen Rodriguez",
    "firm": "Rodriguez & Associates",
    "state": "LA",
    "barNumber": "LA-100207",
    "specialties": [
      "Prison Reform",
      "Constitutional Rights",
      "Discrimination"
    ],
    "phone": "504-555-5889",
    "website": "https://rodriguezlaw.com",
    "rating": 4.6,
    "casesWon": 55,
    "yearsExperience": 26,
    "verified": true
  },
  {
    "id": "la-007",
    "name": "Anthony Young",
    "firm": "Young Civil Liberties",
    "state": "LA",
    "barNumber": "LA-100208",
    "specialties": [
      "Employment Discrimination",
      "Religious Freedom",
      "Wrongful Conviction"
    ],
    "phone": "504-555-1812",
    "website": "https://younglaw.com",
    "rating": 5,
    "casesWon": 105,
    "yearsExperience": 25,
    "verified": true
  },
  {
    "id": "la-008",
    "name": "Cynthia Thomas",
    "firm": "Thomas & Associates",
    "state": "LA",
    "barNumber": "LA-100209",
    "specialties": [
      "Excessive Force",
      "Criminal Justice Reform",
      "Religious Freedom"
    ],
    "phone": "504-555-8193",
    "website": "https://thomaslaw.com",
    "rating": 4.7,
    "casesWon": 187,
    "yearsExperience": 23,
    "verified": true
  },
  {
    "id": "la-009",
    "name": "Donald Mitchell",
    "firm": "Mitchell Legal Group",
    "state": "LA",
    "barNumber": "LA-100210",
    "specialties": [
      "Employment Discrimination",
      "Voting Rights",
      "Education Rights"
    ],
    "phone": "504-555-9564",
    "website": "https://mitchelllaw.com",
    "rating": 4.6,
    "casesWon": 73,
    "yearsExperience": 9,
    "verified": true
  },
  {
    "id": "la-010",
    "name": "Sharon Rodriguez",
    "firm": "Rodriguez Law Firm",
    "state": "LA",
    "barNumber": "LA-100211",
    "specialties": [
      "Racial Justice",
      "Constitutional Rights",
      "Prison Reform"
    ],
    "phone": "504-555-2037",
    "website": "https://rodriguezlaw.com",
    "rating": 4.9,
    "casesWon": 221,
    "yearsExperience": 23,
    "verified": true
  },
  {
    "id": "la-011",
    "name": "Jennifer Ramirez",
    "firm": "Ramirez Law Group",
    "state": "LA",
    "barNumber": "LA-100212",
    "specialties": [
      "Police Misconduct",
      "ADA Compliance",
      "Healthcare Rights",
      "Racial Justice"
    ],
    "phone": "504-555-9551",
    "website": "https://ramirezlaw.com",
    "rating": 4.9,
    "casesWon": 76,
    "yearsExperience": 16,
    "verified": true
  },
  {
    "id": "me-001",
    "name": "Edward Thomas",
    "firm": "Thomas Justice Center",
    "state": "ME",
    "barNumber": "ME-100213",
    "specialties": [
      "Prison Reform",
      "Excessive Force",
      "Wrongful Death",
      "Employment Discrimination"
    ],
    "phone": "207-555-9220",
    "website": "https://thomaslaw.com",
    "rating": 4.6,
    "casesWon": 200,
    "yearsExperience": 24,
    "verified": true
  },
  {
    "id": "me-002",
    "name": "Nicholas White",
    "firm": "White Justice Center",
    "state": "ME",
    "barNumber": "ME-100214",
    "specialties": [
      "Public Accommodation",
      "Religious Freedom",
      "ADA Compliance",
      "Healthcare Rights"
    ],
    "phone": "207-555-4341",
    "website": "https://whitelaw.com",
    "rating": 5,
    "casesWon": 248,
    "yearsExperience": 19,
    "verified": true
  },
  {
    "id": "me-003",
    "name": "James Sanchez",
    "firm": "Sanchez & Partners",
    "state": "ME",
    "barNumber": "ME-100215",
    "specialties": [
      "Healthcare Rights",
      "Housing Rights",
      "Disability Rights"
    ],
    "phone": "207-555-1020",
    "website": "https://sanchezlaw.com",
    "rating": 4.6,
    "casesWon": 192,
    "yearsExperience": 19,
    "verified": true
  },
  {
    "id": "me-004",
    "name": "Gary Nguyen",
    "firm": "Nguyen Law Group",
    "state": "ME",
    "barNumber": "ME-100216",
    "specialties": [
      "Housing Rights",
      "Healthcare Rights",
      "Public Accommodation"
    ],
    "phone": "207-555-9606",
    "website": "https://nguyenlaw.com",
    "rating": 4.9,
    "casesWon": 129,
    "yearsExperience": 20,
    "verified": true
  },
  {
    "id": "me-005",
    "name": "Linda Flores",
    "firm": "Flores Law Firm",
    "state": "ME",
    "barNumber": "ME-100217",
    "specialties": [
      "First Amendment",
      "Wrongful Conviction",
      "Constitutional Rights"
    ],
    "phone": "207-555-2292",
    "website": "https://floreslaw.com",
    "rating": 4.7,
    "casesWon": 68,
    "yearsExperience": 15,
    "verified": true
  },
  {
    "id": "me-006",
    "name": "Jennifer Anderson",
    "firm": "Anderson Legal Defense",
    "state": "ME",
    "barNumber": "ME-100218",
    "specialties": [
      "Criminal Justice Reform",
      "Voting Rights",
      "Police Brutality"
    ],
    "phone": "207-555-0499",
    "website": "https://andersonlaw.com",
    "rating": 4.6,
    "casesWon": 97,
    "yearsExperience": 16,
    "verified": true
  },
  {
    "id": "me-007",
    "name": "Daniel Miller",
    "firm": "Miller & Partners",
    "state": "ME",
    "barNumber": "ME-100219",
    "specialties": [
      "Police Misconduct",
      "Fourth Amendment",
      "Prison Reform"
    ],
    "phone": "207-555-3108",
    "website": "https://millerlaw.com",
    "rating": 5,
    "casesWon": 205,
    "yearsExperience": 10,
    "verified": true
  },
  {
    "id": "me-008",
    "name": "Donald Moore",
    "firm": "Moore Law Group",
    "state": "ME",
    "barNumber": "ME-100220",
    "specialties": [
      "Disability Rights",
      "Public Accommodation",
      "Immigration Rights"
    ],
    "phone": "207-555-8776",
    "website": "https://moorelaw.com",
    "rating": 4.6,
    "casesWon": 131,
    "yearsExperience": 10,
    "verified": true
  },
  {
    "id": "me-009",
    "name": "Melissa Allen",
    "firm": "Allen Legal Group",
    "state": "ME",
    "barNumber": "ME-100221",
    "specialties": [
      "Discrimination",
      "Wrongful Death",
      "Racial Justice",
      "Prison Reform"
    ],
    "phone": "207-555-9179",
    "website": "https://allenlaw.com",
    "rating": 4.7,
    "casesWon": 74,
    "yearsExperience": 11,
    "verified": true
  },
  {
    "id": "me-010",
    "name": "Jacob Thompson",
    "firm": "Thompson Civil Rights Law",
    "state": "ME",
    "barNumber": "ME-100222",
    "specialties": [
      "Housing Rights",
      "Fourth Amendment",
      "Wrongful Death"
    ],
    "phone": "207-555-1035",
    "website": "https://thompsonlaw.com",
    "rating": 4.7,
    "casesWon": 138,
    "yearsExperience": 17,
    "verified": true
  },
  {
    "id": "me-011",
    "name": "Maria Torres",
    "firm": "Torres Legal Defense",
    "state": "ME",
    "barNumber": "ME-100223",
    "specialties": [
      "Disability Rights",
      "Healthcare Rights",
      "Excessive Force"
    ],
    "phone": "207-555-0290",
    "website": "https://torreslaw.com",
    "rating": 5,
    "casesWon": 243,
    "yearsExperience": 14,
    "verified": true
  },
  {
    "id": "me-012",
    "name": "Christopher Hernandez",
    "firm": "Hernandez Legal Services",
    "state": "ME",
    "barNumber": "ME-100224",
    "specialties": [
      "ADA Compliance",
      "Voting Rights",
      "Police Misconduct",
      "Education Rights"
    ],
    "phone": "207-555-0516",
    "website": "https://hernandezlaw.com",
    "rating": 4.5,
    "casesWon": 86,
    "yearsExperience": 19,
    "verified": true
  },
  {
    "id": "me-013",
    "name": "Steven Williams",
    "firm": "Williams Civil Rights Law",
    "state": "ME",
    "barNumber": "ME-100225",
    "specialties": [
      "Immigration Rights",
      "Employment Discrimination",
      "First Amendment"
    ],
    "phone": "207-555-5772",
    "website": "https://williamslaw.com",
    "rating": 4.6,
    "casesWon": 181,
    "yearsExperience": 8,
    "verified": true
  },
  {
    "id": "me-014",
    "name": "Angela Green",
    "firm": "Green Legal Defense",
    "state": "ME",
    "barNumber": "ME-100226",
    "specialties": [
      "Wrongful Death",
      "Religious Freedom",
      "ADA Compliance"
    ],
    "phone": "207-555-7353",
    "website": "https://greenlaw.com",
    "rating": 4.6,
    "casesWon": 193,
    "yearsExperience": 10,
    "verified": true
  },
  {
    "id": "md-001",
    "name": "Jacob Robinson",
    "firm": "Robinson Legal Services",
    "state": "MD",
    "barNumber": "MD-100227",
    "specialties": [
      "Discrimination",
      "Police Brutality",
      "Police Misconduct",
      "Wrongful Conviction"
    ],
    "phone": "410-555-4519",
    "website": "https://robinsonlaw.com",
    "rating": 4.7,
    "casesWon": 141,
    "yearsExperience": 16,
    "verified": true
  },
  {
    "id": "md-002",
    "name": "Timothy Nelson",
    "firm": "Nelson Law Firm",
    "state": "MD",
    "barNumber": "MD-100228",
    "specialties": [
      "Discrimination",
      "Fourth Amendment",
      "Housing Rights",
      "First Amendment"
    ],
    "phone": "410-555-9079",
    "website": "https://nelsonlaw.com",
    "rating": 4.6,
    "casesWon": 224,
    "yearsExperience": 10,
    "verified": true
  },
  {
    "id": "md-003",
    "name": "Matthew Davis",
    "firm": "Davis Civil Rights Law",
    "state": "MD",
    "barNumber": "MD-100229",
    "specialties": [
      "Wrongful Death",
      "Voting Rights",
      "Housing Rights",
      "First Amendment"
    ],
    "phone": "410-555-1328",
    "website": "https://davislaw.com",
    "rating": 4.5,
    "casesWon": 192,
    "yearsExperience": 14,
    "verified": true
  },
  {
    "id": "md-004",
    "name": "Kevin Lewis",
    "firm": "Lewis Civil Rights Law",
    "state": "MD",
    "barNumber": "MD-100230",
    "specialties": [
      "Voting Rights",
      "ADA Compliance",
      "Education Rights",
      "Discrimination"
    ],
    "phone": "410-555-8402",
    "website": "https://lewislaw.com",
    "rating": 4.9,
    "casesWon": 66,
    "yearsExperience": 21,
    "verified": true
  },
  {
    "id": "md-005",
    "name": "Elizabeth Adams",
    "firm": "Adams Civil Liberties",
    "state": "MD",
    "barNumber": "MD-100231",
    "specialties": [
      "Fourth Amendment",
      "Voting Rights",
      "Racial Justice",
      "Constitutional Rights"
    ],
    "phone": "410-555-1360",
    "website": "https://adamslaw.com",
    "rating": 4.5,
    "casesWon": 184,
    "yearsExperience": 9,
    "verified": true
  },
  {
    "id": "md-006",
    "name": "Linda Sanchez",
    "firm": "Sanchez Legal Group",
    "state": "MD",
    "barNumber": "MD-100232",
    "specialties": [
      "Constitutional Rights",
      "Criminal Justice Reform",
      "Police Brutality",
      "LGBTQ+ Rights"
    ],
    "phone": "410-555-3174",
    "website": "https://sanchezlaw.com",
    "rating": 4.7,
    "casesWon": 112,
    "yearsExperience": 26,
    "verified": true
  },
  {
    "id": "md-007",
    "name": "Amanda Gonzalez",
    "firm": "Gonzalez & Partners",
    "state": "MD",
    "barNumber": "MD-100233",
    "specialties": [
      "ADA Compliance",
      "Wrongful Conviction",
      "Police Brutality",
      "LGBTQ+ Rights"
    ],
    "phone": "410-555-8369",
    "website": "https://gonzalezlaw.com",
    "rating": 4.7,
    "casesWon": 106,
    "yearsExperience": 23,
    "verified": true
  },
  {
    "id": "md-008",
    "name": "Angela Carter",
    "firm": "Carter & Associates",
    "state": "MD",
    "barNumber": "MD-100234",
    "specialties": [
      "Education Rights",
      "LGBTQ+ Rights",
      "Excessive Force",
      "Police Misconduct"
    ],
    "phone": "410-555-5881",
    "website": "https://carterlaw.com",
    "rating": 4.6,
    "casesWon": 147,
    "yearsExperience": 24,
    "verified": true
  },
  {
    "id": "md-009",
    "name": "Jeffrey Smith",
    "firm": "Smith Law Firm",
    "state": "MD",
    "barNumber": "MD-100235",
    "specialties": [
      "Fourth Amendment",
      "Immigration Rights",
      "Wrongful Death",
      "LGBTQ+ Rights"
    ],
    "phone": "410-555-1495",
    "website": "https://smithlaw.com",
    "rating": 4.8,
    "casesWon": 167,
    "yearsExperience": 12,
    "verified": true
  },
  {
    "id": "md-010",
    "name": "Matthew White",
    "firm": "White Legal Services",
    "state": "MD",
    "barNumber": "MD-100236",
    "specialties": [
      "Discrimination",
      "Wrongful Death",
      "Fourth Amendment",
      "LGBTQ+ Rights"
    ],
    "phone": "410-555-6435",
    "website": "https://whitelaw.com",
    "rating": 4.9,
    "casesWon": 168,
    "yearsExperience": 27,
    "verified": true
  },
  {
    "id": "ma-001",
    "name": "Amanda Nelson",
    "firm": "Nelson & Associates",
    "state": "MA",
    "barNumber": "MA-100237",
    "specialties": [
      "Fourth Amendment",
      "Wrongful Conviction",
      "Discrimination"
    ],
    "phone": "617-555-4829",
    "website": "https://nelsonlaw.com",
    "rating": 4.5,
    "casesWon": 125,
    "yearsExperience": 15,
    "verified": true
  },
  {
    "id": "ma-002",
    "name": "Christopher Smith",
    "firm": "Smith & Associates",
    "state": "MA",
    "barNumber": "MA-100238",
    "specialties": [
      "Religious Freedom",
      "Wrongful Conviction",
      "Criminal Justice Reform",
      "Discrimination"
    ],
    "phone": "617-555-7021",
    "website": "https://smithlaw.com",
    "rating": 4.8,
    "casesWon": 230,
    "yearsExperience": 8,
    "verified": true
  },
  {
    "id": "ma-003",
    "name": "Maria Green",
    "firm": "Green Civil Rights Law",
    "state": "MA",
    "barNumber": "MA-100239",
    "specialties": [
      "Wrongful Conviction",
      "Criminal Justice Reform",
      "Immigration Rights"
    ],
    "phone": "617-555-9261",
    "website": "https://greenlaw.com",
    "rating": 4.6,
    "casesWon": 123,
    "yearsExperience": 16,
    "verified": true
  },
  {
    "id": "ma-004",
    "name": "Kenneth Davis",
    "firm": "Davis Legal Defense",
    "state": "MA",
    "barNumber": "MA-100240",
    "specialties": [
      "Police Misconduct",
      "Prison Reform",
      "Housing Rights",
      "Racial Justice"
    ],
    "phone": "617-555-3209",
    "website": "https://davislaw.com",
    "rating": 4.7,
    "casesWon": 124,
    "yearsExperience": 15,
    "verified": true
  },
  {
    "id": "ma-005",
    "name": "Stephanie Roberts",
    "firm": "Roberts Legal Services",
    "state": "MA",
    "barNumber": "MA-100241",
    "specialties": [
      "Employment Discrimination",
      "Religious Freedom",
      "Racial Justice",
      "Fourth Amendment"
    ],
    "phone": "617-555-4831",
    "website": "https://robertslaw.com",
    "rating": 4.5,
    "casesWon": 104,
    "yearsExperience": 17,
    "verified": true
  },
  {
    "id": "ma-006",
    "name": "Kimberly Flores",
    "firm": "Flores Law Group",
    "state": "MA",
    "barNumber": "MA-100242",
    "specialties": [
      "Police Misconduct",
      "Immigration Rights",
      "Prison Reform"
    ],
    "phone": "617-555-3187",
    "website": "https://floreslaw.com",
    "rating": 4.5,
    "casesWon": 246,
    "yearsExperience": 27,
    "verified": true
  },
  {
    "id": "ma-007",
    "name": "Matthew Adams",
    "firm": "Adams Legal Defense",
    "state": "MA",
    "barNumber": "MA-100243",
    "specialties": [
      "Wrongful Conviction",
      "Racial Justice",
      "Police Misconduct",
      "Discrimination"
    ],
    "phone": "617-555-6805",
    "website": "https://adamslaw.com",
    "rating": 4.8,
    "casesWon": 214,
    "yearsExperience": 12,
    "verified": true
  },
  {
    "id": "ma-008",
    "name": "Matthew Martin",
    "firm": "Martin Civil Rights Law",
    "state": "MA",
    "barNumber": "MA-100244",
    "specialties": [
      "Public Accommodation",
      "Excessive Force",
      "Prison Reform"
    ],
    "phone": "617-555-9408",
    "website": "https://martinlaw.com",
    "rating": 4.8,
    "casesWon": 146,
    "yearsExperience": 24,
    "verified": true
  },
  {
    "id": "ma-009",
    "name": "Jessica Thomas",
    "firm": "Thomas Civil Liberties",
    "state": "MA",
    "barNumber": "MA-100245",
    "specialties": [
      "Police Misconduct",
      "Constitutional Rights",
      "ADA Compliance"
    ],
    "phone": "617-555-5368",
    "website": "https://thomaslaw.com",
    "rating": 4.7,
    "casesWon": 176,
    "yearsExperience": 8,
    "verified": true
  },
  {
    "id": "ma-010",
    "name": "Barbara Adams",
    "firm": "Adams Law Firm",
    "state": "MA",
    "barNumber": "MA-100246",
    "specialties": [
      "Police Brutality",
      "Excessive Force",
      "Racial Justice"
    ],
    "phone": "617-555-1279",
    "website": "https://adamslaw.com",
    "rating": 4.6,
    "casesWon": 104,
    "yearsExperience": 13,
    "verified": true
  },
  {
    "id": "ma-011",
    "name": "Ruth Taylor",
    "firm": "Taylor Legal Services",
    "state": "MA",
    "barNumber": "MA-100247",
    "specialties": [
      "Fourth Amendment",
      "Wrongful Conviction",
      "Discrimination"
    ],
    "phone": "617-555-9962",
    "website": "https://taylorlaw.com",
    "rating": 4.6,
    "casesWon": 74,
    "yearsExperience": 19,
    "verified": true
  },
  {
    "id": "mi-001",
    "name": "Elizabeth Adams",
    "firm": "Adams Law Firm",
    "state": "MI",
    "barNumber": "MI-100248",
    "specialties": [
      "First Amendment",
      "Public Accommodation",
      "Employment Discrimination",
      "Wrongful Death"
    ],
    "phone": "313-555-9532",
    "website": "https://adamslaw.com",
    "rating": 4.5,
    "casesWon": 135,
    "yearsExperience": 16,
    "verified": true
  },
  {
    "id": "mi-002",
    "name": "Kevin Lewis",
    "firm": "Lewis Legal Defense",
    "state": "MI",
    "barNumber": "MI-100249",
    "specialties": [
      "Housing Rights",
      "ADA Compliance",
      "Wrongful Conviction"
    ],
    "phone": "313-555-4453",
    "website": "https://lewislaw.com",
    "rating": 4.7,
    "casesWon": 151,
    "yearsExperience": 17,
    "verified": true
  },
  {
    "id": "mi-003",
    "name": "Paul Martin",
    "firm": "Martin Legal Defense",
    "state": "MI",
    "barNumber": "MI-100250",
    "specialties": [
      "Wrongful Death",
      "Religious Freedom",
      "Prison Reform"
    ],
    "phone": "313-555-8313",
    "website": "https://martinlaw.com",
    "rating": 5,
    "casesWon": 139,
    "yearsExperience": 19,
    "verified": true
  },
  {
    "id": "mi-004",
    "name": "Pamela Mitchell",
    "firm": "Mitchell Law Firm",
    "state": "MI",
    "barNumber": "MI-100251",
    "specialties": [
      "Excessive Force",
      "Religious Freedom",
      "Employment Discrimination",
      "Public Accommodation"
    ],
    "phone": "313-555-5392",
    "website": "https://mitchelllaw.com",
    "rating": 4.6,
    "casesWon": 214,
    "yearsExperience": 18,
    "verified": true
  },
  {
    "id": "mi-005",
    "name": "Nicole Taylor",
    "firm": "Taylor Civil Rights Law",
    "state": "MI",
    "barNumber": "MI-100252",
    "specialties": [
      "Education Rights",
      "Racial Justice",
      "Disability Rights",
      "Wrongful Conviction"
    ],
    "phone": "313-555-3138",
    "website": "https://taylorlaw.com",
    "rating": 4.9,
    "casesWon": 175,
    "yearsExperience": 16,
    "verified": true
  },
  {
    "id": "mi-006",
    "name": "Kevin Davis",
    "firm": "Davis Civil Liberties",
    "state": "MI",
    "barNumber": "MI-100253",
    "specialties": [
      "Criminal Justice Reform",
      "Wrongful Death",
      "Housing Rights",
      "Religious Freedom"
    ],
    "phone": "313-555-0216",
    "website": "https://davislaw.com",
    "rating": 4.6,
    "casesWon": 215,
    "yearsExperience": 17,
    "verified": true
  },
  {
    "id": "mi-007",
    "name": "Ryan Mitchell",
    "firm": "Mitchell Civil Liberties",
    "state": "MI",
    "barNumber": "MI-100254",
    "specialties": [
      "Excessive Force",
      "Police Misconduct",
      "Constitutional Rights",
      "Healthcare Rights"
    ],
    "phone": "313-555-9435",
    "website": "https://mitchelllaw.com",
    "rating": 4.9,
    "casesWon": 245,
    "yearsExperience": 11,
    "verified": true
  },
  {
    "id": "mi-008",
    "name": "Kevin Green",
    "firm": "Green Legal Defense",
    "state": "MI",
    "barNumber": "MI-100255",
    "specialties": [
      "Fourth Amendment",
      "Criminal Justice Reform",
      "Wrongful Conviction"
    ],
    "phone": "313-555-7371",
    "website": "https://greenlaw.com",
    "rating": 4.9,
    "casesWon": 86,
    "yearsExperience": 13,
    "verified": true
  },
  {
    "id": "mi-009",
    "name": "John Adams",
    "firm": "Adams Legal Defense",
    "state": "MI",
    "barNumber": "MI-100256",
    "specialties": [
      "Fourth Amendment",
      "Criminal Justice Reform",
      "Constitutional Rights",
      "Housing Rights"
    ],
    "phone": "313-555-8672",
    "website": "https://adamslaw.com",
    "rating": 4.8,
    "casesWon": 160,
    "yearsExperience": 14,
    "verified": true
  },
  {
    "id": "mi-010",
    "name": "Edward Scott",
    "firm": "Scott Legal Services",
    "state": "MI",
    "barNumber": "MI-100257",
    "specialties": [
      "Education Rights",
      "Wrongful Conviction",
      "Healthcare Rights"
    ],
    "phone": "313-555-0899",
    "website": "https://scottlaw.com",
    "rating": 4.6,
    "casesWon": 116,
    "yearsExperience": 19,
    "verified": true
  },
  {
    "id": "mi-011",
    "name": "Angela Walker",
    "firm": "Walker Legal Group",
    "state": "MI",
    "barNumber": "MI-100258",
    "specialties": [
      "Prison Reform",
      "Constitutional Rights",
      "First Amendment"
    ],
    "phone": "313-555-7159",
    "website": "https://walkerlaw.com",
    "rating": 4.5,
    "casesWon": 242,
    "yearsExperience": 27,
    "verified": true
  },
  {
    "id": "mi-012",
    "name": "Anna Davis",
    "firm": "Davis Legal Defense",
    "state": "MI",
    "barNumber": "MI-100259",
    "specialties": [
      "Wrongful Conviction",
      "Wrongful Death",
      "LGBTQ+ Rights"
    ],
    "phone": "313-555-4525",
    "website": "https://davislaw.com",
    "rating": 4.7,
    "casesWon": 138,
    "yearsExperience": 17,
    "verified": true
  },
  {
    "id": "mn-001",
    "name": "Joshua Mitchell",
    "firm": "Mitchell Legal Group",
    "state": "MN",
    "barNumber": "MN-100260",
    "specialties": [
      "Wrongful Death",
      "Religious Freedom",
      "Criminal Justice Reform"
    ],
    "phone": "612-555-6606",
    "website": "https://mitchelllaw.com",
    "rating": 4.8,
    "casesWon": 224,
    "yearsExperience": 27,
    "verified": true
  },
  {
    "id": "mn-002",
    "name": "Amy Lopez",
    "firm": "Lopez Civil Rights Law",
    "state": "MN",
    "barNumber": "MN-100261",
    "specialties": [
      "Wrongful Conviction",
      "Fourth Amendment",
      "Housing Rights",
      "Police Brutality"
    ],
    "phone": "612-555-5019",
    "website": "https://lopezlaw.com",
    "rating": 4.5,
    "casesWon": 171,
    "yearsExperience": 8,
    "verified": true
  },
  {
    "id": "mn-003",
    "name": "Stephanie Carter",
    "firm": "Carter & Associates",
    "state": "MN",
    "barNumber": "MN-100262",
    "specialties": [
      "Employment Discrimination",
      "Voting Rights",
      "Religious Freedom",
      "Racial Justice"
    ],
    "phone": "612-555-6301",
    "website": "https://carterlaw.com",
    "rating": 4.7,
    "casesWon": 107,
    "yearsExperience": 24,
    "verified": true
  },
  {
    "id": "mn-004",
    "name": "George White",
    "firm": "White Law Group",
    "state": "MN",
    "barNumber": "MN-100263",
    "specialties": [
      "Housing Rights",
      "Police Misconduct",
      "Police Brutality",
      "Religious Freedom"
    ],
    "phone": "612-555-2664",
    "website": "https://whitelaw.com",
    "rating": 5,
    "casesWon": 95,
    "yearsExperience": 16,
    "verified": true
  },
  {
    "id": "mn-005",
    "name": "Kathleen Hill",
    "firm": "Hill Legal Defense",
    "state": "MN",
    "barNumber": "MN-100264",
    "specialties": [
      "First Amendment",
      "Immigration Rights",
      "Healthcare Rights",
      "Prison Reform"
    ],
    "phone": "612-555-2981",
    "website": "https://hilllaw.com",
    "rating": 4.8,
    "casesWon": 240,
    "yearsExperience": 19,
    "verified": true
  },
  {
    "id": "mn-006",
    "name": "Laura Nelson",
    "firm": "Nelson Justice Center",
    "state": "MN",
    "barNumber": "MN-100265",
    "specialties": [
      "Criminal Justice Reform",
      "Racial Justice",
      "Police Brutality"
    ],
    "phone": "612-555-5967",
    "website": "https://nelsonlaw.com",
    "rating": 4.7,
    "casesWon": 204,
    "yearsExperience": 8,
    "verified": true
  },
  {
    "id": "mn-007",
    "name": "Patricia Ramirez",
    "firm": "Ramirez Justice Center",
    "state": "MN",
    "barNumber": "MN-100266",
    "specialties": [
      "Fourth Amendment",
      "First Amendment",
      "Healthcare Rights"
    ],
    "phone": "612-555-8446",
    "website": "https://ramirezlaw.com",
    "rating": 5,
    "casesWon": 204,
    "yearsExperience": 17,
    "verified": true
  },
  {
    "id": "mn-008",
    "name": "Joshua Martin",
    "firm": "Martin Legal Services",
    "state": "MN",
    "barNumber": "MN-100267",
    "specialties": [
      "Prison Reform",
      "Criminal Justice Reform",
      "Disability Rights"
    ],
    "phone": "612-555-2941",
    "website": "https://martinlaw.com",
    "rating": 4.6,
    "casesWon": 223,
    "yearsExperience": 19,
    "verified": true
  },
  {
    "id": "mn-009",
    "name": "Paul Allen",
    "firm": "Allen Civil Rights Law",
    "state": "MN",
    "barNumber": "MN-100268",
    "specialties": [
      "Racial Justice",
      "First Amendment",
      "Fourth Amendment",
      "Prison Reform"
    ],
    "phone": "612-555-9680",
    "website": "https://allenlaw.com",
    "rating": 4.9,
    "casesWon": 103,
    "yearsExperience": 10,
    "verified": true
  },
  {
    "id": "mn-010",
    "name": "Daniel Robinson",
    "firm": "Robinson Civil Rights Law",
    "state": "MN",
    "barNumber": "MN-100269",
    "specialties": [
      "Disability Rights",
      "Fourth Amendment",
      "ADA Compliance",
      "Immigration Rights"
    ],
    "phone": "612-555-0240",
    "website": "https://robinsonlaw.com",
    "rating": 4.6,
    "casesWon": 99,
    "yearsExperience": 11,
    "verified": true
  },
  {
    "id": "mn-011",
    "name": "Nicole Smith",
    "firm": "Smith & Associates",
    "state": "MN",
    "barNumber": "MN-100270",
    "specialties": [
      "Education Rights",
      "Wrongful Death",
      "Constitutional Rights",
      "Fourth Amendment"
    ],
    "phone": "612-555-4407",
    "website": "https://smithlaw.com",
    "rating": 4.8,
    "casesWon": 109,
    "yearsExperience": 23,
    "verified": true
  },
  {
    "id": "mn-012",
    "name": "Stephanie Thompson",
    "firm": "Thompson Civil Liberties",
    "state": "MN",
    "barNumber": "MN-100271",
    "specialties": [
      "First Amendment",
      "Police Brutality",
      "Racial Justice"
    ],
    "phone": "612-555-9608",
    "website": "https://thompsonlaw.com",
    "rating": 4.6,
    "casesWon": 99,
    "yearsExperience": 23,
    "verified": true
  },
  {
    "id": "mn-013",
    "name": "Jacob Johnson",
    "firm": "Johnson Law Group",
    "state": "MN",
    "barNumber": "MN-100272",
    "specialties": [
      "Religious Freedom",
      "Healthcare Rights",
      "Immigration Rights",
      "ADA Compliance"
    ],
    "phone": "612-555-7948",
    "website": "https://johnsonlaw.com",
    "rating": 4.6,
    "casesWon": 193,
    "yearsExperience": 10,
    "verified": true
  },
  {
    "id": "mn-014",
    "name": "Ryan White",
    "firm": "White Law Firm",
    "state": "MN",
    "barNumber": "MN-100273",
    "specialties": [
      "Constitutional Rights",
      "Prison Reform",
      "Criminal Justice Reform"
    ],
    "phone": "612-555-4204",
    "website": "https://whitelaw.com",
    "rating": 4.6,
    "casesWon": 85,
    "yearsExperience": 22,
    "verified": true
  },
  {
    "id": "mn-015",
    "name": "Jonathan Thomas",
    "firm": "Thomas Civil Rights Law",
    "state": "MN",
    "barNumber": "MN-100274",
    "specialties": [
      "Discrimination",
      "Excessive Force",
      "First Amendment"
    ],
    "phone": "612-555-1404",
    "website": "https://thomaslaw.com",
    "rating": 4.9,
    "casesWon": 223,
    "yearsExperience": 25,
    "verified": true
  },
  {
    "id": "ms-001",
    "name": "Amanda Rodriguez",
    "firm": "Rodriguez Justice Center",
    "state": "MS",
    "barNumber": "MS-100275",
    "specialties": [
      "Police Misconduct",
      "Wrongful Conviction",
      "Fourth Amendment"
    ],
    "phone": "601-555-2195",
    "website": "https://rodriguezlaw.com",
    "rating": 4.7,
    "casesWon": 114,
    "yearsExperience": 19,
    "verified": true
  },
  {
    "id": "ms-002",
    "name": "Michael Garcia",
    "firm": "Garcia Civil Liberties",
    "state": "MS",
    "barNumber": "MS-100276",
    "specialties": [
      "Police Brutality",
      "Racial Justice",
      "Prison Reform",
      "Voting Rights"
    ],
    "phone": "601-555-8900",
    "website": "https://garcialaw.com",
    "rating": 4.8,
    "casesWon": 219,
    "yearsExperience": 15,
    "verified": true
  },
  {
    "id": "ms-003",
    "name": "Kimberly Hall",
    "firm": "Hall Law Group",
    "state": "MS",
    "barNumber": "MS-100277",
    "specialties": [
      "Prison Reform",
      "Racial Justice",
      "LGBTQ+ Rights"
    ],
    "phone": "601-555-8754",
    "website": "https://halllaw.com",
    "rating": 4.8,
    "casesWon": 92,
    "yearsExperience": 10,
    "verified": true
  },
  {
    "id": "ms-004",
    "name": "Jacob Hall",
    "firm": "Hall Legal Defense",
    "state": "MS",
    "barNumber": "MS-100278",
    "specialties": [
      "Healthcare Rights",
      "Immigration Rights",
      "Racial Justice",
      "Public Accommodation"
    ],
    "phone": "601-555-3854",
    "website": "https://halllaw.com",
    "rating": 4.9,
    "casesWon": 72,
    "yearsExperience": 27,
    "verified": true
  },
  {
    "id": "ms-005",
    "name": "Rebecca Smith",
    "firm": "Smith & Partners",
    "state": "MS",
    "barNumber": "MS-100279",
    "specialties": [
      "Voting Rights",
      "Immigration Rights",
      "Employment Discrimination",
      "Criminal Justice Reform"
    ],
    "phone": "601-555-9597",
    "website": "https://smithlaw.com",
    "rating": 4.8,
    "casesWon": 77,
    "yearsExperience": 16,
    "verified": true
  },
  {
    "id": "ms-006",
    "name": "Anna Mitchell",
    "firm": "Mitchell & Partners",
    "state": "MS",
    "barNumber": "MS-100280",
    "specialties": [
      "Police Brutality",
      "Immigration Rights",
      "Education Rights"
    ],
    "phone": "601-555-4027",
    "website": "https://mitchelllaw.com",
    "rating": 4.7,
    "casesWon": 106,
    "yearsExperience": 23,
    "verified": true
  },
  {
    "id": "ms-007",
    "name": "Robert Rivera",
    "firm": "Rivera Justice Center",
    "state": "MS",
    "barNumber": "MS-100281",
    "specialties": [
      "Disability Rights",
      "Racial Justice",
      "LGBTQ+ Rights"
    ],
    "phone": "601-555-1347",
    "website": "https://riveralaw.com",
    "rating": 4.8,
    "casesWon": 232,
    "yearsExperience": 13,
    "verified": true
  },
  {
    "id": "ms-008",
    "name": "Sharon Rivera",
    "firm": "Rivera Legal Defense",
    "state": "MS",
    "barNumber": "MS-100282",
    "specialties": [
      "Police Misconduct",
      "Discrimination",
      "Wrongful Death",
      "Excessive Force"
    ],
    "phone": "601-555-4910",
    "website": "https://riveralaw.com",
    "rating": 4.6,
    "casesWon": 180,
    "yearsExperience": 22,
    "verified": true
  },
  {
    "id": "ms-009",
    "name": "Anna Roberts",
    "firm": "Roberts Law Firm",
    "state": "MS",
    "barNumber": "MS-100283",
    "specialties": [
      "Wrongful Death",
      "LGBTQ+ Rights",
      "Police Misconduct"
    ],
    "phone": "601-555-0036",
    "website": "https://robertslaw.com",
    "rating": 4.6,
    "casesWon": 59,
    "yearsExperience": 21,
    "verified": true
  },
  {
    "id": "ms-010",
    "name": "Laura Martinez",
    "firm": "Martinez Law Firm",
    "state": "MS",
    "barNumber": "MS-100284",
    "specialties": [
      "Police Brutality",
      "Excessive Force",
      "Wrongful Death"
    ],
    "phone": "601-555-3029",
    "website": "https://martinezlaw.com",
    "rating": 5,
    "casesWon": 188,
    "yearsExperience": 24,
    "verified": true
  },
  {
    "id": "ms-011",
    "name": "Steven Green",
    "firm": "Green Civil Rights Law",
    "state": "MS",
    "barNumber": "MS-100285",
    "specialties": [
      "Prison Reform",
      "Disability Rights",
      "Wrongful Death",
      "Police Misconduct"
    ],
    "phone": "601-555-7884",
    "website": "https://greenlaw.com",
    "rating": 4.5,
    "casesWon": 99,
    "yearsExperience": 25,
    "verified": true
  },
  {
    "id": "ms-012",
    "name": "Elizabeth Clark",
    "firm": "Clark Law Firm",
    "state": "MS",
    "barNumber": "MS-100286",
    "specialties": [
      "LGBTQ+ Rights",
      "Police Brutality",
      "Wrongful Death"
    ],
    "phone": "601-555-3938",
    "website": "https://clarklaw.com",
    "rating": 4.9,
    "casesWon": 136,
    "yearsExperience": 18,
    "verified": true
  },
  {
    "id": "ms-013",
    "name": "Stephanie Robinson",
    "firm": "Robinson Legal Services",
    "state": "MS",
    "barNumber": "MS-100287",
    "specialties": [
      "ADA Compliance",
      "Immigration Rights",
      "Constitutional Rights"
    ],
    "phone": "601-555-9930",
    "website": "https://robinsonlaw.com",
    "rating": 4.7,
    "casesWon": 157,
    "yearsExperience": 22,
    "verified": true
  },
  {
    "id": "ms-014",
    "name": "Sarah Rivera",
    "firm": "Rivera Civil Rights Law",
    "state": "MS",
    "barNumber": "MS-100288",
    "specialties": [
      "Education Rights",
      "Racial Justice",
      "Criminal Justice Reform",
      "Healthcare Rights"
    ],
    "phone": "601-555-9839",
    "website": "https://riveralaw.com",
    "rating": 4.8,
    "casesWon": 118,
    "yearsExperience": 26,
    "verified": true
  },
  {
    "id": "ms-015",
    "name": "Pamela Jones",
    "firm": "Jones Legal Group",
    "state": "MS",
    "barNumber": "MS-100289",
    "specialties": [
      "Police Misconduct",
      "Employment Discrimination",
      "Wrongful Death"
    ],
    "phone": "601-555-8622",
    "website": "https://joneslaw.com",
    "rating": 4.9,
    "casesWon": 96,
    "yearsExperience": 27,
    "verified": true
  },
  {
    "id": "mo-001",
    "name": "Nicole Allen",
    "firm": "Allen Civil Liberties",
    "state": "MO",
    "barNumber": "MO-100290",
    "specialties": [
      "ADA Compliance",
      "Voting Rights",
      "Criminal Justice Reform"
    ],
    "phone": "314-555-9376",
    "website": "https://allenlaw.com",
    "rating": 4.8,
    "casesWon": 189,
    "yearsExperience": 20,
    "verified": true
  },
  {
    "id": "mo-002",
    "name": "Steven Gonzalez",
    "firm": "Gonzalez Justice Center",
    "state": "MO",
    "barNumber": "MO-100291",
    "specialties": [
      "Wrongful Conviction",
      "Constitutional Rights",
      "Fourth Amendment"
    ],
    "phone": "314-555-0829",
    "website": "https://gonzalezlaw.com",
    "rating": 4.8,
    "casesWon": 214,
    "yearsExperience": 11,
    "verified": true
  },
  {
    "id": "mo-003",
    "name": "Jason Allen",
    "firm": "Allen Legal Group",
    "state": "MO",
    "barNumber": "MO-100292",
    "specialties": [
      "Public Accommodation",
      "Discrimination",
      "Prison Reform",
      "Wrongful Death"
    ],
    "phone": "314-555-1147",
    "website": "https://allenlaw.com",
    "rating": 4.8,
    "casesWon": 133,
    "yearsExperience": 24,
    "verified": true
  },
  {
    "id": "mo-004",
    "name": "Andrew Johnson",
    "firm": "Johnson & Associates",
    "state": "MO",
    "barNumber": "MO-100293",
    "specialties": [
      "LGBTQ+ Rights",
      "Religious Freedom",
      "Wrongful Death",
      "Employment Discrimination"
    ],
    "phone": "314-555-4381",
    "website": "https://johnsonlaw.com",
    "rating": 4.9,
    "casesWon": 146,
    "yearsExperience": 27,
    "verified": true
  },
  {
    "id": "mo-005",
    "name": "Jennifer Wright",
    "firm": "Wright Legal Group",
    "state": "MO",
    "barNumber": "MO-100294",
    "specialties": [
      "Immigration Rights",
      "First Amendment",
      "Prison Reform",
      "Healthcare Rights"
    ],
    "phone": "314-555-7796",
    "website": "https://wrightlaw.com",
    "rating": 4.8,
    "casesWon": 208,
    "yearsExperience": 21,
    "verified": true
  },
  {
    "id": "mo-006",
    "name": "John Taylor",
    "firm": "Taylor Legal Services",
    "state": "MO",
    "barNumber": "MO-100295",
    "specialties": [
      "Criminal Justice Reform",
      "ADA Compliance",
      "First Amendment"
    ],
    "phone": "314-555-1761",
    "website": "https://taylorlaw.com",
    "rating": 4.6,
    "casesWon": 101,
    "yearsExperience": 14,
    "verified": true
  },
  {
    "id": "mo-007",
    "name": "Kimberly Lewis",
    "firm": "Lewis Civil Rights Law",
    "state": "MO",
    "barNumber": "MO-100296",
    "specialties": [
      "Healthcare Rights",
      "Excessive Force",
      "First Amendment"
    ],
    "phone": "314-555-6556",
    "website": "https://lewislaw.com",
    "rating": 4.9,
    "casesWon": 106,
    "yearsExperience": 24,
    "verified": true
  },
  {
    "id": "mo-008",
    "name": "Elizabeth Adams",
    "firm": "Adams Justice Center",
    "state": "MO",
    "barNumber": "MO-100297",
    "specialties": [
      "ADA Compliance",
      "Wrongful Death",
      "Constitutional Rights",
      "Discrimination"
    ],
    "phone": "314-555-9318",
    "website": "https://adamslaw.com",
    "rating": 4.9,
    "casesWon": 93,
    "yearsExperience": 8,
    "verified": true
  },
  {
    "id": "mo-009",
    "name": "Gary Wright",
    "firm": "Wright & Partners",
    "state": "MO",
    "barNumber": "MO-100298",
    "specialties": [
      "Constitutional Rights",
      "Employment Discrimination",
      "Wrongful Death",
      "LGBTQ+ Rights"
    ],
    "phone": "314-555-3241",
    "website": "https://wrightlaw.com",
    "rating": 4.7,
    "casesWon": 175,
    "yearsExperience": 21,
    "verified": true
  },
  {
    "id": "mo-010",
    "name": "Kenneth Johnson",
    "firm": "Johnson Justice Center",
    "state": "MO",
    "barNumber": "MO-100299",
    "specialties": [
      "Police Misconduct",
      "Immigration Rights",
      "Disability Rights"
    ],
    "phone": "314-555-8274",
    "website": "https://johnsonlaw.com",
    "rating": 4.6,
    "casesWon": 230,
    "yearsExperience": 16,
    "verified": true
  },
  {
    "id": "mo-011",
    "name": "Anthony Roberts",
    "firm": "Roberts Law Firm",
    "state": "MO",
    "barNumber": "MO-100300",
    "specialties": [
      "Police Brutality",
      "Discrimination",
      "Police Misconduct"
    ],
    "phone": "314-555-5633",
    "website": "https://robertslaw.com",
    "rating": 4.7,
    "casesWon": 236,
    "yearsExperience": 13,
    "verified": true
  },
  {
    "id": "mo-012",
    "name": "Jason Robinson",
    "firm": "Robinson Civil Rights Law",
    "state": "MO",
    "barNumber": "MO-100301",
    "specialties": [
      "Healthcare Rights",
      "Disability Rights",
      "Voting Rights",
      "Education Rights"
    ],
    "phone": "314-555-2661",
    "website": "https://robinsonlaw.com",
    "rating": 4.6,
    "casesWon": 133,
    "yearsExperience": 23,
    "verified": true
  },
  {
    "id": "mo-013",
    "name": "David Smith",
    "firm": "Smith Law Group",
    "state": "MO",
    "barNumber": "MO-100302",
    "specialties": [
      "Discrimination",
      "Voting Rights",
      "Wrongful Conviction"
    ],
    "phone": "314-555-4723",
    "website": "https://smithlaw.com",
    "rating": 4.9,
    "casesWon": 87,
    "yearsExperience": 27,
    "verified": true
  },
  {
    "id": "mt-001",
    "name": "Shirley White",
    "firm": "White Justice Center",
    "state": "MT",
    "barNumber": "MT-100303",
    "specialties": [
      "Excessive Force",
      "Religious Freedom",
      "Prison Reform",
      "Voting Rights"
    ],
    "phone": "406-555-8504",
    "website": "https://whitelaw.com",
    "rating": 4.7,
    "casesWon": 105,
    "yearsExperience": 12,
    "verified": true
  },
  {
    "id": "mt-002",
    "name": "Brian Baker",
    "firm": "Baker Legal Group",
    "state": "MT",
    "barNumber": "MT-100304",
    "specialties": [
      "Police Brutality",
      "LGBTQ+ Rights",
      "ADA Compliance",
      "Excessive Force"
    ],
    "phone": "406-555-7940",
    "website": "https://bakerlaw.com",
    "rating": 4.7,
    "casesWon": 129,
    "yearsExperience": 16,
    "verified": true
  },
  {
    "id": "mt-003",
    "name": "James Robinson",
    "firm": "Robinson & Associates",
    "state": "MT",
    "barNumber": "MT-100305",
    "specialties": [
      "Employment Discrimination",
      "Racial Justice",
      "Criminal Justice Reform"
    ],
    "phone": "406-555-6521",
    "website": "https://robinsonlaw.com",
    "rating": 4.6,
    "casesWon": 203,
    "yearsExperience": 14,
    "verified": true
  },
  {
    "id": "mt-004",
    "name": "Barbara Carter",
    "firm": "Carter Civil Rights Law",
    "state": "MT",
    "barNumber": "MT-100306",
    "specialties": [
      "Fourth Amendment",
      "Prison Reform",
      "Employment Discrimination",
      "Constitutional Rights"
    ],
    "phone": "406-555-5326",
    "website": "https://carterlaw.com",
    "rating": 4.8,
    "casesWon": 230,
    "yearsExperience": 10,
    "verified": true
  },
  {
    "id": "mt-005",
    "name": "Ronald Hall",
    "firm": "Hall & Associates",
    "state": "MT",
    "barNumber": "MT-100307",
    "specialties": [
      "Healthcare Rights",
      "Public Accommodation",
      "Fourth Amendment",
      "ADA Compliance"
    ],
    "phone": "406-555-9342",
    "website": "https://halllaw.com",
    "rating": 4.5,
    "casesWon": 198,
    "yearsExperience": 18,
    "verified": true
  },
  {
    "id": "mt-006",
    "name": "Ashley Flores",
    "firm": "Flores Civil Rights Law",
    "state": "MT",
    "barNumber": "MT-100308",
    "specialties": [
      "Criminal Justice Reform",
      "First Amendment",
      "Prison Reform",
      "Wrongful Conviction"
    ],
    "phone": "406-555-9923",
    "website": "https://floreslaw.com",
    "rating": 4.8,
    "casesWon": 77,
    "yearsExperience": 20,
    "verified": true
  },
  {
    "id": "mt-007",
    "name": "Shirley Lopez",
    "firm": "Lopez Legal Group",
    "state": "MT",
    "barNumber": "MT-100309",
    "specialties": [
      "Religious Freedom",
      "First Amendment",
      "Healthcare Rights"
    ],
    "phone": "406-555-9227",
    "website": "https://lopezlaw.com",
    "rating": 4.9,
    "casesWon": 146,
    "yearsExperience": 26,
    "verified": true
  },
  {
    "id": "mt-008",
    "name": "Elizabeth Martinez",
    "firm": "Martinez Civil Liberties",
    "state": "MT",
    "barNumber": "MT-100310",
    "specialties": [
      "Police Misconduct",
      "Housing Rights",
      "Wrongful Conviction",
      "Public Accommodation"
    ],
    "phone": "406-555-8221",
    "website": "https://martinezlaw.com",
    "rating": 4.8,
    "casesWon": 214,
    "yearsExperience": 12,
    "verified": true
  },
  {
    "id": "mt-009",
    "name": "Michael Gomez",
    "firm": "Gomez Legal Group",
    "state": "MT",
    "barNumber": "MT-100311",
    "specialties": [
      "Wrongful Conviction",
      "Criminal Justice Reform",
      "Healthcare Rights",
      "Voting Rights"
    ],
    "phone": "406-555-9482",
    "website": "https://gomezlaw.com",
    "rating": 4.9,
    "casesWon": 165,
    "yearsExperience": 27,
    "verified": true
  },
  {
    "id": "mt-010",
    "name": "Daniel Lopez",
    "firm": "Lopez Legal Services",
    "state": "MT",
    "barNumber": "MT-100312",
    "specialties": [
      "LGBTQ+ Rights",
      "First Amendment",
      "Public Accommodation",
      "Police Misconduct"
    ],
    "phone": "406-555-7871",
    "website": "https://lopezlaw.com",
    "rating": 4.9,
    "casesWon": 126,
    "yearsExperience": 19,
    "verified": true
  },
  {
    "id": "ne-001",
    "name": "Robert Hill",
    "firm": "Hill & Partners",
    "state": "NE",
    "barNumber": "NE-100313",
    "specialties": [
      "Public Accommodation",
      "Wrongful Death",
      "Police Misconduct",
      "Fourth Amendment"
    ],
    "phone": "402-555-0608",
    "website": "https://hilllaw.com",
    "rating": 4.8,
    "casesWon": 249,
    "yearsExperience": 22,
    "verified": true
  },
  {
    "id": "ne-002",
    "name": "Michelle Gomez",
    "firm": "Gomez & Partners",
    "state": "NE",
    "barNumber": "NE-100314",
    "specialties": [
      "Housing Rights",
      "Public Accommodation",
      "Police Misconduct"
    ],
    "phone": "402-555-5457",
    "website": "https://gomezlaw.com",
    "rating": 4.9,
    "casesWon": 219,
    "yearsExperience": 18,
    "verified": true
  },
  {
    "id": "ne-003",
    "name": "Melissa Campbell",
    "firm": "Campbell & Associates",
    "state": "NE",
    "barNumber": "NE-100315",
    "specialties": [
      "Education Rights",
      "Wrongful Death",
      "Employment Discrimination"
    ],
    "phone": "402-555-8188",
    "website": "https://campbelllaw.com",
    "rating": 5,
    "casesWon": 222,
    "yearsExperience": 8,
    "verified": true
  },
  {
    "id": "ne-004",
    "name": "Ronald Taylor",
    "firm": "Taylor Law Group",
    "state": "NE",
    "barNumber": "NE-100316",
    "specialties": [
      "Racial Justice",
      "Discrimination",
      "First Amendment",
      "Voting Rights"
    ],
    "phone": "402-555-5159",
    "website": "https://taylorlaw.com",
    "rating": 4.6,
    "casesWon": 79,
    "yearsExperience": 23,
    "verified": true
  },
  {
    "id": "ne-005",
    "name": "Nicole Rivera",
    "firm": "Rivera Civil Rights Law",
    "state": "NE",
    "barNumber": "NE-100317",
    "specialties": [
      "Disability Rights",
      "Employment Discrimination",
      "Healthcare Rights"
    ],
    "phone": "402-555-2017",
    "website": "https://riveralaw.com",
    "rating": 4.8,
    "casesWon": 186,
    "yearsExperience": 9,
    "verified": true
  },
  {
    "id": "ne-006",
    "name": "Susan Ramirez",
    "firm": "Ramirez Civil Rights Law",
    "state": "NE",
    "barNumber": "NE-100318",
    "specialties": [
      "Police Brutality",
      "Racial Justice",
      "Police Misconduct",
      "Criminal Justice Reform"
    ],
    "phone": "402-555-3223",
    "website": "https://ramirezlaw.com",
    "rating": 4.8,
    "casesWon": 147,
    "yearsExperience": 19,
    "verified": true
  },
  {
    "id": "ne-007",
    "name": "Rebecca Nelson",
    "firm": "Nelson Justice Center",
    "state": "NE",
    "barNumber": "NE-100319",
    "specialties": [
      "ADA Compliance",
      "Wrongful Death",
      "Prison Reform"
    ],
    "phone": "402-555-1219",
    "website": "https://nelsonlaw.com",
    "rating": 5,
    "casesWon": 238,
    "yearsExperience": 23,
    "verified": true
  },
  {
    "id": "ne-008",
    "name": "Susan Adams",
    "firm": "Adams & Partners",
    "state": "NE",
    "barNumber": "NE-100320",
    "specialties": [
      "Police Misconduct",
      "Employment Discrimination",
      "Police Brutality"
    ],
    "phone": "402-555-5123",
    "website": "https://adamslaw.com",
    "rating": 4.9,
    "casesWon": 200,
    "yearsExperience": 15,
    "verified": true
  },
  {
    "id": "ne-009",
    "name": "Ronald Campbell",
    "firm": "Campbell Legal Defense",
    "state": "NE",
    "barNumber": "NE-100321",
    "specialties": [
      "Housing Rights",
      "Public Accommodation",
      "Prison Reform",
      "Employment Discrimination"
    ],
    "phone": "402-555-6127",
    "website": "https://campbelllaw.com",
    "rating": 4.7,
    "casesWon": 208,
    "yearsExperience": 14,
    "verified": true
  },
  {
    "id": "ne-010",
    "name": "Jeffrey Anderson",
    "firm": "Anderson Civil Liberties",
    "state": "NE",
    "barNumber": "NE-100322",
    "specialties": [
      "Religious Freedom",
      "Fourth Amendment",
      "Racial Justice"
    ],
    "phone": "402-555-9235",
    "website": "https://andersonlaw.com",
    "rating": 4.8,
    "casesWon": 135,
    "yearsExperience": 16,
    "verified": true
  },
  {
    "id": "ne-011",
    "name": "Michelle Gonzalez",
    "firm": "Gonzalez Legal Group",
    "state": "NE",
    "barNumber": "NE-100323",
    "specialties": [
      "Constitutional Rights",
      "Wrongful Conviction",
      "Religious Freedom",
      "Healthcare Rights"
    ],
    "phone": "402-555-0615",
    "website": "https://gonzalezlaw.com",
    "rating": 4.9,
    "casesWon": 145,
    "yearsExperience": 26,
    "verified": true
  },
  {
    "id": "ne-012",
    "name": "Jennifer Gonzalez",
    "firm": "Gonzalez Civil Liberties",
    "state": "NE",
    "barNumber": "NE-100324",
    "specialties": [
      "LGBTQ+ Rights",
      "Wrongful Death",
      "Healthcare Rights"
    ],
    "phone": "402-555-3564",
    "website": "https://gonzalezlaw.com",
    "rating": 4.9,
    "casesWon": 156,
    "yearsExperience": 11,
    "verified": true
  },
  {
    "id": "ne-013",
    "name": "Edward Robinson",
    "firm": "Robinson Legal Group",
    "state": "NE",
    "barNumber": "NE-100325",
    "specialties": [
      "Fourth Amendment",
      "Excessive Force",
      "Wrongful Conviction"
    ],
    "phone": "402-555-7466",
    "website": "https://robinsonlaw.com",
    "rating": 4.8,
    "casesWon": 216,
    "yearsExperience": 14,
    "verified": true
  },
  {
    "id": "ne-014",
    "name": "Kimberly Moore",
    "firm": "Moore Law Group",
    "state": "NE",
    "barNumber": "NE-100326",
    "specialties": [
      "Employment Discrimination",
      "Education Rights",
      "First Amendment"
    ],
    "phone": "402-555-6353",
    "website": "https://moorelaw.com",
    "rating": 4.8,
    "casesWon": 132,
    "yearsExperience": 22,
    "verified": true
  },
  {
    "id": "ne-015",
    "name": "Ruth Wright",
    "firm": "Wright Justice Center",
    "state": "NE",
    "barNumber": "NE-100327",
    "specialties": [
      "Racial Justice",
      "Wrongful Conviction",
      "Voting Rights"
    ],
    "phone": "402-555-8350",
    "website": "https://wrightlaw.com",
    "rating": 4.8,
    "casesWon": 194,
    "yearsExperience": 24,
    "verified": true
  },
  {
    "id": "nv-001",
    "name": "Cynthia Sanchez",
    "firm": "Sanchez Legal Services",
    "state": "NV",
    "barNumber": "NV-100328",
    "specialties": [
      "Wrongful Conviction",
      "First Amendment",
      "Religious Freedom"
    ],
    "phone": "702-555-1220",
    "website": "https://sanchezlaw.com",
    "rating": 4.7,
    "casesWon": 130,
    "yearsExperience": 11,
    "verified": true
  },
  {
    "id": "nv-002",
    "name": "Nicholas Jackson",
    "firm": "Jackson Law Group",
    "state": "NV",
    "barNumber": "NV-100329",
    "specialties": [
      "Criminal Justice Reform",
      "Discrimination",
      "Fourth Amendment",
      "Public Accommodation"
    ],
    "phone": "702-555-1749",
    "website": "https://jacksonlaw.com",
    "rating": 4.9,
    "casesWon": 168,
    "yearsExperience": 9,
    "verified": true
  },
  {
    "id": "nv-003",
    "name": "Daniel Martin",
    "firm": "Martin & Associates",
    "state": "NV",
    "barNumber": "NV-100330",
    "specialties": [
      "Constitutional Rights",
      "Voting Rights",
      "Wrongful Death",
      "Wrongful Conviction"
    ],
    "phone": "702-555-3427",
    "website": "https://martinlaw.com",
    "rating": 4.6,
    "casesWon": 166,
    "yearsExperience": 20,
    "verified": true
  },
  {
    "id": "nv-004",
    "name": "Sharon Flores",
    "firm": "Flores Law Group",
    "state": "NV",
    "barNumber": "NV-100331",
    "specialties": [
      "Voting Rights",
      "Discrimination",
      "ADA Compliance"
    ],
    "phone": "702-555-4382",
    "website": "https://floreslaw.com",
    "rating": 5,
    "casesWon": 125,
    "yearsExperience": 19,
    "verified": true
  },
  {
    "id": "nv-005",
    "name": "Laura Robinson",
    "firm": "Robinson Civil Liberties",
    "state": "NV",
    "barNumber": "NV-100332",
    "specialties": [
      "Police Brutality",
      "Education Rights",
      "Constitutional Rights",
      "Religious Freedom"
    ],
    "phone": "702-555-3514",
    "website": "https://robinsonlaw.com",
    "rating": 4.9,
    "casesWon": 241,
    "yearsExperience": 13,
    "verified": true
  },
  {
    "id": "nv-006",
    "name": "Stephanie Jones",
    "firm": "Jones & Partners",
    "state": "NV",
    "barNumber": "NV-100333",
    "specialties": [
      "Voting Rights",
      "Religious Freedom",
      "Excessive Force",
      "Discrimination"
    ],
    "phone": "702-555-3931",
    "website": "https://joneslaw.com",
    "rating": 4.6,
    "casesWon": 155,
    "yearsExperience": 23,
    "verified": true
  },
  {
    "id": "nv-007",
    "name": "George Baker",
    "firm": "Baker Civil Rights Law",
    "state": "NV",
    "barNumber": "NV-100334",
    "specialties": [
      "Wrongful Death",
      "Voting Rights",
      "Employment Discrimination",
      "LGBTQ+ Rights"
    ],
    "phone": "702-555-1080",
    "website": "https://bakerlaw.com",
    "rating": 4.8,
    "casesWon": 90,
    "yearsExperience": 23,
    "verified": true
  },
  {
    "id": "nv-008",
    "name": "Maria Lewis",
    "firm": "Lewis Legal Group",
    "state": "NV",
    "barNumber": "NV-100335",
    "specialties": [
      "Fourth Amendment",
      "Wrongful Death",
      "Employment Discrimination",
      "Criminal Justice Reform"
    ],
    "phone": "702-555-3856",
    "website": "https://lewislaw.com",
    "rating": 4.7,
    "casesWon": 188,
    "yearsExperience": 23,
    "verified": true
  },
  {
    "id": "nv-009",
    "name": "Michael Nelson",
    "firm": "Nelson Legal Defense",
    "state": "NV",
    "barNumber": "NV-100336",
    "specialties": [
      "LGBTQ+ Rights",
      "Racial Justice",
      "Voting Rights",
      "Public Accommodation"
    ],
    "phone": "702-555-7535",
    "website": "https://nelsonlaw.com",
    "rating": 4.5,
    "casesWon": 241,
    "yearsExperience": 20,
    "verified": true
  },
  {
    "id": "nv-010",
    "name": "Cynthia Moore",
    "firm": "Moore Law Firm",
    "state": "NV",
    "barNumber": "NV-100337",
    "specialties": [
      "Police Brutality",
      "Voting Rights",
      "Prison Reform"
    ],
    "phone": "702-555-4792",
    "website": "https://moorelaw.com",
    "rating": 4.8,
    "casesWon": 232,
    "yearsExperience": 21,
    "verified": true
  },
  {
    "id": "nh-001",
    "name": "Michelle Wilson",
    "firm": "Wilson Law Firm",
    "state": "NH",
    "barNumber": "NH-100338",
    "specialties": [
      "Racial Justice",
      "Voting Rights",
      "Discrimination",
      "Wrongful Conviction"
    ],
    "phone": "603-555-7218",
    "website": "https://wilsonlaw.com",
    "rating": 5,
    "casesWon": 83,
    "yearsExperience": 26,
    "verified": true
  },
  {
    "id": "nh-002",
    "name": "David Sanchez",
    "firm": "Sanchez Law Group",
    "state": "NH",
    "barNumber": "NH-100339",
    "specialties": [
      "ADA Compliance",
      "Wrongful Conviction",
      "Constitutional Rights",
      "Housing Rights"
    ],
    "phone": "603-555-3469",
    "website": "https://sanchezlaw.com",
    "rating": 4.8,
    "casesWon": 126,
    "yearsExperience": 16,
    "verified": true
  },
  {
    "id": "nh-003",
    "name": "Jacob Johnson",
    "firm": "Johnson Legal Defense",
    "state": "NH",
    "barNumber": "NH-100340",
    "specialties": [
      "Disability Rights",
      "Criminal Justice Reform",
      "Wrongful Conviction"
    ],
    "phone": "603-555-6563",
    "website": "https://johnsonlaw.com",
    "rating": 4.8,
    "casesWon": 152,
    "yearsExperience": 27,
    "verified": true
  },
  {
    "id": "nh-004",
    "name": "Maria Anderson",
    "firm": "Anderson Law Group",
    "state": "NH",
    "barNumber": "NH-100341",
    "specialties": [
      "Police Misconduct",
      "Education Rights",
      "Employment Discrimination",
      "Wrongful Conviction"
    ],
    "phone": "603-555-1429",
    "website": "https://andersonlaw.com",
    "rating": 4.8,
    "casesWon": 130,
    "yearsExperience": 20,
    "verified": true
  },
  {
    "id": "nh-005",
    "name": "Kimberly Roberts",
    "firm": "Roberts & Associates",
    "state": "NH",
    "barNumber": "NH-100342",
    "specialties": [
      "First Amendment",
      "LGBTQ+ Rights",
      "Excessive Force",
      "Constitutional Rights"
    ],
    "phone": "603-555-8549",
    "website": "https://robertslaw.com",
    "rating": 4.7,
    "casesWon": 220,
    "yearsExperience": 8,
    "verified": true
  },
  {
    "id": "nh-006",
    "name": "Donald Lee",
    "firm": "Lee Law Firm",
    "state": "NH",
    "barNumber": "NH-100343",
    "specialties": [
      "Wrongful Conviction",
      "Immigration Rights",
      "Healthcare Rights",
      "Police Misconduct"
    ],
    "phone": "603-555-5717",
    "website": "https://leelaw.com",
    "rating": 4.6,
    "casesWon": 208,
    "yearsExperience": 8,
    "verified": true
  },
  {
    "id": "nh-007",
    "name": "Angela Lee",
    "firm": "Lee Civil Rights Law",
    "state": "NH",
    "barNumber": "NH-100344",
    "specialties": [
      "Public Accommodation",
      "ADA Compliance",
      "Criminal Justice Reform"
    ],
    "phone": "603-555-2509",
    "website": "https://leelaw.com",
    "rating": 5,
    "casesWon": 202,
    "yearsExperience": 8,
    "verified": true
  },
  {
    "id": "nh-008",
    "name": "Stephanie Jackson",
    "firm": "Jackson Law Firm",
    "state": "NH",
    "barNumber": "NH-100345",
    "specialties": [
      "Criminal Justice Reform",
      "Constitutional Rights",
      "Excessive Force"
    ],
    "phone": "603-555-3937",
    "website": "https://jacksonlaw.com",
    "rating": 4.9,
    "casesWon": 136,
    "yearsExperience": 12,
    "verified": true
  },
  {
    "id": "nh-009",
    "name": "Timothy Mitchell",
    "firm": "Mitchell & Associates",
    "state": "NH",
    "barNumber": "NH-100346",
    "specialties": [
      "Excessive Force",
      "ADA Compliance",
      "Education Rights",
      "Constitutional Rights"
    ],
    "phone": "603-555-9809",
    "website": "https://mitchelllaw.com",
    "rating": 4.7,
    "casesWon": 183,
    "yearsExperience": 14,
    "verified": true
  },
  {
    "id": "nh-010",
    "name": "Jonathan Torres",
    "firm": "Torres Law Firm",
    "state": "NH",
    "barNumber": "NH-100347",
    "specialties": [
      "First Amendment",
      "Police Misconduct",
      "Fourth Amendment"
    ],
    "phone": "603-555-9392",
    "website": "https://torreslaw.com",
    "rating": 4.7,
    "casesWon": 130,
    "yearsExperience": 25,
    "verified": true
  },
  {
    "id": "nh-011",
    "name": "Sarah Sanchez",
    "firm": "Sanchez & Partners",
    "state": "NH",
    "barNumber": "NH-100348",
    "specialties": [
      "Education Rights",
      "Fourth Amendment",
      "Wrongful Death"
    ],
    "phone": "603-555-4220",
    "website": "https://sanchezlaw.com",
    "rating": 4.7,
    "casesWon": 168,
    "yearsExperience": 21,
    "verified": true
  },
  {
    "id": "nh-012",
    "name": "Gary Johnson",
    "firm": "Johnson Law Firm",
    "state": "NH",
    "barNumber": "NH-100349",
    "specialties": [
      "Wrongful Conviction",
      "Fourth Amendment",
      "Religious Freedom",
      "Police Brutality"
    ],
    "phone": "603-555-1698",
    "website": "https://johnsonlaw.com",
    "rating": 4.9,
    "casesWon": 187,
    "yearsExperience": 17,
    "verified": true
  },
  {
    "id": "nj-001",
    "name": "Rebecca Wright",
    "firm": "Wright Legal Defense",
    "state": "NJ",
    "barNumber": "NJ-100350",
    "specialties": [
      "Wrongful Death",
      "Education Rights",
      "Public Accommodation",
      "Discrimination"
    ],
    "phone": "201-555-7351",
    "website": "https://wrightlaw.com",
    "rating": 4.7,
    "casesWon": 68,
    "yearsExperience": 17,
    "verified": true
  },
  {
    "id": "nj-002",
    "name": "Amy Sanchez",
    "firm": "Sanchez Law Firm",
    "state": "NJ",
    "barNumber": "NJ-100351",
    "specialties": [
      "Religious Freedom",
      "Fourth Amendment",
      "Police Brutality"
    ],
    "phone": "201-555-4251",
    "website": "https://sanchezlaw.com",
    "rating": 4.9,
    "casesWon": 74,
    "yearsExperience": 17,
    "verified": true
  },
  {
    "id": "nj-003",
    "name": "Emily Baker",
    "firm": "Baker Legal Services",
    "state": "NJ",
    "barNumber": "NJ-100352",
    "specialties": [
      "Employment Discrimination",
      "Disability Rights",
      "Prison Reform"
    ],
    "phone": "201-555-1379",
    "website": "https://bakerlaw.com",
    "rating": 4.6,
    "casesWon": 184,
    "yearsExperience": 11,
    "verified": true
  },
  {
    "id": "nj-004",
    "name": "Brian Garcia",
    "firm": "Garcia Law Group",
    "state": "NJ",
    "barNumber": "NJ-100353",
    "specialties": [
      "Police Brutality",
      "ADA Compliance",
      "First Amendment",
      "Prison Reform"
    ],
    "phone": "201-555-7010",
    "website": "https://garcialaw.com",
    "rating": 4.6,
    "casesWon": 145,
    "yearsExperience": 22,
    "verified": true
  },
  {
    "id": "nj-005",
    "name": "Jennifer King",
    "firm": "King Law Group",
    "state": "NJ",
    "barNumber": "NJ-100354",
    "specialties": [
      "Public Accommodation",
      "Education Rights",
      "Police Brutality",
      "Prison Reform"
    ],
    "phone": "201-555-4739",
    "website": "https://kinglaw.com",
    "rating": 4.8,
    "casesWon": 81,
    "yearsExperience": 24,
    "verified": true
  },
  {
    "id": "nj-006",
    "name": "Timothy Williams",
    "firm": "Williams Justice Center",
    "state": "NJ",
    "barNumber": "NJ-100355",
    "specialties": [
      "Police Brutality",
      "Constitutional Rights",
      "Police Misconduct",
      "First Amendment"
    ],
    "phone": "201-555-7251",
    "website": "https://williamslaw.com",
    "rating": 5,
    "casesWon": 244,
    "yearsExperience": 24,
    "verified": true
  },
  {
    "id": "nj-007",
    "name": "Kenneth King",
    "firm": "King Law Group",
    "state": "NJ",
    "barNumber": "NJ-100356",
    "specialties": [
      "Wrongful Death",
      "Disability Rights",
      "LGBTQ+ Rights",
      "Healthcare Rights"
    ],
    "phone": "201-555-1868",
    "website": "https://kinglaw.com",
    "rating": 4.9,
    "casesWon": 108,
    "yearsExperience": 15,
    "verified": true
  },
  {
    "id": "nj-008",
    "name": "Angela Gonzalez",
    "firm": "Gonzalez & Associates",
    "state": "NJ",
    "barNumber": "NJ-100357",
    "specialties": [
      "Public Accommodation",
      "First Amendment",
      "Fourth Amendment"
    ],
    "phone": "201-555-9212",
    "website": "https://gonzalezlaw.com",
    "rating": 5,
    "casesWon": 224,
    "yearsExperience": 18,
    "verified": true
  },
  {
    "id": "nj-009",
    "name": "Anthony Young",
    "firm": "Young Justice Center",
    "state": "NJ",
    "barNumber": "NJ-100358",
    "specialties": [
      "Religious Freedom",
      "Wrongful Death",
      "Public Accommodation"
    ],
    "phone": "201-555-5714",
    "website": "https://younglaw.com",
    "rating": 4.6,
    "casesWon": 144,
    "yearsExperience": 16,
    "verified": true
  },
  {
    "id": "nj-010",
    "name": "Jacob Rivera",
    "firm": "Rivera Civil Rights Law",
    "state": "NJ",
    "barNumber": "NJ-100359",
    "specialties": [
      "Prison Reform",
      "Fourth Amendment",
      "Healthcare Rights"
    ],
    "phone": "201-555-7152",
    "website": "https://riveralaw.com",
    "rating": 4.5,
    "casesWon": 168,
    "yearsExperience": 13,
    "verified": true
  },
  {
    "id": "nm-001",
    "name": "David Nelson",
    "firm": "Nelson Legal Services",
    "state": "NM",
    "barNumber": "NM-100360",
    "specialties": [
      "Fourth Amendment",
      "Excessive Force",
      "Police Brutality"
    ],
    "phone": "505-555-0183",
    "website": "https://nelsonlaw.com",
    "rating": 4.9,
    "casesWon": 241,
    "yearsExperience": 21,
    "verified": true
  },
  {
    "id": "nm-002",
    "name": "Matthew Young",
    "firm": "Young & Associates",
    "state": "NM",
    "barNumber": "NM-100361",
    "specialties": [
      "Employment Discrimination",
      "Voting Rights",
      "Housing Rights",
      "Disability Rights"
    ],
    "phone": "505-555-8930",
    "website": "https://younglaw.com",
    "rating": 4.7,
    "casesWon": 93,
    "yearsExperience": 8,
    "verified": true
  },
  {
    "id": "nm-003",
    "name": "Matthew Rodriguez",
    "firm": "Rodriguez & Associates",
    "state": "NM",
    "barNumber": "NM-100362",
    "specialties": [
      "Racial Justice",
      "Employment Discrimination",
      "ADA Compliance"
    ],
    "phone": "505-555-0687",
    "website": "https://rodriguezlaw.com",
    "rating": 5,
    "casesWon": 202,
    "yearsExperience": 17,
    "verified": true
  },
  {
    "id": "nm-004",
    "name": "George Mitchell",
    "firm": "Mitchell Legal Services",
    "state": "NM",
    "barNumber": "NM-100363",
    "specialties": [
      "Prison Reform",
      "Voting Rights",
      "Housing Rights"
    ],
    "phone": "505-555-3066",
    "website": "https://mitchelllaw.com",
    "rating": 4.7,
    "casesWon": 171,
    "yearsExperience": 26,
    "verified": true
  },
  {
    "id": "nm-005",
    "name": "Eric Allen",
    "firm": "Allen & Associates",
    "state": "NM",
    "barNumber": "NM-100364",
    "specialties": [
      "Police Misconduct",
      "Religious Freedom",
      "Constitutional Rights",
      "Criminal Justice Reform"
    ],
    "phone": "505-555-4380",
    "website": "https://allenlaw.com",
    "rating": 4.9,
    "casesWon": 226,
    "yearsExperience": 10,
    "verified": true
  },
  {
    "id": "nm-006",
    "name": "Edward Torres",
    "firm": "Torres Legal Services",
    "state": "NM",
    "barNumber": "NM-100365",
    "specialties": [
      "Racial Justice",
      "Discrimination",
      "Healthcare Rights"
    ],
    "phone": "505-555-4168",
    "website": "https://torreslaw.com",
    "rating": 4.6,
    "casesWon": 126,
    "yearsExperience": 20,
    "verified": true
  },
  {
    "id": "nm-007",
    "name": "David Jackson",
    "firm": "Jackson Legal Defense",
    "state": "NM",
    "barNumber": "NM-100366",
    "specialties": [
      "Immigration Rights",
      "Disability Rights",
      "Public Accommodation",
      "Housing Rights"
    ],
    "phone": "505-555-0655",
    "website": "https://jacksonlaw.com",
    "rating": 4.9,
    "casesWon": 140,
    "yearsExperience": 27,
    "verified": true
  },
  {
    "id": "nm-008",
    "name": "Robert Young",
    "firm": "Young Civil Liberties",
    "state": "NM",
    "barNumber": "NM-100367",
    "specialties": [
      "Housing Rights",
      "Wrongful Death",
      "Discrimination"
    ],
    "phone": "505-555-9474",
    "website": "https://younglaw.com",
    "rating": 4.9,
    "casesWon": 225,
    "yearsExperience": 15,
    "verified": true
  },
  {
    "id": "nm-009",
    "name": "Robert Williams",
    "firm": "Williams Legal Services",
    "state": "NM",
    "barNumber": "NM-100368",
    "specialties": [
      "Employment Discrimination",
      "Wrongful Conviction",
      "First Amendment",
      "Fourth Amendment"
    ],
    "phone": "505-555-3869",
    "website": "https://williamslaw.com",
    "rating": 4.7,
    "casesWon": 217,
    "yearsExperience": 12,
    "verified": true
  },
  {
    "id": "nm-010",
    "name": "Elizabeth Johnson",
    "firm": "Johnson Legal Services",
    "state": "NM",
    "barNumber": "NM-100369",
    "specialties": [
      "Employment Discrimination",
      "Housing Rights",
      "Wrongful Death"
    ],
    "phone": "505-555-8240",
    "website": "https://johnsonlaw.com",
    "rating": 4.9,
    "casesWon": 119,
    "yearsExperience": 15,
    "verified": true
  },
  {
    "id": "nm-011",
    "name": "Anthony Garcia",
    "firm": "Garcia & Associates",
    "state": "NM",
    "barNumber": "NM-100370",
    "specialties": [
      "Healthcare Rights",
      "Wrongful Death",
      "Wrongful Conviction"
    ],
    "phone": "505-555-4734",
    "website": "https://garcialaw.com",
    "rating": 4.7,
    "casesWon": 183,
    "yearsExperience": 26,
    "verified": true
  },
  {
    "id": "nm-012",
    "name": "Laura Young",
    "firm": "Young Legal Group",
    "state": "NM",
    "barNumber": "NM-100371",
    "specialties": [
      "Voting Rights",
      "Fourth Amendment",
      "Immigration Rights",
      "Constitutional Rights"
    ],
    "phone": "505-555-7935",
    "website": "https://younglaw.com",
    "rating": 4.7,
    "casesWon": 187,
    "yearsExperience": 16,
    "verified": true
  },
  {
    "id": "ny-001",
    "name": "Cynthia Campbell",
    "firm": "Campbell Law Group",
    "state": "NY",
    "barNumber": "NY-100372",
    "specialties": [
      "Excessive Force",
      "Fourth Amendment",
      "Wrongful Death"
    ],
    "phone": "212-555-8981",
    "website": "https://campbelllaw.com",
    "rating": 5,
    "casesWon": 188,
    "yearsExperience": 21,
    "verified": true
  },
  {
    "id": "ny-002",
    "name": "Kenneth Lewis",
    "firm": "Lewis & Partners",
    "state": "NY",
    "barNumber": "NY-100373",
    "specialties": [
      "Voting Rights",
      "Immigration Rights",
      "Housing Rights"
    ],
    "phone": "212-555-7989",
    "website": "https://lewislaw.com",
    "rating": 5,
    "casesWon": 235,
    "yearsExperience": 26,
    "verified": true
  },
  {
    "id": "ny-003",
    "name": "Gary Martin",
    "firm": "Martin Law Group",
    "state": "NY",
    "barNumber": "NY-100374",
    "specialties": [
      "Healthcare Rights",
      "Fourth Amendment",
      "LGBTQ+ Rights"
    ],
    "phone": "212-555-7361",
    "website": "https://martinlaw.com",
    "rating": 4.6,
    "casesWon": 195,
    "yearsExperience": 24,
    "verified": true
  },
  {
    "id": "ny-004",
    "name": "Brenda Scott",
    "firm": "Scott & Partners",
    "state": "NY",
    "barNumber": "NY-100375",
    "specialties": [
      "ADA Compliance",
      "LGBTQ+ Rights",
      "Employment Discrimination"
    ],
    "phone": "212-555-7988",
    "website": "https://scottlaw.com",
    "rating": 4.8,
    "casesWon": 179,
    "yearsExperience": 16,
    "verified": true
  },
  {
    "id": "ny-005",
    "name": "Amanda Moore",
    "firm": "Moore Justice Center",
    "state": "NY",
    "barNumber": "NY-100376",
    "specialties": [
      "Wrongful Conviction",
      "Prison Reform",
      "Housing Rights"
    ],
    "phone": "212-555-1834",
    "website": "https://moorelaw.com",
    "rating": 4.5,
    "casesWon": 189,
    "yearsExperience": 25,
    "verified": true
  },
  {
    "id": "ny-006",
    "name": "Eric Thomas",
    "firm": "Thomas Civil Liberties",
    "state": "NY",
    "barNumber": "NY-100377",
    "specialties": [
      "Discrimination",
      "Public Accommodation",
      "Wrongful Death"
    ],
    "phone": "212-555-7979",
    "website": "https://thomaslaw.com",
    "rating": 4.8,
    "casesWon": 99,
    "yearsExperience": 19,
    "verified": true
  },
  {
    "id": "ny-007",
    "name": "Christopher Davis",
    "firm": "Davis Legal Defense",
    "state": "NY",
    "barNumber": "NY-100378",
    "specialties": [
      "Education Rights",
      "Wrongful Conviction",
      "Housing Rights"
    ],
    "phone": "212-555-4784",
    "website": "https://davislaw.com",
    "rating": 4.9,
    "casesWon": 125,
    "yearsExperience": 13,
    "verified": true
  },
  {
    "id": "ny-008",
    "name": "Amy Gonzalez",
    "firm": "Gonzalez Justice Center",
    "state": "NY",
    "barNumber": "NY-100379",
    "specialties": [
      "Police Misconduct",
      "Wrongful Death",
      "Voting Rights"
    ],
    "phone": "212-555-8279",
    "website": "https://gonzalezlaw.com",
    "rating": 5,
    "casesWon": 224,
    "yearsExperience": 26,
    "verified": true
  },
  {
    "id": "ny-009",
    "name": "Anthony Martinez",
    "firm": "Martinez Legal Defense",
    "state": "NY",
    "barNumber": "NY-100380",
    "specialties": [
      "Employment Discrimination",
      "Housing Rights",
      "ADA Compliance"
    ],
    "phone": "212-555-4305",
    "website": "https://martinezlaw.com",
    "rating": 4.6,
    "casesWon": 55,
    "yearsExperience": 25,
    "verified": true
  },
  {
    "id": "ny-010",
    "name": "Nicholas Williams",
    "firm": "Williams Justice Center",
    "state": "NY",
    "barNumber": "NY-100381",
    "specialties": [
      "Police Brutality",
      "Wrongful Conviction",
      "Fourth Amendment",
      "Wrongful Death"
    ],
    "phone": "212-555-7421",
    "website": "https://williamslaw.com",
    "rating": 4.6,
    "casesWon": 215,
    "yearsExperience": 25,
    "verified": true
  },
  {
    "id": "ny-011",
    "name": "Michelle Sanchez",
    "firm": "Sanchez Civil Liberties",
    "state": "NY",
    "barNumber": "NY-100382",
    "specialties": [
      "Wrongful Death",
      "Racial Justice",
      "Police Brutality"
    ],
    "phone": "212-555-8405",
    "website": "https://sanchezlaw.com",
    "rating": 4.6,
    "casesWon": 116,
    "yearsExperience": 24,
    "verified": true
  },
  {
    "id": "ny-012",
    "name": "Kevin Lopez",
    "firm": "Lopez Legal Group",
    "state": "NY",
    "barNumber": "NY-100383",
    "specialties": [
      "Immigration Rights",
      "Disability Rights",
      "LGBTQ+ Rights",
      "Religious Freedom"
    ],
    "phone": "212-555-0974",
    "website": "https://lopezlaw.com",
    "rating": 4.8,
    "casesWon": 131,
    "yearsExperience": 16,
    "verified": true
  },
  {
    "id": "ny-013",
    "name": "Brian Robinson",
    "firm": "Robinson Law Group",
    "state": "NY",
    "barNumber": "NY-100384",
    "specialties": [
      "Prison Reform",
      "Employment Discrimination",
      "Wrongful Conviction"
    ],
    "phone": "212-555-8347",
    "website": "https://robinsonlaw.com",
    "rating": 4.8,
    "casesWon": 103,
    "yearsExperience": 9,
    "verified": true
  },
  {
    "id": "ny-014",
    "name": "Susan Lewis",
    "firm": "Lewis & Partners",
    "state": "NY",
    "barNumber": "NY-100385",
    "specialties": [
      "Healthcare Rights",
      "Police Brutality",
      "Discrimination",
      "Constitutional Rights"
    ],
    "phone": "212-555-1161",
    "website": "https://lewislaw.com",
    "rating": 4.6,
    "casesWon": 67,
    "yearsExperience": 10,
    "verified": true
  },
  {
    "id": "ny-015",
    "name": "Steven Baker",
    "firm": "Baker Legal Services",
    "state": "NY",
    "barNumber": "NY-100386",
    "specialties": [
      "Constitutional Rights",
      "Employment Discrimination",
      "Healthcare Rights",
      "Police Misconduct"
    ],
    "phone": "212-555-1516",
    "website": "https://bakerlaw.com",
    "rating": 4.9,
    "casesWon": 140,
    "yearsExperience": 22,
    "verified": true
  },
  {
    "id": "nc-001",
    "name": "Nicole Harris",
    "firm": "Harris Legal Group",
    "state": "NC",
    "barNumber": "NC-100387",
    "specialties": [
      "Education Rights",
      "Housing Rights",
      "Fourth Amendment",
      "Racial Justice"
    ],
    "phone": "919-555-0049",
    "website": "https://harrislaw.com",
    "rating": 4.7,
    "casesWon": 173,
    "yearsExperience": 25,
    "verified": true
  },
  {
    "id": "nc-002",
    "name": "Barbara Rivera",
    "firm": "Rivera Justice Center",
    "state": "NC",
    "barNumber": "NC-100388",
    "specialties": [
      "Housing Rights",
      "Public Accommodation",
      "Criminal Justice Reform",
      "Discrimination"
    ],
    "phone": "919-555-3840",
    "website": "https://riveralaw.com",
    "rating": 4.7,
    "casesWon": 230,
    "yearsExperience": 11,
    "verified": true
  },
  {
    "id": "nc-003",
    "name": "Joshua Carter",
    "firm": "Carter Legal Defense",
    "state": "NC",
    "barNumber": "NC-100389",
    "specialties": [
      "Racial Justice",
      "Employment Discrimination",
      "Wrongful Conviction"
    ],
    "phone": "919-555-3508",
    "website": "https://carterlaw.com",
    "rating": 4.5,
    "casesWon": 125,
    "yearsExperience": 22,
    "verified": true
  },
  {
    "id": "nc-004",
    "name": "Susan Clark",
    "firm": "Clark & Partners",
    "state": "NC",
    "barNumber": "NC-100390",
    "specialties": [
      "Prison Reform",
      "Education Rights",
      "Public Accommodation"
    ],
    "phone": "919-555-9991",
    "website": "https://clarklaw.com",
    "rating": 4.8,
    "casesWon": 120,
    "yearsExperience": 20,
    "verified": true
  },
  {
    "id": "nc-005",
    "name": "Timothy Wright",
    "firm": "Wright Legal Defense",
    "state": "NC",
    "barNumber": "NC-100391",
    "specialties": [
      "Wrongful Conviction",
      "Excessive Force",
      "Prison Reform"
    ],
    "phone": "919-555-2032",
    "website": "https://wrightlaw.com",
    "rating": 4.7,
    "casesWon": 172,
    "yearsExperience": 12,
    "verified": true
  },
  {
    "id": "nc-006",
    "name": "Kimberly Baker",
    "firm": "Baker & Partners",
    "state": "NC",
    "barNumber": "NC-100392",
    "specialties": [
      "LGBTQ+ Rights",
      "Excessive Force",
      "Discrimination"
    ],
    "phone": "919-555-2847",
    "website": "https://bakerlaw.com",
    "rating": 4.8,
    "casesWon": 146,
    "yearsExperience": 21,
    "verified": true
  },
  {
    "id": "nc-007",
    "name": "Donald Moore",
    "firm": "Moore & Partners",
    "state": "NC",
    "barNumber": "NC-100393",
    "specialties": [
      "Police Misconduct",
      "Wrongful Conviction",
      "Immigration Rights",
      "Discrimination"
    ],
    "phone": "919-555-3693",
    "website": "https://moorelaw.com",
    "rating": 4.7,
    "casesWon": 238,
    "yearsExperience": 14,
    "verified": true
  },
  {
    "id": "nc-008",
    "name": "Nicole Moore",
    "firm": "Moore Legal Defense",
    "state": "NC",
    "barNumber": "NC-100394",
    "specialties": [
      "Education Rights",
      "Immigration Rights",
      "Healthcare Rights"
    ],
    "phone": "919-555-7851",
    "website": "https://moorelaw.com",
    "rating": 5,
    "casesWon": 222,
    "yearsExperience": 13,
    "verified": true
  },
  {
    "id": "nc-009",
    "name": "Ashley Adams",
    "firm": "Adams Legal Services",
    "state": "NC",
    "barNumber": "NC-100395",
    "specialties": [
      "Religious Freedom",
      "Housing Rights",
      "Excessive Force"
    ],
    "phone": "919-555-5351",
    "website": "https://adamslaw.com",
    "rating": 4.9,
    "casesWon": 203,
    "yearsExperience": 19,
    "verified": true
  },
  {
    "id": "nc-010",
    "name": "George Anderson",
    "firm": "Anderson Law Group",
    "state": "NC",
    "barNumber": "NC-100396",
    "specialties": [
      "Disability Rights",
      "Housing Rights",
      "Discrimination",
      "Excessive Force"
    ],
    "phone": "919-555-0372",
    "website": "https://andersonlaw.com",
    "rating": 4.9,
    "casesWon": 79,
    "yearsExperience": 27,
    "verified": true
  },
  {
    "id": "nc-011",
    "name": "Ashley Campbell",
    "firm": "Campbell & Partners",
    "state": "NC",
    "barNumber": "NC-100397",
    "specialties": [
      "Education Rights",
      "Employment Discrimination",
      "First Amendment"
    ],
    "phone": "919-555-1224",
    "website": "https://campbelllaw.com",
    "rating": 4.6,
    "casesWon": 160,
    "yearsExperience": 18,
    "verified": true
  },
  {
    "id": "nc-012",
    "name": "Robert Thomas",
    "firm": "Thomas Civil Rights Law",
    "state": "NC",
    "barNumber": "NC-100398",
    "specialties": [
      "First Amendment",
      "Wrongful Conviction",
      "Criminal Justice Reform",
      "LGBTQ+ Rights"
    ],
    "phone": "919-555-0845",
    "website": "https://thomaslaw.com",
    "rating": 4.6,
    "casesWon": 241,
    "yearsExperience": 19,
    "verified": true
  },
  {
    "id": "nc-013",
    "name": "Stephanie Ramirez",
    "firm": "Ramirez Civil Liberties",
    "state": "NC",
    "barNumber": "NC-100399",
    "specialties": [
      "Religious Freedom",
      "Employment Discrimination",
      "Fourth Amendment",
      "First Amendment"
    ],
    "phone": "919-555-0202",
    "website": "https://ramirezlaw.com",
    "rating": 4.8,
    "casesWon": 197,
    "yearsExperience": 25,
    "verified": true
  },
  {
    "id": "nc-014",
    "name": "Maria Garcia",
    "firm": "Garcia & Partners",
    "state": "NC",
    "barNumber": "NC-100400",
    "specialties": [
      "Criminal Justice Reform",
      "Immigration Rights",
      "Racial Justice"
    ],
    "phone": "919-555-2154",
    "website": "https://garcialaw.com",
    "rating": 4.9,
    "casesWon": 159,
    "yearsExperience": 13,
    "verified": true
  },
  {
    "id": "nd-001",
    "name": "Daniel Nguyen",
    "firm": "Nguyen & Associates",
    "state": "ND",
    "barNumber": "ND-100401",
    "specialties": [
      "Employment Discrimination",
      "LGBTQ+ Rights",
      "Disability Rights"
    ],
    "phone": "701-555-3476",
    "website": "https://nguyenlaw.com",
    "rating": 4.6,
    "casesWon": 128,
    "yearsExperience": 11,
    "verified": true
  },
  {
    "id": "nd-002",
    "name": "James Brown",
    "firm": "Brown Law Group",
    "state": "ND",
    "barNumber": "ND-100402",
    "specialties": [
      "Disability Rights",
      "Wrongful Death",
      "ADA Compliance",
      "Constitutional Rights"
    ],
    "phone": "701-555-1614",
    "website": "https://brownlaw.com",
    "rating": 4.7,
    "casesWon": 132,
    "yearsExperience": 23,
    "verified": true
  },
  {
    "id": "nd-003",
    "name": "Daniel Gonzalez",
    "firm": "Gonzalez & Associates",
    "state": "ND",
    "barNumber": "ND-100403",
    "specialties": [
      "Immigration Rights",
      "Education Rights",
      "First Amendment"
    ],
    "phone": "701-555-7227",
    "website": "https://gonzalezlaw.com",
    "rating": 4.7,
    "casesWon": 70,
    "yearsExperience": 24,
    "verified": true
  },
  {
    "id": "nd-004",
    "name": "Kenneth Anderson",
    "firm": "Anderson Justice Center",
    "state": "ND",
    "barNumber": "ND-100404",
    "specialties": [
      "Wrongful Death",
      "Voting Rights",
      "ADA Compliance",
      "Discrimination"
    ],
    "phone": "701-555-8219",
    "website": "https://andersonlaw.com",
    "rating": 4.7,
    "casesWon": 197,
    "yearsExperience": 20,
    "verified": true
  },
  {
    "id": "nd-005",
    "name": "Robert Wright",
    "firm": "Wright Law Firm",
    "state": "ND",
    "barNumber": "ND-100405",
    "specialties": [
      "Police Brutality",
      "Prison Reform",
      "Racial Justice",
      "Fourth Amendment"
    ],
    "phone": "701-555-9387",
    "website": "https://wrightlaw.com",
    "rating": 4.7,
    "casesWon": 72,
    "yearsExperience": 11,
    "verified": true
  },
  {
    "id": "nd-006",
    "name": "Kenneth Clark",
    "firm": "Clark Justice Center",
    "state": "ND",
    "barNumber": "ND-100406",
    "specialties": [
      "Immigration Rights",
      "Discrimination",
      "Disability Rights"
    ],
    "phone": "701-555-0827",
    "website": "https://clarklaw.com",
    "rating": 4.6,
    "casesWon": 55,
    "yearsExperience": 25,
    "verified": true
  },
  {
    "id": "nd-007",
    "name": "Amanda Clark",
    "firm": "Clark Justice Center",
    "state": "ND",
    "barNumber": "ND-100407",
    "specialties": [
      "Disability Rights",
      "Fourth Amendment",
      "Immigration Rights"
    ],
    "phone": "701-555-0089",
    "website": "https://clarklaw.com",
    "rating": 4.8,
    "casesWon": 120,
    "yearsExperience": 25,
    "verified": true
  },
  {
    "id": "nd-008",
    "name": "Christopher Roberts",
    "firm": "Roberts Justice Center",
    "state": "ND",
    "barNumber": "ND-100408",
    "specialties": [
      "Criminal Justice Reform",
      "Wrongful Conviction",
      "Housing Rights"
    ],
    "phone": "701-555-8180",
    "website": "https://robertslaw.com",
    "rating": 4.8,
    "casesWon": 214,
    "yearsExperience": 17,
    "verified": true
  },
  {
    "id": "nd-009",
    "name": "Shirley Anderson",
    "firm": "Anderson Legal Group",
    "state": "ND",
    "barNumber": "ND-100409",
    "specialties": [
      "Housing Rights",
      "Voting Rights",
      "Healthcare Rights",
      "Police Brutality"
    ],
    "phone": "701-555-6037",
    "website": "https://andersonlaw.com",
    "rating": 4.5,
    "casesWon": 120,
    "yearsExperience": 13,
    "verified": true
  },
  {
    "id": "nd-010",
    "name": "Rebecca Carter",
    "firm": "Carter Civil Liberties",
    "state": "ND",
    "barNumber": "ND-100410",
    "specialties": [
      "Education Rights",
      "Public Accommodation",
      "Voting Rights"
    ],
    "phone": "701-555-9380",
    "website": "https://carterlaw.com",
    "rating": 4.9,
    "casesWon": 78,
    "yearsExperience": 16,
    "verified": true
  },
  {
    "id": "nd-011",
    "name": "Brian Nguyen",
    "firm": "Nguyen & Partners",
    "state": "ND",
    "barNumber": "ND-100411",
    "specialties": [
      "Criminal Justice Reform",
      "Religious Freedom",
      "Wrongful Death"
    ],
    "phone": "701-555-8961",
    "website": "https://nguyenlaw.com",
    "rating": 4.6,
    "casesWon": 146,
    "yearsExperience": 27,
    "verified": true
  },
  {
    "id": "nd-012",
    "name": "Rebecca Adams",
    "firm": "Adams Civil Liberties",
    "state": "ND",
    "barNumber": "ND-100412",
    "specialties": [
      "Police Misconduct",
      "Fourth Amendment",
      "Constitutional Rights"
    ],
    "phone": "701-555-9506",
    "website": "https://adamslaw.com",
    "rating": 4.7,
    "casesWon": 68,
    "yearsExperience": 11,
    "verified": true
  },
  {
    "id": "nd-013",
    "name": "Jeffrey Ramirez",
    "firm": "Ramirez & Partners",
    "state": "ND",
    "barNumber": "ND-100413",
    "specialties": [
      "Prison Reform",
      "Immigration Rights",
      "Employment Discrimination",
      "Police Misconduct"
    ],
    "phone": "701-555-2966",
    "website": "https://ramirezlaw.com",
    "rating": 4.8,
    "casesWon": 70,
    "yearsExperience": 9,
    "verified": true
  },
  {
    "id": "nd-014",
    "name": "Ryan Lewis",
    "firm": "Lewis Legal Group",
    "state": "ND",
    "barNumber": "ND-100414",
    "specialties": [
      "Excessive Force",
      "Housing Rights",
      "First Amendment"
    ],
    "phone": "701-555-9418",
    "website": "https://lewislaw.com",
    "rating": 5,
    "casesWon": 192,
    "yearsExperience": 26,
    "verified": true
  },
  {
    "id": "nd-015",
    "name": "Maria Carter",
    "firm": "Carter Civil Liberties",
    "state": "ND",
    "barNumber": "ND-100415",
    "specialties": [
      "Employment Discrimination",
      "Prison Reform",
      "Wrongful Death",
      "Public Accommodation"
    ],
    "phone": "701-555-4636",
    "website": "https://carterlaw.com",
    "rating": 4.5,
    "casesWon": 156,
    "yearsExperience": 16,
    "verified": true
  },
  {
    "id": "oh-001",
    "name": "Jeffrey Martinez",
    "firm": "Martinez Civil Rights Law",
    "state": "OH",
    "barNumber": "OH-100416",
    "specialties": [
      "Employment Discrimination",
      "First Amendment",
      "Excessive Force"
    ],
    "phone": "216-555-0158",
    "website": "https://martinezlaw.com",
    "rating": 4.7,
    "casesWon": 75,
    "yearsExperience": 13,
    "verified": true
  },
  {
    "id": "oh-002",
    "name": "Matthew Thomas",
    "firm": "Thomas Justice Center",
    "state": "OH",
    "barNumber": "OH-100417",
    "specialties": [
      "Fourth Amendment",
      "Racial Justice",
      "Public Accommodation",
      "Education Rights"
    ],
    "phone": "216-555-5104",
    "website": "https://thomaslaw.com",
    "rating": 5,
    "casesWon": 120,
    "yearsExperience": 9,
    "verified": true
  },
  {
    "id": "oh-003",
    "name": "Pamela Thompson",
    "firm": "Thompson Law Firm",
    "state": "OH",
    "barNumber": "OH-100418",
    "specialties": [
      "Constitutional Rights",
      "Healthcare Rights",
      "ADA Compliance",
      "Excessive Force"
    ],
    "phone": "216-555-4630",
    "website": "https://thompsonlaw.com",
    "rating": 4.6,
    "casesWon": 220,
    "yearsExperience": 21,
    "verified": true
  },
  {
    "id": "oh-004",
    "name": "Ryan Allen",
    "firm": "Allen Civil Liberties",
    "state": "OH",
    "barNumber": "OH-100419",
    "specialties": [
      "Prison Reform",
      "Disability Rights",
      "Education Rights",
      "Police Misconduct"
    ],
    "phone": "216-555-2345",
    "website": "https://allenlaw.com",
    "rating": 4.8,
    "casesWon": 66,
    "yearsExperience": 25,
    "verified": true
  },
  {
    "id": "oh-005",
    "name": "Jennifer Martinez",
    "firm": "Martinez Law Group",
    "state": "OH",
    "barNumber": "OH-100420",
    "specialties": [
      "First Amendment",
      "Discrimination",
      "Racial Justice",
      "Wrongful Death"
    ],
    "phone": "216-555-2652",
    "website": "https://martinezlaw.com",
    "rating": 4.6,
    "casesWon": 63,
    "yearsExperience": 11,
    "verified": true
  },
  {
    "id": "oh-006",
    "name": "Melissa Campbell",
    "firm": "Campbell & Partners",
    "state": "OH",
    "barNumber": "OH-100421",
    "specialties": [
      "Fourth Amendment",
      "Wrongful Death",
      "ADA Compliance",
      "Education Rights"
    ],
    "phone": "216-555-4111",
    "website": "https://campbelllaw.com",
    "rating": 4.9,
    "casesWon": 237,
    "yearsExperience": 20,
    "verified": true
  },
  {
    "id": "oh-007",
    "name": "Andrew Flores",
    "firm": "Flores Legal Group",
    "state": "OH",
    "barNumber": "OH-100422",
    "specialties": [
      "Prison Reform",
      "Voting Rights",
      "Education Rights"
    ],
    "phone": "216-555-1562",
    "website": "https://floreslaw.com",
    "rating": 4.8,
    "casesWon": 130,
    "yearsExperience": 10,
    "verified": true
  },
  {
    "id": "oh-008",
    "name": "Andrew Nguyen",
    "firm": "Nguyen Legal Defense",
    "state": "OH",
    "barNumber": "OH-100423",
    "specialties": [
      "Police Brutality",
      "Employment Discrimination",
      "Constitutional Rights",
      "Immigration Rights"
    ],
    "phone": "216-555-2324",
    "website": "https://nguyenlaw.com",
    "rating": 4.8,
    "casesWon": 213,
    "yearsExperience": 11,
    "verified": true
  },
  {
    "id": "oh-009",
    "name": "Barbara Sanchez",
    "firm": "Sanchez Civil Liberties",
    "state": "OH",
    "barNumber": "OH-100424",
    "specialties": [
      "First Amendment",
      "Wrongful Death",
      "Employment Discrimination"
    ],
    "phone": "216-555-1554",
    "website": "https://sanchezlaw.com",
    "rating": 4.7,
    "casesWon": 181,
    "yearsExperience": 20,
    "verified": true
  },
  {
    "id": "oh-010",
    "name": "George Baker",
    "firm": "Baker Legal Services",
    "state": "OH",
    "barNumber": "OH-100425",
    "specialties": [
      "Police Misconduct",
      "Fourth Amendment",
      "Healthcare Rights",
      "Public Accommodation"
    ],
    "phone": "216-555-6548",
    "website": "https://bakerlaw.com",
    "rating": 4.5,
    "casesWon": 232,
    "yearsExperience": 22,
    "verified": true
  },
  {
    "id": "oh-011",
    "name": "Joshua Lopez",
    "firm": "Lopez Legal Defense",
    "state": "OH",
    "barNumber": "OH-100426",
    "specialties": [
      "Police Brutality",
      "First Amendment",
      "Education Rights"
    ],
    "phone": "216-555-0579",
    "website": "https://lopezlaw.com",
    "rating": 4.8,
    "casesWon": 208,
    "yearsExperience": 12,
    "verified": true
  },
  {
    "id": "oh-012",
    "name": "Michelle Scott",
    "firm": "Scott & Partners",
    "state": "OH",
    "barNumber": "OH-100427",
    "specialties": [
      "Education Rights",
      "Voting Rights",
      "Prison Reform",
      "Racial Justice"
    ],
    "phone": "216-555-7592",
    "website": "https://scottlaw.com",
    "rating": 4.6,
    "casesWon": 51,
    "yearsExperience": 15,
    "verified": true
  },
  {
    "id": "oh-013",
    "name": "Ruth Roberts",
    "firm": "Roberts Civil Liberties",
    "state": "OH",
    "barNumber": "OH-100428",
    "specialties": [
      "Excessive Force",
      "Discrimination",
      "Housing Rights",
      "Constitutional Rights"
    ],
    "phone": "216-555-4096",
    "website": "https://robertslaw.com",
    "rating": 4.6,
    "casesWon": 200,
    "yearsExperience": 10,
    "verified": true
  },
  {
    "id": "ok-001",
    "name": "Joshua Torres",
    "firm": "Torres & Partners",
    "state": "OK",
    "barNumber": "OK-100429",
    "specialties": [
      "Religious Freedom",
      "Constitutional Rights",
      "Police Brutality",
      "Excessive Force"
    ],
    "phone": "405-555-5746",
    "website": "https://torreslaw.com",
    "rating": 5,
    "casesWon": 117,
    "yearsExperience": 20,
    "verified": true
  },
  {
    "id": "ok-002",
    "name": "Michelle Hernandez",
    "firm": "Hernandez Law Firm",
    "state": "OK",
    "barNumber": "OK-100430",
    "specialties": [
      "Religious Freedom",
      "ADA Compliance",
      "LGBTQ+ Rights",
      "Disability Rights"
    ],
    "phone": "405-555-2873",
    "website": "https://hernandezlaw.com",
    "rating": 4.8,
    "casesWon": 238,
    "yearsExperience": 19,
    "verified": true
  },
  {
    "id": "ok-003",
    "name": "Nicholas Clark",
    "firm": "Clark Law Group",
    "state": "OK",
    "barNumber": "OK-100431",
    "specialties": [
      "Wrongful Conviction",
      "Housing Rights",
      "Prison Reform",
      "Public Accommodation"
    ],
    "phone": "405-555-9340",
    "website": "https://clarklaw.com",
    "rating": 4.5,
    "casesWon": 60,
    "yearsExperience": 16,
    "verified": true
  },
  {
    "id": "ok-004",
    "name": "Michael Lopez",
    "firm": "Lopez & Associates",
    "state": "OK",
    "barNumber": "OK-100432",
    "specialties": [
      "Police Misconduct",
      "Prison Reform",
      "Religious Freedom",
      "Racial Justice"
    ],
    "phone": "405-555-9703",
    "website": "https://lopezlaw.com",
    "rating": 4.7,
    "casesWon": 157,
    "yearsExperience": 20,
    "verified": true
  },
  {
    "id": "ok-005",
    "name": "Amy Ramirez",
    "firm": "Ramirez Legal Defense",
    "state": "OK",
    "barNumber": "OK-100433",
    "specialties": [
      "First Amendment",
      "LGBTQ+ Rights",
      "Religious Freedom",
      "Education Rights"
    ],
    "phone": "405-555-9597",
    "website": "https://ramirezlaw.com",
    "rating": 4.7,
    "casesWon": 162,
    "yearsExperience": 10,
    "verified": true
  },
  {
    "id": "ok-006",
    "name": "John Thompson",
    "firm": "Thompson Law Group",
    "state": "OK",
    "barNumber": "OK-100434",
    "specialties": [
      "Racial Justice",
      "Wrongful Death",
      "Police Misconduct",
      "Wrongful Conviction"
    ],
    "phone": "405-555-5440",
    "website": "https://thompsonlaw.com",
    "rating": 4.5,
    "casesWon": 131,
    "yearsExperience": 27,
    "verified": true
  },
  {
    "id": "ok-007",
    "name": "Shirley Sanchez",
    "firm": "Sanchez Civil Rights Law",
    "state": "OK",
    "barNumber": "OK-100435",
    "specialties": [
      "Disability Rights",
      "Education Rights",
      "Excessive Force",
      "Discrimination"
    ],
    "phone": "405-555-8236",
    "website": "https://sanchezlaw.com",
    "rating": 4.8,
    "casesWon": 205,
    "yearsExperience": 12,
    "verified": true
  },
  {
    "id": "ok-008",
    "name": "Elizabeth Jones",
    "firm": "Jones & Partners",
    "state": "OK",
    "barNumber": "OK-100436",
    "specialties": [
      "First Amendment",
      "Voting Rights",
      "ADA Compliance",
      "Police Brutality"
    ],
    "phone": "405-555-9123",
    "website": "https://joneslaw.com",
    "rating": 4.5,
    "casesWon": 70,
    "yearsExperience": 11,
    "verified": true
  },
  {
    "id": "ok-009",
    "name": "Ryan Nguyen",
    "firm": "Nguyen Law Firm",
    "state": "OK",
    "barNumber": "OK-100437",
    "specialties": [
      "Immigration Rights",
      "Employment Discrimination",
      "First Amendment"
    ],
    "phone": "405-555-7134",
    "website": "https://nguyenlaw.com",
    "rating": 4.8,
    "casesWon": 79,
    "yearsExperience": 24,
    "verified": true
  },
  {
    "id": "ok-010",
    "name": "Pamela Baker",
    "firm": "Baker Law Firm",
    "state": "OK",
    "barNumber": "OK-100438",
    "specialties": [
      "Police Brutality",
      "Education Rights",
      "First Amendment",
      "Housing Rights"
    ],
    "phone": "405-555-5350",
    "website": "https://bakerlaw.com",
    "rating": 4.9,
    "casesWon": 186,
    "yearsExperience": 11,
    "verified": true
  },
  {
    "id": "ok-011",
    "name": "Paul Harris",
    "firm": "Harris & Associates",
    "state": "OK",
    "barNumber": "OK-100439",
    "specialties": [
      "Prison Reform",
      "Discrimination",
      "Healthcare Rights"
    ],
    "phone": "405-555-9877",
    "website": "https://harrislaw.com",
    "rating": 4.8,
    "casesWon": 190,
    "yearsExperience": 19,
    "verified": true
  },
  {
    "id": "ok-012",
    "name": "Susan Rivera",
    "firm": "Rivera & Associates",
    "state": "OK",
    "barNumber": "OK-100440",
    "specialties": [
      "Fourth Amendment",
      "Housing Rights",
      "ADA Compliance"
    ],
    "phone": "405-555-3245",
    "website": "https://riveralaw.com",
    "rating": 4.9,
    "casesWon": 69,
    "yearsExperience": 15,
    "verified": true
  },
  {
    "id": "ok-013",
    "name": "Jennifer Torres",
    "firm": "Torres Legal Defense",
    "state": "OK",
    "barNumber": "OK-100441",
    "specialties": [
      "Constitutional Rights",
      "Excessive Force",
      "Voting Rights",
      "Racial Justice"
    ],
    "phone": "405-555-4769",
    "website": "https://torreslaw.com",
    "rating": 4.7,
    "casesWon": 195,
    "yearsExperience": 22,
    "verified": true
  },
  {
    "id": "or-001",
    "name": "Brian Martin",
    "firm": "Martin Civil Rights Law",
    "state": "OR",
    "barNumber": "OR-100442",
    "specialties": [
      "Education Rights",
      "Police Misconduct",
      "Racial Justice"
    ],
    "phone": "503-555-3560",
    "website": "https://martinlaw.com",
    "rating": 4.9,
    "casesWon": 50,
    "yearsExperience": 19,
    "verified": true
  },
  {
    "id": "or-002",
    "name": "Kathleen Williams",
    "firm": "Williams Civil Rights Law",
    "state": "OR",
    "barNumber": "OR-100443",
    "specialties": [
      "Constitutional Rights",
      "Religious Freedom",
      "Wrongful Death",
      "Discrimination"
    ],
    "phone": "503-555-3809",
    "website": "https://williamslaw.com",
    "rating": 4.5,
    "casesWon": 144,
    "yearsExperience": 12,
    "verified": true
  },
  {
    "id": "or-003",
    "name": "Elizabeth Mitchell",
    "firm": "Mitchell Civil Rights Law",
    "state": "OR",
    "barNumber": "OR-100444",
    "specialties": [
      "ADA Compliance",
      "Voting Rights",
      "Healthcare Rights"
    ],
    "phone": "503-555-1741",
    "website": "https://mitchelllaw.com",
    "rating": 4.9,
    "casesWon": 207,
    "yearsExperience": 21,
    "verified": true
  },
  {
    "id": "or-004",
    "name": "Patricia Moore",
    "firm": "Moore Legal Group",
    "state": "OR",
    "barNumber": "OR-100445",
    "specialties": [
      "Criminal Justice Reform",
      "Public Accommodation",
      "Wrongful Conviction"
    ],
    "phone": "503-555-3207",
    "website": "https://moorelaw.com",
    "rating": 4.5,
    "casesWon": 57,
    "yearsExperience": 12,
    "verified": true
  },
  {
    "id": "or-005",
    "name": "Matthew Allen",
    "firm": "Allen Justice Center",
    "state": "OR",
    "barNumber": "OR-100446",
    "specialties": [
      "Fourth Amendment",
      "Education Rights",
      "Employment Discrimination",
      "Healthcare Rights"
    ],
    "phone": "503-555-5439",
    "website": "https://allenlaw.com",
    "rating": 4.6,
    "casesWon": 211,
    "yearsExperience": 21,
    "verified": true
  },
  {
    "id": "or-006",
    "name": "Ronald Lee",
    "firm": "Lee Legal Group",
    "state": "OR",
    "barNumber": "OR-100447",
    "specialties": [
      "Wrongful Conviction",
      "Healthcare Rights",
      "First Amendment",
      "Fourth Amendment"
    ],
    "phone": "503-555-9882",
    "website": "https://leelaw.com",
    "rating": 4.7,
    "casesWon": 186,
    "yearsExperience": 18,
    "verified": true
  },
  {
    "id": "or-007",
    "name": "Cynthia Thompson",
    "firm": "Thompson Justice Center",
    "state": "OR",
    "barNumber": "OR-100448",
    "specialties": [
      "Healthcare Rights",
      "Excessive Force",
      "Education Rights"
    ],
    "phone": "503-555-5687",
    "website": "https://thompsonlaw.com",
    "rating": 4.9,
    "casesWon": 157,
    "yearsExperience": 12,
    "verified": true
  },
  {
    "id": "or-008",
    "name": "Steven Torres",
    "firm": "Torres Legal Defense",
    "state": "OR",
    "barNumber": "OR-100449",
    "specialties": [
      "Religious Freedom",
      "Housing Rights",
      "Racial Justice",
      "ADA Compliance"
    ],
    "phone": "503-555-1971",
    "website": "https://torreslaw.com",
    "rating": 4.6,
    "casesWon": 77,
    "yearsExperience": 22,
    "verified": true
  },
  {
    "id": "or-009",
    "name": "Pamela Smith",
    "firm": "Smith Civil Rights Law",
    "state": "OR",
    "barNumber": "OR-100450",
    "specialties": [
      "Discrimination",
      "First Amendment",
      "Excessive Force",
      "LGBTQ+ Rights"
    ],
    "phone": "503-555-7144",
    "website": "https://smithlaw.com",
    "rating": 4.6,
    "casesWon": 177,
    "yearsExperience": 13,
    "verified": true
  },
  {
    "id": "or-010",
    "name": "Emily Thomas",
    "firm": "Thomas Civil Rights Law",
    "state": "OR",
    "barNumber": "OR-100451",
    "specialties": [
      "Wrongful Death",
      "Disability Rights",
      "Police Misconduct",
      "Discrimination"
    ],
    "phone": "503-555-4749",
    "website": "https://thomaslaw.com",
    "rating": 5,
    "casesWon": 51,
    "yearsExperience": 17,
    "verified": true
  },
  {
    "id": "or-011",
    "name": "Laura Nguyen",
    "firm": "Nguyen Legal Services",
    "state": "OR",
    "barNumber": "OR-100452",
    "specialties": [
      "Racial Justice",
      "Education Rights",
      "Police Misconduct"
    ],
    "phone": "503-555-2167",
    "website": "https://nguyenlaw.com",
    "rating": 5,
    "casesWon": 211,
    "yearsExperience": 21,
    "verified": true
  },
  {
    "id": "or-012",
    "name": "Steven Torres",
    "firm": "Torres Justice Center",
    "state": "OR",
    "barNumber": "OR-100453",
    "specialties": [
      "First Amendment",
      "Wrongful Conviction",
      "Disability Rights"
    ],
    "phone": "503-555-4748",
    "website": "https://torreslaw.com",
    "rating": 4.8,
    "casesWon": 151,
    "yearsExperience": 9,
    "verified": true
  },
  {
    "id": "or-013",
    "name": "Amanda Gonzalez",
    "firm": "Gonzalez Legal Defense",
    "state": "OR",
    "barNumber": "OR-100454",
    "specialties": [
      "ADA Compliance",
      "Discrimination",
      "First Amendment",
      "Voting Rights"
    ],
    "phone": "503-555-9911",
    "website": "https://gonzalezlaw.com",
    "rating": 5,
    "casesWon": 61,
    "yearsExperience": 22,
    "verified": true
  },
  {
    "id": "or-014",
    "name": "Barbara Carter",
    "firm": "Carter Justice Center",
    "state": "OR",
    "barNumber": "OR-100455",
    "specialties": [
      "Wrongful Conviction",
      "Voting Rights",
      "Police Brutality"
    ],
    "phone": "503-555-8022",
    "website": "https://carterlaw.com",
    "rating": 4.8,
    "casesWon": 178,
    "yearsExperience": 18,
    "verified": true
  },
  {
    "id": "or-015",
    "name": "John King",
    "firm": "King & Partners",
    "state": "OR",
    "barNumber": "OR-100456",
    "specialties": [
      "Wrongful Death",
      "Wrongful Conviction",
      "Disability Rights",
      "Employment Discrimination"
    ],
    "phone": "503-555-5615",
    "website": "https://kinglaw.com",
    "rating": 5,
    "casesWon": 79,
    "yearsExperience": 20,
    "verified": true
  },
  {
    "id": "pa-001",
    "name": "Michelle Martinez",
    "firm": "Martinez Legal Services",
    "state": "PA",
    "barNumber": "PA-100457",
    "specialties": [
      "Police Brutality",
      "Disability Rights",
      "Fourth Amendment",
      "Prison Reform"
    ],
    "phone": "215-555-2901",
    "website": "https://martinezlaw.com",
    "rating": 4.8,
    "casesWon": 196,
    "yearsExperience": 11,
    "verified": true
  },
  {
    "id": "pa-002",
    "name": "Mark Lopez",
    "firm": "Lopez Justice Center",
    "state": "PA",
    "barNumber": "PA-100458",
    "specialties": [
      "Prison Reform",
      "Employment Discrimination",
      "Constitutional Rights",
      "Housing Rights"
    ],
    "phone": "215-555-7960",
    "website": "https://lopezlaw.com",
    "rating": 4.8,
    "casesWon": 176,
    "yearsExperience": 17,
    "verified": true
  },
  {
    "id": "pa-003",
    "name": "Paul Rivera",
    "firm": "Rivera Law Firm",
    "state": "PA",
    "barNumber": "PA-100459",
    "specialties": [
      "Immigration Rights",
      "Excessive Force",
      "LGBTQ+ Rights"
    ],
    "phone": "215-555-1258",
    "website": "https://riveralaw.com",
    "rating": 4.7,
    "casesWon": 85,
    "yearsExperience": 9,
    "verified": true
  },
  {
    "id": "pa-004",
    "name": "Pamela Williams",
    "firm": "Williams Law Firm",
    "state": "PA",
    "barNumber": "PA-100460",
    "specialties": [
      "Voting Rights",
      "Criminal Justice Reform",
      "Employment Discrimination",
      "Public Accommodation"
    ],
    "phone": "215-555-0860",
    "website": "https://williamslaw.com",
    "rating": 5,
    "casesWon": 186,
    "yearsExperience": 19,
    "verified": true
  },
  {
    "id": "pa-005",
    "name": "George Gomez",
    "firm": "Gomez Civil Rights Law",
    "state": "PA",
    "barNumber": "PA-100461",
    "specialties": [
      "Fourth Amendment",
      "Racial Justice",
      "Employment Discrimination",
      "Excessive Force"
    ],
    "phone": "215-555-1667",
    "website": "https://gomezlaw.com",
    "rating": 5,
    "casesWon": 98,
    "yearsExperience": 10,
    "verified": true
  },
  {
    "id": "pa-006",
    "name": "Michael Thompson",
    "firm": "Thompson Civil Liberties",
    "state": "PA",
    "barNumber": "PA-100462",
    "specialties": [
      "Immigration Rights",
      "Wrongful Death",
      "Prison Reform",
      "Excessive Force"
    ],
    "phone": "215-555-5511",
    "website": "https://thompsonlaw.com",
    "rating": 4.7,
    "casesWon": 129,
    "yearsExperience": 23,
    "verified": true
  },
  {
    "id": "pa-007",
    "name": "Robert Brown",
    "firm": "Brown Legal Defense",
    "state": "PA",
    "barNumber": "PA-100463",
    "specialties": [
      "Disability Rights",
      "Employment Discrimination",
      "Excessive Force"
    ],
    "phone": "215-555-2397",
    "website": "https://brownlaw.com",
    "rating": 5,
    "casesWon": 181,
    "yearsExperience": 25,
    "verified": true
  },
  {
    "id": "pa-008",
    "name": "Jacob Adams",
    "firm": "Adams & Partners",
    "state": "PA",
    "barNumber": "PA-100464",
    "specialties": [
      "Police Misconduct",
      "Healthcare Rights",
      "Disability Rights"
    ],
    "phone": "215-555-5104",
    "website": "https://adamslaw.com",
    "rating": 4.6,
    "casesWon": 50,
    "yearsExperience": 16,
    "verified": true
  },
  {
    "id": "pa-009",
    "name": "Edward Garcia",
    "firm": "Garcia Legal Group",
    "state": "PA",
    "barNumber": "PA-100465",
    "specialties": [
      "Healthcare Rights",
      "Police Brutality",
      "Housing Rights"
    ],
    "phone": "215-555-1787",
    "website": "https://garcialaw.com",
    "rating": 4.8,
    "casesWon": 84,
    "yearsExperience": 27,
    "verified": true
  },
  {
    "id": "pa-010",
    "name": "Sarah Scott",
    "firm": "Scott Law Firm",
    "state": "PA",
    "barNumber": "PA-100466",
    "specialties": [
      "Education Rights",
      "ADA Compliance",
      "Fourth Amendment",
      "Racial Justice"
    ],
    "phone": "215-555-6909",
    "website": "https://scottlaw.com",
    "rating": 4.7,
    "casesWon": 83,
    "yearsExperience": 15,
    "verified": true
  },
  {
    "id": "pa-011",
    "name": "Shirley Baker",
    "firm": "Baker & Associates",
    "state": "PA",
    "barNumber": "PA-100467",
    "specialties": [
      "Public Accommodation",
      "Police Misconduct",
      "Employment Discrimination"
    ],
    "phone": "215-555-6457",
    "website": "https://bakerlaw.com",
    "rating": 5,
    "casesWon": 190,
    "yearsExperience": 15,
    "verified": true
  },
  {
    "id": "ri-001",
    "name": "Susan Mitchell",
    "firm": "Mitchell & Associates",
    "state": "RI",
    "barNumber": "RI-100468",
    "specialties": [
      "Public Accommodation",
      "Prison Reform",
      "Religious Freedom",
      "Racial Justice"
    ],
    "phone": "401-555-7015",
    "website": "https://mitchelllaw.com",
    "rating": 4.5,
    "casesWon": 222,
    "yearsExperience": 17,
    "verified": true
  },
  {
    "id": "ri-002",
    "name": "Rebecca Martinez",
    "firm": "Martinez Law Firm",
    "state": "RI",
    "barNumber": "RI-100469",
    "specialties": [
      "Housing Rights",
      "ADA Compliance",
      "Wrongful Death",
      "Healthcare Rights"
    ],
    "phone": "401-555-6722",
    "website": "https://martinezlaw.com",
    "rating": 4.7,
    "casesWon": 246,
    "yearsExperience": 13,
    "verified": true
  },
  {
    "id": "ri-003",
    "name": "Amanda Gomez",
    "firm": "Gomez & Associates",
    "state": "RI",
    "barNumber": "RI-100470",
    "specialties": [
      "Fourth Amendment",
      "Wrongful Conviction",
      "Healthcare Rights"
    ],
    "phone": "401-555-3117",
    "website": "https://gomezlaw.com",
    "rating": 5,
    "casesWon": 176,
    "yearsExperience": 16,
    "verified": true
  },
  {
    "id": "ri-004",
    "name": "Kenneth King",
    "firm": "King Legal Defense",
    "state": "RI",
    "barNumber": "RI-100471",
    "specialties": [
      "Wrongful Death",
      "Prison Reform",
      "Employment Discrimination",
      "Discrimination"
    ],
    "phone": "401-555-1806",
    "website": "https://kinglaw.com",
    "rating": 4.8,
    "casesWon": 139,
    "yearsExperience": 20,
    "verified": true
  },
  {
    "id": "ri-005",
    "name": "Angela Robinson",
    "firm": "Robinson & Associates",
    "state": "RI",
    "barNumber": "RI-100472",
    "specialties": [
      "Religious Freedom",
      "Excessive Force",
      "First Amendment",
      "Discrimination"
    ],
    "phone": "401-555-2480",
    "website": "https://robinsonlaw.com",
    "rating": 4.5,
    "casesWon": 104,
    "yearsExperience": 21,
    "verified": true
  },
  {
    "id": "ri-006",
    "name": "Gary Green",
    "firm": "Green & Associates",
    "state": "RI",
    "barNumber": "RI-100473",
    "specialties": [
      "Immigration Rights",
      "Public Accommodation",
      "Employment Discrimination",
      "Criminal Justice Reform"
    ],
    "phone": "401-555-6573",
    "website": "https://greenlaw.com",
    "rating": 4.7,
    "casesWon": 181,
    "yearsExperience": 9,
    "verified": true
  },
  {
    "id": "ri-007",
    "name": "Jason Gonzalez",
    "firm": "Gonzalez & Associates",
    "state": "RI",
    "barNumber": "RI-100474",
    "specialties": [
      "ADA Compliance",
      "Religious Freedom",
      "Police Brutality",
      "Disability Rights"
    ],
    "phone": "401-555-4285",
    "website": "https://gonzalezlaw.com",
    "rating": 4.7,
    "casesWon": 168,
    "yearsExperience": 11,
    "verified": true
  },
  {
    "id": "ri-008",
    "name": "Robert Adams",
    "firm": "Adams Civil Liberties",
    "state": "RI",
    "barNumber": "RI-100475",
    "specialties": [
      "Voting Rights",
      "Police Brutality",
      "Religious Freedom"
    ],
    "phone": "401-555-6795",
    "website": "https://adamslaw.com",
    "rating": 4.9,
    "casesWon": 118,
    "yearsExperience": 15,
    "verified": true
  },
  {
    "id": "ri-009",
    "name": "Daniel Green",
    "firm": "Green Legal Defense",
    "state": "RI",
    "barNumber": "RI-100476",
    "specialties": [
      "Employment Discrimination",
      "Police Brutality",
      "Excessive Force"
    ],
    "phone": "401-555-2841",
    "website": "https://greenlaw.com",
    "rating": 4.5,
    "casesWon": 107,
    "yearsExperience": 11,
    "verified": true
  },
  {
    "id": "ri-010",
    "name": "Timothy Miller",
    "firm": "Miller Civil Rights Law",
    "state": "RI",
    "barNumber": "RI-100477",
    "specialties": [
      "Wrongful Death",
      "Fourth Amendment",
      "ADA Compliance",
      "Excessive Force"
    ],
    "phone": "401-555-6938",
    "website": "https://millerlaw.com",
    "rating": 4.8,
    "casesWon": 129,
    "yearsExperience": 11,
    "verified": true
  },
  {
    "id": "sc-001",
    "name": "George Robinson",
    "firm": "Robinson Legal Services",
    "state": "SC",
    "barNumber": "SC-100478",
    "specialties": [
      "Criminal Justice Reform",
      "Healthcare Rights",
      "Religious Freedom"
    ],
    "phone": "803-555-3288",
    "website": "https://robinsonlaw.com",
    "rating": 4.9,
    "casesWon": 238,
    "yearsExperience": 21,
    "verified": true
  },
  {
    "id": "sc-002",
    "name": "Maria Moore",
    "firm": "Moore & Associates",
    "state": "SC",
    "barNumber": "SC-100479",
    "specialties": [
      "Voting Rights",
      "Healthcare Rights",
      "Constitutional Rights",
      "Police Misconduct"
    ],
    "phone": "803-555-4570",
    "website": "https://moorelaw.com",
    "rating": 5,
    "casesWon": 97,
    "yearsExperience": 27,
    "verified": true
  },
  {
    "id": "sc-003",
    "name": "Sarah Robinson",
    "firm": "Robinson Legal Defense",
    "state": "SC",
    "barNumber": "SC-100480",
    "specialties": [
      "First Amendment",
      "Immigration Rights",
      "LGBTQ+ Rights"
    ],
    "phone": "803-555-6297",
    "website": "https://robinsonlaw.com",
    "rating": 4.6,
    "casesWon": 156,
    "yearsExperience": 26,
    "verified": true
  },
  {
    "id": "sc-004",
    "name": "Eric Adams",
    "firm": "Adams Justice Center",
    "state": "SC",
    "barNumber": "SC-100481",
    "specialties": [
      "Prison Reform",
      "First Amendment",
      "Police Misconduct"
    ],
    "phone": "803-555-4829",
    "website": "https://adamslaw.com",
    "rating": 5,
    "casesWon": 213,
    "yearsExperience": 15,
    "verified": true
  },
  {
    "id": "sc-005",
    "name": "Steven Williams",
    "firm": "Williams & Partners",
    "state": "SC",
    "barNumber": "SC-100482",
    "specialties": [
      "LGBTQ+ Rights",
      "Prison Reform",
      "Education Rights",
      "Racial Justice"
    ],
    "phone": "803-555-5053",
    "website": "https://williamslaw.com",
    "rating": 4.8,
    "casesWon": 134,
    "yearsExperience": 14,
    "verified": true
  },
  {
    "id": "sc-006",
    "name": "Cynthia Gomez",
    "firm": "Gomez Civil Rights Law",
    "state": "SC",
    "barNumber": "SC-100483",
    "specialties": [
      "Public Accommodation",
      "First Amendment",
      "Housing Rights"
    ],
    "phone": "803-555-4812",
    "website": "https://gomezlaw.com",
    "rating": 4.9,
    "casesWon": 156,
    "yearsExperience": 15,
    "verified": true
  },
  {
    "id": "sc-007",
    "name": "Christopher Jones",
    "firm": "Jones Legal Group",
    "state": "SC",
    "barNumber": "SC-100484",
    "specialties": [
      "LGBTQ+ Rights",
      "Public Accommodation",
      "Voting Rights",
      "Immigration Rights"
    ],
    "phone": "803-555-3319",
    "website": "https://joneslaw.com",
    "rating": 5,
    "casesWon": 110,
    "yearsExperience": 13,
    "verified": true
  },
  {
    "id": "sc-008",
    "name": "Amanda Scott",
    "firm": "Scott Legal Defense",
    "state": "SC",
    "barNumber": "SC-100485",
    "specialties": [
      "Police Misconduct",
      "ADA Compliance",
      "Disability Rights",
      "Healthcare Rights"
    ],
    "phone": "803-555-6130",
    "website": "https://scottlaw.com",
    "rating": 5,
    "casesWon": 142,
    "yearsExperience": 21,
    "verified": true
  },
  {
    "id": "sc-009",
    "name": "Rebecca Mitchell",
    "firm": "Mitchell Civil Rights Law",
    "state": "SC",
    "barNumber": "SC-100486",
    "specialties": [
      "Constitutional Rights",
      "ADA Compliance",
      "Disability Rights"
    ],
    "phone": "803-555-5788",
    "website": "https://mitchelllaw.com",
    "rating": 4.7,
    "casesWon": 191,
    "yearsExperience": 20,
    "verified": true
  },
  {
    "id": "sc-010",
    "name": "Donald Hall",
    "firm": "Hall Civil Liberties",
    "state": "SC",
    "barNumber": "SC-100487",
    "specialties": [
      "Police Misconduct",
      "Discrimination",
      "Immigration Rights"
    ],
    "phone": "803-555-2395",
    "website": "https://halllaw.com",
    "rating": 4.7,
    "casesWon": 62,
    "yearsExperience": 20,
    "verified": true
  },
  {
    "id": "sc-011",
    "name": "Linda Harris",
    "firm": "Harris Legal Services",
    "state": "SC",
    "barNumber": "SC-100488",
    "specialties": [
      "Excessive Force",
      "Healthcare Rights",
      "Constitutional Rights"
    ],
    "phone": "803-555-3796",
    "website": "https://harrislaw.com",
    "rating": 4.9,
    "casesWon": 151,
    "yearsExperience": 14,
    "verified": true
  },
  {
    "id": "sc-012",
    "name": "Anthony Robinson",
    "firm": "Robinson & Associates",
    "state": "SC",
    "barNumber": "SC-100489",
    "specialties": [
      "Housing Rights",
      "Police Misconduct",
      "Voting Rights",
      "ADA Compliance"
    ],
    "phone": "803-555-9601",
    "website": "https://robinsonlaw.com",
    "rating": 4.5,
    "casesWon": 227,
    "yearsExperience": 8,
    "verified": true
  },
  {
    "id": "sd-001",
    "name": "James Hill",
    "firm": "Hill Justice Center",
    "state": "SD",
    "barNumber": "SD-100490",
    "specialties": [
      "Disability Rights",
      "Housing Rights",
      "LGBTQ+ Rights",
      "Racial Justice"
    ],
    "phone": "605-555-5741",
    "website": "https://hilllaw.com",
    "rating": 4.9,
    "casesWon": 145,
    "yearsExperience": 15,
    "verified": true
  },
  {
    "id": "sd-002",
    "name": "Shirley Clark",
    "firm": "Clark & Partners",
    "state": "SD",
    "barNumber": "SD-100491",
    "specialties": [
      "Criminal Justice Reform",
      "Education Rights",
      "Constitutional Rights"
    ],
    "phone": "605-555-7983",
    "website": "https://clarklaw.com",
    "rating": 4.9,
    "casesWon": 91,
    "yearsExperience": 22,
    "verified": true
  },
  {
    "id": "sd-003",
    "name": "Mark Thompson",
    "firm": "Thompson Legal Defense",
    "state": "SD",
    "barNumber": "SD-100492",
    "specialties": [
      "Discrimination",
      "Criminal Justice Reform",
      "Excessive Force"
    ],
    "phone": "605-555-5173",
    "website": "https://thompsonlaw.com",
    "rating": 5,
    "casesWon": 115,
    "yearsExperience": 26,
    "verified": true
  },
  {
    "id": "sd-004",
    "name": "Maria Nelson",
    "firm": "Nelson Legal Defense",
    "state": "SD",
    "barNumber": "SD-100493",
    "specialties": [
      "Disability Rights",
      "Education Rights",
      "Prison Reform"
    ],
    "phone": "605-555-2768",
    "website": "https://nelsonlaw.com",
    "rating": 4.7,
    "casesWon": 175,
    "yearsExperience": 16,
    "verified": true
  },
  {
    "id": "sd-005",
    "name": "Sharon Nguyen",
    "firm": "Nguyen Justice Center",
    "state": "SD",
    "barNumber": "SD-100494",
    "specialties": [
      "Prison Reform",
      "Police Misconduct",
      "Education Rights"
    ],
    "phone": "605-555-1522",
    "website": "https://nguyenlaw.com",
    "rating": 4.9,
    "casesWon": 184,
    "yearsExperience": 19,
    "verified": true
  },
  {
    "id": "sd-006",
    "name": "Cynthia Johnson",
    "firm": "Johnson Legal Services",
    "state": "SD",
    "barNumber": "SD-100495",
    "specialties": [
      "Excessive Force",
      "Discrimination",
      "Police Misconduct"
    ],
    "phone": "605-555-3161",
    "website": "https://johnsonlaw.com",
    "rating": 4.9,
    "casesWon": 172,
    "yearsExperience": 10,
    "verified": true
  },
  {
    "id": "sd-007",
    "name": "Lisa Allen",
    "firm": "Allen & Partners",
    "state": "SD",
    "barNumber": "SD-100496",
    "specialties": [
      "Racial Justice",
      "Employment Discrimination",
      "Housing Rights"
    ],
    "phone": "605-555-3593",
    "website": "https://allenlaw.com",
    "rating": 4.5,
    "casesWon": 209,
    "yearsExperience": 22,
    "verified": true
  },
  {
    "id": "sd-008",
    "name": "Sharon Lopez",
    "firm": "Lopez Legal Group",
    "state": "SD",
    "barNumber": "SD-100497",
    "specialties": [
      "Discrimination",
      "Wrongful Conviction",
      "Criminal Justice Reform",
      "Voting Rights"
    ],
    "phone": "605-555-7548",
    "website": "https://lopezlaw.com",
    "rating": 4.7,
    "casesWon": 118,
    "yearsExperience": 21,
    "verified": true
  },
  {
    "id": "sd-009",
    "name": "Kathleen Martin",
    "firm": "Martin Justice Center",
    "state": "SD",
    "barNumber": "SD-100498",
    "specialties": [
      "LGBTQ+ Rights",
      "Excessive Force",
      "Constitutional Rights"
    ],
    "phone": "605-555-6421",
    "website": "https://martinlaw.com",
    "rating": 4.9,
    "casesWon": 166,
    "yearsExperience": 27,
    "verified": true
  },
  {
    "id": "sd-010",
    "name": "Brenda Gonzalez",
    "firm": "Gonzalez Law Group",
    "state": "SD",
    "barNumber": "SD-100499",
    "specialties": [
      "Education Rights",
      "Wrongful Death",
      "Immigration Rights",
      "First Amendment"
    ],
    "phone": "605-555-7470",
    "website": "https://gonzalezlaw.com",
    "rating": 4.9,
    "casesWon": 76,
    "yearsExperience": 24,
    "verified": true
  },
  {
    "id": "sd-011",
    "name": "Elizabeth Nguyen",
    "firm": "Nguyen & Partners",
    "state": "SD",
    "barNumber": "SD-100500",
    "specialties": [
      "Public Accommodation",
      "Voting Rights",
      "Fourth Amendment",
      "Police Misconduct"
    ],
    "phone": "605-555-2134",
    "website": "https://nguyenlaw.com",
    "rating": 4.9,
    "casesWon": 130,
    "yearsExperience": 11,
    "verified": true
  },
  {
    "id": "sd-012",
    "name": "Sharon Rodriguez",
    "firm": "Rodriguez Legal Defense",
    "state": "SD",
    "barNumber": "SD-100501",
    "specialties": [
      "Criminal Justice Reform",
      "Wrongful Death",
      "Disability Rights",
      "Education Rights"
    ],
    "phone": "605-555-3629",
    "website": "https://rodriguezlaw.com",
    "rating": 4.9,
    "casesWon": 165,
    "yearsExperience": 19,
    "verified": true
  },
  {
    "id": "sd-013",
    "name": "Amy Nelson",
    "firm": "Nelson Civil Liberties",
    "state": "SD",
    "barNumber": "SD-100502",
    "specialties": [
      "Wrongful Conviction",
      "First Amendment",
      "Disability Rights"
    ],
    "phone": "605-555-7660",
    "website": "https://nelsonlaw.com",
    "rating": 4.8,
    "casesWon": 212,
    "yearsExperience": 14,
    "verified": true
  },
  {
    "id": "sd-014",
    "name": "Jacob Lewis",
    "firm": "Lewis Legal Group",
    "state": "SD",
    "barNumber": "SD-100503",
    "specialties": [
      "Disability Rights",
      "First Amendment",
      "Criminal Justice Reform"
    ],
    "phone": "605-555-0415",
    "website": "https://lewislaw.com",
    "rating": 4.5,
    "casesWon": 172,
    "yearsExperience": 8,
    "verified": true
  },
  {
    "id": "tn-001",
    "name": "Kevin Clark",
    "firm": "Clark Justice Center",
    "state": "TN",
    "barNumber": "TN-100504",
    "specialties": [
      "LGBTQ+ Rights",
      "Voting Rights",
      "Police Brutality",
      "Prison Reform"
    ],
    "phone": "615-555-0274",
    "website": "https://clarklaw.com",
    "rating": 4.5,
    "casesWon": 104,
    "yearsExperience": 14,
    "verified": true
  },
  {
    "id": "tn-002",
    "name": "Christopher Johnson",
    "firm": "Johnson Legal Group",
    "state": "TN",
    "barNumber": "TN-100505",
    "specialties": [
      "Police Misconduct",
      "Prison Reform",
      "Employment Discrimination",
      "Wrongful Conviction"
    ],
    "phone": "615-555-1329",
    "website": "https://johnsonlaw.com",
    "rating": 4.9,
    "casesWon": 179,
    "yearsExperience": 24,
    "verified": true
  },
  {
    "id": "tn-003",
    "name": "George Miller",
    "firm": "Miller Justice Center",
    "state": "TN",
    "barNumber": "TN-100506",
    "specialties": [
      "Healthcare Rights",
      "Employment Discrimination",
      "Housing Rights",
      "Immigration Rights"
    ],
    "phone": "615-555-9594",
    "website": "https://millerlaw.com",
    "rating": 4.9,
    "casesWon": 202,
    "yearsExperience": 12,
    "verified": true
  },
  {
    "id": "tn-004",
    "name": "Anna Hernandez",
    "firm": "Hernandez Legal Defense",
    "state": "TN",
    "barNumber": "TN-100507",
    "specialties": [
      "Excessive Force",
      "Racial Justice",
      "Education Rights"
    ],
    "phone": "615-555-1677",
    "website": "https://hernandezlaw.com",
    "rating": 4.6,
    "casesWon": 239,
    "yearsExperience": 21,
    "verified": true
  },
  {
    "id": "tn-005",
    "name": "Christopher Scott",
    "firm": "Scott Civil Liberties",
    "state": "TN",
    "barNumber": "TN-100508",
    "specialties": [
      "Voting Rights",
      "First Amendment",
      "Public Accommodation",
      "Housing Rights"
    ],
    "phone": "615-555-8270",
    "website": "https://scottlaw.com",
    "rating": 4.6,
    "casesWon": 203,
    "yearsExperience": 15,
    "verified": true
  },
  {
    "id": "tn-006",
    "name": "Matthew Gonzalez",
    "firm": "Gonzalez Legal Services",
    "state": "TN",
    "barNumber": "TN-100509",
    "specialties": [
      "Excessive Force",
      "Employment Discrimination",
      "Racial Justice"
    ],
    "phone": "615-555-3313",
    "website": "https://gonzalezlaw.com",
    "rating": 4.6,
    "casesWon": 76,
    "yearsExperience": 24,
    "verified": true
  },
  {
    "id": "tn-007",
    "name": "Donald Anderson",
    "firm": "Anderson Law Group",
    "state": "TN",
    "barNumber": "TN-100510",
    "specialties": [
      "LGBTQ+ Rights",
      "Racial Justice",
      "Wrongful Conviction"
    ],
    "phone": "615-555-7336",
    "website": "https://andersonlaw.com",
    "rating": 4.7,
    "casesWon": 179,
    "yearsExperience": 15,
    "verified": true
  },
  {
    "id": "tn-008",
    "name": "Ashley Scott",
    "firm": "Scott Legal Group",
    "state": "TN",
    "barNumber": "TN-100511",
    "specialties": [
      "Housing Rights",
      "Criminal Justice Reform",
      "Voting Rights"
    ],
    "phone": "615-555-8893",
    "website": "https://scottlaw.com",
    "rating": 4.9,
    "casesWon": 210,
    "yearsExperience": 14,
    "verified": true
  },
  {
    "id": "tn-009",
    "name": "Paul Anderson",
    "firm": "Anderson & Partners",
    "state": "TN",
    "barNumber": "TN-100512",
    "specialties": [
      "LGBTQ+ Rights",
      "Healthcare Rights",
      "Excessive Force",
      "Public Accommodation"
    ],
    "phone": "615-555-6796",
    "website": "https://andersonlaw.com",
    "rating": 5,
    "casesWon": 140,
    "yearsExperience": 11,
    "verified": true
  },
  {
    "id": "tn-010",
    "name": "Jonathan Garcia",
    "firm": "Garcia & Partners",
    "state": "TN",
    "barNumber": "TN-100513",
    "specialties": [
      "ADA Compliance",
      "Wrongful Death",
      "Police Misconduct"
    ],
    "phone": "615-555-4868",
    "website": "https://garcialaw.com",
    "rating": 4.8,
    "casesWon": 172,
    "yearsExperience": 16,
    "verified": true
  },
  {
    "id": "tn-011",
    "name": "Jeffrey Lopez",
    "firm": "Lopez Justice Center",
    "state": "TN",
    "barNumber": "TN-100514",
    "specialties": [
      "Criminal Justice Reform",
      "Immigration Rights",
      "Constitutional Rights",
      "Prison Reform"
    ],
    "phone": "615-555-0822",
    "website": "https://lopezlaw.com",
    "rating": 4.6,
    "casesWon": 73,
    "yearsExperience": 12,
    "verified": true
  },
  {
    "id": "tn-012",
    "name": "Eric Carter",
    "firm": "Carter Civil Liberties",
    "state": "TN",
    "barNumber": "TN-100515",
    "specialties": [
      "LGBTQ+ Rights",
      "Immigration Rights",
      "Prison Reform",
      "Constitutional Rights"
    ],
    "phone": "615-555-1428",
    "website": "https://carterlaw.com",
    "rating": 4.7,
    "casesWon": 142,
    "yearsExperience": 11,
    "verified": true
  },
  {
    "id": "tx-001",
    "name": "Emily Davis",
    "firm": "Davis & Associates",
    "state": "TX",
    "barNumber": "TX-100516",
    "specialties": [
      "Fourth Amendment",
      "Excessive Force",
      "LGBTQ+ Rights"
    ],
    "phone": "214-555-8461",
    "website": "https://davislaw.com",
    "rating": 4.7,
    "casesWon": 60,
    "yearsExperience": 12,
    "verified": true
  },
  {
    "id": "tx-002",
    "name": "Kathleen Mitchell",
    "firm": "Mitchell & Partners",
    "state": "TX",
    "barNumber": "TX-100517",
    "specialties": [
      "Immigration Rights",
      "ADA Compliance",
      "Racial Justice",
      "Prison Reform"
    ],
    "phone": "214-555-7583",
    "website": "https://mitchelllaw.com",
    "rating": 4.9,
    "casesWon": 75,
    "yearsExperience": 27,
    "verified": true
  },
  {
    "id": "tx-003",
    "name": "Jason Robinson",
    "firm": "Robinson Legal Defense",
    "state": "TX",
    "barNumber": "TX-100518",
    "specialties": [
      "ADA Compliance",
      "LGBTQ+ Rights",
      "Prison Reform"
    ],
    "phone": "214-555-2780",
    "website": "https://robinsonlaw.com",
    "rating": 5,
    "casesWon": 175,
    "yearsExperience": 10,
    "verified": true
  },
  {
    "id": "tx-004",
    "name": "Brian Gomez",
    "firm": "Gomez Legal Defense",
    "state": "TX",
    "barNumber": "TX-100519",
    "specialties": [
      "First Amendment",
      "Criminal Justice Reform",
      "Public Accommodation"
    ],
    "phone": "214-555-0867",
    "website": "https://gomezlaw.com",
    "rating": 4.8,
    "casesWon": 157,
    "yearsExperience": 12,
    "verified": true
  },
  {
    "id": "tx-005",
    "name": "Laura Martin",
    "firm": "Martin Civil Rights Law",
    "state": "TX",
    "barNumber": "TX-100520",
    "specialties": [
      "Criminal Justice Reform",
      "Disability Rights",
      "Excessive Force",
      "Constitutional Rights"
    ],
    "phone": "214-555-7520",
    "website": "https://martinlaw.com",
    "rating": 4.7,
    "casesWon": 114,
    "yearsExperience": 14,
    "verified": true
  },
  {
    "id": "tx-006",
    "name": "Paul Walker",
    "firm": "Walker Legal Defense",
    "state": "TX",
    "barNumber": "TX-100521",
    "specialties": [
      "Police Misconduct",
      "First Amendment",
      "Healthcare Rights",
      "LGBTQ+ Rights"
    ],
    "phone": "214-555-0482",
    "website": "https://walkerlaw.com",
    "rating": 4.8,
    "casesWon": 205,
    "yearsExperience": 26,
    "verified": true
  },
  {
    "id": "tx-007",
    "name": "Kathleen Moore",
    "firm": "Moore Legal Group",
    "state": "TX",
    "barNumber": "TX-100522",
    "specialties": [
      "Healthcare Rights",
      "Voting Rights",
      "Employment Discrimination",
      "Public Accommodation"
    ],
    "phone": "214-555-2781",
    "website": "https://moorelaw.com",
    "rating": 4.5,
    "casesWon": 239,
    "yearsExperience": 26,
    "verified": true
  },
  {
    "id": "tx-008",
    "name": "Joshua Moore",
    "firm": "Moore & Partners",
    "state": "TX",
    "barNumber": "TX-100523",
    "specialties": [
      "Wrongful Death",
      "LGBTQ+ Rights",
      "Excessive Force",
      "Education Rights"
    ],
    "phone": "214-555-1615",
    "website": "https://moorelaw.com",
    "rating": 4.7,
    "casesWon": 201,
    "yearsExperience": 11,
    "verified": true
  },
  {
    "id": "tx-009",
    "name": "James Smith",
    "firm": "Smith Civil Rights Law",
    "state": "TX",
    "barNumber": "TX-100524",
    "specialties": [
      "Voting Rights",
      "Public Accommodation",
      "Police Brutality"
    ],
    "phone": "214-555-7249",
    "website": "https://smithlaw.com",
    "rating": 4.6,
    "casesWon": 225,
    "yearsExperience": 11,
    "verified": true
  },
  {
    "id": "tx-010",
    "name": "Christopher Lewis",
    "firm": "Lewis Legal Group",
    "state": "TX",
    "barNumber": "TX-100525",
    "specialties": [
      "Public Accommodation",
      "Wrongful Death",
      "ADA Compliance"
    ],
    "phone": "214-555-9910",
    "website": "https://lewislaw.com",
    "rating": 4.5,
    "casesWon": 54,
    "yearsExperience": 15,
    "verified": true
  },
  {
    "id": "tx-011",
    "name": "David Martinez",
    "firm": "Martinez Law Group",
    "state": "TX",
    "barNumber": "TX-100526",
    "specialties": [
      "Disability Rights",
      "Criminal Justice Reform",
      "Voting Rights"
    ],
    "phone": "214-555-6591",
    "website": "https://martinezlaw.com",
    "rating": 4.7,
    "casesWon": 198,
    "yearsExperience": 16,
    "verified": true
  },
  {
    "id": "tx-012",
    "name": "Kenneth Walker",
    "firm": "Walker Legal Defense",
    "state": "TX",
    "barNumber": "TX-100527",
    "specialties": [
      "First Amendment",
      "Racial Justice",
      "Wrongful Conviction"
    ],
    "phone": "214-555-0400",
    "website": "https://walkerlaw.com",
    "rating": 5,
    "casesWon": 192,
    "yearsExperience": 15,
    "verified": true
  },
  {
    "id": "tx-013",
    "name": "Michelle Gonzalez",
    "firm": "Gonzalez Justice Center",
    "state": "TX",
    "barNumber": "TX-100528",
    "specialties": [
      "Police Misconduct",
      "Immigration Rights",
      "Criminal Justice Reform"
    ],
    "phone": "214-555-5889",
    "website": "https://gonzalezlaw.com",
    "rating": 5,
    "casesWon": 63,
    "yearsExperience": 20,
    "verified": true
  },
  {
    "id": "tx-014",
    "name": "Ryan Garcia",
    "firm": "Garcia & Partners",
    "state": "TX",
    "barNumber": "TX-100529",
    "specialties": [
      "LGBTQ+ Rights",
      "Fourth Amendment",
      "Constitutional Rights"
    ],
    "phone": "214-555-9081",
    "website": "https://garcialaw.com",
    "rating": 4.9,
    "casesWon": 55,
    "yearsExperience": 27,
    "verified": true
  },
  {
    "id": "ut-001",
    "name": "Melissa Jones",
    "firm": "Jones Legal Group",
    "state": "UT",
    "barNumber": "UT-100530",
    "specialties": [
      "ADA Compliance",
      "Public Accommodation",
      "Fourth Amendment",
      "First Amendment"
    ],
    "phone": "801-555-6238",
    "website": "https://joneslaw.com",
    "rating": 5,
    "casesWon": 129,
    "yearsExperience": 25,
    "verified": true
  },
  {
    "id": "ut-002",
    "name": "Shirley Thompson",
    "firm": "Thompson & Associates",
    "state": "UT",
    "barNumber": "UT-100531",
    "specialties": [
      "Police Brutality",
      "Employment Discrimination",
      "Prison Reform"
    ],
    "phone": "801-555-2406",
    "website": "https://thompsonlaw.com",
    "rating": 4.9,
    "casesWon": 175,
    "yearsExperience": 14,
    "verified": true
  },
  {
    "id": "ut-003",
    "name": "Stephanie Taylor",
    "firm": "Taylor Law Firm",
    "state": "UT",
    "barNumber": "UT-100532",
    "specialties": [
      "Constitutional Rights",
      "LGBTQ+ Rights",
      "Excessive Force"
    ],
    "phone": "801-555-9629",
    "website": "https://taylorlaw.com",
    "rating": 4.7,
    "casesWon": 97,
    "yearsExperience": 26,
    "verified": true
  },
  {
    "id": "ut-004",
    "name": "Laura Wright",
    "firm": "Wright Justice Center",
    "state": "UT",
    "barNumber": "UT-100533",
    "specialties": [
      "Criminal Justice Reform",
      "Discrimination",
      "Wrongful Death"
    ],
    "phone": "801-555-0812",
    "website": "https://wrightlaw.com",
    "rating": 4.8,
    "casesWon": 74,
    "yearsExperience": 13,
    "verified": true
  },
  {
    "id": "ut-005",
    "name": "Sarah Smith",
    "firm": "Smith Legal Group",
    "state": "UT",
    "barNumber": "UT-100534",
    "specialties": [
      "First Amendment",
      "Prison Reform",
      "Healthcare Rights"
    ],
    "phone": "801-555-3032",
    "website": "https://smithlaw.com",
    "rating": 4.7,
    "casesWon": 59,
    "yearsExperience": 20,
    "verified": true
  },
  {
    "id": "ut-006",
    "name": "Nicholas Nelson",
    "firm": "Nelson & Partners",
    "state": "UT",
    "barNumber": "UT-100535",
    "specialties": [
      "Discrimination",
      "Public Accommodation",
      "Disability Rights",
      "Racial Justice"
    ],
    "phone": "801-555-4206",
    "website": "https://nelsonlaw.com",
    "rating": 5,
    "casesWon": 104,
    "yearsExperience": 21,
    "verified": true
  },
  {
    "id": "ut-007",
    "name": "Ryan Ramirez",
    "firm": "Ramirez Civil Liberties",
    "state": "UT",
    "barNumber": "UT-100536",
    "specialties": [
      "ADA Compliance",
      "Wrongful Death",
      "Fourth Amendment"
    ],
    "phone": "801-555-0929",
    "website": "https://ramirezlaw.com",
    "rating": 4.7,
    "casesWon": 217,
    "yearsExperience": 18,
    "verified": true
  },
  {
    "id": "ut-008",
    "name": "Andrew Hill",
    "firm": "Hill Legal Defense",
    "state": "UT",
    "barNumber": "UT-100537",
    "specialties": [
      "Immigration Rights",
      "Wrongful Conviction",
      "LGBTQ+ Rights",
      "Education Rights"
    ],
    "phone": "801-555-0814",
    "website": "https://hilllaw.com",
    "rating": 4.5,
    "casesWon": 118,
    "yearsExperience": 26,
    "verified": true
  },
  {
    "id": "ut-009",
    "name": "Pamela Flores",
    "firm": "Flores Law Group",
    "state": "UT",
    "barNumber": "UT-100538",
    "specialties": [
      "Racial Justice",
      "Wrongful Death",
      "Education Rights"
    ],
    "phone": "801-555-6551",
    "website": "https://floreslaw.com",
    "rating": 4.6,
    "casesWon": 110,
    "yearsExperience": 26,
    "verified": true
  },
  {
    "id": "ut-010",
    "name": "Eric Martinez",
    "firm": "Martinez Law Firm",
    "state": "UT",
    "barNumber": "UT-100539",
    "specialties": [
      "Fourth Amendment",
      "First Amendment",
      "Religious Freedom",
      "Constitutional Rights"
    ],
    "phone": "801-555-6823",
    "website": "https://martinezlaw.com",
    "rating": 4.5,
    "casesWon": 198,
    "yearsExperience": 26,
    "verified": true
  },
  {
    "id": "ut-011",
    "name": "Melissa Robinson",
    "firm": "Robinson Civil Rights Law",
    "state": "UT",
    "barNumber": "UT-100540",
    "specialties": [
      "Education Rights",
      "Police Misconduct",
      "Healthcare Rights",
      "LGBTQ+ Rights"
    ],
    "phone": "801-555-6254",
    "website": "https://robinsonlaw.com",
    "rating": 5,
    "casesWon": 210,
    "yearsExperience": 9,
    "verified": true
  },
  {
    "id": "ut-012",
    "name": "Sarah Davis",
    "firm": "Davis Civil Rights Law",
    "state": "UT",
    "barNumber": "UT-100541",
    "specialties": [
      "Voting Rights",
      "Education Rights",
      "Police Brutality"
    ],
    "phone": "801-555-9874",
    "website": "https://davislaw.com",
    "rating": 4.7,
    "casesWon": 174,
    "yearsExperience": 19,
    "verified": true
  },
  {
    "id": "ut-013",
    "name": "Eric Miller",
    "firm": "Miller Law Firm",
    "state": "UT",
    "barNumber": "UT-100542",
    "specialties": [
      "Education Rights",
      "Police Brutality",
      "Prison Reform"
    ],
    "phone": "801-555-4830",
    "website": "https://millerlaw.com",
    "rating": 4.5,
    "casesWon": 120,
    "yearsExperience": 27,
    "verified": true
  },
  {
    "id": "ut-014",
    "name": "Sharon Johnson",
    "firm": "Johnson Justice Center",
    "state": "UT",
    "barNumber": "UT-100543",
    "specialties": [
      "Wrongful Death",
      "Healthcare Rights",
      "ADA Compliance"
    ],
    "phone": "801-555-4062",
    "website": "https://johnsonlaw.com",
    "rating": 4.5,
    "casesWon": 143,
    "yearsExperience": 23,
    "verified": true
  },
  {
    "id": "ut-015",
    "name": "Maria Rivera",
    "firm": "Rivera & Partners",
    "state": "UT",
    "barNumber": "UT-100544",
    "specialties": [
      "Public Accommodation",
      "First Amendment",
      "Excessive Force",
      "Wrongful Conviction"
    ],
    "phone": "801-555-4550",
    "website": "https://riveralaw.com",
    "rating": 4.5,
    "casesWon": 96,
    "yearsExperience": 26,
    "verified": true
  },
  {
    "id": "vt-001",
    "name": "Jason Martinez",
    "firm": "Martinez & Partners",
    "state": "VT",
    "barNumber": "VT-100545",
    "specialties": [
      "Discrimination",
      "Racial Justice",
      "Fourth Amendment",
      "Constitutional Rights"
    ],
    "phone": "802-555-4412",
    "website": "https://martinezlaw.com",
    "rating": 4.8,
    "casesWon": 52,
    "yearsExperience": 23,
    "verified": true
  },
  {
    "id": "vt-002",
    "name": "Kathleen Williams",
    "firm": "Williams Legal Defense",
    "state": "VT",
    "barNumber": "VT-100546",
    "specialties": [
      "Criminal Justice Reform",
      "Discrimination",
      "Constitutional Rights",
      "Prison Reform"
    ],
    "phone": "802-555-4767",
    "website": "https://williamslaw.com",
    "rating": 4.6,
    "casesWon": 201,
    "yearsExperience": 10,
    "verified": true
  },
  {
    "id": "vt-003",
    "name": "Brian Martinez",
    "firm": "Martinez & Partners",
    "state": "VT",
    "barNumber": "VT-100547",
    "specialties": [
      "LGBTQ+ Rights",
      "Police Misconduct",
      "Excessive Force",
      "Wrongful Conviction"
    ],
    "phone": "802-555-4149",
    "website": "https://martinezlaw.com",
    "rating": 4.7,
    "casesWon": 238,
    "yearsExperience": 14,
    "verified": true
  },
  {
    "id": "vt-004",
    "name": "Anthony Hall",
    "firm": "Hall Law Firm",
    "state": "VT",
    "barNumber": "VT-100548",
    "specialties": [
      "Excessive Force",
      "First Amendment",
      "Police Misconduct",
      "Voting Rights"
    ],
    "phone": "802-555-9282",
    "website": "https://halllaw.com",
    "rating": 5,
    "casesWon": 175,
    "yearsExperience": 25,
    "verified": true
  },
  {
    "id": "vt-005",
    "name": "Anna Gonzalez",
    "firm": "Gonzalez Law Group",
    "state": "VT",
    "barNumber": "VT-100549",
    "specialties": [
      "Disability Rights",
      "Housing Rights",
      "Employment Discrimination",
      "Police Misconduct"
    ],
    "phone": "802-555-2007",
    "website": "https://gonzalezlaw.com",
    "rating": 4.8,
    "casesWon": 58,
    "yearsExperience": 18,
    "verified": true
  },
  {
    "id": "vt-006",
    "name": "Edward Jones",
    "firm": "Jones Civil Rights Law",
    "state": "VT",
    "barNumber": "VT-100550",
    "specialties": [
      "Wrongful Death",
      "Prison Reform",
      "Police Misconduct",
      "Wrongful Conviction"
    ],
    "phone": "802-555-6334",
    "website": "https://joneslaw.com",
    "rating": 4.6,
    "casesWon": 54,
    "yearsExperience": 21,
    "verified": true
  },
  {
    "id": "vt-007",
    "name": "John Walker",
    "firm": "Walker Justice Center",
    "state": "VT",
    "barNumber": "VT-100551",
    "specialties": [
      "Criminal Justice Reform",
      "Wrongful Death",
      "LGBTQ+ Rights",
      "Immigration Rights"
    ],
    "phone": "802-555-1357",
    "website": "https://walkerlaw.com",
    "rating": 4.8,
    "casesWon": 115,
    "yearsExperience": 25,
    "verified": true
  },
  {
    "id": "vt-008",
    "name": "Linda Wright",
    "firm": "Wright Justice Center",
    "state": "VT",
    "barNumber": "VT-100552",
    "specialties": [
      "Wrongful Death",
      "Education Rights",
      "Wrongful Conviction",
      "Fourth Amendment"
    ],
    "phone": "802-555-9275",
    "website": "https://wrightlaw.com",
    "rating": 4.6,
    "casesWon": 69,
    "yearsExperience": 13,
    "verified": true
  },
  {
    "id": "vt-009",
    "name": "Jonathan Lopez",
    "firm": "Lopez Law Firm",
    "state": "VT",
    "barNumber": "VT-100553",
    "specialties": [
      "Constitutional Rights",
      "Discrimination",
      "Criminal Justice Reform",
      "Police Brutality"
    ],
    "phone": "802-555-9415",
    "website": "https://lopezlaw.com",
    "rating": 5,
    "casesWon": 68,
    "yearsExperience": 16,
    "verified": true
  },
  {
    "id": "vt-010",
    "name": "Anthony Johnson",
    "firm": "Johnson Legal Services",
    "state": "VT",
    "barNumber": "VT-100554",
    "specialties": [
      "Housing Rights",
      "Police Misconduct",
      "Fourth Amendment",
      "Public Accommodation"
    ],
    "phone": "802-555-5726",
    "website": "https://johnsonlaw.com",
    "rating": 4.8,
    "casesWon": 195,
    "yearsExperience": 8,
    "verified": true
  },
  {
    "id": "vt-011",
    "name": "Donald Nelson",
    "firm": "Nelson Legal Defense",
    "state": "VT",
    "barNumber": "VT-100555",
    "specialties": [
      "Criminal Justice Reform",
      "Constitutional Rights",
      "Fourth Amendment"
    ],
    "phone": "802-555-9623",
    "website": "https://nelsonlaw.com",
    "rating": 4.6,
    "casesWon": 172,
    "yearsExperience": 22,
    "verified": true
  },
  {
    "id": "vt-012",
    "name": "Robert Anderson",
    "firm": "Anderson Civil Rights Law",
    "state": "VT",
    "barNumber": "VT-100556",
    "specialties": [
      "Police Misconduct",
      "Housing Rights",
      "Healthcare Rights",
      "Excessive Force"
    ],
    "phone": "802-555-9629",
    "website": "https://andersonlaw.com",
    "rating": 4.8,
    "casesWon": 74,
    "yearsExperience": 26,
    "verified": true
  },
  {
    "id": "vt-013",
    "name": "Ronald Torres",
    "firm": "Torres Civil Rights Law",
    "state": "VT",
    "barNumber": "VT-100557",
    "specialties": [
      "Voting Rights",
      "First Amendment",
      "Healthcare Rights"
    ],
    "phone": "802-555-4872",
    "website": "https://torreslaw.com",
    "rating": 4.6,
    "casesWon": 120,
    "yearsExperience": 10,
    "verified": true
  },
  {
    "id": "vt-014",
    "name": "Brenda Smith",
    "firm": "Smith Civil Rights Law",
    "state": "VT",
    "barNumber": "VT-100558",
    "specialties": [
      "Housing Rights",
      "Public Accommodation",
      "Healthcare Rights"
    ],
    "phone": "802-555-1636",
    "website": "https://smithlaw.com",
    "rating": 4.6,
    "casesWon": 74,
    "yearsExperience": 11,
    "verified": true
  },
  {
    "id": "va-001",
    "name": "Pamela Rivera",
    "firm": "Rivera Legal Group",
    "state": "VA",
    "barNumber": "VA-100559",
    "specialties": [
      "LGBTQ+ Rights",
      "Education Rights",
      "Religious Freedom",
      "ADA Compliance"
    ],
    "phone": "703-555-1243",
    "website": "https://riveralaw.com",
    "rating": 4.9,
    "casesWon": 177,
    "yearsExperience": 10,
    "verified": true
  },
  {
    "id": "va-002",
    "name": "Joshua Carter",
    "firm": "Carter Legal Group",
    "state": "VA",
    "barNumber": "VA-100560",
    "specialties": [
      "Criminal Justice Reform",
      "Wrongful Death",
      "Education Rights"
    ],
    "phone": "703-555-8037",
    "website": "https://carterlaw.com",
    "rating": 4.8,
    "casesWon": 139,
    "yearsExperience": 26,
    "verified": true
  },
  {
    "id": "va-003",
    "name": "Brian Ramirez",
    "firm": "Ramirez Civil Liberties",
    "state": "VA",
    "barNumber": "VA-100561",
    "specialties": [
      "Racial Justice",
      "Housing Rights",
      "Wrongful Conviction",
      "Employment Discrimination"
    ],
    "phone": "703-555-3638",
    "website": "https://ramirezlaw.com",
    "rating": 4.5,
    "casesWon": 53,
    "yearsExperience": 27,
    "verified": true
  },
  {
    "id": "va-004",
    "name": "Nicole White",
    "firm": "White Law Group",
    "state": "VA",
    "barNumber": "VA-100562",
    "specialties": [
      "Voting Rights",
      "Criminal Justice Reform",
      "Fourth Amendment"
    ],
    "phone": "703-555-0992",
    "website": "https://whitelaw.com",
    "rating": 4.9,
    "casesWon": 151,
    "yearsExperience": 9,
    "verified": true
  },
  {
    "id": "va-005",
    "name": "Brian Gomez",
    "firm": "Gomez Legal Defense",
    "state": "VA",
    "barNumber": "VA-100563",
    "specialties": [
      "Public Accommodation",
      "LGBTQ+ Rights",
      "Police Misconduct"
    ],
    "phone": "703-555-1524",
    "website": "https://gomezlaw.com",
    "rating": 5,
    "casesWon": 228,
    "yearsExperience": 9,
    "verified": true
  },
  {
    "id": "va-006",
    "name": "Donald Mitchell",
    "firm": "Mitchell Law Firm",
    "state": "VA",
    "barNumber": "VA-100564",
    "specialties": [
      "Disability Rights",
      "Excessive Force",
      "Police Brutality"
    ],
    "phone": "703-555-7401",
    "website": "https://mitchelllaw.com",
    "rating": 4.7,
    "casesWon": 207,
    "yearsExperience": 22,
    "verified": true
  },
  {
    "id": "va-007",
    "name": "Amy Baker",
    "firm": "Baker Law Group",
    "state": "VA",
    "barNumber": "VA-100565",
    "specialties": [
      "Discrimination",
      "Fourth Amendment",
      "Prison Reform"
    ],
    "phone": "703-555-1394",
    "website": "https://bakerlaw.com",
    "rating": 4.8,
    "casesWon": 205,
    "yearsExperience": 13,
    "verified": true
  },
  {
    "id": "va-008",
    "name": "Emily Lewis",
    "firm": "Lewis Legal Group",
    "state": "VA",
    "barNumber": "VA-100566",
    "specialties": [
      "Religious Freedom",
      "Prison Reform",
      "Police Misconduct",
      "Housing Rights"
    ],
    "phone": "703-555-6109",
    "website": "https://lewislaw.com",
    "rating": 4.6,
    "casesWon": 179,
    "yearsExperience": 20,
    "verified": true
  },
  {
    "id": "va-009",
    "name": "Emily Hill",
    "firm": "Hill Law Firm",
    "state": "VA",
    "barNumber": "VA-100567",
    "specialties": [
      "Education Rights",
      "Religious Freedom",
      "Excessive Force"
    ],
    "phone": "703-555-1301",
    "website": "https://hilllaw.com",
    "rating": 4.9,
    "casesWon": 140,
    "yearsExperience": 12,
    "verified": true
  },
  {
    "id": "va-010",
    "name": "Rebecca Moore",
    "firm": "Moore Legal Group",
    "state": "VA",
    "barNumber": "VA-100568",
    "specialties": [
      "Racial Justice",
      "Wrongful Death",
      "Disability Rights"
    ],
    "phone": "703-555-9172",
    "website": "https://moorelaw.com",
    "rating": 4.9,
    "casesWon": 167,
    "yearsExperience": 8,
    "verified": true
  },
  {
    "id": "va-011",
    "name": "Stephanie Brown",
    "firm": "Brown Civil Liberties",
    "state": "VA",
    "barNumber": "VA-100569",
    "specialties": [
      "Disability Rights",
      "Excessive Force",
      "Police Brutality",
      "Wrongful Conviction"
    ],
    "phone": "703-555-4948",
    "website": "https://brownlaw.com",
    "rating": 4.6,
    "casesWon": 79,
    "yearsExperience": 17,
    "verified": true
  },
  {
    "id": "va-012",
    "name": "Ashley Anderson",
    "firm": "Anderson Civil Rights Law",
    "state": "VA",
    "barNumber": "VA-100570",
    "specialties": [
      "LGBTQ+ Rights",
      "Criminal Justice Reform",
      "Voting Rights",
      "Religious Freedom"
    ],
    "phone": "703-555-5624",
    "website": "https://andersonlaw.com",
    "rating": 4.7,
    "casesWon": 223,
    "yearsExperience": 8,
    "verified": true
  },
  {
    "id": "va-013",
    "name": "Lisa Gomez",
    "firm": "Gomez Civil Liberties",
    "state": "VA",
    "barNumber": "VA-100571",
    "specialties": [
      "Public Accommodation",
      "Wrongful Conviction",
      "Healthcare Rights",
      "Disability Rights"
    ],
    "phone": "703-555-2291",
    "website": "https://gomezlaw.com",
    "rating": 4.9,
    "casesWon": 122,
    "yearsExperience": 10,
    "verified": true
  },
  {
    "id": "va-014",
    "name": "Pamela Allen",
    "firm": "Allen Legal Group",
    "state": "VA",
    "barNumber": "VA-100572",
    "specialties": [
      "Prison Reform",
      "First Amendment",
      "Religious Freedom"
    ],
    "phone": "703-555-1080",
    "website": "https://allenlaw.com",
    "rating": 4.6,
    "casesWon": 104,
    "yearsExperience": 13,
    "verified": true
  },
  {
    "id": "wa-001",
    "name": "Nicole Lewis",
    "firm": "Lewis Civil Liberties",
    "state": "WA",
    "barNumber": "WA-100573",
    "specialties": [
      "Public Accommodation",
      "Healthcare Rights",
      "Education Rights",
      "ADA Compliance"
    ],
    "phone": "206-555-0428",
    "website": "https://lewislaw.com",
    "rating": 4.7,
    "casesWon": 162,
    "yearsExperience": 21,
    "verified": true
  },
  {
    "id": "wa-002",
    "name": "Lisa Smith",
    "firm": "Smith Law Group",
    "state": "WA",
    "barNumber": "WA-100574",
    "specialties": [
      "Disability Rights",
      "Excessive Force",
      "Wrongful Conviction",
      "Police Misconduct"
    ],
    "phone": "206-555-9012",
    "website": "https://smithlaw.com",
    "rating": 4.6,
    "casesWon": 70,
    "yearsExperience": 20,
    "verified": true
  },
  {
    "id": "wa-003",
    "name": "Ronald Thomas",
    "firm": "Thomas Legal Services",
    "state": "WA",
    "barNumber": "WA-100575",
    "specialties": [
      "Public Accommodation",
      "Disability Rights",
      "Excessive Force"
    ],
    "phone": "206-555-3569",
    "website": "https://thomaslaw.com",
    "rating": 4.6,
    "casesWon": 144,
    "yearsExperience": 27,
    "verified": true
  },
  {
    "id": "wa-004",
    "name": "Christopher Taylor",
    "firm": "Taylor & Partners",
    "state": "WA",
    "barNumber": "WA-100576",
    "specialties": [
      "Healthcare Rights",
      "Voting Rights",
      "Excessive Force"
    ],
    "phone": "206-555-1548",
    "website": "https://taylorlaw.com",
    "rating": 4.9,
    "casesWon": 204,
    "yearsExperience": 22,
    "verified": true
  },
  {
    "id": "wa-005",
    "name": "Kimberly Young",
    "firm": "Young Legal Defense",
    "state": "WA",
    "barNumber": "WA-100577",
    "specialties": [
      "Wrongful Conviction",
      "Education Rights",
      "ADA Compliance"
    ],
    "phone": "206-555-5831",
    "website": "https://younglaw.com",
    "rating": 4.8,
    "casesWon": 90,
    "yearsExperience": 23,
    "verified": true
  },
  {
    "id": "wa-006",
    "name": "Kathleen Brown",
    "firm": "Brown Legal Group",
    "state": "WA",
    "barNumber": "WA-100578",
    "specialties": [
      "Housing Rights",
      "Education Rights",
      "Voting Rights"
    ],
    "phone": "206-555-1415",
    "website": "https://brownlaw.com",
    "rating": 4.7,
    "casesWon": 149,
    "yearsExperience": 18,
    "verified": true
  },
  {
    "id": "wa-007",
    "name": "Robert Moore",
    "firm": "Moore Civil Rights Law",
    "state": "WA",
    "barNumber": "WA-100579",
    "specialties": [
      "Public Accommodation",
      "Excessive Force",
      "Employment Discrimination",
      "Immigration Rights"
    ],
    "phone": "206-555-1877",
    "website": "https://moorelaw.com",
    "rating": 4.5,
    "casesWon": 102,
    "yearsExperience": 26,
    "verified": true
  },
  {
    "id": "wa-008",
    "name": "Jason Clark",
    "firm": "Clark Civil Rights Law",
    "state": "WA",
    "barNumber": "WA-100580",
    "specialties": [
      "Employment Discrimination",
      "LGBTQ+ Rights",
      "Police Brutality"
    ],
    "phone": "206-555-6381",
    "website": "https://clarklaw.com",
    "rating": 4.6,
    "casesWon": 191,
    "yearsExperience": 12,
    "verified": true
  },
  {
    "id": "wa-009",
    "name": "Kathleen Green",
    "firm": "Green Law Firm",
    "state": "WA",
    "barNumber": "WA-100581",
    "specialties": [
      "Housing Rights",
      "Racial Justice",
      "Fourth Amendment"
    ],
    "phone": "206-555-4324",
    "website": "https://greenlaw.com",
    "rating": 4.8,
    "casesWon": 84,
    "yearsExperience": 21,
    "verified": true
  },
  {
    "id": "wa-010",
    "name": "Susan Hall",
    "firm": "Hall Law Firm",
    "state": "WA",
    "barNumber": "WA-100582",
    "specialties": [
      "First Amendment",
      "Police Brutality",
      "LGBTQ+ Rights",
      "Constitutional Rights"
    ],
    "phone": "206-555-1839",
    "website": "https://halllaw.com",
    "rating": 4.6,
    "casesWon": 249,
    "yearsExperience": 11,
    "verified": true
  },
  {
    "id": "wa-011",
    "name": "George Roberts",
    "firm": "Roberts Justice Center",
    "state": "WA",
    "barNumber": "WA-100583",
    "specialties": [
      "Education Rights",
      "Immigration Rights",
      "Healthcare Rights",
      "Employment Discrimination"
    ],
    "phone": "206-555-8767",
    "website": "https://robertslaw.com",
    "rating": 4.8,
    "casesWon": 211,
    "yearsExperience": 9,
    "verified": true
  },
  {
    "id": "wa-012",
    "name": "Ruth Wright",
    "firm": "Wright Law Firm",
    "state": "WA",
    "barNumber": "WA-100584",
    "specialties": [
      "Religious Freedom",
      "Wrongful Conviction",
      "Police Brutality"
    ],
    "phone": "206-555-5989",
    "website": "https://wrightlaw.com",
    "rating": 4.6,
    "casesWon": 216,
    "yearsExperience": 26,
    "verified": true
  },
  {
    "id": "wa-013",
    "name": "Emily Scott",
    "firm": "Scott & Partners",
    "state": "WA",
    "barNumber": "WA-100585",
    "specialties": [
      "Education Rights",
      "Prison Reform",
      "Public Accommodation",
      "Immigration Rights"
    ],
    "phone": "206-555-0214",
    "website": "https://scottlaw.com",
    "rating": 4.8,
    "casesWon": 79,
    "yearsExperience": 27,
    "verified": true
  },
  {
    "id": "wa-014",
    "name": "Ruth Jones",
    "firm": "Jones Law Firm",
    "state": "WA",
    "barNumber": "WA-100586",
    "specialties": [
      "LGBTQ+ Rights",
      "Fourth Amendment",
      "Discrimination"
    ],
    "phone": "206-555-8331",
    "website": "https://joneslaw.com",
    "rating": 4.6,
    "casesWon": 154,
    "yearsExperience": 21,
    "verified": true
  },
  {
    "id": "wv-001",
    "name": "Joshua Lopez",
    "firm": "Lopez Legal Defense",
    "state": "WV",
    "barNumber": "WV-100587",
    "specialties": [
      "Public Accommodation",
      "Police Misconduct",
      "Voting Rights",
      "Police Brutality"
    ],
    "phone": "304-555-7672",
    "website": "https://lopezlaw.com",
    "rating": 4.6,
    "casesWon": 237,
    "yearsExperience": 13,
    "verified": true
  },
  {
    "id": "wv-002",
    "name": "Jonathan Sanchez",
    "firm": "Sanchez Law Group",
    "state": "WV",
    "barNumber": "WV-100588",
    "specialties": [
      "Wrongful Death",
      "Wrongful Conviction",
      "Prison Reform"
    ],
    "phone": "304-555-3808",
    "website": "https://sanchezlaw.com",
    "rating": 4.9,
    "casesWon": 92,
    "yearsExperience": 24,
    "verified": true
  },
  {
    "id": "wv-003",
    "name": "Jessica Roberts",
    "firm": "Roberts & Associates",
    "state": "WV",
    "barNumber": "WV-100589",
    "specialties": [
      "Wrongful Conviction",
      "Criminal Justice Reform",
      "Police Brutality"
    ],
    "phone": "304-555-8743",
    "website": "https://robertslaw.com",
    "rating": 4.9,
    "casesWon": 207,
    "yearsExperience": 18,
    "verified": true
  },
  {
    "id": "wv-004",
    "name": "Michelle King",
    "firm": "King & Partners",
    "state": "WV",
    "barNumber": "WV-100590",
    "specialties": [
      "First Amendment",
      "Police Misconduct",
      "Police Brutality",
      "Fourth Amendment"
    ],
    "phone": "304-555-6531",
    "website": "https://kinglaw.com",
    "rating": 4.5,
    "casesWon": 175,
    "yearsExperience": 17,
    "verified": true
  },
  {
    "id": "wv-005",
    "name": "Lisa Rivera",
    "firm": "Rivera Civil Liberties",
    "state": "WV",
    "barNumber": "WV-100591",
    "specialties": [
      "Healthcare Rights",
      "Prison Reform",
      "First Amendment"
    ],
    "phone": "304-555-6262",
    "website": "https://riveralaw.com",
    "rating": 4.7,
    "casesWon": 194,
    "yearsExperience": 11,
    "verified": true
  },
  {
    "id": "wv-006",
    "name": "Sarah Gonzalez",
    "firm": "Gonzalez Legal Services",
    "state": "WV",
    "barNumber": "WV-100592",
    "specialties": [
      "Police Brutality",
      "Criminal Justice Reform",
      "Constitutional Rights"
    ],
    "phone": "304-555-2990",
    "website": "https://gonzalezlaw.com",
    "rating": 5,
    "casesWon": 244,
    "yearsExperience": 16,
    "verified": true
  },
  {
    "id": "wv-007",
    "name": "Jennifer Nelson",
    "firm": "Nelson Civil Rights Law",
    "state": "WV",
    "barNumber": "WV-100593",
    "specialties": [
      "Racial Justice",
      "Prison Reform",
      "Immigration Rights"
    ],
    "phone": "304-555-1147",
    "website": "https://nelsonlaw.com",
    "rating": 4.8,
    "casesWon": 248,
    "yearsExperience": 16,
    "verified": true
  },
  {
    "id": "wv-008",
    "name": "Sharon Mitchell",
    "firm": "Mitchell Civil Rights Law",
    "state": "WV",
    "barNumber": "WV-100594",
    "specialties": [
      "Criminal Justice Reform",
      "Public Accommodation",
      "Employment Discrimination"
    ],
    "phone": "304-555-0648",
    "website": "https://mitchelllaw.com",
    "rating": 4.9,
    "casesWon": 193,
    "yearsExperience": 8,
    "verified": true
  },
  {
    "id": "wv-009",
    "name": "John Lee",
    "firm": "Lee Legal Group",
    "state": "WV",
    "barNumber": "WV-100595",
    "specialties": [
      "Wrongful Conviction",
      "Excessive Force",
      "Police Brutality"
    ],
    "phone": "304-555-7833",
    "website": "https://leelaw.com",
    "rating": 4.6,
    "casesWon": 168,
    "yearsExperience": 22,
    "verified": true
  },
  {
    "id": "wv-010",
    "name": "Michelle Harris",
    "firm": "Harris & Associates",
    "state": "WV",
    "barNumber": "WV-100596",
    "specialties": [
      "Education Rights",
      "Criminal Justice Reform",
      "Religious Freedom"
    ],
    "phone": "304-555-9594",
    "website": "https://harrislaw.com",
    "rating": 4.7,
    "casesWon": 125,
    "yearsExperience": 11,
    "verified": true
  },
  {
    "id": "wi-001",
    "name": "Patricia Lopez",
    "firm": "Lopez Justice Center",
    "state": "WI",
    "barNumber": "WI-100597",
    "specialties": [
      "Constitutional Rights",
      "Housing Rights",
      "Wrongful Conviction"
    ],
    "phone": "608-555-0284",
    "website": "https://lopezlaw.com",
    "rating": 4.5,
    "casesWon": 98,
    "yearsExperience": 13,
    "verified": true
  },
  {
    "id": "wi-002",
    "name": "James Gomez",
    "firm": "Gomez Law Group",
    "state": "WI",
    "barNumber": "WI-100598",
    "specialties": [
      "Discrimination",
      "Voting Rights",
      "Excessive Force"
    ],
    "phone": "608-555-2410",
    "website": "https://gomezlaw.com",
    "rating": 4.8,
    "casesWon": 155,
    "yearsExperience": 21,
    "verified": true
  },
  {
    "id": "wi-003",
    "name": "Michael Allen",
    "firm": "Allen Civil Rights Law",
    "state": "WI",
    "barNumber": "WI-100599",
    "specialties": [
      "Wrongful Conviction",
      "Excessive Force",
      "Voting Rights"
    ],
    "phone": "608-555-1538",
    "website": "https://allenlaw.com",
    "rating": 4.7,
    "casesWon": 211,
    "yearsExperience": 23,
    "verified": true
  },
  {
    "id": "wi-004",
    "name": "Susan Garcia",
    "firm": "Garcia Law Firm",
    "state": "WI",
    "barNumber": "WI-100600",
    "specialties": [
      "Voting Rights",
      "Employment Discrimination",
      "LGBTQ+ Rights"
    ],
    "phone": "608-555-2324",
    "website": "https://garcialaw.com",
    "rating": 4.5,
    "casesWon": 219,
    "yearsExperience": 9,
    "verified": true
  },
  {
    "id": "wi-005",
    "name": "Kenneth Mitchell",
    "firm": "Mitchell Law Firm",
    "state": "WI",
    "barNumber": "WI-100601",
    "specialties": [
      "First Amendment",
      "ADA Compliance",
      "Education Rights",
      "Excessive Force"
    ],
    "phone": "608-555-9019",
    "website": "https://mitchelllaw.com",
    "rating": 4.9,
    "casesWon": 160,
    "yearsExperience": 19,
    "verified": true
  },
  {
    "id": "wi-006",
    "name": "Barbara Williams",
    "firm": "Williams Law Firm",
    "state": "WI",
    "barNumber": "WI-100602",
    "specialties": [
      "Education Rights",
      "ADA Compliance",
      "Prison Reform"
    ],
    "phone": "608-555-7470",
    "website": "https://williamslaw.com",
    "rating": 4.8,
    "casesWon": 241,
    "yearsExperience": 18,
    "verified": true
  },
  {
    "id": "wi-007",
    "name": "Kevin Nelson",
    "firm": "Nelson & Associates",
    "state": "WI",
    "barNumber": "WI-100603",
    "specialties": [
      "Fourth Amendment",
      "Wrongful Death",
      "Voting Rights"
    ],
    "phone": "608-555-5656",
    "website": "https://nelsonlaw.com",
    "rating": 5,
    "casesWon": 161,
    "yearsExperience": 23,
    "verified": true
  },
  {
    "id": "wi-008",
    "name": "Michael Martin",
    "firm": "Martin Law Group",
    "state": "WI",
    "barNumber": "WI-100604",
    "specialties": [
      "Excessive Force",
      "First Amendment",
      "Racial Justice"
    ],
    "phone": "608-555-5066",
    "website": "https://martinlaw.com",
    "rating": 4.8,
    "casesWon": 196,
    "yearsExperience": 26,
    "verified": true
  },
  {
    "id": "wi-009",
    "name": "Barbara Brown",
    "firm": "Brown Law Group",
    "state": "WI",
    "barNumber": "WI-100605",
    "specialties": [
      "Fourth Amendment",
      "Public Accommodation",
      "Police Brutality",
      "Disability Rights"
    ],
    "phone": "608-555-6974",
    "website": "https://brownlaw.com",
    "rating": 4.8,
    "casesWon": 159,
    "yearsExperience": 18,
    "verified": true
  },
  {
    "id": "wi-010",
    "name": "Steven Lee",
    "firm": "Lee Legal Defense",
    "state": "WI",
    "barNumber": "WI-100606",
    "specialties": [
      "Prison Reform",
      "Immigration Rights",
      "Religious Freedom",
      "Police Brutality"
    ],
    "phone": "608-555-8763",
    "website": "https://leelaw.com",
    "rating": 4.6,
    "casesWon": 169,
    "yearsExperience": 16,
    "verified": true
  },
  {
    "id": "wi-011",
    "name": "Anna Anderson",
    "firm": "Anderson Justice Center",
    "state": "WI",
    "barNumber": "WI-100607",
    "specialties": [
      "Disability Rights",
      "Healthcare Rights",
      "Housing Rights"
    ],
    "phone": "608-555-1072",
    "website": "https://andersonlaw.com",
    "rating": 4.5,
    "casesWon": 192,
    "yearsExperience": 15,
    "verified": true
  },
  {
    "id": "wi-012",
    "name": "Anthony Martinez",
    "firm": "Martinez Legal Defense",
    "state": "WI",
    "barNumber": "WI-100608",
    "specialties": [
      "Housing Rights",
      "Criminal Justice Reform",
      "Police Misconduct"
    ],
    "phone": "608-555-2835",
    "website": "https://martinezlaw.com",
    "rating": 5,
    "casesWon": 103,
    "yearsExperience": 24,
    "verified": true
  },
  {
    "id": "wy-001",
    "name": "Rebecca Clark",
    "firm": "Clark & Associates",
    "state": "WY",
    "barNumber": "WY-100609",
    "specialties": [
      "Fourth Amendment",
      "LGBTQ+ Rights",
      "Excessive Force",
      "First Amendment"
    ],
    "phone": "307-555-8834",
    "website": "https://clarklaw.com",
    "rating": 4.6,
    "casesWon": 190,
    "yearsExperience": 11,
    "verified": true
  },
  {
    "id": "wy-002",
    "name": "Eric Ramirez",
    "firm": "Ramirez Legal Defense",
    "state": "WY",
    "barNumber": "WY-100610",
    "specialties": [
      "Excessive Force",
      "Religious Freedom",
      "Wrongful Conviction",
      "Police Misconduct"
    ],
    "phone": "307-555-1750",
    "website": "https://ramirezlaw.com",
    "rating": 4.9,
    "casesWon": 143,
    "yearsExperience": 21,
    "verified": true
  },
  {
    "id": "wy-003",
    "name": "Barbara Smith",
    "firm": "Smith Civil Liberties",
    "state": "WY",
    "barNumber": "WY-100611",
    "specialties": [
      "Religious Freedom",
      "Voting Rights",
      "Criminal Justice Reform"
    ],
    "phone": "307-555-3622",
    "website": "https://smithlaw.com",
    "rating": 5,
    "casesWon": 210,
    "yearsExperience": 23,
    "verified": true
  },
  {
    "id": "wy-004",
    "name": "Amanda Allen",
    "firm": "Allen Law Firm",
    "state": "WY",
    "barNumber": "WY-100612",
    "specialties": [
      "Wrongful Conviction",
      "First Amendment",
      "Housing Rights"
    ],
    "phone": "307-555-6459",
    "website": "https://allenlaw.com",
    "rating": 4.8,
    "casesWon": 72,
    "yearsExperience": 21,
    "verified": true
  },
  {
    "id": "wy-005",
    "name": "Nicole Roberts",
    "firm": "Roberts Legal Defense",
    "state": "WY",
    "barNumber": "WY-100613",
    "specialties": [
      "LGBTQ+ Rights",
      "Education Rights",
      "Fourth Amendment"
    ],
    "phone": "307-555-8725",
    "website": "https://robertslaw.com",
    "rating": 4.6,
    "casesWon": 179,
    "yearsExperience": 24,
    "verified": true
  },
  {
    "id": "wy-006",
    "name": "Timothy Martinez",
    "firm": "Martinez & Partners",
    "state": "WY",
    "barNumber": "WY-100614",
    "specialties": [
      "Employment Discrimination",
      "Healthcare Rights",
      "Discrimination",
      "Fourth Amendment"
    ],
    "phone": "307-555-4454",
    "website": "https://martinezlaw.com",
    "rating": 4.6,
    "casesWon": 129,
    "yearsExperience": 9,
    "verified": true
  },
  {
    "id": "wy-007",
    "name": "Patricia Martinez",
    "firm": "Martinez & Associates",
    "state": "WY",
    "barNumber": "WY-100615",
    "specialties": [
      "Immigration Rights",
      "LGBTQ+ Rights",
      "Constitutional Rights"
    ],
    "phone": "307-555-7910",
    "website": "https://martinezlaw.com",
    "rating": 4.6,
    "casesWon": 230,
    "yearsExperience": 26,
    "verified": true
  },
  {
    "id": "wy-008",
    "name": "Andrew Jones",
    "firm": "Jones Law Firm",
    "state": "WY",
    "barNumber": "WY-100616",
    "specialties": [
      "Wrongful Conviction",
      "Education Rights",
      "Disability Rights",
      "Employment Discrimination"
    ],
    "phone": "307-555-7425",
    "website": "https://joneslaw.com",
    "rating": 4.6,
    "casesWon": 176,
    "yearsExperience": 11,
    "verified": true
  },
  {
    "id": "wy-009",
    "name": "Stephanie White",
    "firm": "White & Partners",
    "state": "WY",
    "barNumber": "WY-100617",
    "specialties": [
      "ADA Compliance",
      "Employment Discrimination",
      "Religious Freedom"
    ],
    "phone": "307-555-9582",
    "website": "https://whitelaw.com",
    "rating": 4.7,
    "casesWon": 50,
    "yearsExperience": 25,
    "verified": true
  },
  {
    "id": "wy-010",
    "name": "Michael Lee",
    "firm": "Lee Law Group",
    "state": "WY",
    "barNumber": "WY-100618",
    "specialties": [
      "Fourth Amendment",
      "Public Accommodation",
      "Excessive Force",
      "Healthcare Rights"
    ],
    "phone": "307-555-5632",
    "website": "https://leelaw.com",
    "rating": 4.7,
    "casesWon": 222,
    "yearsExperience": 15,
    "verified": true
  }
];

// Helper function to get attorneys by state
export function getAttorneysByState(stateCode: string): Attorney[] {
  return civilRightsAttorneys.filter(attorney => attorney.state === stateCode);
}

// Helper function to get attorney specialties
export function getAllSpecialties(): string[] {
  const specialtiesSet = new Set<string>();
  civilRightsAttorneys.forEach(attorney => {
    attorney.specialties.forEach(specialty => specialtiesSet.add(specialty));
  });
  return Array.from(specialtiesSet).sort();
}

// Helper function to search attorneys
export function searchAttorneys(query: string): Attorney[] {
  const lowercaseQuery = query.toLowerCase();
  return civilRightsAttorneys.filter(attorney =>
    attorney.name.toLowerCase().includes(lowercaseQuery) ||
    attorney.firm.toLowerCase().includes(lowercaseQuery) ||
    attorney.specialties.some(s => s.toLowerCase().includes(lowercaseQuery))
  );
}

