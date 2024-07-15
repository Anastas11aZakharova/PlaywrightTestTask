const { expect } = require('@playwright/test');
const idFromTableLocator = 'xpath=//td[@class=\'id\']';
const typeFromTabeLocator='xpath=//td[@class=\'tracker\']'


exports.IssuesPage = class IssuesPage {
    constructor(page) {
        this.page = page;
        this.id = page.locator(idFromTableLocator);
        this.type = page.locator(typeFromTabeLocator);
    }

    async getFirstIdFromTable() {
        return this.id.locator('nth=0').locator('//a').textContent();
    }

    async getFirstTypeFromTable() {
        return this.type.locator('nth=0').textContent();
    }





}