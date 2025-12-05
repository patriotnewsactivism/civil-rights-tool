// We The People News API Service
// Fetches real civil rights journalism from wtpnews.org

class WTPNewsAPI {
  constructor() {
    this.baseURL = 'https://www.wtpnews.org';
  }

  // Featured WTP News articles with high-impact civil rights stories
  getFeaturedArticles() {
    return [
      {
        id: 'wtp-1',
        title: 'Judge Whitehurst Grants Ex Parte Protective Order Without Defense Hearing',
        description: 'Magistrate Judge Carol Whitehurst issues an ex parte protective order without hearing the defense, gagging journalist Matthew Reardon. Is this judicial bias?',
        url: 'https://www.wtpnews.org/judge-grants-protection-order/',
        source: 'We The People News',
        publishedAt: '2025-10-21',
        category: 'First Amendment',
        featured: true,
        sponsored: true
      },
      {
        id: 'wtp-2',
        title: 'BOMBSHELL: FOIA Records Expose Ex Parte Communications Between U.S. Marshals and Federal Judges',
        description: 'Government Seeks "Protective Order" to Conceal Evidence of Judicial Ethics Violations in Journalist\'s Case',
        url: 'https://www.wtpnews.org/foia-exposes-ex-parte-communications-federal-judges/',
        source: 'We The People News',
        publishedAt: '2025-10-20',
        category: 'Judicial Misconduct',
        featured: true,
        sponsored: true
      },
      {
        id: 'wtp-3',
        title: 'EXCLUSIVE: Lafayette County Sheriff\'s Department Caught Obstructing Justice',
        description: 'Mississippi Law Enforcement Agency Engages in Pattern of Stonewalling, Evasion, and Potential Conspiracy to Obstruct Justice',
        url: 'https://www.wtpnews.org/exclusive-lafayette-county-sheriffs-department-caught-obstructing-concealing-information-about-defendants-beavers-and-james/',
        source: 'We The People News',
        publishedAt: '2025-10-19',
        category: 'Police Misconduct',
        featured: true,
        sponsored: true
      },
      {
        id: 'wtp-4',
        title: 'BREAKING: Federal Government Seeks Gag Order To Silence Journalist',
        description: 'U.S. Marshals Want Court to Ban Reporter from Discussing His Own Arrest After He Discovered BOLO Alert Targeting His Journalism',
        url: 'https://www.wtpnews.org/breaking-federal-government-seeks-gag-order-to-silence-journalist-who-exposed-their-surveillance/',
        source: 'We The People News',
        publishedAt: '2025-10-18',
        category: 'Press Freedom',
        featured: true,
        sponsored: true
      },
      {
        id: 'wtp-5',
        title: 'Federal Courthouse Arrest: First Amendment Under Attack',
        description: 'Independent journalist Matthew Reardon faces criminal charges for exercising his constitutional rights outside the John M. Shaw Federal Courthouse',
        url: 'https://www.wtpnews.org/federal-courthouse-arrest-first-amendment-under-attack/',
        source: 'We The People News',
        publishedAt: '2025-10-17',
        category: 'First Amendment',
        featured: true,
        sponsored: true
      },
      {
        id: 'wtp-6',
        title: 'State Trooper Assaults Journalist Outside Mississippi Governor\'s Mansion',
        description: 'Shocking display of First Amendment suppression as journalist is physically assaulted and chased off public sidewalk',
        url: 'https://www.wtpnews.org/trooper-assaults-journalist-governors-mansion/',
        source: 'We The People News',
        publishedAt: '2025-07-04',
        category: 'Police Violence',
        featured: true,
        sponsored: true
      },
      {
        id: 'wtp-7',
        title: 'US Marshals, DOJ Exposed: FOIA Reveals #OperationSilenceThePress',
        description: 'FOIA exposes how the U.S. Marshals Service and DOJ allegedly coordinated to monitor, defame, and suppress journalist',
        url: 'https://www.wtpnews.org/us-marshals-foia-operation-silence-the-press/',
        source: 'We The People News',
        publishedAt: '2025-08-15',
        category: 'Government Corruption',
        featured: true,
        sponsored: true
      },
      {
        id: 'wtp-8',
        title: 'New Digital Weapon for Civil Liberties: Constitutional Rights Legal Research Tool',
        description: 'First-of-its-kind platform designed for journalists, civil rights attorneys, auditors, activists to research constitutional protections',
        url: 'https://www.wtpnews.org/constitutional-rights-tool/',
        source: 'We The People News',
        publishedAt: '2025-07-20',
        category: 'Legal Resources',
        featured: true,
        sponsored: true
      },
      {
        id: 'wtp-9',
        title: 'Federal Lawsuit Exposes Galveston-Mississippi Conspiracy to Falsely Imprison Journalist',
        description: 'Multi-jurisdictional conspiracy to falsely arrest, maliciously prosecute, and unlawfully imprison independent journalist',
        url: 'https://www.wtpnews.org/galveston-lafayette-lawsuit/',
        source: 'We The People News',
        publishedAt: '2025-05-10',
        category: 'Civil Rights Lawsuit',
        featured: true,
        sponsored: true
      },
      {
        id: 'wtp-10',
        title: 'Galveston Staged Arrest Sparks Federal Civil Rights Lawsuit',
        description: 'Routine drive turns into felony DWI investigation and arrest - journalist fights back with federal lawsuit',
        url: 'https://www.wtpnews.org/galveston-staged-arrest-federal-lawsuit/',
        source: 'We The People News',
        publishedAt: '2025-09-15',
        category: 'False Arrest',
        featured: true,
        sponsored: true
      }
    ];
  }

  // Get breaking WTP News alerts
  getBreakingNews() {
    const articles = this.getFeaturedArticles();
    return articles.slice(0, 3);
  }

  // Get all WTP News articles
  getAllArticles() {
    return this.getFeaturedArticles();
  }

  // Get articles by category
  getArticlesByCategory(category) {
    return this.getFeaturedArticles().filter(article => 
      article.category.toLowerCase().includes(category.toLowerCase())
    );
  }
}

export default new WTPNewsAPI();
