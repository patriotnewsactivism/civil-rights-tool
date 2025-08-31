/**
 * Get the current viewport dimensions
 * 
 * @returns {Object} Viewport dimensions
 */
export const getViewport = () => {
  if (typeof window === 'undefined') {
    return { width: 0, height: 0 };
  }
  
  return {
    width: window.innerWidth || document.documentElement.clientWidth,
    height: window.innerHeight || document.documentElement.clientHeight
  };
};

/**
 * Check if the current device is mobile
 * 
 * @returns {boolean} Whether device is mobile
 */
export const isMobile = () => {
  if (typeof window === 'undefined') {
    return false;
  }
  
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

/**
 * Check if the current device is a tablet
 * 
 * @returns {boolean} Whether device is a tablet
 */
export const isTablet = () => {
  if (typeof window === 'undefined') {
    return false;
  }
  
  const userAgent = navigator.userAgent.toLowerCase();
  const isIpad = /ipad/.test(userAgent);
  const isAndroidTablet = /android/.test(userAgent) && !/mobile/.test(userAgent);
  const viewport = getViewport();
  
  return isIpad || isAndroidTablet || (viewport.width >= 768 && viewport.width <= 1024);
};

/**
 * Check if the current device is desktop
 * 
 * @returns {boolean} Whether device is desktop
 */
export const isDesktop = () => {
  return !isMobile() && !isTablet();
};

/**
 * Get the current browser name
 * 
 * @returns {string} Browser name
 */
export const getBrowserName = () => {
  if (typeof window === 'undefined') {
    return 'unknown';
  }
  
  const userAgent = navigator.userAgent;
  
  if (userAgent.indexOf('Firefox') > -1) {
    return 'Firefox';
  } else if (userAgent.indexOf('SamsungBrowser') > -1) {
    return 'Samsung Browser';
  } else if (userAgent.indexOf('Opera') > -1 || userAgent.indexOf('OPR') > -1) {
    return 'Opera';
  } else if (userAgent.indexOf('Trident') > -1) {
    return 'Internet Explorer';
  } else if (userAgent.indexOf('Edge') > -1) {
    return 'Edge';
  } else if (userAgent.indexOf('Chrome') > -1) {
    return 'Chrome';
  } else if (userAgent.indexOf('Safari') > -1) {
    return 'Safari';
  } else {
    return 'unknown';
  }
};

/**
 * Get the current operating system
 * 
 * @returns {string} Operating system
 */
export const getOS = () => {
  if (typeof window === 'undefined') {
    return 'unknown';
  }
  
  const userAgent = navigator.userAgent;
  
  if (userAgent.indexOf('Windows') > -1) {
    return 'Windows';
  } else if (userAgent.indexOf('Mac') > -1) {
    return 'MacOS';
  } else if (userAgent.indexOf('Linux') > -1) {
    return 'Linux';
  } else if (userAgent.indexOf('Android') > -1) {
    return 'Android';
  } else if (userAgent.indexOf('iOS') > -1 || userAgent.indexOf('iPhone') > -1 || userAgent.indexOf('iPad') > -1) {
    return 'iOS';
  } else {
    return 'unknown';
  }
};

/**
 * Check if cookies are enabled
 * 
 * @returns {boolean} Whether cookies are enabled
 */
export const areCookiesEnabled = () => {
  if (typeof navigator === 'undefined') {
    return false;
  }
  
  return navigator.cookieEnabled;
};

/**
 * Check if local storage is available
 * 
 * @returns {boolean} Whether local storage is available
 */
export const isLocalStorageAvailable = () => {
  if (typeof window === 'undefined') {
    return false;
  }
  
  try {
    const testKey = '__test__';
    window.localStorage.setItem(testKey, testKey);
    window.localStorage.removeItem(testKey);
    return true;
  } catch (e) {
    return false;
  }
};

/**
 * Check if session storage is available
 * 
 * @returns {boolean} Whether session storage is available
 */
export const isSessionStorageAvailable = () => {
  if (typeof window === 'undefined') {
    return false;
  }
  
  try {
    const testKey = '__test__';
    window.sessionStorage.setItem(testKey, testKey);
    window.sessionStorage.removeItem(testKey);
    return true;
  } catch (e) {
    return false;
  }
};

/**
 * Get a cookie by name
 * 
 * @param {string} name - Cookie name
 * @returns {string|null} Cookie value or null if not found
 */
export const getCookie = (name) => {
  if (typeof document === 'undefined') {
    return null;
  }
  
  const cookies = document.cookie.split(';');
  
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    
    if (cookie.startsWith(name + '=')) {
      return cookie.substring(name.length + 1);
    }
  }
  
  return null;
};

