import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// Context Providers
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';

// UI Components
import Navbar from './components/ui/Navbar';
import Card from './components/ui/Card';
import Button from './components/ui/Button';

// Feature Components
import CaseExplorer from './components/CaseExplorer';
import CircuitMap from './components/maps/CircuitMap';
import CircuitAnalysisChart from './components/charts/CircuitAnalysisChart';
import SearchBar from './components/SearchBar';
import AuthForms from './components/auth/AuthForms';
import UserDashboard from './components/dashboard/UserDashboard';
import CaseUpload from './components/CaseUpload';

// Icons
import {
  Scale,
  Search,
  AlertTriangle,
  Gavel,
  Shield,
  BookMarked,
  TrendingDown,
  AlertCircle,
  FileText,
  Users,
  Eye,
  BookOpen
} from "lucide-react";

// Original CivilRightsLegalTool component (imported from App.js)
import LegalToolkit from './components/LegalToolkit';

const App = () => {
  const [activeView, setActiveView] = useState('home');
  const [selectedState, setSelectedState] = useState('');
  const [results, setResults] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Federal Circuit mapping with jurisdictional analysis
  const federalCircuits = {
    'AL': { circuit: '11th Circuit', hostility: 'Moderate', districts: ['Northern District of Alabama', 'Middle District of Alabama', 'Southern District of Alabama'] },
    'AK': { circuit: '9th Circuit', hostility: 'Protective', districts: ['District of Alaska'] },
    'AZ': { circuit: '9th Circuit', hostility: 'Protective', districts: ['District of Arizona'] },
    'AR': { circuit: '8th Circuit', hostility: 'Moderate', districts: ['Eastern District of Arkansas', 'Western District of Arkansas'] },
    'CA': { circuit: '9th Circuit', hostility: 'Protective', districts: ['Northern District of California', 'Central District of California', 'Eastern District of California', 'Southern District of California'] },
    'CO': { circuit: '10th Circuit', hostility: 'Moderate', districts: ['District of Colorado'] },
    'CT': { circuit: '2nd Circuit', hostility: 'Protective', districts: ['District of Connecticut'] },
    'DE': { circuit: '3rd Circuit', hostility: 'Moderate', districts: ['District of Delaware'] },
    'FL': { circuit: '11th Circuit', hostility: 'Moderate', districts: ['Northern District of Florida', 'Middle District of Florida', 'Southern District of Florida'] },
    'GA': { circuit: '11th Circuit', hostility: 'Moderate', districts: ['Northern District of Georgia', 'Middle District of Georgia', 'Southern District of Georgia'] },
    'HI': { circuit: '9th Circuit', hostility: 'Protective', districts: ['District of Hawaii'] },
    'ID': { circuit: '9th Circuit', hostility: 'Protective', districts: ['District of Idaho'] },
    'IL': { circuit: '7th Circuit', hostility: 'Moderate', districts: ['Northern District of Illinois', 'Central District of Illinois', 'Southern District of Illinois'] },
    'IN': { circuit: '7th Circuit', hostility: 'Moderate', districts: ['Northern District of Indiana', 'Southern District of Indiana'] },
    'IA': { circuit: '8th Circuit', hostility: 'Moderate', districts: ['Northern District of Iowa', 'Southern District of Iowa'] },
    'KS': { circuit: '10th Circuit', hostility: 'Moderate', districts: ['District of Kansas'] },
    'KY': { circuit: '6th Circuit', hostility: 'Moderate', districts: ['Eastern District of Kentucky', 'Western District of Kentucky'] },
    'LA': { circuit: '5th Circuit', hostility: 'EXTREMELY HOSTILE', districts: ['Eastern District of Louisiana', 'Middle District of Louisiana', 'Western District of Louisiana'] },
    'ME': { circuit: '1st Circuit', hostility: 'Protective', districts: ['District of Maine'] },
    'MD': { circuit: '4th Circuit', hostility: 'Protective', districts: ['District of Maryland'] },
    'MA': { circuit: '1st Circuit', hostility: 'Protective', districts: ['District of Massachusetts'] },
    'MI': { circuit: '6th Circuit', hostility: 'Moderate', districts: ['Eastern District of Michigan', 'Western District of Michigan'] },
    'MN': { circuit: '8th Circuit', hostility: 'Moderate', districts: ['District of Minnesota'] },
    'MS': { circuit: '5th Circuit', hostility: 'EXTREMELY HOSTILE', districts: ['Northern District of Mississippi', 'Southern District of Mississippi'] },
    'MO': { circuit: '8th Circuit', hostility: 'Moderate', districts: ['Eastern District of Missouri', 'Western District of Missouri'] },
    'MT': { circuit: '9th Circuit', hostility: 'Protective', districts: ['District of Montana'] },
    'NE': { circuit: '8th Circuit', hostility: 'Moderate', districts: ['District of Nebraska'] },
    'NV': { circuit: '9th Circuit', hostility: 'Protective', districts: ['District of Nevada'] },
    'NH': { circuit: '1st Circuit', hostility: 'Protective', districts: ['District of New Hampshire'] },
    'NJ': { circuit: '3rd Circuit', hostility: 'Moderate', districts: ['District of New Jersey'] },
    'NM': { circuit: '10th Circuit', hostility: 'Moderate', districts: ['District of New Mexico'] },
    'NY': { circuit: '2nd Circuit', hostility: 'Protective', districts: ['Northern District of New York', 'Southern District of New York', 'Eastern District of New York', 'Western District of New York'] },
    'NC': { circuit: '4th Circuit', hostility: 'Protective', districts: ['Eastern District of North Carolina', 'Middle District of North Carolina', 'Western District of North Carolina'] },
    'ND': { circuit: '8th Circuit', hostility: 'Moderate', districts: ['District of North Dakota'] },
    'OH': { circuit: '6th Circuit', hostility: 'Moderate', districts: ['Northern District of Ohio', 'Southern District of Ohio'] },
    'OK': { circuit: '10th Circuit', hostility: 'Moderate', districts: ['Northern District of Oklahoma', 'Eastern District of Oklahoma', 'Western District of Oklahoma'] },
    'OR': { circuit: '9th Circuit', hostility: 'Protective', districts: ['District of Oregon'] },
    'PA': { circuit: '3rd Circuit', hostility: 'Moderate', districts: ['Eastern District of Pennsylvania', 'Middle District of Pennsylvania', 'Western District of Pennsylvania'] },
    'RI': { circuit: '1st Circuit', hostility: 'Protective', districts: ['District of Rhode Island'] },
    'SC': { circuit: '4th Circuit', hostility: 'Protective', districts: ['District of South Carolina'] },
    'SD': { circuit: '8th Circuit', hostility: 'Moderate', districts: ['District of South Dakota'] },
    'TN': { circuit: '6th Circuit', hostility: 'Moderate', districts: ['Eastern District of Tennessee', 'Middle District of Tennessee', 'Western District of Tennessee'] },
    'TX': { circuit: '5th Circuit', hostility: 'EXTREMELY HOSTILE', districts: ['Northern District of Texas', 'Southern District of Texas', 'Eastern District of Texas', 'Western District of Texas'] },
    'UT': { circuit: '10th Circuit', hostility: 'Moderate', districts: ['District of Utah'] },
    'VT': { circuit: '2nd Circuit', hostility: 'Protective', districts: ['District of Vermont'] },
    'VA': { circuit: '4th Circuit', hostility: 'Protective', districts: ['Eastern District of Virginia', 'Western District of Virginia'] },
    'WA': { circuit: '9th Circuit', hostility: 'Protective', districts: ['Eastern District of Washington', 'Western District of Washington'] },
    'WV': { circuit: '4th Circuit', hostility: 'Protective', districts: ['Northern District of West Virginia', 'Southern District of West Virginia'] },
    'WI': { circuit: '7th Circuit', hostility: 'Moderate', districts: ['Eastern District of Wisconsin', 'Western District of Wisconsin'] },
    'WY': { circuit: '10th Circuit', hostility: 'Moderate', districts: ['District of Wyoming'] },
    'DC': { circuit: 'D.C. Circuit', hostility: 'Protective', districts: ['District of Columbia'] }
  };

  // Handle state selection
  const handleStateSelect = (stateCode) => {
    setSelectedState(stateCode);
    
    if (federalCircuits[stateCode]) {
      setResults({
        state: stateCode,
        circuitInfo: federalCircuits[stateCode]
      });
    } else {
      setResults(null);
    }
  };
  
  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home', icon: <Shield className="h-6 w-6" /> },
    { id: 'cases', label: 'Case Explorer', icon: <Gavel className="h-6 w-6" /> },
    { id: 'resources', label: 'Legal Resources', icon: <BookOpen className="h-6 w-6" /> },
    { id: 'upload', label: 'Upload Case', icon: <FileText className="h-6 w-6" /> },
    { id: 'dashboard', label: 'Dashboard', icon: <Users className="h-6 w-6" />, requiresAuth: true },
    { id: 'auth', label: 'Sign In', icon: <User className="h-6 w-6" />, hideWhenAuth: true }
  ];
  
  // Check if user is authenticated
  const checkAuth = () => {
    // This would normally check with the auth context
    // For now, we'll use a simple state toggle for demonstration
    return isAuthenticated;
  };
  
  // Toggle authentication (for demo purposes)
  const toggleAuth = () => {
    setIsAuthenticated(!isAuthenticated);
  };
  
  return (
    <ThemeProvider>
      <AuthProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Navbar />
          
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {navItems.map((item) => {
                // Skip items that require auth if not authenticated
                if (item.requiresAuth && !checkAuth()) return null;
                // Skip items that should be hidden when authenticated
                if (item.hideWhenAuth && checkAuth()) return null;
                
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => setActiveView(item.id)}
                    className={`flex items-center px-4 py-2 rounded-md ${
                      activeView === item.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                    } shadow-sm transition-colors`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.label}
                  </motion.button>
                );
              })}
              
              {/* Demo auth toggle button */}
              <motion.button
                onClick={toggleAuth}
                className="flex items-center px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 shadow-sm transition-colors ml-auto"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {isAuthenticated ? 'Demo: Sign Out' : 'Demo: Sign In'}
              </motion.button>
            </div>
            
            {/* Main Content Area */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeView}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Home View */}
                {activeView === 'home' && (
                  <div className="space-y-8">
                    <div className="text-center mb-12">
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Scale className="h-16 w-16 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                      </motion.div>
                      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Civil Rights Legal Tool
                      </h1>
                      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Navigate the complex landscape of civil rights law with our interactive tools and resources.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <CircuitMap 
                        federalCircuits={federalCircuits} 
                        onStateSelect={handleStateSelect} 
                      />
                      
                      <div className="space-y-6">
                        <CircuitAnalysisChart federalCircuits={federalCircuits} />
                        
                        {results && (
                          <Card title={`${results.state} Circuit Information`} className="bg-white dark:bg-gray-800">
                            <div className="space-y-4">
                              <div>
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                  {federalCircuits[results.state].circuit}
                                </h3>
                                <div className="mt-1 flex items-center">
                                  <span className="text-sm text-gray-600 dark:text-gray-300 mr-2">Hostility Level:</span>
                                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                    results.circuitInfo.hostility === 'EXTREMELY HOSTILE'
                                      ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                                      : results.circuitInfo.hostility === 'Hostile'
                                      ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
                                      : results.circuitInfo.hostility === 'Moderate'
                                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                                      : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                  }`}>
                                    {results.circuitInfo.hostility}
                                  </span>
                                </div>
                              </div>
                              
                              <div>
                                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Federal Districts:</h4>
                                <ul className="mt-1 space-y-1">
                                  {results.circuitInfo.districts.map((district, index) => (
                                    <li key={index} className="text-sm text-gray-600 dark:text-gray-400">
                                      • {district}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                                <Button variant="primary" size="sm">
                                  View Cases in this Circuit
                                </Button>
                              </div>
                            </div>
                          </Card>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                      <Card title="Search Cases" className="bg-white dark:bg-gray-800">
                        <div className="flex flex-col items-center text-center">
                          <Search className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                            Find Relevant Cases
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            Search our database of civil rights cases by keyword, jurisdiction, or topic.
                          </p>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => setActiveView('cases')}
                          >
                            Explore Cases
                          </Button>
                        </div>
                      </Card>
                      
                      <Card title="Legal Resources" className="bg-white dark:bg-gray-800">
                        <div className="flex flex-col items-center text-center">
                          <BookMarked className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                            Access Resources
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            Find templates, guides, and legal information for civil rights advocacy.
                          </p>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => setActiveView('resources')}
                          >
                            View Resources
                          </Button>
                        </div>
                      </Card>
                      
                      <Card title="Contribute" className="bg-white dark:bg-gray-800">
                        <div className="flex flex-col items-center text-center">
                          <FileText className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                            Upload Cases
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            Contribute to our database by adding new civil rights cases and decisions.
                          </p>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => setActiveView('upload')}
                          >
                            Upload Case
                          </Button>
                        </div>
                      </Card>
                    </div>
                  </div>
                )}
                
                {/* Case Explorer View */}
                {activeView === 'cases' && (
                  <div>
                    <CaseExplorer />
                  </div>
                )}
                
                {/* Legal Resources View */}
                {activeView === 'resources' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Legal Resources</h2>
                    <LegalToolkit />
                  </div>
                )}
                
                {/* Upload Case View */}
                {activeView === 'upload' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Upload Case</h2>
                    <CaseUpload />
                  </div>
                )}
                
                {/* Dashboard View */}
                {activeView === 'dashboard' && checkAuth() && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Your Dashboard</h2>
                    <UserDashboard />
                  </div>
                )}
                
                {/* Auth View */}
                {activeView === 'auth' && !checkAuth() && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Sign In or Create Account</h2>
                    <AuthForms />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </main>
          
          <footer className="bg-white dark:bg-gray-800 shadow-inner mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center mb-4 md:mb-0">
                  <Scale className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Civil Rights Legal Tool</span>
                </div>
                <div className="flex space-x-6">
                  <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                    About
                  </a>
                  <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                    Privacy
                  </a>
                  <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                    Terms
                  </a>
                  <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                    Contact
                  </a>
                </div>
              </div>
              <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} Civil Rights Legal Tool. All rights reserved.
              </div>
            </div>
          </footer>
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;