import React from 'react';
import { CallToAction } from '../components/CallToAction';
import { IMAGES } from '../data/content';

interface ServicesPageProps {
  onOpenConsultation: () => void;
}

const SERVICE_INDEX = [
  { number: '01', label: 'Decoration', href: '#decoration' },
  { number: '02', label: 'Design', href: '#design' },
  { number: '03', label: 'Build', href: '#build' },
];

const DECORATION_SCOPE = [
  'Furniture & lighting',
  'Custom pieces',
  'Art & objects',
  'Styling & installation',
];

const DESIGN_SCOPE = [
  'Space planning',
  'Kitchens & bathrooms',
  'Custom millwork',
  'Lighting & controls',
];

const BUILD_SCOPE = [
  'Architectural development',
  'Permits & board submissions',
  'Contractor coordination',
  'Construction oversight',
];

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenConsultation }) => {
  return (
    <main id="main-content" className="services-page">
      <section className="services-hero" aria-labelledby="services-page-title">
        <div className="services-hero__statement">
          <p className="about-eyebrow">
            <span>03</span>
            <span aria-hidden="true">|</span>
            <span>Services</span>
          </p>

          <h1 id="services-page-title">
            The right level of change,
            <em> thoughtfully carried through.</em>
          </h1>

          <p className="services-hero__intro">
            From the final layer of objects to a complete architectural renovation, our three service levels meet a home—and its owners—where they are.
          </p>

          <nav className="services-index" aria-label="Services on this page">
            {SERVICE_INDEX.map((service) => (
              <a key={service.number} href={service.href}>
                <span>{service.number}</span>
                <span>{service.label}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="services-hero__gallery" aria-label="Atelier 87 service portfolio">
          <figure className="services-hero__image services-hero__image--primary">
            <img
              src={IMAGES.featureDoorway}
              alt="A restored white interior with a cane chair and fireplace"
              fetchPriority="high"
            />
            <figcaption>Decoration / collected living</figcaption>
          </figure>
          <figure className="services-hero__image">
            <img
              src={IMAGES.featureSolarium}
              alt="A glass pavilion with black framing and warm timber interiors"
              fetchPriority="high"
            />
            <figcaption>Design / spatial refinement</figcaption>
          </figure>
          <figure className="services-hero__image">
            <img
              src={IMAGES.serviceBuild}
              alt="A dining room with a sculptural white table and timber chairs"
              fetchPriority="high"
            />
            <figcaption>Build / architectural change</figcaption>
          </figure>
        </div>
      </section>

      <section id="decoration" className="service-chapter service-decoration" aria-labelledby="decoration-title">
        <div className="service-chapter__copy">
          <p className="about-eyebrow">
            <span>Service 01</span>
            <span aria-hidden="true">|</span>
            <span>Decoration</span>
          </p>

          <div className="service-chapter__body">
            <h2 id="decoration-title">
              A home assembled around
              <em> the way you live.</em>
            </h2>
            <p>
              Decoration is for homes whose architecture is already working, but whose rooms need clarity, comfort, and a more personal point of view. We edit what is there, source what is missing, and compose every layer with restraint.
            </p>
            <p>
              Existing furniture and art are welcome. The result should feel accumulated over time—not installed all at once.
            </p>

            <button type="button" className="service-text-link" onClick={onOpenConsultation}>
              Discuss a decoration project
            </button>
          </div>
        </div>

        <div className="service-decoration__visual">
          <figure>
            <img
              src={IMAGES.featureDoorway}
              alt="A quiet layered interior showing antique furniture and a restored fireplace"
              loading="lazy"
              decoding="async"
            />
            <figcaption>01 / Furnishing, art, and atmosphere</figcaption>
          </figure>

          <div className="service-scope-grid" aria-label="Decoration scope">
            {DECORATION_SCOPE.map((item, index) => (
              <p key={item}><span>0{index + 1}</span>{item}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="design" className="service-chapter service-design" aria-labelledby="design-title">
        <figure className="service-design__media">
          <img
            src={IMAGES.featureSolarium}
            alt="A glass-walled addition framing a warm contemporary kitchen"
            loading="lazy"
            decoding="async"
          />
          <figcaption>02 / Interior architecture without structural reconfiguration</figcaption>
        </figure>

        <div className="service-design__copy">
          <p className="about-eyebrow about-eyebrow--light">
            <span>Service 02</span>
            <span aria-hidden="true">|</span>
            <span>Design</span>
          </p>

          <div className="service-chapter__body">
            <h2 id="design-title">
              Change how a home feels
              <em> without changing its bones.</em>
            </h2>
            <p>
              Our design service addresses the fixed elements that shape daily life: kitchens, bathrooms, storage, millwork, lighting, and finish palettes. It suits homes that need meaningful improvement without a complete rebuild.
            </p>

            <div className="service-design__scope" aria-label="Design scope">
              {DESIGN_SCOPE.map((item, index) => (
                <p key={item}><span>0{index + 1}</span>{item}</p>
              ))}
            </div>

            <button type="button" className="service-text-link service-text-link--light" onClick={onOpenConsultation}>
              Discuss an interior design project
            </button>
          </div>
        </div>
      </section>

      <section id="build" className="service-build" aria-labelledby="build-title">
        <header className="service-build__heading">
          <p className="about-eyebrow">
            <span>Service 03</span>
            <span aria-hidden="true">|</span>
            <span>Build</span>
          </p>

          <h2 id="build-title">
            Architectural change, resolved from plan
            <em> to final detail.</em>
          </h2>

          <div className="service-build__intro">
            <p>
              Build is our complete renovation service for homes that require a new plan, substantial construction, or full architectural coordination.
            </p>
            <button type="button" className="service-text-link" onClick={onOpenConsultation}>
              Discuss a renovation
            </button>
          </div>
        </header>

        <figure className="service-build__media">
          <img
            src={IMAGES.serviceBuild}
            alt="Completed dining room renovation with custom wall panels and a sculptural table"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            <span>Upper East Side residence</span>
            <span>Interior architecture / renovation</span>
          </figcaption>
        </figure>

        <div className="service-build__scope" aria-label="Build scope">
          {BUILD_SCOPE.map((item, index) => (
            <p key={item}><span>0{index + 1}</span>{item}</p>
          ))}
        </div>
      </section>

      <CallToAction
        onOpenConsultation={onOpenConsultation}
        title="Not sure where your project begins?"
        description="Tell us what you would like to change. We will help define the right scope, sequence, and level of service during the initial conversation."
        buttonLabel="Schedule an initial conversation"
      />
    </main>
  );
};