/**
 * Set a cookie
 * 
 * @param {string} name - Cookie name
 * @param {string} value - Cookie value
 * @param {Object} options - Cookie options
 * @param {number} options.days - Cookie expiration in days
 * @param {string} options.path - Cookie path
 * @param {string} options.domain - Cookie domain
 * @param {boolean} options.secure - Whether cookie is secure
 * @param {boolean} options.httpOnly - Whether cookie is HTTP only
 * @param {string} options.sameSite - SameSite attribute (strict, lax, none)
 */
export const setCookie = (name, value, options = {}) => {
  if (typeof document === 'undefined') {
    return;
  }
  
  const {
    days,
    path = '/',
    domain,
    secure,
    httpOnly,
    sameSite
  } = options;
  
  let cookieString = `${name}=${encodeURIComponent(value)}`;
  
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    cookieString += `; expires=${date.toUTCString()}`;
  }
  
  if (path) {
    cookieString += `; path=${path}`;
  }
  
  if (domain) {
    cookieString += `; domain=${domain}`;
  }
  
  if (secure) {
    cookieString += '; secure';
  }
  
  if (httpOnly) {
    cookieString += '; httpOnly';
  }
  
  if (sameSite) {
    cookieString += `; sameSite=${sameSite}`;
  }
  
  document.cookie = cookieString;
};

/**
 * Delete a cookie
 * 
 * @param {string} name - Cookie name
 * @param {Object} options - Cookie options
 * @param {string} options.path - Cookie path
 * @param {string} options.domain - Cookie domain
 */
export const deleteCookie = (name, options = {}) => {
  setCookie(name, '', { ...options, days: -1 });
};

/**
 * Copy text to clipboard
 * 
 * @param {string} text - Text to copy
 * @returns {Promise<boolean>} Whether copy was successful
 */
export const copyToClipboard = async (text) => {
  if (typeof navigator === 'undefined') {
    return false;
  }
  
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    const success = document.execCommand('copy');
    document.body.removeChild(textArea);
    
    return success;
  } catch (error) {
    console.error('Failed to copy text:', error);
    return false;
  }
};

/**
 * Download a file
 * 
 * @param {string} url - File URL
 * @param {string} filename - Filename
 */
export const downloadFile = (url, filename) => {
  if (typeof document === 'undefined') {
    return;
  }
  
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * Download data as a file
 * 
 * @param {string} data - File data
 * @param {string} filename - Filename
 * @param {string} mimeType - MIME type
 */
export const downloadData = (data, filename, mimeType = 'text/plain') => {
  if (typeof document === 'undefined') {
    return;
  }
  
  const blob = new Blob([data], { type: mimeType });
  const url = URL.createObjectURL(blob);
  
  downloadFile(url, filename);
  
  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 100);
};

/**
 * Open a URL in a new tab
 * 
 * @param {string} url - URL to open
 * @param {boolean} noopener - Whether to use noopener
 * @param {boolean} noreferrer - Whether to use noreferrer
 */
export const openInNewTab = (url, noopener = true, noreferrer = true) => {
  if (typeof window === 'undefined') {
    return;
  }
  
  const features = [];
  
  if (noopener) {
    features.push('noopener');
  }
  
  if (noreferrer) {
    features.push('noreferrer');
  }
  
  window.open(url, '_blank', features.join(','));
};

