/**
 * Group an array of objects by a key
 * 
 * @param {Array} array - Array to group
 * @param {string|Function} key - Key to group by or function that returns the key
 * @returns {Object} Grouped object
 */
export const groupBy = (array, key) => {
  if (!array || !array.length) return {};
  
  return array.reduce((result, item) => {
    const groupKey = typeof key === 'function' ? key(item) : item[key];
    
    // Skip null or undefined keys
    if (groupKey === null || groupKey === undefined) return result;
    
    // Initialize group if it doesn't exist
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    
    // Add item to group
    result[groupKey].push(item);
    
    return result;
  }, {});
};

/**
 * Sort an array of objects by a key
 * 
 * @param {Array} array - Array to sort
 * @param {string|Function} key - Key to sort by or function that returns the key
 * @param {string} direction - Sort direction (asc or desc)
 * @returns {Array} Sorted array
 */
export const sortBy = (array, key, direction = 'asc') => {
  if (!array || !array.length) return [];
  
  const sortedArray = [...array];
  const directionMultiplier = direction.toLowerCase() === 'desc' ? -1 : 1;
  
  return sortedArray.sort((a, b) => {
    const aValue = typeof key === 'function' ? key(a) : a[key];
    const bValue = typeof key === 'function' ? key(b) : b[key];
    
    // Handle null or undefined values
    if (aValue === null || aValue === undefined) return directionMultiplier;
    if (bValue === null || bValue === undefined) return -directionMultiplier;
    
    // Handle different types
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return directionMultiplier * aValue.localeCompare(bValue);
    }
    
    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return directionMultiplier * (aValue - bValue);
    }
    
    if (aValue instanceof Date && bValue instanceof Date) {
      return directionMultiplier * (aValue.getTime() - bValue.getTime());
    }
    
    // Default comparison
    return directionMultiplier * (aValue > bValue ? 1 : aValue < bValue ? -1 : 0);
  });
};

/**
 * Filter an array of objects by a predicate
 * 
 * @param {Array} array - Array to filter
 * @param {Object|Function} predicate - Filter predicate object or function
 * @returns {Array} Filtered array
 */
export const filterBy = (array, predicate) => {
  if (!array || !array.length) return [];
  
  // If predicate is a function, use it directly
  if (typeof predicate === 'function') {
    return array.filter(predicate);
  }
  
  // If predicate is an object, filter by matching properties
  if (typeof predicate === 'object' && predicate !== null) {
    return array.filter(item => {
      return Object.entries(predicate).every(([key, value]) => {
        // Handle nested keys with dot notation
        if (key.includes('.')) {
          const keys = key.split('.');
          let itemValue = item;
          
          for (const k of keys) {
            if (itemValue === null || itemValue === undefined) return false;
            itemValue = itemValue[k];
          }
          
          return itemValue === value;
        }
        
        // Handle array values
        if (Array.isArray(value)) {
          return value.includes(item[key]);
        }
        
        // Handle regex values
        if (value instanceof RegExp) {
          return value.test(item[key]);
        }
        
        // Handle function values
        if (typeof value === 'function') {
          return value(item[key]);
        }
        
        // Default equality check
        return item[key] === value;
      });
    });
  }
  
  return array;
};

/**
 * Find an object in an array by a key and value
 * 
 * @param {Array} array - Array to search
 * @param {string} key - Key to search by
 * @param {any} value - Value to search for
 * @returns {Object|undefined} Found object or undefined
 */
export const findBy = (array, key, value) => {
  if (!array || !array.length) return undefined;
  
  return array.find(item => item[key] === value);
};

/**
 * Remove duplicates from an array
 * 
 * @param {Array} array - Array to deduplicate
 * @param {string|Function} key - Key to deduplicate by or function that returns the key
 * @returns {Array} Deduplicated array
 */
export const uniqBy = (array, key) => {
  if (!array || !array.length) return [];
  
  const seen = new Set();
  
  return array.filter(item => {
    const value = typeof key === 'function' ? key(item) : item[key];
    const valueKey = JSON.stringify(value);
    
    if (seen.has(valueKey)) {
      return false;
    }
    
    seen.add(valueKey);
    return true;
  });
};

/**
 * Get unique values from an array
 * 
 * @param {Array} array - Array to get unique values from
 * @returns {Array} Array of unique values
 */
