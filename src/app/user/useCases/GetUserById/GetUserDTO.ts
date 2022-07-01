import { AddressProps } from 'app/address/entities/Address';
import { UserProps } from '../../entities/User';

export type IGetUserRequestDTO = {
  id: string;
};

export interface IGetUserResponseDTO extends UserProps {
  addresses: AddressProps[];
}
