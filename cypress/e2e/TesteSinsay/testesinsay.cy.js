describe ('Site Sinsay', () => {
it (' ma pot loga',() => {
cy.visit('https://www.sinsay.com/ro/ro/customer/account/login/#login');
cy.get('#cookiebotDialogOkButton').click();
cy.get('[data-name="login[username]"] > .valid').type('vanesagroza@yahoo.com');
cy.get('[data-name="login[password]"] > .valid').type('bnhhh');
cy.get('.primary__PrimaryButtonComponent-sc-1pct4vx-0').click();
})


})