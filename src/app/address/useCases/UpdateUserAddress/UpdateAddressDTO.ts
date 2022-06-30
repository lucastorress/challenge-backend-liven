import { AddressProps } from '../../entities/Address';

export type IUpdateUserAddressDTO = {
  id: string;
  userId: string;
  body: Omit<AddressProps, 'id' | 'userId'>;
};
