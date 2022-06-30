import { Address, AddressProps } from '../../entities/Address';
import IAddressRepository from '../IAddressRepository';

class InMemoryAddressRepository implements IAddressRepository {
  private static instance: InMemoryAddressRepository;
  public items: Address[];

  private constructor() {
    this.items = [];
  }

  public static getInstance(): InMemoryAddressRepository {
    if (!InMemoryAddressRepository.instance) {
      InMemoryAddressRepository.instance = new InMemoryAddressRepository();
    }

    return InMemoryAddressRepository.instance;
  }

  async findById(id: string): Promise<Address | null> {
    const Address = this.items.find((Address) => Address.id === id);

    if (!Address) {
      return null;
    }

    return Address;
  }

  async findByUserId(userId: string): Promise<Address[]> {
    const address = this.items.filter((address) => address.userId === userId);

    if (!address) {
      return null;
    }

    return address;
  }

  async findByCountry(country: string): Promise<Address[]> {
    const address = this.items.filter((address) => address.country === country);

    if (!address) {
      return null;
    }

    return address;
  }

  async save(address: AddressProps): Promise<Address> {
    const newAddress = Address.create(address);
    this.items.push(newAddress);
    return newAddress;
  }

  async update(id: string, address: AddressProps): Promise<Address> {
    const addressIndex = this.items.findIndex((address) => address.id === id);
    const addressUpdated = Address.create(address);
    this.items[addressIndex] = addressUpdated;
    return addressUpdated;
  }

  async remove(id: string): Promise<boolean> {
    const AddressIndex = this.items.findIndex((Address) => Address.id === id);

    if (AddressIndex > -1) {
      this.items.splice(AddressIndex, 1);
      return true;
    }

    return false;
  }
}

export default InMemoryAddressRepository.getInstance();
