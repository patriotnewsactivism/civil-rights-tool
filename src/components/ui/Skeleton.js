import React from 'react';

/**
 * Skeleton component for loading states
 * 
 * @param {Object} props - Component props
 * @param {string} props.variant - Skeleton variant (line, circle, rectangle)
 * @param {string} props.width - Width of the skeleton
 * @param {string} props.height - Height of the skeleton
 * @param {boolean} props.animated - Whether the skeleton is animated
 */
const Skeleton = ({ 
  variant = 'line', 
  width = '100%', 
  height, 
  animated = true,
  className = '',
  ...rest
}) => {
  // Base styles
  const baseStyles = 'bg-gray-200 dark:bg-gray-700';
  
  // Animation styles
  const animationStyles = animated ? 'animate-pulse' : '';
  
  // Variant styles
  const variantStyles = {
    line: 'rounded',
    circle: 'rounded-full',
    rectangle: 'rounded-md'
  };
  
  // Default heights based on variant
  const defaultHeight = {
    line: '1rem',
    circle: '3rem',
    rectangle: '6rem'
  };
  
  // Use provided height or default
  const skeletonHeight = height || defaultHeight[variant];
  
  // Combine all styles
  const skeletonStyles = `${baseStyles} ${animationStyles} ${variantStyles[variant]} ${className}`;
  
  return (
    <div 
      className={skeletonStyles}
      style={{ width, height: skeletonHeight }}
      {...rest}
    />
  );
};

/**
 * Text Skeleton component
 * 
 * @param {Object} props - Component props
 * @param {number} props.lines - Number of lines
 * @param {string} props.lineHeight - Height of each line
 * @param {boolean} props.lastLineWidth - Width of the last line (percentage)
 */
export const TextSkeleton = ({ 
  lines = 3, 
  lineHeight = '1rem',
  lastLineWidth = 70,
  className = '',
  ...rest
}) => {
  return (
    <div className={`space-y-2 ${className}`} {...rest}>
      {Array.from({ length: lines }).map((_, index) => (
        <Skeleton
          key={index}
          variant="line"
          height={lineHeight}
          width={index === lines - 1 && lastLineWidth < 100 ? `${lastLineWidth}%` : '100%'}
        />
      ))}
    </div>
  );
};

/**
 * Card Skeleton component
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.hasImage - Whether the card has an image
 * @param {number} props.lines - Number of text lines
 */
export const CardSkeleton = ({ 
  hasImage = true, 
  lines = 3,
  className = '',
  ...rest
}) => {
  return (
    <div className={`rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden ${className}`} {...rest}>
      {hasImage && (
        <Skeleton variant="rectangle" height="12rem" />
      )}
      <div className="p-4 space-y-4">
        <Skeleton variant="line" height="1.5rem" width="60%" />
        <TextSkeleton lines={lines} />
        <div className="flex space-x-2">
          <Skeleton variant="line" height="2rem" width="30%" />
          <Skeleton variant="line" height="2rem" width="30%" />
        </div>
      </div>
    </div>
  );
};

/**
 * Profile Skeleton component
 */
export const ProfileSkeleton = ({ className = '', ...rest }) => {
  return (
    <div className={`flex items-center space-x-4 ${className}`} {...rest}>
      <Skeleton variant="circle" width="3rem" height="3rem" />
      <div className="space-y-2 flex-1">
        <Skeleton variant="line" height="1.25rem" width="40%" />
        <Skeleton variant="line" height="1rem" width="60%" />
      </div>
    </div>
  );
};

/**
 * Table Skeleton component
 * 
 * @param {Object} props - Component props
 * @param {number} props.rows - Number of rows
 * @param {number} props.columns - Number of columns
 */
export const TableSkeleton = ({ 
  rows = 5, 
  columns = 4,
  className = '',
  ...rest
}) => {
  return (
    <div className={`w-full ${className}`} {...rest}>
      {/* Header */}
      <div className="flex border-b border-gray-200 dark:border-gray-700 pb-2 mb-2">
        {Array.from({ length: columns }).map((_, index) => (
          <div key={`header-${index}`} className="flex-1 px-2">
            <Skeleton variant="line" height="1.5rem" />
          </div>
        ))}
      </div>
      
      {/* Rows */}
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={`row-${rowIndex}`} className="flex py-2 border-b border-gray-100 dark:border-gray-800">
          {Array.from({ length: columns }).map((_, colIndex) => (
            <div key={`cell-${rowIndex}-${colIndex}`} className="flex-1 px-2">
              <Skeleton variant="line" height="1.25rem" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Skeleton;