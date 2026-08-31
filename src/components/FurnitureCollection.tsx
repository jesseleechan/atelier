import React from 'react';
import { IMAGES } from '../data/content';
import type { FurnitureCategory } from '../data/content';
import { ArrowRight } from 'lucide-react';

interface FurnitureCollectionProps {
  onSelectCategory?: (category: FurnitureCategory) => void;
}

export const FurnitureCollection: React.FC<FurnitureCollectionProps> = ({ onSelectCategory }) => {
  return (
    <section id="shop" className="w-full bg-atelier-bg py-24 md:py-32 px-6 md:px-12 border-b border-atelier-border/50">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-2">
            <p className="text-xs font-sans tracking-[0.3em] uppercase text-atelier-muted font-medium">
              HANDCRAFTED FURNITURE
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-[0.08em] text-atelier-dark uppercase">
              THE COLLECTION
            </h2>
          </div>

          <div>
            <button
              onClick={() => onSelectCategory?.(IMAGES.furniture[0])}
              className="group inline-flex items-center text-xs uppercase tracking-[0.2em] font-semibold text-neutral-600 hover:text-atelier-dark transition-all"
            >
              <span>Explore all collections</span>
              <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* 4 Category Product Cards with Framed Border Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {IMAGES.furniture.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory?.(cat)}
              className="cursor-pointer group flex flex-col space-y-4"
            >
              {/* Image Frame with Elegant Inner Margins / Matting */}
              <div className="bg-[#ECE7DD] p-3 md:p-4 border border-atelier-border/80 transition-all duration-300 group-hover:shadow-card-luxury group-hover:border-neutral-400">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-200">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Category Label */}
              <div className="flex items-center justify-between pt-1">
                <h3 className="font-sans text-xs tracking-[0.25em] uppercase font-semibold text-atelier-dark group-hover:text-atelier-accent transition-colors">
                  {cat.title}
                </h3>
                <span className="text-[10px] text-neutral-400 font-light">
                  {cat.itemCount} pieces
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
