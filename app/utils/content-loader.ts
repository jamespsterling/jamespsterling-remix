// Cloudflare Pages compatible content loader
// Loads markdown and YAML content without Node.js dependencies

export interface ContentFrontmatter {
	[key: string]: string | number | boolean | string[] | Record<string, unknown>;
}

export interface ContentItem {
	frontmatter: ContentFrontmatter;
	content: string;
}

export interface ContentCollection {
	[key: string]: ContentItem;
}

// Simple YAML parser for basic key-value pairs and nested objects
function parseYAML(yamlContent: string): Record<string, unknown> {
	const result: Record<string, unknown> = {};
	const lines = yamlContent.split("\n");
	let i = 0;

	while (i < lines.length) {
		const line = lines[i];
		const trimmedLine = line.trim();

		if (!trimmedLine || trimmedLine.startsWith("#")) {
			i++;
			continue;
		}

		const colonIndex = trimmedLine.indexOf(":");
		if (colonIndex === -1) {
			i++;
			continue;
		}

		const key = trimmedLine.substring(0, colonIndex).trim();
		const value = trimmedLine.substring(colonIndex + 1).trim();

		// Check if this is a nested object (next line has more indentation)
		if (i + 1 < lines.length && lines[i + 1].startsWith("  ")) {
			// Parse nested object
			const nestedLines: string[] = [];
			i++; // Move to next line

			while (i < lines.length && lines[i].startsWith("  ")) {
				nestedLines.push(lines[i].substring(2)); // Remove 2 spaces
				i++;
			}

			result[key] = parseYAML(nestedLines.join("\n"));
		} else {
			// Parse simple value
			let parsedValue: string | string[] | boolean | number = value;

			// Remove quotes if present
			if (
				(value.startsWith('"') && value.endsWith('"')) ||
				(value.startsWith("'") && value.endsWith("'"))
			) {
				parsedValue = value.slice(1, -1);
			}

			// Parse arrays (simple format: - item1, - item2)
			if (value.startsWith("[") && value.endsWith("]")) {
				const arrayValue = value
					.slice(1, -1)
					.split(",")
					.map((item) => item.trim());
				parsedValue = arrayValue;
			}
			// Parse booleans
			else if (value === "true") {
				parsedValue = true;
			} else if (value === "false") {
				parsedValue = false;
			}
			// Parse numbers
			else if (!Number.isNaN(Number(value)) && value !== "") {
				parsedValue = Number(value);
			}

			result[key] = parsedValue;
			i++;
		}
	}

	return result;
}

// Parse markdown with frontmatter
export function parseContentMarkdown(fileContents: string): ContentItem {
	if (!fileContents || typeof fileContents !== "string") {
		throw new Error("Invalid content provided");
	}

	// Simple frontmatter parser
	const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
	const match = fileContents.match(frontmatterRegex);

	if (!match) {
		throw new Error("Invalid content format - no frontmatter found");
	}

	const frontmatterText = match[1];
	const content = match[2];

	try {
		const frontmatter = parseYAML(frontmatterText) as ContentFrontmatter;
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

// Parse YAML file
export function parseYAMLContent(yamlContent: string): Record<string, any> {
	return parseYAML(yamlContent);
}

// Load content collection from markdown files
export function loadContentCollection(collection: Record<string, string>): ContentCollection {
	const result: ContentCollection = {};

	for (const [key, content] of Object.entries(collection)) {
		try {
			result[key] = parseContentMarkdown(content);
		} catch (error) {
			console.error(`Failed to parse content for ${key}:`, error);
		}
	}

	return result;
}

// Load YAML collection
export function loadYAMLCollection(collection: Record<string, string>): Record<string, unknown> {
	const result: Record<string, unknown> = {};

	for (const [key, content] of Object.entries(collection)) {
		try {
			result[key] = parseYAMLContent(content);
		} catch (error) {
			console.error(`Failed to parse YAML for ${key}:`, error);
		}
	}

	return result;
}
