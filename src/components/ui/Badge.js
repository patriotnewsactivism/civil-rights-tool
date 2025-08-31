import React from 'react';
import { motion } from 'framer-motion';

/**
 * Badge component for status indicators
 * 
 * @param {Object} props - Component props
 * @param {string} props.variant - Badge variant (default, primary, success, warning, danger)
 * @param {string} props.size - Badge size (sm, md, lg)
 * @param {boolean} props.rounded - Whether the badge is fully rounded
 * @param {boolean} props.outline - Whether the badge has an outline style
 * @param {React.ReactNode} props.children - Badge content
 */
const Badge = ({ 
  variant = 'default', 
  size = 'md', 
  rounded = false,
  outline = false,
  children,
  className = '',
  ...rest
}) => {
  // Base styles
  const baseStyles = 'inline-flex items-center font-medium';
  
  // Variant styles
  const variantStyles = {
    default: outline 
      ? 'bg-transparent text-gray-700 border border-gray-300 dark:text-gray-300 dark:border-gray-600' 
      : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
    primary: outline 
      ? 'bg-transparent text-blue-700 border border-blue-500 dark:text-blue-400 dark:border-blue-500' 
      : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    success: outline 
      ? 'bg-transparent text-green-700 border border-green-500 dark:text-green-400 dark:border-green-500' 
      : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    warning: outline 
      ? 'bg-transparent text-yellow-700 border border-yellow-500 dark:text-yellow-400 dark:border-yellow-500' 
      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    danger: outline 
      ? 'bg-transparent text-red-700 border border-red-500 dark:text-red-400 dark:border-red-500' 
      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    info: outline 
      ? 'bg-transparent text-cyan-700 border border-cyan-500 dark:text-cyan-400 dark:border-cyan-500' 
      : 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300',
    purple: outline 
      ? 'bg-transparent text-purple-700 border border-purple-500 dark:text-purple-400 dark:border-purple-500' 
      : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
  };
  
  // Size styles
  const sizeStyles = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-2.5 py-0.5',
    lg: 'text-base px-3 py-1'
  };
  
  // Rounded styles
  const roundedStyles = rounded ? 'rounded-full' : 'rounded';
  
  // Combine all styles
  const badgeStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${roundedStyles} ${className}`;
  
  return (
    <motion.span
      className={badgeStyles}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...rest}
    >
      {children}
    </motion.span>
  );
};

/**
 * Status Badge component
 * 
 * @param {Object} props - Component props
 * @param {string} props.status - Status (online, offline, away, busy)
 * @param {string} props.size - Badge size (sm, md, lg)
 */
export const StatusBadge = ({ 
  status = 'offline', 
  size = 'md',
  className = '',
  ...rest
}) => {
  // Status configuration
  const statusConfig = {
    online: {
      variant: 'success',
      label: 'Online'
    },
    offline: {
      variant: 'default',
      label: 'Offline'
    },
    away: {
      variant: 'warning',
      label: 'Away'
    },
    busy: {
      variant: 'danger',
      label: 'Busy'
    },
    pending: {
      variant: 'info',
      label: 'Pending'
    }
  };
  
  const { variant, label } = statusConfig[status] || statusConfig.offline;
  
  // Dot size based on badge size
  const dotSize = {
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-2.5 h-2.5'
  };
  
  return (
    <Badge variant={variant} size={size} rounded className={className} {...rest}>
      <span className={`${dotSize[size]} rounded-full bg-current mr-1.5`} />
      {label}
    </Badge>
  );
};

/**
 * Counter Badge component
 * 
 * @param {Object} props - Component props
 * @param {number} props.count - Count value
 * @param {number} props.max - Maximum count to display before showing "+"
 * @param {string} props.variant - Badge variant
 * @param {string} props.size - Badge size
 */
export const CounterBadge = ({
  count = 0,
  max = 99,
  variant = 'primary',
  size = 'sm',
  className = '',
  ...rest
}) => {
  // Format count with max limit
  const formattedCount = count > max ? `${max}+` : count;
  
  return (
    <Badge variant={variant} size={size} rounded className={className} {...rest}>
      {formattedCount}
    </Badge>
  );
};

export default Badge;