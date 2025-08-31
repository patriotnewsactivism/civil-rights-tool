/**
 * Focus trap utility for modal dialogs and other UI elements
 * 
 * @param {Element} container - Container element to trap focus within
 * @returns {Object} Focus trap methods
 */
export const createFocusTrap = (container) => {
  if (typeof document === 'undefined') {
    return {
      activate: () => {},
      deactivate: () => {}
    };
  }
  
  let previousActiveElement = null;
  let isActive = false;
  
  // Get all focusable elements within the container
  const getFocusableElements = () => {
    return Array.from(
      container.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    ).filter(el => el.offsetParent !== null); // Filter out hidden elements
  };
  
  // Handle tab key to keep focus within container
  const handleTabKey = (e) => {
    if (!isActive || e.key !== 'Tab') return;
    
    const focusableElements = getFocusableElements();
    
    if (focusableElements.length === 0) {
      e.preventDefault();
      return;
    }
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  };
  
  // Handle escape key to deactivate trap
  const handleEscapeKey = (e) => {
    if (!isActive || e.key !== 'Escape') return;
    deactivate();
  };
  
  // Activate focus trap
  const activate = () => {
    if (isActive) return;
    
    previousActiveElement = document.activeElement;
    isActive = true;
    
    document.addEventListener('keydown', handleTabKey);
    document.addEventListener('keydown', handleEscapeKey);
    
    // Focus first focusable element
    const focusableElements = getFocusableElements();
    if (focusableElements.length > 0) {
      setTimeout(() => {
        focusableElements[0].focus();
      }, 0);
    }
  };
  
  // Deactivate focus trap
  const deactivate = () => {
    if (!isActive) return;
    
    isActive = false;
    
    document.removeEventListener('keydown', handleTabKey);
    document.removeEventListener('keydown', handleEscapeKey);
    
    // Restore focus to previous element
    if (previousActiveElement && previousActiveElement.focus) {
      setTimeout(() => {
        previousActiveElement.focus();
      }, 0);
    }
  };
  
  return {
    activate,
    deactivate
  };
};

/**
 * Announce a message to screen readers
 * 
 * @param {string} message - Message to announce
 * @param {string} politeness - ARIA live region politeness (polite, assertive)
 */
export const announceToScreenReader = (message, politeness = 'polite') => {
  if (typeof document === 'undefined') {
    return;
  }
  
  // Create or get announcement element
  let announcementElement = document.getElementById('screen-reader-announcement');
  
  if (!announcementElement) {
    announcementElement = document.createElement('div');
    announcementElement.id = 'screen-reader-announcement';
    announcementElement.setAttribute('aria-live', politeness);
    announcementElement.setAttribute('aria-atomic', 'true');
    announcementElement.style.position = 'absolute';
    announcementElement.style.width = '1px';
    announcementElement.style.height = '1px';
    announcementElement.style.padding = '0';
    announcementElement.style.overflow = 'hidden';
    announcementElement.style.clip = 'rect(0, 0, 0, 0)';
    announcementElement.style.whiteSpace = 'nowrap';
    announcementElement.style.border = '0';
    document.body.appendChild(announcementElement);
  }
  
  // Set politeness
  announcementElement.setAttribute('aria-live', politeness);
  
  // Clear previous announcement
  announcementElement.textContent = '';
  
  // Announce new message
  setTimeout(() => {
    announcementElement.textContent = message;
  }, 100);
};

/**
 * Create a keyboard shortcut handler
 * 
 * @param {Object} shortcuts - Keyboard shortcuts configuration
 * @returns {Function} Event handler function
 */
export const createKeyboardShortcuts = (shortcuts) => {
  if (typeof document === 'undefined') {
    return () => {};
  }
  
  return (event) => {
    const { key, ctrlKey, altKey, shiftKey, metaKey } = event;
    
    for (const [shortcut, callback] of Object.entries(shortcuts)) {
      const parts = shortcut.toLowerCase().split('+');
      const keyPart = parts.pop();
      
      const needCtrl = parts.includes('ctrl');
      const needAlt = parts.includes('alt');
      const needShift = parts.includes('shift');
      const needMeta = parts.includes('meta');
      
      if (
        key.toLowerCase() === keyPart.toLowerCase() &&
        ctrlKey === needCtrl &&
        altKey === needAlt &&
        shiftKey === needShift &&
        metaKey === needMeta
      ) {
        event.preventDefault();
        callback(event);
        return;
      }
    }
  };
};

