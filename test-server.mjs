#!/usr/bin/env node

/**
 * Test server behavior with different user agents
 * Run with: node test-server.mjs
 */

const testUserAgents = [
  {
    name: 'Googlebot',
    userAgent: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
    expectedBehavior: 'Should wait for full HTML (bot detected)'
  },
  {
    name: 'ChatGPT',
    userAgent: 'Mozilla/5.0 (compatible; ChatGPT-User; +https://openai.com/chatgpt)',
    expectedBehavior: 'Should wait for full HTML (AI bot detected)'
  },
  {
    name: 'Regular Chrome',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    expectedBehavior: 'Should stream HTML (human user)'
  }
];

console.log('🧪 Bot Detection Server Test\n');
console.log('=' .repeat(60));
console.log('This test shows what user agents would trigger bot detection:');
console.log('');

testUserAgents.forEach((test, index) => {
  console.log(`${index + 1}. ${test.name}`);
  console.log(`   User Agent: ${test.userAgent}`);
  console.log(`   Expected: ${test.expectedBehavior}`);
  console.log('');
});

console.log('To test with a real server:');
console.log('1. Run: npm run dev');
console.log('2. Use curl with different user agents:');
console.log('');

testUserAgents.forEach((test, index) => {
  console.log(`# Test ${test.name}:`);
  console.log(`curl -H "User-Agent: ${test.userAgent}" http://localhost:8788`);
  console.log('');
});

console.log('Expected behavior:');
console.log('- Bot user agents: Server waits for complete HTML before responding');
console.log('- Human user agents: Server streams HTML progressively');
console.log('- Check response timing to verify bot detection is working');
