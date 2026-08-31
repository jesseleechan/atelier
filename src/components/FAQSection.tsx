import React, { useState } from 'react';
import { FAQ_DATA } from '../data/content';
import { Plus, Minus } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-atelier-bg py-24 md:py-32 px-6 md:px-12 border-b border-atelier-border/50">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Centered Heading */}
        <div className="text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-[0.05em] text-atelier-dark">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="border-b border-atelier-border/70 pb-5 transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full flex items-center justify-between text-left py-2 group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans text-sm sm:text-base font-normal text-atelier-dark group-hover:text-atelier-accent transition-colors pr-6">
                    {item.question}
                  </span>
                  <span className="text-atelier-dark shrink-0 transition-transform duration-200">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>

                {isOpen && (
                  <div className="pt-3 pr-8 animate-fadeIn">
                    <p className="text-neutral-600 font-sans text-xs sm:text-sm leading-relaxed font-light">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
