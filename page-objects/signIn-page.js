const { expect } = require('@playwright/test');
const { HomePage } = require('./home-page');
const loginFieldLocator = 'id=username';
const passwordFieldLocator = 'id=password';
const loginButtonLocator = 'Login';



exports.SignInPage = class SignInPage extends HomePage{
    constructor(page) {
        super(page);
        this.page = page;
        this.loginField = page.locator(loginFieldLocator);
        this.passwordField = page.locator(passwordFieldLocator);
        this.loginButton = page.getByRole('button', { name: loginButtonLocator });
    }



async enterRandomInvalidLogin() {
    await this.loginField.fill(super.createRandomString(10));
}

async enterRandomInvalidPassword() {
    await this.passwordField.fill(super.createRandomString(10));
}

async clickOnLoginButton() {
    await this.loginButton.click();
  }
}



