import { useState, useCallback, useEffect } from 'react';

/**
 * Custom hook for handling API requests
 * 
 * @param {Object} options - Hook options
 * @param {Function} options.apiFunction - API function to call
 * @param {Array} options.dependencies - Dependencies for automatic fetching
 * @param {boolean} options.autoFetch - Whether to fetch automatically
 * @param {any} options.initialData - Initial data
 * @returns {Object} API state and handlers
 */
const useApi = ({
  apiFunction,
  dependencies = [],
  autoFetch = false,
  initialData = null
}) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasRun, setHasRun] = useState(false);
  
  // Execute API call
  const execute = useCallback(async (...args) => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await apiFunction(...args);
      setData(result);
      setHasRun(true);
      return result;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [apiFunction]);
  
  // Auto-fetch on dependencies change
  useEffect(() => {
    if (autoFetch && !hasRun) {
      execute();
    }
  }, [...dependencies, autoFetch, hasRun, execute]);
  
  // Reset state
  const reset = useCallback(() => {
    setData(initialData);
    setLoading(false);
    setError(null);
    setHasRun(false);
  }, [initialData]);
  
  return {
    data,
    loading,
    error,
    execute,
    reset,
    hasRun
  };
};

/**
 * Custom hook for handling paginated API requests
 * 
 * @param {Object} options - Hook options
 * @param {Function} options.apiFunction - API function to call with page and limit
 * @param {number} options.initialPage - Initial page number
 * @param {number} options.initialLimit - Initial page size
 * @param {boolean} options.autoFetch - Whether to fetch automatically
 * @returns {Object} Paginated API state and handlers
 */
export const usePaginatedApi = ({
  apiFunction,
  initialPage = 1,
  initialLimit = 10,
  autoFetch = false
}) => {
  const [page, setPage] = useState(initialPage);
  const [limit, setLimit] = useState(initialLimit);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  
  // API hook
  const {
    data,
    loading,
    error,
    execute: executeBase,
    reset
  } = useApi({
    apiFunction,
    dependencies: [page, limit],
    autoFetch
  });
  
  // Execute with pagination
  const execute = useCallback(async (...args) => {
    const result = await executeBase(page, limit, ...args);
    
    // Update pagination info if result has metadata
    if (result && result.meta) {
      setTotalItems(result.meta.totalItems || 0);
      setTotalPages(result.meta.totalPages || 1);
    }
    
    return result;
  }, [executeBase, page, limit]);
  
  // Change page
  const changePage = useCallback((newPage) => {
    setPage(newPage);
  }, []);
  
  // Change limit
  const changeLimit = useCallback((newLimit) => {
    setLimit(newLimit);
    setPage(1); // Reset to first page when changing limit
  }, []);
  
  // Go to next page
  const nextPage = useCallback(() => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  }, [page, totalPages]);
  
  // Go to previous page
  const prevPage = useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);
  
  return {
    data,
    loading,
    error,
    execute,
    reset,
    page,
    limit,
    totalItems,
    totalPages,
    changePage,
    changeLimit,
    nextPage,
    prevPage
  };
};

/**
 * Custom hook for handling CRUD operations
 * 
 * @param {Object} options - Hook options
 * @param {Object} options.api - API object with CRUD methods
 * @param {boolean} options.autoFetch - Whether to fetch automatically
 * @returns {Object} CRUD state and handlers
 */
export const useCrud = ({
  api,
  autoFetch = false
}) => {
  // Get all items
  const {
    data: items,
    loading: loadingItems,
    error: errorItems,
    execute: fetchItems,
    reset: resetItems
  } = useApi({
    apiFunction: api.getAll,
    autoFetch
  });
  
  // Get single item
  const {
    data: item,
    loading: loadingItem,
    error: errorItem,
    execute: fetchItem,
    reset: resetItem
  } = useApi({
    apiFunction: api.getById
  });
  
  // Create item
  const {
    data: createdItem,
    loading: creating,
    error: errorCreating,
    execute: createItem,
    reset: resetCreate
  } = useApi({
    apiFunction: api.create
  });
  
  // Update item
  const {
    data: updatedItem,
    loading: updating,
    error: errorUpdating,
    execute: updateItem,
    reset: resetUpdate
  } = useApi({
    apiFunction: api.update
  });
  
  // Delete item
  const {
    data: deletedItem,
    loading: deleting,
    error: errorDeleting,
    execute: deleteItem,
    reset: resetDelete
  } = useApi({
    apiFunction: api.delete
  });
  
  // Reset all
  const resetAll = useCallback(() => {
    resetItems();
    resetItem();
    resetCreate();
    resetUpdate();
    resetDelete();
  }, [resetItems, resetItem, resetCreate, resetUpdate, resetDelete]);
  
  return {
    // Items
    items,
    loadingItems,
    errorItems,
    fetchItems,
    
    // Single item
    item,
    loadingItem,
    errorItem,
    fetchItem,
    
    // Create
    createdItem,
    creating,
    errorCreating,
    createItem,
    
    // Update
    updatedItem,
    updating,
    errorUpdating,
    updateItem,
    
    // Delete
    deletedItem,
    deleting,
    errorDeleting,
    deleteItem,
    
    // Reset
    resetAll
  };
};

export default useApi;