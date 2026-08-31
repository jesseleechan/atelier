import React from 'react';
import { INVESTMENT_TIERS } from '../data/content';
import type { InvestmentTier } from '../data/content';
import { ArrowRight, Check } from 'lucide-react';

interface InvestmentOptionsProps {
  onSelectTier: (tier: InvestmentTier) => void;
}

export const InvestmentOptions: React.FC<InvestmentOptionsProps> = ({ onSelectTier }) => {
  return (
    <section id="investment" className="w-full bg-atelier-bg py-24 md:py-32 px-6 md:px-12 border-b border-atelier-border/50">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-atelier-border/60 pb-12">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-[0.08em] text-atelier-dark uppercase">
              INVESTMENT OPTIONS
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-neutral-600 font-sans text-sm md:text-base leading-relaxed font-light">
              A thoughtful approach to interior architecture. We structure our services into distinct tiers to provide clarity and flexibility from initial concept to completion, ensuring every project receives the exact level of design engagement, project oversight, and craftsmanship required to realize your vision.
            </p>
          </div>
        </div>

        {/* 3 Column Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INVESTMENT_TIERS.map((tier) => (
            <div
              key={tier.id}
              className="bg-atelier-card border border-atelier-border/70 p-8 md:p-10 flex flex-col justify-between hover:border-atelier-dark transition-all duration-300 hover:shadow-card-luxury group"
            >
              <div className="space-y-6">
                {/* Title */}
                <h3 className="font-serif text-2xl md:text-3xl font-normal text-atelier-dark group-hover:text-atelier-accent transition-colors">
                  {tier.title}
                </h3>

                {/* Key Spec Grid */}
                <div className="space-y-3 pt-2 text-xs font-sans">
                  <div className="flex flex-col border-b border-atelier-border/40 pb-2.5">
                    <span className="uppercase tracking-[0.2em] text-neutral-400 font-medium mb-1">
                      PRICE
                    </span>
                    <span className="text-atelier-dark font-medium text-sm">
                      {tier.price}
                    </span>
                  </div>

                  <div className="flex flex-col border-b border-atelier-border/40 pb-2.5">
                    <span className="uppercase tracking-[0.2em] text-neutral-400 font-medium mb-1">
                      DURATION
                    </span>
                    <span className="text-atelier-dark font-medium text-sm">
                      {tier.duration}
                    </span>
                  </div>

                  <div className="flex flex-col border-b border-atelier-border/40 pb-2.5">
                    <span className="uppercase tracking-[0.2em] text-neutral-400 font-medium mb-1">
                      SCOPE
                    </span>
                    <span className="text-neutral-700 font-light text-xs leading-relaxed">
                      {tier.scope}
                    </span>
                  </div>
                </div>

                {/* Features list */}
                <div className="pt-4 space-y-3">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 font-medium block">
                    DELIVERABLES
                  </span>
                  <ul className="space-y-2.5">
                    {tier.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start text-xs text-neutral-600 font-light leading-relaxed">
                        <Check size={14} className="text-atelier-accent mr-2 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8 mt-8 border-t border-atelier-border/50">
                <button
                  onClick={() => onSelectTier(tier)}
                  className="w-full flex items-center justify-between py-3 px-4 border border-atelier-dark/80 text-atelier-dark text-xs uppercase tracking-[0.2em] font-medium group-hover:bg-atelier-dark group-hover:text-white transition-all duration-300"
                >
                  <span>Get Started</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
