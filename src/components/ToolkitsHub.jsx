import React, { useState } from 'react';
import { AlertTriangle, Camera, Users, Shield, FileText, Download, ExternalLink } from 'lucide-react';

const ToolkitsHub = ({ selectedState, darkMode }) => {
  const [activeToolkit, setActiveToolkit] = useState('activist');

  // Activist toolkit content
  const activistContent = {
    title: "Activist Toolkit",
    description: "Essential resources for civil rights activists and organizers",
    sections: [
      {
        title: "Know Your Rights",
        items: [
          "Right to peaceful assembly and protest",
          "Freedom of speech protections",
          "Protection from unreasonable search and seizure",
          "Right to remain silent during police encounters"
        ]
      },
      {
        title: "Protest Safety",
        items: [
          "Bring ID and emergency contacts",
          "Know local protest laws and permits",
          "Stay hydrated and wear comfortable shoes",
          "Have a legal observer contact ready"
        ]
      },
      {
        title: "Legal Resources",
        items: [
          "ACLU Know Your Rights guides",
          "Local legal aid organizations",
          "Protest legal hotlines",
          "Bail fund information"
        ]
      }
    ]
  };

  // Journalist toolkit content
  const journalistContent = {
    title: "Journalist Toolkit",
    description: "Resources for journalists covering civil rights and protests",
    sections: [
      {
        title: "Press Rights",
        items: [
          "First Amendment protections for press",
          "Right to record in public spaces",
          "Press credential requirements",
          "Protection from police interference"
        ]
      },
      {
        title: "Safety Guidelines",
        items: [
          "Wear visible press identification",
          "Maintain safe distance from confrontations",
          "Have backup equipment and data storage",
          "Know emergency contacts and legal resources"
        ]
      },
      {
        title: "Legal Considerations",
        items: [
          "Shield laws and source protection",
          "Recording consent laws by state",
          "Public records access rights",
          "Defamation and privacy considerations"
        ]
      }
    ]
  };

  const getCurrentContent = () => {
    switch(activeToolkit) {
      case 'activist': return activistContent;
      case 'journalist': return journalistContent;
      default: return activistContent;
    }
  };

  const currentContent = getCurrentContent();

  return (
    <div className="space-y-6">
      {/* Toolkit Selection */}
      <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4">
        <button
          className={`px-4 py-2 rounded-lg flex items-center text-sm font-medium transition-colors ${
            activeToolkit === 'activist' 
              ? 'bg-blue-600 text-white' 
              : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
          }`}
          onClick={() => setActiveToolkit('activist')}
        >
          <AlertTriangle className="h-4 w-4 mr-2" />
          Activist Toolkit
        </button>
        <button
          className={`px-4 py-2 rounded-lg flex items-center text-sm font-medium transition-colors ${
            activeToolkit === 'journalist' 
              ? 'bg-blue-600 text-white' 
              : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
          }`}
          onClick={() => setActiveToolkit('journalist')}
        >
          <Camera className="h-4 w-4 mr-2" />
          Journalist Toolkit
        </button>
      </div>

      {/* Toolkit Content */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">{currentContent.title}</h3>
          <p className="text-white/70">{currentContent.description}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentContent.sections.map((section, index) => (
            <div key={index} className="bg-white/5 rounded-lg p-4">
              <h4 className="font-semibold text-white mb-3 flex items-center">
                <Shield className="h-4 w-4 mr-2 text-blue-400" />
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-white/80 text-sm flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-6 pt-6 border-t border-white/10">
          <h4 className="font-semibold text-white mb-3">Quick Actions</h4>
          <div className="flex flex-wrap gap-3">
            <button className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              <Download className="h-4 w-4 mr-2" />
              Download PDF Guide
            </button>
            <button className="flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
              <FileText className="h-4 w-4 mr-2" />
              Print Checklist
            </button>
            <a 
              href="https://www.aclu.org/know-your-rights" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              More Resources
            </a>
          </div>
        </div>
      </div>

      {/* State-Specific Information */}
      {selectedState && (
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
          <h4 className="font-semibold text-white mb-3">
            {selectedState} Specific Information
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/5 rounded-lg p-4">
              <h5 className="font-medium text-white mb-2">Local Legal Aid</h5>
              <p className="text-white/70 text-sm">
                Contact local legal aid organizations in {selectedState} for state-specific guidance and support.
              </p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <h5 className="font-medium text-white mb-2">State Laws</h5>
              <p className="text-white/70 text-sm">
                Review {selectedState} specific laws regarding protests, recording, and civil rights protections.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToolkitsHub;