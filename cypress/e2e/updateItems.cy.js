describe('API Test - Update Item', () => {
    before(() => {
      // Perform the PUT request to update the item before the test runs
      cy.request({
        method: 'PUT',
        url: 'http://localhost:3000/api/items/1', 
        body: {
          name: 'Updated Item',
          description: 'Updated description',
        },
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        // Assert that the status code is 200 (OK)
        expect(response.status).to.eq(200);
      });
    });
  
    it('should update an item successfully', () => {
      // Now check if the item was successfully updated with a GET request
      cy.request('GET', 'http://localhost:3000/api/items/1')
        .its('body')
        .should('include', { name: 'Updated Item' }); // Assert that the updated name is present
    });
  });
  