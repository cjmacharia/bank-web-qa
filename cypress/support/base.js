export const assertAlertMessage = (expectedMessage) => {
    cy.on('window:alert', message => {
        cy.wrap(new Promise((resolve, reject) => {
          if (!message.includes(expectedMessage)) {
            reject(`Expected alert message to contain "${expectedMessage}:", but got "${message}"`);
          } else {
            resolve();
          }
        })).catch((error) => {
          cy.fail(error);
        });
      });
}