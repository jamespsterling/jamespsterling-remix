#!/usr/bin/env node

/**
 * Test script for enhanced bot detection
 * Run with: node test-bot-detection.mjs
 */

// Test cases with real user agents
const testCases = [
  // Search Engine Bots
  {
    name: 'Googlebot',
    userAgent: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
    expected: { isBot: true, isSearchEngine: true, isAI: false }
  },
  {
    name: 'Bingbot',
    userAgent: 'Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)',
    expected: { isBot: true, isSearchEngine: true, isAI: false }
  },
  
  // AI/LLM Bots
  {
    name: 'ChatGPT',
    userAgent: 'Mozilla/5.0 (compatible; ChatGPT-User; +https://openai.com/chatgpt)',
    expected: { isBot: true, isSearchEngine: false, isAI: true }
  },
  {
    name: 'GPTBot',
    userAgent: 'Mozilla/5.0 (compatible; GPTBot/1.0; +https://openai.com/gptbot)',
    expected: { isBot: true, isSearchEngine: false, isAI: true }
  },
  {
    name: 'Claude',
    userAgent: 'Mozilla/5.0 (compatible; Claude-Web/1.0; +https://claude.ai)',
    expected: { isBot: true, isSearchEngine: false, isAI: true }
  },
  
  // Social Media Crawlers
  {
    name: 'Facebook External Hit',
    userAgent: 'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)',
    expected: { isBot: true, isSearchEngine: true, isAI: false }
  },
  {
    name: 'Twitter Bot',
    userAgent: 'Twitterbot/1.0',
    expected: { isBot: true, isSearchEngine: true, isAI: false }
  },
  
  // SEO Tools
  {
    name: 'Semrush Bot',
    userAgent: 'Mozilla/5.0 (compatible; SemrushBot/7~bl; +https://www.semrush.com/bot/)',
    expected: { isBot: true, isSearchEngine: false, isAI: false }
  },
  {
    name: 'Ahrefs Bot',
    userAgent: 'Mozilla/5.0 (compatible; AhrefsBot/7.0; +http://ahrefs.com/robot/)',
    expected: { isBot: true, isSearchEngine: false, isAI: false }
  },
  
  // Automation Tools
  {
    name: 'Puppeteer',
    userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/91.0.4472.124 Safari/537.36',
    expected: { isBot: true, isSearchEngine: false, isAI: false }
  },
  {
    name: 'Selenium',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 (selenium)',
    expected: { isBot: true, isSearchEngine: false, isAI: false }
  },
  
  // Regular Browsers (should NOT be detected as bots)
  {
    name: 'Chrome Browser',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    expected: { isBot: false, isSearchEngine: false, isAI: false }
  },
  {
    name: 'Firefox Browser',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0',
    expected: { isBot: false, isSearchEngine: false, isAI: false }
  },
  {
    name: 'Safari Browser',
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Safari/605.1.15',
    expected: { isBot: false, isSearchEngine: false, isAI: false }
  },
  
  // Edge Cases
  {
    name: 'Empty User Agent',
    userAgent: null,
    expected: { isBot: false, isSearchEngine: false, isAI: false }
  },
  {
    name: 'Generic Bot',
    userAgent: 'SomeBot/1.0',
    expected: { isBot: true, isSearchEngine: false, isAI: false }
  }
];

// Mock isbot function for testing
function mockIsbot(userAgent) {
  if (!userAgent) return false;
  
  const basicBots = [
    'googlebot', 'bingbot', 'slurp', 'duckduckbot', 
    'baiduspider', 'yandexbot', 'facebookexternalhit', 'twitterbot'
  ];
  
  return basicBots.some(bot => userAgent.toLowerCase().includes(bot));
}

// Enhanced bot detection functions (copied from our utility)
function isBot(userAgent) {
  if (!userAgent) return false;
  
  // Primary detection using isbot (handles most cases)
  if (mockIsbot(userAgent)) return true;
  
  // Additional patterns for modern bots and crawlers
  const botPatterns = [
    // AI/LLM bots
    /chatgpt/i, /claude/i, /gptbot/i, /cohere/i, /anthropic/i, /perplexity/i, /bard/i, /gemini/i,
    // Social media crawlers
    /facebookexternalhit/i, /twitterbot/i, /linkedinbot/i, /whatsapp/i, /telegrambot/i, /slackbot/i, /discordbot/i,
    // SEO and analytics tools
    /semrushbot/i, /ahrefsbot/i, /majesticseo/i, /mozbot/i, /screaming frog/i, /deepcrawl/i,
    // Monitoring and testing tools
    /pingdom/i, /uptimerobot/i, /statuscake/i, /newrelic/i, /datadog/i,
    // Automation tools
    /selenium/i, /puppeteer/i, /playwright/i, /headless/i, /phantom/i, /nightmare/i,
    // Cloud and CDN crawlers
    /cloudflare/i, /amazonbot/i, /aws/i, /google-cloud/i,
    // Generic bot indicators
    /bot\b/i, /crawler/i, /spider/i, /scraper/i, /automation/i, /headless/i, /phantom/i, /ghost/i,
  ];
  
  return botPatterns.some(pattern => pattern.test(userAgent));
}

function isSearchEngineBot(userAgent) {
  if (!userAgent) return false;
  
  const searchEnginePatterns = [
    /googlebot/i, /bingbot/i, /slurp/i, /duckduckbot/i, /baiduspider/i, /yandexbot/i,
    /facebookexternalhit/i, /twitterbot/i, /linkedinbot/i, /whatsapp/i, /telegrambot/i,
  ];
  
  return searchEnginePatterns.some(pattern => pattern.test(userAgent));
}

function isAIBot(userAgent) {
  if (!userAgent) return false;
  
  const aiPatterns = [
    /chatgpt/i, /claude/i, /gptbot/i, /cohere/i, /anthropic/i, /perplexity/i, /bard/i, /gemini/i, /openai/i,
  ];
  
  return aiPatterns.some(pattern => pattern.test(userAgent));
}

// Test function
function runTests() {
  console.log('🤖 Testing Enhanced Bot Detection\n');
  console.log('=' .repeat(60));
  
  let passed = 0;
  let failed = 0;
  
  testCases.forEach((testCase, index) => {
    const { name, userAgent, expected } = testCase;
    
    try {
      const result = {
        isBot: isBot(userAgent),
        isSearchEngine: isSearchEngineBot(userAgent),
        isAI: isAIBot(userAgent)
      };
      
      const testPassed = 
        result.isBot === expected.isBot &&
        result.isSearchEngine === expected.isSearchEngine &&
        result.isAI === expected.isAI;
      
      if (testPassed) {
        console.log(`✅ ${name}: PASS`);
        passed++;
      } else {
        console.log(`❌ ${name}: FAIL`);
        console.log(`   Expected: ${JSON.stringify(expected)}`);
        console.log(`   Got:      ${JSON.stringify(result)}`);
        console.log(`   User Agent: ${userAgent}`);
        failed++;
      }
    } catch (error) {
      console.log(`💥 ${name}: ERROR - ${error.message}`);
      failed++;
    }
  });
  
  console.log('\n' + '=' .repeat(60));
  console.log(`📊 Results: ${passed} passed, ${failed} failed`);
  
  if (failed === 0) {
    console.log('🎉 All tests passed!');
  } else {
    console.log('⚠️  Some tests failed. Check the output above.');
  }
}

// Run tests
runTests();
