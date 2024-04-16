const { defineConfig } = require("cypress");
const sharedConfig = require('../../cypress.config');

module.exports = defineConfig({
    reporter: 'cypress-mochawesome-reporter',
    e2e: {
        ...sharedConfig.e2e,
        baseUrl: 'https://naveenautomationlabs.com/opencart',
    },
});