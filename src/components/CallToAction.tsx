import React from 'react';
import { IMAGES } from '../data/content';

interface CallToActionProps {
  onOpenConsultation: () => void;
  title?: string;
  description?: string;
  buttonLabel?: string;
}

export const CallToAction: React.FC<CallToActionProps> = ({
  onOpenConsultation,
  title = 'Ready to transform your space?',
  description = 'Interior architecture renovation of an Upper East Side post-war apartment showcasing a custom millwork TV and fireplace surround, chaise lounges by B&B Italia and a fireplace by EcoSmart Fire USA.',
  buttonLabel = 'Schedule a consultation',
}) => {
  return (
    <section className="atelier-cta relative w-full py-28 md:py-36 overflow-hidden bg-neutral-950 text-white">
      {/* Dark luxury background image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.ctaBanner}
          alt="Atelier 87 Residence Renovation"
          className="w-full h-full object-cover object-center scale-105 opacity-40"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Centered CTA Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center space-y-6 md:space-y-8">
        <h2 className="atelier-cta__title font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-[0.08em] text-white uppercase">
          {title}
        </h2>

        <p className="text-neutral-300 font-sans text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-light text-balance">
          {description}
        </p>

        <div className="pt-4">
          <button
            onClick={onOpenConsultation}
            className="inline-block text-xs uppercase tracking-[0.25em] px-8 py-4 border border-white text-white hover:bg-white hover:text-atelier-dark transition-all duration-300 font-medium"
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    </section>
  );
};