/**
 * Scroll to an element
 * 
 * @param {string|Element} element - Element or selector
 * @param {Object} options - Scroll options
 * @param {number} options.offset - Offset from element
 * @param {string} options.behavior - Scroll behavior (auto, smooth)
 * @param {number} options.duration - Animation duration in ms (for fallback)
 */
export const scrollToElement = (element, options = {}) => {
  if (typeof document === 'undefined') {
    return;
  }
  
  const {
    offset = 0,
    behavior = 'smooth',
    duration = 500
  } = options;
  
  const targetElement = typeof element === 'string'
    ? document.querySelector(element)
    : element;
  
  if (!targetElement) {
    console.error('Element not found:', element);
    return;
  }
  
  const elementPosition = targetElement.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;
  
  if ('scrollBehavior' in document.documentElement.style) {
    window.scrollTo({
      top: offsetPosition,
      behavior
    });
  } else {
    // Fallback for browsers that don't support smooth scrolling
    const startPosition = window.pageYOffset;
    const distance = offsetPosition - startPosition;
    const startTime = performance.now();
    
    const easeInOutQuad = (t) => {
      return t < 0.5
        ? 2 * t * t
        : -1 + (4 - 2 * t) * t;
    };
    
    const animateScroll = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easeProgress = easeInOutQuad(progress);
      
      window.scrollTo(0, startPosition + distance * easeProgress);
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };
    
    requestAnimationFrame(animateScroll);
  }
};

/**
 * Detect if the page is being loaded in an iframe
 * 
 * @returns {boolean} Whether page is in an iframe
 */
export const isInIframe = () => {
  if (typeof window === 'undefined') {
    return false;
  }
  
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
};

/**
 * Get the current URL parameters
 * 
 * @returns {Object} URL parameters
 */
export const getUrlParams = () => {
  if (typeof window === 'undefined') {
    return {};
  }
  
  const params = {};
  const searchParams = new URLSearchParams(window.location.search);
  
  for (const [key, value] of searchParams.entries()) {
    params[key] = value;
  }
  
  return params;
};

/**
 * Update URL parameters without reloading the page
 * 
 * @param {Object} params - Parameters to update
 * @param {boolean} replace - Whether to replace the current history entry
 */
export const updateUrlParams = (params, replace = false) => {
  if (typeof window === 'undefined') {
    return;
  }
  
  const url = new URL(window.location.href);
  const searchParams = url.searchParams;
  
  Object.entries(params).forEach(([key, value]) => {
    if (value === null || value === undefined) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }
  });
  
  const newUrl = url.pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '') + url.hash;
  
  if (replace) {
    window.history.replaceState({}, '', newUrl);
  } else {
    window.history.pushState({}, '', newUrl);
  }
};

/**
 * Detect dark mode preference
 * 
 * @returns {boolean} Whether dark mode is preferred
 */
export const prefersDarkMode = () => {
  if (typeof window === 'undefined') {
    return false;
  }
  
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
};

/**
 * Detect reduced motion preference
 * 
 * @returns {boolean} Whether reduced motion is preferred
 */
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') {
    return false;
  }
  
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Get the current scroll position
 * 
 * @returns {Object} Scroll position
 */
export const getScrollPosition = () => {
  if (typeof window === 'undefined') {
    return { x: 0, y: 0 };
  }
  
  return {
    x: window.pageXOffset || document.documentElement.scrollLeft,
    y: window.pageYOffset || document.documentElement.scrollTop
  };
};

/**
 * Check if an element is in viewport
 * 
 * @param {Element} element - Element to check
 * @param {number} offset - Offset from viewport edge
 * @returns {boolean} Whether element is in viewport
 */
export const isElementInViewport = (element, offset = 0) => {
  if (typeof document === 'undefined' || !element) {
    return false;
  }
  
  const rect = element.getBoundingClientRect();
  const viewport = getViewport();
  
  return (
    rect.top >= 0 - offset &&
    rect.left >= 0 - offset &&
    rect.bottom <= viewport.height + offset &&
    rect.right <= viewport.width + offset
  );
};