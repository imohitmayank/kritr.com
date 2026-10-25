import { chromium } from "playwright-core";
import { mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = dirname(fileURLToPath(import.meta.url));
const full = process.argv.includes("--full");

// Hard floor is the inner edge of an 8% crop. The layout targets ~10%.
const SAFE = { left: 96, top: 50, right: 1104, bottom: 580 };
const SELECTORS = ["#brand", "h1", "#sub", "#report", "#trend", "#phone"];

const browser = await chromium.launch({
  executablePath: process.env.CHROME_PATH ?? "/usr/bin/google-chrome",
  headless: true,
  args: [
    "--no-sandbox",
    "--disable-dev-shm-usage",
    "--hide-scrollbars",
    "--force-color-profile=srgb",
    "--font-render-hinting=none"
  ]
});

const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 2
});

await page.goto(pathToFileURL(join(ROOT, "mylabstory.html")).href, {
  waitUntil: "load"
});
await page.evaluate(async () => {
  await document.fonts.ready;
  const imgs = [...document.images];
  await Promise.all(
    imgs.map((img) => (img.complete ? null : img.decode().catch(() => {})))
  );
});

const duration = await page.evaluate(() => window.DURATION);
const fps = 30;
const frameCount = Math.round(duration * fps);
const previewTimes = [0, 0.6, 1.15, 1.6, 2.4, 3.2, 4.8, 5.5];
const times = full
  ? Array.from({ length: frameCount }, (_, i) => (i / frameCount) * duration)
  : previewTimes.filter((t) => t < duration);

const dir = join(ROOT, full ? "frames-mls" : "preview-mls");
await mkdir(dir, { recursive: true });

let violations = 0;

for (let i = 0; i < times.length; i++) {
  const t = times[i];
  await page.evaluate((time) => window.render(time), t);

  if (!full) {
    const boxes = await page.evaluate((selectors) => {
      return selectors.map((sel) => {
        const el = document.querySelector(sel);
        const r = el.getBoundingClientRect();
        const opacity = Number(getComputedStyle(el).opacity);
        return {
          sel,
          opacity,
          x: r.x,
          y: r.y,
          right: r.right,
          bottom: r.bottom
        };
      });
    }, SELECTORS);

    console.log(`t=${t.toFixed(2)}`);
    for (const box of boxes) {
      if (box.opacity < 0.04) continue;
      const problems = [];
      if (box.x < SAFE.left) problems.push(`left ${box.x.toFixed(1)} < ${SAFE.left}`);
      if (box.y < SAFE.top) problems.push(`top ${box.y.toFixed(1)} < ${SAFE.top}`);
      if (box.right > SAFE.right) problems.push(`right ${box.right.toFixed(1)} > ${SAFE.right}`);
      if (box.bottom > SAFE.bottom) problems.push(`bottom ${box.bottom.toFixed(1)} > ${SAFE.bottom}`);
      const mark = problems.length ? "OUT" : "ok ";
      if (problems.length) violations += 1;
      console.log(
        `  ${mark} ${box.sel.padEnd(8)} x=${box.x.toFixed(1)} y=${box.y.toFixed(1)} r=${box.right.toFixed(1)} b=${box.bottom.toFixed(1)}` +
          (problems.length ? `  ${problems.join("; ")}` : "")
      );
    }
  }

  const file = full
    ? join(dir, `${String(i).padStart(4, "0")}.png`)
    : join(dir, `t${String(t).replace(".", "_")}.png`);
  await page.screenshot({
    path: file,
    type: "png",
    clip: { x: 0, y: 0, width: 1200, height: 630 }
  });
  if (full && i % 30 === 0) console.log("frame", i, "/", frameCount);
}

console.log(full ? `wrote ${times.length} frames` : `preview frames ${times.length}`);
await browser.close();

if (!full && violations > 0) {
  console.error(`safe zone failed: ${violations} boxes outside ${JSON.stringify(SAFE)}`);
  process.exit(1);
}
