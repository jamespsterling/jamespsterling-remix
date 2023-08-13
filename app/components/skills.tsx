import { Link } from '@remix-run/react';
import { data } from '~/data/portfolio';

export default function Skills() {
  return (
    <div id="skills">
      <h2 className="heading">Skills</h2>
      <ul>
        {data.skills.map((skill, i) => (
          <li>
            <Link to={skill.link} target="_blank" key={i}>
              {skill.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
