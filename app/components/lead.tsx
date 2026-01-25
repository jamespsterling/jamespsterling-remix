import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import type { About } from "~/data/types";

export default function Lead({
	about,
	bgOnly = false,
	narrow = false,
}: {
	about: About;
	bgOnly?: boolean;
	narrow?: boolean;
}) {
	const [fireflies, setFireflies] = useState<Array<{ style: CSSProperties }>>([]);

	useEffect(() => {
		const random = (min: number, max: number) => Math.random() * (max - min) + min;
		const make = () => {
			const style = {
				"--x1": `${random(-45, 45).toFixed(2)}vw`,
				"--y1": `${random(-35, 35).toFixed(2)}vh`,
				"--x2": `${random(-50, 50).toFixed(2)}vw`,
				"--y2": `${random(-40, 40).toFixed(2)}vh`,
				"--x3": `${random(-45, 45).toFixed(2)}vw`,
				"--y3": `${random(-35, 35).toFixed(2)}vh`,
				"--s1": random(0.4, 0.9).toFixed(2),
				"--s2": random(0.5, 1.1).toFixed(2),
				"--s3": random(0.4, 0.9).toFixed(2),
				animationDuration: `${random(120, 220).toFixed(0)}s`,
				animationDelay: `${random(-200, 0).toFixed(0)}s`,
			} as CSSProperties;
			return { style };
		};

		setFireflies(Array.from({ length: 15 }, make));
	}, []);
	return (
		<div id="lead" className={narrow ? "narrow" : ""}>
			{!bgOnly && (
				<div id="lead-content">
					<div className="headshot">
						<picture>
							<source srcSet="/img/headshot.avif" type="image/avif" />
							<source srcSet="/img/headshot.webp" type="image/webp" />
							<picture>
								<source srcSet="/img/headshot.avif" type="image/avif" />
								<source srcSet="/img/headshot.webp" type="image/webp" />
								<img
									src="/img/headshot.jpg"
									alt="headshot"
									className=""
									loading="eager"
									srcSet="/img/headshot-400w.jpg 400w,
            /img/headshot-800w.jpg 800w,
            /img/headshot-1200w.jpg 1200w"
									sizes="(max-width: 600px) 400px,
           (max-width: 1000px) 800px,
           1200px"
								/>
							</picture>
						</picture>
					</div>
					<h1 className="">{about.name}</h1>
					<h2 className="text-2xl">{about.title}</h2>
				</div>
			)}

			<div id="lead-overlay">
				{fireflies.map((firefly, i) => (
					<div className="firefly" style={firefly.style} key={i} />
				))}
			</div>
		</div>
	);
}
