import React, { useState } from 'react';
import { 
  Camera, 
  FileText, 
  Shield, 
  AlertTriangle, 
  BookOpen, 
  ChevronDown, 
  ChevronUp, 
  Download, 
  ExternalLink, 
  CheckCircle,
  Mic,
  Eye,
  Lock,
  Globe,
  Phone,
  Mail
} from 'lucide-react';

const JournalistToolkit = () => {
  const [expandedSections, setExpandedSections] = useState({
    'press-rights': true,
    'recording-laws': false,
    'source-protection': false,
    'digital-security': false,
    'legal-resources': false
  });
  
  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  
  const renderSection = (id, title, icon, content) => {
    const isExpanded = expandedSections[id];
    
    return (
      <div className="mb-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden shadow-lg">
        <button 
          onClick={() => toggleSection(id)}
          className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
        >
          <div className="flex items-center">
            {icon}
            <h3 className="text-xl font-semibold ml-3 text-white">{title}</h3>
          </div>
          {isExpanded ? 
            <ChevronUp className="h-5 w-5 text-white/70" /> : 
            <ChevronDown className="h-5 w-5 text-white/70" />
          }
        </button>
        
        {isExpanded && (
          <div className="p-5 pt-0 text-white/90 border-t border-white/10">
            {content}
          </div>
        )}
      </div>
    );
  };
  
  const pressRightsContent = (
    <div>
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-3 text-white">First Amendment Protections</h4>
        <div className="space-y-3">
          <div className="flex">
            <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
            <p>As a journalist, you have the right to gather news and information in public spaces.</p>
          </div>
          <div className="flex">
            <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
            <p>You have the right to photograph, record video, and audio in public places, including police and other officials performing their duties.</p>
          </div>
          <div className="flex">
            <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
            <p>You have the right to report on protests and demonstrations, even if they are declared unlawful assemblies.</p>
          </div>
          <div className="flex">
            <AlertTriangle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
            <p>These rights are not absolute. You may still be subject to generally applicable laws and cannot trespass on private property.</p>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-3 text-white">Press Credentials</h4>
        <p className="mb-4">
          While not legally required to exercise press freedoms, credentials can help identify you as a journalist to law enforcement and officials:
        </p>
        <ul className="space-y-2 list-disc pl-5">
          <li>Official press passes issued by government agencies or police departments</li>
          <li>Credentials from recognized news organizations</li>
          <li>Press association memberships (e.g., National Press Photographers Association, Society of Professional Journalists)</li>
          <li>Self-created press identification (less authoritative but better than nothing)</li>
        </ul>
        <div className="mt-4 bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
          <p className="text-sm">
            <strong>Note:</strong> The First Amendment protects your right to gather and report news regardless of whether you have credentials. However, credentials may provide practical advantages in certain situations.
          </p>
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-3 text-white">If Detained or Arrested</h4>
        <div className="space-y-3">
          <div className="flex">
            <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
            <p>Identify yourself as a journalist and show credentials if available.</p>
          </div>
          <div className="flex">
            <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
            <p>You have the right to remain silent beyond identifying yourself. State clearly: "I am a journalist. I want to speak to an attorney."</p>
          </div>
          <div className="flex">
            <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
            <p>You have the right to refuse consent to search your equipment, notes, or other materials. However, police may still conduct searches under certain circumstances.</p>
          </div>
          <div className="flex">
            <AlertTriangle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
            <p>Do not physically resist even if you believe your rights are being violated. Document the incident and consult with an attorney afterward.</p>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-3 text-white">Equipment Seizures</h4>
        <p className="mb-4">
          Law enforcement generally cannot confiscate or search your equipment without a warrant, with some exceptions:
        </p>
        <ul className="space-y-2 list-disc pl-5">
          <li>If officers have a warrant specifically for your equipment</li>
          <li>If they have probable cause to believe your equipment contains evidence of a crime and there is risk of its destruction (exigent circumstances)</li>
          <li>If you are being arrested and the equipment is on your person (search incident to arrest)</li>
        </ul>
        <div className="mt-4 bg-red-500/10 border border-red-500/30 rounded-lg p-4">
          <p className="text-sm">
            <strong>If equipment is seized:</strong> State clearly: "I do not consent to the search or seizure of my property." Ask for a receipt for any seized items. Contact an attorney immediately.
          </p>
        </div>
      </div>
      
      <div className="flex justify-between mt-6">
        <a 
          href="#" 
          className="inline-flex items-center text-blue-400 hover:text-blue-300"
          onClick={(e) => e.preventDefault()}
        >
          <Download className="h-4 w-4 mr-2" />
          Download Press Rights Guide
        </a>
        
        <a 
          href="https://www.rcfp.org/resources/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-400 hover:text-blue-300"
        >
          Reporters Committee Resources
          <ExternalLink className="h-4 w-4 ml-1" />
        </a>
      </div>
    </div>
  );
  
  const recordingLawsContent = (
    <div>
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-3 text-white">Audio Recording Consent Laws</h4>
        <p className="mb-4">
          States generally follow one of two approaches to recording conversations:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/5 rounded-lg p-4">
            <h5 className="font-medium mb-2 flex items-center">
              <Mic className="h-4 w-4 mr-2 text-green-400" />
              One-Party Consent States
            </h5>
            <p className="mb-2 text-sm">
              In these states, you can legally record a conversation if you are a party to it (i.e., you are participating).
            </p>
            <p className="text-xs text-white/70">
              Examples: New York, Texas, Colorado, Georgia, Louisiana, Nevada, Ohio, Washington D.C.
            </p>
          </div>
          
          <div className="bg-white/5 rounded-lg p-4">
            <h5 className="font-medium mb-2 flex items-center">
              <Mic className="h-4 w-4 mr-2 text-yellow-400" />
              All-Party Consent States
            </h5>
            <p className="mb-2 text-sm">
              In these states, all parties to a conversation must consent to being recorded.
            </p>
            <p className="text-xs text-white/70">
              Examples: California, Florida, Illinois, Maryland, Massachusetts, Montana, New Hampshire, Pennsylvania, Washington
            </p>
          </div>
        </div>
        <div className="mt-4 bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
          <p className="text-sm">
            <strong>Important:</strong> These laws generally apply to private conversations where there is a reasonable expectation of privacy. Public statements at events like protests typically do not carry an expectation of privacy.
          </p>
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-3 text-white">Video Recording in Public</h4>
        <div className="space-y-3">
          <div className="flex">
            <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
            <p>You generally have the right to record video in public spaces where you have the legal right to be present.</p>
          </div>
          <div className="flex">
            <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
            <p>This includes recording police and other public officials performing their duties.</p>
          </div>
          <div className="flex">
            <AlertTriangle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
            <p>Private property owners can restrict recording on their property.</p>
          </div>
          <div className="flex">
            <AlertTriangle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
            <p>Some government facilities (courts, military bases, etc.) may have specific restrictions on recording.</p>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-3 text-white">Special Considerations</h4>
        <ul className="space-y-2 list-disc pl-5">
          <li>Healthcare facilities: HIPAA privacy rules may restrict recording in medical settings</li>
          <li>Schools: FERPA protects student privacy and may limit recording</li>
          <li>Courthouses: Many courts prohibit recording in courtrooms or certain areas</li>
          <li>Polling places: Many states restrict recording inside voting locations</li>
          <li>Private businesses: Can set their own policies on recording</li>
        </ul>
      </div>
      
      <div className="flex justify-between mt-6">
        <a 
          href="#" 
          className="inline-flex items-center text-blue-400 hover:text-blue-300"
          onClick={(e) => e.preventDefault()}
        >
          <Download className="h-4 w-4 mr-2" />
          Download State-by-State Recording Guide
        </a>
        
        <a 
          href="https://www.dmlp.org/legal-guide/recording-phone-calls-and-conversations" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-400 hover:text-blue-300"
        >
          Digital Media Law Project Guide
          <ExternalLink className="h-4 w-4 ml-1" />
        </a>
      </div>
    </div>
  );
  
  const sourceProtectionContent = (
    <div>
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-3 text-white">Shield Laws</h4>
        <p className="mb-4">
          Shield laws protect journalists from being forced to disclose confidential sources or information. Coverage varies significantly by state:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/5 rounded-lg p-4">
            <h5 className="font-medium mb-2 flex items-center">
              <Shield className="h-4 w-4 mr-2 text-green-400" />
              Strong Shield Protections
            </h5>
            <p className="mb-2 text-sm">
              These states offer robust protection for journalists' sources and unpublished information.
            </p>
            <p className="text-xs text-white/70">
              Examples: California, Colorado, Illinois, New York, Oregon
            </p>
          </div>
          
          <div className="bg-white/5 rounded-lg p-4">
            <h5 className="font-medium mb-2 flex items-center">
              <Shield className="h-4 w-4 mr-2 text-yellow-400" />
              Limited Shield Protections
            </h5>
            <p className="mb-2 text-sm">
              These states offer some protection, but with significant exceptions or limitations.
            </p>
            <p className="text-xs text-white/70">
              Examples: Florida, Georgia, North Carolina, Texas, Utah
            </p>
          </div>
        </div>
        <div className="mt-4 bg-red-500/10 border border-red-500/30 rounded-lg p-4">
          <p className="text-sm">
            <strong>Important:</strong> There is no federal shield law. Wyoming and Hawaii have no shield law protections. Always consult with a media attorney about the specific protections in your jurisdiction.
          </p>
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-3 text-white">Best Practices for Source Protection</h4>
        <ul className="space-y-2 list-disc pl-5">
          <li>Be clear with sources about the level of confidentiality you can provide</li>
          <li>Understand the shield law protections in your jurisdiction before making promises</li>
          <li>Consider using secure communication methods for sensitive sources</li>
          <li>Be careful about notes, recordings, or metadata that could identify sources</li>
          <li>Consult with legal counsel before publishing information from confidential sources</li>
          <li>Have a plan in place if you receive a subpoena for source information</li>
        </ul>
      </div>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-3 text-white">If You Receive a Subpoena</h4>
        <div className="space-y-3">
          <div className="flex">
            <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
            <p>Do not ignore it. Subpoenas are court orders that carry legal weight.</p>
          </div>
          <div className="flex">
            <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
            <p>Contact legal counsel immediately. Many news organizations have attorneys on retainer, or contact the Reporters Committee for Freedom of the Press.</p>
          </div>
          <div className="flex">
            <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
            <p>Do not destroy or alter any documents or materials after receiving a subpoena, as this could constitute obstruction of justice.</p>
          </div>
          <div className="flex">
            <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
            <p>Work with your attorney to file a motion to quash the subpoena based on applicable shield laws.</p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between mt-6">
        <a 
          href="#" 
          className="inline-flex items-center text-blue-400 hover:text-blue-300"
          onClick={(e) => e.preventDefault()}
        >
          <Download className="h-4 w-4 mr-2" />
          Download Shield Law Guide
        </a>
        
        <a 
          href="https://www.rcfp.org/resources/reporters-privilege/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-400 hover:text-blue-300"
        >
          Reporter's Privilege Compendium
          <ExternalLink className="h-4 w-4 ml-1" />
        </a>
      </div>
    </div>
  );
  
  const digitalSecurityContent = (
    <div>
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-3 text-white">Secure Communications</h4>
        <p className="mb-4">
          Protecting your communications is essential for source confidentiality and information security:
        </p>
        <div className="space-y-4">
          <div className="bg-white/5 rounded-lg p-4">
            <h5 className="font-medium mb-2 flex items-center">
              <Lock className="h-4 w-4 mr-2 text-green-400" />
              Encrypted Messaging
            </h5>
            <ul className="space-y-2 list-disc pl-5 text-sm">
              <li><strong>Signal:</strong> End-to-end encrypted messaging with disappearing messages</li>
              <li><strong>ProtonMail:</strong> Encrypted email service with end-to-end encryption</li>
              <li><strong>Wire:</strong> Secure messaging with end-to-end encryption and minimal metadata</li>
              <li><strong>Jitsi Meet:</strong> Encrypted video conferencing alternative to Zoom</li>
            </ul>
          </div>
          
          <div className="bg-white/5 rounded-lg p-4">
            <h5 className="font-medium mb-2 flex items-center">
              <Globe className="h-4 w-4 mr-2 text-green-400" />
              Secure Browsing
            </h5>
            <ul className="space-y-2 list-disc pl-5 text-sm">
              <li><strong>Tor Browser:</strong> Routes traffic through multiple servers to anonymize browsing</li>
              <li><strong>VPN:</strong> Creates encrypted tunnel for internet traffic (choose reputable providers)</li>
              <li><strong>HTTPS Everywhere:</strong> Browser extension that enforces secure connections</li>
              <li><strong>Privacy Badger:</strong> Blocks invisible trackers</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-3 text-white">Device Security</h4>
        <ul className="space-y-2 list-disc pl-5">
          <li>Use strong, unique passwords for all accounts and devices</li>
          <li>Enable two-factor authentication whenever possible</li>
          <li>Keep all software and operating systems updated</li>
          <li>Use full-disk encryption on all devices</li>
          <li>Consider using a password manager like KeePassXC or Bitwarden</li>
          <li>Be cautious about public Wi-Fi networks; use a VPN when possible</li>
          <li>Regularly back up your data to encrypted storage</li>
        </ul>
      </div>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-3 text-white">Document Security</h4>
        <div className="space-y-3">
          <div className="flex">
            <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
            <p>Use encrypted cloud storage services like Tresorit or Cryptomator with standard services</p>
          </div>
          <div className="flex">
            <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
            <p>Consider using SecureDrop for receiving sensitive documents from sources</p>
          </div>
          <div className="flex">
            <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
            <p>Remove metadata from documents and images before publishing</p>
          </div>
          <div className="flex">
            <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
            <p>Use strong encryption for sensitive files with tools like VeraCrypt</p>
          </div>
        </div>
      </div>
      
      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mt-6">
        <h4 className="text-lg font-semibold mb-2 text-white flex items-center">
          <AlertTriangle className="h-5 w-5 mr-2 text-yellow-400" />
          Digital Security Limitations
        </h4>
        <p className="mb-2">
          Be aware of the limitations of digital security measures:
        </p>
        <ul className="space-y-1 list-disc pl-5 text-sm">
          <li>No security measure is 100% effective against sophisticated adversaries</li>
          <li>Legal processes may compel service providers to disclose information</li>
          <li>Security tools are only effective when used correctly and consistently</li>
          <li>Consider the "security vs. convenience" tradeoff for your specific situation</li>
        </ul>
      </div>
      
      <div className="flex justify-between mt-6">
        <a 
          href="#" 
          className="inline-flex items-center text-blue-400 hover:text-blue-300"
          onClick={(e) => e.preventDefault()}
        >
          <Download className="h-4 w-4 mr-2" />
          Download Digital Security Guide
        </a>
        
        <a 
          href="https://freedom.press/training/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-400 hover:text-blue-300"
        >
          Freedom of the Press Foundation Resources
          <ExternalLink className="h-4 w-4 ml-1" />
        </a>
      </div>
    </div>
  );
  
  const legalResourcesContent = (
    <div>
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-3 text-white">Legal Support Organizations</h4>
        <div className="space-y-4">
          <div className="bg-white/5 rounded-lg p-4">
            <h5 className="font-medium mb-2">Reporters Committee for Freedom of the Press</h5>
            <p className="text-sm text-white/80 mb-2">Provides free legal resources, assistance, and representation to journalists.</p>
            <div className="flex flex-col space-y-1 text-sm">
              <a 
                href="https://www.rcfp.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 inline-flex items-center"
              >
                <Globe className="h-3 w-3 mr-1" />
                rcfp.org
              </a>
              <span className="inline-flex items-center text-white/70">
                <Phone className="h-3 w-3 mr-1" />
                Hotline: 1-800-336-4243
              </span>
              <a 
                href="mailto:hotline@rcfp.org" 
                className="text-blue-400 hover:text-blue-300 inline-flex items-center"
              >
                <Mail className="h-3 w-3 mr-1" />
                hotline@rcfp.org
              </a>
            </div>
          </div>
          
          <div className="bg-white/5 rounded-lg p-4">
            <h5 className="font-medium mb-2">Committee to Protect Journalists</h5>
            <p className="text-sm text-white/80 mb-2">Promotes press freedom worldwide and defends journalists' rights.</p>
            <div className="flex flex-col space-y-1 text-sm">
              <a 
                href="https://cpj.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 inline-flex items-center"
              >
                <Globe className="h-3 w-3 mr-1" />
                cpj.org
              </a>
              <span className="inline-flex items-center text-white/70">
                <Phone className="h-3 w-3 mr-1" />
                +1-212-465-1004
              </span>
              <a 
                href="mailto:report_violations@cpj.org" 
                className="text-blue-400 hover:text-blue-300 inline-flex items-center"
              >
                <Mail className="h-3 w-3 mr-1" />
                report_violations@cpj.org
              </a>
            </div>
          </div>
          
          <div className="bg-white/5 rounded-lg p-4">
            <h5 className="font-medium mb-2">Freedom of the Press Foundation</h5>
            <p className="text-sm text-white/80 mb-2">Protects and defends public-interest journalism with a focus on digital security.</p>
            <div className="flex flex-col space-y-1 text-sm">
              <a 
                href="https://freedom.press/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 inline-flex items-center"
              >
                <Globe className="h-3 w-3 mr-1" />
                freedom.press
              </a>
              <a 
                href="mailto:info@freedom.press" 
                className="text-blue-400 hover:text-blue-300 inline-flex items-center"
              >
                <Mail className="h-3 w-3 mr-1" />
                info@freedom.press
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-3 text-white">Legal Guides & Resources</h4>
        <ul className="space-y-3">
          <li>
            <a 
              href="https://www.rcfp.org/reporters-recording-guide/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 inline-flex items-center"
            >
              RCFP Recording Guide
              <ExternalLink className="h-3 w-3 ml-1" />
            </a>
            <p className="text-sm text-white/70 mt-1">State-by-state guide to recording laws</p>
          </li>
          <li>
            <a 
              href="https://www.rcfp.org/open-government-guide/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 inline-flex items-center"
            >
              Open Government Guide
              <ExternalLink className="h-3 w-3 ml-1" />
            </a>
            <p className="text-sm text-white/70 mt-1">Access to government records and meetings</p>
          </li>
          <li>
            <a 
              href="https://www.dmlp.org/legal-guide" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 inline-flex items-center"
            >
              Digital Media Law Project Legal Guide
              <ExternalLink className="h-3 w-3 ml-1" />
            </a>
            <p className="text-sm text-white/70 mt-1">Comprehensive legal guide for online publishers</p>
          </li>
          <li>
            <a 
              href="https://www.spj.org/ethics-papers.asp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 inline-flex items-center"
            >
              SPJ Ethics Resources
              <ExternalLink className="h-3 w-3 ml-1" />
            </a>
            <p className="text-sm text-white/70 mt-1">Ethical guidelines and case studies</p>
          </li>
        </ul>
      </div>
      
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mt-6">
        <h4 className="text-lg font-semibold mb-2 text-white flex items-center">
          <Eye className="h-5 w-5 mr-2 text-blue-400" />
          What to Do If You Witness Press Freedom Violations
        </h4>
        <ol className="space-y-2 list-decimal pl-5">
          <li>Document the incident with as much detail as possible (names, badge numbers, time, location)</li>
          <li>Gather contact information from witnesses</li>
          <li>Preserve any photo or video evidence</li>
          <li>Report the incident to press freedom organizations</li>
          <li>Consider filing a police report if appropriate</li>
          <li>Consult with a media attorney about potential legal action</li>
        </ol>
      </div>
      
      <div className="flex justify-between mt-6">
        <a 
          href="#" 
          className="inline-flex items-center text-blue-400 hover:text-blue-300"
          onClick={(e) => e.preventDefault()}
        >
          <Download className="h-4 w-4 mr-2" />
          Download Legal Resources Guide
        </a>
        
        <a 
          href="https://www.rcfp.org/legal-hotline/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-400 hover:text-blue-300"
        >
          RCFP Legal Hotline
          <ExternalLink className="h-4 w-4 ml-1" />
        </a>
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 rounded-xl p-6 shadow-xl border border-white/20">
      <div className="mb-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-2">
          Journalist Legal Toolkit
        </h2>
        <p className="text-white/70">
          Essential legal resources for journalists covering civil rights, protests, and sensitive topics
        </p>
      </div>
      
      <div className="space-y-6">
        {renderSection(
          'press-rights',
          'Press Freedom & First Amendment Rights',
          <Shield className="h-6 w-6 text-blue-400" />,
          pressRightsContent
        )}
        
        {renderSection(
          'recording-laws',
          'Recording & Consent Laws',
          <Camera className="h-6 w-6 text-purple-400" />,
          recordingLawsContent
        )}
        
        {renderSection(
          'source-protection',
          'Source Protection & Shield Laws',
          <FileText className="h-6 w-6 text-green-400" />,
          sourceProtectionContent
        )}
        
        {renderSection(
          'digital-security',
          'Digital Security for Journalists',
          <Lock className="h-6 w-6 text-red-400" />,
          digitalSecurityContent
        )}
        
        {renderSection(
          'legal-resources',
          'Legal Resources & Support',
          <BookOpen className="h-6 w-6 text-yellow-400" />,
          legalResourcesContent
        )}
      </div>
      
      <div className="mt-8 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
        <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
          <AlertTriangle className="h-5 w-5 mr-2 text-blue-400" />
          Disclaimer
        </h3>
        <p className="text-white/70 text-sm">
          This information is provided for educational purposes only and does not constitute legal advice. 
          Laws vary by jurisdiction and change over time. Always consult with a qualified media attorney for 
          advice specific to your situation and location.
        </p>
      </div>
    </div>
  );
};

export default JournalistToolkit;