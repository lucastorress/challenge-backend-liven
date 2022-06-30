import InMemoryAddressRepositoryInstance from '../../../repositories/in-memory/InMemoryAddressRepository';
import InMemoryUsersRepositoryInstance from '../../../../user/repositories/in-memory/InMemoryUsersRepository';
import IAddressRepository from '../../../repositories/IAddressRepository';
import IUserRepository from '../../../../user/repositories/IUsersRepository';
import { CreateAddressUseCase } from '../CreateAddressUseCase';
import { ICreateUserAddressDTO } from '../CreateAddressDTO';
import { mockUser, mockAddress } from '../../../../shared/TestMock';
import { User } from '../../../../user/entities/User';

describe('Unit test: Create User Address [Use Case]', () => {
  let usersRepository: IUserRepository;
  let addressRepository: IAddressRepository;
  let createAddressUseCase: CreateAddressUseCase;
  let user: User;

  beforeAll(async () => {
    usersRepository = InMemoryUsersRepositoryInstance;
    addressRepository = InMemoryAddressRepositoryInstance;
    createAddressUseCase = new CreateAddressUseCase(
      addressRepository,
      usersRepository,
    );

    user = await usersRepository.save(mockUser);
  });

  it('should be able to create a new address with an existing user', async () => {
    const mock: ICreateUserAddressDTO = {
      ...mockAddress,
      userId: user.id,
    };

    const address = await createAddressUseCase.execute(mock);

    expect(address).toHaveProperty('id');
    expect(address).toHaveProperty('state', 'SP');
    expect(address).toHaveProperty('city', 'São Carlos');
    expect(address).toHaveProperty('country', 'BR');
  });

  it('should not be able to create a new address with an unregistered user', async () => {
    await expect(createAddressUseCase.execute(mockAddress)).rejects.toEqual(
      new Error('Usuário não encontrado.'),
    );
  });
});
