import { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactSVG } from 'react-svg';
import { Experience } from '~/data/types';

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
                      <a href={job.link} target="_blank" rel="noopener">
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

                <ul>
                  {job.description.map((entry, j) => (
                    <li key={j}>
                      <div dangerouslySetInnerHTML={{ __html: entry }} />
                    </li>
                  ))}
                </ul>

                {job.clientLogos && (
                  <div className="client-logos">
                    {(darkMode ? job.clientLogos.dark : job.clientLogos.light).map(
                      (clientLogo, k) => (
                        <div key={k}>
                          <img src={clientLogo} alt={`${clientLogo} logo`} />
                        </div>
                      )
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
