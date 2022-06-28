import { InMemoryUserRepository } from './InMemoryUserRepository';

describe('inMemory User Repository', () => {
  it('should be able to create a new user', async () => {
    const memoryRepository = new InMemoryUserRepository();

    const user = await memoryRepository.saveUser({
      name: 'Lucas Torres',
      email: 'lucastorres@make2u.com.br',
      password: 'liven123',
      birthday: new Date(),
    });

    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('props.name', 'Lucas Torres');
    expect(user).toHaveProperty('props.email', 'lucastorres@make2u.com.br');
    expect(user).toHaveProperty('props.password', 'liven123');
  });

  it('should be able to find a user that already exists', async () => {
    const memoryRepository = new InMemoryUserRepository();

    await memoryRepository.saveUser({
      name: 'Lucas Torres',
      email: 'lucastorres@make2u.com.br',
      password: 'liven123',
      birthday: new Date(),
    });

    const findUser = await memoryRepository.findUserByEmail(
      'lucastorres@make2u.com.br',
    );

    expect(findUser).toHaveProperty('id');
    expect(findUser).toHaveProperty('props.name', 'Lucas Torres');
    expect(findUser).toHaveProperty('props.email', 'lucastorres@make2u.com.br');
    expect(findUser).toHaveProperty('props.password', 'liven123');
  });
});
