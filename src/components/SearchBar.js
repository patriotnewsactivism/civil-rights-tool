import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, X } from 'lucide-react';
import Button from './ui/Button';

/**
 * Enhanced search bar with advanced filtering options
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onSearch - Function called when search is performed
 * @param {Array} props.filters - Available filter options
 */
const SearchBar = ({ onSearch, filters = [] }) => {
  const [query, setQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState({});
  
  // Initialize active filters
  useEffect(() => {
    const initialFilters = {};
    filters.forEach(filter => {
      initialFilters[filter.id] = filter.options ? filter.options[0].value : '';
    });
    setActiveFilters(initialFilters);
  }, [filters]);
  
  // Handle search input change
  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };
  
  // Handle filter change
  const handleFilterChange = (filterId, value) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterId]: value
    }));
  };
  
  // Handle search submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ query, filters: activeFilters });
  };
  
  // Toggle filter panel
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };
  
  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex items-center">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={query}
              onChange={handleQueryChange}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Search cases, resources, or legal information..."
            />
          </div>
          
          {filters.length > 0 && (
            <motion.button
              type="button"
              onClick={toggleFilters}
              className="ml-2 p-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              whileTap={{ scale: 0.95 }}
            >
              <Filter className="h-5 w-5" />
            </motion.button>
          )}
          
          <Button
            type="submit"
            variant="primary"
            size="md"
            className="ml-2"
          >
            Search
          </Button>
        </div>
        
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-2 p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Filters</h3>
                <button
                  type="button"
                  onClick={toggleFilters}
                  className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filters.map((filter) => (
                  <div key={filter.id} className="space-y-1">
                    <label htmlFor={filter.id} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      {filter.label}
                    </label>
                    
                    {filter.type === 'select' && (
                      <select
                        id={filter.id}
                        value={activeFilters[filter.id] || ''}
                        onChange={(e) => handleFilterChange(filter.id, e.target.value)}
                        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                      >
                        {filter.options.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    )}
                    
                    {filter.type === 'checkbox' && (
                      <div className="space-y-2">
                        {filter.options.map((option) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              id={`${filter.id}-${option.value}`}
                              type="checkbox"
                              checked={activeFilters[filter.id] === option.value}
                              onChange={() => handleFilterChange(filter.id, option.value)}
                              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor={`${filter.id}-${option.value}`} className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {filter.type === 'date' && (
                      <input
                        id={filter.id}
                        type="date"
                        value={activeFilters[filter.id] || ''}
                        onChange={(e) => handleFilterChange(filter.id, e.target.value)}
                        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                      />
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-4 flex justify-end">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="mr-2"
                  onClick={() => {
                    const resetFilters = {};
                    filters.forEach(filter => {
                      resetFilters[filter.id] = filter.options ? filter.options[0].value : '';
                    });
                    setActiveFilters(resetFilters);
                  }}
                >
                  Reset Filters
                </Button>
                <Button
                  type="submit"
                  variant="primary"
                  size="sm"
                >
                  Apply Filters
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
};

export default SearchBar;