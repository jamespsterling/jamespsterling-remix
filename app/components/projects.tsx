import { Link } from '@remix-run/react';
import { ReactSVG } from 'react-svg';
import { data } from '~/data/portfolio';

export default function Projects() {
  const imageExtension = (src: string) => src.split('.').pop();
  const kebabCase = (name: string) => name.toLocaleLowerCase().replaceAll(' ', '-');

  return (
    <div id="projects" className="background-alt" style={{
      paddingTop: '3rem'
    }}>
      <h2 className="heading">Projects</h2>
      <div className="container">
        <div className="grid">
          {data.projects.map((project, i) => (
            <Link to={`/projects/${kebabCase(project.id)}`} className="project-link" key={i}>
              <div className="project shadow-large">
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
                  <p className='overflow'>{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
