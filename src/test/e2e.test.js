import puppeteer from "puppeteer";

describe("App.js", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  it("shows a success message after submitting a form", async () => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector("#form");

    await page.click("#users");
    await page.select("#users", "1");

    await page.click("#title");
    await page.type("#title", "password");

    await page.click("#description");
    await page.type("#description", "password");

    await page.click("#submit");

    await page.waitForSelector("#form-success-message");

    const text = await page.$eval(
      "#form-success-message",
      (e) => e.textContent
    );
    expect(text).toContain("Successfully submitted form");
  });
});
