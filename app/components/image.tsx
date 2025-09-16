import { useState } from "react";
import { ReactSVG } from "react-svg";
import Loading from "~/components/icons/Loading";
import type { Project } from "~/data/types";

export default function Image({
	image,
	classes = "",
}: {
	image: Project["image"];
	classes?: string;
}) {
	const [loading, setLoading] = useState(true);
	const imageExtension = (src: string) => src.split(".").pop();

	return (
		<>
			{imageExtension(image.src) === "svg" ? (
				<div className="svg-wrapper">
					<ReactSVG src={image.src} className={classes} />
				</div>
			) : (
				<>
					<img
						src={image.src}
						style={{
							height: loading ? 0 : "auto",
							opacity: loading ? 0 : 1,
							transition: "0.5s all",
						}}
						alt={`${image.src}`}
						onLoad={() => setLoading(false)}
						loading="lazy"
						className={`${classes} ${image.classes}`}
					/>
					{loading && (
						<div className="loading">
							<Loading />
						</div>
					)}
				</>
			)}
		</>
	);
}
