import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink, 
  Calendar, 
  Tag, 
  Bookmark, 
  Check,
  Download,
  ArrowUpDown,
  Info,
  AlertTriangle,
  Shield,
  Gavel
} from 'lucide-react';

// Sample case data
const sampleCases = [
  {
    id: 1,
    title: 'Floyd v. City of New York',
    court: '2nd Circuit',
    date: '2013-08-12',
    area: 'Fourth Amendment',
    summary: 'Found that New York City\'s stop-and-frisk practices were unconstitutional and racially discriminatory.',
    impact: 'Led to significant reforms in NYPD practices and established stronger standards for proving discriminatory intent in policing.',
    url: 'https://caselaw.findlaw.com/us-2nd-circuit/1671357.html',
    tags: ['Police Misconduct', 'Racial Profiling', 'Class Action']
  },
  {
    id: 2,
    title: 'Garza v. Hargan',
    court: 'D.C. Circuit',
    date: '2017-10-24',
    area: 'Reproductive Rights',
    summary: 'Ruled that the government cannot block undocumented immigrant minors in federal custody from accessing abortion services.',
    impact: 'Protected reproductive rights for undocumented minors in federal custody.',
    url: 'https://caselaw.findlaw.com/us-dc-circuit/1876783.html',
    tags: ['Immigration', 'Reproductive Rights']
  },
  {
    id: 3,
    title: 'Doe v. Boyertown Area School District',
    court: '3rd Circuit',
    date: '2018-06-18',
    area: 'LGBTQ+ Rights',
    summary: 'Upheld a school district policy allowing transgender students to use bathrooms and locker rooms consistent with their gender identity.',
    impact: 'Significant precedent supporting transgender student rights in schools.',
    url: 'https://caselaw.findlaw.com/us-3rd-circuit/1898422.html',
    tags: ['LGBTQ+ Rights', 'Education', 'Equal Protection']
  },
  {
    id: 4,
    title: 'Martin v. City of Boise',
    court: '9th Circuit',
    date: '2018-09-04',
    area: 'Eighth Amendment',
    summary: 'Ruled that cities cannot enforce anti-camping ordinances against homeless individuals when no alternative shelter is available.',
    impact: 'Limited criminalization of homelessness and established that punishing unavoidable acts of homeless individuals violates the Eighth Amendment.',
    url: 'https://caselaw.findlaw.com/us-9th-circuit/1903975.html',
    tags: ['Homelessness', 'Cruel and Unusual Punishment']
  },
  {
    id: 5,
    title: 'Carpenter v. United States',
    court: 'Supreme Court',
    date: '2018-06-22',
    area: 'Fourth Amendment',
    summary: 'Held that the government generally needs a warrant to access cell phone location data.',
    impact: 'Landmark decision extending Fourth Amendment protections to digital data that can reveal intimate details of life.',
    url: 'https://www.supremecourt.gov/opinions/17pdf/16-402_h315.pdf',
    tags: ['Digital Privacy', 'Surveillance', 'Fourth Amendment']
  },
  {
    id: 6,
    title: 'Bostock v. Clayton County',
    court: 'Supreme Court',
    date: '2020-06-15',
    area: 'LGBTQ+ Rights',
    summary: 'Ruled that Title VII of the Civil Rights Act of 1964 protects employees from discrimination based on sexual orientation or gender identity.',
    impact: 'Landmark decision extending workplace protections to LGBTQ+ individuals nationwide.',
    url: 'https://www.supremecourt.gov/opinions/19pdf/17-1618_hfci.pdf',
    tags: ['LGBTQ+ Rights', 'Employment Discrimination', 'Title VII']
  },
  {
    id: 7,
    title: 'Taylor v. Riojas',
    court: 'Supreme Court',
    date: '2020-11-02',
    area: 'Eighth Amendment',
    summary: 'Ruled that prison officials who kept an inmate in horrific conditions could not claim qualified immunity.',
    impact: 'Significant limitation on qualified immunity doctrine in cases of obvious constitutional violations.',
    url: 'https://www.supremecourt.gov/opinions/20pdf/19-1261_bq7c.pdf',
    tags: ['Prison Conditions', 'Qualified Immunity', 'Eighth Amendment']
  },
  {
    id: 8,
    title: 'Torres v. Madrid',
    court: 'Supreme Court',
    date: '2021-03-25',
    area: 'Fourth Amendment',
    summary: 'Held that a police officer\'s application of physical force to a person\'s body with intent to restrain constitutes a seizure, even if the person does not submit and temporarily eludes custody.',
    impact: 'Expanded definition of "seizure" under the Fourth Amendment to include unsuccessful attempts to detain a suspect.',
    url: 'https://www.supremecourt.gov/opinions/20pdf/19-292_21p3.pdf',
    tags: ['Police Use of Force', 'Fourth Amendment', 'Seizure']
  },
  {
    id: 9,
    title: 'Tanzin v. Tanvir',
    court: 'Supreme Court',
    date: '2020-12-10',
    area: 'Religious Freedom',
    summary: 'Unanimously held that the Religious Freedom Restoration Act permits lawsuits seeking money damages against federal officials in their individual capacities.',
    impact: 'Strengthened religious liberty protections by allowing monetary damages against officials who violate religious rights.',
    url: 'https://www.supremecourt.gov/opinions/20pdf/19-71_qol1.pdf',
    tags: ['Religious Freedom', 'RFRA', 'Damages']
  },
  {
    id: 10,
    title: 'Caniglia v. Strom',
    court: 'Supreme Court',
    date: '2021-05-17',
    area: 'Fourth Amendment',
    summary: 'Unanimously rejected the "community caretaking" exception to the Fourth Amendment warrant requirement for home searches.',
    impact: 'Limited police authority to enter homes without warrants, even for non-investigatory purposes.',
    url: 'https://www.supremecourt.gov/opinions/20pdf/20-157_8mjp.pdf',
    tags: ['Fourth Amendment', 'Home Searches', 'Warrant Requirement']
  },
  {
    id: 11,
    title: 'Jones v. Mississippi',
    court: 'Supreme Court',
    date: '2021-04-22',
    area: 'Eighth Amendment',
    summary: 'Held that a sentencer is not required to make a separate factual finding of permanent incorrigibility before sentencing a juvenile to life without parole.',
    impact: 'Limited prior precedents restricting juvenile life without parole sentences.',
    url: 'https://www.supremecourt.gov/opinions/20pdf/18-1259_8njq.pdf',
    tags: ['Juvenile Justice', 'Sentencing', 'Eighth Amendment']
  },
  {
    id: 12,
    title: 'Cedar Point Nursery v. Hassid',
    court: 'Supreme Court',
    date: '2021-06-23',
    area: 'First Amendment',
    summary: 'Ruled that a California regulation allowing union organizers to access agricultural employers\' property constituted a per se physical taking under the Fifth Amendment.',
    impact: 'Strengthened property rights against government-authorized intrusions and limited labor organizing access.',
    url: 'https://www.supremecourt.gov/opinions/20pdf/20-107_ihdj.pdf',
    tags: ['Property Rights', 'Labor Rights', 'Takings Clause']
  }
];

