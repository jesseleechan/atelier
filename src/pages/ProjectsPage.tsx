import React, { useMemo, useState } from 'react';
import { CallToAction } from '../components/CallToAction';
import { PROJECTS } from '../data/content';
import type { ProjectItem } from '../data/content';

interface ProjectsPageProps {
  onOpenConsultation: () => void;
  onNavigate: (href: string) => void;
}

type ProjectFilter = 'All' | ProjectItem['category'];

const FILTERS: ProjectFilter[] = [
  'All',
  'Renovation',
  'Interior Architecture',
  'Decoration',
];

const CARD_LAYOUTS = ['feature', 'portrait', 'portrait', 'wide', 'portrait', 'wide'];

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onOpenConsultation,
  onNavigate,
}) => {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('All');

  const filteredProjects = useMemo(
    () => activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  return (
    <main id="main-content" className="projects-page">
      <section className="projects-head" aria-labelledby="projects-page-title">
        <p className="about-eyebrow">
          <span>04</span>
          <span aria-hidden="true">|</span>
          <span>Selected projects</span>
        </p>

        <div className="projects-head__content">
          <h1 id="projects-page-title">
            Rooms with a point of view,
            <em> built to last.</em>
          </h1>

          <div className="projects-head__intro">
            <p>
              Our work spans decoration, interior architecture, and complete residential renovation. Each project begins with the building, the people who live there, and the particular life the rooms need to hold.
            </p>
            <p className="projects-head__note">New York City and selected residential projects beyond.</p>
          </div>
        </div>
      </section>

      <section className="projects-filter-bar" aria-label="Filter projects">
        <div className="projects-filter-bar__inner">
          <div className="projects-filter-bar__filters">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                aria-pressed={activeFilter === filter}
                className={activeFilter === filter ? 'is-active' : ''}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <p aria-live="polite">
            {String(filteredProjects.length).padStart(2, '0')} projects
          </p>
        </div>
      </section>

      <section className="projects-grid-section" aria-label={`${activeFilter} projects`}>
        <div className="projects-grid">
          {filteredProjects.map((project, index) => {
            const layout = CARD_LAYOUTS[index % CARD_LAYOUTS.length];

            return (
              <article
                key={project.id}
                id={project.slug}
                className={`project-card project-card--${layout}`}
              >
                <a
                  className="project-card__link"
                  href={`/projects/${project.slug}`}
                  aria-label={`View ${project.title} case study`}
                  onClick={(event) => {
                    if (
                      event.button !== 0
                      || event.metaKey
                      || event.ctrlKey
                      || event.shiftKey
                      || event.altKey
                    ) return;

                    event.preventDefault();
                    onNavigate(`/projects/${project.slug}`);
                  }}
                >
                  <figure className="project-card__media">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      loading={index < 2 ? 'eager' : 'lazy'}
                      decoding="async"
                    />
                    <figcaption>{project.year}</figcaption>
                  </figure>

                  <div className="project-card__content">
                    <p className="project-card__meta">
                      <span>{project.category}</span>
                      <span>{project.location}</span>
                    </p>
                    <h2>{project.title}</h2>
                    <p className="project-card__description">{project.description}</p>
                    <p className="project-card__index">View case study {String(index + 1).padStart(2, '0')}</p>
                  </div>
                </a>
              </article>
            );
          })}
        </div>
      </section>

      <CallToAction
        onOpenConsultation={onOpenConsultation}
        title="Have a home you would like us to consider?"
        description="Tell us about the property, the changes you are considering, and where you are in the process. We will respond with a clear next step."
        buttonLabel="Discuss your project"
      />
    </main>
  );
};
