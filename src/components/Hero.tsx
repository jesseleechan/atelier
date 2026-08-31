import React from 'react';
import { IMAGES } from '../data/content';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section id="home" className="atelier-hero">
      <div className="atelier-hero__media" aria-hidden="true">
        <img
          src={IMAGES.hero}
          alt=""
          className="atelier-hero__image"
          fetchPriority="high"
        />
        <div className="atelier-hero__overlay" />
      </div>

      <div className="atelier-hero__content">
        <p className="atelier-hero__eyebrow">PARK AVENUE DUPLEX</p>
        <h1 className="atelier-hero__title">Build | Home Renovation</h1>
        <button
          onClick={onOpenConsultation}
          className="atelier-outline-button atelier-hero__button"
        >
          SCHEDULE A CONSULTATION
        </button>
      </div>
    </section>
  );
};
