import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Tabs component for organizing content
 * 
 * @param {Object} props - Component props
 * @param {Array} props.tabs - Array of tab objects with label and content
 * @param {number} props.defaultTab - Index of default active tab
 * @param {string} props.variant - Tab style variant (default, pills, underline)
 * @param {string} props.size - Tab size (sm, md, lg)
 * @param {string} props.className - Additional CSS classes
 */
const Tabs = ({ 
  tabs = [], 
  defaultTab = 0, 
  variant = 'default',
  size = 'md',
  className = ''
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  
  // Tab variant styles
  const variantStyles = {
    default: {
      container: 'border-b border-gray-200 dark:border-gray-700',
      tab: (isActive) => `
        inline-block px-4 py-2 border-b-2 
        ${isActive 
          ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400' 
          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-600'}
      `,
      content: 'pt-4'
    },
    pills: {
      container: 'flex space-x-2',
      tab: (isActive) => `
        px-4 py-2 rounded-md 
        ${isActive 
          ? 'bg-blue-600 text-white' 
          : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'}
      `,
      content: 'pt-4'
    },
    underline: {
      container: 'border-b border-gray-200 dark:border-gray-700',
      tab: (isActive) => `
        inline-block px-4 py-2 relative
        ${isActive 
          ? 'text-blue-600 dark:text-blue-400' 
          : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}
      `,
      content: 'pt-4'
    }
  };
  
  // Tab size styles
  const sizeStyles = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };
  
  return (
    <div className={className}>
      {/* Tab headers */}
      <div className={`${variantStyles[variant].container} mb-4`}>
        <div className="flex flex-wrap -mb-px">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`${variantStyles[variant].tab(activeTab === index)} ${sizeStyles[size]} font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
              onClick={() => setActiveTab(index)}
              role="tab"
              aria-selected={activeTab === index}
              aria-controls={`tab-panel-${index}`}
            >
              {tab.icon && <span className="mr-2">{tab.icon}</span>}
              {tab.label}
              
              {/* Animated underline for underline variant */}
              {variant === 'underline' && activeTab === index && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                />
              )}
            </button>
          ))}
        </div>
      </div>
      
      {/* Tab content */}
      <div className={variantStyles[variant].content}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={activeTab === index ? 'block' : 'hidden'}
            role="tabpanel"
            id={`tab-panel-${index}`}
            aria-labelledby={`tab-${index}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;