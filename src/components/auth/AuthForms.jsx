import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext.jsx';
import { Mail, Lock, User, AlertCircle, CheckCircle } from 'lucide-react';
import Button from '../ui/Button';

export const LoginForm = ({ onSuccess }) => {
  const { signIn, loading, error } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);

    if (!email || !password) {
      setFormError('Please fill in all fields');
      return;
    }

    try {
      await signIn(email, password);
      if (onSuccess) onSuccess();
    } catch (error) {
      setFormError(error.message);
    }
  };

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6">Sign In</h2>
      
      <form onSubmit={handleSubmit}>
        {(formError || error) && (
          <div className="mb-4 p-3 bg-red-900/30 border border-red-700 rounded-md flex items-start">
            <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-300">{formError || error}</p>
          </div>
        )}
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="email">
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="••••••••"
            />
          </div>
        </div>
        
        <Button
          type="submit"
          variant="primary"
          fullWidth
          disabled={loading}
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </Button>
      </form>
      
      <div className="mt-4 text-center">
        <a href="#forgot-password" className="text-sm text-blue-400 hover:text-blue-300">
          Forgot your password?
        </a>
      </div>
    </div>
  );
};

export const SignupForm = ({ onSuccess }) => {
  const { signUp, loading, error } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [formError, setFormError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);
    setSuccessMessage(null);

    if (!email || !password || !confirmPassword) {
      setFormError('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setFormError('Passwords do not match');
      return;
    }

    if (password.length < 8) {
      setFormError('Password must be at least 8 characters long');
      return;
    }

    try {
      await signUp(email, password);
      setSuccessMessage('Registration successful! Please check your email to confirm your account.');
      if (onSuccess) onSuccess();
    } catch (error) {
      setFormError(error.message);
    }
  };

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6">Create Account</h2>
      
      <form onSubmit={handleSubmit}>
        {(formError || error) && (
          <div className="mb-4 p-3 bg-red-900/30 border border-red-700 rounded-md flex items-start">
            <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-300">{formError || error}</p>
          </div>
        )}
        
        {successMessage && (
          <div className="mb-4 p-3 bg-green-900/30 border border-green-700 rounded-md flex items-start">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-green-300">{successMessage}</p>
          </div>
        )}
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="signup-email">
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              id="signup-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="signup-password">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              id="signup-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="••••••••"
            />
          </div>
          <p className="mt-1 text-xs text-gray-400">Password must be at least 8 characters long</p>
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="confirm-password">
            Confirm Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="••••••••"
            />
          </div>
        </div>
        
        <Button
          type="submit"
          variant="primary"
          fullWidth
          disabled={loading || successMessage}
        >
          {loading ? 'Creating account...' : 'Create Account'}
        </Button>
      </form>
      
      <div className="mt-4 text-center text-sm text-gray-400">
        By signing up, you agree to our <a href="#terms" className="text-blue-400 hover:text-blue-300">Terms of Service</a> and <a href="#privacy" className="text-blue-400 hover:text-blue-300">Privacy Policy</a>.
      </div>
    </div>
  );
};

export const AuthTabs = ({ defaultTab = 'login', onLoginSuccess, onSignupSuccess }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div>
      <div className="flex border-b border-slate-700 mb-6">
        <button
          className={`flex-1 py-3 text-center font-medium ${
            activeTab === 'login'
              ? 'text-blue-400 border-b-2 border-blue-400'
              : 'text-gray-400 hover:text-gray-300'
          }`}
          onClick={() => setActiveTab('login')}
        >
          Sign In
        </button>
        <button
          className={`flex-1 py-3 text-center font-medium ${
            activeTab === 'signup'
              ? 'text-blue-400 border-b-2 border-blue-400'
              : 'text-gray-400 hover:text-gray-300'
          }`}
          onClick={() => setActiveTab('signup')}
        >
          Create Account
        </button>
      </div>

      {activeTab === 'login' ? (
        <LoginForm onSuccess={onLoginSuccess} />
      ) : (
        <SignupForm onSuccess={onSignupSuccess} />
      )}
    </div>
  );
};