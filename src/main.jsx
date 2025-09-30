import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { SubscriptionProvider } from './context/SubscriptionContext.jsx';

// Use lazy loading for the main App component
const App = React.lazy(() => import('./App.jsx'));

// Loading component
const LoadingFallback = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center">
    <div className="text-center">
      <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-white border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
      </div>
      <h2 className="mt-4 text-xl font-semibold text-white">Loading Civil Rights Tool...</h2>
      <p className="mt-2 text-white/70">Please wait while we prepare your resources</p>
    </div>
  </div>
);

// Error fallback for critical errors
const CriticalErrorFallback = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white p-8">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
        Civil Rights Legal Tool
      </h1>
      
      <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4">Critical Error</h2>
        <p className="mb-4">
          We're sorry, but the application failed to initialize. This could be due to:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>A problem with your browser</li>
          <li>Network connectivity issues</li>
          <li>A temporary service outage</li>
        </ul>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => window.location.reload()} 
            className="flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            Reload Application
          </button>
        </div>
      </div>
      
      <div className="text-sm text-white/50">
        <p>If this issue persists, please try using a different browser or contact support.</p>
      </div>
    </div>
  </div>
);

// Initialize the application
try {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  
  root.render(
    <React.StrictMode>
      <ErrorBoundary fallback={CriticalErrorFallback}>
        <ThemeProvider>
          <AuthProvider>
               <SubscriptionProvider>
                 <Suspense fallback={<LoadingFallback />}>
                   <App />
                 </Suspense>
               </SubscriptionProvider>
             </AuthProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </React.StrictMode>
  );
} catch (error) {
  console.error('Failed to initialize application:', error);
  
  // Render a minimal error page if ReactDOM.createRoot fails
  document.body.innerHTML = `
    <div style="min-height: 100vh; background: linear-gradient(to bottom right, #0f172a, #1e40af, #0f172a); color: white; padding: 2rem; display: flex; align-items: center; justify-content: center;">
      <div style="max-width: 32rem; text-align: center;">
        <h1 style="font-size: 1.875rem; font-weight: bold; margin-bottom: 1rem;">Unable to Load Application</h1>
        <p style="margin-bottom: 1.5rem;">We encountered a critical error while loading the application. Please try refreshing the page.</p>
        <button 
          onclick="window.location.reload()" 
          style="background-color: #2563eb; color: white; padding: 0.5rem 1rem; border-radius: 0.375rem; border: none; cursor: pointer;"
        >
          Refresh Page
        </button>
      </div>
    </div>
  `;
}