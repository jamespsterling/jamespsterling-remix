import { faBars, faMoon, faSun, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@remix-run/react";

type Props = {
	toggleDarkMode(): void;
	darkModeEnabled: boolean;
};

export default function Menu({ toggleDarkMode, darkModeEnabled }: Props) {
	const toggleMobileMenu = () => {
		if (window.innerWidth > 768) {
			return;
		}
		document.querySelector("body")?.classList.toggle("active");
		document.querySelector("header")?.classList.toggle("active");
	};

	return (
		<>
			<div id="mobile-menu-open" className="shadow-large" onClick={() => toggleMobileMenu()}>
				<FontAwesomeIcon icon={faBars} />
			</div>
			<header>
				<div id="mobile-menu-close" onClick={() => toggleMobileMenu()}>
					<FontAwesomeIcon icon={faTimes} />
				</div>
				<ul id="menu" className="shadow">
					<li>
						<Link to="/" onClick={() => toggleMobileMenu()}>
							About
						</Link>
					</li>
					<li>
						<Link to="/#experience" onClick={() => toggleMobileMenu()} preventScrollReset={true}>
							Experience
						</Link>
					</li>
					<li>
						<Link to="/#education" onClick={() => toggleMobileMenu()} preventScrollReset={true}>
							Education
						</Link>
					</li>
					<li>
						<Link to="/#skills" onClick={() => toggleMobileMenu()} preventScrollReset={true}>
							Skills
						</Link>
					</li>
					<li>
						<Link to="/projects" onClick={() => toggleMobileMenu()}>
							Projects
						</Link>
					</li>
					<li>
						<Link to="/contact" onClick={() => toggleMobileMenu()}>
							Contact
						</Link>
					</li>
					<li className="dark-mode-toggle">
						<input
							type="checkbox"
							className="checkbox"
							id="checkbox"
							aria-label="toggle dark mode"
							onChange={toggleDarkMode}
							checked={darkModeEnabled}
							onClick={() => toggleMobileMenu()}
						/>
						<label htmlFor="checkbox" className="checkbox-label">
							<FontAwesomeIcon icon={faMoon} />
							<FontAwesomeIcon icon={faSun} />
							<span className="ball"></span>
						</label>
					</li>
				</ul>
			</header>
		</>
	);
}
