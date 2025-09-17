/**
 * Unit tests for bot detection utility
 * Run with: npm test (if you have a test runner set up)
 */

import { isBot, isSearchEngineBot, isAIBot } from '../bot-detection';

describe('Bot Detection', () => {
  describe('isBot', () => {
    it('should detect search engine bots', () => {
      expect(isBot('Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)')).toBe(true);
      expect(isBot('Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)')).toBe(true);
    });

    it('should detect AI/LLM bots', () => {
      expect(isBot('Mozilla/5.0 (compatible; ChatGPT-User; +https://openai.com/chatgpt)')).toBe(true);
      expect(isBot('Mozilla/5.0 (compatible; GPTBot/1.0; +https://openai.com/gptbot)')).toBe(true);
      expect(isBot('Mozilla/5.0 (compatible; Claude-Web/1.0; +https://claude.ai)')).toBe(true);
    });

    it('should detect social media crawlers', () => {
      expect(isBot('facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)')).toBe(true);
      expect(isBot('Twitterbot/1.0')).toBe(true);
    });

    it('should detect SEO tools', () => {
      expect(isBot('Mozilla/5.0 (compatible; SemrushBot/7~bl; +https://www.semrush.com/bot/)')).toBe(true);
      expect(isBot('Mozilla/5.0 (compatible; AhrefsBot/7.0; +http://ahrefs.com/robot/)')).toBe(true);
    });

    it('should detect automation tools', () => {
      expect(isBot('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/91.0.4472.124 Safari/537.36')).toBe(true);
      expect(isBot('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 (selenium)')).toBe(true);
    });

    it('should NOT detect regular browsers', () => {
      expect(isBot('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36')).toBe(false);
      expect(isBot('Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0')).toBe(false);
      expect(isBot('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Safari/605.1.15')).toBe(false);
    });

    it('should handle edge cases', () => {
      expect(isBot(null)).toBe(false);
      expect(isBot('')).toBe(false);
      expect(isBot('SomeBot/1.0')).toBe(true);
    });
  });

  describe('isSearchEngineBot', () => {
    it('should detect search engines', () => {
      expect(isSearchEngineBot('Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)')).toBe(true);
      expect(isSearchEngineBot('Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)')).toBe(true);
      expect(isSearchEngineBot('facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)')).toBe(true);
    });

    it('should NOT detect non-search engine bots', () => {
      expect(isSearchEngineBot('Mozilla/5.0 (compatible; ChatGPT-User; +https://openai.com/chatgpt)')).toBe(false);
      expect(isSearchEngineBot('Mozilla/5.0 (compatible; SemrushBot/7~bl; +https://www.semrush.com/bot/)')).toBe(false);
    });
  });

  describe('isAIBot', () => {
    it('should detect AI/LLM bots', () => {
      expect(isAIBot('Mozilla/5.0 (compatible; ChatGPT-User; +https://openai.com/chatgpt)')).toBe(true);
      expect(isAIBot('Mozilla/5.0 (compatible; GPTBot/1.0; +https://openai.com/gptbot)')).toBe(true);
      expect(isAIBot('Mozilla/5.0 (compatible; Claude-Web/1.0; +https://claude.ai)')).toBe(true);
    });

    it('should NOT detect non-AI bots', () => {
      expect(isAIBot('Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)')).toBe(false);
      expect(isAIBot('Mozilla/5.0 (compatible; SemrushBot/7~bl; +https://www.semrush.com/bot/)')).toBe(false);
    });
  });
});
