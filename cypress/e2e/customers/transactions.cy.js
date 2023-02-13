import accountsPage from '../../pages/accountsPage';
import transactionsPage from '../../pages/transactionsPage';
describe('Customer transactions testcases', () => {
  it('should display the transactions made', () => {
    accountsPage.clicktranscationsButton();
    cy.fixture('testData.json').then(data => {
        transactionsPage.elements.creditAmount().should('have.text', data.deposit);
        transactionsPage.elements.debitAmount().should('have.text', data.withdraw);
    })
  })
})
