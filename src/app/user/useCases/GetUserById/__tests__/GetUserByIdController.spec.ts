import { app } from '../../../../main';
import request from 'supertest';
import { mockUser } from '../../../../shared/TestMock';

describe('Unit test: Get User [Controller]', () => {
  let id: string;

  beforeAll(async () => {
    const body = mockUser;
    const response = await request(app).post('/v1/user').send(body);
    id = JSON.parse(response.text).id;
  });

  it('should be able to get an existent user by id', async () => {
    const response = await request(app).get(`/v1/user/${id}`);
    const user = JSON.parse(response.text);

    expect(response.status).toBe(200);
    expect(user).toHaveProperty('id');
  });
});
