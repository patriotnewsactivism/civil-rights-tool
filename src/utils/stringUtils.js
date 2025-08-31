/**
 * Truncate a string to a maximum length
 * 
 * @param {string} str - String to truncate
 * @param {number} maxLength - Maximum length
 * @param {string} suffix - Suffix to add when truncated
 * @returns {string} Truncated string
 */
export const truncate = (str, maxLength = 100, suffix = '...') => {
  if (!str) return '';
  
  if (str.length <= maxLength) {
    return str;
  }
  
  return str.substring(0, maxLength - suffix.length) + suffix;
};

/**
 * Capitalize the first letter of a string
 * 
 * @param {string} str - String to capitalize
 * @returns {string} Capitalized string
 */
export const capitalize = (str) => {
  if (!str) return '';
  
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Capitalize the first letter of each word in a string
 * 
 * @param {string} str - String to title case
 * @returns {string} Title-cased string
 */
export const titleCase = (str) => {
  if (!str) return '';
  
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

/**
 * Convert a string to camelCase
 * 
 * @param {string} str - String to convert
 * @returns {string} camelCase string
 */
export const camelCase = (str) => {
  if (!str) return '';
  
  return str
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return capitalize(word.toLowerCase());
    })
    .join('');
};

/**
 * Convert a string to kebab-case
 * 
 * @param {string} str - String to convert
 * @returns {string} kebab-case string
 */
export const kebabCase = (str) => {
  if (!str) return '';
  
  return str
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, '-')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase();
};

/**
 * Convert a string to snake_case
 * 
 * @param {string} str - String to convert
 * @returns {string} snake_case string
 */
export const snakeCase = (str) => {
  if (!str) return '';
  
  return str
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, '_')
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .toLowerCase();
};

/**
 * Format a number as currency
 * 
 * @param {number} value - Number to format
 * @param {string} currency - Currency code
 * @param {string} locale - Locale string
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (value, currency = 'USD', locale = 'en-US') => {
  if (value === null || value === undefined) return '';
  
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency
  }).format(value);
};

/**
 * Format a number with commas
 * 
 * @param {number} value - Number to format
 * @param {number} decimals - Number of decimal places
 * @param {string} locale - Locale string
 * @returns {string} Formatted number string
 */
export const formatNumber = (value, decimals = 0, locale = 'en-US') => {
  if (value === null || value === undefined) return '';
  
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(value);
};

/**
 * Format a number as a percentage
 * 
 * @param {number} value - Number to format (0-1)
 * @param {number} decimals - Number of decimal places
 * @param {string} locale - Locale string
 * @returns {string} Formatted percentage string
 */
export const formatPercent = (value, decimals = 0, locale = 'en-US') => {
  if (value === null || value === undefined) return '';
  
  return new Intl.NumberFormat(locale, {
    style: 'percent',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(value);
};

/**
 * Generate a random string
 * 
 * @param {number} length - Length of string
 * @param {string} chars - Characters to use
 * @returns {string} Random string
 */
export const randomString = (length = 8, chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') => {
  let result = '';
  const charsLength = chars.length;
  
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * charsLength));
  }
  
  return result;
};

/**
 * Slugify a string (convert to URL-friendly format)
 * 
 * @param {string} str - String to slugify
 * @returns {string} Slugified string
 */
export const slugify = (str) => {
  if (!str) return '';
  
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove non-word chars
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/--+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-+/, '') // Remove leading hyphens
    .replace(/-+$/, ''); // Remove trailing hyphens
};

/**
 * Extract initials from a name
 * 
 * @param {string} name - Name to extract initials from
 * @param {number} maxInitials - Maximum number of initials
 * @returns {string} Initials
 */
export const getInitials = (name, maxInitials = 2) => {
  if (!name) return '';
  
  return name
    .split(/\s+/)
    .map(word => word.charAt(0).toUpperCase())
    .slice(0, maxInitials)
    .join('');
};

/**
 * Format a phone number
 * 
 * @param {string} phone - Phone number to format
 * @param {string} format - Format string (e.g., '(xxx) xxx-xxxx')
 * @returns {string} Formatted phone number
 */
export const formatPhone = (phone, format = '(xxx) xxx-xxxx') => {
  if (!phone) return '';
  
  // Remove non-digit characters
  const digits = phone.replace(/\D/g, '');
  
  // Replace x's in format with digits
  let result = format;
  let digitIndex = 0;
  
  for (let i = 0; i < result.length; i++) {
    if (result[i] === 'x') {
      if (digitIndex < digits.length) {
        result = result.substring(0, i) + digits[digitIndex] + result.substring(i + 1);
        digitIndex++;
      } else {
        result = result.substring(0, i) + 'x' + result.substring(i + 1);
      }
    }
  }
  
  // Remove any remaining x's
  result = result.replace(/x/g, '');
  
  return result;
};

/**
 * Mask a string (e.g., for sensitive data)
 * 
 * @param {string} str - String to mask
 * @param {number} visibleStart - Number of characters to show at start
 * @param {number} visibleEnd - Number of characters to show at end
 * @param {string} maskChar - Character to use for masking
 * @returns {string} Masked string
 */
export const maskString = (str, visibleStart = 4, visibleEnd = 4, maskChar = '*') => {
  if (!str) return '';
  
  if (str.length <= visibleStart + visibleEnd) {
    return str;
  }
  
  const start = str.substring(0, visibleStart);
  const end = str.substring(str.length - visibleEnd);
  const masked = maskChar.repeat(str.length - visibleStart - visibleEnd);
  
  return start + masked + end;
};

/**
 * Check if a string is a valid email address
 * 
 * @param {string} email - Email address to validate
 * @returns {boolean} Whether email is valid
 */
export const isValidEmail = (email) => {
  if (!email) return false;
  
  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Check if a string is a valid URL
 * 
 * @param {string} url - URL to validate
 * @returns {boolean} Whether URL is valid
 */
export const isValidUrl = (url) => {
  if (!url) return false;
  
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};

/**
 * Strip HTML tags from a string
 * 
 * @param {string} html - HTML string to strip
 * @returns {string} Plain text string
 */
export const stripHtml = (html) => {
  if (!html) return '';
  
  return html
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/&nbsp;/g, ' ') // Replace &nbsp; with space
    .replace(/&amp;/g, '&') // Replace &amp; with &
    .replace(/&lt;/g, '<') // Replace &lt; with <
    .replace(/&gt;/g, '>') // Replace &gt; with >
    .replace(/&quot;/g, '"') // Replace &quot; with "
    .replace(/&#39;/g, "'"); // Replace &#39; with '
};