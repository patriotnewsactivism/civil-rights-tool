import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';

/**
 * Toast notification component
 * 
 * @param {Object} props - Component props
 * @param {string} props.type - Toast type (success, error, info, warning)
 * @param {string} props.message - Toast message
 * @param {number} props.duration - Duration in ms before auto-dismiss
 * @param {Function} props.onClose - Function called when toast is closed
 */
const Toast = ({ 
  type = 'info', 
  message, 
  duration = 5000, 
  onClose 
}) => {
  const [isVisible, setIsVisible] = useState(true);
  
  // Auto-dismiss after duration
  useEffect(() => {
    if (!duration) return;
    
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        if (onClose) onClose();
      }, 300); // Allow exit animation to complete
    }, duration);
    
    return () => clearTimeout(timer);
  }, [duration, onClose]);
  
  // Handle manual close
  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      if (onClose) onClose();
    }, 300);
  };
  
  // Toast type styles and icons
  const toastConfig = {
    success: {
      icon: <CheckCircle className="h-5 w-5" />,
      bgColor: 'bg-green-100 dark:bg-green-900/30',
      textColor: 'text-green-800 dark:text-green-300',
      borderColor: 'border-green-400 dark:border-green-700'
    },
    error: {
      icon: <AlertCircle className="h-5 w-5" />,
      bgColor: 'bg-red-100 dark:bg-red-900/30',
      textColor: 'text-red-800 dark:text-red-300',
      borderColor: 'border-red-400 dark:border-red-700'
    },
    warning: {
      icon: <AlertTriangle className="h-5 w-5" />,
      bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
      textColor: 'text-yellow-800 dark:text-yellow-300',
      borderColor: 'border-yellow-400 dark:border-yellow-700'
    },
    info: {
      icon: <Info className="h-5 w-5" />,
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
      textColor: 'text-blue-800 dark:text-blue-300',
      borderColor: 'border-blue-400 dark:border-blue-700'
    }
  };
  
  const { icon, bgColor, textColor, borderColor } = toastConfig[type] || toastConfig.info;
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className={`flex items-center p-4 mb-4 rounded-lg border ${bgColor} ${textColor} ${borderColor}`}
          role="alert"
        >
          <div className="mr-2">
            {icon}
          </div>
          <div className="ml-2 text-sm font-medium flex-grow">
            {message}
          </div>
          <button
            type="button"
            className={`ml-auto -mx-1.5 -my-1.5 ${bgColor} ${textColor} rounded-lg p-1.5 hover:bg-opacity-50 focus:ring-2 focus:ring-gray-300 inline-flex items-center justify-center h-8 w-8`}
            onClick={handleClose}
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <X className="h-4 w-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;