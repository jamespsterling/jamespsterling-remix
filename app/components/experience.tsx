import { IconName, IconPrefix, library } from '@fortawesome/fontawesome-svg-core';

import { faAngular } from '@fortawesome/free-brands-svg-icons/faAngular';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons/faNodeJs';
import { faPhp } from '@fortawesome/free-brands-svg-icons/faPhp';
import { faReact } from '@fortawesome/free-brands-svg-icons/faReact';

import { faCode } from '@fortawesome/free-solid-svg-icons/faCode';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons/faExternalLinkAlt';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons/faLaptopCode';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactSVG } from 'react-svg';
import { Image } from 'remix-image';
import type { Experience } from '~/data/types';
import { linkStyles } from '~/styles/constants';

library.add(faReact, faAngular, faPhp, faNodeJs, faCode, faLaptopCode);

export default function Experience({
  experience,
  darkMode,
}: {
  experience: Experience;
  darkMode: boolean;
}) {
  const imageExtension = (src: string) => src.split('.').pop();

  return (
    <div id="experience" className="background-alt">
      <h2 className="heading">Experience</h2>
      <div id="experience-timeline">
        {experience.map((job, i) => (
          <div className="vtimeline-point" key={i}>
            <div className="vtimeline-icon">
              <FontAwesomeIcon icon={job.icon as unknown as [IconPrefix, IconName]} size="xl" />
            </div>
            <div className="vtimeline-block">
              <span className="vtimeline-date">{job.time}</span>
              <div data-date="October 2020 - Present" className="vtimeline-content shadow-large">
                <div className="heading-grid">
                  <div>
                    <h3>
                      <a href={job.link} target="_blank" rel="noopener" className={linkStyles}>
                        {job.employer}
                        <FontAwesomeIcon icon={faExternalLinkAlt} size="2xs" />
                      </a>
                    </h3>
                    <h4>{job.title}</h4>
                  </div>
                  {imageExtension(job.logo) === 'svg' ? (
                    <div className="svg-wrapper">
                      <ReactSVG src={job.logo} />
                    </div>
                  ) : (
                    <img src={job.logo} alt={`${job.employer} logo`} />
                  )}
                </div>

                <ul className="list-disc list-outside ml-6">
                  {job.description.map((entry, j) => (
                    <li key={j}>
                      <span dangerouslySetInnerHTML={{ __html: entry }} />
                    </li>
                  ))}
                </ul>

                {job.clientLogos && (
                  <div className="client-logos">
                    {(darkMode ? job.clientLogos.dark : job.clientLogos.light).map(
                      (clientLogo, k) => (
                        <div key={k}>
                          {/* <img src={clientLogo} alt={`${clientLogo} logo`} /> */}
                          <Image
                            src={clientLogo}
                            loaderUrl="/api/image"
                            responsive={[
                              {
                                size: {
                                  width: 100,
                                  height: 100,
                                },
                              },
                            ]}
                          />
                        </div>
                      ),
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
