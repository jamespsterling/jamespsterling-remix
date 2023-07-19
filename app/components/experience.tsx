import { ReactSVG } from 'react-svg';
import { data } from '~/data/portfolio';

export default function Experience() {
  const imageExtension = (src: string) => src.split('.').pop();

  return (
    <div id="experience" className="background-alt">
      <h2 className="heading">Experience</h2>
      <div id="experience-timeline">
        {data.jobs.map((job, i) => (
          <div className="vtimeline-point" key={i}>
            <div className="vtimeline-icon">
              <i className={job.icon}></i>
            </div>
            <div className="vtimeline-block">
              <span className="vtimeline-date">{job.time}</span>
              <div data-date="October 2020 - Present" className="vtimeline-content shadow-large">
                <div className="heading-grid">
                  <div>
                    <h3>
                      <a href={job.link} target="_blank">
                        {job.employer}
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    </h3>
                    <h4>{job.title}</h4>
                  </div>
                  {imageExtension(job.logo) === 'svg' ? (
                    <div className="svg-wrapper">
                      <ReactSVG src={job.logo} />
                    </div>
                  ) : (
                    <img src={job.logo} />
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
                  <div
                    className="client-logos"
                    style={{
                      '--n': job.clientLogos.length + 1
                    }}
                  >
                    {job.clientLogos.map((clientLogo, k) => (
                      <img src={clientLogo} key={k} />
                    ))}
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
