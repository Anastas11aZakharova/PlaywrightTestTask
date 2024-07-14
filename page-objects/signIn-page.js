const { expect } = require('@playwright/test');
const loginFieldLocator = 'id=username';
const passwordFieldLocator = 'id=password';
const loginButtonLocator = 'Login';



exports.SignInPage = class SignInPage {
    constructor(page) {
        this.page = page;
        this.loginField = page.locator(loginFieldLocator);
        this.passwordField = page.locator(passwordFieldLocator);
        this.loginButton = page.getByRole('button', { name: loginButtonLocator });
    }



async enterRandomInvalidLogin() {
    await this.loginField.fill(createRandomString(10));
}

async enterRandomInvalidPassword() {
    await this.passwordField.fill(createRandomString(10));
}

async clickOnLoginButton() {
    await this.loginButton.click();
  }
}


function createRandomString(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

