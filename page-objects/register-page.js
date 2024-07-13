const { expect } = require('@playwright/test');
const emailFieldLocator = 'id=user_mail';
const submitButtonLocator = 'Submit';


exports.RegisterPage = class RegisterPage {
    constructor(page) {
        this.page = page;
        this.emailField = page.locator(emailFieldLocator);
        this.submitButton = page.getByRole('button', { name: submitButtonLocator});
    }




async enterRandomInvalidEmail() {
    await this.emailField.fill(createRandomString(5));
}

async clickOnSubmitButton() {
    await this.submitButton.click();
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
  