import { useState, useEffect, useMemo } from 'react';

/**
 * Custom hook for handling pagination logic
 * 
 * @param {Object} options - Hook options
 * @param {Array} options.data - Array of items to paginate
 * @param {number} options.itemsPerPage - Number of items per page
 * @param {number} options.initialPage - Initial page number (1-based)
 * @returns {Object} Pagination state and handlers
 */
const usePagination = ({
  data = [],
  itemsPerPage = 10,
  initialPage = 1
}) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [pageSize, setPageSize] = useState(itemsPerPage);
  
  // Calculate total pages
  const totalPages = useMemo(() => {
    return Math.max(1, Math.ceil(data.length / pageSize));
  }, [data, pageSize]);
  
  // Reset to first page when data changes
  useEffect(() => {
    setCurrentPage(1);
  }, [data]);
  
  // Ensure current page is within bounds
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);
  
  // Get current page data
  const currentData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return data.slice(startIndex, endIndex);
  }, [data, currentPage, pageSize]);
  
  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  
  // Handle page size change
  const handlePageSizeChange = (size) => {
    setPageSize(size);
    setCurrentPage(1); // Reset to first page when changing page size
  };
  
  // Go to first page
  const goToFirstPage = () => {
    setCurrentPage(1);
  };
  
  // Go to last page
  const goToLastPage = () => {
    setCurrentPage(totalPages);
  };
  
  // Go to next page
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  // Go to previous page
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  // Calculate page info
  const pageInfo = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, data.length);
    
    return {
      startIndex: startIndex + 1,
      endIndex,
      totalItems: data.length,
      currentPage,
      totalPages,
      hasNextPage: currentPage < totalPages,
      hasPreviousPage: currentPage > 1
    };
  }, [currentPage, pageSize, data.length, totalPages]);
  
  return {
    currentData,
    currentPage,
    pageSize,
    totalPages,
    pageInfo,
    handlePageChange,
    handlePageSizeChange,
    goToFirstPage,
    goToLastPage,
    goToNextPage,
    goToPreviousPage
  };
};

export default usePagination;