/**
 * Comprehensive circuit court case law by circuit
 * 
 * This data includes:
 * - Key civil rights cases by circuit
 * - Significant rulings and precedents
 * - Impact on civil liberties
 * - Recent developments
 */

export const circuitCourtCaseLaw = {
  "1st": {
    name: "First Circuit",
    jurisdiction: "Maine, Massachusetts, New Hampshire, Puerto Rico, Rhode Island",
    keyRulings: [
      {
        case: "Project Veritas Action Fund v. Rollins, 982 F.3d 813 (1st Cir. 2020)",
        area: "First Amendment, Recording",
        holding: "Massachusetts law prohibiting secret recording of government officials performing duties in public spaces violates the First Amendment.",
        impact: "Protected the right to secretly record government officials in public spaces, strengthening press and citizen oversight.",
        significance: "Major victory for transparency and accountability in government"
      },
      {
        case: "Glik v. Cunniffe, 655 F.3d 78 (1st Cir. 2011)",
        area: "First Amendment, Recording Police",
        holding: "The First Amendment protects the right to record police officers performing their duties in public.",
        impact: "Established clear precedent that citizens have a constitutional right to record police in public spaces.",
        significance: "Landmark case for citizen journalism and police accountability"
      }
    ],
    recentTrends: "The First Circuit has generally been protective of First Amendment rights, particularly regarding the right to record police and government officials. It has also shown a willingness to limit qualified immunity in cases of clear constitutional violations."
  },
  "2nd": {
    name: "Second Circuit",
    jurisdiction: "Connecticut, New York, Vermont",
    keyRulings: [
      {
        case: "Knight First Amendment Institute v. Trump, 928 F.3d 226 (2nd Cir. 2019)",
        area: "First Amendment, Social Media",
        holding: "President Trump violated the First Amendment by blocking critics on Twitter.",
        impact: "Established that public officials' social media accounts used for official purposes are public forums.",
        significance: "Landmark ruling on digital public forums and government social media"
      },
      {
        case: "Ragbir v. Homan, 923 F.3d 53 (2nd Cir. 2019)",
        area: "First Amendment, Immigration",
        holding: "ICE may have violated the First Amendment by targeting immigration activist for deportation.",
        impact: "Protected immigrant activists from retaliatory deportation based on protected speech.",
        significance: "Important protection for immigrant activists"
      }
    ],
    recentTrends: "The Second Circuit has been at the forefront of extending First Amendment protections to digital spaces and has shown willingness to check executive power in immigration enforcement when constitutional rights are at stake."
  },
  "5th": {
    name: "Fifth Circuit",
    jurisdiction: "Louisiana, Mississippi, Texas",
    keyRulings: [
      {
        case: "Doe v. Mckesson, 945 F.3d 818 (5th Cir. 2019)",
        area: "First Amendment, Protest Rights",
        holding: "Protest organizer could be held liable for injuries caused by another protester's violent acts.",
        impact: "Created potential chilling effect on organizing protests in Louisiana and other 5th Circuit states.",
        significance: "Controversial ruling limiting protest organizing rights in Louisiana"
      },
      {
        case: "Singleton v. Cannizzaro, 956 F.3d 773 (5th Cir. 2020)",
        area: "Prosecutorial Misconduct, Louisiana",
        holding: "No absolute immunity for prosecutors who issued fake subpoenas to witnesses.",
        impact: "Allowed civil rights lawsuit against Orleans Parish DA's office to proceed.",
        significance: "Important check on prosecutorial power in Louisiana"
      },
      {
        case: "Tucker v. City of Shreveport, 998 F.3d 165 (5th Cir. 2021)",
        area: "Fourth Amendment, Excessive Force",
        holding: "Police officer not entitled to qualified immunity for takedown of suspect during traffic stop.",
        impact: "Rare denial of qualified immunity in Louisiana excessive force case.",
        significance: "Important precedent for police accountability in Louisiana"
      },
      {
        case: "NetChoice, L.L.C. v. Paxton, 49 F.4th 439 (5th Cir. 2022)",
        area: "First Amendment, Social Media",
        holding: "Texas law prohibiting social media platforms from moderating content based on viewpoint does not violate platforms' First Amendment rights.",
        impact: "Allowed state regulation of social media content moderation policies.",
        significance: "Controversial ruling at odds with other circuits on platform speech rights"
      },
      {
        case: "Texas v. United States, 809 F.3d 134 (5th Cir. 2015)",
        area: "Immigration",
        holding: "Upheld injunction against Obama administration's DAPA program for undocumented immigrants.",
        impact: "Blocked implementation of protections for millions of undocumented immigrants.",
        significance: "Major restriction on executive action in immigration policy"
      },
      {
        case: "Whole Woman's Health v. Paxton, 10 F.4th 430 (5th Cir. 2021)",
        area: "Reproductive Rights",
        holding: "Upheld Texas law banning common second-trimester abortion procedure.",
        impact: "Restricted abortion access in Texas and set precedent for other states in the circuit.",
        significance: "Significant restriction on abortion rights pre-Dobbs"
      },
      {
        case: "Turner v. Driver, 848 F.3d 678 (5th Cir. 2017)",
        area: "First Amendment, Recording Police",
        holding: "There is a First Amendment right to record police, but granted qualified immunity to officers who arrested a photographer.",
        impact: "Recognized the right to record police but limited accountability for violations.",
        significance: "Mixed ruling on police accountability and transparency"
      }
    ],
    recentTrends: "The Fifth Circuit has been notably conservative in its rulings, particularly on issues of immigration, reproductive rights, and state regulation. It has shown greater deference to state laws restricting individual rights than most other circuits, making it one of the most restrictive circuits for civil liberties."
  },
  "6th": {
    name: "Sixth Circuit",
    jurisdiction: "Kentucky, Michigan, Ohio, Tennessee",
    keyRulings: [
      {
        case: "Obergefell v. Hodges, 772 F.3d 388 (6th Cir. 2014)",
        area: "LGBTQ+ Rights",
        holding: "States could ban same-sex marriage (later overturned by Supreme Court).",
        impact: "Created circuit split that led to Supreme Court review and nationwide marriage equality.",
        significance: "Controversial ruling that prompted Supreme Court intervention"
      },
      {
        case: "Bible Believers v. Wayne County, 805 F.3d 228 (6th Cir. 2015)",
        area: "First Amendment, Heckler's Veto",
        holding: "Police violated First Amendment by removing Christian protesters from Arab festival due to hostile crowd.",
        impact: "Strengthened protections against the heckler's veto even for offensive speech.",
        significance: "Important precedent protecting unpopular speech"
      },
      {
        case: "EEOC v. R.G. & G.R. Harris Funeral Homes, 884 F.3d 560 (6th Cir. 2018)",
        area: "LGBTQ+ Employment Rights",
        holding: "Title VII prohibits discrimination against transgender employees.",
        impact: "Contributed to Supreme Court's eventual ruling in Bostock v. Clayton County.",
        significance: "Major advancement in transgender workplace protections"
      }
    ],
    recentTrends: "The Sixth Circuit has issued mixed rulings on civil rights issues, with some notable progressive decisions on LGBTQ+ rights and First Amendment protections, but also some restrictive rulings on voting rights and police accountability."
  }
};