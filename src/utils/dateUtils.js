/**
 * Format a date to a string
 * 
 * @param {Date|string} date - Date to format
 * @param {Object} options - Formatting options
 * @param {string} options.format - Format string (short, medium, long, full, iso, relative)
 * @param {string} options.locale - Locale string (e.g., 'en-US')
 * @returns {string} Formatted date string
 */
export const formatDate = (date, { format = 'medium', locale = 'en-US' } = {}) => {
  if (!date) return '';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  // Check if date is valid
  if (isNaN(dateObj.getTime())) {
    console.error('Invalid date:', date);
    return '';
  }
  
  // Format based on format string
  switch (format) {
    case 'short':
      return dateObj.toLocaleDateString(locale, {
        month: 'numeric',
        day: 'numeric',
        year: '2-digit'
      });
    
    case 'medium':
      return dateObj.toLocaleDateString(locale, {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    
    case 'long':
      return dateObj.toLocaleDateString(locale, {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      });
    
    case 'full':
      return dateObj.toLocaleDateString(locale, {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      });
    
    case 'iso':
      return dateObj.toISOString().split('T')[0];
    
    case 'relative':
      return formatRelativeTime(dateObj);
    
    case 'time':
      return dateObj.toLocaleTimeString(locale, {
        hour: '2-digit',
        minute: '2-digit'
      });
    
    case 'datetime':
      return `${dateObj.toLocaleDateString(locale, {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      })} ${dateObj.toLocaleTimeString(locale, {
        hour: '2-digit',
        minute: '2-digit'
      })}`;
    
    default:
      return dateObj.toLocaleDateString(locale);
  }
};

/**
 * Format a date as relative time (e.g., "2 days ago")
 * 
 * @param {Date|string} date - Date to format
 * @returns {string} Relative time string
 */
export const formatRelativeTime = (date) => {
  if (!date) return '';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  // Check if date is valid
  if (isNaN(dateObj.getTime())) {
    console.error('Invalid date:', date);
    return '';
  }
  
  const now = new Date();
  const diffMs = now - dateObj;
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);
  const diffMonth = Math.floor(diffDay / 30);
  const diffYear = Math.floor(diffDay / 365);
  
  // Future date
  if (diffMs < 0) {
    const absDiffSec = Math.abs(diffSec);
    const absDiffMin = Math.abs(diffMin);
    const absDiffHour = Math.abs(diffHour);
    const absDiffDay = Math.abs(diffDay);
    const absDiffMonth = Math.abs(diffMonth);
    const absDiffYear = Math.abs(diffYear);
    
    if (absDiffSec < 60) return 'in a few seconds';
    if (absDiffMin < 60) return `in ${absDiffMin} minute${absDiffMin !== 1 ? 's' : ''}`;
    if (absDiffHour < 24) return `in ${absDiffHour} hour${absDiffHour !== 1 ? 's' : ''}`;
    if (absDiffDay < 30) return `in ${absDiffDay} day${absDiffDay !== 1 ? 's' : ''}`;
    if (absDiffMonth < 12) return `in ${absDiffMonth} month${absDiffMonth !== 1 ? 's' : ''}`;
    return `in ${absDiffYear} year${absDiffYear !== 1 ? 's' : ''}`;
  }
  
  // Past date
  if (diffSec < 60) return 'just now';
  if (diffMin < 60) return `${diffMin} minute${diffMin !== 1 ? 's' : ''} ago`;
  if (diffHour < 24) return `${diffHour} hour${diffHour !== 1 ? 's' : ''} ago`;
  if (diffDay < 30) return `${diffDay} day${diffDay !== 1 ? 's' : ''} ago`;
  if (diffMonth < 12) return `${diffMonth} month${diffMonth !== 1 ? 's' : ''} ago`;
  return `${diffYear} year${diffYear !== 1 ? 's' : ''} ago`;
};

/**
 * Get the start of a time period
 * 
 * @param {Date|string} date - Date to get start of period for
 * @param {string} period - Period (day, week, month, year)
 * @returns {Date} Start of period
 */
export const getStartOfPeriod = (date, period = 'day') => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  // Check if date is valid
  if (isNaN(dateObj.getTime())) {
    console.error('Invalid date:', date);
    return new Date();
  }
  
  const result = new Date(dateObj);
  
  switch (period) {
    case 'day':
      result.setHours(0, 0, 0, 0);
      break;
    
    case 'week':
      const day = result.getDay();
      const diff = result.getDate() - day + (day === 0 ? -6 : 1); // Adjust for Sunday
      result.setDate(diff);
      result.setHours(0, 0, 0, 0);
      break;
    
    case 'month':
      result.setDate(1);
      result.setHours(0, 0, 0, 0);
      break;
    
    case 'year':
      result.setMonth(0, 1);
      result.setHours(0, 0, 0, 0);
      break;
    
    default:
      break;
  }
  
  return result;
};

/**
 * Get the end of a time period
 * 
 * @param {Date|string} date - Date to get end of period for
 * @param {string} period - Period (day, week, month, year)
 * @returns {Date} End of period
 */
export const getEndOfPeriod = (date, period = 'day') => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  // Check if date is valid
  if (isNaN(dateObj.getTime())) {
    console.error('Invalid date:', date);
    return new Date();
  }
  
  const result = new Date(dateObj);
  
  switch (period) {
    case 'day':
      result.setHours(23, 59, 59, 999);
      break;
    
    case 'week':
      const day = result.getDay();
      const diff = result.getDate() + (day === 0 ? 0 : 7 - day); // Adjust for Sunday
      result.setDate(diff);
      result.setHours(23, 59, 59, 999);
      break;
    
    case 'month':
      result.setMonth(result.getMonth() + 1, 0);
      result.setHours(23, 59, 59, 999);
      break;
    
    case 'year':
      result.setFullYear(result.getFullYear() + 1, 0, 0);
      result.setDate(0);
      result.setHours(23, 59, 59, 999);
      break;
    
    default:
      break;
  }
  
  return result;
};

