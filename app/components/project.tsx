import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from '@remix-run/react';
import type { Project } from '~/data/types';
import { ProjectImage } from '.';

export default function Project({ project }: { project: Project }) {
  const navigate = useNavigate();

  if (!project) {
    navigate('/projects');
    return null;
  }

  return (
    <div
      id="projects"
      className="single"
      style={{
        paddingTop: '3rem',
      }}
    >
      <h2 className="heading">{project.name}</h2>
      <div className="grid single">
        <div className="project-image">
          <div className={project.image.class}>
            <ProjectImage image={project.image} />
          </div>
        </div>
        <div className="project-info">
          <p className="justify" dangerouslySetInnerHTML={{ __html: project.description }}></p>
          {/* <div className="project-tech grid">
            {(project.technologies ?? []).map((technology) => {
              return <div>{technology}</div>;
            })}
          </div> */}
          {project.link && (
            <div style={{ marginTop: '4rem' }}>
              <Link to={project.link} target="_blank" rel="noopener">
                <button className="btn btn-secondary">
                  View
                  <FontAwesomeIcon
                    icon={faExternalLink}
                    size="xs"
                    style={{ paddingLeft: '4px', top: '1px', position: 'relative' }}
                  />
                </button>
              </Link>
            </div>
          )}

          {project.date && (
            <div className="date" style={{ textAlign: 'right' }}>
              {new Date(project.date).toLocaleDateString('en-us', {
                year: 'numeric',
                month: 'short',
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
