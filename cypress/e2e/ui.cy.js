
describe('User Interaction Tests', () => {

  // Test for user login with valid credentials
  describe('Login UI', () => {
    it('Should log in a user with valid credentials', () => {  
      cy.visit('http://localhost:3000/login');
      cy.get('input[placeholder="Username"]').type('ozoemena');
      cy.get('input[placeholder="Password"]').type('12345');
      cy.get('button[type="submit"]').click();
      //cy.url().should('include', '/dashboard'); // Assert redirection to dashboard
      cy.get('.success-message').should('contain', 'Login successful');
    });

    it('Should show an error for invalid credentials', () => {
      cy.visit('http://localhost:3000/login');
      cy.get('input[placeholder="Username"]').type('wrongUser');
      cy.get('input[placeholder="Password"]').type('wrongPass');
      cy.get('button[type="submit"]').click();
      cy.get('.error-message').should('contain', 'Invalid username or password');
    });
  });

  // Test for user registration
  describe('Registration UI', () => {
    it('Should register a new user', () => {
      cy.visit('http://localhost:3000/register');
      cy.get('input[placeholder="Username"]').type('newUser');
      cy.get('input[placeholder="Password"]').type('newPassword');
      cy.get('input[placeholder="Confirm Password"]').type('newPassword');
      cy.get('button[type="submit"]').click();
      cy.url().should('include', '/login'); // Assert redirection to login
      cy.get('.success-message').should('contain', 'Registration successful');
    });

    it('Should show a validation error for mismatched passwords', () => {
      cy.visit('http://localhost:3000/register');
      cy.get('input[placeholder="Username"]').type('newUser');
      cy.get('input[placeholder="Password"]').type('newPassword');
      cy.get('input[placeholder="Confirm Password"]').type('wrongPassword');
      cy.get('button[type="submit"]').click();
      cy.get('.error-message').should('contain', 'Passwords do not match');
    });
  });

  // Test for item management
  describe('Item Management UI', () => {
    beforeEach(() => {
      // Log in before performing item management actions
      cy.visit('http://localhost:3000/login');
      cy.get('input[placeholder="Username"]').type('udun');
      cy.get('input[placeholder="Password"]').type('12345');
      cy.get('button[type="submit"]').click();
    });

    it('Should create a new item', () => {
      cy.visit('http://localhost:3000/items');
      cy.get('button#create-new-item').click();
      cy.get('input[placeholder="Item Name"]').type('New Item');
      cy.get('textarea[placeholder="Item Description"]').type('Description of new item');
      cy.get('button[type="submit"]').click();
      cy.get('.success-message').should('contain', 'Item created successfully');
    });

    it('Should update an existing item', () => {
      cy.visit('http://localhost:3000/items');
      cy.get('.item-list .item:first-child .edit-button').click();
      cy.get('input[placeholder="Item Name"]').clear().type('Updated Item Name');
      cy.get('button[type="submit"]').click();
      cy.get('.success-message').should('contain', 'Item updated successfully');
    });

    it('Should delete an item', () => {
      cy.visit('http://localhost:3000/items');
      cy.get('.item-list .item:first-child .delete-button').click();
      cy.get('.success-message').should('contain', 'Item deleted successfully');
    });
  });
});
