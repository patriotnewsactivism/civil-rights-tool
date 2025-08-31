import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

/**
 * Dropdown component
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.trigger - Element that triggers the dropdown
 * @param {React.ReactNode} props.children - Dropdown content
 * @param {string} props.align - Alignment of dropdown (left, right)
 * @param {boolean} props.withArrow - Whether to show an arrow
 */
const Dropdown = ({ 
  trigger, 
  children, 
  align = 'left',
  withArrow = false,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  // Toggle dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);
  
  // Alignment classes
  const alignmentClasses = {
    left: 'left-0',
    right: 'right-0'
  };
  
  return (
    <div className={`relative inline-block ${className}`} ref={dropdownRef}>
      {/* Trigger element */}
      <div onClick={toggleDropdown} className="cursor-pointer">
        {trigger}
      </div>
      
      {/* Dropdown content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`absolute z-10 mt-2 ${alignmentClasses[align]} bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
          >
            {withArrow && (
              <div className={`absolute -top-2 ${align === 'left' ? 'left-4' : 'right-4'} w-4 h-4 rotate-45 bg-white dark:bg-gray-800`} />
            )}
            <div className="relative py-1 rounded-md bg-white dark:bg-gray-800 shadow-xs">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/**
 * Dropdown Item component
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Item content
 * @param {Function} props.onClick - Click handler
 * @param {boolean} props.disabled - Whether the item is disabled
 */
export const DropdownItem = ({ 
  children, 
  onClick, 
  disabled = false,
  className = ''
}) => {
  return (
    <button
      className={`w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

/**
 * Dropdown Divider component
 */
export const DropdownDivider = () => {
  return <div className="my-1 border-t border-gray-200 dark:border-gray-700" />;
};

/**
 * Dropdown with Button trigger
 * 
 * @param {Object} props - Component props
 * @param {string} props.label - Button label
 * @param {React.ReactNode} props.children - Dropdown content
 * @param {string} props.align - Alignment of dropdown (left, right)
 * @param {string} props.variant - Button variant
 * @param {string} props.size - Button size
 */
export const ButtonDropdown = ({
  label,
  children,
  align = 'left',
  variant = 'outline',
  size = 'md',
  className = ''
}) => {
  // Button variant classes
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600',
    outline: 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800'
  };
  
  // Button size classes
  const sizeClasses = {
    sm: 'text-sm px-2.5 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-5 py-2.5'
  };
  
  return (
    <Dropdown
      align={align}
      className={className}
      trigger={
        <button
          className={`inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${variantClasses[variant]} ${sizeClasses[size]}`}
        >
          {label}
          <ChevronDown className="ml-2 -mr-1 h-4 w-4" />
        </button>
      }
    >
      {children}
    </Dropdown>
  );
};

export default Dropdown;