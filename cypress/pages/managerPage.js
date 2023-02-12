class ManagerPage {
    elements = {
        addCustomerButton: () => cy.get('button[ng-click="addCust()"]'),
        openAccountButton: () => cy.get('button[ng-click="openAccount()"]'),
        customersButton: () => cy.get('button[ng-click="showCust()"]'),

    }

    clickAddCustomerButton() {
        this.elements.addCustomerButton().click();
    }

    clickOpenAccountButton() {
        this.elements.openAccountButton().click();
    }

    clickCustomersButton() {
        this.elements.customersButton().click();
    }


}

export default new ManagerPage()