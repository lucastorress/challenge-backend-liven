import InMemoryUsersRepositoryInstance from '../../../repositories/in-memory/InMemoryUsersRepository';
import InMemoryAddressesRepositoryInstance from '../../../../address/repositories/in-memory/InMemoryAddressRepository';

import IUserRepository from '../../../repositories/IUsersRepository';
import IAddressRepository from '../../../../address/repositories/IAddressRepository';

import { GetUserWithAddressesUseCase } from '../GetUserWithAddressesUseCase';

import { CreateUserUseCase } from '../../CreateUser/CreateUserUseCase';
import { CreateAddressUseCase } from '../../../../address/useCases/CreateUserAddress/CreateAddressUseCase';

import { mockUser, mockAddress } from '../../../../shared/TestMock';

describe('Unit test: Get User [Use Case]', () => {
  let usersRepository: IUserRepository;
  let addressesRepository: IAddressRepository;
  let getUserWithAddressesUseCase: GetUserWithAddressesUseCase;
  let createUserAddressUseCase: CreateAddressUseCase;
  let userId: string;

  beforeAll(async () => {
    usersRepository = InMemoryUsersRepositoryInstance;
    addressesRepository = InMemoryAddressesRepositoryInstance;
    getUserWithAddressesUseCase = new GetUserWithAddressesUseCase(
      usersRepository,
      addressesRepository,
    );

    const createUserUseCase = new CreateUserUseCase(usersRepository);

    createUserAddressUseCase = new CreateAddressUseCase(
      addressesRepository,
      usersRepository,
    );

    const user = await createUserUseCase.execute(mockUser);
    userId = user.id;
  });

  it('should be able to get an existent user by id and receive addresses void', async () => {
    const user = await getUserWithAddressesUseCase.execute({ id: userId });

    expect(user).toHaveProperty('id', userId);
    expect(user.addresses).toHaveLength(0);
  });

  it('should be able to get an existent user by id and receive existent addresses', async () => {
    const userAddress = {
      ...mockAddress,
      userId,
    };
    await createUserAddressUseCase.execute(userAddress);
    const user = await getUserWithAddressesUseCase.execute({ id: userId });

    expect(user).toHaveProperty('id', userId);
    expect(user.addresses).toHaveLength(1);
    expect(user.addresses[0]).toHaveProperty('id');
    expect(user.addresses[0]).toHaveProperty('country');
  });
});