/**
 * Add time to a date
 * 
 * @param {Date|string} date - Date to add time to
 * @param {number} amount - Amount to add
 * @param {string} unit - Unit (seconds, minutes, hours, days, weeks, months, years)
 * @returns {Date} New date
 */
export const addTime = (date, amount, unit = 'days') => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  // Check if date is valid
  if (isNaN(dateObj.getTime())) {
    console.error('Invalid date:', date);
    return new Date();
  }
  
  const result = new Date(dateObj);
  
  switch (unit) {
    case 'seconds':
      result.setSeconds(result.getSeconds() + amount);
      break;
    
    case 'minutes':
      result.setMinutes(result.getMinutes() + amount);
      break;
    
    case 'hours':
      result.setHours(result.getHours() + amount);
      break;
    
    case 'days':
      result.setDate(result.getDate() + amount);
      break;
    
    case 'weeks':
      result.setDate(result.getDate() + (amount * 7));
      break;
    
    case 'months':
      result.setMonth(result.getMonth() + amount);
      break;
    
    case 'years':
      result.setFullYear(result.getFullYear() + amount);
      break;
    
    default:
      break;
  }
  
  return result;
};

/**
 * Get the difference between two dates
 * 
 * @param {Date|string} date1 - First date
 * @param {Date|string} date2 - Second date
 * @param {string} unit - Unit (seconds, minutes, hours, days, weeks, months, years)
 * @returns {number} Difference in specified unit
 */
export const getDateDiff = (date1, date2, unit = 'days') => {
  const dateObj1 = typeof date1 === 'string' ? new Date(date1) : date1;
  const dateObj2 = typeof date2 === 'string' ? new Date(date2) : date2;
  
  // Check if dates are valid
  if (isNaN(dateObj1.getTime()) || isNaN(dateObj2.getTime())) {
    console.error('Invalid date(s):', date1, date2);
    return 0;
  }
  
  const diffMs = dateObj2 - dateObj1;
  
  switch (unit) {
    case 'seconds':
      return Math.floor(diffMs / 1000);
    
    case 'minutes':
      return Math.floor(diffMs / (1000 * 60));
    
    case 'hours':
      return Math.floor(diffMs / (1000 * 60 * 60));
    
    case 'days':
      return Math.floor(diffMs / (1000 * 60 * 60 * 24));
    
    case 'weeks':
      return Math.floor(diffMs / (1000 * 60 * 60 * 24 * 7));
    
    case 'months': {
      const months1 = dateObj1.getFullYear() * 12 + dateObj1.getMonth();
      const months2 = dateObj2.getFullYear() * 12 + dateObj2.getMonth();
      return months2 - months1;
    }
    
    case 'years':
      return dateObj2.getFullYear() - dateObj1.getFullYear();
    
    default:
      return diffMs;
  }
};

/**
 * Check if a date is between two other dates
 * 
 * @param {Date|string} date - Date to check
 * @param {Date|string} startDate - Start date
 * @param {Date|string} endDate - End date
 * @param {boolean} inclusive - Whether to include start and end dates
 * @returns {boolean} Whether date is between start and end
 */
export const isDateBetween = (date, startDate, endDate, inclusive = true) => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const startObj = typeof startDate === 'string' ? new Date(startDate) : startDate;
  const endObj = typeof endDate === 'string' ? new Date(endDate) : endDate;
  
  // Check if dates are valid
  if (isNaN(dateObj.getTime()) || isNaN(startObj.getTime()) || isNaN(endObj.getTime())) {
    console.error('Invalid date(s):', date, startDate, endDate);
    return false;
  }
  
  if (inclusive) {
    return dateObj >= startObj && dateObj <= endObj;
  } else {
    return dateObj > startObj && dateObj < endObj;
  }
};

/**
 * Format a date range
 * 
 * @param {Date|string} startDate - Start date
 * @param {Date|string} endDate - End date
 * @param {Object} options - Formatting options
 * @returns {string} Formatted date range
 */
export const formatDateRange = (startDate, endDate, options = {}) => {
  const startObj = typeof startDate === 'string' ? new Date(startDate) : startDate;
  const endObj = typeof endDate === 'string' ? new Date(endDate) : endDate;
  
  // Check if dates are valid
  if (isNaN(startObj.getTime()) || isNaN(endObj.getTime())) {
    console.error('Invalid date(s):', startDate, endDate);
    return '';
  }
  
  // Same day
  if (startObj.toDateString() === endObj.toDateString()) {
    return `${formatDate(startObj, options)}`;
  }
  
  // Same month and year
  if (startObj.getMonth() === endObj.getMonth() && startObj.getFullYear() === endObj.getFullYear()) {
    return `${startObj.getDate()} - ${formatDate(endObj, options)}`;
  }
  
  // Same year
  if (startObj.getFullYear() === endObj.getFullYear()) {
    const startMonth = startObj.toLocaleDateString(options.locale || 'en-US', { month: 'short' });
    return `${startMonth} ${startObj.getDate()} - ${formatDate(endObj, options)}`;
  }
  
  // Different years
  return `${formatDate(startObj, options)} - ${formatDate(endObj, options)}`;
};