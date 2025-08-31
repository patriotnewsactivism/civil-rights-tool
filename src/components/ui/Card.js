import React from 'react';
import { motion } from 'framer-motion';

/**
 * Enhanced Card component with animation effects
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Card title
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.interactive - Whether the card has hover effects
 */
const Card = ({ 
  title, 
  children, 
  className = '', 
  interactive = true,
  ...rest 
}) => {
  const baseStyles = 'bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden';
  const interactiveStyles = interactive 
    ? 'transition-all hover:shadow-lg' 
    : '';
  
  return (
    <motion.div
      className={`${baseStyles} ${interactiveStyles} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      {...rest}
    >
      {title && (
        <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{title}</h3>
        </div>
      )}
      <div className="p-4">
        {children}
      </div>
    </motion.div>
  );
};

export default Card;