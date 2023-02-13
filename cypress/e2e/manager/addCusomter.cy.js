import loginPage from '../../pages/loginPage';
import addCustomersPage from '../../pages/addCustomersPage';
import managerPage from '../../pages/managerPage';

describe('Manager add customers', () => {
    before (() => {
        loginPage.clickHomeButton()
    })

    it('should successfully add a customer', () => {
        loginPage.clickMangerButton();
        managerPage.elements.addCustomerButton().should('be.visible');
        managerPage.clickAddCustomerButton();
        addCustomersPage.elements.lastName().should('be.visible');
        addCustomersPage.elements.firstName().should('be.visible');
        addCustomersPage.elements.postCode().should('be.visible');
        cy.url().should('include', '/manager/addCust');
        cy.fixture('testData.json').then((user) => {
            addCustomersPage.typeFirstName(user.firstName);
            addCustomersPage.typeLastName(user.lastName);
            addCustomersPage.typePostCode(user.postCode);
        })
        cy.on('window:alert', message => {
            cy.wrap(new Promise((resolve, reject) => {
                if (!message.includes('Customer added successfully with customer id')) {
                reject(`Expected alert message to contain "Customer added successfully with customer id:", but got "${message}"`);
                } else {
                resolve();
                }
            })).catch((error) => {
                cy.fail(error);
            });
            });
        addCustomersPage.clickAddCustomer();
    })

    it('should fail to add a duplicate user', () => {
        managerPage.clickAddCustomerButton();
        addCustomersPage.elements.lastName().should('be.visible');
        addCustomersPage.elements.firstName().should('be.visible');
        addCustomersPage.elements.postCode().should('be.visible');
        cy.url().should('include', '/manager/addCust')
        cy.fixture('testData.json').then((data) => {
            addCustomersPage.typeFirstName(data.firstName);
            addCustomersPage.typeLastName(data.lastName);
            addCustomersPage.typePostCode(data.postCode);
        })
        cy.on('window:alert', message => {
            cy.wrap(new Promise((resolve, reject) => {
                if (!message.includes('Please check the details. Customer may be duplicate')) {
                reject(`Expected alert message to contain "Please check the details. Customer may be duplicate:", but got "${message}"`);
                } else {
                resolve();
                }
            })).catch((error) => {
                cy.fail(error);
            });
            });
            addCustomersPage.clickAddCustomer()
        })

  })

