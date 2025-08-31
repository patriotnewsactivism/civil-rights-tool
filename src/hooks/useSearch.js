import { useState, useEffect, useMemo } from 'react';

/**
 * Custom hook for handling search and filtering
 * 
 * @param {Object} options - Hook options
 * @param {Array} options.data - Array of items to search
 * @param {Array} options.searchableFields - Array of fields to search
 * @param {Object} options.initialFilters - Initial filter values
 * @param {string} options.initialQuery - Initial search query
 * @returns {Object} Search state and handlers
 */
const useSearch = ({
  data = [],
  searchableFields = [],
  initialFilters = {},
  initialQuery = ''
}) => {
  const [query, setQuery] = useState(initialQuery);
  const [filters, setFilters] = useState(initialFilters);
  const [debouncedQuery, setDebouncedQuery] = useState(initialQuery);
  
  // Debounce search query
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);
    
    return () => {
      clearTimeout(timerId);
    };
  }, [query]);
  
  // Filter data based on search query and filters
  const filteredData = useMemo(() => {
    if (!data || data.length === 0) return [];
    
    return data.filter(item => {
      // Check if item matches search query
      const matchesQuery = !debouncedQuery || searchableFields.some(field => {
        const fieldValue = getNestedValue(item, field);
        return fieldValue && String(fieldValue).toLowerCase().includes(debouncedQuery.toLowerCase());
      });
      
      // Check if item matches all filters
      const matchesFilters = Object.entries(filters).every(([key, value]) => {
        // Skip empty filter values
        if (value === undefined || value === null || value === '') {
          return true;
        }
        
        const fieldValue = getNestedValue(item, key);
        
        // Handle array values (e.g., tags)
        if (Array.isArray(fieldValue)) {
          return Array.isArray(value)
            ? value.some(v => fieldValue.includes(v)) // Match any value in array
            : fieldValue.includes(value); // Match single value
        }
        
        // Handle date ranges
        if (key.endsWith('_from') && value) {
          const actualField = key.replace('_from', '');
          const dateValue = new Date(getNestedValue(item, actualField));
          const fromDate = new Date(value);
          return dateValue >= fromDate;
        }
        
        if (key.endsWith('_to') && value) {
          const actualField = key.replace('_to', '');
          const dateValue = new Date(getNestedValue(item, actualField));
          const toDate = new Date(value);
          return dateValue <= toDate;
        }
        
        // Handle boolean values
        if (typeof value === 'boolean') {
          return fieldValue === value;
        }
        
        // Handle number ranges
        if (key.endsWith('_min') && value !== undefined) {
          const actualField = key.replace('_min', '');
          const numValue = Number(getNestedValue(item, actualField));
          return numValue >= Number(value);
        }
        
        if (key.endsWith('_max') && value !== undefined) {
          const actualField = key.replace('_max', '');
          const numValue = Number(getNestedValue(item, actualField));
          return numValue <= Number(value);
        }
        
        // Default string comparison
        return String(fieldValue).toLowerCase().includes(String(value).toLowerCase());
      });
      
      return matchesQuery && matchesFilters;
    });
  }, [data, debouncedQuery, filters, searchableFields]);
  
  // Handle search query change
  const handleQueryChange = (newQuery) => {
    setQuery(newQuery);
  };
  
  // Handle filter change
  const handleFilterChange = (key, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [key]: value
    }));
  };
  
  // Reset all filters
  const resetFilters = () => {
    setFilters(initialFilters);
  };
  
  // Reset search query
  const resetQuery = () => {
    setQuery('');
    setDebouncedQuery('');
  };
  
  // Reset everything
  const resetAll = () => {
    resetQuery();
    resetFilters();
  };
  
  // Helper function to get nested object values
  function getNestedValue(obj, path) {
    if (!obj) return undefined;
    
    const keys = path.split('.');
    return keys.reduce((o, key) => (o && o[key] !== undefined ? o[key] : undefined), obj);
  }
  
  return {
    query,
    filters,
    filteredData,
    handleQueryChange,
    handleFilterChange,
    resetFilters,
    resetQuery,
    resetAll
  };
};

export default useSearch;