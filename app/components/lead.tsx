import { About } from '~/data/types';

export default function Lead({
  about,
  bgOnly = false,
  narrow = false,
}: {
  about: About;
  bgOnly?: boolean;
  narrow?: boolean;
}) {
  const fireflies: Array<number> = new Array(15).fill('');
  return (
    <div id="lead" className={narrow ? 'narrow' : ''}>
      {!bgOnly && (
        <div id="lead-content">
          <div className="headshot">
            <img src="/img/headshot.jpg" alt="headshot" loading="eager" />
          </div>
          <h1 className="">{about.name}</h1>
          <h2 className="text-2xl">{about.title}</h2>
        </div>
      )}

      <div id="lead-overlay">
        {fireflies.map((_, i) => (
          <div className="firefly" key={i}></div>
        ))}
      </div>
    </div>
  );
}
