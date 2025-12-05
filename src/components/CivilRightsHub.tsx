import { useState } from 'react';
import { AlertCircle, Users, MapPin, Scale, Leaf, Megaphone, Radio, Shield, Star, ExternalLink } from 'lucide-react';
import ReportViolationForm from './ReportViolationForm';
import ViolationsMap from './ViolationsMap';
import AttorneyDirectory from './AttorneyDirectory';
import MarijuanaResources from './MarijuanaResources';
import EndorsementsPanel from './EndorsementsPanel';
import PoliceScannerDirectory from './PoliceScannerDirectory';
import AdminModerationPanel from './AdminModerationPanel';
// @ts-ignore
import NewsAggregatorAPI from '../services/NewsAggregatorAPI';
// @ts-ignore
import LegislativeTrackerAPI from '../services/LegislativeTrackerAPI';
// @ts-ignore
import WTPNewsAPI from '../services/WTPNewsAPI';
import SponsoredSection from './SponsoredSection';

type ActiveTab = 'map' | 'report' | 'attorneys' | 'marijuana' | 'scanners' | 'admin' | 'news' | 'legislation';

export default function CivilRightsHub() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('map');
  const [news, setNews] = useState<any[]>([]);
  const [legislation, setLegislation] = useState<any[]>([]);
  const [newsLoading, setNewsLoading] = useState(false);
  const [legislationLoading, setLegislationLoading] = useState(false);

  const fetchNews = async () => {
    if (news.length > 0) return;
    setNewsLoading(true);
    try {
      // Load WTP News articles first
      const wtpArticles = WTPNewsAPI.getAllArticles();
      const apiArticles = await NewsAggregatorAPI.getLatestCivilRightsNews(10);
      // Combine WTP News with API news (WTP first for prominence)
      const combinedNews = [...wtpArticles, ...apiArticles];
      setNews(combinedNews);
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setNewsLoading(false);
    }
  };

  const fetchLegislation = async () => {
    if (legislation.length > 0) return;
    setLegislationLoading(true);
    try {
      const bills = await LegislativeTrackerAPI.getBillsByState('ALL', '2025');
      setLegislation(bills);
    } catch (error) {
      console.error('Error fetching legislation:', error);
    } finally {
      setLegislationLoading(false);
    }
  };

  const handleTabChange = (tab: ActiveTab) => {
    setActiveTab(tab);
    if (tab === 'news') fetchNews();
    if (tab === 'legislation') fetchLegislation();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Civil Rights Legal Toolkit</h1>
          <p className="text-xl text-blue-100 mb-6">
            Real-time violation reporting, attorney recommendations, legal resources, and advocacy tools
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              Real-Time Map
            </div>
            <div className="flex items-center">
              <AlertCircle className="w-5 h-5 mr-2" />
              Report Violations
            </div>
            <div className="flex items-center">
              <Scale className="w-5 h-5 mr-2" />
              Find Attorneys
            </div>
            <div className="flex items-center">
              <Leaf className="w-5 h-5 mr-2" />
              Marijuana Laws
            </div>
          </div>
        </div>
      </div>

      {/* Endorsements Banner */}
      <div className="bg-white border-b border-gray-200 py-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
            <span className="font-semibold">Proud Partners:</span>
            <a href="https://attorney-shield.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 font-medium">
              Attorney-Shield
            </a>
            <a href="https://buildmybot.app" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 font-medium">
              buildmybot.app
            </a>
            <a href="https://www.wtpnews.org" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 font-medium flex items-center">
              <Megaphone className="w-4 h-4 mr-1" />
              We The People News
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 py-4">
            <button
              onClick={() => setActiveTab('map')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === 'map'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <MapPin className="w-5 h-5 inline-block mr-2" />
              Violations Map
            </button>
            <button
              onClick={() => setActiveTab('report')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === 'report'
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <AlertCircle className="w-5 h-5 inline-block mr-2" />
              Report Violation
            </button>
            <button
              onClick={() => setActiveTab('attorneys')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === 'attorneys'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <Scale className="w-5 h-5 inline-block mr-2" />
              Find Attorneys
            </button>
            <button
              onClick={() => setActiveTab('marijuana')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === 'marijuana'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <Leaf className="w-5 h-5 inline-block mr-2" />
              Marijuana Laws
            </button>
            <button
              onClick={() => setActiveTab('scanners')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === 'scanners'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <Radio className="w-5 h-5 inline-block mr-2" />
              Police Scanners
            </button>
            <button
              onClick={() => setActiveTab('admin')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === 'admin'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <Shield className="w-5 h-5 inline-block mr-2" />
              Admin Panel
            </button>
            <button
              onClick={() => handleTabChange('news')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === 'news'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Latest News
            </button>
            <button
              onClick={() => handleTabChange('legislation')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === 'legislation'
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              New Legislation
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'map' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Live Civil Rights Violations Map</h2>
            <p className="text-gray-600 mb-6">
              Real-time map showing civil rights violations reported by users across the country. 
              All reports appear instantly on the map for transparency and awareness.
            </p>
            <ViolationsMap />
          </div>
        )}

        {activeTab === 'report' && (
          <div>
            <ReportViolationForm />
          </div>
        )}

        {activeTab === 'attorneys' && (
          <div>
            <AttorneyDirectory />
          </div>
        )}

        {activeTab === 'marijuana' && (
          <div>
            <MarijuanaResources />
          </div>
        )}

        {activeTab === 'scanners' && (
          <div>
            <PoliceScannerDirectory />
          </div>
        )}

        {activeTab === 'admin' && (
          <div>
            <AdminModerationPanel />
          </div>
        )}

        {activeTab === 'news' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Latest Civil Rights News</h2>
            
            {/* Sponsored Section */}
            <div className="mb-8">
              <SponsoredSection placement="inline" />
            </div>

            {newsLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading news...</p>
              </div>
            ) : news.length === 0 ? (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <p className="text-gray-600">No news articles available. NewsAPI configuration required.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {news.map((article, index) => {
                  const isWTPNews = article.source === 'We The People News' || article.sponsored;
                  return (
                    <div 
                      key={index} 
                      className={`rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow ${
                        isWTPNews ? 'bg-gradient-to-r from-red-50 via-blue-50 to-white border-2 border-red-200' : 'bg-white'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          {isWTPNews && (
                            <div className="mb-2">
                              <span className="inline-flex items-center bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                <Star className="h-3 w-3 mr-1 fill-current" />
                                WE THE PEOPLE NEWS
                              </span>
                              {article.category && (
                                <span className="ml-2 text-xs bg-blue-600 text-white px-2 py-1 rounded">
                                  {article.category}
                                </span>
                              )}
                            </div>
                          )}
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-3">{article.description}</p>
                      <div className="flex items-center justify-between">
                        <span className={`text-sm ${isWTPNews ? 'text-red-600 font-semibold' : 'text-gray-500'}`}>
                          {article.source?.name || article.source || 'Unknown Source'}
                        </span>
                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`px-4 py-2 rounded-lg transition-colors flex items-center space-x-2 ${
                            isWTPNews 
                              ? 'bg-red-600 hover:bg-red-700 text-white' 
                              : 'bg-blue-600 hover:bg-blue-700 text-white'
                          }`}
                        >
                          <span>Read More</span>
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {activeTab === 'legislation' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">New Civil Rights Legislation</h2>
            {legislationLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading legislation...</p>
              </div>
            ) : legislation.length === 0 ? (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <p className="text-gray-600">No legislation found. LegiScan API configuration required.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {legislation.map((bill, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{bill.title}</h3>
                    <p className="text-gray-600 mb-3">{bill.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Bill #{bill.bill_number || 'N/A'}</span>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        bill.status === 1 ? 'bg-blue-100 text-blue-800' :
                        bill.status === 2 ? 'bg-green-100 text-green-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {bill.status_desc || 'Unknown Status'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Endorsements Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Recommended Partners & Resources</h2>
        <EndorsementsPanel />
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="mb-4">
            Empowering citizens with the tools and resources to defend their civil rights
          </p>
          <div className="flex items-center justify-center gap-6 mb-4">
            <a href="https://attorney-shield.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              Attorney-Shield
            </a>
            <a href="https://buildmybot.app" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
              buildmybot.app
            </a>
            <a href="https://www.wtpnews.org" target="_blank" rel="noopener noreferrer" className="hover:text-red-400">
              We The People News
            </a>
          </div>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Civil Rights Legal Toolkit. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
