// CourtListener API Integration Service
// API Documentation: https://www.courtlistener.com/api/rest/v4/

const COURTLISTENER_API_BASE = 'https://www.courtlistener.com/api/rest/v4';
const API_TOKEN = import.meta.env.VITE_COURTLISTENER_API_KEY || '';

class CourtListenerAPIService {
  constructor() {
    this.baseURL = COURTLISTENER_API_BASE;
    this.headers = {
      'Authorization': `Token ${API_TOKEN}`,
      'Content-Type': 'application/json',
    };
  }

  // Search for cases by various criteria
  async searchCases(searchParams = {}) {
    try {
      const {
        q = '',
        court = '',
        judge = '',
        case_name = '',
        docket_number = '',
        case_type = '',
        precedential_status = '',
        date_filed_min = '',
        date_filed_max = '',
        ordering = '-date_filed',
        page = 1,
        page_size = 20
      } = searchParams;

      const params = new URLSearchParams();
      if (q) params.append('q', q);
      if (court) params.append('court', court);
      if (judge) params.append('judge', judge);
      if (case_name) params.append('case_name', case_name);
      if (docket_number) params.append('docket_number', docket_number);
      if (case_type) params.append('case_type', case_type);
      if (precedential_status) params.append('precedential_status', precedential_status);
      if (date_filed_min) params.append('date_filed__gte', date_filed_min);
      if (date_filed_max) params.append('date_filed__lte', date_filed_max);
      if (ordering) params.append('ordering', ordering);
      if (page) params.append('page', page);
      if (page_size) params.append('page_size', page_size);

      const response = await fetch(`${this.baseURL}/search/?${params.toString()}`, {
        headers: this.headers
      });

      if (!response.ok) {
        throw new Error(`CourtListener API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      return this.processSearchResults(data);
    } catch (error) {
      console.error('Error searching CourtListener API:', error);
      throw error;
    }
  }

  // Get case details by ID
  async getCaseDetails(caseId) {
    try {
      const response = await fetch(`${this.baseURL}/opinions/${caseId}/`, {
        headers: this.headers
      });

      if (!response.ok) {
        throw new Error(`CourtListener API error: ${response.status} ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching case details:', error);
      throw error;
    }
  }

  // Get court information
  async getCourts() {
    try {
      const response = await fetch(`${this.baseURL}/courts/`, {
        headers: this.headers
      });

      if (!response.ok) {
        throw new Error(`CourtListener API error: ${response.status} ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching courts:', error);
      throw error;
    }
  }

  // Search for civil rights cases specifically
  async searchCivilRightsCases(searchParams = {}) {
    const civilRightsQuery = 'civil rights OR discrimination OR "equal protection" OR "due process" OR "first amendment" OR "fourth amendment" OR "voting rights" OR "police misconduct" OR "racial profiling"';
    
    return await this.searchCases({
      ...searchParams,
      q: searchParams.q ? `${searchParams.q} AND ${civilRightsQuery}` : civilRightsQuery,
      precedential_status: 'Published', // Focus on published, precedential cases
      ordering: '-date_filed' // Most recent first
    });
  }

  // Search for cases by legal area
  async searchByLegalArea(legalArea, searchParams = {}) {
    const areaQueries = {
      'Fourth Amendment': 'fourth amendment OR "unreasonable search" OR "probable cause" OR warrant OR seizure',
      'First Amendment': 'first amendment OR "free speech" OR "freedom of religion" OR "establishment clause" OR "free exercise"',
      'Voting Rights': 'voting rights OR "voting discrimination" OR "electoral rights" OR "poll tax" OR "literacy test"',
      'Police Misconduct': 'police misconduct OR "excessive force" OR "qualified immunity" OR "section 1983"',
      'Discrimination': 'discrimination OR "equal protection" OR "civil rights act" OR "disparate impact"',
      'Reproductive Rights': 'reproductive rights OR abortion OR "planned parenthood" OR "roe v wade"',
      'LGBTQ+ Rights': 'lgbt OR "same-sex" OR "gender identity" OR "sexual orientation" OR "marriage equality"',
      'Immigration': 'immigration OR "due process" OR deportation OR "asylum seeker" OR "undocumented"',
      'Disability Rights': 'disability OR ADA OR "americans with disabilities" OR "reasonable accommodation"',
      'Housing Rights': 'housing OR "fair housing" OR "housing discrimination" OR "redlining" OR "eviction"'
    };

    const query = areaQueries[legalArea] || legalArea;
    
    return await this.searchCases({
      ...searchParams,
      q: searchParams.q ? `${searchParams.q} AND ${query}` : query,
      ordering: '-date_filed'
    });
  }

  // Get landmark civil rights cases
  async getLandmarkCivilRightsCases() {
    const landmarkCases = [
      'Brown v. Board of Education',
      'Miranda v. Arizona',
      'Gideon v. Wainwright',
      'Roe v. Wade',
      'Loving v. Virginia',
      'Obergefell v. Hodges',
      'Shelby County v. Holder',
      'Floyd v. City of New York',
      'Garner v. Tennessee',
      'Terry v. Ohio'
    ];

    const results = [];
    for (const caseName of landmarkCases) {
      try {
        const searchResults = await this.searchCases({
          case_name: caseName,
          precedential_status: 'Published'
        });
        
        if (searchResults.results && searchResults.results.length > 0) {
          results.push(searchResults.results[0]);
        }
      } catch (error) {
        console.warn(`Failed to fetch landmark case: ${caseName}`, error);
      }
    }

    return results;
  }

  // Get recent federal circuit court decisions
  async getRecentFederalCircuitDecisions(circuit = null, daysBack = 30) {
    const dateThreshold = new Date();
    dateThreshold.setDate(dateThreshold.getDate() - daysBack);
    const dateStr = dateThreshold.toISOString().split('T')[0];

    const federalCircuits = circuit ? [circuit] : [
      'ca1', 'ca2', 'ca3', 'ca4', 'ca5', 'ca6', 'ca7', 'ca8', 'ca9', 'ca10', 'ca11', 'cadc'
    ];

    const results = [];
    for (const circ of federalCircuits) {
      try {
        const searchResults = await this.searchCases({
          court: circ,
          date_filed_min: dateStr,
          precedential_status: 'Published',
          ordering: '-date_filed',
          page_size: 10
        });
        
        if (searchResults.results) {
          results.push(...searchResults.results);
        }
      } catch (error) {
        console.warn(`Failed to fetch decisions for circuit: ${circ}`, error);
      }
    }

    return results.sort((a, b) => new Date(b.date_filed) - new Date(a.date_filed)).slice(0, 50);
  }

  // Process search results to standardize format
  processSearchResults(data) {
    if (!data.results) {
      return { results: [], count: 0, next: null, previous: null };
    }

    return {
      results: data.results.map(caseItem => ({
        id: caseItem.id,
        title: caseItem.case_name || caseItem.caseName || 'Untitled Case',
        case_name: caseItem.case_name || caseItem.caseName || 'Untitled Case',
        court: caseItem.court?.full_name || caseItem.court?.short_name || 'Unknown Court',
        date: caseItem.date_filed || caseItem.date_created,
        area: this.extractLegalArea(caseItem.case_name || caseItem.caseName || '', caseItem.plain_text || caseItem.case_text || ''),
        summary: (caseItem.plain_text || caseItem.case_text || 'Case summary not available').substring(0, 500) + '...',
        impact: this.generateImpactStatement(caseItem),
        url: caseItem.absolute_url ? `https://www.courtlistener.com${caseItem.absolute_url}` : `https://www.courtlistener.com/opinion/${caseItem.id}/`,
        tags: this.extractTags(caseItem),
        citation: caseItem.citation?.[0] || this.generateCitation(caseItem),
        precedential_status: caseItem.precedential_status || 'Unknown',
        docket_number: caseItem.docket_number,
        judge: caseItem.author_str || caseItem.judges?.[0] || 'Unknown Judge',
        case_text: caseItem.plain_text || caseItem.case_text,
        plain_text: caseItem.plain_text,
        date_filed: caseItem.date_filed || caseItem.date_created,
        court_id: caseItem.court?.id,
        court_short_name: caseItem.court?.short_name,
        cluster_id: caseItem.cluster_id
      })),
      count: data.count,
      next: data.next,
      previous: data.previous
    };
  }

  // Extract legal area from case text and name
  extractLegalArea(caseName, caseText) {
    const nameText = (caseName || '').toLowerCase();
    const text = (caseText || '').toLowerCase();
    const combinedText = nameText + ' ' + text;

    if (combinedText.includes('fourth amendment') || combinedText.includes('search') || combinedText.includes('seizure')) {
      return 'Fourth Amendment';
    } else if (combinedText.includes('first amendment') || combinedText.includes('free speech') || combinedText.includes('religion')) {
      return 'First Amendment';
    } else if (combinedText.includes('voting') || combinedText.includes('election')) {
      return 'Voting Rights';
    } else if (combinedText.includes('discrimination') || combinedText.includes('equal protection') || combinedText.includes('civil rights')) {
      return 'Discrimination';
    } else if (combinedText.includes('police') || combinedText.includes('excessive force') || combinedText.includes('qualified immunity')) {
      return 'Police Misconduct';
    } else if (combinedText.includes('abortion') || combinedText.includes('reproductive')) {
      return 'Reproductive Rights';
    } else if (combinedText.includes('immigration') || combinedText.includes('deportation')) {
      return 'Immigration';
    } else if (combinedText.includes('disability') || combinedText.includes('ada')) {
      return 'Disability Rights';
    } else if (combinedText.includes('housing') || combinedText.includes('fair housing')) {
      return 'Housing Rights';
    } else if (combinedText.includes('lgbt') || combinedText.includes('same-sex') || combinedText.includes('gender')) {
      return 'LGBTQ+ Rights';
    } else {
      return 'General Civil Rights';
    }
  }

  // Generate impact statement based on case
  generateImpactStatement(caseData) {
    const precedentialStatus = caseData.precedential_status;
    const court = caseData.court?.short_name || '';

    if (precedentialStatus === 'Published') {
      if (court.startsWith('scotus') || court.includes('supreme')) {
        return 'Landmark Supreme Court decision with nationwide impact';
      } else if (court.startsWith('ca')) {
        return 'Federal Circuit Court decision with circuit-wide precedential value';
      } else {
        return 'Published federal court decision with precedential value';
      }
    } else if (precedentialStatus === 'Unpublished') {
      return 'Unpublished decision with limited precedential value';
    } else {
      return 'Court decision with specific case impact';
    }
  }

  // Extract relevant tags from case
  extractTags(caseData) {
    const tags = [];
    const caseName = caseData.case_name || caseData.caseName || '';
    const caseText = caseData.plain_text || caseData.case_text || '';
    const text = (caseName + ' ' + caseText).toLowerCase();

    if (text.includes('police')) tags.push('Police Conduct');
    if (text.includes('discrimination')) tags.push('Discrimination');
    if (text.includes('voting')) tags.push('Voting Rights');
    if (text.includes('immigration')) tags.push('Immigration');
    if (text.includes('first amendment')) tags.push('First Amendment');
    if (text.includes('fourth amendment')) tags.push('Fourth Amendment');
    if (text.includes('due process')) tags.push('Due Process');
    if (text.includes('equal protection')) tags.push('Equal Protection');
    if (text.includes('civil rights')) tags.push('Civil Rights');
    if (text.includes('constitutional')) tags.push('Constitutional Law');

    return tags.length > 0 ? tags : ['Civil Rights'];
  }

  // Generate citation if not available
  generateCitation(caseData) {
    const court = caseData.court?.short_name || 'Unknown Court';
    const year = (caseData.date_filed || caseData.date_created || '')?.split('-')[0] || 'Unknown Year';
    const caseName = caseData.case_name || caseData.caseName || 'Untitled Case';
    return `${caseName}, ${year} WL ${caseData.id} (${court})`;
  }

  // Get cases by specific courts
  async getCasesByCourt(courtId, searchParams = {}) {
    return await this.searchCases({
      ...searchParams,
      court: courtId,
      ordering: '-date_filed'
    });
  }

  // Get recent Supreme Court cases
  async getRecentSupremeCourtCases(searchParams = {}) {
    return await this.getCasesByCourt('scotus', {
      ...searchParams,
      precedential_status: 'Published',
      page_size: 20
    });
  }

  // Get cases by specific legal topic
  async getCasesByTopic(topic, searchParams = {}) {
    const topicQueries = {
      'Police Brutality': 'police brutality OR "excessive force" OR "police misconduct" OR "section 1983"',
      'Voting Rights': 'voting rights OR "voting discrimination" OR "electoral rights" OR disenfranchisement',
      'Racial Discrimination': 'racial discrimination OR "racial profiling" OR racism OR "equal protection"',
      'LGBTQ+ Rights': 'lgbt OR "same-sex" OR transgender OR "gender identity" OR "sexual orientation"',
      'Disability Rights': 'disability OR ADA OR "americans with disabilities" OR "reasonable accommodation"',
      'Reproductive Rights': 'reproductive rights OR abortion OR "planned parenthood" OR "roe v wade"',
      'Immigration Rights': 'immigration OR "due process" OR deportation OR asylum OR "undocumented immigrant"',
      'Housing Discrimination': 'housing discrimination OR "fair housing" OR redlining OR eviction',
      'Employment Discrimination': 'employment discrimination OR "equal employment" OR "title vii" OR harassment',
      'Criminal Justice Reform': 'criminal justice reform OR sentencing OR "mass incarceration" OR "bail reform"'
    };

    const query = topicQueries[topic] || topic;
    
    return await this.searchCases({
      ...searchParams,
      q: searchParams.q ? `${searchParams.q} AND ${query}` : query,
      ordering: '-date_filed'
    });
  }
}

// Create and export singleton instance
const courtListenerAPI = new CourtListenerAPIService();
export default courtListenerAPI;