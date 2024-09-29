describe('User Management API', () => {
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/users')
      .send({ username: 'newuser', password: 'newpass' });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });

  it('should update an existing user', async () => {
    // Assuming the user ID is 1 for testing purposes
    const res = await request(app)
      .put('/users/1')
      .send({ username: 'updateduser' });

    expect(res.statusCode).toEqual(200);
  });

  it('should not allow users to access other users\' data', async () => {
    // Ensure a user can't access another user's details
  });
});



