import React, { useState, useEffect } from 'react';
import { circuitCourtCaseLaw } from '../../data/circuitCourtCaseLaw';
import { 
  Gavel, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink,
  Search,
  Filter,
  BookOpen,
  Calendar,
  Tag,
  ArrowUpRight,
  Info
} from 'lucide-react';

const CircuitCourtCaseLawChart = () => {
  const [selectedCircuit, setSelectedCircuit] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterArea, setFilterArea] = useState('');
  const [expandedCases, setExpandedCases] = useState({});
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  
  // Extract all unique legal areas for filtering
  const allLegalAreas = new Set();
  Object.values(circuitCourtCaseLaw).forEach(circuit => {
    circuit.keyRulings.forEach(ruling => {
      allLegalAreas.add(ruling.area);
    });
  });
  const legalAreaOptions = Array.from(allLegalAreas).sort();

  // Filter circuits based on search and area filter
  const filteredCircuits = Object.entries(circuitCourtCaseLaw)
    .filter(([circuitId, circuit]) => {
      // Skip the Federal Circuit in the main list
      if (circuitId === 'Federal') return false;
      
      // Apply search filter
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        const circuitMatches = circuit.name.toLowerCase().includes(searchLower) || 
                              circuit.jurisdiction.toLowerCase().includes(searchLower);
        
        const rulingMatches = circuit.keyRulings.some(ruling => 
          ruling.case.toLowerCase().includes(searchLower) ||
          ruling.area.toLowerCase().includes(searchLower) ||
          ruling.holding.toLowerCase().includes(searchLower) ||
          ruling.impact.toLowerCase().includes(searchLower) ||
          ruling.significance.toLowerCase().includes(searchLower)
        );
        
        if (!circuitMatches && !rulingMatches) return false;
      }
      
      // Apply area filter
      if (filterArea) {
        return circuit.keyRulings.some(ruling => ruling.area === filterArea);
      }
      
      return true;
    })
    .sort(([aId, a], [bId, b]) => {
      // Sort by circuit number
      const aNum = aId === 'DC' ? 12 : parseInt(aId);
      const bNum = bId === 'DC' ? 12 : parseInt(bId);
      return aNum - bNum;
    });

  const handleCircuitClick = (circuitId) => {
    setSelectedCircuit(selectedCircuit === circuitId ? null : circuitId);
  };

  const toggleCaseExpansion = (circuitId, caseIndex) => {
    const key = `${circuitId}-${caseIndex}`;
    setExpandedCases(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const getCircuitColor = (circuitId) => {
    const colors = {
      '1st': 'from-blue-500 to-blue-700',
      '2nd': 'from-green-500 to-green-700',
      '3rd': 'from-yellow-500 to-yellow-700',
      '4th': 'from-red-500 to-red-700',
      '5th': 'from-purple-500 to-purple-700',
      '6th': 'from-pink-500 to-pink-700',
      '7th': 'from-indigo-500 to-indigo-700',
      '8th': 'from-orange-500 to-orange-700',
      '9th': 'from-teal-500 to-teal-700',
      '10th': 'from-cyan-500 to-cyan-700',
      '11th': 'from-lime-500 to-lime-700',
      'DC': 'from-amber-500 to-amber-700',
      'Federal': 'from-gray-500 to-gray-700'
    };
    
    return colors[circuitId] || 'from-blue-500 to-blue-700';
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 rounded-xl p-6 shadow-xl border border-white/20">
      <div className="mb-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-2">
          Circuit Court Case Law
        </h2>
        <p className="text-white/70">
          Explore significant civil rights rulings by federal circuit courts
        </p>
      </div>

      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <div className={`relative flex-1 transition-all ${isSearchFocused ? 'ring-2 ring-blue-500/50 rounded-lg' : ''}`}>
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
          <input
            type="text"
            placeholder="Search cases, areas, or holdings..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
            className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder-white/50 focus:outline-none"
          />
        </div>
        
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
          <select
            value={filterArea}
            onChange={(e) => setFilterArea(e.target.value)}
            className="bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 appearance-none"
          >
            <option value="">All Legal Areas</option>
            {legalAreaOptions.map(area => (
              <option key={area} value={area}>{area}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50 pointer-events-none" />
        </div>
      </div>

      {filteredCircuits.length === 0 ? (
        <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8 text-center">
          <Info className="h-12 w-12 text-white/30 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">No Results Found</h3>
          <p className="text-white/70">
            Try adjusting your search terms or filters to find relevant cases.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredCircuits.map(([circuitId, circuit]) => (
            <div 
              key={circuitId}
              className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden transition-all hover:border-white/20"
            >
              <button
                onClick={() => handleCircuitClick(circuitId)}
                className={`w-full flex items-center justify-between p-4 text-left focus:outline-none bg-gradient-to-r ${getCircuitColor(circuitId)} bg-opacity-10`}
              >
                <div>
                  <h3 className="text-xl font-semibold text-white flex items-center">
                    <Gavel className="h-5 w-5 mr-2" />
                    {circuit.name}
                  </h3>
                  <p className="text-white/70 text-sm">{circuit.jurisdiction}</p>
                </div>
                {selectedCircuit === circuitId ? 
                  <ChevronUp className="h-5 w-5 text-white/70" /> : 
                  <ChevronDown className="h-5 w-5 text-white/70" />
                }
              </button>
              
              {selectedCircuit === circuitId && (
                <div className="p-4">
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <BookOpen className="h-5 w-5 mr-2" />
                      Key Rulings
                    </h4>
                    <div className="space-y-4">
                      {circuit.keyRulings.map((ruling, index) => {
                        const isExpanded = expandedCases[`${circuitId}-${index}`];
                        
                        return (
                          <div 
                            key={index} 
                            className={`bg-white/5 rounded-lg overflow-hidden transition-all ${
                              isExpanded ? 'ring-2 ring-blue-500/30' : ''
                            }`}
                          >
                            <div 
                              className="p-4 cursor-pointer hover:bg-white/5"
                              onClick={() => toggleCaseExpansion(circuitId, index)}
                            >
                              <div className="flex justify-between items-start">
                                <h5 className="text-white font-medium flex items-center">
                                  {isExpanded ? 
                                    <ChevronUp className="h-4 w-4 mr-2 text-blue-400" /> : 
                                    <ChevronDown className="h-4 w-4 mr-2 text-white/50" />
                                  }
                                  {ruling.case}
                                </h5>
                                <span className="bg-white/10 text-white/80 text-xs px-2 py-1 rounded-full flex items-center">
                                  <Tag className="h-3 w-3 mr-1" />
                                  {ruling.area}
                                </span>
                              </div>
                              
                              <p className="mt-2 text-white/80 line-clamp-2">
                                <span className="font-medium">Holding:</span> {ruling.holding}
                              </p>
                              
                              {isExpanded && (
                                <div className="mt-4 space-y-3 animate-fadeIn">
                                  <div className="bg-white/5 rounded-lg p-3">
                                    <p className="text-white/90"><span className="font-medium text-white">Holding:</span> {ruling.holding}</p>
                                  </div>
                                  
                                  <div className="bg-white/5 rounded-lg p-3">
                                    <p className="text-white/90"><span className="font-medium text-white">Impact:</span> {ruling.impact}</p>
                                  </div>
                                  
                                  <div className="bg-white/5 rounded-lg p-3">
                                    <p className="text-white/90"><span className="font-medium text-white">Significance:</span> {ruling.significance}</p>
                                  </div>
                                  
                                  {ruling.date && (
                                    <div className="flex items-center text-white/60 text-sm">
                                      <Calendar className="h-4 w-4 mr-1" />
                                      {ruling.date}
                                    </div>
                                  )}
                                  
                                  {ruling.url && (
                                    <a 
                                      href={ruling.url} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm mt-2"
                                    >
                                      Read full case
                                      <ArrowUpRight className="h-3 w-3 ml-1" />
                                    </a>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
                      <Info className="h-5 w-5 mr-2" />
                      Recent Trends
                    </h4>
                    <div className="bg-white/5 rounded-lg p-4">
                      <p className="text-white/80">{circuit.recentTrends}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Federal Circuit (Special Section) */}
      <div className="mt-8">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
          <Gavel className="h-6 w-6 mr-2" />
          Federal Circuit
        </h3>
        <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden transition-all hover:border-white/20">
          <button
            onClick={() => handleCircuitClick('Federal')}
            className={`w-full flex items-center justify-between p-4 text-left focus:outline-none bg-gradient-to-r ${getCircuitColor('Federal')} bg-opacity-10`}
          >
            <div>
              <h3 className="text-xl font-semibold text-white">{circuitCourtCaseLaw['Federal'].name}</h3>
              <p className="text-white/70 text-sm">{circuitCourtCaseLaw['Federal'].jurisdiction}</p>
            </div>
            {selectedCircuit === 'Federal' ? 
              <ChevronUp className="h-5 w-5 text-white/70" /> : 
              <ChevronDown className="h-5 w-5 text-white/70" />
            }
          </button>
          
          {selectedCircuit === 'Federal' && (
            <div className="p-4">
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Key Rulings
                </h4>
                <div className="space-y-4">
                  {circuitCourtCaseLaw['Federal'].keyRulings.map((ruling, index) => {
                    const isExpanded = expandedCases[`Federal-${index}`];
                    
                    return (
                      <div 
                        key={index} 
                        className={`bg-white/5 rounded-lg overflow-hidden transition-all ${
                          isExpanded ? 'ring-2 ring-blue-500/30' : ''
                        }`}
                      >
                        <div 
                          className="p-4 cursor-pointer hover:bg-white/5"
                          onClick={() => toggleCaseExpansion('Federal', index)}
                        >
                          <div className="flex justify-between items-start">
                            <h5 className="text-white font-medium flex items-center">
                              {isExpanded ? 
                                <ChevronUp className="h-4 w-4 mr-2 text-blue-400" /> : 
                                <ChevronDown className="h-4 w-4 mr-2 text-white/50" />
                              }
                              {ruling.case}
                            </h5>
                            <span className="bg-white/10 text-white/80 text-xs px-2 py-1 rounded-full flex items-center">
                              <Tag className="h-3 w-3 mr-1" />
                              {ruling.area}
                            </span>
                          </div>
                          
                          <p className="mt-2 text-white/80 line-clamp-2">
                            <span className="font-medium">Holding:</span> {ruling.holding}
                          </p>
                          
                          {isExpanded && (
                            <div className="mt-4 space-y-3 animate-fadeIn">
                              <div className="bg-white/5 rounded-lg p-3">
                                <p className="text-white/90"><span className="font-medium text-white">Holding:</span> {ruling.holding}</p>
                              </div>
                              
                              <div className="bg-white/5 rounded-lg p-3">
                                <p className="text-white/90"><span className="font-medium text-white">Impact:</span> {ruling.impact}</p>
                              </div>
                              
                              <div className="bg-white/5 rounded-lg p-3">
                                <p className="text-white/90"><span className="font-medium text-white">Significance:</span> {ruling.significance}</p>
                              </div>
                              
                              {ruling.date && (
                                <div className="flex items-center text-white/60 text-sm">
                                  <Calendar className="h-4 w-4 mr-1" />
                                  {ruling.date}
                                </div>
                              )}
                              
                              {ruling.url && (
                                <a 
                                  href={ruling.url} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm mt-2"
                                >
                                  Read full case
                                  <ArrowUpRight className="h-3 w-3 ml-1" />
                                </a>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
                  <Info className="h-5 w-5 mr-2" />
                  Recent Trends
                </h4>
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-white/80">{circuitCourtCaseLaw['Federal'].recentTrends}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-white/50 text-sm">
          This database is updated regularly with new circuit court decisions affecting civil rights.
        </p>
      </div>
    </div>
  );
};

export default CircuitCourtCaseLawChart;