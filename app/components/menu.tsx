type Props = {
  toggleDarkMode(): void;
  darkModeEnabled: boolean;
};

export default function Menu({ toggleDarkMode, darkModeEnabled }: Props) {
  return (
    <>
      <div id="mobile-menu-open" className="shadow-large" onClick={() => {
        document.querySelector('body')?.classList.add('active');
        document.querySelector('header')?.classList.add('active');
      }}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <header>
        <div id="mobile-menu-close" onClick={() => {
          document.querySelector('body')?.classList.remove('active');
          document.querySelector('header')?.classList.remove('active');
        }}>
          <span>Close</span> <i className="fa fa-times" aria-hidden="true"></i>
        </div>
        <ul id="menu" className="shadow">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li className="dark-mode-toggle">
            <input
              type="checkbox"
              className="checkbox"
              id="checkbox"
              onChange={toggleDarkMode}
              checked={darkModeEnabled}
            />
            <label htmlFor="checkbox" className="checkbox-label">
              <i className="fas fa-moon"></i>
              <i className="fas fa-sun"></i>
              <span className="ball"></span>
            </label>
          </li>
        </ul>
      </header>
    </>
  );
}
