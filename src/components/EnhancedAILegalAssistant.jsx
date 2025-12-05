import React, { useState, useEffect } from 'react';
import { MessageCircle, Send, Bot, User, Sparkles, Brain, Zap, ExternalLink, BookOpen, Scale, MapPin, Calendar, Phone } from 'lucide-react';

const EnhancedAILegalAssistant = ({ darkMode }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions, setSuggestions] = useState([
    "What are my rights during a police stop?",
    "How do I file a civil rights complaint?",
    "What are the current marijuana laws in my state?",
    "Can you help me understand voting rights?",
    "What should I do if I experience discrimination?",
    "Where can I find official civil rights resources?",
    "How do I contact my state civil rights office?"
  ]);

  const [showSources, setShowSources] = useState(true);
  const [externalLinks, setExternalLinks] = useState([]);

  useEffect(() => {
    // Welcome message
    setMessages([
      {
        id: 1,
        type: 'bot',
        content: "Hello! I'm your AI Legal Assistant. I can help you understand civil rights laws and connect you with official resources. All responses include links to authoritative sources. How can I assist you today?",
        timestamp: new Date(),
        sources: [
          { title: "EEOC Official Website", url: "https://www.eeoc.gov/" },
          { title: "DOJ Civil Rights Division", url: "https://www.justice.gov/crt" },
          { title: "ACLU Know Your Rights", url: "https://www.aclu.org/know-your-rights" }
        ]
      }
    ]);
  }, []);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response with enhanced sources
    setTimeout(() => {
      const aiResponse = generateEnhancedAIResponse(inputMessage);
      const botMessage = {
        id: messages.length + 2,
        type: 'bot',
        content: aiResponse.content,
        timestamp: new Date(),
        confidence: Math.random() * 0.3 + 0.7,
        sources: aiResponse.sources
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateEnhancedAIResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Police interaction
    if (lowerMessage.includes('police') || lowerMessage.includes('stop') || lowerMessage.includes('arrest')) {
      return {
        content: `Based on your question about police interactions, here are your key rights with official sources:

**Your Rights During Police Encounters:**
1. **Right to Remain Silent** - Simply say "I invoke my right to remain silent"
2. **Right to Refuse Search** - You can refuse consent unless police have a warrant
3. **Right to Legal Representation** - Request an attorney immediately
4. **Right to Record** - You can record police in public spaces

**Official Resources:**
- Contact the ACLU: 1-877-634-5454
- National Lawyers Guild: 1-212-679-5100
- Find local legal aid at: https://www.lsc.gov/what-legal-aid/find-legal-aid

**Important:** This is general information. For specific situations, consult with a qualified attorney.`,
        sources: [
          { title: "ACLU - Know Your Rights", url: "https://www.aclu.org/know-your-rights" },
          { title: "EEOC - Police Encounters", url: "https://www.eeoc.gov/laws/guidance/police-encounters" },
          { title: "National Lawyers Guild", url: "https://www.nlg.org/" }
        ]
      };
    }

    // Marijuana laws
    if (lowerMessage.includes('marijuana') || lowerMessage.includes('cannabis') || lowerMessage.includes('weed')) {
      return {
        content: `I'd be happy to help you understand marijuana laws. Here's what you need to know:

**Federal vs State Law:**
- Federal: Still Schedule I substance
- State: Varies significantly by location

**To get specific information:**
1. Visit your state legislature website
2. Check official government resources
3. Contact state regulatory agencies

**Official Resources:**
- State-by-state laws: https://norml.org/laws
- Medical marijuana programs: Check your state health department
- Legal dispensaries: State regulatory agency websites

Would you like me to help you find your specific state's official resources?`,
        sources: [
          { title: "NORML State Laws", url: "https://norml.org/laws" },
          { title: "Marijuana Policy Project", url: "https://www.mpp.org/states/" },
          { title: "State Health Departments", url: "https://www.cdc.gov/publichealthgateway/healthdirectories/healthdepartments.html" }
        ]
      };
    }

    // Discrimination
    if (lowerMessage.includes('discrimination') || lowerMessage.includes('discriminated')) {
      return {
        content: `I'm sorry you're experiencing discrimination. Here's what you should know:

**Types of Illegal Discrimination:**
- Race, color, national origin
- Religion, sex, gender identity
- Sexual orientation, disability, age (40+)
- Pregnancy, genetic information

**Immediate Steps:**
1. Document everything with dates and witnesses
2. File complaints with appropriate agencies
3. Contact legal aid organizations

**Official Filing Agencies:**
- Employment: EEOC (1-800-669-4000)
- Housing: HUD (1-800-669-9777)
- Education: OCR (1-800-421-3481)
- Public accommodations: DOJ Civil Rights Division

**Free Legal Help:**
- Find local legal aid: https://www.lsc.gov/what-legal-aid/find-legal-aid
- Contact local bar association lawyer referral services`,
        sources: [
          { title: "EEOC - File a Charge", url: "https://www.eeoc.gov/filing-charge-discrimination" },
          { title: "HUD - Housing Discrimination", url: "https://www.hud.gov/program_offices/fair_housing_equal_opp" },
          { title: "DOJ Civil Rights Division", url: "https://www.justice.gov/crt" }
        ]
      };
    }

    // Voting rights
    if (lowerMessage.includes('voting') || lowerMessage.includes('vote')) {
      return {
        content: `Voting rights are fundamental to democracy. Here's your complete guide:

**Your Voting Rights Include:**
- Right to vote without discrimination
- Right to assistance if you have a disability
- Right to vote if you're in line when polls close
- Right to a provisional ballot

**Get Help Immediately:**
- National Election Protection Hotline: 1-866-OUR-VOTE
- Spanish: 1-888-VE-Y-VOTA
- Asian Languages: 1-888-API-VOTE
- Arabic: 1-844-YALLA-US

**Official Resources:**
- Register to vote: https://www.usa.gov/register-to-vote
- Find your polling place: https://www.vote.org/polling-place-locator/
- State election offices: https://www.eac.gov/voters/state-election-offices`,
        sources: [
          { title: "Election Protection Hotline", url: "https://866ourvote.org/" },
          { title: "USA.gov Voting", url: "https://www.usa.gov/voting" },
          { title: "State Election Offices", url: "https://www.eac.gov/voters/state-election-offices" }
        ]
      };
    }

    // State-specific resources
    if (lowerMessage.includes('state') || lowerMessage.includes('my state')) {
      return {
        content: `To find official civil rights resources for your state:

**Official State Resources:**
1. **State Attorney General Office** - Civil rights enforcement
2. **State Civil Rights Commission** - Complaint filing
3. **State Legislature** - Current bills and laws
4. **State Courts** - Self-help resources

**How to Find Your State Resources:**
- Search: "[Your State] civil rights office"
- Visit: [Your State].gov civil rights section
- Call: State government main number for referrals

**National Directories:**
- Find state offices: https://www.usa.gov/state-government
- Legal aid directory: https://www.lsc.gov/what-legal-aid/find-legal-aid

Would you like me to help you find specific contact information for your state?`,
        sources: [
          { title: "USA.gov State Government", url: "https://www.usa.gov/state-government" },
          { title: "Legal Services Corporation", url: "https://www.lsc.gov/what-legal-aid/find-legal-aid" },
          { title: "State Bar Directory", url: "https://www.americanbar.org/groups/legal_services/flh-home/flh-directory/" }
        ]
      };
    }

    // Default response with comprehensive resources
    return {
      content: `I'd be happy to help you with civil rights information! Here are the most authoritative sources:

**Official Government Resources:**
- **EEOC** (Employment): 1-800-669-4000
- **HUD** (Housing): 1-800-669-9777
- **DOJ Civil Rights**: https://www.justice.gov/crt
- **State Civil Rights Offices**: Check your state government website

**Free Legal Help:**
- **Legal Aid**: https://www.lsc.gov/what-legal-aid/find-legal-aid
- **State Bar Referrals**: Find through your state bar association
- **Law School Clinics**: Contact local law schools

**Documentation & Filing:**
- Always document incidents with dates, times, witnesses
- File complaints within deadlines (usually 180-300 days)
- Keep copies of all communications

**Emergency Contacts:**
- **National Civil Rights Hotline**: 1-866-OUR-VOTE
- **ACLU**: 1-877-634-5454
- **National Lawyers Guild**: 1-212-679-5100

What specific civil rights issue would you like help with?`,
      sources: [
        { title: "EEOC Official Website", url: "https://www.eeoc.gov/" },
        { title: "HUD Fair Housing", url: "https://www.hud.gov/program_offices/fair_housing_equal_opp" },
        { title: "DOJ Civil Rights Division", url: "https://www.justice.gov/crt" },
        { title: "Legal Aid Directory", url: "https://www.lsc.gov/what-legal-aid/find-legal-aid" }
      ]
    };
  };

  const handleSuggestionClick = (suggestion) => {
    setInputMessage(suggestion);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const openExternalResource = (url, title) => {
    if (url && url !== '#' && !url.includes('example.com')) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      alert(`This would open: ${title}\n\nURL: ${url}\n\nIn production, this links to the official government or organization website.`);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
      {/* Header */}
      <div className="border-b border-white/10 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Bot className="h-6 w-6 text-blue-400 mr-3" />
            <div>
              <h3 className="text-lg font-bold text-white">AI Legal Assistant</h3>
              <p className="text-white/60 text-sm">With official resource links</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Sparkles className="h-4 w-4 text-yellow-400" />
            <span className="text-xs text-white/60">AI</span>
            
            <button
              onClick={() => setShowSources(!showSources)}
              className={`px-2 py-1 rounded text-xs ${
                showSources ? 'bg-green-500 text-white' : 'bg-white/10 text-white/70'
              }`}
            >
              {showSources ? 'Sources On' : 'Sources Off'}
            </button>
          </div>
        </div>
      </div>

      {/* Quick Links Bar */}
      {showSources && (
        <div className="border-b border-white/10 p-3 bg-white/5">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => openExternalResource('https://www.eeoc.gov/', 'EEOC')}
              className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded flex items-center"
            >
              <Scale className="h-3 w-3 mr-1" />
              EEOC
            </button>
            <button
              onClick={() => openExternalResource('https://www.justice.gov/crt', 'DOJ Civil Rights')}
              className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded flex items-center"
            >
              <Gavel className="h-3 w-3 mr-1" />
              DOJ Civil Rights
            </button>
            <button
              onClick={() => openExternalResource('https://www.aclu.org/', 'ACLU')}
              className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded flex items-center"
            >
              <BookOpen className="h-3 w-3 mr-1" />
              ACLU
            </button>
            <button
              onClick={() => openExternalResource('https://www.lsc.gov/what-legal-aid/find-legal-aid', 'Legal Aid')}
              className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded flex items-center"
            >
              <Phone className="h-3 w-3 mr-1" />
              Legal Aid
            </button>
          </div>
        </div>
      )}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex items-start space-x-2 max-w-3xl ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                message.type === 'user' ? 'bg-blue-500' : 'bg-gray-600'
              }`}>
                {message.type === 'user' ? (
                  <User className="h-4 w-4 text-white" />
                ) : (
                  <Bot className="h-4 w-4 text-white" />
                )}
              </div>
              
              <div className={`rounded-lg p-3 ${
                message.type === 'user' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-white/10 text-white border border-white/10'
              }`}>
                <p className="text-sm leading-relaxed">{message.content}</p>
                
                {message.type === 'bot' && message.sources && showSources && (
                  <div className="mt-3 pt-3 border-t border-white/10">
                    <h4 className="text-xs font-semibold text-white mb-2 flex items-center">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Official Resources:
                    </h4>
                    <div className="space-y-1">
                      {message.sources.map((source, index) => (
                        <button
                          key={index}
                          onClick={() => openExternalResource(source.url, source.title)}
                          className="text-xs bg-white/10 hover:bg-white/20 text-blue-300 px-2 py-1 rounded flex items-center w-full text-left"
                        >
                          <ExternalLink className="h-3 w-3 mr-1 flex-shrink-0" />
                          <span className="truncate">{source.title}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                
                {message.type === 'bot' && (
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-xs text-white/50">
                      {new Date(message.timestamp).toLocaleTimeString()}
                    </p>
                    {message.confidence && (
                      <div className="flex items-center text-xs text-white/60">
                        <Brain className="h-3 w-3 mr-1" />
                        {Math.round(message.confidence * 100)}% confidence
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="flex items-center space-x-2">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-gray-600">
                <Bot className="h-4 w-4 text-white" />
              </div>
              <div className="bg-white/10 text-white border border-white/10 rounded-lg p-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Suggestions */}
      <div className="border-t border-white/10 p-4">
        <p className="text-white/60 text-sm mb-2">Quick questions (click to explore official resources):</p>
        <div className="flex flex-wrap gap-2">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded flex items-center transition-colors"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-white/10 p-4">
        <div className="flex items-end space-x-2">
          <textarea
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything about civil rights law..."
            className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/50 resize-none focus:outline-none focus:border-blue-400"
            rows="2"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isTyping}
            className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-500 text-white p-2 rounded-lg transition-colors"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
        
        <div className="flex items-center justify-between mt-2">
          <p className="text-xs text-white/50">
            <Zap className="h-3 w-3 inline mr-1" />
            AI provides general information, links to official sources
          </p>
          
          <button
            onClick={() => window.open('https://www.usa.gov/civil-rights', '_blank')}
            className="text-xs text-blue-400 hover:text-blue-300 flex items-center"
          >
            <ExternalLink className="h-3 w-3 mr-1" />
            Official Resources
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnhancedAILegalAssistant;