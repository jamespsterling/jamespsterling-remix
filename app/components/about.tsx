import type { About } from "~/data/types";

export default function About({ about }: { about: About }) {
	return (
		<div id="about">
			<div className="container mx-auto">
				<div className="grid xs:grid-cols-1 md:grid-cols-[30vw_1fr] gap-1">
					<div className="text-center">
						<h2 className="heading">About</h2>
					</div>
					<div className="">
						<p>{about.body}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
