const request = require('supertest');
const app = require('.https://qa-test-9di7.onrender.com./app'); // Adjust the path to your app accordingly

describe('User Management API', () => {
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/users')
      .send({ username: 'newuser', password: 'newpass' });
    
    expect(res.statusCode).toEqual(201); // Adjust the expected status code
    expect(res.body.username).toEqual('newuser');
  });
});
