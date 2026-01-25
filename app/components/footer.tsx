import {
	fa500px,
	faCodepen,
	faGithub,
	faLinkedin,
	faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from "react-router";
import { clsx } from "clsx";
import { useEffect, useState } from "react";

export default function Footer() {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const [showButton, setShowButton] = useState(false);

	const handleScroll = () => {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			setShowButton(true);
		} else {
			setShowButton(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [handleScroll]);

	const links = [
		{
			link: "https://github.com/jamespsterling",
			icon: faGithub,
			label: "GitHub",
		},
		{
			link: "https://stackoverflow.com/users/4092449/jamespsterling",
			icon: faStackOverflow,
			label: "StackOverflow",
		},
		{
			link: "https://codepen.io/jamespsterling",
			icon: faCodepen,
			label: "Codepen",
		},
		{
			link: "https://www.linkedin.com/in/jamespsterling/",
			icon: faLinkedin,
			label: "Linkedin",
		},
		{
			link: "https://500px.com/jpspyro",
			icon: fa500px,
			label: "500px",
		},
	];

	return (
		<footer className="bg-neutral-200 text-center text-white dark:bg-neutral-600">
			<button
				type="button"
				onClick={() => {
					navigate(pathname);
				}}
				className={clsx(showButton ? `inline-block` : `hidden`, [
					"fixed",
					"bottom-[40px]",
					"left-[40px]",
					"p-3",
					"bg-zinc-600/20",
					"dark:bg-zinc-600/20",
					"backdrop-blur-md",
					"border",
					"border-white/20",
					"dark:border-white/10",
					"text-white",
					"font-medium",
					"text-xs",
					"leading-tight",
					"uppercase",
					"rounded-full",
					"shadow-lg",
					"hover:bg-zinc-600/30",
					"dark:hover:bg-zinc-600/30",
					"hover:border-white/30",
					"dark:hover:border-white/20",
					"hover:shadow-xl",
					"focus:bg-zinc-600/30",
					"dark:focus:bg-zinc-600/30",
					"focus:border-white/30",
					"dark:focus:border-white/20",
					"focus:shadow-xl",
					"focus:outline-hidden",
					"focus:ring-0",
					"active:bg-zinc-600/40",
					"dark:active:bg-zinc-600/40",
					"active:shadow-2xl",
					"transition",
					"duration-150",
					"ease-in-out",
				])}
			>
				<FontAwesomeIcon icon={faChevronUp} />
			</button>
			<div className="container pt-6 mx-auto">
				<div className="mb-6 flex justify-center">
					{links.map((entry, i) => (
						<a
							className={clsx([
								"text-neutral-800",
								"dark:text-neutral-200",
								"hover:text-sky-700",
								"dark:hover:text-violet-700",
								"focus:text-sky-700",
								"dark:focus:text-violet-700",
								"mx-2",
								"transition",
								"duration-150",
								"ease-in-out",
							])}
							href={entry.link}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={entry.label}
							key={i}
						>
							<FontAwesomeIcon icon={entry.icon} size="lg" />
						</a>
					))}
				</div>
			</div>

			<div className="bg-neutral-300 p-4 text-sm text-center text-neutral-600 dark:bg-neutral-700 dark:text-neutral-200">
				Copyright &copy; {new Date().getFullYear()} James Sterling
			</div>
		</footer>
	);
}
