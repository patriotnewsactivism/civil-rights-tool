import React, { useState, useEffect } from 'react';
import { Search, Filter, AlertCircle, Scale, Gavel, BookOpen, ChevronRight, ChevronDown, ExternalLink } from 'lucide-react';
import Card from './ui/Card';
import Button from './ui/Button';
import SearchBar from './ui/SearchBar';

const CaseExplorer = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [expandedCase, setExpandedCase] = useState(null);

  // Sample case data
  const sampleCases = [
    {
      id: 1,
      title: 'Hiibel v. Sixth Judicial District Court of Nevada',
      citation: '542 U.S. 177 (2004)',
      court: 'Supreme Court',
      date: '2004-06-21',
      summary: 'The Supreme Court held that Nevada\'s "stop and identify" statute—which requires a person detained by an officer under suspicious circumstances to identify himself—does not violate the Fourth Amendment\'s prohibition against unreasonable searches and seizures or the Fifth Amendment\'s privilege against self-incrimination.',
      impact: 'Established that states can require suspects to disclose their names during Terry stops.',
      tags: ['Fourth Amendment', 'Fifth Amendment', 'Terry Stop', 'Identification'],
      circuit: 'Supreme Court',
      url: 'https://supreme.justia.com/cases/federal/us/542/177/'
    },
    {
      id: 2,
      title: 'Terry v. Ohio',
      citation: '392 U.S. 1 (1968)',
      court: 'Supreme Court',
      date: '1968-06-10',
      summary: 'The Supreme Court held that the Fourth Amendment prohibition on unreasonable searches and seizures is not violated when a police officer stops a suspect on the street and frisks him without probable cause to arrest, if the police officer has a reasonable suspicion that the person has committed, is committing, or is about to commit a crime and has a reasonable belief that the person "may be armed and presently dangerous."',
      impact: 'Established the "reasonable suspicion" standard for police stops.',
      tags: ['Fourth Amendment', 'Reasonable Suspicion', 'Stop and Frisk'],
      circuit: 'Supreme Court',
      url: 'https://supreme.justia.com/cases/federal/us/392/1/'
    },
    {
      id: 3,
      title: 'McKesson v. Doe',
      citation: '592 U.S. ___ (2020)',
      court: 'Supreme Court',
      date: '2020-11-02',
      summary: 'The Supreme Court vacated a Fifth Circuit decision that allowed a police officer to sue a protest organizer for injuries the officer sustained during the protest. The Court remanded the case for the Fifth Circuit to seek guidance from the Louisiana Supreme Court on state law issues.',
      impact: 'Temporarily avoided creating a precedent that could hold protest organizers liable for injuries caused by others at demonstrations.',
      tags: ['First Amendment', 'Protest Rights', 'Organizer Liability'],
      circuit: '5th Circuit',
      url: 'https://www.supremecourt.gov/opinions/20pdf/19-1108_8n59.pdf'
    },
    {
      id: 4,
      title: 'Floyd v. City of New York',
      citation: '959 F. Supp. 2d 540 (S.D.N.Y. 2013)',
      court: 'U.S. District Court for the Southern District of New York',
      date: '2013-08-12',
      summary: 'The court ruled that the New York City Police Department\'s stop and frisk practices violated the Fourth Amendment rights of minorities in the city. The court found that the NYPD had engaged in a pattern of racial profiling and unconstitutional stops.',
      impact: 'Led to significant reforms in NYPD stop and frisk practices and established stronger protections against racial profiling.',
      tags: ['Fourth Amendment', 'Equal Protection', 'Racial Profiling', 'Stop and Frisk'],
      circuit: '2nd Circuit',
      url: 'https://casetext.com/case/floyd-v-city-of-ny-2'
    },
    {
      id: 5,
      title: 'NAACP v. Alabama',
      citation: '357 U.S. 449 (1958)',
      court: 'Supreme Court',
      date: '1958-06-30',
      summary: 'The Supreme Court held that Alabama\'s demand for the NAACP\'s membership lists violated the constitutional right to freedom of association under the Due Process Clause of the Fourteenth Amendment.',
      impact: 'Established freedom of association as a fundamental right and protected the privacy of organizational membership lists.',
      tags: ['First Amendment', 'Freedom of Association', 'Civil Rights', 'Privacy'],
      circuit: 'Supreme Court',
      url: 'https://supreme.justia.com/cases/federal/us/357/449/'
    }
  ];

  const handleSearch = ({ query, filters }) => {
    setLoading(true);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      // Filter cases based on search query and filters
      let results = [...sampleCases];
      
      if (query) {
        const lowercaseQuery = query.toLowerCase();
        results = results.filter(
          case_ => 
            case_.title.toLowerCase().includes(lowercaseQuery) ||
            case_.summary.toLowerCase().includes(lowercaseQuery) ||
            case_.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
        );
      }
      
      if (filters.circuit && filters.circuit !== '') {
        results = results.filter(case_ => case_.circuit === filters.circuit);
      }
      
      // Sort results
      if (filters.sortBy === 'date_desc') {
        results.sort((a, b) => new Date(b.date) - new Date(a.date));
      } else if (filters.sortBy === 'date_asc') {
        results.sort((a, b) => new Date(a.date) - new Date(b.date));
      }
      
      setSearchResults(results);
      setLoading(false);
    }, 500);
  };

  const toggleCaseExpansion = (caseId) => {
    if (expandedCase === caseId) {
      setExpandedCase(null);
    } else {
      setExpandedCase(caseId);
    }
  };

  useEffect(() => {
    // Load initial results
    setSearchResults(sampleCases);
  }, []);

  return (
    <div className="bg-slate-900 text-white p-6 rounded-lg border border-slate-700">
      <div className="flex items-center mb-6">
        <Gavel className="h-8 w-8 text-blue-400 mr-3" />
        <h2 className="text-2xl font-bold text-blue-400">Case Law Explorer</h2>
      </div>
      
      <div className="mb-6">
        <SearchBar 
          onSearch={handleSearch}
          placeholder="Search cases by name, content, or tags..."
        />
      </div>
      
      {loading ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="space-y-4">
          {searchResults.length === 0 ? (
            <div className="text-center py-8 text-gray-400">
              <BookOpen className="h-12 w-12 mx-auto mb-3 opacity-50" />
              <p>No cases found matching your search criteria.</p>
            </div>
          ) : (
            searchResults.map(case_ => (
              <div key={case_.id} className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden">
                <div 
                  className="p-4 cursor-pointer hover:bg-slate-700/50 transition-colors"
                  onClick={() => toggleCaseExpansion(case_.id)}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-medium text-white">{case_.title}</h3>
                      <p className="text-sm text-gray-400">{case_.citation} • {case_.court} • {case_.date}</p>
                    </div>
                    <div>
                      {expandedCase === case_.id ? (
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      ) : (
                        <ChevronRight className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                  </div>
                </div>
                
                {expandedCase === case_.id && (
                  <div className="p-4 border-t border-slate-700 bg-slate-800/50">
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-300 mb-1">Summary</h4>
                      <p className="text-gray-400">{case_.summary}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-300 mb-1">Impact</h4>
                      <p className="text-gray-400">{case_.impact}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-300 mb-1">Tags</h4>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {case_.tags.map(tag => (
                          <span 
                            key={tag} 
                            className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded-md text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <a 
                        href={case_.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm"
                      >
                        View Full Case
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default CaseExplorer;