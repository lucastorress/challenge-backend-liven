import { AddressProps } from '../../entities/Address';

export type ICreateUserAddressDTO = Omit<AddressProps, 'id'>;
