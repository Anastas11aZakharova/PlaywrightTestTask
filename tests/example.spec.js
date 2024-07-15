// @ts-check
const { test, expect } = require('@playwright/test');
const { HomePage } = require('../page-objects/home-page');
const { RegisterPage } = require('../page-objects/register-page');
const { SignInPage } = require('../page-objects/signIn-page');
const { IssuesPage } = require('../page-objects/issues-page');

test.beforeEach( async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
});

test('has title', async ({ page }) => {
  await expect(page).toHaveTitle(/Redmine/);
});

test('help link', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.clickOnHelpLink();
  await expect(page.getByRole('heading', { name: 'Redmine guide', exact: true })).toBeVisible();
});

test('search by id', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.clickOnIssuesLink();
  await expect(page.getByRole('heading', { name: 'Issues', exact: true })).toBeVisible();
  const issuesPage = new IssuesPage(page);
  let type = await issuesPage.getFirstTypeFromTable();
  let id = await issuesPage.getFirstIdFromTable();
  await homePage.performSearch(id)
  await expect(page.getByRole('heading', { name: type+ ' #'+id})).toBeVisible();


});

test('login with invalid login and password', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.clickOnSignInLink();
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  const signInPage = new SignInPage(page);
  await signInPage.enterRandomInvalidLogin();
  await signInPage.enterRandomInvalidPassword();
  await signInPage.clickOnLoginButton();
  await expect(page.getByText('Invalid user or password')).toBeVisible();
});

test('invalid email check on register page', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.clickOnRegisterLink();

  await expect(page.getByRole('heading', { name: 'Register' })).toBeVisible();
  const registerPage = new RegisterPage(page);

  await registerPage.enterRandomInvalidEmail();
  await registerPage.clickOnSubmitButton();

  await expect(page.getByText('Email is invalid')).toBeVisible();
});

