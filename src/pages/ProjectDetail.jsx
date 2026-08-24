import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams(); // id is always a string, e.g. "2"

  // Project ids are stored as numbers, so convert before comparing.
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="page container project-detail">
        <span className="eyebrow"> project not found</span>
        <h1>No project matches "{id}"</h1>
        <p>
          That project id doesn't exist. It may have been renamed or removed.
        </p>
        <Link to="/projects" className="btn btn-ghost">
          ← back to all projects
        </Link>
      </div>
    );
  }

  return (
    <div className="page container project-detail">
      <Link to="/projects" className="back-link mono">
        ← all projects
      </Link>
      <span className="eyebrow">// project {project.id}</span>
      <div className="project-detail-head">
        <h1>{project.title}</h1>
        <span className={`status status-${project.status.replace(' ', '-')}`}>
          {project.status}
        </span>
      </div>
      <p className="project-detail-tagline">{project.tagline}</p>
      <p className="project-detail-description">{project.description}</p>

      <div className="project-card-stack">
        {project.stack.map((tech) => (
          <span className="chip" key={tech}>
            {tech}
          </span>
        ))}
      </div>

      <div className="home-actions project-detail-actions">
        <a href={project.link} className="btn" target="_blank" rel="noreferrer">
          view on github →
        </a>
        <Link to="/projects" className="btn btn-ghost">
          back to projects
        </Link>
      </div>
    </div>
  );
}