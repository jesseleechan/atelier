import React from 'react';

export const WelcomeSection: React.FC = () => {
  return (
    <section className="atelier-welcome" aria-labelledby="welcome-title">
      <div className="atelier-welcome__inner">
        <p className="atelier-welcome__eyebrow">
          <span>01</span><span aria-hidden="true">|</span><span>WELCOME</span>
        </p>
        <h2 id="welcome-title" className="atelier-welcome__title">
          CREATE A HOME YOU LOVE
        </h2>
        <p className="atelier-welcome__body">
          We offer interior solutions grounded in timeless principles that have lasting value. Our approach is built on relationships, ensuring that each project is meaningful. Rather than sourcing furnishings from big-box stores, we work directly with select artisans, trade sources, private studios, and auction houses to create valuable homes that align with our clients&rsquo; taste, vision, and long-term goals. Our services include:
        </p>
      </div>
    </section>
  );
};
