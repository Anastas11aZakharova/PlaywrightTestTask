const { expect } = require('@playwright/test');
const openDiscussionLocator = 'Open discussion';
const helpLocator = 'Help';
const developmentLocator = 'Development';
const pluginsLocator = 'Plugins';
const jobOffersLocator = 'Job offers';
const boardsLocator = '#content';





exports.ForumPage = class ForumPage {

    constructor(page) {
        this.page = page;
        this.openDiscussionLink = page.locator(boardsLocator).getByRole('link', { name: openDiscussionLocator, exact: true });
        this.helpLink = page.locator(boardsLocator).getByRole('link', { name: helpLocator, exact: true });
        this.developmentLink = page.locator(boardsLocator).getByRole('link', { name: developmentLocator, exact: true });
        this.pluginsLink = page.locator(boardsLocator).getByRole('link', { name: pluginsLocator, exact: true });
        this.jobOffersLink = page.locator(boardsLocator).getByRole('link', { name: jobOffersLocator, exact: true });

    }



}
