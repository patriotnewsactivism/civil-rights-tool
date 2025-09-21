import React, { useState } from 'react';
import { Search, Filter, X, ChevronDown, ChevronUp } from 'lucide-react';
import Button from './Button';

const SearchBar = ({ onSearch, placeholder = 'Search...' }) => {
  const [query, setQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    circuit: '',
    hostility: '',
    hasStopAndIdLaw: '',
    dateRange: 'all',
    sortBy: 'relevance',
  });

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({ query, filters });
  };

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const clearFilters = () => {
    setFilters({
      circuit: '',
      hostility: '',
      hasStopAndIdLaw: '',
      dateRange: 'all',
      sortBy: 'relevance',
    });
  };

  const circuits = [
    '1st Circuit', '2nd Circuit', '3rd Circuit', '4th Circuit',
    '5th Circuit', '6th Circuit', '7th Circuit', '8th Circuit',
    '9th Circuit', '10th Circuit', '11th Circuit', 'D.C. Circuit'
  ];

  const hostilityLevels = [
    'EXTREMELY HOSTILE', 'Moderate', 'Protective'
  ];

  return (
    <div className="w-full">
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="w-full pl-10 pr-20 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="button"
            onClick={() => setShowFilters(!showFilters)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-md bg-slate-700 hover:bg-slate-600 text-gray-300"
          >
            <Filter className="h-5 w-5" />
          </button>
        </div>

        {showFilters && (
          <div className="mt-2 p-4 bg-slate-800 border border-slate-700 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white font-medium">Advanced Filters</h3>
              <button
                type="button"
                onClick={clearFilters}
                className="text-sm text-blue-400 hover:text-blue-300"
              >
                Clear all
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Circuit Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Circuit</label>
                <select
                  value={filters.circuit}
                  onChange={(e) => handleFilterChange('circuit', e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 rounded-md text-white py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">All Circuits</option>
                  {circuits.map((circuit) => (
                    <option key={circuit} value={circuit}>{circuit}</option>
                  ))}
                </select>
              </div>

              {/* Hostility Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Constitutional Approach</label>
                <select
                  value={filters.hostility}
                  onChange={(e) => handleFilterChange('hostility', e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 rounded-md text-white py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">All Approaches</option>
                  {hostilityLevels.map((level) => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>

              {/* Stop and ID Law Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Stop and ID Law</label>
                <select
                  value={filters.hasStopAndIdLaw}
                  onChange={(e) => handleFilterChange('hasStopAndIdLaw', e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 rounded-md text-white py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">All States</option>
                  <option value="true">Has Stop and ID Law</option>
                  <option value="false">No Stop and ID Law</option>
                </select>
              </div>

              {/* Date Range Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Date Range</label>
                <select
                  value={filters.dateRange}
                  onChange={(e) => handleFilterChange('dateRange', e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 rounded-md text-white py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Time</option>
                  <option value="year">Past Year</option>
                  <option value="month">Past Month</option>
                  <option value="week">Past Week</option>
                </select>
              </div>

              {/* Sort By Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Sort By</label>
                <select
                  value={filters.sortBy}
                  onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 rounded-md text-white py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="relevance">Relevance</option>
                  <option value="date_desc">Newest First</option>
                  <option value="date_asc">Oldest First</option>
                  <option value="name_asc">Name (A-Z)</option>
                  <option value="name_desc">Name (Z-A)</option>
                </select>
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <Button
                type="submit"
                variant="primary"
                size="sm"
                leftIcon={<Search className="h-4 w-4" />}
              >
                Apply Filters
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;