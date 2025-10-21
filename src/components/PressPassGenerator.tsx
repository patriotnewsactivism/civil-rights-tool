import { useState, useRef } from 'react';
import { Camera, Download, Shield, AlertCircle, CheckCircle } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { supabase } from '../lib/supabase';

interface PressPassData {
  fullName: string;
  organization: string;
  role: string;
  city: string;
  state: string;
  phone: string;
  email: string;
  photo: string | null;
}

export default function PressPassGenerator() {
  const [formData, setFormData] = useState<PressPassData>({
    fullName: '',
    organization: '',
    role: 'Journalist',
    city: '',
    state: '',
    phone: '',
    email: '',
    photo: null
  });
  const [preview, setPreview] = useState(false);
  const [generating, setGenerating] = useState(false);
  const passRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({ ...formData, photo: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const generatePDF = async () => {
    if (!passRef.current) return;
    
    setGenerating(true);
    try {
      const canvas = await html2canvas(passRef.current, {
        scale: 3,
        backgroundColor: '#ffffff',
        logging: false
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: [85.6, 53.98]
      });

      pdf.addImage(imgData, 'PNG', 0, 0, 85.6, 53.98);
      pdf.save(`press-pass-${formData.fullName.replace(/\s+/g, '-').toLowerCase()}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating press pass. Please try again.');
    } finally {
      setGenerating(false);
    }
  };

  const downloadImage = async () => {
    if (!passRef.current) return;
    
    setGenerating(true);
    try {
      const canvas = await html2canvas(passRef.current, {
        scale: 3,
        backgroundColor: '#ffffff',
        logging: false
      });

      const link = document.createElement('a');
      link.download = `press-pass-${formData.fullName.replace(/\s+/g, '-').toLowerCase()}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Error generating image:', error);
      alert('Error generating press pass. Please try again.');
    } finally {
      setGenerating(false);
    }
  };

  const isFormValid = formData.fullName && formData.organization && formData.city && formData.state && formData.email;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-16 w-16 text-blue-500 mr-3" />
            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              FREE PRESS PASS
            </h1>
          </div>
          <p className="text-xl text-gray-300 mb-4">
            Generate Your Digital Press Credentials Instantly
          </p>
          <div className="flex items-center justify-center space-x-2 text-blue-400">
            <CheckCircle className="h-5 w-5" />
            <span>Protected by First Amendment</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Your Information</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  News Organization / Outlet *
                </label>
                <input
                  type="text"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Independent Media / CRN News"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Role *
                </label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Journalist">Journalist</option>
                  <option value="Reporter">Reporter</option>
                  <option value="Photographer">Photographer</option>
                  <option value="Videographer">Videographer</option>
                  <option value="Correspondent">Correspondent</option>
                  <option value="Citizen Journalist">Citizen Journalist</option>
                  <option value="Blogger">Blogger</option>
                  <option value="Podcaster">Podcaster</option>
                  <option value="Documentary Filmmaker">Documentary Filmmaker</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="New York"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    State *
                  </label>
                  <input
                    type="text"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="NY"
                    maxLength={2}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="journalist@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Photo (Recommended)
                </label>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    <Camera className="h-5 w-5" />
                    <span>Upload Photo</span>
                  </button>
                  {formData.photo && (
                    <span className="text-green-400 text-sm">✓ Photo uploaded</span>
                  )}
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
                <p className="text-xs text-gray-500 mt-2">
                  Passport-style photo recommended (head and shoulders, neutral background)
                </p>
              </div>

              <button
                onClick={() => setPreview(true)}
                disabled={!isFormValid}
                className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${
                  isFormValid
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-purple-500/50 text-white'
                    : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                }`}
              >
                Generate Press Pass
              </button>
            </div>

            {/* Disclaimer */}
            <div className="mt-6 bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-yellow-300">
                  <strong>Important:</strong> This press pass is protected by the First Amendment and serves as a statement of your constitutional rights. It does not replace event-specific media credentials or provide legal immunity.
                </div>
              </div>
            </div>

            {/* Liability Disclaimer */}
            <div className="mt-4 bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                <div className="text-xs text-red-300">
                  <strong>Legal Disclaimer:</strong> This press pass generator is provided for informational purposes only. By using this tool, you acknowledge that Civil Rights Network (CRN) and its operators are not liable for any consequences arising from the use, misuse, or presentation of this credential. This credential does not constitute legal advice, authorization, or accreditation. Users are solely responsible for understanding and complying with all applicable laws, regulations, and event-specific requirements. CRN makes no warranties regarding the acceptance or recognition of this credential by any party.
                </div>
              </div>
            </div>
          </div>

          {/* Preview Section */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Preview & Download</h2>
            
            {preview ? (
              <div className="space-y-6">
                {/* Press Pass Preview */}
                <div 
                  ref={passRef}
                  className="bg-white p-5 rounded-lg shadow-2xl"
                  style={{ width: '400px', height: '252px' }}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-3 pb-2 border-b-2 border-blue-600">
                    <div className="flex items-center space-x-2">
                      <Shield className="h-10 w-10 text-blue-600" />
                      <div>
                        <div className="text-4xl font-black text-blue-600 leading-none" style={{ letterSpacing: '0.05em' }}>PRESS</div>
                        <div className="text-[10px] text-gray-600 uppercase tracking-wide">First Amendment</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-bold text-gray-800 uppercase">Issued</div>
                      <div className="text-[10px] text-gray-600">{new Date().toLocaleDateString()}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex space-x-3">
                    {/* Photo */}
                    <div className="flex-shrink-0">
                      {formData.photo ? (
                        <img 
                          src={formData.photo} 
                          alt="Photo" 
                          className="w-20 h-20 object-cover rounded border-2 border-gray-300"
                        />
                      ) : (
                        <div className="w-20 h-20 bg-gray-200 rounded border-2 border-gray-300 flex items-center justify-center">
                          <Camera className="h-6 w-6 text-gray-400" />
                        </div>
                      )}
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="mb-1">
                        <div className="text-base font-black text-gray-900 uppercase leading-tight truncate">
                          {formData.fullName}
                        </div>
                        <div className="text-xs font-bold text-blue-600 truncate">
                          {formData.role}
                        </div>
                      </div>

                      <div className="text-[10px] text-gray-700 space-y-0.5">
                        <div className="font-semibold truncate">{formData.organization}</div>
                        <div className="truncate">{formData.city}, {formData.state}</div>
                        {formData.phone && <div className="truncate">{formData.phone}</div>}
                        <div className="text-blue-600 truncate">{formData.email}</div>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-2 pt-2 border-t border-gray-300">
                    <div className="text-[9px] text-gray-600 text-center leading-tight">
                      <strong>Protected by the First Amendment of the U.S. Constitution</strong>
                      <br />
                      Civil Rights Network • freepresspass.com
                    </div>
                  </div>
                </div>

                {/* Download Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={generatePDF}
                    disabled={generating}
                    className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-purple-500/50 text-white px-6 py-4 rounded-lg font-bold transition-all disabled:opacity-50"
                  >
                    <Download className="h-5 w-5" />
                    <span>{generating ? 'Generating...' : 'Download as PDF'}</span>
                  </button>

                  <button
                    onClick={downloadImage}
                    disabled={generating}
                    className="w-full flex items-center justify-center space-x-3 bg-white/10 border border-white/20 hover:bg-white/20 text-white px-6 py-4 rounded-lg font-bold transition-all disabled:opacity-50"
                  >
                    <Download className="h-5 w-5" />
                    <span>{generating ? 'Generating...' : 'Download as Image'}</span>
                  </button>

                  <button
                    onClick={() => setPreview(false)}
                    className="w-full text-gray-400 hover:text-white py-2 text-sm transition-colors"
                  >
                    ← Edit Information
                  </button>
                </div>

                {/* Instructions */}
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <h3 className="font-bold text-blue-400 mb-2">How to Use Your Press Pass:</h3>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Download and save to your phone</li>
                    <li>• Print and laminate for durability</li>
                    <li>• Display when covering public events</li>
                    <li>• Keep photo ID handy for verification</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-64 text-gray-400">
                <div className="text-center">
                  <Shield className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p>Fill out the form to preview your press pass</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">About Press Freedom</h2>
          <div className="grid md:grid-cols-3 gap-6 text-gray-300">
            <div>
              <h3 className="font-bold text-blue-400 mb-2">First Amendment Rights</h3>
              <p className="text-sm">
                The First Amendment protects the freedom of the press for all who gather and disseminate news—not just traditional media outlets.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-400 mb-2">Citizen Journalism</h3>
              <p className="text-sm">
                Anyone can practice journalism. This includes bloggers, documentarians, podcasters, and community reporters covering issues that matter.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-400 mb-2">Know Your Rights</h3>
              <p className="text-sm">
                You have the right to record police in public, attend public meetings, and request public records. Always act professionally and lawfully.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
