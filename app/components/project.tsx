import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from '@remix-run/react';
import { clsx } from 'clsx';
import type { Project, Technology } from '~/data/types';
import { ProjectImage } from '.';

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
                  <h2 className="mb-8 text-3xl font-bold">{project.name}</h2>
                  <h6 className="mb-2 mt-0 text-base font-medium leading-tight text-secondary">
                    {new Date(project.date).toLocaleDateString('en-us', {
                      year: 'numeric',
                      month: 'short',
                    })}
                  </h6>
                  <p
                    className="mb-8 pb-2 text-neutral-500 dark:text-neutral-300 lg:pb-0"
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  ></p>
                  <div className="mx-auto mb-8 flex flex-col flex-wrap md:flex-row md:justify-evenly lg:space-evenly">
                    {technologies.map((technology, i) => (
                      <a
                        className="mx-auto mb-2 flex items-center md:mx-1 md:mb-2 lg:mb-0"
                        href={technology.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={technology.icon} className="mr-1 h-5 w-5" />
                        {technology.label}
                      </a>
                    ))}
                  </div>

                  <p className="mb-0 text-neutral-500 dark:text-neutral-300"></p>
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
