import { ExternalLink, Shield, Bot, Newspaper } from 'lucide-react';

export default function EndorsementsPanel() {
  return (
    <div className="space-y-6">
      {/* Attorney-Shield Endorsement */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-xl p-8 text-white">
        <div className="flex items-start">
          <Shield className="w-16 h-16 mr-6 flex-shrink-0" />
          <div className="flex-grow">
            <h2 className="text-3xl font-bold mb-3">Attorney-Shield</h2>
            <p className="text-blue-100 text-lg mb-4">
              Professional legal protection and representation when you need it most. Attorney-Shield provides 
              comprehensive civil rights defense with 24/7 access to experienced attorneys.
            </p>
            <div className="mb-4">
              <h3 className="font-semibold text-xl mb-2">Why We Endorse Attorney-Shield:</h3>
              <ul className="space-y-2 text-blue-50">
                <li>✓ Specialized in civil rights and constitutional law</li>
                <li>✓ Immediate legal consultation available 24/7</li>
                <li>✓ Proven track record defending citizens' rights</li>
                <li>✓ Affordable monthly membership plans</li>
                <li>✓ No hidden fees or surprise charges</li>
              </ul>
            </div>
            <a
              href="https://attorney-shield.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-800 font-bold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Get Protected Now
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>

      {/* buildmybot.app Endorsement */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg shadow-xl p-8 text-white">
        <div className="flex items-start">
          <Bot className="w-16 h-16 mr-6 flex-shrink-0" />
          <div className="flex-grow">
            <h2 className="text-3xl font-bold mb-3">buildmybot.app</h2>
            <p className="text-purple-100 text-lg mb-4">
              Revolutionize your civil rights advocacy with AI-powered automation. Build custom bots to monitor 
              legislation, track court cases, analyze legal documents, and stay ahead of civil rights issues.
            </p>
            <div className="mb-4">
              <h3 className="font-semibold text-xl mb-2">Why We Endorse buildmybot.app:</h3>
              <ul className="space-y-2 text-purple-50">
                <li>✓ No coding required - intuitive drag-and-drop interface</li>
                <li>✓ Automate legal research and case monitoring</li>
                <li>✓ Real-time alerts for legislative changes</li>
                <li>✓ Integration with legal databases and APIs</li>
                <li>✓ Perfect for activists, journalists, and legal professionals</li>
              </ul>
            </div>
            <a
              href="https://buildmybot.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-purple-800 font-bold rounded-lg hover:bg-purple-50 transition-colors"
            >
              Start Building Free
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>

      {/* We The People News Promotion */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-lg shadow-xl p-8 text-white">
        <div className="flex items-start">
          <Newspaper className="w-16 h-16 mr-6 flex-shrink-0" />
          <div className="flex-grow">
            <h2 className="text-3xl font-bold mb-3">We The People News</h2>
            <p className="text-red-100 text-lg mb-4">
              Independent journalism dedicated to truth, transparency, and defending constitutional rights. 
              Stay informed with unbiased coverage of civil liberties, government accountability, and grassroots movements.
            </p>
            <div className="mb-4">
              <h3 className="font-semibold text-xl mb-2">Featured Coverage:</h3>
              <ul className="space-y-2 text-red-50">
                <li>✓ In-depth investigations on civil rights violations</li>
                <li>✓ Breaking news on constitutional challenges</li>
                <li>✓ Exclusive interviews with activists and legal experts</li>
                <li>✓ Fact-checked reporting without corporate bias</li>
                <li>✓ Community-driven stories that matter</li>
              </ul>
            </div>
            <a
              href="https://www.wtpnews.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-red-800 font-bold rounded-lg hover:bg-red-50 transition-colors"
            >
              Read Latest News
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
