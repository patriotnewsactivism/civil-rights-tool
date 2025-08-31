import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

/**
 * Pagination component
 * 
 * @param {Object} props - Component props
 * @param {number} props.currentPage - Current page number (1-based)
 * @param {number} props.totalPages - Total number of pages
 * @param {Function} props.onPageChange - Function called when page changes
 * @param {number} props.siblingCount - Number of siblings to show on each side of current page
 * @param {boolean} props.showFirstLast - Whether to show first/last page buttons
 * @param {string} props.size - Size of pagination (sm, md, lg)
 */
const Pagination = ({ 
  currentPage = 1, 
  totalPages = 1, 
  onPageChange,
  siblingCount = 1,
  showFirstLast = true,
  size = 'md',
  className = ''
}) => {
  // Ensure current page is within bounds
  const page = Math.max(1, Math.min(currentPage, totalPages));
  
  // Generate page numbers to display
  const getPageNumbers = () => {
    // Always show first and last page
    const firstPage = 1;
    const lastPage = totalPages;
    
    // Calculate range of pages to show
    let startPage = Math.max(firstPage, page - siblingCount);
    let endPage = Math.min(lastPage, page + siblingCount);
    
    // Adjust range if at the start or end
    if (startPage <= 3) {
      endPage = Math.min(lastPage, 5);
    }
    
    if (endPage >= lastPage - 2) {
      startPage = Math.max(1, lastPage - 4);
    }
    
    // Generate array of page numbers
    const pages = [];
    
    // Add first page if not in range
    if (startPage > firstPage) {
      pages.push(firstPage);
      
      // Add ellipsis if there's a gap
      if (startPage > firstPage + 1) {
        pages.push('...');
      }
    }
    
    // Add pages in range
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    // Add last page if not in range
    if (endPage < lastPage) {
      // Add ellipsis if there's a gap
      if (endPage < lastPage - 1) {
        pages.push('...');
      }
      
      pages.push(lastPage);
    }
    
    return pages;
  };
  
  // Handle page change
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages && newPage !== page) {
      onPageChange(newPage);
    }
  };
  
  // Size styles
  const sizeStyles = {
    sm: 'h-8 w-8 text-sm',
    md: 'h-10 w-10 text-base',
    lg: 'h-12 w-12 text-lg'
  };
  
  // Button styles
  const buttonBaseStyles = `flex items-center justify-center rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${sizeStyles[size]}`;
  const activeButtonStyles = 'bg-blue-600 text-white';
  const inactiveButtonStyles = 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700';
  const disabledButtonStyles = 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed';
  
  // Generate page numbers
  const pageNumbers = getPageNumbers();
  
  return (
    <nav className={`flex items-center justify-center ${className}`} aria-label="Pagination">
      <ul className="flex space-x-1">
        {/* First page button */}
        {showFirstLast && (
          <li>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${buttonBaseStyles} ${page === 1 ? disabledButtonStyles : inactiveButtonStyles}`}
              onClick={() => handlePageChange(1)}
              disabled={page === 1}
              aria-label="Go to first page"
            >
              <ChevronsLeft className="h-5 w-5" />
            </motion.button>
          </li>
        )}
        
        {/* Previous page button */}
        <li>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${buttonBaseStyles} ${page === 1 ? disabledButtonStyles : inactiveButtonStyles}`}
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
            aria-label="Go to previous page"
          >
            <ChevronLeft className="h-5 w-5" />
          </motion.button>
        </li>
        
        {/* Page numbers */}
        {pageNumbers.map((pageNumber, index) => (
          <li key={index}>
            {pageNumber === '...' ? (
              <span className={`${buttonBaseStyles} ${inactiveButtonStyles}`}>
                ...
              </span>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${buttonBaseStyles} ${pageNumber === page ? activeButtonStyles : inactiveButtonStyles}`}
                onClick={() => handlePageChange(pageNumber)}
                aria-current={pageNumber === page ? 'page' : undefined}
                aria-label={`Go to page ${pageNumber}`}
              >
                {pageNumber}
              </motion.button>
            )}
          </li>
        ))}
        
        {/* Next page button */}
        <li>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${buttonBaseStyles} ${page === totalPages ? disabledButtonStyles : inactiveButtonStyles}`}
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
            aria-label="Go to next page"
          >
            <ChevronRight className="h-5 w-5" />
          </motion.button>
        </li>
        
        {/* Last page button */}
        {showFirstLast && (
          <li>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${buttonBaseStyles} ${page === totalPages ? disabledButtonStyles : inactiveButtonStyles}`}
              onClick={() => handlePageChange(totalPages)}
              disabled={page === totalPages}
              aria-label="Go to last page"
            >
              <ChevronsRight className="h-5 w-5" />
            </motion.button>
          </li>
        )}
      </ul>
    </nav>
  );
};

/**
 * Simple Pagination component with just prev/next buttons
 * 
 * @param {Object} props - Component props
 * @param {number} props.currentPage - Current page number (1-based)
 * @param {number} props.totalPages - Total number of pages
 * @param {Function} props.onPageChange - Function called when page changes
 * @param {string} props.size - Size of pagination (sm, md, lg)
 */
export const SimplePagination = ({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  size = 'md',
  className = ''
}) => {
  // Ensure current page is within bounds
  const page = Math.max(1, Math.min(currentPage, totalPages));
  
  // Handle page change
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages && newPage !== page) {
      onPageChange(newPage);
    }
  };
  
  // Size styles
  const sizeStyles = {
    sm: 'py-1 px-2 text-sm',
    md: 'py-2 px-3 text-base',
    lg: 'py-3 px-4 text-lg'
  };
  
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <button
        className={`${sizeStyles[size]} rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center`}
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
      >
        <ChevronLeft className="h-4 w-4 mr-1" />
        Previous
      </button>
      
      <span className="text-sm text-gray-700 dark:text-gray-300">
        Page {page} of {totalPages}
      </span>
      
      <button
        className={`${sizeStyles[size]} rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center`}
        onClick={() => handlePageChange(page + 1)}
        disabled={page === totalPages}
      >
        Next
        <ChevronRight className="h-4 w-4 ml-1" />
      </button>
    </div>
  );
};

export default Pagination;