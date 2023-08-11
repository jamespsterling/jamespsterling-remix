import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from '@remix-run/react';
import { ReactSVG } from 'react-svg';
import { data } from '~/data/portfolio';

export default function Project({ id }: { id: string }) {
  const navigate = useNavigate();
  const imageExtension = (src: string) => src.split('.').pop();

  const project = data.projects.find((p) => p.id === id);

  if (!project) {
    navigate('/projects');
    return null;
  }

  return (
    <div id="projects" className="single">
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
          <h3>{project.name}</h3>
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