/**
 * Check if high contrast mode is enabled
 * 
 * @returns {boolean} Whether high contrast mode is enabled
 */
export const isHighContrastMode = () => {
  if (typeof window === 'undefined') {
    return false;
  }
  
  // Check for Windows high contrast mode
  if (window.matchMedia) {
    // Edge, Chrome
    const highContrastMode = window.matchMedia('(-ms-high-contrast: active)').matches;
    if (highContrastMode) return true;
    
    // Firefox
    const highContrastModeFirefox = window.matchMedia('(forced-colors: active)').matches;
    if (highContrastModeFirefox) return true;
  }
  
  return false;
};

/**
 * Get appropriate text color for a background color
 * 
 * @param {string} backgroundColor - Background color in hex format
 * @returns {string} Text color (black or white)
 */
export const getContrastTextColor = (backgroundColor) => {
  if (!backgroundColor || typeof backgroundColor !== 'string') {
    return '#000000';
  }
  
  // Convert hex to RGB
  let r, g, b;
  
  if (backgroundColor.startsWith('#')) {
    const hex = backgroundColor.slice(1);
    
    if (hex.length === 3) {
      r = parseInt(hex[0] + hex[0], 16);
      g = parseInt(hex[1] + hex[1], 16);
      b = parseInt(hex[2] + hex[2], 16);
    } else {
      r = parseInt(hex.slice(0, 2), 16);
      g = parseInt(hex.slice(2, 4), 16);
      b = parseInt(hex.slice(4, 6), 16);
    }
  } else if (backgroundColor.startsWith('rgb')) {
    const match = backgroundColor.match(/(\d+),\s*(\d+),\s*(\d+)/);
    if (match) {
      [, r, g, b] = match.map(Number);
    } else {
      return '#000000';
    }
  } else {
    return '#000000';
  }
  
  // Calculate relative luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
  // Return black for light colors, white for dark colors
  return luminance > 0.5 ? '#000000' : '#FFFFFF';
};

/**
 * Calculate color contrast ratio
 * 
 * @param {string} color1 - First color in hex format
 * @param {string} color2 - Second color in hex format
 * @returns {number} Contrast ratio
 */
export const getContrastRatio = (color1, color2) => {
  if (!color1 || !color2 || typeof color1 !== 'string' || typeof color2 !== 'string') {
    return 1;
  }
  
  // Convert hex to RGB
  const hexToRgb = (hex) => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    const formattedHex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(formattedHex);
    
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        }
      : { r: 0, g: 0, b: 0 };
  };
  
  // Calculate relative luminance
  const getLuminance = (color) => {
    const rgb = hexToRgb(color);
    const { r, g, b } = rgb;
    
    const rsrgb = r / 255;
    const gsrgb = g / 255;
    const bsrgb = b / 255;
    
    const r1 = rsrgb <= 0.03928 ? rsrgb / 12.92 : Math.pow((rsrgb + 0.055) / 1.055, 2.4);
    const g1 = gsrgb <= 0.03928 ? gsrgb / 12.92 : Math.pow((gsrgb + 0.055) / 1.055, 2.4);
    const b1 = bsrgb <= 0.03928 ? bsrgb / 12.92 : Math.pow((bsrgb + 0.055) / 1.055, 2.4);
    
    return 0.2126 * r1 + 0.7152 * g1 + 0.0722 * b1;
  };
  
  // Calculate contrast ratio
  const l1 = getLuminance(color1);
  const l2 = getLuminance(color2);
  
  const lightest = Math.max(l1, l2);
  const darkest = Math.min(l1, l2);
  
  return (lightest + 0.05) / (darkest + 0.05);
};

/**
 * Check if a contrast ratio meets WCAG standards
 * 
 * @param {number} ratio - Contrast ratio
 * @param {string} level - WCAG level (AA, AAA)
 * @param {string} size - Text size (normal, large)
 * @returns {boolean} Whether contrast meets standards
 */
export const meetsContrastStandard = (ratio, level = 'AA', size = 'normal') => {
  if (level === 'AAA') {
    return size === 'large' ? ratio >= 4.5 : ratio >= 7;
  }
  
  return size === 'large' ? ratio >= 3 : ratio >= 4.5;
};

