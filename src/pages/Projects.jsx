import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <div className="page container">
      <span className="eyebrow">projects</span>
      <h1>Projects</h1>
      <p className="projects-intro">
        <code></code>.
      </p>

      <ul className="project-list">
        {projects.map((project) => (
          <li key={project.id}>
            <Link to={`/projects/${project.id}`} className="project-card">
              <div className="project-card-head">
                <h2 className="project-card-title">{project.title}</h2>
                <span className={`status status-${project.status.replace(' ', '-')}`}>
                  {project.status}
                </span>
              </div>
              <p className="project-card-tagline">{project.tagline}</p>
              <div className="project-card-stack">
                {project.stack.map((tech) => (
                  <span className="chip" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
              <span className="project-card-link mono">projects{project.id} →</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}