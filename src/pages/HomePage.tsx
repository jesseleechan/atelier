import React from 'react';
import { Hero } from '../components/Hero';
import { WelcomeSection } from '../components/WelcomeSection';
import { FocusServices } from '../components/FocusServices';
import { InvestmentOptions } from '../components/InvestmentOptions';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { ProcessPhases } from '../components/ProcessPhases';
import { LatestWorks } from '../components/LatestWorks';
import { AboutSection } from '../components/AboutSection';
import { HomeTransformations } from '../components/HomeTransformations';
import { FurnitureCollection } from '../components/FurnitureCollection';
import { FAQSection } from '../components/FAQSection';
import { CallToAction } from '../components/CallToAction';
import type { InvestmentTier, FurnitureCategory } from '../data/content';

interface HomePageProps {
  onOpenConsultation: () => void;
  onSelectTier: (tier: InvestmentTier) => void;
  onSelectCategory: (category: FurnitureCategory) => void;
  onOpenStory: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenConsultation,
  onSelectTier,
  onSelectCategory,
  onOpenStory,
}) => {
  return (
    <main id="main-content">
      {/* 1. Hero Section (Screenshot 4) */}
      <Hero onOpenConsultation={onOpenConsultation} />

      {/* 2. Welcome Philosophy Intro (Screenshot 4) */}
      <WelcomeSection />

      {/* 3. 3 Focus Services Split Sections (Screenshots 4 & 3) */}
      <FocusServices
        onSelectService={() => onOpenConsultation()}
      />

      {/* 4. Investment Options / Pricing Tiers (Screenshot 3) */}
      <InvestmentOptions onSelectTier={onSelectTier} />

      {/* 5. Featured Projects Dark Slider (Screenshot 3) */}
      <FeaturedProjects />

      {/* 6. 4-Phase Design Methodology (Screenshot 3) */}
      <ProcessPhases />

      {/* 7. Latest Works 3-Column Grid (Screenshot 2) */}
      <LatestWorks />

      {/* 8. About Atelier 87° & 3 Pillars (Screenshot 2) */}
      <AboutSection onOpenStory={onOpenStory} />

      {/* 9. Home Transformations Dual Showcase (Screenshot 2) */}
      <HomeTransformations />

      {/* 10. Handcrafted Furniture Collection (Screenshot 1) */}
      <FurnitureCollection onSelectCategory={onSelectCategory} />

      {/* 11. Frequently Asked Questions Accordion (Screenshot 1) */}
      <FAQSection />

      {/* 12. Call to Action Banner (Screenshot 1) */}
      <CallToAction onOpenConsultation={onOpenConsultation} />
    </main>
  );
};
