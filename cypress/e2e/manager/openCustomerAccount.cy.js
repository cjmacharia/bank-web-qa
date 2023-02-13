import loginPage from '../../pages/loginPage';
import managerPage from '../../pages/managerPage';
import openAccountsPage from '../../pages/openAccountPage';
describe('Manager open customers accounts', () => {
  beforeEach (() => {
    loginPage.clickHomeButton();
  })
  it('should successfully create a customer account', () => {
    loginPage.clickMangerButton();
    managerPage.elements.openAccountButton().should('be.visible');
    managerPage.clickOpenAccountButton();
    cy.fixture('testData.json').then((data) => {
        openAccountsPage.selectCustomer(`${data.firstName} ${data.lastName}`);
    })
    openAccountsPage.selectCurrency('Pound');
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

    openAccountsPage.clickProcessButton();

    // update test data with customer id 
    cy.fixture('testData.json').then((data) => {
        data.account_number = alertContent;
        cy.writeFile('cypress/fixtures/testData.json', data);
      })
  })
})
