import IAddressRepository from '../../repositories/IAddressRepository';
import { IUpdateUserAddressDTO } from './UpdateAddressDTO';

export class UpdateAddressUseCase {
  constructor(private repository: IAddressRepository) {}

  public async execute(props: IUpdateUserAddressDTO) {
    const addressesFilteredByUserId = await this.repository.findByUserId(
      props.userId,
    );

    const addressFilteredById = await this.repository.findById(props.id);

    if (addressesFilteredByUserId.length === 0) {
      throw new Error('Este usuário não possui endereços cadastrados.');
    } else if (addressFilteredById?.userId !== props.userId) {
      throw new Error('Este endereço pertence a outro usuário.');
    }

    return await this.repository.update(props.id, {
      userId: props.userId,
      ...props.body,
    });
  }
}
