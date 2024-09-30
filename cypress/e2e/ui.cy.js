
describe('User Interaction Tests', () => {

  // Test for user login with valid credentials
  describe('Login UI', () => {
    it('Should log in a user with valid credentials', () => {  
      cy.visit('http://localhost:3000/login');
      cy.get('input[placeholder="Username"]').type('ozoemena');
      cy.get('input[placeholder="Password"]').type('12345');
      cy.get('button[type="submit"]').click();
      cy.url().should('include', 'http://localhost'); // Assert redirection to dashboard
      cy.get('#root').should('contain', 'Login successful!');
    });

     it('Should show an error for invalid credentials', () => {
      cy.visit('http://localhost:3000/login');
      cy.get('input[placeholder="Username"]').type('wrongUser');
      cy.get('input[placeholder="Password"]').type('wrongPass');
      cy.get('button[type="submit"]').click();
      cy.get('#root').should('contain', 'Login failed!');
    });
   });

  // Test for user registration
  describe('Registration UI', () => {
    it('Should register a new user', () => {
      cy.visit('http://localhost:3000/register');
      cy.get('input[placeholder="Username"]').type('newUser');
      cy.get('input[placeholder="Password"]').type('newPassword');
      cy.get('button[type="submit"]').click();
      cy.get('#root').should('contain', 'Registration successful!');
    });
  });

});
