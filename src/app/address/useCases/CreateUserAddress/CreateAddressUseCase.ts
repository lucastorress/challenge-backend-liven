import IAddressRepository from '../../repositories/IAddressRepository';
import { ICreateUserAddressDTO } from './CreateAddressDTO';
import IUserRepository from '../../../user/repositories/IUsersRepository';

export class CreateAddressUseCase {
  constructor(
    private repository: IAddressRepository,
    private userRepository: IUserRepository,
  ) {}

  public async execute(props: ICreateUserAddressDTO) {
    const isUserRegistered = await this.userRepository.findById(props.userId);

    if (!isUserRegistered) {
      throw new Error('Usuário não encontrado.');
    }

    const address = await this.repository.save(props);

    return address.valueOf();
  }
}
