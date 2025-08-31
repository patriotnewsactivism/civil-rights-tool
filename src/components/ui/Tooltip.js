import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

/**
 * Tooltip component
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Element that triggers the tooltip
 * @param {string} props.content - Tooltip content
 * @param {string} props.position - Tooltip position (top, right, bottom, left)
 * @param {string} props.delay - Delay before showing tooltip in ms
 */
const Tooltip = ({ 
  children, 
  content, 
  position = 'top',
  delay = 300,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const triggerRef = useRef(null);
  const tooltipRef = useRef(null);
  const timeoutRef = useRef(null);
  
  // Calculate tooltip position
  const calculatePosition = () => {
    if (!triggerRef.current || !tooltipRef.current) return;
    
    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    
    const scrollX = window.scrollX || document.documentElement.scrollLeft;
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    
    let x = 0;
    let y = 0;
    
    switch (position) {
      case 'top':
        x = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2 + scrollX;
        y = triggerRect.top - tooltipRect.height - 8 + scrollY;
        break;
      case 'right':
        x = triggerRect.right + 8 + scrollX;
        y = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2 + scrollY;
        break;
      case 'bottom':
        x = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2 + scrollX;
        y = triggerRect.bottom + 8 + scrollY;
        break;
      case 'left':
        x = triggerRect.left - tooltipRect.width - 8 + scrollX;
        y = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2 + scrollY;
        break;
      default:
        x = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2 + scrollX;
        y = triggerRect.top - tooltipRect.height - 8 + scrollY;
    }
    
    // Keep tooltip within viewport
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Adjust horizontal position
    if (x < 0) {
      x = 0;
    } else if (x + tooltipRect.width > viewportWidth) {
      x = viewportWidth - tooltipRect.width;
    }
    
    // Adjust vertical position
    if (y < 0) {
      y = triggerRect.bottom + 8 + scrollY; // Flip to bottom
    } else if (y + tooltipRect.height > viewportHeight + scrollY) {
      y = triggerRect.top - tooltipRect.height - 8 + scrollY; // Flip to top
    }
    
    setTooltipPosition({ x, y });
  };
  
  // Show tooltip with delay
  const showTooltip = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
      // Calculate position after tooltip is rendered
      setTimeout(calculatePosition, 0);
    }, delay);
  };
  
  // Hide tooltip and clear timeout
  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };
  
  // Update position on window resize
  useEffect(() => {
    if (isVisible) {
      window.addEventListener('resize', calculatePosition);
      window.addEventListener('scroll', calculatePosition);
    }
    
    return () => {
      window.removeEventListener('resize', calculatePosition);
      window.removeEventListener('scroll', calculatePosition);
    };
  }, [isVisible]);
  
  // Animation variants based on position
  const variants = {
    top: {
      hidden: { opacity: 0, y: -5 },
      visible: { opacity: 1, y: 0 }
    },
    right: {
      hidden: { opacity: 0, x: 5 },
      visible: { opacity: 1, x: 0 }
    },
    bottom: {
      hidden: { opacity: 0, y: 5 },
      visible: { opacity: 1, y: 0 }
    },
    left: {
      hidden: { opacity: 0, x: -5 },
      visible: { opacity: 1, x: 0 }
    }
  };
  
  // Arrow styles based on position
  const arrowStyles = {
    top: 'bottom-[-4px] left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent',
    right: 'left-[-4px] top-1/2 transform -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent',
    bottom: 'top-[-4px] left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent',
    left: 'right-[-4px] top-1/2 transform -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent'
  };
  
  return (
    <>
      <div
        ref={triggerRef}
        className={`inline-block ${className}`}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
      >
        {children}
      </div>
      
      {isVisible && createPortal(
        <AnimatePresence>
          <motion.div
            ref={tooltipRef}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants[position]}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              left: tooltipPosition.x,
              top: tooltipPosition.y,
              zIndex: 9999
            }}
            className="pointer-events-none"
          >
            <div className="bg-gray-900 dark:bg-gray-700 text-white text-sm rounded px-2 py-1 max-w-xs">
              {content}
              <div className={`absolute w-0 h-0 border-4 border-gray-900 dark:border-gray-700 ${arrowStyles[position]}`} />
            </div>
          </motion.div>
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default Tooltip;