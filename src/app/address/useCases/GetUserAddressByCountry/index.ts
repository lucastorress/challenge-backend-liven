import InMemoryAddressRepositoryInstance from '../../repositories/in-memory/InMemoryAddressRepository';
import { GetAddressUseCase } from './GetAddressUseCase';
import GetAddressController from './GetAddressController';

const addressRepository = InMemoryAddressRepositoryInstance;
const getUserAddressByCountryUseCase = new GetAddressUseCase(addressRepository);
const getUserAddressByCountryController = new GetAddressController(
  getUserAddressByCountryUseCase,
);

export { getUserAddressByCountryUseCase, getUserAddressByCountryController };
