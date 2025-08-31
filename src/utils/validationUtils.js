/**
 * Check if a value is empty (null, undefined, empty string, empty array, empty object)
 * 
 * @param {any} value - Value to check
 * @returns {boolean} Whether value is empty
 */
export const isEmpty = (value) => {
  if (value === null || value === undefined) {
    return true;
  }
  
  if (typeof value === 'string') {
    return value.trim() === '';
  }
  
  if (Array.isArray(value)) {
    return value.length === 0;
  }
  
  if (typeof value === 'object') {
    return Object.keys(value).length === 0;
  }
  
  return false;
};

/**
 * Check if a value is not empty
 * 
 * @param {any} value - Value to check
 * @returns {boolean} Whether value is not empty
 */
export const isNotEmpty = (value) => !isEmpty(value);

/**
 * Check if a value is a valid email address
 * 
 * @param {string} value - Value to check
 * @returns {boolean} Whether value is a valid email
 */
export const isEmail = (value) => {
  if (isEmpty(value)) return false;
  
  // RFC 5322 compliant email regex
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(value);
};

/**
 * Check if a value is a valid URL
 * 
 * @param {string} value - Value to check
 * @param {boolean} requireProtocol - Whether to require protocol (http/https)
 * @returns {boolean} Whether value is a valid URL
 */
export const isUrl = (value, requireProtocol = true) => {
  if (isEmpty(value)) return false;
  
  try {
    const url = new URL(value);
    return requireProtocol ? url.protocol === 'http:' || url.protocol === 'https:' : true;
  } catch (error) {
    return false;
  }
};

/**
 * Check if a value is a valid phone number
 * 
 * @param {string} value - Value to check
 * @returns {boolean} Whether value is a valid phone number
 */
export const isPhone = (value) => {
  if (isEmpty(value)) return false;
  
  // Basic phone number validation (at least 10 digits)
  const phoneRegex = /^\+?[0-9]{10,15}$/;
  return phoneRegex.test(value.replace(/\D/g, ''));
};

/**
 * Check if a value is a valid date
 * 
 * @param {any} value - Value to check
 * @returns {boolean} Whether value is a valid date
 */
export const isDate = (value) => {
  if (isEmpty(value)) return false;
  
  if (value instanceof Date) {
    return !isNaN(value.getTime());
  }
  
  if (typeof value === 'string' || typeof value === 'number') {
    const date = new Date(value);
    return !isNaN(date.getTime());
  }
  
  return false;
};

/**
 * Check if a value is a valid number
 * 
 * @param {any} value - Value to check
 * @returns {boolean} Whether value is a valid number
 */
export const isNumber = (value) => {
  if (isEmpty(value)) return false;
  
  return !isNaN(Number(value));
};

/**
 * Check if a value is a valid integer
 * 
 * @param {any} value - Value to check
 * @returns {boolean} Whether value is a valid integer
 */
export const isInteger = (value) => {
  if (isEmpty(value)) return false;
  
  const number = Number(value);
  return !isNaN(number) && Number.isInteger(number);
};

/**
 * Check if a value is within a range
 * 
 * @param {number} value - Value to check
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {boolean} Whether value is within range
 */
export const isInRange = (value, min, max) => {
  if (isEmpty(value) || !isNumber(value)) return false;
  
  const number = Number(value);
  return number >= min && number <= max;
};

/**
 * Check if a value has a minimum length
 * 
 * @param {string|Array} value - Value to check
 * @param {number} minLength - Minimum length
 * @returns {boolean} Whether value has minimum length
 */
export const hasMinLength = (value, minLength) => {
  if (isEmpty(value)) return false;
  
  return value.length >= minLength;
};

/**
 * Check if a value has a maximum length
 * 
 * @param {string|Array} value - Value to check
 * @param {number} maxLength - Maximum length
 * @returns {boolean} Whether value has maximum length
 */
export const hasMaxLength = (value, maxLength) => {
  if (isEmpty(value)) return true;
  
  return value.length <= maxLength;
};

/**
 * Check if a value matches a pattern
 * 
 * @param {string} value - Value to check
 * @param {RegExp} pattern - Pattern to match
 * @returns {boolean} Whether value matches pattern
 */
export const matches = (value, pattern) => {
  if (isEmpty(value)) return false;
  
  return pattern.test(value);
};

/**
 * Check if a value is a valid password (at least 8 characters, 1 uppercase, 1 lowercase, 1 number)
 * 
 * @param {string} value - Value to check
 * @returns {boolean} Whether value is a valid password
 */
export const isStrongPassword = (value) => {
  if (isEmpty(value)) return false;
  
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return passwordRegex.test(value);
};

/**
 * Check if a value is a valid credit card number
 * 
 * @param {string} value - Value to check
 * @returns {boolean} Whether value is a valid credit card number
 */
