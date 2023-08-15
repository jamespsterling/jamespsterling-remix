import { Link } from '@remix-run/react';
import { data } from '~/data/portfolio';
import { ProjectImage } from '.';

export default function Projects() {
  const kebabCase = (name: string) => name.toLocaleLowerCase().replaceAll(' ', '-');

  return (
    <div
      id="projects"
      style={{
        paddingTop: '3rem',
      }}
    >
      <h2 className="heading">Projects</h2>
      <div className="container">
        <div className="grid">
          {data.projects.map((project, i) => (
            <Link to={`/projects/${kebabCase(project.id)}`} className="project-link" key={i}>
              <div className="project shadow-large">
                <div className="project-image">
                  <div className={project.image.class}>
                    <ProjectImage image={project.image} />
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.name}</h3>
                  <p className="overflow">{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
