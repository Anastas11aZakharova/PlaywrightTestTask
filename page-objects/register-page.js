const { expect } = require('@playwright/test');
const { HomePage } = require('./home-page');
const emailFieldLocator = 'id=user_mail';
const submitButtonLocator = 'Submit';


exports.RegisterPage = class RegisterPage extends HomePage {
    constructor(page) {
        super(page);
        this.page = page;
        this.emailField = page.locator(emailFieldLocator);
        this.submitButton = page.getByRole('button', { name: submitButtonLocator });
    }




    async enterRandomInvalidEmail() {
        await this.emailField.fill(super.createRandomString(5));
    }

    async clickOnSubmitButton() {
        await this.submitButton.click();
    }



}

