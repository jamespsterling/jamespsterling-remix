#!/usr/bin/env node

/**
 * Run all bot detection tests
 * Run with: npm run test:all
 */

import { execSync } from 'child_process';

console.log('🧪 Running All Bot Detection Tests\n');
console.log('=' .repeat(60));

// Run unit tests
console.log('1️⃣  Running Unit Tests...\n');

try {
  execSync('node test-bot-detection.mjs', { stdio: 'inherit' });
  console.log('\n✅ Unit tests completed successfully!\n');
} catch (error) {
  console.log('\n❌ Unit tests failed!\n');
  process.exit(1);
}

// Show server test instructions
console.log('2️⃣  Server Testing Instructions:\n');
console.log('To test with a real server:');
console.log('1. Run: npm run dev');
console.log('2. In another terminal, run: npm run test:server');
console.log('3. Follow the curl commands provided\n');

console.log('3️⃣  Available Test Commands:\n');
console.log('npm test              - Run unit tests (16 test cases)');
console.log('npm run test:bot-detection - Same as npm test');
console.log('npm run test:server   - Show server testing instructions');
console.log('npm run test:all      - Run this comprehensive test suite\n');

console.log('🎉 All test commands are ready to use!');
