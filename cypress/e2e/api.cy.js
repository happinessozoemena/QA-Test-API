describe('API End-to-End Tests', () => {
    let token; 
    
    // Test for user login and fetching items
    it('should log in and fetch items', () => {
      // User login
      cy.request('POST', 'https://qa-test-9di7.onrender.com/auth/login', {
        username: 'joe23',
        password: 'josh'
      }).then((response) => {
        expect(response.status).to.eq(200);
        token = response.body.accessToken; // Save the token for subsequent requests
      }).then(() => {
        // Fetch items using the token
        cy.request({
          method: 'GET',
          url: 'https://qa-test-9di7.onrender.com/items',
          headers: {
            Authorization: `Bearer ${token}` 
          }
        }).then((itemResponse) => {
          expect(itemResponse.status).to.eq(200);
          expect(itemResponse.body).to.be.an('array'); // Ensure the response is an array
        });
      });
    });
  
    // Test for item creation
    it('should handle item creation', () => {
      // User login to get the token again (can be refactored to avoid login twice)
      cy.request('POST', 'https://qa-test-9di7.onrender.com/auth/login', {
        username: 'joe23',
        password: 'josh'
      }).then((response) => {
        expect(response.status).to.eq(200);
        token = response.body.accessToken; 
  
        // Create an item using the token
        cy.request({
          method: 'POST',
          url: 'https://qa-test-9di7.onrender.com/items',
          headers: {
            Authorization: `Bearer ${token}` // Use the token for authorization
          },
          body: {
            name: 'Close-up',
            description: 'This is a toothpaste used in washing teeth'
          }
        }).then((createResponse) => {
          expect(createResponse.status).to.eq(201); // Expect successful creation
          expect(createResponse.body.name).to.eq('Close-up'); // Check the created item name
        });
      });
    });
  });
  