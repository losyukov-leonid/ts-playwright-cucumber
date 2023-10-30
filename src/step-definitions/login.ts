import { Given, When, Then } from '@cucumber/cucumber';
import LoginPage from '../pageobjects/login.page';
import MainPage from '../pageobjects/main.page';

Given('I navigate to login page', async () => {
  await LoginPage.open();
});

Then('I should see login form', async () => {
  await LoginPage.expectLoginFormVisible();
});

When('I login with the following credentials:', async ({ rawTable }) => {
  const [username, password] = rawTable[1];
  await LoginPage.login(username, password);
});

Then('I should see successful login title', async () => {
  await MainPage.expectSuccessfulLoginTitleVisible();
});