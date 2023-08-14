export default function Lead({
  bgOnly = false,
  narrow = false,
}: {
  bgOnly?: boolean;
  narrow?: boolean;
}) {
  const fireflies: Array<number> = new Array(15).fill('');

  return (
    <div id="lead" className={narrow ? 'narrow' : ''}>
      {!bgOnly && (
        <div id="lead-content">
          <img src="/img/headshot.jpg" alt="headshot" />
          <h1 className="animate-pop-in">James Sterling</h1>
          <h2 className="animate-pop-in">Software Engineer</h2>
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
