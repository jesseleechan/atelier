import React, { useState } from 'react';
import { PROCESS_PHASES } from '../data/content';

export const ProcessPhases: React.FC = () => {
  const [activePhase, setActivePhase] = useState<number>(0);

  return (
    <section className="w-full bg-atelier-bg py-24 md:py-32 px-6 md:px-12 border-b border-atelier-border/50">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Centered Heading and Intro Narrative */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-[0.08em] text-atelier-dark uppercase">
            CREATE A HOME YOU LOVE – IN JUST 4 PHASES
          </h2>

          <p className="text-neutral-600 font-sans text-sm sm:text-base leading-relaxed font-light text-balance">
            Our process is an intentional, structured, and exemplary efficient framework ensuring smooth execution, whether you're exploring home improvement services for a project of 1-room renovation or whole architectural reconstruction. Our team guides you at every step from initial concept to turnkey release, ensuring complete details, timely delivery, and exact outcomes aligned with your goals and lifestyle needs.
          </p>
        </div>

        {/* 4 Phases Horizontal Navigation & Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_PHASES.map((phase, index) => {
            const isSelected = activePhase === index;
            return (
              <div
                key={phase.number}
                onClick={() => setActivePhase(index)}
                className={`cursor-pointer border p-6 md:p-8 transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-atelier-card border-atelier-dark shadow-md scale-[1.02]'
                    : 'bg-transparent border-atelier-border/70 hover:border-neutral-400 hover:bg-atelier-card/50'
                }`}
              >
                <div className="space-y-4">
                  {/* Phase Number & Label */}
                  <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-neutral-400 font-semibold block">
                    PHASE {phase.number}
                  </span>

                  {/* Phase Title */}
                  <h3 className="font-serif text-2xl font-normal text-atelier-dark">
                    {phase.name}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-600 font-sans text-xs leading-relaxed font-light">
                    {phase.shortDesc}
                  </p>
                </div>

                {/* Bullets when active */}
                <div className={`mt-6 pt-4 border-t border-atelier-border/50 ${isSelected ? 'block' : 'hidden sm:block opacity-60'}`}>
                  <ul className="space-y-1.5">
                    {phase.bullets.map((b, i) => (
                      <li key={i} className="text-[11px] text-neutral-500 font-light flex items-center">
                        <span className="w-1 h-1 rounded-full bg-atelier-accent mr-2" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
