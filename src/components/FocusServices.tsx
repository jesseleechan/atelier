import React from 'react';
import { IMAGES } from '../data/content';

interface FocusServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export const FocusServices: React.FC<FocusServicesProps> = ({ onSelectService }) => {
  return (
    <section className="atelier-services" aria-label="Interior design services">
      <div className="atelier-services__inner">
        <article className="atelier-service atelier-service--light">
          <div className="atelier-service__text">
            <p className="atelier-service__eyebrow">
              <span>01</span><span aria-hidden="true">|</span><span>DECOR SERVICES</span>
            </p>
            <div className="atelier-service__content">
              <h2 className="atelier-service__title">
              Complete home décor that reflects your <span className="font-serif italic font-normal">unique</span> aesthetic, lifestyle, and personal preferences.
              </h2>
              <p className="atelier-service__body">
                We collaborate with exclusive design sources and a private network of artisans to help us bring your vision to life and create a home tailored to you. From handcrafted custom furnishings to one-of-a-kind art pieces, every aspect of the process emphasizes authenticity and incorporates exceptional craftsmanship, high-quality materials, and timeless designs.
              </p>
              <button
                onClick={() => onSelectService?.('Home Décor & Curation')}
                className="atelier-service__link"
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="atelier-service__media">
            <img
              src={IMAGES.featureDoorway}
              alt="Traditional white interior with a cane chair and fireplace"
              className="atelier-service__image"
              loading="lazy"
              decoding="async"
            />
          </div>
        </article>

        <article className="atelier-service atelier-service--dark">
          <div className="atelier-service__media">
            <img
              src={IMAGES.featureSolarium}
              alt="Glass-walled garden pavilion with a warm wood kitchen"
              className="atelier-service__image"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="atelier-service__text">
            <p className="atelier-service__eyebrow">
              SERVICE 2. DESIGN
            </p>
            <div className="atelier-service__content">
              <h2 className="atelier-service__title">
                Timeless design solutions <span className="font-serif italic font-normal">without</span> structural changes that enhance your everyday experience at home.
              </h2>
              <p className="atelier-service__body">
                Strategic investments that are functional, innovative, and custom-designed to provide personal and financial returns. From home improvements that include custom storage solutions and high-quality finishes to complete home upgrades that include lighting control systems and smart home integration, we&rsquo;ll help you make informed decisions that meet your long-term goal.
              </p>
              <button
                onClick={() => onSelectService?.('Timeless Interior Solutions')}
                className="atelier-service__link"
              >
                Learn More
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
