import React, { useState, useEffect } from 'react';
import { MessageCircle, Send, Bot, User, Sparkles, Brain, Zap } from 'lucide-react';

const AILegalAssistant = ({ darkMode }) => {
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
        content: "Hello! I'm your AI Legal Assistant. I can help you understand civil rights laws, provide general legal information, and guide you through various legal processes. How can I assist you today?",
        timestamp: new Date()
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

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputMessage);
      const botMessage = {
        id: messages.length + 2,
        type: 'bot',
        content: aiResponse,
        timestamp: new Date(),
        confidence: Math.random() * 0.3 + 0.7 // 70-100% confidence
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Police interaction
    if (lowerMessage.includes('police') || lowerMessage.includes('stop') || lowerMessage.includes('arrest')) {
      return `Based on your question about police interactions, here are your key rights:

1. **Right to Remain Silent**: You have the right to remain silent. Simply say "I invoke my right to remain silent."

2. **Right to Refuse Search**: You can refuse consent to search your person, vehicle, or home unless police have a warrant.

3. **Right to Legal Representation**: You have the right to an attorney. Request one immediately.

4. **Document the Interaction**: If safe, record the encounter and get badge numbers.

**Important**: This is general information, not legal advice. For specific situations, consult with a qualified attorney.`;
    }

    // Marijuana laws
    if (lowerMessage.includes('marijuana') || lowerMessage.includes('cannabis') || lowerMessage.includes('weed')) {
      return `I'd be happy to help you understand marijuana laws. To provide the most accurate information, could you tell me:

1. Which state are you asking about?
2. Are you asking about medical or recreational use?
3. Are you a patient, caregiver, or just seeking general information?

In general, marijuana laws vary significantly by state. Some states have fully legalized both medical and recreational use, while others only allow medical use with strict conditions. Federal law still classifies marijuana as a Schedule I substance.

Would you like me to look up specific laws for your state?`;
    }

    // Discrimination
    if (lowerMessage.includes('discrimination') || lowerMessage.includes('discriminated')) {
      return `I'm sorry you're experiencing discrimination. Here's what you should know:

**Types of Illegal Discrimination**:
- Race, color, national origin
- Religion
- Sex, gender identity, sexual orientation
- Disability
- Age (40+)
- Pregnancy
- Genetic information

**What You Can Do**:
1. Document everything: dates, times, witnesses, what was said/done
2. File a complaint with the EEOC (for employment) or HUD (for housing)
3. Contact your state's civil rights agency
4. Consider consulting with a civil rights attorney

**Time Limits**: Most discrimination claims have strict deadlines (often 180-300 days), so act quickly.

Would you like help finding the appropriate agency to file a complaint?`;
    }

    // Voting rights
    if (lowerMessage.includes('voting') || lowerMessage.includes('vote')) {
      return `Voting rights are fundamental to democracy. Here's what you should know:

**Your Voting Rights**:
- Right to vote without discrimination
- Right to assistance if you have a disability or difficulty reading
- Right to vote if you're in line when polls close
- Right to a provisional ballot if your registration is questioned

**Common Issues**:
- Voter ID requirements vary by state
- Felony disenfranchisement laws differ by state
- Registration deadlines and requirements

**If You Experience Problems**:
1. Call 1-866-OUR-VOTE for immediate assistance
2. Document the issue (time, location, what happened)
3. File a complaint with election officials
4. Contact civil rights organizations

Would you like help finding your polling place or checking your registration status?`;
    }

    // Default response
    return `Thank you for your question about "${userMessage}". 

I understand you're seeking legal information. While I can provide general guidance about civil rights laws and procedures, I cannot provide specific legal advice. 

For the most accurate and personalized assistance, I recommend:

1. **Consulting with a qualified attorney** who specializes in civil rights law
2. **Contacting legal aid organizations** in your area
3. **Reaching out to civil rights advocacy groups** relevant to your situation
4. **Checking official government websites** for current laws and procedures

Could you tell me more specifically what type of civil rights issue you're dealing with? This will help me provide more relevant general information.`;
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
    <div className="flex flex-col h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
      {/* Header */}
      <div className="border-b border-white/10 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Bot className="h-6 w-6 text-blue-400 mr-3" />
            <div>
              <h3 className="text-lg font-bold text-white">AI Legal Assistant</h3>
              <p className="text-white/60 text-sm">Powered by advanced legal AI</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Sparkles className="h-4 w-4 text-yellow-400" />
            <span className="text-xs text-white/60">AI</span>
          </div>
        </div>
      </div>

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
                
                {message.type === 'bot' && message.confidence && (
                  <div className="mt-2 flex items-center text-xs text-white/60">
                    <Brain className="h-3 w-3 mr-1" />
                    Confidence: {Math.round(message.confidence * 100)}%
                  </div>
                )}
                
                <p className="text-xs text-white/50 mt-2">
                  {new Date(message.timestamp).toLocaleTimeString()}
                </p>
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

      {/* Suggestions */}
      <div className="border-t border-white/10 p-4">
        <p className="text-white/60 text-sm mb-2">Quick questions:</p>
        <div className="flex flex-wrap gap-2">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded-full transition-colors"
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
        
        <p className="text-xs text-white/50 mt-2">
          <Zap className="h-3 w-3 inline mr-1" />
          This AI provides general legal information, not specific legal advice. For personalized legal advice, consult with a qualified attorney.
        </p>
      </div>
    </div>
  );
};

export default AILegalAssistant;