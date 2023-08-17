import type { Education } from '~/data/types';

export default function Education({ education }: { education: Education }) {
  return (
    <div id="education">
      <h2 className="heading">Education</h2>
      <div className="education-block shadow-large">
        <div className="education-header">
          <img src="/img/athletics-lion-spirit.png" alt="SELU Logo" />
          <div className="education-text-header">
            <h3>{education.university.name}</h3>
            <h4>{education.university.degree}</h4>
            <h5>{education.university.concentration}</h5>
          </div>
        </div>
        <span className="education-date">{education.dates}</span>
        <p>
          <b>Project: </b> {education.project}
        </p>
      </div>
    </div>
  );
}
