import { Link } from '@remix-run/react';
import type { Project } from '~/data/types';
import { ProjectImage } from '.';

export default function Projects({ projects }: { projects: Project[] }) {
  const kebabCase = (name: string) => name.toLocaleLowerCase().replaceAll(' ', '-');

  return (
    <div
      id="projects"
      style={{
        paddingTop: '3rem',
      }}
    >
      <h2 className="heading">Projects</h2>
      <div className="grid-container">
        <div className="grid">
          {projects.map((project, i) => (
            <Link to={`/projects/${kebabCase(project.id)}`} className="project-link" key={i}>
              <div className="project shadow-large">
                <div className="project-image">
                  <div className={project.image.class}>
                    <ProjectImage image={project.image} />
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.name}</h3>
                  <p
                    className="overflow thumbnail"
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  ></p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
