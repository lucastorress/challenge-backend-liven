import InMemoryAddressRepositoryInstance from '../../repositories/in-memory/InMemoryAddressRepository';
import { DeleteAddressUseCase } from './DeleteAddressUseCase';
import DeleteAddressController from './DeleteAddressController';

const addressRepository = InMemoryAddressRepositoryInstance;
const deleteUserAddressUseCase = new DeleteAddressUseCase(addressRepository);
const deleteUserAddressController = new DeleteAddressController(
  deleteUserAddressUseCase,
);

export { deleteUserAddressUseCase, deleteUserAddressController };