export const uniq = (array) => {
  if (!array || !array.length) return [];
  
  return [...new Set(array)];
};

/**
 * Chunk an array into smaller arrays
 * 
 * @param {Array} array - Array to chunk
 * @param {number} size - Chunk size
 * @returns {Array} Array of chunks
 */
export const chunk = (array, size = 1) => {
  if (!array || !array.length) return [];
  
  const chunks = [];
  let index = 0;
  
  while (index < array.length) {
    chunks.push(array.slice(index, index + size));
    index += size;
  }
  
  return chunks;
};

/**
 * Flatten an array of arrays
 * 
 * @param {Array} array - Array to flatten
 * @param {number} depth - Maximum recursion depth
 * @returns {Array} Flattened array
 */
export const flatten = (array, depth = 1) => {
  if (!array || !array.length) return [];
  
  return array.flat(depth);
};

/**
 * Get the intersection of two arrays
 * 
 * @param {Array} array1 - First array
 * @param {Array} array2 - Second array
 * @returns {Array} Intersection array
 */
export const intersection = (array1, array2) => {
  if (!array1 || !array1.length || !array2 || !array2.length) return [];
  
  return array1.filter(item => array2.includes(item));
};

/**
 * Get the difference between two arrays
 * 
 * @param {Array} array1 - First array
 * @param {Array} array2 - Second array
 * @returns {Array} Difference array
 */
export const difference = (array1, array2) => {
  if (!array1 || !array1.length) return [];
  if (!array2 || !array2.length) return [...array1];
  
  return array1.filter(item => !array2.includes(item));
};

/**
 * Get the union of two arrays
 * 
 * @param {Array} array1 - First array
 * @param {Array} array2 - Second array
 * @returns {Array} Union array
 */
export const union = (array1, array2) => {
  if (!array1 || !array1.length) return array2 || [];
  if (!array2 || !array2.length) return array1;
  
  return uniq([...array1, ...array2]);
};

/**
 * Shuffle an array
 * 
 * @param {Array} array - Array to shuffle
 * @returns {Array} Shuffled array
 */
export const shuffle = (array) => {
  if (!array || !array.length) return [];
  
  const result = [...array];
  
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  
  return result;
};

/**
 * Get a random item from an array
 * 
 * @param {Array} array - Array to get random item from
 * @returns {any} Random item
 */
export const sample = (array) => {
  if (!array || !array.length) return undefined;
  
  return array[Math.floor(Math.random() * array.length)];
};

/**
 * Get multiple random items from an array
 * 
 * @param {Array} array - Array to get random items from
 * @param {number} count - Number of items to get
 * @returns {Array} Array of random items
 */
export const sampleSize = (array, count = 1) => {
  if (!array || !array.length) return [];
  
  const shuffled = shuffle(array);
  return shuffled.slice(0, count);
};

/**
 * Deep clone an object or array
 * 
 * @param {any} obj - Object or array to clone
 * @returns {any} Cloned object or array
 */
export const deepClone = (obj) => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  if (obj instanceof Date) {
    return new Date(obj);
  }
  
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }
  
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, deepClone(value)])
  );
};

/**
 * Deep merge two objects
 * 
 * @param {Object} target - Target object
 * @param {Object} source - Source object
 * @returns {Object} Merged object
 */
export const deepMerge = (target, source) => {
  if (!source) return target;
  
  const output = { ...target };
  
  Object.keys(source).forEach(key => {
    if (source[key] instanceof Object && key in target && target[key] instanceof Object) {
      output[key] = deepMerge(target[key], source[key]);
    } else {
      output[key] = source[key];
    }
  });
  
  return output;
};

/**
 * Pick specific properties from an object
 * 
 * @param {Object} obj - Object to pick from
 * @param {Array} keys - Keys to pick
 * @returns {Object} New object with picked properties
 */
export const pick = (obj, keys) => {
  if (!obj || typeof obj !== 'object') return {};
  
  return keys.reduce((result, key) => {
    if (key in obj) {
      result[key] = obj[key];
    }
    return result;
  }, {});
};

/**
 * Omit specific properties from an object
 * 
 * @param {Object} obj - Object to omit from
 * @param {Array} keys - Keys to omit
 * @returns {Object} New object without omitted properties
 */
export const omit = (obj, keys) => {
  if (!obj || typeof obj !== 'object') return {};
  
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => !keys.includes(key))
  );
};