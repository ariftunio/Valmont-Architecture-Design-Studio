import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { ConsultationFormData } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProject?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedProject,
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    name: '',
    email: '',
    phone: '',
    projectType: preselectedProject || 'Private Residential',
    location: '',
    budgetRange: '$3M – $6M',
    timeline: '6–12 Months',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ConsultationFormData, string>>>({});

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ConsultationFormData, string>> = {};

    if (!formData.name.trim()) newErrors.name = 'Please provide your full name.';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.location.trim()) {
      newErrors.location = 'Please indicate project location or city.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#171614]/60 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#FDFBF8] rounded-[16px] border border-[#E8DED2] shadow-2xl p-6 sm:p-10 my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#5F5A54] hover:text-[#171614] rounded-full hover:bg-[#E8DED2]/40 transition-colors"
          aria-label="Close inquiry dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#E8DED2]/50 border border-[#8A6044]/30 flex items-center justify-center mb-6">
              <CheckCircle2 className="w-8 h-8 text-[#8A6044]" />
            </div>

            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8A6044] mb-2">
              Inquiry Received
            </span>
            <h3 className="font-serif text-3xl text-[#171614] mb-4">
              Thank You, {formData.name}
            </h3>
            <p className="text-[15px] leading-[1.65] text-[#5F5A54] max-w-md mx-auto mb-8 font-sans">
              Our founding partners review every prospective commission with careful regard for site,
              scheduling, and architectural alignment. We will reach out to you within two business days.
            </p>

            <button
              onClick={onClose}
              className="bg-[#171614] hover:bg-[#2B2622] text-white text-[13px] font-medium px-8 py-3 rounded-[8px] transition-colors"
            >
              Return to Website
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-8 border-b border-[#E8DED2] pb-5">
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8A6044]">
                Commission an Architectural Work
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#171614] font-normal tracking-tight mt-1">
                Initiate a Confidential Conversation
              </h3>
              <p className="text-sm text-[#5F5A54] mt-1.5 font-sans">
                Tell us about your proposed residence, retreat, or cultural project.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#171614] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Julian & Sarah Vance"
                    className="w-full bg-[#F3EEE7]/50 border border-[#E8DED2] focus:border-[#8A6044] focus:ring-1 focus:ring-[#8A6044] text-[#171614] text-sm px-3.5 py-2.5 rounded-[8px] outline-hidden"
                  />
                  {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#171614] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full bg-[#F3EEE7]/50 border border-[#E8DED2] focus:border-[#8A6044] focus:ring-1 focus:ring-[#8A6044] text-[#171614] text-sm px-3.5 py-2.5 rounded-[8px] outline-hidden"
                  />
                  {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#171614] mb-1.5">
                    Telephone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 012-3456"
                    className="w-full bg-[#F3EEE7]/50 border border-[#E8DED2] focus:border-[#8A6044] focus:ring-1 focus:ring-[#8A6044] text-[#171614] text-sm px-3.5 py-2.5 rounded-[8px] outline-hidden"
                  />
                </div>

                {/* Location */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#171614] mb-1.5">
                    Site / Project Location *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Carmel-by-the-Sea, CA"
                    className="w-full bg-[#F3EEE7]/50 border border-[#E8DED2] focus:border-[#8A6044] focus:ring-1 focus:ring-[#8A6044] text-[#171614] text-sm px-3.5 py-2.5 rounded-[8px] outline-hidden"
                  />
                  {errors.location && <p className="text-xs text-red-600 mt-1">{errors.location}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Project Type */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#171614] mb-1.5">
                    Typology
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#F3EEE7]/50 border border-[#E8DED2] focus:border-[#8A6044] text-[#171614] text-sm px-3 py-2.5 rounded-[8px] outline-hidden"
                  >
                    <option value="Private Residential">Private Residence</option>
                    <option value="Retreat & Landscape">Retreat / Pavilion</option>
                    <option value="Commercial & Cultural">Commercial Atelier</option>
                    <option value="Historic Rehabilitation">Historic Restoration</option>
                  </select>
                </div>

                {/* Timeline */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#171614] mb-1.5">
                    Target Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full bg-[#F3EEE7]/50 border border-[#E8DED2] focus:border-[#8A6044] text-[#171614] text-sm px-3 py-2.5 rounded-[8px] outline-hidden"
                  >
                    <option value="Immediate (1–3 mo)">Immediate</option>
                    <option value="6–12 Months">6–12 Months</option>
                    <option value="1–2 Years">1–2 Years</option>
                    <option value="Preliminary Concept">Exploratory Phase</option>
                  </select>
                </div>

                {/* Scope / Budget */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#171614] mb-1.5">
                    Project Scale
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full bg-[#F3EEE7]/50 border border-[#E8DED2] focus:border-[#8A6044] text-[#171614] text-sm px-3 py-2.5 rounded-[8px] outline-hidden"
                  >
                    <option value="$1.5M – $3M">$1.5M – $3M</option>
                    <option value="$3M – $6M">$3M – $6M</option>
                    <option value="$6M – $12M">$6M – $12M</option>
                    <option value="$12M+">$12M+</option>
                  </select>
                </div>
              </div>

              {/* Message / Vision */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-medium text-[#171614] mb-1.5">
                  Spatial Vision & Aspirations
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share any thoughts regarding your site, preferred materials, light qualities, or lifestyle requirements..."
                  className="w-full bg-[#F3EEE7]/50 border border-[#E8DED2] focus:border-[#8A6044] focus:ring-1 focus:ring-[#8A6044] text-[#171614] text-sm p-3 rounded-[8px] outline-hidden resize-none"
                />
              </div>

              {/* Privacy Notice & Submit */}
              <div className="pt-3 border-t border-[#E8DED2] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-2 text-[11px] text-[#5F5A54]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#8A6044]" />
                  <span>Strict non-disclosure & architectural confidentiality respected.</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#8A6044] hover:bg-[#754E35] disabled:opacity-50 text-white text-[13px] font-medium tracking-[0.03em] px-7 py-3 rounded-[8px] transition-all shadow-xs"
                >
                  <span>{isSubmitting ? 'Transmitting...' : 'Submit Inquiry'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
