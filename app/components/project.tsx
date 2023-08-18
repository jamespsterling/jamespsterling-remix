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
          {project.link && (
            <div style={{ marginTop: '4rem' }}>
              <Link to={project.link} target="_blank" rel="noopener">
                <button className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                  View
                  <FontAwesomeIcon icon={faExternalLink} size="xs" style={{ paddingLeft: '4px' }} />
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
