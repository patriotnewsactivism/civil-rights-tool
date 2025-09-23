import React, { useState } from 'react';
import { 
  AlertTriangle, 
  FileText, 
  Camera, 
  Phone, 
  Shield, 
  Megaphone, 
  Users, 
  BookOpen,
  ChevronDown,
  ChevronUp,
  Download,
  Printer,
  ExternalLink,
  CheckCircle
} from 'lucide-react';

const ActivistToolkit = () => {
  const [expandedSections, setExpandedSections] = useState({
    'know-your-rights': true,
    'protest-planning': false,
    'legal-observers': false,
    'recording-police': false,
    'bail-resources': false
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
  
  const knowYourRightsContent = (
    <div>
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-3 text-white">First Amendment Rights</h4>
        <div className="space-y-3">
          <div className="flex">
            <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
            <p>You have the right to peacefully assemble and protest in public forums such as streets, sidewalks, and parks.</p>
          </div>
          <div className="flex">
            <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
            <p>You have the right to photograph or record anything in plain view when in public spaces, including police officers performing their duties.</p>
          </div>
          <div className="flex">
            <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
            <p>You have the right to speak out and express your views, even if they are critical of the government or police.</p>
          </div>
          <div className="flex">
            <AlertTriangle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
            <p>Restrictions may apply if your actions block traffic or access to buildings, or if you do not have permits for certain activities.</p>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-3 text-white">If Stopped by Police</h4>
        <div className="space-y-3">
          <div className="flex">
            <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
            <p>You have the right to remain silent. You can say "I am exercising my right to remain silent" and "I want to speak to a lawyer."</p>
          </div>
          <div className="flex">
            <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
            <p>You have the right to refuse consent to a search of yourself or your belongings. However, police may pat down your clothing if they suspect you have a weapon.</p>
          </div>
          <div className="flex">
            <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
            <p>If not under arrest, you have the right to calmly leave. Ask "Am I free to go?" If yes, you may leave calmly.</p>
          </div>
          <div className="flex">
            <AlertTriangle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
            <p>Do not physically resist arrest, even if you believe the arrest is unfair. Resistance can lead to additional charges.</p>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-3 text-white">If Arrested</h4>
        <div className="space-y-3">
          <div className="flex">
            <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
            <p>You have the right to a lawyer. If you cannot afford one, one will be appointed for you.</p>
          </div>
          <div className="flex">
            <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
            <p>You have the right to make a local phone call. The police cannot listen if you call a lawyer.</p>
          </div>
          <div className="flex">
            <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
            <p>You have the right to appear before a judge within a reasonable time after arrest for a hearing where bail can be set.</p>
          </div>
          <div className="flex">
            <AlertTriangle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
            <p>Do not discuss your case with anyone but your lawyer. Calls from jail are typically recorded.</p>
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
          Download Know Your Rights Card
        </a>
        
        <a 
          href="https://www.aclu.org/know-your-rights/protesters-rights" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-400 hover:text-blue-300"
        >
          ACLU Rights Guide
          <ExternalLink className="h-4 w-4 ml-1" />
        </a>
      </div>
    </div>
  );
  
  const protestPlanningContent = (
    <div>
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-3 text-white">Before the Protest</h4>
        <ul className="space-y-2 list-disc pl-5">
          <li>Research local permit requirements and obtain necessary permits</li>
          <li>Establish clear goals and messaging for your protest</li>
          <li>Create a safety plan including emergency contacts and meeting points</li>
          <li>Designate marshals/organizers who can help coordinate and de-escalate situations</li>
          <li>Notify participants about what to bring (water, snacks, ID) and what to leave at home</li>
          <li>Consider liability issues and obtain event insurance if possible</li>
        </ul>
      </div>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-3 text-white">During the Protest</h4>
        <ul className="space-y-2 list-disc pl-5">
          <li>Stay with the main group and follow directions from designated organizers</li>
          <li>Document police interactions but be aware of privacy concerns for other protesters</li>
          <li>Know the planned route and alternative routes if needed</li>
          <li>Be aware of legal observers and how to contact them if needed</li>
          <li>Have a buddy system to ensure no one is left alone</li>
        </ul>
      </div>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-3 text-white">After the Protest</h4>
        <ul className="space-y-2 list-disc pl-5">
          <li>Document any injuries or rights violations</li>
          <li>Contact legal support if you or others were arrested</li>
          <li>Debrief with organizers to discuss what went well and what could be improved</li>
          <li>Follow up with media contacts about coverage</li>
          <li>Take care of your physical and mental health</li>
        </ul>
      </div>
      
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mt-6">
        <h4 className="text-lg font-semibold mb-2 text-white flex items-center">
          <AlertTriangle className="h-5 w-5 mr-2 text-blue-400" />
          Legal Considerations
        </h4>
        <p className="mb-2">
          Laws regarding protests vary significantly by location. Some jurisdictions have specific restrictions on:
        </p>
        <ul className="space-y-1 list-disc pl-5">
          <li>Noise levels and amplified sound</li>
          <li>Blocking sidewalks or streets</li>
          <li>Protest timing and duration</li>
          <li>Use of signs, banners, and props</li>
          <li>Counter-protests and proximity to other events</li>
        </ul>
        <p className="mt-2">
          Always research local ordinances before planning a protest.
        </p>
      </div>
      
      <div className="flex justify-between mt-6">
        <a 
          href="#" 
          className="inline-flex items-center text-blue-400 hover:text-blue-300"
          onClick={(e) => e.preventDefault()}
        >
          <Download className="h-4 w-4 mr-2" />
          Download Protest Planning Guide
        </a>
        
        <a 
          href="#" 
          className="inline-flex items-center text-blue-400 hover:text-blue-300"
          onClick={(e) => e.preventDefault()}
        >
          <Printer className="h-4 w-4 mr-2" />
          Print Checklist
        </a>
      </div>
    </div>
  );
  
  const legalObserversContent = (
    <div>
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-3 text-white">What Legal Observers Do</h4>
        <p className="mb-4">
          Legal observers are trained volunteers who document police conduct and potential rights violations during protests and demonstrations. They serve as neutral witnesses and collect information that may be used in subsequent legal proceedings.
        </p>
        <ul className="space-y-2 list-disc pl-5">
          <li>Document police actions, including arrests, use of force, and crowd control tactics</li>
          <li>Take detailed notes with times, badge numbers, and specific actions</li>
          <li>Photograph or video record public police activity when safe and legal to do so</li>
          <li>Collect contact information from witnesses</li>
          <li>Remain neutral and do not participate in the protest itself</li>
        </ul>
      </div>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-3 text-white">How to Request Legal Observers</h4>
        <p className="mb-2">
          Several organizations train and coordinate legal observers for protests:
        </p>
        <ul className="space-y-4 mt-4">
          <li className="bg-white/5 rounded-lg p-3">
            <span className="font-medium block">National Lawyers Guild</span>
            <p className="text-sm text-white/80 mb-1">The NLG maintains legal observer programs in many cities across the US.</p>
            <a 
              href="https://www.nlg.org/legalobservers/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm inline-flex items-center"
            >
              Request observers
              <ExternalLink className="h-3 w-3 ml-1" />
            </a>
          </li>
          <li className="bg-white/5 rounded-lg p-3">
            <span className="font-medium block">ACLU</span>
            <p className="text-sm text-white/80 mb-1">Some ACLU chapters provide legal observers for significant protests.</p>
            <a 
              href="https://www.aclu.org/about/affiliates" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm inline-flex items-center"
            >
              Find local chapter
              <ExternalLink className="h-3 w-3 ml-1" />
            </a>
          </li>
          <li className="bg-white/5 rounded-lg p-3">
            <span className="font-medium block">Law Schools</span>
            <p className="text-sm text-white/80 mb-1">Some law schools have legal observer programs through their clinical programs.</p>
            <p className="text-sm text-white/60">Contact local law schools for information</p>
          </li>
        </ul>
      </div>
      
      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mt-6">
        <h4 className="text-lg font-semibold mb-2 text-white flex items-center">
          <AlertTriangle className="h-5 w-5 mr-2 text-yellow-400" />
          Important Note
        </h4>
        <p>
          Request legal observers well in advance of your event (at least 1-2 weeks if possible). Provide details about the nature of the protest, expected attendance, location, and duration to help observers prepare adequately.
        </p>
      </div>
      
      <div className="flex justify-between mt-6">
        <a 
          href="#" 
          className="inline-flex items-center text-blue-400 hover:text-blue-300"
          onClick={(e) => e.preventDefault()}
        >
          <Download className="h-4 w-4 mr-2" />
          Download Legal Observer Guide
        </a>
        
        <a 
          href="https://www.nlg.org/legalobservers/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-400 hover:text-blue-300"
        >
          NLG Legal Observer Program
          <ExternalLink className="h-4 w-4 ml-1" />
        </a>
      </div>
    </div>
  );
  
  const recordingPoliceContent = (
    <div>
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-3 text-white">Your Right to Record</h4>
        <p className="mb-4">
          You have a First Amendment right to record police officers performing official duties in public spaces. This right applies to photography, video recording, and audio recording in most circumstances.
        </p>
        <div className="space-y-3">
          <div className="flex">
            <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
            <p>You can record police in public spaces where you have the right to be present</p>
          </div>
          <div className="flex">
            <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
            <p>You do not need officer consent to record them performing official duties</p>
          </div>
          <div className="flex">
            <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
            <p>Police cannot delete your footage or confiscate your device without a warrant</p>
          </div>
          <div className="flex">
            <AlertTriangle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
            <p>You cannot interfere with police activities while recording</p>
          </div>
          <div className="flex">
            <AlertTriangle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
            <p>Private property owners may restrict recording on their property</p>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-3 text-white">Best Practices for Recording</h4>
        <ul className="space-y-2 list-disc pl-5">
          <li>Maintain a safe distance that doesn't interfere with police activities</li>
          <li>Announce that you are recording if directly questioned by police</li>
          <li>Be aware of your surroundings and potential dangers</li>
          <li>Consider using apps that automatically upload footage to the cloud</li>
          <li>Record continuously rather than starting and stopping</li>
          <li>Include visual landmarks and timestamps when possible</li>
          <li>If possible, have someone else record you while you're interacting with police</li>
        </ul>
      </div>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-3 text-white">Recommended Recording Apps</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/5 rounded-lg p-3">
            <span className="font-medium block">ACLU Mobile Justice</span>
            <p className="text-sm text-white/80 mb-1">Records and automatically uploads to ACLU servers</p>
            <a 
              href="https://www.aclu.org/issues/criminal-law-reform/reforming-police/aclu-apps-record-police-conduct" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm inline-flex items-center"
            >
              Download app
              <ExternalLink className="h-3 w-3 ml-1" />
            </a>
          </div>
          <div className="bg-white/5 rounded-lg p-3">
            <span className="font-medium block">Cop Watch Video Recorder</span>
            <p className="text-sm text-white/80 mb-1">Discreet recording with cloud backup</p>
            <a 
              href="#" 
              className="text-blue-400 hover:text-blue-300 text-sm inline-flex items-center"
              onClick={(e) => e.preventDefault()}
            >
              Download app
              <ExternalLink className="h-3 w-3 ml-1" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mt-6">
        <h4 className="text-lg font-semibold mb-2 text-white flex items-center">
          <AlertTriangle className="h-5 w-5 mr-2 text-red-400" />
          If Police Order You to Stop Recording
        </h4>
        <ul className="space-y-2 list-disc pl-5">
          <li>Calmly state that you have the right to record</li>
          <li>Do not resist if they attempt to take your device</li>
          <li>State clearly: "I do not consent to the search or seizure of my property"</li>
          <li>Ask if you are being detained or are free to go</li>
          <li>If detained, state that you wish to remain silent and want to speak to an attorney</li>
          <li>Document the officer's name, badge number, and agency if possible</li>
        </ul>
      </div>
      
      <div className="flex justify-between mt-6">
        <a 
          href="#" 
          className="inline-flex items-center text-blue-400 hover:text-blue-300"
          onClick={(e) => e.preventDefault()}
        >
          <Download className="h-4 w-4 mr-2" />
          Download Recording Rights Guide
        </a>
        
        <a 
          href="https://www.eff.org/issues/know-your-rights" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-400 hover:text-blue-300"
        >
          EFF Digital Rights Guide
          <ExternalLink className="h-4 w-4 ml-1" />
        </a>
      </div>
    </div>
  );
  
  const bailResourcesContent = (
    <div>
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-3 text-white">Understanding Bail</h4>
        <p className="mb-4">
          Bail is money or property that an arrested person provides to the court as a guarantee that they will return for future court proceedings. If the person returns as required, the bail is returned (minus fees in some jurisdictions).
        </p>
        <div className="space-y-3">
          <div className="flex">
            <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
            <p>Bail is set during an initial court appearance, usually within 24-48 hours of arrest</p>
          </div>
          <div className="flex">
            <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
            <p>You have the right to request a lower bail amount if the initial amount is unaffordable</p>
          </div>
          <div className="flex">
            <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
            <p>Some jurisdictions have moved to cashless bail systems for certain offenses</p>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-3 text-white">Bail Funds by Region</h4>
        <div className="space-y-4">
          <div className="bg-white/5 rounded-lg p-4">
            <h5 className="font-medium mb-2">National Bail Funds</h5>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://www.communityjusticeexchange.org/nbfn-directory" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 inline-flex items-center"
                >
                  National Bail Fund Network
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
                <p className="text-sm text-white/70 mt-1">Directory of local bail funds across the country</p>
              </li>
              <li>
                <a 
                  href="https://bailproject.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 inline-flex items-center"
                >
                  The Bail Project
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
                <p className="text-sm text-white/70 mt-1">National revolving bail fund with local sites</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-white/5 rounded-lg p-4">
            <h5 className="font-medium mb-2">Regional Bail Funds</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h6 className="text-sm font-medium text-white/90">Northeast</h6>
                <ul className="mt-1 space-y-1">
                  <li>
                    <a 
                      href="https://www.massbailfund.org/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm inline-flex items-center"
                    >
                      Massachusetts Bail Fund
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.brooklynbailfund.org/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm inline-flex items-center"
                    >
                      Brooklyn Community Bail Fund
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h6 className="text-sm font-medium text-white/90">Midwest</h6>
                <ul className="mt-1 space-y-1">
                  <li>
                    <a 
                      href="https://chicagobond.org/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm inline-flex items-center"
                    >
                      Chicago Community Bond Fund
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.mnfreedomfund.org/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm inline-flex items-center"
                    >
                      Minnesota Freedom Fund
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h6 className="text-sm font-medium text-white/90">South</h6>
                <ul className="mt-1 space-y-1">
                  <li>
                    <a 
                      href="https://www.nashvillebailfund.org/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm inline-flex items-center"
                    >
                      Nashville Community Bail Fund
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.louisvillecommunitybail.org/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm inline-flex items-center"
                    >
                      Louisville Community Bail Fund
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h6 className="text-sm font-medium text-white/90">West</h6>
                <ul className="mt-1 space-y-1">
                  <li>
                    <a 
                      href="https://www.bailfundla.org/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm inline-flex items-center"
                    >
                      People's City Council Freedom Fund (LA)
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.northwestcommunityba.org/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm inline-flex items-center"
                    >
                      Northwest Community Bail Fund
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mt-6">
        <h4 className="text-lg font-semibold mb-2 text-white flex items-center">
          <AlertTriangle className="h-5 w-5 mr-2 text-blue-400" />
          If You Need Bail Assistance
        </h4>
        <ol className="space-y-2 list-decimal pl-5">
          <li>Contact the local bail fund in the jurisdiction where the arrest occurred</li>
          <li>Be prepared to provide the arrestee's full name, booking number, and location</li>
          <li>Understand that most bail funds have limited resources and may prioritize based on need</li>
          <li>Follow up with the bail fund to confirm receipt of your request</li>
          <li>Be aware that some bail funds only operate during specific hours</li>
        </ol>
      </div>
      
      <div className="flex justify-between mt-6">
        <a 
          href="#" 
          className="inline-flex items-center text-blue-400 hover:text-blue-300"
          onClick={(e) => e.preventDefault()}
        >
          <Download className="h-4 w-4 mr-2" />
          Download Bail Resource Guide
        </a>
        
        <a 
          href="https://www.communityjusticeexchange.org/nbfn-directory" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-400 hover:text-blue-300"
        >
          Find Local Bail Fund
          <ExternalLink className="h-4 w-4 ml-1" />
        </a>
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 rounded-xl p-6 shadow-xl border border-white/20">
      <div className="mb-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-2">
          Activist Legal Toolkit
        </h2>
        <p className="text-white/70">
          Essential resources for organizers, protesters, and community activists
        </p>
      </div>
      
      <div className="space-y-6">
        {renderSection(
          'know-your-rights',
          'Know Your Rights',
          <Shield className="h-6 w-6 text-blue-400" />,
          knowYourRightsContent
        )}
        
        {renderSection(
          'protest-planning',
          'Protest Planning Guide',
          <Megaphone className="h-6 w-6 text-purple-400" />,
          protestPlanningContent
        )}
        
        {renderSection(
          'legal-observers',
          'Legal Observers',
          <Users className="h-6 w-6 text-green-400" />,
          legalObserversContent
        )}
        
        {renderSection(
          'recording-police',
          'Recording Police Interactions',
          <Camera className="h-6 w-6 text-red-400" />,
          recordingPoliceContent
        )}
        
        {renderSection(
          'bail-resources',
          'Bail Resources',
          <FileText className="h-6 w-6 text-yellow-400" />,
          bailResourcesContent
        )}
      </div>
      
      <div className="mt-8 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
        <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
          <BookOpen className="h-5 w-5 mr-2 text-blue-400" />
          Disclaimer
        </h3>
        <p className="text-white/70 text-sm">
          This information is provided for educational purposes only and does not constitute legal advice. 
          Laws vary by jurisdiction and change over time. Always consult with a qualified attorney for 
          advice specific to your situation and location.
        </p>
      </div>
    </div>
  );
};

export default ActivistToolkit;