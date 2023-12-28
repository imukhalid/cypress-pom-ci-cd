const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
    baseUrl: 'https://naveenautomationlabs.com/opencart',
    video: true,
    trashAssetsBeforeRuns: true,
    chromeWebSecurity: false,
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    execTimeout: 18000,
    defaultCommandTimeout: 300000,
    requestTimeout: 10000,
    pageLoadTimeout: 30000,
    responseTimeout: 10000,
    retries: {
      runMode: 1,
      openMode: 2
    }
  },
});
