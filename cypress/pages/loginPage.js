class LoginPage {
    elements = {
        customerLoginButton: () => cy.get('button[ng-click="customer()"]'),
        bankManagerLoginButton: () => cy.get('button[ng-click="manager()"]'),
        homeButton: () => cy.get('button[ng-click="home()"]'),
    }

    clickCustomerButton() {
        this.elements.customerLoginButton().click();
    }

    clickMangerButton() {
        this.elements.bankManagerLoginButton().click();
    }

    clickHomeButton() {
        this.elements.homeButton().click();
    }


}

export default new LoginPage()