import IAddressRepository from '../../../address/repositories/IAddressRepository';
import IUsersRepository from '../../repositories/IUsersRepository';
import { IGetUserRequestDTO, IGetUserResponseDTO } from './GetUserDTO';

export class GetUserWithAddressesUseCase {
  constructor(
    private repository: IUsersRepository,
    private addressRepository: IAddressRepository,
  ) {}

  public async execute(props: IGetUserRequestDTO) {
    const user = await this.repository.findById(props.id);

    if (!user) {
      throw new Error('Usuário não encontrado.');
    }

    const userAddresses = await this.addressRepository.findByUserId(props.id);
    const addresses = userAddresses.map((address) => address.valueOf());

    const userModified: IGetUserResponseDTO = {
      ...user.valueOf(),
      addresses,
    };

    return userModified;
  }
}
