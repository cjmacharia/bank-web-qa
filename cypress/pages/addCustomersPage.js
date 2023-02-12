class AddCustomersPage {
    elements = {
        firstName: () => cy.get('input[ng-model="fName"]'),
        lastName: () => cy.get('input[ng-model="lName"]'),
        postCode: () => cy.get('input[ng-model="postCd"]'),
        addCustomer: () => cy.get('.btn-default'),

    }

    typeFirstName(firstName) {
        this.elements.firstName().clear().type(firstName);;
    }

    typeLastName(lastName) {

        this.elements.lastName().clear().type(lastName);
    }

    typePostCode(postCode) {
        this.elements.postCode().clear().type(postCode);;
    }

    clickAddCustomer() {
        this.elements.addCustomer().click();
    }
}

export default new AddCustomersPage()