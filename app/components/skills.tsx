import { data } from '~/data/portfolio';

export default function Skills() {

  return (
    <div id="skills">
      <h2 className="heading">Skills</h2>
      <ul>
        {data.skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}