import InMemoryUsersRepositoryInstance from '../../repositories/in-memory/InMemoryUsersRepository';
import { GetUserUseCase } from './GetUserUseCase';
import GetUserController from './GetUserController';

const memoryUserRepository = InMemoryUsersRepositoryInstance;
const getUserUseCase = new GetUserUseCase(memoryUserRepository);

const getUserController = new GetUserController(getUserUseCase);

export { getUserUseCase, getUserController };
