class DepositsPage {
    elements = {
        amountInput: () => cy.get('input[ng-model="amount"]'),
        depositButton: () => cy.get('button[type="submit"]'),
        message: () => cy.get('span[ng-show="message"]')
    }

    enterAnAmount(amount) {
        this.elements.amountInput().type(amount);
    }
    depositAmount() {
        this.elements.depositButton().click();
    }
}

export default new DepositsPage();