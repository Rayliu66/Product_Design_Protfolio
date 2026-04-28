/**
 * Regenerates assets/screenshots/*.png from index.html (Chromium via Playwright).
 * From AI-edu-K12/: npm install && npx playwright install chromium && npm run screenshots
 */
import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { mkdirSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = dirname(__dirname);
const base = `file://${join(root, 'index.html')}`;
const outDir = join(root, 'assets', 'screenshots');
mkdirSync(outDir, { recursive: true });

const shots = [
  ['#knowledge', '01-dashboard-my-courses.png'],
  ['#course', '02-knowledge-hub.png'],
  ['#quiz', '03-quizzes.png'],
  ['#report', '04-mastery-report.png'],
];

const delay = (ms) => new Promise((r) => setTimeout(r, ms));

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

for (const [hash, file] of shots) {
  await page.goto(base + hash, { waitUntil: 'domcontentloaded' });
  await delay(3500);
  await page.screenshot({ path: join(outDir, file), type: 'png', fullPage: true });
  console.log(file);
}

await browser.close();
