import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Technology } from "~/data/types";

export default function Technology({ technology }: { technology: Technology }) {
	return (
		<div id="technology">
			<a href={technology.link} target="_blank" rel="noopener noreferrer">
				<span className="mr-2">{technology.label}</span>
				<FontAwesomeIcon icon={technology.icon} />
			</a>
		</div>
	);
}