/**
 * Create an accessible skip link
 * 
 * @param {string} targetId - Target element ID
 * @param {string} text - Skip link text
 */
export const createSkipLink = (targetId, text = 'Skip to main content') => {
  if (typeof document === 'undefined') {
    return;
  }
  
  // Check if skip link already exists
  if (document.getElementById('skip-link')) {
    return;
  }
  
  const skipLink = document.createElement('a');
  skipLink.id = 'skip-link';
  skipLink.href = `#${targetId}`;
  skipLink.textContent = text;
  skipLink.className = 'skip-link';
  
  // Style the skip link
  skipLink.style.position = 'absolute';
  skipLink.style.top = '-40px';
  skipLink.style.left = '0';
  skipLink.style.padding = '8px';
  skipLink.style.zIndex = '100';
  skipLink.style.background = '#000000';
  skipLink.style.color = '#FFFFFF';
  skipLink.style.textDecoration = 'none';
  skipLink.style.transition = 'top 0.2s';
  
  // Show skip link on focus
  skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
  });
  
  // Hide skip link on blur
  skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
  });
  
  // Add skip link to the document
  document.body.insertBefore(skipLink, document.body.firstChild);
};

/**
 * Check if a DOM element is focusable
 * 
 * @param {Element} element - Element to check
 * @returns {boolean} Whether element is focusable
 */
export const isFocusable = (element) => {
  if (!element || typeof document === 'undefined') {
    return false;
  }
  
  // Check if element is disabled
  if (element.disabled) {
    return false;
  }
  
  // Check if element is hidden
  if (element.offsetParent === null) {
    return false;
  }
  
  // Check if element has tabindex
  const tabIndex = element.getAttribute('tabindex');
  if (tabIndex !== null && tabIndex !== undefined) {
    return parseInt(tabIndex, 10) >= 0;
  }
  
  // Check element type
  const focusableTags = ['a', 'button', 'input', 'select', 'textarea', 'details'];
  const tagName = element.tagName.toLowerCase();
  
  if (focusableTags.includes(tagName)) {
    if (tagName === 'a') {
      return !!element.href;
    }
    
    return true;
  }
  
  // Check for contenteditable
  if (element.getAttribute('contenteditable') === 'true') {
    return true;
  }
  
  return false;
};

/**
 * Set focus on an element with a delay
 * 
 * @param {Element|string} element - Element or selector
 * @param {number} delay - Delay in milliseconds
 */
export const setFocusWithDelay = (element, delay = 100) => {
  if (typeof document === 'undefined') {
    return;
  }
  
  setTimeout(() => {
    const targetElement = typeof element === 'string'
      ? document.querySelector(element)
      : element;
    
    if (targetElement && typeof targetElement.focus === 'function') {
      targetElement.focus();
    }
  }, delay);
};

/**
 * Generate an accessible ID
 * 
 * @param {string} prefix - ID prefix
 * @returns {string} Accessible ID
 */
export const generateAccessibleId = (prefix = 'a11y') => {
  return `${prefix}-${Math.random().toString(36).substring(2, 9)}`;
};

/**
 * Check if reduced motion is preferred
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
 * Create an accessible tooltip
 * 
 * @param {Element} element - Element to attach tooltip to
 * @param {string} content - Tooltip content
 * @param {Object} options - Tooltip options
 * @returns {Object} Tooltip methods
 */
