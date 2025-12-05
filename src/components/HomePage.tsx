import { useState } from 'react';
import { Shield, MessageSquare, Users, MapPin, ArrowRight, Zap, TrendingUp } from 'lucide-react';
import AuthModal from './AuthModal';

export default function HomePage() {
  const [showAuth, setShowAuth] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32">
          {/* Logo */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-3">
              <Shield className="h-16 w-16 text-blue-500" />
              <div>
                <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  CRN
                </h1>
                <p className="text-sm text-gray-400 tracking-widest">CIVIL RIGHTS NETWORK</p>
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
              SPEAK.
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                CONNECT.
              </span>
              <br />
              CHANGE.
            </h2>
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
              The social network built for journalists, activists, and civil rights advocates who refuse to stay silent.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <button
              onClick={() => setShowAuth(true)}
              className="group relative w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-6 rounded-full text-2xl font-bold hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center space-x-3">
                <span>CREATE ACCOUNT</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            
            <button
              onClick={() => setShowAuth(true)}
              className="w-full sm:w-auto border-4 border-blue-500 text-blue-400 px-12 py-6 rounded-full text-2xl font-bold hover:bg-blue-500 hover:text-white transition-all"
            >
              LOGIN
            </button>
          </div>

          {/* Live Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Users, label: 'Active Network', value: 'GROWING' },
              { icon: MessageSquare, label: 'Posts Today', value: 'LIVE' },
              { icon: MapPin, label: 'Violations Tracked', value: 'REAL-TIME' },
              { icon: Zap, label: 'Impact', value: 'NATIONWIDE' }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-blue-500/50 transition-all">
                  <Icon className="h-8 w-8 mx-auto mb-2 text-blue-400" />
                  <div className="text-2xl font-black text-blue-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative bg-gradient-to-b from-black to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-5xl md:text-6xl font-black text-center mb-16">
            YOUR PLATFORM.
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              YOUR VOICE.
            </span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MessageSquare,
                title: 'SOCIAL FEED',
                description: 'Post updates, share stories, connect with activists and journalists worldwide. Your voice matters.',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                icon: MapPin,
                title: 'REPORT VIOLATIONS',
                description: 'Document civil rights violations in real-time. Make the invisible visible. Hold power accountable.',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: Users,
                title: 'BUILD NETWORK',
                description: 'Follow journalists, activists, attorneys. Private messaging. Public discussions. Real solidarity.',
                gradient: 'from-orange-500 to-red-500'
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/30 transition-all">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity`}></div>
                  <Icon className={`h-16 w-16 mb-6 bg-gradient-to-br ${feature.gradient} text-transparent bg-clip-text`} />
                  <h4 className="text-2xl font-black mb-4">{feature.title}</h4>
                  <p className="text-gray-400 text-lg leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-black py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <TrendingUp className="h-20 w-20 mx-auto mb-6 text-blue-400" />
          <h3 className="text-5xl md:text-6xl font-black mb-6">
            READY TO MAKE
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              HISTORY?
            </span>
          </h3>
          <p className="text-2xl text-gray-300 mb-12">
            Join activists, journalists, and civil rights advocates using CRN to expose injustice and drive change.
          </p>
          
          <button
            onClick={() => setShowAuth(true)}
            className="group bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-16 py-8 rounded-full text-3xl font-black hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all"
          >
            <span className="flex items-center space-x-4">
              <span>JOIN THE MOVEMENT</span>
              <ArrowRight className="h-8 w-8 group-hover:translate-x-3 transition-transform" />
            </span>
          </button>

          <p className="mt-8 text-gray-500">
            Free • No credit card • Join in 30 seconds
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8 text-blue-500" />
                <span className="text-xl font-bold">CRN</span>
              </div>
              <p className="text-gray-400 text-sm">
                Built for the movement. Powered by the people.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-blue-400">PLATFORM</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => setShowAuth(true)} className="hover:text-white">Social Feed</button></li>
                <li><button onClick={() => setShowAuth(true)} className="hover:text-white">Report Violations</button></li>
                <li><button onClick={() => setShowAuth(true)} className="hover:text-white">Find Attorneys</button></li>
                <li><button onClick={() => setShowAuth(true)} className="hover:text-white">Legal Resources</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-blue-400">COMMUNITY</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => setShowAuth(true)} className="hover:text-white">Journalists</button></li>
                <li><button onClick={() => setShowAuth(true)} className="hover:text-white">Activists</button></li>
                <li><button onClick={() => setShowAuth(true)} className="hover:text-white">Attorneys</button></li>
                <li><button onClick={() => setShowAuth(true)} className="hover:text-white">Guidelines</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-blue-400">SUPPORT</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2025 Civil Rights Network. Built for justice.</p>
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuth}
        onClose={() => setShowAuth(false)}
        onAuthSuccess={() => {
          setShowAuth(false);
          window.location.href = '/feed';
        }}
      />
    </div>
  );
}
