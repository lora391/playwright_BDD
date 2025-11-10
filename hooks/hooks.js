const { Before, After, BeforeAll, AfterAll, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium } = require("@playwright/test");

setDefaultTimeout(60 * 1000); // set timeout globally

let browser;
let context;
let page;

// Runs once before all scenarios
BeforeAll(async function () {
  browser = await chromium.launch({ headless: false});
});

// Runs before every scenario
Before(async function () {
  context = await browser.newContext();
  page = await context.newPage();

  // Make page available globally using "this"
  this.page = page;
});
// Runs once after all scenarios
AfterAll(async function () {
await browser.close();
});

// Runs after every scenario
/*After(async function (scenario) {
  if (scenario.result.status === 'FAILED') {
    const screenshot = await this.page.screenshot({ path: `screenshots/${scenario.pickle.name}.png`, fullPage: true });
    console.log(`📸 Screenshot captured for failed scenario: ${scenario.pickle.name}`);
  }
  await context.close();
});
*/


