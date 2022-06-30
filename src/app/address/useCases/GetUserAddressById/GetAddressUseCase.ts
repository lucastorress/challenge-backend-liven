import IAddressRepository from '../../repositories/IAddressRepository';
import { IGetUserAddressByIdDTO } from './GetAddressDTO';

export class GetAddressUseCase {
  constructor(private repository: IAddressRepository) {}

  public async execute(props: IGetUserAddressByIdDTO) {
    const addressesFilteredByUserId = await this.repository.findByUserId(
      props.userId,
    );

    const addressFilteredById = await this.repository.findById(props.id);

    if (addressesFilteredByUserId.length === 0) {
      throw new Error('Este usuário não possui endereços cadastrados.');
    } else if (addressFilteredById?.userId !== props.userId) {
      throw new Error('Este endereço pertence a outro usuário.');
    }

    return addressFilteredById.valueOf();
  }
}
