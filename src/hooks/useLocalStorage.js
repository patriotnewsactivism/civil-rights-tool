import { useState, useEffect } from 'react';

/**
 * Custom hook for using localStorage with state
 * 
 * @param {string} key - localStorage key
 * @param {any} initialValue - Initial value if key doesn't exist
 * @returns {Array} [storedValue, setValue] - State and setter
 */
const useLocalStorage = (key, initialValue) => {
  // Get value from localStorage or use initialValue
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from localStorage
      const item = window.localStorage.getItem(key);
      
      // Parse stored json or return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });
  
  // Update localStorage when state changes
  useEffect(() => {
    try {
      // Save state to localStorage
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);
  
  return [storedValue, setStoredValue];
};

/**
 * Custom hook for using localStorage with object state
 * 
 * @param {string} key - localStorage key
 * @param {Object} initialValue - Initial object value
 * @returns {Object} Object with state and methods
 */
export const useLocalStorageObject = (key, initialValue = {}) => {
  const [storedObject, setStoredObject] = useLocalStorage(key, initialValue);
  
  // Set a specific key in the object
  const setItem = (itemKey, value) => {
    setStoredObject(prevObject => ({
      ...prevObject,
      [itemKey]: value
    }));
  };
  
  // Remove a specific key from the object
  const removeItem = (itemKey) => {
    setStoredObject(prevObject => {
      const newObject = { ...prevObject };
      delete newObject[itemKey];
      return newObject;
    });
  };
  
  // Clear all items
  const clearAll = () => {
    setStoredObject({});
  };
  
  return {
    storedObject,
    setStoredObject,
    setItem,
    removeItem,
    clearAll
  };
};

/**
 * Custom hook for using localStorage with array state
 * 
 * @param {string} key - localStorage key
 * @param {Array} initialValue - Initial array value
 * @returns {Object} Object with state and methods
 */
export const useLocalStorageArray = (key, initialValue = []) => {
  const [storedArray, setStoredArray] = useLocalStorage(key, initialValue);
  
  // Add item to array
  const addItem = (item) => {
    setStoredArray(prevArray => [...prevArray, item]);
  };
  
  // Remove item from array by index
  const removeItemByIndex = (index) => {
    setStoredArray(prevArray => {
      const newArray = [...prevArray];
      newArray.splice(index, 1);
      return newArray;
    });
  };
  
  // Remove item from array by value or predicate
  const removeItem = (predicateOrValue) => {
    setStoredArray(prevArray => {
      const predicate = typeof predicateOrValue === 'function'
        ? predicateOrValue
        : item => item === predicateOrValue;
      
      return prevArray.filter(item => !predicate(item));
    });
  };
  
  // Update item in array
  const updateItem = (index, newItem) => {
    setStoredArray(prevArray => {
      const newArray = [...prevArray];
      newArray[index] = newItem;
      return newArray;
    });
  };
  
  // Clear all items
  const clearAll = () => {
    setStoredArray([]);
  };
  
  return {
    storedArray,
    setStoredArray,
    addItem,
    removeItem,
    removeItemByIndex,
    updateItem,
    clearAll
  };
};

export default useLocalStorage;