describe('UI Test - Create Item', () => {
    beforeEach(() => {
      // Visit the page where the "Create Item" form is located
      cy.visit('http://localhost:3000/create-item'); // Change this to your actual URL
    });
  
    it('should create a new item successfully', () => {
      cy.get('input[name="itemName"]').type('New Item');  
      cy.get('textarea[name="itemDescription"]').type('This is a new item.');  
      
      // Submit the form
      cy.get('button[type="submit"]').click(); 
      cy.get('.success-message') 
        .should('be.visible')
        .and('contain', 'Item created successfully'); 
      cy.visit('http://localhost:3000/items'); 
      cy.contains('New Item') 
        .should('exist');
    });
  });
  