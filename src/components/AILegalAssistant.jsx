import React, { useState } from 'react';
import { Brain, AlertTriangle, ExternalLink, BookOpen, Scale, Shield } from 'lucide-react';

const AILegalAssistant = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('');

  // Comprehensive legal knowledge base with cited sources
  const legalKnowledge = {
    'police-stops': {
      title: 'Police Stops and Your Rights',
      content: `During a police stop, you have specific constitutional rights:

**Your Rights During a Police Stop:**
• **Right to remain silent** - You are not required to answer questions beyond providing identification when lawfully requested
• **Right to refuse searches** - Police need probable cause or a warrant to search you or your vehicle (except for safety pat-downs)
• **Right to leave** - If you're not under arrest, you can ask "Am I free to go?" and leave if the answer is yes
• **Right to record** - You have the First Amendment right to record police in public spaces

**What You Should Do:**
• Stay calm and keep your hands visible
• Clearly state "I am exercising my right to remain silent"
• Do not physically resist, even if you believe the stop is unlawful
• Ask for a lawyer if you're arrested

**Important Note:** These rights are established by the U.S. Constitution and Supreme Court cases like Terry v. Ohio (1968) and Miranda v. Arizona (1966).`,
      sources: [
        'U.S. Constitution - Fourth and Fifth Amendments',
        'Terry v. Ohio, 392 U.S. 1 (1968)',
        'Miranda v. Arizona, 384 U.S. 436 (1966)',
        'ACLU Know Your Rights Guide'
      ]
    },
    'recording-rights': {
      title: 'Right to Record Police',
      content: `You have a constitutional right to record police officers performing their duties in public spaces.

**Federal Law:**
• **First Amendment protection** - Recording police is protected speech under the First Amendment
• **Established precedent** - Multiple federal circuit courts have affirmed this right
• **Public spaces** - This right applies in any public area where you have a legal right to be

**State-by-State Recording Laws:**
• **One-party consent states** - You can record without notifying others (38 states + DC)
• **Two-party consent states** - Require all parties to consent to recording (12 states)
• **Police exception** - Even in two-party states, recording police in public is generally protected

**Best Practices:**
• Keep a reasonable distance
• Don't interfere with police duties
• Clearly state you are recording
• Know your state's specific laws

**Two-Party Consent States:** California, Connecticut, Florida, Illinois, Maryland, Massachusetts, Montana, New Hampshire, Pennsylvania, Washington, Nevada (in some circumstances), Delaware (phone calls only).`,
      sources: [
        'First Amendment to the U.S. Constitution',
        'Glik v. Cunniffe, 655 F.3d 78 (1st Cir. 2011)',
        'ACLU Recording Police Guidelines',
        'Electronic Frontier Foundation Legal Guide'
      ]
    },
    'miranda-rights': {
      title: 'Miranda Rights and Custodial Interrogation',
      content: `Miranda rights must be read when you are in custody and being interrogated.

**When Miranda Rights Apply:**
• **Custodial interrogation** - You must be both in custody AND being questioned
• **Not required for** - Traffic stops, general questioning, or voluntary interviews
• **Required before** - Any formal interrogation while in police custody

**Your Miranda Rights:**
• Right to remain silent
• Anything you say can be used against you in court
• Right to an attorney
• If you cannot afford an attorney, one will be appointed for you

**Important Points:**
• **Invoke clearly** - Say "I want a lawyer" or "I am invoking my right to remain silent"
• **All questioning must stop** - Once you invoke your rights, police must stop interrogation
• **Waiver must be voluntary** - You can choose to waive your rights, but it must be knowing and voluntary

**Consequences of Violations:**
• Statements made without proper Miranda warnings may be excluded from court
• Evidence discovered as a result of illegal statements may also be excluded`,
      sources: [
        'Miranda v. Arizona, 384 U.S. 436 (1966)',
        'Edwards v. Arizona, 451 U.S. 477 (1981)',
        'U.S. Department of Justice Guidelines',
        'Federal Rules of Criminal Procedure'
      ]
    },
    'search-seizure': {
      title: 'Search and Seizure Rights',
      content: `The Fourth Amendment protects against unreasonable searches and seizures.

**When Police Can Search Without a Warrant:**
• **Consent** - If you voluntarily agree (you can refuse)
• **Search incident to arrest** - Limited search of person and immediate area
• **Plain view** - Items clearly visible to police
• **Exigent circumstances** - Emergency situations
• **Vehicle searches** - With probable cause (Carroll Doctrine)

**When Police Need a Warrant:**
• **Home searches** - Generally require a warrant (with few exceptions)
• **Electronic devices** - Usually require a warrant (Riley v. California)
• **Private property** - Most searches of private property require warrants

**Your Rights:**
• **Right to refuse consent** - Clearly state "I do not consent to any searches"
• **Right to see the warrant** - If police have a warrant, you can ask to see it
• **Right to remain silent** - Don't answer questions about what they might find

**Important Cases:**
• **Mapp v. Ohio (1961)** - Established exclusionary rule
• **Riley v. California (2014)** - Cell phone search protections
• **Carpenter v. United States (2018)** - Digital privacy protections`,
      sources: [
        'Fourth Amendment to the U.S. Constitution',
        'Mapp v. Ohio, 367 U.S. 643 (1961)',
        'Riley v. California, 573 U.S. 373 (2014)',
        'Carpenter v. United States, 585 U.S. ___ (2018)'
      ]
    },
    'filing-complaints': {
      title: 'Filing Civil Rights Complaints',
      content: `You have multiple avenues to file complaints about civil rights violations.

**Federal Options:**
• **FBI Civil Rights Division** - Investigates federal civil rights violations
• **U.S. Department of Justice** - Civil Rights Division handles pattern and practice investigations
• **Federal Court** - Section 1983 lawsuits for constitutional violations

**State and Local Options:**
• **Internal Affairs** - Police department's internal investigation unit
• **Civilian Review Boards** - Independent oversight bodies
• **State Attorney General** - Many states have civil rights enforcement
• **Local District Attorney** - Can prosecute criminal violations

**Filing Process:**
1. **Document everything** - Photos, videos, witness information, medical records
2. **File promptly** - Many complaints have time limits (statute of limitations)
3. **Multiple venues** - You can file with multiple agencies simultaneously
4. **Legal representation** - Consider consulting with a civil rights attorney

**What to Include:**
• Date, time, and location of incident
• Names and badge numbers of officers involved
• Witness contact information
• Any evidence (photos, videos, medical records)
• Detailed description of what happened

**Important Statutes:**
• **42 U.S.C. § 1983** - Civil rights lawsuits against government officials
• **18 U.S.C. § 242** - Criminal civil rights violations
• **Title VI** - Discrimination in federally funded programs`,
      sources: [
        'FBI Civil Rights Program',
        'U.S. Department of Justice Civil Rights Division',
        '42 U.S.C. § 1983 - Civil Rights Act',
        'ACLU Complaint Filing Guide'
      ]
    },
    'marijuana-laws': {
      title: 'Marijuana Laws by State (2025)',
      content: `Marijuana laws vary significantly by state. Here's the current status:

**Fully Legal (Recreational + Medical):**
Alaska, Arizona, California, Colorado, Connecticut, Delaware, Illinois, Maine, Maryland, Massachusetts, Michigan, Minnesota, Missouri, Montana, Nevada, New Jersey, New Mexico, New York, Oregon, Rhode Island, Vermont, Virginia, Washington, Washington D.C.

**Medical Only:**
Alabama, Arkansas, Florida, Georgia, Hawaii, Louisiana, Mississippi, New Hampshire, North Dakota, Ohio, Oklahoma, Pennsylvania, South Dakota, Texas, Utah, West Virginia

**CBD Only:**
Iowa, Kansas, Kentucky, Nebraska, North Carolina, South Carolina, Tennessee, Wisconsin, Wyoming

**Fully Illegal:**
Idaho, Indiana

**Important Federal Considerations:**
• **Federal law** - Marijuana remains federally illegal under the Controlled Substances Act
• **Federal property** - Illegal on all federal property regardless of state law
• **Interstate transport** - Moving marijuana across state lines remains federally illegal
• **Employment** - Employers can still test and terminate for marijuana use

**Your Rights During Marijuana-Related Stops:**
• Same constitutional rights apply regardless of marijuana laws
• Don't consent to searches
• Exercise your right to remain silent
• Know your state's specific possession limits`,
      sources: [
        'National Conference of State Legislatures',
        'NORML State Laws Database',
        'Controlled Substances Act (21 U.S.C. § 801)',
        'State Government Official Sources'
      ]
    }
  };

  const quickTopics = [
    { id: 'police-stops', title: 'Police Stops', icon: Shield },
    { id: 'recording-rights', title: 'Recording Police', icon: BookOpen },
    { id: 'miranda-rights', title: 'Miranda Rights', icon: Scale },
    { id: 'search-seizure', title: 'Search & Seizure', icon: AlertTriangle },
    { id: 'filing-complaints', title: 'File Complaints', icon: ExternalLink },
    { id: 'marijuana-laws', title: 'Marijuana Laws', icon: Brain }
  ];

  const handleQuickTopic = (topicId) => {
    setSelectedTopic(topicId);
    const topic = legalKnowledge[topicId];
    if (topic) {
      setResponse({
        content: topic.content,
        sources: topic.sources,
        title: topic.title
      });
      setQuestion(`Tell me about ${topic.title.toLowerCase()}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsLoading(true);
    
    // Simulate processing time
    setTimeout(() => {
      // Simple keyword matching for demonstration
      const lowerQuestion = question.toLowerCase();
      let matchedTopic = null;

      if (lowerQuestion.includes('police stop') || lowerQuestion.includes('traffic stop')) {
        matchedTopic = legalKnowledge['police-stops'];
      } else if (lowerQuestion.includes('record') || lowerQuestion.includes('filming')) {
        matchedTopic = legalKnowledge['recording-rights'];
      } else if (lowerQuestion.includes('miranda') || lowerQuestion.includes('right to remain silent')) {
        matchedTopic = legalKnowledge['miranda-rights'];
      } else if (lowerQuestion.includes('search') || lowerQuestion.includes('warrant')) {
        matchedTopic = legalKnowledge['search-seizure'];
      } else if (lowerQuestion.includes('complaint') || lowerQuestion.includes('report')) {
        matchedTopic = legalKnowledge['filing-complaints'];
      } else if (lowerQuestion.includes('marijuana') || lowerQuestion.includes('cannabis')) {
        matchedTopic = legalKnowledge['marijuana-laws'];
      } else {
        // Default response for unmatched questions
        matchedTopic = {
          title: 'General Civil Rights Information',
          content: `I can help you understand your civil rights in the following areas:

• **Police Stops** - Your rights during traffic stops and police encounters
• **Recording Police** - Your First Amendment right to record police officers
• **Miranda Rights** - When and how these rights apply
• **Search and Seizure** - Fourth Amendment protections
• **Filing Complaints** - How to report civil rights violations
• **Marijuana Laws** - Current state-by-state legal status

Please ask a more specific question about any of these topics, or click on one of the quick topic buttons above for detailed information.

**Important Legal Disclaimer:** This information is for educational purposes only and does not constitute legal advice. For specific legal situations, please consult with a qualified attorney.`,
          sources: [
            'U.S. Constitution',
            'ACLU Civil Rights Resources',
            'U.S. Department of Justice',
            'Legal Aid Organizations'
          ]
        };
      }

      setResponse({
        content: matchedTopic.content,
        sources: matchedTopic.sources,
        title: matchedTopic.title
      });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Brain className="w-8 h-8 text-blue-400" />
        <div>
          <h2 className="text-2xl font-bold text-white">AI Legal Assistant</h2>
          <p className="text-blue-200 text-sm">Get accurate civil rights information with cited sources</p>
        </div>
      </div>

      {/* Legal Disclaimer */}
      <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-4 mb-6">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-yellow-200 mb-1">Important Legal Disclaimer</h4>
            <p className="text-yellow-100 text-sm">
              This AI assistant provides educational information only and does not constitute legal advice. 
              All information is sourced from official legal documents and established case law. 
              For specific legal situations, please consult with a qualified attorney.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Topics */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white mb-3">Quick Topics</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {quickTopics.map((topic) => {
            const IconComponent = topic.icon;
            return (
              <button
                key={topic.id}
                onClick={() => handleQuickTopic(topic.id)}
                className={`p-3 rounded-lg border transition-colors text-left ${
                  selectedTopic === topic.id
                    ? 'bg-blue-600/30 border-blue-500/50 text-white'
                    : 'bg-gray-800/50 border-gray-600/30 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <IconComponent className="w-4 h-4" />
                  <span className="text-sm font-medium">{topic.title}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Question Form */}
      <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-600/30">
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Ask about your civil rights:
            </label>
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Example: What are my rights during a police stop? Can I record police officers? What should I do if my rights are violated?"
              className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none resize-none"
              rows="3"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading || !question.trim()}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg transition-colors flex items-center gap-2"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Processing...
              </>
            ) : (
              <>
                <Brain className="w-4 h-4" />
                Get Legal Information
              </>
            )}
          </button>
        </form>

        {/* Response */}
        {response && (
          <div className="bg-blue-900/20 border border-blue-600/30 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-white mb-3">{response.title}</h4>
            <div className="text-gray-200 whitespace-pre-line mb-4 leading-relaxed">
              {response.content}
            </div>
            
            {/* Sources */}
            <div className="border-t border-blue-600/30 pt-4">
              <h5 className="font-semibold text-blue-200 mb-2 flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Sources & Legal References:
              </h5>
              <ul className="space-y-1">
                {response.sources.map((source, index) => (
                  <li key={index} className="text-blue-300 text-sm flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>{source}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Additional Resources */}
            <div className="mt-4 p-3 bg-gray-800/50 rounded border border-gray-600/30">
              <p className="text-gray-300 text-sm">
                <strong>Need immediate legal help?</strong> Contact your local ACLU chapter, 
                legal aid organization, or consult with a civil rights attorney. 
                For emergencies, call 911 or your local emergency services.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AILegalAssistant;