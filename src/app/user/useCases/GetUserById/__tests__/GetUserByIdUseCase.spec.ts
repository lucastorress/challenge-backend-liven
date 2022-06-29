import { ICreateUserDTO } from '../../CreateUser/CreateUserDTO';
import InMemoryUsersRepositoryInstance from '../../../repositories/in-memory/InMemoryUsersRepository';
import IUserRepository from '../../../repositories/IUsersRepository';
import { GetUserUseCase } from '../GetUserUseCase';
import { CreateUserUseCase } from '../../CreateUser/CreateUserUseCase';

const mockUser: ICreateUserDTO = {
  name: 'Lucas Torres',
  email: 'lucastorres@make2u.com.bsr',
  password: 'liven123',
  birthday: new Date(),
};

describe('Unit test: Get User [Use Case]', () => {
  let usersRepository: IUserRepository;
  let getUserCase: GetUserUseCase;
  let id: string;

  beforeAll(async () => {
    usersRepository = InMemoryUsersRepositoryInstance;
    getUserCase = new GetUserUseCase(usersRepository);
    const createUserCase = new CreateUserUseCase(usersRepository);

    const user = await createUserCase.execute(mockUser);
    id = user.id;
  });

  it('should be able to get an existent user by id', async () => {
    const user = await getUserCase.execute({ id });

    expect(user).toHaveProperty('id', id);
  });
});
