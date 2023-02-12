class CustomersPage {
    elements = {
        deleteCutomerButton: () => cy.get('button[ng-click="deleteCust(cust)"]'),
        searchInput: () => cy.get('input[ng-model="searchCustomer"]'),
        customerName: () => cy.get('tr[ng-repeat="cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer"]'),
    }

    deleteCustomer() {
        this.elements.deleteCutomerButton().click();
    }

    searchCustomer(account_number) {
        this.elements.searchInput().type(account_number);
    }


}

export default new CustomersPage()