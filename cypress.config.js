const { defineConfig } = require('cypress')
const { saveUsersSeed } = require('./cypress/support/generateTestData.js')

module.exports =  defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    defaultCommandTimeout: 5000,
    baseUrl: "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login",
    specPattern: 'cypress/e2e/allSpec.cy.js',
    testIsolation: false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('before:run', () => {
        saveUsersSeed()
      })
      // implement node event listeners here
    },
  },
})
