describe('Site Swag Labs', () => {
    it('apare mesaj de eroare la un login gresit', () => {
        cy.visit('https://www.saucedemo.com/');

        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('exist');
    })
    
    it('pot pune un produs in cos', ()=> {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click(); 
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_link').click();
        cy.get('.cart_item_label').should('exist');
    })

    it('pot face un logout', ()=> {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click(); 
        cy.get('#react-burger-menu-btn').click();
        cy.get('#reset_sidebar_link').click();
        cy.get('#logout_sidebar_link').click();
    })



})