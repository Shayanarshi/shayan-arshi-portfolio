import Button from './Button.jsx';

export default function ProjectCard({ project }) {
  const { title, category, description, tags, demoUrl, githubUrl, stats, featured } = project;

  return (
    <article className={`project-card ${featured ? 'featured' : ''}`}>
      <div className="project-card-header">
        <div className="project-category-badge">{category}</div>
        {stats && <span className="project-metric">{stats}</span>}
      </div>

      <div className="project-card-body">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>

        <div className="project-tags">
          {tags.map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="project-card-footer">
        <Button
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          size="sm"
          icon="↗"
        >
          Live Demo
        </Button>
        <Button
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="outline"
          size="sm"
          icon="⌥"
        >
          Code
        </Button>
      </div>
    </article>
  );
}
