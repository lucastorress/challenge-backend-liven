import { app } from '../../../../main';
import request from 'supertest';
import { ICreateUserDTO } from '../../CreateUser/CreateUserDTO';

const mockUser: ICreateUserDTO = {
  name: 'Lucas Torres',
  email: 'lucastorres@make2u.com.br',
  password: 'liven123',
  birthday: new Date(),
};

describe('Unit test: Get User [Controller]', () => {
  let id: string;

  beforeAll(async () => {
    const body = mockUser;
    const response = await request(app).post('/users').send(body);
    id = JSON.parse(response.text).id;
  });

  it('should be able to get an existent user by id', async () => {
    const response = await request(app).get(`/users/${id}`);

    expect(response.status).toBe(200);
  });
});
