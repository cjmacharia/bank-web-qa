import loginPage from '../../pages/loginPage';
import selectCustomerPage from '../../pages/selectCustomerPage';
import accountsPage from '../../pages/accountsPage'
describe('Customer login test cases', () => {
  before(() => {
    loginPage.clickHomeButton()
  })
  it('should login successfully as a customer', () => {
    loginPage.clickCustomerButton();
    selectCustomerPage.elements.selectUser().should('be.visible');
    selectCustomerPage.elements.loginButton().should('not.be.visible');
    cy.fixture('testData.json').then((data) => {
        selectCustomerPage.selectYourName(`${data.firstName} ${data.lastName}`)
    })
    selectCustomerPage.elements.loginButton().should('be.visible');
    selectCustomerPage.clickLoginButton()
    cy.readFile('cypress/fixtures/testData.json').then((data) => {
        const account_number = data.account_number.split(':')[1].trim()
        accountsPage.elements.accountNumber().should('have.text', account_number)
    })

  })
})
