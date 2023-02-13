class AccountsPage {
    elements = {
        transcationsButton: () => cy.get('button[ng-click="transactions()"]'),
        depositButton: () => cy.get('button[ng-click="deposit()"]'),
        withdrawlButton: () => cy.get('button[ng-click="withdrawl()"]'),
        accountNumber: () => cy.get('select[ng-model="accountNo"] option'),

    }

    clicktranscationsButton() {
        this.elements.transcationsButton().click();
    }
    clickdepositButton() {
        this.elements.depositButton().click();
    }
    clickwithdrawlButton() {
        this.elements.withdrawlButton().click();
    }
}

export default new AccountsPage();