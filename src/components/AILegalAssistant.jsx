import React, { useState, useEffect } from 'react';
import { MessageCircle, Send, Bot, User, Sparkles, Brain, Zap, Shield, Scale, FileText } from 'lucide-react';

const AILegalAssistant = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions, setSuggestions] = useState([
    "What are my rights during a police stop?",
    "How do I file a civil rights complaint?", 
    "What are the current marijuana laws in my state?",
    "Can you help me understand voting rights?",
    "What should I do if I experience discrimination?"
  ]);

  useEffect(() => {
    // Welcome message
    setMessages([
      {
        id: 1,
        type: 'bot',
        content: "Hello! I'm your AI Legal Assistant. I can help you understand your civil rights, state laws, and legal procedures. What would you like to know?",
        timestamp: new Date()
      }
    ]);
  }, []);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        type: 'bot',
        content: generateAIResponse(inputMessage),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (question) => {
    const responses = {
      'police': "During a police stop, you have several important rights: 1) You have the right to remain silent - you don't have to answer questions beyond providing identification. 2) You have the right to refuse searches of your person, car, or belongings unless they have a warrant or probable cause. 3) You have the right to ask if you're free to leave. 4) You have the right to record the interaction in most states. Remember to stay calm, keep your hands visible, and clearly state if you're exercising your rights.",
      'complaint': "To file a civil rights complaint: 1) Document everything - dates, times, witnesses, evidence. 2) Contact the appropriate agency (EEOC for employment, HUD for housing, DOJ Civil Rights Division for other issues). 3) File within the required time limits (usually 180-300 days). 4) Consider contacting a civil rights attorney. 5) You can also file with state civil rights agencies. Keep copies of all documents and correspondence.",
      'marijuana': "Marijuana laws vary significantly by state. Some states have legalized recreational use, others only allow medical use, and some still prohibit it entirely. Even in legal states, there are restrictions on possession amounts, where you can use it, and driving under the influence. I recommend checking your specific state's current laws as they change frequently.",
      'voting': "Your voting rights include: 1) The right to register and vote if you're a U.S. citizen 18 or older. 2) The right to vote privately and have your vote counted. 3) The right to get help if you have a disability or can't read. 4) The right to vote even if you can't afford a poll tax. 5) Protection from intimidation or discrimination. If you face voting issues, contact your local election office or the DOJ Voting Rights Division.",
      'discrimination': "If you experience discrimination: 1) Document incidents with dates, witnesses, and evidence. 2) Report to the appropriate agency (EEOC, HUD, etc.) within time limits. 3) File a complaint with your employer's HR department if workplace discrimination. 4) Consider consulting with a civil rights attorney. 5) Know that retaliation for filing complaints is also illegal. You have legal protections and remedies available."
    };

    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes('police') || lowerQuestion.includes('stop') || lowerQuestion.includes('arrest')) {
      return responses.police;
    } else if (lowerQuestion.includes('complaint') || lowerQuestion.includes('file')) {
      return responses.complaint;
    } else if (lowerQuestion.includes('marijuana') || lowerQuestion.includes('cannabis') || lowerQuestion.includes('drug')) {
      return responses.marijuana;
    } else if (lowerQuestion.includes('voting') || lowerQuestion.includes('vote') || lowerQuestion.includes('election')) {
      return responses.voting;
    } else if (lowerQuestion.includes('discrimination') || lowerQuestion.includes('discriminate')) {
      return responses.discrimination;
    } else {
      return "I understand you're asking about civil rights or legal matters. Could you be more specific about your question? I can help with topics like police interactions, filing complaints, voting rights, discrimination, and state-specific laws. Feel free to ask about any civil rights concern you have.";
    }
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-white rounded-full p-3 shadow-lg mr-4">
            <Brain className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-4xl font-bold text-white">AI Legal Assistant</h2>
        </div>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
          Get instant, accurate answers to your civil rights questions powered by advanced AI technology.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <FeatureCard
          icon={<Shield className="h-6 w-6 text-blue-600" />}
          title="Know Your Rights"
          description="Understand your constitutional protections and civil liberties"
        />
        <FeatureCard
          icon={<Scale className="h-6 w-6 text-green-600" />}
          title="Legal Guidance"
          description="Get step-by-step guidance on legal procedures and processes"
        />
        <FeatureCard
          icon={<FileText className="h-6 w-6 text-purple-600" />}
          title="State Laws"
          description="Access current information about state-specific regulations"
        />
      </div>

      {/* Chat Interface */}
      <div className="bg-white rounded-xl shadow-xl overflow-hidden">
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4">
          <div className="flex items-center">
            <div className="bg-white rounded-full p-2 mr-3">
              <Bot className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-white font-semibold">Legal AI Assistant</h3>
              <p className="text-blue-100 text-sm">Online • Ready to help</p>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          
          {isTyping && (
            <div className="flex items-center space-x-2">
              <div className="bg-white rounded-full p-2 shadow-sm">
                <Bot className="h-4 w-4 text-blue-600" />
              </div>
              <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Suggestions */}
        {messages.length === 1 && (
          <div className="p-4 border-t border-gray-200 bg-white">
            <p className="text-sm text-gray-600 mb-3">Try asking about:</p>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="p-4 border-t border-gray-200 bg-white">
          <div className="flex space-x-3">
            <textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask a question about your rights (e.g., 'Can I record a traffic stop?', 'What are my Miranda rights?')..."
              className="flex-1 resize-none border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows="2"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isTyping}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-start">
          <Sparkles className="h-5 w-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
          <div>
            <h4 className="font-medium text-yellow-800">Important Disclaimer</h4>
            <p className="text-yellow-700 text-sm mt-1">
              This AI assistant provides general legal information and should not be considered as legal advice. 
              For specific legal matters, please consult with a qualified attorney. Laws vary by jurisdiction and change frequently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
    <div className="mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// Message Bubble Component
const MessageBubble = ({ message }) => {
  const isBot = message.type === 'bot';
  
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}>
      <div className={`flex items-start space-x-2 max-w-xs lg:max-w-md ${isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
        <div className={`rounded-full p-2 shadow-sm ${isBot ? 'bg-white' : 'bg-blue-600'}`}>
          {isBot ? (
            <Bot className="h-4 w-4 text-blue-600" />
          ) : (
            <User className="h-4 w-4 text-white" />
          )}
        </div>
        <div className={`rounded-lg px-4 py-2 shadow-sm ${
          isBot 
            ? 'bg-white text-gray-800' 
            : 'bg-blue-600 text-white'
        }`}>
          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
          <p className={`text-xs mt-1 ${isBot ? 'text-gray-500' : 'text-blue-100'}`}>
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AILegalAssistant;