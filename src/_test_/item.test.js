describe('Item Management API', () => {
  it('should create a new item', async () => {
    const res = await request(app)
      .post('/items')
      .send({ name: 'Item 1' })
      .set('Authorization', `Bearer ${accessToken}`); 

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
