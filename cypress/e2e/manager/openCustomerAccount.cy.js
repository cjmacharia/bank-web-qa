import LoginPage from '../../pages/loginPage';
import managerPage from '../../pages/managerPage';
import OpenAccountsPage from '../../pages/openAccountPage'
describe('Open customers accounts', () => {
  beforeEach (() => {
    LoginPage.clickHomeButton()
  })
  it('should successfully create a customer account', () => {
    LoginPage.clickMangerButton();
    managerPage.elements.openAccountButton().should('be.visible');
    managerPage.clickOpenAccountButton()
    cy.fixture('testData.json').then((data) => {
        OpenAccountsPage.selectCustomer(`${data.firstName} ${data.lastName}`);
    })
    OpenAccountsPage.selectCurrency('Pound');
    let alertContent;
    cy.on('window:alert', message => {
        cy.wrap(new Promise((resolve, reject) => {
          if (!message.includes('Account created successfully with account Number')) {
            reject(`Expected alert message to contain "Account created successfully with account Number:", but got "${message}"`);
          } else {
            alertContent = message;
            resolve();
          }
        })).catch((error) => {
          cy.fail(error);
        });
      });

    OpenAccountsPage.clickProcessButton();

    // update test data with customer id 
    cy.fixture('testData.json').then((data) => {
        data.account_number = alertContent;
        cy.writeFile('cypress/fixtures/testData.json', data);
      })
  })
})