const CaseExplorer = () => {
  const [cases, setCases] = useState(sampleCases);
  const [filteredCases, setFilteredCases] = useState(sampleCases);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterArea, setFilterArea] = useState('');
  const [filterCourt, setFilterCourt] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [sortDirection, setSortDirection] = useState('desc');
  const [expandedCase, setExpandedCase] = useState(null);
  const [savedCases, setSavedCases] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  
  // Extract unique areas and courts for filters
  const areas = [...new Set(cases.map(c => c.area))].sort();
  const courts = [...new Set(cases.map(c => c.court))].sort();
  
  // Filter and sort cases
  useEffect(() => {
    let result = [...cases];
    
    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(c => 
        c.title.toLowerCase().includes(term) ||
        c.summary.toLowerCase().includes(term) ||
        c.impact.toLowerCase().includes(term) ||
        c.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }
    
    // Apply area filter
    if (filterArea) {
      result = result.filter(c => c.area === filterArea);
    }
    
    // Apply court filter
    if (filterCourt) {
      result = result.filter(c => c.court === filterCourt);
    }
    
    // Apply sorting
    result.sort((a, b) => {
      let comparison = 0;
      
      switch (sortBy) {
        case 'date':
          comparison = new Date(a.date) - new Date(b.date);
          break;
        case 'title':
          comparison = a.title.localeCompare(b.title);
          break;
        case 'court':
          comparison = a.court.localeCompare(b.court);
          break;
        default:
          comparison = 0;
      }
      
      return sortDirection === 'asc' ? comparison : -comparison;
    });
    
    setFilteredCases(result);
  }, [cases, searchTerm, filterArea, filterCourt, sortBy, sortDirection]);
  
  const toggleSort = (field) => {
    if (sortBy === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortDirection('desc');
    }
  };
  
  const toggleCaseExpansion = (id) => {
    setExpandedCase(expandedCase === id ? null : id);
  };
  
  const toggleSavedCase = (id) => {
    if (savedCases.includes(id)) {
      setSavedCases(savedCases.filter(caseId => caseId !== id));
    } else {
      setSavedCases([...savedCases, id]);
    }
  };
  
  const getCircuitColor = (court) => {
    if (court.includes('Supreme Court')) return 'bg-purple-500/20 text-purple-300';
    if (court.includes('1st')) return 'bg-blue-500/20 text-blue-300';
    if (court.includes('2nd')) return 'bg-green-500/20 text-green-300';
    if (court.includes('3rd')) return 'bg-yellow-500/20 text-yellow-300';
    if (court.includes('4th')) return 'bg-red-500/20 text-red-300';
    if (court.includes('5th')) return 'bg-purple-500/20 text-purple-300';
    if (court.includes('6th')) return 'bg-pink-500/20 text-pink-300';
    if (court.includes('7th')) return 'bg-indigo-500/20 text-indigo-300';
    if (court.includes('8th')) return 'bg-orange-500/20 text-orange-300';
    if (court.includes('9th')) return 'bg-teal-500/20 text-teal-300';
    if (court.includes('10th')) return 'bg-cyan-500/20 text-cyan-300';
    if (court.includes('11th')) return 'bg-lime-500/20 text-lime-300';
    if (court.includes('D.C.')) return 'bg-amber-500/20 text-amber-300';
    return 'bg-gray-500/20 text-gray-300';
  };
  
  const getAreaIcon = (area) => {
    if (area.includes('Fourth Amendment')) return <Shield className="h-4 w-4" />;
    if (area.includes('First Amendment')) return <Info className="h-4 w-4" />;
    if (area.includes('Eighth Amendment')) return <AlertTriangle className="h-4 w-4" />;
    return <Gavel className="h-4 w-4" />;
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 rounded-xl p-6 shadow-xl border border-white/20">
      <div className="mb-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-2">
          Civil Rights Case Explorer
        </h2>
        <p className="text-white/70">
          Search and analyze significant civil rights cases across federal courts
        </p>
      </div>
      
      {/* Search and Filters */}
      <div className="mb-6 space-y-4">
        <div className={`relative transition-all ${isSearchFocused ? 'ring-2 ring-blue-500/50 rounded-lg' : ''}`}>
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50" />
          <input
            type="text"
            placeholder="Search cases by title, summary, or tags..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
            className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder-white/50 focus:outline-none"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
            <select
              value={filterArea}
              onChange={(e) => setFilterArea(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 appearance-none"
            >
              <option value="">All Legal Areas</option>
              {areas.map(area => (
                <option key={area} value={area}>{area}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50 pointer-events-none" />
          </div>
          
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
            <select
              value={filterCourt}
              onChange={(e) => setFilterCourt(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 appearance-none"
            >
              <option value="">All Courts</option>
              {courts.map(court => (
                <option key={court} value={court}>{court}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50 pointer-events-none" />
          </div>
          
          <div className="flex space-x-2">
            <button
              onClick={() => toggleSort('date')}
              className={`flex-1 flex items-center justify-center py-3 px-4 rounded-lg border ${
                sortBy === 'date' 
                  ? 'bg-blue-600/30 border-blue-500/50 text-white' 
                  : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
              }`}
            >
              <Calendar className="h-4 w-4 mr-2" />
              Date
              {sortBy === 'date' && (
                sortDirection === 'asc' 
                  ? <ChevronUp className="h-4 w-4 ml-1" />
                  : <ChevronDown className="h-4 w-4 ml-1" />
              )}
            </button>
            
            <button
              onClick={() => toggleSort('title')}
              className={`flex-1 flex items-center justify-center py-3 px-4 rounded-lg border ${
                sortBy === 'title' 
                  ? 'bg-blue-600/30 border-blue-500/50 text-white' 
                  : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
              }`}
            >
              <ArrowUpDown className="h-4 w-4 mr-2" />
              Title
              {sortBy === 'title' && (
                sortDirection === 'asc' 
                  ? <ChevronUp className="h-4 w-4 ml-1" />
                  : <ChevronDown className="h-4 w-4 ml-1" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Results Count */}
      <div className="mb-4 flex justify-between items-center">
        <div className="text-white/70">
          {filteredCases.length} {filteredCases.length === 1 ? 'case' : 'cases'} found
        </div>
        
        <div className="text-white/70 text-sm">
          {savedCases.length > 0 && (
            <span className="flex items-center">
              <Check className="h-4 w-4 mr-1 text-blue-400" />
              {savedCases.length} saved
            </span>
          )}
        </div>
      </div>
      
      {/* Case List */}
      {filteredCases.length === 0 ? (
        <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8 text-center">
          <Info className="h-12 w-12 text-white/30 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">No Cases Found</h3>
          <p className="text-white/70">
            Try adjusting your search terms or filters to find relevant cases.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredCases.map(caseItem => {
            const isExpanded = expandedCase === caseItem.id;
            const isSaved = savedCases.includes(caseItem.id);
            
            return (
              <div 
                key={caseItem.id}
                className={`bg-white/5 backdrop-blur-sm rounded-lg border overflow-hidden transition-all ${
                  isExpanded 
                    ? 'border-blue-500/30 shadow-lg shadow-blue-500/10' 
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h3 
                      className="text-xl font-semibold text-white cursor-pointer hover:text-blue-300 transition-colors flex items-center"
                      onClick={() => toggleCaseExpansion(caseItem.id)}
                    >
                      {isExpanded ? 
                        <ChevronUp className="h-5 w-5 mr-2 text-blue-400" /> : 
                        <ChevronDown className="h-5 w-5 mr-2 text-white/50" />
                      }
                      {caseItem.title}
                    </h3>
                    
                    <button
                      onClick={() => toggleSavedCase(caseItem.id)}
                      className="text-white/70 hover:text-blue-400 transition-colors"
                      aria-label={isSaved ? "Remove from saved cases" : "Save case"}
                    >
                      {isSaved ? 
                        <Check className="h-5 w-5 text-blue-400" /> : 
                        <Bookmark className="h-5 w-5" />
                      }
                    </button>
                  </div>
                  
                  <div className="flex flex-wrap items-center mt-2 gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center ${getCircuitColor(caseItem.court)}`}>
                      <Gavel className="h-3 w-3 mr-1" />
                      {caseItem.court}
                    </span>
                    
                    <span className="bg-white/10 text-white/80 text-xs px-2 py-1 rounded-full flex items-center">
                      {getAreaIcon(caseItem.area)}
                      <span className="ml-1">{caseItem.area}</span>
                    </span>
                    
                    <span className="text-white/60 text-xs flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {caseItem.date}
                    </span>
                  </div>
                  
                  <p className="mt-3 text-white/80">
                    {caseItem.summary}
                  </p>
                  
                  {isExpanded && (
                    <div className="mt-4 space-y-4 animate-fadeIn">
                      <div className="bg-white/5 rounded-lg p-4">
                        <h4 className="text-white font-medium mb-2">Impact & Significance</h4>
                        <p className="text-white/80">{caseItem.impact}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-white font-medium mb-2">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                          {caseItem.tags.map((tag, index) => (
                            <span 
                              key={index}
                              className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded-full flex items-center"
                            >
                              <Tag className="h-3 w-3 mr-1" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center pt-2">
                        <a 
                          href={caseItem.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-400 hover:text-blue-300"
                        >
                          Read full case
                          <ExternalLink className="h-4 w-4 ml-1" />
                        </a>
                        
                        <button className="inline-flex items-center text-white/70 hover:text-white">
                          <Download className="h-4 w-4 mr-1" />
                          Download PDF
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
      
      <div className="mt-6 text-center">
        <p className="text-white/50 text-sm">
          This database is regularly updated with significant civil rights cases from federal courts.
        </p>
      </div>
    </div>
  );
};

export default CaseExplorer;