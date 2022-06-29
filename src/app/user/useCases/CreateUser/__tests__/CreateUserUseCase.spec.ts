import InMemoryUsersRepositoryInstance from '../../../repositories/in-memory/InMemoryUsersRepository';
import IUserRepository from '../../../repositories/IUsersRepository';
import { CreateUserUseCase } from '../CreateUserUseCase';
import { ICreateUserDTO } from '../CreateUserDTO';
import { mockUser } from '../../../../shared/TestMock';

describe('Unit test: Create User [Use Case]', () => {
  let usersRepository: IUserRepository;
  let createUserCase: CreateUserUseCase;

  beforeAll(() => {
    usersRepository = InMemoryUsersRepositoryInstance;
    createUserCase = new CreateUserUseCase(usersRepository);
  });

  it('should be able to create a new user', async () => {
    const user = await createUserCase.execute(mockUser);

    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('name', 'Lucas Torres');
    expect(user).toHaveProperty('email', 'lucastorres@make2u.com.br');
    expect(user).toHaveProperty('password', 'liven123');
  });

  it('should not to be able to create a user with an email that already exists', async () => {
    const user: ICreateUserDTO = {
      name: 'Lucas P Torres',
      email: 'lucastorres@make2u.com.br',
      password: 'liven12356',
      birthday: new Date(),
    };

    await expect(createUserCase.execute(user)).rejects.toEqual(
      new Error('Usuário já cadastrado.'),
    );
  });
});
