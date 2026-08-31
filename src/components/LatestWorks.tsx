import React from 'react';
import { IMAGES } from '../data/content';

export const LatestWorks: React.FC = () => {
  return (
    <section className="w-full bg-atelier-bg py-24 md:py-32 px-6 md:px-12 border-b border-atelier-border/50">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div>
          <p className="text-xs font-sans tracking-[0.3em] uppercase text-atelier-muted font-medium mb-3">
            PORTFOLIO HIGHLIGHTS
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-[0.08em] text-atelier-dark uppercase">
            LATEST WORKS
          </h2>
        </div>

        {/* 3-Column Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {IMAGES.latestWorks.map((work) => (
            <div key={work.id} className="space-y-4 group">
              {/* Project Image */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-200 shadow-sm">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Project Category Tag */}
              <p className="text-[10px] font-sans tracking-[0.25em] uppercase text-neutral-400 font-semibold pt-1">
                {work.category}
              </p>

              {/* Project Title */}
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-atelier-dark group-hover:text-atelier-accent transition-colors">
                {work.title}
              </h3>

              {/* Project Details Description */}
              <p className="text-neutral-600 font-sans text-xs md:text-sm leading-relaxed font-light">
                {work.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
