import React from 'react';
import { CallToAction } from '../components/CallToAction';
import { PROJECTS } from '../data/content';
import type { ProjectItem } from '../data/content';
import { PROJECT_DETAILS } from '../data/projectDetails';

interface ProjectDetailPageProps {
  project: ProjectItem;
  onNavigate: (href: string) => void;
  onOpenConsultation: () => void;
}

const handleInternalLink = (
  event: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  onNavigate: (href: string) => void,
) => {
  if (
    event.button !== 0
    || event.metaKey
    || event.ctrlKey
    || event.shiftKey
    || event.altKey
  ) return;

  event.preventDefault();
  onNavigate(href);
};

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  project,
  onNavigate,
  onOpenConsultation,
}) => {
  const detail = PROJECT_DETAILS[project.slug];
  const projectIndex = PROJECTS.findIndex((item) => item.id === project.id);
  const relatedProjects = Array.from(
    { length: 3 },
    (_, index) => PROJECTS[(projectIndex + index + 1) % PROJECTS.length],
  );

  return (
    <main id="main-content" className="project-detail-page">
      <section className="project-detail-back" aria-label="Project navigation">
        <a
          href="/projects"
          onClick={(event) => handleInternalLink(event, '/projects', onNavigate)}
        >
          <span aria-hidden="true">←</span>
          All projects
        </a>
        <p>{project.category} / {project.year}</p>
      </section>

      <header className="project-detail-title">
        <p className="about-eyebrow">
          <span>Case study {String(projectIndex + 1).padStart(2, '0')}</span>
          <span aria-hidden="true">|</span>
          <span>{project.location}</span>
        </p>
        <div className="project-detail-title__row">
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
      </header>

      <figure className="project-detail-hero">
        <div className="project-detail-hero__image">
          <img src={project.image} alt={project.imageAlt} decoding="async" />
        </div>
        <figcaption>
          <span>{project.title}</span>
          <span>Atelier 87° / {project.year}</span>
        </figcaption>
      </figure>

      <section className="project-detail-specs" aria-label="Project specifications">
        <dl>
          <div>
            <dt>Location</dt>
            <dd>{project.location}</dd>
          </div>
          <div>
            <dt>Typology</dt>
            <dd>{detail.typology}</dd>
          </div>
          <div>
            <dt>Discipline</dt>
            <dd>{project.category}</dd>
          </div>
          <div>
            <dt>Completed</dt>
            <dd>{project.year}</dd>
          </div>
          <div>
            <dt>Duration</dt>
            <dd>{detail.duration}</dd>
          </div>
        </dl>
      </section>

      <section className="project-detail-intro" aria-labelledby="project-scope-title">
        <div className="project-detail-intro__heading">
          <p className="about-eyebrow">
            <span>01</span>
            <span aria-hidden="true">|</span>
            <span>Scope and approach</span>
          </p>
          <h2 id="project-scope-title">{detail.introTitle}</h2>
        </div>

        <div className="project-detail-intro__copy">
          {detail.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <ul aria-label="Project scope">
            {detail.scope.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="project-detail-story" aria-label={`${project.title} project story`}>
        {detail.chapters.map((chapter, index) => (
          <article
            key={chapter.eyebrow}
            className={`project-content-unit project-content-unit--${index === 1 ? 'wide' : 'split'}${index === 2 ? ' project-content-unit--reverse' : ''}`}
          >
            <figure className="project-content-unit__media">
              <img
                src={chapter.image}
                alt={chapter.imageAlt}
                loading="lazy"
                decoding="async"
              />
              <figcaption>{chapter.caption}</figcaption>
            </figure>

            <div className="project-content-unit__copy">
              <p className="project-content-unit__eyebrow">{chapter.eyebrow}</p>
              <h2>{chapter.title}</h2>
              <p>{chapter.body}</p>
            </div>
          </article>
        ))}
      </section>

      <aside className="project-detail-explore" aria-labelledby="project-explore-title">
        <div className="project-detail-explore__heading">
          <p>Materials and making</p>
          <h2 id="project-explore-title">A closer look</h2>
        </div>

        <ol className="project-detail-explore__materials">
          {detail.materials.map((material, index) => (
            <li key={material}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              {material}
            </li>
          ))}
        </ol>

        <blockquote>
          <p>“{detail.quote}”</p>
          <cite>Atelier 87° project note</cite>
        </blockquote>
      </aside>

      <section className="project-detail-related" aria-labelledby="related-projects-title">
        <div className="project-detail-related__head">
          <p className="about-eyebrow">Continue exploring</p>
          <h2 id="related-projects-title">More projects</h2>
          <a
            href="/projects"
            onClick={(event) => handleInternalLink(event, '/projects', onNavigate)}
          >
            View all projects
          </a>
        </div>

        <div className="project-detail-related__grid">
          {relatedProjects.map((relatedProject) => (
            <article key={relatedProject.id}>
              <a
                href={`/projects/${relatedProject.slug}`}
                onClick={(event) => handleInternalLink(
                  event,
                  `/projects/${relatedProject.slug}`,
                  onNavigate,
                )}
              >
                <figure>
                  <img
                    src={relatedProject.image}
                    alt={relatedProject.imageAlt}
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
                <p>{relatedProject.category} / {relatedProject.year}</p>
                <h3>{relatedProject.title}</h3>
                <span>
                  Case study {String(PROJECTS.findIndex((item) => item.id === relatedProject.id) + 1).padStart(2, '0')} →
                </span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <CallToAction
        onOpenConsultation={onOpenConsultation}
        title="Begin with the home you have"
        description="Tell us what is working, what is not, and how you hope to live there. We will respond with a considered next step."
        buttonLabel="Discuss your project"
      />
    </main>
  );
};
