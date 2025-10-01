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
  Gavel,
  BookOpen,
  User,
  MapPin,
  Clock,
  Star,
  Eye,
  Share2,
  Copy,
  Printer,
  FileText,
  Briefcase,
  Users,
  TrendingUp,
  Activity
} from 'lucide-react';
import CourtListenerAPI from '../services/CourtListenerAPI.js';

const EnhancedCaseExplorer = () => {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCourt, setSelectedCourt] = useState('all');
  const [dateRange, setDateRange] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [expandedCase, setExpandedCase] = useState(null);
  const [bookmarkedCases, setBookmarkedCases] = useState([]);
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [casesPerPage] = useState(10);

  // Legal categories for filtering
  const legalCategories = [
    { value: 'all', label: 'All Categories', icon: <Briefcase className="h-4 w-4" /> },
    { value: 'Fourth Amendment', label: 'Fourth Amendment', icon: <Shield className="h-4 w-4" /> },
    { value: 'First Amendment', label: 'First Amendment', icon: <BookOpen className="h-4 w-4" /> },
    { value: 'Voting Rights', label: 'Voting Rights', icon: <Users className="h-4 w-4" /> },
    { value: 'Discrimination', label: 'Discrimination', icon: <AlertTriangle className="h-4 w-4" /> },
    { value: 'Police Misconduct', label: 'Police Misconduct', icon: <Gavel className="h-4 w-4" /> },
    { value: 'Reproductive Rights', label: 'Reproductive Rights', icon: <User className="h-4 w-4" /> },
    { value: 'LGBTQ+ Rights', label: 'LGBTQ+ Rights', icon: <Users className="h-4 w-4" /> },
    { value: 'Immigration', label: 'Immigration', icon: <MapPin className="h-4 w-4" /> },
    { value: 'Disability Rights', label: 'Disability Rights', icon: <Activity className="h-4 w-4" /> },
    { value: 'Housing Rights', label: 'Housing Rights', icon: <Home className="h-4 w-4" /> }
  ];

  // Federal courts
  const federalCourts = [
    { value: 'all', label: 'All Courts' },
    { value: 'scotus', label: 'Supreme Court' },
    { value: 'ca1', label: '1st Circuit' },
    { value: 'ca2', label: '2nd Circuit' },
    { value: 'ca3', label: '3rd Circuit' },
    { value: 'ca4', label: '4th Circuit' },
    { value: 'ca5', label: '5th Circuit' },
    { value: 'ca6', label: '6th Circuit' },
    { value: 'ca7', label: '7th Circuit' },
    { value: 'ca8', label: '8th Circuit' },
    { value: 'ca9', label: '9th Circuit' },
    { value: 'ca10', label: '10th Circuit' },
    { value: 'ca11', label: '11th Circuit' },
    { value: 'cadc', label: 'D.C. Circuit' }
  ];

  // Date ranges
  const dateRanges = [
    { value: 'all', label: 'All Time' },
    { value: 'week', label: 'Past Week' },
    { value: 'month', label: 'Past Month' },
    { value: 'year', label: 'Past Year' },
    { value: '5years', label: 'Past 5 Years' },
    { value: '2020s', label: '2020s' },
    { value: '2010s', label: '2010s' },
    { value: '2000s', label: '2000s' },
    { value: '1990s', label: '1990s' }
  ];

  // Load initial cases
  useEffect(() => {
    loadCases();
  }, []);

  // Load cases based on filters
  useEffect(() => {
    const timer = setTimeout(() => {
      loadCases();
    }, 500); // Debounce

    return () => clearTimeout(timer);
  }, [searchTerm, selectedCategory, selectedCourt, dateRange, sortBy, currentPage]);

  const loadCases = async () => {
    setLoading(true);
    setError(null);

    try {
      let searchParams = {
        page: currentPage,
        page_size: casesPerPage,
        ordering: getSortOrder(),
        q: searchTerm
      };

      // Add category filter
      if (selectedCategory !== 'all') {
        searchParams.case_type = selectedCategory;
      }

      // Add court filter
      if (selectedCourt !== 'all') {
        searchParams.court = selectedCourt;
      }

      // Add date range filter
      if (dateRange !== 'all') {
        const dateFilters = getDateRangeFilter();
        if (dateFilters.date_filed_min) searchParams.date_filed_min = dateFilters.date_filed_min;
        if (dateFilters.date_filed_max) searchParams.date_filed_max = dateFilters.date_filed_max;
      }

      let results;
      if (selectedCategory === 'all' && !searchTerm) {
        // Load landmark cases by default
        results = await CourtListenerAPI.getLandmarkCivilRightsCases(searchParams);
      } else {
        // Search with filters
        results = await CourtListenerAPI.searchByLegalArea(selectedCategory, searchParams);
      }

      setCases(results.results || []);
      setTotalPages(Math.ceil((results.count || 0) / casesPerPage));
      
    } catch (error) {
      console.error('Error loading cases:', error);
      setError('Failed to load cases. Please try again.');
      
      // Fallback to sample cases if API fails
      setCases(getSampleCases());
    } finally {
      setLoading(false);
    }
  };

  const getSortOrder = () => {
    switch (sortBy) {
      case 'date': return '-date_filed';
      case 'title': return 'case_name';
      case 'court': return 'court';
      case 'relevance': return '-score';
      default: return '-date_filed';
    }
  };

  const getDateRangeFilter = () => {
    const now = new Date();
    const filters = {};

    switch (dateRange) {
      case 'week':
        filters.date_filed_min = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
        break;
      case 'month':
        filters.date_filed_min = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
        break;
      case 'year':
        filters.date_filed_min = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
        break;
      case '5years':
        filters.date_filed_min = new Date(now.getTime() - 5 * 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
        break;
      case '2020s':
        filters.date_filed_min = '2020-01-01';
        filters.date_filed_max = '2029-12-31';
        break;
      case '2010s':
        filters.date_filed_min = '2010-01-01';
        filters.date_filed_max = '2019-12-31';
        break;
      case '2000s':
        filters.date_filed_min = '2000-01-01';
        filters.date_filed_max = '2009-12-31';
        break;
      case '1990s':
        filters.date_filed_min = '1990-01-01';
        filters.date_filed_max = '1999-12-31';
        break;
    }

    return filters;
  };

  const toggleBookmark = (caseId) => {
    setBookmarkedCases(prev => {
      const newBookmarks = [...prev];
      const index = newBookmarks.indexOf(caseId);
      
      if (index > -1) {
        newBookmarks.splice(index, 1);
      } else {
        newBookmarks.push(caseId);
      }
      
      // Save to localStorage
      localStorage.setItem('bookmarkedCases', JSON.stringify(newBookmarks));
      return newBookmarks;
    });
  };

  const expandCaseDetails = (caseId) => {
    setExpandedCase(expandedCase === caseId ? null : caseId);
  };

  const exportCase = (caseData) => {
    const caseExport = {
      title: caseData.title,
      court: caseData.court,
      date: caseData.date,
      area: caseData.area,
      summary: caseData.summary,
      impact: caseData.impact,
      url: caseData.url,
      citation: caseData.citation,
      tags: caseData.tags
    };

    const dataStr = JSON.stringify(caseExport, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `${caseData.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const copyCaseLink = (caseData) => {
    navigator.clipboard.writeText(caseData.url);
    // Could show a toast notification here
  };

  const CaseCard = ({ caseData }) => {
    const isBookmarked = bookmarkedCases.includes(caseData.id);
    const isExpanded = expandedCase === caseData.id;

    return (
      <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 transition-all duration-300 ${
        isExpanded ? 'ring-2 ring-blue-500' : ''
      }`}>
        {/* Case Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
              {caseData.title}
            </h3>
            <div className="flex items-center space-x-4 text-sm text-white/70">
              <span className="flex items-center">
                <MapPin className="h-3 w-3 mr-1" />
                {caseData.court}
              </span>
              <span className="flex items-center">
                <Calendar className="h-3 w-3 mr-1" />
                {new Date(caseData.date).toLocaleDateString()}
              </span>
              <span className="flex items-center">
                <Tag className="h-3 w-3 mr-1" />
                {caseData.area}
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => toggleBookmark(caseData.id)}
              className={`p-2 rounded-lg transition-colors ${
                isBookmarked 
                  ? 'bg-yellow-500/20 text-yellow-400' 
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
              title={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
            >
              <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={() => expandCaseDetails(caseData.id)}
              className="p-2 bg-white/10 text-white/70 hover:bg-white/20 rounded-lg transition-colors"
              title="Expand details"
            >
              <ChevronDown className={`h-4 w-4 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

        {/* Case Summary */}
        <p className="text-white/80 text-sm mb-4 line-clamp-3">
          {caseData.summary}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {caseData.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Impact Statement */}
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 mb-4">
          <p className="text-blue-200 text-sm">
            <strong>Impact:</strong> {caseData.impact}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <a
              href={caseData.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm transition-colors"
            >
              <ExternalLink className="h-3 w-3 mr-1" />
              View Case
            </a>
            <button
              onClick={() => copyCaseLink(caseData)}
              className="flex items-center px-3 py-1 bg-white/10 hover:bg-white/20 text-white rounded text-sm transition-colors"
              title="Copy case link"
            >
              <Copy className="h-3 w-3 mr-1" />
              Copy Link
            </button>
            <button
              onClick={() => exportCase(caseData)}
              className="flex items-center px-3 py-1 bg-white/10 hover:bg-white/20 text-white rounded text-sm transition-colors"
              title="Export case"
            >
              <Download className="h-3 w-3 mr-1" />
              Export
            </button>
          </div>
          <span className="text-xs text-white/60">
            {caseData.citation}
          </span>
        </div>

        {/* Expanded Details */}
        {isExpanded && (
          <div className="mt-6 pt-6 border-t border-white/10">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="font-semibold text-white mb-2">Case Details</h4>
                <div className="space-y-1 text-sm text-white/80">
                  <p><strong>Citation:</strong> {caseData.citation}</p>
                  <p><strong>Docket Number:</strong> {caseData.docket_number || 'Not available'}</p>
                  <p><strong>Judge:</strong> {caseData.judge}</p>
                  <p><strong>Precedential Status:</strong> {caseData.precedential_status}</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Legal Analysis</h4>
                <div className="bg-white/10 rounded-lg p-3">
                  <p className="text-white/80 text-sm">
                    {caseData.case_text ? caseData.case_text.substring(0, 500) + '...' : 'Full case text not available'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Case Explorer</h2>
            <p className="text-white/70">
              Search thousands of civil rights cases with CourtListener API integration
            </p>
          </div>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
              title="Grid view"
            >
              <FileText className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
              title="List view"
            >
              <BookOpen className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Bookmarked Cases Counter */}
        {bookmarkedCases.length > 0 && (
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3 mb-4">
            <div className="flex items-center">
              <Bookmark className="h-4 w-4 text-yellow-400 mr-2" />
              <p className="text-yellow-200 text-sm">
                You have {bookmarkedCases.length} bookmarked case{bookmarkedCases.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Search and Filters */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {/* Search */}
          <div className="lg:col-span-2">
            <label className="block text-white text-sm font-medium mb-2">Search Cases</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by case name, keyword, or citation..."
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">Legal Area</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {legalCategories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>

          {/* Court Filter */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">Court</label>
            <select
              value={selectedCourt}
              onChange={(e) => setSelectedCourt(e.target.value)}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {federalCourts.map(court => (
                <option key={court.value} value={court.value}>
                  {court.label}
                </option>
              ))}
            </select>
          </div>

          {/* Date Range */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">Date Range</label>
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {dateRanges.map(range => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="date">Date (Newest First)</option>
              <option value="title">Title (A-Z)</option>
              <option value="court">Court</option>
              <option value="relevance">Relevance</option>
            </select>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => {
              setSelectedCategory('Police Misconduct');
              setSearchTerm('excessive force OR police brutality');
            }}
            className="px-3 py-1 bg-white/10 hover:bg-white/20 text-white rounded text-sm transition-colors"
          >
            Police Misconduct Cases
          </button>
          <button
            onClick={() => {
              setSelectedCategory('Voting Rights');
              setSearchTerm('voting rights OR voter suppression');
            }}
            className="px-3 py-1 bg-white/10 hover:bg-white/20 text-white rounded text-sm transition-colors"
          >
            Voting Rights Cases
          </button>
          <button
            onClick={() => {
              setSelectedCategory('Discrimination');
              setSearchTerm('racial discrimination OR equal protection');
            }}
            className="px-3 py-1 bg-white/10 hover:bg-white/20 text-white rounded text-sm transition-colors"
          >
            Discrimination Cases
          </button>
          <button
            onClick={() => {
              setSelectedCourt('scotus');
              setDateRange('2020s');
            }}
            className="px-3 py-1 bg-white/10 hover:bg-white/20 text-white rounded text-sm transition-colors"
          >
            Recent Supreme Court Cases
          </button>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-12">
          <div className="flex flex-col items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
            <p className="text-white/80">Loading cases from CourtListener API...</p>
          </div>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
          <div className="flex items-center">
            <AlertTriangle className="h-5 w-5 text-red-400 mr-2" />
            <p className="text-red-200">{error}</p>
          </div>
          <button
            onClick={loadCases}
            className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded transition-colors"
          >
            Retry
          </button>
        </div>
      )}

      {/* Results Summary */}
      {!loading && !error && cases.length > 0 && (
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
          <div className="flex justify-between items-center">
            <p className="text-white/80">
              Showing {cases.length} case{cases.length !== 1 ? 's' : ''}
              {selectedCategory !== 'all' && ` in ${selectedCategory}`}
              {selectedCourt !== 'all' && ` from ${selectedCourt}`}
              {dateRange !== 'all' && ` from ${dateRange}`}
            </p>
            <div className="flex space-x-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage <= 1}
                className="px-3 py-1 bg-white/10 hover:bg-white/20 text-white rounded text-sm transition-colors disabled:opacity-50"
              >
                Previous
              </button>
              <span className="px-3 py-1 text-white/80 text-sm">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage >= totalPages}
                className="px-3 py-1 bg-white/10 hover:bg-white/20 text-white rounded text-sm transition-colors disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cases Grid/List */}
      {!loading && !error && cases.length > 0 && (
        <div className={viewMode === 'grid' 
          ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' 
          : 'space-y-4'
        }>
          {cases.map(caseData => (
            <CaseCard key={caseData.id} caseData={caseData} />
          ))}
        </div>
      )}

      {/* No Results */}
      {!loading && !error && cases.length === 0 && (
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-12">
          <div className="text-center">
            <BookOpen className="h-12 w-12 text-white/50 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No cases found</h3>
            <p className="text-white/70 mb-4">
              Try adjusting your search terms or filters to find more cases.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedCourt('all');
                setDateRange('all');
              }}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
        <div className="text-center">
          <h4 className="text-lg font-bold text-white mb-2">About CourtListener Integration</h4>
          <p className="text-white/70 mb-4">
            This tool integrates with CourtListener API to provide access to thousands of federal court decisions. 
            Cases are updated regularly from the official CourtListener database.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.courtlistener.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Visit CourtListener
            </a>
            <button
              onClick={() => window.open('https://www.courtlistener.com/api/', '_blank')}
              className="flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded transition-colors"
            >
              <Info className="h-4 w-4 mr-2" />
              API Documentation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sample cases for fallback when API is unavailable
const getSampleCases = () => {
  return [
    {
      id: 1,
      title: 'Floyd v. City of New York',
      court: '2nd Circuit Court of Appeals',
      date: '2013-08-12',
      area: 'Fourth Amendment',
      summary: 'Found that New York City\'s stop-and-frisk practices were unconstitutional and racially discriminatory.',
      impact: 'Led to significant reforms in NYPD practices and established stronger standards for proving discriminatory intent in policing.',
      url: 'https://caselaw.findlaw.com/us-2nd-circuit/1671357.html',
      tags: ['Police Misconduct', 'Racial Profiling', 'Class Action'],
      citation: '959 F. Supp. 2d 540 (S.D.N.Y. 2013)',
      precedential_status: 'Published',
      docket_number: '08-cv-1034',
      judge: 'Judge Shira A. Scheindlin',
      case_text: 'This case challenges the constitutionality of the New York City Police Department\'s ("NYPD") stop-and-frisk practices...',
      court_id: 'ca2',
      court_short_name: '2nd Cir.'
    },
    {
      id: 2,
      title: 'Garza v. Hargan',
      court: 'D.C. Circuit Court of Appeals',
      date: '2017-10-24',
      area: 'Reproductive Rights',
      summary: 'Ruled that the government cannot block undocumented immigrant minors in federal custody from accessing abortion services.',
      impact: 'Protected reproductive rights for undocumented minors in federal custody.',
      url: 'https://caselaw.findlaw.com/us-dc-circuit/1876783.html',
      tags: ['Immigration', 'Reproductive Rights'],
      citation: '874 F.3d 735 (D.C. Cir. 2017)',
      precedential_status: 'Published',
      docket_number: '17-5236',
      judge: 'Judge Patricia Millett',
      case_text: 'This case presents the question of whether the federal government may block an undocumented minor in its custody from obtaining an abortion...',
      court_id: 'cadc',
      court_short_name: 'D.C. Cir.'
    },
    {
      id: 3,
      title: 'Doe v. Boyertown Area School District',
      court: '3rd Circuit Court of Appeals',
      date: '2018-06-18',
      area: 'LGBTQ+ Rights',
      summary: 'Upheld a school district policy allowing transgender students to use bathrooms and locker rooms consistent with their gender identity.',
      impact: 'Affirmed protections for transgender students under Title IX.',
      url: 'https://caselaw.findlaw.com/us-3rd-circuit/1856789.html',
      tags: ['LGBTQ+ Rights', 'Education', 'Title IX'],
      citation: '897 F.3d 518 (3d Cir. 2018)',
      precedential_status: 'Published',
      docket_number: '17-1351',
      judge: 'Judge Theodore McKee',
      case_text: 'This appeal requires us to decide whether a school district\'s policy allowing transgender students to use bathrooms and locker rooms consistent with their gender identity...',
      court_id: 'ca3',
      court_short_name: '3d Cir.'
    },
    {
      id: 4,
      title: 'Shelby County v. Holder',
      court: 'Supreme Court of the United States',
      date: '2013-06-25',
      area: 'Voting Rights',
      summary: 'Struck down the Voting Rights Act\'s coverage formula, effectively gutting the preclearance requirement.',
      impact: 'Significantly weakened federal oversight of voting rights in states with histories of discrimination.',
      url: 'https://supreme.justia.com/cases/federal/us/570/529/',
      tags: ['Voting Rights', 'Constitutional Law'],
      citation: '570 U.S. 529 (2013)',
      precedential_status: 'Published',
      docket_number: '12-96',
      judge: 'Chief Justice John Roberts',
      case_text: 'This case concerns the constitutionality of the Voting Rights Act of 1965...',
      court_id: 'scotus',
      court_short_name: 'SCOTUS'
    },
    {
      id: 5,
      title: 'Obergefell v. Hodges',
      court: 'Supreme Court of the United States',
      date: '2015-06-26',
      area: 'LGBTQ+ Rights',
      summary: 'Established constitutional right to same-sex marriage nationwide.',
      impact: 'Legalized same-sex marriage in all 50 states and established marriage equality as a constitutional right.',
      url: 'https://supreme.justia.com/cases/federal/us/576/644/',
      tags: ['LGBTQ+ Rights', 'Marriage Equality', 'Constitutional Law'],
      citation: '576 U.S. 644 (2015)',
      precedential_status: 'Published',
      docket_number: '14-556',
      judge: 'Justice Anthony Kennedy',
      case_text: 'This case requires the Court to decide whether the Fourteenth Amendment requires a State to license a marriage between two people of the same sex...',
      court_id: 'scotus',
      court_short_name: 'SCOTUS'
    },
    {
      id: 6,
      title: 'Miranda v. Arizona',
      court: 'Supreme Court of the United States',
      date: '1966-06-13',
      area: 'Fifth Amendment',
      summary: 'Established the requirement for police to inform suspects of their constitutional rights before interrogation.',
      impact: 'Created the "Miranda rights" that must be read to suspects, protecting Fifth Amendment rights against self-incrimination.',
      url: 'https://supreme.justia.com/cases/federal/us/384/436/',
      tags: ['Fifth Amendment', 'Police Procedure', 'Constitutional Law'],
      citation: '384 U.S. 436 (1966)',
      precedential_status: 'Published',
      docket_number: '759',
      judge: 'Chief Justice Earl Warren',
      case_text: 'This case presents the question whether statements obtained from an individual who is subjected to custodial police interrogation...',
      court_id: 'scotus',
      court_short_name: 'SCOTUS'
    }
  ];
};

export default EnhancedCaseExplorer;