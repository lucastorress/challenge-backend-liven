import InMemoryAddressRepositoryInstance from '../../repositories/in-memory/InMemoryAddressRepository';
import InMemoryUserRepositoryInstance from '../../../user/repositories/in-memory/InMemoryUsersRepository';
import { CreateAddressUseCase } from './CreateAddressUseCase';
import CreateAddressController from './CreateAddressController';

const addressRepository = InMemoryAddressRepositoryInstance;
const userRepository = InMemoryUserRepositoryInstance;

const createAddressUseCase = new CreateAddressUseCase(
  addressRepository,
  userRepository,
);

const createAddressController = new CreateAddressController(
  createAddressUseCase,
);

export { createAddressUseCase, createAddressController };
