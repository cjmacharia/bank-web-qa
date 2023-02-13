const { defineConfig } = require('cypress')
const { saveUsersSeed } = require('./cypress/support/generateTestData.js')
const { beforeRunHook } = require('cypress-mochawesome-reporter/lib');
module.exports =  defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    defaultCommandTimeout: 5000,
    baseUrl: "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login",
    specPattern: 'cypress/e2e/allSpec.cy.js',
    testIsolation: false,
    retries: {
      runMode: 2
    },
    
    setupNodeEvents(on, config) {
      this.screenshotOnRunFailure=true;
      require('cypress-mochawesome-reporter/plugin')(on);
      on('before:run', async (details) => {
        saveUsersSeed()
        await beforeRunHook(details);
      })
      // implement node event listeners here
    },
  },
})
