import InMemoryAddressRepositoryInstance from '../../repositories/in-memory/InMemoryAddressRepository';
import { GetAddressUseCase } from './GetAddressUseCase';
import GetAddressController from './GetAddressController';

const addressRepository = InMemoryAddressRepositoryInstance;
const getUserAddressByIdUseCase = new GetAddressUseCase(addressRepository);
const getUserAddressByIdController = new GetAddressController(
  getUserAddressByIdUseCase,
);

export { getUserAddressByIdUseCase, getUserAddressByIdController };
