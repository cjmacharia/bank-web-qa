import withdrawPage from '../../pages/withdrawPage';
import accountsPage from '../../pages/accountsPage';

describe('Customer withdraw amount testcases', () => {
    beforeEach (() => {
        accountsPage.clickwithdrawlButton();
      })
  it('should successfully withdraw money from my account', () => {
    withdrawPage.elements.withdrawButton().should('have.text', 'Withdraw');
    withdrawPage.elements.amountInput().should('be.visible');
    cy.fixture('testData').then(data => {
        withdrawPage.enterAnAmount(data.withdraw);
    })
    withdrawPage.withdrawAmount();
    withdrawPage.elements.message().should('have.text', 'Transaction successful');
  })

  it('should not withdraw more than the deposited amount', () => {
    cy.fixture('testData.json').then(data => {
        withdrawPage.enterAnAmount(data.negativeWithdraw);
    })
    withdrawPage.withdrawAmount();
    withdrawPage.elements.message().should('have.text', 'Transaction Failed. You can not withdraw amount more than the balance.');
  })
})
