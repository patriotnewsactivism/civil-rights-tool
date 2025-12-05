import React, { useState, useRef } from 'react';
import { 
  Camera, 
  Shield, 
  FileText, 
  Download, 
  Phone,
  Lock,
  BookOpen,
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  Printer,
  Search,
  Users,
  Scale
} from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const EnhancedJournalistToolkit = ({ darkMode = true }) => {
  const [selectedSection, setSelectedSection] = useState('overview');
  const [isExporting, setIsExporting] = useState(false);
  const contentRef = useRef(null);

  const exportToPDF = async () => {
    setIsExporting(true);
    try {
      const element = contentRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: darkMode ? '#0f172a' : '#ffffff'
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 10;

      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save('journalist-toolkit.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  const toolkitSections = {
    overview: {
      title: 'Journalist Toolkit Overview',
      icon: Camera,
      content: (
        <div className="space-y-6">
          <div className={`${darkMode ? 'bg-blue-500/10' : 'bg-blue-50'} border ${darkMode ? 'border-blue-500/20' : 'border-blue-200'} rounded-lg p-6`}>
            <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Welcome to the Journalist Toolkit
            </h3>
            <p className={`${darkMode ? 'text-white/80' : 'text-slate-700'} mb-4`}>
              Essential resources for journalists covering civil rights, protests, and social justice movements. 
              This toolkit provides legal protections, safety guidelines, and best practices for responsible reporting.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={`${darkMode ? 'bg-white/5' : 'bg-white'} rounded-lg p-4`}>
                <h4 className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>What's Included</h4>
                <ul className={`space-y-1 text-sm ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
                  <li>• Press freedom and First Amendment rights</li>
                  <li>• Safety protocols for covering protests</li>
                  <li>• Source protection guidelines</li>
                  <li>• FOIA request templates</li>
                  <li>• Media law resources</li>
                  <li>• Fact-checking tools</li>
                </ul>
              </div>
              <div className={`${darkMode ? 'bg-white/5' : 'bg-white'} rounded-lg p-4`}>
                <h4 className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Key Features</h4>
                <ul className={`space-y-1 text-sm ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
                  <li>• Downloadable templates</li>
                  <li>• Legal hotline contacts</li>
                  <li>• Safety checklists</li>
                  <li>• Ethics guidelines</li>
                  <li>• Resource directories</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },

    rights: {
      title: 'Press Rights & Protections',
      icon: Shield,
      content: (
        <div className="space-y-6">
          <div className={`${darkMode ? 'bg-white/5' : 'bg-slate-50'} rounded-lg p-6 border ${darkMode ? 'border-white/10' : 'border-slate-200'}`}>
            <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              First Amendment Protections for Journalists
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className={`font-bold mb-2 flex items-center ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Freedom of the Press
                </h4>
                <ul className={`space-y-2 ml-7 ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
                  <li><strong>Right to Gather News:</strong> You have the right to observe and report on matters of public interest, including protests and government activities.</li>
                  <li><strong>Right to Publish:</strong> You can publish information without prior restraint or censorship (with limited exceptions).</li>
                  <li><strong>Access to Public Spaces:</strong> You have the same right as the public to be in public spaces and observe events.</li>
                  <li><strong>Right to Record:</strong> You can photograph and record video in public spaces, including police activities.</li>
                </ul>
              </div>

              <div>
                <h4 className={`font-bold mb-2 flex items-center ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Press Credentials
                </h4>
                <ul className={`space-y-2 ml-7 ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
                  <li><strong>Not Required:</strong> You don't need official press credentials to exercise First Amendment rights.</li>
                  <li><strong>Helpful But Not Mandatory:</strong> Press passes may provide additional access but aren't legally required.</li>
                  <li><strong>Identification:</strong> Carry business cards and identification showing you're working as a journalist.</li>
                  <li><strong>Freelancers:</strong> Freelance journalists have the same rights as staff reporters.</li>
                </ul>
              </div>

              <div>
                <h4 className={`font-bold mb-2 flex items-center ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  <CheckCircle className="h-5 w-5 mr-2" />
                  What Police Can and Cannot Do
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-7">
                  <div>
                    <p className={`font-semibold mb-2 ${darkMode ? 'text-green-400' : 'text-green-600'}`}>Police CANNOT:</p>
                    <ul className={`space-y-1 text-sm ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
                      <li>✗ Arrest you for recording them</li>
                      <li>✗ Confiscate your equipment without a warrant</li>
                      <li>✗ Delete your photos or videos</li>
                      <li>✗ Demand to see your photos/videos</li>
                      <li>✗ Require you to stop recording</li>
                    </ul>
                  </div>
                  <div>
                    <p className={`font-semibold mb-2 ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>Police CAN:</p>
                    <ul className={`space-y-1 text-sm ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
                      <li>✓ Order you to move for safety reasons</li>
                      <li>✓ Arrest you for interfering with their duties</li>
                      <li>✓ Arrest you for trespassing on private property</li>
                      <li>✓ Enforce generally applicable laws</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${darkMode ? 'bg-yellow-500/10' : 'bg-yellow-50'} border ${darkMode ? 'border-yellow-500/20' : 'border-yellow-200'} rounded-lg p-6`}>
            <h4 className={`font-bold mb-3 flex items-center ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>
              <AlertTriangle className="h-5 w-5 mr-2" />
              What to Say to Police
            </h4>
            <div className={`space-y-2 ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
              <p><strong>"I'm a journalist covering this event."</strong> - Identify yourself clearly.</p>
              <p><strong>"I'm not interfering, I'm observing."</strong> - Assert your right to observe.</p>
              <p><strong>"I have a right to be here and record."</strong> - Know and state your rights.</p>
              <p><strong>"I do not consent to a search."</strong> - Protect your equipment and sources.</p>
            </div>
          </div>
        </div>
      )
    },

    safety: {
      title: 'Safety Protocols',
      icon: AlertTriangle,
      content: (
        <div className="space-y-6">
          <div className={`${darkMode ? 'bg-white/5' : 'bg-slate-50'} rounded-lg p-6 border ${darkMode ? 'border-white/10' : 'border-slate-200'}`}>
            <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Covering Protests Safely
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className={`font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Before You Go
                </h4>
                <ul className={`space-y-2 ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
                  <li>✓ Research the event and location thoroughly</li>
                  <li>✓ Know local laws regarding protests and press access</li>
                  <li>✓ Inform your editor/newsroom of your plans</li>
                  <li>✓ Establish check-in times with your newsroom</li>
                  <li>✓ Prepare emergency contacts and legal support numbers</li>
                  <li>✓ Charge all devices and bring backup batteries</li>
                  <li>✓ Wear clearly marked press identification</li>
                </ul>
              </div>

              <div>
                <h4 className={`font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Essential Equipment
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Must Have:</p>
                    <ul className={`space-y-1 text-sm ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
                      <li>• Press credentials/ID</li>
                      <li>• Charged phone with backup battery</li>
                      <li>• Camera/recording equipment</li>
                      <li>• Notebook and pens</li>
                      <li>• Water and snacks</li>
                      <li>• First aid kit</li>
                      <li>• Cash (not just cards)</li>
                    </ul>
                  </div>
                  <div>
                    <p className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Protective Gear:</p>
                    <ul className={`space-y-1 text-sm ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
                      <li>• Helmet (if expecting violence)</li>
                      <li>• Safety glasses/goggles</li>
                      <li>• Gas mask (if tear gas expected)</li>
                      <li>• Protective vest</li>
                      <li>• Comfortable, protective clothing</li>
                      <li>• Sturdy shoes</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className={`font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  During the Event
                </h4>
                <ul className={`space-y-2 ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
                  <li>• Stay aware of your surroundings at all times</li>
                  <li>• Position yourself where you can observe and retreat if needed</li>
                  <li>• Identify exit routes before you need them</li>
                  <li>• Work with a partner when possible</li>
                  <li>• Maintain professional distance from participants</li>
                  <li>• Document everything, including police actions</li>
                  <li>• Back up photos/videos immediately to cloud storage</li>
                  <li>• Check in with your newsroom regularly</li>
                </ul>
              </div>

              <div>
                <h4 className={`font-bold mb-2 ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>
                  If Things Turn Violent
                </h4>
                <ul className={`space-y-2 ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
                  <li>• Move to a safe location immediately</li>
                  <li>• Protect your head and vital organs</li>
                  <li>• Don't run - walk calmly to safety</li>
                  <li>• If tear gassed, move upwind and flush eyes with water</li>
                  <li>• Seek medical attention if injured</li>
                  <li>• Document injuries and get witness statements</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={`${darkMode ? 'bg-red-500/10' : 'bg-red-50'} border ${darkMode ? 'border-red-500/20' : 'border-red-200'} rounded-lg p-6`}>
            <h4 className={`font-bold mb-3 flex items-center ${darkMode ? 'text-red-400' : 'text-red-600'}`}>
              <Phone className="h-5 w-5 mr-2" />
              Emergency Contacts
            </h4>
            <div className={`space-y-2 ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
              <p><strong>Reporters Committee for Freedom of the Press:</strong> (800) 336-4243</p>
              <p><strong>Committee to Protect Journalists:</strong> (212) 465-1004</p>
              <p><strong>National Press Photographers Association:</strong> (919) 383-7246</p>
              <p><strong>Your Newsroom:</strong> [Add your contact]</p>
              <p className="text-sm italic mt-4">
                Program these numbers into your phone before covering any protest.
              </p>
            </div>
          </div>
        </div>
      )
    },

    sources: {
      title: 'Source Protection',
      icon: Lock,
      content: (
        <div className="space-y-6">
          <div className={`${darkMode ? 'bg-white/5' : 'bg-slate-50'} rounded-lg p-6 border ${darkMode ? 'border-white/10' : 'border-slate-200'}`}>
            <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Protecting Confidential Sources
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className={`font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Shield Laws
                </h4>
                <p className={`${darkMode ? 'text-white/80' : 'text-slate-700'} mb-2`}>
                  Shield laws protect journalists from being compelled to reveal confidential sources. 
                  However, protections vary by state and circumstance.
                </p>
                <ul className={`space-y-2 ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
                  <li>• 49 states plus DC have some form of shield law</li>
                  <li>• Federal shield law protections are limited</li>
                  <li>• Protections may not apply in criminal cases</li>
                  <li>• Know your state's specific protections</li>
                </ul>
              </div>

              <div>
                <h4 className={`font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Best Practices
                </h4>
                <ul className={`space-y-2 ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
                  <li>• Promise confidentiality only when necessary</li>
                  <li>• Be clear about what you can and cannot protect</li>
                  <li>• Use encrypted communication (Signal, ProtonMail)</li>
                  <li>• Meet sources in person when possible</li>
                  <li>• Don't keep unnecessary records of source identities</li>
                  <li>• Use secure drop services (SecureDrop)</li>
                  <li>• Consult with legal counsel before making promises</li>
                </ul>
              </div>

              <div>
                <h4 className={`font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Digital Security for Sources
                </h4>
                <ul className={`space-y-2 ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
                  <li>• Use end-to-end encrypted messaging (Signal)</li>
                  <li>• Enable disappearing messages</li>
                  <li>• Use Tor Browser for anonymous communication</li>
                  <li>• Avoid email for sensitive communications</li>
                  <li>• Use burner phones for high-risk sources</li>
                  <li>• Remove metadata from documents before publishing</li>
                </ul>
              </div>

              <div>
                <h4 className={`font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  If Subpoenaed
                </h4>
                <ul className={`space-y-2 ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
                  <li>• Contact your news organization's legal counsel immediately</li>
                  <li>• Do not destroy evidence or documents</li>
                  <li>• Do not discuss the subpoena publicly without legal advice</li>
                  <li>• Consider filing a motion to quash</li>
                  <li>• Be prepared to go to court to protect sources</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },

    foia: {
      title: 'FOIA Requests',
      icon: FileText,
      content: (
        <div className="space-y-6">
          <div className={`${darkMode ? 'bg-white/5' : 'bg-slate-50'} rounded-lg p-6 border ${darkMode ? 'border-white/10' : 'border-slate-200'}`}>
            <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Freedom of Information Act Requests
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className={`font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  FOIA Request Template
                </h4>
                <div className={`${darkMode ? 'bg-white/5' : 'bg-white'} rounded-lg p-4 font-mono text-sm ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
                  <p>[Date]</p>
                  <p className="mt-2">[Agency Name]</p>
                  <p>[Agency Address]</p>
                  <p className="mt-2">Re: Freedom of Information Act Request</p>
                  <p className="mt-2">Dear FOIA Officer:</p>
                  <p className="mt-2">
                    Pursuant to the Freedom of Information Act, 5 U.S.C. § 552, I request access to and copies of [describe the records you seek with as much detail as possible].
                  </p>
                  <p className="mt-2">
                    I am a journalist with [news organization] and this request is made for journalistic purposes. I request a waiver of all fees for this request pursuant to 5 U.S.C. § 552(a)(4)(A)(iii).
                  </p>
                  <p className="mt-2">
                    If my request is denied in whole or in part, I ask that you justify all deletions by reference to specific exemptions of the FOIA. I expect a response within 20 business days as required by law.
                  </p>
                  <p className="mt-2">Sincerely,</p>
                  <p>[Your Name]</p>
                  <p>[Contact Information]</p>
                </div>
              </div>

              <div>
                <h4 className={`font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Tips for Effective FOIA Requests
                </h4>
                <ul className={`space-y-2 ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
                  <li>• Be as specific as possible about what you're requesting</li>
                  <li>• Include date ranges to narrow the search</li>
                  <li>• Request a fee waiver if you're a journalist</li>
                  <li>• Follow up if you don't receive a response in 20 days</li>
                  <li>• Appeal denials - many are overturned on appeal</li>
                  <li>• Consider using FOIA tracking services</li>
                </ul>
              </div>

              <div>
                <h4 className={`font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  State Public Records Requests
                </h4>
                <p className={`${darkMode ? 'text-white/80' : 'text-slate-700'} mb-2`}>
                  Every state has its own public records law. Research your state's specific requirements:
                </p>
                <ul className={`space-y-2 ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
                  <li>• Response timeframes vary by state</li>
                  <li>• Fee structures differ</li>
                  <li>• Exemptions vary</li>
                  <li>• Some states have online portals</li>
                </ul>
              </div>

              <div>
                <h4 className={`font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Useful Resources
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className={`${darkMode ? 'bg-white/5' : 'bg-white'} rounded-lg p-3`}>
                    <p className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>FOIA.gov</p>
                    <p className={`text-sm ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
                      Federal FOIA portal and resources
                    </p>
                  </div>
                  <div className={`${darkMode ? 'bg-white/5' : 'bg-white'} rounded-lg p-3`}>
                    <p className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>MuckRock</p>
                    <p className={`text-sm ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
                      FOIA request tracking and filing
                    </p>
                  </div>
                  <div className={`${darkMode ? 'bg-white/5' : 'bg-white'} rounded-lg p-3`}>
                    <p className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Reporters Committee</p>
                    <p className={`text-sm ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
                      State-by-state open records guides
                    </p>
                  </div>
                  <div className={`${darkMode ? 'bg-white/5' : 'bg-white'} rounded-lg p-3`}>
                    <p className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>DocumentCloud</p>
                    <p className={`text-sm ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
                      Document hosting and analysis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    ethics: {
      title: 'Ethics & Best Practices',
      icon: Scale,
      content: (
        <div className="space-y-6">
          <div className={`${darkMode ? 'bg-white/5' : 'bg-slate-50'} rounded-lg p-6 border ${darkMode ? 'border-white/10' : 'border-slate-200'}`}>
            <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Ethical Journalism Guidelines
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className={`font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Core Principles
                </h4>
                <ul className={`space-y-2 ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
                  <li><strong>Accuracy:</strong> Verify all facts before publishing</li>
                  <li><strong>Independence:</strong> Maintain editorial independence from sources and subjects</li>
                  <li><strong>Fairness:</strong> Present multiple perspectives and give subjects opportunity to respond</li>
                  <li><strong>Transparency:</strong> Be open about your methods and potential conflicts of interest</li>
                  <li><strong>Accountability:</strong> Correct errors promptly and prominently</li>
                </ul>
              </div>

              <div>
                <h4 className={`font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Covering Protests Ethically
                </h4>
                <ul className={`space-y-2 ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
                  <li>• Maintain objectivity while covering events</li>
                  <li>• Don't participate in protests you're covering</li>
                  <li>• Blur faces of protesters when requested or when safety is a concern</li>
                  <li>• Be sensitive to trauma and vulnerable populations</li>
                  <li>• Provide context for events, not just dramatic moments</li>
                  <li>• Avoid amplifying misinformation</li>
                </ul>
              </div>

              <div>
                <h4 className={`font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Fact-Checking Resources
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className={`${darkMode ? 'bg-white/5' : 'bg-white'} rounded-lg p-3`}>
                    <p className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Snopes</p>
                    <p className={`text-sm ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
                      Fact-checking database
                    </p>
                  </div>
                  <div className={`${darkMode ? 'bg-white/5' : 'bg-white'} rounded-lg p-3`}>
                    <p className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>FactCheck.org</p>
                    <p className={`text-sm ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
                      Political fact-checking
                    </p>
                  </div>
                  <div className={`${darkMode ? 'bg-white/5' : 'bg-white'} rounded-lg p-3`}>
                    <p className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Bellingcat</p>
                    <p className={`text-sm ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
                      Open source investigation tools
                    </p>
                  </div>
                  <div className={`${darkMode ? 'bg-white/5' : 'bg-white'} rounded-lg p-3`}>
                    <p className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>InVID</p>
                    <p className={`text-sm ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
                      Video verification tool
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  };

  const currentSection = toolkitSections[selectedSection];

  return (
    <div className={`${darkMode ? 'bg-slate-900' : 'bg-white'} rounded-xl shadow-xl`}>
      {/* Header with Export Button */}
      <div className={`p-6 border-b ${darkMode ? 'border-white/10' : 'border-slate-200'}`}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Journalist Toolkit
            </h2>
            <p className={`text-sm ${darkMode ? 'text-white/70' : 'text-slate-600'} mt-1`}>
              Essential resources for journalists covering civil rights and social justice
            </p>
          </div>
          <button
            onClick={exportToPDF}
            disabled={isExporting}
            className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
              darkMode 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            } ${isExporting ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isExporting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Generating...
              </>
            ) : (
              <>
                <Download className="h-4 w-4 mr-2" />
                Export PDF
              </>
            )}
          </button>
        </div>

        {/* Section Navigation */}
        <div className="flex flex-wrap gap-2">
          {Object.entries(toolkitSections).map(([key, section]) => {
            const Icon = section.icon;
            return (
              <button
                key={key}
                onClick={() => setSelectedSection(key)}
                className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                  selectedSection === key
                    ? darkMode
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-600 text-white'
                    : darkMode
                    ? 'bg-white/5 text-white/70 hover:bg-white/10'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <Icon className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">{section.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Content Area */}
      <div ref={contentRef} className="p-6">
        <div className="flex items-center mb-6">
          {React.createElement(currentSection.icon, { 
            className: `h-8 w-8 mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}` 
          })}
          <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            {currentSection.title}
          </h3>
        </div>
        
        {currentSection.content}
      </div>

      {/* Footer */}
      <div className={`p-6 border-t ${darkMode ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-slate-50'}`}>
        <p className={`text-xs ${darkMode ? 'text-white/50' : 'text-slate-500'} italic text-center`}>
          This toolkit is provided for educational purposes. Always consult with legal professionals and your news organization's policies.
          Stay safe and keep reporting the truth.
        </p>
      </div>
    </div>
  );
};

export default EnhancedJournalistToolkit;