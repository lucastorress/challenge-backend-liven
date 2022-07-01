import { app } from '../../../../main';
import request from 'supertest';
import { mockUser } from '../../../../shared/TestMock';

describe('Unit test: Update User [Controller]', () => {
  let id: string;
  let token: string;

  beforeAll(async () => {
    const body = mockUser;
    const response = await request(app).post('/v1/user').send(body);
    id = JSON.parse(response.text).id;

    const auth = await request(app).post('/v1/auth/login').send({
      email: body.email,
      password: body.password,
    });
    token = JSON.parse(auth.text).token;
  });

  it('should be able to update your own user', async () => {
    const updateMockUser = {
      ...mockUser,
      password: '123liven',
    };
    const response = await request(app)
      .put(`/v1/user`)
      .send(updateMockUser)
      .set('Authorization', `Bearer ${token}`);

    const body = JSON.parse(response.text);

    expect(response.status).toBe(201);
    expect(body).toHaveProperty('id');
    expect(body).toHaveProperty('password', '123liven');
  });
});
