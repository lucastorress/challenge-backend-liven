import InMemoryUsersRepositoryInstance from '../../repositories/in-memory/InMemoryUsersRepository';
import { UpdateUserUseCase } from './UpdateUserUseCase';
import UpdateUserController from './UpdateUserController';

const memoryUserRepository = InMemoryUsersRepositoryInstance;
const updateUserUseCase = new UpdateUserUseCase(memoryUserRepository);

const updateUserController = new UpdateUserController(updateUserUseCase);

export { updateUserUseCase, updateUserController };
