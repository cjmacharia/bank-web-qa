class SelectCustomerPage {
    elements = {
        selectUser: () => cy.get('#userSelect'),
        loginButton: () => cy.get('button[type="submit"]')
    }

    selectYourName(customer) {
        this.elements.selectUser().select(customer);
    }

    clickLoginButton() {
        this.elements.loginButton().click();
    }

}

export default new SelectCustomerPage();