import { faBars, faMoon, faSun, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@remix-run/react";
import { useEffect, useRef } from "react";

type Props = {
	toggleDarkMode(): void;
	darkModeEnabled: boolean;
};

export default function Menu({ toggleDarkMode, darkModeEnabled }: Props) {
	const menuRef = useRef<HTMLUListElement>(null);

	const toggleMobileMenu = () => {
		if (window.innerWidth > 768) {
			return;
		}
		document.querySelector("body")?.classList.toggle("active");
		document.querySelector("header")?.classList.toggle("active");
	};

	const getLuminance = (r: number, g: number, b: number): number => {
		const [rs, gs, bs] = [r, g, b].map((c) => {
			c = c / 255;
			return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
		});
		return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
	};

	const getBackgroundColor = (element: Element): string | null => {
		const computedStyle = window.getComputedStyle(element);
		const bgColor = computedStyle.backgroundColor;

		// If background is transparent, check parent
		if (bgColor === "rgba(0, 0, 0, 0)" || bgColor === "transparent") {
			const parent = element.parentElement;
			if (parent) {
				return getBackgroundColor(parent);
			}
		}

		return bgColor;
	};

	const isLightBackground = (colorString: string): boolean => {
		// Extract RGB values from color string
		const rgbMatch = colorString.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
		if (!rgbMatch) return false;

		const [, r, g, b] = rgbMatch.map(Number);
		const luminance = getLuminance(r, g, b);

		// Return true if luminance is above 0.5 (light background)
		return luminance > 0.5;
	};

	// Scroll spy effect
	useEffect(() => {
		const handleScroll = (): void => {
			if (!menuRef.current) return;

			// Get elements in viewport - be more specific about sections
			const viewportHeight = window.innerHeight;
			const scrollTop = window.scrollY;

			// Check the top 1/3 of viewport instead of center for earlier detection
			const checkPoint = scrollTop + viewportHeight * 0.3;

			// Find the element at the check point - target specific sections
			const elements = document.querySelectorAll(
				"#about, #experience, #education, #skills, #projects, #contact, .content > div"
			);
			let targetElement: Element | null = null;

			for (const element of elements) {
				const rect = element.getBoundingClientRect();
				const elementTop = rect.top + scrollTop;
				const elementBottom = elementTop + rect.height;

				// Check if the check point is within this element
				if (checkPoint >= elementTop && checkPoint <= elementBottom) {
					targetElement = element;
					break;
				}
			}

			// If no specific element found, check body
			if (!targetElement) {
				targetElement = document.body;
			}

			// Get background color and determine if we need high contrast
			const bgColor = getBackgroundColor(targetElement);
			const needsHighContrast = bgColor ? isLightBackground(bgColor) : false;

			// Toggle high-contrast class
			if (needsHighContrast) {
				menuRef.current.classList.add("high-contrast");
			} else {
				menuRef.current.classList.remove("high-contrast");
			}
		};

		// Initial check
		handleScroll();

		// Add scroll listener with throttling
		let ticking = false;
		const throttledHandleScroll = (): void => {
			if (!ticking) {
				requestAnimationFrame(() => {
					handleScroll();
					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener("scroll", throttledHandleScroll);
		window.addEventListener("resize", throttledHandleScroll);

		return () => {
			window.removeEventListener("scroll", throttledHandleScroll);
			window.removeEventListener("resize", throttledHandleScroll);
		};
	}, []);

	return (
		<>
			<div id="mobile-menu-open" className="shadow-large" onClick={() => toggleMobileMenu()}>
				<FontAwesomeIcon icon={faBars} />
			</div>
			<header>
				<div id="mobile-menu-close" onClick={() => toggleMobileMenu()}>
					<FontAwesomeIcon icon={faTimes} />
				</div>
				<ul id="menu" ref={menuRef} className="shadow-sm backdrop-blur-sm">
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
