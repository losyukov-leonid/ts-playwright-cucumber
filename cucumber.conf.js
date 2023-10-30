import { Before, BeforeAll, AfterAll, After, setDefaultTimeout, Status } from '@cucumber/cucumber';
import { chromium } from 'playwright';

setDefaultTimeout(60000);

BeforeAll(async () => {
  global.browser = await chromium.launch({
    headless: false
  });
});

AfterAll(async () => {
  await global.browser.close();
});

Before(async () => {
  global.context = await global.browser.newContext({
    baseURL: 'https://practicetestautomation.com/',
    viewport: { width: 1600, height: 900 }
  });
  global.page = await global.context.newPage();
});

After(async function (scenario) {
  if (scenario.result.status === Status.FAILED) {
    const buffer = await global.page.screenshot();
    const decodedImage = Buffer.from(buffer, 'base64');
    await this.attach(decodedImage, 'image/png');
  }
  await global.page.close();
  await global.context.close();
});
