import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';

// Create the context
const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [themeInitialized, setThemeInitialized] = useState(false);

  // Initialize theme based on user preference or default to dark mode
  useEffect(() => {
    try {
      // Check if user has a saved preference
      const savedTheme = localStorage.getItem('theme');
      
      if (savedTheme) {
        setDarkMode(savedTheme === 'dark');
      } else {
        // Default to dark mode
        setDarkMode(true);
      }
    } catch (error) {
      // If localStorage is not available, default to dark mode
      console.warn('Error accessing localStorage for theme preference:', error);
      setDarkMode(true);
    } finally {
      setThemeInitialized(true);
    }
  }, []);

  // Update theme when darkMode changes
  useEffect(() => {
    if (!themeInitialized) return;
    
    try {
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      
      // Save preference to localStorage
      localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    } catch (error) {
      console.warn('Error saving theme preference:', error);
    }
  }, [darkMode, themeInitialized]);

  // Toggle theme function
  const toggleTheme = useCallback(() => {
    setDarkMode(prevMode => !prevMode);
  }, []);

  // Force a specific theme
  const setTheme = useCallback((isDark) => {
    setDarkMode(isDark);
  }, []);

  return (
    <ThemeContext.Provider value={{ 
      darkMode, 
      toggleTheme, 
      setTheme,
      themeInitialized 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};