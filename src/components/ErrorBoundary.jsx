import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      const isDatabaseError = this.state.error?.message?.includes('fetch failed') || 
                             this.state.error?.message?.includes('supabase');
      
      // You can render any custom fallback UI
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Civil Rights Legal Tool
            </h1>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">
                {isDatabaseError ? "Database Connection Issue" : "Something went wrong"}
              </h2>
              
              {isDatabaseError ? (
                <div>
                  <p className="mb-4">
                    We're currently experiencing issues connecting to our database. This could be due to:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Temporary database maintenance</li>
                    <li>Network connectivity issues</li>
                    <li>Server-side configuration changes</li>
                  </ul>
                  <p className="mb-4">
                    Please try again later. We apologize for the inconvenience.
                  </p>
                </div>
              ) : (
                <p className="mb-4">
                  An unexpected error occurred. Our team has been notified and is working to fix the issue.
                </p>
              )}
              
              <button 
                onClick={() => window.location.reload()} 
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                Try Again
              </button>
            </div>
            
            <div className="text-sm text-white/50">
              <p>If this issue persists, please contact support.</p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;