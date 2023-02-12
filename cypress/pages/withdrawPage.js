class withdrawalPage {
    elements = {
        amountInput: () => cy.get('input[ng-model="amount"]'),
        withdrawButton: () => cy.get('button[type="submit"]'),
        message: () => cy.get('span[ng-show="message"]')

    }

    enterAnAmount(amount) {
        this.elements.amountInput().click();
        this.elements.amountInput().type(amount);
    }

    withdrawAmount() {
        this.elements.withdrawButton().click();
    }
}

export default new withdrawalPage()