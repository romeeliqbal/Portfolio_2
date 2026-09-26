const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");

async function run() {
  console.log("Starting E2E verification...");
  const browser = await puppeteer.launch({
    headless: "new",
    executablePath:
      "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  const consoleErrors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") {
      consoleErrors.push(msg.text());
    }
  });

  page.on("pageerror", (error) => {
    consoleErrors.push(error.toString());
  });

  // 1. Desktop Viewport
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto("http://localhost:4173", { waitUntil: "networkidle2" });

  // Wait for intro curtain to fade
  await new Promise((r) => setTimeout(r, 1500));

  console.log("Page loaded successfully");

  // Check section elements
  const sections = [
    "hero",
    "summary",
    "about",
    "experience",
    "technologies",
    "projects",
    "education",
    "certifications",
    "resume",
    "contact",
  ];
  for (const id of sections) {
    const el = await page.$(`#${id}`);
    console.log(`Section #${id} exists:`, !!el);
  }

  // Take desktop screenshot
  const screenshotDir = path.join(__dirname, "screenshots");
  if (!fs.existsSync(screenshotDir)) fs.mkdirSync(screenshotDir);

  await page.screenshot({ path: path.join(screenshotDir, "desktop-hero.png") });
  console.log("Captured desktop-hero.png");

  // Test Technology Network Interaction
  const techBtn = await page.$('button[aria-label="Inspect React"]');
  if (techBtn) {
    await techBtn.click();
    await new Promise((r) => setTimeout(r, 600));
    console.log("Clicked React node, checking modal...");
    const modal = await page.$('[role="dialog"]');
    console.log("Technology modal opened:", !!modal);
    await page.screenshot({
      path: path.join(screenshotDir, "desktop-tech-modal.png"),
    });

    // Close modal
    const closeBtn = await page.$('button[aria-label="Close details"]');
    if (closeBtn) await closeBtn.click();
    await new Promise((r) => setTimeout(r, 400));
  }

  // Test Project Demo Interaction
  console.log("Testing Project Details & Live Demo panel...");
  const projectBtn = await page.$(
    'button[aria-label="View architecture details for EduPulse"]',
  );
  if (projectBtn) {
    await projectBtn.click();
    await new Promise((r) => setTimeout(r, 600));
    console.log("Expanded EduPulse project drawer");
    await page.screenshot({
      path: path.join(screenshotDir, "desktop-project-demo.png"),
    });
  }

  // Capture About Section & Certifications Section
  const aboutEl = await page.$("#about");
  if (aboutEl) {
    await aboutEl.scrollIntoView();
    await new Promise((r) => setTimeout(r, 400));
    await page.screenshot({
      path: path.join(screenshotDir, "desktop-about-matrix.png"),
    });
  }

  const certsEl = await page.$("#certifications");
  if (certsEl) {
    await certsEl.scrollIntoView();
    await new Promise((r) => setTimeout(r, 400));
    await page.screenshot({
      path: path.join(screenshotDir, "desktop-certifications-ledger.png"),
    });
  }

  // Test Mobile Viewport
  await page.setViewport({ width: 390, height: 844 });
  await page.goto("http://localhost:4173", { waitUntil: "networkidle2" });
  await new Promise((r) => setTimeout(r, 1500));

  // Check mobile menu button
  const menuBtn = await page.$('button[aria-label="Open Navigation Menu"]');
  console.log("Mobile menu button exists:", !!menuBtn);
  if (menuBtn) {
    await menuBtn.click();
    await new Promise((r) => setTimeout(r, 500));
    console.log("Clicked mobile menu");
    await page.screenshot({
      path: path.join(screenshotDir, "mobile-menu-open.png"),
    });
  }

  await page.screenshot({ path: path.join(screenshotDir, "mobile-view.png") });
  console.log("Captured mobile-view.png");

  console.log("--- Console Errors ---");
  console.log(
    consoleErrors.length === 0 ? "ZERO console errors!" : consoleErrors,
  );

  await browser.close();
  console.log("Verification finished successfully.");
}

run().catch((err) => {
  console.error("Test error:", err);
  process.exit(1);
});
