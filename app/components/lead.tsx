export default function Lead() {
  const fireflies: Array<number> = new Array(15).fill('');

  return (
    <div id="lead">
      <div id="lead-content">
        <h1 className="animate-pop-in">James Sterling</h1>
        <h2 className="animate-pop-in">Software Engineer</h2>
      </div>

      <div id="lead-overlay">
        {fireflies.map(() => (
          <div className="firefly"></div>
        ))}
      </div>
    </div>
  );
}
