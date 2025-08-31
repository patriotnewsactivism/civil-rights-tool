import { useState, useCallback } from 'react';

/**
 * Custom hook for form handling with validation
 * 
 * @param {Object} options - Hook options
 * @param {Object} options.initialValues - Initial form values
 * @param {Function} options.validate - Validation function
 * @param {Function} options.onSubmit - Submit handler
 * @returns {Object} Form state and handlers
 */
const useForm = ({
  initialValues = {},
  validate = () => ({}),
  onSubmit = () => {}
}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitCount, setSubmitCount] = useState(0);
  
  // Reset form to initial values
  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  }, [initialValues]);
  
  // Set a specific form value
  const setValue = useCallback((name, value) => {
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);
  
  // Set multiple form values
  const setMultipleValues = useCallback((newValues) => {
    setValues(prev => ({
      ...prev,
      ...newValues
    }));
  }, []);
  
  // Handle field change
  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    
    // Handle different input types
    const inputValue = type === 'checkbox' ? checked : value;
    
    setValues(prev => ({
      ...prev,
      [name]: inputValue
    }));
  }, []);
  
  // Handle field blur
  const handleBlur = useCallback((e) => {
    const { name } = e.target;
    
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    
    // Validate on blur
    const validationErrors = validate(values);
    setErrors(validationErrors);
  }, [validate, values]);
  
  // Validate all fields
  const validateForm = useCallback(() => {
    const validationErrors = validate(values);
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  }, [validate, values]);
  
  // Handle form submission
  const handleSubmit = useCallback(async (e) => {
    if (e) e.preventDefault();
    
    // Mark all fields as touched
    const allTouched = Object.keys(values).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    
    setTouched(allTouched);
    setSubmitCount(prev => prev + 1);
    
    // Validate form
    const isValid = validateForm();
    
    if (isValid) {
      setIsSubmitting(true);
      try {
        await onSubmit(values);
      } catch (error) {
        console.error('Form submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  }, [validateForm, values, onSubmit]);
  
  // Check if a field has an error and has been touched
  const hasError = useCallback((name) => {
    return !!(errors[name] && touched[name]);
  }, [errors, touched]);
  
  // Get error message for a field
  const getError = useCallback((name) => {
    return hasError(name) ? errors[name] : '';
  }, [hasError, errors]);
  
  return {
    values,
    errors,
    touched,
    isSubmitting,
    submitCount,
    handleChange,
    handleBlur,
    handleSubmit,
    setValue,
    setMultipleValues,
    resetForm,
    validateForm,
    hasError,
    getError
  };
};

export default useForm;