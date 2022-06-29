import { ICreateUserDTO } from 'app/user/useCases/CreateUser/CreateUserDTO';

const mockUser: ICreateUserDTO = {
  name: 'Lucas Torres',
  email: 'lucastorres@make2u.com.br',
  password: 'liven123',
  birthday: new Date(),
};

export { mockUser };
