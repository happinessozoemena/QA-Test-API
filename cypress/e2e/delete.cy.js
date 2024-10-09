describe('API Test for DELETE request', () => {
    it('should delete the resource successfully', () => {
      const itemId = 1;
  
      cy.request({
        method: 'GET',
        url: `https://qa-test-9di7.onrender.com/items${itemId}`,
        headers: {
          'Authorization': 'Bearer <accessToken>' 
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', itemId);
  
        // Now delete the item
        cy.request({
          method: 'DELETE',
          url: `https://qa-test-9di7.onrender.com/items${itemId}`,
          headers: {
            'Authorization': 'Bearer <your-token>' 
          }
        }).then((deleteResponse) => {
          expect(deleteResponse.status).to.eq(200);
          expect(deleteResponse.body).to.be.empty;
  
          cy.request({
            method: 'GET',
            url: `https://qa-test-9di7.onrender.com/items${itemId}`,
            failOnStatusCode: false, 
            headers: {
              'Authorization': 'Bearer <accessToken>'
            }
          }).then((getResponse) => {
            expect(getResponse.status).to.eq(404);
          });
        });
      });
    });
  });
  