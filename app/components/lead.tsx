export default function Lead() {
  const fireflies: Array<number> = new Array(15);

  return (
    <div id="lead">
      <div id="lead-content">
        <h1 className="animate-pop-in">James Sterling</h1>
        <h2 className="animate-pop-in">Software Engineer</h2>
      </div>

      <div id="lead-overlay">
        {fireflies.map(() => (
          <li>
            <div className="firefly"></div>
          </li>
        ))}

      </div>

      <div id="lead-down">
        <span>
          <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  );
}