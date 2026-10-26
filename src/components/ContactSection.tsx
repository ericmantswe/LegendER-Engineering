import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, Check, Copy } from 'lucide-react';
import { BRAND_DATA } from '../data/engineeringData';
import { InquiryFormData } from '../types';
import { FadeIn } from './FadeIn';
import FolderFloat from './FolderFloat';

interface ContactSectionProps {
  prefilledService?: string;
  prefilledDescription?: string;
}

const SERVICE_OPTIONS = [
  'Industrial Automation',
  'Process Optimisation',
  'Software & Web Applications',
  'Mechanical Design & CAD',
  'Electronics & Embedded',
  'System Integration',
  'Other',
];

export const ContactSection: React.FC<ContactSectionProps> = ({
  prefilledService,
  prefilledDescription,
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    service: prefilledService || SERVICE_OPTIONS[0],
    description: prefilledDescription || '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<InquiryFormData | null>(null);
  const [copied, setCopied] = useState(false);
  const [briefNotification, setBriefNotification] = useState<string | null>(null);

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService]);

  useEffect(() => {
    if (prefilledDescription) {
      setFormData((prev) => ({
        ...prev,
        description: prefilledDescription,
      }));
    }
  }, [prefilledDescription]);

  const handleSelectBrief = (briefTitle: string) => {
    let mappedService = SERVICE_OPTIONS[0];
    let desc = '';

    if (briefTitle.includes('PLC')) {
      mappedService = 'Industrial Automation';
      desc = 'Requesting consultation on automated PLC sequencing, sensor synchronization, and fail-safe safety interlocks.';
    } else if (briefTitle.includes('SCADA') || briefTitle.includes('Telemetry')) {
      mappedService = 'Software & Web Applications';
      desc = 'Technical inquiry for a web-based SCADA dashboard with live machine telemetry, status logging, and downtime tracking.';
    } else if (briefTitle.includes('PIC') || briefTitle.includes('Sensor')) {
      mappedService = 'Electronics & Embedded';
      desc = 'Scoping a standalone low-power sensor node using Microchip PIC microcontrollers with local SPI/I2C data logging.';
    } else if (briefTitle.includes('CAD') || briefTitle.includes('Fusion')) {
      mappedService = 'Mechanical Design & CAD';
      desc = 'Requesting 3D CAD modeling in Autodesk Fusion 360, DFM tolerancing, and rapid mechanical prototype validation.';
    } else {
      mappedService = 'System Integration';
      desc = 'Full-scale engineering integration bridging machinery, PLC controllers, and central supervisory software.';
    }

    setFormData((prev) => ({
      ...prev,
      service: mappedService,
      description: desc,
    }));

    setBriefNotification(`Selected "${briefTitle}" brief`);
    setTimeout(() => setBriefNotification(null), 3000);
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Name required.';
    if (!formData.email.trim()) newErrors.email = 'Email required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Invalid email.';
    }
    if (!formData.description.trim()) newErrors.description = 'Details required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
    }, 300);
  };

  const handleCopySummary = () => {
    if (!submittedData) return;
    const text = `ENQUIRY:
Name: ${submittedData.fullName}
Email: ${submittedData.email}
Service: ${submittedData.service}
Details: ${submittedData.description}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const mailtoLink = submittedData
    ? `mailto:${BRAND_DATA.contactPlaceholder.email}?subject=${encodeURIComponent(
        `Enquiry: ${submittedData.service} - ${submittedData.fullName}`
      )}&body=${encodeURIComponent(
        `Name: ${submittedData.fullName}\nEmail: ${submittedData.email}\nService: ${submittedData.service}\n\n${submittedData.description}`
      )}`
    : '#';

  return (
    <section id="contact" className="py-20 bg-transparent text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="pb-3 mb-8 border-b border-white/10">
            <div className="text-[10px] font-mono text-[#FF4015] font-bold uppercase tracking-widest mb-0.5">
              11 · CONTACT
            </div>
            <h2 className="font-condensed text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wider text-white leading-tight">
              LET'S ENGINEER A BETTER WAY FORWARD.
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Placeholders & Interactive Brief Dossier */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-transparent">
            <FadeIn delay={100}>
              <div className="bg-transparent border-t border-b border-white/10 py-4">
                <span className="text-[10px] font-mono text-[#FF4015] font-bold uppercase tracking-widest block mb-3">
                  DIRECT CHANNELS
                </span>

                <div className="space-y-3 text-xs font-mono">
                  <div>
                    <span className="text-slate-400 uppercase text-[9px] block">EMAIL:</span>
                    <p className="text-white font-bold select-all">
                      {BRAND_DATA.contactPlaceholder.email}
                    </p>
                  </div>

                  <div>
                    <span className="text-slate-400 uppercase text-[9px] block">PHONE:</span>
                    <p className="text-white font-bold">
                      {BRAND_DATA.contactPlaceholder.phone}
                    </p>
                  </div>

                  <div>
                    <span className="text-slate-400 uppercase text-[9px] block">BASE:</span>
                    <p className="text-slate-200">
                      {BRAND_DATA.contactPlaceholder.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Interactive FolderFloat Brief Dossier */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-[#FF4015] font-bold uppercase tracking-widest">
                    PROJECT DOSSIER · QUICK BRIEFS
                  </span>
                  <span className="text-[9px] font-mono text-slate-400 uppercase">
                    HOVER & DRAG
                  </span>
                </div>
                <p className="text-xs text-slate-300 font-sans mb-14 leading-relaxed">
                  Hover to open case files. Drag zero-gravity notes or pick one to auto-populate the inquiry specifications:
                </p>

                {briefNotification && (
                  <div className="mb-4 px-3 py-1.5 bg-[#FF4015]/10 border border-[#FF4015] text-[#FF4015] text-[11px] font-mono flex items-center justify-between">
                    <span>{briefNotification}</span>
                    <span className="text-[9px] text-white/70">POPULATED ↗</span>
                  </div>
                )}

                <div className="flex justify-center relative py-6">
                  <FolderFloat
                    items={[
                      'PLC Automation Line',
                      'SCADA Telemetry System',
                      'Microchip PIC Sensor Node',
                      'Fusion 360 Enclosure CAD',
                      'Turnkey Plant Integration',
                    ]}
                    label="Project Dossiers"
                    sublabel="5 technical briefs"
                    trigger="hover"
                    physics={true}
                    drift={0.6}
                    folderColor="#18181b"
                    frontColor="#27272a"
                    paperColor="#FF4015"
                    itemColor="#f4f4f5"
                    itemTextColor="#09090b"
                    labelColor="#ffffff"
                    width={220}
                    height={140}
                    radius={12}
                    spread={170}
                    lift={28}
                    tilt={8}
                    flapAngle={34}
                    restAngle={16}
                    openDuration={500}
                    stagger={40}
                    bounce={0.25}
                    closeOnSelect={true}
                    onSelect={(val: string) => handleSelectBrief(val)}
                  />
                </div>
              </div>

              <div className="mt-4 text-[10px] font-mono text-slate-400">
                <span className="text-[#FF4015] font-bold mr-1">CONFIDENTIAL:</span>
                Engineering parameters remain private.
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Direct Form */}
          <div className="lg:col-span-7 bg-transparent">
            <FadeIn delay={200}>
            {submittedData ? (
              <div className="bg-transparent border border-[#FF4015] p-6 text-white">
                <h3 className="font-condensed text-2xl font-black uppercase text-white mb-2">
                  ENQUIRY LOGGED
                </h3>

                <div className="bg-transparent border-t border-b border-white/10 py-3 text-xs font-mono text-slate-300 space-y-1 mb-4">
                  <div><span className="text-slate-400">SERVICE:</span> {submittedData.service}</div>
                  <div><span className="text-slate-400">NAME:</span> {submittedData.fullName} ({submittedData.email})</div>
                  <div><span className="text-slate-400">SCOPE:</span> {submittedData.description}</div>
                </div>

                <div className="flex gap-2">
                  <a
                    href={mailtoLink}
                    className="flex-1 py-2 px-3 bg-[#FF4015] hover:bg-[#E5360F] text-[#121214] font-mono text-xs font-bold uppercase text-center cursor-pointer"
                  >
                    Open Email
                  </a>

                  <button
                    onClick={handleCopySummary}
                    className="py-2 px-3 bg-transparent text-white border border-white/20 font-mono text-xs font-bold uppercase cursor-pointer"
                  >
                    {copied ? 'Copied' : 'Copy'}
                  </button>

                  <button
                    onClick={() => setSubmittedData(null)}
                    className="py-2 px-2 text-xs font-mono text-slate-400 hover:text-white uppercase underline cursor-pointer"
                  >
                    Reset
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-transparent border-transparent space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono font-bold uppercase text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Kagiso Motlhanka"
                      className="w-full px-3 py-2.5 bg-transparent border border-white/20 text-xs text-white focus:outline-none focus:border-[#FF4015]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono font-bold uppercase text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. engineer@company.co.bw"
                      className="w-full px-3 py-2.5 bg-transparent border border-white/20 text-xs text-white focus:outline-none focus:border-[#FF4015]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono font-bold uppercase text-slate-300 mb-1">
                    Service Required *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#121214] border border-white/20 text-xs font-mono text-white focus:outline-none focus:border-[#FF4015]"
                  >
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#121214] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-mono font-bold uppercase text-slate-300 mb-1">
                    Operational Challenge *
                  </label>
                  <textarea
                    rows={3}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Describe your process bottleneck or product idea..."
                    className="w-full px-3 py-2.5 bg-transparent border border-white/20 text-xs text-white focus:outline-none focus:border-[#FF4015]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 bg-[#FF4015] hover:bg-[#E5360F] text-[#121214] font-mono text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-1 cursor-pointer"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Enquiry ↗'}
                </button>
              </form>
            )}
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
