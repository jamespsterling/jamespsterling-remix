import { Link } from '@remix-run/react';
import type { Technology } from '~/data/types';

export default function Technology({ technology }: { technology: Technology }) {
  return (
    <div id="technology">
      <Link to={technology.link} target="_blank" rel="noopener">
        {technology.label}
      </Link>
    </div>
  );
}
