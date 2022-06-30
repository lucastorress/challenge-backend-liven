import { app } from '../../../../main';
import request from 'supertest';
import { mockUser } from '../../../../shared/TestMock';

describe('Unit test: Get User [Controller]', () => {
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

  it('should be able to get an existent user by id and send bearer token', async () => {
    const response = await request(app)
      .get(`/v1/user/${id}`)
      .set('Authorization', `Bearer ${token}`);
    const user = JSON.parse(response.text);

    expect(response.status).toBe(200);
    expect(user).toHaveProperty('id');
  });
});
