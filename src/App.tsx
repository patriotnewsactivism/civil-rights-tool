import React, { useState } from 'react';
import LegalToolkitPro from '@/components/LegalToolkitPro';
import CaseExplorer from '@/components/CaseExplorer';
import ToolkitsHub from '@/components/ToolkitsHub';
import ResourcesAndLaws from '@/components/ResourcesAndLaws';
import CitationVerifier from '@/components/CitationVerifier';
import FinancialDisclosureSearch from '@/components/FinancialDisclosureSearch';
import OralArgumentSearch from '@/components/OralArgumentSearch';
import LegalResearchDashboard from '@/components/LegalResearchDashboard';
import MonetizationOptions from '@/components/MonetizationOptions';
import SubscriptionPlans from '@/components/SubscriptionPlans';
import AdvertisingOptions from '@/components/AdvertisingOptions';
import AffiliatePrograms from '@/components/AffiliatePrograms';
import { SubscriptionProvider } from '@/context/SubscriptionContext';
import { MonetizationProvider } from '@/context/MonetizationContext';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('cases');

  return (
    <MonetizationProvider>
      <div className="min-h-screen bg-background text-foreground">
        <header className="bg-primary text-primary-foreground p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Civil Rights Legal Tool</h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <button 
                    onClick={() => setActiveTab('cases')}
                    className={`px-3 py-2 rounded-md ${activeTab === 'cases' ? 'bg-primary-foreground text-primary' : 'hover:bg-primary/90'}`}
                  >
                    Case Explorer
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('toolkits')}
                    className={`px-3 py-2 rounded-md ${activeTab === 'toolkits' ? 'bg-primary-foreground text-primary' : 'hover:bg-primary/90'}`}
                  >
                    Toolkits
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('resources')}
                    className={`px-3 py-2 rounded-md ${activeTab === 'resources' ? 'bg-primary-foreground text-primary' : 'hover:bg-primary/90'}`}
                  >
                    Resources & Laws
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('citation')}
                    className={`px-3 py-2 rounded-md ${activeTab === 'citation' ? 'bg-primary-foreground text-primary' : 'hover:bg-primary/90'}`}
                  >
                    Citation Verifier
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('research')}
                    className={`px-3 py-2 rounded-md ${activeTab === 'research' ? 'bg-primary-foreground text-primary' : 'hover:bg-primary/90'}`}
                  >
                    Legal Research
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('monetization')}
                    className={`px-3 py-2 rounded-md ${activeTab === 'monetization' ? 'bg-primary-foreground text-primary' : 'hover:bg-primary/90'}`}
                  >
                    Monetization
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('pro')}
                    className={`px-3 py-2 rounded-md ${activeTab === 'pro' ? 'bg-primary-foreground text-primary' : 'hover:bg-primary/90'}`}
                  >
                    Legal Toolkit Pro
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        
        <main className="container mx-auto p-4">
          {activeTab === 'cases' && <CaseExplorer />}
          {activeTab === 'toolkits' && <ToolkitsHub />}
          {activeTab === 'resources' && <ResourcesAndLaws />}
          {activeTab === 'citation' && <CitationVerifier />}
          {activeTab === 'financial' && <FinancialDisclosureSearch />}
          {activeTab === 'oral' && <OralArgumentSearch />}
          {activeTab === 'research' && <LegalResearchDashboard />}
          {activeTab === 'monetization' && <MonetizationDashboard />}
          {activeTab === 'pro' && <LegalToolkitPro />}
        </main>
      </div>
    </MonetizationProvider>
  );
};

export default App;