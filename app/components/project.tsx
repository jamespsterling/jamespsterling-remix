import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from '@remix-run/react';
import { ReactSVG } from 'react-svg';
import { data } from '~/data/portfolio';

export default function Project({ project }: { project: (typeof data.projects)[number] }) {
  const navigate = useNavigate();
  const imageExtension = (src: string) => src.split('.').pop();

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
            {imageExtension(project.image.src) === 'svg' ? (
              <div className="svg-wrapper">
                <ReactSVG src={project.image.src} />
              </div>
            ) : (
              <img src={project.image.src} />
            )}
          </div>
        </div>
        <div className="project-info">
          <p className="justify">{project.description}</p>
          {project.link && (
            <div style={{ marginTop: '4rem' }}>
              <Link to={project.link} target="_blank">
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
        </div>
      </div>
    </div>
  );
}
