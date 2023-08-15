import { Link } from '@remix-run/react';
import { useState } from 'react';
import { ReactSVG } from 'react-svg';
import { data } from '~/data/portfolio';

function ProjectImage({ image }: { image: (typeof data.projects)[0]['image'] }) {
  const [loading, setLoading] = useState(true);
  const imageExtension = (src: string) => src.split('.').pop();

  return (
    <>
      {imageExtension(image.src) === 'svg' ? (
        <div className="svg-wrapper">
          <ReactSVG src={image.src} />
        </div>
      ) : (
        <>
          <img
            src={image.src}
            style={{
              height: loading ? 0 : 'auto',
              opacity: loading ? 0 : 1,
              transition: '0.5s all',
            }}
            alt={`${image.src} image`}
            onLoad={() => setLoading(false)}
            loading="lazy"
          />
          {loading && (
            <div className="loading">
              <img src="/img/loading.svg" alt="loading..." />
            </div>
          )}
        </>
      )}
    </>
  );
}

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
