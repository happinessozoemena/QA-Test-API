describe('User Registration API Tests', () => {
    const baseUrl = 'https://qa-test-9di7.onrender.com';
  
    it('Should successfully register a new user', () => {
      // Generate a random username to avoid duplicate errors
      const randomUsername = `user_${Math.floor(Math.random() * 100000)}`;
  
      cy.request({
        method: 'POST',
        url: `${baseUrl}/auth/signup`,  // Your registration endpoint
        body: {
          username: randomUsername,
          password: 'pass005'
        }
      }).then((response) => {
        expect(response.status).to.eq(201);  // Assuming 201 Created for successful registration
        expect(response.body).to.have.property('username', randomUsername);
      });
    });
  
    it('Should fail to register with an existing username', () => {
      // Reuse the same username to trigger a "username already exists" error
      cy.request({
        method: 'POST',
        url: `${baseUrl}/auth/signup`,
        failOnStatusCode: false,  // Prevents Cypress from failing automatically
        body: {
          username: 'jane',  // Existing username
          password: 'pass006'
        }
      }).then((response) => {
        expect(response.status).to.eq(400);  // 400 Bad Request expected
        expect(response.body).to.have.property('message', 'Username already exists');
      });
    });
  
    it('Should return an error for invalid input', () => {
      cy.request({
        method: 'POST',
        url: `${baseUrl}/auth/signup`,
        failOnStatusCode: false,  // Prevents failure on 4xx/5xx responses
        body: {
          username: '',  // Invalid input
          password: ''
        }
      }).then((response) => {
        expect(response.status).to.eq(400);  // 400 Bad Request expected for invalid input
        //expect(response.body).to.have.property('error', 'Bad Request');
      });
    });
  });
  