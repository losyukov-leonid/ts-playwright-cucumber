import { When, Then } from '@cucumber/cucumber';
import LoginPage from '../pageobjects/login.page';

When('I enter {string} username', async (username) => {
  await LoginPage.enterUsername(username);
});

Then('I enter {string} password', async (password) => {
  await LoginPage.enterPassword(password);
});

Then('I click login button', async () => {
  await LoginPage.clickLogIn();
});

Then('I should see invalid credentials error', async () => {
  await LoginPage.expectInvalidCredentialsErrorVisible();
});