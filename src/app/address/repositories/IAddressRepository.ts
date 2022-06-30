import { Address, AddressProps } from '../entities/Address';
import IRepository from '../../shared/IRepository';

export default interface IAddressRepository
  extends IRepository<AddressProps, Address> {
  findByUserId(userId: string): Promise<Address[] | null>;
  findByCountry(country: string): Promise<Address[] | null>;
}
