// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://www.redmine.org/');

  // Expect a title to contain "Redmine".
  await expect(page).toHaveTitle(/Redmine/);
});

test('help link', async ({ page }) => {
  await page.goto('https://www.redmine.org/');

  // Click the help link.
  await page.getByRole('link', { name: 'Help',exact: true }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();  
});

test('search by id', async ({ page }) => {
  await page.goto('https://www.redmine.org/');

  // Enter the text in search field.
  await page.locator('id=q').fill('#40970');
  await page.locator('id=q').press('Enter');
  // Expects page to have a heading with the name of Feature #40970.
  await expect(page.getByRole('heading', { name: 'Feature #40970' })).toBeVisible();
});

test('forum boards', async ({ page }) => {
  await page.goto('https://www.redmine.org/');

  // Click the forum link.
  await page.getByRole('link', { name: 'Forums',exact: true }).click();

  // Expects page to have a heading with the name of Forums.
  await expect(page.getByRole('heading', { name: 'Forums' })).toBeVisible();
  // Expects page to have forum boards.
  await expect(page.locator('#content').getByRole('link', { name: 'Open discussion' })).toBeVisible(); 
  await expect(page.locator('#content').getByRole('link', { name: 'Help' })).toBeVisible();  
  await expect(page.locator('#content').getByRole('link', { name: 'Development' })).toBeVisible();  
  await expect(page.locator('#content').getByRole('link', { name: 'Plugins' })).toBeVisible();
  await expect(page.locator('#content').getByRole('link', { name: 'Job offers' })).toBeVisible(); 
});

test('invalid email check on register page', async ({ page }) => {
  await page.goto('https://www.redmine.org/');
  // Click the register link.
  await page.getByRole('link', { name: 'Register'}).click();
  // Expects page to have a heading with the name of Register.
  await expect(page.getByRole('heading', { name: 'Register' })).toBeVisible();  
  // Enter the invalid email in email field.
  await page.locator('id=user_mail').fill('abcdef');
  // Click the submit button.
  await page.getByRole('button', { name: 'Submit'}).click();
  // Expects page to have an error message "Email is invalid".
  await expect(page.getByText('Email is invalid')).toBeVisible();

});
