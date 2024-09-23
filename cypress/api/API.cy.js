describe('API End-to-End Tests', () => {
    let token;
    it('should log in and fetch items', () => {
      cy.request('POST', 'https://qa-test-9di7.onrender.com/auth/login', {
        username: 'joe23',
        password: 'josh'
      }).then((response) => {
        expect(response.status).to.eq(200);
        token = response.body.accessToken;
      });
    });

    it('', () => {
        cy.request({
            method: 'GET',
            url: 'https://qa-test-9di7.onrender.com/items',
            headers: {
              Authorization: `Bearer ${token}`
            }
          }).then((itemResponse) => {
            expect(itemResponse.status).to.eq(200);
            expect(itemResponse.body).to.be.an('array');
          });
    })
  
    // it('should handle item creation', () => {
    //   cy.request('POST', 'https://qa-test-9di7.onrender.com/auth/login', {

    //     username: 'udun',
    //     password: 'testpass'
    //   }).then((response) => {
    //     const token = response.body.token;
  
    //     cy.request({
    //       method: 'POST',
    //       url: 'https://qa-test-9di7.onrender.com/items',
    //       headers: {
    //         Authorization: `Bearer ${token}`
    //       },
    //       body: {
    //         name: 'Test Item',
    //         description: 'This is a test item'
    //       }
    //     }).then((createResponse) => {
    //       expect(createResponse.status).to.eq(201);
    //     });
    //   });
    // });
  });
  