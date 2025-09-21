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
	const fireflies: Array<number> = new Array(15).fill("");
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
				{fireflies.map((_, i) => (
					<div className="firefly" key={i} />
				))}
			</div>
		</div>
	);
}
