class TransactionsPage {
    elements = {
        creditAmount: () => cy.get('tr td').contains('Credit').prev(),
        debitAmount: () => cy.get('tr td').contains('Debit').prev(),
    }

}

export default new TransactionsPage()