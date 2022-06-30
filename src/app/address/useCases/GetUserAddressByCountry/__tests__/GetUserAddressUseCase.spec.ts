import InMemoryAddressRepositoryInstance from '../../../repositories/in-memory/InMemoryAddressRepository';
import InMemoryUsersRepositoryInstance from '../../../../user/repositories/in-memory/InMemoryUsersRepository';
import IAddressRepository from '../../../repositories/IAddressRepository';
import IUserRepository from '../../../../user/repositories/IUsersRepository';
import { GetAddressUseCase } from '../GetAddressUseCase';
import { mockUser, mockAddress } from '../../../../shared/TestMock';
import { User } from '../../../../user/entities/User';

describe('Unit test: Get User Address by Country [Use Case]', () => {
  let usersRepository: IUserRepository;
  let addressRepository: IAddressRepository;
  let getAddressUseCase: GetAddressUseCase;
  let user: User;
  let userId: string;
  let country: string;

  beforeAll(async () => {
    usersRepository = InMemoryUsersRepositoryInstance;
    addressRepository = InMemoryAddressRepositoryInstance;
    getAddressUseCase = new GetAddressUseCase(addressRepository);

    user = await usersRepository.save(mockUser);

    const mockAddress1 = {
      ...mockAddress,
      userId: user.id,
    };

    await addressRepository.save(mockAddress1);

    userId = user.id;
    country = mockAddress.country;
  });

  it('should be able to get an existent address filtered only by userId', async () => {
    const address = await getAddressUseCase.execute({ userId });
    expect(address).toHaveLength(1);
  });

  it('should be able to get an existent address filtered only by country', async () => {
    const address = await getAddressUseCase.execute({ country });
    expect(address).toHaveLength(1);
    expect(address[0]).toHaveProperty('country', 'BR');
  });

  it('should be able to get an existent address filtered by userId and country', async () => {
    const mockAddress2 = {
      ...mockAddress,
      country: 'PT',
      userId: user.id,
    };

    await addressRepository.save(mockAddress2);

    const address = await getAddressUseCase.execute({ userId, country });
    expect(address).toHaveLength(1);
  });

  it('should not be able to get an address filtered by userId and country unregistered', async () => {
    const address = await getAddressUseCase.execute({ userId, country: 'US' });
    expect(address).toHaveLength(0);
  });

  it('should not be able to get an address filtered by country and userId unregistered', async () => {
    const address = await getAddressUseCase.execute({
      userId: 'unreal',
      country,
    });
    expect(address).toHaveLength(0);
  });
});