export const isCreditCard = (value) => {
  if (isEmpty(value)) return false;
  
  // Remove non-digit characters
  const cardNumber = value.replace(/\D/g, '');
  
  // Check length (13-19 digits)
  if (cardNumber.length < 13 || cardNumber.length > 19) {
    return false;
  }
  
  // Luhn algorithm (mod 10)
  let sum = 0;
  let shouldDouble = false;
  
  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber.charAt(i));
    
    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    
    sum += digit;
    shouldDouble = !shouldDouble;
  }
  
  return sum % 10 === 0;
};

/**
 * Check if a value is a valid US ZIP code
 * 
 * @param {string} value - Value to check
 * @returns {boolean} Whether value is a valid ZIP code
 */
export const isZipCode = (value) => {
  if (isEmpty(value)) return false;
  
  // 5 digits or 5+4 format
  const zipRegex = /^\d{5}(-\d{4})?$/;
  return zipRegex.test(value);
};

/**
 * Check if a value is a valid US state code
 * 
 * @param {string} value - Value to check
 * @returns {boolean} Whether value is a valid state code
 */
export const isStateCode = (value) => {
  if (isEmpty(value)) return false;
  
  const stateCodes = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
    'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
    'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY',
    'DC', 'AS', 'GU', 'MP', 'PR', 'VI'
  ];
  
  return stateCodes.includes(value.toUpperCase());
};

/**
 * Check if a value is a valid IP address
 * 
 * @param {string} value - Value to check
 * @returns {boolean} Whether value is a valid IP address
 */
export const isIpAddress = (value) => {
  if (isEmpty(value)) return false;
  
  // IPv4 regex
  const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  
  // IPv6 regex (simplified)
  const ipv6Regex = /^(?:[A-F0-9]{1,4}:){7}[A-F0-9]{1,4}$/i;
  
  return ipv4Regex.test(value) || ipv6Regex.test(value);
};

/**
 * Check if a value is a valid hex color
 * 
 * @param {string} value - Value to check
 * @returns {boolean} Whether value is a valid hex color
 */
export const isHexColor = (value) => {
  if (isEmpty(value)) return false;
  
  // #RGB, #RGBA, #RRGGBB, or #RRGGBBAA
  const hexColorRegex = /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{4}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/;
  return hexColorRegex.test(value);
};

/**
 * Validate an object against a schema
 * 
 * @param {Object} object - Object to validate
 * @param {Object} schema - Validation schema
 * @returns {Object} Validation result with errors
 */
export const validateObject = (object, schema) => {
  const errors = {};
  
  Object.entries(schema).forEach(([key, validators]) => {
    const value = object[key];
    
    // Run each validator for the field
    validators.forEach(validator => {
      const { test, message } = validator;
      
      if (!test(value, object)) {
        if (!errors[key]) {
          errors[key] = [];
        }
        
        errors[key].push(message);
      }
    });
  });
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

/**
 * Create a validation schema
 * 
 * @param {Object} schema - Schema definition
 * @returns {Object} Validation schema
 */
export const createSchema = (schema) => {
  const validationSchema = {};
  
  Object.entries(schema).forEach(([key, rules]) => {
    validationSchema[key] = [];
    
    // Required rule
    if (rules.required) {
      validationSchema[key].push({
        test: (value) => isNotEmpty(value),
        message: rules.required === true ? `${key} is required` : rules.required
      });
    }
    
    // Email rule
    if (rules.email) {
      validationSchema[key].push({
        test: (value) => isEmpty(value) || isEmail(value),
        message: rules.email === true ? `${key} must be a valid email address` : rules.email
      });
    }
    
    // URL rule
    if (rules.url) {
      validationSchema[key].push({
        test: (value) => isEmpty(value) || isUrl(value),
        message: rules.url === true ? `${key} must be a valid URL` : rules.url
      });
    }
    
    // Min length rule
    if (rules.minLength !== undefined) {
      validationSchema[key].push({
        test: (value) => isEmpty(value) || hasMinLength(value, rules.minLength),
        message: `${key} must be at least ${rules.minLength} characters`
      });
    }
    
    // Max length rule
    if (rules.maxLength !== undefined) {
      validationSchema[key].push({
        test: (value) => isEmpty(value) || hasMaxLength(value, rules.maxLength),
        message: `${key} must be at most ${rules.maxLength} characters`
      });
    }
    
    // Min value rule
    if (rules.min !== undefined) {
      validationSchema[key].push({
        test: (value) => isEmpty(value) || (isNumber(value) && Number(value) >= rules.min),
        message: `${key} must be at least ${rules.min}`
      });
    }
    
    // Max value rule
    if (rules.max !== undefined) {
      validationSchema[key].push({
        test: (value) => isEmpty(value) || (isNumber(value) && Number(value) <= rules.max),
        message: `${key} must be at most ${rules.max}`
      });
    }
    
    // Pattern rule
    if (rules.pattern) {
      validationSchema[key].push({
        test: (value) => isEmpty(value) || matches(value, rules.pattern),
        message: rules.patternMessage || `${key} is invalid`
      });
    }
    
    // Custom validator rule
    if (rules.validate) {
      validationSchema[key].push({
        test: rules.validate,
        message: rules.validateMessage || `${key} is invalid`
      });
    }
  });
  
  return validationSchema;
};