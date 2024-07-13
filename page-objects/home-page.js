const { expect } = require('@playwright/test');
const helpLinkText = 'Help';
const forumLinkText = 'Forums';
const registerLinkText = 'Register';
const searchFieldLocator = 'id=q';

exports.HomePage = class HomePage {  

  constructor(page) {
    this.page = page;
    this.helpLink = page.getByRole('link', { name: helpLinkText,exact: true });
    this.forumLink = page.getByRole('link', { name: forumLinkText,exact: true });
    this.registerLink = page.getByRole('link', { name: registerLinkText,exact: true });
    this.searchField = page.locator(searchFieldLocator)
  }

  async goto() {
    await this.page.goto('https://www.redmine.org/');
  }

  async clickOnHelpLink(){
    await this.helpLink.click();
  }

  async clickOnForumLink(){
    await this.forumLink.click();
  }

  async clickOnRegisterLink(){
    await this.registerLink.click();
  }

  async performSearch(id){
    await this.searchField.fill('#'+id);
    await this.searchField.press('Enter');
  }
};


