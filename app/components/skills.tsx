import type { Technology } from '~/data/types';
import { Technology as Tech } from '.';

export default function Skills({ technologies }: { technologies: Technology[] }) {
  return (
    <div id="skills">
      <h2 className="heading mb-8 md:mb-10">Skills</h2>
      <ul>
        {technologies.map((technology, i) => (
          <li key={i}>
            <Tech technology={technology} />
          </li>
        ))}
      </ul>
    </div>
  );
}
