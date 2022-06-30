import { app } from '../../../../main';
import request from 'supertest';
import { mockUser } from '../../../../shared/TestMock';

describe('Unit test: Delete User [Controller]', () => {
  let id: string;

  beforeAll(async () => {
    const body = mockUser;
    const response = await request(app).post('/user').send(body);
    id = JSON.parse(response.text).id;
  });

  it('should be able to delete an user that already exists', async () => {
    const response = await request(app).delete(`/user/${id}`);
    const body = JSON.parse(response.text);

    expect(response.status).toBe(200);
    expect(body).toBe(true);
  });

  it('should not be able to delete an user that dont exists', async () => {
    const response = await request(app).delete(`/user/${id}`);
    const body = JSON.parse(response.text);

    expect(response.status).toBe(400);
    expect(body).toBe('Usuário não encontrado.');
  });
});
