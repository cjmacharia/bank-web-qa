import depositPage from '../../pages/depositPage';
import accountsPage from '../../pages/accountsPage';
describe('Customer deposit amount testcases', () => {
  it('should successfully deposit money into my account', () => {
    accountsPage.clickdepositButton();
    depositPage.elements.depositButton().should('have.text', 'Deposit');
    depositPage.elements.amountInput().should('be.visible');
    cy.fixture('testData.json').then(data => {
        depositPage.enterAnAmount(data.deposit);
    })
    depositPage.depositAmount();
    depositPage.elements.message().should('have.text', 'Deposit Successful');
  })
})
