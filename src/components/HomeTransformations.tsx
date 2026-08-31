import React from 'react';
import { IMAGES } from '../data/content';

export const HomeTransformations: React.FC = () => {
  return (
    <section className="w-full bg-atelier-bg py-24 md:py-32 px-6 md:px-12 border-b border-atelier-border/50">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Heading & Subtitle */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-xs font-sans tracking-[0.3em] uppercase text-atelier-muted font-medium">
            COMPLETED TRANSFORMATION
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-[0.08em] text-atelier-dark uppercase">
            HOME TRANSFORMATIONS
          </h2>

          <p className="text-neutral-600 font-sans text-sm sm:text-base leading-relaxed font-light text-balance">
            Comprehensive ground-up design projects across townhouses and apartments, combining historical character with modern architectural luxury.
          </p>
        </div>

        {/* 2 Side-by-Side Large Featured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {IMAGES.transformations.map((item) => (
            <div key={item.id} className="space-y-5 group">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-200 shadow-sm">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="space-y-2">
                <p className="text-[10px] font-sans tracking-[0.25em] uppercase text-neutral-400 font-semibold">
                  {item.subtitle}
                </p>
                <h3 className="font-serif text-2xl md:text-3xl font-normal text-atelier-dark group-hover:text-atelier-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-neutral-600 font-sans text-xs md:text-sm leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
