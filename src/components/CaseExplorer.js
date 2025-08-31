import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../lib/supabase';
import Card from './ui/Card';
import Button from './ui/Button';
import SearchBar from './SearchBar';
import { FileText, Calendar, MapPin, Tag, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

/**
 * Case Explorer Component
 * 
 * Displays a searchable, filterable list of civil rights cases
 * with interactive features and detailed views
 */
const CaseExplorer = () => {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedCase, setExpandedCase] = useState(null);
  const [searchParams, setSearchParams] = useState({ query: '', filters: {} });
  
  // Define search filters
  const searchFilters = [
    {
      id: 'jurisdiction',
      label: 'Jurisdiction',
      type: 'select',
      options: [
        { value: '', label: 'All Jurisdictions' },
        { value: 'federal', label: 'Federal' },
        { value: 'state', label: 'State' }
      ]
    },
    {
      id: 'sortBy',
      label: 'Sort By',
      type: 'select',
      options: [
        { value: 'date_desc', label: 'Date (Newest First)' },
        { value: 'date_asc', label: 'Date (Oldest First)' },
        { value: 'title_asc', label: 'Title (A-Z)' },
        { value: 'title_desc', label: 'Title (Z-A)' }
      ]
    },
    {
      id: 'dateFrom',
      label: 'Filed After',
      type: 'date'
    },
    {
      id: 'dateTo',
      label: 'Filed Before',
      type: 'date'
    }
  ];
  
  // Fetch cases from Supabase
  useEffect(() => {
    const fetchCases = async () => {
      setLoading(true);
      try {
        let query = supabase.from('cases').select('*');
        
        // Apply search filters
        if (searchParams.query) {
          query = query.or(`title.ilike.%${searchParams.query}%,summary.ilike.%${searchParams.query}%`);
        }
        
        if (searchParams.filters.jurisdiction && searchParams.filters.jurisdiction !== '') {
          query = query.eq('jurisdiction', searchParams.filters.jurisdiction);
        }
        
        if (searchParams.filters.dateFrom && searchParams.filters.dateFrom !== '') {
          query = query.gte('date_filed', searchParams.filters.dateFrom);
        }
        
        if (searchParams.filters.dateTo && searchParams.filters.dateTo !== '') {
          query = query.lte('date_filed', searchParams.filters.dateTo);
        }
        
        // Apply sorting
        if (searchParams.filters.sortBy) {
          switch (searchParams.filters.sortBy) {
            case 'date_desc':
              query = query.order('date_filed', { ascending: false });
              break;
            case 'date_asc':
              query = query.order('date_filed', { ascending: true });
              break;
            case 'title_asc':
              query = query.order('title', { ascending: true });
              break;
            case 'title_desc':
              query = query.order('title', { ascending: false });
              break;
            default:
              query = query.order('date_filed', { ascending: false });
          }
        } else {
          query = query.order('date_filed', { ascending: false });
        }
        
        const { data, error } = await query;
        
        if (error) throw error;
        
        setCases(data || []);
      } catch (err) {
        console.error('Error fetching cases:', err);
        setError('Failed to load cases. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchCases();
  }, [searchParams]);
  
  // Handle search
  const handleSearch = (params) => {
    setSearchParams(params);
  };
  
  // Toggle case expansion
  const toggleCaseExpansion = (caseId) => {
    setExpandedCase(expandedCase === caseId ? null : caseId);
  };
  
  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return 'Unknown date';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Case Explorer</h2>
        <SearchBar onSearch={handleSearch} filters={searchFilters} />
      </div>
      
      {loading ? (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      ) : error ? (
        <Card>
          <div className="text-center text-red-600 dark:text-red-400 py-8">
            <p>{error}</p>
            <Button 
              variant="primary" 
              className="mt-4"
              onClick={() => setSearchParams({ query: '', filters: {} })}
            >
              Retry
            </Button>
          </div>
        </Card>
      ) : cases.length === 0 ? (
        <Card>
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">No cases found matching your search criteria.</p>
          </div>
        </Card>
      ) : (
        <div className="space-y-4">
          {cases.map((caseItem) => (
            <motion.div
              key={caseItem.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden">
                <div 
                  className="flex justify-between items-start cursor-pointer"
                  onClick={() => toggleCaseExpansion(caseItem.id)}
                >
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{caseItem.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {caseItem.court && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100">
                          {caseItem.court}
                        </span>
                      )}
                      {caseItem.jurisdiction && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100">
                          {caseItem.jurisdiction}
                        </span>
                      )}
                      {caseItem.date_filed && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100">
                          <Calendar className="h-3 w-3 mr-1" />
                          {formatDate(caseItem.date_filed)}
                        </span>
                      )}
                    </div>
                  </div>
                  <button className="p-2 text-gray-500 dark:text-gray-400">
                    {expandedCase === caseItem.id ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </button>
                </div>
                
                <AnimatePresence>
                  {expandedCase === caseItem.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
                    >
                      {caseItem.summary && (
                        <div className="mb-4">
                          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Summary</h4>
                          <p className="text-gray-600 dark:text-gray-400">{caseItem.summary}</p>
                        </div>
                      )}
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        {caseItem.citation && (
                          <div>
                            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Citation</h4>
                            <p className="text-gray-600 dark:text-gray-400">{caseItem.citation}</p>
                          </div>
                        )}
                        
                        {caseItem.tags && caseItem.tags.length > 0 && (
                          <div>
                            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tags</h4>
                            <div className="flex flex-wrap gap-1">
                              {caseItem.tags.map((tag, index) => (
                                <span 
                                  key={index}
                                  className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100"
                                >
                                  <Tag className="h-3 w-3 mr-1" />
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {caseItem.document_url && (
                        <div className="mt-4">
                          <Button
                            as="a"
                            href={caseItem.document_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="outline"
                            size="sm"
                            className="inline-flex items-center"
                          >
                            <FileText className="h-4 w-4 mr-2" />
                            View Document
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </Button>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CaseExplorer;