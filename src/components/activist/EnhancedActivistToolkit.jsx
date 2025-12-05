import React, { useState, useRef } from 'react';
import { 
  Shield, 
  AlertTriangle, 
  Camera, 
  Users, 
  FileText, 
  Download, 
  Phone,
  MapPin,
  Lock,
  Megaphone,
  BookOpen,
  Heart,
  DollarSign,
  Share2,
  Printer,
  CheckCircle
} from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const EnhancedActivistToolkit = ({ darkMode = true }) => {
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
      pdf.save('activist-toolkit.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  const toolkitSections = {
    overview: {
      title: 'Activist Toolkit Overview',
      icon: Shield,
      content: (
        <div className="space-y-6">
          <div className={`${darkMode ? 'bg-blue-500/10' : 'bg-blue-50'} border ${darkMode ? 'border-blue-500/20' : 'border-blue-200'} rounded-lg p-6`}>
            <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Welcome to the Activist Toolkit
            </h3>
            <p className={`${darkMode ? 'text-white/80' : 'text-slate-700'} mb-4`}>
              This comprehensive toolkit provides essential resources, guides, and information for civil rights activists, 
              community organizers, and advocates working to protect and advance civil liberties.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={`${darkMode ? 'bg-white/5' : 'bg-white'} rounded-lg p-4`}>
                <h4 className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>What's Included</h4>
                <ul className={`space-y-1 text-sm ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
                  <li>• Know Your Rights guides</li>
                  <li>• Protest planning and safety</li>
                  <li>• Legal resources and contacts</li>
                  <li>• Digital security tools</li>
                  <li>• Community organizing strategies</li>
                  <li>• Media relations templates</li>
                </ul>
              </div>
              <div className={`${darkMode ? 'bg-white/5' : 'bg-white'} rounded-lg p-4`}>
                <h4 className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>How to Use</h4>
                <ul className={`space-y-1 text-sm ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
                  <li>• Browse sections using the menu</li>
                  <li>• Download resources as PDF</li>
                  <li>• Share with your community</li>
                  <li>• Print for offline reference</li>
                  <li>• Bookmark important sections</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    rights: {
      title: 'Know Your Rights',
      icon: Scale,
      content: (
        <div className="space-y-6">
          <div className={`${darkMode ? 'bg-white/5' : 'bg-slate-50'} rounded-lg p-6 border ${darkMode ? 'border-white/10' : 'border-slate-200'}`}>
            <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Constitutional Rights
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className={`font-bold mb-2 flex items-center ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  <CheckCircle className="h-5 w-5 mr-2" />
                  First Amendment Rights
                </h4>
                <ul className={`space-y-2 ml-7 ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
                  <li><strong>Freedom of Speech:</strong> You have the right to express your opinions, including criticism of the government, without fear of retaliation.</li>
                  <li><strong>Freedom of Assembly:</strong> You can gather peacefully with others for protests, demonstrations, and meetings.</li>
                  <li><strong>Freedom of the Press:</strong> You can document events, share information, and publish your views.</li>
                  <li><strong>Right to Petition:</strong> You can petition the government for redress of grievances.</li>
                </ul>
              </div>

              <div>
                <h4 className={`font-bold mb-2 flex items-center ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Fourth Amendment Rights
                </h4>
                <ul className={`space-y-2 ml-7 ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
                  <li><strong>Protection from Unreasonable Search:</strong> Police need a warrant or probable cause to search you or your property.</li>
                  <li><strong>Right to Privacy:</strong> Your personal belongings, phone, and home are protected from arbitrary searches.</li>
                  <li><strong>Consent to Search:</strong> You can refuse consent to a search if police don't have a warrant.</li>
                </ul>
              </div>

              <div>
                <h4 className={`font-bold mb-2 flex items-center ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Fifth Amendment Rights
                </h4>
                <ul className={`space-y-2 ml-7 ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
                  <li><strong>Right to Remain Silent:</strong> You don't have to answer questions from law enforcement.</li>
                  <li><strong>Protection from Self-Incrimination:</strong> You cannot be forced to testify against yourself.</li>
                  <li><strong>Due Process:</strong> You have the right to fair legal proceedings.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={`${darkMode ? 'bg-red-500/10' : 'bg-red-50'} border ${darkMode ? 'border-red-500/20' : 'border-red-200'} rounded-lg p-6`}>
            <h4 className={`font-bold mb-3 flex items-center ${darkMode ? 'text-red-400' : 'text-red-600'}`}>
              <AlertTriangle className="h-5 w-5 mr-2" />
              Important: What to Say to Police
            </h4>
            <div className={`space-y-2 ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
              <p><strong>"Am I free to go?"</strong> - Ask this to determine if you're being detained.</p>
              <p><strong>"I do not consent to a search."</strong> - Clearly state you don't consent to searches.</p>
              <p><strong>"I am exercising my right to remain silent."</strong> - Invoke your Fifth Amendment rights.</p>
              <p><strong>"I want to speak to a lawyer."</strong> - Request legal representation immediately.</p>
            </div>
          </div>
        </div>
      )
    },

    protest: {
      title: 'Protest Planning & Safety',
      icon: Megaphone,
      content: (
        <div className="space-y-6">
          <div className={`${darkMode ? 'bg-white/5' : 'bg-slate-50'} rounded-lg p-6 border ${darkMode ? 'border-white/10' : 'border-slate-200'}`}>
            <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Before the Protest
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className={`font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Essential Preparation
                </h4>
                <ul className={`space-y-2 ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
                  <li>✓ Research local protest laws and permit requirements</li>
                  <li>✓ Know the protest route and meeting points</li>
                  <li>✓ Identify legal observers and medical support</li>
                  <li>✓ Establish communication plans with your group</li>
                  <li>✓ Prepare emergency contacts and legal hotline numbers</li>
                  <li>✓ Plan transportation and exit strategies</li>
                </ul>
              </div>

              <div>
                <h4 className={`font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  What to Bring
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Essential Items:</p>
                    <ul className={`space-y-1 text-sm ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
                      <li>• Government-issued ID</li>
                      <li>• Emergency contact information</li>
                      <li>• Cash (not credit cards)</li>
                      <li>• Water and snacks</li>
                      <li>• Face covering/mask</li>
                      <li>• Comfortable shoes</li>
                      <li>• Weather-appropriate clothing</li>
                    </ul>
                  </div>
                  <div>
                    <p className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Optional Items:</p>
                    <ul className={`space-y-1 text-sm ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
                      <li>• Portable phone charger</li>
                      <li>• First aid supplies</li>
                      <li>• Sharpie marker</li>
                      <li>• Notebook and pen</li>
                      <li>• Sunscreen and sunglasses</li>
                      <li>• Protest signs</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className={`font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  What NOT to Bring
                </h4>
                <ul className={`space-y-1 ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
                  <li>✗ Weapons of any kind</li>
                  <li>✗ Illegal substances</li>
                  <li>✗ Valuable items you can't afford to lose</li>
                  <li>✗ Items that could be used as weapons (even unintentionally)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={`${darkMode ? 'bg-white/5' : 'bg-slate-50'} rounded-lg p-6 border ${darkMode ? 'border-white/10' : 'border-slate-200'}`}>
            <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              During the Protest
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className={`font-bold mb-2 ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                  Safety Guidelines
                </h4>
                <ul className={`space-y-2 ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
                  <li>• Stay with your group and use the buddy system</li>
                  <li>• Follow directions from protest organizers</li>
                  <li>• Stay hydrated and take breaks as needed</li>
                  <li>• Be aware of your surroundings at all times</li>
                  <li>• Document police interactions when safe to do so</li>
                  <li>• Know your exit routes and rally points</li>
                  <li>• Avoid confrontations and de-escalate tensions</li>
                </ul>
              </div>

              <div>
                <h4 className={`font-bold mb-2 ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>
                  If Police Approach
                </h4>
                <ul className={`space-y-2 ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
                  <li>• Stay calm and don't run</li>
                  <li>• Keep your hands visible</li>
                  <li>• Ask "Am I free to go?" or "Am I being detained?"</li>
                  <li>• You have the right to remain silent</li>
                  <li>• You can refuse consent to a search</li>
                  <li>• Ask for a lawyer if arrested</li>
                  <li>• Document badge numbers and names if possible</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={`${darkMode ? 'bg-red-500/10' : 'bg-red-50'} border ${darkMode ? 'border-red-500/20' : 'border-red-200'} rounded-lg p-6`}>
            <h4 className={`font-bold mb-3 flex items-center ${darkMode ? 'text-red-400' : 'text-red-600'}`}>
              <AlertTriangle className="h-5 w-5 mr-2" />
              Emergency Contacts
            </h4>
            <div className={`space-y-2 ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
              <p><strong>National Lawyers Guild Legal Hotline:</strong> (212) 679-6018</p>
              <p><strong>ACLU:</strong> Check your local chapter for protest support</p>
              <p><strong>Emergency Services:</strong> 911 (for medical emergencies)</p>
              <p className="text-sm italic mt-4">
                Write these numbers on your arm with a permanent marker before the protest.
              </p>
            </div>
          </div>
        </div>
      )
    },

    digital: {
      title: 'Digital Security',
      icon: Lock,
      content: (
        <div className="space-y-6">
          <div className={`${darkMode ? 'bg-white/5' : 'bg-slate-50'} rounded-lg p-6 border ${darkMode ? 'border-white/10' : 'border-slate-200'}`}>
            <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Protecting Your Digital Privacy
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className={`font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Phone Security
                </h4>
                <ul className={`space-y-2 ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
                  <li>• Use a strong passcode (not fingerprint/face unlock at protests)</li>
                  <li>• Enable full-disk encryption on your device</li>
                  <li>• Turn off location services and Bluetooth</li>
                  <li>• Disable biometric unlocking before protests</li>
                  <li>• Use airplane mode when not actively communicating</li>
                  <li>• Consider using a burner phone for sensitive activities</li>
                </ul>
              </div>

              <div>
                <h4 className={`font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Communication Security
                </h4>
                <ul className={`space-y-2 ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
                  <li>• Use encrypted messaging apps (Signal, WhatsApp)</li>
                  <li>• Enable disappearing messages for sensitive conversations</li>
                  <li>• Verify contacts' identities before sharing sensitive info</li>
                  <li>• Avoid discussing sensitive plans on social media</li>
                  <li>• Use VPN when connecting to public WiFi</li>
                  <li>• Be cautious about what you post online</li>
                </ul>
              </div>

              <div>
                <h4 className={`font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Social Media Safety
                </h4>
                <ul className={`space-y-2 ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
                  <li>• Review and adjust privacy settings regularly</li>
                  <li>• Don't tag others in protest photos without permission</li>
                  <li>• Blur faces in photos before posting</li>
                  <li>• Remove metadata from photos (location, time)</li>
                  <li>• Be aware that anything posted can be used against you</li>
                  <li>• Consider using a separate account for activism</li>
                </ul>
              </div>

              <div>
                <h4 className={`font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Recommended Tools
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className={`${darkMode ? 'bg-white/5' : 'bg-white'} rounded-lg p-3`}>
                    <p className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Signal</p>
                    <p className={`text-sm ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
                      End-to-end encrypted messaging
                    </p>
                  </div>
                  <div className={`${darkMode ? 'bg-white/5' : 'bg-white'} rounded-lg p-3`}>
                    <p className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>ProtonVPN</p>
                    <p className={`text-sm ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
                      Secure VPN service
                    </p>
                  </div>
                  <div className={`${darkMode ? 'bg-white/5' : 'bg-white'} rounded-lg p-3`}>
                    <p className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Tor Browser</p>
                    <p className={`text-sm ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
                      Anonymous web browsing
                    </p>
                  </div>
                  <div className={`${darkMode ? 'bg-white/5' : 'bg-white'} rounded-lg p-3`}>
                    <p className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>VeraCrypt</p>
                    <p className={`text-sm ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
                      File encryption software
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    organizing: {
      title: 'Community Organizing',
      icon: Users,
      content: (
        <div className="space-y-6">
          <div className={`${darkMode ? 'bg-white/5' : 'bg-slate-50'} rounded-lg p-6 border ${darkMode ? 'border-white/10' : 'border-slate-200'}`}>
            <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Building Effective Movements
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className={`font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Getting Started
                </h4>
                <ul className={`space-y-2 ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
                  <li>• Identify your issue and goals clearly</li>
                  <li>• Research existing organizations and coalitions</li>
                  <li>• Build relationships with community members</li>
                  <li>• Start small with achievable objectives</li>
                  <li>• Document everything for accountability</li>
                </ul>
              </div>

              <div>
                <h4 className={`font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Coalition Building
                </h4>
                <ul className={`space-y-2 ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
                  <li>• Find allies with shared values and goals</li>
                  <li>• Respect diverse perspectives and approaches</li>
                  <li>• Establish clear communication channels</li>
                  <li>• Share resources and support each other</li>
                  <li>• Celebrate wins together</li>
                </ul>
              </div>

              <div>
                <h4 className={`font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Effective Tactics
                </h4>
                <ul className={`space-y-2 ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
                  <li>• Direct action and protests</li>
                  <li>• Letter-writing and petition campaigns</li>
                  <li>• Town halls and community meetings</li>
                  <li>• Social media campaigns</li>
                  <li>• Voter registration drives</li>
                  <li>• Boycotts and economic pressure</li>
                  <li>• Legal advocacy and litigation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },

    media: {
      title: 'Media Relations',
      icon: Camera,
      content: (
        <div className="space-y-6">
          <div className={`${darkMode ? 'bg-white/5' : 'bg-slate-50'} rounded-lg p-6 border ${darkMode ? 'border-white/10' : 'border-slate-200'}`}>
            <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Working with the Media
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className={`font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Press Release Template
                </h4>
                <div className={`${darkMode ? 'bg-white/5' : 'bg-white'} rounded-lg p-4 font-mono text-sm ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
                  <p>FOR IMMEDIATE RELEASE</p>
                  <p className="mt-2">[Date]</p>
                  <p className="mt-2">Contact: [Name]</p>
                  <p>[Phone]</p>
                  <p>[Email]</p>
                  <p className="mt-4 font-bold">[HEADLINE IN ALL CAPS]</p>
                  <p className="mt-2">[City, State] – [Opening paragraph with who, what, when, where, why]</p>
                  <p className="mt-2">[Quote from spokesperson]</p>
                  <p className="mt-2">[Additional details and context]</p>
                  <p className="mt-2">[Boilerplate about your organization]</p>
                  <p className="mt-4">###</p>
                </div>
              </div>

              <div>
                <h4 className={`font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Media Interview Tips
                </h4>
                <ul className={`space-y-2 ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
                  <li>• Prepare 2-3 key messages in advance</li>
                  <li>• Practice your talking points</li>
                  <li>• Stay on message and don't get sidetracked</li>
                  <li>• Speak in sound bites (10-15 seconds)</li>
                  <li>• Be authentic and passionate</li>
                  <li>• It's okay to say "I don't know" and follow up</li>
                  <li>• Never say "no comment" - bridge to your message</li>
                </ul>
              </div>

              <div>
                <h4 className={`font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Social Media Strategy
                </h4>
                <ul className={`space-y-2 ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
                  <li>• Create a consistent hashtag for your campaign</li>
                  <li>• Post regularly and engage with followers</li>
                  <li>• Share compelling visuals and stories</li>
                  <li>• Tag relevant organizations and influencers</li>
                  <li>• Respond to comments and messages promptly</li>
                  <li>• Track metrics to see what resonates</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },

    funding: {
      title: 'Fundraising & Resources',
      icon: DollarSign,
      content: (
        <div className="space-y-6">
          <div className={`${darkMode ? 'bg-white/5' : 'bg-slate-50'} rounded-lg p-6 border ${darkMode ? 'border-white/10' : 'border-slate-200'}`}>
            <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Funding Your Activism
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className={`font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Fundraising Strategies
                </h4>
                <ul className={`space-y-2 ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
                  <li>• Online crowdfunding (GoFundMe, ActBlue)</li>
                  <li>• Individual donor cultivation</li>
                  <li>• Grant applications to foundations</li>
                  <li>• Fundraising events and benefits</li>
                  <li>• Membership programs</li>
                  <li>• Corporate sponsorships (carefully vetted)</li>
                </ul>
              </div>

              <div>
                <h4 className={`font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Grant Resources
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className={`${darkMode ? 'bg-white/5' : 'bg-white'} rounded-lg p-3`}>
                    <p className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Foundation Center</p>
                    <p className={`text-sm ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
                      Database of grant opportunities
                    </p>
                  </div>
                  <div className={`${darkMode ? 'bg-white/5' : 'bg-white'} rounded-lg p-3`}>
                    <p className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Candid</p>
                    <p className={`text-sm ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
                      Nonprofit resources and funding info
                    </p>
                  </div>
                  <div className={`${darkMode ? 'bg-white/5' : 'bg-white'} rounded-lg p-3`}>
                    <p className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Grants.gov</p>
                    <p className={`text-sm ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
                      Federal grant opportunities
                    </p>
                  </div>
                  <div className={`${darkMode ? 'bg-white/5' : 'bg-white'} rounded-lg p-3`}>
                    <p className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Local Community Foundations</p>
                    <p className={`text-sm ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
                      Regional funding sources
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
              Activist Toolkit
            </h2>
            <p className={`text-sm ${darkMode ? 'text-white/70' : 'text-slate-600'} mt-1`}>
              Comprehensive resources for civil rights activists and organizers
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
          This toolkit is provided for educational purposes. Always consult with legal professionals for specific advice.
          Stay safe, know your rights, and keep fighting for justice.
        </p>
      </div>
    </div>
  );
};

export default EnhancedActivistToolkit;