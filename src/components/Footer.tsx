import React from 'react';
import { FOOTER_LINKS } from '../data/content';

interface FooterProps {
  onNavigate?: (href: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-atelier-bg py-16 md:py-24 px-6 md:px-12 text-atelier-dark border-t border-atelier-border/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Left: Brand info & copyright */}
        <div className="space-y-12 max-w-sm">
          <div>
            <h3 className="font-serif text-xl md:text-2xl font-normal tracking-wide text-atelier-dark">
              Atelier 87° Interior Design
            </h3>
            <p className="text-neutral-500 font-sans text-xs mt-2 font-light">
              Bespoke interior architecture & luxury residences in New York City.
            </p>
          </div>

          <p className="text-[10px] font-sans tracking-[0.2em] uppercase text-neutral-400 font-medium">
            © 2026 ATELIER 87° DESIGN STUDIO LTD.
          </p>
        </div>

        {/* Right: Navigation columns */}
        <div className="space-y-4">
          <p className="text-[11px] font-sans tracking-[0.25em] uppercase text-neutral-400 font-semibold">
            NAVIGATION
          </p>
          <ul className="space-y-2.5">
            {FOOTER_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    if (!onNavigate) return;
                    e.preventDefault();
                    onNavigate(link.href);
                  }}
                  className="font-sans text-xs md:text-sm text-neutral-600 hover:text-atelier-dark transition-colors font-light block"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
