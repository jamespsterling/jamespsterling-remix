import { useMemo } from "react";
import { linkStyles } from "~/styles/constants";

interface MarkdownArticleProps {
	content: string;
}

// Move markdown parsing outside component to avoid re-parsing on every render
function convertMarkdownToHtml(markdown: string): string {
	return (
		markdown
			// Headers
			.replace(/^### (.*$)/gim, '<h3 class="mb-4 text-2xl font-normal">$1</h3>')
			.replace(/^## (.*$)/gim, '<h2 class="mb-4 text-3xl font-normal">$1</h2>')
			.replace(/^# (.*$)/gim, '<h1 class="mb-4 text-4xl font-normal">$1</h1>')
			// Paragraphs
			.replace(/^(?!<[h1-6]|<blockquote|<img)(.+)$/gim, '<p class="mb-6">$1</p>')
			// Links
			.replace(
				/\[([^\]]+)\]\(([^)]+)\)/g,
				`<a href="$2" class="${linkStyles}" target="_blank" rel="noopener noreferrer">$1</a>`
			)
			// Bold text
			.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
			// Code spans
			.replace(
				/`([^`]+)`/g,
				'<span class="font-mono text-orange-700 dark:text-orange-500">$1</span>'
			)
			// Blockquotes
			.replace(
				/^> (.+)$/gim,
				'<blockquote class="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-zinc-500 dark:bg-zinc-800"><p class="italic font-medium leading-relaxed text-gray-900 dark:text-white">$1</p></blockquote>'
			)
			// Images
			.replace(
				/!\[([^\]]*)\]\(([^)]+)\)/g,
				'<img src="$2" alt="$1" class="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20" />'
			)
			// Line breaks
			.replace(/\n\n/g, "\n")
			.replace(/\n/g, "<br />")
	);
}

export default function MarkdownArticle({ content }: MarkdownArticleProps) {
	// Memoize the HTML conversion to avoid re-parsing on every render
	const htmlContent = useMemo(() => convertMarkdownToHtml(content), [content]);

	return (
		<article className="max-w-1xl px-6 py-6 mx-auto space-y-16 dark:text-gray-50">
			<div className="md:container my-2 mx-auto md:px-6">
				<section className="mb-8 md:mb-32">
					<div className="mx-auto text-left lg:text-left xl:px-32 text-neutral-700">
						<div dangerouslySetInnerHTML={{ __html: htmlContent }} />
					</div>
				</section>
			</div>
		</article>
	);
}
