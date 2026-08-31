import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import type { InvestmentTier } from '../data/content';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTier?: InvestmentTier | null;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialTier,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: initialTier?.title || 'Signature | Bespoke',
    location: '',
    timeline: initialTier?.duration || '12 - 20 weeks',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-atelier-bg border border-atelier-border/80 shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-6 right-6 text-neutral-400 hover:text-atelier-dark transition-colors p-1"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="text-center py-12 space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-atelier-taupe/20 flex items-center justify-center text-atelier-dark">
              <CheckCircle size={36} />
            </div>
            <h3 className="font-serif text-3xl font-normal text-atelier-dark">
              Request Received
            </h3>
            <p className="text-neutral-600 font-sans text-sm max-w-md mx-auto leading-relaxed font-light">
              Thank you, <span className="font-medium">{formData.name}</span>. A senior partner from Atelier 87° will contact you within 24 business hours to arrange your complimentary architectural consultation.
            </p>
            <div className="pt-4">
              <button
                onClick={handleResetAndClose}
                className="text-xs uppercase tracking-[0.2em] px-8 py-3 border border-atelier-dark text-atelier-dark hover:bg-atelier-dark hover:text-white transition-all"
              >
                Return to Site
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <p className="text-xs font-sans tracking-[0.3em] uppercase text-atelier-muted font-medium">
                INITIAL CONVERSATION
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-atelier-dark mt-1">
                Schedule a Consultation
              </h2>
              <p className="text-neutral-500 font-sans text-xs sm:text-sm mt-2 font-light">
                Complimentary 1-hour session including spatial analysis, design vision, and feasibility alignment.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-neutral-500 font-medium mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-atelier-card border border-atelier-border/80 px-4 py-2.5 text-sm text-atelier-dark focus:outline-none focus:border-atelier-dark transition-colors font-sans"
                    placeholder="Eleanor Vance"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-neutral-500 font-medium mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-atelier-card border border-atelier-border/80 px-4 py-2.5 text-sm text-atelier-dark focus:outline-none focus:border-atelier-dark transition-colors font-sans"
                    placeholder="eleanor@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-neutral-500 font-medium mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-atelier-card border border-atelier-border/80 px-4 py-2.5 text-sm text-atelier-dark focus:outline-none focus:border-atelier-dark transition-colors font-sans"
                    placeholder="+1 (212) 555-0187"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-neutral-500 font-medium mb-1">
                    Residence Location
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-atelier-card border border-atelier-border/80 px-4 py-2.5 text-sm text-atelier-dark focus:outline-none focus:border-atelier-dark transition-colors font-sans"
                    placeholder="Upper East Side, NYC"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-neutral-500 font-medium mb-1">
                    Service of Interest
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-atelier-card border border-atelier-border/80 px-3 py-2.5 text-sm text-atelier-dark focus:outline-none focus:border-atelier-dark transition-colors font-sans"
                  >
                    <option value="Signature | Bespoke">Signature | Bespoke ($75k+)</option>
                    <option value="Home Upgrade | Home Improvement">Home Upgrade | Home Improvement ($40k+)</option>
                    <option value="Home Remodeling | Home Renovation">Home Remodeling | Home Renovation ($120k+)</option>
                    <option value="Custom Handcrafted Furniture">Custom Handcrafted Furniture</option>
                    <option value="General Architectural Inquiry">General Architectural Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-neutral-500 font-medium mb-1">
                    Target Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full bg-atelier-card border border-atelier-border/80 px-3 py-2.5 text-sm text-atelier-dark focus:outline-none focus:border-atelier-dark transition-colors font-sans"
                  >
                    <option value="Immediate (Next 1-2 months)">Immediate (Next 1-2 months)</option>
                    <option value="Upcoming (3-6 months)">Upcoming (3-6 months)</option>
                    <option value="Planning Phase (6-12 months)">Planning Phase (6-12 months)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-neutral-500 font-medium mb-1">
                  Project Notes & Details
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-atelier-card border border-atelier-border/80 px-4 py-2.5 text-sm text-atelier-dark focus:outline-none focus:border-atelier-dark transition-colors font-sans"
                  placeholder="Tell us about your home, layout objectives, or specific design desires..."
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-atelier-dark text-white text-xs uppercase tracking-[0.25em] font-medium hover:bg-neutral-800 transition-colors"
                >
                  Request Consultation
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
