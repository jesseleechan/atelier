import React from 'react';
import { CallToAction } from '../components/CallToAction';
import { IMAGES } from '../data/content';

interface AboutPageProps {
  onOpenConsultation: () => void;
}

const PRINCIPALS = [
  {
    number: '01',
    title: 'Interior architecture',
    role: 'Founding principal',
    image: '/images/about-principal-architecture.webp',
    alt: 'Atelier 87 founding principal standing in the studio',
    description:
      'Leads spatial planning, architectural detailing, and the technical coordination that carries each residence from first study through construction.',
  },
  {
    number: '02',
    title: 'Design & curation',
    role: 'Founding principal',
    image: '/images/about-principal-design.webp',
    alt: 'Atelier 87 founding principal seated in the studio',
    description:
      'Shapes the material palette, custom furnishings, art, and collected objects that give every room its distinct and personal character.',
  },
];

const CRAFT_PRINCIPLES = [
  {
    number: '01',
    title: 'Read the room',
    description:
      'We begin with the building itself—its proportions, light, history, and the way a client wants to live within it.',
  },
  {
    number: '02',
    title: 'Choose with purpose',
    description:
      'Materials and objects earn their place through honest construction, tactile quality, and the ability to age with grace.',
  },
  {
    number: '03',
    title: 'Carry it through',
    description:
      'A single studio follows every detail from concept to installation, keeping the original idea intact through completion.',
  },
];

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenConsultation }) => {
  return (
    <main id="main-content" className="about-page">
      <section className="about-hero" aria-labelledby="about-page-title">
        <div className="about-hero__statement">
          <p className="about-eyebrow">
            <span>02</span>
            <span aria-hidden="true">|</span>
            <span>About the studio</span>
          </p>

          <h1 id="about-page-title" className="about-hero__title">
            Homes with history,
            <em> made for now.</em>
          </h1>

          <div className="about-hero__intro">
            <p className="about-hero__index" aria-hidden="true">87°</p>
            <p>
              Atelier 87° is a New York interior architecture and design studio creating thoughtful residences through proportion, material, and enduring craft.
            </p>
          </div>
        </div>

        <figure className="about-hero__media">
          <img
            src={IMAGES.aboutHero}
            alt="A curved timber chair and worktable caught in afternoon light"
            className="about-hero__image"
            fetchPriority="high"
          />
          <figcaption>Material study / New York studio</figcaption>
        </figure>
      </section>

      <section className="about-founders" aria-labelledby="founders-title">
        <figure className="about-founders__media">
          <img
            src={IMAGES.aboutFounders}
            alt="The two Atelier 87 founding principals in their studio"
            loading="lazy"
            decoding="async"
          />
        </figure>

        <div className="about-founders__story">
          <p className="about-eyebrow about-eyebrow--light">
            <span>01</span>
            <span aria-hidden="true">|</span>
            <span>Our story</span>
          </p>

          <div className="about-founders__copy">
            <h2 id="founders-title">
              Two perspectives,
              <em> one exacting point of view.</em>
            </h2>
            <div className="about-founders__rule" aria-hidden="true" />
            <p>
              Our principals bring three decades of combined experience across interiors, architecture, and residential construction. That breadth lets the studio move naturally between the emotional and the exact—from the atmosphere of a room to the junction of stone and timber.
            </p>
            <p>
              We work closely with homeowners who value authenticity over novelty. Every project starts with listening, continues through a disciplined design process, and ends with a home that feels collected rather than decorated.
            </p>
          </div>
        </div>
      </section>

      <section className="about-team" aria-labelledby="team-title">
        <header className="about-team__heading">
          <p className="about-eyebrow">
            <span>People</span>
            <span aria-hidden="true">|</span>
            <span>Meet the team</span>
          </p>
          <h2 id="team-title">A close-knit studio, led from first conversation to final placement.</h2>
          <p>
            Clients work directly with the studio principals throughout the process, supported by a trusted network of makers, architects, contractors, and art advisers.
          </p>
        </header>

        <div className="about-team__grid">
          {PRINCIPALS.map((principal, index) => (
            <article
              key={principal.number}
              className={`about-team-card ${index === 1 ? 'about-team-card--offset' : ''}`}
            >
              <div className="about-team-card__media">
                <img
                  src={principal.image}
                  alt={principal.alt}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="about-team-card__meta">
                <p>{principal.number} / {principal.role}</p>
                <h3>{principal.title}</h3>
                <p className="about-team-card__description">{principal.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-craft" aria-labelledby="craft-title">
        <div className="about-craft__heading">
          <p className="about-eyebrow about-eyebrow--light">
            <span>Method</span>
            <span aria-hidden="true">|</span>
            <span>How we work</span>
          </p>
          <h2 id="craft-title">Craft is the thread between every decision.</h2>
        </div>

        <div className="about-craft__principles">
          {CRAFT_PRINCIPLES.map((principle) => (
            <article key={principle.number} className="about-craft__principle">
              <p className="about-craft__number">{principle.number}</p>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </section>

      <CallToAction
        onOpenConsultation={onOpenConsultation}
        title="Let’s shape a home that feels considered from the start."
        description="Share what you are planning, what is not working, and what you want your home to make possible. We will begin with a focused conversation about scope, timing, and fit."
        buttonLabel="Begin a conversation"
      />
    </main>
  );
};
