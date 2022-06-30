import { ICreateUserDTO } from '../user/useCases/CreateUser/CreateUserDTO';
import { ICreateUserAddressDTO } from '../address/useCases/CreateUserAddress/CreateAddressDTO';

const mockUser: ICreateUserDTO = {
  name: 'Lucas Torres',
  email: 'lucastorres@make2u.com.br',
  password: 'liven123',
  birthday: new Date(),
};

const mockAddress: ICreateUserAddressDTO = {
  userId: 'userId',
  zipCode: '13560-049',
  address: 'Rua Episcopal, 2116B',
  complement: 'Centro',
  state: 'SP',
  city: 'São Carlos',
  country: 'BR',
};

export { mockUser, mockAddress };
