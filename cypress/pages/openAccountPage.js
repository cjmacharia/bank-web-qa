class OpenAccountsPage {
    elements = {
        customerNameDropDown: () => cy.get('#userSelect'),
        currencyNameDropDown: () => cy.get('#currency'),
        processButton: () => cy.get('button[type="submit"]'),

    }

    selectCustomer(customer) {
        this.elements.customerNameDropDown().select(customer);
    }

    selectCurrency(currency) {
        this.elements.currencyNameDropDown().select(currency);
    }

    clickProcessButton() {
        this.elements.processButton().click();
    }
}

export default new OpenAccountsPage();