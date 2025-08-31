import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

// Create the auth context
const AuthContext = createContext();

/**
 * Authentication provider component
 * Manages user authentication state and provides auth methods
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Check for existing session on mount
  useEffect(() => {
    const checkSession = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
          throw error;
        }
        
        if (session) {
          const { data: { user: userData }, error: userError } = await supabase.auth.getUser();
          
          if (userError) {
            throw userError;
          }
          
          setUser(userData);
        }
      } catch (err) {
        console.error('Error checking auth session:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    checkSession();
    
    // Set up auth state change listener
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === 'SIGNED_IN' && session) {
          const { data: { user: userData } } = await supabase.auth.getUser();
          setUser(userData);
        } else if (event === 'SIGNED_OUT') {
          setUser(null);
        }
      }
    );
    
    // Clean up listener on unmount
    return () => {
      if (authListener && authListener.subscription) {
        authListener.subscription.unsubscribe();
      }
    };
  }, []);
  
  /**
   * Sign in with email and password
   * 
   * @param {string} email - User email
   * @param {string} password - User password
   * @returns {Promise} - Auth result
   */
  const signIn = async (email, password) => {
    try {
      setError(null);
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      
      if (error) {
        throw error;
      }
      
      return data;
    } catch (err) {
      console.error('Error signing in:', err);
      setError(err.message);
      throw err;
    }
  };
  
  /**
   * Sign up with email and password
   * 
   * @param {string} email - User email
   * @param {string} password - User password
   * @returns {Promise} - Auth result
   */
  const signUp = async (email, password) => {
    try {
      setError(null);
      const { data, error } = await supabase.auth.signUp({
        email,
        password
      });
      
      if (error) {
        throw error;
      }
      
      return data;
    } catch (err) {
      console.error('Error signing up:', err);
      setError(err.message);
      throw err;
    }
  };
  
  /**
   * Sign out the current user
   * 
   * @returns {Promise} - Sign out result
   */
  const signOut = async () => {
    try {
      setError(null);
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        throw error;
      }
    } catch (err) {
      console.error('Error signing out:', err);
      setError(err.message);
      throw err;
    }
  };
  
  /**
   * Reset password for a user
   * 
   * @param {string} email - User email
   * @returns {Promise} - Password reset result
   */
  const resetPassword = async (email) => {
    try {
      setError(null);
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`
      });
      
      if (error) {
        throw error;
      }
    } catch (err) {
      console.error('Error resetting password:', err);
      setError(err.message);
      throw err;
    }
  };
  
  // Auth context value
  const value = {
    user,
    loading,
    error,
    signIn,
    signUp,
    signOut,
    resetPassword,
    isAuthenticated: !!user
  };
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for using the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};