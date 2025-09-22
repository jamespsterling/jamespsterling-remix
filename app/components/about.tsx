import type { About } from "~/data/types";

export default function About({ about }: { about: About }) {
	return (
		<div id="about">
			<div className="container mx-auto">
				<div className="about-content">
					<h2 className="heading">About</h2>
					<p>{about.body}</p>
				</div>
			</div>
		</div>
	);
}
