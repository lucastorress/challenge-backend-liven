import InMemoryUsersRepositoryInstance from '../../repositories/in-memory/InMemoryUsersRepository';
import { DeleteUserUseCase } from './DeleteUserUseCase';
import DeleteUserController from './DeleteUserController';

const memoryUserRepository = InMemoryUsersRepositoryInstance;
const deleteUserUseCase = new DeleteUserUseCase(memoryUserRepository);

const deleteUserController = new DeleteUserController(deleteUserUseCase);

export { deleteUserUseCase, deleteUserController };
