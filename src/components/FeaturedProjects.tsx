import React, { useState } from 'react';
import { IMAGES } from '../data/content';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const FeaturedProjects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projects = IMAGES.featuredProjects;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const currentProject = projects[currentIndex];

  return (
    <section id="portfolio" className="w-full bg-atelier-dark text-white">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20 border-b border-neutral-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-[0.08em] text-white uppercase">
              FEATURED PROJECTS
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-neutral-400 font-sans text-sm md:text-base leading-relaxed font-light">
              Discover some of our recent transformations across exclusive residences in Manhattan and Brooklyn, showcasing our meticulous attention to timeless details and client-tailored interior architectures.
            </p>
          </div>
        </div>
      </div>

      {/* Large Featured Project View */}
      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-24 pt-6">
        <div className="relative aspect-[16/9] sm:aspect-[21/9] md:aspect-[16/8] w-full overflow-hidden bg-neutral-900 shadow-2xl">
          <img
            key={currentIndex}
            src={currentProject.image}
            alt={currentProject.caption}
            className="w-full h-full object-cover object-center animate-fadeIn duration-500"
          />

          {/* Subtle gradient vignette at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Bottom Bar: Project Caption (Left) & Controls (Right) */}
          <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-10 md:right-10 flex items-center justify-between z-10">
            <div>
              <p className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] text-white font-medium drop-shadow">
                {currentProject.caption}
              </p>
              <p className="font-sans text-[11px] text-neutral-300 font-light tracking-wider">
                {currentProject.location}
              </p>
            </div>

            {/* Slider Navigation Arrows */}
            <div className="flex items-center space-x-3">
              <button
                onClick={handlePrev}
                aria-label="Previous project"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/40 bg-black/40 backdrop-blur-xs flex items-center justify-center text-white hover:bg-white hover:text-atelier-dark hover:border-white transition-all duration-300"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next project"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/40 bg-black/40 backdrop-blur-xs flex items-center justify-center text-white hover:bg-white hover:text-atelier-dark hover:border-white transition-all duration-300"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
