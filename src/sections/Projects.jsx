
import { useState } from 'react';
import { projects } from '../data/project.js';
import {
  IconGlobe,
  IconGithub,
  IconLinkedIn,
} from '../components/Icon.jsx';

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="modal-box"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div>
            <span className="modal-badge">
              {project.badge}
            </span>
            <h2 className="modal-title">
              {project.title}
            </h2>
            <p className="modal-subtitle">
              {project.subtitleText}
            </p>
          </div>

          <button
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="modal-body">
          <p className="modal-desc">
            {project.description}
          </p>

          <div className="modal-section-title">
            Key highlights
          </div>

          <ul className="modal-bullets">
            {project.bullets.map((bullet) => (
              <li key={bullet} className="modal-bullet">
                {bullet}
              </li>
            ))}
          </ul>

          <div className="modal-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="tag-pill">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="modal-footer">
          {project.deployUrl && (
            <a
              href={project.deployUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-link-btn"
            >
              <IconGlobe /> Live Demo
            </a>
          )}

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-link-btn"
          >
            <IconGithub /> View Code
          </a>

          <a
            href={project.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-link-btn"
          >
            <IconLinkedIn /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <>
      <section id="work" className="work-section">
        <div className="work-container">
          <span className="section-label">Work</span>

          <h2 className="work-title">
            Selected projects
          </h2>

          <p className="work-subtitle">
            Java backend applications and full-stack projects
            built with Spring Boot, SQL, and React.js. Click
            a card to explore the details.
          </p>

          <div className="projects-grid-2x2">
            {projects.map((project) => (
              <button
                key={project.id}
                type="button"
                className="project-grid-card"
                onClick={() => setActiveProject(project)}
                aria-label={`Open ${project.title}`}
              >
                <div className="pgc-top">
                  <span className="pgc-badge">
                    {project.badge}
                  </span>
                  <span className="pgc-year">
                    {project.year}
                  </span>
                </div>

                <h3 className="pgc-title">
                  {project.title}
                </h3>

                <p className="pgc-subtitle">
                  {project.subtitleText}
                </p>

                <div className="pgc-tags">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}

                  {project.tags.length > 3 && (
                    <span className="tag-pill">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                <div className="pgc-links">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pgc-icon-link"
                    title="GitHub"
                    aria-label="GitHub"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <IconGithub />
                  </a>

                  
                    {project.deployUrl && (
                     <a
                       href={project.deployUrl}
                       target="_blank"
                       rel="noopener noreferrer"
                        className="pgc-icon-link"
                       title="Live Demo"
                       aria-label="Live Demo"
                       onClick={(e) => e.stopPropagation()}
                     >
                       <IconGlobe />
                     </a>
                    )}

                  <a
                    href={project.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pgc-icon-link"
                    title="LinkedIn"
                    aria-label="LinkedIn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <IconLinkedIn />
                  </a>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </>
  );
}
