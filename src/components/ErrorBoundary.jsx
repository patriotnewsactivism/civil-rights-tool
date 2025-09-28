import React, { Component } from 'react';
import { AlertTriangle, RefreshCw, Database, Wifi, Server } from 'lucide-react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null, 
      errorInfo: null,
      errorType: null 
    };
  }

  static getDerivedStateFromError(error) {
    // Categorize the error
    let errorType = 'unknown';
    
    if (error?.message?.includes('fetch failed') || 
        error?.message?.includes('network') || 
        error?.message?.includes('Failed to fetch')) {
      errorType = 'network';
    } else if (error?.message?.includes('supabase') || 
               error?.message?.includes('database') || 
               error?.message?.includes('auth')) {
      errorType = 'database';
    } else if (error?.message?.includes('render') || 
               error?.message?.includes('component') || 
               error?.message?.includes('element')) {
      errorType = 'rendering';
    }
    
    // Update state so the next render will show the fallback UI
    return { 
      hasError: true, 
      error,
      errorType 
    };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to console
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    this.setState({ errorInfo });
    
    // You could also log to an error reporting service here
  }

  render() {
    // If there's a specific component to render for this section's errors, use it
    if (this.props.fallback && this.state.hasError) {
      return this.props.fallback(this.state.error, this.state.errorInfo);
    }
    
    // Otherwise, if there's an error, show our default error UI
    if (this.state.hasError) {
      const { errorType } = this.state;
      
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Civil Rights Legal Tool
            </h1>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-8">
              {errorType === 'network' && (
                <>
                  <div className="flex items-center mb-4">
                    <Wifi className="h-8 w-8 text-red-400 mr-3" />
                    <h2 className="text-2xl font-bold">Network Connection Issue</h2>
                  </div>
                  <p className="mb-4">
                    We're having trouble connecting to our servers. This could be due to:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Your internet connection is offline or unstable</li>
                    <li>Our servers may be temporarily unavailable</li>
                    <li>A firewall or network restriction is blocking the connection</li>
                  </ul>
                </>
              )}
              
              {errorType === 'database' && (
                <>
                  <div className="flex items-center mb-4">
                    <Database className="h-8 w-8 text-yellow-400 mr-3" />
                    <h2 className="text-2xl font-bold">Database Connection Issue</h2>
                  </div>
                  <p className="mb-4">
                    We're currently experiencing issues connecting to our database. This could be due to:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Temporary database maintenance</li>
                    <li>Server-side configuration changes</li>
                    <li>Authentication or permission issues</li>
                  </ul>
                </>
              )}
              
              {errorType === 'rendering' && (
                <>
                  <div className="flex items-center mb-4">
                    <AlertTriangle className="h-8 w-8 text-orange-400 mr-3" />
                    <h2 className="text-2xl font-bold">Display Error</h2>
                  </div>
                  <p className="mb-4">
                    We encountered an issue while displaying this content. Our team has been notified.
                  </p>
                </>
              )}
              
              {errorType === 'unknown' && (
                <>
                  <div className="flex items-center mb-4">
                    <Server className="h-8 w-8 text-blue-400 mr-3" />
                    <h2 className="text-2xl font-bold">Something went wrong</h2>
                  </div>
                  <p className="mb-4">
                    An unexpected error occurred. Our team has been notified and is working to fix the issue.
                  </p>
                </>
              )}
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => window.location.reload()} 
                  className="flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Try Again
                </button>
                
                <a 
                  href="/" 
                  className="flex items-center justify-center px-4 py-2 bg-transparent border border-white/30 hover:bg-white/10 rounded-lg transition-colors"
                >
                  Return to Home
                </a>
              </div>
            </div>
            
            <div className="text-sm text-white/50">
              <p>Error Reference: {this.state.error?.message?.substring(0, 50) || 'Unknown error'}</p>
              <p className="mt-2">If this issue persists, please contact support.</p>
            </div>
          </div>
        </div>
      );
    }

    // If there's no error, render children normally
    return this.props.children;
  }
}

// Create a component-specific error boundary HOC
export const withErrorBoundary = (Component, fallback) => {
  return (props) => (
    <ErrorBoundary fallback={fallback}>
      <Component {...props} />
    </ErrorBoundary>
  );
};

export default ErrorBoundary;