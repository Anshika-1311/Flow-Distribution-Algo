const request = require('supertest');
const app = require('../src/app');

describe('POST /api/assign-user', () => {
  it('should assign a user to an astrologer', async () => {
    const response = await request(app)
      .post('/api/assign-user')
      .send({ userId: 'u123', userName: 'Test User' });

    expect(response.statusCode).toBe(200);
    expect(response.body.assignedTo).toHaveProperty('id');
  });
});