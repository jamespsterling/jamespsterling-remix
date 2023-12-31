import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from '@remix-run/react';
import { clsx } from 'clsx';
import type { Project, Technology } from '~/data/types';
import { ProjectImage } from '.';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

export default function Project({
  project,
  technologies,
}: {
  project: Project;
  technologies: Technology[];
}) {
  const navigate = useNavigate();

  if (!project) {
    navigate('/projects');
    return null;
  }

  return (
    <article className="max-w-1xl px-6 py-6 mx-auto space-y-16 dark:text-gray-50">
      <div className="md:container my-2 md:my-24 mx-auto md:px-6">
        <section className="mb-8 md:mb-32">
          <div className="mx-auto text-center lg:text-left xl:px-32">
            <div className="flex grid items-center lg:grid-cols-2">
              <div className="mb-12 lg:mb-0">
                <div
                  className={clsx([
                    'relative',
                    'z-[1]',
                    'block',
                    'rounded-lg',
                    'bg-[hsla(0,0%,100%,0.55)]',
                    'px-6',
                    'py-12',
                    'shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]',
                    'backdrop-blur-[30px]',
                    'dark:bg-[hsla(0,0%,5%,0.55)]',
                    'dark:shadow-black/20',
                    'md:px-12',
                    'lg:-mr-14',
                  ])}
                >
                  <h2 className="mb-2 text-3xl font-normal">{project.name}</h2>
                  <h6 className="mb-6 mt-0 text-base leading-tight text-neutral-500">
                    {new Date(project.date).toLocaleDateString('en-us', {
                      year: 'numeric',
                      month: 'short',
                    })}
                    {project.link && (
                      <>
                        <a
                          href={project.link}
                          className="ml-2 text-neutral-600"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Link
                          <FontAwesomeIcon
                            icon={faExternalLinkAlt}
                            size="2xs"
                            color="525252"
                            style={{ marginLeft: '4px' }}
                          />
                        </a>
                      </>
                    )}
                  </h6>
                  <p
                    className="mb-8 pb-2 text-neutral-700 dark:text-neutral-300 lg:pb-0"
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  ></p>
                  <div className="mx-auto mb-8 flex flex-col flex-wrap md:flex-row md:justify-evenly lg:space-evenly">
                    {technologies.map((technology, i) => (
                      <a
                        key={i}
                        className="mx-auto mb-2 flex items-center md:mx-1 md:mb-2 lg:mb-0"
                        href={technology.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={technology.icon}
                          className="mr-1 text-neutral-500"
                          shapeRendering="geometricprecision"
                        />
                        {technology.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <ProjectImage
                  image={project.image}
                  classes="w-full rounded-lg shadow-lg dark:shadow-black/20"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
