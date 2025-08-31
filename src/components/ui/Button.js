import React from 'react';
import { motion } from 'framer-motion';

/**
 * Enhanced Button component with animation effects
 * 
 * @param {Object} props - Component props
 * @param {string} props.variant - Button style variant (primary, secondary, outline, danger)
 * @param {string} props.size - Button size (sm, md, lg)
 * @param {boolean} props.isLoading - Loading state
 * @param {React.ReactNode} props.children - Button content
 * @param {React.ButtonHTMLAttributes} props.rest - Additional button attributes
 */
const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  isLoading = false, 
  children, 
  className = '',
  ...rest 
}) => {
  // Base styles
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
    outline: 'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
  };
  
  // Size styles
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };
  
  // Disabled and loading styles
  const stateStyles = isLoading || rest.disabled
    ? 'opacity-70 cursor-not-allowed'
    : 'cursor-pointer';
  
  // Combine all styles
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${stateStyles} ${className}`;
  
  return (
    <motion.button
      className={buttonStyles}
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.02 }}
      disabled={isLoading || rest.disabled}
      {...rest}
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {children}
    </motion.button>
  );
};

export default Button;