import * as articles from "../data/articles/index";

export default function Article({ component }: { component: string }) {
	const normalizedName = component.replace(/[^a-z0-9]/gi, "");
	const DynamicComponent = articles[normalizedName];
	return <DynamicComponent />;
}
