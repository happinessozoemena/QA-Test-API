s
describe('Item Management API', () => {
  it('should create a new item', async () => {
    const res = await request(app)
      .post('/items')
      .send({ name: 'Item 1' })
      .set('Authorization', `Bearer ${eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUyOWRkOTA3LWNmMTUtNGI4Yy04MzU4LTIwM2ZkODgxZjFjZCIsInVzZXJuYW1lIjoiam9lIiwiaWF0IjoxNzIzMTMwNDg4fQ.L0veYqRdR6-Lh0L8UnSxNY4OWH8jES1SvGdxDKXI-Bg}`); // Add token to the request header

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });

  it('should only allow the owner to modify or delete their items', async () => {
    // Ensure that only the owner of the item can update or delete it
  });

  it('should handle edge cases like duplicate items or invalid input', async () => {
    // Test for invalid inputs or duplicate items
  });
});
