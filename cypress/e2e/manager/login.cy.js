import LoginPage from '../../pages/loginPage';
import managerPage from '../../pages/managerPage';

describe('Login test cases', () => {
  before (() => {
    cy.visit('/');
  })
  it('should login successfully as a manager', () => {
    LoginPage.clickMangerButton();
    managerPage.elements.addCustomerButton().should('be.visible');
    managerPage.elements.openAccountButton().should('be.visible');
    managerPage.elements.customersButton().should('be.visible');
  })
})
