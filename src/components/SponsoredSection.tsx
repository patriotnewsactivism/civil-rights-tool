import React from 'react';
import { ExternalLink, Megaphone, Bot } from 'lucide-react';

interface SponsoredSectionProps {
  placement?: 'sidebar' | 'banner' | 'inline';
}

const SponsoredSection: React.FC<SponsoredSectionProps> = ({ placement = 'sidebar' }) => {
  if (placement === 'banner') {
    return (
      <div className="w-full bg-gradient-to-r from-red-600 via-blue-600 to-red-600 p-1 rounded-lg mb-6">
        <div className="bg-gray-900 rounded-md p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-4">
              <Megaphone className="h-8 w-8 text-red-500" />
              <div>
                <h3 className="text-xl font-bold text-white">Support Independent Civil Rights Journalism</h3>
                <p className="text-gray-300 text-sm">We The People News - Exposing Government Corruption & Defending the First Amendment</p>
              </div>
            </div>
            <a
              href="https://www.wtpnews.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-colors"
            >
              <span>Visit WTPNews.org</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  if (placement === 'inline') {
    return (
      <div className="grid md:grid-cols-2 gap-4 my-6">
        {/* WTP News Promotion */}
        <div className="bg-gradient-to-br from-red-600 to-blue-600 p-1 rounded-lg">
          <div className="bg-gray-900 rounded-md p-6 h-full">
            <div className="flex items-start space-x-4">
              <Megaphone className="h-10 w-10 text-red-500 flex-shrink-0" />
              <div className="flex-1">
                <div className="text-xs font-semibold text-yellow-400 mb-1">SPONSORED</div>
                <h4 className="text-lg font-bold text-white mb-2">We The People News</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Fearless investigative journalism exposing government corruption, judicial misconduct, and civil rights violations. Real stories the mainstream media won't cover.
                </p>
                <a
                  href="https://www.wtpnews.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-red-400 hover:text-red-300 font-semibold transition-colors"
                >
                  <span>Read Independent News</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BuildMyBot Promotion */}
        <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-1 rounded-lg">
          <div className="bg-gray-900 rounded-md p-6 h-full">
            <div className="flex items-start space-x-4">
              <Bot className="h-10 w-10 text-purple-400 flex-shrink-0" />
              <div className="flex-1">
                <div className="text-xs font-semibold text-yellow-400 mb-1">SPONSORED</div>
                <h4 className="text-lg font-bold text-white mb-2">BuildMyBot</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Create powerful AI assistants and automation tools for your legal practice, activism work, or personal use. No coding required.
                </p>
                <a
                  href="https://www.buildmybot.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 font-semibold transition-colors"
                >
                  <span>Build Your Bot</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Sidebar placement
  return (
    <div className="space-y-4">
      {/* WTP News Sidebar */}
      <div className="bg-gradient-to-br from-red-600 to-blue-600 p-1 rounded-lg">
        <div className="bg-gray-900 rounded-md p-4">
          <div className="text-xs font-semibold text-yellow-400 mb-2">SPONSORED</div>
          <Megaphone className="h-8 w-8 text-red-500 mb-3" />
          <h4 className="text-md font-bold text-white mb-2">We The People News</h4>
          <p className="text-gray-300 text-xs mb-3">
            Fearless civil rights journalism. Real stories, real impact.
          </p>
          <a
            href="https://www.wtpnews.org"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-red-600 hover:bg-red-700 text-white text-center py-2 rounded font-semibold text-sm transition-colors"
          >
            Visit WTPNews.org
          </a>
        </div>
      </div>

      {/* BuildMyBot Sidebar */}
      <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-1 rounded-lg">
        <div className="bg-gray-900 rounded-md p-4">
          <div className="text-xs font-semibold text-yellow-400 mb-2">SPONSORED</div>
          <Bot className="h-8 w-8 text-purple-400 mb-3" />
          <h4 className="text-md font-bold text-white mb-2">BuildMyBot</h4>
          <p className="text-gray-300 text-xs mb-3">
            AI automation for legal professionals and activists.
          </p>
          <a
            href="https://www.buildmybot.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-purple-600 hover:bg-purple-700 text-white text-center py-2 rounded font-semibold text-sm transition-colors"
          >
            Build Your Bot
          </a>
        </div>
      </div>
    </div>
  );
};

export default SponsoredSection;
