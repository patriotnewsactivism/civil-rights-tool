import React, { createContext, useState, useContext, useEffect } from 'react';
import { supabase } from '../lib/supabase';

// Create the context
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [supabaseAvailable, setSupabaseAvailable] = useState(true);

  // Check for user session on initial load
  useEffect(() => {
    const checkUser = async () => {
      try {
        setLoading(true);
        
        // Test Supabase connection first
        try {
          // Simple ping to check if Supabase is available
          const { error: pingError } = await supabase.from('test').select('count').limit(1);
          
          if (pingError && (pingError.message.includes('fetch failed') || pingError.code === 'PGRST301')) {
            console.warn('Supabase connection unavailable:', pingError);
            setSupabaseAvailable(false);
            setLoading(false);
            return;
          }
        } catch (pingError) {
          console.warn('Error checking Supabase availability:', pingError);
          setSupabaseAvailable(false);
          setLoading(false);
          return;
        }
        
        // If we get here, Supabase is available, so proceed with auth
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
          throw error;
        }
        
        if (session?.user) {
          setUser(session.user);
        }
      } catch (error) {
        console.error('Error checking auth status:', error);
        setError(error.message);
        
        // If this is a connection error, mark Supabase as unavailable
        if (error.message.includes('fetch failed')) {
          setSupabaseAvailable(false);
        }
      } finally {
        setLoading(false);
      }
    };
    
    checkUser();
    
    // Only set up auth listener if Supabase is available
    let authListener = null;
    
    if (supabaseAvailable) {
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
  }, []);

  // Sign up function
  const signUp = async (email, password) => {
    if (!supabaseAvailable) {
      throw new Error('Database service is currently unavailable. Please try again later.');
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
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Sign in function
  const signIn = async (email, password) => {
    if (!supabaseAvailable) {
      throw new Error('Database service is currently unavailable. Please try again later.');
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
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Sign out function
  const signOut = async () => {
    if (!supabaseAvailable) {
      throw new Error('Database service is currently unavailable. Please try again later.');
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
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Reset password function
  const resetPassword = async (email) => {
    if (!supabaseAvailable) {
      throw new Error('Database service is currently unavailable. Please try again later.');
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
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Update password function
  const updatePassword = async (newPassword) => {
    if (!supabaseAvailable) {
      throw new Error('Database service is currently unavailable. Please try again later.');
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
      signUp,
      signIn,
      signOut,
      resetPassword,
      updatePassword
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