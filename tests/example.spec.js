// @ts-check
const { test, expect } = require('@playwright/test');
const { HomePage } = require('../page-objects/home-page');
const { ForumPage } = require('../page-objects/forum-page');
const { RegisterPage } = require('../page-objects/register-page');
const { SignInPage } = require('../page-objects/signIn-page');

test('has title', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();

  // Expect a title to contain "Redmine".
  await expect(page).toHaveTitle(/Redmine/);
});

test('help link', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();

  // Click the help link.
  await homePage.clickOnHelpLink();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Redmine guide', exact: true })).toBeVisible();
});

test('search by id', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();

  // Generate random number
  let randomId = createRandomNumber(4);

  // Enter the text in search field.
  await homePage.performSearch(randomId);

  // Expects page to have a heading with the name of Feature #40970.
  await expect(page.getByRole('heading', { name: 'Feature #' + randomId })).toBeVisible();
});

test('forum boards', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();

  // Click the forum link.
  await homePage.clickOnForumLink();

  // Expects page to have a heading with the name of Forums.
  await expect(page.getByRole('heading', { name: 'Forums' })).toBeVisible();

  // Expects page to have forum boards.
  const forumPage = new ForumPage(page);
  await expect(forumPage.openDiscussionLink).toBeVisible();
  await expect(forumPage.helpLink).toBeVisible();
  await expect(forumPage.developmentLink).toBeVisible();
  await expect(forumPage.pluginsLink).toBeVisible();
  await expect(forumPage.jobOffersLink).toBeVisible();
});

test('login with invalid login and password', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();

  // Click the sign in link.
  await homePage.clickOnSignInLink();

  // Expects page to have a button with the name of "Login".
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  const signInPage = new SignInPage(page);

  // Enter random invalid login and password.
  await signInPage.enterRandomInvalidLogin();
  await signInPage.enterRandomInvalidPassword();
  await signInPage.clickOnLoginButton();

  // Expects page to have an error message "Invalid user or password".
  await expect(page.getByText('Invalid user or password')).toBeVisible();
});

test('invalid email check on register page', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();

  // Click the register link.
  await homePage.clickOnRegisterLink();

  // Expects page to have a heading with the name of Register.
  await expect(page.getByRole('heading', { name: 'Register' })).toBeVisible();
  const registerPage = new RegisterPage(page);

  // Enter the invalid email in email field.
  await registerPage.enterRandomInvalidEmail();

  // Click the submit button.
  await registerPage.clickOnSubmitButton();

  // Expects page to have an error message "Email is invalid".
  await expect(page.getByText('Email is invalid')).toBeVisible();
});

function createRandomNumber(length) {
  const chars = "123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}