describe('Login UI', () => {
  it('Should log in a user with valid credentials', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('#username').type('udun');
    cy.get('#password').type('12345');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/dashboard');
  });
});
