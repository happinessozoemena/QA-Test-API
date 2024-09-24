const request = require('supertest');
const app = require('.https://qa-test-9di7.onrender.com./app'); // Your Express app or API server

describe('Authentication API', () => {
  let token;

  it('should login a user with valid credentials', async () => {
    const res = await request(app)
      .post('/login')
      .send({ username: 'ozoemena', password: '12345' });
    
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
    token = res.body.token;
  });

  it('should not login a user with invalid credentials', async () => {
    const res = await request(app)
      .post('/login')
      .send({ username: 'testuser', password: 'wrongpass' });
    
    expect(res.statusCode).toEqual(401);
  });

  it('should handle token expiration and refresh', async () => {
    // Simulate token expiration and refresh logic
    // Assuming your API provides an endpoint to refresh tokens
  });
});



