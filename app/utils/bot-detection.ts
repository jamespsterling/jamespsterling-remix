import { isbot } from "isbot";

/**
 * Enhanced bot detection for 2025
 * Combines isbot with additional patterns for better accuracy
 */
export function isBot(userAgent: string | null): boolean {
	if (!userAgent) return false;

	// Primary detection using isbot (handles most cases)
	if (isbot(userAgent)) return true;

	// Additional patterns for modern bots and crawlers
	const botPatterns = [
		// AI/LLM bots
		/chatgpt/i,
		/claude/i,
		/gptbot/i,
		/cohere/i,
		/anthropic/i,
		/perplexity/i,
		/bard/i,
		/gemini/i,

		// Social media crawlers
		/facebookexternalhit/i,
		/twitterbot/i,
		/linkedinbot/i,
		/whatsapp/i,
		/telegrambot/i,
		/slackbot/i,
		/discordbot/i,

		// SEO and analytics tools
		/semrushbot/i,
		/ahrefsbot/i,
		/majesticseo/i,
		/mozbot/i,
		/screaming frog/i,
		/deepcrawl/i,

		// Monitoring and testing tools
		/pingdom/i,
		/uptimerobot/i,
		/statuscake/i,
		/newrelic/i,
		/datadog/i,

		// Automation tools
		/selenium/i,
		/puppeteer/i,
		/playwright/i,
		/headless/i,
		/phantom/i,
		/nightmare/i,

		// Cloud and CDN crawlers
		/cloudflare/i,
		/amazonbot/i,
		/aws/i,
		/google-cloud/i,

		// Generic bot indicators
		/bot\b/i,
		/crawler/i,
		/spider/i,
		/scraper/i,
		/automation/i,
		/headless/i,
		/phantom/i,
		/ghost/i,
	];

	return botPatterns.some((pattern) => pattern.test(userAgent));
}

/**
 * Check if the request is from a search engine bot
 * (useful for SEO-specific optimizations)
 */
export function isSearchEngineBot(userAgent: string | null): boolean {
	if (!userAgent) return false;

	const searchEnginePatterns = [
		/googlebot/i,
		/bingbot/i,
		/slurp/i, // Yahoo
		/duckduckbot/i,
		/baiduspider/i,
		/yandexbot/i,
		/facebookexternalhit/i,
		/twitterbot/i,
		/linkedinbot/i,
		/whatsapp/i,
		/telegrambot/i,
	];

	return searchEnginePatterns.some((pattern) => pattern.test(userAgent));
}

/**
 * Check if the request is from an AI/LLM bot
 * (useful for content optimization)
 */
export function isAIBot(userAgent: string | null): boolean {
	if (!userAgent) return false;

	const aiPatterns = [
		/chatgpt/i,
		/claude/i,
		/gptbot/i,
		/cohere/i,
		/anthropic/i,
		/perplexity/i,
		/bard/i,
		/gemini/i,
		/openai/i,
	];

	return aiPatterns.some((pattern) => pattern.test(userAgent));
}
