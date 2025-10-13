import React, { useState, useEffect } from 'react';
import { MessageCircle, Send, Bot, User, Sparkles, Brain, Zap, Shield, Scale, FileText, AlertTriangle, ExternalLink } from 'lucide-react';

const AILegalAssistant = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions] = useState([
    "What are my rights during a police stop?",
    "Can I record police officers in public?",
    "What should I do if I'm arrested?",
    "How do I file a civil rights complaint?",
    "What are my First Amendment rights?"
  ]);

  useEffect(() => {
    // Welcome message
    setMessages([
      {
        id: 1,
        type: 'bot',
        content: "Hello! I'm your AI Legal Assistant. I can help you understand your civil rights, constitutional protections, and legal procedures. Please note that I provide general legal information only - not legal advice. For specific legal matters, consult with a qualified attorney.\n\nWhat would you like to know?",
        timestamp: new Date(),
        sources: []
      }
    ]);
  }, []);

  const legalKnowledgeBase = {
    policeStop: {
      keywords: ['police', 'stop', 'pulled over', 'traffic stop', 'detained'],
      response: `**Your Rights During a Police Stop:**

**1. Right to Remain Silent**
- You have the right to remain silent under the Fifth Amendment
- You must provide identification when asked, but you don't have to answer other questions
- Clearly state: "I am exercising my right to remain silent"

**2. Right to Refuse Searches**
- You can refuse consent to search your vehicle, person, or belongings
- Police need probable cause or a warrant to search without consent
- Clearly state: "I do not consent to any searches"

**3. Right to Leave**
- You can ask: "Am I free to leave?"
- If not detained, you have the right to leave
- If detained, ask: "Why am I being detained?"

**4. Right to Record**
- In most states, you have the right to record police in public
- Keep a safe distance and don't interfere with police duties
- Recording is protected under the First Amendment

**Important Tips:**
- Stay calm and keep your hands visible
- Don't argue, resist, or run
- Remember badge numbers and details
- Document everything as soon as possible

**Legal Basis:** Fourth Amendment (unreasonable searches), Fifth Amendment (self-incrimination), First Amendment (recording)`,
      sources: [
        { title: 'ACLU - Know Your Rights', url: 'https://www.aclu.org/know-your-rights' },
        { title: 'Fourth Amendment - U.S. Constitution', url: 'https://constitution.congress.gov/constitution/amendment-4/' }
      ]
    },
    recording: {
      keywords: ['record', 'recording', 'film', 'video', 'photograph', 'camera'],
      response: `**Recording Police and Public Officials:**

**Federal Law:**
- First Amendment protects your right to record police in public
- Multiple federal circuit courts have affirmed this right
- Recording is considered a form of free speech and press

**State Variations:**
- **One-Party Consent States:** You can record conversations you're part of
- **Two-Party Consent States:** All parties must consent to recording
- Public police activities are generally recordable regardless of consent laws

**Best Practices:**
- Record from a safe distance (generally 10+ feet)
- Don't interfere with police duties
- Announce you're recording if asked
- Keep recording even if told to stop (but comply with lawful orders to move)
- Store footage securely and back it up

**What You Can Record:**
✓ Police conducting duties in public
✓ Public officials at public events
✓ Protests and demonstrations
✓ Traffic stops (your own or others in public view)

**What to Avoid:**
✗ Interfering with police operations
✗ Trespassing on private property
✗ Recording in restricted government facilities
✗ Recording where you have no legal right to be

**If Your Phone is Seized:**
- Don't unlock it or provide passwords
- State: "I do not consent to any searches"
- Police generally need a warrant to search your phone

**Legal Basis:** First Amendment, Glik v. Cunniffe (1st Circuit), ACLU v. Alvarez (7th Circuit)`,
      sources: [
        { title: 'ACLU - Know Your Rights: Photographers', url: 'https://www.aclu.org/know-your-rights/photographers-what-are-your-rights' },
        { title: 'Glik v. Cunniffe Case', url: 'https://www.ca1.uscourts.gov/opinions' }
      ]
    },
    arrest: {
      keywords: ['arrest', 'arrested', 'custody', 'jail', 'detained'],
      response: `**What to Do If You're Arrested:**

**Immediate Actions:**
1. **Stay Calm** - Don't resist, argue, or run
2. **Invoke Your Rights** - Say clearly: "I am exercising my right to remain silent and I want a lawyer"
3. **Don't Answer Questions** - Except to provide basic identification
4. **Don't Consent to Searches** - Say: "I do not consent to any searches"
5. **Remember Details** - Badge numbers, officer names, witnesses

**Your Constitutional Rights:**
- **Fifth Amendment:** Right to remain silent
- **Sixth Amendment:** Right to an attorney
- **Fourth Amendment:** Protection from unreasonable searches
- **Eighth Amendment:** Protection from excessive bail

**Miranda Rights:**
You must be read your Miranda rights before custodial interrogation:
- Right to remain silent
- Anything you say can be used against you
- Right to an attorney
- If you can't afford one, one will be appointed

**After Arrest:**
1. **Request a Lawyer Immediately** - Don't wait
2. **Don't Sign Anything** - Without legal counsel
3. **Don't Discuss Your Case** - With anyone except your lawyer
4. **Document Everything** - Write down what happened ASAP
5. **Contact Family/Friends** - You have the right to a phone call

**Booking Process:**
- You'll be photographed and fingerprinted
- Personal property will be inventoried
- You may be searched
- You'll be held until bail hearing or release

**Bail and Release:**
- You have the right to a bail hearing
- Bail cannot be "excessive" (8th Amendment)
- You may be released on your own recognizance
- Consider bail bondsman if you can't afford full bail

**Important Notes:**
- Police can lie to you during interrogation
- "Just talking" without a lawyer is dangerous
- Silence cannot be used against you in court
- Anything you say CAN and WILL be used against you

**Legal Basis:** Miranda v. Arizona, Fifth Amendment, Sixth Amendment`,
      sources: [
        { title: 'Miranda Rights - Supreme Court', url: 'https://www.supremecourt.gov' },
        { title: 'ACLU - What To Do If Arrested', url: 'https://www.aclu.org/know-your-rights/stopped-by-police' }
      ]
    },
    complaint: {
      keywords: ['complaint', 'file', 'report', 'sue', 'lawsuit', 'violation'],
      response: `**How to File a Civil Rights Complaint:**

**Step 1: Document Everything**
- Date, time, and location of incident
- Names and badge numbers of officers/officials
- Witness names and contact information
- Photos, videos, or audio recordings
- Medical records (if injured)
- Any written communications

**Step 2: Choose the Right Agency**

**For Police Misconduct:**
- Local: Police department's Internal Affairs
- State: State Attorney General's office
- Federal: FBI Civil Rights Division, DOJ

**For Employment Discrimination:**
- EEOC (Equal Employment Opportunity Commission)
- File within 180 days (300 days in some states)

**For Housing Discrimination:**
- HUD (Department of Housing and Urban Development)
- File within 1 year of incident

**For Voting Rights:**
- DOJ Voting Section
- State election officials

**Step 3: File Your Complaint**

**Online:**
- DOJ Civil Rights Division: civilrights.justice.gov
- EEOC: eeoc.gov
- HUD: hud.gov/fairhousing

**By Mail:**
U.S. Department of Justice
Civil Rights Division
950 Pennsylvania Avenue, NW
Washington, DC 20530

**By Phone:**
- DOJ: 1-855-856-1247
- EEOC: 1-800-669-4000

**Step 4: What to Include**
- Your contact information
- Detailed description of incident
- Names of those involved
- Dates and locations
- How you were harmed
- What remedy you seek
- Supporting documentation

**Step 5: Follow Up**
- Keep copies of everything
- Note reference/case numbers
- Follow up regularly
- Consider legal representation

**Time Limits (Statutes of Limitations):**
- Federal civil rights claims: Generally 2-4 years
- State claims: Varies by state (often 1-3 years)
- Administrative complaints: Often 180-300 days
- **File as soon as possible - don't wait!**

**Additional Options:**
- File lawsuit under 42 U.S.C. § 1983 (federal civil rights)
- Contact civil rights organizations (ACLU, NAACP, etc.)
- Seek private attorney (many work on contingency)
- File complaint with professional licensing boards

**Protection from Retaliation:**
- It's illegal to retaliate against you for filing a complaint
- Document any retaliation immediately
- Report retaliation to the same agency

**Legal Basis:** 42 U.S.C. § 1983, Title VII, Fair Housing Act, Voting Rights Act`,
      sources: [
        { title: 'DOJ Civil Rights Division', url: 'https://civilrights.justice.gov/' },
        { title: 'EEOC - How to File', url: 'https://www.eeoc.gov/how-file-charge-employment-discrimination' },
        { title: 'HUD Fair Housing', url: 'https://www.hud.gov/program_offices/fair_housing_equal_opp' }
      ]
    },
    firstAmendment: {
      keywords: ['first amendment', 'free speech', 'freedom of speech', 'protest', 'assembly', 'religion', 'press'],
      response: `**First Amendment Rights:**

**The Five Freedoms:**

**1. Freedom of Speech**
- Right to express opinions without government censorship
- Includes symbolic speech (flags, armbands, etc.)
- Protected even if offensive or unpopular
- Limitations: True threats, incitement to imminent lawless action, obscenity

**2. Freedom of Religion**
- Free exercise of religion
- Government cannot establish official religion
- Cannot be forced to participate in religious activities
- Religious beliefs are protected, but some actions may be regulated

**3. Freedom of the Press**
- Right to publish information without government censorship
- Protects journalists and citizen journalists
- Shield laws in many states protect sources
- Prior restraint is generally unconstitutional

**4. Freedom of Assembly**
- Right to gather peacefully
- Right to associate with others
- Includes right to join organizations
- Cannot be denied based on viewpoint

**5. Freedom to Petition**
- Right to petition government for redress of grievances
- Includes contacting elected officials
- Filing lawsuits against government
- Participating in political process

**Protest Rights:**
- Can protest on public property (streets, sidewalks, parks)
- May need permit for large gatherings
- Cannot block traffic or building access
- Police can impose reasonable time/place/manner restrictions
- Cannot be arrested for peaceful protest

**Limitations:**
- **Time, Place, Manner:** Reasonable restrictions allowed
- **Private Property:** Owner's rights apply
- **Incitement:** Cannot incite imminent lawless action
- **True Threats:** Threats of violence not protected
- **Fighting Words:** Words likely to provoke immediate violence

**Student Rights:**
- Students have First Amendment rights in school
- Schools can restrict speech that disrupts education
- Cannot be punished for off-campus speech (generally)
- Tinker v. Des Moines: Students don't "shed their constitutional rights at the schoolhouse gate"

**Employee Rights:**
- Public employees have First Amendment protections
- Private employees have limited protections
- Whistleblower protections may apply
- Cannot be fired for political affiliation (public sector)

**Social Media:**
- First Amendment applies to government censorship, not private platforms
- Public officials cannot block constituents on official accounts
- Government cannot compel speech on social media

**If Your Rights Are Violated:**
- Document the incident
- File complaint with appropriate agency
- Contact ACLU or civil rights organization
- Consider legal action under 42 U.S.C. § 1983

**Legal Basis:** First Amendment, Tinker v. Des Moines, Brandenburg v. Ohio, New York Times v. Sullivan`,
      sources: [
        { title: 'First Amendment - U.S. Constitution', url: 'https://constitution.congress.gov/constitution/amendment-1/' },
        { title: 'ACLU - Free Speech', url: 'https://www.aclu.org/issues/free-speech' },
        { title: 'Supreme Court - First Amendment Cases', url: 'https://www.supremecourt.gov' }
      ]
    },
    marijuana: {
      keywords: ['marijuana', 'cannabis', 'weed', 'pot', 'drug'],
      response: `**Marijuana Laws Overview:**

**Federal Law:**
- Marijuana remains illegal under federal law (Schedule I controlled substance)
- Federal law supersedes state law technically
- Federal enforcement priorities have shifted over time
- Possession, cultivation, and distribution are federal crimes

**State Law Variations:**

**Fully Legal (Recreational + Medical):**
- Adults 21+ can possess, use, and purchase
- Licensed dispensaries operate legally
- Home cultivation often allowed (with limits)
- Still illegal to drive under influence
- Cannot cross state lines with marijuana

**Medical Only:**
- Requires medical marijuana card
- Must have qualifying condition
- Registered with state program
- Can purchase from licensed dispensaries
- Possession limits apply

**Decriminalized:**
- Small amounts treated as civil violation (fine)
- Not a criminal offense
- No jail time for possession
- Still illegal, just reduced penalties

**Illegal:**
- Possession is criminal offense
- Can result in arrest, jail time, fines
- Criminal record consequences
- May have medical exceptions

**Important Considerations:**

**Employment:**
- Employers can still drug test
- Can be fired for positive test (even in legal states)
- Federal contractors must comply with federal law
- Safety-sensitive positions have stricter rules

**Housing:**
- Landlords can prohibit use
- Federal housing may prohibit use
- Smoking vs. other consumption methods

**Driving:**
- DUI laws apply to marijuana
- Zero tolerance in some states
- Field sobriety tests used
- Blood/urine testing possible

**Federal Property:**
- Illegal on all federal property
- National parks, federal buildings
- Military bases
- Can result in federal charges

**Travel:**
- Cannot fly with marijuana (TSA is federal)
- Cannot cross state lines
- International travel is federal crime
- Even between legal states

**Parental Rights:**
- CPS involvement possible
- Custody considerations
- Medical use may be protected
- Varies significantly by state

**Check Your State:**
Use our state-by-state database for specific laws in your jurisdiction. Laws change frequently, so verify current status.

**Legal Basis:** Controlled Substances Act, State marijuana laws (varies)`,
      sources: [
        { title: 'NORML - State Laws', url: 'https://norml.org/laws' },
        { title: 'DEA - Drug Scheduling', url: 'https://www.dea.gov/drug-information/drug-scheduling' }
      ]
    }
  };

  const generateAIResponse = (question) => {
    const lowerQuestion = question.toLowerCase();
    
    // Find matching knowledge base entry
    for (const [key, knowledge] of Object.entries(legalKnowledgeBase)) {
      if (knowledge.keywords.some(keyword => lowerQuestion.includes(keyword))) {
        return {
          content: knowledge.response,
          sources: knowledge.sources
        };
      }
    }

    // Default response if no match
    return {
      content: `I understand you're asking about civil rights or legal matters. I can provide detailed information about:

• **Police Interactions** - Your rights during stops, searches, and arrests
• **Recording Rights** - When and how you can record police and public officials
• **Filing Complaints** - How to report civil rights violations
• **First Amendment** - Free speech, assembly, religion, and press rights
• **Marijuana Laws** - State-by-state legal status and regulations
• **Constitutional Rights** - Fourth, Fifth, and Sixth Amendment protections

Please ask a more specific question, or try one of the suggested topics. Remember, I provide general legal information only - not legal advice. For specific legal matters, consult with a qualified attorney.`,
      sources: [
        { title: 'ACLU - Know Your Rights', url: 'https://www.aclu.org/know-your-rights' },
        { title: 'DOJ Civil Rights Division', url: 'https://civilrights.justice.gov/' }
      ]
    };
  };

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

    // Simulate AI processing time
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputMessage);
      const botResponse = {
        id: Date.now() + 1,
        type: 'bot',
        content: aiResponse.content,
        sources: aiResponse.sources,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
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
          Get comprehensive, accurate answers to your civil rights questions with cited sources.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <FeatureCard
          icon={<Shield className="h-6 w-6 text-blue-600" />}
          title="Constitutional Rights"
          description="Detailed information about your First, Fourth, Fifth, and Sixth Amendment protections"
        />
        <FeatureCard
          icon={<Scale className="h-6 w-6 text-green-600" />}
          title="Legal Procedures"
          description="Step-by-step guidance on filing complaints, dealing with arrests, and protecting your rights"
        />
        <FeatureCard
          icon={<FileText className="h-6 w-6 text-purple-600" />}
          title="Cited Sources"
          description="All responses include links to official government sources and legal references"
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
              <p className="text-blue-100 text-sm">Providing accurate legal information with sources</p>
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
              placeholder="Ask a question about your civil rights..."
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
          <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
          <div>
            <h4 className="font-medium text-yellow-800">Important Legal Disclaimer</h4>
            <p className="text-yellow-700 text-sm mt-1">
              This AI assistant provides general legal information based on federal law and common state practices. 
              It is NOT legal advice and should not be relied upon as such. Laws vary by jurisdiction and change frequently. 
              For specific legal matters, always consult with a qualified attorney licensed in your state. 
              The information provided does not create an attorney-client relationship.
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
      <div className={`flex items-start space-x-2 max-w-3xl ${isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
        <div className={`rounded-full p-2 shadow-sm flex-shrink-0 ${isBot ? 'bg-white' : 'bg-blue-600'}`}>
          {isBot ? (
            <Bot className="h-4 w-4 text-blue-600" />
          ) : (
            <User className="h-4 w-4 text-white" />
          )}
        </div>
        <div className={`rounded-lg px-4 py-3 shadow-sm ${
          isBot 
            ? 'bg-white text-gray-800' 
            : 'bg-blue-600 text-white'
        }`}>
          <div className="text-sm whitespace-pre-wrap">{message.content}</div>
          
          {/* Sources */}
          {isBot && message.sources && message.sources.length > 0 && (
            <div className="mt-3 pt-3 border-t border-gray-200">
              <p className="text-xs font-semibold text-gray-600 mb-2">Sources:</p>
              <div className="space-y-1">
                {message.sources.map((source, idx) => (
                  <a
                    key={idx}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-xs text-blue-600 hover:text-blue-700"
                  >
                    <ExternalLink className="h-3 w-3 mr-1" />
                    {source.title}
                  </a>
                ))}
              </div>
            </div>
          )}
          
          <p className={`text-xs mt-2 ${isBot ? 'text-gray-500' : 'text-blue-100'}`}>
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AILegalAssistant;