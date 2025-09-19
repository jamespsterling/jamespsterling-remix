// Cloudflare Pages compatible markdown parser
// No Node.js fs/path dependencies

export interface MarkdownFrontmatter {
	title: string;
	date: string;
	projectId: string;
	description: string;
}

export interface MarkdownArticle {
	frontmatter: MarkdownFrontmatter;
	content: string;
}

function parseFrontmatter(frontmatterText: string): MarkdownFrontmatter {
	const frontmatter: Record<string, string> = {};

	frontmatterText.split("\n").forEach((line) => {
		const trimmedLine = line.trim();
		if (!trimmedLine) return;

		const colonIndex = trimmedLine.indexOf(":");
		if (colonIndex === -1) return;

		const key = trimmedLine.substring(0, colonIndex).trim();
		const value = trimmedLine.substring(colonIndex + 1).trim();

		// Remove quotes if present
		const cleanValue = value.replace(/^["']|["']$/g, "");
		frontmatter[key] = cleanValue;
	});

	// Validate required fields
	const requiredFields: (keyof MarkdownFrontmatter)[] = [
		"title",
		"date",
		"projectId",
		"description",
	];
	for (const field of requiredFields) {
		if (!frontmatter[field]) {
			throw new Error(`Missing required frontmatter field: ${field}`);
		}
	}

	// Create the properly typed object
	return {
		title: frontmatter.title,
		date: frontmatter.date,
		projectId: frontmatter.projectId,
		description: frontmatter.description,
	};
}

export function parseMarkdown(fileContents: string): MarkdownArticle {
	// Check if fileContents is valid
	if (!fileContents || typeof fileContents !== "string") {
		throw new Error("Invalid markdown content provided");
	}

	// Simple frontmatter parser
	const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
	const match = fileContents.match(frontmatterRegex);

	if (!match) {
		throw new Error("Invalid markdown file format - no frontmatter found");
	}

	const frontmatterText = match[1];
	const content = match[2];

	try {
		const frontmatter = parseFrontmatter(frontmatterText);
		return {
			frontmatter,
			content,
		};
	} catch (error) {
		throw new Error(
			`Failed to parse frontmatter: ${error instanceof Error ? error.message : "Unknown error"}`
		);
	}
}
