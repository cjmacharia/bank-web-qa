import loginPage from '../../pages/loginPage';
import managerPage from '../../pages/managerPage';
import customersPage from '../../pages/allCustomersPage';
describe('Manager delete customers', () => {
  it('should successfully delete a customer', () => {
    loginPage.clickHomeButton();
    loginPage.clickMangerButton();
    managerPage.elements.customersButton().should('be.visible');
    managerPage.clickCustomersButton();
    cy.readFile('cypress/fixtures/testData.json').then((data) => {
        const account_number = data.account_number.split(':')[1].trim();
        customersPage.searchCustomer(account_number);
    })
    //assert one customer is returned
    customersPage.elements.customerName().should('have.length', '1');
    customersPage.deleteCustomer();
    
    // assert customer was deleted
    customersPage.elements.customerName().should('have.length', '0');


  })
})
