import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { supabase, isUsingMockClient } from '../lib/supabase';

// Create the context
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [supabaseAvailable, setSupabaseAvailable] = useState(true);
  const [authInitialized, setAuthInitialized] = useState(false);

  // Check Supabase availability
  const checkSupabaseAvailability = useCallback(async () => {
    try {
      // If we're using the mock client, Supabase is not available
      if (isUsingMockClient) {
        setSupabaseAvailable(false);
        return false;
      }
      
      // Use the availability check from our enhanced client
      const isAvailable = await supabase.checkAvailability();
      setSupabaseAvailable(isAvailable);
      return isAvailable;
    } catch (error) {
      console.warn('Error checking Supabase availability:', error);
      setSupabaseAvailable(false);
      return false;
    }
  }, []);

  // Check for user session on initial load
  useEffect(() => {
    const checkUser = async () => {
      try {
        setLoading(true);
        
        // If we're using the mock client, skip auth initialization
        if (isUsingMockClient) {
          console.info('Using mock Supabase client, authentication is not available');
          setSupabaseAvailable(false);
          setLoading(false);
          setAuthInitialized(true);
          return;
        }
        
        // First check if Supabase is available
        const isAvailable = await checkSupabaseAvailability();
        
        if (!isAvailable) {
          console.warn('Supabase is not available, skipping auth initialization');
          setLoading(false);
          setAuthInitialized(true);
          return;
        }
        
        // If Supabase is available, get the session
        try {
          const { data: { session }, error } = await supabase.auth.getSession();
          
          if (error) {
            throw error;
          }
          
          if (session?.user) {
            setUser(session.user);
          }
        } catch (error) {
          console.warn('Error checking auth status:', error);
          setError(error.message);
          
          // If this is a connection error, mark Supabase as unavailable
          if (error.message?.includes('fetch failed') || error.message?.includes('network')) {
            setSupabaseAvailable(false);
          }
        } finally {
          setLoading(false);
          setAuthInitialized(true);
        }
      } catch (error) {
        console.warn('Unexpected error in auth initialization:', error);
        setError(error.message);
        setSupabaseAvailable(false);
        setLoading(false);
        setAuthInitialized(true);
      }
    };
    
    checkUser();
  }, [checkSupabaseAvailability]);

  // Set up auth state change listener when Supabase is available
  useEffect(() => {
    let authListener = null;
    
    const setupAuthListener = async () => {
      if (supabaseAvailable && authInitialized) {
        try {
          const { data: listener } = supabase.auth.onAuthStateChange(
            async (event, session) => {
              if (session?.user) {
                setUser(session.user);
              } else {
                setUser(null);
              }
              setLoading(false);
            }
          );
          
          authListener = listener;
        } catch (error) {
          console.error('Error setting up auth listener:', error);
          setSupabaseAvailable(false);
        }
      }
    };
    
    setupAuthListener();
    
    // Clean up subscription
    return () => {
      if (authListener && authListener.subscription) {
        try {
          authListener.subscription.unsubscribe();
        } catch (error) {
          console.error('Error unsubscribing from auth listener:', error);
        }
      }
    };
  }, [supabaseAvailable, authInitialized]);

  // Retry connection to Supabase periodically if it's unavailable
  useEffect(() => {
    let retryInterval = null;
    
    // Don't retry if we're using the mock client
    if (!supabaseAvailable && authInitialized && !isUsingMockClient) {
      // Try to reconnect every 30 seconds
      retryInterval = setInterval(async () => {
        console.log('Attempting to reconnect to Supabase...');
        const isAvailable = await checkSupabaseAvailability();
        
        if (isAvailable) {
          console.log('Successfully reconnected to Supabase');
          clearInterval(retryInterval);
        }
      }, 30000);
    }
    
    return () => {
      if (retryInterval) {
        clearInterval(retryInterval);
      }
    };
  }, [supabaseAvailable, authInitialized, checkSupabaseAvailability]);

  // Sign up function
  const signUp = async (email, password) => {
    if (!supabaseAvailable) {
      throw new Error('Authentication service is currently unavailable. Please try again later.');
    }
    
    try {
      setLoading(true);
      setError(null);
      
      const { data, error } = await supabase.auth.signUp({
        email,
        password
      });
      
      if (error) {
        throw error;
      }
      
      return data;
    } catch (error) {
      console.error('Error signing up:', error);
      setError(error.message);
      
      // Check if Supabase is still available
      await checkSupabaseAvailability();
      
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Sign in function
  const signIn = async (email, password) => {
    if (!supabaseAvailable) {
      throw new Error('Authentication service is currently unavailable. Please try again later.');
    }
    
    try {
      setLoading(true);
      setError(null);
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      
      if (error) {
        throw error;
      }
      
      return data;
    } catch (error) {
      console.error('Error signing in:', error);
      setError(error.message);
      
      // Check if Supabase is still available
      await checkSupabaseAvailability();
      
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Sign out function
  const signOut = async () => {
    if (!supabaseAvailable) {
      throw new Error('Authentication service is currently unavailable. Please try again later.');
    }
    
    try {
      setLoading(true);
      setError(null);
      
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        throw error;
      }
    } catch (error) {
      console.error('Error signing out:', error);
      setError(error.message);
      
      // Check if Supabase is still available
      await checkSupabaseAvailability();
      
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Reset password function
  const resetPassword = async (email) => {
    if (!supabaseAvailable) {
      throw new Error('Authentication service is currently unavailable. Please try again later.');
    }
    
    try {
      setLoading(true);
      setError(null);
      
      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`
      });
      
      if (error) {
        throw error;
      }
      
      return data;
    } catch (error) {
      console.error('Error resetting password:', error);
      setError(error.message);
      
      // Check if Supabase is still available
      await checkSupabaseAvailability();
      
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Update password function
  const updatePassword = async (newPassword) => {
    if (!supabaseAvailable) {
      throw new Error('Authentication service is currently unavailable. Please try again later.');
    }
    
    try {
      setLoading(true);
      setError(null);
      
      const { data, error } = await supabase.auth.updateUser({
        password: newPassword
      });
      
      if (error) {
        throw error;
      }
      
      return data;
    } catch (error) {
      console.error('Error updating password:', error);
      setError(error.message);
      
      // Check if Supabase is still available
      await checkSupabaseAvailability();
      
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      error,
      supabaseAvailable,
      authInitialized,
      signUp,
      signIn,
      signOut,
      resetPassword,
      updatePassword,
      checkSupabaseAvailability
    }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};