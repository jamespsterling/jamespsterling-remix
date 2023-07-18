import { data } from '~/data/portfolio';

export default function Experience() {

  return (
    <div id="experience" className="background-alt">
      <h2 className="heading">Experience</h2>
      <div id="experience-timeline">
        {data.jobs.map((job, i) => (
          <div className="vtimeline-point" key={i}>
            <div className="vtimeline-icon"><i className={job.icon}></i></div>
            <div className="vtimeline-block">
              <span className="vtimeline-date">{job.time}</span>
              <div
                data-date="October 2020 - Present"
                className="vtimeline-content shadow-large"
              >
                <h3>{job.employer}</h3>
                <h4>{job.title}</h4>
                <ul>
                  {job.description.map((entry, j) => (
                    <li key={j}>
                      {entry}
                    </li>
                  ))}

                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}