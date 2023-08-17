import { Link } from '@remix-run/react';
import type { Skills } from '~/data/types';

export default function Skills({ skills }: { skills: Skills }) {
  return (
    <div id="skills">
      <h2 className="heading">Skills</h2>
      <ul>
        {skills.map((skill, i) => (
          <li key={i}>
            <Link to={skill.link} target="_blank" rel="noopener">
              {skill.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
