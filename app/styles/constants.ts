import { clsx } from "clsx";

const linkStyles = clsx([
	"transition",
	"duration-150",
	"ease-in-out",
	"underline",
	"underline-offset-4",
	"decoration-lime-600",
	"dark:decoration-violet-500",
	"text-neutral-600 ",
	"hover:bg-lime-500",
	"hover:text-lime-50",
	"focus:text-lime-100",
	"active:text-lime-200",
	"dark:text-violet-50",
	"dark:hover:bg-violet-700",
	"dark:hover:text-violet-50",
	"dark:focus:text-violet-100",
	"dark:active:text-violet-200",
]);

export { linkStyles };
