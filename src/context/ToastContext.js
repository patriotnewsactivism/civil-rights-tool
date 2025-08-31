import React, { createContext, useContext, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { v4 as uuidv4 } from 'uuid';
import Toast from '../components/ui/Toast';

// Create context
const ToastContext = createContext();

/**
 * Toast provider component
 * Manages multiple toast notifications
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 */
export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  
  // Add a new toast
  const addToast = useCallback((type, message, duration = 5000) => {
    const id = uuidv4();
    setToasts(prevToasts => [...prevToasts, { id, type, message, duration }]);
    return id;
  }, []);
  
  // Remove a toast by id
  const removeToast = useCallback((id) => {
    setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id));
  }, []);
  
  // Helper functions for different toast types
  const success = useCallback((message, duration) => addToast('success', message, duration), [addToast]);
  const error = useCallback((message, duration) => addToast('error', message, duration), [addToast]);
  const warning = useCallback((message, duration) => addToast('warning', message, duration), [addToast]);
  const info = useCallback((message, duration) => addToast('info', message, duration), [addToast]);
  
  // Create portal for toasts
  const ToastContainer = () => {
    const portalElement = document.getElementById('toast-root');
    
    if (!portalElement) {
      // Create portal element if it doesn't exist
      const element = document.createElement('div');
      element.id = 'toast-root';
      element.style.position = 'fixed';
      element.style.top = '1rem';
      element.style.right = '1rem';
      element.style.zIndex = '9999';
      element.style.maxWidth = '24rem';
      document.body.appendChild(element);
      
      return createPortal(
        <div className="space-y-2">
          {toasts.map(toast => (
            <Toast
              key={toast.id}
              type={toast.type}
              message={toast.message}
              duration={toast.duration}
              onClose={() => removeToast(toast.id)}
            />
          ))}
        </div>,
        element
      );
    }
    
    return createPortal(
      <div className="space-y-2">
        {toasts.map(toast => (
          <Toast
            key={toast.id}
            type={toast.type}
            message={toast.message}
            duration={toast.duration}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>,
      portalElement
    );
  };
  
  return (
    <ToastContext.Provider value={{ addToast, removeToast, success, error, warning, info }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

// Custom hook for using the toast context
export const useToast = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};