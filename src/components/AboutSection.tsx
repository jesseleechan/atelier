import React from 'react';
import { IMAGES, VALUE_PROPS } from '../data/content';
import { ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenStory?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenStory }) => {
  return (
    <section id="about" className="w-full bg-atelier-dark text-white py-24 md:py-32 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">
        {/* Main Two-Column Split Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Founders Portrait */}
          <div className="lg:col-span-6 overflow-hidden">
            <div className="relative aspect-[4/5] sm:aspect-[3/4] max-h-[620px] w-full overflow-hidden bg-neutral-900 shadow-2xl">
              <img
                src={IMAGES.aboutFounders}
                alt="Atelier 87 Principal Designers & Founders"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Right: Story Content */}
          <div className="lg:col-span-6 space-y-8 pl-0 lg:pl-6">
            <div className="space-y-4">
              <p className="text-xs font-sans tracking-[0.3em] uppercase text-neutral-400 font-medium">
                04 / OUR STORY
              </p>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-[0.05em] text-white uppercase">
                ABOUT ATELIER 87°
              </h2>

              <div className="w-16 h-[1.5px] bg-neutral-600 my-6" />
            </div>

            <div className="space-y-6 text-neutral-300 font-sans text-sm md:text-base leading-relaxed font-light">
              <p>
                As established professionals specializing in the city's unique architectural landscape, we bring three decades of design experience to every project. Our practice focuses on interior design-mastered spaces that honor architectural heritage while introducing contemporary innovation and sophisticated comfort for discerning homeowners.
              </p>

              <p>
                We serve clients who value authenticity, master craftsmanship, and timeless design principles that transcend fleeting trends. As your dedicated interior design nyc partner, we understand how distinguished building characters influence design decisions and lifestyle requirements throughout the city's most prestigious neighborhoods.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenStory}
                className="group inline-flex items-center text-xs uppercase tracking-[0.2em] font-semibold text-white hover:text-atelier-taupe pb-1 border-b border-white hover:border-atelier-taupe transition-all"
              >
                Read Our Full Story
                <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* 3 Pillars / Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-neutral-800/80">
          {VALUE_PROPS.map((prop) => (
            <div key={prop.id} className="space-y-4 pr-4">
              {/* Minimalist Vector Icon */}
              <div className="w-12 h-12 flex items-center justify-start text-atelier-taupe">
                {prop.icon === 'guidance' && (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <rect x="3" y="3" width="18" height="18" rx="1" />
                    <line x1="3" y1="9" x2="21" y2="9" strokeDasharray="1 2" />
                    <line x1="3" y1="15" x2="21" y2="15" strokeDasharray="1 2" />
                    <line x1="9" y1="3" x2="9" y2="21" strokeDasharray="1 2" />
                    <line x1="15" y1="3" x2="15" y2="21" strokeDasharray="1 2" />
                  </svg>
                )}
                {prop.icon === 'investment' && (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                )}
                {prop.icon === 'craftsmanship' && (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" fillOpacity="0.2" />
                  </svg>
                )}
              </div>

              <h3 className="font-sans text-xs font-semibold tracking-[0.25em] uppercase text-white">
                {prop.title}
              </h3>

              <p className="text-neutral-400 font-sans text-xs sm:text-sm leading-relaxed font-light">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