export const createAccessibleTooltip = (element, content, options = {}) => {
  if (typeof document === 'undefined' || !element) {
    return {
      show: () => {},
      hide: () => {},
      destroy: () => {}
    };
  }
  
  const {
    position = 'top',
    delay = 300,
    duration = 200,
    className = '',
    id = generateAccessibleId('tooltip')
  } = options;
  
  let tooltipElement = null;
  let showTimeout = null;
  let hideTimeout = null;
  
  // Create tooltip element
  const createTooltip = () => {
    tooltipElement = document.createElement('div');
    tooltipElement.id = id;
    tooltipElement.className = `a11y-tooltip ${className}`;
    tooltipElement.setAttribute('role', 'tooltip');
    tooltipElement.textContent = content;
    
    // Style tooltip
    tooltipElement.style.position = 'absolute';
    tooltipElement.style.zIndex = '9999';
    tooltipElement.style.background = '#000000';
    tooltipElement.style.color = '#FFFFFF';
    tooltipElement.style.padding = '8px';
    tooltipElement.style.borderRadius = '4px';
    tooltipElement.style.fontSize = '14px';
    tooltipElement.style.maxWidth = '200px';
    tooltipElement.style.textAlign = 'center';
    tooltipElement.style.pointerEvents = 'none';
    tooltipElement.style.opacity = '0';
    tooltipElement.style.transition = `opacity ${duration}ms`;
    
    document.body.appendChild(tooltipElement);
  };
  
  // Position tooltip
  const positionTooltip = () => {
    if (!tooltipElement) return;
    
    const elementRect = element.getBoundingClientRect();
    const tooltipRect = tooltipElement.getBoundingClientRect();
    
    const scrollX = window.scrollX || document.documentElement.scrollLeft;
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    
    let top, left;
    
    switch (position) {
      case 'top':
        top = elementRect.top + scrollY - tooltipRect.height - 8;
        left = elementRect.left + scrollX + (elementRect.width / 2) - (tooltipRect.width / 2);
        break;
      case 'bottom':
        top = elementRect.bottom + scrollY + 8;
        left = elementRect.left + scrollX + (elementRect.width / 2) - (tooltipRect.width / 2);
        break;
      case 'left':
        top = elementRect.top + scrollY + (elementRect.height / 2) - (tooltipRect.height / 2);
        left = elementRect.left + scrollX - tooltipRect.width - 8;
        break;
      case 'right':
        top = elementRect.top + scrollY + (elementRect.height / 2) - (tooltipRect.height / 2);
        left = elementRect.right + scrollX + 8;
        break;
      default:
        top = elementRect.top + scrollY - tooltipRect.height - 8;
        left = elementRect.left + scrollX + (elementRect.width / 2) - (tooltipRect.width / 2);
    }
    
    // Keep tooltip within viewport
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    if (left < 0) {
      left = 0;
    } else if (left + tooltipRect.width > viewportWidth) {
      left = viewportWidth - tooltipRect.width;
    }
    
    if (top < 0) {
      top = elementRect.bottom + scrollY + 8; // Flip to bottom
    } else if (top + tooltipRect.height > viewportHeight + scrollY) {
      top = elementRect.top + scrollY - tooltipRect.height - 8; // Flip to top
    }
    
    tooltipElement.style.top = `${top}px`;
    tooltipElement.style.left = `${left}px`;
  };
  
  // Show tooltip
  const show = () => {
    clearTimeout(hideTimeout);
    
    showTimeout = setTimeout(() => {
      if (!tooltipElement) {
        createTooltip();
      }
      
      positionTooltip();
      tooltipElement.style.opacity = '1';
      
      // Update ARIA attributes
      element.setAttribute('aria-describedby', id);
    }, delay);
  };
  
  // Hide tooltip
  const hide = () => {
    clearTimeout(showTimeout);
    
    if (tooltipElement) {
      tooltipElement.style.opacity = '0';
      
      hideTimeout = setTimeout(() => {
        if (tooltipElement && tooltipElement.parentNode) {
          tooltipElement.parentNode.removeChild(tooltipElement);
          tooltipElement = null;
        }
        
        // Remove ARIA attributes
        element.removeAttribute('aria-describedby');
      }, duration);
    }
  };
  
  // Destroy tooltip
  const destroy = () => {
    clearTimeout(showTimeout);
    clearTimeout(hideTimeout);
    
    if (tooltipElement && tooltipElement.parentNode) {
      tooltipElement.parentNode.removeChild(tooltipElement);
    }
    
    element.removeAttribute('aria-describedby');
    
    // Remove event listeners
    element.removeEventListener('mouseenter', show);
    element.removeEventListener('mouseleave', hide);
    element.removeEventListener('focus', show);
    element.removeEventListener('blur', hide);
  };
  
  // Add event listeners
  element.addEventListener('mouseenter', show);
  element.addEventListener('mouseleave', hide);
  element.addEventListener('focus', show);
  element.addEventListener('blur', hide);
  
  // Set ARIA attributes
  element.setAttribute('aria-describedby', id);
  
  return {
    show,
    hide,
    destroy
  };
};