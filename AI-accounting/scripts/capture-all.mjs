/**
 * Regenerates assets/screenshots/*.png from prototype.html (Chromium via Playwright).
 * Run from AI-accounting/: npm install && npx playwright install chromium && npm run screenshots
 */
import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { mkdirSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = dirname(__dirname);
const base = `file://${join(root, 'prototype.html')}`;
const outDir = join(root, 'assets', 'screenshots');
mkdirSync(outDir, { recursive: true });

const shots = [
  ['#login', '01-login-email.png'],
  ['#verify', '02-login-verify.png'],
  ['#dashboard', '03-dashboard.png'],
  ['#tasks', '04-tasks-workflow-log.png'],
  ['#clients', '05-clients-directory.png'],
  ['#workflow-detail', '06-workflow-detail-phases.png'],
  ['#client-detail', '07-client-detail.png'],
  ['#settings', '08-settings.png'],
];

const delay = (ms) => new Promise((r) => setTimeout(r, ms));

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

for (const [hash, file] of shots) {
  await page.goto(base + hash, { waitUntil: 'domcontentloaded' });
  await delay(2000);
  await page.screenshot({ path: join(outDir, file), type: 'png' });
  console.log(file);
}

await page.goto(base + '#workflow-detail', { waitUntil: 'domcontentloaded' });
await delay(1500);
await page.evaluate(() => openHITLPanel());
await delay(800);
await page.screenshot({ path: join(outDir, '09-hitl-review-panel.png'), type: 'png' });
console.log('09-hitl-review-panel.png');

await browser.close();
