import { ReactSVG } from 'react-svg';
import { data } from '~/data/portfolio';

export default function Projects() {
  const imageExtension = (src: string) => src.split('.').pop();

  return (
    <div id="projects" className="background-alt">
      <h2 className="heading">Projects</h2>
      <div className="container">
        <div className="row">
          {data.projects.map((project, i) => (
            <div className="project shadow-large" key={i}>
              <div className="project-image">
                <div className={project.image.class}>
                  {imageExtension(project.image.src) === 'svg' ? (
                    <div className="svg-wrapper">
                      <ReactSVG src={project.image.src} />
                    </div>
                  ) : (
                    <img
                      src={project.image.src}
                    />
                  )}
                </div>
              </div>
              <div className="project-info">
                <h3>{project.name}</h3>
                <p className="justify">{project.description}</p>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener" className="subtle-link">
                    View &raquo;
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
