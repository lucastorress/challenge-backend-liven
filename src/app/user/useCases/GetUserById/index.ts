import InMemoryUsersRepositoryInstance from '../../repositories/in-memory/InMemoryUsersRepository';
import InMemoryAddressesRepositoryInstance from '../../../address/repositories/in-memory/InMemoryAddressRepository';
import { GetUserWithAddressesUseCase } from './GetUserWithAddressesUseCase';
import GetUserController from './GetUserController';

const memoryUserRepository = InMemoryUsersRepositoryInstance;
const memoryAddressRepository = InMemoryAddressesRepositoryInstance;

const getUserWithAddressesUseCase = new GetUserWithAddressesUseCase(
  memoryUserRepository,
  memoryAddressRepository,
);

const getUserController = new GetUserController(getUserWithAddressesUseCase);

export { getUserWithAddressesUseCase, getUserController };
