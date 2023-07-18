export default function Education() {

  return (
    <div id="education">
      <h2 className="heading">Education</h2>
      <div className="education-block shadow-large">
        <div className="education-header">
          <img
            src="/img/athletics-lion-spirit.png"
          />
          <div className="education-text-header">
            <h3>Southeastern Louisiana University</h3>
            <h4>Bachelor of Science in Computer Science</h4>
          </div>
        </div>
        <span className="education-date">Aug 2005 - Dec 2010</span>
        <ul>
          <li>Scientific Concentration</li>
          <li>
            <b>Project: </b>Create a ride-sharing app to help link communities
            of students with others to work out riding sharing for economical
            purposes.
          </li>
        </ul>
      </div>
    </div>
  );
}