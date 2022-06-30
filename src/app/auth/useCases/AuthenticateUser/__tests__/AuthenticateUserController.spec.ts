import { mockUser } from '../../../../shared/TestMock';
import { app } from '../../../../main';

import { IAuthenticateUserDTO } from '../AuthenticateUserDTO';
import request from 'supertest';

describe('Unit test: Authenticate User [Controller]', () => {
  beforeAll(async () => {
    const body = mockUser;
    await request(app).post('/user').send(body);
  });

  it('should be able to authenticate user registered, receive user without password property and jwt token', async () => {
    const body: IAuthenticateUserDTO = {
      email: mockUser.email,
      password: mockUser.password,
    };

    const response = await request(app).post(`/auth/login`).send(body);
    const responseParsed = JSON.parse(response.text);

    expect(responseParsed).toHaveProperty('user');
    expect(responseParsed).not.toHaveProperty('password');
    expect(responseParsed).toHaveProperty('token');
  });

  it('should not be able to authenticate user registered with wrong password and receive status 401', async () => {
    const body: IAuthenticateUserDTO = {
      email: mockUser.email,
      password: 'wrongpassword',
    };

    const response = await request(app).post(`/auth/login`).send(body);
    const responseParsed = JSON.parse(response.text);

    expect(response.status).toBe(401);
    expect(responseParsed).toBe('Usuário não autorizado.');
  });

  it('should not be able to authenticate user unregistered and receive status 401', async () => {
    const body: IAuthenticateUserDTO = {
      email: 'wrongemail@gmail.com',
      password: 'wrongpassword',
    };

    const response = await request(app).post(`/auth/login`).send(body);
    const responseParsed = JSON.parse(response.text);

    expect(response.status).toBe(401);
    expect(responseParsed).toBe('Usuário não registrado.');
  });
});
