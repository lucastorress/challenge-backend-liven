import IAddressRepository from '../../repositories/IAddressRepository';
import { IGetUserAddressByCountryDTO } from './GetAddressDTO';
import { AddressProps } from '../../entities/Address';

export class GetAddressUseCase {
  constructor(private repository: IAddressRepository) {}

  public async execute(
    props: IGetUserAddressByCountryDTO,
  ): Promise<AddressProps[]> {
    const addressFilteredByUserId = await this.repository.findByUserId(
      props.userId,
    );
    const addressFilteredByCountry = await this.repository.findByCountry(
      props.country,
    );
    let addresses;

    if (props.userId && props.country) {
      addresses = addressFilteredByUserId.filter((address) =>
        addressFilteredByCountry.includes(address),
      );
    } else if (props.userId) {
      addresses = addressFilteredByUserId;
    } else if (props.country) {
      addresses = addressFilteredByCountry;
    }

    addresses = addresses.map((address) => address.valueOf());

    return addresses;
  }
}
