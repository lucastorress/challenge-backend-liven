import InMemoryAddressRepositoryInstance from '../../repositories/in-memory/InMemoryAddressRepository';
import { UpdateAddressUseCase } from './UpdateAddressUseCase';
import UpdateAddressController from './UpdateAddressController';

const addressRepository = InMemoryAddressRepositoryInstance;
const updateUserAddressUseCase = new UpdateAddressUseCase(addressRepository);
const updateUserAddressController = new UpdateAddressController(
  updateUserAddressUseCase,
);

export { updateUserAddressUseCase, updateUserAddressController };
